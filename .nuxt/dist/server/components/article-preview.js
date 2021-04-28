exports.ids = [1];
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

/***/ })

};;
//# sourceMappingURL=article-preview.js.map