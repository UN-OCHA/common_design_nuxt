<template>
  <div class="cd-site-header">
    <div class="cd-container cd-site-header__inner">

      <logo />

      <div class="cd-site-header__actions">
        <!-- Search can go here -->

        <div class="cd-site-header__nav-holder">
          <h2 id="block-mainnavigation-menu" class="visually-hidden">Main navigation</h2>
          <nav id="cd-site-header__nav" role="navigation" aria-labelledby="cd-nav-toggle" data-cd-toggable="Menu" data-cd-component="cd-nav" data-cd-hidden="true" data-cd-icon="arrow-down" class="menu--main cd-nav">
            <ul class="menu">
              <li class="menu-item menu-item--active-trail">
                <a href="/node" data-drupal-link-system-path="node" class="is-active">Common design</a>
              </li>
              <li class="menu-item menu-item--expanded">
                <button data-cd-toggler="true" aria-expanded="false" aria-haspopup="true">
                  <span class="cd-main-menu__btn-label">Menu item parent</span>
                  <svg class="cd-icon cd-icon--arrow-down">
                    <use xlink:href="#cd-icon--arrow-down"></use>
                  </svg>
                </button>
                <ul class="menu">
                  <li class="menu-item">
                    <a href="/node/1" data-drupal-link-system-path="node/1">Menu item child</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
}
</script>
