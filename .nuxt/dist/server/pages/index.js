exports.ids = [7,1];
exports.modules = {

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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=f86f0320&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\""+(_vm._ssrStyle(null,null, { display: (_vm.isSignedIn) ? '' : 'none' }))+"><a"+(_vm._ssrClass(null,['nav-link', { active: _vm.currentFeed === 'Your' }]))+">\n                Your Feed\n              </a></li> <li class=\"nav-item\"><span"+(_vm._ssrClass(null,['nav-link', { active: _vm.currentFeed === 'Global' }]))+">\n                Global Feed\n              </span></li> <li class=\"nav-item\""+(_vm._ssrStyle(null,null, { display: (_vm.currentFeed === 'Tag') ? '' : 'none' }))+"><a"+(_vm._ssrClass(null,['nav-link', { active: _vm.currentFeed === 'Tag' }]))+"><i class=\"ion-pound\"></i>"+_vm._ssrEscape(" \n                "+_vm._s(_vm.currentTag)+"\n              ")+"</a></li></ul></div> <div class=\"article-preview\""+(_vm._ssrStyle(null,null, { display: (_vm.feedLoading) ? '' : 'none' }))+">\n          Loading articles...\n        </div> <div class=\"article-preview\""+(_vm._ssrStyle(null,null, { display: (!_vm.feedLoading && _vm.articles.length < 1) ? '' : 'none' }))+">\n          No articles are here... yet.\n        </div> "),_vm._l((_vm.articles),function(article){return _c('ArticlePreview',{key:article.slug,attrs:{"data":article}})}),_vm._ssrNode(" <nav><ul class=\"pagination\">"+(_vm._ssrList((Math.ceil(_vm.articlesCount / _vm.pageLimit)),function(pageNumber){return ("<li"+(_vm._ssrClass(null,['page-item', { active: pageNumber === _vm.pageIndex }]))+"><a class=\"page-link\">"+_vm._ssrEscape(_vm._s(pageNumber))+"</a></li>")}))+"</ul></nav>")],2),_vm._ssrNode(" <div class=\"col-md-3\"><div class=\"sidebar\"><p>Popular Tags</p> <div class=\"tag-list\">"+(_vm._ssrList((_vm.tags),function(tag){return ("<a class=\"tag-pill tag-default\">"+_vm._ssrEscape("\n              "+_vm._s(tag)+"\n            ")+"</a>")}))+"</div></div></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=f86f0320&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "Home",

  async asyncData({
    $axios
  }) {
    // Popular Tags
    try {
      let {
        tags
      } = await $axios.$get("tags");
      return {
        tags
      };
    } catch {
      let tags = [];
      return {
        tags
      };
    }
  },

  data() {
    return {
      // 是否已登录
      isSignedIn: false,
      //
      currentFeed: "Global",
      //
      articles: [],
      articlesCount: 0,
      //
      pageLimit: 10,
      pageIndex: 1,
      //
      currentTag: null,
      //
      feedLoading: false
    };
  },

  watch: {// $route: {
    //   // 立即执行
    //   immediate: true,
    //   // 回调
    //   handler() {
    //     console.log(1);
    //   },
    //   // end
    // },
  },

  created() {
    this.isSignedIn = !!( false && false);
    this.isSignedIn ? this.handleChangeFeed("Your") : this.handleChangeFeed("Global");
  },

  methods: {
    // 切换 tab
    handleChangeFeed(feed) {
      this.currentTag = null;
      this.currentFeed = feed;
      this.handleGetFeed();
    },

    // 获取文章流
    handleGetFeed() {
      this.feedLoading = true;
      this.articles = [];
      this.articlesCount = 0; // 请求参数

      let params = {
        limit: this.pageLimit,
        offset: (this.pageIndex - 1) * this.pageLimit,
        tag: this.currentTag,
        author: null,
        favorited: null
      }; // 请求对象

      let request = undefined; //

      if (this.currentFeed === "Global" || this.currentFeed === "Tag") request = this.$axios.$get("articles", {
        params
      });
      if (this.currentFeed === "Your") request = this.$axios.$get("articles/feed", {
        params
      });
      request.then(({
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
      this.handleGetFeed();
    },

    // 选择标签
    handleCheckTag(tag) {
      this.currentFeed = "Tag";
      this.currentTag = tag;
      this.handleGetFeed();
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1adc4d5c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ArticlePreview: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=index.js.map