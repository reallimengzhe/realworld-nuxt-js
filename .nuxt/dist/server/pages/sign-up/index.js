exports.ids = [10];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-up/index.vue?vue&type=template&id=03643685&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">Sign up</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[_c('NuxtLink',{attrs:{"to":"/sign-in"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\""+(_vm._ssrStyle(null,null, { display: (_vm.errorVisible) ? '' : 'none' }))+">"+(_vm._ssrList((_vm.errorList),function(value,key){return ("<li>"+_vm._ssrEscape("\n            "+_vm._s(key + " " + value)+"\n          ")+"</li>")}))+"</ul> <form><fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("disabled",_vm.signUpLoading))+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("disabled",_vm.signUpLoading))+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input required=\"required\" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("disabled",_vm.signUpLoading))+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.signUpLoading))+" class=\"btn btn-lg btn-primary pull-xs-right\">\n            Sign up\n          </button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/sign-up/index.vue?vue&type=template&id=03643685&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-up/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var sign_upvue_type_script_lang_js_ = ({
  name: "SignUp",

  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      },
      // 错误
      errorVisible: false,
      // 正在注册
      signUpLoading: false,
      // 错误列表
      errorList: {}
    };
  },

  methods: {
    //
    handleSignUp() {
      this.signUpLoading = true;
      this.errorVisible = false; //

      this.$axios.post("/users", {
        user: this.user
      }).then(({
        data
      }) => {
        // 保存用户信息
        const {
          token
        } = data.user;
        localStorage.setItem("jwtToken", token); // 跳转至登录页

        this.$router.push("/");
      }).catch(error => {
        const {
          errors
        } = error;
        this.errorList = errors;
        this.errorVisible = true;
      }).finally(() => {
        this.signUpLoading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/sign-up/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sign_upvue_type_script_lang_js_ = (sign_upvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/sign-up/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sign_upvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "48e32361"
  
)

/* harmony default export */ var sign_up = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map