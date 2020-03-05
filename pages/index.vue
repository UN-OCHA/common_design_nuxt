<template>
  <div class="cd-layout-container">
    <header class="cd-header">
      <div class="cd-global-header">
        <div class="cd-container cd-global-header__inner">

          <div class="cd-ocha">

            <div class="cd-global-header__dropdown cd-ocha-dropdown cd-dropdown" role="menu" id="cd-ocha-dropdown" aria-labelledby="cd-ocha-dropdown-toggle" data-cd-toggable="OCHA Services" data-cd-hidden="true" data-cd-icon="arrow-down" data-cd-logo="ocha-logo" data-cd-component="cd-ocha">

              <div class="cd-ocha-dropdown__inner">
                <div class="cd-ocha-dropdown__section">
                  <p class="cd-ocha-dropdown__heading">Related Platforms</p>
                  <ul class="cd-ocha-dropdown__list">
                    <li class="cd-ocha-dropdown__link"><a href="https://example.com">Customizable</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://example.com">Customizable</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://example.com">Customizable</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://example.com">Customizable</a></li>
                  </ul>
                </div>
                <div class="cd-ocha-dropdown__section">
                  <p class="cd-ocha-dropdown__heading">Other OCHA Services</p>
                  <ul class="cd-ocha-dropdown__list">
                    <li class="cd-ocha-dropdown__link"><a href="https://fts.unocha.org/">Financial Tracking Service</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://data.humdata.org/">Humanitarian Data Exchange</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://humanitarian.id/">Humanitarian ID</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://humanitarianresponse.info/">Humanitarian Response</a></li>
                  </ul>
                </div>
                <div class="cd-ocha-dropdown__section">
                  <p class="cd-ocha-dropdown__heading" aria-hidden="true">&nbsp;</p>
                  <ul class="cd-ocha-dropdown__list">
                    <li class="cd-ocha-dropdown__link"><a href="https://interagencystandingcommittee.org">Inter-Agency Standing Committee</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://unocha.org/">OCHA website</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://reliefweb.int/">ReliefWeb</a></li>
                    <li class="cd-ocha-dropdown__link"><a href="https://vosocc.unocha.org/">Virtual OSOCC</a></li>
                  </ul>
                </div>
                <div class="cd-ocha-dropdown__section">
                  <a class="cd-ocha-dropdown__see-all" href="https://www.unocha.org/ocha-digital-services" target="_blank" rel="noopener">See all</a>
                </div>
              </div>
            </div>
          </div>

          <div class="region region-header-top cd-global-header__actions">
            <nav role="navigation" aria-labelledby="cd-user-menu" class="menu--account cd-global-header__user-menu">
              <h2 id="cd-user-menu" class="visually-hidden">User account menu</h2>
              <ul class="menu">
                <svg class="cd-icon cd-icon--user">
                  <use xlink:href="#cd-icon--user"></use>
                </svg>
                <li class="menu-item">
                  <a href="/user/login/hid">Log in</a>
                </li>
              </ul>
            </nav>

            <nav role="navigation" aria-labelledby="cd-help-menu" class="menu--help cd-global-header__user-menu">
              <h2 id="cd-help-menu" class="visually-hidden">Help menu</h2>
              <ul class="menu">
                <li class="menu-item menu-item--expanded">
                  <button data-cd-toggler="true" aria-expanded="false" aria-haspopup="true">
                    <svg class="cd-icon cd-icon--help">
                      <use xlink:href="#cd-icon--help"></use>
                    </svg>
                    <span class="cd-user-menu__btn-label visually-hidden">Help menu</span>
                    <svg class="cd-icon cd-icon--arrow-down">
                      <use xlink:href="#cd-icon--arrow-down"></use>
                    </svg>
                  </button>
                  <ul class="menu cd-global-header__dropdown cd-user-menu__dropdown">
                    <li class="menu-item">
                      <a href="/node/1" data-drupal-link-system-path="node/1">Menu item one</a>
                    </li>
                    <li class="menu-item">
                      <a href="/demo" data-drupal-link-system-path="node/2">Menu item two</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div class="cd-global-header__language-switcher" role="navigation">
              <div class="cd-language-switcher">
                <ul class="links cd-global-header__dropdown cd-dropdown cd-user-menu__dropdown" id="cd-language" aria-labelledby="cd-language-toggle" role="menu" data-cd-toggable="en" data-cd-hidden="true" data-cd-icon="arrow-down" data-cd-component="cd-language-switcher">
                  <li hreflang="en" class="en is-active">
                    <a href="/" class="language-link is-active" hreflang="en">English</a>
                  </li>
                  <li hreflang="nl" class="nl">
                    <a href="/nl" class="language-link" hreflang="nl">Dutch</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

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

    </header>

    <footer class="cd-footer" role="contentinfo">
      <div class="cd-container cd-footer__inner">

        <div class="cd-footer__section cd-footer__section--menu">
          <div class="region region-footer-navigation">
            <nav role="navigation" aria-labelledby="block-footer-menu" id="block-footer" class="block block-menu navigation menu--footer">
              <h2 id="block-footer-menu">Footer</h2>
              <ul class="menu">
                <li class="menu-item">
                  <a href="https://www.un.org/en/sections/about-website/privacy-notice/">Privacy</a>
                </li>
                <li class="menu-item">
                  <a href="https://www.un.org/en/sections/about-website/terms-use/">Terms of use</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="cd-footer__section cd-footer__section--social">

          <a href="###" class="cd-footer-social__link">
            <span class="visually-hidden">Facebook</span>
            <svg class="cd-icon cd-icon--facebook">
              <use xlink:href="#cd-icon--sm-fb-def"></use>
            </svg>
            <svg class="cd-icon cd-icon--facebook hover-style">
              <use xlink:href="#cd-icon--sm-fb-full"></use>
            </svg>
          </a>

          <a href="###" class="cd-footer-social__link">
            <span class="visually-hidden">Twitter</span>
            <svg class="cd-icon cd-icon--twitter">
              <use xlink:href="#cd-icon--sm-tt-def"></use>
            </svg>
            <svg class="cd-icon cd-icon--twitter hover-style">
              <use xlink:href="#cd-icon--sm-tt-full"></use>
            </svg>
          </a>

          <a href="###" class="cd-footer-social__link">
            <span class="visually-hidden">YouTube</span>
            <svg class="cd-icon cd-icon--youtube">
              <use xlink:href="#cd-icon--sm-yt-def"></use>
            </svg>
            <svg class="cd-icon cd-icon--youtube hover-style">
              <use xlink:href="#cd-icon--sm-yt-full"></use>
            </svg>
          </a>

          <a href="###" class="cd-footer-social__link">
            <span class="visually-hidden">LinkedIn</span>
            <svg class="cd-icon cd-icon--linkedin">
              <use xlink:href="#cd-icon--sm-ln-def"></use>
            </svg>
            <svg class="cd-icon cd-icon--linkedin hover-style">
              <use xlink:href="#cd-icon--sm-ln-full"></use>
            </svg>
          </a>

          <a href="###" class="cd-footer-social__link">
            <span class="visually-hidden">Instagram</span>
            <svg class="cd-icon cd-icon--instagram">
              <use xlink:href="#cd-icon--sm-ig-def"></use>
            </svg>
            <svg class="cd-icon cd-icon--instagram hover-style">
              <use xlink:href="#cd-icon--sm-ig-full"></use>
            </svg>
          </a>

          <a href="###" class="cd-footer-social__link">
            <span class="visually-hidden">Github</span>
            <svg class="cd-icon cd-icon--github">
              <use xlink:href="#cd-icon--sm-gh-def"></use>
            </svg>
            <svg class="cd-icon cd-icon--github hover-style">
              <use xlink:href="#cd-icon--sm-gh-full"></use>
            </svg>
          </a>

        </div>
        <div class="cd-footer__section cd-footer__section--mandate">
          <div class="cd-mandate">
            <span class="cd-mandate__heading">Service provided by</span>
            <span class="cd-mandate__logo">
          <span class="visually-hidden">UN-OCHA</span>
        </span>
            <span class="cd-mandate__text">
          OCHA coordinates the global emergency response to save lives and protect people in humanitarian crises. We advocate for effective and principled humanitarian action by all, for all.
        </span>
          </div>
        </div>
        <div class="cd-footer__section cd-footer__section--copyright">
          <div class="cd-footer-copyright">
            <span class="cd-footer-copyright__text">Except where otherwise noted, content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0</a> International license.</span>
            <a class="cd-footer-copyright__link" href="https://creativecommons.org/licenses/by/4.0/">
              <span class="visually-hidden">Creative Commons BY 4.0</span>
              <svg class="cd-icon cd-icon--cc">
                <use xlink:href="#cd-icon--creative-commons"></use>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>

</style>
