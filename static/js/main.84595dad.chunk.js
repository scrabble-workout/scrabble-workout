(window["webpackJsonpscrabble-workout"]=window["webpackJsonpscrabble-workout"]||[]).push([[0],{12:function(e,t,a){e.exports={SlotsSection:"Slots__SlotsSection__3yFud",Slots:"Slots__Slots__37-My",Slot:"Slots__Slot__2KBwb"}},14:function(e,t,a){e.exports={Header:"Header__Header__1_1R8",HeaderLink:"Header__HeaderLink__ClY9q"}},25:function(e,t,a){e.exports={Game:"Game__Game__xvUCX"}},29:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(34),a(35),a(6)),s=a(5),i=a(14),u=a.n(i),_=function(){return r.a.createElement("header",{className:u.a.Header},r.a.createElement(l.b,{className:u.a.HeaderLink,to:"/"},"Scrabble Workout!"))},m=a(8),d=a.n(m),L=function(){return r.a.createElement("main",{className:d.a.Home},r.a.createElement("section",{className:d.a.Hero},r.a.createElement("h2",{className:d.a.Header},"Home Screen")),r.a.createElement("section",{className:d.a.StartGame},r.a.createElement(l.b,{to:"/game",className:d.a.StartGameAction},"Zagraj")))},f=a(11),S=a(22),v=a(23),h=a(27),k=a(24),p=a(28),b=a(25),E=a.n(b),H=a(12),g=a.n(H),w=[["abrazje","bajarze"],["korniki","kroniki","krionik"],["bambosz"]],N=7,y=w.length,j=function(e){var t=e.lettersInSlots,a=e.clicked;return r.a.createElement("section",{className:g.a.SlotsSection},r.a.createElement("ul",{className:g.a.Slots},Object(f.a)(Array(N).keys()).map(function(e){return t[e]}).map(function(e,t){return r.a.createElement("li",{key:t,className:g.a.Slot},e?r.a.createElement("span",{onClick:function(){return a(e.id,t)}},e.value):null)})))};j.defaultProps={clicked:function(){}};var C=a(26),G=a.n(C),I=a(9),x=a.n(I),A=function(e){var t=e.letters,a=e.clicked,n=t.map(function(e,t){return r.a.createElement("li",{className:G()(x.a.Letter,x.a["Letter-".concat(t+1)]),key:e.id},r.a.createElement("button",{type:"button",className:x.a.LetterButton,disabled:!e.active,onClick:function(){return a(e.id)}},e.value))});return r.a.createElement("section",{className:x.a.Letters},r.a.createElement("ul",{className:x.a.LettersContainer},n))};A.defaultProps={clicked:function(){}};var M=function(e){for(var t,a,n=e,r=e.length;r;)a=Math.floor(Math.random()*r),t=n[r-=1],n[r]=n[a],n[a]=t;return n},W=function(){var e,t=(e=y,Math.floor(Math.random()*e));return w[t]},O=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={correctWords:[],letters:[],lettersInSlots:[],gameWon:void 0},a.toggleLettersActiveState=function(e){var t=a.state.letters,n=t.findIndex(function(t){return t.id===e});t[n].active=!t[n].active,a.setState({letters:t})},a.handleLetterClick=function(e){var t=a.state,n=t.letters,r=t.lettersInSlots,o=n.find(function(t){return t.id===e});a.toggleLettersActiveState(e);var c=[].concat(Object(f.a)(r),[o]);a.setState({lettersInSlots:c},function(){c.length===N&&a.checkResult()})},a.handleSlotClick=function(e,t){var n=a.state.lettersInSlots;t===n.length-1&&(a.toggleLettersActiveState(e),n.pop(),a.setState({lettersInSlots:n}))},a.joinLetters=function(e){return e.reduce(function(e,t){return e+t.value},"")},a.checkResult=function(){var e=a.state,t=e.correctWords,n=e.lettersInSlots,r=a.joinLetters(n);a.setState({gameWon:t.includes(r)})},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=W(),t=e[0].split("").map(function(e){return{value:e,id:"_".concat(Math.random().toString(36).substr(2)),active:!0}});this.setState({correctWords:e,letters:M(t)})}},{key:"render",value:function(){var e=this.state,t=e.letters,a=e.lettersInSlots,n=e.gameWon;return r.a.createElement("main",{className:E.a.Game},r.a.createElement(j,{lettersInSlots:a,clicked:this.handleSlotClick}),void 0===n?r.a.createElement(A,{letters:t,clicked:this.handleLetterClick}):r.a.createElement("div",null,n?"gratulacje, wygra\u0142e\u015b":"nie uda\u0142o si\u0119, mo\u017ce nast\u0119pnym razem"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return r.a.createElement(l.a,{basename:"/scrabble-workout"},r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(s.a,{exact:!0,path:"/",component:L}),r.a.createElement(s.a,{path:"/game",component:O})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={Home:"Home__Home__hMHTH",Hero:"Home__Hero__1qk5I",Header:"Home__Header__2z1F-",StartGame:"Home__StartGame__39d5A",StartGameAction:"Home__StartGameAction__3rSNF"}},9:function(e,t,a){e.exports={Letters:"Letters__Letters__2F_th",LettersContainer:"Letters__LettersContainer__R5vr9",Letter:"Letters__Letter__NSURe","Letter-1":"Letters__Letter-1__siMGe","Letter-2":"Letters__Letter-2__HTGPh","Letter-3":"Letters__Letter-3__2pGrL","Letter-4":"Letters__Letter-4__3bvc3","Letter-5":"Letters__Letter-5__388r_","Letter-6":"Letters__Letter-6__3ql2C","Letter-7":"Letters__Letter-7__3NXan",LetterButton:"Letters__LetterButton__1tsyt"}}},[[29,1,2]]]);
//# sourceMappingURL=main.84595dad.chunk.js.map