(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(19),l=a.n(i),c=(a(52),a(2)),r=a(3),m=a(5),o=a(4),u=a(6),d=a(130),h=(a(53),function(){return s.a.createElement("header",null,s.a.createElement("span",{className:"title"},s.a.createElement("strong",null,s.a.createElement("span",{className:"bordered",id:"one"},"#"),s.a.createElement("span",{className:"bordered",id:"two"},"5"),s.a.createElement("span",{className:"bordered",id:"three"},"A"),s.a.createElement("span",{className:"bordered",id:"four"},"L"),s.a.createElement("span",{className:"bordered",id:"five"},"I"),s.a.createElement("span",{className:"bordered",id:"six"},"V"),s.a.createElement("span",{className:"bordered",id:"seven"},"E"))),s.a.createElement("span",{className:"links"},s.a.createElement("span",null,s.a.createElement(d.a,{to:"/home"},"HOME")),s.a.createElement("span",null,s.a.createElement(d.a,{to:"/teamselect"},"PORTAL")),s.a.createElement("span",null,s.a.createElement(d.a,{to:"/picks"},"STATS")),s.a.createElement("span",null,s.a.createElement(d.a,{to:"/about"},"ABOUT")),s.a.createElement("span",{style:{marginLeft:"1.5vw"}},s.a.createElement(d.a,{to:"/pickfive"},"PICK-5"))))}),v=a(131),E=a(132),p=(a(56),a(7)),f=(a(57),a(58),function(e){return s.a.createElement("div",{className:"Message"},s.a.createElement("span",{className:"MessageAuthor"},e.author,": "),s.a.createElement("span",{className:"MessageText"},e.text," "),s.a.createElement("span",{className:"MessageTimestamp"},e.timestamp.replace("T"," ").split(".")[0]))}),k=a(43),b=a.n(k),N=a(44),S=a.n(N),C=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).checkChars=function(e){for(var t=0;t<e.length;t++)if(!a.validCharacters.includes(e[t]))return!1;return!0},a.handlePasswordSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){e[0]?(a.setState({user:e[0]}),a.setState({isAuthenticated:!0}),a.setState({post:""})):window.alert("Invalid password!")})},a.handleMessageSubmit=function(e){return e.preventDefault(),0===a.state.post.length||a.state.post.length>200?window.alert("Please enter between 1 and 200 characters"):a.checkChars(a.state.post)?(a.socket.emit("SEND_MESSAGE",{userid:a.state.user.id,username:a.state.user.name,text:a.state.post}),void a.setState({post:""})):window.alert("Invalid message - try removing any fancy punctuation")},a.handleSubmit=function(e){a.state.isAuthenticated?a.handleMessageSubmit(e):a.handlePasswordSubmit(e)},a.state={isAuthenticated:!1,post:"",user:{},messages:[]},a.socket=b()();var n=Object(p.a)(a);return a.updateScroll=function(){var e=document.getElementById("scrollhere");e.scrollTop=e.scrollHeight},a.socket.on("RECEIVE_MESSAGES",function(e){n.setState({messages:e}),n.updateScroll()}),a.validCharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",'"',",","."," ","'","(",")","[","]","|","@","$","%","^","*","=","_","!","?","-","+","/","<",">",";",":"],a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/messages").then(function(e){return e.json()}).then(function(t){e.setState({messages:t}),e.updateScroll()})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Chat"},s.a.createElement("div",{className:"ChatHeader"},s.a.createElement("span",null,"CHAT POWERED BY "),s.a.createElement("span",null,s.a.createElement("img",{src:S.a,alt:"logo"})),s.a.createElement("span",null," CHAT TECHNOLOGY")),s.a.createElement("div",{className:"Messages",id:"scrollhere"},this.state.messages.map(function(e,t){return s.a.createElement(f,{key:t,author:e.user_name,text:e.text,timestamp:e.created})})),s.a.createElement("div",{className:"ChatFooter"},s.a.createElement("div",null,this.state.isAuthenticated?"".concat(this.state.user.name," has entered the chat"):"Enter password to join chat:"),s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),s.a.createElement("button",{type:"submit",style:{marginLeft:"10px"}},this.state.isAuthenticated?"Send":"Submit")))))}}]),t}(n.Component),g=(a(90),a(91),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"StandingsTeamList"},s.a.createElement("div",{className:"pointer"}),s.a.createElement("div",{className:"StandingsTeamListContainer"},this.props.teams.map(function(e,t){return s.a.createElement("div",{className:"StandingsTeamContainer"},s.a.createElement("div",{key:t,className:"StandingsTeam"+[t]},e.name," (",e.w2018,"-",e.l2018,")"))})))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"StandingNew",onClick:this.handleClick},s.a.createElement("div",{className:"StandingHeader"},s.a.createElement("span",{className:"StandingName"},this.props.name),s.a.createElement("span",{className:"StandingWins"},this.props.wins)),s.a.createElement("div",null,this.state.isActive?s.a.createElement(g,{teams:this.props.teams}):null))}}]),t}(n.Component),O=(a(92),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={standings:[],updated:"4/12/2019"},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/standings").then(function(e){return e.json()}).then(function(t){e.setState({standings:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"StandingsContainer"},s.a.createElement("h3",null,"STANDINGS"),s.a.createElement("div",{className:"Standings"},s.a.createElement("div",null,this.state.standings?this.state.standings.map(function(e,t){return s.a.createElement(T,{key:t,name:e.name,wins:e.wins,teams:e.teams_2018})}):null)),s.a.createElement("div",{className:"UpdateTime"},"UPDATED ",this.state.updated))}}]),t}(n.Component)),j=(a(41),function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"TestimonialsHeader"},s.a.createElement("h2",null,"CHAT TESTIMONIALS")),s.a.createElement("div",{className:"TestimonialsBody"},s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I was feeling chatty one afternoon, and it turned out the #5ALIVE chat was exactly what I was looking for."'),s.a.createElement("div",{className:"TestimonialAuthor"},"--2018 and 2019 #5ALIVE Runner-up Coreen Kopper")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"Very impressive!"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--2014 #5ALIVE Champion Tim Falkner")),s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I met my fiancee on the #5ALIVE chat - we\'ve been inseparable ever since"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Don Jepsen")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"The #5ALIVE chat is a great way to stay in touch with friends and family, and the best part is it\'s built on dynamic #5ALIVE chat technology!"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Seven-time NBA Scoring Champion Wilt Chamberlain"))))}),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),console.log(a.state.post),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){console.log(e[0]),e[0]?(console.log(e[0]),a.setState({user:e[0]}),a.setState({authenticated:!0}),a.setState({passwordFeedback:"Welcome ".concat(a.state.user.name.split(" ")[0],"!")})):a.setState({passwordFeedback:"No good!"})})},a.handleTestimonialsClick=function(e){a.state.testimonialsActive?(document.getElementById("dim").classList.remove("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.remove("TestimonialsActive")):(document.getElementById("dim").classList.add("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.add("TestimonialsActive")),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsHide=function(e){a.state.testimonialsActive&&a.handleTestimonialsClick(e)},a.state={user:{},passwordFeedback:"",post:"",authenticated:!1,testimonialsActive:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.handleTestimonialsHide},s.a.createElement("div",{className:"TestimonialsContainer"},this.state.testimonialsActive?s.a.createElement(j,null):null),s.a.createElement("div",{id:"dim"},s.a.createElement("div",{className:"Home"},s.a.createElement("div",null,s.a.createElement(O,null)),s.a.createElement("div",{className:"ChatContainer"},s.a.createElement(C,null)))),s.a.createElement("div",{className:"TestimonialsToggle"},s.a.createElement("a",{onClick:this.handleTestimonialsClick},this.state.testimonialsActive?"Click to Hide Chat Testimonials":"Click to View Chat Testimonials")))}}]),t}(n.Component),A=(a(93),function(){return s.a.createElement("div",{className:"AboutContainer"},s.a.createElement("div",{className:"About"},s.a.createElement("h2",null,"HISTORY"),s.a.createElement("p",null,"The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his small village in Connecticut. All records that year were kept on elk hides and then burned ceremonially at the end of the season, a tradition that we continue today."),s.a.createElement(d.a,{to:"/pastchamps"},"Click to see our past winners"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null,"RULES"),s.a.createElement("p",null,"The rules are simple, and pleasing to the eye - participants select five teams that collectively won no more than 100 games the previous season. The person whose teams win the most games this year (excluding non-NCAA postseason tournaments - i.e. NIT, CIT, etc.) wins the grand prize: a Fast & The Furious DVD box set and a 6-pack of Doritos-flavored Mountain Dew."),s.a.createElement("br",null),s.a.createElement("h2",null,"2019-20"),s.a.createElement("p",null,"This season promises to be our most exciting yet, with the following #5ALIVE legends sitting on the Rules and Excitement Committee:",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("li",null,"Chris Godfrey"),s.a.createElement("li",null,"Patrick Godfrey"),s.a.createElement("li",null,"Ryan Excitement"),s.a.createElement("li",null,"Action Vogel"),s.a.createElement("li",null,"JP Kelly"),s.a.createElement("li",null,"Michael Jordan"),s.a.createElement("li",null,"Harrison Godfrey"),s.a.createElement("li",null,"Wilt Chamberlain"),s.a.createElement("li",null,'Rob "The Committee" Coloney'))))}),w=(a(94),function(){return s.a.createElement("div",{className:"champscontainer"},s.a.createElement("div",{className:"champs"},s.a.createElement("h2",null,"PAST CHAMPS"),s.a.createElement("div",null,"2019 - Mark McGill"),s.a.createElement("div",null,"2018 - Chris Clark"),s.a.createElement("div",null,"2017 - Andrew Cahalan"),s.a.createElement("div",null,"2016 - Scott Sherman"),s.a.createElement("div",null,"2015 - Rob Coloney"),s.a.createElement("div",null,"2014 - Tim Falkner"),s.a.createElement("div",null,"2013 - Tommy Champton"),s.a.createElement("div",null,"2012 - Wilt Chamberlain"),s.a.createElement("div",null,"2011 - Troy Davis")))}),P=(a(95),a(96),a(97),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"PicksTeamList"},s.a.createElement("div",{className:"pointer"}),s.a.createElement("div",{className:"PicksTeamListContainer"},this.props.teams.map(function(e,t){return s.a.createElement("div",{className:"PicksTeamContainer"},s.a.createElement("div",{key:t,className:"PicksTeam"+[t]},e.name))})))}}]),t}(n.Component)),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickNew",onClick:this.handleClick},s.a.createElement("span",{className:"PickName"},this.props.name),s.a.createElement("div",null,this.state.isActive?s.a.createElement(P,{teams:this.props.teams}):null))}}]),t}(n.Component),L=(a(98),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={pickles:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/standings").then(function(e){return e.json()}).then(function(t){e.setState({pickles:t.sort(function(e,t){return t.name>e.name?-1:e.name>t.name?1:void 0})})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"PICKS"),s.a.createElement("div",{className:"Pickles"},s.a.createElement("div",null,this.state.pickles?this.state.pickles.map(function(e,t){return s.a.createElement(I,{key:t,name:e.name,teams:e.teams_2018})}):null)))}}]),t}(n.Component)),F=function(){return console.log("HELLO"),s.a.createElement("div",null,s.a.createElement("div",{className:"TestimonialsHeader"},s.a.createElement("h2",null,"PICKS PAGE TESTIMONIALS")),s.a.createElement("div",{className:"TestimonialsBody"},s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I was looking for info on everyone\'s picks one evening, and the #5ALIVE Picks page had everything I wanted and more."'),s.a.createElement("div",{className:"TestimonialAuthor"},"--2018 #5ALIVE Runner-up Coreen Kopper")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"[mind blown emoji]"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--2018-19 #5ALIVE Participant Patrick Godfrey")),s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I met my mistress on the #5ALIVE Picks page - we\'ve been sneaking around and committing lots of adultery ever since"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Steve Johnson")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"The #5ALIVE analytics and research team has aboslutely outdone themselves this time with the 2018 Picks page. It has a list of everyone\'s teams, plus two other lists for added lists. God bless you, #5ALIVE!"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Four-time NBA MVP Wilt Chamberlain"))))},H=(a(99),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={schools:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/picksbyschool").then(function(e){return e.json()}).then(function(t){e.setState({schools:t})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"PICKS BY SCHOOL"),s.a.createElement("div",{className:"PicksBySchool"},s.a.createElement("div",null,this.state.schools.map(function(e){return s.a.createElement("div",{className:"PicksBySchoolSchool"},s.a.createElement("span",{className:"PickSchoolName"},e.name),s.a.createElement("span",{className:"PickNumber"},e.picks))}))))}}]),t}(n.Component)),B=(a(100),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={users:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/simscore").then(function(e){return e.json()}).then(function(t){e.setState({users:t})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,s.a.createElement("span",null,"HIGGS-BOSON SIMILARITY INDEX")),s.a.createElement("div",{className:"SimScore"},s.a.createElement("div",null,this.state.users.map(function(e,t){return s.a.createElement("div",{className:"SimScoreScore"},s.a.createElement("span",{className:"SimScoreName"},e.name),s.a.createElement("span",{className:"SimScoreNumber"},e.sim_score_2018))}))))}}]),t}(n.Component)),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleTestimonialsClick=function(e){a.state.testimonialsActive?document.getElementById("dim").classList.remove("Dim"):document.getElementById("dim").classList.add("Dim"),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsClick=function(e){a.state.testimonialsActive?(document.getElementById("dim").classList.remove("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.remove("TestimonialsActive")):(document.getElementById("dim").classList.add("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.add("TestimonialsActive")),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.state={testimonialsActive:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"TestimonialsContainer"},this.state.testimonialsActive?s.a.createElement(F,null):null),s.a.createElement("div",{id:"dim"},s.a.createElement("div",{className:"Picks"},s.a.createElement("div",{className:"PicksBySchoolContainer"},s.a.createElement(H,null)),s.a.createElement("div",{className:"PicklesContainer"},s.a.createElement(L,null)),s.a.createElement("div",{className:"SimScoreContainer"},s.a.createElement(B,null)))),s.a.createElement("div",{className:"TestimonialsToggle"},s.a.createElement("a",{onClick:this.handleTestimonialsClick},this.state.testimonialsActive?"Click to Hide Picks Page Testimonials":"Click to View Picks Page Testimonials")))}}]),t}(n.Component),M=(a(101),a(102),a(103),a(104),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveStandingsTeamList"},s.a.createElement("div",{className:"PickFiveStandingsTeamListContainer"},s.a.createElement("div",{className:"PickFivePointer"},s.a.createElement("div",null)),this.props.teams.map(function(e,t){return s.a.createElement("div",{className:"PickFiveStandingsTeamContainer"},s.a.createElement("div",{key:t,className:"PickFiveStandingsTeam"+[t]},s.a.createElement("span",null,e.name),s.a.createElement("span",{className:"PickFiveStandingsTeamRound"},e.round),s.a.createElement("span",{className:"PickFiveStandingsTeamPoints"},e.points)))})))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveStanding",onClick:this.handleClick},s.a.createElement("div",{className:"PickFiveStandingHeader"},s.a.createElement("span",{className:"PickFiveStandingNameYearContainer"},s.a.createElement("span",{className:"PickFiveStandingName"},this.props.name),s.a.createElement("span",{className:"PickFiveStandingYear"},this.props.year||null)),s.a.createElement("span",{className:"PickFiveStandingScore"},this.props.score)),s.a.createElement("div",null,this.state.isActive?s.a.createElement(M,{teams:this.props.teams}):null))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={standings:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){var e=this;this.setState({isActive:!this.state.isActive}),fetch("api/pickfive/standings").then(function(e){return e.json()}).then(function(t){console.log("data",t),e.setState({standings:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveStandingsContainer"},s.a.createElement("h3",{onClick:this.handleClick},"2019 FINAL STANDINGS"),this.state.isActive?s.a.createElement("div",{className:"PickFiveStandings"},s.a.createElement("div",null,this.state.standings.map(function(e,t){return s.a.createElement(D,{key:t,name:e.name,score:e.score,teams:e.teams})}))):null)}}]),t}(n.Component),V=(a(105),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveChampsStanding",onClick:this.handleClick},s.a.createElement("div",{className:"PickFiveChampsStandingHeader"},s.a.createElement("div",{className:"PickFiveChampsStandingYear"},s.a.createElement("span",null,this.props.year)),s.a.createElement("div",{className:"PickFiveChampsStandingName"},this.props.name)),s.a.createElement("div",null,this.state.isActive?s.a.createElement(M,{teams:this.props.teams}):null))}}]),t}(n.Component)),_=(a(106),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={PickFiveChamps:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/pickfive/champs").then(function(e){return e.json()}).then(function(t){e.setState({PickFiveChamps:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveChampsContainer"},s.a.createElement("h3",{onClick:this.handleClick},"HALL OF CHAMPIONS"),this.state.isActive?s.a.createElement("div",{className:"PickFiveChamps"},s.a.createElement("div",{className:"PickFiveChampsStandings"},this.state.PickFiveChamps?this.state.PickFiveChamps.map(function(e,t){return s.a.createElement(V,{key:t,name:e.name,points:e.points,teams:e.teams,year:e.year})}):null)):null)}}]),t}(n.Component)),G=(a(107),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={PickFiveHighScores:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/pickfive/highscores").then(function(e){return e.json()}).then(function(t){e.setState({PickFiveHighScores:t})})}},{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveHighScoresContainer"},s.a.createElement("h3",{onClick:this.handleClick},"HALL OF HIGH SCORES"),this.state.isActive?s.a.createElement("div",{className:"PickFiveHighScores"},s.a.createElement("div",{className:"PickFiveHighScoresStandings"},this.state.PickFiveHighScores?this.state.PickFiveHighScores.map(function(e,t){return s.a.createElement(D,{key:t,rank:t+1,name:e.name,score:e.score,teams:e.teams,year:e.year})}):null)):null)}}]),t}(n.Component)),W=a(45),U=a.n(W),K=(a(123),a(124),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"dim"},s.a.createElement("div",{className:"PickFiveDescription"},"Welcome to the PICK 5, #5ALIVE'S tournament-only cousin. Gaze in awe at the the all-time high scores, or take an inspiring stroll down the Hall of Champions. (click header to expand/collapse)"),s.a.createElement("div",{className:"PickFive",style:{height:"100%"}},s.a.createElement(U.a,{centerMode:!0,dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,variableWidth:!0,initialSlide:1},s.a.createElement("div",null,s.a.createElement(R,null)),s.a.createElement("div",null,s.a.createElement(_,null)),s.a.createElement("div",null,s.a.createElement(G,null))))))}}]),t}(n.Component)),Q=(a(125),a(126),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleUserBoxSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){e[0]?(console.log("DATA!",e[0]),a.setState({user:e[0]}),a.setState({isAuthenticated:!0}),a.setState({post:""})):window.alert("Invalid password!")})},a.handleTeamsBoxClick=function(e){e.preventDefault(),document.getElementById(e.target.id).classList.toggle("highlighted");var t=a.state.selectedTeams;t[e.target.id]?t[e.target.id].selected=!t[e.target.id].selected:t[e.target.id]={selected:!0},a.setState({selectedTeams:t})},a.handleSelectBoxSubmit=function(){var e=Object.keys(a.state.selectedTeams).filter(function(e){return!0===a.state.selectedTeams[e].selected}).map(function(e){return parseInt(e)+2}),t=e.reduce(function(e,t){return e+a.state.teamsHard[t-2].w1819},0);console.log("activeWinsTotal",t),a.state.user.name?5!==e.length?a.setState({submitFeedback:"Select five teams!"}):t>100?a.setState({submitFeedback:"Try again!"}):fetch("/api/teams?teamids=".concat(e.join(","),"&userid=").concat(a.state.user.id)).then(function(e){fetch("/api/password?password="+a.state.user.password).then(function(e){return e.json()}).then(function(e){if(console.log(e[0]),e[0]){var t=a.state;t.user=e[0],t.submitFeedback="Picks submitted!",a.setState({tempState:t})}})}):a.setState({submitFeedback:"Not signed in!"})},a.state={selectedTeams:{},user:{},post:"",submitFeedback:"",teamsHard:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/schools").then(function(e){return e.json()}).then(function(t){e.setState({teamsHard:t})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TeamSelect"},s.a.createElement("div",null,s.a.createElement("div",{className:"UserBox"},s.a.createElement("div",{className:"UserBoxMessageContainer"},s.a.createElement("div",{className:"UserBoxMessage"},"WELCOME TO THE NCAA TEAM SELECTION PORTAL"),s.a.createElement("div",{className:"UserBoxForm"},this.state.user.name?this.state.user.name+" has entered the portal.":s.a.createElement("form",{onSubmit:this.handleUserBoxSubmit},"Enter password:",s.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),s.a.createElement("button",{type:"submit",style:{marginLeft:"10px"}},"Submit")))),s.a.createElement("div",{className:"UserBoxTeams"},"Current Teams:",s.a.createElement("br",null),s.a.createElement("p",{className:"UserBoxTeamsList"},s.a.createElement("div",null,this.state.user.teams_2019?null:"None"),s.a.createElement("div",null,this.state.user.teams_2019?this.state.teamsHard[this.state.user.teams_2019[0]-2].name:null),s.a.createElement("div",null,this.state.user.teams_2019?this.state.teamsHard[this.state.user.teams_2019[1]-2].name:null),s.a.createElement("div",null,this.state.user.teams_2019?this.state.teamsHard[this.state.user.teams_2019[2]-2].name:null),s.a.createElement("div",null,this.state.user.teams_2019?this.state.teamsHard[this.state.user.teams_2019[3]-2].name:null),this.state.user.teams_2019?this.state.teamsHard[this.state.user.teams_2019[4]-2].name:null)))),s.a.createElement("div",{className:"TeamsContainer"},s.a.createElement("div",{className:"TeamsContainerHeading"},s.a.createElement("span",null,"School"),s.a.createElement("span",null,"2018-19 W-L")),s.a.createElement("div",{className:"TeamsContainerBody"},this.state.teamsHard.map(function(t,a){return s.a.createElement("div",{className:"TeamSelectRow",id:a,onClick:e.handleTeamsBoxClick},s.a.createElement("span",{id:a,className:"MainTeamName"},t.name),s.a.createElement("span",{id:a,className:"MainTeamRecord"},t.w1819,"-",t.l1819))}))),s.a.createElement("div",null,s.a.createElement("div",{className:"SelectBoxContainer"},s.a.createElement("div",{className:"SelectBoxHeader"},"SELECTED TEAMS"),s.a.createElement("div",{className:"SelectBoxTeams"},Object.keys(this.state.selectedTeams).filter(function(t){return!0===e.state.selectedTeams[t].selected}).map(function(t){return s.a.createElement("div",{key:t,className:"SelectBoxTeamRow"},s.a.createElement("span",{className:"smallteamname"},e.state.teamsHard[t].name+" - "),s.a.createElement("span",{className:"smallteamwins"},e.state.teamsHard[t].w1819))})),s.a.createElement("div",{className:"SelectBoxFooter"},s.a.createElement("div",{className:"SelectBoxWinTotal"},s.a.createElement("div",null,Object.keys(this.state.selectedTeams).reduce(function(t,a){return e.state.selectedTeams[a].selected?t+e.state.teamsHard[a].w1819:t},0)),s.a.createElement("div",{style:{fontSize:"10px"}},"WINS"))),s.a.createElement("div",{className:"SelectBoxSubmit"},s.a.createElement("button",{onClick:this.handleSelectBoxSubmit},"SUBMIT")),s.a.createElement("div",{className:"SelectBoxNotification"},this.state.submitFeedback||null))))}}]),t}(n.Component)),Y=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v.a,null,s.a.createElement("div",null,s.a.createElement(h,null),s.a.createElement(E.a,{path:"/",exact:!0,component:y}),s.a.createElement(E.a,{path:"/home",component:y}),s.a.createElement(E.a,{path:"/about",component:A}),s.a.createElement(E.a,{path:"/pastchamps",component:w}),s.a.createElement(E.a,{path:"/picks",component:x}),s.a.createElement(E.a,{path:"/pickfive",component:K}),s.a.createElement(E.a,{path:"/teamselect",component:Q}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(v.a,{style:{width:"100%"}},s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/fivealivelogo.2829ca5d.jpg"},47:function(e,t,a){e.exports=a(128)},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},87:function(e,t){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.54e7262e.chunk.js.map