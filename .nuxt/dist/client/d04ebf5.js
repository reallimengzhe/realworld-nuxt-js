(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{193:function(t,e,n){"use strict";var r=n(4);n(44);e.a={data:function(){return{followLoading:!1}},methods:{handleFollowSomebody:function(t){var e=arguments,n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,l,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.length>1&&void 0!==e[1]?e[1]:function(){},!n.isSignedIn){r.next=15;break}if(n.followLoading=!0,l=t.following,c=t.username,!l){r.next=9;break}return r.next=7,n.$axios.$delete("profiles/".concat(c,"/follow"));case 7:r.next=11;break;case 9:return r.next=11,n.$axios.$post("profiles/".concat(c,"/follow"));case 11:n.followLoading=!1,o(),r.next=16;break;case 15:n.$router.push("/sign-in");case 16:case"end":return r.stop()}}),r)})))()}}}},194:function(t,e,n){"use strict";n.r(e);n(12);var r={name:"ArticlePreview",props:{data:Object,require:!0},data:function(){return{article:{author:{}},isSubmitting:!1}},created:function(){this.article=this.data},methods:{handleLikeArticle:function(){var t=this;this.isSubmitting=!0;var e=this.article,n=e.slug;(e.favorited?this.$axios.$delete("articles/".concat(n,"/favorite")):this.$axios.$post("articles/".concat(n,"/favorite"))).then((function(e){var article=e.article;t.article=article})).finally((function(){t.isSubmitting=!1}))}}},o=n(34),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-preview"},[n("div",{staticClass:"article-meta"},[n("NuxtLink",{attrs:{to:"/@"+t.article.author.username}},[n("img",{attrs:{src:t.article.author.image}})]),t._v(" "),n("div",{staticClass:"info"},[n("NuxtLink",{staticClass:"author",attrs:{to:"/@"+t.article.author.username}},[t._v("\n        "+t._s(t.article.author.username)+"\n      ")]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t._f("timeFilter")(t.article.updatedAt)))])],1),t._v(" "),n("button",{class:["btn","btn-sm","pull-xs-right",t.article.favorited?"btn-primary":"btn-outline-primary",{disabled:t.isSubmitting}],attrs:{disabled:t.isSubmitting},on:{click:t.handleLikeArticle}},[n("i",{staticClass:"ion-heart"}),t._v(" "+t._s(t.article.favoritesCount)+"\n    ")])],1),t._v(" "),n("NuxtLink",{staticClass:"preview-link",attrs:{to:"/article/"+t.article.slug}},[n("h1",[t._v(t._s(t.article.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.article.body)}}),t._v(" "),n("span",[t._v("Read more...")]),t._v(" "),n("ul",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e){return n("li",{staticClass:"tag-default tag-pill tag-outline"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports},195:function(t,e,n){"use strict";n.r(e);n(22),n(17),n(18),n(35),n(36);var r=n(4),o=n(10),l=(n(44),n(27)),c=n(193);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"AuthorBanner",props:{author:String},mixins:[c.a],data:function(){return{authorInfo:{}}},computed:d(d({},Object(l.b)(["UserInfo"])),{},{isSignedIn:function(){return"token"in this.UserInfo}}),created:function(){this.handleGetAuthorInfo()},methods:{handleGetAuthorInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("profiles/".concat(t.author));case 2:n=e.sent,r=n.profile,t.authorInfo=r;case 5:case"end":return e.stop()}}),e)})))()}}},h=n(34),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[n("img",{staticClass:"user-img",attrs:{src:t.authorInfo.image}}),t._v(" "),n("h4",[t._v(t._s(t.author))]),t._v(" "),n("p",[t._v(t._s(t.authorInfo.bio))]),t._v(" "),t.isSignedIn&&t.author===t.UserInfo.username?n("NuxtLink",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{to:"/settings"}},[n("i",{staticClass:"ion-gear-a"}),t._v(" Edit Profile Settings\n        ")]):n("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{disabled:t.followLoading},on:{click:function(e){return t.handleFollowSomebody(t.authorInfo,t.handleGetAuthorInfo)}}},[n("i",{staticClass:"ion-plus-round"}),t._v("\n            "+t._s(t.authorInfo.following?"Unfollow":"Follow")+"\n          "+t._s(t.author)+"\n        ")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(44),n(37),n(12),{name:"UserArticle",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.route,o=r.path.slice(2),e.next=4,n.$get("profiles/".concat(o));case 4:return l=e.sent,c=l.profile,e.abrupt("return",{username:o,profile:c});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{articles:[],articlesCount:0,pageLimit:5,pageIndex:1,author:null,favorited:null,feedLoading:!1}},created:function(){this.author=this.$route.path.slice(2),this.handleGetUserArticle()},methods:{handleGetUserArticle:function(){var t=this;this.feedLoading=!0,this.articles=[],this.articlesCount=0,this.$axios.$get("articles",{params:{limit:this.pageLimit,offset:(this.pageIndex-1)*this.pageLimit,author:this.author,favorited:null}}).then((function(e){var n=e.articles,r=e.articlesCount;t.articles=n,t.articlesCount=r})).finally((function(){t.feedLoading=!1}))},handleCheckPage:function(t){this.pageIndex=t,this.handleGetUserArticle()}}}),l=n(34),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile-page"},[n("AuthorBanner",{attrs:{author:t.username}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[n("div",{staticClass:"articles-toggle"},[n("ul",{staticClass:"nav nav-pills outline-active"},[t._m(0),t._v(" "),n("li",{staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/@"+t.profile.username+"/favorites"}},[t._v("\n                Favorited Articles\n              ")])],1)])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.feedLoading,expression:"feedLoading"}],staticClass:"article-preview"},[t._v("\n          Loading articles...\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.feedLoading&&t.articles.length<1,expression:"!feedLoading && articles.length < 1"}],staticClass:"article-preview"},[t._v("\n          No articles are here... yet.\n        ")]),t._v(" "),t._l(t.articles,(function(article){return n("ArticlePreview",{key:article.slug,attrs:{data:article}})})),t._v(" "),n("nav",[n("ul",{staticClass:"pagination"},t._l(Math.ceil(t.articlesCount/t.pageLimit),(function(e){return n("li",{class:["page-item",{active:e===t.pageIndex}],on:{click:function(n){return t.handleCheckPage(e)}}},[n("a",{staticClass:"page-link"},[t._v(t._s(e))])])})),0)])],2)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{href:""}},[t._v("My Articles")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AuthorBanner:n(195).default,ArticlePreview:n(194).default})}}]);