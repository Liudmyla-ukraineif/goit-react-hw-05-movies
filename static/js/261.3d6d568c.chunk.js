"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[261],{830:function(e,n,t){t.d(n,{Pd:function(){return u},Qw:function(){return s},wr:function(){return c},yJ:function(){return a},z1:function(){return o}});var r=t(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=e633b089e078da3047049086e70158e9",c=function(){return(0,r.Z)("/trending/movie/week".concat(i)).then((function(e){return e.data.results}))},o=function(e){return(0,r.Z)("/search/movie".concat(i,"&language=en-US&query=").concat(e,"&include_adult=false")).then((function(e){return e.data.results}))},u=function(e){return(0,r.Z)("/movie/".concat(e).concat(i,"&language=en-US")).then((function(e){return e.data}))},s=function(e){return(0,r.Z)("/movie/".concat(e,"/credits").concat(i)).then((function(e){return e.data}))},a=function(e){return(0,r.Z)("/movie/".concat(e,"/reviews").concat(i)).then((function(e){return e.data.results}))}},261:function(e,n,t){t.r(n);var r=t(439),i=t(791),c=t(689),o=t(87),u=t(830),s=t(184);n.default=function(){var e,n,t=(0,i.useState)([]),a=(0,r.Z)(t,2),d=a[0],l=a[1],h=(0,c.UO)().movieId,f=(0,c.TH)(),v=(0,i.useRef)(null!==(e=null===(n=f.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");(0,i.useEffect)((function(){(0,u.Pd)(h).then((function(e){return e?l(e):Promise.reject(new Error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u043d\u0430\u0439\u0442\u0438 \u0434\u0430\u043d\u0438\u0445 \u043f\u043e \u0432\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443"))})).catch((function(e){return console.log(e)}))}),[h]);var j=d.poster_path,m=d.title,x=d.vote_average,p=d.overview,w=d.genres,g=void 0===w?[]:w;return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.rU,{to:v.current,children:"Go back"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{onError:function(){},src:"https://image.tmdb.org/t/p/w500/".concat(j),alt:"poster movie"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{children:[m," "]}),(0,s.jsxs)("p",{children:["User Score: ",Math.round(10*x),"%"]}),(0,s.jsx)("h3",{children:"Overview:"}),(0,s.jsx)("p",{children:p}),(0,s.jsx)("h3",{children:"Genres:"}),(0,s.jsx)("p",{children:g.map((function(e){return e.name})).join(", ")})]})]}),(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=261.3d6d568c.chunk.js.map