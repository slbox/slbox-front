import{k as A,u as T,l as S,c as h,m as b,p as C,o as c,a as i,f as l,e as u,t as f,F as L,d as m,n as I,q as k,s as v,v as E,x as N,h as O}from"./vendor.aecdc379.js";const R=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};R();const g={base:"/slblog/",baseApiUrl:"https://chenxiaosong1996.top",baseOssUrl:"https://chenxiaosong-1257029795.cos.ap-shanghai.myqcloud.com",header:{logo:"SL BLOG",menus:[{name:"HOME",path:"/slblog/"},{name:"ABOUT",path:"/slblog/about"}]}},p=axios.create({baseURL:g.baseApiUrl,timeout:15e3,headers:{"Content-Type":"application/json; charset=utf-8"}});axios.CancelToken;p.interceptors.request.use(e=>{const t=window.localStorage.getItem("token");return t&&(e.headers.Authorization=t),e},e=>Promise.error(e));p.interceptors.response.use(e=>e.status===200?Promise.resolve(e.data):Promise.reject(e.data),e=>{if(e.response.status){let t="";switch(e.response.status){case 401:t="\u8EAB\u4EFD\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165\u3002";break;case 403:t="\u767B\u5F55\u8FC7\u671F\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u8FDB\u5165\u3002";break;case 404:t="\u60A8\u8BBF\u95EE\u7684\u7F51\u9875\u4E0D\u5B58\u5728\u3002";break;default:t=e.response.data.message}return Promise.reject(e.response||t)}});function D(e,t,s=1){let r=0;const o=e/t,n=setInterval(()=>{r+=o,document.documentElement.scrollTop=document.body.scrollTop=r,r>=e&&clearInterval(n)},s)}function x(e,t,s=1){let r=e;const o=e/t,n=setInterval(()=>{r-=o,document.documentElement.scrollTop=document.body.scrollTop=r,r<=0&&clearInterval(n)},s)}const X=A({state(){return{scrollTop:0,articleList:[],articleDetail:null,articleLoading:!0}},mutations:{SET_SCROLL_TOP(e,t){e.scrollTop=t},SET_ARTICLE_LIST(e,t){e.articleList=t||[]},SET_ARTICLE_DETAIL(e,t){e.articleDetail=t||null},SET_ARTICLE_LOADING(e,t){e.articleLoading=t}},actions:{ScrollDown({commit:e},t,s=100){D(t,s)},ScrollUp({commit:e},t,s=100){x(t,s)},GetArticleList({commit:e,state:t}){if(e("SET_ARTICLE_LOADING",!0),t.articleList&&t.articleList.length){e("SET_ARTICLE_LIST",t.articleList),e("SET_ARTICLE_LOADING",!1);return}return p.get("/api/article/list").then(s=>{e("SET_ARTICLE_LIST",(s==null?void 0:s.data)||[]),e("SET_ARTICLE_LOADING",!1)}).catch(()=>{e("SET_ARTICLE_LIST",[]),e("SET_ARTICLE_LOADING",!1)})},GetArticleDetailById({commit:e,state:t},{id:s}){if(e("SET_ARTICLE_LOADING",!0),t.articleList&&t.articleList.length){const r=t.articleList.find(o=>o.article_id===s);e("SET_ARTICLE_DETAIL",r),e("SET_ARTICLE_LOADING",!1);return}return p.get(`/api/article/detail/${s}`).then(r=>{e("SET_ARTICLE_DETAIL",(r==null?void 0:r.data)||null),e("SET_ARTICLE_LOADING",!1)}).catch(()=>{e("SET_ARTICLE_DETAIL",null),e("SET_ARTICLE_LOADING",!1)})}}});var y=(e,t)=>{const s=e.__vccOpts||e;for(const[r,o]of t)s[r]=o;return s};const G=e=>(v("data-v-00299dc9"),e=e(),E(),e),w={class:"my-nav__logo"},B=["href"],U={class:"my-nav__menu"},P=["href"],H=["onClick"],$=G(()=>l("i",{class:"iconfont icon-menu"},null,-1)),j={class:"my-nav__prover--menu"},q=["href"],M={setup(e){const t=T(),s=S(!1),r=h(()=>t.state.scrollTop),{logo:o,menus:n}=b(g.header),a=()=>{s.value=!s.value};return C(()=>{document.addEventListener("click",()=>{s.value&&a()})}),(J,Q)=>(c(),i("div",{class:I(["my-nav",{"is-fixed":u(r)>=60}])},[l("div",w,[l("a",{href:u(n)[0].path},f(u(o)),9,B)]),l("ul",U,[(c(!0),i(L,null,m(u(n),(_,d)=>(c(),i("li",{key:"menuItem"+d,class:"my-nav__menu--item"},[l("a",{href:_.path},f(_.name),9,P)]))),128))]),l("div",{class:I(["my-nav__prover",{"is-proving":s.value}]),onClick:k(a,["stop"])},[$,l("ul",j,[(c(!0),i(L,null,m(u(n),(_,d)=>(c(),i("li",{key:"menuItem"+d},[l("a",{href:_.path},f(_.name),9,q)]))),128))])],10,H)],2))}};var Y=y(M,[["__scopeId","data-v-00299dc9"]]);const z=e=>(v("data-v-2227451c"),e=e(),E(),e),F=z(()=>l("i",{class:"iconfont icon-caret-up"},null,-1)),V=[F],K={props:{visibilityHeight:{type:Number,default:100},right:{type:Number,default:40},bottom:{type:Number,default:40}},setup(e){const t=e,s=T(),r=h(()=>s.state.scrollTop),o=()=>{s.dispatch("ScrollUp",r.value)};return(n,a)=>u(r)>=t.visibilityHeight?(c(),i("div",{key:0,class:"my-backtop",style:N({right:t.right+"px",bottom:t.bottom+"px"}),onClick:o},V,4)):O("",!0)}};var Z=y(K,[["__scopeId","data-v-2227451c"]]);export{Z as B,Y as N,y as _,X as s};