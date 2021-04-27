// import { mapState } from 'vuex'

export default {
  data() {
    return { followLoading: false }
  },
  // computed: {
  //   ...mapState(['UserInfo']),
  //   //
  //   isSignedIn() {
  //     return 'token' in this.UserInfo
  //   },
  // },
  methods: {
    // 关注、取关
    async handleFollowSomebody(authorInfo, callback = () => {}) {
      if (this.isSignedIn) {
        this.followLoading = true
        const { following, username } = authorInfo

        following
          ? await this.$axios.$delete(`profiles/${username}/follow`)
          : await this.$axios.$post(`profiles/${username}/follow`)

        this.followLoading = false
        callback()
      } else {
        this.$router.push('/sign-in')
      }
    },
  },
}
