(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,n){e.exports=n(41)},,,,,function(e,a,n){},,function(e,a,n){},,,,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,,function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),m=n(13),s=n.n(m),r=(n(20),n(5)),i=n(6),o=n(8),c=n(7),w=n(9),u=n(42),d=(n(22),function(){return l.a.createElement("header",null,l.a.createElement("span",{className:"title"},l.a.createElement("strong",null,l.a.createElement("span",{className:"bordered",id:"one"},"#"),l.a.createElement("span",{className:"bordered",id:"two"},"5"),l.a.createElement("span",{className:"bordered",id:"three"},"A"),l.a.createElement("span",{className:"bordered",id:"four"},"L"),l.a.createElement("span",{className:"bordered",id:"five"},"I"),l.a.createElement("span",{className:"bordered",id:"six"},"V"),l.a.createElement("span",{className:"bordered",id:"seven"},"E"))),l.a.createElement("span",{className:"link"},l.a.createElement("span",null,l.a.createElement(u.a,{to:"/login"},"HOME")),l.a.createElement("span",null,l.a.createElement(u.a,{to:"/info"},"INFO")),l.a.createElement("span",null,l.a.createElement(u.a,{to:"/standings"},"STANDINGS"))))}),h=n(43),S=n(44),E=(n(26),function(e){function a(e){var n;return Object(r.a)(this,a),(n=Object(o.a)(this,Object(c.a)(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),console.log(n.state.post),fetch("/api/password?password="+n.state.post).then(function(e){return e.json()}).then(function(e){console.log(e[0]),e[0]?(console.log(e[0]),n.setState({user:e[0]}),n.setState({authenticated:!0}),n.setState({passwordFeedback:"Welcome ".concat(n.state.user.name.split(" ")[0],"!")})):n.setState({passwordFeedback:"No good!"})})},n.state={user:{},passwordFeedback:"",post:"",authenticated:!1},n}return Object(w.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"Login"},l.a.createElement("div",{id:"logincontainer"},l.a.createElement("p",null,l.a.createElement("strong",null,"Come get some nice #5ALIVE")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("p",null,"Enter password:"),l.a.createElement("input",{type:"text",value:this.state.post,onChange:function(a){return e.setState({post:a.target.value})}}),l.a.createElement("button",{type:"submit",style:{marginLeft:"10px"}},"Submit")),l.a.createElement("br",null),l.a.createElement("p",{className:"notification"},this.state.passwordFeedback),l.a.createElement("p",null,this.state.authenticated?l.a.createElement(u.a,{to:{pathname:"/teamselect",state:{user:this.state.user}}},l.a.createElement("strong",null,"CLICK HERE TO PICK YOUR TEAMS")):null)))}}]),a}(t.Component)),p=(n(28),n(30),function(e){function a(e){var n;return Object(r.a)(this,a),(n=Object(o.a)(this,Object(c.a)(a).call(this,e))).handleTeamsBoxClick=function(e){e.preventDefault(),document.getElementById(e.target.id).classList.toggle("highlighted");var a=n.state.selectedTeams;a[e.target.id]?a[e.target.id].selected=!a[e.target.id].selected:a[e.target.id]={selected:!0},n.setState({selectedTeams:a})},n.handleSelectBoxSubmit=function(){var e=Object.keys(n.state.selectedTeams).filter(function(e){return!0===n.state.selectedTeams[e].selected}).map(function(e){return parseInt(e)+2}),a=e.reduce(function(e,a){return console.log("acc",e,"val",a),console.log(n.state.teamsHard[a-2].name,n.state.teamsHard[a].w),e+n.state.teamsHard[a-2].w},0);console.log("activeWinsTotal",a),n.state.user.name?5!==e.length?n.setState({submitFeedback:"Select five teams!"}):a>100?n.setState({submitFeedback:"Try again!"}):fetch("/api/teams?teamids=".concat(e.join(","),"&userid=").concat(n.state.user.id)).then(function(e){fetch("/api/password?password="+n.state.user.password).then(function(e){return e.json()}).then(function(e){if(console.log(e[0]),e[0]){console.log("2nd req",e[0]);var a=n.state;a.user=e[0],a.submitFeedback="Picks submitted!",n.setState({tempState:a})}})}):n.setState({submitFeedback:"Not signed in!"})},n.state={selectedTeams:{},user:{},submitFeedback:"",teamsHard:[{name:"Abilene Christian",w:16,l:16},{name:"Air Force",w:12,l:19},{name:"Akron",w:14,l:18},{name:"Alabama",w:20,l:16},{name:"Alabama A&M",w:3,l:28},{name:"Alabama State",w:8,l:23},{name:"Alabama-Birmingham",w:20,l:13},{name:"Albany (NY)",w:22,l:10},{name:"Alcorn State",w:11,l:21},{name:"American",w:6,l:24},{name:"Appalachian State",w:15,l:18},{name:"Arizona",w:27,l:8},{name:"Arizona State",w:20,l:12},{name:"Arkansas",w:23,l:12},{name:"Arkansas State",w:11,l:21},{name:"Arkansas-Pine Bluff",w:14,l:21},{name:"Army",w:13,l:17},{name:"Auburn",w:26,l:8},{name:"Austin Peay",w:19,l:15},{name:"Ball State",w:19,l:13},{name:"Baylor",w:19,l:15},{name:"Belmont",w:24,l:9},{name:"Bethune-Cookman",w:18,l:14},{name:"Binghamton",w:11,l:20},{name:"Boise State",w:23,l:9},{name:"Boston College",w:19,l:16},{name:"Boston University",w:15,l:16},{name:"Bowling Green State",w:16,l:16},{name:"Bradley",w:20,l:13},{name:"Brigham Young",w:24,l:11},{name:"Brown",w:11,l:16},{name:"Bryant",w:3,l:28},{name:"Bucknell",w:25,l:10},{name:"Buffalo",w:27,l:9},{name:"Butler",w:21,l:14},{name:"Cal Poly",w:9,l:22},{name:"Cal State Bakersfield",w:12,l:18},{name:"Cal State Fullerton",w:20,l:12},{name:"Cal State Northridge",w:6,l:24},{name:"Campbell",w:18,l:16},{name:"Canisius",w:21,l:12},{name:"Central Arkansas",w:18,l:17},{name:"Central Connecticut State",w:14,l:18},{name:"Central Florida",w:19,l:13},{name:"Central Michigan",w:21,l:15},{name:"Charleston Southern",w:15,l:16},{name:"Charlotte",w:6,l:23},{name:"Chattanooga",w:10,l:23},{name:"Chicago State",w:3,l:29},{name:"Cincinnati",w:31,l:5},{name:"Citadel",w:11,l:21},{name:"Clemson",w:25,l:10},{name:"Cleveland State",w:12,l:23},{name:"Coastal Carolina",w:14,l:18},{name:"Colgate",w:19,l:14},{name:"College of Charleston",w:26,l:8},{name:"Colorado",w:17,l:15},{name:"Colorado State",w:11,l:21},{name:"Columbia",w:8,l:19},{name:"Connecticut",w:14,l:18},{name:"Coppin State",w:5,l:27},{name:"Cornell",w:12,l:16},{name:"Creighton",w:21,l:12},{name:"Dartmouth",w:7,l:20},{name:"Davidson",w:21,l:12},{name:"Dayton",w:14,l:17},{name:"Delaware",w:14,l:19},{name:"Delaware State",w:4,l:28},{name:"Denver",w:15,l:15},{name:"DePaul",w:11,l:20},{name:"Detroit Mercy",w:8,l:24},{name:"Drake",w:17,l:17},{name:"Drexel",w:13,l:20},{name:"Duke",w:29,l:8},{name:"Duquesne",w:16,l:16},{name:"East Carolina",w:10,l:20},{name:"East Tennessee State",w:25,l:9},{name:"Eastern Illinois",w:12,l:19},{name:"Eastern Kentucky",w:11,l:20},{name:"Eastern Michigan",w:22,l:13},{name:"Eastern Washington",w:20,l:15},{name:"Elon",w:14,l:18},{name:"Evansville",w:17,l:15},{name:"Fairfield",w:17,l:16},{name:"Fairleigh Dickinson",w:13,l:18},{name:"Florida",w:21,l:13},{name:"Florida A&M",w:9,l:25},{name:"Florida Atlantic",w:12,l:19},{name:"Florida Gulf Coast",w:23,l:12},{name:"Florida International",w:14,l:18},{name:"Florida State",w:23,l:12},{name:"Fordham",w:9,l:22},{name:"Fort Wayne",w:18,l:15},{name:"Fresno State",w:21,l:11},{name:"Furman",w:23,l:10},{name:"Gardner-Webb",w:14,l:18},{name:"George Mason",w:16,l:17},{name:"George Washington",w:15,l:18},{name:"Georgetown",w:15,l:15},{name:"Georgia",w:18,l:15},{name:"Georgia Southern",w:21,l:12},{name:"Georgia State",w:24,l:11},{name:"Georgia Tech",w:13,l:19},{name:"Gonzaga",w:32,l:5},{name:"Grambling",w:17,l:14},{name:"Grand Canyon",w:22,l:12},{name:"Green Bay",w:13,l:20},{name:"Hampton",w:18,l:16},{name:"Hartford",w:19,l:14},{name:"Harvard",w:18,l:14},{name:"Hawaii",w:17,l:13},{name:"High Point",w:14,l:16},{name:"Hofstra",w:19,l:12},{name:"Holy Cross",w:12,l:19},{name:"Houston",w:27,l:8},{name:"Houston Baptist",w:6,l:25},{name:"Howard",w:10,l:23},{name:"Idaho",w:22,l:9},{name:"Idaho State",w:14,l:16},{name:"Illinois",w:14,l:18},{name:"Illinois State",w:18,l:15},{name:"Illinois-Chicago",w:20,l:16},{name:"Incarnate Word",w:7,l:21},{name:"Indiana",w:16,l:15},{name:"Indiana State",w:13,l:18},{name:"Iona",w:20,l:14},{name:"Iowa",w:14,l:19},{name:"Iowa State",w:13,l:18},{name:"IUPUI",w:11,l:19},{name:"Jackson State",w:12,l:20},{name:"Jacksonville",w:15,l:18},{name:"Jacksonville State",w:23,l:13},{name:"James Madison",w:10,l:22},{name:"Kansas",w:31,l:8},{name:"Kansas State",w:25,l:12},{name:"Kennesaw State",w:10,l:20},{name:"Kent State",w:17,l:17},{name:"Kentucky",w:26,l:11},{name:"La Salle",w:13,l:19},{name:"Lafayette",w:10,l:21},{name:"Lamar",w:19,l:14},{name:"Lehigh",w:16,l:14},{name:"Liberty",w:22,l:15},{name:"Lipscomb",w:23,l:10},{name:"Little Rock",w:7,l:25},{name:"Long Beach State",w:15,l:18},{name:"Long Island University",w:18,l:17},{name:"Longwood",w:7,l:26},{name:"Louisiana",w:27,l:7},{name:"Louisiana State",w:18,l:15},{name:"Louisiana Tech",w:17,l:16},{name:"Louisiana-Monroe",w:16,l:16},{name:"Louisville",w:22,l:14},{name:"Loyola (IL)",w:32,l:6},{name:"Loyola (MD)",w:9,l:22},{name:"Loyola Marymount",w:11,l:20},{name:"Maine",w:6,l:26},{name:"Manhattan",w:14,l:17},{name:"Marist",w:6,l:25},{name:"Marquette",w:21,l:14},{name:"Marshall",w:25,l:11},{name:"Maryland",w:19,l:13},{name:"Maryland-Baltimore County",w:25,l:11},{name:"Maryland-Eastern Shore",w:7,l:25},{name:"Massachusetts",w:13,l:20},{name:"Massachusetts-Lowell",w:12,l:18},{name:"McNeese State",w:12,l:17},{name:"Memphis",w:21,l:13},{name:"Mercer",w:19,l:15},{name:"Miami (FL)",w:22,l:10},{name:"Miami (OH)",w:16,l:18},{name:"Michigan",w:33,l:8},{name:"Michigan State",w:30,l:5},{name:"Middle Tennessee",w:25,l:8},{name:"Milwaukee",w:16,l:17},{name:"Minnesota",w:15,l:17},{name:"Mississippi",w:12,l:20},{name:"Mississippi State",w:25,l:12},{name:"Mississippi Valley State",w:4,l:28},{name:"Missouri",w:20,l:13},{name:"Missouri State",w:18,l:15},{name:"Missouri-Kansas City",w:10,l:22},{name:"Monmouth",w:11,l:20},{name:"Montana",w:26,l:8},{name:"Montana State",w:13,l:19},{name:"Morehead State",w:8,l:21},{name:"Morgan State",w:13,l:18},{name:"Mount St. Mary's",w:18,l:14},{name:"Murray State",w:26,l:6},{name:"Navy",w:20,l:12},{name:"Nebraska",w:22,l:11},{name:"Nevada",w:29,l:8},{name:"Nevada-Las Vegas",w:20,l:13},{name:"New Hampshire",w:10,l:21},{name:"New Mexico",w:19,l:15},{name:"New Mexico State",w:28,l:6},{name:"New Orleans",w:16,l:17},{name:"Niagara",w:19,l:14},{name:"Nicholls State",w:21,l:11},{name:"NJIT",w:14,l:16},{name:"Norfolk State",w:14,l:19},{name:"North Carolina",w:26,l:11},{name:"North Carolina A&T",w:20,l:15},{name:"North Carolina Central",w:19,l:16},{name:"North Carolina State",w:21,l:12},{name:"North Carolina-Asheville",w:21,l:13},{name:"North Carolina-Greensboro",w:27,l:8},{name:"North Carolina-Wilmington",w:11,l:21},{name:"North Dakota",w:12,l:20},{name:"North Dakota State",w:15,l:17},{name:"North Florida",w:14,l:19},{name:"North Texas",w:20,l:18},{name:"Northeastern",w:23,l:10},{name:"Northern Arizona",w:5,l:27},{name:"Northern Colorado",w:26,l:12},{name:"Northern Illinois",w:13,l:19},{name:"Northern Iowa",w:16,l:16},{name:"Northern Kentucky",w:22,l:10},{name:"Northwestern",w:15,l:17},{name:"Northwestern State",w:4,l:25},{name:"Notre Dame",w:21,l:15},{name:"Oakland",w:19,l:14},{name:"Ohio",w:14,l:17},{name:"Ohio State",w:25,l:9},{name:"Oklahoma",w:18,l:14},{name:"Oklahoma State",w:21,l:15},{name:"Old Dominion",w:25,l:7},{name:"Omaha",w:9,l:22},{name:"Oral Roberts",w:11,l:21},{name:"Oregon",w:23,l:13},{name:"Oregon State",w:16,l:16},{name:"Pacific",w:14,l:18},{name:"Penn State",w:26,l:13},{name:"Pennsylvania",w:24,l:9},{name:"Pepperdine",w:6,l:26},{name:"Pittsburgh",w:8,l:24},{name:"Portland",w:10,l:22},{name:"Portland State",w:20,l:14},{name:"Prairie View",w:16,l:18},{name:"Presbyterian",w:11,l:21},{name:"Princeton",w:13,l:16},{name:"Providence",w:21,l:14},{name:"Purdue",w:30,l:7},{name:"Quinnipiac",w:12,l:21},{name:"Radford",w:23,l:13},{name:"Rhode Island",w:26,l:8},{name:"Rice",w:7,l:24},{name:"Richmond",w:12,l:20},{name:"Rider",w:22,l:10},{name:"Robert Morris",w:16,l:17},{name:"Rutgers",w:15,l:19},{name:"Sacramento State",w:7,l:25},{name:"Sacred Heart",w:10,l:21},{name:"Saint Francis (PA)",w:18,l:13},{name:"Saint Joseph's",w:16,l:16},{name:"Saint Louis",w:17,l:16},{name:"Saint Mary's (CA)",w:30,l:6},{name:"Saint Peter's",w:14,l:18},{name:"Sam Houston State",w:21,l:15},{name:"Samford",w:10,l:22},{name:"San Diego",w:20,l:14},{name:"San Diego State",w:22,l:11},{name:"San Francisco",w:22,l:17},{name:"San Jose State",w:4,l:26},{name:"Santa Clara",w:11,l:20},{name:"Savannah State",w:15,l:17},{name:"Seattle",w:20,l:14},{name:"Seton Hall",w:22,l:12},{name:"Siena",w:8,l:24},{name:"SIU Edwardsville",w:9,l:21},{name:"South Alabama",w:14,l:18},{name:"South Carolina",w:17,l:16},{name:"South Carolina State",w:10,l:22},{name:"South Carolina Upstate",w:7,l:25},{name:"South Dakota",w:26,l:9},{name:"South Dakota State",w:28,l:7},{name:"South Florida",w:10,l:22},{name:"Southeast Missouri State",w:14,l:17},{name:"Southeastern Louisiana",w:22,l:12},{name:"Southern",w:15,l:18},{name:"Southern California",w:24,l:12},{name:"Southern Illinois",w:20,l:13},{name:"Southern Methodist",w:17,l:16},{name:"Southern Mississippi",w:16,l:18},{name:"Southern Utah",w:13,l:19},{name:"St. Bonaventure",w:26,l:8},{name:"St. Francis (NY)",w:13,l:18},{name:"St. John's (NY)",w:16,l:17},{name:"Stanford",w:19,l:16},{name:"Stephen F. Austin",w:28,l:7},{name:"Stetson",w:12,l:20},{name:"Stony Brook",w:13,l:19},{name:"Syracuse",w:23,l:14},{name:"Temple",w:17,l:16},{name:"Tennessee",w:26,l:9},{name:"Tennessee State",w:15,l:15},{name:"Tennessee Tech",w:19,l:14},{name:"Tennessee-Martin",w:10,l:21},{name:"Texas",w:19,l:15},{name:"Texas A&M",w:22,l:13},{name:"Texas A&M-Corpus Christi",w:11,l:18},{name:"Texas Christian",w:21,l:12},{name:"Texas Southern",w:16,l:20},{name:"Texas State",w:15,l:18},{name:"Texas Tech",w:27,l:10},{name:"Texas-Arlington",w:21,l:13},{name:"Texas-El Paso",w:11,l:20},{name:"Texas-Rio Grande Valley",w:15,l:18},{name:"Texas-San Antonio",w:20,l:15},{name:"Toledo",w:23,l:11},{name:"Towson",w:18,l:14},{name:"Troy",w:16,l:17},{name:"Tulane",w:14,l:17},{name:"Tulsa",w:19,l:12},{name:"UC-Davis",w:22,l:11},{name:"UC-Irvine",w:18,l:17},{name:"UC-Riverside",w:9,l:22},{name:"UC-Santa Barbara",w:23,l:9},{name:"UCLA",w:21,l:12},{name:"University of California",w:8,l:24},{name:"Utah",w:23,l:12},{name:"Utah State",w:17,l:17},{name:"Utah Valley",w:23,l:11},{name:"Valparaiso",w:15,l:17},{name:"Vanderbilt",w:12,l:20},{name:"Vermont",w:27,l:8},{name:"Villanova",w:36,l:4},{name:"Virginia",w:31,l:3},{name:"Virginia Commonwealth",w:18,l:15},{name:"Virginia Tech",w:21,l:12},{name:"VMI",w:9,l:21},{name:"Wagner",w:23,l:10},{name:"Wake Forest",w:11,l:20},{name:"Washington",w:21,l:13},{name:"Washington State",w:12,l:19},{name:"Weber State",w:20,l:11},{name:"West Virginia",w:26,l:11},{name:"Western Carolina",w:13,l:19},{name:"Western Illinois",w:12,l:16},{name:"Western Kentucky",w:27,l:11},{name:"Western Michigan",w:17,l:15},{name:"Wichita State",w:25,l:8},{name:"William & Mary",w:19,l:12},{name:"Winthrop",w:19,l:12},{name:"Wisconsin",w:15,l:18},{name:"Wofford",w:21,l:13},{name:"Wright State",w:25,l:10},{name:"Wyoming",w:20,l:13},{name:"Xavier",w:29,l:6},{name:"Yale",w:16,l:15},{name:"Youngstown State",w:8,l:24}]},n}return Object(w.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.location.state&&this.props.location.state.user&&this.setState({user:this.props.location.state.user})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"TeamSelect"},l.a.createElement("div",null,l.a.createElement("div",{className:"UserBox"},l.a.createElement("span",{style:{fontSize:"14px"}},this.state.user.name?this.state.user.name:"Please sign in on home page before submitting teams"),l.a.createElement("p",null,l.a.createElement("br",null),this.state.user.teams_2018?"Current teams:":null,l.a.createElement("br",null),l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[0]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[1]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[2]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[3]-2].name:null,l.a.createElement("br",null),this.state.user.teams_2018?this.state.teamsHard[this.state.user.teams_2018[4]-2].name:null))),l.a.createElement("div",{className:"TeamsContainer"},l.a.createElement("div",{className:"TeamsContainerHeading"},l.a.createElement("span",null,"School"),l.a.createElement("span",null,"2017-18 W-L")),l.a.createElement("div",{className:"TeamsContainerBody"},this.state.teamsHard.map(function(a,n){return l.a.createElement("div",{className:"TeamSelectRow",id:n,onClick:e.handleTeamsBoxClick},l.a.createElement("span",{id:n,className:"MainTeamName"},a.name),l.a.createElement("span",{id:n,className:"MainTeamRecord"},a.w,"-",a.l))}))),l.a.createElement("div",null,l.a.createElement("div",{className:"SelectBoxContainer"},l.a.createElement("div",{className:"SelectBoxHeader"},"SELECTED TEAMS"),l.a.createElement("div",{className:"SelectBoxTeams"},Object.keys(this.state.selectedTeams).filter(function(a){return!0===e.state.selectedTeams[a].selected}).map(function(a){return l.a.createElement("div",{key:a,className:"SelectBoxTeamRow"},l.a.createElement("span",{className:"smallteamname"},e.state.teamsHard[a].name+" - "),l.a.createElement("span",{className:"smallteamwins"},e.state.teamsHard[a].w))})),l.a.createElement("div",{className:"SelectBoxFooter"},l.a.createElement("div",{className:"SelectBoxWinTotal"},l.a.createElement("div",null,Object.keys(this.state.selectedTeams).reduce(function(a,n){return e.state.selectedTeams[n].selected?a+e.state.teamsHard[n].w:a},0)),l.a.createElement("div",{style:{fontSize:"10px"}},"WINS"))),l.a.createElement("div",{className:"SelectBoxSubmit"},l.a.createElement("button",{onClick:this.handleSelectBoxSubmit},"SUBMIT")),l.a.createElement("div",{className:"SelectBoxNotification"},this.state.submitFeedback||null))))}}]),a}(t.Component)),g=(n(32),function(e){return l.a.createElement("div",{className:"Standing"},l.a.createElement("span",null,e.name," -"),l.a.createElement("span",null,"- ",e.wins))}),b=(n(34),function(e){function a(e){var n;return Object(r.a)(this,a),(n=Object(o.a)(this,Object(c.a)(a).call(this,e))).state={standingsHard:{"Chris Clark":129,"Coreen Kopper":128,"Patrick Grove":124,"Kevin Meuse":124,"Brendon Desrochers":123,"Gil Estupinan":123,"Timothy Falkner":123,"French/Reiman":122,"Scott Sherman":122,"Matt Gordon":122,"Mike Agresti":121,"Brendan Bansavage":121,"Kyle Harris":120,"Ron Haraka":119,"Adam Sidney":118,"Troy Davis":117,"Andrew Soltish":117,"Brayton Wike":117,"Joe Franza":116,"Calvin Groves":114,"Erin McDermott":114,"Jay Kelly":114,"Michael Leboff":113,"Johnny Vohra":113,"Ryan Corbalis":109,"Rob Coloney":109,"Alex Raup":108,"Lucille Kelly":100,"Dan Vogel":91,"Chris Godfrey":77,"Amol Vohra":75}},n}return Object(w.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"outstandings"},l.a.createElement("div",{className:"Standings"},l.a.createElement("div",{id:"names"},Object.keys(this.state.standingsHard).map(function(a,n){return l.a.createElement(g,{key:n,name:a,wins:e.state.standingsHard[a]})}))),l.a.createElement("div",{id:"comment"},"These are from last year"))}}]),a}(t.Component)),v=(n(36),function(){return l.a.createElement("div",{className:"infocontainer"},l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,"HISTORY"),l.a.createElement("p",null,"The first #5ALIVE was conducted by Ryan Corbalis back in 1879 in his small village in Connecticut. All records that year were kept on elk hides and then burned ceremonially at the end of the season, a tradition that we continue today."),l.a.createElement(u.a,{to:"/pastchamps"},"Click to see our past winners"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"RULES"),l.a.createElement("p",null,"The rules are simple, and pleasing to the eye - participants select five teams that collectively won no more than 100 games the previous season. The person whose teams win the most games this year wins the grand prize: a Fast & The Furious DVD box set and a 6-pack of Doritos-flavored Mountain Dew."),l.a.createElement("br",null),l.a.createElement("h2",null,"2018-19"),l.a.createElement("p",null,"This season promises to be our greatest yet, with the following #5ALIVE legends already confirming their commitment:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("li",null,"Chris Godfrey"),l.a.createElement("li",null,"Pat Godfrey"),l.a.createElement("li",null,"Ryan Corbalis"),l.a.createElement("li",null,"Dillon Smith"),l.a.createElement("li",null,"Justin McNamee"),l.a.createElement("li",null,"Michael Jordan"),l.a.createElement("li",null,"Mark McGill"),l.a.createElement("li",null,"JP Kelly"),l.a.createElement("li",null,"Dan Vogel"),l.a.createElement("li",null,"Wilt Chamberlain"),l.a.createElement("li",null,"Pat Godfrey"))))}),C=(n(38),function(){return l.a.createElement("div",{className:"champscontainer"},l.a.createElement("div",{className:"champs"},l.a.createElement("h2",null,"PAST CHAMPS"),l.a.createElement("div",null,"2018 - Chris Clark"),l.a.createElement("div",null,"2017 - Andrew Cahalan"),l.a.createElement("div",null,"2016 - Scott Sherman"),l.a.createElement("div",null,"2015 - Rob Coloney"),l.a.createElement("div",null,"2014 - Tim Faulkner"),l.a.createElement("div",null,"2013 - ???"),l.a.createElement("div",null,"2012 - Wilt Chamberlain"),l.a.createElement("div",null,"2011 - Troy Davis")))}),f=function(e){function a(e){return Object(r.a)(this,a),Object(o.a)(this,Object(c.a)(a).call(this,e))}return Object(w.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(S.a,{path:"/",exact:!0,component:E}),l.a.createElement(S.a,{path:"/login",component:E}),l.a.createElement(S.a,{path:"/teamselect",component:p}),l.a.createElement(S.a,{path:"/standings",component:b}),l.a.createElement(S.a,{path:"/info",component:v}),l.a.createElement(S.a,{path:"/pastchamps",component:C}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(h.a,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.0adbff85.chunk.js.map