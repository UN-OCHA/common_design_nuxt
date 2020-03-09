<template>
  <div class="cd-global-header">
    <div class="cd-container cd-global-header__inner">

      <OchaServices />

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

</template>
<script>
import OchaServices from '~/components/OchaServices.vue';

export default {
  components: {
    OchaServices,
  }
}
</script>
