import{D as v,r as m,d as c,h as i,n as g,s as u,a as n,_ as f,c as h,E as x,G as S,x as y,y as b,f as o,b as I,w as _,e as $,t as p,g as B,R as C}from"./index-6e3af951.js";const G=v("products",()=>{const e=()=>{const s=localStorage.getItem("favorites");return s==null?void 0:s.split(",").map(r=>Number(r))},a=s=>{let r=s.join(",");localStorage.setItem("favorites",r)},t=m(e()||[]);return{favorites:t,addFavorite:s=>{t.value.includes(s)||t.value.push(s),a(t.value)},removeFavorite:s=>{t.value.includes(s)&&(t.value=t.value.filter(r=>r!=s)),a(t.value)}}}),M="/marketplace/assets/dot-83e504c1.svg",L=c({__name:"Card",props:{isInteractive:{type:Boolean,default:!1}},setup(e){return(a,t)=>(n(),i("div",{class:u(["card",{interactive:e.isInteractive}])},[g(a.$slots,"default",{},void 0,!0)],2))}});const w=f(L,[["__scopeId","data-v-3f414fdb"]]),k=["src"],T=c({__name:"RateBar",props:{rate:{}},setup(e){const a=e,{getAsset:t}=x(),d=h(()=>{const l=Math.trunc(a.rate);return t(`images/rate-bar/rate-bar-${l}.svg`)});return(l,s)=>(n(),i("img",{src:d.value,alt:""},null,8,k))}}),F=e=>(y("data-v-444f2517"),e=e(),b(),e),z=F(()=>o("div",{class:"sp-dual-ring"},null,-1)),D=[z],N=c({__name:"Loader",props:{size:{type:String,default:"32px"},margin:{type:String,default:"10px 0"},height:{type:String,default:"unset"},elevated:{type:Boolean,default:!1}},setup(e){return(a,t)=>(n(),i("div",{class:u(["sp-loader",{elevated:e.elevated}]),style:S({margin:e.margin,height:e.height})},D,6))}});const q=f(N,[["__scopeId","data-v-444f2517"]]),P={class:"flex w-full aspect-[2/1.95] p-[10px]"},R=["src"],j={class:"flex flex-col gap-[1.76px] px-[10px] pb-[14px]"},A={class:"title-h6 font-medium"},E={class:"text-[13px] text-gray-500"},H=c({__name:"ProductTile",props:{id:{},image:{},price:{},name:{}},setup(e){return(a,t)=>(n(),I(w,{"is-interactive":!0},{default:_(()=>[$(B(C),{to:{name:"ProductDetails",params:{id:a.id}},class:"flex flex-col w-[155px] h-[220px]"},{default:_(()=>[o("div",P,[o("img",{src:a.image,alt:"",class:"w-full aspect-[2/1.95] object-contain"},null,8,R)]),o("div",j,[o("h2",A,"$"+p(a.price.toFixed(2)),1),o("div",E,p(a.name),1)])]),_:1},8,["to"])]),_:1}))}});export{w as C,q as L,T as _,M as a,H as b,G as u};
