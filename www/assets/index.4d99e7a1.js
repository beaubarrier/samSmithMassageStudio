var I=Object.defineProperty;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(r,t,a)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,v=(r,t)=>{for(var a in t||(t={}))A.call(t,a)&&y(r,a,t[a]);if(f)for(var a of f(t))C.call(t,a)&&y(r,a,t[a]);return r};import{g as P,r as c,R as e,P as p,B as i,a as s,C as g,b as h,N as b,L as u,c as m,d,e as B,f as M,u as ae,T as le,h as re,i as ne,j as R,k as N,l as F,A as $,F as k,m as H,n as T,o as D}from"./vendor.5bfdcfd5.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const E of o.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&n(E)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}};O();var q="assets/samSmithLogo.6237a270.png",S="assets/samPic.b36f979f.png";const V=P(),Z=()=>{const[r,t]=c.exports.useState("Schedule Appointment"),[a,n]=c.exports.useState("main");function l(){if(a==="main")return"Schedule Appointment";if(a==="schedule")return"Close"}if(V.ios)return e.createElement(p,{name:"home"},e.createElement("img",{src:q,id:"samLogo"}),e.createElement(i,null,e.createElement("img",{src:S,id:"samPic"})),e.createElement(i,{id:"flavorText",className:"center"},e.createElement(s,{className:"center"},"About Me"),"After getting my certifications from Anthem Massage School, I was mentored by an established local spa owner for two years before starting my own practice. I have over 10 years experience and I specialize in therapeutic, myofacial, deep tissue, Sweedish, and lymphatic massage. Maybe say something here about the different types of ppl youve helped or something idk."),e.createElement(i,null,e.createElement(s,{className:"center"},"In Home Massage"),e.createElement(g,{className:"center",id:"inHomeCard"},e.createElement(h,{className:"center"},"In home massage is a minimum of one hour, and starts at $100."),"$130 for 90 minutes.",e.createElement("br",null)," $160 for two hours.")),e.createElement(i,null,e.createElement(s,{className:"center"},"In Studio Massage"),e.createElement(g,{className:"center"},e.createElement(h,{className:"center",id:"inStudioCard"},"In studio massage is a minimum of one hour, and starts at $80."),"$100 for 90 minutes.",e.createElement("br",null),"$140 for two hours!")),e.createElement(i,{className:"center"},e.createElement(s,{className:"center"},"Payment is due ",e.createElement("b",null,"before")," services are rendered. ",e.createElement("br",null),e.createElement("br",null),"I accept",e.createElement("br",null),"Cash, credit card*, Zelle*, and Venmo*",e.createElement("br",null),e.createElement("br",null)),"* There is a $10 surcharge for using Credit/Debit Card, Zelle, or Venmo."),e.createElement(i,null,e.createElement("br",null)))},U=()=>e.createElement("div",null,e.createElement("div",null,Z()));const w=()=>e.createElement(p,{name:"form"},e.createElement(s,null,"Personal Information"),e.createElement(u,{noHairlinesMd:!0},e.createElement(m,{label:"First Name",type:"text",placeholder:"Your first name"}),e.createElement(m,{label:"Last Name",type:"text",placeholder:"Your last name"}),e.createElement(m,{label:"E-mail",type:"email",placeholder:"E-mail"}),e.createElement(m,{label:"Phone",type:"tel",placeholder:"Phone"})),e.createElement(s,null,"Desired Appointment Date"),e.createElement(u,null,e.createElement(m,{label:"Select Date",type:"date",placeholder:"What day would you like to schedule for.",defaultValue:"2014-04-30"})),e.createElement(s,null,"Session Type"),e.createElement(u,null,e.createElement(d,{radio:!0,name:"masType",value:"InHome",title:"In Home Massage"}),e.createElement(d,{radio:!0,name:"masType",value:"InStudio",title:"In Studio"})),e.createElement(s,null,"Session Length"),e.createElement(u,null,e.createElement(d,{radio:!0,name:"timeLength",value:"1Hour",title:"One Hour"}),e.createElement(d,{radio:!0,name:"timeLength",value:"90Minute",title:"90 Minute"}),e.createElement(d,{radio:!0,name:"timeLength",value:"TwoHour",title:"Two Hour"})),e.createElement(s,null,"Additional Information"),e.createElement(u,null,e.createElement(m,{type:"textarea",label:"",placeholder:"Is there anything you'd like to let me know?"})),e.createElement(i,{className:"center"},e.createElement(s,{className:"center"},"Payment is due ",e.createElement("b",null,"before")," services are rendered. ",e.createElement("br",null),e.createElement("br",null),"I accept",e.createElement("br",null),"Cash, credit card*, Zelle*, and Venmo*",e.createElement("br",null),e.createElement("br",null)),"* There is a $10 surcharge for using Credit/Debit Card, Zelle, or Venmo."),e.createElement(i,null,e.createElement(B,{large:!0,fill:!0,round:!0,color:"purple",text:"Schedule Appointment",style:{width:"95%",marginLeft:"2.5%"}}))),j=M({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:r}){return r.products}},actions:{addProduct({state:r},t){r.products=[...r.products,t]}}});const z=r=>{const{f7route:t,f7router:a}=r;return e.createElement(p,null,e.createElement(b,{title:"Dynamic Route",backLink:"Back"}),e.createElement(i,{strong:!0},e.createElement("ul",null,e.createElement("li",null,e.createElement("b",null,"Url:")," ",t.url),e.createElement("li",null,e.createElement("b",null,"Path:")," ",t.path),e.createElement("li",null,e.createElement("b",null,"Hash:")," ",t.hash),e.createElement("li",null,e.createElement("b",null,"Params:"),e.createElement("ul",null,Object.keys(t.params).map(n=>e.createElement("li",{key:n},e.createElement("b",null,n,":")," ",t.params[n])))),e.createElement("li",null,e.createElement("b",null,"Query:"),e.createElement("ul",null,Object.keys(t.query).map(n=>e.createElement("li",{key:n},e.createElement("b",null,n,":")," ",t.query[n])))),e.createElement("li",null,e.createElement("b",null,"Route:")," ",t.route.path))),e.createElement(i,{strong:!0},e.createElement(R,{onClick:()=>a.back()},"Go back via Router API")))},G=r=>{const{user:t}=r;return e.createElement(p,null,e.createElement(b,{title:`${t.firstName} ${t.lastName}`,backLink:"Back"}),e.createElement(i,{strong:!0},t.about),e.createElement(u,null,t.links.map((a,n)=>e.createElement(d,{key:n,link:a.url,title:a.title,external:!0,target:"_blank"}))))},W=()=>e.createElement(p,null,e.createElement(b,{title:"Not found",backLink:"Back"}),e.createElement(i,{strong:!0},e.createElement("p",null,"Sorry"),e.createElement("p",null,"Requested content not found.")));var Y=[{path:"/",component:U},{path:"/form/",component:w},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:z},{path:"/request-and-load/user/:userId/",async:function({router:r,to:t,resolve:a}){var n=r.app;n.preloader.show();var l=t.params.userId;setTimeout(function(){var o={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};n.preloader.hide(),a({component:G},{props:{user:o}})},1e3)}},{path:"(.*)",component:W}];const K=P(),Q=()=>{const[r,t]=c.exports.useState("Schedule Appointment"),[a,n]=c.exports.useState("main");function l(){if(a==="main")return"Schedule Appointment";if(a==="schedule")return"Close"}if(K.ios)return e.createElement(p,{name:"home"},e.createElement("img",{src:q,id:"samLogo"}),e.createElement(i,null,e.createElement("img",{src:S,id:"samPic"})),e.createElement(i,{id:"flavorText",className:"center"},e.createElement(s,{className:"center"},"About Me"),"After getting my certifications from Anthem Massage School, I was mentored by an established local spa owner for two years before starting my own practice. I have over 10 years experience and I specialize in therapeutic, myofacial, deep tissue, Sweedish, and lymphatic massage. Maybe say something here about the different types of ppl youve helped or something idk."),e.createElement(i,null,e.createElement(s,{className:"center"},"In Home Massage"),e.createElement(g,{className:"center",id:"inHomeCard"},e.createElement(h,{className:"center"},"In home massage is a minimum of one hour, and starts at $100."),"$130 for 90 minutes.",e.createElement("br",null)," $160 for two hours.")),e.createElement(i,null,e.createElement(s,{className:"center"},"In Studio Massage"),e.createElement(g,{className:"center"},e.createElement(h,{className:"center",id:"inStudioCard"},"In studio massage is a minimum of one hour, and starts at $80."),"$100 for 90 minutes.",e.createElement("br",null),"$140 for two hours!")),e.createElement(i,{className:"center"},e.createElement(s,{className:"center"},"Payment is due ",e.createElement("b",null,"before")," services are rendered. ",e.createElement("br",null),e.createElement("br",null),"I accept",e.createElement("br",null),"Cash, credit card*, Zelle*, and Venmo*",e.createElement("br",null),e.createElement("br",null)),"* There is a $10 surcharge for using Credit/Debit Card, Zelle, or Venmo."),e.createElement(i,null,e.createElement("br",null)))},X=()=>e.createElement("div",null,e.createElement("div",null,Q())),_=()=>{const[r,t]=c.exports.useState(""),[a,n]=c.exports.useState(""),[l,o]=c.exports.useState("main");function E(){if(l==="main")return"Schedule Appointment"}const L={name:"samSmithMassage",theme:"auto",store:j,routes:Y,serviceWorker:{path:"/service-worker.js"}},J=()=>{N.dialog.alert("Username: "+r+"<br>Password: "+a,()=>{N.loginScreen.close()})};F(()=>{});const x=()=>{if(l==="main")return e.createElement(X,null);if(l==="schedule")return e.createElement(w,null)};return e.createElement($,v({},L),e.createElement(k,{position:"right-bottom",text:E(),id:"fabBtn1",style:{width:"57%"},onClick:()=>{l==="main"?o("schedule"):l==="schedule"&&o("main"),fabBtn1.setAttribute("style","visibility: none"),fabBtn2.setAttribute("style","visibility: visible")}}),e.createElement(k,{position:"right-top",text:"Close",id:"fabBtn2",onClick:()=>{l==="schedule"&&o("main"),fabBtn1.setAttribute("style","visibility: visible"),fabBtn2.setAttribute("style","visibility: none")}}),x())};H.use(T);D.render(e.createElement(_),document.getElementById("app"));
