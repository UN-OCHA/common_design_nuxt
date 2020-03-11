<template>
  <div class="cd-layout-container">
    <CommonHeader />
      <nuxt />
    <CommonFooterSoft />
    <CommonFooter />
    <CDiconsSprite />
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader';
import CommonFooter from '~/components/CommonFooter';
import CommonFooterSoft from '~/components/CommonFooterSoft';
import CDiconsSprite from '~/components/CDiconsSprite.vue';

export default {
  components: {
    CommonHeader,
    CommonFooter,
    CommonFooterSoft,
    CDiconsSprite,
  }
};
</script>
