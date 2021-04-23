export default ({ app, redirect }) => {
  const { router } = app
  router.beforeEach((to, from, next) => {
    // 服务端
    if (process.server) next()
    // 客户端（浏览器）
    if (process.client) {
      // 获取登录状态
      const isSignedIn = !!localStorage.getItem('jwtToken')

      // 登录或者注册
      const signPage = ['/sign-in', '/sign-up']
      // 需要权限的页面
      const permissionPage = ['/editor', '/settings']
      // 已登录不能访问 登录或注册页面
      if (isSignedIn && signPage.includes(to.path)) {
        // 重定向至首页
        return redirect('/')
      }
      // 未登录不能访问 需要权限的页面
      if (!isSignedIn && permissionPage.includes(to.path)) {
        return redirect('/sign-in')
      }
      // 其他情况
      next()
    }
  })
}
