(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=(a(20),a(5)),i=a(6),s=a(8),m=a(7),u=a(9),d=a(40),E=(a(22),function(){return l.a.createElement("header",null,l.a.createElement("span",{className:"title"},l.a.createElement("strong",null,l.a.createElement("span",{className:"bordered",id:"one"},"#"),l.a.createElement("span",{className:"bordered",id:"two"},"5"),l.a.createElement("span",{className:"bordered",id:"three"},"A"),l.a.createElement("span",{className:"bordered",id:"four"},"L"),l.a.createElement("span",{className:"bordered",id:"five"},"I"),l.a.createElement("span",{className:"bordered",id:"six"},"V"),l.a.createElement("span",{className:"bordered",id:"seven"},"E"))),l.a.createElement("span",{className:"link"},l.a.createElement("span",null,l.a.createElement(d.a,{to:"/login"},"HOME")),l.a.createElement("span",null,l.a.createElement(d.a,{to:"/info"},"INFO")),l.a.createElement("span",null,l.a.createElement(d.a,{to:"/standings"},"STANDINGS")),l.a.createElement("span",null,l.a.createElement(d.a,{to:"/teamselect",style:{marginRight:"40px"}},"SELECT TEAMS"))))}),h=a(41),p=a(42),f=(a(26),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+e).then(function(e){return e.json()}).then(function(e){e?a.setState({passwordFeedback:"Accepted!"}):a.setState({passwordFeedback:"No good!"})}).then(function(e){return a.setState({userId:e})})},a.state={passwordFeedback:"",userId:null,name:"",post:"",isAuthenticated:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("login page mounted")}},{key:"componentWillUpdate",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Login"},l.a.createElement("div",{id:"logincontainer"},l.a.createElement("div",{id:"containercontents"}),l.a.createElement("p",null,l.a.createElement("strong",null,"Come get some nice #5ALIVE")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,"Enter password:"),l.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),l.a.createElement("button",{type:"submit",style:{marginLeft:"10px"}},"Submit")),l.a.createElement("p",null,this.state.passwordFeedback)))}}]),t}(n.Component)),b=(a(28),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("teamselect mounted")}},{key:"render",value:function(){return l.a.createElement("div",{className:"TeamSelect"},l.a.createElement("span",null,"COMING REAL SOON"))}}]),t}(n.Component)),v=(a(30),function(e){return l.a.createElement("div",{className:"Standing"},l.a.createElement("span",null,e.name," -"),l.a.createElement("span",null,"- ",e.wins))}),y=(a(32),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={standingsHard:{"Chris Clark":129,"Coreen Kopper":128,"Patrick Grove":124,"Kevin Meuse":124,"Brendon Desrochers":123,"Gil Estupinan":123,"Timothy Falkner":123,"French/Reiman":122,"Scott Sherman":122,"Matt Gordon":122,"Mike Agresti":121,"Brendan Bansavage":121,"Kyle Harris":120,"Ron Haraka":119,"Adam Sidney":118,"Troy Davis":117,"Andrew Soltish":117,"Brayton Wike":117,"Joe Franza":116,"Calvin Groves":114,"Erin McDermott":114,"Jay Kelly":114,"Michael Leboff":113,"Johnny Vohra":113,"Ryan Corbalis":109,"Rob Coloney":109,"Alex Raup":108,"Lucille Kelly":100,"Dan Vogel":91,"Chris Godfrey":77,"Amol Vohra":75}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"outstandings"},l.a.createElement("div",{className:"Standings"},l.a.createElement("div",{id:"names"},Object.keys(this.state.standingsHard).map(function(t,a){return l.a.createElement(v,{key:a,name:t,wins:e.state.standingsHard[t]})}))),l.a.createElement("div",{id:"comment"},"These are from last year"))}}]),t}(n.Component)),g=(a(34),function(){return l.a.createElement("div",{className:"infocontainer"},l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,"HISTORY"),l.a.createElement("p",null,"The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his small village in Connecticut. All records that year were kept on elk hides and then burned ceremonially at the end of the season, a tradition that we continue today."),l.a.createElement(d.a,{to:"/pastchamps"},"Click to see our past winners"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"RULES"),l.a.createElement("p",null,"The rules are simple, and pleasing to the eye - participants select five teams that collectively won no more than 100 games the previous season. The person whose teams win the most games this year wins the grand prize: a Fast & The Furious DVD box set and a 6-pack of Doritos-flavored Mountain Dew."),l.a.createElement("br",null),l.a.createElement("h2",null,"2018-19"),l.a.createElement("p",null,"This season promises to be our greatest yet, with the following #5ALIVE legends already confirming their commitment:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,"Chris Godfrey"),l.a.createElement("li",null,"Pat Godfrey"),l.a.createElement("li",null,"Ryan Corbalis"),l.a.createElement("li",null,"Michael Jordan"),l.a.createElement("li",null,"JP Kelly"),l.a.createElement("li",null,"Dan Vogel"),l.a.createElement("li",null,"Wilt Chamberlain"),l.a.createElement("li",null,"Pat Godfrey"))))}),w=(a(36),function(){return l.a.createElement("div",{className:"champscontainer"},l.a.createElement("div",{className:"champs"},l.a.createElement("h2",null,"PAST CHAMPS"),l.a.createElement("div",null,"2018 - Chris Clark"),l.a.createElement("div",null,"2017 - Andrew Cahalan"),l.a.createElement("div",null,"2016 - Scott Sherman"),l.a.createElement("div",null,"2015 - Rob Coloney"),l.a.createElement("div",null,"2014 - Tim Faulkner"),l.a.createElement("div",null,"2013 - ???"),l.a.createElement("div",null,"2012 - ???"),l.a.createElement("div",null,"2011 - Troy Davis")))}),k=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(p.a,{path:"/",exact:!0,component:f}),l.a.createElement(p.a,{path:"/login",component:f}),l.a.createElement(p.a,{path:"/teamselect",component:b}),l.a.createElement(p.a,{path:"/standings",component:y}),l.a.createElement(p.a,{path:"/info",component:g}),l.a.createElement(p.a,{path:"/pastchamps",component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h.a,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.0df958d0.chunk.js.map