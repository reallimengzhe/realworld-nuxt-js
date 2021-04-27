<template>
  <div class="profile-page">
    <AuthorBanner :author="username" />

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  :to="'/@' + profile.username + '/favorites'"
                >
                  Favorited Articles
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-show="feedLoading">
            Loading articles...
          </div>
          <div
            class="article-preview"
            v-show="!feedLoading && articles.length < 1"
          >
            No articles are here... yet.
          </div>

          <ArticlePreview
            v-for="article in articles"
            :key="article.slug"
            :data="article"
          />

          <nav>
            <ul class="pagination">
              <li
                v-for="pageNumber in Math.ceil(articlesCount / pageLimit)"
                :class="['page-item', { active: pageNumber === pageIndex }]"
                @click="handleCheckPage(pageNumber)"
              >
                <a class="page-link">{{ pageNumber }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserArticle",
  async asyncData({ $axios, route }) {
    // 用户名
    let username = route.path.slice(2);

    // 用户信息
    const { profile } = await $axios.$get(`profiles/${username}`);

    return { username, profile };
  },
  data() {
    return {
      //
      articles: [],
      articlesCount: 0,
      // 分页
      pageLimit: 5,
      pageIndex: 1,
      //
      author: null,
      favorited: null,
      //
      feedLoading: false,
    };
  },
  created() {
    this.author = this.$route.path.slice(2);
    this.handleGetUserArticle();
  },
  methods: {
    // 获取用户文章
    handleGetUserArticle() {
      this.feedLoading = true;
      this.articles = [];
      this.articlesCount = 0;
      //
      this.$axios
        .$get("articles", {
          params: {
            limit: this.pageLimit,
            offset: (this.pageIndex - 1) * this.pageLimit,
            author: this.author,
            favorited: null,
          },
        })
        .then(({ articles, articlesCount }) => {
          this.articles = articles;
          this.articlesCount = articlesCount;
        })
        .finally(() => {
          this.feedLoading = false;
        });
    },
    // 选择页码
    handleCheckPage(index) {
      this.pageIndex = index;
      this.handleGetUserArticle();
    },
  },
};
</script>

<style>
</style>