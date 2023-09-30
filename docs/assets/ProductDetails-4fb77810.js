import{u as F,_ as P,C as j,b as L,a as w,L as B}from"./ProductTile.vue_vue_type_script_setup_true_lang-72b86ad3.js";import{m as N,r as g,o as $,n as D,i as S,d as R,f as h,u as i,c as k,e as t,b as C,t as r,w as V,F as q,j as I,k as E,a as u,_ as G}from"./index-16b93b14.js";const M=()=>{const v=N(),o=g(!1),e=g(),x=g([]),n=F(),c=()=>{var s;return n.favorites.includes(((s=e==null?void 0:e.value)==null?void 0:s.id)||0)},y=()=>{var s,a;c()?n.removeFavorite(((s=e.value)==null?void 0:s.id)||0):n.addFavorite(((a=e.value)==null?void 0:a.id)||0)},m=()=>c()?"favorite":"favorite_border",_=async s=>{try{const a=await S.get(`products/category/${s}`);x.value=a.data.filter(f=>{var p;return f.id!=((p=e==null?void 0:e.value)==null?void 0:p.id)})}catch(a){console.error(a)}},d=async s=>{o.value=!0;try{const a=await S.get(`products/${s}`);e.value=a.data,await _(e.value.category)}catch(a){console.error(a)}o.value=!1};return $(()=>{d(Number(v.params.id))}),D(async(s,a)=>{s.params.id!==a.params.id&&d(Number(s.params.id))}),{isLoading:o,product:e,similarProducts:x,favImage:m,toggleFavorite:y}},z={class:"flex flex-col"},T={key:1,class:"flex flex-col"},U={class:"bg-gray-200 w-full aspect-square p-10 product-image"},A=["src"],H={class:"flex flex-col p-4 border-b-[1px] bg-white border-b-gray-300"},J={class:"flex gap-[10px] items-center"},K=E('<img src="'+w+'" alt="rate bar"><div class="flex gap-[6px] items-center"><i class="material-icons-outlined text-gray-400 text-lg">message</i><span class="text-gray-500 text-[13px]">32 reviews</span></div><img src="'+w+'" alt="rate bar"><div class="flex gap-[6px] items-center"><i class="material-icons-outlined text-gray-400 text-lg">shopping_basket</i><span class="text-gray-500 text-[13px]">154 sold</span></div>',4),O={class:"title-h6 mt-[10px]"},Q={class:"flex gap-[5px] items-center mt-[6px]"},W={class:"text-red font-semibold"},X=t("span",{class:"text-[13px] text-gray-500"},"(50-100 pcs)",-1),Y={class:"flex gap-2 mt-3"},Z=t("button",{class:"flex-auto flex items-center justify-center bg-primary text-white rounded-md font-medium h-10"}," Send inquiry ",-1),tt={class:"material-icons-outlined text-primary"},et={class:"mt-5 w-fit"},st=t("tr",null,[t("th",{class:"text-left font-normal text-gray-500 pr-12 pb-[5px]"}," Condition "),t("td",null,"Brand new")],-1),at=t("tr",null,[t("th",{class:"text-left font-normal text-gray-500 pr-12 pb-[5px]"}," Material "),t("td",null,"Plastic")],-1),it=t("th",{class:"text-left font-normal text-gray-500 pr-12 pb-[5px]"}," Category ",-1),lt={class:"capitalize"},rt=t("th",{class:"text-left font-normal text-gray-500 pr-12 pb-[5px]"}," Item number ",-1),ot={class:"mt-[5px]"},nt=t("button",{class:"w-fit text-primary font-medium px-0 py-3"}," Read more ",-1),ct=t("div",{class:"flex gap-[11px] items-center"},[t("div",{class:"flex items-center justify-center w-12 h-12 rounded-[4px] bg-base-color-blue-100"},[t("span",{class:"text-[28px] text-[rgba(76,167,167,0.60)] font-semibold"},"R")]),t("div",{class:"flex-auto flex flex-col"},[t("span",null,"Supplier"),t("span",null,"Guanjoi Trading LLC")]),t("i",{class:"material-icons-outlined text-gray-500 text-2xl"},"chevron_right")],-1),dt=t("div",{class:"w-full h-px bg-gray-300"},null,-1),pt=t("div",{class:"flex items-center justify-between text-gray-600"},[t("div",{class:"flex gap-[7px] items-center"},[t("img",{src:G,alt:"DE",class:"w-5 h-[14px]"}),t("span",null,"Germany")]),t("div",{class:"flex gap-[7px] items-center"},[t("i",{class:"material-icons-outlined text-gray-500"},"verified_user"),t("span",null,"Verified")]),t("div",{class:"flex gap-[7px] items-center"},[t("i",{class:"material-icons-outlined text-gray-500"},"language"),t("span",null,"Shipping")])],-1),ut=t("h2",{class:"title-h5 m-[10px]"},"Similar products",-1),xt={class:"my-[10px] overflow-auto no-scrollbar"},mt={class:"flex gap-2 w-fit mx-[10px]"},gt=R({__name:"ProductDetails",setup(v){const{isLoading:o,product:e,similarProducts:x,favImage:n,toggleFavorite:c}=M();return(y,m)=>{var _,d,s,a,f,p,b;return u(),h("div",z,[i(o)?(u(),k(B,{key:0,class:"fixed left-1/2 translate-x-[-50%]",elevated:!0})):(u(),h("div",T,[t("div",U,[t("img",{src:(_=i(e))==null?void 0:_.image,alt:"",class:"w-full aspect-square object-contain"},null,8,A)]),t("div",H,[t("div",J,[C(P,{rate:((d=i(e))==null?void 0:d.rating.rate)||0},null,8,["rate"]),K]),t("div",O,r((s=i(e))==null?void 0:s.title),1),t("div",Q,[t("span",W,"$"+r((a=i(e))==null?void 0:a.price.toFixed(2)),1),X]),t("div",Y,[Z,t("button",{class:"flex items-center justify-center w-10 h-10 border-[1px] border-gray-300 rounded-md",onClick:m[0]||(m[0]=(...l)=>i(c)&&i(c)(...l))},[t("i",tt,r(i(n)()),1)])]),t("table",et,[t("tbody",null,[st,at,t("tr",null,[it,t("td",lt,r((f=i(e))==null?void 0:f.category),1)]),t("tr",null,[rt,t("td",null,r((p=i(e))==null?void 0:p.id.toString().padStart(5,"0")),1)])])]),t("p",ot,r((b=i(e))==null?void 0:b.description),1),nt]),C(j,{class:"m-[10px] p-[10px] flex flex-col gap-3"},{default:V(()=>[ct,dt,pt]),_:1}),ut,t("div",xt,[t("div",mt,[(u(!0),h(q,null,I(i(x),l=>(u(),k(L,{id:l.id,name:l.title,image:l.image,price:l.price,key:l.id},null,8,["id","name","image","price"]))),128))])])]))])}}});export{gt as default};
