(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),s=(n(12),n(3)),l=n(4),i=n(5),u=n(6),h=(n(13),n(14),n(15),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){})))}),m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",placeholder:t,onChange:n})}),d=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).filterFunction=function(e){return function(t){return t.name.toLowerCase().includes(e.toLowerCase())||!e}},e.storeFilterValue=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:null,finalFilteredMonster:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,o=t;return null!==t&&0!==t.length&&null!==n&&(o=t.filter(this.filterFunction(n))),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(m,{placeholder:"Search Monster",handleChange:this.storeFilterValue}),r.a.createElement(h,{monsters:o}))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a5455c07.chunk.js.map