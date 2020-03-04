<template>
<div class="cd-layout-container">
    <div class="cd-container">

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
    </div>
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
