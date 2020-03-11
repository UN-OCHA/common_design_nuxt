<template>
  <main role="main" class="cd-container">
    <a id="main-content" tabindex="-1"></a>
    <div class="cd-layout-content">
      <div v-for="(blogPost, index) in blogPosts" :key="index">
        <nuxt-link :to="`blog/${blogPost.slug}`">{{blogPost.title}}</nuxt-link>
        <p>{{blogPost.description}}</p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
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
