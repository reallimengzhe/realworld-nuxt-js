<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <NuxtLink to="/sign-in">Have an account?</NuxtLink>
          </p>

          <ul class="error-messages" v-show="errorVisible">
            <li v-for="(value, key) in errorList" :key="key">
              {{ key + " " + value }}
            </li>
          </ul>

          <form @submit.prevent="handleSignUp">
            <fieldset class="form-group">
              <input
                required
                type="text"
                placeholder="Your Name"
                class="form-control form-control-lg"
                v-model="user.username"
                :disabled="signUpLoading"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                type="text"
                placeholder="Email"
                class="form-control form-control-lg"
                v-model="user.email"
                :disabled="signUpLoading"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                required
                type="password"
                placeholder="Password"
                class="form-control form-control-lg"
                v-model="user.password"
                :disabled="signUpLoading"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="signUpLoading"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      // 错误
      errorVisible: false,
      // 正在注册
      signUpLoading: false,
      // 错误列表
      errorList: {},
    };
  },
  methods: {
    //
    handleSignUp() {
      this.signUpLoading = true;
      this.errorVisible = false;
      //
      this.$axios
        .post("/users", {
          user: this.user,
        })
        .then(({ data }) => {
          // 保存用户信息
          const { token } = data.user;
          localStorage.setItem("jwtToken", token);

          // 跳转至登录页
          this.$router.push("/");
        })
        .catch((error) => {
          const { errors } = error;
          this.errorList = errors;
          this.errorVisible = true;
        })
        .finally(() => {
          this.signUpLoading = false;
        });
    },
  },
};
</script>

<style>
</style>