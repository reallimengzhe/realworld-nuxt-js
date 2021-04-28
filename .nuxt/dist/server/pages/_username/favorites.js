exports.ids = [3,1,2];
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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/article-preview.vue?vue&type=template&id=054ebc5c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-preview"},[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('NuxtLink',{attrs:{"to":'/@' + _vm.article.author.username}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('NuxtLink',{staticClass:"author",attrs:{"to":'/@' + _vm.article.author.username}},[_vm._v("\n        "+_vm._s(_vm.article.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("timeFilter")(_vm.article.updatedAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.isSubmitting))+(_vm._ssrClass(null,[
        'btn',
        'btn-sm',
        'pull-xs-right',
        _vm.article.favorited ? 'btn-primary' : 'btn-outline-primary',
        { disabled: _vm.isSubmitting } ]))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.article.favoritesCount)+"\n    ")+"</button>")],2),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"preview-link",attrs:{"to":'/article/' + _vm.article.slug}},[_c('h1',[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(_vm.article.body)}}),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((_vm.article.tagList),function(tag){return _c('li',{staticClass:"tag-default tag-pill tag-outline"},[_vm._v("\n        "+_vm._s(tag)+"\n      ")])}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/article-preview.vue?vue&type=template&id=054ebc5c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/article-preview.vue?vue&type=script&lang=js&
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
/* harmony default export */ var article_previewvue_type_script_lang_js_ = ({
  name: "ArticlePreview",
  props: {
    data: Object,
    require: true
  },

  data() {
    return {
      article: {
        author: {}
      },
      isSubmitting: false
    };
  },

  created() {
    this.article = this.data;
  },

  methods: {
    // 点赞
    handleLikeArticle() {
      this.isSubmitting = true;
      const {
        slug,
        favorited
      } = this.article;
      let request = favorited ? this.$axios.$delete(`articles/${slug}/favorite`) : this.$axios.$post(`articles/${slug}/favorite`);
      request.then(({
        article
      }) => {
        this.article = article;
      }).finally(() => {
        this.isSubmitting = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/article-preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_previewvue_type_script_lang_js_ = (article_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/article-preview.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "17ac1143"
  
)

/* harmony default export */ var article_preview = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/favorites.vue?vue&type=template&id=0cf260a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_c('AuthorBanner',{attrs:{"author":_vm.username}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":'/@' + _vm.username}},[_vm._v("\n                My Articles\n              ")])],1),_vm._ssrNode(" <li class=\"nav-item\"><a class=\"nav-link active\"> Favorited Articles </a></li>")],2)]),_vm._ssrNode(" <div class=\"article-preview\""+(_vm._ssrStyle(null,null, { display: (_vm.feedLoading) ? '' : 'none' }))+">\n          Loading articles...\n        </div> <div class=\"article-preview\""+(_vm._ssrStyle(null,null, { display: (!_vm.feedLoading && _vm.articles.length < 1) ? '' : 'none' }))+">\n          No articles are here... yet.\n        </div> "),_vm._l((_vm.articles),function(article){return _c('ArticlePreview',{key:article.slug,attrs:{"data":article}})}),_vm._ssrNode(" <nav><ul class=\"pagination\">"+(_vm._ssrList((Math.ceil(_vm.articlesCount / _vm.pageLimit)),function(pageNumber){return ("<li"+(_vm._ssrClass(null,['page-item', { active: pageNumber === _vm.pageIndex }]))+"><a class=\"page-link\">"+_vm._ssrEscape(_vm._s(pageNumber))+"</a></li>")}))+"</ul></nav>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_username/favorites.vue?vue&type=template&id=0cf260a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/favorites.vue?vue&type=script&lang=js&
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
/* harmony default export */ var favoritesvue_type_script_lang_js_ = ({
  name: "UserFavorites",

  asyncData({
    route
  }) {
    let username = route.path.slice(2).replace("/favorites", "");
    return {
      username
    };
  },

  data() {
    return {
      //
      articles: [],
      articlesCount: 0,
      // 分页
      pageLimit: 5,
      pageIndex: 1,
      //
      favorited: null,
      //
      feedLoading: false
    };
  },

  created() {
    this.handleGetAuthorFavorited();
  },

  methods: {
    // 获取作者赞过的文章
    handleGetAuthorFavorited() {
      this.feedLoading = true;
      this.articles = [];
      this.articlesCount = 0; // articles?favorited=shivam+tomar&limit=5&offset=0

      this.$axios.$get("articles", {
        params: {
          favorited: this.username.replace(" ", "+"),
          limit: this.pageLimit,
          offset: (this.pageIndex - 1) * this.pageLimit
        }
      }).then(({
        articles,
        articlesCount
      }) => {
        this.articles = articles;
        this.articlesCount = articlesCount;
      }).finally(() => {
        this.feedLoading = false;
      });
    },

    // 选择页码
    handleCheckPage(index) {
      this.pageIndex = index;
      this.handleGetAuthorFavorited();
    }

  }
});
// CONCATENATED MODULE: ./pages/_username/favorites.vue?vue&type=script&lang=js&
 /* harmony default export */ var _username_favoritesvue_type_script_lang_js_ = (favoritesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/_username/favorites.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _username_favoritesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e9876e20"
  
)

/* harmony default export */ var favorites = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AuthorBanner: __webpack_require__(27).default,ArticlePreview: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=favorites.js.map