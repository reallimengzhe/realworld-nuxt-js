export default {
  data() {
    return { favoriteLoading: false }
  },
  methods: {
    // 点赞、取消赞
    async handleLikeArticle(article, callback = () => {}) {
      if (this.isSignedIn) {
        this.favoriteLoading = true

        const { favorited, slug } = article

        favorited
          ? await this.$axios.$delete(`articles/${slug}/favorite`)
          : await this.$axios.$post(`articles/${slug}/favorite`)

        this.favoriteLoading = false
        callback()
      } else {
        this.$router.push('/sign-in')
      }
    },
  },
}
