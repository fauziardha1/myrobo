(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),i=t.n(o),c=(t(12),t(1)),l=t(2),m=t(3),s=t(4),u=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.robot,a=e.id,t=e.name,n=e.username,o=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?set=set4&size=200x200"),alt:t+"'s image"}),r.a.createElement("div",null,r.a.createElement("h2",null," ",n," "),r.a.createElement("p",null," ",o," ")))}}]),t}(n.Component);function h(e){return e.robots.map((function(e){return r.a.createElement(u,{key:e.id,robot:e})}))}function d(e){var a=e.searchBoxChange;return r.a.createElement("div",null,r.a.createElement("input",{onInput:a,className:" pa2 ba1 b--green bg-lightest-blue ",type:"search",name:"search",id:"search",placeholder:"Search Box"}))}function f(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}var b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={hasError:!1,info:""},n}return Object(l.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:e,info:a})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops not good!"):r.a.createElement("div",null," ",this.props.children," ")}}]),t}(n.Component),g=[{id:1,name:"imam",username:"Imam",email:"imam@gmail.com"},{id:2,name:"boy",username:"Boy",email:"boy@gmail.com"},{id:3,name:"fritz",username:"Fritz",email:"email@gmail.com"},{id:4,name:"alif",username:"Alif",email:"alif@gmail.com"},{id:5,name:"mirza",username:"Mirza",email:"mirza@gmail.com"},{id:6,name:"daffa",username:"Daffa",email:"daffa@gmail.com"},{id:7,name:"fifah",username:"Fifah",email:"fifah@gmail.com"},{id:8,name:"rizal",username:"Rizal",email:"rizal@gmail.com"},{id:9,name:"bima",username:"Bima",email:"bima@gmail.com"},{id:10,name:"Nai",username:"nai",email:"nai@gmail.com"},{id:11,name:"aqsha",username:"Aqsha",email:"aqsha@gmail.com"}],p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).SearchBoxChange=function(a){e.setState({search:a.target.value})},e.state={robots:[],search:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(a){e.setState({robots:a})})).catch((function(a){console.log(a),e.setState({robots:g})}))}},{key:"render",value:function(){var e=this.state,a=e.robots,t=e.search,n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(d,{searchBoxChange:this.SearchBoxChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(h,{robots:n}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c8291be5.chunk.js.map