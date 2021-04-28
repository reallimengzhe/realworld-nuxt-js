<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-show="isSignedIn">
                <a
                  :class="['nav-link', { active: currentFeed === 'Your' }]"
                  @click="handleChangeFeed('Your')"
                >
                  Your Feed
                </a>
              </li>
              <li class="nav-item">
                <span
                  :class="['nav-link', { active: currentFeed === 'Global' }]"
                  @click="handleChangeFeed('Global')"
                >
                  Global Feed
                </span>
              </li>
              <li class="nav-item" v-show="currentFeed === 'Tag'">
                <a
                  :class="['nav-link', { active: currentFeed === 'Tag' }]"
                  @click="handleChangeFeed('Global')"
                >
                  <i class="ion-pound" />&nbsp;
                  {{ currentTag }}
                </a>
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

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a
                class="tag-pill tag-default"
                v-for="tag in tags"
                :key="tag"
                @click="handleCheckTag(tag)"
              >
                {{ tag }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  async asyncData({ $axios }) {
    // Popular Tags
    try {
      let { tags } = await $axios.$get("tags");
      return { tags };
    } catch {
      let tags = [];
      return { tags };
    }
  },
  data() {
    return {
      // 是否已登录
      isSignedIn: false,
      //
      currentFeed: "Global",
      //
      articles: [],
      articlesCount: 0,
      //
      pageLimit: 10,
      pageIndex: 1,
      //
      currentTag: null,
      //
      feedLoading: false,
    };
  },
  watch: {
    // $route: {
    //   // 立即执行
    //   immediate: true,
    //   // 回调
    //   handler() {
    //     console.log(1);
    //   },
    //   // end
    // },
  },
  created() {
    this.isSignedIn = !!(process.client && localStorage.getItem("jwtToken"));
    this.isSignedIn
      ? this.handleChangeFeed("Your")
      : this.handleChangeFeed("Global");
  },
  methods: {
    // 切换 tab
    handleChangeFeed(feed) {
      this.currentTag = null;
      this.currentFeed = feed;
      this.handleGetFeed();
    },
    // 获取文章流
    handleGetFeed() {
      this.feedLoading = true;
      this.articles = [];
      this.articlesCount = 0;
      // 请求参数
      let params = {
        limit: this.pageLimit,
        offset: (this.pageIndex - 1) * this.pageLimit,
        tag: this.currentTag,
        author: null,
        favorited: null,
      };
      // 请求对象
      let request = undefined;
      //
      if (this.currentFeed === "Global" || this.currentFeed === "Tag")
        request = this.$axios.$get("articles", { params });
      if (this.currentFeed === "Your")
        request = this.$axios.$get("articles/feed", { params });

      request
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
      this.handleGetFeed();
    },
    // 选择标签
    handleCheckTag(tag) {
      this.currentFeed = "Tag";
      this.currentTag = tag;

      this.handleGetFeed();
    },
  },
};
</script>
