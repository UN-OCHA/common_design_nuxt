<template>
  <header class="cd-header">
    <CommonHeaderGlobal />
    <CommonHeaderSite />
  </header>
</template>

<script>
import CommonHeaderGlobal from '~/components/CommonHeaderGlobal';
import CommonHeaderSite from '~/components/CommonHeaderSite';

export default {
  components: {
    CommonHeaderGlobal,
    CommonHeaderSite,
  }
};
</script>

<style lang="scss" scoped></style>
