(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-detail-news-detail"],{"0574":function(n,t,e){var i=e("068e");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("22d36341",i,!0,{sourceMap:!1,shadowMode:!1})},"068e":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news-detail[data-v-c3b66a00]{font-size:%?30?%;padding:0 %?20?%}.news-detail .news-detail-title[data-v-c3b66a00]{text-align:center;margin:%?20?% 0}.news-detail .news-detail-info[data-v-c3b66a00]{font-size:%?28?%;color:#ccc}.news-detail .news-detail-info uni-text[data-v-c3b66a00]:nth-child(2){margin-left:%?20?%}.news-detail .news-detail-content[data-v-c3b66a00]{text-indent:%?56?%;padding:%?20?% 0;font-size:%?28?%;line-height:%?36?%}',""]),n.exports=t},"218d":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"news-detail"},[e("v-uni-view",{staticClass:"news-detail-title"},[n._v(n._s(n.newsDetail.title))]),e("v-uni-view",{staticClass:"news-detail-info"},[e("v-uni-text",[n._v("发表时间："+n._s(n.newsDetail.time))]),e("v-uni-text",[n._v("浏览："+n._s(n.newsDetail.scan)+"次")])],1),e("v-uni-view",{staticClass:"news-detail-content"},[n._v(n._s(n.newsDetail.content))])],1)},s=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return i}))},"5e6c":function(n,t,e){"use strict";e.r(t);var i=e("af44"),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,(function(){return i[n]}))}(s);t["default"]=a.a},"5f52":function(n,t,e){"use strict";e.r(t);var i=e("218d"),a=e("5e6c");for(var s in a)"default"!==s&&function(n){e.d(t,n,(function(){return a[n]}))}(s);e("7b2c");var r,c=e("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"c3b66a00",null,!1,i["a"],r);t["default"]=u.exports},"7b2c":function(n,t,e){"use strict";var i=e("0574"),a=e.n(i);a.a},af44:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{newsDetail:{}}},onLoad:function(){this.getNewsDetail()},methods:{getNewsDetail:function(){var n=this;setTimeout((function(){n.newsDetail={id:1,title:"标题",time:"2018—09-06",scan:1289,content:"大锅饭大概的，大概豆腐干反对，豆腐干豆腐干反对，豆腐干反对广泛的。"}}),1e3)}}};t.default=i}}]);