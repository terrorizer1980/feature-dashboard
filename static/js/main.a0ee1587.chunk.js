(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),s=n.n(c),l=(n(54),n(5)),o=n.n(l),u=n(47),i=n(6),p=n(7),m=n(9),d=n(8),b=n(10),h=n(48),v=n(13),f=n(44),g=n(11),k=n(42),E=n.n(k),y=n(19),j=n.n(y),w=n(43),O=n.n(w);n(123);function C(){return N.apply(this,arguments)}function N(){return(N=Object(v.a)(o.a.mark(function e(){var t,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("github_token")){e.next=3;break}return e.abrupt("return",{octokit:new j.a,status:"unauthenticated"});case 3:return n=void 0,a=new j.a({auth:"token ".concat(t)}),e.next=7,a.request("GET /").then(function(e){n={octokit:a,status:"authenticated"}}).catch(function(e){"HttpError"===e.name&&401===e.status&&(n={octokit:new j.a,status:"invalid-credentials"})});case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(e){var t=e.repository_url.split("/"),n=t.slice(t.length-2),a=Object(h.a)(n,2);return{owner:a[0],repo:a[1]}}function x(e){return F.apply(this,arguments)}function F(){return(F=Object(v.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=void 0,"closed"!==t.state&&(n="n/a"),e.abrupt("return",{url:t.url,labels:t.labels.map(function(e){return{color:e.color,name:e.name}}),progress:n,number:t.number,assignees:t.assignees});case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e,t){return null===t?null:e.milestone&&e.milestone.due_on?void 0===t?new Date(e.milestone.due_on):Math.max(t,new Date(e.milestone.due_on)):null}function D(e){return"closed"===e.state?"done":"open"!==e.state||0!==e.assignees.length&&void 0!==e.assignee?"wip":"todo"}function I(e){var t=e.labels.map(function(e){return e.name});if(t.includes("bug")){for(var n=["p1","p2","p3"],a=0;a<n.length;a++){var r=n[a];if(t.includes(r))return"".concat(r,"bugs")}return"p1bugs"}return t.includes("feature")||t.includes("enhancement")?"issues":"others"}function L(e,t){return{label:e,repo:t,deliveryDate:void 0,todo:{issues:[],p1bugs:[],p2bugs:[],p3bugs:[],others:[]},wip:{issues:[],p1bugs:[],p2bugs:[],p3bugs:[],others:[]},done:{issues:[],p1bugs:[],p2bugs:[],p3bugs:[],others:[]}}}function A(e,t,n){return S.apply(this,arguments)}function S(){return(S=Object(v.a)(o.a.mark(function e(t,n,a){var r,c,s,l,u,i,p,m,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r=a.map(function(e){return"repo:"+e}).join(" ")+" label:"+n+" is:issue",c=t.search.issuesAndPullRequests.endpoint.merge({q:r}),s={},l=!0,u=!1,i=void 0,e.prev=6,p=a[Symbol.iterator]();!(l=(m=p.next()).done);l=!0)d=m.value,s[d]=L(n,d);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),u=!0,i=e.t0;case 14:e.prev=14,e.prev=15,l||null==p.return||p.return();case 17:if(e.prev=17,!u){e.next=20;break}throw i;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return e.next=24,t.paginate(c).then(function(){var e=Object(v.a)(o.a.mark(function e(t){var a,r,c,l,u,i,p,m,d,b,h;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=!0,r=!1,c=void 0,e.prev=3,l=t[Symbol.iterator]();case 5:if(a=(u=l.next()).done){e.next=21;break}return i=u.value,p=T(i),m="".concat(p.owner,"/").concat(p.repo),d=s[m],b=D(i),h=I(i),e.t0=d[b][h],e.next=15,x(i);case 15:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),"done"!==b&&["issues","p1bugs"].includes(h)&&(d.deliveryDate=P(i,d.deliveryDate));case 18:a=!0,e.next=5;break;case 21:e.next=27;break;case 23:e.prev=23,e.t2=e.catch(3),r=!0,c=e.t2;case 27:e.prev=27,e.prev=28,a||null==l.return||l.return();case 30:if(e.prev=30,!r){e.next=33;break}throw c;case 33:return e.finish(30);case 34:return e.finish(27);case 35:return e.abrupt("return",{label:n,repos:Object.values(s)});case 36:case"end":return e.stop()}},e,null,[[3,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}());case 24:return e.abrupt("return",e.sent);case 25:case"end":return e.stop()}},e,null,[[6,10,14,22],[15,,17,21]])}))).apply(this,arguments)}var B=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"calculatePercentCompleted",value:function(e){var t=["issues","p1bugs"],n=t.map(function(t){return e.done[t].length}).reduce(function(e,t){return e+t}),a=t.map(function(t){return e.todo[t].length+e.wip[t].length+e.done[t].length}).reduce(function(e,t){return e+t},0);return 0===a?"~":(n/a*100).toFixed(0)}},{key:"getAssigneesFilter",value:function(e){var t=Object(u.a)(new Set(e.map(function(e){return e.assignees.map(function(e){return e.login})}).reduce(function(e,t){return e.concat(t)},[]))).map(function(e){return"assignee:".concat(e)}).join("+");return t||(t="no:assignee"),t}},{key:"makeLink",value:function(e,t,n,a){if(0===a.length)return r.a.createElement("span",null,"0");n||(n=[]);var c=!1;n.includes("assignee:*")&&(n=n.filter(function(e){return"assignee:*"!==e}),c=!0),n.push("label:".concat(t));var s=n.join("+"),l="";if(c){var o=this.getAssigneesFilter(a);l="https://github.com/search?utf8=%E2%9C%93&q=repo%3A".concat(e,"+").concat(s,"+").concat(o,"&type=Issues&ref=advsearch&l=&l=+")}else l="https://github.com/".concat(e,"/issues?utf8=%E2%9C%93&q=").concat(s);var u=a.map(function(e){return"#".concat(e.number)}).reduce(function(e,t){return e.concat(t)},[]);return r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",title:u.join("\n")},u.length)}},{key:"render",value:function(){var e=this.props.repoFeature;return r.a.createElement("div",{className:"FeatureTag-Row"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/".concat(e.repo,"/issues")},e.repo)),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:open","no:assignee","label:feature"],e.todo.issues)),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:open","assignee:*","label:feature"],e.wip.issues)),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:closed","label:feature"],e.done.issues)),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:open","no:assignee","label:bug","-label:p2","-label:p3","-label:p4","-label:p5"],e.todo.p1bugs)),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:open","no:assignee","label:bug","label:p2"],e.todo.p2bugs)),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:open","no:assignee","label:bug","label:p3"],e.todo.p3bugs)),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:open","assignee:*","label:bug"],e.wip.p1bugs.concat(e.wip.p2bugs).concat(e.wip.p3bugs))),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:closed","label:bug"],e.done.p1bugs.concat(e.done.p2bugs).concat(e.done.p3bugs))),r.a.createElement("div",null,this.makeLink(e.repo,e.label,["is:open"].concat(e.todo.others.concat(e.wip.others).map(function(e){return e.number})),e.todo.others.concat(e.wip.others))),r.a.createElement("div",{className:e.deliveryDate?"":"NoDate"},e.deliveryDate?E()(e.deliveryDate,"yyyy-mm-dd"):"n/a"),r.a.createElement("div",{className:"Completed"},this.calculatePercentCompleted(e),"%"))}}]),t}(a.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){e.preventDefault();var t=prompt("Personal github token",localStorage.getItem("github_token")||"");null!==t&&(localStorage.setItem("github_token",t),window.location.reload())}},{key:"render",value:function(){return r.a.createElement("div",{className:"TokenInput ".concat(this.props.status),onClick:this.handleClick,title:"unauthenticated"===this.props.status?"Add a personal GitHub token to raise the limit of requests you can make to the API":"invalid-credentials"===this.props.status?"Your github token is invalid (fell back to unauthenticated access)":""},"unauthenticated"===this.props.status?"Add ":"","Personal GitHub Token")}}]),t}(a.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"calculatePercentCompleted",value:function(e){var t=["issues","p1bugs"],n=0,a=0,r=!0,c=!1,s=void 0;try{for(var l,o=function(){var e=l.value;n+=t.map(function(t){return e.done[t].length}).reduce(function(e,t){return e+t}),a+=t.map(function(t){return e.todo[t].length+e.wip[t].length+e.done[t].length}).reduce(function(e,t){return e+t},0)},u=e.repos[Symbol.iterator]();!(r=(l=u.next()).done);r=!0)o()}catch(i){c=!0,s=i}finally{try{r||null==u.return||u.return()}finally{if(c)throw s}}return 0===a?"~":(n/a*100).toFixed(0)}},{key:"render",value:function(){var e=this.props.feature.repos.map(function(e){return r.a.createElement(B,{repoFeature:e,key:e.repo})});return r.a.createElement("div",{className:"FeatureTag"},r.a.createElement("div",{className:"FeatureTag-Header"},r.a.createElement("div",{className:"Label"},this.props.feature.label),r.a.createElement("div",{className:"PercentComplete"},this.calculatePercentCompleted(this.props.feature),"%")),r.a.createElement("div",{className:"FeatureTag-Table"},r.a.createElement("div",{className:"FeatureTag-Column"}),r.a.createElement("div",{className:"FeatureTag-Column Implementation"}),r.a.createElement("div",{className:"FeatureTag-Column Implementation"}),r.a.createElement("div",{className:"FeatureTag-Column Implementation"}),r.a.createElement("div",{className:"FeatureTag-Column Bugs"}),r.a.createElement("div",{className:"FeatureTag-Column Bugs"}),r.a.createElement("div",{className:"FeatureTag-Column Bugs"}),r.a.createElement("div",{className:"FeatureTag-Column Bugs"}),r.a.createElement("div",{className:"FeatureTag-Column Bugs"}),r.a.createElement("div",{className:"FeatureTag-Column"}),r.a.createElement("div",{className:"FeatureTag-Column"}),r.a.createElement("div",{className:"FeatureTag-Column"}),r.a.createElement("div",{className:"FeatureTag-Row FeatureTag-TableHeader"},r.a.createElement("div",null,"Repo"),r.a.createElement("div",null,r.a.createElement("span",{className:"MetaTitleHolder"},r.a.createElement("span",{className:"MetaTitle"},"Planned Work")),"Todo"),r.a.createElement("div",null,"WIP"),r.a.createElement("div",null,"Done"),r.a.createElement("div",null,r.a.createElement("span",{className:"MetaTitleHolder"},r.a.createElement("span",{className:"MetaTitle"},"Bugs")),"P1"),r.a.createElement("div",null,"P2"),r.a.createElement("div",null,"P3"),r.a.createElement("div",null,"WIP"),r.a.createElement("div",null,"Fixed"),r.a.createElement("div",null,"Other"),r.a.createElement("div",null,"Delivery"),r.a.createElement("div",null)),e),r.a.createElement(_,{status:this.props.connection.status}))}}]),t}(a.Component),q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this))).state={feature:{label:"Loading...",repos:[]},connection:{octokit:void 0,status:"connecting"}},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(o.a.mark(function e(){var t,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.parse(this.props.location.search),e.next=3,C();case 3:return n=e.sent,this.setState({connection:n}),Array.isArray(t.repo)||(t.repo=[t.repo]),document.title=t.label,e.next=9,A(n.octokit,t.label,t.repo);case 9:a=e.sent,this.setState({feature:a});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,{feature:this.state.feature,connection:this.state.connection}))}}]),t}(a.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"I'm... a detailed plan.")}}]),t}(a.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("pre",null,'\n    \u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2584\u2590\u2588\u2584\u2584\u2584\u2584\u2588\u258c\n    \u2588\u2588\u2588\u2588\u2588\u2588\u258c\u2584\u258c\u2584\u2590\u2590\u258c\u2588\u2588\u2588\u258c\u2580\u2580\u2588\u2588\u2580\u2580\n    \u2588\u2588\u2588\u2588\u2584\u2588\u258c\u2584\u258c\u2584\u2590\u2590\u258c\u2580\u2588\u2588\u2588\u2584\u2584\u2588\u258c\n    \u2584\u2584\u2584\u2584\u2584\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\n    Please what means "',Array.join(this.props.location.pathname.match(/.{1,36}/g),"\n                       "),'"?')}}]),t}(a.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return window.location.replace("/#/summary".concat(window.location.search)),r.a.createElement("p",null,"Redirecting...")}}]),t}(a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/summary",component:q}),r.a.createElement(g.a,{path:"/plan",component:M}),r.a.createElement(g.a,{exact:!0,path:"/",component:W}),r.a.createElement(g.a,{component:R})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,n){e.exports=n(132)},54:function(e,t,n){}},[[49,1,2]]]);
//# sourceMappingURL=main.a0ee1587.chunk.js.map