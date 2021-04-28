exports.ids = [5];
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_slug.vue?vue&type=template&id=7f10aa01&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('NuxtLink',{attrs:{"to":'/@' + _vm.article.author.username}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('NuxtLink',{staticClass:"author",attrs:{"to":'/@' + _vm.article.author.username}},[_vm._v("\n            "+_vm._s(_vm.article.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("timeFilter")(_vm.article.updatedAt)))+"</span>")],2),_vm._ssrNode(" "+((_vm.UserInfo.username === _vm.article.author.username)?("<span><button class=\"btn btn-outline-secondary btn-sm\"><i class=\"ion-edit\"></i> Edit Article\n          </button> <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n          </button></span>"):"<!---->")+" "+((_vm.UserInfo.username !== _vm.article.author.username)?("<span><button"+(_vm._ssrAttr("disabled",_vm.followLoading))+" class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.article.author.following ? "Unfollow" : "Follow")+"\n            "+_vm._s(_vm.article.author.username)+"\n          ")+"</button>\n           \n          <button"+(_vm._ssrAttr("disabled",_vm.favoriteLoading))+(_vm._ssrClass(null,[
              'btn',
              'btn-sm',
              _vm.article.favorited ? 'btn-primary' : 'btn-outline-primary' ]))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.article.favorited ? "Unfavorite" : "Favorite")+" Article\n            ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button></span>"):"<!---->"))],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('NuxtLink',{attrs:{"to":'/@' + _vm.article.author.username}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('NuxtLink',{staticClass:"author",attrs:{"to":'/@' + _vm.article.author.username}},[_vm._v("\n            "+_vm._s(_vm.article.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("timeFilter")(_vm.article.updatedAt)))+"</span>")],2),_vm._ssrNode(" "+((_vm.UserInfo.username === _vm.article.author.username)?("<span><button class=\"btn btn-outline-secondary btn-sm\"><i class=\"ion-edit\"></i> Edit Article\n          </button> <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n          </button></span>"):"<!---->")+" "+((_vm.UserInfo.username !== _vm.article.author.username)?("<span><button"+(_vm._ssrAttr("disabled",_vm.followLoading))+" class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.article.author.following ? "Unfollow" : "Follow")+"\n            "+_vm._s(_vm.article.author.username)+"\n          ")+"</button>\n           \n          <button"+(_vm._ssrAttr("disabled",_vm.favoriteLoading))+(_vm._ssrClass(null,[
              'btn',
              'btn-sm',
              _vm.article.favorited ? 'btn-primary' : 'btn-outline-primary' ]))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.article.favorited ? "Unfavorite" : "Favorite")+" Article\n            ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button></span>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea required=\"required\" placeholder=\"Write a comment...\" rows=\"3\" maxlength=\"70\""+(_vm._ssrAttr("disabled",_vm.commentSubmitLoading))+" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentBody))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.UserInfo.image))+" class=\"comment-author-img\"> <button"+(_vm._ssrAttr("disabled",_vm.commentSubmitLoading))+" class=\"btn btn-sm btn-primary\">\n              Post Comment\n            </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('NuxtLink',{staticClass:"comment-author",attrs:{"to":'/@' + comment.author.username}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n             \n            "),_c('NuxtLink',{staticClass:"comment-author",attrs:{"to":'/@' + comment.author.username}},[_vm._v("\n              "+_vm._s(comment.author.username)+"\n            ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("timeFilter")(comment.updatedAt)))+"</span> <span class=\"mod-options\">"+((_vm.UserInfo.username === comment.author.username)?("<i class=\"ion-trash-a\"></i>"):"<!---->")+"</span>")],2)],2)})],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/_slug.vue?vue&type=template&id=7f10aa01&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./plugins/follow-mixin.js
var follow_mixin = __webpack_require__(25);

// CONCATENATED MODULE: ./plugins/favorite-mixin.js
/* harmony default export */ var favorite_mixin = ({
  data() {
    return {
      favoriteLoading: false
    };
  },

  methods: {
    // 点赞、取消赞
    async handleLikeArticle(article, callback = () => {}) {
      if (this.isSignedIn) {
        this.favoriteLoading = true;
        const {
          favorited,
          slug
        } = article;
        favorited ? await this.$axios.$delete(`articles/${slug}/favorite`) : await this.$axios.$post(`articles/${slug}/favorite`);
        this.favoriteLoading = false;
        callback();
      } else {
        this.$router.push('/sign-in');
      }
    }

  }
});
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(24);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const md = new external_markdown_it_default.a();
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "ArticlePage",
  mixins: [follow_mixin["a" /* default */], favorite_mixin],

  async asyncData({
    $axios,
    params,
    redirect
  }) {
    const {
      slug
    } = params;

    try {
      const {
        article
      } = await $axios.$get(`articles/${slug}`);
      article.body = md.render(article.body);
      return {
        article,
        slug
      };
    } catch {
      redirect("/");
    }
  },

  head() {
    return {
      title: `${this.article.title} - Realworld`,
      meta: [{
        hid: this.slug,
        name: "description",
        content: this.article.body
      }]
    };
  },

  data() {
    return {
      // 评论列表
      comments: [],
      // 正在撰写的评论
      commentBody: "",
      //
      commentSubmitLoading: false
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["UserInfo"]),

    //
    isSignedIn() {
      return "token" in this.UserInfo;
    }

  },

  created() {
    this.handleGetComment();
  },

  methods: {
    //
    async handleGetArticle() {
      const {
        article
      } = await this.$axios.$get(`articles/${this.slug}`);
      article.body = md.render(article.body);
      this.article = article;
    },

    // 获取评论
    async handleGetComment() {
      const {
        comments
      } = await this.$axios.$get(`articles/${this.slug}/comments`);
      this.comments = comments;
    },

    // 发表评论
    handlePostComment() {
      this.commentSubmitLoading = true;
      this.$axios.$post(`articles/${this.slug}/comments`, {
        comment: {
          body: this.commentBody
        }
      }).then(() => {
        this.commentBody = "";
        this.handleGetComment();
      }).finally(() => {
        this.commentSubmitLoading = false;
      });
    },

    // 删除评论
    async handleDeleteComment(id) {
      await this.$axios.$delete(`articles/${this.slug}/comments/${id}`);
      this.handleGetComment();
    },

    // 删除文章
    async handleDeleteArticle() {
      await this.$axios.$delete(`articles/${this.slug}`);
      this.$router.push("/");
    }

  }
});
// CONCATENATED MODULE: ./pages/article/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/article/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "54bc08a4"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map