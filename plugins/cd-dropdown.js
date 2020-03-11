/**
 * Toggle the visibility of a dropdown.
 */
function toggle (toggler, collapse) {
  const element = toggler.nextElementSibling;
  if (element) {
    const expanded = collapse || toggler.getAttribute('aria-expanded') === 'true';

    // Switch the expanded/collapsed states.
    toggler.setAttribute('aria-expanded', !expanded);
    element.setAttribute('data-cd-hidden', expanded);

    // Switch the labels.
    const labelWrapper = toggler.querySelector('[data-cd-label-switch]');
    if (labelWrapper) {
      const label = labelWrapper.getAttribute('data-cd-label-switch');
      labelWrapper.setAttribute('data-cd-label-switch', labelWrapper.textContent);
      labelWrapper.textContent = label;
    }

    // Change the focus when expanded if a target is specified.
    if (element.hasAttribute('data-cd-focus-target') && !expanded) {
      const target = this.document.getElementById(element.getAttribute('data-cd-focus-target'));
      if (target) {
        target.focus();
      }
    }
  }
}

/**
 * Collapse all dropdowns.
 */
function collapseAll (exceptions) {
  const elements = document.querySelectorAll('[aria-expanded="true"]');
  exceptions = exceptions || [];

  elements.forEach(function (element) {
    // Elements can be directed to stay open in two ways:
    //  * We can apply an attribute directly in DOM
    //  * We can mark it as an exception when calling this function
    //
    // If neither apply, then close the element.
    if (!element.hasAttribute('data-cd-toggable-keep') && exceptions.includes(element) === -1) {
      toggle(element, true);
    }
  });
}

/**
 * Get the togglable parents of the toggler element.
 */
function getToggableParents (element) {
  const elements = [];
  const body = document.body;
  while (element && element !== body) {
    if (element.hasAttribute && element.hasAttribute('data-cd-toggable')) {
      element = element.previousElementSibling;
    }
    // Store the toggling button of the togglable parent so that it can
    // be ignored when collapsing the opened toggables.
    if (element.hasAttribute && element.hasAttribute('data-cd-toggler')) {
      elements.push(element);
    }
    element = element.parentNode;
  }
  return elements;
}

/**
* Handle toggling of toggable elements.
*/
function handleToggle (event) {
  const target = event.currentTarget;
  if (target) {
    collapseAll(getToggableParents(target));
    toggle(target);
  }
  event.preventDefault();
  event.stopPropagation();
}

/**
 * Handle togglable element visibility when pressing escape.
 *
 * Hide a toggable element when escape is pressed and the focus is on it
 * or on its toggler.
 *
 * This is to meet the WCAG 2.1 1.4.13: Content on Hover or Focus
 * criterion.
 *
 * @see https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html
 */
function handleEscape (event) {
  const key = event.which || event.keyCode;
  // Escape.
  if (key === 27) {
    const target = event.currentTarget;
    // Toggable element, get the toggling button.
    if (!target.hasAttribute('data-cd-toggler')) {
      target = target.previousElementSibling;
    }
    // Focus the button and hide the content.
    if (target && target.hasAttribute('data-cd-toggler')) {
      target.focus();
      toggle(target, true);
    }
  }
}

/**
 * Handle global clicks outside of toggable elements, close them in this case.
 */
function handleClickAway (event) {
  const target = event.target;
  if (target) {
    if (target.nodeName === 'A') {
      collapseAll();
    } else if (target.hasAttribute) {
      const body = document.body;
      while (target && target.hasAttribute && !target.hasAttribute('aria-expanded') && !target.hasAttribute('data-cd-hidden') && target !== body) {
        target = target.parentNode;
      }
      if (target && target.hasAttribute && !target.hasAttribute('aria-expanded') && !target.hasAttribute('data-cd-hidden')) {
        collapseAll();
      }
    }
  }
}

/**
 * Create a svg icon.
 */
function createIcon (name, component, wrap) {
  const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#cd-icon--' + name);
  svgElem.setAttribute('class', 'cd-icon cd-icon--' + name);
  svgElem.appendChild(useElem);

  if (component && wrap) {
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', component + '__logo');
    wrapper.appendChild(svgElem);
    return wrapper;
  }
  return svgElem;
}

/**
 * Create a button to toggle a dropdown.
 */
function createButton (element) {
  const label = element.getAttribute('data-cd-toggable');
  const logo = element.getAttribute('data-cd-logo');
  const icon = element.getAttribute('data-cd-icon');
  const component = element.getAttribute('data-cd-component');

  // Create the button.
  const button = document.createElement('button');
  button.setAttribute('type', 'button');

  // Pre-label logo.
  if (logo) {
    button.appendChild(createIcon(logo, component, true));
  }

  // Button label.
  const labelWrapper = document.createElement('span');
  labelWrapper.appendChild(document.createTextNode(label));
  button.appendChild(labelWrapper);

  // Post-label icon.
  if (icon) {
    button.appendChild(createIcon(icon));
  }

  // BEM for class selectors.
  if (component) {
    button.setAttribute('class', component + '__btn');
    labelWrapper.setAttribute('class', component + '__btn-label');
  }

  // Do not collapse the dropdown when clicking outside.
  if (element.hasAttribute('data-cd-toggable-keep')) {
    button.setAttribute('data-cd-toggable-keep', '');
  }

  // Alternate label for when the button is expanded.
  if (element.hasAttribute('data-cd-toggable-expanded')) {
    labelWrapper.setAttribute('data-cd-label-switch', element.getAttribute('data-cd-toggable-expanded'));
  }

  return button;
}

/**
 * Transform the element into a dropdown menu.
 */
function setToggable (element, toggler) {
  const expand = element.hasAttribute('data-cd-toggable-expand') || false;

  // Create a button to toggle the element.
  if (!toggler) {
    toggler = createButton(element);
  } else if (toggler.nodeName !== 'BUTTON') {
  // Or ensure the toggler has the "button" role.
  //
  // @todo ensure that `space` and `enter` trigger the toggling?
    toggler.setAttribute('role', 'button');
  }

  // Set the toggling attributes of the toggler.
  toggler.setAttribute('data-cd-toggler', '');
  toggler.setAttribute('aria-expanded', expand !== false);
  toggler.setAttribute('aria-haspopup', true);

  // For better conformance with the aria specs though it doesn't do
  // much in most screen reader right now (2020/01), we had the
  // `aria-controls` attribute.
  //
  // @todo generate an id for the toggable element if it has none?
  if (element.hasAttribute('id')) {
    toggler.setAttribute('aria-controls', element.getAttribute('id'));
  }

  // Add toggling function.
  toggler.addEventListener('click', handleToggle);

  // Collapse when pressing scape.
  toggler.addEventListener('keydown', handleEscape);
  element.addEventListener('keydown', handleEscape);

  // Mark the element as toggable so that it can be handled properly
  // by the global click handler.
  if (!element.hasAttribute('data-cd-toggable')) {
    element.setAttribute('data-cd-toggable', '');
  }

  // Hide the element.
  element.setAttribute('data-cd-hidden', expand === false);

  // Add the toggler before the toggable element id not already.
  if (element.previousElementSibling !== toggler) {
    element.parentNode.insertBefore(toggler, element);
  }
}

/**
 * Initialize the toggable menus, adding a togggle button and event handling.
 */
function initializeToggables () {
  const elements = document.querySelectorAll('[data-cd-toggable]');
  for (const i = 0, l = elements.length; i < l; i++) {
    setToggable(elements[i]);
  }
}

/**
 * Update Drupal toggable nested menus.
 */
function updateDrupalTogglableMenus (selector) {
  // If selector wasn't supplied, set the default.
  selector = typeof selector !== 'undefined' ? selector : '.cd-nav .menu button + .menu';

  const elements = document.querySelectorAll(selector);
  for (const i = 0, l = elements.length; i < l; i++) {
    const element = elements[i];
    this.setToggable(element, element.previousElementSibling);
  }
}

/**
 * Main logic.
 */
if (document.documentElement.classList.contains('js')) {
  // Collapse popups when clicking outside of the toggable target.
  document.addEventListener('click', handleClickAway);

  // Initialize toggable menus and listboxes.
  initializeToggables();

  // Update nested Drupal menus in the header.
  updateDrupalTogglableMenus();
}
