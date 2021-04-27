<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="handleSubmitArticle">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  :disabled="submitLoading"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  :disabled="submitLoading"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  :disabled="submitLoading"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="tag"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  :disabled="submitLoading"
                  @keyup.enter="handlePushTag"
                />
                <div class="tag-list">
                  <span
                    v-for="tag in article.tagList"
                    class="tag-default tag-pill ng-binding ng-scope"
                  >
                    <i
                      class="ion-close-round"
                      @click="handleRemoveTag(tag)"
                    ></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                :disabled="submitLoading"
                @click="handleSubmitArticle"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      //
      slug: "",
      //
      article: {
        title: "How to train your dragon",
        description: "Ever wonder how?",
        body: "You have to believe",
        tagList: ["reactjs", "angularjs", "dragons"],
      },
      //
      tag: "",
      //
      submitLoading: false,
    };
  },
  created() {
    const { slug } = this.$route.query;
    this.slug = slug;
    this.handleGetArticle();
  },
  methods: {
    //
    async handleGetArticle() {
      const { article } = await this.$axios.$get(`articles/${this.slug}`);
      this.article = article;
    },
    // 添加标签
    handlePushTag() {
      if (this.tag === "") return;
      if (this.article.tagList.includes(this.tag)) return;

      this.article.tagList.push(this.tag);
      this.tag = "";
    },
    // 删除标签
    handleRemoveTag(tag) {
      let index = this.article.tagList.indexOf(tag);
      if (index) this.article.tagList.splice(index, 1);
    },
    // 发表文章
    handleSubmitArticle() {
      this.submitLoading = true;
      this.$axios
        .$post("articles", { article: this.article })
        .then(({ article }) => {
          this.$router.push("/article/" + article.slug);
        })
        .finally(() => {
          this.submitLoading = false;
        });
    },
  },
};
</script>

<style>
</style>