(this["webpackJsonpweb-frontend"]=this["webpackJsonpweb-frontend"]||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(17),s=a.n(c),i=a(3),o=(a(37),a(8)),m=a(24),r=a(12);function u(e){var t=e.className,a=e.Icon,n=e.dataList,c=e.title,s=e.emptyText,i=void 0===s?"No data":s,o=e.onClickCard,m=void 0===o?function(e){}:o;return l.a.createElement("div",{className:"kanban "+t},l.a.createElement("h2",{className:"title"},c),l.a.createElement("ul",null,0===n.length?l.a.createElement("li",{className:"card empty"},i):l.a.createElement(l.a.Fragment,null),n.map((function(e){return l.a.createElement("li",{key:e.id,className:"card repository clear",onClick:function(){m(e.id)}},l.a.createElement("div",{className:"logo"},l.a.createElement("div",{className:"inner"},l.a.createElement(a,null))),l.a.createElement("a",{className:"link",href:e.link},l.a.createElement(r.c,null)),l.a.createElement("div",{className:"card-content"},l.a.createElement("h3",{className:"sub-title"},e.name),l.a.createElement("div",{className:"taglist"},l.a.createElement("span",{className:"tag red"},"private"),l.a.createElement("span",{className:"tag blue"},"Node"))))}))))}var d=a(29),h=a(28);function p(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({branches:[],issues:[],pullRequests:[]}),i=Object(m.a)(s,2),o=i[0],p=i[1];return Object(n.useEffect)((function(){c(E)}),[a]),console.log(o),l.a.createElement("div",{id:"github",className:"clear"},l.a.createElement(u,{className:"repositories",Icon:h.a,title:"Repositories",emptyText:"No repositories",dataList:a,onClickCard:function(e){p(a.filter((function(t){return t.id===e}))[0])}}),l.a.createElement(u,{className:"branches",Icon:r.a,title:"Branches",emptyText:"No branches",dataList:o.branches}),l.a.createElement(u,{className:"issues",Icon:d.a,title:"Issues",emptyText:"No issues",dataList:o.issues}),l.a.createElement(u,{className:"pull-requests",Icon:r.b,title:"Pull Requests",emptyText:"No pull requests",dataList:o.pullRequests}))}var E=[{id:"0",name:"project-1",private:!0,link:"https://github.com",branches:[{id:"0",name:"master",link:"https://github.com"},{id:"1",name:"staging",link:"https://github.com"},{id:"2",name:"sub-1",link:"https://github.com"},{id:"3",name:"sub-2",link:"https://github.com"}],issues:[{id:"0",name:"issue-1-Oh my god!",link:"https://github.com"},{id:"1",name:"issue-2-Oh my god!",link:"https://github.com"},{id:"2",name:"issue-3-Oh my god!",link:"https://github.com"},{id:"3",name:"issue-4-Oh my god!",link:"https://github.com"}],pullRequests:[{id:"0",name:"Pull Request-1- Hey! completed!",link:"https://github.com"},{id:"1",name:"Pull Request-2- Hey! completed!",link:"https://github.com"},{id:"2",name:"Pull Request-3- Hey! completed!",link:"https://github.com"},{id:"3",name:"Pull Request-4- Hey! completed!",link:"https://github.com"}]},{id:"1",name:"project-2",private:!0,link:"https://github.com",branches:[{id:"0",name:"master",link:"https://github.com"},{id:"1",name:"staging",link:"https://github.com"},{id:"2",name:"sub-1",link:"https://github.com"},{id:"3",name:"sub-2",link:"https://github.com"}],issues:[{id:"0",name:"issue-1-Oh my god!",link:"https://github.com"},{id:"1",name:"issue-2-Oh my god!",link:"https://github.com"},{id:"2",name:"issue-3-Oh my god!",link:"https://github.com"},{id:"3",name:"issue-4-Oh my god!",link:"https://github.com"}],pullRequests:[{id:"0",name:"Pull Request-1- Hey! completed!",link:"https://github.com"},{id:"1",name:"Pull Request-2- Hey! completed!",link:"https://github.com"},{id:"2",name:"Pull Request-3- Hey! completed!",link:"https://github.com"},{id:"3",name:"Pull Request-4- Hey! completed!",link:"https://github.com"}]},{id:"2",name:"project-3",private:!1,link:"https://github.com",branches:[{id:"0",name:"master",link:"https://github.com"},{id:"1",name:"staging",link:"https://github.com"},{id:"2",name:"sub-1",link:"https://github.com"},{id:"3",name:"sub-2",link:"https://github.com"}],issues:[{id:"0",name:"issue-1-Oh my god!",link:"https://github.com"},{id:"1",name:"issue-2-Oh my god!",link:"https://github.com"},{id:"2",name:"issue-3-Oh my god!",link:"https://github.com"},{id:"3",name:"issue-4-Oh my god!",link:"https://github.com"}],pullRequests:[{id:"0",name:"Pull Request-1- Hey! completed!",link:"https://github.com"},{id:"1",name:"Pull Request-2- Hey! completed!",link:"https://github.com"},{id:"2",name:"Pull Request-3- Hey! completed!",link:"https://github.com"},{id:"3",name:"Pull Request-4- Hey! completed!",link:"https://github.com"}]}];function b(){return l.a.createElement("section",{id:"board"},l.a.createElement("div",{className:"board"},l.a.createElement("div",{className:"contents"},l.a.createElement(p,null))))}var f=a(15),g=a(19),y=a(11);function S(){return l.a.createElement("header",{id:"header",className:"header"},l.a.createElement(y.b,{to:"/"},l.a.createElement("h1",{className:"logo"},l.a.createElement(f.a,null),l.a.createElement("span",{className:"text"},"S. Board"))),l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"text",placeholder:"\uac80\uc0c9"}),l.a.createElement(g.c,null)),l.a.createElement("a",{className:"menu",href:"#"},l.a.createElement(g.b,null)),l.a.createElement("a",{className:"menu",href:"#"},l.a.createElement(g.a,null)),l.a.createElement("a",{className:"menu",href:"#"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"/profile.jpg",alt:"\ud504\ub85c\ud544 \uc0ac\uc9c4"})))))}function v(){return l.a.createElement("div",{id:"line"},l.a.createElement("div",{className:"line"},l.a.createElement("div",{className:"button",onClick:function(){null!=document.querySelector("#side-bar.fold")?(document.getElementById("side-bar").classList.remove("fold"),document.getElementById("line").classList.remove("left")):(document.getElementById("side-bar").classList.add("fold"),document.getElementById("line").classList.add("left"))}})))}var N=a(16),k={FETCH_MY_DASHBOARD:"FETCH_MY_DASHBOARD"},O={Types:k,actions:{fetchMyDashboard:function(e){return{type:k.FETCH_MY_DASHBOARD,payload:e}}}},T=a(30);Symbol("FETCH_PAGE"),Symbol("FETCH_KEY");var _,D,I=Symbol("NOT_IMMUTABLE"),A={SET_VALUE:"common/SET_VALUE",SET_IS_SLOW:"common/SET_IS_SLOW",SET_FETCH_STATUS:"common/SET_FETCH_STATUS",SET_MY_DASHBOARD:"dashboard/SET_MY_DASHBOARD"},M={setValue:(_=A.SET_VALUE,function(e,t){return{type:_,key:e,value:t}}),setIsSlow:function(e){return{type:A.SET_IS_SLOW,payload:e}},setFetchStatus:function(e){return{type:A.SET_FETCH_STATUS,payload:e}},setMyDashboard:function(e){return{type:A.SET_MY_DASHBOARD,payload:e}}},H={Types:A,actions:M},R=Object(N.a)(Object(N.a)({},O.Types),H.Types),j=Object(N.a)(Object(N.a)({},O.actions),H.actions),B=a(10),F={ADD_DASHBOARD:"ADD_DASHBOARD",EDIT_DASHBOARD:"EDIT_DASHBOARD"},C=(D={},Object(B.a)(D,F.ADD_DASHBOARD,{title:"Add Dashboard",description:"\n    When you connect the repository, \n    you will see information about branch, commit, \n    and pull requests in S.Board."}),Object(B.a)(D,F.EDIT_DASHBOARD,{title:"Edit Dashboard",description:"\n    When you connect the repository, \n    you will see information about branch, commit, \n    and pull requests in S.Board."}),D);function L(e){e.link,e.name;var t=Object(o.b)(),a=Object(o.c)((function(e){return e.common})),c=a.dashboardFormLink,s=a.dashboardFormName;return Object(n.useEffect)((function(){t(j.setValue("dashboardFormLink",c)),t(j.setValue("dashboardFormName",s)),console.log("DashboardForm - useEffect")}),[]),console.log("DashboardForm - rendering"),l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"input"},l.a.createElement("input",{id:"url",type:"text",value:c,onChange:function(e){t(j.setValue("dashboardFormLink",e.currentTarget.value))}}),l.a.createElement("label",{htmlFor:"url"},"Repository Link")),l.a.createElement("div",{className:"input"},l.a.createElement("input",{id:"name",type:"text",value:s,onChange:function(e){t(j.setValue("dashboardFormName",e.currentTarget.value))}}),l.a.createElement("label",{htmlFor:"name"},"Project Name"))))}function P(e){var t=e.type,a=Object(o.b)(),n=Object(o.c)((function(e){return e.common.modalVisible}));return void 0===F[t]?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{id:"modal",className:n?"on":""},l.a.createElement("div",{className:"modal"},l.a.createElement("h2",{className:"title"},C[t].title),l.a.createElement("p",{className:"description"},C[t].description),l.a.createElement(L,null),l.a.createElement("div",{className:"button-box"},l.a.createElement("button",{className:"critical js-save"},"\uc800\uc7a5"),l.a.createElement("button",{className:"normal js-close",onClick:function(){a(j.setValue("modalVisible",!1))}},"\ucde8\uc18c"))))}function q(){var e=Object(o.b)();function t(e){var t=e.currentTarget,a=document.querySelector(".menu.clear.on");null!==a&&a.classList.remove("on"),t.className="menu clear on"}return l.a.createElement(l.a.Fragment,null,l.a.createElement("aside",{id:"side-bar",className:"side-bar"},l.a.createElement("h2",{className:"title clear"},l.a.createElement("div",{className:"text"},"My Dashboard"),l.a.createElement("div",{className:"icons",onClick:function(){e(j.setValue("modalVisible",!0))}},l.a.createElement(r.d,null))),l.a.createElement("ul",{className:"list"},x.map((function(e){return l.a.createElement("li",{key:e.id,className:"menu clear",onClick:t},"GIT_HUB"===e.type?l.a.createElement(f.b,null):"GIT_LAB"===e.type?l.a.createElement(f.c,null):"",l.a.createElement("span",{className:"text"},e.title))})))),l.a.createElement(P,{type:F.ADD_DASHBOARD}))}var x=[{id:0,type:"GIT_HUB",title:"Github - Private"},{id:1,type:"GIT_HUB",title:"Github - Company"},{id:2,type:"GIT_LAB",title:"Gitlab - Private"},{id:3,type:"GIT_LAB",title:"Gitlab - Filing Findings"}];function w(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement(q,null),l.a.createElement(v,null),l.a.createElement(b,null))}function V(){return l.a.createElement("div",null)}function U(){return l.a.createElement("div",{className:"login"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"ID"}),l.a.createElement("input",{type:"password",placeholder:"Password"})),l.a.createElement("button",null),l.a.createElement(y.b,{to:"/signUp",className:""},"Register"))}function G(){return l.a.createElement("div",null)}function Y(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{exact:!0,path:"/",component:w}),l.a.createElement(i.a,{path:"/manage",component:V}),l.a.createElement(i.a,{path:"/login",component:U}),l.a.createElement(i.a,{path:"/signup",component:G}))}var W,K,J,X=a(9),z=a(31),Q="InProgress",Z=(K={modalVisible:!1,fetchInfo:{fetchStatusMap:{},isSlowMap:{},totalCountMap:{},errorMessageMap:{},nextPageMap:{}}},W={},Object(B.a)(W,R.SET_VALUE,(function(e,t){e[t.key]=t.value})),Object(B.a)(W,R.SET_FETCH_STATUS,(function(e,t){var a=t.payload,n=a.actionType,l=a.fetchKey,c=a.status,s=a.totalCount,i=a.nextPage,o=a.errorMessage;if(!e.fetchInfo.fetchStatusMap[n]&&(e.fetchInfo.fetchStatusMap[n]={}),e.fetchInfo.fetchStatusMap[n][l]=c,c!==Q){e.fetchInfo.isSlowMap[n]&&(e.fetchInfo.isSlowMap[n][l]=!1);var m=void 0!==s,r=!e.fetchInfo.totalCountMap[n];m&&(r&&(e.fetchInfo.totalCountMap[n]={}),e.fetchInfo.totalCountMap[n][l]=s);var u=void 0!==i,d=!e.fetchInfo.nextPageMap[n];u&&(d&&(e.fetchInfo.nextPageMap[n]={}),e.fetchInfo.nextPageMap[n][l]=i),!e.fetchInfo.errorMessageMap[n]&&(e.fetchInfo.errorMessageMap[n]={}),o&&(e.fetchInfo.errorMessageMap[n][l]=o)}})),Object(B.a)(W,R.SET_IS_SLOW,(function(e,t){var a=t.payload,n=a.actionType,l=a.fetchKey,c=a.isSlow;!e.fetchInfo.isSlowMap[n]&&(e.fetchInfo.isSlowMap[n]={}),e.fetchInfo.isSlowMap[n][l]=c})),J=W,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=J[t.type];return a?t[I]?a(e,t):Object(T.a)(e,(function(e){(0,J[t.type])(e,t)})):e}),$=Object(X.c)({common:Z}),ee=Object(z.a)(),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,ae=Object(X.e)($,te(Object(X.a)(ee)));s.a.render(l.a.createElement(o.a,{store:ae},l.a.createElement(y.a,null,l.a.createElement(Y,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.aab7ebeb.chunk.js.map