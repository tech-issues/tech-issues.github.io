(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{265:function(e,t,n){"use strict";n.r(t);n(24);var r=n(4),c={name:"BlogIndex",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$content,r=e.params,data={items:null,article:null},null!=r.slug){t.next=8;break}return t.next=5,n("articles").without(["body"]).fetch();case 5:data.items=t.sent,t.next=11;break;case 8:return t.next=10,n("articles/".concat(r.slug)).fetch();case 10:data.article=t.sent;case 11:return t.abrupt("return",data);case 12:case"end":return t.stop()}}),t)})))()}},l=n(48),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("My Blog")]),e._v(" "),e.article?[n("nuxt-content",{attrs:{document:e.article}})]:[n("ul",e._l(e.items,(function(t){return n("li",{key:t.slug},[n("nuxt-link",{attrs:{to:{name:"blog-slug",params:{slug:t.slug}}}},[e._v("\n\n          "+e._s(t.title)+"\n\n        ")])],1)})),0),e._v(" "),n("pre",[e._v(e._s(e.items))])]],2)}),[],!1,null,null,null);t.default=component.exports}}]);