"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{713:function(e,t,n){n.d(t,{Hg:function(){return s},IQ:function(){return p},Jh:function(){return f},TP:function(){return i},z1:function(){return o}});var r=n(165),a=n(861),u=n(243),c="dab4c4a62a8aa2e980834751b172c3fb",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US&api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&language=en-US&api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(165),a=n(861),u=n(439),c=n(791),s=n(87),i=n(713),o="Movies_search_input__991Ku",p="Movies_search_button__FLVus",f="Movies_movies_list__6BEzF",v="Movies_movie_item__SMojX",h=n(184),l=function(){var e=(0,c.useState)(""),t=(0,u.Z)(e,2),n=t[0],l=t[1],m=(0,c.useState)([]),d=(0,u.Z)(m,2),g=d[0],_=d[1],Z=(0,s.lr)(),x=(0,u.Z)(Z,2),y=x[0],b=x[1],w=y.get("query");return(0,c.useEffect)((function(){function e(){return e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.z1)(w);case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}w&&function(){e.apply(this,arguments)}()}),[w]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;b({query:t.elements.query.value}),l(""),t.reset()},children:[(0,h.jsx)("input",{type:"text",value:n,name:"query",onChange:function(e){l(e.target.value)},className:o}),(0,h.jsx)("button",{className:p,type:"submit",children:"Search"})]}),(0,h.jsx)("ul",{className:f,children:g.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{className:v,to:"/movies/".concat(e.id),children:e.title})})}))})]})}}}]);
//# sourceMappingURL=881.f17567df.chunk.js.map