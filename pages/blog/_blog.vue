<template>
  <div class="cd-layout-container">
    <header class="cd-header">
      <CommonHeaderGlobal />
      <CommonHeaderSite />
    </header>

    <main role="main" class="cd-container">
      <a id="main-content" tabindex="-1"></a>
      <div class="cd-layout-content">

        <article>
          <h1>{{blogPost.title}}</h1>
          <div v-html="$md.render(blogPost.body)" />
        </article>
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
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  }
}
</script>
