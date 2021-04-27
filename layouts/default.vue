<template>
  <div>
    <!-- 导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">conduit</NuxtLink>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <NuxtLink
              to="/"
              :class="['nav-link', { active: $route.path === '/' }]"
            >
              Home
            </NuxtLink>
          </li>
          <li class="nav-item" v-show="isSignedIn">
            <NuxtLink
              to="/editor"
              :class="['nav-link', { active: $route.path === '/editor' }]"
            >
              <i class="ion-compose"></i>&nbsp;New Article
            </NuxtLink>
          </li>
          <li class="nav-item" v-show="isSignedIn">
            <NuxtLink
              to="/settings"
              :class="['nav-link', { active: $route.path === '/settings' }]"
            >
              <i class="ion-gear-a"></i>&nbsp;Settings
            </NuxtLink>
          </li>
          <li class="nav-item" v-show="!isSignedIn">
            <NuxtLink
              to="/sign-in"
              :class="['nav-link', { active: $route.path === '/sign-in' }]"
            >
              Sign in
            </NuxtLink>
          </li>
          <li class="nav-item" v-show="!isSignedIn">
            <NuxtLink
              to="/sign-up"
              :class="['nav-link', { active: $route.path === '/sign-up' }]"
            >
              Sign up
            </NuxtLink>
          </li>
          <li class="nav-item" v-show="isSignedIn">
            <NuxtLink
              :to="'/@' + UserInfo.username"
              :class="[
                'nav-link',
                { active: $route.path === '/@' + UserInfo.username },
              ]"
            >
              <img class="user-pic" :src="UserInfo.image" />
              {{ UserInfo.username }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 组件 -->
    <Nuxt />
    <!-- 页脚  -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
    <!-- end  -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Layout",
  computed: {
    ...mapState(["UserInfo"]),
    //
    isSignedIn() {
      return "token" in this.UserInfo;
    },
  },
};
</script>
