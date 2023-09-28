import{d as X,f as Z,m as qe,n as we,a as ee,p as Me,q as ze,s as Je,v as $e,e as Ve}from"./index-88034d2e.js";function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:We}=Object.prototype,{getPrototypeOf:te}=Object,k=(e=>t=>{const n=We.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),S=e=>(e=e.toLowerCase(),t=>k(t)===e),I=e=>t=>typeof t===e,{isArray:x}=Array,P=I("undefined");function Ke(e){return e!==null&&!P(e)&&e.constructor!==null&&!P(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=S("ArrayBuffer");function Ge(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Qe=I("string"),A=I("function"),ge=I("number"),H=e=>e!==null&&typeof e=="object",Ye=e=>e===!0||e===!1,L=e=>{if(k(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Xe=S("Date"),Ze=S("File"),et=S("Blob"),tt=S("FileList"),nt=e=>H(e)&&A(e.pipe),rt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=k(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},st=S("URLSearchParams"),ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function _e(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Se=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Re=e=>!P(e)&&e!==Se;function W(){const{caseless:e}=Re(this)&&this||{},t={},n=(r,s)=>{const o=e&&_e(t,s)||s;L(t[o])&&L(r)?t[o]=W(t[o],r):L(r)?t[o]=W({},r):x(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&B(arguments[r],n);return t}const it=(e,t,n,{allOwnKeys:r}={})=>(B(t,(s,o)=>{n&&A(s)?e[o]=Ee(s,n):e[o]=s},{allOwnKeys:r}),e),at=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ct=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ut=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},lt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ft=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!ge(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},dt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),pt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ht=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mt=S("HTMLFormElement"),yt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),bt=S("RegExp"),Oe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},wt=e=>{Oe(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Et=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return x(e)?r(e):r(String(e).split(t)),n},At=()=>{},gt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),z="abcdefghijklmnopqrstuvwxyz",ce="0123456789",Te={DIGIT:ce,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+ce},_t=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function St(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Rt=e=>{const t=new Array(10),n=(r,s)=>{if(H(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=x(r)?[]:{};return B(r,(i,u)=>{const f=n(i,s+1);!P(f)&&(o[u]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Ot=S("AsyncFunction"),Tt=e=>e&&(H(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:x,isArrayBuffer:Ae,isBuffer:Ke,isFormData:rt,isArrayBufferView:Ge,isString:Qe,isNumber:ge,isBoolean:Ye,isObject:H,isPlainObject:L,isUndefined:P,isDate:Xe,isFile:Ze,isBlob:et,isRegExp:bt,isFunction:A,isStream:nt,isURLSearchParams:st,isTypedArray:dt,isFileList:tt,forEach:B,merge:W,extend:it,trim:ot,stripBOM:at,inherits:ct,toFlatObject:ut,kindOf:k,kindOfTest:S,endsWith:lt,toArray:ft,forEachEntry:pt,matchAll:ht,isHTMLForm:mt,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Oe,freezeMethods:wt,toObjectSet:Et,toCamelCase:yt,noop:At,toFiniteNumber:gt,findKey:_e,global:Se,isContextDefined:Re,ALPHABET:Te,generateString:_t,isSpecCompliantForm:St,toJSONObject:Rt,isAsyncFn:Ot,isThenable:Tt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ce=m.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xe[e]={value:e}});Object.defineProperties(m,xe);Object.defineProperty(Ce,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ce);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ct=null;function K(e){return a.isPlainObject(e)||a.isArray(e)}function Ne(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ne(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function xt(e){return a.isArray(e)&&!e.some(K)}const Nt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,E){return!a.isUndefined(E[h])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function d(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!f&&a.isBlob(l))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?f&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function c(l,h,E){let R=l;if(l&&!E&&typeof l=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&xt(l)||(a.isFileList(l)||a.endsWith(h,"[]"))&&(R=a.toArray(l)))return h=Ne(h),R.forEach(function(U,He){!(a.isUndefined(U)||U===null)&&t.append(i===!0?ue([h],He,o):i===null?h:h+"[]",d(U))}),!1}return K(l)?!0:(t.append(ue(E,h,o),d(l)),!1)}const p=[],b=Object.assign(Nt,{defaultVisitor:c,convertValue:d,isVisitable:K});function w(l,h){if(!a.isUndefined(l)){if(p.indexOf(l)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(l),a.forEach(l,function(R,g){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(g)?g.trim():g,h,b))===!0&&w(R,h?h.concat(g):[g])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&q(e,this,t)}const Pe=ne.prototype;Pe.append=function(t,n){this._pairs.push([t,n])};Pe.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||Pt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Bt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=Bt,Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ft=typeof URLSearchParams<"u"?URLSearchParams:ne,Ut=typeof FormData<"u"?FormData:null,Lt=typeof Blob<"u"?Blob:null,Dt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),_={isBrowser:!0,classes:{URLSearchParams:Ft,FormData:Ut,Blob:Lt},isStandardBrowserEnv:Dt,isStandardBrowserWebWorkerEnv:jt,protocols:["http","https","file","blob","url","data"]};function vt(e,t){return q(e,new _.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return _.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function kt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function It(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=It(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(kt(r),s,n,0)}),n}return null}function Ht(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:Fe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return vt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return q(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Ht(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_.classes.FormData,Blob:_.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function D(e){return e===!1||e==null?e:a.isArray(e)?e.map(D):String(e)}function zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Jt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function J(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function $t(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class M{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,f,d){const c=N(f);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||d===!0||d===void 0&&s[p]!==!1)&&(s[p||f]=D(u))}const i=(u,f)=>a.forEach(u,(d,c)=>o(d,c,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Jt(t)?i(Mt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return zt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||J(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=N(i),i){const u=a.findKey(r,i);u&&(!n||J(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||J(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=D(s),delete n[o];return}const u=t?$t(o):String(o).trim();u!==o&&delete n[o],n[u]=D(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=N(i);r[u]||(Vt(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}M.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(M.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(M);const O=M;function $(e,t){const n=this||se,r=t||n,s=O.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Le(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,m,{__CANCEL__:!0});function Wt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Kt=_.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Gt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function De(e,t){return e&&!Gt(t)?Qt(e,t):t}const Yt=_.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Xt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Zt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const d=Date.now(),c=r[o];i||(i=d),n[s]=f,r[s]=d;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),d-i<t)return;const w=c&&d-c;return w?Math.round(b*1e3/w):void 0}}function pe(e,t){let n=0;const r=Zt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,f=r(u),d=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:f||void 0,estimated:f&&i&&d?(i-o)/f:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const en=typeof XMLHttpRequest<"u",tn=en&&function(e){return new Promise(function(n,r){let s=e.data;const o=O.from(e.headers).normalize(),i=e.responseType;let u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let d;a.isFormData(s)&&(_.isStandardBrowserEnv||_.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(d=o.getContentType())&&o.setContentType(d.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(l+":"+h))}const p=De(e.baseURL,e.url);c.open(e.method.toUpperCase(),Be(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const l=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:l,config:e,request:c};Wt(function(g){n(g),f()},function(g){r(g),f()},E),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Fe;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,E.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},_.isStandardBrowserEnv){const l=(e.withCredentials||Yt(p))&&e.xsrfCookieName&&Kt.read(e.xsrfCookieName);l&&o.set(e.xsrfHeaderName,l)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(h,E){c.setRequestHeader(E,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=l=>{c&&(r(!l||l.type?new F(null,e,c):l),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=Xt(p);if(w&&_.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},G={http:Ct,xhr:tn};a.forEach(G,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const he=e=>`- ${e}`,nn=e=>a.isFunction(e)||e===null||e===!1,je={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!nn(n)&&(r=G[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(he).join(`
`):" "+he(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:G};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function me(e){return V(e),e.headers=O.from(e.headers),e.data=$.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),je.getAdapter(e.adapter||se.adapter)(e).then(function(r){return V(e),r.data=$.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Le(r)||(V(e),r&&r.response&&(r.response.data=$.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const ye=e=>e instanceof O?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(d,c,p){return a.isPlainObject(d)&&a.isPlainObject(c)?a.merge.call({caseless:p},d,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(d,c,p){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d,p)}else return r(d,c,p)}function o(d,c){if(!a.isUndefined(c))return r(void 0,c)}function i(d,c){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function u(d,c,p){if(p in t)return r(d,c);if(p in e)return r(void 0,d)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(d,c)=>s(ye(d),ye(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=f[c]||s,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==u||(n[c]=b)}),n}const ve="1.5.1",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const be={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!be[i]&&(be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function rn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],f=u===void 0||i(u,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Q={assertOptions:rn,validators:oe},T=Q.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Q.assertOptions(s,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete o[l]}),n.headers=O.concat(i,o);const u=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const d=[];this.interceptors.response.forEach(function(h){d.push(h.fulfilled,h.rejected)});let c,p=0,b;if(!f){const l=[me.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,d),b=l.length,c=Promise.resolve(n);p<b;)c=c.then(l[p++],l[p++]);return c}b=u.length;let w=n;for(p=0;p<b;){const l=u[p++],h=u[p++];try{w=l(w)}catch(E){h.call(this,E);break}}try{c=me.call(this,w)}catch(l){return Promise.reject(l)}for(p=0,b=d.length;p<b;)c=c.then(d[p++],d[p++]);return c}getUri(t){t=C(this.defaults,t);const n=De(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(C(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const j=v;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new F(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const sn=ie;function on(e){return function(n){return e.apply(null,n)}}function an(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const cn=Y;function ke(e){const t=new j(e),n=Ee(j.prototype.request,t);return a.extend(n,j.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ke(C(e,s))},n}const y=ke(se);y.Axios=j;y.CanceledError=F;y.CancelToken=sn;y.isCancel=Le;y.VERSION=ve;y.toFormData=q;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=on;y.isAxiosError=an;y.mergeConfig=C;y.AxiosHeaders=O;y.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=je.getAdapter;y.HttpStatusCode=cn;y.default=y;const un=y,ln="https://fakestoreapi.com/",fn=un.create({baseURL:ln,params:{}});fn.interceptors.request.use(e=>(e.headers||(e.headers={"Content-Type":"application/json"}),e),e=>Promise.reject(e));const Pn="/assets/dot-83e504c1.svg",dn=X({__name:"Card",props:{isInteractive:{type:Boolean,default:!1}},setup(e){return(t,n)=>(ee(),Z("div",{class:we(["card",{interactive:e.isInteractive}])},[qe(t.$slots,"default",{},void 0,!0)],2))}});const Ie=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Bn=Ie(dn,[["__scopeId","data-v-3f414fdb"]]),pn="/assets/dot-83e504c1.svg",hn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAACrUDmFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dexDYAwEEPRC7qKngGQogzAYIzHJuxBRYOUYw5b/23wO7uNMSqMLWGOQHUEqiNQHYHq7ANzzhnOssp6ikZevYez9mwbb0IZgeoIVEegOgLV5ee+RV/3wPU8wlmre2dsKyNQHYHqCFRHoDoC1dkH/oMhFGR223CMAAAAAElFTkSuQmCC",mn="/assets/rate-bar-0-549ce1d1.svg",yn="/assets/rate-bar-1-4a3be005.svg",bn="/assets/rate-bar-2-ad8d01fd.svg",wn="/assets/rate-bar-3-2a6558c3.svg",En="/assets/rate-bar-4-a356ec11.svg",An="/assets/rate-bar-5-29717f91.svg",gn="/assets/rate-bar-4-a356ec11.svg",_n="/assets/vue-5532db34.svg",Sn=()=>({getAsset:t=>new URL(Object.assign({"../assets/dot.svg":pn,"../assets/images/flags/de.png":hn,"../assets/images/rate-bar/rate-bar-0.svg":mn,"../assets/images/rate-bar/rate-bar-1.svg":yn,"../assets/images/rate-bar/rate-bar-2.svg":bn,"../assets/images/rate-bar/rate-bar-3.svg":wn,"../assets/images/rate-bar/rate-bar-4.svg":En,"../assets/images/rate-bar/rate-bar-5.svg":An,"../assets/rate-placeholder.svg":gn,"../assets/vue.svg":_n})[`../assets/${t}`],self.location).toString()}),Rn=["src"],Fn=X({__name:"RateBar",props:{rate:{}},setup(e){const{rate:t}=e,{getAsset:n}=Sn(),r=Me(()=>{const s=Math.trunc(t);return n(`images/rate-bar/rate-bar-${s}.svg`)});return(s,o)=>(ee(),Z("img",{src:r.value,alt:""},null,8,Rn))}}),On=e=>(Je("data-v-444f2517"),e=e(),$e(),e),Tn=On(()=>Ve("div",{class:"sp-dual-ring"},null,-1)),Cn=[Tn],xn=X({__name:"Loader",props:{size:{type:String,default:"32px"},margin:{type:String,default:"10px 0"},height:{type:String,default:"unset"},elevated:{type:Boolean,default:!1}},setup(e){return(t,n)=>(ee(),Z("div",{class:we(["sp-loader",{elevated:e.elevated}]),style:ze({margin:e.margin,height:e.height})},Cn,6))}});const Un=Ie(xn,[["__scopeId","data-v-444f2517"]]);export{Bn as C,Un as L,Fn as _,Pn as a,fn as i};
