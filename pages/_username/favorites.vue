<template>
  <div class="profile-page">
    <AuthorBanner :author="username" />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <NuxtLink class="nav-link" :to="'/@' + username">
                  My Articles
                </NuxtLink>
              </li>
              <li class="nav-item">
                <a class="nav-link active"> Favorited Articles </a>
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
  name: "UserFavorites",
  asyncData({ route }) {
    let username = route.path.slice(2).replace("/favorites", "");
    return { username };
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
      favorited: null,
      //
      feedLoading: false,
    };
  },
  created() {
    this.handleGetAuthorFavorited();
  },
  methods: {
    // 获取作者赞过的文章
    handleGetAuthorFavorited() {
      this.feedLoading = true;
      this.articles = [];
      this.articlesCount = 0;
      // articles?favorited=shivam+tomar&limit=5&offset=0
      this.$axios
        .$get("articles", {
          params: {
            favorited: this.username.replace(" ", "+"),
            limit: this.pageLimit,
            offset: (this.pageIndex - 1) * this.pageLimit,
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
      this.handleGetAuthorFavorited();
    },
  },
};
</script>

<style>
</style>