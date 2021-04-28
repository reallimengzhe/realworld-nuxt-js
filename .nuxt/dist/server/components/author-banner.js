exports.ids = [2];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import { mapState } from 'vuex'
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      followLoading: false
    };
  },

  // computed: {
  //   ...mapState(['UserInfo']),
  //   //
  //   isSignedIn() {
  //     return 'token' in this.UserInfo
  //   },
  // },
  methods: {
    // 关注、取关
    async handleFollowSomebody(authorInfo, callback = () => {}) {
      if (this.isSignedIn) {
        this.followLoading = true;
        const {
          following,
          username
        } = authorInfo;
        following ? await this.$axios.$delete(`profiles/${username}/follow`) : await this.$axios.$post(`profiles/${username}/follow`);
        this.followLoading = false;
        callback();
      } else {
        this.$router.push('/sign-in');
      }
    }

  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/author-banner.vue?vue&type=template&id=56af1960&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-info"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.authorInfo.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.author))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.authorInfo.bio))+"</p> "),(_vm.isSignedIn && _vm.author === _vm.UserInfo.username)?_c('NuxtLink',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n        ")]):_c('button',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"disabled":_vm.followLoading},on:{"click":function($event){return _vm.handleFollowSomebody(_vm.authorInfo, _vm.handleGetAuthorInfo)}}},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n            "+_vm._s(_vm.authorInfo.following ? "Unfollow" : "Follow")+"\n          "+_vm._s(_vm.author)+"\n        ")])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/author-banner.vue?vue&type=template&id=56af1960&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./plugins/follow-mixin.js
var follow_mixin = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/author-banner.vue?vue&type=script&lang=js&
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


/* harmony default export */ var author_bannervue_type_script_lang_js_ = ({
  name: "AuthorBanner",
  props: {
    author: String
  },
  mixins: [follow_mixin["a" /* default */]],

  data() {
    return {
      authorInfo: {}
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["UserInfo"]),

    //
    isSignedIn() {
      return "token" in this.UserInfo;
    }

  },

  created() {
    this.handleGetAuthorInfo();
  },

  methods: {
    // 获取作者信息
    async handleGetAuthorInfo() {
      const {
        profile
      } = await this.$axios.$get(`profiles/${this.author}`);
      this.authorInfo = profile;
    }

  }
});
// CONCATENATED MODULE: ./components/author-banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_author_bannervue_type_script_lang_js_ = (author_bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/author-banner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_author_bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "246ab900"
  
)

/* harmony default export */ var author_banner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=author-banner.js.map