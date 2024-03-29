exports.ids = [8];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=f462b620&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <ul class=\"error-messages\""+(_vm._ssrStyle(null,null, { display: (_vm.errorVisible) ? '' : 'none' }))+">"+(_vm._ssrList((_vm.errorList),function(value,key){return ("<li>"+_vm._ssrEscape("\n            "+_vm._s(key + " " + value)+"\n          ")+"</li>")}))+"</ul> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("disabled",_vm.submitLoading))+(_vm._ssrAttr("value",(_vm.userInfoTemp.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("disabled",_vm.submitLoading))+(_vm._ssrAttr("value",(_vm.userInfoTemp.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\""+(_vm._ssrAttr("disabled",_vm.submitLoading))+" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.userInfoTemp.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("disabled",_vm.submitLoading))+(_vm._ssrAttr("value",(_vm.userInfoTemp.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("disabled",_vm.submitLoading))+(_vm._ssrAttr("value",(_vm.userInfoTemp.password)))+" class=\"form-control form-control-lg\"></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.submitLoading))+" class=\"btn btn-lg btn-primary pull-xs-right\">\n              Update Settings\n            </button></fieldset></form> <hr> <button class=\"btn btn-outline-danger\">\n          Or click here to sign out.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=f462b620&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: "Settings",

  data() {
    return {
      userInfoTemp: {},
      //
      submitLoading: false,
      //
      errorVisible: false,
      errorList: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["UserInfo"])
  },
  watch: {
    "$store.state.UserInfo": {
      immediate: true,

      handler(val) {
        if (Object.keys(val).length) this.userInfoTemp = Object.assign({
          password: ""
        }, val);
      }

    }
  },
  methods: {
    //
    handleSubmit() {
      this.errorVisible = false;
      this.submitLoading = true; //

      this.$axios.$put("user", {
        user: this.userInfoTemp
      }).then(({
        user
      }) => {
        this.$store.commit("setUserInfo", user);
        this.$router.push("/@" + user.username);
      }).catch(({
        errors
      }) => {
        this.errorList = errors;
        this.errorVisible = true;
      }).finally(() => {
        this.submitLoading = false;
      });
    },

    // 登出
    handleSignOut() {
      // 清除 token
      window.localStorage.removeItem("jwtToken"); // 跳转至首页

      this.$router.push("/");
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/settings/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16748409"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map