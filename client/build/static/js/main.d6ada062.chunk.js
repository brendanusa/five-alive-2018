(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(41).concat([function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/fivealivelogo.2829ca5d.jpg"},function(e,t,a){e.exports=a.p+"static/media/52014.fa90b3a8.jpeg"},function(e,t,a){e.exports=a.p+"static/media/umbc_bkgd.2527e3e6.jpg"},,function(e,t,a){e.exports=a(143)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(18),l=a.n(i),c=(a(54),a(1)),r=a(2),m=a(4),o=a(3),u=a(5),d=a(145),h=(a(55),function(){return s.a.createElement("header",null,s.a.createElement("span",{className:"title"},s.a.createElement("strong",null,s.a.createElement("span",{className:"bordered",id:"one"},"#"),s.a.createElement("span",{className:"bordered",id:"two"},"5"),s.a.createElement("span",{className:"bordered",id:"three"},"A"),s.a.createElement("span",{className:"bordered",id:"four"},"L"),s.a.createElement("span",{className:"bordered",id:"five"},"I"),s.a.createElement("span",{className:"bordered",id:"six"},"V"),s.a.createElement("span",{className:"bordered",id:"seven"},"E"))),s.a.createElement("span",{className:"links"},s.a.createElement("span",null,s.a.createElement(d.a,{to:"/home"},"HOME")),s.a.createElement("span",null,s.a.createElement(d.a,{to:"/teamSelect"},"TEAMS")),s.a.createElement("span",null,s.a.createElement(d.a,{to:"/about"},"ABOUT")),s.a.createElement("span",{style:{marginLeft:"1.5vw"}},s.a.createElement(d.a,{to:"/pickfive"},"PICK-5"))))}),v=a(146),E=a(147),p=(a(58),a(7)),f=(a(59),a(60),a(43)),b=a.n(f),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={containsLink:!1,messageTextSegments:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Message"},s.a.createElement("span",{className:"MessageAuthor"},this.props.author,": "),s.a.createElement("span",{className:"MessageText",target:"_blank"},s.a.createElement(b.a,null,this.props.text)),s.a.createElement("span",{className:"MessageTimestamp"},this.props.timestamp.replace("T"," ").split(".")[0]))}}]),t}(n.Component),N=a(44),S=a.n(N),g=a(45),C=a.n(g),T=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).checkChars=function(e){for(var t=0;t<e.length;t++)if(!a.validCharacters.includes(e[t]))return!1;return!0},a.handlePasswordSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){e[0]?(a.setState({user:e[0]}),a.setState({isAuthenticated:!0}),a.setState({post:""})):window.alert("Invalid password!")})},a.handleMessageSubmit=function(e){return e.preventDefault(),0===a.state.post.length||a.state.post.length>500?window.alert("Please enter between 1 and 500 characters"):a.checkChars(a.state.post)?(a.socket.emit("SEND_MESSAGE",{userid:a.state.user.id,username:a.state.user.name,text:a.state.post}),void a.setState({post:""})):window.alert("Couldn't send message - try removing any fancy punctuation")},a.handleSubmit=function(e){a.state.isAuthenticated?a.handleMessageSubmit(e):a.handlePasswordSubmit(e)},a.state={isAuthenticated:!1,post:"",user:{},messages:[]},a.socket=S()();var n=Object(p.a)(Object(p.a)(a));return a.updateScroll=function(){var e=document.getElementById("scrollhere");e.scrollTop=e.scrollHeight},a.socket.on("RECEIVE_MESSAGES",function(e){n.setState({messages:e}),n.updateScroll()}),a.validCharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",'"',",","."," ","'","(",")","[","]","|","@","$","%","^","*","=","_","!","?","-","+","/","<",">",";",":","#"],a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/messages").then(function(e){return e.json()}).then(function(t){e.setState({messages:t}),e.updateScroll()})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Chat"},s.a.createElement("div",{className:"ChatHeader"},s.a.createElement("div",null,s.a.createElement("span",null,"CHAT POWERED BY "),s.a.createElement("span",null,s.a.createElement("img",{src:C.a,alt:"logo"})),s.a.createElement("span",null," CHAT TECHNOLOGY")),s.a.createElement("div",null,"AND ZOOM-LINK TECHNOLOGY")),s.a.createElement("div",{className:"Messages",id:"scrollhere"},this.state.messages.map(function(e,t){return s.a.createElement(k,{key:t,author:e.user_name,text:e.text,timestamp:e.created})})),s.a.createElement("div",{className:"ChatFooter"},this.state.isAuthenticated?s.a.createElement("div",null,s.a.createElement("div",{className:"ChatFooterNotification"},this.state.user.name," has entered the Chat portal"),s.a.createElement("form",{className:"MessageForm",onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})},style:{marginRight:"10px"}}),s.a.createElement("button",{type:"submit"},"Send Message"))):s.a.createElement("div",null,s.a.createElement("form",{className:"PasswordForm",onSubmit:this.handleSubmit},"Enter password:",s.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),s.a.createElement("button",{type:"submit"},"Login")))))}}]),t}(n.Component),O=(a(101),a(102),function(e){return s.a.createElement("div",{className:"TeamBox"},s.a.createElement("div",{className:"TeamLogoContainer"},s.a.createElement("img",{alt:"logo",src:"https://five-alive-team-logos.s3-us-west-1.amazonaws.com/".concat(e.team.name,".gif")})),s.a.createElement("div",{className:"TeamTextContainer"},s.a.createElement("h2",null,e.team.name," ",e.team.nickname),s.a.createElement("h6",null,"CONF"),s.a.createElement("div",null,e.team.conference),s.a.createElement("h6",null,"W-L"),s.a.createElement("div",null,e.team.w2122,"-",e.team.l2122),s.a.createElement("h6",null,"2020-21 W-L"),s.a.createElement("div",null,e.team.w2021,"-",e.team.l2021),s.a.createElement("h6",null,"PREV"),s.a.createElement("div",null,e.team.prevgm),s.a.createElement("h6",null,"NEXT"),s.a.createElement("div",null,e.team.nextgm)))}),j=(a(103),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={activeTeam:null},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){this.state.activeTeam===e.target.className[e.target.className.length-1]?this.setState({activeTeam:null}):this.setState({activeTeam:e.target.className[e.target.className.length-1]})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"StandingsTeamList"},s.a.createElement("div",{className:"StandingsTeamListContainer"},this.props.teams.map(function(t,a){return s.a.createElement("div",{className:"StandingsTeamContainer"},s.a.createElement("div",{key:a,className:"StandingsTeam"+[a],onClick:e.handleClick},s.a.createElement("span",{className:"StandingsSpan"+[a]},t.name),s.a.createElement("span",null,t.w2122)))})),this.state.activeTeam?s.a.createElement("div",{className:"TeamBoxContainer"},s.a.createElement(O,{team:this.props.teams[this.state.activeTeam]})):null)}}]),t}(n.Component)),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Standing"},s.a.createElement("div",{className:"StandingHeader",onClick:this.handleClick},s.a.createElement("span",{className:"StandingName"},this.props.name),s.a.createElement("span",{className:"StandingWins"},this.props.wins)),s.a.createElement("div",null,this.state.isActive?s.a.createElement(j,{teams:this.props.teams}):null))}}]),t}(n.Component),A=(a(104),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={standings:[],updated:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/standingsDate").then(function(e){return e.json()}).then(function(t){e.setState({updated:t[0].updated})}),fetch("/api/standings").then(function(e){return e.json()}).then(function(t){e.setState({standings:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"StandingsContainer"},s.a.createElement("h3",null,"STANDINGS"),s.a.createElement("div",{className:"Standings"},s.a.createElement("div",null,this.state.standings?this.state.standings.map(function(e,t){return s.a.createElement(y,{key:t,name:e.name,teams:e.teams_2021,wins:e.wins,isActive:!1})}):null)),s.a.createElement("div",{className:"UpdateTime"},s.a.createElement("p",null,"UPDATED"),s.a.createElement("p",null,this.state.updated," GMT")))}}]),t}(n.Component)),w=(a(41),function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"TestimonialsHeader"},s.a.createElement("h2",null,"CHAT TESTIMONIALS")),s.a.createElement("div",{className:"TestimonialsBody"},s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I was feeling chatty one afternoon, and it turned out the #5ALIVE chat was exactly what I was looking for."'),s.a.createElement("div",{className:"TestimonialAuthor"},"--2018 and 2019 #5ALIVE Runner-up Coreen Kopper")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"Very impressive!"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--2014 #5ALIVE Champion Tim Falkner")),s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I met my fiancee on the #5ALIVE chat - we\'ve been inseparable ever since"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Don Jepsen")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"The #5ALIVE chat is a great way to stay in touch with friends and family, and the best part is it\'s built on dynamic #5ALIVE chat technology!"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Seven-time NBA Scoring Champion Wilt Chamberlain"))))}),P=(a(105),a(106),function(e){return s.a.createElement("a",{className:"ScoreboardGame",href:"https://www.espn.com/mens-college-basketball/game?gameId=".concat(e.id),target:"_blank"},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("span",{className:"ScoreboardGameTeam"},e.awayTeam),s.a.createElement("span",null,e.awayScore)),s.a.createElement("div",null,s.a.createElement("span",{className:"ScoreboardGameTeam"},e.homeTeam),s.a.createElement("span",null,e.homeScore))),s.a.createElement("div",{className:"ScoreboardGameClock"},s.a.createElement("span",null,e.clock)))}),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={scores:[],date:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/scores").then(function(e){return e.json()}).then(function(t){e.setState({scores:t})}),fetch("/api/scoreboardDate").then(function(e){return e.json()}).then(function(t){e.setState({date:t[0].updated})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Scoreboard"},s.a.createElement("div",{className:"ScoreboardDate"},this.state.date),s.a.createElement("div",{className:"ScoreboardGamesContainer"},this.state.scores[0]?this.state.scores.map(function(e,t){return s.a.createElement(P,{key:t,homeTeam:e.hometeam,homeScore:e.homescore,awayTeam:e.awayteam,awayScore:e.awayscore,clock:e.clock,id:e.id})}):s.a.createElement("div",{className:"Empty"},"NO #5ALIVE GAMES TODAY. FEEL FREE TO GO OUTSIDE OR INTERACT WITH LOVED ONES.")),s.a.createElement("div",{className:"MarginCorrection"}))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){e[0]?(a.setState({user:e[0]}),a.setState({authenticated:!0}),a.setState({passwordFeedback:"Welcome ".concat(a.state.user.name.split(" ")[0],"!")})):a.setState({passwordFeedback:"No good!"})})},a.handleTestimonialsClick=function(e){a.state.testimonialsActive?(document.getElementById("dim").classList.remove("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.remove("TestimonialsActive")):(document.getElementById("dim").classList.add("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.add("TestimonialsActive")),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsHide=function(e){a.state.testimonialsActive&&a.handleTestimonialsClick(e)},a.state={user:{},passwordFeedback:"",post:"",authenticated:!1,testimonialsActive:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.handleTestimonialsHide},s.a.createElement("div",{className:"TestimonialsContainer"},this.state.testimonialsActive?s.a.createElement(w,null):null),s.a.createElement("div",{id:"dim"},s.a.createElement("div",{className:"HomeContainer"},s.a.createElement("div",{className:"ScoreboardContainer"},s.a.createElement(I,null)),s.a.createElement("div",{className:"Home"},s.a.createElement("div",null,s.a.createElement(A,null)),s.a.createElement("div",{className:"ChatContainer"},s.a.createElement(T,null))))),s.a.createElement("div",{className:"TestimonialsToggle"},s.a.createElement("a",{onClick:this.handleTestimonialsClick},this.state.testimonialsActive?"Click to Hide Chat Testimonials":"Click to View Chat Testimonials")))}}]),t}(n.Component),F=(a(107),function(){return s.a.createElement("div",{className:"AboutContainer"},s.a.createElement("div",{className:"About"},s.a.createElement("h2",null,"HISTORY"),s.a.createElement("p",null,"The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his small village in Connecticut. All records that year were kept on elk hides and then burned ceremonially at the end of the season, a tradition that we continue today."),s.a.createElement(d.a,{to:"/pastchamps"},"Take a look at our past winners"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null,"RULES"),s.a.createElement("p",null,"The rules are simple, and pleasing to the eye - participants select five teams that collectively won no more than 100 games the previous season. The person whose teams win the most games this year (excluding non-NCAA postseason tournaments - i.e. NIT, CIT, etc.) wins the grand prize: a drawing of a basketball and Brendan's special family recipe for water.",s.a.createElement("br",null),s.a.createElement("p",{style:{color:"yellow"}},"For more information or college/professional recommendations, please contact Brendan Bansavage.")),s.a.createElement("br",null),s.a.createElement("h2",null,"EXCITEMENT INFO"),s.a.createElement("p",null,"This season promises to be our most recent season yet, with the following #5ALIVE legends sitting on the Recency and Sports Performance Committee:",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("li",null,"Chris Godfrey"),s.a.createElement("li",null,"Patrick Godfrey"),s.a.createElement("li",null,"Ryan Excitement"),s.a.createElement("li",null,"Action Vogel"),s.a.createElement("li",null,"John Kelly"),s.a.createElement("li",null,"Wilt Chamberlain"),s.a.createElement("li",null,"Michael Jorban"))))}),B=(a(108),function(){return s.a.createElement("div",{className:"champscontainer"},s.a.createElement("div",{className:"champs"},s.a.createElement("h2",null,"PAST CHAMPS"),s.a.createElement("div",null,"2022 - Patrick Grove"),s.a.createElement("div",null,"2021 - Kevin Meuse"),s.a.createElement("div",null,"2020 - Action Vogel & Brendan Bansavage"),s.a.createElement("div",null,"2019 - Mark McGill"),s.a.createElement("div",null,"2018 - Chris Clark"),s.a.createElement("div",null,"2017 - Andrew Cahalan"),s.a.createElement("div",null,"2016 - Scott Sherman"),s.a.createElement("div",null,"2015 - Rob Coloney"),s.a.createElement("div",null,"2014 - Tim Falkner"),s.a.createElement("div",null,"2013 - Cliff Climpton"),s.a.createElement("div",null,"2012 - Wilt Chamberlain"),s.a.createElement("div",null,"2011 - Troy Davis")))}),H=(a(109),a(110),a(111),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"PicksTeamList"},s.a.createElement("div",{className:"PicksTeamListContainer"},this.props.teams.map(function(e,t){return s.a.createElement("div",{className:"PicksTeamContainer"},s.a.createElement("div",{key:t,className:"PicksTeam"+[t]},e.name," (",e.w2021,"-",e.l2021,")"))})))}}]),t}(n.Component)),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickNew",onClick:this.handleClick},s.a.createElement("div",{className:"StandingHeader",onClick:this.handleClick},s.a.createElement("span",{className:"StandingName"},this.props.name)),s.a.createElement("div",null,this.state.isActive?s.a.createElement(H,{teams:this.props.teams}):null))}}]),t}(n.Component),M=(a(112),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={pickles:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/standings").then(function(e){return e.json()}).then(function(t){console.log(t[0]),e.setState({pickles:t.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"PICKS"),s.a.createElement("div",{className:"Pickles"},s.a.createElement("div",null,this.state.pickles?this.state.pickles.map(function(e,t){return s.a.createElement(x,{key:t,name:e.name,teams:e.teams_2021})}):null)))}}]),t}(n.Component)),D=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"TestimonialsHeader"},s.a.createElement("h2",null,"STATS PAGE TESTIMONIALS")),s.a.createElement("div",{className:"TestimonialsBody"},s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I was looking for info on everyone\'s picks one evening, and the #5ALIVE Stats page had everything I wanted and more."'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Two-time #5ALIVE Runner-up Coreen Kopper")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"[mind blown emoji]"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--#5ALIVE Excitement Expert Patrick Godfrey")),s.a.createElement("div",{className:"TestimonialLeft"},s.a.createElement("div",{className:"TestimonialQuote"},'"I met my mistress on the #5ALIVE Picks page - we\'ve been sneaking around and committing lots of adultery ever since"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Stan Johnson")),s.a.createElement("div",{className:"TestimonialRight"},s.a.createElement("div",{className:"TestimonialQuote"},'"The #5ALIVE analytics and research team has aboslutely outdone themselves this time with the all-new Stats page. It has a list of everyone\'s teams, plus two other lists for added lists. God bless you, #5ALIVE!"'),s.a.createElement("div",{className:"TestimonialAuthor"},"--Four-time NBA MVP Wilt Chamberlain"))))},R=(a(113),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={schools:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/picksbyschool").then(function(e){return e.json()}).then(function(t){e.setState({schools:t})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"PICKS BY SCHOOL"),s.a.createElement("div",{className:"PicksBySchool"},s.a.createElement("div",null,this.state.schools.map(function(e){return s.a.createElement("div",{className:"PicksBySchoolSchool"},s.a.createElement("span",{className:"PickSchoolName"},e.name),s.a.createElement("span",{className:"PickNumber"},e.count))}))))}}]),t}(n.Component)),V=(a(114),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={users:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/simscore").then(function(e){return e.json()}).then(function(t){e.setState({users:t})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,s.a.createElement("span",null,"SHADEK-ACTIONTHAL SIMDEX")),s.a.createElement("div",{className:"SimScore"},s.a.createElement("div",null,this.state.users.map(function(e,t){return s.a.createElement("div",{className:"SimScoreScore"},s.a.createElement("span",{className:"SimScoreName"},e.name),s.a.createElement("span",{className:"SimScoreNumber"},e.sim_score_2021))}))))}}]),t}(n.Component)),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleTestimonialsClick=function(e){a.state.testimonialsActive?document.getElementById("dim").classList.remove("Dim"):document.getElementById("dim").classList.add("Dim"),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsClick=function(e){a.state.testimonialsActive?(document.getElementById("dim").classList.remove("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.remove("TestimonialsActive")):(document.getElementById("dim").classList.add("Dim"),document.getElementsByClassName("TestimonialsContainer")[0].classList.add("TestimonialsActive")),a.setState({testimonialsActive:!a.state.testimonialsActive})},a.handleTestimonialsHide=function(e){a.state.testimonialsActive&&a.handleTestimonialsClick(e)},a.state={testimonialsActive:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.handleTestimonialsHide},s.a.createElement("div",{className:"TestimonialsContainer"},this.state.testimonialsActive?s.a.createElement(D,null):null),s.a.createElement("div",{id:"dim"},s.a.createElement("div",{className:"Picks"},s.a.createElement("div",{className:"PicksBySchoolContainer"},s.a.createElement(R,null)),s.a.createElement("div",{className:"PicklesContainer"},s.a.createElement(M,null)),s.a.createElement("div",{className:"SimScoreContainer"},s.a.createElement(V,null)))),s.a.createElement("div",{className:"TestimonialsToggle"},s.a.createElement("a",{onClick:this.handleTestimonialsClick},this.state.testimonialsActive?"Click to Hide Stats Page Testimonials":"Click to View Stats Page Testimonials")))}}]),t}(n.Component),_=(a(115),a(116),a(117),a(118),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveStandingsTeamList"},s.a.createElement("div",{className:"PickFiveStandingsTeamListContainer"},this.props.teams.map(function(e,t){return s.a.createElement("div",{className:"PickFiveStandingsTeamContainer"},s.a.createElement("div",{key:t,className:"PickFiveStandingsTeam"+[t]},s.a.createElement("span",null,e.name),s.a.createElement("span",{className:"PickFiveStandingsTeamRound"},e.round),s.a.createElement("span",{className:"PickFiveStandingsTeamPoints"},e.points)))})))}}]),t}(n.Component)),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveStanding",onClick:this.handleClick},s.a.createElement("div",{className:"PickFiveStandingHeader"},s.a.createElement("span",{className:"PickFiveStandingNameYearContainer"},s.a.createElement("span",{className:"PickFiveStandingName"},this.props.name),s.a.createElement("span",{className:"PickFiveStandingYear"},this.props.year||null)),s.a.createElement("span",{className:"PickFiveStandingScore"},this.props.score)),s.a.createElement("div",null,this.state.isActive?s.a.createElement(_,{teams:this.props.teams}):null))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={standings:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){var e=this;this.setState({isActive:!this.state.isActive}),fetch("api/pickfive/standings").then(function(e){return e.json()}).then(function(t){console.log("data",t),e.setState({standings:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveStandingsContainer"},s.a.createElement("h3",{onClick:this.handleClick},"CURRENT STANDINGS"),this.state.isActive?s.a.createElement("div",{className:"PickFiveStandings"},s.a.createElement("div",null,this.state.standings.map(function(e,t){return s.a.createElement(W,{key:t,name:e.name,score:e.score,teams:e.teams})}))):null)}}]),t}(n.Component),K=(a(119),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveChampsStanding",onClick:this.handleClick},s.a.createElement("div",{className:"PickFiveChampsStandingHeader"},s.a.createElement("div",{className:"PickFiveChampsStandingYear"},s.a.createElement("span",null,this.props.year)),s.a.createElement("div",{className:"PickFiveChampsStandingName"},this.props.name)),s.a.createElement("div",null,this.state.isActive?s.a.createElement(_,{teams:this.props.teams}):null))}}]),t}(n.Component)),Y=(a(120),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={PickFiveChamps:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/pickfive/champs").then(function(e){return e.json()}).then(function(t){e.setState({PickFiveChamps:t})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveChampsContainer"},s.a.createElement("h3",{onClick:this.handleClick},"HALL OF CHAMPIONS"),this.state.isActive?s.a.createElement("div",{className:"PickFiveChamps"},s.a.createElement("div",{className:"PickFiveChampsStandings"},this.state.PickFiveChamps?this.state.PickFiveChamps.map(function(e,t){return s.a.createElement(K,{key:t,name:e.name,points:e.points,teams:e.teams,year:e.year})}):null)):null)}}]),t}(n.Component)),Q=(a(121),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={PickFiveHighScores:[],isActive:!1},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/pickfive/highscores").then(function(e){return e.json()}).then(function(t){e.setState({PickFiveHighScores:t})})}},{key:"handleClick",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return s.a.createElement("div",{className:"PickFiveHighScoresContainer"},s.a.createElement("h3",{onClick:this.handleClick},"HALL OF HIGH SCORES"),this.state.isActive?s.a.createElement("div",{className:"PickFiveHighScores"},s.a.createElement("div",{className:"PickFiveHighScoresStandings"},this.state.PickFiveHighScores?this.state.PickFiveHighScores.map(function(e,t){return s.a.createElement(W,{key:t,rank:t+1,name:e.name,score:e.score,teams:e.teams,year:e.year})}):null)):null)}}]),t}(n.Component)),J=(a(122),a(138),a(139),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"dim"},s.a.createElement("div",{className:"PickFiveDescription"},"Welcome to the PICK 5, #5ALIVE'S tournament-only cousin. Gaze in awe at the the all-time high scores, or take an inspiring stroll down the Hall of Champions. (click header to expand/collapse)"),s.a.createElement("div",{className:"PickFive",style:{height:"100%"}},s.a.createElement("div",null,s.a.createElement(U,null)),s.a.createElement("div",null,s.a.createElement(Y,null)),s.a.createElement("div",null,s.a.createElement(Q,null)))))}}]),t}(n.Component)),z=(a(140),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleUserBoxSubmit=function(e){e.preventDefault(),fetch("/api/password?password="+a.state.post).then(function(e){return e.json()}).then(function(e){e[0]?(a.setState({user:e[0]}),a.setState({isAuthenticated:!0}),a.setState({post:""})):window.alert("Invalid password!")})},a.handleTeamsBoxClick=function(e){e.preventDefault(),document.getElementById(e.target.id).classList.toggle("highlighted");var t=a.state.selectedTeams;t[e.target.id]?t[e.target.id].selected=!t[e.target.id].selected:t[e.target.id]={selected:!0},a.setState({selectedTeams:t})},a.handleSelectBoxSubmit=function(){var e=Object.keys(a.state.selectedTeams).filter(function(e){return!0===a.state.selectedTeams[e].selected}).map(function(e){return parseInt(e)}),t=e.reduce(function(e,t){return e+a.state.teamsHard[t].w2122},0);a.state.user.name?5!==e.length?a.setState({submitFeedback:"Select five teams!"}):t>100?a.setState({submitFeedback:">100! Try again!"}):fetch("/api/teams?teamids=".concat(e.join(","),"&userid=").concat(a.state.user.id)).then(function(e){fetch("/api/password?password="+a.state.user.password).then(function(e){return e.json()}).then(function(e){if(e[0]){var t=a.state;t.user=e[0],t.submitFeedback="Picks submitted!",a.setState({tempState:t})}})}):a.setState({submitFeedback:"Not signed in!"})},a.state={selectedTeams:{},user:{},post:"",submitFeedback:"",teamsHard:{}},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("hello"),fetch("/api/schools").then(function(e){return e.json()}).then(function(t){e.setState({teamsHard:t})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TeamSelect"},s.a.createElement("div",null,s.a.createElement("div",{className:"UserBox"},s.a.createElement("div",{className:"UserBoxMessageContainer"},s.a.createElement("div",{className:"UserBoxMessage"},"WELCOME TO THE NCAA TEAM SELECTION PORTAL"),s.a.createElement("div",{className:"UserBoxForm"},this.state.user.name?this.state.user.name+" has entered the team selection portal.":s.a.createElement("form",{onSubmit:this.handleUserBoxSubmit},"Enter password:",s.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),s.a.createElement("button",{type:"submit",style:{marginLeft:"10px"}},"Login")))),s.a.createElement("div",{className:"UserBoxTeams"},"Current Teams:",s.a.createElement("br",null),s.a.createElement("div",{className:"UserBoxTeamsList"},s.a.createElement("div",null,this.state.user.teams_22?null:"None"),s.a.createElement("div",null,this.state.user.teams_22?this.state.teamsHard[this.state.user.teams_22[0]].name:null),s.a.createElement("div",null,this.state.user.teams_22?this.state.teamsHard[this.state.user.teams_22[1]].name:null),s.a.createElement("div",null,this.state.user.teams_22?this.state.teamsHard[this.state.user.teams_22[2]].name:null),s.a.createElement("div",null,this.state.user.teams_22?this.state.teamsHard[this.state.user.teams_22[3]].name:null),this.state.user.teams_22?this.state.teamsHard[this.state.user.teams_22[4]].name:null)))),s.a.createElement("div",{className:"TeamsContainer"},s.a.createElement("div",{className:"TeamsContainerHeading"},s.a.createElement("span",null,"School"),s.a.createElement("span",null,"2021-22 W-L")),s.a.createElement("div",{className:"TeamsContainerBody"},Object.entries(this.state.teamsHard).map(function(t,a){return s.a.createElement("div",{className:"TeamSelectRow",id:t[0],key:a,onClick:e.handleTeamsBoxClick},s.a.createElement("span",{id:t[0],className:"MainTeamName"},t[1].name),s.a.createElement("span",{id:t[0],className:"MainTeamRecord"},t[1].w2122,"-",t[1].l2122))}))),s.a.createElement("div",null,s.a.createElement("div",{className:"SelectBoxContainer"},s.a.createElement("div",{className:"SelectBoxHeader"},"SELECTED TEAMS"),s.a.createElement("div",{className:"SelectBoxTeams"},Object.keys(this.state.selectedTeams).filter(function(t){return!0===e.state.selectedTeams[t].selected}).map(function(t){return s.a.createElement("div",{key:t,className:"SelectBoxTeamRow"},s.a.createElement("span",{className:"smallteamname"},e.state.teamsHard[t].name+" - "),s.a.createElement("span",{className:"smallteamwins"},e.state.teamsHard[t].w2122))})),s.a.createElement("div",{className:"SelectBoxFooter"},s.a.createElement("div",{className:"SelectBoxWinTotal"},s.a.createElement("div",null,Object.keys(this.state.selectedTeams).reduce(function(t,a){return e.state.selectedTeams[a].selected?t+e.state.teamsHard[a].w2122:t},0)),s.a.createElement("div",{style:{fontSize:"10px"}},"WINS"))),s.a.createElement("div",{className:"SelectBoxSubmit"},s.a.createElement("button",{onClick:this.handleSelectBoxSubmit},"SUBMIT")),s.a.createElement("div",{className:"SelectBoxNotification"},this.state.submitFeedback||null))))}}]),t}(n.Component)),X=(a(141),a(46)),Z=a.n(X),$=function(){return s.a.createElement("div",{className:"Basketballs"},s.a.createElement("img",{src:Z.a,alt:"basketballs"}))},q=a(47),ee=a.n(q),te=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"updateBackgroundImage",value:function(){document.body.style.backgroundImage="url(".concat(ee.a,")")}},{key:"componentDidMount",value:function(){this.updateBackgroundImage()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v.a,null,s.a.createElement("div",null,s.a.createElement(h,null),s.a.createElement(E.a,{path:"/",exact:!0,component:L}),s.a.createElement(E.a,{path:"/home",component:L}),s.a.createElement(E.a,{path:"/about",component:F}),s.a.createElement(E.a,{path:"/pastchamps",component:B}),s.a.createElement(E.a,{path:"/picks",component:G}),s.a.createElement(E.a,{path:"/pickfive",component:J}),s.a.createElement(E.a,{path:"/teamselect",component:z}),s.a.createElement(E.a,{path:"/basketballs",component:$}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(v.a,{style:{width:"100%"}},s.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[49,1,2]]]);
//# sourceMappingURL=main.d6ada062.chunk.js.map