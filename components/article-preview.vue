<template>
  <div class="article-preview">
    <div class="article-meta">
      <NuxtLink :to="'/@' + article.author.username">
        <img :src="article.author.image" />
      </NuxtLink>
      <div class="info">
        <NuxtLink :to="'/@' + article.author.username" class="author">
          {{ article.author.username }}
        </NuxtLink>
        <span class="date">{{ article.updatedAt }}</span>
      </div>
      <button
        :disabled="isSubmitting"
        :class="[
          'btn',
          'btn-sm',
          'pull-xs-right',
          article.favorited ? 'btn-primary' : 'btn-outline-primary',
          { disabled: isSubmitting },
        ]"
        @click="handleLikeArticle"
      >
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <NuxtLink :to="'/article/' + article.slug" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p v-html="article.body"></p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          class="tag-default tag-pill tag-outline"
          v-for="tag in article.tagList"
        >
          {{ tag }}
        </li>
      </ul>
    </NuxtLink>
  </div>
</template>

<script>
// import MarkdownIt from "markdown-it";
// const md = new MarkdownIt();
export default {
  name: "ArticlePreview",
  props: { data: Object, require: true },
  data() {
    return { article: { author: {} }, isSubmitting: false };
  },
  created() {
    this.article = this.data;
    // this.article.body = md.render(this.article.body);
  },
  methods: {
    // 点赞
    handleLikeArticle() {
      this.isSubmitting = true;

      const { slug, favorited } = this.article;

      let request = favorited
        ? this.$axios.$delete(`articles/${slug}/favorite`)
        : this.$axios.$post(`articles/${slug}/favorite`);

      request
        .then(({ article }) => {
          this.article = article;
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },
  },
};
</script>

<style>
</style>