<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

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
          <span v-if="UserInfo.username === article.author.username">
            <button
              class="btn btn-outline-secondary btn-sm"
              ui-sref="app.editor({ slug: $ctrl.article.slug })"
              @click="$router.push('/editor?slug=' + article.slug)"
            >
              <i class="ion-edit"></i> Edit Article
            </button>

            <button
              class="btn btn-outline-danger btn-sm"
              @click="handleDeleteArticle"
            >
              <i class="ion-trash-a"></i> Delete Article
            </button>
          </span>
          <span v-if="UserInfo.username !== article.author.username">
            <button
              class="btn btn-sm btn-outline-secondary"
              :disabled="followLoading"
              @click="handleFollowSomebody(article.author, handleGetArticle)"
            >
              <i class="ion-plus-round"></i>
              &nbsp; {{ article.author.following ? "Unfollow" : "Follow" }}
              {{ article.author.username }}
            </button>
            &nbsp;
            <button
              :disabled="favoriteLoading"
              :class="[
                'btn',
                'btn-sm ',
                article.favorited ? 'btn-primary' : 'btn-outline-primary',
              ]"
              @click="handleLikeArticle(article, handleGetArticle)"
            >
              <i class="ion-heart"></i>
              &nbsp; {{ article.favorited ? "Unfavorite" : "Favorite" }} Article
              <span class="counter">({{ article.favoritesCount }})</span>
            </button>
          </span>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <NuxtLink :to="'/@' + article.author.username">
            <img :src="article.author.image" />
          </NuxtLink>
          <div class="info">
            <NuxtLink :to="'/@' + article.author.username" class="author">
              {{ article.author.username }}
            </NuxtLink>
            <span class="date">January 20th</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; {{ article.author.following ? "Unfollow" : "Follow" }}
            {{ article.author.username }}
          </button>
          &nbsp;
          <button
            :disabled="favoriteLoading"
            :class="[
              'btn',
              'btn-sm ',
              article.favorited ? 'btn-primary' : 'btn-outline-primary',
            ]"
            @click="handleLikeArticle(article, handleGetArticle)"
          >
            <i class="ion-heart"></i>
            &nbsp; {{ article.favorited ? "Unfavorite" : "Favorite" }} Article
            <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form" @submit.prevent="handlePostComment">
            <div class="card-block">
              <textarea
                required
                v-model="commentBody"
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
                maxlength="70"
                :disabled="commentSubmitLoading"
              />
            </div>
            <div class="card-footer">
              <img :src="UserInfo.image" class="comment-author-img" />
              <button
                class="btn btn-sm btn-primary"
                :disabled="commentSubmitLoading"
              >
                Post Comment
              </button>
            </div>
          </form>

          <div class="card" v-for="comment in comments" :key="comment.id">
            <div class="card-block">
              <p class="card-text">{{ comment.body }}</p>
            </div>
            <div class="card-footer">
              <NuxtLink
                class="comment-author"
                :to="'/@' + comment.author.username"
              >
                <img :src="comment.author.image" class="comment-author-img" />
              </NuxtLink>
              &nbsp;
              <NuxtLink
                class="comment-author"
                :to="'/@' + comment.author.username"
              >
                {{ comment.author.username }}
              </NuxtLink>
              <span class="date-posted">{{ comment.updatedAt }}</span>
              <span class="mod-options">
                <i
                  class="ion-trash-a"
                  v-if="UserInfo.username === comment.author.username"
                  @click="handleDeleteComment(comment.id)"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FollowMixin from "~/plugins/follow";
import FavoriteMixin from "~/plugins/favorite";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default {
  name: "ArticlePage",
  mixins: [FollowMixin, FavoriteMixin],
  async asyncData({ $axios, params, redirect }) {
    const { slug } = params;
    try {
      const { article } = await $axios.$get(`articles/${slug}`);
      article.body = md.render(article.body);
      return { article, slug };
    } catch {
      redirect("/");
    }
  },
  data() {
    return {
      // 评论列表
      comments: [],
      // 正在撰写的评论
      commentBody: "",
      //
      commentSubmitLoading: false,
    };
  },
  computed: {
    ...mapState(["UserInfo"]),
    //
    isSignedIn() {
      return "token" in this.UserInfo;
    },
  },
  created() {
    this.handleGetComment();
  },
  methods: {
    //
    async handleGetArticle() {
      const { article } = await this.$axios.$get(`articles/${this.slug}`);
      article.body = md.render(article.body);
      this.article = article;
    },
    // 获取评论
    async handleGetComment() {
      const { comments } = await this.$axios.$get(
        `articles/${this.slug}/comments`
      );
      this.comments = comments;
    },
    // 发表评论
    handlePostComment() {
      this.commentSubmitLoading = true;
      this.$axios
        .$post(`articles/${this.slug}/comments`, {
          comment: {
            body: this.commentBody,
          },
        })
        .then(() => {
          this.commentBody = "";
          this.handleGetComment();
        })
        .finally(() => {
          this.commentSubmitLoading = false;
        });
    },
    // 删除评论
    async handleDeleteComment(id) {
      await this.$axios.$delete(`articles/${this.slug}/comments/${id}`);
      this.handleGetComment();
    },
    // 删除文章
    async handleDeleteArticle() {
      await this.$axios.$delete(`articles/${this.slug}`);
      this.$router.push("/");
    },
  },
};
</script>