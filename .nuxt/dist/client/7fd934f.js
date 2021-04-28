(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{194:function(t,e,n){"use strict";n.r(e);n(12);var r={name:"ArticlePreview",props:{data:Object,require:!0},data:function(){return{article:{author:{}},isSubmitting:!1}},created:function(){this.article=this.data},methods:{handleLikeArticle:function(){var t=this;this.isSubmitting=!0;var e=this.article,n=e.slug;(e.favorited?this.$axios.$delete("articles/".concat(n,"/favorite")):this.$axios.$post("articles/".concat(n,"/favorite"))).then((function(e){var article=e.article;t.article=article})).finally((function(){t.isSubmitting=!1}))}}},l=n(34),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-preview"},[n("div",{staticClass:"article-meta"},[n("NuxtLink",{attrs:{to:"/@"+t.article.author.username}},[n("img",{attrs:{src:t.article.author.image}})]),t._v(" "),n("div",{staticClass:"info"},[n("NuxtLink",{staticClass:"author",attrs:{to:"/@"+t.article.author.username}},[t._v("\n        "+t._s(t.article.author.username)+"\n      ")]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t._f("timeFilter")(t.article.updatedAt)))])],1),t._v(" "),n("button",{class:["btn","btn-sm","pull-xs-right",t.article.favorited?"btn-primary":"btn-outline-primary",{disabled:t.isSubmitting}],attrs:{disabled:t.isSubmitting},on:{click:t.handleLikeArticle}},[n("i",{staticClass:"ion-heart"}),t._v(" "+t._s(t.article.favoritesCount)+"\n    ")])],1),t._v(" "),n("NuxtLink",{staticClass:"preview-link",attrs:{to:"/article/"+t.article.slug}},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.article.body)}}),t._v(" "),n("span",[t._v("Read more...")]),t._v(" "),n("ul",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e){return n("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var r=n(4),l=(n(12),n(44),{name:"Home",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.prev=1,e.next=4,n.$get("tags");case 4:return r=e.sent,l=r.tags,e.abrupt("return",{tags:l});case 9:return e.prev=9,e.t0=e.catch(1),c=[],e.abrupt("return",{tags:c});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},data:function(){return{isSignedIn:!1,currentFeed:"Global",articles:[],articlesCount:0,pageLimit:10,pageIndex:1,currentTag:null,feedLoading:!1}},watch:{},created:function(){this.isSignedIn=!!localStorage.getItem("jwtToken"),this.isSignedIn?this.handleChangeFeed("Your"):this.handleChangeFeed("Global")},methods:{handleChangeFeed:function(t){this.currentTag=null,this.currentFeed=t,this.handleGetFeed()},handleGetFeed:function(){var t=this;this.feedLoading=!0,this.articles=[],this.articlesCount=0;var e={limit:this.pageLimit,offset:(this.pageIndex-1)*this.pageLimit,tag:this.currentTag,author:null,favorited:null},n=void 0;"Global"!==this.currentFeed&&"Tag"!==this.currentFeed||(n=this.$axios.$get("articles",{params:e})),"Your"===this.currentFeed&&(n=this.$axios.$get("articles/feed",{params:e})),n.then((function(e){var n=e.articles,r=e.articlesCount;t.articles=n,t.articlesCount=r})).finally((function(){t.feedLoading=!1}))},handleCheckPage:function(t){this.pageIndex=t,this.handleGetFeed()},handleCheckTag:function(t){this.currentFeed="Tag",this.currentTag=t,this.handleGetFeed()}}}),c=n(34),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[t._m(0),t._v(" "),n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"feed-toggle"},[n("ul",{staticClass:"nav nav-pills outline-active"},[n("li",{directives:[{name:"show",rawName:"v-show",value:t.isSignedIn,expression:"isSignedIn"}],staticClass:"nav-item"},[n("a",{class:["nav-link",{active:"Your"===t.currentFeed}],on:{click:function(e){return t.handleChangeFeed("Your")}}},[t._v("\n                Your Feed\n              ")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("span",{class:["nav-link",{active:"Global"===t.currentFeed}],on:{click:function(e){return t.handleChangeFeed("Global")}}},[t._v("\n                Global Feed\n              ")])]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:"Tag"===t.currentFeed,expression:"currentFeed === 'Tag'"}],staticClass:"nav-item"},[n("a",{class:["nav-link",{active:"Tag"===t.currentFeed}],on:{click:function(e){return t.handleChangeFeed("Global")}}},[n("i",{staticClass:"ion-pound"}),t._v(" \n                "+t._s(t.currentTag)+"\n              ")])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.feedLoading,expression:"feedLoading"}],staticClass:"article-preview"},[t._v("\n          Loading articles...\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.feedLoading&&t.articles.length<1,expression:"!feedLoading && articles.length < 1"}],staticClass:"article-preview"},[t._v("\n          No articles are here... yet.\n        ")]),t._v(" "),t._l(t.articles,(function(article){return n("ArticlePreview",{key:article.slug,attrs:{data:article}})})),t._v(" "),n("nav",[n("ul",{staticClass:"pagination"},t._l(Math.ceil(t.articlesCount/t.pageLimit),(function(e){return n("li",{class:["page-item",{active:e===t.pageIndex}],on:{click:function(n){return t.handleCheckPage(e)}}},[n("a",{staticClass:"page-link"},[t._v(t._s(e))])])})),0)])],2),t._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"sidebar"},[n("p",[t._v("Popular Tags")]),t._v(" "),n("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return n("a",{key:e,staticClass:"tag-pill tag-default",on:{click:function(n){return t.handleCheckTag(e)}}},[t._v("\n              "+t._s(e)+"\n            ")])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),n("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticlePreview:n(194).default})}}]);