(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},103:function(e,a,t){},105:function(e,a,t){},107:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(37),r=t.n(s),o=(t(46),t(2)),i=t(3),m=t(5),c=t(4),u=t(6),w=t(111),h=(t(48),function(){return l.a.createElement("header",null,l.a.createElement("span",{className:"title"},l.a.createElement("strong",null,l.a.createElement("span",{className:"bordered",id:"one"},"#"),l.a.createElement("span",{className:"bordered",id:"two"},"5"),l.a.createElement("span",{className:"bordered",id:"three"},"A"),l.a.createElement("span",{className:"bordered",id:"four"},"L"),l.a.createElement("span",{className:"bordered",id:"five"},"I"),l.a.createElement("span",{className:"bordered",id:"six"},"V"),l.a.createElement("span",{className:"bordered",id:"seven"},"E"))),l.a.createElement("span",{className:"link"},l.a.createElement("span",null,l.a.createElement(w.a,{to:"/home"},"HOME")),l.a.createElement("span",null,l.a.createElement(w.a,{to:"/info"},"INFO")),l.a.createElement("span",null,l.a.createElement(w.a,{to:"/standingsold"},"STANDINGS"))))}),d=t(112),S=t(113),p=(t(52),t(54),t(13)),g=(t(56),t(58),function(e){return l.a.createElement("div",{className:"Message"},l.a.createElement("span",{className:"MessageAuthor"},e.author,": "),l.a.createElement("span",{className:"MessageText"},e.text," "),l.a.createElement("span",{className:"MessageTimestamp"},e.timestamp.replace("T"," ").split(".")[0]))}),E=t(38),f=t.n(E),C=t(39),v=t.n(C),b=function(e){function a(e){var t;Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).checkChars=function(e){for(var a=0;a<e.length;a++)if(!t.validCharacters.includes(e[a]))return console.log("message[i]",e[a]),!1;return!0},t.handlePasswordSubmit=function(e){e.preventDefault(),console.log(t.state.post),fetch("/api/password?password="+t.state.post).then(function(e){return e.json()}).then(function(e){console.log(e[0]),e[0]?(console.log(e[0]),t.setState({user:e[0]}),t.setState({isAuthenticated:!0}),t.setState({post:""})):window.alert("Invalid password!")})},t.handleMessageSubmit=function(e){return e.preventDefault(),console.log(t.state.post),0===t.state.post.length||t.state.post.length>200?window.alert("Please enter between 1 and 200 characters!"):t.checkChars(t.state.post)?void fetch("/api/message?userid=".concat(t.state.user.id,"&username=").concat(t.state.user.name,"&text=").concat(t.state.post)).then(function(e){return e.json()}).then(function(e){console.log(e),e?(t.socket.emit("SEND_MESSAGE",{author:t.state.user.name,message:t.state.post}),t.setState({post:""})):window.alert("Message failed!")}):window.alert('Letters, numbers, !, ?, +, ", and - only! No fancy stuff.')},t.handleSubmit=function(e){t.state.isAuthenticated?t.handleMessageSubmit(e):t.handlePasswordSubmit(e)},t.state={isAuthenticated:!1,post:"",user:{},messages:[],port:5e3},t.socket=f()();var n=Object(p.a)(Object(p.a)(t));return t.updateScroll=function(){var e=document.getElementById("scrollhere");e.scrollTop=e.scrollHeight},t.socket.on("RECEIVE_MESSAGE",function(e){fetch("/api/messages").then(function(e){return e.json()}).then(function(e){n.setState({messages:e}),n.updateScroll()})}),t.validCharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","?","-","+","1","2","3","4","5","6","7","8","9","0",'"'],t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/messages").then(function(e){return e.json()}).then(function(a){e.setState({messages:a})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Chat"},l.a.createElement("div",{className:"ChatHeader"},l.a.createElement("span",null,"CHAT POWERED BY"),l.a.createElement("span",null,l.a.createElement("img",{src:v.a,alt:"logo",style:{width:"145px",height:"32px"}})),l.a.createElement("span",null,"CHAT TECHNOLOGY")),l.a.createElement("div",{className:"Messages",id:"scrollhere"},this.state.messages.map(function(e,a){return l.a.createElement(g,{key:a,author:e.user_name,text:e.text,timestamp:e.created})})),l.a.createElement("div",{className:"ChatFooter"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("span",null,this.state.isAuthenticated?"Posting as ".concat(this.state.user.name,"! "):"Enter password to join--\x3e"),l.a.createElement("input",{type:"text",value:this.state.post,onChange:function(a){return e.setState({post:a.target.value})},style:{width:"40%"}}),l.a.createElement("button",{type:"submit",style:{marginLeft:"10px"}},this.state.isAuthenticated?"Send":"Submit"))))}}]),a}(n.Component),y=(t(89),t(91),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).teamsMap={1:"test",2:"Abilene Christian",3:"Air Force",4:"Akron",5:"Alabama",6:"Alabama A&M",7:"Alabama State",8:"Alabama-Birmingham",9:"Albany (NY)",10:"Alcorn State",11:"American",12:"Appalachian State",13:"Arizona",14:"Arizona State",15:"Arkansas",16:"Arkansas State",17:"Arkansas-Pine Bluff",18:"Army",19:"Auburn",20:"Austin Peay",21:"Ball State",22:"Baylor",23:"Belmont",24:"Bethune-Cookman",25:"Binghamton",26:"Boise State",27:"Boston College",28:"Boston University",29:"Bowling Green State",30:"Bradley",31:"Brigham Young",32:"Brown",33:"Bryant",34:"Bucknell",35:"Buffalo",36:"Butler",37:"Cal Poly",38:"Cal State Bakersfield",39:"Cal State Fullerton",40:"Cal State Northridge",41:"Campbell",42:"Canisius",43:"Central Arkansas",44:"Central Connecticut State",45:"Central Florida",46:"Central Michigan",47:"Charleston Southern",48:"Charlotte",49:"Chattanooga",50:"Chicago State",51:"Cincinnati",52:"Citadel",53:"Clemson",54:"Cleveland State",55:"Coastal Carolina",56:"Colgate",57:"College of Charleston",58:"Colorado",59:"Colorado State",60:"Columbia",61:"Connecticut",62:"Coppin State",63:"Cornell",64:"Creighton",65:"Dartmouth",66:"Davidson",67:"Dayton",68:"Delaware",69:"Delaware State",70:"Denver",71:"DePaul",72:"Detroit Mercy",73:"Drake",74:"Drexel",75:"Duke",76:"Duquesne",77:"East Carolina",78:"East Tennessee State",79:"Eastern Illinois",80:"Eastern Kentucky",81:"Eastern Michigan",82:"Eastern Washington",83:"Elon",84:"Evansville",85:"Fairfield",86:"Fairleigh Dickinson",87:"Florida",88:"Florida A&M",89:"Florida Atlantic",90:"Florida Gulf Coast",91:"Florida International",92:"Florida State",93:"Fordham",94:"Fort Wayne",95:"Fresno State",96:"Furman",97:"Gardner-Webb",98:"George Mason",99:"George Washington",100:"Georgetown",101:"Georgia",102:"Georgia Southern",103:"Georgia State",104:"Georgia Tech",105:"Gonzaga",106:"Grambling",107:"Grand Canyon",108:"Green Bay",109:"Hampton",110:"Hartford",111:"Harvard",112:"Hawaii",113:"High Point",114:"Hofstra",115:"Holy Cross",116:"Houston",117:"Houston Baptist",118:"Howard",119:"Idaho",120:"Idaho State",121:"Illinois",122:"Illinois State",123:"Illinois-Chicago",124:"Incarnate Word",125:"Indiana",126:"Indiana State",127:"Iona",128:"Iowa",129:"Iowa State",130:"IUPUI",131:"Jackson State",132:"Jacksonville",133:"Jacksonville State",134:"James Madison",135:"Kansas",136:"Kansas State",137:"Kennesaw State",138:"Kent State",139:"Kentucky",140:"La Salle",141:"Lafayette",142:"Lamar",143:"Lehigh",144:"Liberty",145:"Lipscomb",146:"Little Rock",147:"Long Beach State",148:"Long Island University",149:"Longwood",150:"Louisiana",151:"Louisiana State",152:"Louisiana Tech",153:"Louisiana-Monroe",154:"Louisville",155:"Loyola (IL)",156:"Loyola (MD)",157:"Loyola Marymount",158:"Maine",159:"Manhattan",160:"Marist",161:"Marquette",162:"Marshall",163:"Maryland",164:"Maryland-Baltimore County",165:"Maryland-Eastern Shore",166:"Massachusetts",167:"Massachusetts-Lowell",168:"McNeese State",169:"Memphis",170:"Mercer",171:"Miami (FL)",172:"Miami (OH)",173:"Michigan",174:"Michigan State",175:"Middle Tennessee",176:"Milwaukee",177:"Minnesota",178:"Mississippi",179:"Mississippi State",180:"Mississippi Valley State",181:"Missouri",182:"Missouri State",183:"Missouri-Kansas City",184:"Monmouth",185:"Montana",186:"Montana State",187:"Morehead State",188:"Morgan State",189:"Mount St. Mary's",190:"Murray State",191:"Navy",192:"Nebraska",193:"Nevada",194:"Nevada-Las Vegas",195:"New Hampshire",196:"New Mexico",197:"New Mexico State",198:"New Orleans",199:"Niagara",200:"Nicholls State",201:"NJIT",202:"Norfolk State",203:"North Carolina",204:"North Carolina A&T",205:"North Carolina Central",206:"North Carolina State",207:"North Carolina-Asheville",208:"North Carolina-Greensboro",209:"North Carolina-Wilmington",210:"North Dakota",211:"North Dakota State",212:"North Florida",213:"North Texas",214:"Northeastern",215:"Northern Arizona",216:"Northern Colorado",217:"Northern Illinois",218:"Northern Iowa",219:"Northern Kentucky",220:"Northwestern",221:"Northwestern State",222:"Notre Dame",223:"Oakland",224:"Ohio",225:"Ohio State",226:"Oklahoma",227:"Oklahoma State",228:"Old Dominion",229:"Omaha",230:"Oral Roberts",231:"Oregon",232:"Oregon State",233:"Pacific",234:"Penn State",235:"Pennsylvania",236:"Pepperdine",237:"Pittsburgh",238:"Portland",239:"Portland State",240:"Prairie View",241:"Presbyterian",242:"Princeton",243:"Providence",244:"Purdue",245:"Quinnipiac",246:"Radford",247:"Rhode Island",248:"Rice",249:"Richmond",250:"Rider",251:"Robert Morris",252:"Rutgers",253:"Sacramento State",254:"Sacred Heart",255:"Saint Francis (PA)",256:"Saint Joseph's",257:"Saint Louis",258:"Saint Mary's (CA)",259:"Saint Peter's",260:"Sam Houston State",261:"Samford",262:"San Diego",263:"San Diego State",264:"San Francisco",265:"San Jose State",266:"Santa Clara",267:"Savannah State",268:"Seattle",269:"Seton Hall",270:"Siena",271:"SIU Edwardsville",272:"South Alabama",273:"South Carolina",274:"South Carolina State",275:"South Carolina Upstate",276:"South Dakota",277:"South Dakota State",278:"South Florida",279:"Southeast Missouri State",280:"Southeastern Louisiana",281:"Southern",282:"Southern California",283:"Southern Illinois",284:"Southern Methodist",285:"Southern Mississippi",286:"Southern Utah",287:"St. Bonaventure",288:"St. Francis (NY)",289:"St. John's (NY)",290:"Stanford",291:"Stephen F. Austin",292:"Stetson",293:"Stony Brook",294:"Syracuse",295:"Temple",296:"Tennessee",297:"Tennessee State",298:"Tennessee Tech",299:"Tennessee-Martin",300:"Texas",301:"Texas A&M",302:"Texas A&M-Corpus Christi",303:"Texas Christian",304:"Texas Southern",305:"Texas State",306:"Texas Tech",307:"Texas-Arlington",308:"Texas-El Paso",309:"Texas-Rio Grande Valley",310:"Texas-San Antonio",311:"Toledo",312:"Towson",313:"Troy",314:"Tulane",315:"Tulsa",316:"UC-Davis",317:"UC-Irvine",318:"UC-Riverside",319:"UC-Santa Barbara",320:"UCLA",321:"University of California",322:"Utah",323:"Utah State",324:"Utah Valley",325:"Valparaiso",326:"Vanderbilt",327:"Vermont",328:"Villanova",329:"Virginia",330:"Virginia Commonwealth",331:"Virginia Tech",332:"VMI",333:"Wagner",334:"Wake Forest",335:"Washington",336:"Washington State",337:"Weber State",338:"West Virginia",339:"Western Carolina",340:"Western Illinois",341:"Western Kentucky",342:"Western Michigan",343:"Wichita State",344:"William & Mary",345:"Winthrop",346:"Wisconsin",347:"Wofford",348:"Wright State",349:"Wyoming",350:"Xavier",351:"Yale",352:"Youngstown State"},t.state={},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"StandingsTeamList"},l.a.createElement("div",{className:"pointer"}),l.a.createElement("div",{className:"StandingsTeamListContainer"},this.props.teams.map(function(a){return l.a.createElement("div",null,e.teamsMap[a])})))}}]),a}(n.Component)),M=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).handleActive=function(){t.setState({isActive:!0})},t.handleInactive=function(){t.setState({isActive:!1})},t.state={isActive:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"StandingNew",onMouseEnter:this.handleActive,onMouseLeave:this.handleInactive},l.a.createElement("span",{className:"StandingName"},this.props.name),l.a.createElement("div",null,this.state.isActive?l.a.createElement(y,{teams:this.props.teams}):null))}}]),a}(n.Component),N=(t(93),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).state={standings:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/standings").then(function(e){return e.json()}).then(function(a){a=a.sort(function(e,a){return e.name<a.name?-1:1}),e.setState({standings:a})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"StandingsContainer"},l.a.createElement("h3",null,"PICKS"),l.a.createElement("div",{className:"Standings"},l.a.createElement("div",null,this.state.standings.map(function(e,a){return l.a.createElement(M,{key:a,name:e.name,teams:e.teams_2018})}))))}}]),a}(n.Component)),k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),console.log(t.state.post),fetch("/api/password?password="+t.state.post).then(function(e){return e.json()}).then(function(e){console.log(e[0]),e[0]?(console.log(e[0]),t.setState({user:e[0]}),t.setState({authenticated:!0}),t.setState({passwordFeedback:"Welcome ".concat(t.state.user.name.split(" ")[0],"!")})):t.setState({passwordFeedback:"No good!"})})},t.state={user:{},passwordFeedback:"",post:"",authenticated:!1,timestamp:"nothing yet"},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Login"},this.state.timestamp,l.a.createElement(b,null),l.a.createElement(N,null))}}]),a}(n.Component),T=(t(95),t(97),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).handleTeamsBoxClick=function(e){e.preventDefault(),document.getElementById(e.target.id).classList.toggle("highlighted");var a=t.state.selectedTeams;a[e.target.id]?a[e.target.id].selected=!a[e.target.id].selected:a[e.target.id]={selected:!0},t.setState({selectedTeams:a})},t.handleSelectBoxSubmit=function(){var e=Object.keys(t.state.selectedTeams).filter(function(e){return!0===t.state.selectedTeams[e].selected}).map(function(e){return parseInt(e)+2}),a=e.reduce(function(e,a){return console.log("acc",e,"val",a),console.log(t.state.teamsHard[a-2].name,t.state.teamsHard[a].w),e+t.state.teamsHard[a-2].w},0);console.log("activeWinsTotal",a),t.state.user.name?5!==e.length?t.setState({submitFeedback:"Select five teams!"}):a>100?t.setState({submitFeedback:"Try again!"}):fetch("/api/teams?teamids=".concat(e.join(","),"&userid=").concat(t.state.user.id)).then(function(e){fetch("/api/password?password="+t.state.user.password).then(function(e){return e.json()}).then(function(e){if(console.log(e[0]),e[0]){console.log("2nd req",e[0]);var a=t.state;a.user=e[0],a.submitFeedback="Picks submitted!",t.setState({tempState:a})}})}):t.setState({submitFeedback:"Not signed in!"})},t.state={selectedTeams:{},user:{},submitFeedback:"",teamsHard:[{name:"Abilene Christian",w:16,l:16},{name:"Air Force",w:12,l:19},{name:"Akron",w:14,l:18},{name:"Alabama",w:20,l:16},{name:"Alabama A&M",w:3,l:28},{name:"Alabama State",w:8,l:23},{name:"Alabama-Birmingham",w:20,l:13},{name:"Albany (NY)",w:22,l:10},{name:"Alcorn State",w:11,l:21},{name:"American",w:6,l:24},{name:"Appalachian State",w:15,l:18},{name:"Arizona",w:27,l:8},{name:"Arizona State",w:20,l:12},{name:"Arkansas",w:23,l:12},{name:"Arkansas State",w:11,l:21},{name:"Arkansas-Pine Bluff",w:14,l:21},{name:"Army",w:13,l:17},{name:"Auburn",w:26,l:8},{name:"Austin Peay",w:19,l:15},{name:"Ball State",w:19,l:13},{name:"Baylor",w:19,l:15},{name:"Belmont",w:24,l:9},{name:"Bethune-Cookman",w:18,l:14},{name:"Binghamton",w:11,l:20},{name:"Boise State",w:23,l:9},{name:"Boston College",w:19,l:16},{name:"Boston University",w:15,l:16},{name:"Bowling Green State",w:16,l:16},{name:"Bradley",w:20,l:13},{name:"Brigham Young",w:24,l:11},{name:"Brown",w:11,l:16},{name:"Bryant",w:3,l:28},{name:"Bucknell",w:25,l:10},{name:"Buffalo",w:27,l:9},{name:"Butler",w:21,l:14},{name:"Cal Poly",w:9,l:22},{name:"Cal State Bakersfield",w:12,l:18},{name:"Cal State Fullerton",w:20,l:12},{name:"Cal State Northridge",w:6,l:24},{name:"Campbell",w:18,l:16},{name:"Canisius",w:21,l:12},{name:"Central Arkansas",w:18,l:17},{name:"Central Connecticut State",w:14,l:18},{name:"Central Florida",w:19,l:13},{name:"Central Michigan",w:21,l:15},{name:"Charleston Southern",w:15,l:16},{name:"Charlotte",w:6,l:23},{name:"Chattanooga",w:10,l:23},{name:"Chicago State",w:3,l:29},{name:"Cincinnati",w:31,l:5},{name:"Citadel",w:11,l:21},{name:"Clemson",w:25,l:10},{name:"Cleveland State",w:12,l:23},{name:"Coastal Carolina",w:14,l:18},{name:"Colgate",w:19,l:14},{name:"College of Charleston",w:26,l:8},{name:"Colorado",w:17,l:15},{name:"Colorado State",w:11,l:21},{name:"Columbia",w:8,l:19},{name:"Connecticut",w:14,l:18},{name:"Coppin State",w:5,l:27},{name:"Cornell",w:12,l:16},{name:"Creighton",w:21,l:12},{name:"Dartmouth",w:7,l:20},{name:"Davidson",w:21,l:12},{name:"Dayton",w:14,l:17},{name:"Delaware",w:14,l:19},{name:"Delaware State",w:4,l:28},{name:"Denver",w:15,l:15},{name:"DePaul",w:11,l:20},{name:"Detroit Mercy",w:8,l:24},{name:"Drake",w:17,l:17},{name:"Drexel",w:13,l:20},{name:"Duke",w:29,l:8},{name:"Duquesne",w:16,l:16},{name:"East Carolina",w:10,l:20},{name:"East Tennessee State",w:25,l:9},{name:"Eastern Illinois",w:12,l:19},{name:"Eastern Kentucky",w:11,l:20},{name:"Eastern Michigan",w:22,l:13},{name:"Eastern Washington",w:20,l:15},{name:"Elon",w:14,l:18},{name:"Evansville",w:17,l:15},{name:"Fairfield",w:17,l:16},{name:"Fairleigh Dickinson",w:13,l:18},{name:"Florida",w:21,l:13},{name:"Florida A&M",w:9,l:25},{name:"Florida Atlantic",w:12,l:19},{name:"Florida Gulf Coast",w:23,l:12},{name:"Florida International",w:14,l:18},{name:"Florida State",w:23,l:12},{name:"Fordham",w:9,l:22},{name:"Fort Wayne",w:18,l:15},{name:"Fresno State",w:21,l:11},{name:"Furman",w:23,l:10},{name:"Gardner-Webb",w:14,l:18},{name:"George Mason",w:16,l:17},{name:"George Washington",w:15,l:18},{name:"Georgetown",w:15,l:15},{name:"Georgia",w:18,l:15},{name:"Georgia Southern",w:21,l:12},{name:"Georgia State",w:24,l:11},{name:"Georgia Tech",w:13,l:19},{name:"Gonzaga",w:32,l:5},{name:"Grambling",w:17,l:14},{name:"Grand Canyon",w:22,l:12},{name:"Green Bay",w:13,l:20},{name:"Hampton",w:18,l:16},{name:"Hartford",w:19,l:14},{name:"Harvard",w:18,l:14},{name:"Hawaii",w:17,l:13},{name:"High Point",w:14,l:16},{name:"Hofstra",w:19,l:12},{name:"Holy Cross",w:12,l:19},{name:"Houston",w:27,l:8},{name:"Houston Baptist",w:6,l:25},{name:"Howard",w:10,l:23},{name:"Idaho",w:22,l:9},{name:"Idaho State",w:14,l:16},{name:"Illinois",w:14,l:18},{name:"Illinois State",w:18,l:15},{name:"Illinois-Chicago",w:20,l:16},{name:"Incarnate Word",w:7,l:21},{name:"Indiana",w:16,l:15},{name:"Indiana State",w:13,l:18},{name:"Iona",w:20,l:14},{name:"Iowa",w:14,l:19},{name:"Iowa State",w:13,l:18},{name:"IUPUI",w:11,l:19},{name:"Jackson State",w:12,l:20},{name:"Jacksonville",w:15,l:18},{name:"Jacksonville State",w:23,l:13},{name:"James Madison",w:10,l:22},{name:"Kansas",w:31,l:8},{name:"Kansas State",w:25,l:12},{name:"Kennesaw State",w:10,l:20},{name:"Kent State",w:17,l:17},{name:"Kentucky",w:26,l:11},{name:"La Salle",w:13,l:19},{name:"Lafayette",w:10,l:21},{name:"Lamar",w:19,l:14},{name:"Lehigh",w:16,l:14},{name:"Liberty",w:22,l:15},{name:"Lipscomb",w:23,l:10},{name:"Little Rock",w:7,l:25},{name:"Long Beach State",w:15,l:18},{name:"Long Island University",w:18,l:17},{name:"Longwood",w:7,l:26},{name:"Louisiana",w:27,l:7},{name:"Louisiana State",w:18,l:15},{name:"Louisiana Tech",w:17,l:16},{name:"Louisiana-Monroe",w:16,l:16},{name:"Louisville",w:22,l:14},{name:"Loyola (IL)",w:32,l:6},{name:"Loyola (MD)",w:9,l:22},{name:"Loyola Marymount",w:11,l:20},{name:"Maine",w:6,l:26},{name:"Manhattan",w:14,l:17},{name:"Marist",w:6,l:25},{name:"Marquette",w:21,l:14},{name:"Marshall",w:25,l:11},{name:"Maryland",w:19,l:13},{name:"Maryland-Baltimore County",w:25,l:11},{name:"Maryland-Eastern Shore",w:7,l:25},{name:"Massachusetts",w:13,l:20},{name:"Massachusetts-Lowell",w:12,l:18},{name:"McNeese State",w:12,l:17},{name:"Memphis",w:21,l:13},{name:"Mercer",w:19,l:15},{name:"Miami (FL)",w:22,l:10},{name:"Miami (OH)",w:16,l:18},{name:"Michigan",w:33,l:8},{name:"Michigan State",w:30,l:5},{name:"Middle Tennessee",w:25,l:8},{name:"Milwaukee",w:16,l:17},{name:"Minnesota",w:15,l:17},{name:"Mississippi",w:12,l:20},{name:"Mississippi State",w:25,l:12},{name:"Mississippi Valley State",w:4,l:28},{name:"Missouri",w:20,l:13},{name:"Missouri State",w:18,l:15},{name:"Missouri-Kansas City",w:10,l:22},{name:"Monmouth",w:11,l:20},{name:"Montana",w:26,l:8},{name:"Montana State",w:13,l:19},{name:"Morehead State",w:8,l:21},{name:"Morgan State",w:13,l:18},{name:"Mount St. Mary's",w:18,l:14},{name:"Murray State",w:26,l:6},{name:"Navy",w:20,l:12},{name:"Nebraska",w:22,l:11},{name:"Nevada",w:29,l:8},{name:"Nevada-Las Vegas",w:20,l:13},{name:"New Hampshire",w:10,l:21},{name:"New Mexico",w:19,l:15},{name:"New Mexico State",w:28,l:6},{name:"New Orleans",w:16,l:17},{name:"Niagara",w:19,l:14},{name:"Nicholls State",w:21,l:11},{name:"NJIT",w:14,l:16},{name:"Norfolk State",w:14,l:19},{name:"North Carolina",w:26,l:11},{name:"North Carolina A&T",w:20,l:15},{name:"North Carolina Central",w:19,l:16},{name:"North Carolina State",w:21,l:12},{name:"North Carolina-Asheville",w:21,l:13},{name:"North Carolina-Greensboro",w:27,l:8},{name:"North Carolina-Wilmington",w:11,l:21},{name:"North Dakota",w:12,l:20},{name:"North Dakota State",w:15,l:17},{name:"North Florida",w:14,l:19},{name:"North Texas",w:20,l:18},{name:"Northeastern",w:23,l:10},{name:"Northern Arizona",w:5,l:27},{name:"Northern Colorado",w:26,l:12},{name:"Northern Illinois",w:13,l:19},{name:"Northern Iowa",w:16,l:16},{name:"Northern Kentucky",w:22,l:10},{name:"Northwestern",w:15,l:17},{name:"Northwestern State",w:4,l:25},{name:"Notre Dame",w:21,l:15},{name:"Oakland",w:19,l:14},{name:"Ohio",w:14,l:17},{name:"Ohio State",w:25,l:9},{name:"Oklahoma",w:18,l:14},{name:"Oklahoma State",w:21,l:15},{name:"Old Dominion",w:25,l:7},{name:"Omaha",w:9,l:22},{name:"Oral Roberts",w:11,l:21},{name:"Oregon",w:23,l:13},{name:"Oregon State",w:16,l:16},{name:"Pacific",w:14,l:18},{name:"Penn State",w:26,l:13},{name:"Pennsylvania",w:24,l:9},{name:"Pepperdine",w:6,l:26},{name:"Pittsburgh",w:8,l:24},{name:"Portland",w:10,l:22},{name:"Portland State",w:20,l:14},{name:"Prairie View",w:16,l:18},{name:"Presbyterian",w:11,l:21},{name:"Princeton",w:13,l:16},{name:"Providence",w:21,l:14},{name:"Purdue",w:30,l:7},{name:"Quinnipiac",w:12,l:21},{name:"Radford",w:23,l:13},{name:"Rhode Island",w:26,l:8},{name:"Rice",w:7,l:24},{name:"Richmond",w:12,l:20},{name:"Rider",w:22,l:10},{name:"Robert Morris",w:16,l:17},{name:"Rutgers",w:15,l:19},{name:"Sacramento State",w:7,l:25},{name:"Sacred Heart",w:10,l:21},{name:"Saint Francis (PA)",w:18,l:13},{name:"Saint Joseph's",w:16,l:16},{name:"Saint Louis",w:17,l:16},{name:"Saint Mary's (CA)",w:30,l:6},{name:"Saint Peter's",w:14,l:18},{name:"Sam Houston State",w:21,l:15},{name:"Samford",w:10,l:22},{name:"San Diego",w:20,l:14},{name:"San Diego State",w:22,l:11},{name:"San Francisco",w:22,l:17},{name:"San Jose State",w:4,l:26},{name:"Santa Clara",w:11,l:20},{name:"Savannah State",w:15,l:17},{name:"Seattle",w:20,l:14},{name:"Seton Hall",w:22,l:12},{name:"Siena",w:8,l:24},{name:"SIU Edwardsville",w:9,l:21},{name:"South Alabama",w:14,l:18},{name:"South Carolina",w:17,l:16},{name:"South Carolina State",w:10,l:22},{name:"South Carolina Upstate",w:7,l:25},{name:"South Dakota",w:26,l:9},{name:"South Dakota State",w:28,l:7},{name:"South Florida",w:10,l:22},{name:"Southeast Missouri State",w:14,l:17},{name:"Southeastern Louisiana",w:22,l:12},{name:"Southern",w:15,l:18},{name:"Southern California",w:24,l:12},{name:"Southern Illinois",w:20,l:13},{name:"Southern Methodist",w:17,l:16},{name:"Southern Mississippi",w:16,l:18},{name:"Southern Utah",w:13,l:19},{name:"St. Bonaventure",w:26,l:8},{name:"St. Francis (NY)",w:13,l:18},{name:"St. John's (NY)",w:16,l:17},{name:"Stanford",w:19,l:16},{name:"Stephen F. Austin",w:28,l:7},{name:"Stetson",w:12,l:20},{name:"Stony Brook",w:13,l:19},{name:"Syracuse",w:23,l:14},{name:"Temple",w:17,l:16},{name:"Tennessee",w:26,l:9},{name:"Tennessee State",w:15,l:15},{name:"Tennessee Tech",w:19,l:14},{name:"Tennessee-Martin",w:10,l:21},{name:"Texas",w:19,l:15},{name:"Texas A&M",w:22,l:13},{name:"Texas A&M-Corpus Christi",w:11,l:18},{name:"Texas Christian",w:21,l:12},{name:"Texas Southern",w:16,l:20},{name:"Texas State",w:15,l:18},{name:"Texas Tech",w:27,l:10},{name:"Texas-Arlington",w:21,l:13},{name:"Texas-El Paso",w:11,l:20},{name:"Texas-Rio Grande Valley",w:15,l:18},{name:"Texas-San Antonio",w:20,l:15},{name:"Toledo",w:23,l:11},{name:"Towson",w:18,l:14},{name:"Troy",w:16,l:17},{name:"Tulane",w:14,l:17},{name:"Tulsa",w:19,l:12},{name:"UC-Davis",w:22,l:11},{name:"UC-Irvine",w:18,l:17},{name:"UC-Riverside",w:9,l:22},{name:"UC-Santa Barbara",w:23,l:9},{name:"UCLA",w:21,l:12},{name:"University of California",w:8,l:24},{name:"Utah",w:23,l:12},{name:"Utah State",w:17,l:17},{name:"Utah Valley",w:23,l:11},{name:"Valparaiso",w:15,l:17},{name:"Vanderbilt",w:12,l:20},{name:"Vermont",w:27,l:8},{name:"Villanova",w:36,l:4},{name:"Virginia",w:31,l:3},{name:"Virginia Commonwealth",w:18,l:15},{name:"Virginia Tech",w:21,l:12},{name:"VMI",w:9,l:21},{name:"Wagner",w:23,l:10},{name:"Wake Forest",w:11,l:20},{name:"Washington",w:21,l:13},{name:"Washington State",w:12,l:19},{name:"Weber State",w:20,l:11},{name:"West Virginia",w:26,l:11},{name:"Western Carolina",w:13,l:19},{name:"Western Illinois",w:12,l:16},{name:"Western Kentucky",w:27,l:11},{name:"Western Michigan",w:17,l:15},{name:"Wichita State",w:25,l:8},{name:"William & Mary",w:19,l:12},{name:"Winthrop",w:19,l:12},{name:"Wisconsin",w:15,l:18},{name:"Wofford",w:21,l:13},{name:"Wright State",w:25,l:10},{name:"Wyoming",w:20,l:13},{name:"Xavier",w:29,l:6},{name:"Yale",w:16,l:15},{name:"Youngstown State",w:8,l:24}]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.location.state&&this.props.location.state.user&&this.setState({user:this.props.location.state.user})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"TeamSelect"},l.a.createElement("div",null,l.a.createElement("div",{className:"UserBox"},l.a.createElement("span",{style:{fontSize:"14px"}},this.state.user.name?this.state.user.name:"Please sign in on home page before submitting teams"),l.a.createElement("p",null,l.a.createElement("br",null),this.state.user.teams_2018?"Current teams:":null,l.a.createElement("br",null),l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[0]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[1]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[2]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[3]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[4]-2].name:null))),l.a.createElement("div",{className:"TeamsContainer"},l.a.createElement("div",{className:"TeamsContainerHeading"},l.a.createElement("span",null,"School"),l.a.createElement("span",null,"2017-18 W-L")),l.a.createElement("div",{className:"TeamsContainerBody"},this.state.teamsHard.map(function(a,t){return l.a.createElement("div",{className:"TeamSelectRow",id:t,onClick:e.handleTeamsBoxClick},l.a.createElement("span",{id:t,className:"MainTeamName"},a.name),l.a.createElement("span",{id:t,className:"MainTeamRecord"},a.w,"-",a.l))}))),l.a.createElement("div",null,l.a.createElement("div",{className:"SelectBoxContainer"},l.a.createElement("div",{className:"SelectBoxHeader"},"SELECTED TEAMS"),l.a.createElement("div",{className:"SelectBoxTeams"},Object.keys(this.state.selectedTeams).filter(function(a){return!0===e.state.selectedTeams[a].selected}).map(function(a){return l.a.createElement("div",{key:a,className:"SelectBoxTeamRow"},l.a.createElement("span",{className:"smallteamname"},e.state.teamsHard[a].name+" - "),l.a.createElement("span",{className:"smallteamwins"},e.state.teamsHard[a].w))})),l.a.createElement("div",{className:"SelectBoxFooter"},l.a.createElement("div",{className:"SelectBoxWinTotal"},l.a.createElement("div",null,Object.keys(this.state.selectedTeams).reduce(function(a,t){return e.state.selectedTeams[t].selected?a+e.state.teamsHard[t].w:a},0)),l.a.createElement("div",{style:{fontSize:"10px"}},"WINS"))),l.a.createElement("div",{className:"SelectBoxSubmit"},l.a.createElement("button",{onClick:this.handleSelectBoxSubmit},"SUBMIT")),l.a.createElement("div",{className:"SelectBoxNotification"},this.state.submitFeedback||null))))}}]),a}(n.Component)),A=(t(99),function(e){return l.a.createElement("div",{className:"Standing"},l.a.createElement("span",null,e.name," -"),l.a.createElement("span",null,"- ",e.wins))}),O=(t(101),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).state={standingsHard:{"Chris Clark":129,"Coreen Kopper":128,"Patrick Grove":124,"Kevin Meuse":124,"Brendon Desrochers":123,"Gil Estupinan":123,"Timothy Falkner":123,"French/Reiman":122,"Scott Sherman":122,"Matt Gordon":122,"Mike Agresti":121,"Brendan Bansavage":121,"Kyle Harris":120,"Ron Haraka":119,"Adam Sidney":118,"Troy Davis":117,"Andrew Soltish":117,"Brayton Wike":117,"Joe Franza":116,"Calvin Groves":114,"Erin McDermott":114,"Jay Kelly":114,"Michael Leboff":113,"Johnny Vohra":113,"Ryan Corbalis":109,"Rob Coloney":109,"Alex Raup":108,"Lucille Kelly":100,"Dan Vogel":91,"Chris Godfrey":77,"Amol Vohra":75}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"outstandings"},l.a.createElement("div",{className:"StandingsOld"},l.a.createElement("div",{id:"names"},Object.keys(this.state.standingsHard).map(function(a,t){return l.a.createElement(A,{key:t,name:a,wins:e.state.standingsHard[a]})}))),l.a.createElement("div",{id:"comment"},"These are from last year"))}}]),a}(n.Component)),B=(t(103),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),console.log(t.state.post),fetch("/api/password?password="+t.state.post).then(function(e){return e.json()}).then(function(e){console.log(e[0]),e[0]?(console.log(e[0]),t.setState({user:e[0]}),t.setState({authenticated:!0}),t.setState({passwordFeedback:"Welcome ".concat(t.state.user.name.split(" ")[0],"!")})):t.setState({passwordFeedback:"No good!"})})},t.state={user:{},passwordFeedback:"",post:"",authenticated:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",null,l.a.createElement(N,null)),l.a.createElement("div",null,l.a.createElement(b,null)))}}]),a}(n.Component)),I=(t(105),function(){return l.a.createElement("div",{className:"InfoContainer"},l.a.createElement("div",{className:"Info"},l.a.createElement("h2",null,"HISTORY"),l.a.createElement("p",null,"The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his small village in Connecticut. All records that year were kept on elk hides and then burned ceremonially at the end of the season, a tradition that we continue today."),l.a.createElement(w.a,{to:"/pastchamps"},"Click to see our past winners"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"RULES"),l.a.createElement("p",null,"The rules are simple, and pleasing to the eye - participants select five teams that collectively won no more than 100 games the previous season. The person whose teams win the most games this year (excluding non-NCAA postseason tournaments - i.e. NIT, CIT, etc.) wins the grand prize: a Fast & The Furious DVD box set and a 6-pack of Doritos-flavored Mountain Dew."),l.a.createElement("br",null),l.a.createElement("h2",null,"2018-19"),l.a.createElement("p",null,"This season promises to be our greatest yet, with the following #5ALIVE legends already confirming their commitment:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,"Chris Godfrey"),l.a.createElement("li",null,"Pat Godfrey"),l.a.createElement("li",null,"Ryan Corbalis"),l.a.createElement("li",null,"Dillon Smith"),l.a.createElement("li",null,"Justin McNamee"),l.a.createElement("li",null,"Michael Jordan"),l.a.createElement("li",null,"Mark McGill"),l.a.createElement("li",null,"JP Kelly"),l.a.createElement("li",null,"Dan Vogel"),l.a.createElement("li",null,"Wilt Chamberlain"),l.a.createElement("li",null,"Pat Godfrey"))))}),D=(t(107),function(){return l.a.createElement("div",{className:"champscontainer"},l.a.createElement("div",{className:"champs"},l.a.createElement("h2",null,"PAST CHAMPS"),l.a.createElement("div",null,"2018 - Chris Clark"),l.a.createElement("div",null,"2017 - Andrew Cahalan"),l.a.createElement("div",null,"2016 - Scott Sherman"),l.a.createElement("div",null,"2015 - Rob Coloney"),l.a.createElement("div",null,"2014 - Tim Falkner"),l.a.createElement("div",null,"2013 - ???"),l.a.createElement("div",null,"2012 - Wilt Chamberlain"),l.a.createElement("div",null,"2011 - Troy Davis")))}),F=function(e){function a(e){return Object(o.a)(this,a),Object(m.a)(this,Object(c.a)(a).call(this,e))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(S.a,{path:"/",exact:!0,component:B}),l.a.createElement(S.a,{path:"/home",component:B}),l.a.createElement(S.a,{path:"/login",component:k}),l.a.createElement(S.a,{path:"/teamselect",component:T}),l.a.createElement(S.a,{path:"/standingsold",component:O}),l.a.createElement(S.a,{path:"/info",component:I}),l.a.createElement(S.a,{path:"/pastchamps",component:D}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},39:function(e,a,t){e.exports=t.p+"static/media/fivealivelogo.2829ca5d.jpg"},41:function(e,a,t){e.exports=t(110)},46:function(e,a,t){},48:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){},86:function(e,a){},89:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){},95:function(e,a,t){},97:function(e,a,t){},99:function(e,a,t){}},[[41,2,1]]]);
//# sourceMappingURL=main.bbbd88c9.chunk.js.map