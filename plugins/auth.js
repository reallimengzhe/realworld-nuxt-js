export default ({ app, redirect, $axios, store }) => {
  const { router } = app
  // console.dir(store)
  router.beforeEach((to, from, next) => {
    // 服务端
    if (process.server) next()
    // 客户端（浏览器）
    if (process.client) {
      // 获取登录状态
      const isSignedIn = !!localStorage.getItem('jwtToken')

      // 获取用户信息
      if (isSignedIn && !('token' in store.state.UserInfo)) {
        $axios.$get('user').then(({ user }) => {
          store.commit('setUserInfo', user)
        })
      }

      // 页面 - 登录、注册
      const signPage = ['/sign-in', '/sign-up']

      // 页面 - 需要权限的页面
      const permissionPage = ['/editor', '/settings']

      // 已登录不能访问 登录或注册页面
      if (isSignedIn && signPage.includes(to.path)) {
        redirect('/') // 重定向至首页
      }
      // 未登录不能访问 需要权限的页面
      else if (!isSignedIn && permissionPage.includes(to.path)) {
        redirect('/sign-in')
      }
      // 其他情况
      else {
        next()
      }
      // end
    }
  })
}
