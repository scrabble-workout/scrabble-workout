(window["webpackJsonpscrabble-workout"]=window["webpackJsonpscrabble-workout"]||[]).push([[0],{12:function(e,t,n){e.exports={Home:"Home__Home__hMHTH",Hero:"Home__Hero__1qk5I",Header:"Home__Header__2z1F-",StartGame:"Home__StartGame__39d5A",StartGameAction:"Home__StartGameAction__3rSNF"}},13:function(e,t,n){e.exports={Letters:"Letters__Letters__2F_th",LettersContainer:"Letters__LettersContainer__R5vr9",Letter:"Letters__Letter__NSURe","Letter-1":"Letters__Letter-1__siMGe","Letter-2":"Letters__Letter-2__HTGPh","Letter-3":"Letters__Letter-3__2pGrL","Letter-4":"Letters__Letter-4__3bvc3","Letter-5":"Letters__Letter-5__388r_","Letter-6":"Letters__Letter-6__3ql2C","Letter-7":"Letters__Letter-7__3NXan",LetterButton:"Letters__LetterButton__1tsyt"}},18:function(e,t,n){e.exports={SlotsSection:"Slots__SlotsSection__3yFud",Slots:"Slots__Slots__37-My",Slot:"Slots__Slot__2KBwb"}},21:function(e,t,n){e.exports={Header:"Header__Header__1_1R8",HeaderLink:"Header__HeaderLink__ClY9q"}},31:function(e,t,n){e.exports={Game:"Game__Game__xvUCX"}},35:function(e,t,n){e.exports=n(47)},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(16),c=n.n(o),s=n(10),l=n(15),i=(n(44),n(45),n(9)),u=n(8),_=n(21),m=n.n(_),d=function(){return a.a.createElement("header",{className:m.a.Header},a.a.createElement(i.b,{className:m.a.HeaderLink,to:"/"},"Scrabble Workout!"))},f=n(12),p=n.n(f),L=function(){return a.a.createElement("main",{className:p.a.Home},a.a.createElement("section",{className:p.a.Hero},a.a.createElement("h2",{className:p.a.Header},"Home Screen")),a.a.createElement("section",{className:p.a.StartGame},a.a.createElement(i.b,{to:"/game",className:p.a.StartGameAction},"Zagraj")))},S=n(11),h=n(28),v=n(29),w=n(33),b=n(30),E=n(34),k=n(31),H=n.n(k),N=n(18),g=n.n(N),y=[["abrazje","bajarze"],["korniki","kroniki","krionik"],["bambosz"]],O=7,j=y.length,I=function(e){var t=e.lettersInSlots,n=e.clicked;return a.a.createElement("section",{className:g.a.SlotsSection},a.a.createElement("ul",{className:g.a.Slots},Object(S.a)(Array(O).keys()).map(function(e){return t[e]}).map(function(e,t){return a.a.createElement("li",{key:t,className:g.a.Slot},e?a.a.createElement("span",{onClick:function(){return n(e.id,t)}},e.value):null)})))};I.defaultProps={clicked:function(){}};var C=n(32),G=n.n(C),A=n(13),M=n.n(A),T=function(e){var t=e.letters,n=e.clicked,r=t.map(function(e,t){return a.a.createElement("li",{className:G()(M.a.Letter,M.a["Letter-".concat(t+1)]),key:e.id},a.a.createElement("button",{type:"button",className:M.a.LetterButton,disabled:!e.active,onClick:function(){return n(e.id)}},e.value))});return a.a.createElement("section",{className:M.a.Letters},a.a.createElement("ul",{className:M.a.LettersContainer},r))};T.defaultProps={clicked:function(){}};var x=Object(s.b)(function(e){return{words:e.words,answer:e.answer}})(function(e){var t=e.words,n=e.answer;return a.a.createElement("div",null,t.includes(n)?"gratulacje, wygra\u0142e\u015b":"nie uda\u0142o si\u0119, mo\u017ce nast\u0119pnym razem.\n                        poprawne s\u0142owa to:\n                        ".concat(t.map(function(e){return e.toUpperCase()}).join(", ")))}),R=function(e){for(var t,n,r=e,a=e.length;a;)n=Math.floor(Math.random()*a),t=r[a-=1],r[a]=r[n],r[n]=t;return r},U=function(){return"_".concat(Math.random().toString(36).substr(2))},B=function(){var e,t=(e=j,Math.floor(Math.random()*e));return Object(S.a)(y[t])},D=function(e){return{type:"SUBMIT_ANSWER",answer:e}},W=function(e){function t(){var e,n;Object(h.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).state={letters:[],lettersInSlots:[]},n.initLetters=function(e){var t=e[0].split("").map(function(e){return{value:e,id:U(),active:!0}});n.setState({letters:R(t)})},n.toggleLettersActiveState=function(e){var t=n.state.letters,r=t.findIndex(function(t){return t.id===e});t[r].active=!t[r].active,n.setState({letters:t})},n.handleLetterClick=function(e){var t=n.props.dispatch,r=n.state,a=r.letters,o=r.lettersInSlots,c=a.find(function(t){return t.id===e});n.toggleLettersActiveState(e);var s=[].concat(Object(S.a)(o),[c]);n.setState({lettersInSlots:s},function(){s.length===O&&t(D(n.joinLetters(s)))})},n.handleSlotClick=function(e,t){var r=n.state.lettersInSlots;t===r.length-1&&(n.toggleLettersActiveState(e),r.pop(),n.setState({lettersInSlots:r}))},n.joinLetters=function(e){return e.reduce(function(e,t){return e+t.value},"")},n}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"INIT_WORDS",words:B()})}},{key:"componentDidUpdate",value:function(e){var t=this.props.words;t!==e.words&&this.initLetters(t)}},{key:"componentWillUnmount",value:function(){(0,this.props.dispatch)(D(""))}},{key:"render",value:function(){var e=this.props.answer,t=this.state,n=t.letters,r=t.lettersInSlots;return a.a.createElement("main",{className:H.a.Game},a.a.createElement(I,{lettersInSlots:r,clicked:this.handleSlotClick}),e?a.a.createElement(x,null):a.a.createElement(T,{letters:n,clicked:this.handleLetterClick}))}}]),t}(r.Component),X=Object(s.b)(function(e){return{words:e.words,answer:e.answer}})(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=[],F=Object(l.b)({words:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.words;switch(n){case"INIT_WORDS":return r;default:return e}},answer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.answer;switch(n){case"SUBMIT_ANSWER":return r;default:return e}}}),q=Object(l.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(s.a,{store:q},a.a.createElement(function(){return a.a.createElement(i.a,{basename:"/scrabble-workout"},a.a.createElement("div",null,a.a.createElement(d,null),a.a.createElement(u.a,{exact:!0,path:"/",component:L}),a.a.createElement(u.a,{path:"/game",component:X})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.1694df7a.chunk.js.map