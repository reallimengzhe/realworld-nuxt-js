exports.ids = [9];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-in/index.vue?vue&type=template&id=33614420&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">Sign in</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[_c('NuxtLink',{attrs:{"to":"/sign-up"}},[_vm._v("Need an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\""+(_vm._ssrStyle(null,null, { display: (_vm.errorVisible) ? '' : 'none' }))+">"+(_vm._ssrList((_vm.errorList),function(value,key){return ("<li>"+_vm._ssrEscape("\n            "+_vm._s(key + " " + value)+"\n          ")+"</li>")}))+"</ul> <form><fieldset class=\"form-group\"><input required=\"required\" type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("disabled",_vm.signInLoading))+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("disabled",_vm.signInLoading))+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.signInLoading))+" class=\"btn btn-lg btn-primary pull-xs-right\">\n            Sign in\n          </button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/sign-in/index.vue?vue&type=template&id=33614420&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-in/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var sign_invue_type_script_lang_js_ = ({
  name: "SignIn",

  //
  data() {
    return {
      // 账号密码
      user: {
        email: "",
        password: ""
      },
      // 登录失败原因提示
      errorVisible: false,
      //
      signInLoading: false,
      //
      errorList: {}
    };
  },

  //
  methods: {
    //
    handleSignIn() {
      this.signInLoading = true;
      this.errorVisible = false; //

      this.$axios.post("/users/login", {
        user: this.user
      }).then(({
        data
      }) => {
        // 保存用户信息
        const {
          token
        } = data.user;
        localStorage.setItem("jwtToken", token); // 跳转至首页

        this.$router.push("/");
      }).catch(({
        errors
      }) => {
        this.errorList = errors;
        this.errorVisible = true;
      }).finally(() => {
        this.signInLoading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/sign-in/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sign_invue_type_script_lang_js_ = (sign_invue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/sign-in/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sign_invue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7a74052a"
  
)

/* harmony default export */ var sign_in = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map