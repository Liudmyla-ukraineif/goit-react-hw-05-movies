(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{830:function(n,e,t){"use strict";t.d(e,{Pd:function(){return u},Qw:function(){return a},wr:function(){return c},yJ:function(){return s},z1:function(){return i}});var r=t(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="?api_key=e633b089e078da3047049086e70158e9",c=function(){return(0,r.Z)("/trending/movie/week".concat(o)).then((function(n){return n.data.results}))},i=function(n){return(0,r.Z)("/search/movie".concat(o,"&language=en-US&query=").concat(n,"&include_adult=false")).then((function(n){return n.data.results}))},u=function(n){return(0,r.Z)("/movie/".concat(n).concat(o,"&language=en-US")).then((function(n){return n.data}))},a=function(n){return(0,r.Z)("/movie/".concat(n,"/credits").concat(o)).then((function(n){return n.data}))},s=function(n){return(0,r.Z)("/movie/".concat(n,"/reviews").concat(o)).then((function(n){return n.data.results}))}},676:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r,o,c=t(439),i=t(791),u=t(689),a=t(7),s=t.n(a),f=t(830),l=t(168),p=t(444),d=t(87),h=(0,p.ZP)(d.rU)(r||(r=(0,l.Z)(["\n  font-family:sans-serif;\n  font-size: 14px;\n  color: blue;\n  line-height: 1.8;\n  text-decoration: underline;\n  text-decoration-color: blue;\n"]))),m=p.ZP.h2(o||(o=(0,l.Z)(["\n  font-family:sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: #262626;\n"]))),y=t(184),v=function(){var n=(0,i.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,u.TH)();return(0,i.useEffect)((function(){(0,f.wr)().then((function(n){r(n)})).catch((function(n){return console.log(n)}))}),[]),(0,y.jsxs)("div",{children:[(0,y.jsx)(m,{children:"Trending today"}),(0,y.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsx)(h,{to:"/movies/".concat(n.id),state:{from:o},children:n.title})},n.id)}))})]})},g=v;v.propType={fetchTrendingMovies:s().func}},888:function(n,e,t){"use strict";var r=t(47);function o(){}function c(){}c.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,c,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:c,resetWarningCache:o};return t.PropTypes=t,t}},7:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=676.1df36629.chunk.js.map