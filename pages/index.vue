<template>
  <div class="cd-layout-container">
    <header class="cd-header">
      <CommonHeaderGlobal />
      <CommonHeaderSite />
    </header>

    <main role="main" class="cd-container">
      <a id="main-content" tabindex="-1"></a>
      <div class="cd-layout-content">
        <div v-for="(blogPost, index) in blogPosts" :key="index">
          <nuxt-link :to="`blog/${blogPost.slug}`">{{blogPost.title}}</nuxt-link>
          <p>{{blogPost.description}}</p>
        </div>
      </div>
    </main>

    <CommonFooter />
    <CDiconSprite />
  </div>
</template>
<script>
import CommonHeaderGlobal from '~/components/CommonHeaderGlobal.vue';
import CommonHeaderSite from '~/components/CommonHeaderSite.vue';
import CommonFooter from '~/components/CommonFooter.vue';
import CDiconSprite from '~/components/CDiconSprite.vue';

export default {
  components: {
    CommonHeaderGlobal,
    CommonHeaderSite,
    CommonFooter,
    CDiconSprite,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style>

</style>
