<template>
  <main role="main" class="cd-container">
    <a id="main-content" tabindex="-1"></a>
    <div class="cd-layout-content">
      <article>
        <h1>{{blogPost.title}}</h1>
        <div v-html="$md.render(blogPost.body)" />
      </article>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>
