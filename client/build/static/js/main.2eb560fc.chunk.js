(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(19),l=a.n(s),c=(a(55),a(2)),r=a(3),m=a(5),o=a(4),u=a(6),d=a(147),h=(a(56),function(){return i.a.createElement("header",null,i.a.createElement("span",{className:"title"},i.a.createElement("strong",null,i.a.createElement("span",{className:"bordered",id:"one"},"#"),i.a.createElement("span",{className:"bordered",id:"two"},"5"),i.a.createElement("span",{className:"bordered",id:"three"},"A"),i.a.createElement("span",{className:"bordered",id:"four"},"L"),i.a.createElement("span",{className:"bordered",id:"five"},"I"),i.a.createElement("span",{className:"bordered",id:"six"},"V"),i.a.createElement("span",{className:"bordered",id:"seven"},"E"))),i.a.createElement("span",{className:"links"},i.a.createElement("span",null,i.a.createElement(d.a,{to:"/home"},"HOME")),i.a.createElement("span",null,i.a.createElement(d.a,{to:"/picks"},"STATS")),i.a.createElement("span",null,i.a.createElement(d.a,{to:"/about"},"ABOUT")),i.a.createElement("span",{style:{marginLeft:"1.5vw"}},i.a.createElement(d.a,{to:"/pickfive"},"PICK-5"))))}),v=a(148),E=a(149),p=(a(59),a(7)),f=(a(60),a(61),a(44)),k=a.n(f),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={containsLink:!1,messageTextSegments:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"Message"},i.a.createElement("span",{className:"MessageAuthor"},this.props.author,": "),i.a.createElement("span",{className:"MessageText",target:"_blank"},i.a.createElement(k.a,null,this.props.text)),i.a.createElement("span",{className:"MessageTimestamp"},this.props.timestamp.replace("T"," ").split(".")[0]))}}]),t}(n.Component),C=a(45),N=a.n(C),g=a(46),S=a.n(g),O=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).checkChars=function(e){for(var t=0;t<e.length;t++)if(!a.validCharacters.includes(e[t]))return!1;return!0},a.handlePasswordSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){e[0]?(a.setState({user:e[0]}),a.setState({isAuthenticated:!0}),a.setState({post:""})):window.alert("Invalid password!")})},a.handleMessageSubmit=function(e){return e.preventDefault(),0===a.state.post.length||a.state.post.length>500?window.alert("Please enter between 1 and 500 characters"):a.checkChars(a.state.post)?(a.socket.emit("SEND_MESSAGE",{userid:a.state.user.id,username:a.state.user.name,text:a.state.post}),void a.setState({post:""})):window.alert("Couldn't send message - try removing any fancy punctuation")},a.handleSubmit=function(e){a.state.isAuthenticated?a.handleMessageSubmit(e):a.handlePasswordSubmit(e)},a.state={isAuthenticated:!1,post:"",user:{},messages:[]},a.socket=N()();var n=Object(p.a)(a);return a.updateScroll=function(){var e=document.getElementById("scrollhere");e.scrollTop=e.scrollHeight},a.socket.on("RECEIVE_MESSAGES",function(e){n.setState({messages:e}),n.updateScroll()}),a.validCharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",'"',",","."," ","'","(",")","[","]","|","@","$","%","^","*","=","_","!","?","-","+","/","<",">",";",":"],a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/messages").then(function(e){return e.json()}).then(function(t){e.setState({messages:t}),e.updateScroll()})}},{key:"render",value:function(){var e=this;i.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})},style:{marginRight:"10px"}});return i.a.createElement("div",{className:"Chat"},i.a.createElement("div",{className:"ChatHeader"},i.a.createElement("div",null,i.a.createElement("span",null,"CHAT POWERED BY "),i.a.createElement("span",null,i.a.createElement("img",{src:S.a,alt:"logo"})),i.a.createElement("span",null," CHAT TECHNOLOGY")),i.a.createElement("div",null,"AND ZOOM-LINK TECHNOLOGY")),i.a.createElement("div",{className:"Messages",id:"scrollhere"},this.state.messages.map(function(e,t){return i.a.createElement(b,{key:t,author:e.user_name,text:e.text,timestamp:e.created})})),i.a.createElement("div",{className:"ChatFooter"},this.state.isAuthenticated?i.a.createElement("div",null,i.a.createElement("div",{className:"ChatFooterNotification"},this.state.user.name," has entered the Chat portal"),i.a.createElement("form",{className:"MessageForm",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})},style:{marginRight:"10px"}}),i.a.createElement("button",{type:"submit"},"Send Message"))):i.a.createElement("div",null,i.a.createElement("form",{className:"PasswordForm",onSubmit:this.handleSubmit},"Enter password:",i.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),i.a.createElement("button",{type:"submit"},"Login")))))}}]),t}(n.Component),T=(a(107),a(108),function(e){return i.a.createElement("div",{className:"TeamBox"},i.a.createElement("div",{className:"TeamLogoContainer"},i.a.createElement("img",{src:"https://five-alive-team-logos.s3-us-west-1.amazonaws.com/".concat(e.team.name,".gif")})),i.a.createElement("div",{className:"TeamTextContainer"},i.a.createElement("h2",null,e.team.name," ",e.team.nickname),i.a.createElement("h6",null,"CONF"),i.a.createElement("div",null,e.team.conference),i.a.createElement("h6",null,"W-L"),i.a.createElement("div",null,e.team.w2019,"-",e.team.l2019),i.a.createElement("h6",null,"2018-19 W-L"),i.a.createElement("div",null,e.team.w1819,"-",e.team.l1819)))}),y=(a(109),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={activeTeam:null},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){console.log("HELLO"),this.state.activeTeam===e.target.className[e.target.className.length-1]?this.setState({activeTeam:null}):this.setState({activeTeam:e.target.className[e.target.className.length-1]})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"StandingsTeamList"},i.a.createElement("div",{className:"StandingsTeamListContainer"},i.a.createElement("div",{className:"StandingsTeamListPointer"},i.a.createElement("div",null)),this.props.teams.map(function(t,a){return i.a.createElement("div",{className:"StandingsTeamContainer"},i.a.createElement("div",{key:a,className:"StandingsTeam"+[a],onClick:e.handleClick},i.a.createElement("span",{className:"StandingsSpan"+[a]},t.name),i.a.createElement("span",null,t.w2019)))})),this.state.activeTeam?i.a.createElement("div",{className:"TeamBoxContainer"},i.a.createElement(T,{team:this.props.teams[this.state.activeTeam]})):null)}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return i.a.createElement("div",{className:"StandingNew"},i.a.createElement("div",{className:"StandingHeader",onClick:this.handleClick},i.a.createElement("span",{className:"StandingName"},this.props.name),i.a.createElement("span",{className:"StandingWins"},this.props.wins)),i.a.createElement("div",null,this.state.isActive?i.a.createElement(y,{teams:this.props.teams}):null))}}]),t}(n.Component),A=(a(110),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={standings:[],updated:"11/13/2019"},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/standings").then(function(e){return e.json()}).then(function(t){e.setState({standings:t})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"StandingsContainer"},i.a.createElement("h3",null,"STANDINGS"),i.a.createElement("div",{className:"Standings"},i.a.createElement("div",null,this.state.standings?this.state.standings.map(function(e,t){return i.a.createElement(j,{key:t,name:e.name,teams:e.teams_2019,wins:e.wins,isActive:!1})}):null)),i.a.createElement("div",{className:"UpdateTime"},"UPDATED ",this.state.updated))}}]),t}(n.Component)),w=(a(42),function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"TestimonialsHeader"},i.a.createElement("h2",null,"CHAT TESTIMONIALS")),i.a.createElement("div",{className:"TestimonialsBody"},i.a.createElement("div",{className:"TestimonialLeft"},i.a.createElement("div",{className:"TestimonialQuote"},'"I was feeling chatty one afternoon, and it turned out the #5ALIVE chat was exactly what I was looking for."'),i.a.createElement("div",{className:"TestimonialAuthor"},"--2018 and 2019 #5ALIVE Runner-up Coreen Kopper")),i.a.createElement("div",{className:"TestimonialRight"},i.a.createElement("div",{className:"TestimonialQuote"},'"Very impressive!"'),i.a.createElement("div",{className:"TestimonialAuthor"},"--2014 #5ALIVE Champion Tim Falkner")),i.a.createElement("div",{className:"TestimonialLeft"},i.a.createElement("div",{className:"TestimonialQuote"},'"I met my fiancee on the #5ALIVE chat - we\'ve been inseparable ever since"'),i.a.createElement("div",{className:"TestimonialAuthor"},"--Don Jepsen")),i.a.createElement("div",{className:"TestimonialRight"},i.a.createElement("div",{className:"TestimonialQuote"},'"The #5ALIVE chat is a great way to stay in touch with friends and family, and the best part is it\'s built on dynamic #5ALIVE chat technology!"'),i.a.createElement("div",{className:"TestimonialAuthor"},"--Seven-time NBA Scoring Champion Wilt Chamberlain"))))}),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),console.log(a.state.post),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){console.log(e[0]),e[0]?(console.log(e[0]),a.setState({user:e[0]}),a.setState({authenticated:!0}),a.setState({passwordFeedback:"Welcome ".concat(a.state.user.name.split(" ")[0],"!")})):a.setState({passwordFeedback:"No good!"})})},a.handleTestimonialsClick=function(e){a.state.testimonialsActive?(document.getElementById("dim").classList.remove("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.remove("TestimonialsActive")):(document.getElementById("dim").classList.add("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.add("TestimonialsActive")),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsHide=function(e){a.state.testimonialsActive&&a.handleTestimonialsClick(e)},a.state={user:{},passwordFeedback:"",post:"",authenticated:!1,testimonialsActive:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.handleTestimonialsHide},i.a.createElement("div",{className:"TestimonialsContainer"},this.state.testimonialsActive?i.a.createElement(w,null):null),i.a.createElement("div",{id:"dim"},i.a.createElement("div",{className:"Home"},i.a.createElement("div",null,i.a.createElement(A,null)),i.a.createElement("div",{className:"ChatContainer"},i.a.createElement(O,null)))),i.a.createElement("div",{className:"TestimonialsToggle"},i.a.createElement("a",{onClick:this.handleTestimonialsClick},this.state.testimonialsActive?"Click to Hide Chat Testimonials":"Click to View Chat Testimonials")))}}]),t}(n.Component),L=(a(111),function(){return i.a.createElement("div",{className:"AboutContainer"},i.a.createElement("div",{className:"About"},i.a.createElement("h2",null,"HISTORY"),i.a.createElement("p",null,"The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his small village in Connecticut. All records that year were kept on elk hides and then burned ceremonially at the end of the season, a tradition that we continue today."),i.a.createElement(d.a,{to:"/pastchamps"},"Take a look at our past winners"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h2",null,"RULES"),i.a.createElement("p",null,"The rules are simple, and pleasing to the eye - participants select five teams that collectively won no more than 100 games the previous season. The person whose teams win the most games this year (excluding non-NCAA postseason tournaments - i.e. NIT, CIT, etc.) wins the grand prize: a Fast & The Furious DVD box set and a 6-pack of Doritos-flavored Mountain Dew.",i.a.createElement("br",null),i.a.createElement("p",{style:{color:"yellow"}},"The deadline for entry this year has passed. For more info and college/professional recommendations, please contact Brendan Bansavage.")),i.a.createElement("br",null),i.a.createElement("h2",null,"EXCITEMENT INFO"),i.a.createElement("p",null,"This season promises to be our most exciting yet, with the following #5ALIVE legends sitting on the Rules and Excitement Committee:",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("li",null,"Chris Godfrey"),i.a.createElement("li",null,"Patrick Godfrey"),i.a.createElement("li",null,"Ryan Excitement"),i.a.createElement("li",null,"Action Vogel"),i.a.createElement("li",null,"JP Kelly"),i.a.createElement("li",null,"Michael Jordan"),i.a.createElement("li",null,"Harrison Godfrey"),i.a.createElement("li",null,"Wilt Chamberlain"),i.a.createElement("li",null,'Rob "The Committee" Coloney'))))}),F=(a(112),function(){return i.a.createElement("div",{className:"champscontainer"},i.a.createElement("div",{className:"champs"},i.a.createElement("h2",null,"PAST CHAMPS"),i.a.createElement("div",null,"2019 - Mark McGill"),i.a.createElement("div",null,"2018 - Chris Clark"),i.a.createElement("div",null,"2017 - Andrew Cahalan"),i.a.createElement("div",null,"2016 - Scott Sherman"),i.a.createElement("div",null,"2015 - Rob Coloney"),i.a.createElement("div",null,"2014 - Tim Falkner"),i.a.createElement("div",null,"2013 - Tommy Champton"),i.a.createElement("div",null,"2012 - Wilt Chamberlain"),i.a.createElement("div",null,"2011 - Troy Davis")))}),I=(a(113),a(114),a(115),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"PicksTeamList"},i.a.createElement("div",{className:"pointer"}),i.a.createElement("div",{className:"PicksTeamListContainer"},this.props.teams.map(function(e,t){return i.a.createElement("div",{className:"PicksTeamContainer"},i.a.createElement("div",{key:t,className:"PicksTeam"+[t]},e.name," (",e.w1819,"-",e.l1819,")"))})))}}]),t}(n.Component)),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return i.a.createElement("div",{className:"PickNew",onClick:this.handleClick},i.a.createElement("span",{className:"PickName"},this.props.name),i.a.createElement("div",null,this.state.isActive?i.a.createElement(I,{teams:this.props.teams}):null))}}]),t}(n.Component),D=(a(116),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={pickles:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/standings").then(function(e){return e.json()}).then(function(t){e.setState({pickles:t})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"PICKS"),i.a.createElement("div",{className:"Pickles"},i.a.createElement("div",null,this.state.pickles?this.state.pickles.map(function(e,t){return i.a.createElement(H,{key:t,name:e.name,teams:e.teams_2019})}):null)))}}]),t}(n.Component)),M=function(){return console.log("HELLO"),i.a.createElement("div",null,i.a.createElement("div",{className:"TestimonialsHeader"},i.a.createElement("h2",null,"STATS PAGE TESTIMONIALS")),i.a.createElement("div",{className:"TestimonialsBody"},i.a.createElement("div",{className:"TestimonialLeft"},i.a.createElement("div",{className:"TestimonialQuote"},'"I was looking for info on everyone\'s picks one evening, and the #5ALIVE Stats page had everything I wanted and more."'),i.a.createElement("div",{className:"TestimonialAuthor"},"--Two-time #5ALIVE Runner-up Coreen Kopper")),i.a.createElement("div",{className:"TestimonialRight"},i.a.createElement("div",{className:"TestimonialQuote"},'"[mind blown emoji]"'),i.a.createElement("div",{className:"TestimonialAuthor"},"--#5ALIVE Excitement Expert Patrick Godfrey")),i.a.createElement("div",{className:"TestimonialLeft"},i.a.createElement("div",{className:"TestimonialQuote"},'"I met my mistress on the #5ALIVE Picks page - we\'ve been sneaking around and committing lots of adultery ever since"'),i.a.createElement("div",{className:"TestimonialAuthor"},"--Stan Johnson")),i.a.createElement("div",{className:"TestimonialRight"},i.a.createElement("div",{className:"TestimonialQuote"},'"The #5ALIVE analytics and research team has aboslutely outdone themselves this time with the all-new Stats page. It has a list of everyone\'s teams, plus two other lists for added lists. God bless you, #5ALIVE!"'),i.a.createElement("div",{className:"TestimonialAuthor"},"--Four-time NBA MVP Wilt Chamberlain"))))},x=(a(117),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={schools:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/picksbyschool").then(function(e){return e.json()}).then(function(t){e.setState({schools:t})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"PICKS BY SCHOOL"),i.a.createElement("div",{className:"PicksBySchool"},i.a.createElement("div",null,this.state.schools.map(function(e){return i.a.createElement("div",{className:"PicksBySchoolSchool"},i.a.createElement("span",{className:"PickSchoolName"},e.name),i.a.createElement("span",{className:"PickNumber"},e.picks))}))))}}]),t}(n.Component)),B=(a(118),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={users:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/simscore").then(function(e){return e.json()}).then(function(t){e.setState({users:t})})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement("span",null,"SHADEK-FACKENTHAL SIMDEX")),i.a.createElement("div",{className:"SimScore"},i.a.createElement("div",null,this.state.users.map(function(e,t){return i.a.createElement("div",{className:"SimScoreScore"},i.a.createElement("span",{className:"SimScoreName"},e.name),i.a.createElement("span",{className:"SimScoreNumber"},e.sim_score_2019))}))))}}]),t}(n.Component)),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleTestimonialsClick=function(e){a.state.testimonialsActive?document.getElementById("dim").classList.remove("Dim"):document.getElementById("dim").classList.add("Dim"),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsClick=function(e){a.state.testimonialsActive?(document.getElementById("dim").classList.remove("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.remove("TestimonialsActive")):(document.getElementById("dim").classList.add("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.add("TestimonialsActive")),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsHide=function(e){a.state.testimonialsActive&&a.handleTestimonialsClick(e)},a.state={testimonialsActive:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.handleTestimonialsHide},i.a.createElement("div",{className:"TestimonialsContainer"},this.state.testimonialsActive?i.a.createElement(M,null):null),i.a.createElement("div",{id:"dim"},i.a.createElement("div",{className:"Picks"},i.a.createElement("div",{className:"PicksBySchoolContainer"},i.a.createElement(x,null)),i.a.createElement("div",{className:"PicklesContainer"},i.a.createElement(D,null)),i.a.createElement("div",{className:"SimScoreContainer"},i.a.createElement(B,null)))),i.a.createElement("div",{className:"TestimonialsToggle"},i.a.createElement("a",{onClick:this.handleTestimonialsClick},this.state.testimonialsActive?"Click to Hide Stats Page Testimonials":"Click to View Stats Page Testimonials")))}}]),t}(n.Component),R=(a(119),a(120),a(121),a(122),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"PickFiveStandingsTeamList"},i.a.createElement("div",{className:"PickFiveStandingsTeamListContainer"},i.a.createElement("div",{className:"PickFivePointer"},i.a.createElement("div",null)),this.props.teams.map(function(e,t){return i.a.createElement("div",{className:"PickFiveStandingsTeamContainer"},i.a.createElement("div",{key:t,className:"PickFiveStandingsTeam"+[t]},i.a.createElement("span",null,e.name),i.a.createElement("span",{className:"PickFiveStandingsTeamRound"},e.round),i.a.createElement("span",{className:"PickFiveStandingsTeamPoints"},e.points)))})))}}]),t}(n.Component)),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return i.a.createElement("div",{className:"PickFiveStanding",onClick:this.handleClick},i.a.createElement("div",{className:"PickFiveStandingHeader"},i.a.createElement("span",{className:"PickFiveStandingNameYearContainer"},i.a.createElement("span",{className:"PickFiveStandingName"},this.props.name),i.a.createElement("span",{className:"PickFiveStandingYear"},this.props.year||null)),i.a.createElement("span",{className:"PickFiveStandingScore"},this.props.score)),i.a.createElement("div",null,this.state.isActive?i.a.createElement(R,{teams:this.props.teams}):null))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={standings:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){var e=this;this.setState({isActive:!this.state.isActive}),fetch("api/pickfive/standings").then(function(e){return e.json()}).then(function(t){console.log("data",t),e.setState({standings:t})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"PickFiveStandingsContainer"},i.a.createElement("h3",{onClick:this.handleClick},"2019 FINAL STANDINGS"),this.state.isActive?i.a.createElement("div",{className:"PickFiveStandings"},i.a.createElement("div",null,this.state.standings.map(function(e,t){return i.a.createElement(G,{key:t,name:e.name,score:e.score,teams:e.teams})}))):null)}}]),t}(n.Component),K=(a(123),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return i.a.createElement("div",{className:"PickFiveChampsStanding",onClick:this.handleClick},i.a.createElement("div",{className:"PickFiveChampsStandingHeader"},i.a.createElement("div",{className:"PickFiveChampsStandingYear"},i.a.createElement("span",null,this.props.year)),i.a.createElement("div",{className:"PickFiveChampsStandingName"},this.props.name)),i.a.createElement("div",null,this.state.isActive?i.a.createElement(R,{teams:this.props.teams}):null))}}]),t}(n.Component)),Q=(a(124),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={PickFiveChamps:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/pickfive/champs").then(function(e){return e.json()}).then(function(t){e.setState({PickFiveChamps:t})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"PickFiveChampsContainer"},i.a.createElement("h3",{onClick:this.handleClick},"HALL OF CHAMPIONS"),this.state.isActive?i.a.createElement("div",{className:"PickFiveChamps"},i.a.createElement("div",{className:"PickFiveChampsStandings"},this.state.PickFiveChamps?this.state.PickFiveChamps.map(function(e,t){return i.a.createElement(K,{key:t,name:e.name,points:e.points,teams:e.teams,year:e.year})}):null)):null)}}]),t}(n.Component)),Y=(a(125),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={PickFiveHighScores:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/pickfive/highscores").then(function(e){return e.json()}).then(function(t){e.setState({PickFiveHighScores:t})})}},{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return i.a.createElement("div",{className:"PickFiveHighScoresContainer"},i.a.createElement("h3",{onClick:this.handleClick},"HALL OF HIGH SCORES"),this.state.isActive?i.a.createElement("div",{className:"PickFiveHighScores"},i.a.createElement("div",{className:"PickFiveHighScoresStandings"},this.state.PickFiveHighScores?this.state.PickFiveHighScores.map(function(e,t){return i.a.createElement(G,{key:t,rank:t+1,name:e.name,score:e.score,teams:e.teams,year:e.year})}):null)):null)}}]),t}(n.Component)),_=a(47),J=a.n(_),U=(a(141),a(142),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"dim"},i.a.createElement("div",{className:"PickFiveDescription"},"Welcome to the PICK 5, #5ALIVE'S tournament-only cousin. Gaze in awe at the the all-time high scores, or take an inspiring stroll down the Hall of Champions. (click header to expand/collapse)"),i.a.createElement("div",{className:"PickFive",style:{height:"100%"}},i.a.createElement(J.a,{centerMode:!0,dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,variableWidth:!0,initialSlide:0},i.a.createElement("div",null,i.a.createElement(W,null)),i.a.createElement("div",null,i.a.createElement(Q,null)),i.a.createElement("div",null,i.a.createElement(Y,null))))))}}]),t}(n.Component)),z=(a(143),a(48)),X=a.n(z),Z=function(){return i.a.createElement("div",{className:"Basketballs"},i.a.createElement("img",{src:X.a,alt:"basketballs"}))},$=function(e){function t(e){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v.a,null,i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement(E.a,{path:"/",exact:!0,component:P}),i.a.createElement(E.a,{path:"/home",component:P}),i.a.createElement(E.a,{path:"/about",component:L}),i.a.createElement(E.a,{path:"/pastchamps",component:F}),i.a.createElement(E.a,{path:"/picks",component:V}),i.a.createElement(E.a,{path:"/pickfive",component:U}),i.a.createElement(E.a,{path:"/basketballs",component:Z}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v.a,{style:{width:"100%"}},i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/fivealivelogo.2829ca5d.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/52014.fa90b3a8.jpeg"},50:function(e,t,a){e.exports=a(145)},55:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.2eb560fc.chunk.js.map