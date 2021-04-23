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

          <form @submit.prevent="handleSubmit">
            <fieldset class="form-group">
              <input
                required
                type="email"
                placeholder="Email"
                class="form-control form-control-lg"
                v-model="user.email"
                :disabled="isLoggingIn"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                type="password"
                placeholder="Password"
                class="form-control form-control-lg"
                v-model="user.password"
                :disabled="isLoggingIn"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isLoggingIn"
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
      isLoggingIn: false,
      //
      errorList: {},
    };
  },
  //
  methods: {
    //
    handleSubmit() {
      this.isLoggingIn = true;
      this.errorVisible = false;
      //
      this.$axios
        .post("/users/login", {
          user: this.user,
        })
        .then((res) => {
          console.log(res);
          // 保存用户信息
          const { user } = res.data;
          localStorage && localStorage.setItem("jwtToken", user.token);

          // 跳转至首页
          this.$router.push("/");
        })
        .catch((error) => {
          const { errors } = error;
          this.errorList = errors;
          this.errorVisible = true;
        })
        .finally(() => {
          this.isLoggingIn = false;
        });
    },
  },
};
</script>

<style>
</style>