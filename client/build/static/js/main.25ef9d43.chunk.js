(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),l=(n(21),n(5)),s=n(6),i=n(8),u=n(7),m=n(9),d=n(32),p=n(31),E=(n(23),function(){return c.a.createElement("header",null,c.a.createElement("span",{className:"title"},c.a.createElement("strong",null,c.a.createElement("span",{className:"bordered",id:"one"},"#"),c.a.createElement("span",{className:"bordered",id:"two"},"5"),c.a.createElement("span",{className:"bordered",id:"three"},"A"),c.a.createElement("span",{className:"bordered",id:"four"},"L"),c.a.createElement("span",{className:"bordered",id:"five"},"I"),c.a.createElement("span",{className:"bordered",id:"six"},"V"),c.a.createElement("span",{className:"bordered",id:"seven"},"E"))),c.a.createElement(d.a,null,c.a.createElement("span",{className:"link"},c.a.createElement("span",null,c.a.createElement(p.a,{to:"/login",style:{marginRight:"40px"}},"Login")),c.a.createElement("span",null,c.a.createElement(p.a,{to:"/teamselect",style:{marginRight:"40px"}},"Select Teams")),c.a.createElement("span",null,c.a.createElement(p.a,{to:"/standings"},"Standings")))))}),b=n(33),h=n(34),f=(n(27),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+e).then(function(e){return e.json()}).then(function(e){e?n.setState({passwordFeedback:"Accepted!"}):n.setState({passwordFeedback:"No good!"})}).then(function(e){return n.setState({user:e})})},n.state={passwordFeedback:"",user:"",post:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("login page mounted")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Login"},c.a.createElement("div",{id:"logincontainer"},c.a.createElement("div",{id:"containercontents"}),c.a.createElement("p",null,c.a.createElement("strong",null,"Come get some nice #5ALIVE")),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("p",null,"Enter password:"),c.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),c.a.createElement("button",{type:"submit",style:{marginLeft:"10px"}},"Submit")),c.a.createElement("p",null,this.state.passwordFeedback)))}}]),t}(a.Component)),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("teamselect mounted")}},{key:"render",value:function(){return c.a.createElement("div",{className:"TeamSelect"},"Hello")}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("standings mounted")}},{key:"render",value:function(){return c.a.createElement("div",{className:"Standings"},"The season hasn't started yet stupid!")}}]),t}(a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("main mounted")}},{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(function(){return c.a.createElement("div",null,c.a.createElement(b.a,null,c.a.createElement(h.a,{exact:!0,path:"/",component:f}),c.a.createElement(h.a,{path:"/teamselect",component:g}),c.a.createElement(h.a,{path:"/standings",component:v})))},null))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement(j,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d.a,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.25ef9d43.chunk.js.map