<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <NuxtLink to="/sign-up">Need an account?</NuxtLink>
          </p>

          <ul class="error-messages" v-show="errorVisible">
            <li v-for="(value, key) in errorList" :key="key">
              {{ key + " " + value }}
            </li>
          </ul>

          <form @submit.prevent="handleSignIn">
            <fieldset class="form-group">
              <input
                required
                type="email"
                placeholder="Email"
                class="form-control form-control-lg"
                v-model="user.email"
                :disabled="signInLoading"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                type="password"
                placeholder="Password"
                class="form-control form-control-lg"
                v-model="user.password"
                :disabled="signInLoading"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="signInLoading"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  //
  data() {
    return {
      // 账号密码
      user: { email: "", password: "" },
      // 登录失败原因提示
      errorVisible: false,
      //
      signInLoading: false,
      //
      errorList: {},
    };
  },
  //
  methods: {
    //
    handleSignIn() {
      this.signInLoading = true;
      this.errorVisible = false;
      //
      this.$axios
        .post("/users/login", {
          user: this.user,
        })
        .then(({ data }) => {
          // 保存用户信息
          const { token } = data.user;
          localStorage.setItem("jwtToken", token);

          // 跳转至首页
          this.$router.push("/");
        })
        .catch(({ errors }) => {
          this.errorList = errors;
          this.errorVisible = true;
        })
        .finally(() => {
          this.signInLoading = false;
        });
    },
  },
};
</script>

<style>
</style>