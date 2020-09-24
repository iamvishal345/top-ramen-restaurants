(this["webpackJsonpramen-restaurants"]=this["webpackJsonpramen-restaurants"]||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(20),l=a.n(s),o=(a(27),a(8)),i=(a(28),a(29),function(e){var t=e.searchText,a=e.handleSearchTextChange;return c.a.createElement("div",{className:"search-container"},c.a.createElement("input",{type:"text",name:"search",id:"search",placeholder:"Search...",value:t,onChange:function(e){return a(e.target.value)}}))}),u=(a(30),a(31),function(e){var t=e.stars;return c.a.createElement(c.a.Fragment,null,[0,1,2,3,4,5].map((function(e){return c.a.createElement("svg",{key:e,height:"21",width:"22"},c.a.createElement("polygon",{points:"10,1 4,19 19,7 1,7 16,19",style:e<=t?{fill:"lime"}:{fill:"grey"}}),"Sorry, your browser does not support inline SVG.")})))}),m=function(e){var t=e.Brand,a=e.Country,n=e.Stars,r=e.Style,s=(e["Top Ten"],e.Variety),l=e.rank;return c.a.createElement("div",{className:"item-card"},c.a.createElement("div",{className:"top-bar"},c.a.createElement("i",{className:"country pad-5"},a),l?c.a.createElement("i",{className:"rank-badge pad-5"},l):null),c.a.createElement("h1",{className:"title"},t),c.a.createElement("div",{className:"rating",title:isNaN(n)?"NA":n},c.a.createElement(u,{stars:n})),c.a.createElement("div",{className:"style pad-5"},"Nan"===r||"NaN"===r?"Any":r),c.a.createElement("div",{className:"variety pad-5"},s))},f=function(e){var t=e.restaurantsList;return c.a.createElement("div",{className:"item-card-container"},t.map((function(e,t){return c.a.createElement(m,Object.assign({key:t},e))})))},E=a(7),d=(a(32),function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",{className:"nav-container"},c.a.createElement("button",{className:"icon",onClick:function(){return n(!a)}},"\u2630"),c.a.createElement("ul",{className:"nav-bar ".concat(a?"toggle-display":"")},c.a.createElement("li",null,c.a.createElement(E.b,{to:"/all",className:"nav-item"},"All Restaurants")),c.a.createElement("li",null,c.a.createElement(E.b,{to:"/top",className:"nav-item",activeClassName:"active"},"Top Restaurants")),c.a.createElement("li",null,c.a.createElement(E.b,{to:"/country",className:"nav-item",activeClassName:"active"},"Restaurants by Country"))))}),h=(a(38),function(e){var t=e.restaurantsList;return c.a.createElement("div",{className:"view-by-condition-container"},Object.keys(t).sort((function(e,t){return t-e})).map((function(e){return c.a.createElement(c.a.Fragment,{key:e},c.a.createElement("h1",{className:"header"},e),c.a.createElement(f,{restaurantsList:t[e]}))})))}),v=a(1),b=a(13),p=a(6),y=a(14),N=(n=h,function(e){var t=e.restaurantsList,a={};return t.forEach((function(e){var t=e["Top Ten"],n=Object(y.a)(e,["Top Ten"]);if("NaN"!==t){var r=t.split(" #"),c=Object(o.a)(r,2),s=c[0],l=c[1];a[s]?a[s]=[].concat(Object(b.a)(a[s]),[Object(p.a)(Object(p.a)({},n),{},{rank:l})]):a[s]=[Object(p.a)(Object(p.a)({},n),{},{rank:l})],a[s].sort((function(e,t){return e.rank-t.rank}))}})),c.a.createElement(n,{restaurantsList:a})}),O=function(e){return function(t){var a=t.restaurantsList,n={};return a.forEach((function(e){var t=e.Country,a=Object(y.a)(e,["Country"]);n[t]?n[t]=[].concat(Object(b.a)(n[t]),[Object(p.a)(Object(p.a)({},a),{},{Country:t})]):n[t]=[Object(p.a)(Object(p.a)({},a),{},{Country:t})]})),c.a.createElement(e,{restaurantsList:n})}}(h);var j=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)([]),l=Object(o.a)(s,2),u=l[0],m=l[1];return Object(r.useEffect)((function(){return fetch("http://starlord.hackerearth.com/TopRamen").then((function(e){return e.json()})).then((function(e){m(e)})).catch((function(e){console.log(e)})),function(){}}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("nav",null,c.a.createElement(d,null)),c.a.createElement("header",null,c.a.createElement(i,{searchText:a,handleSearchTextChange:n})),c.a.createElement("main",null,c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/all",render:function(){return c.a.createElement(f,{restaurantsList:u.filter((function(e){return e.Brand.toLowerCase().indexOf(a.toLowerCase())>-1}))})}}),c.a.createElement(v.a,{path:"/top",render:function(){return c.a.createElement(N,{restaurantsList:u.filter((function(e){return e.Brand.toLowerCase().indexOf(a.toLowerCase())>-1}))})}}),c.a.createElement(v.a,{path:"/country",render:function(){return c.a.createElement(O,{restaurantsList:u.filter((function(e){return e.Brand.toLowerCase().indexOf(a.toLowerCase())>-1}))})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E.a,{basename:"/ramen-restaurants"},c.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.1f8dbee9.chunk.js.map