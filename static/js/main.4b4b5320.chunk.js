(window["webpackJsonpscrabble-workout"]=window["webpackJsonpscrabble-workout"]||[]).push([[0],{12:function(e,t,n){e.exports={Home:"Home__Home__hMHTH",Hero:"Home__Hero__1qk5I",Header:"Home__Header__2z1F-",StartGame:"Home__StartGame__39d5A",StartGameAction:"Home__StartGameAction__3rSNF"}},13:function(e,t,n){e.exports={Letters:"Letters__Letters__2F_th",LettersContainer:"Letters__LettersContainer__R5vr9",Letter:"Letters__Letter__NSURe","Letter-1":"Letters__Letter-1__siMGe","Letter-2":"Letters__Letter-2__HTGPh","Letter-3":"Letters__Letter-3__2pGrL","Letter-4":"Letters__Letter-4__3bvc3","Letter-5":"Letters__Letter-5__388r_","Letter-6":"Letters__Letter-6__3ql2C","Letter-7":"Letters__Letter-7__3NXan",LetterButton:"Letters__LetterButton__1tsyt"}},18:function(e,t,n){e.exports={SlotsSection:"Slots__SlotsSection__3yFud",Slots:"Slots__Slots__37-My",Slot:"Slots__Slot__2KBwb"}},19:function(e,t,n){e.exports={Submit:"Submit__Submit__2tvrk",Button:"Submit__Button__3zAbD"}},22:function(e,t,n){e.exports={Header:"Header__Header__1_1R8",HeaderLink:"Header__HeaderLink__ClY9q"}},32:function(e,t,n){e.exports={Game:"Game__Game__xvUCX"}},33:function(e,t,n){e.exports={BackspaceBtn:"Backspace__BackspaceBtn__3fj68"}},37:function(e,t,n){e.exports=n(51)},49:function(e,t,n){e.exports={"fa-spin":"index__fa-spin__2FcI0"}},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),s=n.n(o),c=n(10),i=n(15),l=(n(46),n(47),n(48),n(49),n(9)),u=n(8),_=n(22),m=n.n(_),d=function(){return r.a.createElement("header",{className:m.a.Header},r.a.createElement(l.b,{className:m.a.HeaderLink,to:"/"},"Scrabble Workout!"))},p=n(12),f=n.n(p),S=function(){return r.a.createElement("main",{className:f.a.Home},r.a.createElement("section",{className:f.a.Hero},r.a.createElement("h2",{className:f.a.Header},"Home Screen")),r.a.createElement("section",{className:f.a.StartGame},r.a.createElement(l.b,{to:"/game",className:f.a.StartGameAction},"Zagraj")))},b=n(11),v=n(29),L=n(30),h=n(35),k=n(31),E=n(36),w=n(32),N=n.n(w),y=n(18),g=n.n(y),H=[["abrazje","bajarze"],["korniki","kroniki","krionik"],["bambosz"]],j=7,B=H.length,C=function(e){var t=e.lettersInSlots;return r.a.createElement("section",{className:g.a.SlotsSection},r.a.createElement("ul",{className:g.a.Slots},Object(b.a)(Array(j).keys()).map(function(e){return t[e]}).map(function(e,t){return r.a.createElement("li",{key:t,className:g.a.Slot},e?r.a.createElement("span",null,e.value):null)})))},I=n(33),O=n.n(I),x=function(e){var t=e.clicked,n=e.areSlotsEmpty;return r.a.createElement("button",{onClick:t,className:O.a.BackspaceBtn,disabled:n,type:"button"},r.a.createElement("i",{className:"fas fa-backspace fa-2x"}))};x.defaultProps={clicked:function(){}};var A=n(34),G=n.n(A),M=n(13),T=n.n(M),D=function(e){var t=e.letters,n=e.clicked,a=t.map(function(e,t){return r.a.createElement("li",{className:G()(T.a.Letter,T.a["Letter-".concat(t+1)]),key:e.id},r.a.createElement("button",{type:"button",className:T.a.LetterButton,disabled:!e.active,onClick:function(){return n(e.id)}},e.value))});return r.a.createElement("section",{className:T.a.Letters},r.a.createElement("ul",{className:T.a.LettersContainer},a))};D.defaultProps={clicked:function(){}};var R=n(19),U=n.n(R),W=function(e){var t=e.onSubmit,n=e.onCancel;return r.a.createElement("section",{className:U.a.Submit},r.a.createElement("button",{className:U.a.Button,onClick:t,type:"button"},"Sprawd\u017a"),r.a.createElement("button",{className:U.a.Button,onClick:n,type:"button"},"Anuluj"))};W.defaultProps={onSubmit:function(){},onCancel:function(){}};var z=Object(c.b)(function(e){return{words:e.words,answer:e.answer}})(function(e){var t=e.words,n=e.answer;return r.a.createElement("div",null,t.includes(n)?"gratulacje, wygra\u0142e\u015b":"nie uda\u0142o si\u0119, mo\u017ce nast\u0119pnym razem.\n                        poprawne s\u0142owa to:\n                        ".concat(t.map(function(e){return e.toUpperCase()}).join(", ")))}),V=function(e){for(var t,n,a=e,r=e.length;r;)n=Math.floor(Math.random()*r),t=a[r-=1],a[r]=a[n],a[n]=t;return a},X=function(){return"_".concat(Math.random().toString(36).substr(2))},F=function(){var e,t=(e=B,Math.floor(Math.random()*e));return Object(b.a)(H[t])},P=function(e){return{type:"SUBMIT_ANSWER",answer:e}},q=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={letters:[],lettersInSlots:[],submitVisible:!1},n.initLetters=function(e){var t=e[0].split("").map(function(e){return{value:e,id:X(),active:!0}});n.setState({letters:V(t)})},n.toggleLettersActiveState=function(e){var t=n.state.letters,a=t.findIndex(function(t){return t.id===e});t[a].active=!t[a].active,n.setState({letters:t})},n.handleLetterClick=function(e){var t=n.state,a=t.letters,r=t.lettersInSlots,o=a.find(function(t){return t.id===e});n.toggleLettersActiveState(e);var s=[].concat(Object(b.a)(r),[o]);n.setState({lettersInSlots:s},function(){s.length===j&&n.setState({submitVisible:!0})})},n.handleBackspaceClick=function(){var e=n.state.lettersInSlots,t=e[e.length-1].id;n.toggleLettersActiveState(t),e.pop(),n.setState({lettersInSlots:e})},n.onSubmit=function(){var e=n.state.lettersInSlots;(0,n.props.dispatch)(P(n.joinLetters(e)))},n.onCancel=function(){n.setState({submitVisible:!1})},n.joinLetters=function(e){return e.reduce(function(e,t){return e+t.value},"")},n}return Object(E.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"INIT_WORDS",words:F()})}},{key:"componentDidUpdate",value:function(e){var t=this.props.words;t!==e.words&&this.initLetters(t)}},{key:"componentWillUnmount",value:function(){(0,this.props.dispatch)(P(""))}},{key:"render",value:function(){var e=this.props.answer,t=this.state,n=t.letters,a=t.lettersInSlots,o=t.submitVisible?r.a.createElement(W,{onSubmit:this.onSubmit,onCancel:this.onCancel}):r.a.createElement(D,{letters:n,clicked:this.handleLetterClick});return r.a.createElement("main",{className:N.a.Game},r.a.createElement(C,{lettersInSlots:a}),r.a.createElement(x,{clicked:this.handleBackspaceClick,areSlotsEmpty:0===a.length}),e?r.a.createElement(z,null):o)}}]),t}(a.Component),J=Object(c.b)(function(e){return{words:e.words,answer:e.answer}})(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=[],Y=Object(i.b)({words:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.words;switch(n){case"INIT_WORDS":return a;default:return e}},answer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.answer;switch(n){case"SUBMIT_ANSWER":return a;default:return e}}}),Z=Object(i.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(c.a,{store:Z},r.a.createElement(function(){return r.a.createElement(l.a,{basename:"/scrabble-workout"},r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(u.a,{exact:!0,path:"/",component:S}),r.a.createElement(u.a,{path:"/game",component:J})))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.4b4b5320.chunk.js.map