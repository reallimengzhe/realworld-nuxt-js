<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="authorInfo.image" class="user-img" />
          <h4>{{ author }}</h4>
          <p>{{ authorInfo.bio }}</p>
          <NuxtLink
            v-if="isSignedIn && author === UserInfo.username"
            class="btn btn-sm btn-outline-secondary action-btn"
            to="/settings"
          >
            <i class="ion-gear-a"></i> Edit Profile Settings
          </NuxtLink>
          <button
            v-else
            class="btn btn-sm btn-outline-secondary action-btn"
            :disabled="followLoading"
            @click="handleFollowSomebody(authorInfo, handleGetAuthorInfo)"
          >
            <i class="ion-plus-round" />
            &nbsp; {{ authorInfo.following ? "Unfollow" : "Follow" }}
            {{ author }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FollowMixin from "~/plugins/follow";
export default {
  name: "AuthorBanner",
  props: { author: String },
  mixins: [FollowMixin],
  data() {
    return { authorInfo: {} };
  },
  computed: {
    ...mapState(["UserInfo"]),
    //
    isSignedIn() {
      return "token" in this.UserInfo;
    },
  },
  created() {
    this.handleGetAuthorInfo();
  },
  methods: {
    // 获取作者信息
    async handleGetAuthorInfo() {
      const { profile } = await this.$axios.$get(`profiles/${this.author}`);
      this.authorInfo = profile;
    },
  },
};
</script>