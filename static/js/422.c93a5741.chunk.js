"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[422],{830:function(n,e,t){t.d(e,{Pd:function(){return s},Qw:function(){return a},wr:function(){return o},yJ:function(){return d},z1:function(){return c}});var r=t(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=e633b089e078da3047049086e70158e9",o=function(){return(0,r.Z)("/trending/movie/week".concat(i)).then((function(n){return n.data.results}))},c=function(n){return(0,r.Z)("/search/movie".concat(i,"&language=en-US&query=").concat(n,"&include_adult=false")).then((function(n){return n.data.results}))},s=function(n){return(0,r.Z)("/movie/".concat(n).concat(i,"&language=en-US")).then((function(n){return n.data}))},a=function(n){return(0,r.Z)("/movie/".concat(n,"/credits").concat(i)).then((function(n){return n.data}))},d=function(n){return(0,r.Z)("/movie/".concat(n,"/reviews").concat(i)).then((function(n){return n.data.results}))}},422:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i,o,c,s,a,d,u=t(439),l=t(791),f=t(689),h=t(830),p=t(168),x=t(444),m=t(87),v=(x.ZP.input(r||(r=(0,p.Z)(["\n  padding: 8px 64px 8px 8px;\n  border-radius: 4px;\n  border-color: #e3e3e3;\n  font: inherit;\n"]))),x.ZP.div(i||(i=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n  border-bottom: 3px solid #e3e3e3;\n"])))),g=x.ZP.h2(o||(o=(0,p.Z)(["\n  font-family:sans-serif;\n  font-size: 24px;\n  font-weight: 600;\n  color: #262626;\n"]))),j=x.ZP.h3(c||(c=(0,p.Z)(["\n  font-family:sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  color: #262626;\n"]))),Z=x.ZP.p(s||(s=(0,p.Z)(["\n  font-family:sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #262626;\n"]))),b=(0,x.ZP)(m.rU)(a||(a=(0,p.Z)(["\n  display: inline-block;\n  padding: 8px;\n  margin: 8px;\n  align-items: center;\n  text-align: center;\n  font-family:sans-serif;\n  font-size: 12px;\n  color: #0d0d0d;\n  line-height: 1.2;\n  text-decoration: none;\n  border-radius: 4px;\n  border-color: #000000;\n  background-color: #f2f2f2;\n"]))),w=(0,x.ZP)(m.rU)(d||(d=(0,p.Z)(["\n  font-family:sans-serif;\n  font-size: 14px;\n  color: blue;\n  line-height: 1.8;\n  text-decoration: underline;\n  text-decoration-color: blue;\n"]))),k=t(184),y=function(){var n,e,t=(0,l.useState)([]),r=(0,u.Z)(t,2),i=r[0],o=r[1],c=(0,f.UO)().movieId,s=(0,f.TH)(),a=(0,l.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,l.useEffect)((function(){(0,h.Pd)(c).then((function(n){return n?o(n):Promise.reject(new Error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u043d\u0430\u0439\u0442\u0438 \u0434\u0430\u043d\u0438\u0445 \u043f\u043e \u0432\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443"))})).catch((function(n){return console.log(n)}))}),[c]);var d=i.poster_path,p=i.title,x=i.vote_average,m=i.overview,y=i.genres,P=void 0===y?[]:y;return(0,k.jsxs)("div",{children:[(0,k.jsx)(b,{to:a.current,children:"Go back"}),(0,k.jsxs)(v,{children:[(0,k.jsx)("img",{onError:function(){},src:"https://image.tmdb.org/t/p/w500/".concat(d),alt:"poster movie"}),(0,k.jsxs)("div",{children:[(0,k.jsxs)(g,{children:[p," "]}),(0,k.jsxs)(Z,{children:["User Score: ",Math.round(10*x),"%"]}),(0,k.jsx)(j,{children:"Overview:"}),(0,k.jsx)(Z,{children:m}),(0,k.jsx)(j,{children:"Genres:"}),(0,k.jsx)(Z,{children:P.map((function(n){return n.name})).join(", ")})]})]}),(0,k.jsx)(Z,{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(w,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(w,{to:"reviews",children:"Reviews"})})]}),(0,k.jsx)(l.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=422.c93a5741.chunk.js.map