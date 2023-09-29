import{u as V,i as P,_ as L,C as S,a as F,b as z,L as B}from"./ProductTile.vue_vue_type_script_setup_true_lang-7faa4ecc.js";import{r as v,o as C,d as y,a,c as g,w,b as f,e as t,t as n,u as c,R as j,f as i,g as N,h as q,F as _,i as b,j as E,k as u,l as I}from"./index-925c53ac.js";const D=()=>{const r=v(!1),s=v([]),l=v([]),o=v(["huawei","apple","64GB"]),d=V(),m=async()=>{r.value=!0;try{const e=await P.get("products");s.value=e.data.map($=>({product:$,isFavorite:x($.id)}))}catch(e){console.error(e)}r.value=!1},h=async()=>{r.value=!0;try{const e=await P.get("products/categories");l.value=e.data}catch(e){console.error(e)}r.value=!1},p=e=>x(e)?"favorite":"favorite_border",x=e=>d.favorites.includes(e),k=e=>{x(e)?d.removeFavorite(e):d.addFavorite(e)};return C(()=>{m(),h()}),{isLoading:r,products:s,categories:l,filters:o,toggleFavorite:k,favImage:p}},T=["src"],R={class:"flex-auto flex flex-col gap-[5px] overflow-x-hidden"},W={class:"truncate"},G={class:"title-h6"},M={class:"flex flex-row gap-2 items-center"},U={class:"text-orange text-[13px]"},Y=t("img",{src:F,alt:""},null,-1),A={class:"text-muted text-[13px]"},H=t("span",{class:"text-green text-[13px]"},"Free Shipping",-1),J=y({__name:"ProductCard",props:{id:{},name:{},price:{},image:{},rating:{},count:{}},setup(r){return(s,l)=>(a(),g(S,{"is-interactive":!0},{default:w(()=>[f(c(j),{to:{name:"ProductDetails",params:{id:s.id}},class:"flex flex-row gap-3 pt-3 px-[14px] pb-[14px]"},{default:w(()=>[t("img",{src:s.image,alt:"pic",class:"w-[98px] aspect-square object-contain"},null,8,T),t("div",R,[t("h3",W,n(s.name),1),t("span",G,"$"+n(s.price.toFixed(2)),1),t("div",M,[f(L,{rate:s.rating||0},null,8,["rate"]),t("span",U,n(s.rating),1),Y,t("span",A,n(s.count)+" orders",1)]),H])]),_:1},8,["to"])]),_:1}))}}),K={class:"relative flex flex-row gap-6 p-5"},O=["src"],Q={class:"flex-auto flex flex-col overflow-x-hidden"},X={class:"text-base font-medium leading-[22px] mr-16 truncate"},Z={class:"flex items-center gap-[7px] mt-4"},ee={class:"title-h4"},te={key:0,class:"text-base font-semibold line-through decoration-1 leading-normal text-gray-500"},se={class:"flex flex-row items-center mt-1"},re={class:"text-orange ml-[6px] mr-3"},ae=t("img",{src:F,alt:""},null,-1),oe={class:"text-muted mx-[9px]"},ne=t("img",{src:F,alt:""},null,-1),ie=t("span",{class:"text-green ml-[9px]"},"Free Shipping",-1),le={class:"h-12 overflow-y-hidden mt-3 text-gray-600"},ce={class:"material-icons text-primary"},de=y({__name:"ProductCardExtended",props:{id:{},name:{},price:{},oldPrice:{},image:{},rating:{},count:{},description:{},favImage:{}},emits:["toggleFavorite"],setup(r){return(s,l)=>(a(),g(S,null,{default:w(()=>{var o;return[t("div",K,[t("img",{src:s.image,alt:"pic",class:"w-[185px] aspect-square object-contain"},null,8,O),t("div",Q,[t("h3",X,n(s.name),1),t("div",Z,[t("span",ee,"$"+n(s.price.toFixed(2)),1),s.oldPrice?(a(),i("span",te," $"+n((o=s.oldPrice)==null?void 0:o.toFixed(2)),1)):N("",!0)]),t("div",se,[f(L,{rate:s.rating||0},null,8,["rate"]),t("span",re,n(s.rating),1),ae,t("span",oe,n(s.count)+" orders ",1),ne,ie]),t("p",le,n(s.description),1),f(c(j),{to:{name:"ProductDetails",params:{id:s.id}},class:"self-start text-primary font-medium no-underline hover:underline mt-2"},{default:w(()=>[q(" View details ")]),_:1},8,["to"])]),t("button",{class:"absolute top-5 right-5 flex items-center justify-center w-10 h-10 border-gray-300 border-[1px] rounded-md",onClick:l[0]||(l[0]=d=>s.$emit("toggleFavorite"))},[t("i",ce,n(s.favImage),1)])])]}),_:1}))}}),ue={class:"flex flex-col gap-4 pb-[18px] border-b-[1px] border-b-gray-300 w-full bg-white"},pe=t("label",{class:"flex gap-[6px] items-center h-10 mx-[15px] px-2 rounded bg-gray-100 border-[1px] border-gray-300 cursor-text"},[t("i",{class:"material-icons-outlined text-[22px] text-gray-500"},"search"),t("input",{type:"search",placeholder:"Search",class:"flex-auto h-full bg-transparent outline-none"})],-1),xe={class:"overflow-x-auto no-scrollbar"},ge={class:"flex gap-1 items-center w-fit px-[15px]"},_e=y({__name:"SearchPanel",props:{categories:{}},setup(r){return(s,l)=>(a(),i("div",ue,[pe,t("div",xe,[t("div",ge,[(a(!0),i(_,null,b(s.categories,o=>(a(),i("button",{class:"whitespace-nowrap px-4 py-2 rounded-md capitalize text-primary bg-gray-200 hover:bg-gray-300",key:o},n(o),1))),128))])])]))}}),fe="/marketplace/assets/ic_gridview-eb570fa6.svg",me="/marketplace/assets/ic_listview-9306d85b.svg",he={class:"flex flex-col gap-[10px] bg-gray-100"},ve=E('<div class="flex gap-[6px] items-center w-full h-[50px] px-[11px] bg-white border-b-[1px] border-b-gray-300"><button class="flex-auto flex items-center gap-1 h-[30px] rounded-md px-[6px] border-[1px] border-gray-300 text-[13px] font-medium"><span class="flex-auto">Sort: Newest</span><i class="material-icons-outlined text-gray-500 text-lg">sort</i></button><button class="flex-auto flex items-center gap-1 h-[30px] rounded-md px-[6px] border-[1px] border-gray-300 text-[13px] font-medium"><span class="flex-auto">Filter (3)</span><i class="material-icons-outlined text-gray-500 text-lg">filter_alt</i></button><div class="flex h-[30px] rounded-md border-[1px] border-gray-300 text-xl overflow-hidden"><button class="flex items-center justify-center h-full aspect-square border-r-[1px] border-r-gray-300"><img src="'+fe+'" alt=""></button><button class="flex items-center justify-center h-full aspect-square border-l-[1px] border-l-gray-300 bg-gray-200"><img src="'+me+'" alt=""></button></div></div>',1),be={class:"overflow-auto no-scrollbar"},ye={class:"flex items-center w-fit px-[10px] gap-[7px]"},we={class:"capitalize whitespace-nowrap"},$e=t("i",{class:"material-icons text-[20px] text-gray-500"},"close",-1),Fe=y({__name:"FiltersPanel",props:{filters:{}},setup(r){return(s,l)=>(a(),i("div",he,[ve,t("div",be,[t("div",ye,[(a(!0),i(_,null,b(s.filters,o=>(a(),i("button",{class:"flex items-center gap-[9px] h-8 pl-[10px] pr-[6px] rounded-[5px] border-primary border-[1px]",key:o},[t("span",we,n(o),1),$e]))),128))])])]))}}),ke=()=>{const r=v(0),s=()=>{r.value=window.innerWidth},l=u(()=>r.value>0&&r.value<640),o=u(()=>r.value>=640&&r.value<768),d=u(()=>r.value>=768&&r.value<1024),m=u(()=>r.value>=1024&&r.value<1280),h=u(()=>r.value>=1280&&r.value<1536),p=u(()=>r.value>=1536),x=u(()=>({xs:l.value,sm:o.value,md:d.value,lg:m.value,xl:h.value,xxl:p.value}));return C(()=>{s(),window.addEventListener("resize",s)}),I(()=>{window.addEventListener("resize",s)}),{width:r,screens:x}},Pe={class:"relative flex flex-col p-3 bg-gray-100"},Le={key:1,class:"flex flex-col gap-3"},Se={key:2,class:"flex flex-col gap-3"},Ce=t("h2",{class:"title-h5 mt-[10px]"},"You may also like",-1),je={class:"-mx-3 my-[10px] overflow-auto no-scrollbar"},Ne={class:"flex gap-2 px-3 w-fit"},Be=y({__name:"ProductsList",setup(r){const{products:s,isLoading:l,categories:o,filters:d,toggleFavorite:m,favImage:h}=D(),{screens:p}=ke();return(x,k)=>(a(),i(_,null,[f(_e,{categories:c(o)},null,8,["categories"]),f(Fe,{filters:c(d)},null,8,["filters"]),t("div",Pe,[c(l)?(a(),g(B,{key:0,class:"fixed left-1/2 translate-x-[-50%]",elevated:!0})):N("",!0),c(p).xs||c(p).sm?(a(),i("div",Le,[(a(!0),i(_,null,b(c(s),e=>(a(),g(J,{id:e.product.id,name:e.product.title,price:e.product.price,image:e.product.image,rating:e.product.rating.rate,count:e.product.rating.count,key:e.product.id},null,8,["id","name","price","image","rating","count"]))),128))])):(a(),i("div",Se,[(a(!0),i(_,null,b(c(s),e=>(a(),g(de,{key:e.product.id,id:e.product.id,name:e.product.title,price:e.product.price,image:e.product.image,rating:e.product.rating.rate,count:e.product.rating.count,description:e.product.description,"fav-image":c(h)(e.product.id),onToggleFavorite:$=>c(m)(e.product.id)},null,8,["id","name","price","image","rating","count","description","fav-image","onToggleFavorite"]))),128))])),Ce,t("div",je,[t("div",Ne,[(a(!0),i(_,null,b(c(s),e=>(a(),g(z,{id:e.product.id,name:e.product.title,image:e.product.image,price:e.product.price,key:e.product.id},null,8,["id","name","image","price"]))),128))])])])],64))}});export{Be as default};
