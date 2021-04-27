<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <ul class="error-messages" v-show="errorVisible">
            <li v-for="(value, key) in errorList" :key="key">
              {{ key + " " + value }}
            </li>
          </ul>
          <form @submit.prevent="handleSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userInfoTemp.image"
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  :disabled="submitLoading"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userInfoTemp.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  :disabled="submitLoading"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="userInfoTemp.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  :disabled="submitLoading"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userInfoTemp.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  :disabled="submitLoading"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userInfoTemp.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  :disabled="submitLoading"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                :disabled="submitLoading"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="handleSignOut">
            Or click here to sign out.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Settings",
  data() {
    return {
      userInfoTemp: {},
      //
      submitLoading: false,
      //
      errorVisible: false,
      errorList: {},
    };
  },
  computed: {
    ...mapState(["UserInfo"]),
  },
  watch: {
    "$store.state.UserInfo": {
      immediate: true,
      handler(val) {
        if (Object.keys(val).length)
          this.userInfoTemp = Object.assign({ password: "" }, val);
      },
    },
  },
  methods: {
    //
    handleSubmit() {
      this.errorVisible = false;
      this.submitLoading = true;
      //
      this.$axios
        .$put("user", {
          user: this.userInfoTemp,
        })
        .then(({ user }) => {
          this.$store.commit("setUserInfo", user);
          this.$router.push("/@" + user.username);
        })
        .catch(({ errors }) => {
          this.errorList = errors;
          this.errorVisible = true;
        })
        .finally(() => {
          this.submitLoading = false;
        });
    },
    // 登出
    handleSignOut() {
      // 清除 token
      window.localStorage.removeItem("jwtToken");
      // 跳转至首页
      this.$router.push("/");
    },
  },
};
</script>