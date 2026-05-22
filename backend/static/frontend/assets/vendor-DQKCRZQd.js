function df(d,f){return function(){return d.apply(f,arguments)}}const{toString:Ph}=Object.prototype,{getPrototypeOf:qs}=Object,{iterator:_a,toStringTag:pf}=Symbol,ba=(d=>f=>{const w=Ph.call(f);return d[w]||(d[w]=w.slice(8,-1).toLowerCase())})(Object.create(null)),xr=d=>(d=d.toLowerCase(),f=>ba(f)===d),va=d=>f=>typeof f===d,{isArray:Zi}=Array,Ki=va("undefined");function Wn(d){return d!==null&&!Ki(d)&&d.constructor!==null&&!Ki(d.constructor)&&Kt(d.constructor.isBuffer)&&d.constructor.isBuffer(d)}const cf=xr("ArrayBuffer");function Uh(d){let f;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?f=ArrayBuffer.isView(d):f=d&&d.buffer&&cf(d.buffer),f}const Nh=va("string"),Kt=va("function"),ff=va("number"),Gn=d=>d!==null&&typeof d=="object",Lh=d=>d===!0||d===!1,ha=d=>{if(ba(d)!=="object")return!1;const f=qs(d);return(f===null||f===Object.prototype||Object.getPrototypeOf(f)===null)&&!(pf in d)&&!(_a in d)},Fh=d=>{if(!Gn(d)||Wn(d))return!1;try{return Object.keys(d).length===0&&Object.getPrototypeOf(d)===Object.prototype}catch{return!1}},qh=xr("Date"),Vh=xr("File"),Wh=xr("Blob"),Gh=xr("FileList"),jh=d=>Gn(d)&&Kt(d.pipe),Hh=d=>{let f;return d&&(typeof FormData=="function"&&d instanceof FormData||Kt(d.append)&&((f=ba(d))==="formdata"||f==="object"&&Kt(d.toString)&&d.toString()==="[object FormData]"))},Kh=xr("URLSearchParams"),[Zh,Xh,Qh,Yh]=["ReadableStream","Request","Response","Headers"].map(xr),Jh=d=>d.trim?d.trim():d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function jn(d,f,{allOwnKeys:w=!1}={}){if(d===null||typeof d>"u")return;let b,E;if(typeof d!="object"&&(d=[d]),Zi(d))for(b=0,E=d.length;b<E;b++)f.call(null,d[b],b,d);else{if(Wn(d))return;const P=w?Object.getOwnPropertyNames(d):Object.keys(d),O=P.length;let M;for(b=0;b<O;b++)M=P[b],f.call(null,d[M],M,d)}}function hf(d,f){if(Wn(d))return null;f=f.toLowerCase();const w=Object.keys(d);let b=w.length,E;for(;b-- >0;)if(E=w[b],f===E.toLowerCase())return E;return null}const Ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,mf=d=>!Ki(d)&&d!==Ti;function Ps(){const{caseless:d,skipUndefined:f}=mf(this)&&this||{},w={},b=(E,P)=>{const O=d&&hf(w,P)||P;ha(w[O])&&ha(E)?w[O]=Ps(w[O],E):ha(E)?w[O]=Ps({},E):Zi(E)?w[O]=E.slice():(!f||!Ki(E))&&(w[O]=E)};for(let E=0,P=arguments.length;E<P;E++)arguments[E]&&jn(arguments[E],b);return w}const em=(d,f,w,{allOwnKeys:b}={})=>(jn(f,(E,P)=>{w&&Kt(E)?d[P]=df(E,w):d[P]=E},{allOwnKeys:b}),d),tm=d=>(d.charCodeAt(0)===65279&&(d=d.slice(1)),d),rm=(d,f,w,b)=>{d.prototype=Object.create(f.prototype,b),d.prototype.constructor=d,Object.defineProperty(d,"super",{value:f.prototype}),w&&Object.assign(d.prototype,w)},im=(d,f,w,b)=>{let E,P,O;const M={};if(f=f||{},d==null)return f;do{for(E=Object.getOwnPropertyNames(d),P=E.length;P-- >0;)O=E[P],(!b||b(O,d,f))&&!M[O]&&(f[O]=d[O],M[O]=!0);d=w!==!1&&qs(d)}while(d&&(!w||w(d,f))&&d!==Object.prototype);return f},nm=(d,f,w)=>{d=String(d),(w===void 0||w>d.length)&&(w=d.length),w-=f.length;const b=d.indexOf(f,w);return b!==-1&&b===w},am=d=>{if(!d)return null;if(Zi(d))return d;let f=d.length;if(!ff(f))return null;const w=new Array(f);for(;f-- >0;)w[f]=d[f];return w},sm=(d=>f=>d&&f instanceof d)(typeof Uint8Array<"u"&&qs(Uint8Array)),om=(d,f)=>{const b=(d&&d[_a]).call(d);let E;for(;(E=b.next())&&!E.done;){const P=E.value;f.call(d,P[0],P[1])}},um=(d,f)=>{let w;const b=[];for(;(w=d.exec(f))!==null;)b.push(w);return b},lm=xr("HTMLFormElement"),dm=d=>d.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(w,b,E){return b.toUpperCase()+E}),Ic=(({hasOwnProperty:d})=>(f,w)=>d.call(f,w))(Object.prototype),pm=xr("RegExp"),gf=(d,f)=>{const w=Object.getOwnPropertyDescriptors(d),b={};jn(w,(E,P)=>{let O;(O=f(E,P,d))!==!1&&(b[P]=O||E)}),Object.defineProperties(d,b)},cm=d=>{gf(d,(f,w)=>{if(Kt(d)&&["arguments","caller","callee"].indexOf(w)!==-1)return!1;const b=d[w];if(Kt(b)){if(f.enumerable=!1,"writable"in f){f.writable=!1;return}f.set||(f.set=()=>{throw Error("Can not rewrite read-only method '"+w+"'")})}})},fm=(d,f)=>{const w={},b=E=>{E.forEach(P=>{w[P]=!0})};return Zi(d)?b(d):b(String(d).split(f)),w},hm=()=>{},mm=(d,f)=>d!=null&&Number.isFinite(d=+d)?d:f;function gm(d){return!!(d&&Kt(d.append)&&d[pf]==="FormData"&&d[_a])}const ym=d=>{const f=new Array(10),w=(b,E)=>{if(Gn(b)){if(f.indexOf(b)>=0)return;if(Wn(b))return b;if(!("toJSON"in b)){f[E]=b;const P=Zi(b)?[]:{};return jn(b,(O,M)=>{const T=w(O,E+1);!Ki(T)&&(P[M]=T)}),f[E]=void 0,P}}return b};return w(d,0)},wm=xr("AsyncFunction"),_m=d=>d&&(Gn(d)||Kt(d))&&Kt(d.then)&&Kt(d.catch),yf=((d,f)=>d?setImmediate:f?((w,b)=>(Ti.addEventListener("message",({source:E,data:P})=>{E===Ti&&P===w&&b.length&&b.shift()()},!1),E=>{b.push(E),Ti.postMessage(w,"*")}))(`axios@${Math.random()}`,[]):w=>setTimeout(w))(typeof setImmediate=="function",Kt(Ti.postMessage)),bm=typeof queueMicrotask<"u"?queueMicrotask.bind(Ti):typeof process<"u"&&process.nextTick||yf,vm=d=>d!=null&&Kt(d[_a]),Q={isArray:Zi,isArrayBuffer:cf,isBuffer:Wn,isFormData:Hh,isArrayBufferView:Uh,isString:Nh,isNumber:ff,isBoolean:Lh,isObject:Gn,isPlainObject:ha,isEmptyObject:Fh,isReadableStream:Zh,isRequest:Xh,isResponse:Qh,isHeaders:Yh,isUndefined:Ki,isDate:qh,isFile:Vh,isBlob:Wh,isRegExp:pm,isFunction:Kt,isStream:jh,isURLSearchParams:Kh,isTypedArray:sm,isFileList:Gh,forEach:jn,merge:Ps,extend:em,trim:Jh,stripBOM:tm,inherits:rm,toFlatObject:im,kindOf:ba,kindOfTest:xr,endsWith:nm,toArray:am,forEachEntry:om,matchAll:um,isHTMLForm:lm,hasOwnProperty:Ic,hasOwnProp:Ic,reduceDescriptors:gf,freezeMethods:cm,toObjectSet:fm,toCamelCase:dm,noop:hm,toFiniteNumber:mm,findKey:hf,global:Ti,isContextDefined:mf,isSpecCompliantForm:gm,toJSONObject:ym,isAsyncFn:wm,isThenable:_m,setImmediate:yf,asap:bm,isIterable:vm};function Je(d,f,w,b,E){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=d,this.name="AxiosError",f&&(this.code=f),w&&(this.config=w),b&&(this.request=b),E&&(this.response=E,this.status=E.status?E.status:null)}Q.inherits(Je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Q.toJSONObject(this.config),code:this.code,status:this.status}}});const wf=Je.prototype,_f={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(d=>{_f[d]={value:d}});Object.defineProperties(Je,_f);Object.defineProperty(wf,"isAxiosError",{value:!0});Je.from=(d,f,w,b,E,P)=>{const O=Object.create(wf);Q.toFlatObject(d,O,function(Y){return Y!==Error.prototype},W=>W!=="isAxiosError");const M=d&&d.message?d.message:"Error",T=f==null&&d?d.code:f;return Je.call(O,M,T,w,b,E),d&&O.cause==null&&Object.defineProperty(O,"cause",{value:d,configurable:!0}),O.name=d&&d.name||"Error",P&&Object.assign(O,P),O};const $m=null;function Us(d){return Q.isPlainObject(d)||Q.isArray(d)}function bf(d){return Q.endsWith(d,"[]")?d.slice(0,-2):d}function Cc(d,f,w){return d?d.concat(f).map(function(E,P){return E=bf(E),!w&&P?"["+E+"]":E}).join(w?".":""):f}function xm(d){return Q.isArray(d)&&!d.some(Us)}const Sm=Q.toFlatObject(Q,{},null,function(f){return/^is[A-Z]/.test(f)});function $a(d,f,w){if(!Q.isObject(d))throw new TypeError("target must be an object");f=f||new FormData,w=Q.toFlatObject(w,{metaTokens:!0,dots:!1,indexes:!1},!1,function(J,se){return!Q.isUndefined(se[J])});const b=w.metaTokens,E=w.visitor||Y,P=w.dots,O=w.indexes,T=(w.Blob||typeof Blob<"u"&&Blob)&&Q.isSpecCompliantForm(f);if(!Q.isFunction(E))throw new TypeError("visitor must be a function");function W(j){if(j===null)return"";if(Q.isDate(j))return j.toISOString();if(Q.isBoolean(j))return j.toString();if(!T&&Q.isBlob(j))throw new Je("Blob is not supported. Use a Buffer instead.");return Q.isArrayBuffer(j)||Q.isTypedArray(j)?T&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function Y(j,J,se){let Ge=j;if(j&&!se&&typeof j=="object"){if(Q.endsWith(J,"{}"))J=b?J:J.slice(0,-2),j=JSON.stringify(j);else if(Q.isArray(j)&&xm(j)||(Q.isFileList(j)||Q.endsWith(J,"[]"))&&(Ge=Q.toArray(j)))return J=bf(J),Ge.forEach(function($e,Ae){!(Q.isUndefined($e)||$e===null)&&f.append(O===!0?Cc([J],Ae,P):O===null?J:J+"[]",W($e))}),!1}return Us(j)?!0:(f.append(Cc(se,J,P),W(j)),!1)}const ue=[],fe=Object.assign(Sm,{defaultVisitor:Y,convertValue:W,isVisitable:Us});function he(j,J){if(!Q.isUndefined(j)){if(ue.indexOf(j)!==-1)throw Error("Circular reference detected in "+J.join("."));ue.push(j),Q.forEach(j,function(Ge,et){(!(Q.isUndefined(Ge)||Ge===null)&&E.call(f,Ge,Q.isString(et)?et.trim():et,J,fe))===!0&&he(Ge,J?J.concat(et):[et])}),ue.pop()}}if(!Q.isObject(d))throw new TypeError("data must be an object");return he(d),f}function Oc(d){const f={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(d).replace(/[!'()~]|%20|%00/g,function(b){return f[b]})}function Vs(d,f){this._pairs=[],d&&$a(d,this,f)}const vf=Vs.prototype;vf.append=function(f,w){this._pairs.push([f,w])};vf.toString=function(f){const w=f?function(b){return f.call(this,b,Oc)}:Oc;return this._pairs.map(function(E){return w(E[0])+"="+w(E[1])},"").join("&")};function Em(d){return encodeURIComponent(d).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function $f(d,f,w){if(!f)return d;const b=w&&w.encode||Em;Q.isFunction(w)&&(w={serialize:w});const E=w&&w.serialize;let P;if(E?P=E(f,w):P=Q.isURLSearchParams(f)?f.toString():new Vs(f,w).toString(b),P){const O=d.indexOf("#");O!==-1&&(d=d.slice(0,O)),d+=(d.indexOf("?")===-1?"?":"&")+P}return d}class Ac{constructor(){this.handlers=[]}use(f,w,b){return this.handlers.push({fulfilled:f,rejected:w,synchronous:b?b.synchronous:!1,runWhen:b?b.runWhen:null}),this.handlers.length-1}eject(f){this.handlers[f]&&(this.handlers[f]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(f){Q.forEach(this.handlers,function(b){b!==null&&f(b)})}}const xf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tm=typeof URLSearchParams<"u"?URLSearchParams:Vs,km=typeof FormData<"u"?FormData:null,Im=typeof Blob<"u"?Blob:null,Cm={isBrowser:!0,classes:{URLSearchParams:Tm,FormData:km,Blob:Im},protocols:["http","https","file","blob","url","data"]},Ws=typeof window<"u"&&typeof document<"u",Ns=typeof navigator=="object"&&navigator||void 0,Om=Ws&&(!Ns||["ReactNative","NativeScript","NS"].indexOf(Ns.product)<0),Am=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zm=Ws&&window.location.href||"http://localhost",Rm=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ws,hasStandardBrowserEnv:Om,hasStandardBrowserWebWorkerEnv:Am,navigator:Ns,origin:zm},Symbol.toStringTag,{value:"Module"})),qt={...Rm,...Cm};function Bm(d,f){return $a(d,new qt.classes.URLSearchParams,{visitor:function(w,b,E,P){return qt.isNode&&Q.isBuffer(w)?(this.append(b,w.toString("base64")),!1):P.defaultVisitor.apply(this,arguments)},...f})}function Mm(d){return Q.matchAll(/\w+|\[(\w*)]/g,d).map(f=>f[0]==="[]"?"":f[1]||f[0])}function Dm(d){const f={},w=Object.keys(d);let b;const E=w.length;let P;for(b=0;b<E;b++)P=w[b],f[P]=d[P];return f}function Sf(d){function f(w,b,E,P){let O=w[P++];if(O==="__proto__")return!0;const M=Number.isFinite(+O),T=P>=w.length;return O=!O&&Q.isArray(E)?E.length:O,T?(Q.hasOwnProp(E,O)?E[O]=[E[O],b]:E[O]=b,!M):((!E[O]||!Q.isObject(E[O]))&&(E[O]=[]),f(w,b,E[O],P)&&Q.isArray(E[O])&&(E[O]=Dm(E[O])),!M)}if(Q.isFormData(d)&&Q.isFunction(d.entries)){const w={};return Q.forEachEntry(d,(b,E)=>{f(Mm(b),E,w,0)}),w}return null}function Pm(d,f,w){if(Q.isString(d))try{return(f||JSON.parse)(d),Q.trim(d)}catch(b){if(b.name!=="SyntaxError")throw b}return(w||JSON.stringify)(d)}const Hn={transitional:xf,adapter:["xhr","http","fetch"],transformRequest:[function(f,w){const b=w.getContentType()||"",E=b.indexOf("application/json")>-1,P=Q.isObject(f);if(P&&Q.isHTMLForm(f)&&(f=new FormData(f)),Q.isFormData(f))return E?JSON.stringify(Sf(f)):f;if(Q.isArrayBuffer(f)||Q.isBuffer(f)||Q.isStream(f)||Q.isFile(f)||Q.isBlob(f)||Q.isReadableStream(f))return f;if(Q.isArrayBufferView(f))return f.buffer;if(Q.isURLSearchParams(f))return w.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),f.toString();let M;if(P){if(b.indexOf("application/x-www-form-urlencoded")>-1)return Bm(f,this.formSerializer).toString();if((M=Q.isFileList(f))||b.indexOf("multipart/form-data")>-1){const T=this.env&&this.env.FormData;return $a(M?{"files[]":f}:f,T&&new T,this.formSerializer)}}return P||E?(w.setContentType("application/json",!1),Pm(f)):f}],transformResponse:[function(f){const w=this.transitional||Hn.transitional,b=w&&w.forcedJSONParsing,E=this.responseType==="json";if(Q.isResponse(f)||Q.isReadableStream(f))return f;if(f&&Q.isString(f)&&(b&&!this.responseType||E)){const O=!(w&&w.silentJSONParsing)&&E;try{return JSON.parse(f,this.parseReviver)}catch(M){if(O)throw M.name==="SyntaxError"?Je.from(M,Je.ERR_BAD_RESPONSE,this,null,this.response):M}}return f}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(f){return f>=200&&f<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Q.forEach(["delete","get","head","post","put","patch"],d=>{Hn.headers[d]={}});const Um=Q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Nm=d=>{const f={};let w,b,E;return d&&d.split(`
`).forEach(function(O){E=O.indexOf(":"),w=O.substring(0,E).trim().toLowerCase(),b=O.substring(E+1).trim(),!(!w||f[w]&&Um[w])&&(w==="set-cookie"?f[w]?f[w].push(b):f[w]=[b]:f[w]=f[w]?f[w]+", "+b:b)}),f},zc=Symbol("internals");function Bn(d){return d&&String(d).trim().toLowerCase()}function ma(d){return d===!1||d==null?d:Q.isArray(d)?d.map(ma):String(d)}function Lm(d){const f=Object.create(null),w=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let b;for(;b=w.exec(d);)f[b[1]]=b[2];return f}const Fm=d=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(d.trim());function Os(d,f,w,b,E){if(Q.isFunction(b))return b.call(this,f,w);if(E&&(f=w),!!Q.isString(f)){if(Q.isString(b))return f.indexOf(b)!==-1;if(Q.isRegExp(b))return b.test(f)}}function qm(d){return d.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(f,w,b)=>w.toUpperCase()+b)}function Vm(d,f){const w=Q.toCamelCase(" "+f);["get","set","has"].forEach(b=>{Object.defineProperty(d,b+w,{value:function(E,P,O){return this[b].call(this,f,E,P,O)},configurable:!0})})}let Zt=class{constructor(f){f&&this.set(f)}set(f,w,b){const E=this;function P(M,T,W){const Y=Bn(T);if(!Y)throw new Error("header name must be a non-empty string");const ue=Q.findKey(E,Y);(!ue||E[ue]===void 0||W===!0||W===void 0&&E[ue]!==!1)&&(E[ue||T]=ma(M))}const O=(M,T)=>Q.forEach(M,(W,Y)=>P(W,Y,T));if(Q.isPlainObject(f)||f instanceof this.constructor)O(f,w);else if(Q.isString(f)&&(f=f.trim())&&!Fm(f))O(Nm(f),w);else if(Q.isObject(f)&&Q.isIterable(f)){let M={},T,W;for(const Y of f){if(!Q.isArray(Y))throw TypeError("Object iterator must return a key-value pair");M[W=Y[0]]=(T=M[W])?Q.isArray(T)?[...T,Y[1]]:[T,Y[1]]:Y[1]}O(M,w)}else f!=null&&P(w,f,b);return this}get(f,w){if(f=Bn(f),f){const b=Q.findKey(this,f);if(b){const E=this[b];if(!w)return E;if(w===!0)return Lm(E);if(Q.isFunction(w))return w.call(this,E,b);if(Q.isRegExp(w))return w.exec(E);throw new TypeError("parser must be boolean|regexp|function")}}}has(f,w){if(f=Bn(f),f){const b=Q.findKey(this,f);return!!(b&&this[b]!==void 0&&(!w||Os(this,this[b],b,w)))}return!1}delete(f,w){const b=this;let E=!1;function P(O){if(O=Bn(O),O){const M=Q.findKey(b,O);M&&(!w||Os(b,b[M],M,w))&&(delete b[M],E=!0)}}return Q.isArray(f)?f.forEach(P):P(f),E}clear(f){const w=Object.keys(this);let b=w.length,E=!1;for(;b--;){const P=w[b];(!f||Os(this,this[P],P,f,!0))&&(delete this[P],E=!0)}return E}normalize(f){const w=this,b={};return Q.forEach(this,(E,P)=>{const O=Q.findKey(b,P);if(O){w[O]=ma(E),delete w[P];return}const M=f?qm(P):String(P).trim();M!==P&&delete w[P],w[M]=ma(E),b[M]=!0}),this}concat(...f){return this.constructor.concat(this,...f)}toJSON(f){const w=Object.create(null);return Q.forEach(this,(b,E)=>{b!=null&&b!==!1&&(w[E]=f&&Q.isArray(b)?b.join(", "):b)}),w}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([f,w])=>f+": "+w).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(f){return f instanceof this?f:new this(f)}static concat(f,...w){const b=new this(f);return w.forEach(E=>b.set(E)),b}static accessor(f){const b=(this[zc]=this[zc]={accessors:{}}).accessors,E=this.prototype;function P(O){const M=Bn(O);b[M]||(Vm(E,O),b[M]=!0)}return Q.isArray(f)?f.forEach(P):P(f),this}};Zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Q.reduceDescriptors(Zt.prototype,({value:d},f)=>{let w=f[0].toUpperCase()+f.slice(1);return{get:()=>d,set(b){this[w]=b}}});Q.freezeMethods(Zt);function As(d,f){const w=this||Hn,b=f||w,E=Zt.from(b.headers);let P=b.data;return Q.forEach(d,function(M){P=M.call(w,P,E.normalize(),f?f.status:void 0)}),E.normalize(),P}function Ef(d){return!!(d&&d.__CANCEL__)}function Xi(d,f,w){Je.call(this,d??"canceled",Je.ERR_CANCELED,f,w),this.name="CanceledError"}Q.inherits(Xi,Je,{__CANCEL__:!0});function Tf(d,f,w){const b=w.config.validateStatus;!w.status||!b||b(w.status)?d(w):f(new Je("Request failed with status code "+w.status,[Je.ERR_BAD_REQUEST,Je.ERR_BAD_RESPONSE][Math.floor(w.status/100)-4],w.config,w.request,w))}function Wm(d){const f=/^([-+\w]{1,25})(:?\/\/|:)/.exec(d);return f&&f[1]||""}function Gm(d,f){d=d||10;const w=new Array(d),b=new Array(d);let E=0,P=0,O;return f=f!==void 0?f:1e3,function(T){const W=Date.now(),Y=b[P];O||(O=W),w[E]=T,b[E]=W;let ue=P,fe=0;for(;ue!==E;)fe+=w[ue++],ue=ue%d;if(E=(E+1)%d,E===P&&(P=(P+1)%d),W-O<f)return;const he=Y&&W-Y;return he?Math.round(fe*1e3/he):void 0}}function jm(d,f){let w=0,b=1e3/f,E,P;const O=(W,Y=Date.now())=>{w=Y,E=null,P&&(clearTimeout(P),P=null),d(...W)};return[(...W)=>{const Y=Date.now(),ue=Y-w;ue>=b?O(W,Y):(E=W,P||(P=setTimeout(()=>{P=null,O(E)},b-ue)))},()=>E&&O(E)]}const wa=(d,f,w=3)=>{let b=0;const E=Gm(50,250);return jm(P=>{const O=P.loaded,M=P.lengthComputable?P.total:void 0,T=O-b,W=E(T),Y=O<=M;b=O;const ue={loaded:O,total:M,progress:M?O/M:void 0,bytes:T,rate:W||void 0,estimated:W&&M&&Y?(M-O)/W:void 0,event:P,lengthComputable:M!=null,[f?"download":"upload"]:!0};d(ue)},w)},Rc=(d,f)=>{const w=d!=null;return[b=>f[0]({lengthComputable:w,total:d,loaded:b}),f[1]]},Bc=d=>(...f)=>Q.asap(()=>d(...f)),Hm=qt.hasStandardBrowserEnv?((d,f)=>w=>(w=new URL(w,qt.origin),d.protocol===w.protocol&&d.host===w.host&&(f||d.port===w.port)))(new URL(qt.origin),qt.navigator&&/(msie|trident)/i.test(qt.navigator.userAgent)):()=>!0,Km=qt.hasStandardBrowserEnv?{write(d,f,w,b,E,P,O){if(typeof document>"u")return;const M=[`${d}=${encodeURIComponent(f)}`];Q.isNumber(w)&&M.push(`expires=${new Date(w).toUTCString()}`),Q.isString(b)&&M.push(`path=${b}`),Q.isString(E)&&M.push(`domain=${E}`),P===!0&&M.push("secure"),Q.isString(O)&&M.push(`SameSite=${O}`),document.cookie=M.join("; ")},read(d){if(typeof document>"u")return null;const f=document.cookie.match(new RegExp("(?:^|; )"+d+"=([^;]*)"));return f?decodeURIComponent(f[1]):null},remove(d){this.write(d,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Zm(d){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(d)}function Xm(d,f){return f?d.replace(/\/?\/$/,"")+"/"+f.replace(/^\/+/,""):d}function kf(d,f,w){let b=!Zm(f);return d&&(b||w==!1)?Xm(d,f):f}const Mc=d=>d instanceof Zt?{...d}:d;function Ii(d,f){f=f||{};const w={};function b(W,Y,ue,fe){return Q.isPlainObject(W)&&Q.isPlainObject(Y)?Q.merge.call({caseless:fe},W,Y):Q.isPlainObject(Y)?Q.merge({},Y):Q.isArray(Y)?Y.slice():Y}function E(W,Y,ue,fe){if(Q.isUndefined(Y)){if(!Q.isUndefined(W))return b(void 0,W,ue,fe)}else return b(W,Y,ue,fe)}function P(W,Y){if(!Q.isUndefined(Y))return b(void 0,Y)}function O(W,Y){if(Q.isUndefined(Y)){if(!Q.isUndefined(W))return b(void 0,W)}else return b(void 0,Y)}function M(W,Y,ue){if(ue in f)return b(W,Y);if(ue in d)return b(void 0,W)}const T={url:P,method:P,data:P,baseURL:O,transformRequest:O,transformResponse:O,paramsSerializer:O,timeout:O,timeoutMessage:O,withCredentials:O,withXSRFToken:O,adapter:O,responseType:O,xsrfCookieName:O,xsrfHeaderName:O,onUploadProgress:O,onDownloadProgress:O,decompress:O,maxContentLength:O,maxBodyLength:O,beforeRedirect:O,transport:O,httpAgent:O,httpsAgent:O,cancelToken:O,socketPath:O,responseEncoding:O,validateStatus:M,headers:(W,Y,ue)=>E(Mc(W),Mc(Y),ue,!0)};return Q.forEach(Object.keys({...d,...f}),function(Y){const ue=T[Y]||E,fe=ue(d[Y],f[Y],Y);Q.isUndefined(fe)&&ue!==M||(w[Y]=fe)}),w}const If=d=>{const f=Ii({},d);let{data:w,withXSRFToken:b,xsrfHeaderName:E,xsrfCookieName:P,headers:O,auth:M}=f;if(f.headers=O=Zt.from(O),f.url=$f(kf(f.baseURL,f.url,f.allowAbsoluteUrls),d.params,d.paramsSerializer),M&&O.set("Authorization","Basic "+btoa((M.username||"")+":"+(M.password?unescape(encodeURIComponent(M.password)):""))),Q.isFormData(w)){if(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv)O.setContentType(void 0);else if(Q.isFunction(w.getHeaders)){const T=w.getHeaders(),W=["content-type","content-length"];Object.entries(T).forEach(([Y,ue])=>{W.includes(Y.toLowerCase())&&O.set(Y,ue)})}}if(qt.hasStandardBrowserEnv&&(b&&Q.isFunction(b)&&(b=b(f)),b||b!==!1&&Hm(f.url))){const T=E&&P&&Km.read(P);T&&O.set(E,T)}return f},Qm=typeof XMLHttpRequest<"u",Ym=Qm&&function(d){return new Promise(function(w,b){const E=If(d);let P=E.data;const O=Zt.from(E.headers).normalize();let{responseType:M,onUploadProgress:T,onDownloadProgress:W}=E,Y,ue,fe,he,j;function J(){he&&he(),j&&j(),E.cancelToken&&E.cancelToken.unsubscribe(Y),E.signal&&E.signal.removeEventListener("abort",Y)}let se=new XMLHttpRequest;se.open(E.method.toUpperCase(),E.url,!0),se.timeout=E.timeout;function Ge(){if(!se)return;const $e=Zt.from("getAllResponseHeaders"in se&&se.getAllResponseHeaders()),_e={data:!M||M==="text"||M==="json"?se.responseText:se.response,status:se.status,statusText:se.statusText,headers:$e,config:d,request:se};Tf(function(ze){w(ze),J()},function(ze){b(ze),J()},_e),se=null}"onloadend"in se?se.onloadend=Ge:se.onreadystatechange=function(){!se||se.readyState!==4||se.status===0&&!(se.responseURL&&se.responseURL.indexOf("file:")===0)||setTimeout(Ge)},se.onabort=function(){se&&(b(new Je("Request aborted",Je.ECONNABORTED,d,se)),se=null)},se.onerror=function(Ae){const _e=Ae&&Ae.message?Ae.message:"Network Error",xe=new Je(_e,Je.ERR_NETWORK,d,se);xe.event=Ae||null,b(xe),se=null},se.ontimeout=function(){let Ae=E.timeout?"timeout of "+E.timeout+"ms exceeded":"timeout exceeded";const _e=E.transitional||xf;E.timeoutErrorMessage&&(Ae=E.timeoutErrorMessage),b(new Je(Ae,_e.clarifyTimeoutError?Je.ETIMEDOUT:Je.ECONNABORTED,d,se)),se=null},P===void 0&&O.setContentType(null),"setRequestHeader"in se&&Q.forEach(O.toJSON(),function(Ae,_e){se.setRequestHeader(_e,Ae)}),Q.isUndefined(E.withCredentials)||(se.withCredentials=!!E.withCredentials),M&&M!=="json"&&(se.responseType=E.responseType),W&&([fe,j]=wa(W,!0),se.addEventListener("progress",fe)),T&&se.upload&&([ue,he]=wa(T),se.upload.addEventListener("progress",ue),se.upload.addEventListener("loadend",he)),(E.cancelToken||E.signal)&&(Y=$e=>{se&&(b(!$e||$e.type?new Xi(null,d,se):$e),se.abort(),se=null)},E.cancelToken&&E.cancelToken.subscribe(Y),E.signal&&(E.signal.aborted?Y():E.signal.addEventListener("abort",Y)));const et=Wm(E.url);if(et&&qt.protocols.indexOf(et)===-1){b(new Je("Unsupported protocol "+et+":",Je.ERR_BAD_REQUEST,d));return}se.send(P||null)})},Jm=(d,f)=>{const{length:w}=d=d?d.filter(Boolean):[];if(f||w){let b=new AbortController,E;const P=function(W){if(!E){E=!0,M();const Y=W instanceof Error?W:this.reason;b.abort(Y instanceof Je?Y:new Xi(Y instanceof Error?Y.message:Y))}};let O=f&&setTimeout(()=>{O=null,P(new Je(`timeout ${f} of ms exceeded`,Je.ETIMEDOUT))},f);const M=()=>{d&&(O&&clearTimeout(O),O=null,d.forEach(W=>{W.unsubscribe?W.unsubscribe(P):W.removeEventListener("abort",P)}),d=null)};d.forEach(W=>W.addEventListener("abort",P));const{signal:T}=b;return T.unsubscribe=()=>Q.asap(M),T}},eg=function*(d,f){let w=d.byteLength;if(w<f){yield d;return}let b=0,E;for(;b<w;)E=b+f,yield d.slice(b,E),b=E},tg=async function*(d,f){for await(const w of rg(d))yield*eg(w,f)},rg=async function*(d){if(d[Symbol.asyncIterator]){yield*d;return}const f=d.getReader();try{for(;;){const{done:w,value:b}=await f.read();if(w)break;yield b}}finally{await f.cancel()}},Dc=(d,f,w,b)=>{const E=tg(d,f);let P=0,O,M=T=>{O||(O=!0,b&&b(T))};return new ReadableStream({async pull(T){try{const{done:W,value:Y}=await E.next();if(W){M(),T.close();return}let ue=Y.byteLength;if(w){let fe=P+=ue;w(fe)}T.enqueue(new Uint8Array(Y))}catch(W){throw M(W),W}},cancel(T){return M(T),E.return()}},{highWaterMark:2})},Pc=64*1024,{isFunction:fa}=Q,ig=(({Request:d,Response:f})=>({Request:d,Response:f}))(Q.global),{ReadableStream:Uc,TextEncoder:Nc}=Q.global,Lc=(d,...f)=>{try{return!!d(...f)}catch{return!1}},ng=d=>{d=Q.merge.call({skipUndefined:!0},ig,d);const{fetch:f,Request:w,Response:b}=d,E=f?fa(f):typeof fetch=="function",P=fa(w),O=fa(b);if(!E)return!1;const M=E&&fa(Uc),T=E&&(typeof Nc=="function"?(j=>J=>j.encode(J))(new Nc):async j=>new Uint8Array(await new w(j).arrayBuffer())),W=P&&M&&Lc(()=>{let j=!1;const J=new w(qt.origin,{body:new Uc,method:"POST",get duplex(){return j=!0,"half"}}).headers.has("Content-Type");return j&&!J}),Y=O&&M&&Lc(()=>Q.isReadableStream(new b("").body)),ue={stream:Y&&(j=>j.body)};E&&["text","arrayBuffer","blob","formData","stream"].forEach(j=>{!ue[j]&&(ue[j]=(J,se)=>{let Ge=J&&J[j];if(Ge)return Ge.call(J);throw new Je(`Response type '${j}' is not supported`,Je.ERR_NOT_SUPPORT,se)})});const fe=async j=>{if(j==null)return 0;if(Q.isBlob(j))return j.size;if(Q.isSpecCompliantForm(j))return(await new w(qt.origin,{method:"POST",body:j}).arrayBuffer()).byteLength;if(Q.isArrayBufferView(j)||Q.isArrayBuffer(j))return j.byteLength;if(Q.isURLSearchParams(j)&&(j=j+""),Q.isString(j))return(await T(j)).byteLength},he=async(j,J)=>{const se=Q.toFiniteNumber(j.getContentLength());return se??fe(J)};return async j=>{let{url:J,method:se,data:Ge,signal:et,cancelToken:$e,timeout:Ae,onDownloadProgress:_e,onUploadProgress:xe,responseType:ze,headers:me,withCredentials:mt="same-origin",fetchOptions:dt}=If(j),Ct=f||fetch;ze=ze?(ze+"").toLowerCase():"text";let Lt=Jm([et,$e&&$e.toAbortSignal()],Ae),wt=null;const ot=Lt&&Lt.unsubscribe&&(()=>{Lt.unsubscribe()});let Jt;try{if(xe&&W&&se!=="get"&&se!=="head"&&(Jt=await he(me,Ge))!==0){let xt=new w(J,{method:"POST",body:Ge,duplex:"half"}),Et;if(Q.isFormData(Ge)&&(Et=xt.headers.get("content-type"))&&me.setContentType(Et),xt.body){const[er,tr]=Rc(Jt,wa(Bc(xe)));Ge=Dc(xt.body,Pc,er,tr)}}Q.isString(mt)||(mt=mt?"include":"omit");const Ot=P&&"credentials"in w.prototype,nt={...dt,signal:Lt,method:se.toUpperCase(),headers:me.normalize().toJSON(),body:Ge,duplex:"half",credentials:Ot?mt:void 0};wt=P&&new w(J,nt);let _t=await(P?Ct(wt,dt):Ct(J,nt));const Sr=Y&&(ze==="stream"||ze==="response");if(Y&&(_e||Sr&&ot)){const xt={};["status","statusText","headers"].forEach(rr=>{xt[rr]=_t[rr]});const Et=Q.toFiniteNumber(_t.headers.get("content-length")),[er,tr]=_e&&Rc(Et,wa(Bc(_e),!0))||[];_t=new b(Dc(_t.body,Pc,er,()=>{tr&&tr(),ot&&ot()}),xt)}ze=ze||"text";let ft=await ue[Q.findKey(ue,ze)||"text"](_t,j);return!Sr&&ot&&ot(),await new Promise((xt,Et)=>{Tf(xt,Et,{data:ft,headers:Zt.from(_t.headers),status:_t.status,statusText:_t.statusText,config:j,request:wt})})}catch(Ot){throw ot&&ot(),Ot&&Ot.name==="TypeError"&&/Load failed|fetch/i.test(Ot.message)?Object.assign(new Je("Network Error",Je.ERR_NETWORK,j,wt),{cause:Ot.cause||Ot}):Je.from(Ot,Ot&&Ot.code,j,wt)}}},ag=new Map,Cf=d=>{let f=d&&d.env||{};const{fetch:w,Request:b,Response:E}=f,P=[b,E,w];let O=P.length,M=O,T,W,Y=ag;for(;M--;)T=P[M],W=Y.get(T),W===void 0&&Y.set(T,W=M?new Map:ng(f)),Y=W;return W};Cf();const Gs={http:$m,xhr:Ym,fetch:{get:Cf}};Q.forEach(Gs,(d,f)=>{if(d){try{Object.defineProperty(d,"name",{value:f})}catch{}Object.defineProperty(d,"adapterName",{value:f})}});const Fc=d=>`- ${d}`,sg=d=>Q.isFunction(d)||d===null||d===!1;function og(d,f){d=Q.isArray(d)?d:[d];const{length:w}=d;let b,E;const P={};for(let O=0;O<w;O++){b=d[O];let M;if(E=b,!sg(b)&&(E=Gs[(M=String(b)).toLowerCase()],E===void 0))throw new Je(`Unknown adapter '${M}'`);if(E&&(Q.isFunction(E)||(E=E.get(f))))break;P[M||"#"+O]=E}if(!E){const O=Object.entries(P).map(([T,W])=>`adapter ${T} `+(W===!1?"is not supported by the environment":"is not available in the build"));let M=w?O.length>1?`since :
`+O.map(Fc).join(`
`):" "+Fc(O[0]):"as no adapter specified";throw new Je("There is no suitable adapter to dispatch the request "+M,"ERR_NOT_SUPPORT")}return E}const Of={getAdapter:og,adapters:Gs};function zs(d){if(d.cancelToken&&d.cancelToken.throwIfRequested(),d.signal&&d.signal.aborted)throw new Xi(null,d)}function qc(d){return zs(d),d.headers=Zt.from(d.headers),d.data=As.call(d,d.transformRequest),["post","put","patch"].indexOf(d.method)!==-1&&d.headers.setContentType("application/x-www-form-urlencoded",!1),Of.getAdapter(d.adapter||Hn.adapter,d)(d).then(function(b){return zs(d),b.data=As.call(d,d.transformResponse,b),b.headers=Zt.from(b.headers),b},function(b){return Ef(b)||(zs(d),b&&b.response&&(b.response.data=As.call(d,d.transformResponse,b.response),b.response.headers=Zt.from(b.response.headers))),Promise.reject(b)})}const Af="1.13.2",xa={};["object","boolean","number","function","string","symbol"].forEach((d,f)=>{xa[d]=function(b){return typeof b===d||"a"+(f<1?"n ":" ")+d}});const Vc={};xa.transitional=function(f,w,b){function E(P,O){return"[Axios v"+Af+"] Transitional option '"+P+"'"+O+(b?". "+b:"")}return(P,O,M)=>{if(f===!1)throw new Je(E(O," has been removed"+(w?" in "+w:"")),Je.ERR_DEPRECATED);return w&&!Vc[O]&&(Vc[O]=!0,console.warn(E(O," has been deprecated since v"+w+" and will be removed in the near future"))),f?f(P,O,M):!0}};xa.spelling=function(f){return(w,b)=>(console.warn(`${b} is likely a misspelling of ${f}`),!0)};function ug(d,f,w){if(typeof d!="object")throw new Je("options must be an object",Je.ERR_BAD_OPTION_VALUE);const b=Object.keys(d);let E=b.length;for(;E-- >0;){const P=b[E],O=f[P];if(O){const M=d[P],T=M===void 0||O(M,P,d);if(T!==!0)throw new Je("option "+P+" must be "+T,Je.ERR_BAD_OPTION_VALUE);continue}if(w!==!0)throw new Je("Unknown option "+P,Je.ERR_BAD_OPTION)}}const ga={assertOptions:ug,validators:xa},Rr=ga.validators;let ki=class{constructor(f){this.defaults=f||{},this.interceptors={request:new Ac,response:new Ac}}async request(f,w){try{return await this._request(f,w)}catch(b){if(b instanceof Error){let E={};Error.captureStackTrace?Error.captureStackTrace(E):E=new Error;const P=E.stack?E.stack.replace(/^.+\n/,""):"";try{b.stack?P&&!String(b.stack).endsWith(P.replace(/^.+\n.+\n/,""))&&(b.stack+=`
`+P):b.stack=P}catch{}}throw b}}_request(f,w){typeof f=="string"?(w=w||{},w.url=f):w=f||{},w=Ii(this.defaults,w);const{transitional:b,paramsSerializer:E,headers:P}=w;b!==void 0&&ga.assertOptions(b,{silentJSONParsing:Rr.transitional(Rr.boolean),forcedJSONParsing:Rr.transitional(Rr.boolean),clarifyTimeoutError:Rr.transitional(Rr.boolean)},!1),E!=null&&(Q.isFunction(E)?w.paramsSerializer={serialize:E}:ga.assertOptions(E,{encode:Rr.function,serialize:Rr.function},!0)),w.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?w.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:w.allowAbsoluteUrls=!0),ga.assertOptions(w,{baseUrl:Rr.spelling("baseURL"),withXsrfToken:Rr.spelling("withXSRFToken")},!0),w.method=(w.method||this.defaults.method||"get").toLowerCase();let O=P&&Q.merge(P.common,P[w.method]);P&&Q.forEach(["delete","get","head","post","put","patch","common"],j=>{delete P[j]}),w.headers=Zt.concat(O,P);const M=[];let T=!0;this.interceptors.request.forEach(function(J){typeof J.runWhen=="function"&&J.runWhen(w)===!1||(T=T&&J.synchronous,M.unshift(J.fulfilled,J.rejected))});const W=[];this.interceptors.response.forEach(function(J){W.push(J.fulfilled,J.rejected)});let Y,ue=0,fe;if(!T){const j=[qc.bind(this),void 0];for(j.unshift(...M),j.push(...W),fe=j.length,Y=Promise.resolve(w);ue<fe;)Y=Y.then(j[ue++],j[ue++]);return Y}fe=M.length;let he=w;for(;ue<fe;){const j=M[ue++],J=M[ue++];try{he=j(he)}catch(se){J.call(this,se);break}}try{Y=qc.call(this,he)}catch(j){return Promise.reject(j)}for(ue=0,fe=W.length;ue<fe;)Y=Y.then(W[ue++],W[ue++]);return Y}getUri(f){f=Ii(this.defaults,f);const w=kf(f.baseURL,f.url,f.allowAbsoluteUrls);return $f(w,f.params,f.paramsSerializer)}};Q.forEach(["delete","get","head","options"],function(f){ki.prototype[f]=function(w,b){return this.request(Ii(b||{},{method:f,url:w,data:(b||{}).data}))}});Q.forEach(["post","put","patch"],function(f){function w(b){return function(P,O,M){return this.request(Ii(M||{},{method:f,headers:b?{"Content-Type":"multipart/form-data"}:{},url:P,data:O}))}}ki.prototype[f]=w(),ki.prototype[f+"Form"]=w(!0)});let lg=class zf{constructor(f){if(typeof f!="function")throw new TypeError("executor must be a function.");let w;this.promise=new Promise(function(P){w=P});const b=this;this.promise.then(E=>{if(!b._listeners)return;let P=b._listeners.length;for(;P-- >0;)b._listeners[P](E);b._listeners=null}),this.promise.then=E=>{let P;const O=new Promise(M=>{b.subscribe(M),P=M}).then(E);return O.cancel=function(){b.unsubscribe(P)},O},f(function(P,O,M){b.reason||(b.reason=new Xi(P,O,M),w(b.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(f){if(this.reason){f(this.reason);return}this._listeners?this._listeners.push(f):this._listeners=[f]}unsubscribe(f){if(!this._listeners)return;const w=this._listeners.indexOf(f);w!==-1&&this._listeners.splice(w,1)}toAbortSignal(){const f=new AbortController,w=b=>{f.abort(b)};return this.subscribe(w),f.signal.unsubscribe=()=>this.unsubscribe(w),f.signal}static source(){let f;return{token:new zf(function(E){f=E}),cancel:f}}};function dg(d){return function(w){return d.apply(null,w)}}function pg(d){return Q.isObject(d)&&d.isAxiosError===!0}const Ls={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ls).forEach(([d,f])=>{Ls[f]=d});function Rf(d){const f=new ki(d),w=df(ki.prototype.request,f);return Q.extend(w,ki.prototype,f,{allOwnKeys:!0}),Q.extend(w,f,null,{allOwnKeys:!0}),w.create=function(E){return Rf(Ii(d,E))},w}const Rt=Rf(Hn);Rt.Axios=ki;Rt.CanceledError=Xi;Rt.CancelToken=lg;Rt.isCancel=Ef;Rt.VERSION=Af;Rt.toFormData=$a;Rt.AxiosError=Je;Rt.Cancel=Rt.CanceledError;Rt.all=function(f){return Promise.all(f)};Rt.spread=dg;Rt.isAxiosError=pg;Rt.mergeConfig=Ii;Rt.AxiosHeaders=Zt;Rt.formToJSON=d=>Sf(Q.isHTMLForm(d)?new FormData(d):d);Rt.getAdapter=Of.getAdapter;Rt.HttpStatusCode=Ls;Rt.default=Rt;const{Axios:Bg,AxiosError:Mg,CanceledError:Dg,isCancel:Pg,CancelToken:Ug,VERSION:Ng,all:Lg,Cancel:Fg,isAxiosError:qg,spread:Vg,toFormData:Wg,AxiosHeaders:Gg,HttpStatusCode:jg,formToJSON:Hg,getAdapter:Kg,mergeConfig:Zg}=Rt;async function cg(d,f){const w=d.getReader();let b;for(;!(b=await w.read()).done;)f(b.value)}function fg(d){let f,w,b,E=!1;return function(O){f===void 0?(f=O,w=0,b=-1):f=mg(f,O);const M=f.length;let T=0;for(;w<M;){E&&(f[w]===10&&(T=++w),E=!1);let W=-1;for(;w<M&&W===-1;++w)switch(f[w]){case 58:b===-1&&(b=w-T);break;case 13:E=!0;case 10:W=w;break}if(W===-1)break;d(f.subarray(T,W),b),T=w,b=-1}T===M?f=void 0:T!==0&&(f=f.subarray(T),w-=T)}}function hg(d,f,w){let b=Wc();const E=new TextDecoder;return function(O,M){if(O.length===0)w?.(b),b=Wc();else if(M>0){const T=E.decode(O.subarray(0,M)),W=M+(O[M+1]===32?2:1),Y=E.decode(O.subarray(W));switch(T){case"data":b.data=b.data?b.data+`
`+Y:Y;break;case"event":b.event=Y;break;case"id":d(b.id=Y);break;case"retry":const ue=parseInt(Y,10);isNaN(ue)||f(b.retry=ue);break}}}}function mg(d,f){const w=new Uint8Array(d.length+f.length);return w.set(d),w.set(f,d.length),w}function Wc(){return{data:"",event:"",id:"",retry:void 0}}var gg=function(d,f){var w={};for(var b in d)Object.prototype.hasOwnProperty.call(d,b)&&f.indexOf(b)<0&&(w[b]=d[b]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,b=Object.getOwnPropertySymbols(d);E<b.length;E++)f.indexOf(b[E])<0&&Object.prototype.propertyIsEnumerable.call(d,b[E])&&(w[b[E]]=d[b[E]]);return w};const Fs="text/event-stream",yg=1e3,Gc="last-event-id";function Xg(d,f){var{signal:w,headers:b,onopen:E,onmessage:P,onclose:O,onerror:M,openWhenHidden:T,fetch:W}=f,Y=gg(f,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise((ue,fe)=>{const he=Object.assign({},b);he.accept||(he.accept=Fs);let j;function J(){j.abort(),document.hidden||_e()}T||document.addEventListener("visibilitychange",J);let se=yg,Ge=0;function et(){document.removeEventListener("visibilitychange",J),window.clearTimeout(Ge),j.abort()}w?.addEventListener("abort",()=>{et(),ue()});const $e=W??window.fetch,Ae=E??wg;async function _e(){var xe;j=new AbortController;try{const ze=await $e(d,Object.assign(Object.assign({},Y),{headers:he,signal:j.signal}));await Ae(ze),await cg(ze.body,fg(hg(me=>{me?he[Gc]=me:delete he[Gc]},me=>{se=me},P))),O?.(),et(),ue()}catch(ze){if(!j.signal.aborted)try{const me=(xe=M?.(ze))!==null&&xe!==void 0?xe:se;window.clearTimeout(Ge),Ge=window.setTimeout(_e,me)}catch(me){et(),fe(me)}}}_e()})}function wg(d){const f=d.headers.get("content-type");if(!f?.startsWith(Fs))throw new Error(`Expected content-type to be ${Fs}, Actual: ${f}`)}function _g(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Rs={},Mn={},jc;function Bf(){if(jc)return Mn;jc=1,Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.baseAssetPath=void 0;const f=typeof window<"u"&&typeof window.document<"u"?window.document.currentScript:null;let w="/";return f&&(w=f.src.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^/]+$/,"/")),Mn.baseAssetPath=w,Mn}var Dn={},Hc;function js(){if(Hc)return Dn;Hc=1,Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.defaultModelFetcher=void 0;const d=f=>fetch(f).then(w=>w.arrayBuffer());return Dn.defaultModelFetcher=d,Dn}var qr={},Pn={},Kc;function Kn(){if(Kc)return Pn;Kc=1,Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.log=void 0;const d=f=>w=>{console.log(`VAD | ${f} >`,w)};return Pn.log={error:d("error"),debug:d("debug"),warn:d("warn")},Pn}var Un={},Zc;function Sa(){if(Zc)return Un;Zc=1,Object.defineProperty(Un,"__esModule",{value:!0}),Un.Message=void 0;var d;return(function(f){f.AudioFrame="AUDIO_FRAME",f.SpeechStart="SPEECH_START",f.VADMisfire="VAD_MISFIRE",f.SpeechEnd="SPEECH_END",f.SpeechStop="SPEECH_STOP",f.SpeechRealStart="SPEECH_REAL_START",f.FrameProcessed="FRAME_PROCESSED"})(d||(Un.Message=d={})),Un}var Xc;function Hs(){if(Xc)return qr;Xc=1,Object.defineProperty(qr,"__esModule",{value:!0}),qr.FrameProcessor=qr.validateOptions=qr.defaultFrameProcessorOptions=void 0;const d=Kn(),f=Sa();qr.defaultFrameProcessorOptions={positiveSpeechThreshold:.3,negativeSpeechThreshold:.25,preSpeechPadMs:800,redemptionMs:1400,minSpeechMs:400,submitUserSpeechOnPause:!1};function w(O){(O.positiveSpeechThreshold<0||O.positiveSpeechThreshold>1)&&d.log.error("positiveSpeechThreshold should be a number between 0 and 1"),(O.negativeSpeechThreshold<0||O.negativeSpeechThreshold>O.positiveSpeechThreshold)&&d.log.error("negativeSpeechThreshold should be between 0 and positiveSpeechThreshold"),O.preSpeechPadMs<0&&d.log.error("preSpeechPadMs should be positive"),O.redemptionMs<0&&d.log.error("redemptionMs should be positive"),O.minSpeechMs<0&&d.log.error("minSpeechMs should be positive")}qr.validateOptions=w;const b=O=>{const M=O.reduce((W,Y)=>(W.push(W.at(-1)+Y.length),W),[0]),T=new Float32Array(M.at(-1));return O.forEach((W,Y)=>{const ue=M[Y];T.set(W,ue)}),T};function E(O,M){const T=Math.floor(O.redemptionMs/M),W=Math.floor(O.preSpeechPadMs/M),Y=Math.floor(O.minSpeechMs/M);return{redemptionFrames:T,preSpeechPadFrames:W,minSpeechFrames:Y}}class P{constructor(M,T,W,Y){this.modelProcessFunc=M,this.modelResetFunc=T,this.options=W,this.msPerFrame=Y,this.speaking=!1,this.redemptionCounter=0,this.speechFrameCount=0,this.active=!1,this.speechRealStartFired=!1,this.setOptions=j=>{this.options={...this.options,...j};const{redemptionFrames:J,preSpeechPadFrames:se,minSpeechFrames:Ge}=E(this.options,this.msPerFrame);this.redemptionFrames=J,this.preSpeechPadFrames=se,this.minSpeechFrames=Ge},this.reset=()=>{this.speaking=!1,this.speechRealStartFired=!1,this.audioBuffer=[],this.modelResetFunc(),this.redemptionCounter=0,this.speechFrameCount=0},this.pause=j=>{this.active=!1,this.options.submitUserSpeechOnPause?this.endSegment(j):this.reset()},this.resume=()=>{this.active=!0},this.endSegment=j=>{const J=this.audioBuffer;this.audioBuffer=[];const se=this.speaking;if(this.reset(),se)if(J.reduce((et,$e)=>$e.isSpeech?et+1:et,0)>=this.minSpeechFrames){const et=b(J.map($e=>$e.frame));j({msg:f.Message.SpeechEnd,audio:et})}else j({msg:f.Message.VADMisfire});return{}},this.process=async(j,J)=>{if(!this.active)return;const se=await this.modelProcessFunc(j),Ge=se.isSpeech>=this.options.positiveSpeechThreshold;if(J({probs:se,msg:f.Message.FrameProcessed,frame:j}),this.audioBuffer.push({frame:j,isSpeech:Ge}),Ge&&(this.speechFrameCount++,this.redemptionCounter=0),Ge&&!this.speaking&&(this.speaking=!0,J({msg:f.Message.SpeechStart})),this.speaking&&this.speechFrameCount===this.minSpeechFrames&&!this.speechRealStartFired&&(this.speechRealStartFired=!0,J({msg:f.Message.SpeechRealStart})),se.isSpeech<this.options.negativeSpeechThreshold&&this.speaking&&++this.redemptionCounter>=this.redemptionFrames){this.redemptionCounter=0,this.speechFrameCount=0,this.speaking=!1,this.speechRealStartFired=!1;const et=this.audioBuffer;if(this.audioBuffer=[],et.reduce((Ae,_e)=>_e.isSpeech?Ae+1:Ae,0)>=this.minSpeechFrames){const Ae=b(et.map(_e=>_e.frame));J({msg:f.Message.SpeechEnd,audio:Ae})}else J({msg:f.Message.VADMisfire})}if(!this.speaking){for(;this.audioBuffer.length>this.preSpeechPadFrames;)this.audioBuffer.shift();this.speechFrameCount=0}},this.audioBuffer=[];const{redemptionFrames:ue,preSpeechPadFrames:fe,minSpeechFrames:he}=E(this.options,this.msPerFrame);this.redemptionFrames=ue,this.preSpeechPadFrames=fe,this.minSpeechFrames=he,this.reset()}}return qr.FrameProcessor=P,qr}var Vr={};function ur(d){throw new Error('Could not dynamically require "'+d+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Bs={exports:{}};var Qc;function bg(){return Qc||(Qc=1,(function(d,f){var w=(()=>{var b=Object.defineProperty,E=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,O=Object.prototype.hasOwnProperty,M=(e=>typeof ur<"u"?ur:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof ur<"u"?ur:t)[r]}):e)(function(e){if(typeof ur<"u")return ur.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),T=(e,t)=>()=>(e&&(t=e(e=0)),t),W=(e,t)=>{for(var r in t)b(e,r,{get:t[r],enumerable:!0})},Y=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of P(t))!O.call(e,n)&&n!==r&&b(e,n,{get:()=>t[n],enumerable:!(i=E(t,n))||i.enumerable});return e},ue=e=>Y(b({},"__esModule",{value:!0}),e),fe,he,j,J,se,Ge=T(()=>{fe=new Map,he=[],j=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=fe.get(e);if(i===void 0)fe.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=he.indexOf(e);n!==-1&&he.splice(n,1);for(let a=0;a<he.length;a++)if(fe.get(he[a]).priority<=r){he.splice(a,0,e);return}he.push(e)}return}throw new TypeError("not a valid backend")},J=async e=>{let t=fe.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},se=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?he:r,n,a=[],s=new Set;for(let u of i){let l=await J(u);typeof l=="string"?a.push({name:u,err:l}):(n||(n=l),n===l&&s.add(u))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[n,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),et=T(()=>{Ge()}),$e,Ae=T(()=>{$e="1.24.3"}),_e,xe,ze=T(()=>{Ae(),_e="warning",xe={wasm:{},webgl:{},webgpu:{},versions:{common:$e},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);_e=e}},get logLevel(){return _e}},Object.defineProperty(xe,"logLevel",{enumerable:!0})}),me,mt=T(()=>{ze(),me=xe}),dt,Ct,Lt=T(()=>{dt=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let c=a*n,p=0,m=c,g=c*2,y=-1;s==="RGBA"?(p=0,m=c,g=c*2,y=c*3):s==="RGB"?(p=0,m=c,g=c*2):s==="RBG"&&(p=0,g=c,m=c*2);for(let x=0;x<a;x++)for(let C=0;C<n;C++){let S=(e.data[p++]-l[0])*u[0],$=(e.data[m++]-l[1])*u[1],R=(e.data[g++]-l[2])*u[2],I=y===-1?255:(e.data[y++]-l[3])*u[3];i.fillStyle="rgba("+S+","+$+","+R+","+I+")",i.fillRect(C,x,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ct=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let p=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,g=0,y=1,x=2,C=3,S=0,$=p,R=p*2,I=-1;o==="RGBA"?(S=0,$=p,R=p*2,I=p*3):o==="RGB"?(S=0,$=p,R=p*2):o==="RBG"&&(S=0,R=p,$=p*2),i=r.createImageData(n,a);for(let U=0;U<a*n;g+=m,y+=m,x+=m,C+=m,U++)i.data[g]=(e.data[S++]-c[0])*l[0],i.data[y]=(e.data[$++]-c[1])*l[1],i.data[x]=(e.data[R++]-c[2])*l[2],i.data[C]=I===-1?255:(e.data[I++]-c[3])*l[3]}else throw new Error("Can not access image data");return i}}),wt,ot,Jt,Ot,nt,_t,Sr=T(()=>{lr(),wt=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*i,c=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,m=0,g=1,y=2,x=3,C=0,S=l,$=l*2,R=-1;o==="RGB"&&(p=3,m=0,g=1,y=2,x=-1),u==="RGBA"?R=l*3:u==="RBG"?(C=0,$=l,S=l*2):u==="BGR"&&($=0,S=l,C=l*2);for(let I=0;I<l;I++,m+=p,y+=p,g+=p,x+=p)c[C++]=(e[m]+s[0])/a[0],c[S++]=(e[g]+s[1])/a[1],c[$++]=(e[y]+s[2])/a[2],R!==-1&&x!==-1&&(c[R++]=(e[x]+s[3])/a[3]);return u==="RGBA"?new ut("float32",c,[1,4,r,i]):new ut("float32",c,[1,3,r,i])},ot=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=u();c.width=e.width,c.height=e.height;let p=l(c);if(p!=null){let m=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=m,o.width=g}else o.tensorFormat="RGBA",o.height=m,o.width=g;p.drawImage(e,0,0),s=p.getImageData(0,0,g,m).data}else throw new Error("Can not access image data")}else if(i){let c,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,p=t.resizedWidth):(c=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=p,t!==void 0){let m=u();m.width=p,m.height=c;let g=l(m);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,p,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=u();c.width=e.width,c.height=e.height;let p=l(c);if(p!=null){let m=e.height,g=e.width;return p.drawImage(e,0,0,g,m),s=p.getImageData(0,0,g,m).data,o.height=m,o.width=g,wt(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((c,p)=>{let m=u(),g=l(m);if(!e||!g)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{m.width=y.width,m.height=y.height,g.drawImage(y,0,0,m.width,m.height);let x=g.getImageData(0,0,m.width,m.height);o.height=m.height,o.width=m.width,c(wt(x.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return wt(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Jt=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new ut({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},Ot=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new ut({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},nt=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new ut({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},_t=(e,t,r)=>new ut({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),ft,xt,Et,er,tr=T(()=>{ft=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),xt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Et=!1,er=()=>{if(!Et){Et=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(ft.set("int64",BigInt64Array),xt.set(BigInt64Array,"int64")),t&&(ft.set("uint64",BigUint64Array),xt.set(BigUint64Array,"uint64")),i?(ft.set("float16",r),xt.set(r,"float16")):ft.set("float16",Uint16Array)}}}),rr,ei,Qi=T(()=>{lr(),rr=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},ei=(e,t)=>{switch(e.location){case"cpu":return new ut(e.type,e.data,t);case"cpu-pinned":return new ut({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ut({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ut({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ut({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ut,lr=T(()=>{Lt(),Sr(),tr(),Qi(),ut=class{constructor(e,t,r){er();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=ft.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=ft.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",s=e;else if(u==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let u=xt.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=rr(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return ot(e,t)}static fromTexture(e,t){return Jt(e,t)}static fromGpuBuffer(e,t){return Ot(e,t)}static fromMLTensor(e,t){return nt(e,t)}static fromPinnedBuffer(e,t,r){return _t(e,t,r)}toDataURL(e){return dt(this,e)}toImageData(e){return Ct(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ei(this,e)}}}),gt,ti=T(()=>{lr(),gt=ut}),ir,Br,St,pt,Bt,Dt,ri=T(()=>{ze(),ir=(e,t)=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||console.timeStamp(`${e}::ORT::${t}`)},Br=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(a+=`::${t}`),ir("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},St=e=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||Br("BEGIN",e)},pt=e=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||Br("END",e)},Bt=e=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||console.time(`ORT::${e}`)},Dt=e=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||console.timeEnd(`ORT::${e}`)}}),ii,Yi=T(()=>{Ge(),ti(),ri(),ii=class Mf{constructor(t){this.handler=t}async run(t,r,i){St(),Bt("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof gt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof gt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);n[l]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,c=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(c.indexOf(p)!==-1){let m=r[p];(m===null||m instanceof gt)&&(l=!0,s=!1,n[p]=m)}if(l){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)n[l]=null;let o=await this.handler.run(t,n,a),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let c=o[l];c instanceof gt?u[l]=c:u[l]=new gt(c.type,c.data,c.dims)}return Dt("InferenceSession.run"),pt(),u}async release(){return this.handler.dispose()}static async create(t,r,i,n){St(),Bt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,p=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(m=t.byteLength-p,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||p+m>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-p}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(c,p,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await se(s),l=await o.createInferenceSessionHandler(a,u);return Dt("InferenceSession.create"),pt(),new Mf(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Mr,Ji=T(()=>{Yi(),Mr=ii}),dr=T(()=>{}),Xt=T(()=>{}),v=T(()=>{}),D=T(()=>{}),A={};W(A,{InferenceSession:()=>Mr,TRACE:()=>ir,TRACE_EVENT_BEGIN:()=>Bt,TRACE_EVENT_END:()=>Dt,TRACE_FUNC_BEGIN:()=>St,TRACE_FUNC_END:()=>pt,Tensor:()=>gt,env:()=>me,registerBackend:()=>j});var X=T(()=>{et(),mt(),Ji(),ti(),dr(),Xt(),ri(),v(),D()}),ne=T(()=>{}),re={};W(re,{default:()=>Pe});var ge,Ie,Pe,Ne=T(()=>{fc(),Wt(),Er(),ge="ort-wasm-proxy-worker",Ie=globalThis.self?.name===ge,Ie&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":ai(r.wasm).then(()=>{ys(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;ws(n,i).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:i}=r,n=da(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;bs(i,n).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":vs(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:a,outputIndices:s,options:o}=r;xs(i,n,a,s,new Array(s.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},Es([...a,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":Ss(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Pe=Ie?null:e=>new Worker(e??ie,{type:"classic",name:ge})}),Fe,Qe,ie,Se,ce,Oe,qe,tt,ct,lt,At,yt,nr,Er=T(()=>{ne(),Fe=typeof location>"u"?void 0:location.origin,Qe=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,ie=Qe(),Se=()=>{if(ie&&!ie.startsWith("blob:"))return ie.substring(0,ie.lastIndexOf("/")+1)},ce=(e,t)=>{try{let r=t??ie;return(r?new URL(e,r):new URL(e)).origin===Fe}catch{return!1}},Oe=(e,t)=>{let r=t??ie;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},qe=(e,t)=>`${t??"./"}${e}`,tt=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ct=async e=>(await import(e)).default,lt=(Ne(),ue(re)).default,At=async()=>{if(!ie)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ce(ie))return[void 0,lt()];let e=await tt(ie);return[e,lt(e)]},yt=void 0,nr=async(e,t,r,i)=>{let n=yt&&!(e||t);if(n)if(ie)n=ce(ie)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,yt];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Oe(a,t),o=r&&s&&!ce(s,t),u=o?await tt(s):s??qe(a,t);return[o?u:void 0,await ct(u)]}}}),Dr,Pr,pr,ni,en,tn,rn,ai,Ue,Wt=T(()=>{Er(),Pr=!1,pr=!1,ni=!1,en=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},tn=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},rn=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ai=async e=>{if(Pr)return Promise.resolve();if(pr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ni)throw new Error("previous call to 'initializeWebAssembly()' failed.");pr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!rn())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!tn())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=en();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n?.mjs,o=s?.href??s,u=n?.wasm,l=u?.href??u,c=e.wasmBinary,[p,m]=await nr(o,a,r>1,!!c||!!l),g=!1,y=[];if(t>0&&y.push(new Promise(x=>{setTimeout(()=>{g=!0,x()},t)})),y.push(new Promise((x,C)=>{let S={numThreads:r};if(c)S.wasmBinary=c,S.locateFile=$=>$;else if(l||a)S.locateFile=$=>l??a+$;else if(o&&o.indexOf("blob:")!==0)S.locateFile=$=>new URL($,o).href;else if(p){let $=Se();$&&(S.locateFile=R=>$+R)}m(S).then($=>{pr=!1,Pr=!0,Dr=$,x(),p&&URL.revokeObjectURL(p)},$=>{pr=!1,ni=!0,C($)})})),await Promise.race(y),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ue=()=>{if(Pr&&Dr)return Dr;throw new Error("WebAssembly is not initialized yet.")}}),$t,Ur,Re,si=T(()=>{Wt(),$t=(e,t)=>{let r=Ue(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Ur=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")Ur(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Re=e=>{let t=Ue(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),nn,Ea=T(()=>{Wt(),si(),nn=e=>{let t=Ue(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let a=0;return e?.tag!==void 0&&(a=$t(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&Re("Can't create run options."),e?.extra!==void 0&&Ur(e.extra,"",new WeakSet,(s,o)=>{let u=$t(s,i),l=$t(o,i);t._OrtAddRunConfigEntry(r,u,l)!==0&&Re(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),an,sn,on,cr,un,ln,Ta=T(()=>{Wt(),si(),an=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},sn=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},on=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},cr=(e,t,r,i)=>{let n=$t(t,i),a=$t(r,i);Ue()._OrtAddSessionConfigEntry(e,n,a)!==0&&Re(`Can't set a session config entry: ${t} - ${r}.`)},un=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let p=n?.deviceType;p&&cr(e,"deviceType",p,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let p=n;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);cr(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=$t(a,r),u=s.length,l=0,c=0;if(u>0){l=Ue()._malloc(u*Ue().PTR_SIZE),r.push(l),c=Ue()._malloc(u*Ue().PTR_SIZE),r.push(c);for(let p=0;p<u;p++)Ue().setValue(l+p*Ue().PTR_SIZE,s[p][0],"*"),Ue().setValue(c+p*Ue().PTR_SIZE,s[p][1],"*")}await Ue()._OrtAppendExecutionProvider(e,o,l,c,u)!==0&&Re(`Can't append execution provider: ${a}.`)}},ln=async e=>{let t=Ue(),r=0,i=[],n=e||{};on(n);try{let a=an(n.graphOptimizationLevel??"all"),s=sn(n.executionMode??"sequential"),o=typeof n.logId=="string"?$t(n.logId,i):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=n.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let c=typeof n.optimizedModelFilePath=="string"?$t(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,u,l,c),r===0&&Re("Can't create session options."),n.executionProviders&&await un(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);cr(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[p,m]of Object.entries(n.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let g=$t(p,i);t._OrtAddFreeDimensionOverride(r,g,m)!==0&&Re(`Can't set a free dimension override: ${p} - ${m}.`)}return n.extra!==void 0&&Ur(n.extra,"",new WeakSet,(p,m)=>{cr(r,p,m,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Re("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),Gt,jt,Ht,oi,ui,li,di,Ci,Me=T(()=>{Gt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ht=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},oi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ui=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},li=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",di=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ci=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),pi,dn=T(()=>{ne(),pi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await n.read();if(o)break;let l=u.byteLength;new Uint8Array(a,s,l).set(u),s+=l}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),pn,Oi,Ai,Tr,zi,Ri,Ye,Qt=T(()=>{Me(),pn=["V","I","W","E","F"],Oi=(e,t)=>{console.log(`[${pn[e]},${new Date().toISOString()}]${t}`)},zi=(e,t)=>{Ai=e,Tr=t},Ri=(e,t)=>{let r=ui(e),i=ui(Ai);r>=i&&Oi(r,typeof t=="function"?t():t)},Ye=(...e)=>{Tr&&Ri(...e)}}),Bi,kr,K,Gr,Mi,cn,fr,Be=T(()=>{Bi=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},kr=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=Bi.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let u=i-o<0?1:e[i-o],l=n-o<0?1:t[n-o];if(u!==l&&u>1&&l>1)return;let c=Math.max(u,l);if(u&&l)s[a-o]=Math.max(u,l);else{if(c>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},K=class ya{static size(t){return ya.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ya.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ya.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Gr=class qn{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)qn.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],i[u],n[u],a,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return qn.computeShapeHelper(t,r,u,i,n,a,s,o),u}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return qn.computeShapeHelper(!1,t,u,i,n,a,s,o),u}static computeShapeHelper(t,r,i,n,a,s,o,u){if(t)for(let l=0;l<r.length-2;l++)i.push(1);else for(let l=0;l<r.length-2;l++)i.push(qn.adjustPadAndReturnShape(r[l+2],n[l],a[l],s[l],o,l,l+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,n,a,s,o,u){let l=i*(n-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(u==="SAME_LOWER"?(c+1)/2:c/2),a[o]=c-a[s],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-l)/r+1)}},Mi=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!kr.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},cn=-34028234663852886e22,fr=34028234663852886e22}),Ir,jr=T(()=>{Me(),Ir=(e,t)=>new(oi(t))(e)}),Nr,Hr,ci,fi,hr,Cr,Di,Pi,Ui,fn,hn,Zn=T(()=>{Me(),Qt(),Nr=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Hr=(e,t)=>{if(t==="int32")return e;let r=Nr.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(oi(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let u=a[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},ci=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},fi=1,hr=()=>fi++,Cr=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Di=(e,t)=>{let r=Nr.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},Pi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Di(this.dataType,this.tensorShape)}destroy(){Ye("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=ci(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Ui=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=Cr.get(t),!s||a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);Ye("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Di(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Hr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ye("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?ci(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},fn=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=hr();return this.tensorTrackersById.set(e,new Ui(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){Ye("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ye("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=hr(),s=new Pi({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new Ui(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[l,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){Ye("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Ye("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new Pi({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},hn=(...e)=>new fn(...e)}),Kr,mn,gn,yn=T(()=>{Me(),Wt(),jr(),Zn(),Qt(),Kr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),mn=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},gn=class{constructor(e){this.tensorManager=hn(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,zi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ye("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ye("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Ye("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>mn(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ye("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=Kr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){Ye("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Kr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!Ue().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ye("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Ir(r,t)}}registerMLTensor(e,t,r,i){let n=Kr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return Ye("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=a.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(l);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case"int32":c=new Int32Array(l);break;case"uint32":c=new Uint32Array(l);break;case"int64":if(s){let p=Hr(new Uint8Array(l),"int64");c=new Int32Array(p.buffer),n.dataType="int32"}else c=new BigInt64Array(l);break;case"uint64":c=new BigUint64Array(l);break;case"int8":c=new Int8Array(l);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return Ye("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=Kr.get(Gt(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),Ni=T(()=>{}),Li,Fi,hi,qi,Vi,Wi,wn,_n,Xn,ka=T(()=>{Qt(),Ni(),Li=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Fi=[],hi=e=>Math.ceil(Number(e)/16)*16,qi=e=>{for(let t=0;t<Fi.length;t++){let r=Fi[t];if(e<=r)return r}return Math.ceil(e/16)*16},Vi=1,Wi=()=>Vi++,wn=async(e,t,r,i)=>{let n=hi(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},_n=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Li)Fi.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=hi(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,n)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),o.destroy(),Ye("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=hi(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Wi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ye("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=qi(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Wi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Ye("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ye("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await wn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Li.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ye("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Xn=(...e)=>new _n(...e)}),h,_,k=T(()=>{h=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},_=e=>new h(e)}),B,z,V,L,N,q,ae,le,te,Z,Ee,F,pe,ht,je,Te,He,ve=T(()=>{Me(),Be(),B=64,z=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},V=(e,t=1)=>{let r=z(e,t);return typeof r=="string"?r:r[0]},L=(e,t=1)=>{let r=z(e,t);return typeof r=="string"?r:r[1]},N=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:K.computeStrides(r)})}),t},q=e=>e%4===0?4:e%2===0?2:1,ae=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,le=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,te=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Z=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Ee=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=z(t,n),c=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],m={indices:u,value:c,storage:p,tensor:t},g=oe=>typeof oe=="string"?oe:`${oe}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},x=a?"uniforms.":"",C=`${x}${e}_shape`,S=`${x}${e}_strides`,$="";for(let oe=0;oe<s-1;oe++)$+=`
    let dim${oe} = current / ${Z(S,oe,s)};
    let rest${oe} = current % ${Z(S,oe,s)};
    indices[${oe}] = dim${oe};
    current = rest${oe};
    `;$+=`indices[${s-1}] = current;`;let R=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${$}
    return indices;
  }`,I=oe=>(y.offsetToIndices=!0,s<2?oe:`o2i_${e}(${oe})`),U=[];if(s>=2)for(let oe=s-1;oe>=0;oe--)U.push(`${Z(S,oe,s)} * (indices[${oe}])`);let H=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${U.join("+")};
  }`,G=oe=>(y.indicesToOffset=!0,s<2?oe:`i2o_${e}(${oe})`),ee=(...oe)=>s===0?"0u":`${m.indices}(${oe.map(g).join(",")})`,de=(oe,be)=>s<2?`${oe}`:`${Z(oe,be,s)}`,ye=(oe,be,We)=>s<2?`${oe}=${We};`:`${Z(oe,be,s)}=${We};`,Ze={},Ce=(oe,be)=>{y.broadcastedIndicesToOffset=!0;let We=`${be.name}broadcastedIndicesTo${e}Offset`;if(We in Ze)return`${We}(${oe})`;let st=[];for(let vr=s-1;vr>=0;vr--){let zr=be.indicesGet("outputIndices",vr+be.rank-s);st.push(`${de(S,vr)} * (${zr} % ${de(C,vr)})`)}return Ze[We]=`fn ${We}(outputIndices: ${be.type.indices}) -> u32 {
             return ${st.length>0?st.join("+"):"0u"};
           }`,`${We}(${oe})`},De=(oe,be)=>(()=>{if(m.storage===m.value)return`${e}[${oe}]=${be};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${oe}]=vec2<u32>(u32(${be}), select(0u, 0xFFFFFFFFu, ${be} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${oe}]=vec2<u32>(u32(${be}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${oe}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${be}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),it=oe=>(()=>{if(m.storage===m.value)return`${e}[${oe}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${oe}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${oe}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${oe}] & 0xFFu), bool(${e}[${oe}] & 0xFF00u), bool(${e}[${oe}] & 0xFF0000u), bool(${e}[${oe}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),we=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${c} {
    return ${it(`i2o_${e}(indices)`)};
  }`,ke=s<2?"":(()=>{let oe=o.map(We=>`d${We}: u32`).join(", "),be=o.map(We=>`d${We}`).join(", ");return`
  fn get_${e}(${oe}) -> ${c} {
    return get_${e}ByIndices(${ee(be)});
  }`})(),Xe=(...oe)=>{if(oe.length!==s)throw new Error(`indices length must be ${s}`);let be=oe.map(g).join(",");return s===0?it("0u"):s===1?it(be[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${be})`)},Ve=oe=>s<2?it(oe):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${oe})`),Le=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${c}) {
    ${De(`i2o_${e}(indices)`,"value")}
  }`,at=s<2?"":(()=>{let oe=o.map(We=>`d${We}: u32`).join(", "),be=o.map(We=>`d${We}`).join(", ");return`
  fn set_${e}(${oe}, value: ${c}) {
    set_${e}ByIndices(${ee(be)}, value);
  }`})();return{impl:()=>{let oe=[],be=!1;return y.offsetToIndices&&(oe.push(R),be=!0),y.indicesToOffset&&(oe.push(H),be=!0),y.broadcastedIndicesToOffset&&(Object.values(Ze).forEach(We=>oe.push(We)),be=!0),y.set&&(oe.push(at),be=!0),y.setByIndices&&(oe.push(Le),be=!0),y.get&&(oe.push(ke),be=!0),y.getByIndices&&(oe.push(we),be=!0),!a&&be&&oe.unshift(`const ${C} = ${m.indices}(${r.join(",")});`,`const ${S} = ${m.indices}(${K.computeStrides(r).join(",")});`),oe.join(`
`)},type:m,offsetToIndices:I,indicesToOffset:G,broadcastedIndicesToOffset:Ce,indices:ee,indicesGet:de,indicesSet:ye,set:(...oe)=>{if(oe.length!==s+1)throw new Error(`indices length must be ${s}`);let be=oe[s];if(typeof be!="string")throw new Error("value must be string");let We=oe.slice(0,s).map(g).join(",");return s===0?De("0u",be):s===1?De(We[0],be):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${We}, ${be})`)},setByOffset:De,setByIndices:(oe,be)=>s<2?De(oe,be):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${oe}, ${be});`),get:Xe,getByOffset:it,getByIndices:Ve,usage:i,name:e,strides:S,shape:C,rank:s}},F=(e,t,r,i=1)=>Ee(e,t,r,"input",i),pe=(e,t,r,i=1)=>Ee(e,t,r,"output",i),ht=(e,t,r)=>Ee(e,t,r,"atomicOutput",1),je=(e,t,r,i=1)=>Ee(e,t,r,"internal",i),Te=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=B){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},He=(e,t)=>new Te(e,t)}),Mt,Pt,Or,Zr,Gi,bn,bt,ar,vn,Ke=T(()=>{Me(),Be(),k(),ve(),Mt=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Pt=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Or=(e,t)=>K.sortBasedOnPerm(e,Pt(e.length,t)),Zr=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},Gi=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},bn=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},bt=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Pt(i,t),a=Or(e.dims,n),s=e.dims,o=a,u=i<2||bn(n,e.dims),l;if(u)return l=y=>{let x=F("input",r,s,4),C=pe("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,C)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=K.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:l};let{newShape:c,newPerm:p}=Gi(e.dims,n),m=K.areEqual(p,[2,3,1]),g=K.areEqual(p,[3,1,2]);if(c.length===2||m||g){s=m?[c[0],c[1]*c[2]]:g?[c[0]*c[1],c[2]]:c,o=[s[1],s[0]];let y=16;return l=x=>{let C=F("a",r,s.length),S=pe("output",r,o.length);return`
  ${x.registerUniform("output_size","u32").declareVariables(C,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${y+1}>, ${y}>;
  ${x.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${C.getByIndices(`${C.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${S.setByIndices(`${S.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let x=K.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:x},...N(s,o)]}},getShaderSource:l}}return l=y=>{let x=F("a",r,s.length),C=pe("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,C)}

  ${Zr(n,i,x,C)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${C.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${C.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=K.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...N(s,o)]}},getShaderSource:l}},ar=(e,t)=>{Mt(e.inputs,t.perm),e.compute(bt(e.inputs[0],t.perm))},vn=e=>_({perm:e.perm})}),Yt,Qn,mr,mi,Tt,Ft,ji,gi,$n,Yn,zt,gr,Xr,kt,vt,sr,Jn,ea,Ks,Zs,Xs,Lf=T(()=>{Me(),Be(),ve(),Ca(),Ke(),Yt={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Qn={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},mr={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},mi={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Tt=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Ft=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},ji=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},gi=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},$n=(e,t)=>{let r=[];if(!gi(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Yn=(e,t,r,i,n,a,s)=>{let o=r[0].dims,u=K.size(a),l=K.size(s),c=F("_A",r[0].dataType,o),p=pe("output",n,a),m=64;u===1&&(m=256);let g=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,y=x=>`
        ${x.registerUniform("reduceSize","u32").declareVariables(c,p)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${x.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${mr[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Yt[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Qn[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${i==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${mi[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},zt=(e,t,r,i)=>{let n=e.inputs.length===1?r:Ia(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((g,y)=>y));let s=K.normalizeAxes(a,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=$n(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(bt(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=Tt(o.length,u.dims.length));let[c,p]=Ft(u.dims,o),m=c;n.keepDims&&(m=ji(c,s)),e.compute(Yn(t,n.cacheKey,[u],i,e.inputs[0].dataType,m,p),{inputs:[u]})},gr=(e,t)=>{zt(e,"ReduceMeanShared",t,"mean")},Xr=(e,t)=>{zt(e,"ReduceL1Shared",t,"l1")},kt=(e,t)=>{zt(e,"ReduceL2Shared",t,"l2")},vt=(e,t)=>{zt(e,"ReduceLogSumExpShared",t,"logSumExp")},sr=(e,t)=>{zt(e,"ReduceMaxShared",t,"max")},Jn=(e,t)=>{zt(e,"ReduceMinShared",t,"min")},ea=(e,t)=>{zt(e,"ReduceProdShared",t,"prod")},Ks=(e,t)=>{zt(e,"ReduceSumShared",t,"sum")},Zs=(e,t)=>{zt(e,"ReduceSumSquareShared",t,"sumSquare")},Xs=(e,t)=>{zt(e,"ReduceLogSumShared",t,"logSum")}}),yr,Qs,ta,Ia,wr,Ys,Js,eo,to,ro,io,no,ao,so,oo,_r,uo,lo,po,co,fo,ho,mo,go,yo,wo,Ca=T(()=>{Me(),Be(),k(),ve(),Lf(),yr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Qs=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],ta=(e,t,r,i,n,a,s=!1,o=!1)=>{let u=[],l=r[0].dims,c=l.length,p=K.normalizeAxes(n,c),m=!o&&p.length===0;l.forEach((x,C)=>{m||p.indexOf(C)>=0?s&&u.push(1):u.push(x)});let g=u.length,y=K.size(u);return{name:e,shaderCache:t,getShaderSource:x=>{let C=[],S=F("_A",r[0].dataType,c),$=pe("output",a,g),R=i(S,$,p),I=R[2];for(let U=0,H=0;U<c;U++)m||p.indexOf(U)>=0?(s&&H++,I=`for(var j${U}: u32 = 0; j${U} < ${l[U]}; j${U}++) {
                  ${R[2].includes("last_index")?`let last_index = j${U};`:""}
                  ${S.indicesSet("input_indices",U,`j${U}`)}
                  ${I}
                }`):(C.push(`${S.indicesSet("input_indices",U,$.indicesGet("output_indices",H))};`),H++);return`

        ${x.registerUniform("output_size","u32").declareVariables(S,$)}

        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${S.type.indices};
          let output_indices = ${$.offsetToIndices("global_idx")};

          ${C.join(`
`)}
          ${R[0]}       // init ops for reduce max/min
          ${R[1]}
          ${I}
          ${R[3]}
          ${R.length===4?$.setByOffset("global_idx","value"):R.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...N(l,u)]})}},Ia=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),_({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},wr=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:Ia(n,r);e.compute(ta(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?Qs:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Ys=(e,t)=>{yr(e.inputs),wr(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Js=(e,t)=>{yr(e.inputs),wr(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},eo=(e,t)=>{yr(e.inputs),wr(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},to=(e,t)=>{yr(e.inputs),wr(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},ro=(e,t)=>{yr(e.inputs),wr(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},io=(e,t)=>{yr(e.inputs),wr(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},no=(e,t)=>{yr(e.inputs),wr(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},ao=(e,t)=>{yr(e.inputs),wr(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},so=(e,t)=>{yr(e.inputs),wr(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},oo=(e,t)=>{yr(e.inputs),wr(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},_r=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},uo=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):gr(e,t)},lo=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Js(e,t):Xr(e,t)},po=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):kt(e,t)},co=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):vt(e,t)},fo=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):sr(e,t)},ho=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):Jn(e,t)},mo=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):ea(e,t)},go=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Ks(e,t)},yo=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Zs(e,t)},wo=(e,t)=>{_r(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ys(e,t):Xs(e,t)}}),Oa,_o,bo,Aa,Ff=T(()=>{Me(),k(),Ca(),Oa=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},_o=(e,t)=>{Oa(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ta("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},bo=(e,t)=>{Oa(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(ta("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Aa=e=>_(e)}),vo,ra,$o,xo,So,xn,Eo,To,za=T(()=>{Me(),Be(),Ni(),ve(),vo=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],l=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=n.dims[0]/3,m=p,g=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let R of t.qkvHiddenSizes)if(R%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let y=l;if(p!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==p+m+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let x=0;if(s){if(m!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(x=s.dims[3])}let C=y+x,S=-1,$=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==C)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:x,kvSequenceLength:y,totalSequenceLength:C,maxSequenceLength:S,inputHiddenSize:c,hiddenSize:p,vHiddenSize:g,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ra=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,$o=(e,t,r,i,n,a,s,o)=>{let u=q(s?1:a),l=64,c=a/u;c<l&&(l=32);let p=Math.ceil(a/u/l),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:p}],g=V(e.dataType,u),y=L(1,u),x=["type"];s&&x.push("type"),o&&x.push("type");let C=S=>{let $=pe("x",e.dataType,e.dims,u),R=[$],I=s?F("seq_lens",s.dataType,s.dims):void 0;I&&R.push(I);let U=o?F("total_sequence_length_input",o.dataType,o.dims):void 0;U&&R.push(U);let H=L(e.dataType),G=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${S.registerUniforms(G).declareVariables(...R)}
  ${S.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ra(I,U,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${H}(1.0) / ${H}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${H}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${g};${u}`,inputDependencies:x},getShaderSource:C,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:m})}},xo=(e,t,r,i,n,a,s,o,u)=>{let l=s+a.kvSequenceLength,c=[a.batchSize,a.numHeads,a.sequenceLength,l],p=e>1&&i,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,g=p?[a.batchSize,m,l,a.headSize]:void 0,y=a.nReps?a.nReps:1,x=a.scale===0?1/Math.sqrt(a.headSize):a.scale,C=q(a.headSize),S=a.headSize/C,$=12,R={x:Math.ceil(l/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},I=[{type:12,data:a.sequenceLength},{type:12,data:S},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:x},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:y}],U=p&&i&&K.size(i.dims)>0,H=["type","type"];U&&H.push("type"),n&&H.push("type"),o&&H.push("type"),u&&H.push("type");let G=[{dims:c,dataType:t.dataType,gpuDataType:0}];p&&G.push({dims:g,dataType:t.dataType,gpuDataType:0});let ee=de=>{let ye=F("q",t.dataType,t.dims,C),Ze=F("key",r.dataType,r.dims,C),Ce=[ye,Ze];if(U){let Le=F("past_key",i.dataType,i.dims,C);Ce.push(Le)}n&&Ce.push(F("attention_bias",n.dataType,n.dims));let De=o?F("seq_lens",o.dataType,o.dims):void 0;De&&Ce.push(De);let it=u?F("total_sequence_length_input",u.dataType,u.dims):void 0;it&&Ce.push(it);let we=pe("output",t.dataType,c),ke=[we];p&&ke.push(pe("present_key",t.dataType,g,C));let Xe=L(1,C),Ve=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${ye.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${ye.type.storage}, ${$*$}>;
  ${de.registerUniforms(Ve).declareVariables(...Ce,...ke)}
  ${de.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ra(De,it,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${U&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Xe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${U&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Xe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(C){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${C}`)}})()};
        output[outputIdx] = ${we.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${C};${n!==void 0};${i!==void 0};${e}`,inputDependencies:H},getRunData:()=>({outputs:G,dispatchGroup:R,programUniforms:I}),getShaderSource:ee}},So=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let u=a+n.kvSequenceLength,l=n.nReps?n.nReps:1,c=n.vHiddenSize*l,p=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,g=p?[n.batchSize,m,u,n.headSize]:void 0,y=[n.batchSize,n.sequenceLength,c],x=12,C={x:Math.ceil(n.vHeadSize/x),y:Math.ceil(n.sequenceLength/x),z:n.batchSize*n.numHeads},S=[{type:12,data:n.sequenceLength},{type:12,data:u},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:l}],$=p&&i&&K.size(i.dims)>0,R=["type","type"];$&&R.push("type"),s&&R.push("type"),o&&R.push("type");let I=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&I.push({dims:g,dataType:t.dataType,gpuDataType:0});let U=H=>{let G=F("probs",t.dataType,t.dims),ee=F("v",r.dataType,r.dims),de=[G,ee];$&&de.push(F("past_value",i.dataType,i.dims));let ye=s?F("seq_lens",s.dataType,s.dims):void 0;s&&de.push(ye);let Ze=o?F("total_sequence_length_input",o.dataType,o.dims):void 0;o&&de.push(Ze);let Ce=[pe("output",t.dataType,y)];p&&Ce.push(pe("present_value",t.dataType,g));let De=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;
  var<workgroup> tileQ: array<${G.type.value}, ${x*x}>;
  var<workgroup> tileV: array<${G.type.value}, ${x*x}>;
  ${H.registerUniforms(De).declareVariables(...de,...Ce)}
  ${H.mainStart([x,x,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ra(ye,Ze,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${G.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${$&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:R},getRunData:()=>({outputs:I,dispatchGroup:C,programUniforms:S}),getShaderSource:U}},xn=(e,t,r,i,n,a,s,o,u,l,c=void 0,p=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),g=m>1?l.pastSequenceLength:0,y=g+l.kvSequenceLength,x=u&&K.size(u.dims)>0?u:void 0,C=[t,r];m>1&&s&&K.size(s.dims)>0&&C.push(s),x&&C.push(x),c&&C.push(c),p&&C.push(p);let S=e.compute(xo(m,t,r,s,x,l,g,c,p),{inputs:C,outputs:m>1?[-1,1]:[-1]})[0];e.compute($o(S,l.batchSize,l.numHeads,g,l.sequenceLength,y,c,p),{inputs:c&&p?[S,c,p]:[S],outputs:[]});let $=[S,i];m>1&&o&&K.size(o.dims)>0&&$.push(o),c&&$.push(c),p&&$.push(p),e.compute(So(m,S,i,o,l,g,c,p),{inputs:$,outputs:m>1?[0,2]:[0]})},Eo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=p=>{let m=pe("output_q",u[0].dataType,r),g=pe("output_k",u[0].dataType,r),y=pe("output_v",u[0].dataType,r),x=F("input",u[0].dataType,u[0].dims),C=F("weight",u[1].dataType,u[1].dims),S=F("bias",u[2].dataType,u[2].dims),$=x.type.storage,R=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${$}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${$}, ${s*s}>;
  var<workgroup> tileWeightK: array<${$}, ${s*s}>;
  var<workgroup> tileWeightV: array<${$}, ${s*s}>;
  ${p.registerUniforms(R).declareVariables(x,C,S,m,g,y)}
  ${p.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:c},{inputs:u,outputs:[-1,-1,-1]})},To=(e,t)=>{let r=vo(e.inputs,t),[i,n,a]=Eo(e,r);return xn(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),ko,Io,Co,Oo,qf=T(()=>{X(),Me(),Be(),k(),ve(),ko=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,u)=>{if(o!==i[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Io=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?q(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,u=K.size(a)/s,l=i,c=l?a.length:a,p=F("x",e[0].dataType,e[0].dims,s),m=F("scale",e[1].dataType,e[1].dims,o),g=F("bias",e[2].dataType,e[2].dims,o),y=F("inputMean",e[3].dataType,e[3].dims,o),x=F("inputVar",e[4].dataType,e[4].dims,o),C=pe("y",e[0].dataType,c,s),S=()=>{let R="";if(i)R=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")R=`
            ${C.indicesSet("outputIndices","0","0")}
            let cOffset = ${C.indicesToOffset("outputIndices")};`;else{R=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let I=1;I<m.rank;I++)R+=`cIndices[${I}] = outputIndices[${I}];`;R+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return R},$=R=>`
  const epsilon = ${r};
  ${R.registerUniform("outputSize","u32").declareVariables(p,m,g,y,x,C)}
  ${R.mainStart()}
  ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${C.offsetToIndices(`global_idx * ${s}`)};
    ${S()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${x.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${C.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...N(a)]:[{type:12,data:u}]})}},Co=e=>_(e),Oo=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Co({...t,outputCount:i});if(me.webgpu.validateInputContent&&ko(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Io(r,n))}}),Ao,zo,Ro,Vf=T(()=>{Be(),ve(),Ao=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},zo=e=>{let t=e[0].dims,r=e[0].dims[2],i=K.size(t)/4,n=e[0].dataType,a=F("input",n,t,4),s=F("bias",n,[r],4),o=F("residual",n,t,4),u=pe("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const channels = ${r}u / 4;
  ${l.declareVariables(a,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Ro=e=>{Ao(e.inputs),e.compute(zo(e.inputs))}}),Bo,rt,Mo,Do,Po,Uo,No,Lo,Fo,qo,Vo,Wo,Go,jo,Ho,Ko,Sn,Zo,ia,Xo,Qo,Yo,Jo,eu,tu,ru,iu,nu,au,su,ou,uu,lu,du,pu,Ra,cu,Ba,Ma,fu,hu,mu,gu,yu,wu,Da=T(()=>{Me(),Be(),k(),ve(),Bo=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),u="";typeof n=="string"?u=`${n}(a)`:u=n("a");let l=F("inputData",r,[o],4),c=pe("outputData",i,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(l,c)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",u)}
  }`},rt=(e,t,r,i,n,a=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:l=>Bo(l,K.size(e.dims),e.dataType,a,r,i,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(K.size(l[0].dims)/64/4)},programUniforms:u})}},Mo=e=>{e.compute(rt(e.inputs[0],"Abs","abs"))},Do=e=>{e.compute(rt(e.inputs[0],"Acos","acos"))},Po=e=>{e.compute(rt(e.inputs[0],"Acosh","acosh"))},Uo=e=>{e.compute(rt(e.inputs[0],"Asin","asin"))},No=e=>{e.compute(rt(e.inputs[0],"Asinh","asinh"))},Lo=e=>{e.compute(rt(e.inputs[0],"Atan","atan"))},Fo=e=>{e.compute(rt(e.inputs[0],"Atanh","atanh"))},qo=e=>_(e),Vo=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(rt(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Wo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return _({min:t,max:r})},Go=(e,t)=>{let r=t||Wo(e.inputs),i=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},jo=e=>{e.compute(rt(e.inputs[0],"Ceil","ceil"))},Ho=e=>{e.compute(rt(e.inputs[0],"Cos","cos"))},Ko=e=>{e.compute(rt(e.inputs[0],"Cosh","cosh"))},Sn=e=>_(e),Zo=(e,t)=>{let r=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ia=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Xo=e=>{let t=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ia(t)))},Qo=e=>{e.compute(rt(e.inputs[0],"Exp","exp"))},Yo=e=>{e.compute(rt(e.inputs[0],"Floor","floor"))},Jo=e=>{let t=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ia(t)))},eu=(e,t)=>{let r=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},tu=e=>{e.compute(rt(e.inputs[0],"Not",t=>`!${t}`))},ru=e=>{e.compute(rt(e.inputs[0],"Neg",t=>`-${t}`))},iu=e=>{e.compute(rt(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},nu=e=>{let t=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},au=e=>{e.compute(rt(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},su=e=>_(e),ou=(e,t)=>{let r=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},uu=e=>{e.compute(rt(e.inputs[0],"Sin","sin"))},lu=e=>{e.compute(rt(e.inputs[0],"Sinh","sinh"))},du=e=>{e.compute(rt(e.inputs[0],"Sqrt","sqrt"))},pu=e=>{e.compute(rt(e.inputs[0],"Tan","tan"))},Ra=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,cu=e=>{e.compute(rt(e.inputs[0],"Tanh",Ra))},Ba=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ra("v")};
}
`,Ma=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,fu=e=>{let t=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"FastGelu",Ma,Ba(t),void 0,e.inputs[0].dataType))},hu=(e,t)=>{let r=L(e.inputs[0].dataType);return e.compute(rt(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},mu=e=>{e.compute(rt(e.inputs[0],"Log","log"))},gu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,yu=e=>`quick_gelu_impl(${e})`,wu=(e,t)=>{let r=L(e.inputs[0].dataType);e.compute(rt(e.inputs[0],"QuickGelu",yu,gu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),_u,bu,vu,Wf=T(()=>{Be(),ve(),Da(),_u=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=F("input",e[0].dataType,e[0].dims,4),i=F("bias",e[0].dataType,[e[0].dims[2]],4),n=pe("output",e[0].dataType,t,4),a=K.size(t)/4,s=V(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${ia(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},vu=e=>{_u(e.inputs),e.compute(bu(e.inputs))}}),$u,xu,br,Su,Eu,Tu,ku,Iu,Cu,Ou,Au,zu,Ru,Gf=T(()=>{Me(),Be(),ve(),$u=(e,t,r,i,n,a,s,o,u,l,c,p)=>{let m,g;typeof o=="string"?m=g=($,R)=>`${o}((${$}),(${R}))`:typeof o=="function"?m=g=o:(m=o.scalar,g=o.vector);let y=pe("outputData",c,i.length,4),x=F("aData",u,t.length,4),C=F("bData",l,r.length,4),S;if(n)if(a){let $=K.size(t)===1,R=K.size(r)===1,I=t.length>0&&t[t.length-1]%4===0,U=r.length>0&&r[r.length-1]%4===0;$||R?S=y.setByOffset("global_idx",g($?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"),R?`${C.type.value}(${C.getByOffset("0")}.x)`:C.getByOffset("global_idx"))):S=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${x.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${C.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",g(s||I?x.getByOffset("offsetA / 4u"):`${x.type.value}(${x.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||U?C.getByOffset("offsetB / 4u"):`${C.type.value}(${C.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=y.setByOffset("global_idx",g(x.getByOffset("global_idx"),C.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(R,I,U="")=>{let H=`aData[indexA${I}][componentA${I}]`,G=`bData[indexB${I}][componentB${I}]`;return`
            let outputIndices${I} = ${y.offsetToIndices(`global_idx * 4u + ${I}u`)};
            let offsetA${I} = ${x.broadcastedIndicesToOffset(`outputIndices${I}`,y)};
            let offsetB${I} = ${C.broadcastedIndicesToOffset(`outputIndices${I}`,y)};
            let indexA${I} = offsetA${I} / 4u;
            let indexB${I} = offsetB${I} / 4u;
            let componentA${I} = offsetA${I} % 4u;
            let componentB${I} = offsetB${I} % 4u;
            ${R}[${I}] = ${U}(${m(H,G)});
          `};c===9?S=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:S=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(x,C,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},xu=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),l=!K.areEqual(o,u),c=o,p=K.size(o),m=!1,g=!1,y=[l];if(l){let x=kr.calcShape(o,u,!1);if(!x)throw new Error("Can't perform binary op on the given tensors");c=x.slice(),p=K.size(c);let C=K.size(o)===1,S=K.size(u)===1,$=o.length>0&&o[o.length-1]%4===0,R=u.length>0&&u[u.length-1]%4===0;y.push(C),y.push(S),y.push($),y.push(R);let I=1;for(let U=1;U<c.length;U++){let H=o[o.length-U],G=u[u.length-U];if(H===G)I*=H;else break}I%4===0?(g=!0,m=!0):(C||S||$||R)&&(m=!0)}else m=!0;return y.push(m),{name:e,shaderCache:{hint:t+y.map(x=>x.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:x=>$u(x,o,u,c,m,l,g,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(c)/4)},...N(o,u,c)]})}},br=(e,t,r,i,n,a)=>{e.compute(xu(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},Su=e=>{br(e,"Add",(t,r)=>`${t}+${r}`)},Eu=e=>{br(e,"Div",(t,r)=>`${t}/${r}`)},Tu=e=>{br(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},ku=e=>{br(e,"Mul",(t,r)=>`${t}*${r}`)},Iu=e=>{let t=F("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;br(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Cu=e=>{br(e,"Sub",(t,r)=>`${t}-${r}`)},Ou=e=>{br(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Au=e=>{br(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},zu=e=>{br(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Ru=e=>{br(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Bu,Mu,Du,Pu,Uu,Nu,jf=T(()=>{Me(),Be(),k(),ve(),Bu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==i.dims[l])throw new Error("non concat dimensions must match")})}})},Mu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Du=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Pu=(e,t,r,i)=>{let n=K.size(r),a=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],c=[{type:12,data:n}];for(let x=0;x<e.length;++x)o+=e[x].dims[t],a[x]=o,l.push(e[x].dims.length),s[x]=F(`input${x}`,i,l[x]),u.push("rank"),c.push({type:12,data:a[x]});for(let x=0;x<e.length;++x)c.push(...N(e[x].dims));c.push(...N(r));let p=pe("output",i,r.length),m=p.indicesGet("indices",t),g=Array.from(Array(a.length).keys()).map(x=>`uniforms.sizeInConcatAxis${x}`).join(","),y=x=>`

  ${(()=>{x.registerUniform("outputSize","u32");for(let C=0;C<e.length;C++)x.registerUniform(`sizeInConcatAxis${C}`,"u32");return x.declareVariables(...s,p)})()}

  ${Mu(a.length,g)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${g});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Du(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:y}},Uu=(e,t)=>{let r=e.inputs,i=r[0].dims,n=K.normalizeAxis(t.axis,i.length);Bu(r,n);let a=i.slice();a[n]=r.reduce((o,u)=>o+(u.dims.length>n?u.dims[n]:0),0);let s=r.filter(o=>K.size(o.dims)>0);e.compute(Pu(s,n,a,r[0].dataType),{inputs:s})},Nu=e=>_({axis:e.axis})}),yi,wi,_i,Pa,bi=T(()=>{Me(),Be(),yi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},wi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},_i=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Pa=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[cn,fr];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ut,Lu,Ua=T(()=>{Ut=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Lu=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Fu,Hf=T(()=>{Fu=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),En,Na,La=T(()=>{Me(),Be(),ve(),bi(),En=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${Z(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,Z(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Na=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],c=s[s.length-1],p=q(l),m=q(c),g=q(u),y=K.size(r)/p/g,x=e.length>2,C=i?i.slice(0,-2):r.slice(0,-2),S=[K.size(C),u,l],$=[{type:12,data:y},{type:12,data:u},{type:12,data:l},{type:12,data:c}];wi(t,$),$.push(...N(C,s,o)),x&&$.push(...N(e[2].dims)),$.push(...N(S));let R=I=>{let U=je("batch_dims",e[0].dataType,C.length),H=F("a",e[0].dataType,s.length,m),G=F("b",e[1].dataType,o.length,p),ee=pe("output",e[0].dataType,S.length,p),de=V(ee.type.tensor),ye=yi(t,ee.type.value,de),Ze=[H,G],Ce="";if(x){let we=n?p:1;Ze.push(F("bias",e[2].dataType,e[2].dims.length,we)),Ce=`${n?`value += bias[col / ${we}];`:`value += ${ee.type.value}(bias[row + i]);`}`}let De=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];_i(t,De);let it=()=>{let we=`var a_data: ${H.type.value};`;for(let ke=0;ke<m;ke++)we+=`
              let b_data${ke} = b[(b_offset + (k + ${ke}) * uniforms.N + col) / ${p}];`;for(let ke=0;ke<g;ke++){we+=`a_data = a[(a_offset + (row + ${ke}) * uniforms.K + k) / ${m}];`;for(let Xe=0;Xe<m;Xe++)we+=`
            values[${ke}] = fma(${G.type.value}(a_data${m===1?"":`[${Xe}]`}), b_data${Xe}, values[${ke}]);
`}return we};return`
  ${I.registerUniforms(De).registerInternalVariables(U).declareVariables(...Ze,ee)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${U.offsetToIndices("batch")};`}

    var a_indices: ${H.type.indices};
    ${En("a_indices",H,H.rank-2,U.rank,"batch_indices")}
    ${H.indicesSet("a_indices",H.rank-2,0)}
    ${H.indicesSet("a_indices",H.rank-1,0)}
    let a_offset = ${H.indicesToOffset("a_indices")};

    var b_indices: ${G.type.indices};
    ${En("b_indices",G,G.rank-2,U.rank,"batch_indices")}
    ${G.indicesSet("b_indices",G.rank-2,0)}
    ${G.indicesSet("b_indices",G.rank-1,0)}
    let b_offset = ${G.indicesToOffset("b_indices")};
    var values: array<${ee.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${it()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${Ce}
      ${ye}
      let cur_indices = ${ee.type.indices}(batch, row + i, col);
      let offset = ${ee.indicesToOffset("cur_indices")};
      ${ee.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${m};${g};${n}`,inputDependencies:x?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:$}),getShaderSource:R}}}),qu,Vu,Fa,qa,Wu,Va,Gu,na,Wa=T(()=>{Me(),Be(),ve(),bi(),La(),Ua(),qu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Vu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Fa=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],c=n?u:a,p=n?a:u,m=c/t[0],g=a/t[1];if(!((n&&m===4&&e[1]===4||!n&&(m===3||m===4))&&c%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${c/m}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${qu(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Vu(n,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},qa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Wu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Va=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],c=e[0]*t[0],p=n?l:a,m=n?a:l;if(!(m%t[1]===0&&p%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let g=m/t[1],y=p/t[0],x=a/t[1],C=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${qa(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${x};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${qa(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Wu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${C}
  }
`},Gu=(e,t,r,i,n=!1)=>{let[a,s,o,u]=i,l=V(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ut(e,l)} {
      var value = ${Ut(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${En("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ut(e,l)} {
      var value = ${Ut(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${En("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ut(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ut(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},na=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),p=K.size(c),m=s[s.length-2],g=s[s.length-1],y=o[o.length-1],x=g%4===0&&y%4===0,C=m<=8?[4,1,1]:[4,4,1],S=[8,8,1],$=[Math.ceil(y/S[0]/C[0]),Math.ceil(m/S[1]/C[1]),Math.ceil(p/S[2]/C[2])],R=x?4:1,I=[...u,m,g/R],U=I.length,H=[...l,g,y/R],G=H.length,ee=[p,m,y/R],de=[{type:6,data:m},{type:6,data:y},{type:6,data:g}];wi(t,de),de.push(...N(c,I,H));let ye=["rank","rank"],Ze=e.length>2;Ze&&(de.push(...N(e[2].dims)),ye.push("rank")),de.push(...N(ee));let Ce=De=>{let it=c.length,we=je("batchDims",e[0].dataType,it,1),ke=V(e[0].dataType),Xe=F("a",e[0].dataType,U,R),Ve=F("b",e[1].dataType,G,R),Le=pe("result",e[0].dataType,ee.length,R),at=[Xe,Ve];if(Ze){let vr=n?R:1;at.push(F("bias",e[2].dataType,e[2].dims.length,vr))}let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];_i(t,oe);let be=V(Le.type.tensor),We=yi(t,Le.type.value,be),st=Gu(R,Ze,We,[we,Xe,Ve,Le],n);return`
  ${De.registerUniforms(oe).registerInternalVariables(we).declareVariables(...at,Le)}
  ${st}
  ${x?Fa(C,S,ke,we):Va(C,S,ke,we)}
                   `};return{name:"MatMul",shaderCache:{hint:`${C};${t.activation};${x};${n}`,inputDependencies:ye},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:de}),getShaderSource:Ce}}}),ju,Hu,Kf=T(()=>{Me(),Qt(),ve(),bi(),Ua(),Hf(),Wa(),ju=(e,t,r,i,n=!1,a,s=4,o=4,u=4,l="f32")=>{let c=de=>{switch(de){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${de} is not supported.`)}},p=de=>{switch(de){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${de} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",x=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",C=e?"row":"col",S=e?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${C} / outWidth;
    let outCol = ${C} % outWidth;

    let WRow = ${S} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${S} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${S} % inChannels;
    var resData = ${Ut(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${x}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,R=e?t&&i?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${Ut(s,l)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${$}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${Ut(s,l)}(0.0);`,I=e?i&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${Ut(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${Ut(o,l)}(0.0);`,U=Ut(u,l),H=Ut(e?s:o,l),G=Ut(e?o:s,l),ee=yi(a,U,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${H} {
      ${e?R:I}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${G} {
      ${e?I:R}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${U}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${Lu(n)}
      ${ee}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Hu=(e,t,r,i,n,a,s,o,u)=>{let l=t.format==="NHWC",c=l?e[0].dims[3]:e[0].dims[1],p=r[0],m=l?r[2]:r[3],g=l?r[1]:r[2],y=l?r[3]:r[1],x=l&&(c%4===0||c%3===0)&&y%4===0,C=l?y:m*g,S=l?m*g:y,$=[8,8,1],R=i<=8?[4,1,1]:[4,4,1],I=[Math.ceil(C/$[0]/R[0]),Math.ceil(S/$[1]/R[1]),Math.ceil(p/$[2]/R[2])];Ye("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${I}`);let U=x?l&&c%4!==0?3:4:1,H=$[1]*R[1],G=$[0]*R[0],ee=Math.max($[0]*U,$[1]),de=i%H===0,ye=n%G===0,Ze=a%ee===0,Ce=x?[U,4,4]:[1,1,1],De=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];wi(t,De),De.push(...N(e[0].dims,e[1].dims));let it=["rank","rank"];s&&(De.push(...N(e[2].dims)),it.push("rank")),De.push(...N(r));let we=ke=>{let Xe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];_i(t,Xe);let Ve=x?4:1,Le=V(e[0].dataType),at=`
      fn setOutputAtIndex(flatIndex : i32, value : ${x?`vec4<${Le}>`:Le}) {
        result[flatIndex] = ${x?`vec4<${Le}>`:Le}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${x?`vec4<${Le}>`:Le}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${x?"/ 4":""}, value);
      }`,oe=F("x",e[0].dataType,e[0].dims.length,U===3?1:U),be=F("w",e[1].dataType,e[1].dims.length,Ve),We=[oe,be],st=pe("result",e[0].dataType,r.length,Ve);if(s){let vr=F("bias",e[2].dataType,e[2].dims.length,Ve);We.push(vr),at+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${x?`vec4<${Le}>`:Le} {
          return bias[coords.${l?"w":"y"}${x?"/ 4":""}];
        }`}return`
        ${Fu("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ke.registerUniforms(Xe).declareVariables(...We,st)}
        ${at}
        ${ju(l,de,ye,Ze,s,t,Ce[0],Ce[1],Ce[2],Le)}
        ${x?Fa(R,$,Le,void 0,!l,ee):Va(R,$,Le,void 0,!l,ee,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${U};${x};${de};${ye};${Ze};${H};${G};${ee}`,inputDependencies:it},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:De}),getShaderSource:we}}}),Ku,Ga,Tn,Zu,ja,Xu,Qu,Yu,Zf=T(()=>{Me(),Qt(),Be(),ve(),bi(),Ua(),Ku=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ga=e=>typeof e=="number"?[e,e,e]:e,Tn=(e,t)=>t<=1?e:e+(e-1)*(t-1),Zu=(e,t,r,i=1)=>{let n=Tn(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},ja=(e,t,r,i,n)=>{n==null&&(n=Zu(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},Xu=(e,t,r,i,n,a,s,o,u,l)=>{let c,p,m,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=ja([t,r,i,1],[o,u,l],1,[n,a,s],e);p=y[0],m=y[1],g=y[2]}else if(Array.isArray(e)){if(!e.every((x,C,S)=>x===S[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=ja([t,r,i,1],[o,u,l],1,[n,a,s],e[0]);p=y[0],m=y[1],g=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/n),m=Math.ceil(r/a),g=Math.ceil(i/s);let y=(p-1)*n+o-t,x=(m-1)*a+u-r,C=(g-1)*s+l-i,S=Math.floor(y/2),$=y-S,R=Math.floor(x/2),I=x-R,U=Math.floor(C/2),H=C-U;c={top:R,bottom:I,left:U,right:H,front:S,back:$}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:p,outHeight:m,outWidth:g}},Qu=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,u,l,c,p;if(s==="channelsLast")[o,u,l,c,p]=e;else if(s==="channelsFirst")[o,p,u,l,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,g,y,x]=t,[C,S,$]=Ga(r),[R,I,U]=Ga(i),H=Tn(g,R),G=Tn(y,I),ee=Tn(x,U),{padInfo:de,outDepth:ye,outHeight:Ze,outWidth:Ce}=Xu(n,u,l,c,C,S,$,H,G,ee),De=a?m*p:m,it=[0,0,0,0,0];return s==="channelsFirst"?it=[o,De,ye,Ze,Ce]:s==="channelsLast"&&(it=[o,ye,Ze,Ce,De]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:c,inChannels:p,outDepth:ye,outHeight:Ze,outWidth:Ce,outChannels:De,padInfo:de,strideDepth:C,strideHeight:S,strideWidth:$,filterDepth:g,filterHeight:y,filterWidth:x,effectiveFilterDepth:H,effectiveFilterHeight:G,effectiveFilterWidth:ee,dilationDepth:R,dilationHeight:I,dilationWidth:U,inShape:e,outShape:it,filterShape:t}},Yu=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((C,S)=>S)},l=[Math.ceil(Ku(u.x.map(C=>r[C]))/o[0]),1,1];Ye("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let c=1,p=K.size(r),m=[{type:12,data:p},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];wi(t,m),m.push(...N(e[0].dims,e[1].dims));let g=["rank","rank"],y=e.length===3;y&&(m.push(...N(e[2].dims)),g.push("rank")),m.push(...N(r));let x=C=>{let S=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];_i(t,S);let $=1,R=V(e[0].dataType),I=F("x",e[0].dataType,e[0].dims.length,c),U=F("W",e[1].dataType,e[1].dims.length,$),H=[I,U],G=pe("result",e[0].dataType,r.length,$),ee="";if(y){let Ze=F("bias",e[2].dataType,e[2].dims.length,$);H.push(Ze),ee+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${R} {
          return bias[${s?Z("coords",4,5):Z("coords",1,5)}];
        }`}let de=Ut(c,R),ye=yi(t,de,R);return`
            ${ee}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${U.getByIndices("aIndices")};
            }
          ${C.registerUniforms(S).declareVariables(...H,G)}
          ${C.mainStart()}
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${G.offsetToIndices("global_idx")};
              let batch = ${Z("coords",0,I.rank)};
              let d2 = ${s?Z("coords",I.rank-1,I.rank):Z("coords",1,I.rank)};
              let xFRCCorner = vec3<u32>(${s?Z("coords",1,I.rank):Z("coords",2,I.rank)},
              ${s?Z("coords",2,I.rank):Z("coords",3,I.rank)},
              ${s?Z("coords",3,I.rank):Z("coords",4,I.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Z("uniforms.x_shape",1,I.rank):Z("uniforms.x_shape",2,I.rank)};
              let xShapeZ = ${s?Z("uniforms.x_shape",2,I.rank):Z("uniforms.x_shape",3,I.rank)};
              let xShapeW = ${s?Z("uniforms.x_shape",3,I.rank):Z("uniforms.x_shape",4,I.rank)};
              let xShapeU = ${s?Z("uniforms.x_shape",4,I.rank):Z("uniforms.x_shape",1,I.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${ye}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${y}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:m}),getShaderSource:x}}}),Ju,el,Xf=T(()=>{Me(),Be(),ve(),bi(),Ju=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],c=l/t.group,p=u&&c>=4?q(l):1,m=K.size(r)/p,g=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];wi(t,g),g.push(...N(s,[o[0],o[1],o[2],o[3]/p]));let y=n?["rank","rank","rank"]:["rank","rank"];g.push(...N([r[0],r[1],r[2],r[3]/p]));let x=C=>{let S=pe("output",e[0].dataType,r.length,p),$=V(S.type.tensor),R=yi(t,S.type.value,$),I=F("x",e[0].dataType,s.length),U=F("w",e[1].dataType,o.length,p),H=[I,U];n&&H.push(F("b",e[2].dataType,e[2].dims,p));let G=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];_i(t,G);let ee=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${I.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${U.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${I.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${U.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${C.registerUniforms(G).declareVariables(...H,S)}

  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${S.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${S.type.value} = ${S.type.value}(0);
    ${ee}
    ${a}
    ${R}
    ${S.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:x}},el=(e,t,r,i)=>{let n=e.length>2,a=q(r[3]),s=q(r[2]),o=K.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],c=[r[0],r[1],r[2],r[3]/a],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];wi(t,p),p.push(...N(u,l,c));let m=(s-1)*t.strides[1]+l[1],g=y=>{let x=pe("output",e[0].dataType,c.length,a),C=V(x.type.tensor),S=yi(t,x.type.value,C),$=F("x",e[0].dataType,u.length,a),R=F("w",e[1].dataType,l.length,a),I=[$,R];n&&I.push(F("b",e[2].dataType,e[2].dims,a));let U=n?"value += b[output_channel];":"",H=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return _i(t,H),`
  ${y.registerUniforms(H).declareVariables(...I,x)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${$.type.value}, ${m}>;
    var values: array<${x.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${R.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${U}
      ${S}
      ${x.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${m};${l[0]};${l[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:g}}}),tl,aa,rl,sa,Ha,Ka,il,nl,Za,Qf=T(()=>{Be(),Kf(),Zf(),Wa(),Xf(),bi(),La(),Ke(),tl=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),u=o.length,l=t[0],c=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),p=o.map((m,g)=>m+i[g]+i[g+u]).map((m,g)=>Math.floor((m-c[g]+n[g])/n[g]));return p.splice(0,0,s),p.splice(a?3:1,0,l),p},aa=[2,3,1,0],rl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},sa=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();Gr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Ha=e=>{let t=Pa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Ka=(e,t,r,i)=>{let n=r.format==="NHWC",a=tl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let H=[t[0]];if(n){let G=e.kernelCustomData.wT??e.compute(bt(t[1],aa),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=G),H.push(G)}else H.push(t[1]);t.length===3&&H.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(el(H,r,a,i),{inputs:H}):e.compute(Ju(H,r,a,i),{inputs:H});return}let s=t.length===3,o=t[0].dims[n?1:2],u=t[0].dims[n?2:3],l=t[0].dims[n?3:1],c=t[1].dims[2],p=t[1].dims[3],m=a[n?1:2],g=a[n?2:3],y=a[n?3:1],x=n&&c===o&&p===u&&r.pads[0]===0&&r.pads[1]===0;if(x||c===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let H=a[0],G,ee,de,ye=[];if(n){let De=e.kernelCustomData.wT??e.compute(bt(t[1],aa),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=De),x){let it=o*u*l;G=t[0].reshape([1,H,it]),ee=De.reshape([1,it,y]),de=[1,H,y]}else G=t[0].reshape([H,o*u,l]),ee=De.reshape([1,l,y]),de=[H,m*g,y];ye.push(G),ye.push(ee)}else G=t[0].reshape([H,l,o*u]),ee=t[1].reshape([1,y,l]),de=[H,y,m*g],ye.push(ee),ye.push(G);s&&ye.push(t[2]);let Ze=de[2],Ce=ye[0].dims[ye[0].dims.length-1];Ze<8&&Ce<8?e.compute(Na(ye,r,a,de,n,i),{inputs:ye}):e.compute(na(ye,r,a,de,n,i),{inputs:ye});return}let C=!0,S=e.kernelCustomData.wT??e.compute(bt(t[1],aa),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=S);let $=[t[0],S];s&&$.push(t[2]);let R=n?m*g:y,I=n?y:m*g,U=c*p*l;e.compute(Hu($,r,a,R,I,U,s,C,i),{inputs:$})},il=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=sa({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);Ka(e,i,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},nl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=sa(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Qu(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(Yu(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Za=(e,t)=>{if(rl(e.inputs,t),e.inputs[0].dims.length===3)il(e,t);else if(e.inputs[0].dims.length===5)nl(e,e.inputs,t);else{let r=sa(t,e.inputs);Ka(e,e.inputs,r)}}}),al,Yf=T(()=>{Me(),Qt(),Be(),ve(),al=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],c=a?q(u):1,p=a&&l===1&&u>=4,m=p?Math.floor(u/4)*4:Math.floor(u/c)*c,g=u-m,y=a?q(l):1,x=a?l===1?c:y:1,C=K.size(n)/y,S=[Math.ceil(C/64),1,1];Ye("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let $=["rank","rank"],R=[t.strides[0],t.strides[1]],I=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],U=[t.dilations[0],t.dilations[1]],H=[I[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),I[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],G=[H[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),H[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],ee=[{type:12,data:C},{type:12,data:R},{type:12,data:I},{type:12,data:U},{type:12,data:H},{type:6,data:G},{type:12,data:m},{type:12,data:u},{type:12,data:l},...N(e[0].dims,e[1].dims)];i&&(ee.push(...N(e[2].dims)),$.push("rank")),ee.push(...N(n));let de=ye=>{let Ze=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:R.length},{name:"filter_dims",type:"u32",length:I.length},{name:"dilations",type:"u32",length:I.length},{name:"effective_filter_dims",type:"u32",length:H.length},{name:"pads",type:"i32",length:G.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Ce=V(e[0].dataType),De=a?1:2,it=a?2:3,we=a?3:1,ke=F("W",e[1].dataType,e[1].dims.length,x),Xe=F("Dy",e[0].dataType,e[0].dims.length,c),Ve=[Xe,ke];i&&Ve.push(F("bias",e[2].dataType,[n[we]].length,y));let Le=pe("result",e[0].dataType,n.length,y),at=()=>{let We="";if(p)c===4?We+=`
        let xValue = ${Xe.getByOffset("x_offset")};
        let wValue = ${ke.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?We+=`
          dotProd = dotProd + dot(vec4<${Ce}>(${Xe.getByOffset("x_offset")}, ${Xe.getByOffset("x_offset + 1u")}), vec4<${Ce}>(${ke.getByOffset("w_offset")}, ${ke.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(We+=`
          dotProd = dotProd + dot(vec4<${Ce}>(${Xe.getByOffset("x_offset")}, ${Xe.getByOffset("x_offset + 1u")}, ${Xe.getByOffset("x_offset + 2u")}, ${Xe.getByOffset("x_offset + 3u")}), vec4<${Ce}>(${ke.getByOffset("w_offset")}, ${ke.getByOffset("w_offset + 1u")}, ${ke.getByOffset("w_offset + 2u")}, ${ke.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(We+=`
                  let xValue = ${a?Xe.getByOffset(`${Xe.indicesToOffset(`${Xe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Xe.get("batch","inputChannel","idyR","idyC")};
        `,c===1)We+=`
          let w_offset = ${ke.indicesToOffset(`${ke.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ke.getByOffset(`w_offset / ${x}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let st=0;st<c;st++)We+=`
            let wValue${st} = ${ke.getByOffset(`${ke.indicesToOffset(`${ke.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${st}, wOutChannel)`)} / ${x}`)};
            dotProd = dotProd + xValue[${st}] * wValue${st};`;return We},oe=()=>{if(g===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let We="";if(c===1){We+="dotProd = dotProd";for(let st=0;st<g;st++)We+=`
            + ${Xe.getByOffset(`x_offset + ${st}`)} * ${ke.getByOffset(`w_offset + ${st}`)}`;We+=";"}else if(c===2){if(g!==2)throw new Error(`Invalid inputChannelsRemainder ${g}.`);We+=`
          let xValue = ${Xe.getByOffset("x_offset")};
          let wValue = ${ke.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return We},be=`
            let outputIndices = ${Le.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${Le.indicesGet("outputIndices",0)};
            let d1 = ${Le.indicesGet("outputIndices",we)};
            let r = ${Le.indicesGet("outputIndices",De)};
            let c = ${Le.indicesGet("outputIndices",it)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Le.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Ce}(dyRCorner) + ${Ce}(wR)) / ${Ce}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Ce}(uniforms.Dy_shape[${De}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Ce}(dyCCorner) + ${Ce}(wC)) / ${Ce}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Ce}(uniforms.Dy_shape[${it}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${Xe.indicesToOffset(`${Xe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${ke.indicesToOffset(`${ke.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${x};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:c}) {
                  ${at()}
                  inputChannel = inputChannel + ${p?4:c};
                }
                ${oe()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${Le.setByOffset("global_idx","value")};
          `;return`
    ${ye.registerUniforms(Ze).declareVariables(...Ve,Le)}
      ${ye.mainStart()}
      ${ye.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${be}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${x}${y}${p}${g}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:ee}),getShaderSource:de}}}),sl,ol,ul,Xa,ll,dl,Qa,pl,cl,Jf=T(()=>{Yf(),bi(),Ke(),sl=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,ol=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},ul=(e,t,r,i,n,a,s,o,u,l)=>{let c=e.length-2,p=l.length===0;u.length<c&&u.push(...Array(c-u.length).fill(0));let m=e[0],g=t[o?3:1]*n;for(let y=0,x=e.length-c-(o?1:0);y<c;++y,++x){let C=e[x],S=p?C*s[y]:l[y],$=sl(C,s[y],a[y],t[x],r[y],S);ol($,i,a,y,y+c),p&&l.push(s[y]*(C-1)+u[y]+(t[x]-1)*r[y]+1-a[y]-a[y+c])}l.splice(0,0,m),l.splice(o?3:1,0,g)},Xa=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,m)=>p*m,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,m)=>p+m,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,m)=>p+m,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}ul(o,r,u,e.autoPad,e.group,n,l,i,s,a);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:u,strides:l}),c},ll=e=>{let t=Pa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),c=e.outputPadding,p=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:c,outputShape:p,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},dl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Qa=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(bt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(al(a,r,i),{inputs:a})},pl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let u=t.outputPadding;u=[0].concat(u);let l=Xa({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:u},i);Qa(e,i,l,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},cl=(e,t)=>{if(dl(e.inputs,t),e.inputs[0].dims.length===3)pl(e,t);else{let r=Xa(t,e.inputs);Qa(e,e.inputs,r)}}}),fl,hl,ml,eh=T(()=>{Me(),Be(),k(),ve(),fl=(e,t,r,i)=>{let n=K.size(t),a=t.length,s=F("input",e,a),o=pe("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=K.normalizeAxis(u,a),c=p=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=Z("uniforms.input_shape","uniforms.axis",a),y=i.reverse?m+(i.exclusive?" + 1":""):"0",x=i.reverse?g:m+(i.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${x};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:l},...N(t,t)]}),getShaderSource:c}},hl=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(fl(i,r,n,t),{inputs:[0]})},ml=e=>{let t=e.exclusive===1,r=e.reverse===1;return _({exclusive:t,reverse:r})}}),gl,yl,wl,_l,bl,th=T(()=>{Me(),Be(),k(),ve(),gl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},yl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},wl=(e,t)=>{let r,i,n,a,s,o,u=t.format==="NHWC",l=t.blocksize,c=t.mode==="DCR";u?([r,i,n,a]=e.dims,s=c?[r,i,n,l,l,a/l**2]:[r,i,n,a/l**2,l,l],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,l,l,a/l**2,i,n]:[r,a/l**2,l,l,i,n],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),m=p.dims.length,g=e.dataType,y=F("a",g,m),x=pe("output",g,m),C=S=>`
  ${S.registerUniform("output_size","u32").declareVariables(y,x)}

  ${yl(o,m,y,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:S=>{let $=u?[r,i*l,n*l,a/l**2]:[r,a/l**2,i*l,n*l],R=K.size($),I=p.dims,U=K.sortBasedOnPerm(I,o);return{outputs:[{dims:$,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(R/64)},programUniforms:[{type:12,data:R},...N(I,U)]}},getShaderSource:C}},_l=(e,t)=>{gl(e.inputs),e.compute(wl(e.inputs[0],t))},bl=e=>_({blocksize:e.blocksize,mode:e.mode,format:e.format})}),oa,kn,Ya,vl,$l,xl,Sl,Ja,El,Tl,kl,rh=T(()=>{Me(),Be(),k(),ve(),oa="[a-zA-Z]|\\.\\.\\.",kn="("+oa+")+",Ya="^"+kn+"$",vl="("+kn+",)*"+kn,$l="^"+vl+"$",xl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Sl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp($l)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let s=e[a].dims.slice();if(!n.match(RegExp(Ya)))throw new Error("Invalid LHS term");let o=this.processTerm(n,!0,s,a);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(kn)))throw new Error("Invalid RHS");i.match(RegExp(oa,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(Ya))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(oa,"g")),l=new xl(i);return u?.forEach((c,p)=>{if(c==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let m=n-u.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let y=String.fromCharCode(48+g);l.addSymbol(y,p+g),this.addSymbol(y,r[o++],i)}}else l.addSymbol(c,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],i)}),l}},Ja=e=>e+"_max",El=(e,t,r,i)=>{let n=e.map(l=>l.length).map((l,c)=>F(`input${c}`,t,l)),a=K.size(i),s=pe("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(l=>!r.rhs.symbolToIndices.has(l)),u=l=>{let c=[],p="var prod = 1.0;",m="var sum = 0.0;",g="sum += prod;",y=[],x=[],C=[],S=[],$=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((I,U)=>{if(r.rhs.symbolToIndices.has(U)){let H=r.rhs.symbolToIndices.get(U)?.[0];H!==void 0&&r.lhs.forEach((G,ee)=>{if(I.inputIndices.includes(ee)){let de=G.symbolToIndices.get(U);if(de===void 0)throw new Error("Invalid symbol error");de.forEach(ye=>{c.push(`${n[ee].indicesSet(`input${ee}Indices`,ye,s.indicesGet("outputIndices",H))}`)})}})}else r.lhs.forEach((H,G)=>{if(I.inputIndices.includes(G)){let ee=H.symbolToIndices.get(U);if(ee===void 0)throw new Error("Invalid symbol error");ee.forEach(de=>{y.push(`${n[G].indicesSet(`input${G}Indices`,de,`${U}`)}`)}),S.push(`prod *= ${n[G].getByIndices(`input${G}Indices`)};`)}}),x.push(`for(var ${U}: u32 = 0; ${U} < uniforms.${Ja(U)}; ${U}++) {`),C.push("}")});let R=$?[...c,`let sum = ${n.map((I,U)=>I.getByIndices(`input${U}Indices`)).join(" * ")};`]:[...c,m,...x,...y,p,...S,g,...C];return`
            ${l.registerUniforms(o.map(I=>({name:`${Ja(I)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((I,U)=>`var input${U}Indices: ${n[U].type.indices};`).join(`
`)}
            ${R.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));l.push({type:12,data:a});let c=e.map((p,m)=>[...N(p)]).reduce((p,m)=>p.concat(m),l);return c.push(...N(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}},getShaderSource:u}},Tl=(e,t)=>{let r=new Sl(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(El(n,e.inputs[0].dataType,r,i))},kl=e=>{let t=e.equation.replace(/\s+/g,"");return _({equation:t})}}),Il,es,Cl,Ol,Al,ih=T(()=>{Me(),Be(),ve(),Il=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},es=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Cl=(e,t)=>e.length>t.length?es(e,t):es(t,e),Ol=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Cl(t,r),n=e[0].dataType,a=n===9||K.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(K.size(i)/o),l=p=>{let m=F("input",n,t.length,s),g=pe("output",n,i.length,o),y;if(n===9){let x=(C,S,$="")=>`
          let outputIndices${S} = ${g.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${m.broadcastedIndicesToOffset(`outputIndices${S}`,g)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${C}[${S}] = ${$}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${x("data",0,"u32")}
        ${x("data",1,"u32")}
        ${x("data",2,"u32")}
        ${x("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",g)};
        let data = ${g.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${g.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(m,g)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},c=[{type:12,data:u},...N(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},Al=e=>{Il(e.inputs),e.compute(Ol(e.inputs),{inputs:[0]})}}),zl,Rl,nh=T(()=>{Me(),Be(),ve(),Da(),zl=e=>{let t=e[0].dataType,r=K.size(e[0].dims),i=K.size(e[1].dims),n=i%4===0,a=s=>{let o=F("x",t,[1],4),u=F("bias",t,[1],4),l=pe("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${u.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,m=n?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(o,u,l)}

    ${Ba(L(t))}

    ${s.mainStart(B)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Ma("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/B/4)}})}},Rl=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?fu(e):e.compute(zl(e.inputs))}}),Bl,Ml,Dl,Pl,ah=T(()=>{Me(),Be(),k(),ve(),Bl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Ml=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=K.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],u=e[0].dataType===9?4:1,l=Math.ceil(K.size(s)/u),c=[{type:12,data:l},{type:6,data:o},{type:12,data:a},...N(e[0].dims,e[1].dims,s)],p=m=>{let g=F("data",e[0].dataType,e[0].dims.length,u),y=F("inputIndices",e[1].dataType,e[1].dims.length),x=pe("output",e[0].dataType,s.length,u),C=$=>{let R=i.length,I=`var indicesIndices${$}  = ${y.type.indices}(0);`;for(let U=0;U<R;U++)I+=`${R>1?`indicesIndices${$}[${U}]`:`indicesIndices${$}`} = ${s.length>1?`outputIndices${$}[uniforms.axis + ${U}]`:`outputIndices${$}`};`;I+=`
          var idx${$} = ${y.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${g.type.indices};
        `;for(let U=0,H=0;U<n;U++)U===a?(I+=`${n>1?`dataIndices${$}[${U}]`:`dataIndices${$}`} = u32(idx${$});`,H+=R):(I+=`${n>1?`dataIndices${$}[${U}]`:`dataIndices${$}`} = ${s.length>1?`outputIndices${$}[${H}]`:`outputIndices${$}`};`,H++);return I},S;if(e[0].dataType===9){let $=(R,I,U="")=>`
          let outputIndices${I} = ${x.offsetToIndices(`outputOffset + ${I}u`)};
          ${C(I)};
          let offset${I} = ${g.indicesToOffset(`dataIndices${I}`)};
          let index${I} = offset${I} / 4u;
          let component${I} = offset${I} % 4u;
          ${R}[${I}] = ${U}(${g.getByOffset(`index${I}`)}[component${I}]);
        `;S=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${x.setByOffset("global_idx","value")}
      `}else S=`
      let outputIndices = ${x.offsetToIndices("global_idx")};
      ${C("")};
      let value = ${g.getByIndices("dataIndices")};
      ${x.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,x)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:p}},Dl=e=>_({axis:e.axis}),Pl=(e,t)=>{let r=e.inputs;Bl(r),e.compute(Ml(e.inputs,t))}}),Ul,Nl,Ll,sh=T(()=>{Me(),Be(),ve(),Ul=(e,t,r,i,n,a,s,o,u)=>{let l=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],c=[a];l.push(...N(t.dims,c));let p=m=>{let g=F("indices_data",t.dataType,t.dims.length),y=pe("input_slice_offsets_data",12,1,1),x=[g,y],C=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(C).declareVariables(...x)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Nl=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=K.sizeToDimension(a,a.length-1),u=K.sizeFromDimension(i,t.batchDims+s),l=K.sizeToDimension(i,t.batchDims),c=K.sizeFromDimension(i,t.batchDims),p=o/l,m=new Array(s),g=u;for(let I=0;I<s;++I)m[s-1-I]=g,g*=i[t.batchDims+s-1-I];let y=Ul(e,r[1],m,t.batchDims,i,o,p,c,s),x=t.batchDims+s;if(x>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let C=a.slice(0,-1).concat(i.slice(x)),S=K.size(C),$=[{type:12,data:S},{type:12,data:u},...N(r[0].dims,y.dims,C)],R=I=>{let U=F("data",r[0].dataType,r[0].dims.length),H=F("slice_offsets",12,y.dims.length),G=pe("output",r[0].dataType,C.length);return`
          ${I.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(U,H,G)}
            ${I.mainStart()}
            ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:C,dataType:n}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:$}),getShaderSource:R},{inputs:[r[0],y]})},Ll=e=>({batchDims:e.batch_dims,cacheKey:""})}),Fl,ql,Vl,Wl,oh=T(()=>{Me(),Be(),k(),ve(),Fl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=K.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,u)=>u===r?Math.ceil(o/i)===a.dims[u]:o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,u)=>o===a.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ql=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=K.normalizeAxis(t.gatherAxis,n),s=K.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let u=K.size(o),l=e[2].dataType,c=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...N(...e.map((g,y)=>g.dims),o)],m=g=>{let y=F("data",e[0].dataType,e[0].dims.length),x=F("inputIndices",e[1].dataType,e[1].dims.length),C=F("scales",e[2].dataType,e[2].dims.length),S=e.length>3?F("zeroPoint",e[3].dataType,e[3].dims.length):void 0,$=pe("output",l,o.length),R=[y,x,C];S&&R.push(S);let I=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(I).declareVariables(...R,$)}
        ${g.mainStart()}
        let output_indices = ${$.offsetToIndices("global_idx")};
        var indices_indices = ${x.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${$.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${x.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${$.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${$.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${x.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${$.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${C.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${C.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${C.getByIndices("scale_indices")};
        ${S?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${S.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${S.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${L(l)}(quantized_data - zero_point) * scale;
        ${$.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,y)=>y!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:m}},Vl=(e,t)=>{let r=e.inputs;Fl(r,t),e.compute(ql(e.inputs,t))},Wl=e=>_({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Gl,jl,Hl,Kl,uh=T(()=>{Me(),Be(),k(),ve(),Gl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},jl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=K.normalizeAxis(t.axis,n),u=r[o],l=a.slice(0),c=K.size(l),p=F("input",i,n),m=F("indicesInput",s,a.length),g=pe("output",i,l.length),y=[{type:12,data:c},{type:6,data:u},{type:12,data:o}];return y.push(...N(r,a,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:x=>`
      ${x.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,m,g)}
      ${x.mainStart()}
      ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},Hl=e=>_({axis:e.axis}),Kl=(e,t)=>{let r=e.inputs;Gl(r),e.compute(jl(e.inputs,t))}}),Zl,Xl,Ql,Yl,lh=T(()=>{Me(),Be(),ve(),Zl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Xl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Mi.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(a/u),c=Math.ceil(n/u),p=!0,m=K.size(o),g=[{type:12,data:p?l:m},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(g.push(...N(e[2].dims)),y.push("rank")),g.push(...N(o));let x=S=>{let $="";t.transA&&t.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let R=t.alpha===1?"":"value *= uniforms.alpha;",I=F("a",e[0].dataType,e[0].dims),U=F("b",e[1].dataType,e[1].dims),H=I.type.value,G=null,ee=[I,U];e.length===3&&(G=F("c",e[2].dataType,e[2].dims.length),ee.push(G));let de=pe("output",e[0].dataType,o.length);ee.push(de);let ye=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${S.registerUniforms(ye).declareVariables(...ee)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${H}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${R}
    ${G!=null?`let cOffset = ${G.broadcastedIndicesToOffset("vec2(m, n)",de)}; value += ${H}(uniforms.beta) * ${G.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},C=S=>{let $=F("a",e[0].dataType,e[0].dims),R=F("b",e[1].dataType,e[1].dims),I=null,U=[$,R];e.length===3&&(I=F("c",e[2].dataType,e[2].dims.length),U.push(I));let H=pe("output",e[0].dataType,o.length);U.push(H);let G=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],ee="",de="";t.transA&&t.transB?(de=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${R.type.value}(0);
      }
      `,ee="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(de=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${R.type.value}(0);
      }
      `,ee="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(de=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${R.type.value}(0);
      }
      `,ee="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(de=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${R.type.value}(0);
      }
      `,ee="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let ye=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${S.registerUniforms(G).declareVariables(...U)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${R.type.storage}, ${u}>, ${u}>;
  ${S.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${H.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${de}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${ee}
      }
      workgroupBarrier();
    }

    ${ye}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",H)}; value += ${H.type.value}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*c},programUniforms:g}),getShaderSource:C}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:x}},Ql=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Yl=(e,t)=>{Zl(e.inputs),e.compute(Xl(e.inputs,t))}}),Ar,Lr,vi,$i,Jl,ed,td,rd,id,nd,ad,sd,od,ud,dh=T(()=>{Me(),Be(),k(),ve(),[Ar,Lr,vi,$i]=[0,1,2,3],Jl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},ed=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,td=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,rd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,id=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,nd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ar}] = batch;
     indices[${Lr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${vi}] = u32(r);
            indices[${$i}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${vi}] = u32(clamp(r, 0, H - 1));
          indices[${$i}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${vi}] = gs_reflect(r, border[1], border[3]);
          indices[${$i}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,ad=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ar}], indices[${Lr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ar}], indices[${Lr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ar}], indices[${Lr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,sd=(e,t)=>{let r=F("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=F("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ar,Lr,vi,$i]=[0,3,1,2]);let s=pe("output",e[0].dataType,a.length),o=r.type.value,u=K.size(a),l=[{type:12,data:u},...N(e[0].dims,i,a)],c=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${ed}
  ${td(o)}
  ${rd(t)}
  ${id(t)}
  ${nd(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${vi}]);
      let W_in = i32(uniforms.x_shape[${$i}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ar}], indices[${vi}], indices[${$i}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ad(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let m=K.size(a);return{outputs:[{dims:a,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:l}},getShaderSource:c}},od=(e,t)=>{Jl(e.inputs),e.compute(sd(e.inputs,t))},ud=e=>_({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Vt,ld,dd,ts,pd,In,cd,fd=T(()=>{Me(),Be(),k(),Ni(),za(),ve(),Ke(),Vt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,ld=(e,t)=>{let r=e[0],i=Vt(e,1),n=Vt(e,2),a=Vt(e,3),s=Vt(e,4),o=Vt(e,5),u=Vt(e,6),l=Vt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],p=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=p,y=0,x=0,C=Math.floor(m/t.numHeads);if(u&&l&&K.size(u.dims)&&K.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[3]!==C)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==C)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=u.dims[2],x=u.dims[2]}else if(u&&K.size(u.dims)||l&&K.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(i&&K.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==C)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==C)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,g=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(a&&K.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=y+g,R=0;if(s&&K.size(s.dims)>0){R=8;let G=s.dims;throw G.length===1?G[0]===c?R=1:G[0]===3*c+2&&(R=3):G.length===2&&G[0]===c&&G[1]===$&&(R=5),R===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let I=!1,U=m;if(n&&K.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');U=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');U=n.dims[1]*n.dims[3],I=!0}}let H=!1;if(s&&K.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&K.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:$,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:m,vHiddenSize:U,headSize:C,vHeadSize:Math.floor(U/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:R,scale:t.scale,broadcastResPosBias:H,passPastInKv:I,qkvFormat:S}},dd=e=>_({...e}),ts=_({perm:[0,2,1,3]}),pd=(e,t,r,i,n,a,s)=>{let o=[i,n,a],u=K.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],c=p=>{let m=pe("qkv_with_bias",t.dataType,o),g=F("qkv",t.dataType,o),y=F("bias",r.dataType,o),x=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(x).declareVariables(g,y,m)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},In=(e,t,r,i,n,a,s,o)=>{let u=a;if(s&&K.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=pd(e,a,s,t,i,r*n,o),u=u.reshape([t,i,r,n]),r===1||i===1?u:e.compute(bt(u,ts.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,i,r,n])),r===1||i===1?u:e.compute(bt(u,ts.perm),{inputs:[u],outputs:[-1]})[0]},cd=(e,t)=>{let r=ld(e.inputs,t),i=e.inputs[0],n=Vt(e.inputs,1),a=Vt(e.inputs,2),s=Vt(e.inputs,3),o=Vt(e.inputs,4),u=Vt(e.inputs,5),l=Vt(e.inputs,6),c=Vt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let p=n&&a&&n.dims.length===4&&a.dims.length===4,m=In(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(p)return xn(e,m,n,a,o,void 0,l,c,u,r);if(!n||!a)throw new Error("key and value must be provided");let g=In(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),y=In(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);xn(e,m,g,y,o,void 0,l,c,u,r)}}),hd,md,gd,yd,rs,wd,_d,bd=T(()=>{Me(),Be(),k(),ve(),hd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},md=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),_({numOutputs:i,axis:t.axis,splitSizes:r})},gd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Z("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,yd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},rs=(e,t)=>{let r=e[0].dims,i=K.size(r),n=e[0].dataType,a=K.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=F("input",n,r.length),u=new Array(t.numOutputs),l=[],c=[],p=0,m=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],u[y]=p;let x=r.slice();x[a]=t.splitSizes[y],c.push(x),s[y]=pe(`output${y}`,n,x.length),l.push({dims:c[y],dataType:e[0].dataType})}m.push({type:12,data:u},...N(r,...c));let g=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${gd(u.length)}
  ${yd(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Z("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},wd=(e,t)=>{hd(e.inputs);let r=e.inputs.length===1?t:md(e.inputs,t);e.compute(rs(e.inputs,r),{inputs:[0]})},_d=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return _({axis:t,numOutputs:i,splitSizes:r})}}),vd,ua,$d,xd=T(()=>{Me(),Be(),k(),ve(),vd=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!K.areEqual(i.dims,[])&&!K.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!K.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],l=r.dims[r.dims.length-2],c=n.dims[0],p=K.sizeFromDimension(r.dims,1)/l,m=o===0?n.dims[1]*2:p/s;if(o>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(l!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(l>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ua=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=K.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,c=e[2].dims[1],p=n===0?c*2:l/i,m=new Array(s,u,l/p,p-c),g=K.computeStrides(m),y=[{type:1,data:a},{type:12,data:m},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[o,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...N(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],x=C=>{let S=F("input",e[0].dataType,e[0].dims.length),$=F("position_ids",e[1].dataType,e[1].dims.length),R=F("cos_cache",e[2].dataType,e[2].dims.length),I=F("sin_cache",e[3].dataType,e[3].dims.length),U=pe("output",e[0].dataType,e[0].dims.length);return C.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${C.declareVariables(S,$,R,I,U)}

        ${C.mainStart(B)}
          let half_rotary_emb_dim = uniforms.${R.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",pe("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${S.getByOffset("i")} * ${R.get("position_id","bsnh[3]")} -
                ${S.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${U.setByOffset("i","re")}
            let im = ${S.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} +
                ${S.getByOffset("j")} * ${R.get("position_id","bsnh[3]")};
            ${U.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${U.setByOffset("k",S.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:_({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(m)/B)},programUniforms:y})}},$d=(e,t)=>{vd(e.inputs,t),e.compute(ua(e.inputs,t))}}),Sd,Ed,is,Td,kd,ph=T(()=>{k(),Me(),za(),fd(),bd(),Ke(),xd(),ve(),Sd=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=r.dims[0],l=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=l,m=0,g=!i||i.dims.length===0,y=Math.floor(g?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);g&&(c=y*t.numHeads);let x=a&&a.dims.length!==0,C=s&&s.dims.length!==0;if(x&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(x&&C){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=a.dims[2]}else if(x||C)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');p=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let $=0,R=!1,I=t.kvNumHeads?y*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(p!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(p!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],R=!0}}let U=e.length>4?e[5]:void 0;if(U&&U.dims.length!==1&&U.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:I,headSize:y,vHeadSize:Math.floor(I/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:$,scale:t.scale,broadcastResPosBias:!1,passPastInKv:R,qkvFormat:S}},Ed=_({perm:[0,2,1,3]}),is=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(bt(i,Ed.perm),{inputs:[i],outputs:[-1]})[0]),i},Td=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=c=>{let p=F("seq_lens",r.dataType,r.dims),m=F("total_seq_lens",i.dataType,i.dims),g=pe("pos_ids",n,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(p,m,g)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${g.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${g.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},kd=(e,t)=>{let r=Sd(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=_({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[m,g,y]=!n&&!a?e.compute(rs([i],p),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],x,C;if(t.doRotary){let I=e.compute(Td(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],U=e.inputs[7],H=e.inputs[8],G=_({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),ee=[m,I,U,H],de=[-1];x=e.compute(ua(ee,G),{inputs:ee,outputs:de})[0],ee.splice(0,1,g);let ye=_({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});C=e.compute(ua(ee,ye),{inputs:ee,outputs:de})[0]}let S=In(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?x:m,void 0,0),$=is(e,t.doRotary?C:g,r),R=is(e,y,r);xn(e,S,$,R,void 0,void 0,s,o,void 0,r,u,l)}}),ns,Id,Cd,Od,ch=T(()=>{Me(),Be(),Ke(),ve(),ns=(e,t,r,i,n,a,s,o)=>{let u=q(a),l=u===1?"f32":`vec${u}f`,c=u===1?"vec2f":`mat2x${u}f`,p=n*s,m=64;p===1&&(m=256);let g=[n,s,a/u],y=[n,s,2],x=["rank","type","type"],C=[];C.push(...N(g,y));let S=$=>{let R=F("x",t.dataType,3,u),I=F("scale",r.dataType,r.dims),U=F("bias",i.dataType,i.dims),H=pe("output",1,3,2),G=[R,I,U,H];return`
  var<workgroup> workgroup_shared : array<${c}, ${m}>;
  const workgroup_size = ${m}u;
  ${$.declareVariables(...G)}
  ${$.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${R.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${te("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${te("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${m}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:C}),getShaderSource:S},{inputs:[t,r,i],outputs:[-1]})[0]},Id=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],u=K.sizeFromDimension(i,a),l=q(u),c=K.size(n)/l,p=ns(e,t[0],t[1],t[2],s,u,o,r.epsilon),m=[s,o,u/l],g=[s,o],y=["type","none"],x=C=>{let S=F("x",t[0].dataType,m.length,l),$=F("scale_shift",1,g.length,2),R=pe("output",t[0].dataType,m.length,l),I=[S,$,R];return`
  ${C.registerUniform("output_size","u32").declareVariables(...I)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${R.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${R.type.value}(scale_shift.x) + ${R.type.value}(scale_shift.y);
      ${R.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...N(m,g,m)]}),getShaderSource:x},{inputs:[t[0],p]})},Cd=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=K.sizeFromDimension(i,1)/s,u=q(s),l=K.size(n)/u,c=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=["type","type"],m=!1,g=[0,i.length-1];for(let S=0;S<i.length-2;S++)m=m||i[S+1]!==1,g.push(S+1);m=m&&i[i.length-1]!==1;let y=m?e.compute(bt(e.inputs[0],g),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(S,$)=>i[g[$]])),x=ns(e,y,t[1],t[2],a,o,s,r.epsilon),C=S=>{let $=V(t[0].dataType),R=u===1?"vec2f":`mat${u}x2f`,I=G=>{let ee=G===0?"x":"y",de=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${$}(${de}(scale.${ee}))`;case 2:return`vec2<${$}>(${de}(scale[0].${ee}, scale[1].${ee}))`;case 4:return`vec4<${$}>(${de}(scale[0].${ee}, scale[1].${ee}, scale[2].${ee}, scale[3].${ee}))`;default:throw new Error(`Not supported compoents ${u}`)}},U=F("input",t[0].dataType,t[0].dims,u),H=pe("output",t[0].dataType,n,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${U.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${R}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${H.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${S.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${I(0)}, ${I(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:C},{inputs:[t[0],x]})},Od=(e,t)=>{t.format==="NHWC"?Cd(e,e.inputs,t):Id(e,e.inputs,t)}}),Ad,zd,Rd,fh=T(()=>{Me(),Be(),ve(),Ad=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},zd=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,u=K.normalizeAxis(t.axis,n.length),l=K.sizeToDimension(n,u),c=K.sizeFromDimension(n,u),p=K.size(a.dims),m=s?K.size(s.dims):0;if(p!==c||s&&m!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${m}`);let g=[];for(let U=0;U<n.length;++U)U<u?g.push(n[U]):g.push(1);let y=q(c),x=["type","type"],C=[{type:12,data:l},{type:1,data:c},{type:12,data:Math.floor(c/y)},{type:1,data:t.epsilon}];s&&x.push("type");let S=r>1,$=r>2,R=U=>{let H=V(e[0].dataType),G=[F("x",e[0].dataType,e[0].dims,y),F("scale",a.dataType,a.dims,y)];s&&G.push(F("bias",s.dataType,s.dims,y)),G.push(pe("output",e[0].dataType,o,y)),S&&G.push(pe("mean_data_output",1,g)),$&&G.push(pe("inv_std_output",1,g));let ee=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${U.registerUniforms(ee).declareVariables(...G)}
  ${U.mainStart()}
    ${U.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ae("f32",y)};
    var mean_square_vector = ${ae("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${le(H,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${te("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${te("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${le(H,y,"x[j + offset]")};
      let f32scale = ${le(H,y,"scale[j]")};
      output[j + offset] = ${G[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${le(H,y,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},I=[{dims:o,dataType:e[0].dataType}];return S&&I.push({dims:g,dataType:1}),$&&I.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:x},getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:C}),getShaderSource:R}},Rd=(e,t)=>{Ad(e.inputs),e.compute(zd(e.inputs,t,e.outputCount))}}),Bd,Md,hh=T(()=>{Be(),La(),Wa(),Bd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Md=e=>{Bd(e.inputs);let t=kr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Na(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=K.size(e.inputs[0].dims.slice(0,-2)),s=K.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),u=e.inputs[1].reshape([1,i,r]),l=[1,a,r],c=[o,u];e.compute(na(c,{activation:""},t,l),{inputs:c})}else e.compute(na(e.inputs,{activation:""},t))}}}),Dd,Pd,Ud,Nd,Ld,mh=T(()=>{Me(),Be(),k(),ve(),Dd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!K.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(K.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(K.size(u)!==l)throw new Error("zeroPoints input size error.")}},Pd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=K.size(o),l=e[1].dims[2]/4,c=e[0].dataType,p=q(t.k),m=q(l),g=q(s),y=o.concat([n,s]),x=n>1&&s/g%2===0?2:1,C=K.size(y)/g/x,S=64,$=[],R=[u,n,a/p],I=K.convertShape(e[1].dims).slice();I.splice(-1,1,l/m),$.push(...N(R)),$.push(...N(I)),$.push(...N(e[2].dims)),e.length===4&&$.push(...N(K.convertShape(e[3].dims)));let U=[u,n,s/g];$.push(...N(U));let H=G=>{let ee=R.length,de=F("a",e[0].dataType,ee,p),ye=F("b",12,I.length,m),Ze=F("scales",e[2].dataType,e[2].dims.length),Ce=[de,ye,Ze],De=e.length===4?F("zero_points",12,e[3].dims.length):void 0;De&&Ce.push(De);let it=U.length,we=pe("output",e[0].dataType,it,g),ke=V(e[0].dataType),Xe=(()=>{switch(p){case 1:return`array<${ke}, 8>`;case 2:return`mat4x2<${ke}>`;case 4:return`mat2x4<${ke}>`;default:throw new Error(`${p}-component is not supported.`)}})(),Ve=()=>{let oe=`
          // reuse a data
            var input_offset = ${de.indicesToOffset(`${de.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Xe};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${de.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let be=0;be<g*x;be++)oe+=`
            b_value = ${m===1?`b${be}_data`:`b${be}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Xe}(${Array.from({length:4},(We,st)=>`${ke}(b_value_lower[${st}]), ${ke}(b_value_upper[${st}])`).join(", ")});
            b_dequantized_values = ${p===1?`${Xe}(${Array.from({length:8},(We,st)=>`(b_quantized_values[${st}] - ${De?`zero_point${be}`:"zero_point"}) * scale${be}`).join(", ")});`:`(b_quantized_values - ${Xe}(${Array(8).fill(`${De?`zero_point${be}`:"zero_point"}`).join(",")})) * scale${be};`};
            workgroup_shared[local_id.x * ${x} + ${Math.floor(be/g)}]${g>1?`[${be%g}]`:""} += ${Array.from({length:8/p},(We,st)=>`${p===1?`a_data[${st}] * b_dequantized_values[${st}]`:`dot(a_data[${st}], b_dequantized_values[${st}])`}`).join(" + ")};
          `;return oe},Le=()=>{let oe=`
            var col_index = col * ${g};
            ${De?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ke}(8);`}
            `;for(let be=0;be<g*x;be++)oe+=`
            let scale${be} = ${Ze.getByOffset("col_index * nBlocksPerCol + block")};
            ${De?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${De.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${be} = ${ke}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return oe},at=()=>{let oe=`col_index = col * ${g};`;for(let be=0;be<g*x;be++)oe+=`
            let b${be}_data = ${ye.getByIndices(`${ye.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return oe+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Xe};
            var b_dequantized_values: ${Xe};`,oe};return`
        var<workgroup> workgroup_shared: array<${we.type.value}, ${x*S}>;
        ${G.declareVariables(...Ce,we)}
        ${G.mainStart([S,1,1])}
          let output_indices = ${we.offsetToIndices(`(global_idx / ${S}) * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${S}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${Le()}
            for (var word: u32 = 0; word < ${l}; word += ${m}) {
              ${at()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${Ve()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${x}) {
            var output_value: ${we.type.value} = ${we.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${S}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${x};
            }
            ${we.setByIndices(`${we.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${m};${g};${x};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:C},programUniforms:$}),getShaderSource:H}},Ud=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),u=K.size(o),l=e[1].dims[2]/4,c=e[0].dataType,p=q(t.k),m=q(l),g=o.concat([n,s]),y=128,x=s%8===0?8:s%4===0?4:1,C=y/x,S=C*m*8,$=S/p,R=S/t.blockSize,I=K.size(g)/x,U=[],H=[u,n,a/p],G=K.convertShape(e[1].dims).slice();G.splice(-1,1,l/m),U.push(...N(H)),U.push(...N(G)),U.push(...N(e[2].dims)),e.length===4&&U.push(...N(K.convertShape(e[3].dims)));let ee=[u,n,s];U.push(...N(ee));let de=ye=>{let Ze=H.length,Ce=F("a",e[0].dataType,Ze,p),De=F("b",12,G.length,m),it=F("scales",e[2].dataType,e[2].dims.length),we=[Ce,De,it],ke=e.length===4?F("zero_points",12,e[3].dims.length):void 0;ke&&we.push(ke);let Xe=ee.length,Ve=pe("output",e[0].dataType,Xe),Le=V(e[0].dataType),at=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Le}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Le}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Le}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Le}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Ce.type.value}, ${$}>;
        var<workgroup> inter_results: array<array<${Ve.type.value}, ${C}>, ${x}>;
        ${ye.declareVariables(...we,Ve)}
        ${ye.mainStart([C,x,1])}
          let output_indices = ${Ve.offsetToIndices(`workgroup_index * ${x}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${R} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${$};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${$}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Ce.getByIndices(`${Ce.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Ce.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${R} + local_id.x;
            ${ke?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ke.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Le}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Le}(8);`}
            let scale = ${it.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${De.getByIndices(`${De.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${at()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Le}>(${Array.from({length:4},(oe,be)=>`${Le}(b_value_lower[${be}]), ${Le}(b_value_upper[${be}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Le}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(oe,be)=>`${`dot(a_data${be}, b_dequantized_values[${be}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${x}) {
            var output_value: ${Ve.type.value} = ${Ve.type.value}(0);
            for (var b = 0u; b < ${C}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Ve.setByIndices(`${Ve.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${m};${C};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:I},programUniforms:U}),getShaderSource:de}},Nd=(e,t)=>{Dd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Ud(e.inputs,t)):e.compute(Pd(e.inputs,t))},Ld=e=>_(e)}),Fd,qd,Vd,Wd,Gd,jd,Hd,Kd,Zd,gh=T(()=>{Me(),Be(),ve(),Fd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Z("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Z("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Z("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Vd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Z("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Z("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Z("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Z("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Wd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Z("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Z("uniforms.x_shape",n,t)})) {
                  k = i32(${Z("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Z("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Gd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Z("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${Z("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Z("uniforms.x_shape",n,t)})) {
                  k -= i32(${Z("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Z("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},jd=(e,t,r)=>{switch(r.mode){case 0:return qd(e,t,r.pads.length);case 1:return Vd(e,t,r.pads.length);case 2:return Wd(e,t,r.pads.length);case 3:return Gd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Hd=(e,t)=>{let r=K.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=K.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...N(e[0].dims,r));let o=["rank"],u=l=>{let c=pe("output",e[0].dataType,r.length),p=F("x",e[0].dataType,i.length),m=p.type.value,g=jd(c,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?m:"f32"}),`
            ${l.registerUniforms(y).declareVariables(p,c)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(r)/64)},programUniforms:a}),getShaderSource:u}},Kd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)a[Number(o[u])]=Number(r[u]),a[Number(o[u])+n]=Number(r[u+o.length])}else r.forEach((o,u)=>a[Number(u)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},Zd=(e,t)=>{Fd(e.inputs);let r=Kd(e.inputs,t);e.compute(Hd(e.inputs,r),{inputs:[0]})}}),Cn,as,ss,os,us,Xd,Qd,ls,ds,Yd,Jd,ps,ep,tp,cs,rp,ip,np,ap,yh=T(()=>{X(),Me(),Be(),ve(),Cn=e=>{if(me.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},as=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=a?t.dilations.slice():[],l=t.pads.slice();Gr.adjustPoolAttributes(r,n,s,o,u,l);let c=Gr.computePoolOutputShape(r,n,o,u,s,l,t.autoPad),p=Object.assign({},t);a?Object.assign(p,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let m=c.slice();return m.push(m.splice(1,1)[0]),[p,i?m:c]},ss=(e,t)=>{let r=t.format==="NHWC",i=K.size(e),n=K.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],p=!!(l+c);a.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],x=t.pads[t.pads.length/2-2],C=t.pads[t.pads.length-2];m=!!(x+C),a.push({type:12,data:g},{type:12,data:y},{type:12,data:x},{type:12,data:C}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,p,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=K.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,c)=>l+c);return[a,s,!!u,!1,!1]}},os=(e,t,r,i,n,a,s,o,u,l,c,p)=>{let m=n.format==="NHWC",g=t.type.value,y=pe("output",t.type.tensor,i);if(n.kernelShape.length<=2){let x="",C="",S="",$=r-(m?2:1);if(c?x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:x=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let R=r-(m?3:2);p?C=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${R}] = indices[${R}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${R}] < 0 || xIndices[${R}] >= uniforms.x_shape[${R}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:C=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${R}] = indices[${R}] * uniforms.sh - uniforms.phStart + j;
                `,S=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${g}(${o});
              var pad = 0;
              ${C}
              ${x}
              ${S}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let x=n.kernelShape.length,C=n.pads.length,S="";return l?S=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:S=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${x}>;

              var value = ${g}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${x-1}u; j++) {
                  offsets[j] = offset / ${Z("uniforms.kernelStrides","j",x)};
                  offset -= offsets[j] * ${Z("uniforms.kernelStrides","j",x)};
                }
                offsets[${x-1}] = offset;

                isPad = false;
                for (var j = ${r-x}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Z("uniforms.strides",`j - ${r-x}u`,x)}
                    + offsets[j - ${r-x}u] - ${Z("uniforms.pads","j - 2u",C)};
                  ${S}
              }
              ${s}

              output[global_idx] = value;
            }`}},us=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Xd=e=>`${us(e)};${e.countIncludePad}`,Qd=e=>`${us(e)};${e.storageOrder};${e.dilations}`,ls=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ds=(e,t,r,i)=>{let[n,a]=as(t,i,r),s=F("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";n.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,p,m,g,y]=ss(a,n);c.push(...N(t.dims,a));let x=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${y}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(a)/64)},programUniforms:c}),getShaderSource:C=>os(C,s,t.dims.length,a.length,n,u,l,0,p,m,g,y)}},Yd=e=>{let t=e.count_include_pad!==0,r=ls(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Xd(i)}},Jd=(e,t)=>{Cn(e.inputs),e.compute(ds("AveragePool",e.inputs[0],!1,t))},ps={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ep=e=>{let t=e.format;return{format:t,...ps,cacheKey:t}},tp=(e,t)=>{Cn(e.inputs),e.compute(ds("GlobalAveragePool",e.inputs[0],!0,t))},cs=(e,t,r,i)=>{let[n,a]=as(t,i,r),s=`
      value = max(x_val, value);
    `,o="",u=F("x",t.dataType,t.dims.length),l=["rank"],[c,p,m,g,y]=ss(a,n);return c.push(...N(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${y}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(a)/64)},programUniforms:c}),getShaderSource:x=>os(x,u,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,p,m,g,y)}},rp=(e,t)=>{Cn(e.inputs),e.compute(cs("MaxPool",e.inputs[0],!1,t))},ip=e=>{let t=e.storage_order,r=e.dilations,i=ls(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Qd(n)}},np=e=>{let t=e.format;return{format:t,...ps,cacheKey:t}},ap=(e,t)=>{Cn(e.inputs),e.compute(cs("GlobalMaxPool",e.inputs[0],!0,t))}}),sp,op,up,lp,wh=T(()=>{Me(),Be(),k(),ve(),sp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},op=(e,t)=>{let r=K.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=K.size(a),u=i===3||i===2,l=u?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,p=e.length>2?e[2]:void 0,m=p?u?[Math.ceil(K.size(p.dims)/4)]:p.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,y=g===!1&&c.length===1,x=q(o),C=g&&(!u||x===4),S=C?x:1,$=C&&!u?x:1,R=F("input",u?12:i,l.length,$),I=F("scale",s,c.length),U=p?F("zero_point",u?12:i,m.length):void 0,H=pe("output",s,a.length,S),G=[R,I];U&&G.push(U);let ee=[l,c];p&&ee.push(m);let de=[{type:12,data:o/S},{type:12,data:r},{type:12,data:t.blockSize},...N(...ee,a)],ye=Ze=>{let Ce=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Ze.registerUniforms(Ce).declareVariables(...G,H)}
      ${Ze.mainStart()}
          ${Ze.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${H.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${R.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${S===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${R.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${I.getByOffset("0")}`:y?`
            let scale_index = ${H.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${I.getByOffset("scale_index")};`:`
            var scale_indices: ${I.type.indices} = output_indices;
            let index = ${I.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${I.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${I.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${U?g?u?`
                let zero_point_input = ${U.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${U.getByOffset("0")}`:y?u?`
                let zero_point_index = ${H.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${U.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${H.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${U.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${I.indicesToOffset("scale_indices")};
                let zero_point_input = ${U.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${U.getByIndices("scale_indices")};`:`let zero_point_value = ${u?n?"i32":"u32":R.type.value}(0);`};
      // Compute and write output
      ${H.setByOffset("global_idx",`${H.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:U?["rank","rank","rank"]:["rank","rank"]},getShaderSource:ye,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/S/64),y:1,z:1},programUniforms:de})}},up=(e,t)=>{sp(e.inputs,t),e.compute(op(e.inputs,t))},lp=e=>_({axis:e.axis,blockSize:e.blockSize})}),dp,pp,cp,_h=T(()=>{X(),Me(),ve(),dp=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},pp=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...N(a)],u=l=>{let c=pe("output",i,a.length),p=c.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(m).declareVariables(c)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},cp=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),me.webgpu.validateInputContent&&dp(t,r,i),e.compute(pp(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),fp,hp,mp,gp,bh=T(()=>{Me(),Be(),k(),ve(),fp=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},hp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(K.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],u=K.sizeFromDimension(r,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...N(e[1].dims,e[2].dims,n)],c=p=>{let m=F("indices",e[1].dataType,e[1].dims.length),g=F("updates",e[2].dataType,e[2].dims.length,a),y=t.reduction!=="none"&&t.reduction!==""?ht("output",e[0].dataType,n.length):pe("output",e[0].dataType,n.length,a);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,g,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${fp(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:c}},mp=e=>_({reduction:e.reduction}),gp=(e,t)=>{e.compute(hp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),yp,wp,_p,fs,bp,vp,$p,xp,Sp,Ep,Tp,kp,hs,Ip,Cp,Op,Ap,zp,Rp,Bp,vh=T(()=>{Me(),Be(),k(),ve(),yp=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},wp=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},_p=(e,t,r,i,n,a)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>a.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");yp(i,t),t.axes.length>0&&wp(i,t.axes,l).forEach((c,p)=>i[p]=c)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==l&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},fs=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,bp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${fs("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${fs("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",vp=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",$p=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},xp=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Sp=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},Ep=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Z("uniforms.scales","i",i)};
        var roi_low = ${Z("uniforms.roi","i",n)};
        var roi_hi = ${Z("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Z("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Z("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Tp=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Z("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Z("uniforms.roi","i",a)};
          var roi_hi = ${Z("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${Z("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Z("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,kp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Z("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,hs=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ip=(e,t,r,i,n)=>{let[a,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${hs(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Cp=(e,t,r,i,n,a,s,o,u,l)=>{let c=r.length===2,[p,m]=c?[0,1]:[2,3],g=e.type.value,y=x=>{let C=x===p?"row":"col";return`
      fn ${C}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",x)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[x]},
        ${i[x]}, ${r[x]}, ${a[x]}, ${a[x]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[x]} - 1))) {
          return ${u};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${C}: ${g} = originalIdx + ${g}(i);
          if (${C} < 0 || ${C} >= ${r[x]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${C} = max(0, min(${C}, ${r[x]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",x,`u32(${C})`)};
          data[i + 1] = ${x===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(p)};
    ${y(m)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Op=(e,t,r,i,n)=>{let[a,s,o,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${hs(e,l,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ap=(e,t,r,i,n,a)=>{let s=e.dims,o=$p(a,t.axes,s.length),u=xp(s,i,n,t.axes),l=i.slice();i.length===0&&(l=s.map(($,R)=>$===0?1:u[R]/$),t.keepAspectRatioPolicy!=="stretch"&&(u=Sp(s,l,t)));let c=pe("output",e.dataType,u.length),p=F("input",e.dataType,s.length),m=K.size(u),g=s.length===u.length&&s.every(($,R)=>$===u[R]),y=t.coordinateTransformMode==="tf_crop_and_resize",x=t.extrapolationValue,C=p.type.value,S=$=>`
      ${g?"":`
      ${bp(t.coordinateTransformMode,C)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${kp(p,s)};
              ${vp(t.nearestMode,r,C)};
              ${Tp(p,c,s,u,l.length,o.length,y)};
              `;case"linear":return`
              ${Ep(c,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Ip(p,c,s,y,x)}`;if(s.length===3||s.length===5)return`${Op(p,c,s,y,x)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Cp(p,c,s,u,l,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(p,c)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${g}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:l},{type:1,data:o},...N(s,u)]})}},zp=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Rp=(e,t)=>{let r=[],i=[],n=[],a=zp(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");_p(e.inputs,t,a,r,i,n),e.compute(Ap(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Bp=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return _({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),Mp,Dp,Pp,$h=T(()=>{Me(),Be(),ve(),Mp=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Dp=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=K.size(a),o=a,u=s,l=a.slice(-1)[0],c=i?a.slice(0,-1).concat(1):[],p=!n&&e.length>3,m=e.length>4,g=i&&r>1,y=i&&r>2,x=r>3,C=64,S=q(l),$=[{type:12,data:u},{type:12,data:S},{type:12,data:l},{type:1,data:t.epsilon}],R=U=>{let H=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],G=[F("x",e[0].dataType,e[0].dims,S),F("skip",e[1].dataType,e[1].dims,S),F("gamma",e[2].dataType,e[2].dims,S)];p&&G.push(F("beta",e[3].dataType,e[3].dims,S)),m&&G.push(F("bias",e[4].dataType,e[4].dims,S)),G.push(pe("output",e[0].dataType,o,S)),g&&G.push(pe("mean_output",1,c)),y&&G.push(pe("inv_std_output",1,c)),x&&G.push(pe("input_skip_bias_sum",e[0].dataType,o,S));let ee=V(e[0].dataType),de=V(1,S);return`

      ${U.registerUniforms(H).declareVariables(...G)}
      var<workgroup> sum_shared : array<${de}, ${C}>;
      var<workgroup> sum_squared_shared : array<${de}, ${C}>;

      ${U.mainStart([C,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${C};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${C};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${C-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":ee+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${x?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${le(ee,S,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${C};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${te("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${te("square_sum",S)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${ee}(mean)`}) *
            ${ee}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},I=[{dims:o,dataType:e[0].dataType}];return r>1&&I.push({dims:c,dataType:1}),r>2&&I.push({dims:c,dataType:1}),r>3&&I.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${g};${y};${x}`,inputDependencies:e.map((U,H)=>"type")},getShaderSource:R,getRunData:()=>({outputs:I,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:$})}},Pp=(e,t)=>{Mp(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Dp(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Up,On,Np,ms,Lp,Fp,qp,Vp,xh=T(()=>{Me(),Be(),k(),ve(),Up=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},On=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Np=(e,t)=>{if(e.length>1){let r=On(e,1),i=On(e,2),n=On(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),_({starts:r,ends:i,axes:n})}else return t},ms=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},Lp=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Z("uniforms.input_shape","i",r.length)};
            let steps_i = ${Z("uniforms.steps","i",r.length)};
            let signs_i = ${Z("uniforms.signs","i",r.length)};
            let starts_i = ${Z("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Fp=(e,t)=>{let r=e[0].dims,i=K.size(r),n=t.axes.length>0?K.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=On(e,4);a.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((S,$)=>ms(S,$,r,n,a)),o=t.ends.map((S,$)=>ms(S,$,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let S=0;S<r.length;++S)n.includes(S)||(s.splice(S,0,0),o.splice(S,0,r[S]),a.splice(S,0,1));let u=a.map(S=>Math.sign(S));a.forEach((S,$,R)=>{if(S<0){let I=(o[$]-s[$])/S,U=s[$],H=U+I*a[$];s[$]=H,o[$]=U,R[$]=-S}});let l=r.slice(0);n.forEach((S,$)=>{l[S]=Math.ceil((o[S]-s[S])/a[S])});let c={dims:l,dataType:e[0].dataType},p=pe("output",e[0].dataType,l.length),m=F("input",e[0].dataType,e[0].dims.length),g=K.size(l),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],x=[{type:12,data:g},{type:12,data:s},{type:6,data:u},{type:12,data:a},...N(e[0].dims,l)],C=S=>`
      ${S.registerUniforms(y).declareVariables(m,p)}
        ${Lp(m,p,r)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:x})}},qp=(e,t)=>{Up(e.inputs,t);let r=Np(e.inputs,t);e.compute(Fp(e.inputs,r),{inputs:[0]})},Vp=e=>{let t=e.starts,r=e.ends,i=e.axes;return _({starts:t,ends:r,axes:i})}}),Wp,Gp,jp,Hp,Sh=T(()=>{Me(),Be(),k(),Ke(),ve(),Wp=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Gp=(e,t)=>{let r=e.inputs[0],i=r.dims,n=K.size(i),a=i.length,s=K.normalizeAxis(t.axis,a),o=s<i.length-1,u,l=[];o?(l=Array.from({length:a},(G,ee)=>ee),l[s]=a-1,l[a-1]=s,u=e.compute(bt(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;let c=u.dims,p=c[a-1],m=n/p,g=q(p),y=p/g,x=64;m===1&&(x=256);let C=(G,ee)=>ee===4?`max(max(${G}.x, ${G}.y), max(${G}.z, ${G}.w))`:ee===2?`max(${G}.x, ${G}.y)`:ee===3?`max(max(${G}.x, ${G}.y), ${G}.z)`:G,S=F("x",u.dataType,u.dims,g),$=pe("result",u.dataType,u.dims,g),R=S.type.value,I=V(u.dataType)==="f32"?`var threadMax = ${R}(-3.4028234663852886e+38f);`:`var threadMax = ${R}(-65504.0h);`,U=G=>`
      var<workgroup> rowMaxShared : ${R};
      var<workgroup> rowSumShared : ${R};
      var<workgroup> threadShared : array<${R}, ${x}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${R} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${R}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${G.registerUniform("packedCols","i32").declareVariables(S,$)}
      ${G.mainStart(x)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${x};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${I}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${R}(${C("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${R}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${R}(${te("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${R}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,H=e.compute({name:"Softmax",shaderCache:{hint:`${g};${x}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:u.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:y}]}),getShaderSource:U},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(bt(H,l),{inputs:[H]})},jp=(e,t)=>{Wp(e.inputs),Gp(e,t)},Hp=e=>_({axis:e.axis})}),gs,Kp,Zp,Xp,Qp,Eh=T(()=>{Me(),Be(),ve(),gs=e=>Array.from(e.getBigInt64Array(),Number),Kp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(gs(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Zp=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Xp=(e,t)=>{let r=e[0].dims,i=t??gs(e[1]),n=Zp(r,i),a=K.size(n),s=e[0].dataType,o=F("input",s,r.length),u=pe("output",s,n.length),l=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,u)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...N(e[0].dims,n)]}),getShaderSource:l}},Qp=e=>{Kp(e.inputs),e.compute(Xp(e.inputs),{inputs:[0]})}}),Yp,Jp,ec,Th=T(()=>{Me(),Be(),ve(),Yp=(e,t,r,i,n)=>{let a=pe("output_data",n,r.length,4),s=F("a_data",t[1].dataType,t[1].dims.length,4),o=F("b_data",t[2].dataType,t[2].dims.length,4),u=F("c_data",t[0].dataType,t[0].dims.length,4),l,c=(p,m,g)=>`select(${m}, ${p}, ${g})`;if(!i)l=a.setByOffset("global_idx",c(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(m,g,y="")=>{let x=`a_data[index_a${g}][component_a${g}]`,C=`b_data[index_b${g}][component_b${g}]`,S=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${a.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_b${g} = ${o.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let offset_c${g} = ${u.broadcastedIndicesToOffset(`output_indices${g}`,a)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${m}[${g}] = ${y}(${c(x,C,S)});
          `};n===9?l=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Jp=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(K.areEqual(t,r)&&K.areEqual(r,i)),s=t,o=K.size(t);if(a){let l=kr.calcShape(kr.calcShape(t,r,!1),i,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=K.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Yp(l,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...N(i,t,r,s)]})}},ec=e=>{e.compute(Jp(e.inputs))}}),tc,kh=T(()=>{Ff(),za(),qf(),Vf(),Wf(),Gf(),jf(),Qf(),Jf(),eh(),th(),rh(),ih(),nh(),ah(),sh(),oh(),uh(),lh(),dh(),ph(),ch(),fh(),hh(),mh(),fd(),gh(),yh(),wh(),_h(),bh(),Ca(),vh(),xd(),$h(),xh(),Sh(),bd(),Eh(),Ke(),Da(),Th(),tc=new Map([["Abs",[Mo]],["Acos",[Do]],["Acosh",[Po]],["Add",[Su]],["ArgMax",[bo,Aa]],["ArgMin",[_o,Aa]],["Asin",[Uo]],["Asinh",[No]],["Atan",[Lo]],["Atanh",[Fo]],["Attention",[To]],["AveragePool",[Jd,Yd]],["BatchNormalization",[Oo]],["BiasAdd",[Ro]],["BiasSplitGelu",[vu]],["Cast",[Vo,qo]],["Ceil",[jo]],["Clip",[Go]],["Concat",[Uu,Nu]],["Conv",[Za,Ha]],["ConvTranspose",[cl,ll]],["Cos",[Ho]],["Cosh",[Ko]],["CumSum",[hl,ml]],["DepthToSpace",[_l,bl]],["DequantizeLinear",[up,lp]],["Div",[Eu]],["Einsum",[Tl,kl]],["Elu",[Zo,Sn]],["Equal",[Tu]],["Erf",[Xo]],["Exp",[Qo]],["Expand",[Al]],["FastGelu",[Rl]],["Floor",[Yo]],["FusedConv",[Za,Ha]],["Gather",[Pl,Dl]],["GatherElements",[Kl,Hl]],["GatherBlockQuantized",[Vl,Wl]],["GatherND",[Nl,Ll]],["Gelu",[Jo]],["Gemm",[Yl,Ql]],["GlobalAveragePool",[tp,ep]],["GlobalMaxPool",[ap,np]],["Greater",[Ou]],["GreaterOrEqual",[zu]],["GridSample",[od,ud]],["GroupQueryAttention",[kd]],["HardSigmoid",[ou,su]],["InstanceNormalization",[Od]],["LayerNormalization",[Rd]],["LeakyRelu",[eu,Sn]],["Less",[Au]],["LessOrEqual",[Ru]],["Log",[mu]],["MatMul",[Md]],["MatMulNBits",[Nd,Ld]],["MaxPool",[rp,ip]],["Mul",[ku]],["MultiHeadAttention",[cd,dd]],["Neg",[ru]],["Not",[tu]],["Pad",[Zd]],["Pow",[Iu]],["QuickGelu",[wu,Sn]],["Range",[cp]],["Reciprocal",[iu]],["ReduceMin",[ho]],["ReduceMean",[uo]],["ReduceMax",[fo]],["ReduceSum",[go]],["ReduceProd",[mo]],["ReduceL1",[lo]],["ReduceL2",[po]],["ReduceLogSum",[wo]],["ReduceLogSumExp",[co]],["ReduceSumSquare",[yo]],["Relu",[nu]],["Resize",[Rp,Bp]],["RotaryEmbedding",[$d]],["ScatterND",[gp,mp]],["Sigmoid",[au]],["Sin",[uu]],["Sinh",[lu]],["Slice",[qp,Vp]],["SkipLayerNormalization",[Pp]],["Split",[wd,_d]],["Sqrt",[du]],["Softmax",[jp,Hp]],["Sub",[Cu]],["Tan",[pu]],["Tanh",[cu]],["ThresholdedRelu",[hu,Sn]],["Tile",[Qp]],["Transpose",[ar,vn]],["Where",[ec]]])}),rc,Ih=T(()=>{X(),Qt(),ve(),rc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){St(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of r)o.push({binding:o.length,resource:{buffer:l.buffer}});n&&o.push({binding:o.length,resource:n});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pt(e.programInfo.name)}dispose(){}build(e,t){St(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{r.features.has(l.feature)&&i.push(`enable ${l.extension};`)});let n=He(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});Ye("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return pt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),ic={};W(ic,{WebGpuBackend:()=>oc});var nc,ac,sc,oc,Ch=T(()=>{X(),Me(),Qt(),jr(),ka(),kh(),Ih(),nc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},ac=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${nc(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},sc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},oc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=a=>t.features.has(a)&&r.push(a)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new sc(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Xn(this),this.programManager=new rc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,zi(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;St(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],a=n.kernelId,s=this.kernels.get(a),o=s.kernelType,u=s.kernelName,l=n.programName,c=n.inputTensorViews,p=n.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let y=Number(m-this.queryTimeBase),x=Number(g-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(C=>({dims:C.dims,dataType:jt(C.dataType)})),outputsMetadata:p.map(C=>({dims:C.dims,dataType:jt(C.dataType)})),kernelId:a,kernelType:o,kernelName:u,programName:l,startTime:y,endTime:x});else{let C="";c.forEach(($,R)=>{C+=`input[${R}]: [${$.dims}] | ${jt($.dataType)}, `});let S="";p.forEach(($,R)=>{S+=`output[${R}]: [${$.dims}] | ${jt($.dataType)}, `}),console.log(`[profiling] kernel "${a}|${o}|${u}|${l}" ${C}${S}start time: ${y} ns, execution time: ${x-y} ns`)}ir("GPU",`${l}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),pt()}run(e,t,r,i,n,a){St(e.name);let s=[];for(let $=0;$<t.length;++$){let R=t[$].data;if(R===0)continue;let I=this.gpuDataManager.get(R);if(!I)throw new Error(`no GPU data for input: ${R}`);s.push(I)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),c=r.length===0?o.map(($,R)=>R):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let p=[],m=[];for(let $=0;$<o.length;++$){if(!Number.isInteger(c[$])||c[$]<-3||c[$]>=a)throw new Error(`Invalid output index: ${c[$]}`);if(c[$]===-3)continue;let R=c[$]===-1,I=c[$]===-2,U=R||I?n(o[$].dataType,o[$].dims):i(c[$],o[$].dataType,o[$].dims);if(p.push(U),U.data===0)continue;let H=this.gpuDataManager.get(U.data);if(!H)throw new Error(`no GPU data for output: ${U.data}`);if(R&&this.temporaryData.push(H),I){let G=this.kernelPersistentData.get(this.currentKernelId);G||(G=[],this.kernelPersistentData.set(this.currentKernelId,G)),G.push(H)}m.push(H)}if(s.length!==t.length||m.length!==p.length){if(m.length===0)return pt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(l){let $=0,R=[];l.forEach(G=>{let ee=typeof G.data=="number"?[G.data]:G.data;if(ee.length===0)return;let de=G.type===10?2:4,ye,Ze;G.type===10?(Ze=ee.length>4?16:ee.length>2?8:ee.length*de,ye=ee.length>4?16:de*ee.length):(Ze=ee.length<=2?ee.length*de:16,ye=16),$=Math.ceil($/Ze)*Ze,R.push($);let Ce=G.type===10?8:4;$+=ee.length>4?Math.ceil(ee.length/Ce)*ye:ee.length*de});let I=16;$=Math.ceil($/I)*I;let U=new ArrayBuffer($);l.forEach((G,ee)=>{let de=R[ee],ye=typeof G.data=="number"?[G.data]:G.data;if(G.type===6)new Int32Array(U,de,ye.length).set(ye);else if(G.type===12)new Uint32Array(U,de,ye.length).set(ye);else if(G.type===10)new Uint16Array(U,de,ye.length).set(ye);else if(G.type===1)new Float32Array(U,de,ye.length).set(ye);else throw new Error(`Unsupported uniform type: ${jt(G.type)}`)});let H=this.gpuDataManager.create($,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(H.buffer,0,U,0,$),this.gpuDataManager.release(H.id),g={offset:0,size:$,buffer:H.buffer}}let y=this.programManager.normalizeDispatchGroupSize(u),x=y[1]===1&&y[2]===1,C=ac(e,t,x),S=this.programManager.getArtifact(C);if(S||(S=this.programManager.build(e,y),this.programManager.setArtifact(C,S),Ye("info",()=>`[artifact] key: ${C}, programName: ${e.name}`)),l&&S.uniformVariablesInfo){if(l.length!==S.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${S.uniformVariablesInfo.length}, got ${l.length} in program "${S.programInfo.name}".`);for(let $=0;$<l.length;$++){let R=l[$],I=R.type,U=typeof R.data=="number"?1:R.data.length,[H,G]=S.uniformVariablesInfo[$];if(I!==H||U!==G)throw new Error(`Uniform variable ${$} mismatch: expect type ${H} with size ${G}, got type ${I} with size ${U} in program "${S.programInfo.name}".`)}}if(Ye("info",()=>`[ProgramManager] run "${e.name}" (key=${C}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let $={kernelId:this.currentKernelId,programName:S.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push($),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push($)}return this.programManager.run(S,s,m,y,g),pt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=tc.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ye("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${n}] ${a}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await wn(this,e,t);return Ir(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ye("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ye("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ye("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),uc={};W(uc,{init:()=>dc});var la,lc,dc,Oh=T(()=>{Me(),Qt(),Be(),yn(),la=class Df{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(K.size(t)!==K.size(this.dims))throw new Error("Invalid new shape");return new Df(this.module,this.dataType,this.data,t)}},lc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(i*n++,a)),c=Number(e.getValue(i*n++,"*")),p=Number(e.getValue(i*n++,a)),m=[];for(let g=0;g<p;g++)m.push(Number(e.getValue(i*n++,a)));o.push(new la(e,l,c,m))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],n=(s,o,u)=>new la(this.module,o,this.output(s,u),u),a=(s,o)=>{let u=Ht(s,o);if(!u)throw new Error(`Unsupported data type: ${s}`);let l=u>0?this.backend.gpuDataManager.create(u).id:0;return new la(this.module,s,l,o)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},dc=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Ch(),ue(ic)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,c=!1)=>{if(c)Ye("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{Ye("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),p)}},async(o,u,l)=>{Ye("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,c)=>{Ye("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let p=new lc(t,s,Number(u));return s.computeKernel(Number(o),p,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new gn(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,u,l,c)=>a.ensureTensor(s,o,u,l,c),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),pc,ys,ws,Qr,cc,_s,da,bs,vs,$s,xs,Ss,Es,fc=T(()=>{X(),Ea(),Ta(),Me(),Wt(),si(),dn(),pc=(e,t)=>{Ue()._OrtInit(e,t)!==0&&Re("Can't initialize onnxruntime.")},ys=async e=>{pc(e.wasm.numThreads,ui(e.logLevel))},ws=async(e,t)=>{Ue().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Oh(),ue(uc)).init;t==="webgpu"&&await i("webgpu",Ue(),e,r),t==="webnn"&&await i("webnn",Ue(),e)}},Qr=new Map,cc=e=>{let t=Ue(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&Re("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},_s=(e,t)=>{let r=Ue(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&Re("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let u=r.HEAP32[n/4];if(u===0)return[o,0];let l=r.HEAPU32[n/4+1],c=[];for(let p=0;p<l;p++){let m=Number(r.getValue(n+8+p*a,"*"));c.push(m!==0?r.UTF8ToString(m):Number(r.getValue(n+8+(p+l)*a,"*")))}return[o,u,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},da=e=>{let t=Ue(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},bs=async(e,t)=>{let r,i,n=Ue();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=da(e);let a=0,s=0,o=0,u=[],l=[],c=[];try{if([s,u]=await ln(t),t?.externalData&&n.mountExternalData){let I=[];for(let U of t.externalData){let H=typeof U=="string"?U:U.path;I.push(pi(typeof U=="string"?U:U.data).then(G=>{n.mountExternalData(H,G)}))}await Promise.all(I)}for(let I of t?.executionProviders??[])if((typeof I=="string"?I:I.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof I!="string"){let U=I,H=U?.context,G=U?.gpuDevice,ee=U?.deviceType,de=U?.powerPreference;H?n.currentContext=H:G?n.currentContext=await n.webnnCreateMLContext(G):n.currentContext=await n.webnnCreateMLContext({deviceType:ee,powerPreference:de})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),n.webgpuOnCreateSession?.(a),a===0&&Re("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[p,m]=cc(a),g=!!t?.enableGraphCapture,y=[],x=[],C=[],S=[],$=[];for(let I=0;I<p;I++){let[U,H,G]=_s(a,I);U===0&&Re("Can't get an input name."),l.push(U);let ee=n.UTF8ToString(U);y.push(ee),C.push(H===0?{name:ee,isTensor:!1}:{name:ee,isTensor:!0,type:jt(H),shape:G})}for(let I=0;I<m;I++){let[U,H,G]=_s(a,I+p);U===0&&Re("Can't get an output name."),c.push(U);let ee=n.UTF8ToString(U);x.push(ee),S.push(H===0?{name:ee,isTensor:!1}:{name:ee,isTensor:!0,type:jt(H),shape:G});{if(g&&t?.preferredOutputLocation===void 0){$.push("gpu-buffer");continue}let de=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[ee]??"cpu",ye=n.webnnIsGraphOutput;if(de==="cpu"&&ye&&ye(a,ee)){$.push("ml-tensor-cpu-output");continue}if(de!=="cpu"&&de!=="cpu-pinned"&&de!=="gpu-buffer"&&de!=="ml-tensor")throw new Error(`Not supported preferred output location: ${de}.`);if(g&&de!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${de}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);$.push(de)}}let R=null;return $.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&Re("Can't create IO binding."),R={handle:o,outputPreferredLocations:$,outputPreferredLocationsEncoded:$.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>Ci(I))}),Qr.set(a,[a,l,c,R,g,!1]),[a,y,x,C,S]}catch(p){throw l.forEach(m=>n._OrtFree(m)),c.forEach(m=>n._OrtFree(m)),o!==0&&n._OrtReleaseBinding(o)!==0&&Re("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&Re("Can't release session."),p}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&Re("Can't release session options."),u.forEach(p=>n._free(p)),n.unmountExternalData?.()}},vs=e=>{let t=Ue(),r=Qr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Re("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Re("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(u=>t._OrtFree(u)),a.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&Re("Can't release session."),Qr.delete(e)},$s=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=Ue(),u=o.PTR_SIZE,l=e[0],c=e[1],p=e[3],m=p,g,y;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let S=e[2].gpuBuffer;y=Ht(Gt(l),c);{let $=o.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');g=$(i,a,S,y)}}else if(p==="ml-tensor"){let S=e[2].mlTensor;y=Ht(Gt(l),c);let $=o.webnnRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');g=$(i,S,Gt(l),c)}else{let S=e[2];if(Array.isArray(S)){y=u*S.length,g=o._malloc(y),r.push(g);for(let $=0;$<S.length;$++){if(typeof S[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);o.setValue(g+$*u,$t(S[$],r),"*")}}else{let $=o.webnnIsGraphInput,R=o.webnnIsGraphOutput;if(l!=="string"&&$&&R){let I=o.UTF8ToString(n);if($(i,I)||R(i,I)){let U=Gt(l);y=Ht(U,c),m="ml-tensor";let H=o.webnnCreateTemporaryTensor,G=o.webnnUploadTensor;if(!H||!G)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let ee=await H(i,U,c);G(ee,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),g=ee}else y=S.byteLength,g=o._malloc(y),r.push(g),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),g)}else y=S.byteLength,g=o._malloc(y),r.push(g),o.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,y),g)}}let x=o.stackSave(),C=o.stackAlloc(4*c.length);try{c.forEach(($,R)=>o.setValue(C+R*u,$,u===4?"i32":"i64"));let S=o._OrtCreateTensor(Gt(l),g,y,C,c.length,Ci(m));S===0&&Re(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(S)}finally{o.stackRestore(x)}},xs=async(e,t,r,i,n,a)=>{let s=Ue(),o=s.PTR_SIZE,u=Qr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],c=u[1],p=u[2],m=u[3],g=u[4],y=u[5],x=t.length,C=i.length,S=0,$=[],R=[],I=[],U=[],H=[],G=s.stackSave(),ee=s.stackAlloc(x*o),de=s.stackAlloc(x*o),ye=s.stackAlloc(C*o),Ze=s.stackAlloc(C*o);try{[S,$]=nn(a),Bt("wasm prepareInputOutputTensor");for(let we=0;we<x;we++)await $s(r[we],R,U,e,c[t[we]],t[we],g);for(let we=0;we<C;we++)await $s(n[we],I,U,e,p[i[we]],x+i[we],g);Dt("wasm prepareInputOutputTensor");for(let we=0;we<x;we++)s.setValue(ee+we*o,R[we],"*"),s.setValue(de+we*o,c[t[we]],"*");for(let we=0;we<C;we++)s.setValue(ye+we*o,I[we],"*"),s.setValue(Ze+we*o,p[i[we]],"*");if(m&&!y){let{handle:we,outputPreferredLocations:ke,outputPreferredLocationsEncoded:Xe}=m;if(c.length!==x)throw new Error(`input count from feeds (${x}) is expected to be always equal to model's input count (${c.length}).`);Bt("wasm bindInputsOutputs");for(let Ve=0;Ve<x;Ve++){let Le=t[Ve];await s._OrtBindInput(we,c[Le],R[Ve])!==0&&Re(`Can't bind input[${Ve}] for session=${e}.`)}for(let Ve=0;Ve<C;Ve++){let Le=i[Ve];n[Ve]?.[3]?(H.push(I[Ve]),s._OrtBindOutput(we,p[Le],I[Ve],0)!==0&&Re(`Can't bind pre-allocated output[${Ve}] for session=${e}.`)):s._OrtBindOutput(we,p[Le],0,Xe[Le])!==0&&Re(`Can't bind output[${Ve}] to ${ke[Ve]} for session=${e}.`)}Dt("wasm bindInputsOutputs"),Qr.set(e,[l,c,p,m,g,!0])}s.jsepOnRunStart?.(l),s.webnnOnRunStart?.(l);let Ce;m?Ce=await s._OrtRunWithBinding(l,m.handle,C,ye,S):Ce=await s._OrtRun(l,de,ee,x,Ze,C,ye,S),Ce!==0&&Re("failed to call OrtRun().");let De=[],it=[];Bt("wasm ProcessOutputTensor");for(let we=0;we<C;we++){let ke=Number(s.getValue(ye+we*o,"*"));if(ke===I[we]||H.includes(I[we])){De.push(n[we]),ke!==I[we]&&s._OrtReleaseTensor(ke)!==0&&Re("Can't release tensor.");continue}let Xe=s.stackSave(),Ve=s.stackAlloc(4*o),Le=!1,at,oe=0;try{s._OrtGetTensorData(ke,Ve,Ve+o,Ve+2*o,Ve+3*o)!==0&&Re(`Can't access output tensor data on index ${we}.`);let be=o===4?"i32":"i64",We=Number(s.getValue(Ve,be));oe=s.getValue(Ve+o,"*");let st=s.getValue(Ve+o*2,"*"),vr=Number(s.getValue(Ve+o*3,be)),zr=[];for(let Nt=0;Nt<vr;Nt++)zr.push(Number(s.getValue(st+Nt*o,be)));s._OrtFree(st)!==0&&Re("Can't free memory for tensor dims.");let Jr=zr.reduce((Nt,It)=>Nt*It,1);at=jt(We);let Rn=m?.outputPreferredLocations[i[we]];if(at==="string"){if(Rn==="gpu-buffer"||Rn==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Nt=[];for(let It=0;It<Jr;It++){let Fr=s.getValue(oe+It*o,"*"),Mh=s.getValue(oe+(It+1)*o,"*"),Dh=It===Jr-1?void 0:Mh-Fr;Nt.push(s.UTF8ToString(Fr,Dh))}De.push([at,zr,Nt,"cpu"])}else if(Rn==="gpu-buffer"&&Jr>0){let Nt=s.jsepGetBuffer;if(!Nt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let It=Nt(oe),Fr=Ht(We,Jr);if(Fr===void 0||!li(at))throw new Error(`Unsupported data type: ${at}`);Le=!0,De.push([at,zr,{gpuBuffer:It,download:s.jsepCreateDownloader(It,Fr,at),dispose:()=>{s._OrtReleaseTensor(ke)!==0&&Re("Can't release tensor.")}},"gpu-buffer"])}else if(Rn==="ml-tensor"&&Jr>0){let Nt=s.webnnEnsureTensor,It=s.webnnIsGraphInputOutputTypeSupported;if(!Nt||!It)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(We,Jr)===void 0||!di(at))throw new Error(`Unsupported data type: ${at}`);if(!It(e,at,!1))throw new Error(`preferredLocation "ml-tensor" for ${at} output is not supported by current WebNN Context.`);let Fr=await Nt(e,oe,We,zr,!1);Le=!0,De.push([at,zr,{mlTensor:Fr,download:s.webnnCreateMLTensorDownloader(oe,at),dispose:()=>{s.webnnReleaseTensorId(oe),s._OrtReleaseTensor(ke)}},"ml-tensor"])}else if(Rn==="ml-tensor-cpu-output"&&Jr>0){let Nt=s.webnnCreateMLTensorDownloader(oe,at)(),It=De.length;Le=!0,it.push((async()=>{let Fr=[It,await Nt];return s.webnnReleaseTensorId(oe),s._OrtReleaseTensor(ke),Fr})()),De.push([at,zr,[],"cpu"])}else{let Nt=oi(at),It=new Nt(Jr);new Uint8Array(It.buffer,It.byteOffset,It.byteLength).set(s.HEAPU8.subarray(oe,oe+It.byteLength)),De.push([at,zr,It,"cpu"])}}finally{s.stackRestore(Xe),at==="string"&&oe&&s._free(oe),Le||s._OrtReleaseTensor(ke)}}m&&!g&&(s._OrtClearBoundOutputs(m.handle)!==0&&Re("Can't clear bound outputs."),Qr.set(e,[l,c,p,m,g,!1]));for(let[we,ke]of await Promise.all(it))De[we][2]=ke;return Dt("wasm ProcessOutputTensor"),De}finally{s.webnnOnRunEnd?.(l),s.stackRestore(G),R.forEach(Ce=>s._OrtReleaseTensor(Ce)),I.forEach(Ce=>s._OrtReleaseTensor(Ce)),U.forEach(Ce=>s._free(Ce)),S!==0&&s._OrtReleaseRunOptions(S),$.forEach(Ce=>s._free(Ce))}},Ss=e=>{let t=Ue(),r=Qr.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Re("Can't get an profile file name."),t._OrtFree(n)},Es=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Yr,or,Hi,An,zn,pa,Ts,ca,xi,Si,hc,mc,gc,yc,wc,_c,bc,vc,$c=T(()=>{X(),fc(),Wt(),Er(),Yr=()=>!!me.wasm.proxy&&typeof document<"u",Hi=!1,An=!1,zn=!1,ca=new Map,xi=(e,t)=>{let r=ca.get(e);r?r.push(t):ca.set(e,[t])},Si=()=>{if(Hi||!An||zn||!or)throw new Error("worker not ready")},hc=e=>{switch(e.data.type){case"init-wasm":Hi=!1,e.data.err?(zn=!0,Ts[1](e.data.err)):(An=!0,Ts[0]()),pa&&(URL.revokeObjectURL(pa),pa=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ca.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},mc=async()=>{if(!An){if(Hi)throw new Error("multiple calls to 'initWasm()' detected.");if(zn)throw new Error("previous call to 'initWasm()' failed.");if(Hi=!0,Yr())return new Promise((e,t)=>{or?.terminate(),At().then(([r,i])=>{try{or=i,or.onerror=a=>t(a),or.onmessage=hc,Ts=[e,t];let n={type:"init-wasm",in:me};if(!n.in.wasm.wasmPaths&&r){let a=Se();a&&(n.in.wasm.wasmPaths=a)}or.postMessage(n),pa=r}catch(n){t(n)}},t)});try{await ai(me.wasm),await ys(me),An=!0}catch(e){throw zn=!0,e}finally{Hi=!1}}},gc=async e=>{if(Yr())return Si(),new Promise((t,r)=>{xi("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:me}};or.postMessage(i)});await ws(me,e)},yc=async e=>Yr()?(Si(),new Promise((t,r)=>{xi("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};or.postMessage(i,[e.buffer])})):da(e),wc=async(e,t)=>{if(Yr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Si(),new Promise((r,i)=>{xi("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),or.postMessage(n,a)})}else return bs(e,t)},_c=async e=>{if(Yr())return Si(),new Promise((t,r)=>{xi("release",[t,r]);let i={type:"release",in:e};or.postMessage(i)});vs(e)},bc=async(e,t,r,i,n,a)=>{if(Yr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Si(),new Promise((s,o)=>{xi("run",[s,o]);let u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:a}};or.postMessage(l,Es(u))})}else return xs(e,t,r,i,n,a)},vc=async e=>{if(Yr())return Si(),new Promise((t,r)=>{xi("end-profiling",[t,r]);let i={type:"end-profiling",in:e};or.postMessage(i)});Ss(e)}}),ks,xc,Sc,Ah=T(()=>{X(),$c(),Me(),ne(),dn(),ks=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},xc=e=>{switch(e[3]){case"cpu":return new gt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!li(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return gt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!di(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return gt.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Sc=class{async fetchModelAndCopyToWasmMemory(e){return yc(await pi(e))}async loadModel(e,t){St();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await wc(r,t),pt()}async dispose(){return _c(this.sessionId)}async run(e,t,r){St();let i=[],n=[];Object.entries(e).forEach(p=>{let m=p[0],g=p[1],y=this.inputNames.indexOf(m);if(y===-1)throw new Error(`invalid input '${m}'`);i.push(g),n.push(y)});let a=[],s=[];Object.entries(t).forEach(p=>{let m=p[0],g=p[1],y=this.outputNames.indexOf(m);if(y===-1)throw new Error(`invalid output '${m}'`);a.push(g),s.push(y)});let o=i.map((p,m)=>ks(p,()=>`input "${this.inputNames[n[m]]}"`)),u=a.map((p,m)=>p?ks(p,()=>`output "${this.outputNames[s[m]]}"`):null),l=await bc(this.sessionId,n,o,s,u,r),c={};for(let p=0;p<l.length;p++)c[this.outputNames[s[p]]]=a[p]??xc(l[p]);return pt(),c}startProfiling(){}endProfiling(){vc(this.sessionId)}}}),Ec={};W(Ec,{OnnxruntimeWebAssemblyBackend:()=>Cs,initializeFlags:()=>Is,wasmBackend:()=>Tc});var Is,Cs,Tc,zh=T(()=>{X(),$c(),Ah(),Is=()=>{(typeof me.wasm.initTimeout!="number"||me.wasm.initTimeout<0)&&(me.wasm.initTimeout=0);let e=me.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),me.wasm.simd=!1),typeof me.wasm.proxy!="boolean"&&(me.wasm.proxy=!1),typeof me.wasm.trace!="boolean"&&(me.wasm.trace=!1),typeof me.wasm.numThreads!="number"||!Number.isInteger(me.wasm.numThreads)||me.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)me.wasm.numThreads=1;else{let t=typeof navigator>"u"?M("node:os").cpus().length:navigator.hardwareConcurrency;me.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Cs=class{async init(e){Is(),await mc(),await gc(e)}async createInferenceSessionHandler(e,t){let r=new Sc;return await r.loadModel(e,t),r}},Tc=new Cs}),kc={};W(kc,{InferenceSession:()=>Mr,TRACE:()=>ir,TRACE_EVENT_BEGIN:()=>Bt,TRACE_EVENT_END:()=>Dt,TRACE_FUNC_BEGIN:()=>St,TRACE_FUNC_END:()=>pt,Tensor:()=>gt,default:()=>Bh,env:()=>me,registerBackend:()=>j}),X(),X(),X();var Rh="1.24.3",Bh=A;{let e=(zh(),ue(Ec)).wasmBackend;j("webgpu",e,5),j("webnn",e,5),j("cpu",e,10),j("wasm",e,10)}return Object.defineProperty(me.versions,"web",{value:Rh,enumerable:!0}),ue(kc)})();d.exports=w})(Bs)),Bs.exports}var Ei={},Ms={},Yc;function vg(){return Yc||(Yc=1,Object.defineProperty(Ms,"__esModule",{value:!0})),Ms}var Nn={},Jc;function $g(){if(Jc)return Nn;Jc=1;var d;Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.SileroLegacy=void 0;const f=Kn();class w{constructor(E,P,O,M,T){this.ortInstance=E,this._session=P,this._h=O,this._c=M,this._sr=T,this.reset_state=()=>{const W=Array(128).fill(0);this._h=new this.ortInstance.Tensor("float32",W,[2,1,64]),this._c=new this.ortInstance.Tensor("float32",W,[2,1,64])},this.process=async W=>{const ue={input:new this.ortInstance.Tensor("float32",W,[1,W.length]),h:this._h,c:this._c,sr:this._sr},fe=await this._session.run(ue);this._h=fe.hn,this._c=fe.cn;const[he]=fe.output?.data;return{notSpeech:1-he,isSpeech:he}},this.release=async()=>{await this._session.release(),this._h.dispose(),this._c.dispose(),this._sr.dispose()}}}return Nn.SileroLegacy=w,d=w,w.new=async(b,E)=>{f.log.debug("initializing vad");const P=await E(),O=await b.InferenceSession.create(P),M=new b.Tensor("int64",[16000n]),T=Array(128).fill(0),W=new b.Tensor("float32",T,[2,1,64]),Y=new b.Tensor("float32",T,[2,1,64]);return f.log.debug("vad is initialized"),new d(b,O,W,Y,M)},Nn}var Ln={},ef;function xg(){if(ef)return Ln;ef=1;var d;Object.defineProperty(Ln,"__esModule",{value:!0}),Ln.SileroV5=void 0;const f=Kn();function w(E){const P=Array(256).fill(0);return new E.Tensor("float32",P,[2,1,128])}class b{constructor(P,O,M,T){this._session=P,this._state=O,this._sr=M,this.ortInstance=T,this.reset_state=()=>{this._state=w(this.ortInstance)},this.process=async W=>{const ue={input:new this.ortInstance.Tensor("float32",W,[1,W.length]),state:this._state,sr:this._sr},fe=await this._session.run(ue);if(!fe.stateN)throw new Error("No state from model");if(this._state=fe.stateN,!fe.output?.data)throw new Error("No output from model");const he=fe.output.data[0];if(typeof he!="number")throw new Error("Weird output data");return{notSpeech:1-he,isSpeech:he}},this.release=async()=>{await this._session.release(),this._state.dispose(),this._sr.dispose()}}}return Ln.SileroV5=b,d=b,b.new=async(E,P)=>{f.log.debug("Loading VAD...");const O=await P(),M=await E.InferenceSession.create(O),T=new E.Tensor("int64",[16000n]),W=w(E);return f.log.debug("...finished loading VAD"),new d(M,W,T,E)},Ln}var tf;function Pf(){return tf||(tf=1,(function(d){var f=Ei&&Ei.__createBinding||(Object.create?(function(P,O,M,T){T===void 0&&(T=M);var W=Object.getOwnPropertyDescriptor(O,M);(!W||("get"in W?!O.__esModule:W.writable||W.configurable))&&(W={enumerable:!0,get:function(){return O[M]}}),Object.defineProperty(P,T,W)}):(function(P,O,M,T){T===void 0&&(T=M),P[T]=O[M]})),w=Ei&&Ei.__exportStar||function(P,O){for(var M in P)M!=="default"&&!Object.prototype.hasOwnProperty.call(O,M)&&f(O,P,M)};Object.defineProperty(d,"__esModule",{value:!0}),d.SileroV5=d.SileroLegacy=void 0,w(vg(),d);var b=$g();Object.defineProperty(d,"SileroLegacy",{enumerable:!0,get:function(){return b.SileroLegacy}});var E=xg();Object.defineProperty(d,"SileroV5",{enumerable:!0,get:function(){return E.SileroV5}})})(Ei)),Ei}var Fn={},rf;function Uf(){if(rf)return Fn;rf=1,Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.Resampler=void 0;const d=Kn();class f{constructor(b){this.options=b,this.process=E=>{const P=[];for(const O of E)for(this.inputBuffer.push(O);this.hasEnoughDataForFrame();){const M=this.generateOutputFrame();P.push(M)}return P},b.nativeSampleRate<16e3&&d.log.error("nativeSampleRate is too low. Should have 16000 = targetSampleRate <= nativeSampleRate"),this.inputBuffer=[]}async*stream(b){for(const E of b)for(this.inputBuffer.push(E);this.hasEnoughDataForFrame();)yield this.generateOutputFrame()}hasEnoughDataForFrame(){return this.inputBuffer.length*this.options.targetSampleRate/this.options.nativeSampleRate>=this.options.targetFrameSize}generateOutputFrame(){const b=new Float32Array(this.options.targetFrameSize);let E=0,P=0;for(;E<this.options.targetFrameSize;){let O=0,M=0;for(;P<Math.min(this.inputBuffer.length,(E+1)*this.options.nativeSampleRate/this.options.targetSampleRate);){const T=this.inputBuffer[P];T!==void 0&&(O+=T,M++),P++}b[E]=O/M,E++}return this.inputBuffer=this.inputBuffer.slice(P),b}}return Fn.Resampler=f,Fn}var nf;function Sg(){return nf||(nf=1,(function(d){var f=Vr&&Vr.__createBinding||(Object.create?(function(fe,he,j,J){J===void 0&&(J=j);var se=Object.getOwnPropertyDescriptor(he,j);(!se||("get"in se?!he.__esModule:se.writable||se.configurable))&&(se={enumerable:!0,get:function(){return he[j]}}),Object.defineProperty(fe,J,se)}):(function(fe,he,j,J){J===void 0&&(J=j),fe[J]=he[j]})),w=Vr&&Vr.__setModuleDefault||(Object.create?(function(fe,he){Object.defineProperty(fe,"default",{enumerable:!0,value:he})}):function(fe,he){fe.default=he}),b=Vr&&Vr.__importStar||function(fe){if(fe&&fe.__esModule)return fe;var he={};if(fe!=null)for(var j in fe)j!=="default"&&Object.prototype.hasOwnProperty.call(fe,j)&&f(he,fe,j);return w(he,fe),he};Object.defineProperty(d,"__esModule",{value:!0}),d.NonRealTimeVAD=d.defaultNonRealTimeVADOptions=void 0;const E=b(bg()),P=Bf(),O=js(),M=Hs(),T=Sa(),W=Pf(),Y=Uf();d.defaultNonRealTimeVADOptions={...M.defaultFrameProcessorOptions,modelURL:P.baseAssetPath+"silero_vad_legacy.onnx",modelFetcher:O.defaultModelFetcher};class ue{static async new(he={}){const j={...d.defaultNonRealTimeVADOptions,...he};(0,M.validateOptions)(j),j.ortConfig!==void 0&&j.ortConfig(E);const J=()=>j.modelFetcher(j.modelURL),se=await W.SileroLegacy.new(E,J),Ge=new M.FrameProcessor(se.process,se.reset_state,{positiveSpeechThreshold:j.positiveSpeechThreshold,negativeSpeechThreshold:j.negativeSpeechThreshold,redemptionMs:j.redemptionMs,preSpeechPadMs:j.preSpeechPadMs,minSpeechMs:j.minSpeechMs,submitUserSpeechOnPause:j.submitUserSpeechOnPause},1536/16);return Ge.resume(),new this(J,E,j,Ge)}constructor(he,j,J,se){this.modelFetcher=he,this.ort=j,this.options=J,this.frameProcessor=se,this.frameSamples=1536}async*run(he,j){const J={nativeSampleRate:j,targetSampleRate:16e3,targetFrameSize:this.frameSamples},se=new Y.Resampler(J);let Ge=0,et=0,$e=0;for await(const _e of se.stream(he)){const xe=[];await this.frameProcessor.process(_e,ze=>{xe.push(ze)});for(const ze of xe)switch(ze.msg){case T.Message.SpeechStart:Ge=$e*this.frameSamples/16;break;case T.Message.SpeechEnd:et=($e+1)*this.frameSamples/16,yield{audio:ze.audio,start:Ge,end:et};break}$e++}const Ae=[];this.frameProcessor.endSegment(_e=>{Ae.push(_e)});for(const _e of Ae)_e.msg===T.Message.SpeechEnd&&(yield{audio:_e.audio,start:Ge,end:$e*this.frameSamples/16})}}d.NonRealTimeVAD=ue})(Vr)),Vr}var $r={},af;function Eg(){if(af)return $r;af=1,Object.defineProperty($r,"__esModule",{value:!0}),$r.audioFileToArray=$r.encodeWAV=$r.arrayBufferToBase64=$r.minFramesForTargetMS=void 0;function d(M,T,W=16e3){return Math.ceil(M*W/1e3/T)}$r.minFramesForTargetMS=d;function f(M){const T=new Uint8Array(M),W=T.byteLength,Y=new Array(W);for(let ue=0;ue<W;ue++){const fe=T[ue];if(fe===void 0)break;Y[ue]=String.fromCharCode(fe)}return btoa(Y.join(""))}$r.arrayBufferToBase64=f;function w(M,T=3,W=16e3,Y=1,ue=32){const fe=ue/8,he=Y*fe,j=new ArrayBuffer(44+M.length*fe),J=new DataView(j);return P(J,0,"RIFF"),J.setUint32(4,36+M.length*fe,!0),P(J,8,"WAVE"),P(J,12,"fmt "),J.setUint32(16,16,!0),J.setUint16(20,T,!0),J.setUint16(22,Y,!0),J.setUint32(24,W,!0),J.setUint32(28,W*he,!0),J.setUint16(32,he,!0),J.setUint16(34,ue,!0),P(J,36,"data"),J.setUint32(40,M.length*fe,!0),T===1?E(J,44,M):b(J,44,M),j}$r.encodeWAV=w;function b(M,T,W){for(let Y=0;Y<W.length;Y++,T+=4)M.setFloat32(T,W[Y],!0)}function E(M,T,W){for(let Y=0;Y<W.length;Y++,T+=2){const ue=Math.max(-1,Math.min(1,W[Y]));M.setInt16(T,ue<0?ue*32768:ue*32767,!0)}}function P(M,T,W){for(let Y=0;Y<W.length;Y++)M.setUint8(T+Y,W.charCodeAt(Y))}async function O(M){const T=new OfflineAudioContext(1,1,44100),W=new FileReader;let Y=null;if(await new Promise(he=>{W.addEventListener("loadend",()=>{const j=W.result;T.decodeAudioData(j,J=>{Y=J,T.startRendering().then(()=>{console.log("Rendering completed successfully"),he()}).catch(se=>{console.error("Rendering failed: ",se)})},J=>{console.log("Error with decoding audio data: ",J)})}),W.readAsArrayBuffer(M)}),Y===null)throw Error("some shit");const ue=Y,fe=new Float32Array(ue.length);for(let he=0;he<ue.length;he++)for(let j=0;j<ue.numberOfChannels;j++){const J=ue.getChannelData(j)[he],se=fe[he];if(J===void 0||se===void 0)throw new Error("sample or out[i] is undefined");fe[he]=se+J}return{audio:fe,sampleRate:ue.sampleRate}}return $r.audioFileToArray=O,$r}var Wr={},Ds={exports:{}};var sf;function Tg(){return sf||(sf=1,(function(d,f){var w=(()=>{var b=Object.defineProperty,E=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,O=Object.prototype.hasOwnProperty,M=(h=>typeof ur<"u"?ur:typeof Proxy<"u"?new Proxy(h,{get:(_,k)=>(typeof ur<"u"?ur:_)[k]}):h)(function(h){if(typeof ur<"u")return ur.apply(this,arguments);throw Error('Dynamic require of "'+h+'" is not supported')}),T=(h,_)=>()=>(h&&(_=h(h=0)),_),W=(h,_)=>{for(var k in _)b(h,k,{get:_[k],enumerable:!0})},Y=(h,_,k,B)=>{if(_&&typeof _=="object"||typeof _=="function")for(let z of P(_))!O.call(h,z)&&z!==k&&b(h,z,{get:()=>_[z],enumerable:!(B=E(_,z))||B.enumerable});return h},ue=h=>Y(b({},"__esModule",{value:!0}),h),fe,he,j,J,se,Ge=T(()=>{fe=new Map,he=[],j=(h,_,k)=>{if(_&&typeof _.init=="function"&&typeof _.createInferenceSessionHandler=="function"){let B=fe.get(h);if(B===void 0)fe.set(h,{backend:_,priority:k});else{if(B.priority>k)return;if(B.priority===k&&B.backend!==_)throw new Error(`cannot register backend "${h}" using priority ${k}`)}if(k>=0){let z=he.indexOf(h);z!==-1&&he.splice(z,1);for(let V=0;V<he.length;V++)if(fe.get(he[V]).priority<=k){he.splice(V,0,h);return}he.push(h)}return}throw new TypeError("not a valid backend")},J=async h=>{let _=fe.get(h);if(!_)return"backend not found.";if(_.initialized)return _.backend;if(_.aborted)return _.error;{let k=!!_.initPromise;try{return k||(_.initPromise=_.backend.init(h)),await _.initPromise,_.initialized=!0,_.backend}catch(B){return k||(_.error=`${B}`,_.aborted=!0),_.error}finally{delete _.initPromise}}},se=async h=>{let _=h.executionProviders||[],k=_.map(q=>typeof q=="string"?q:q.name),B=k.length===0?he:k,z,V=[],L=new Set;for(let q of B){let ae=await J(q);typeof ae=="string"?V.push({name:q,err:ae}):(z||(z=ae),z===ae&&L.add(q))}if(!z)throw new Error(`no available backend found. ERR: ${V.map(q=>`[${q.name}] ${q.err}`).join(", ")}`);for(let{name:q,err:ae}of V)k.includes(q)&&console.warn(`removing requested execution provider "${q}" from session options because it is not available: ${ae}`);let N=_.filter(q=>L.has(typeof q=="string"?q:q.name));return[z,new Proxy(h,{get:(q,ae)=>ae==="executionProviders"?N:Reflect.get(q,ae)})]}}),et=T(()=>{Ge()}),$e,Ae=T(()=>{$e="1.24.3"}),_e,xe,ze=T(()=>{Ae(),_e="warning",xe={wasm:{},webgl:{},webgpu:{},versions:{common:$e},set logLevel(h){if(h!==void 0){if(typeof h!="string"||["verbose","info","warning","error","fatal"].indexOf(h)===-1)throw new Error(`Unsupported logging level: ${h}`);_e=h}},get logLevel(){return _e}},Object.defineProperty(xe,"logLevel",{enumerable:!0})}),me,mt=T(()=>{ze(),me=xe}),dt,Ct,Lt=T(()=>{dt=(h,_)=>{let k=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);k.width=h.dims[3],k.height=h.dims[2];let B=k.getContext("2d");if(B!=null){let z,V;_?.tensorLayout!==void 0&&_.tensorLayout==="NHWC"?(z=h.dims[2],V=h.dims[3]):(z=h.dims[3],V=h.dims[2]);let L=_?.format!==void 0?_.format:"RGB",N=_?.norm,q,ae;N===void 0||N.mean===void 0?q=[255,255,255,255]:typeof N.mean=="number"?q=[N.mean,N.mean,N.mean,N.mean]:(q=[N.mean[0],N.mean[1],N.mean[2],0],N.mean[3]!==void 0&&(q[3]=N.mean[3])),N===void 0||N.bias===void 0?ae=[0,0,0,0]:typeof N.bias=="number"?ae=[N.bias,N.bias,N.bias,N.bias]:(ae=[N.bias[0],N.bias[1],N.bias[2],0],N.bias[3]!==void 0&&(ae[3]=N.bias[3]));let le=V*z,te=0,Z=le,Ee=le*2,F=-1;L==="RGBA"?(te=0,Z=le,Ee=le*2,F=le*3):L==="RGB"?(te=0,Z=le,Ee=le*2):L==="RBG"&&(te=0,Ee=le,Z=le*2);for(let pe=0;pe<V;pe++)for(let ht=0;ht<z;ht++){let je=(h.data[te++]-ae[0])*q[0],Te=(h.data[Z++]-ae[1])*q[1],He=(h.data[Ee++]-ae[2])*q[2],ve=F===-1?255:(h.data[F++]-ae[3])*q[3];B.fillStyle="rgba("+je+","+Te+","+He+","+ve+")",B.fillRect(ht,pe,1,1)}if("toDataURL"in k)return k.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ct=(h,_)=>{let k=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),B;if(k!=null){let z,V,L;_?.tensorLayout!==void 0&&_.tensorLayout==="NHWC"?(z=h.dims[2],V=h.dims[1],L=h.dims[3]):(z=h.dims[3],V=h.dims[2],L=h.dims[1]);let N=_!==void 0&&_.format!==void 0?_.format:"RGB",q=_?.norm,ae,le;q===void 0||q.mean===void 0?ae=[255,255,255,255]:typeof q.mean=="number"?ae=[q.mean,q.mean,q.mean,q.mean]:(ae=[q.mean[0],q.mean[1],q.mean[2],255],q.mean[3]!==void 0&&(ae[3]=q.mean[3])),q===void 0||q.bias===void 0?le=[0,0,0,0]:typeof q.bias=="number"?le=[q.bias,q.bias,q.bias,q.bias]:(le=[q.bias[0],q.bias[1],q.bias[2],0],q.bias[3]!==void 0&&(le[3]=q.bias[3]));let te=V*z;if(_!==void 0&&(_.format!==void 0&&L===4&&_.format!=="RGBA"||L===3&&_.format!=="RGB"&&_.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let Z=4,Ee=0,F=1,pe=2,ht=3,je=0,Te=te,He=te*2,ve=-1;N==="RGBA"?(je=0,Te=te,He=te*2,ve=te*3):N==="RGB"?(je=0,Te=te,He=te*2):N==="RBG"&&(je=0,He=te,Te=te*2),B=k.createImageData(z,V);for(let Mt=0;Mt<V*z;Ee+=Z,F+=Z,pe+=Z,ht+=Z,Mt++)B.data[Ee]=(h.data[je++]-le[0])*ae[0],B.data[F]=(h.data[Te++]-le[1])*ae[1],B.data[pe]=(h.data[He++]-le[2])*ae[2],B.data[ht]=ve===-1?255:(h.data[ve++]-le[3])*ae[3]}else throw new Error("Can not access image data");return B}}),wt,ot,Jt,Ot,nt,_t,Sr=T(()=>{lr(),wt=(h,_)=>{if(h===void 0)throw new Error("Image buffer must be defined");if(_.height===void 0||_.width===void 0)throw new Error("Image height and width must be defined");if(_.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:k,width:B}=_,z=_.norm??{mean:255,bias:0},V,L;typeof z.mean=="number"?V=[z.mean,z.mean,z.mean,z.mean]:V=[z.mean[0],z.mean[1],z.mean[2],z.mean[3]??255],typeof z.bias=="number"?L=[z.bias,z.bias,z.bias,z.bias]:L=[z.bias[0],z.bias[1],z.bias[2],z.bias[3]??0];let N=_.format!==void 0?_.format:"RGBA",q=_.tensorFormat!==void 0&&_.tensorFormat!==void 0?_.tensorFormat:"RGB",ae=k*B,le=q==="RGBA"?new Float32Array(ae*4):new Float32Array(ae*3),te=4,Z=0,Ee=1,F=2,pe=3,ht=0,je=ae,Te=ae*2,He=-1;N==="RGB"&&(te=3,Z=0,Ee=1,F=2,pe=-1),q==="RGBA"?He=ae*3:q==="RBG"?(ht=0,Te=ae,je=ae*2):q==="BGR"&&(Te=0,je=ae,ht=ae*2);for(let ve=0;ve<ae;ve++,Z+=te,F+=te,Ee+=te,pe+=te)le[ht++]=(h[Z]+L[0])/V[0],le[je++]=(h[Ee]+L[1])/V[1],le[Te++]=(h[F]+L[2])/V[2],He!==-1&&pe!==-1&&(le[He++]=(h[pe]+L[3])/V[3]);return q==="RGBA"?new ut("float32",le,[1,4,k,B]):new ut("float32",le,[1,3,k,B])},ot=async(h,_)=>{let k=typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement,B=typeof ImageData<"u"&&h instanceof ImageData,z=typeof ImageBitmap<"u"&&h instanceof ImageBitmap,V=typeof h=="string",L,N=_??{},q=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},ae=le=>typeof HTMLCanvasElement<"u"&&le instanceof HTMLCanvasElement||le instanceof OffscreenCanvas?le.getContext("2d"):null;if(k){let le=q();le.width=h.width,le.height=h.height;let te=ae(le);if(te!=null){let Z=h.height,Ee=h.width;if(_!==void 0&&_.resizedHeight!==void 0&&_.resizedWidth!==void 0&&(Z=_.resizedHeight,Ee=_.resizedWidth),_!==void 0){if(N=_,_.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");N.tensorFormat="RGBA",N.height=Z,N.width=Ee}else N.tensorFormat="RGBA",N.height=Z,N.width=Ee;te.drawImage(h,0,0),L=te.getImageData(0,0,Ee,Z).data}else throw new Error("Can not access image data")}else if(B){let le,te;if(_!==void 0&&_.resizedWidth!==void 0&&_.resizedHeight!==void 0?(le=_.resizedHeight,te=_.resizedWidth):(le=h.height,te=h.width),_!==void 0&&(N=_),N.format="RGBA",N.height=le,N.width=te,_!==void 0){let Z=q();Z.width=te,Z.height=le;let Ee=ae(Z);if(Ee!=null)Ee.putImageData(h,0,0),L=Ee.getImageData(0,0,te,le).data;else throw new Error("Can not access image data")}else L=h.data}else if(z){if(_===void 0)throw new Error("Please provide image config with format for Imagebitmap");let le=q();le.width=h.width,le.height=h.height;let te=ae(le);if(te!=null){let Z=h.height,Ee=h.width;return te.drawImage(h,0,0,Ee,Z),L=te.getImageData(0,0,Ee,Z).data,N.height=Z,N.width=Ee,wt(L,N)}else throw new Error("Can not access image data")}else{if(V)return new Promise((le,te)=>{let Z=q(),Ee=ae(Z);if(!h||!Ee)return te();let F=new Image;F.crossOrigin="Anonymous",F.src=h,F.onload=()=>{Z.width=F.width,Z.height=F.height,Ee.drawImage(F,0,0,Z.width,Z.height);let pe=Ee.getImageData(0,0,Z.width,Z.height);N.height=Z.height,N.width=Z.width,le(wt(pe.data,N))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(L!==void 0)return wt(L,N);throw new Error("Input data provided is not supported - aborted tensor creation")},Jt=(h,_)=>{let{width:k,height:B,download:z,dispose:V}=_,L=[1,B,k,4];return new ut({location:"texture",type:"float32",texture:h,dims:L,download:z,dispose:V})},Ot=(h,_)=>{let{dataType:k,dims:B,download:z,dispose:V}=_;return new ut({location:"gpu-buffer",type:k??"float32",gpuBuffer:h,dims:B,download:z,dispose:V})},nt=(h,_)=>{let{dataType:k,dims:B,download:z,dispose:V}=_;return new ut({location:"ml-tensor",type:k??"float32",mlTensor:h,dims:B,download:z,dispose:V})},_t=(h,_,k)=>new ut({location:"cpu-pinned",type:h,data:_,dims:k??[_.length]})}),ft,xt,Et,er,tr=T(()=>{ft=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),xt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Et=!1,er=()=>{if(!Et){Et=!0;let h=typeof BigInt64Array<"u"&&BigInt64Array.from,_=typeof BigUint64Array<"u"&&BigUint64Array.from,k=globalThis.Float16Array,B=typeof k<"u"&&k.from;h&&(ft.set("int64",BigInt64Array),xt.set(BigInt64Array,"int64")),_&&(ft.set("uint64",BigUint64Array),xt.set(BigUint64Array,"uint64")),B?(ft.set("float16",k),xt.set(k,"float16")):ft.set("float16",Uint16Array)}}}),rr,ei,Qi=T(()=>{lr(),rr=h=>{let _=1;for(let k=0;k<h.length;k++){let B=h[k];if(typeof B!="number"||!Number.isSafeInteger(B))throw new TypeError(`dims[${k}] must be an integer, got: ${B}`);if(B<0)throw new RangeError(`dims[${k}] must be a non-negative integer, got: ${B}`);_*=B}return _},ei=(h,_)=>{switch(h.location){case"cpu":return new ut(h.type,h.data,_);case"cpu-pinned":return new ut({location:"cpu-pinned",data:h.data,type:h.type,dims:_});case"texture":return new ut({location:"texture",texture:h.texture,type:h.type,dims:_});case"gpu-buffer":return new ut({location:"gpu-buffer",gpuBuffer:h.gpuBuffer,type:h.type,dims:_});case"ml-tensor":return new ut({location:"ml-tensor",mlTensor:h.mlTensor,type:h.type,dims:_});default:throw new Error(`tensorReshape: tensor location ${h.location} is not supported`)}}}),ut,lr=T(()=>{Lt(),Sr(),tr(),Qi(),ut=class{constructor(h,_,k){er();let B,z;if(typeof h=="object"&&"location"in h)switch(this.dataLocation=h.location,B=h.type,z=h.dims,h.location){case"cpu-pinned":{let L=ft.get(B);if(!L)throw new TypeError(`unsupported type "${B}" to create tensor from pinned buffer`);if(!(h.data instanceof L))throw new TypeError(`buffer should be of type ${L.name}`);this.cpuData=h.data;break}case"texture":{if(B!=="float32")throw new TypeError(`unsupported type "${B}" to create tensor from texture`);this.gpuTextureData=h.texture,this.downloader=h.download,this.disposer=h.dispose;break}case"gpu-buffer":{if(B!=="float32"&&B!=="float16"&&B!=="int32"&&B!=="int64"&&B!=="uint32"&&B!=="uint8"&&B!=="bool"&&B!=="uint4"&&B!=="int4")throw new TypeError(`unsupported type "${B}" to create tensor from gpu buffer`);this.gpuBufferData=h.gpuBuffer,this.downloader=h.download,this.disposer=h.dispose;break}case"ml-tensor":{if(B!=="float32"&&B!=="float16"&&B!=="int32"&&B!=="int64"&&B!=="uint32"&&B!=="uint64"&&B!=="int8"&&B!=="uint8"&&B!=="bool"&&B!=="uint4"&&B!=="int4")throw new TypeError(`unsupported type "${B}" to create tensor from MLTensor`);this.mlTensorData=h.mlTensor,this.downloader=h.download,this.disposer=h.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let L,N;if(typeof h=="string")if(B=h,N=k,h==="string"){if(!Array.isArray(_))throw new TypeError("A string tensor's data must be a string array.");L=_}else{let q=ft.get(h);if(q===void 0)throw new TypeError(`Unsupported tensor type: ${h}.`);if(Array.isArray(_)){if(h==="float16"&&q===Uint16Array||h==="uint4"||h==="int4")throw new TypeError(`Creating a ${h} tensor from number array is not supported. Please use ${q.name} as data.`);h==="uint64"||h==="int64"?L=q.from(_,BigInt):L=q.from(_)}else if(_ instanceof q)L=_;else if(_ instanceof Uint8ClampedArray)if(h==="uint8")L=Uint8Array.from(_);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(h==="float16"&&_ instanceof Uint16Array&&q!==Uint16Array)L=new globalThis.Float16Array(_.buffer,_.byteOffset,_.length);else throw new TypeError(`A ${B} tensor's data must be type of ${q}`)}else if(N=_,Array.isArray(h)){if(h.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let q=typeof h[0];if(q==="string")B="string",L=h;else if(q==="boolean")B="bool",L=Uint8Array.from(h);else throw new TypeError(`Invalid element type of data array: ${q}.`)}else if(h instanceof Uint8ClampedArray)B="uint8",L=Uint8Array.from(h);else{let q=xt.get(h.constructor);if(q===void 0)throw new TypeError(`Unsupported type for tensor data: ${h.constructor}.`);B=q,L=h}if(N===void 0)N=[L.length];else if(!Array.isArray(N))throw new TypeError("A tensor's dims must be a number array");z=N,this.cpuData=L,this.dataLocation="cpu"}let V=rr(z);if(this.cpuData&&V!==this.cpuData.length&&!((B==="uint4"||B==="int4")&&Math.ceil(V/2)===this.cpuData.length))throw new Error(`Tensor's size(${V}) does not match data length(${this.cpuData.length}).`);this.type=B,this.dims=z,this.size=V}static async fromImage(h,_){return ot(h,_)}static fromTexture(h,_){return Jt(h,_)}static fromGpuBuffer(h,_){return Ot(h,_)}static fromMLTensor(h,_){return nt(h,_)}static fromPinnedBuffer(h,_,k){return _t(h,_,k)}toDataURL(h){return dt(this,h)}toImageData(h){return Ct(this,h)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(h){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let _=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=_,h&&this.disposer&&(this.disposer(),this.disposer=void 0),_}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(h){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ei(this,h)}}}),gt,ti=T(()=>{lr(),gt=ut}),ir,Br,St,pt,Bt,Dt,ri=T(()=>{ze(),ir=(h,_)=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||console.timeStamp(`${h}::ORT::${_}`)},Br=(h,_)=>{let k=new Error().stack?.split(/\r\n|\r|\n/g)||[],B=!1;for(let z=0;z<k.length;z++){if(B&&!k[z].includes("TRACE_FUNC")){let V=`FUNC_${h}::${k[z].trim().split(" ")[1]}`;_&&(V+=`::${_}`),ir("CPU",V);return}k[z].includes("TRACE_FUNC")&&(B=!0)}},St=h=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||Br("BEGIN",h)},pt=h=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||Br("END",h)},Bt=h=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||console.time(`ORT::${h}`)},Dt=h=>{(typeof xe.trace>"u"?!xe.wasm.trace:!xe.trace)||console.timeEnd(`ORT::${h}`)}}),ii,Yi=T(()=>{Ge(),ti(),ri(),ii=class Nf{constructor(_){this.handler=_}async run(_,k,B){St(),Bt("InferenceSession.run");let z={},V={};if(typeof _!="object"||_===null||_ instanceof gt||Array.isArray(_))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let L=!0;if(typeof k=="object"){if(k===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(k instanceof gt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(k)){if(k.length===0)throw new TypeError("'fetches' cannot be an empty array.");L=!1;for(let ae of k){if(typeof ae!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(ae)===-1)throw new RangeError(`'fetches' contains invalid output name: ${ae}.`);z[ae]=null}if(typeof B=="object"&&B!==null)V=B;else if(typeof B<"u")throw new TypeError("'options' must be an object.")}else{let ae=!1,le=Object.getOwnPropertyNames(k);for(let te of this.outputNames)if(le.indexOf(te)!==-1){let Z=k[te];(Z===null||Z instanceof gt)&&(ae=!0,L=!1,z[te]=Z)}if(ae){if(typeof B=="object"&&B!==null)V=B;else if(typeof B<"u")throw new TypeError("'options' must be an object.")}else V=k}}else if(typeof k<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let ae of this.inputNames)if(typeof _[ae]>"u")throw new Error(`input '${ae}' is missing in 'feeds'.`);if(L)for(let ae of this.outputNames)z[ae]=null;let N=await this.handler.run(_,z,V),q={};for(let ae in N)if(Object.hasOwnProperty.call(N,ae)){let le=N[ae];le instanceof gt?q[ae]=le:q[ae]=new gt(le.type,le.data,le.dims)}return Dt("InferenceSession.run"),pt(),q}async release(){return this.handler.dispose()}static async create(_,k,B,z){St(),Bt("InferenceSession.create");let V,L={};if(typeof _=="string"){if(V=_,typeof k=="object"&&k!==null)L=k;else if(typeof k<"u")throw new TypeError("'options' must be an object.")}else if(_ instanceof Uint8Array){if(V=_,typeof k=="object"&&k!==null)L=k;else if(typeof k<"u")throw new TypeError("'options' must be an object.")}else if(_ instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&_ instanceof SharedArrayBuffer){let le=_,te=0,Z=_.byteLength;if(typeof k=="object"&&k!==null)L=k;else if(typeof k=="number"){if(te=k,!Number.isSafeInteger(te))throw new RangeError("'byteOffset' must be an integer.");if(te<0||te>=le.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${le.byteLength}).`);if(Z=_.byteLength-te,typeof B=="number"){if(Z=B,!Number.isSafeInteger(Z))throw new RangeError("'byteLength' must be an integer.");if(Z<=0||te+Z>le.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${le.byteLength-te}].`);if(typeof z=="object"&&z!==null)L=z;else if(typeof z<"u")throw new TypeError("'options' must be an object.")}else if(typeof B<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof k<"u")throw new TypeError("'options' must be an object.");V=new Uint8Array(le,te,Z)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[N,q]=await se(L),ae=await N.createInferenceSessionHandler(V,q);return Dt("InferenceSession.create"),pt(),new Nf(ae)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Mr,Ji=T(()=>{Yi(),Mr=ii}),dr=T(()=>{}),Xt=T(()=>{}),v=T(()=>{}),D=T(()=>{}),A={};W(A,{InferenceSession:()=>Mr,TRACE:()=>ir,TRACE_EVENT_BEGIN:()=>Bt,TRACE_EVENT_END:()=>Dt,TRACE_FUNC_BEGIN:()=>St,TRACE_FUNC_END:()=>pt,Tensor:()=>gt,env:()=>me,registerBackend:()=>j});var X=T(()=>{et(),mt(),Ji(),ti(),dr(),Xt(),ri(),v(),D()}),ne=T(()=>{}),re={};W(re,{default:()=>Pe});var ge,Ie,Pe,Ne=T(()=>{cn(),Wt(),Er(),ge="ort-wasm-proxy-worker",Ie=globalThis.self?.name===ge,Ie&&(self.onmessage=h=>{let{type:_,in:k}=h.data;try{switch(_){case"init-wasm":ai(k.wasm).then(()=>{Oi(k).then(()=>{postMessage({type:_})},B=>{postMessage({type:_,err:B})})},B=>{postMessage({type:_,err:B})});break;case"init-ep":{let{epName:B,env:z}=k;Ai(z,B).then(()=>{postMessage({type:_})},V=>{postMessage({type:_,err:V})});break}case"copy-from":{let{buffer:B}=k,z=Ye(B);postMessage({type:_,out:z});break}case"create":{let{model:B,options:z}=k;Qt(B,z).then(V=>{postMessage({type:_,out:V})},V=>{postMessage({type:_,err:V})});break}case"release":Bi(k),postMessage({type:_});break;case"run":{let{sessionId:B,inputIndices:z,inputs:V,outputIndices:L,options:N}=k;K(B,z,V,L,new Array(L.length).fill(null),N).then(q=>{q.some(ae=>ae[3]!=="cpu")?postMessage({type:_,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:_,out:q},Mi([...V,...q]))},q=>{postMessage({type:_,err:q})});break}case"end-profiling":Gr(k),postMessage({type:_});break;default:}}catch(B){postMessage({type:_,err:B})}}),Pe=Ie?null:h=>new Worker(h??ie,{type:"classic",name:ge})}),Fe,Qe,ie,Se,ce,Oe,qe,tt,ct,lt,At,yt,nr,Er=T(()=>{ne(),Fe=typeof location>"u"?void 0:location.origin,Qe=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,ie=Qe(),Se=()=>{if(ie&&!ie.startsWith("blob:"))return ie.substring(0,ie.lastIndexOf("/")+1)},ce=(h,_)=>{try{let k=_??ie;return(k?new URL(h,k):new URL(h)).origin===Fe}catch{return!1}},Oe=(h,_)=>{let k=_??ie;try{return(k?new URL(h,k):new URL(h)).href}catch{return}},qe=(h,_)=>`${_??"./"}${h}`,tt=async h=>{let _=await(await fetch(h,{credentials:"same-origin"})).blob();return URL.createObjectURL(_)},ct=async h=>(await import(h)).default,lt=(Ne(),ue(re)).default,At=async()=>{if(!ie)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ce(ie))return[void 0,lt()];let h=await tt(ie);return[h,lt(h)]},yt=void 0,nr=async(h,_,k,B)=>{let z=yt&&!(h||_);if(z)if(ie)z=ce(ie)||B&&!k;else if(B&&!k)z=!0;else throw new Error("cannot determine the script source URL.");if(z)return[void 0,yt];{let V="ort-wasm-simd-threaded.mjs",L=h??Oe(V,_),N=k&&L&&!ce(L,_),q=N?await tt(L):L??qe(V,_);return[N?q:void 0,await ct(q)]}}}),Dr,Pr,pr,ni,en,tn,rn,ai,Ue,Wt=T(()=>{Er(),Pr=!1,pr=!1,ni=!1,en=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},tn=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},rn=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ai=async h=>{if(Pr)return Promise.resolve();if(pr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ni)throw new Error("previous call to 'initializeWebAssembly()' failed.");pr=!0;let _=h.initTimeout,k=h.numThreads;if(h.simd!==!1){if(h.simd==="relaxed"){if(!rn())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!tn())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let B=en();k>1&&!B&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+k+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),h.numThreads=k=1);let z=h.wasmPaths,V=typeof z=="string"?z:void 0,L=z?.mjs,N=L?.href??L,q=z?.wasm,ae=q?.href??q,le=h.wasmBinary,[te,Z]=await nr(N,V,k>1,!!le||!!ae),Ee=!1,F=[];if(_>0&&F.push(new Promise(pe=>{setTimeout(()=>{Ee=!0,pe()},_)})),F.push(new Promise((pe,ht)=>{let je={numThreads:k};if(le)je.wasmBinary=le,je.locateFile=Te=>Te;else if(ae||V)je.locateFile=Te=>ae??V+Te;else if(N&&N.indexOf("blob:")!==0)je.locateFile=Te=>new URL(Te,N).href;else if(te){let Te=Se();Te&&(je.locateFile=He=>Te+He)}Z(je).then(Te=>{pr=!1,Pr=!0,Dr=Te,pe(),te&&URL.revokeObjectURL(te)},Te=>{pr=!1,ni=!0,ht(Te)})})),await Promise.race(F),Ee)throw new Error(`WebAssembly backend initializing failed due to timeout: ${_}ms`)},Ue=()=>{if(Pr&&Dr)return Dr;throw new Error("WebAssembly is not initialized yet.")}}),$t,Ur,Re,si=T(()=>{Wt(),$t=(h,_)=>{let k=Ue(),B=k.lengthBytesUTF8(h)+1,z=k._malloc(B);return k.stringToUTF8(h,z,B),_.push(z),z},Ur=(h,_,k,B)=>{if(typeof h=="object"&&h!==null){if(k.has(h))throw new Error("Circular reference in options");k.add(h)}Object.entries(h).forEach(([z,V])=>{let L=_?_+z:z;if(typeof V=="object")Ur(V,L+".",k,B);else if(typeof V=="string"||typeof V=="number")B(L,V.toString());else if(typeof V=="boolean")B(L,V?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof V}`)})},Re=h=>{let _=Ue(),k=_.stackSave();try{let B=_.PTR_SIZE,z=_.stackAlloc(2*B);_._OrtGetLastError(z,z+B);let V=Number(_.getValue(z,B===4?"i32":"i64")),L=_.getValue(z+B,"*"),N=L?_.UTF8ToString(L):"";throw new Error(`${h} ERROR_CODE: ${V}, ERROR_MESSAGE: ${N}`)}finally{_.stackRestore(k)}}}),nn,Ea=T(()=>{Wt(),si(),nn=h=>{let _=Ue(),k=0,B=[],z=h||{};try{if(h?.logSeverityLevel===void 0)z.logSeverityLevel=2;else if(typeof h.logSeverityLevel!="number"||!Number.isInteger(h.logSeverityLevel)||h.logSeverityLevel<0||h.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${h.logSeverityLevel}`);if(h?.logVerbosityLevel===void 0)z.logVerbosityLevel=0;else if(typeof h.logVerbosityLevel!="number"||!Number.isInteger(h.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${h.logVerbosityLevel}`);h?.terminate===void 0&&(z.terminate=!1);let V=0;return h?.tag!==void 0&&(V=$t(h.tag,B)),k=_._OrtCreateRunOptions(z.logSeverityLevel,z.logVerbosityLevel,!!z.terminate,V),k===0&&Re("Can't create run options."),h?.extra!==void 0&&Ur(h.extra,"",new WeakSet,(L,N)=>{let q=$t(L,B),ae=$t(N,B);_._OrtAddRunConfigEntry(k,q,ae)!==0&&Re(`Can't set a run config entry: ${L} - ${N}.`)}),[k,B]}catch(V){throw k!==0&&_._OrtReleaseRunOptions(k),B.forEach(L=>_._free(L)),V}}}),an,sn,on,cr,un,ln,Ta=T(()=>{Wt(),si(),an=h=>{switch(h){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${h}`)}},sn=h=>{switch(h){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${h}`)}},on=h=>{h.extra||(h.extra={}),h.extra.session||(h.extra.session={});let _=h.extra.session;_.use_ort_model_bytes_directly||(_.use_ort_model_bytes_directly="1"),h.executionProviders&&h.executionProviders.some(k=>(typeof k=="string"?k:k.name)==="webgpu")&&(h.enableMemPattern=!1)},cr=(h,_,k,B)=>{let z=$t(_,B),V=$t(k,B);Ue()._OrtAddSessionConfigEntry(h,z,V)!==0&&Re(`Can't set a session config entry: ${_} - ${k}.`)},un=async(h,_,k)=>{let B=_.executionProviders;for(let z of B){let V=typeof z=="string"?z:z.name,L=[];switch(V){case"webnn":if(V="WEBNN",typeof z!="string"){let te=z?.deviceType;te&&cr(h,"deviceType",te,k)}break;case"webgpu":if(V="JS",typeof z!="string"){let te=z;if(te?.preferredLayout){if(te.preferredLayout!=="NCHW"&&te.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${te.preferredLayout}`);cr(h,"preferredLayout",te.preferredLayout,k)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${V}`)}let N=$t(V,k),q=L.length,ae=0,le=0;if(q>0){ae=Ue()._malloc(q*Ue().PTR_SIZE),k.push(ae),le=Ue()._malloc(q*Ue().PTR_SIZE),k.push(le);for(let te=0;te<q;te++)Ue().setValue(ae+te*Ue().PTR_SIZE,L[te][0],"*"),Ue().setValue(le+te*Ue().PTR_SIZE,L[te][1],"*")}await Ue()._OrtAppendExecutionProvider(h,N,ae,le,q)!==0&&Re(`Can't append execution provider: ${V}.`)}},ln=async h=>{let _=Ue(),k=0,B=[],z=h||{};on(z);try{let V=an(z.graphOptimizationLevel??"all"),L=sn(z.executionMode??"sequential"),N=typeof z.logId=="string"?$t(z.logId,B):0,q=z.logSeverityLevel??2;if(!Number.isInteger(q)||q<0||q>4)throw new Error(`log severity level is not valid: ${q}`);let ae=z.logVerbosityLevel??0;if(!Number.isInteger(ae)||ae<0||ae>4)throw new Error(`log verbosity level is not valid: ${ae}`);let le=typeof z.optimizedModelFilePath=="string"?$t(z.optimizedModelFilePath,B):0;if(k=_._OrtCreateSessionOptions(V,!!z.enableCpuMemArena,!!z.enableMemPattern,L,!!z.enableProfiling,0,N,q,ae,le),k===0&&Re("Can't create session options."),z.executionProviders&&await un(k,z,B),z.enableGraphCapture!==void 0){if(typeof z.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${z.enableGraphCapture}`);cr(k,"enableGraphCapture",z.enableGraphCapture.toString(),B)}if(z.freeDimensionOverrides)for(let[te,Z]of Object.entries(z.freeDimensionOverrides)){if(typeof te!="string")throw new Error(`free dimension override name must be a string: ${te}`);if(typeof Z!="number"||!Number.isInteger(Z)||Z<0)throw new Error(`free dimension override value must be a non-negative integer: ${Z}`);let Ee=$t(te,B);_._OrtAddFreeDimensionOverride(k,Ee,Z)!==0&&Re(`Can't set a free dimension override: ${te} - ${Z}.`)}return z.extra!==void 0&&Ur(z.extra,"",new WeakSet,(te,Z)=>{cr(k,te,Z,B)}),[k,B]}catch(V){throw k!==0&&_._OrtReleaseSessionOptions(k)!==0&&Re("Can't release session options."),B.forEach(L=>_._free(L)),V}}}),Gt,jt,Ht,oi,ui,li,di,Ci,Me=T(()=>{Gt=h=>{switch(h){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${h}`)}},jt=h=>{switch(h){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${h}`)}},Ht=(h,_)=>{let k=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][h],B=typeof _=="number"?_:_.reduce((z,V)=>z*V,1);return k>0?Math.ceil(B*k):void 0},oi=h=>{switch(h){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${h}`)}},ui=h=>{switch(h){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${h}`)}},li=h=>h==="float32"||h==="float16"||h==="int32"||h==="int64"||h==="uint32"||h==="uint8"||h==="bool"||h==="uint4"||h==="int4",di=h=>h==="float32"||h==="float16"||h==="int32"||h==="int64"||h==="uint32"||h==="uint64"||h==="int8"||h==="uint8"||h==="bool"||h==="uint4"||h==="int4",Ci=h=>{switch(h){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${h}`)}}}),pi,dn=T(()=>{ne(),pi=async h=>{if(typeof h=="string"){let _=await fetch(h);if(!_.ok)throw new Error(`failed to load external data file: ${h}`);let k=_.headers.get("Content-Length"),B=k?parseInt(k,10):0;if(B<1073741824)return new Uint8Array(await _.arrayBuffer());{if(!_.body)throw new Error(`failed to load external data file: ${h}, no response body.`);let z=_.body.getReader(),V;try{V=new ArrayBuffer(B)}catch(N){if(N instanceof RangeError){let q=Math.ceil(B/65536);V=new WebAssembly.Memory({initial:q,maximum:q}).buffer}else throw N}let L=0;for(;;){let{done:N,value:q}=await z.read();if(N)break;let ae=q.byteLength;new Uint8Array(V,L,ae).set(q),L+=ae}return new Uint8Array(V,0,B)}}else return h instanceof Blob?new Uint8Array(await h.arrayBuffer()):h instanceof Uint8Array?h:new Uint8Array(h)}}),pn,Oi,Ai,Tr,zi,Ri,Ye,Qt,Bi,kr,K,Gr,Mi,cn=T(()=>{X(),Ea(),Ta(),Me(),Wt(),si(),dn(),pn=(h,_)=>{Ue()._OrtInit(h,_)!==0&&Re("Can't initialize onnxruntime.")},Oi=async h=>{pn(h.wasm.numThreads,ui(h.logLevel))},Ai=async(h,_)=>{Ue().asyncInit?.();let k=h.webgpu.adapter;if(_==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(k){if(typeof k.limits!="object"||typeof k.features!="object"||typeof k.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let B=h.webgpu.powerPreference;if(B!==void 0&&B!=="low-power"&&B!=="high-performance")throw new Error(`Invalid powerPreference setting: "${B}"`);let z=h.webgpu.forceFallbackAdapter;if(z!==void 0&&typeof z!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${z}"`);if(k=await navigator.gpu.requestAdapter({powerPreference:B,forceFallbackAdapter:z}),!k)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(_==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},Tr=new Map,zi=h=>{let _=Ue(),k=_.stackSave();try{let B=_.PTR_SIZE,z=_.stackAlloc(2*B);_._OrtGetInputOutputCount(h,z,z+B)!==0&&Re("Can't get session input/output count.");let V=B===4?"i32":"i64";return[Number(_.getValue(z,V)),Number(_.getValue(z+B,V))]}finally{_.stackRestore(k)}},Ri=(h,_)=>{let k=Ue(),B=k.stackSave(),z=0;try{let V=k.PTR_SIZE,L=k.stackAlloc(2*V);k._OrtGetInputOutputMetadata(h,_,L,L+V)!==0&&Re("Can't get session input/output metadata.");let N=Number(k.getValue(L,"*"));z=Number(k.getValue(L+V,"*"));let q=k.HEAP32[z/4];if(q===0)return[N,0];let ae=k.HEAPU32[z/4+1],le=[];for(let te=0;te<ae;te++){let Z=Number(k.getValue(z+8+te*V,"*"));le.push(Z!==0?k.UTF8ToString(Z):Number(k.getValue(z+8+(te+ae)*V,"*")))}return[N,q,le]}finally{k.stackRestore(B),z!==0&&k._OrtFree(z)}},Ye=h=>{let _=Ue(),k=_._malloc(h.byteLength);if(k===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${h.byteLength}.`);return _.HEAPU8.set(h,k),[k,h.byteLength]},Qt=async(h,_)=>{let k,B,z=Ue();Array.isArray(h)?[k,B]=h:h.buffer===z.HEAPU8.buffer?[k,B]=[h.byteOffset,h.byteLength]:[k,B]=Ye(h);let V=0,L=0,N=[],q=[],ae=[];try{if([L,N]=await ln(_),_?.externalData&&z.mountExternalData){let Te=[];for(let He of _.externalData){let ve=typeof He=="string"?He:He.path;Te.push(pi(typeof He=="string"?He:He.data).then(Mt=>{z.mountExternalData(ve,Mt)}))}await Promise.all(Te)}for(let Te of _?.executionProviders??[])if((typeof Te=="string"?Te:Te.name)==="webnn"){if(z.shouldTransferToMLTensor=!1,typeof Te!="string"){let He=Te,ve=He?.context,Mt=He?.gpuDevice,Pt=He?.deviceType,Or=He?.powerPreference;ve?z.currentContext=ve:Mt?z.currentContext=await z.webnnCreateMLContext(Mt):z.currentContext=await z.webnnCreateMLContext({deviceType:Pt,powerPreference:Or})}else z.currentContext=await z.webnnCreateMLContext();break}V=await z._OrtCreateSession(k,B,L),z.webgpuOnCreateSession?.(V),V===0&&Re("Can't create a session."),z.jsepOnCreateSession?.(),z.currentContext&&(z.webnnRegisterMLContext(V,z.currentContext),z.currentContext=void 0,z.shouldTransferToMLTensor=!0);let[le,te]=zi(V),Z=!!_?.enableGraphCapture,Ee=[],F=[],pe=[],ht=[],je=[];for(let Te=0;Te<le;Te++){let[He,ve,Mt]=Ri(V,Te);He===0&&Re("Can't get an input name."),q.push(He);let Pt=z.UTF8ToString(He);Ee.push(Pt),pe.push(ve===0?{name:Pt,isTensor:!1}:{name:Pt,isTensor:!0,type:jt(ve),shape:Mt})}for(let Te=0;Te<te;Te++){let[He,ve,Mt]=Ri(V,Te+le);He===0&&Re("Can't get an output name."),ae.push(He);let Pt=z.UTF8ToString(He);F.push(Pt),ht.push(ve===0?{name:Pt,isTensor:!1}:{name:Pt,isTensor:!0,type:jt(ve),shape:Mt})}return Tr.set(V,[V,q,ae,null,Z,!1]),[V,Ee,F,pe,ht]}catch(le){throw q.forEach(te=>z._OrtFree(te)),ae.forEach(te=>z._OrtFree(te)),V!==0&&z._OrtReleaseSession(V)!==0&&Re("Can't release session."),le}finally{z._free(k),L!==0&&z._OrtReleaseSessionOptions(L)!==0&&Re("Can't release session options."),N.forEach(le=>z._free(le)),z.unmountExternalData?.()}},Bi=h=>{let _=Ue(),k=Tr.get(h);if(!k)throw new Error(`cannot release session. invalid session id: ${h}`);let[B,z,V,L,N]=k;L&&(N&&_._OrtClearBoundOutputs(L.handle)!==0&&Re("Can't clear bound outputs."),_._OrtReleaseBinding(L.handle)!==0&&Re("Can't release IO binding.")),_.jsepOnReleaseSession?.(h),_.webnnOnReleaseSession?.(h),_.webgpuOnReleaseSession?.(h),z.forEach(q=>_._OrtFree(q)),V.forEach(q=>_._OrtFree(q)),_._OrtReleaseSession(B)!==0&&Re("Can't release session."),Tr.delete(h)},kr=async(h,_,k,B,z,V,L=!1)=>{if(!h){_.push(0);return}let N=Ue(),q=N.PTR_SIZE,ae=h[0],le=h[1],te=h[3],Z=te,Ee,F;if(ae==="string"&&(te==="gpu-buffer"||te==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(L&&te!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${V} when enableGraphCapture is true.`);if(te==="gpu-buffer"){let je=h[2].gpuBuffer;F=Ht(Gt(ae),le);{let Te=N.jsepRegisterBuffer;if(!Te)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');Ee=Te(B,V,je,F)}}else if(te==="ml-tensor"){let je=h[2].mlTensor;F=Ht(Gt(ae),le);let Te=N.webnnRegisterMLTensor;if(!Te)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');Ee=Te(B,je,Gt(ae),le)}else{let je=h[2];if(Array.isArray(je)){F=q*je.length,Ee=N._malloc(F),k.push(Ee);for(let Te=0;Te<je.length;Te++){if(typeof je[Te]!="string")throw new TypeError(`tensor data at index ${Te} is not a string`);N.setValue(Ee+Te*q,$t(je[Te],k),"*")}}else{let Te=N.webnnIsGraphInput,He=N.webnnIsGraphOutput;if(ae!=="string"&&Te&&He){let ve=N.UTF8ToString(z);if(Te(B,ve)||He(B,ve)){let Mt=Gt(ae);F=Ht(Mt,le),Z="ml-tensor";let Pt=N.webnnCreateTemporaryTensor,Or=N.webnnUploadTensor;if(!Pt||!Or)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let Zr=await Pt(B,Mt,le);Or(Zr,new Uint8Array(je.buffer,je.byteOffset,je.byteLength)),Ee=Zr}else F=je.byteLength,Ee=N._malloc(F),k.push(Ee),N.HEAPU8.set(new Uint8Array(je.buffer,je.byteOffset,F),Ee)}else F=je.byteLength,Ee=N._malloc(F),k.push(Ee),N.HEAPU8.set(new Uint8Array(je.buffer,je.byteOffset,F),Ee)}}let pe=N.stackSave(),ht=N.stackAlloc(4*le.length);try{le.forEach((Te,He)=>N.setValue(ht+He*q,Te,q===4?"i32":"i64"));let je=N._OrtCreateTensor(Gt(ae),Ee,F,ht,le.length,Ci(Z));je===0&&Re(`Can't create tensor for input/output. session=${B}, index=${V}.`),_.push(je)}finally{N.stackRestore(pe)}},K=async(h,_,k,B,z,V)=>{let L=Ue(),N=L.PTR_SIZE,q=Tr.get(h);if(!q)throw new Error(`cannot run inference. invalid session id: ${h}`);let ae=q[0],le=q[1],te=q[2],Z=q[3],Ee=q[4];q[5];let F=_.length,pe=B.length,ht=0,je=[],Te=[],He=[],ve=[],Mt=[],Pt=L.stackSave(),Or=L.stackAlloc(F*N),Zr=L.stackAlloc(F*N),Gi=L.stackAlloc(pe*N),bn=L.stackAlloc(pe*N);try{[ht,je]=nn(V),Bt("wasm prepareInputOutputTensor");for(let Ke=0;Ke<F;Ke++)await kr(k[Ke],Te,ve,h,le[_[Ke]],_[Ke],Ee);for(let Ke=0;Ke<pe;Ke++)await kr(z[Ke],He,ve,h,te[B[Ke]],F+B[Ke],Ee);Dt("wasm prepareInputOutputTensor");for(let Ke=0;Ke<F;Ke++)L.setValue(Or+Ke*N,Te[Ke],"*"),L.setValue(Zr+Ke*N,le[_[Ke]],"*");for(let Ke=0;Ke<pe;Ke++)L.setValue(Gi+Ke*N,He[Ke],"*"),L.setValue(bn+Ke*N,te[B[Ke]],"*");L.jsepOnRunStart?.(ae),L.webnnOnRunStart?.(ae);let bt;bt=await L._OrtRun(ae,Zr,Or,F,bn,pe,Gi,ht),bt!==0&&Re("failed to call OrtRun().");let ar=[],vn=[];Bt("wasm ProcessOutputTensor");for(let Ke=0;Ke<pe;Ke++){let Yt=Number(L.getValue(Gi+Ke*N,"*"));if(Yt===He[Ke]||Mt.includes(He[Ke])){ar.push(z[Ke]),Yt!==He[Ke]&&L._OrtReleaseTensor(Yt)!==0&&Re("Can't release tensor.");continue}let Qn=L.stackSave(),mr=L.stackAlloc(4*N),mi=!1,Tt,Ft=0;try{L._OrtGetTensorData(Yt,mr,mr+N,mr+2*N,mr+3*N)!==0&&Re(`Can't access output tensor data on index ${Ke}.`);let ji=N===4?"i32":"i64",gi=Number(L.getValue(mr,ji));Ft=L.getValue(mr+N,"*");let $n=L.getValue(mr+N*2,"*"),Yn=Number(L.getValue(mr+N*3,ji)),zt=[];for(let kt=0;kt<Yn;kt++)zt.push(Number(L.getValue($n+kt*N,ji)));L._OrtFree($n)!==0&&Re("Can't free memory for tensor dims.");let gr=zt.reduce((kt,vt)=>kt*vt,1);Tt=jt(gi);let Xr=Z?.outputPreferredLocations[B[Ke]];if(Tt==="string"){if(Xr==="gpu-buffer"||Xr==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let kt=[];for(let vt=0;vt<gr;vt++){let sr=L.getValue(Ft+vt*N,"*"),Jn=L.getValue(Ft+(vt+1)*N,"*"),ea=vt===gr-1?void 0:Jn-sr;kt.push(L.UTF8ToString(sr,ea))}ar.push([Tt,zt,kt,"cpu"])}else if(Xr==="gpu-buffer"&&gr>0){let kt=L.jsepGetBuffer;if(!kt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let vt=kt(Ft),sr=Ht(gi,gr);if(sr===void 0||!li(Tt))throw new Error(`Unsupported data type: ${Tt}`);mi=!0,ar.push([Tt,zt,{gpuBuffer:vt,download:L.jsepCreateDownloader(vt,sr,Tt),dispose:()=>{L._OrtReleaseTensor(Yt)!==0&&Re("Can't release tensor.")}},"gpu-buffer"])}else if(Xr==="ml-tensor"&&gr>0){let kt=L.webnnEnsureTensor,vt=L.webnnIsGraphInputOutputTypeSupported;if(!kt||!vt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(gi,gr)===void 0||!di(Tt))throw new Error(`Unsupported data type: ${Tt}`);if(!vt(h,Tt,!1))throw new Error(`preferredLocation "ml-tensor" for ${Tt} output is not supported by current WebNN Context.`);let sr=await kt(h,Ft,gi,zt,!1);mi=!0,ar.push([Tt,zt,{mlTensor:sr,download:L.webnnCreateMLTensorDownloader(Ft,Tt),dispose:()=>{L.webnnReleaseTensorId(Ft),L._OrtReleaseTensor(Yt)}},"ml-tensor"])}else if(Xr==="ml-tensor-cpu-output"&&gr>0){let kt=L.webnnCreateMLTensorDownloader(Ft,Tt)(),vt=ar.length;mi=!0,vn.push((async()=>{let sr=[vt,await kt];return L.webnnReleaseTensorId(Ft),L._OrtReleaseTensor(Yt),sr})()),ar.push([Tt,zt,[],"cpu"])}else{let kt=oi(Tt),vt=new kt(gr);new Uint8Array(vt.buffer,vt.byteOffset,vt.byteLength).set(L.HEAPU8.subarray(Ft,Ft+vt.byteLength)),ar.push([Tt,zt,vt,"cpu"])}}finally{L.stackRestore(Qn),Tt==="string"&&Ft&&L._free(Ft),mi||L._OrtReleaseTensor(Yt)}}Z&&!Ee&&(L._OrtClearBoundOutputs(Z.handle)!==0&&Re("Can't clear bound outputs."),Tr.set(h,[ae,le,te,Z,Ee,!1]));for(let[Ke,Yt]of await Promise.all(vn))ar[Ke][2]=Yt;return Dt("wasm ProcessOutputTensor"),ar}finally{L.webnnOnRunEnd?.(ae),L.stackRestore(Pt),Te.forEach(bt=>L._OrtReleaseTensor(bt)),He.forEach(bt=>L._OrtReleaseTensor(bt)),ve.forEach(bt=>L._free(bt)),ht!==0&&L._OrtReleaseRunOptions(ht),je.forEach(bt=>L._free(bt))}},Gr=h=>{let _=Ue(),k=Tr.get(h);if(!k)throw new Error("invalid session id");let B=k[0],z=_._OrtEndProfiling(B);z===0&&Re("Can't get an profile file name."),_._OrtFree(z)},Mi=h=>{let _=[];for(let k of h){let B=k[2];!Array.isArray(B)&&"buffer"in B&&_.push(B.buffer)}return _}}),fr,Be,Ir,jr,Nr,Hr,ci,fi,hr,Cr,Di,Pi,Ui,fn,hn,Zn,Kr,mn,gn=T(()=>{X(),cn(),Wt(),Er(),fr=()=>!!me.wasm.proxy&&typeof document<"u",Ir=!1,jr=!1,Nr=!1,fi=new Map,hr=(h,_)=>{let k=fi.get(h);k?k.push(_):fi.set(h,[_])},Cr=()=>{if(Ir||!jr||Nr||!Be)throw new Error("worker not ready")},Di=h=>{switch(h.data.type){case"init-wasm":Ir=!1,h.data.err?(Nr=!0,ci[1](h.data.err)):(jr=!0,ci[0]()),Hr&&(URL.revokeObjectURL(Hr),Hr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let _=fi.get(h.data.type);h.data.err?_.shift()[1](h.data.err):_.shift()[0](h.data.out);break}}},Pi=async()=>{if(!jr){if(Ir)throw new Error("multiple calls to 'initWasm()' detected.");if(Nr)throw new Error("previous call to 'initWasm()' failed.");if(Ir=!0,fr())return new Promise((h,_)=>{Be?.terminate(),At().then(([k,B])=>{try{Be=B,Be.onerror=V=>_(V),Be.onmessage=Di,ci=[h,_];let z={type:"init-wasm",in:me};if(!z.in.wasm.wasmPaths&&k){let V=Se();V&&(z.in.wasm.wasmPaths=V)}Be.postMessage(z),Hr=k}catch(z){_(z)}},_)});try{await ai(me.wasm),await Oi(me),jr=!0}catch(h){throw Nr=!0,h}finally{Ir=!1}}},Ui=async h=>{if(fr())return Cr(),new Promise((_,k)=>{hr("init-ep",[_,k]);let B={type:"init-ep",in:{epName:h,env:me}};Be.postMessage(B)});await Ai(me,h)},fn=async h=>fr()?(Cr(),new Promise((_,k)=>{hr("copy-from",[_,k]);let B={type:"copy-from",in:{buffer:h}};Be.postMessage(B,[h.buffer])})):Ye(h),hn=async(h,_)=>{if(fr()){if(_?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Cr(),new Promise((k,B)=>{hr("create",[k,B]);let z={type:"create",in:{model:h,options:{..._}}},V=[];h instanceof Uint8Array&&V.push(h.buffer),Be.postMessage(z,V)})}else return Qt(h,_)},Zn=async h=>{if(fr())return Cr(),new Promise((_,k)=>{hr("release",[_,k]);let B={type:"release",in:h};Be.postMessage(B)});Bi(h)},Kr=async(h,_,k,B,z,V)=>{if(fr()){if(k.some(L=>L[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(z.some(L=>L))throw new Error("pre-allocated output tensor is not supported for proxy.");return Cr(),new Promise((L,N)=>{hr("run",[L,N]);let q=k,ae={type:"run",in:{sessionId:h,inputIndices:_,inputs:q,outputIndices:B,options:V}};Be.postMessage(ae,Mi(q))})}else return K(h,_,k,B,z,V)},mn=async h=>{if(fr())return Cr(),new Promise((_,k)=>{hr("end-profiling",[_,k]);let B={type:"end-profiling",in:h};Be.postMessage(B)});Gr(h)}}),yn,Ni,Li,Fi=T(()=>{X(),gn(),Me(),ne(),dn(),yn=(h,_)=>{switch(h.location){case"cpu":return[h.type,h.dims,h.data,"cpu"];case"gpu-buffer":return[h.type,h.dims,{gpuBuffer:h.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[h.type,h.dims,{mlTensor:h.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${h.location} for ${_()}`)}},Ni=h=>{switch(h[3]){case"cpu":return new gt(h[0],h[2],h[1]);case"gpu-buffer":{let _=h[0];if(!li(_))throw new Error(`not supported data type: ${_} for deserializing GPU tensor`);let{gpuBuffer:k,download:B,dispose:z}=h[2];return gt.fromGpuBuffer(k,{dataType:_,dims:h[1],download:B,dispose:z})}case"ml-tensor":{let _=h[0];if(!di(_))throw new Error(`not supported data type: ${_} for deserializing MLTensor tensor`);let{mlTensor:k,download:B,dispose:z}=h[2];return gt.fromMLTensor(k,{dataType:_,dims:h[1],download:B,dispose:z})}default:throw new Error(`invalid data location: ${h[3]}`)}},Li=class{async fetchModelAndCopyToWasmMemory(h){return fn(await pi(h))}async loadModel(h,_){St();let k;typeof h=="string"?k=await this.fetchModelAndCopyToWasmMemory(h):k=h,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await hn(k,_),pt()}async dispose(){return Zn(this.sessionId)}async run(h,_,k){St();let B=[],z=[];Object.entries(h).forEach(te=>{let Z=te[0],Ee=te[1],F=this.inputNames.indexOf(Z);if(F===-1)throw new Error(`invalid input '${Z}'`);B.push(Ee),z.push(F)});let V=[],L=[];Object.entries(_).forEach(te=>{let Z=te[0],Ee=te[1],F=this.outputNames.indexOf(Z);if(F===-1)throw new Error(`invalid output '${Z}'`);V.push(Ee),L.push(F)});let N=B.map((te,Z)=>yn(te,()=>`input "${this.inputNames[z[Z]]}"`)),q=V.map((te,Z)=>te?yn(te,()=>`output "${this.outputNames[L[Z]]}"`):null),ae=await Kr(this.sessionId,z,N,L,q,k),le={};for(let te=0;te<ae.length;te++)le[this.outputNames[L[te]]]=V[te]??Ni(ae[te]);return pt(),le}startProfiling(){}endProfiling(){mn(this.sessionId)}}}),hi={};W(hi,{OnnxruntimeWebAssemblyBackend:()=>Vi,initializeFlags:()=>qi,wasmBackend:()=>Wi});var qi,Vi,Wi,wn=T(()=>{X(),gn(),Fi(),qi=()=>{(typeof me.wasm.initTimeout!="number"||me.wasm.initTimeout<0)&&(me.wasm.initTimeout=0);let h=me.wasm.simd;if(typeof h!="boolean"&&h!==void 0&&h!=="fixed"&&h!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${h}". Reset it to \`false\` and ignore SIMD feature checking.`),me.wasm.simd=!1),typeof me.wasm.proxy!="boolean"&&(me.wasm.proxy=!1),typeof me.wasm.trace!="boolean"&&(me.wasm.trace=!1),typeof me.wasm.numThreads!="number"||!Number.isInteger(me.wasm.numThreads)||me.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)me.wasm.numThreads=1;else{let _=typeof navigator>"u"?M("node:os").cpus().length:navigator.hardwareConcurrency;me.wasm.numThreads=Math.min(4,Math.ceil((_||1)/2))}},Vi=class{async init(h){qi(),await Pi(),await Ui(h)}async createInferenceSessionHandler(h,_){let k=new Li;return await k.loadModel(h,_),k}},Wi=new Vi}),_n={};W(_n,{InferenceSession:()=>Mr,TRACE:()=>ir,TRACE_EVENT_BEGIN:()=>Bt,TRACE_EVENT_END:()=>Dt,TRACE_FUNC_BEGIN:()=>St,TRACE_FUNC_END:()=>pt,Tensor:()=>gt,default:()=>ka,env:()=>me,registerBackend:()=>j}),X(),X(),X();var Xn="1.24.3",ka=A;{let h=(wn(),ue(hi)).wasmBackend;j("cpu",h,10),j("wasm",h,10)}return Object.defineProperty(me.versions,"web",{value:Xn,enumerable:!0}),ue(_n)})();d.exports=w})(Ds)),Ds.exports}var of;function kg(){return of||(of=1,(function(d){var f=Wr&&Wr.__createBinding||(Object.create?(function($e,Ae,_e,xe){xe===void 0&&(xe=_e);var ze=Object.getOwnPropertyDescriptor(Ae,_e);(!ze||("get"in ze?!Ae.__esModule:ze.writable||ze.configurable))&&(ze={enumerable:!0,get:function(){return Ae[_e]}}),Object.defineProperty($e,xe,ze)}):(function($e,Ae,_e,xe){xe===void 0&&(xe=_e),$e[xe]=Ae[_e]})),w=Wr&&Wr.__setModuleDefault||(Object.create?(function($e,Ae){Object.defineProperty($e,"default",{enumerable:!0,value:Ae})}):function($e,Ae){$e.default=Ae}),b=Wr&&Wr.__importStar||function($e){if($e&&$e.__esModule)return $e;var Ae={};if($e!=null)for(var _e in $e)_e!=="default"&&Object.prototype.hasOwnProperty.call($e,_e)&&f(Ae,$e,_e);return w(Ae,$e),Ae};Object.defineProperty(d,"__esModule",{value:!0}),d.MicVAD=d.getDefaultRealTimeVADOptions=d.ort=d.DEFAULT_MODEL=void 0;const E=b(Tg()),P=js(),O=Hs(),M=Kn(),T=Sa(),W=Pf(),Y=Uf();d.DEFAULT_MODEL="legacy",d.ort=E;const ue="vad.worklet.bundle.min.js",fe="silero_vad_v5.onnx",he="silero_vad_legacy.onnx",j=$e=>({...O.defaultFrameProcessorOptions,onFrameProcessed:()=>{},onVADMisfire:()=>{M.log.debug("VAD misfire")},onSpeechStart:()=>{M.log.debug("Detected speech start")},onSpeechEnd:()=>{M.log.debug("Detected speech end")},onSpeechRealStart:()=>{M.log.debug("Detected real speech start")},baseAssetPath:"./",onnxWASMBasePath:"./",model:$e,workletOptions:{},getStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),pauseStream:async Ae=>{Ae.getTracks().forEach(_e=>{_e.stop()})},resumeStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),ortConfig:Ae=>{Ae.env.logLevel="error"},startOnLoad:!0,processorType:"auto"});d.getDefaultRealTimeVADOptions=j;const J=$e=>"audioWorklet"in $e&&typeof AudioWorkletNode=="function"?"AudioWorklet":"ScriptProcessor";async function se($e,Ae,_e,xe,ze){await _e.audioWorklet.addModule($e),Ae.processorOptions={...Ae.processorOptions??{},frameSamples:xe};const me=new AudioWorkletNode(_e,"vad-helper-worklet",Ae);return me.port.onmessage=async mt=>{const dt=mt.data;if(!(typeof dt=="object"&&dt&&"message"in dt)){console.error("Invalid message event",dt);return}switch(dt.message){case T.Message.AudioFrame:{if(!("data"in dt&&dt.data instanceof ArrayBuffer)){console.log("Audio frame message has no data");return}const Ct=new Float32Array(dt.data);await ze(Ct);break}}},me}async function Ge($e,Ae,_e){const xe=new Y.Resampler({nativeSampleRate:$e.sampleRate,targetSampleRate:16e3,targetFrameSize:Ae});M.log.debug("using script processor");const me=$e.createScriptProcessor(4096,1,1);let mt=!1;return me.onaudioprocess=async dt=>{if(!mt){mt=!0;try{const Ct=dt.inputBuffer.getChannelData(0);dt.outputBuffer.getChannelData(0).fill(0);const wt=xe.process(Ct);for(const ot of wt)await _e(ot)}catch(Ct){console.error("Error processing audio:",Ct)}finally{mt=!1}}},me.connect($e.destination),me}class et{constructor(Ae,_e,xe,ze,me=!1,mt=null,dt=null,Ct=null,Lt=null,wt=null,ot=null,Jt="uninitialized",Ot=!1){this.options=Ae,this.frameProcessor=_e,this.model=xe,this.frameSamples=ze,this.listening=me,this.errored=mt,this._stream=dt,this._audioContext=Ct,this._vadNode=Lt,this._mediaStreamAudioSourceNode=wt,this._audioProcessorAdapterType=ot,this.initializationState=Jt,this.ownsAudioContext=Ot,this.getAudioInstances=()=>{if(this._stream===null||this._audioContext===null||this._vadNode==null||this._mediaStreamAudioSourceNode==null)throw new Error("MicVAD has null stream, audio context, or processor adapter");return{stream:this._stream,audioContext:this._audioContext,vadNode:this._vadNode,mediaStreamAudioSourceNode:this._mediaStreamAudioSourceNode}},this.setErrored=nt=>{this.initializationState="errored",this.errored=nt},this.start=async()=>{switch(this.initializationState){case"uninitialized":{M.log.debug("initializing micVAD"),this.initializationState="initializing",this.frameProcessor.resume();try{this._stream=await this.options.getStream()}catch(nt){throw nt instanceof Error?this.setErrored(nt.message):this.setErrored(String(nt)),nt}if(this.options.audioContext?(console.log("using custom audio context"),this._audioContext=this.options.audioContext):(console.log("using default audio context"),this._audioContext=new AudioContext,this.ownsAudioContext=!0),!this._audioContext)throw this.setErrored("Audio context is null"),Error("Audio context is null");switch(this._audioProcessorAdapterType=this.options.processorType=="auto"?J(this._audioContext):this.options.processorType,this._audioProcessorAdapterType){case"AudioWorklet":this._vadNode=await se(this.options.baseAssetPath+ue,this.options.workletOptions,this._audioContext,this.frameSamples,this.processFrame);break;case"ScriptProcessor":this._vadNode=await Ge(this._audioContext,this.frameSamples,this.processFrame);break;default:throw new Error(`Unsupported audio processor adapter type: ${this._audioProcessorAdapterType}`)}this._mediaStreamAudioSourceNode=new MediaStreamAudioSourceNode(this._audioContext,{mediaStream:this._stream}),this._mediaStreamAudioSourceNode.connect(this._vadNode),M.log.debug("started micVAD"),this.listening=!0,this.initializationState="initialized";break}case"initializing":{M.log.warn("start called while initializing");break}case"initialized":{if(this.listening)return;this.listening=!0,this.frameProcessor.resume();const{stream:nt,audioContext:_t,vadNode:Sr}=this.getAudioInstances();this._stream=await this.options.resumeStream(nt);const ft=new MediaStreamAudioSourceNode(_t,{mediaStream:this._stream});this._mediaStreamAudioSourceNode=ft,ft.connect(Sr);break}case"destroyed":{M.log.warn("start called after destroyed");break}case"errored":{M.log.error("start called after errored");break}default:{M.log.warn("weird initialization state");break}}},this.pause=async()=>{if(!this.listening)return;this.listening=!1;const{stream:nt,mediaStreamAudioSourceNode:_t}=this.getAudioInstances();await this.options.pauseStream(nt),_t.disconnect(),this.frameProcessor.pause(this.handleFrameProcessorEvent)},this.destroy=async()=>{M.log.debug("destroy called"),this.initializationState="destroyed";const{vadNode:nt}=this.getAudioInstances();nt instanceof AudioWorkletNode&&nt.port.postMessage(T.Message.SpeechStop),this.listening&&await this.pause(),await this.model.release(),this.ownsAudioContext&&await this._audioContext?.close()},this.setOptions=nt=>{this.frameProcessor.setOptions(nt)},this.processFrame=async nt=>{await this.frameProcessor.process(nt,this.handleFrameProcessorEvent)},this.handleFrameProcessorEvent=nt=>{switch(nt.msg){case T.Message.FrameProcessed:this.options.onFrameProcessed(nt.probs,nt.frame);break;case T.Message.SpeechStart:this.options.onSpeechStart();break;case T.Message.SpeechRealStart:this.options.onSpeechRealStart();break;case T.Message.VADMisfire:this.options.onVADMisfire();break;case T.Message.SpeechEnd:this.options.onSpeechEnd(nt.audio);break}}}static async new(Ae={}){const _e={...(0,d.getDefaultRealTimeVADOptions)(Ae.model??d.DEFAULT_MODEL),...Ae};(0,O.validateOptions)(_e),d.ort.env.wasm.wasmPaths=_e.onnxWASMBasePath,_e.ortConfig!==void 0&&_e.ortConfig(d.ort);const xe=_e.model==="v5"?fe:he,ze=_e.baseAssetPath+xe,me=_e.model==="v5"?W.SileroV5.new:W.SileroLegacy.new;let mt;try{mt=await me(d.ort,()=>(0,P.defaultModelFetcher)(ze))}catch(ot){throw console.error(`Encountered an error while loading model file ${ze}`),ot}const dt=_e.model==="v5"?512:1536,Ct=dt/16,Lt=new O.FrameProcessor(mt.process,mt.reset_state,{positiveSpeechThreshold:_e.positiveSpeechThreshold,negativeSpeechThreshold:_e.negativeSpeechThreshold,redemptionMs:_e.redemptionMs,preSpeechPadMs:_e.preSpeechPadMs,minSpeechMs:_e.minSpeechMs,submitUserSpeechOnPause:_e.submitUserSpeechOnPause},Ct),wt=new et(_e,Lt,mt,dt);if(_e.startOnLoad)try{await wt.start()}catch(ot){throw console.error("Error starting micVad",ot),ot}return wt}}d.MicVAD=et})(Wr)),Wr}var uf;function Ig(){return uf||(uf=1,(function(d){Object.defineProperty(d,"__esModule",{value:!0}),d.getDefaultRealTimeVADOptions=d.MicVAD=d.DEFAULT_MODEL=d.utils=d.NonRealTimeVAD=d.Message=d.FrameProcessor=d.defaultModelFetcher=d.baseAssetPath=void 0;var f=Bf();Object.defineProperty(d,"baseAssetPath",{enumerable:!0,get:function(){return f.baseAssetPath}});var w=js();Object.defineProperty(d,"defaultModelFetcher",{enumerable:!0,get:function(){return w.defaultModelFetcher}});var b=Hs();Object.defineProperty(d,"FrameProcessor",{enumerable:!0,get:function(){return b.FrameProcessor}});var E=Sa();Object.defineProperty(d,"Message",{enumerable:!0,get:function(){return E.Message}});var P=Sg();Object.defineProperty(d,"NonRealTimeVAD",{enumerable:!0,get:function(){return P.NonRealTimeVAD}});const O=Eg();d.utils={audioFileToArray:O.audioFileToArray,minFramesForTargetMS:O.minFramesForTargetMS,arrayBufferToBase64:O.arrayBufferToBase64,encodeWAV:O.encodeWAV};var M=kg();Object.defineProperty(d,"DEFAULT_MODEL",{enumerable:!0,get:function(){return M.DEFAULT_MODEL}}),Object.defineProperty(d,"MicVAD",{enumerable:!0,get:function(){return M.MicVAD}}),Object.defineProperty(d,"getDefaultRealTimeVADOptions",{enumerable:!0,get:function(){return M.getDefaultRealTimeVADOptions}})})(Rs)),Rs}var Qg=Ig(),Vn={exports:{}},Cg=Vn.exports,lf;function Og(){return lf||(lf=1,(function(d,f){(function(w,b){typeof f.nodeName!="string"?d.exports=b():w.Croppie=b()})(typeof self<"u"?self:Cg,function(){if(typeof Promise!="function"){(function(v){function D(ie,Se){return function(){ie.apply(Se,arguments)}}function A(ie){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof ie!="function")throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],Pe(ie,D(ne,this),D(re,this))}function X(ie){var Se=this;return this._state===null?void this._deferreds.push(ie):void Fe(function(){var ce=Se._state?ie.onFulfilled:ie.onRejected;if(ce===null)return void(Se._state?ie.resolve:ie.reject)(Se._value);var Oe;try{Oe=ce(Se._value)}catch(qe){return void ie.reject(qe)}ie.resolve(Oe)})}function ne(ie){try{if(ie===this)throw new TypeError("A promise cannot be resolved with itself.");if(ie&&(typeof ie=="object"||typeof ie=="function")){var Se=ie.then;if(typeof Se=="function")return void Pe(D(Se,ie),D(ne,this),D(re,this))}this._state=!0,this._value=ie,ge.call(this)}catch(ce){re.call(this,ce)}}function re(ie){this._state=!1,this._value=ie,ge.call(this)}function ge(){for(var ie=0,Se=this._deferreds.length;Se>ie;ie++)X.call(this,this._deferreds[ie]);this._deferreds=null}function Ie(ie,Se,ce,Oe){this.onFulfilled=typeof ie=="function"?ie:null,this.onRejected=typeof Se=="function"?Se:null,this.resolve=ce,this.reject=Oe}function Pe(ie,Se,ce){var Oe=!1;try{ie(function(qe){Oe||(Oe=!0,Se(qe))},function(qe){Oe||(Oe=!0,ce(qe))})}catch(qe){if(Oe)return;Oe=!0,ce(qe)}}var Ne=setTimeout,Fe=typeof setImmediate=="function"&&setImmediate||function(ie){Ne(ie,1)},Qe=Array.isArray||function(ie){return Object.prototype.toString.call(ie)==="[object Array]"};A.prototype.catch=function(ie){return this.then(null,ie)},A.prototype.then=function(ie,Se){var ce=this;return new A(function(Oe,qe){X.call(ce,new Ie(ie,Se,Oe,qe))})},A.all=function(){var ie=Array.prototype.slice.call(arguments.length===1&&Qe(arguments[0])?arguments[0]:arguments);return new A(function(Se,ce){function Oe(ct,lt){try{if(lt&&(typeof lt=="object"||typeof lt=="function")){var At=lt.then;if(typeof At=="function")return void At.call(lt,function(yt){Oe(ct,yt)},ce)}ie[ct]=lt,--qe===0&&Se(ie)}catch(yt){ce(yt)}}if(ie.length===0)return Se([]);for(var qe=ie.length,tt=0;tt<ie.length;tt++)Oe(tt,ie[tt])})},A.resolve=function(ie){return ie&&typeof ie=="object"&&ie.constructor===A?ie:new A(function(Se){Se(ie)})},A.reject=function(ie){return new A(function(Se,ce){ce(ie)})},A.race=function(ie){return new A(function(Se,ce){for(var Oe=0,qe=ie.length;qe>Oe;Oe++)ie[Oe].then(Se,ce)})},A._setImmediateFn=function(ie){Fe=ie},d.exports?d.exports=A:v.Promise||(v.Promise=A)})(this)}typeof window<"u"&&typeof window.CustomEvent!="function"&&(function(){function v(D,A){A=A||{bubbles:!1,cancelable:!1,detail:void 0};var X=document.createEvent("CustomEvent");return X.initCustomEvent(D,A.bubbles,A.cancelable,A.detail),X}v.prototype=window.Event.prototype,window.CustomEvent=v})(),typeof HTMLCanvasElement<"u"&&!HTMLCanvasElement.prototype.toBlob&&Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(v,D,A){for(var X=atob(this.toDataURL(D,A).split(",")[1]),ne=X.length,re=new Uint8Array(ne),ge=0;ge<ne;ge++)re[ge]=X.charCodeAt(ge);v(new Blob([re],{type:D||"image/png"}))}});var w=["Webkit","Moz","ms"],b=typeof document<"u"?document.createElement("div").style:{},E=[1,8,3,6],P=[2,7,4,5],O,M,T;function W(v){if(v in b)return v;for(var D=v[0].toUpperCase()+v.slice(1),A=w.length;A--;)if(v=w[A]+D,v in b)return v}M=W("transform"),O=W("transformOrigin"),T=W("userSelect");function Y(v,D){var A=E.indexOf(v)>-1?E:P,X=A.indexOf(v),ne=D/90%A.length;return A[(A.length+X+ne%A.length)%A.length]}function ue(v,D){v=v||{};for(var A in D)D[A]&&D[A].constructor&&D[A].constructor===Object?(v[A]=v[A]||{},ue(v[A],D[A])):v[A]=D[A];return v}function fe(v){return ue({},v)}function he(v,D,A){var X;return function(){var ne=this,re=arguments,ge=function(){X=null,v.apply(ne,re)};clearTimeout(X),X=setTimeout(ge,D)}}function j(v){if("createEvent"in document){var D=document.createEvent("HTMLEvents");D.initEvent("change",!1,!0),v.dispatchEvent(D)}else v.fireEvent("onchange")}function J(v,D,A){if(typeof D=="string"){var X=D;D={},D[X]=A}for(var ne in D)v.style[ne]=D[ne]}function se(v,D){v.classList?v.classList.add(D):v.className+=" "+D}function Ge(v,D){v.classList?v.classList.remove(D):v.className=v.className.replace(D,"")}function et(v,D){for(var A in D)v.setAttribute(A,D[A])}function $e(v){return parseInt(v,10)}function Ae(v,D){if(!v)throw"Source image missing";var A=new Image;return A.style.opacity="0",new Promise(function(X,ne){function re(){A.style.opacity="1",setTimeout(function(){X(A)},1)}A.removeAttribute("crossOrigin"),v.match(/^https?:\/\/|^\/\//)&&A.setAttribute("crossOrigin","anonymous"),A.onload=function(){D?EXIF.getData(A,function(){re()}):re()},A.onerror=function(ge){A.style.opacity=1,setTimeout(function(){ne(ge)},1)},A.src=v})}function _e(v,D){var A=v.naturalWidth,X=v.naturalHeight,ne=D||mt(v);if(ne&&ne>=5){var re=A;A=X,X=re}return{width:A,height:X}}var xe={translate3d:{suffix:", 0px"},translate:{suffix:""}},ze=function(v,D,A){this.x=parseFloat(v),this.y=parseFloat(D),this.scale=parseFloat(A)};ze.parse=function(v){return v.style?ze.parse(v.style[M]):v.indexOf("matrix")>-1||v.indexOf("none")>-1?ze.fromMatrix(v):ze.fromString(v)},ze.fromMatrix=function(v){var D=v.substring(7).split(",");return(!D.length||v==="none")&&(D=[1,0,0,1,0,0]),new ze($e(D[4]),$e(D[5]),parseFloat(D[0]))},ze.fromString=function(v){var D=v.split(") "),A=D[0].substring(Xt.globals.translate.length+1).split(","),X=D.length>1?D[1].substring(6):1,ne=A.length>1?A[0]:0,re=A.length>1?A[1]:0;return new ze(ne,re,X)},ze.prototype.toString=function(){var v=xe[Xt.globals.translate].suffix||"";return Xt.globals.translate+"("+this.x+"px, "+this.y+"px"+v+") scale("+this.scale+")"};var me=function(v){if(!v||!v.style[O]){this.x=0,this.y=0;return}var D=v.style[O].split(" ");this.x=parseFloat(D[0]),this.y=parseFloat(D[1])};me.prototype.toString=function(){return this.x+"px "+this.y+"px"};function mt(v){return v.exifdata&&v.exifdata.Orientation?$e(v.exifdata.Orientation):1}function dt(v,D,A){var X=D.width,ne=D.height,re=v.getContext("2d");switch(v.width=D.width,v.height=D.height,re.save(),A){case 2:re.translate(X,0),re.scale(-1,1);break;case 3:re.translate(X,ne),re.rotate(180*Math.PI/180);break;case 4:re.translate(0,ne),re.scale(1,-1);break;case 5:v.width=ne,v.height=X,re.rotate(90*Math.PI/180),re.scale(1,-1);break;case 6:v.width=ne,v.height=X,re.rotate(90*Math.PI/180),re.translate(0,-ne);break;case 7:v.width=ne,v.height=X,re.rotate(-90*Math.PI/180),re.translate(-X,ne),re.scale(1,-1);break;case 8:v.width=ne,v.height=X,re.translate(0,X),re.rotate(-90*Math.PI/180);break}re.drawImage(D,0,0,X,ne),re.restore()}function Ct(){var v=this,D="croppie-container",A=v.options.viewport.type?"cr-vp-"+v.options.viewport.type:null,X,ne,re,ge,Ie,Pe;v.options.useCanvas=v.options.enableOrientation||Lt.call(v),v.data={},v.elements={},X=v.elements.boundary=document.createElement("div"),re=v.elements.viewport=document.createElement("div"),ne=v.elements.img=document.createElement("img"),ge=v.elements.overlay=document.createElement("div"),v.options.useCanvas?(v.elements.canvas=document.createElement("canvas"),v.elements.preview=v.elements.canvas):v.elements.preview=ne,se(X,"cr-boundary"),X.setAttribute("aria-dropeffect","none"),Ie=v.options.boundary.width,Pe=v.options.boundary.height,J(X,{width:Ie+(isNaN(Ie)?"":"px"),height:Pe+(isNaN(Pe)?"":"px")}),se(re,"cr-viewport"),A&&se(re,A),J(re,{width:v.options.viewport.width+"px",height:v.options.viewport.height+"px"}),re.setAttribute("tabindex",0),se(v.elements.preview,"cr-image"),et(v.elements.preview,{alt:"preview","aria-grabbed":"false"}),se(ge,"cr-overlay"),v.element.appendChild(X),X.appendChild(v.elements.preview),X.appendChild(re),X.appendChild(ge),se(v.element,D),v.options.customClass&&se(v.element,v.options.customClass),Sr.call(this),v.options.enableZoom&&Jt.call(v),v.options.enableResize&&wt.call(v)}function Lt(){return this.options.enableExif&&window.EXIF}function wt(){var v=this,D=document.createElement("div"),A=!1,X,ne,re,ge=50,Ie,Pe,Ne,Fe;se(D,"cr-resizer"),J(D,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(Ne=document.createElement("div"),se(Ne,"cr-resizer-vertical"),D.appendChild(Ne)),this.options.resizeControls.width&&(Fe=document.createElement("div"),se(Fe,"cr-resizer-horisontal"),D.appendChild(Fe));function Qe(ce){if(!(ce.button!==void 0&&ce.button!==0)&&(ce.preventDefault(),!A)){var Oe=v.elements.overlay.getBoundingClientRect();if(A=!0,ne=ce.pageX,re=ce.pageY,X=ce.currentTarget.className.indexOf("vertical")!==-1?"v":"h",Ie=Oe.width,Pe=Oe.height,ce.touches){var qe=ce.touches[0];ne=qe.pageX,re=qe.pageY}window.addEventListener("mousemove",ie),window.addEventListener("touchmove",ie),window.addEventListener("mouseup",Se),window.addEventListener("touchend",Se),document.body.style[T]="none"}}function ie(ce){var Oe=ce.pageX,qe=ce.pageY;if(ce.preventDefault(),ce.touches){var tt=ce.touches[0];Oe=tt.pageX,qe=tt.pageY}var ct=Oe-ne,lt=qe-re,At=v.options.viewport.height+lt,yt=v.options.viewport.width+ct;X==="v"&&At>=ge&&At<=Pe?(J(D,{height:At+"px"}),v.options.boundary.height+=lt,J(v.elements.boundary,{height:v.options.boundary.height+"px"}),v.options.viewport.height+=lt,J(v.elements.viewport,{height:v.options.viewport.height+"px"})):X==="h"&&yt>=ge&&yt<=Ie&&(J(D,{width:yt+"px"}),v.options.boundary.width+=ct,J(v.elements.boundary,{width:v.options.boundary.width+"px"}),v.options.viewport.width+=ct,J(v.elements.viewport,{width:v.options.viewport.width+"px"})),ft.call(v),rr.call(v),_t.call(v),Et.call(v),re=qe,ne=Oe}function Se(){A=!1,window.removeEventListener("mousemove",ie),window.removeEventListener("touchmove",ie),window.removeEventListener("mouseup",Se),window.removeEventListener("touchend",Se),document.body.style[T]=""}Ne&&(Ne.addEventListener("mousedown",Qe),Ne.addEventListener("touchstart",Qe)),Fe&&(Fe.addEventListener("mousedown",Qe),Fe.addEventListener("touchstart",Qe)),this.elements.boundary.appendChild(D)}function ot(v){if(this.options.enableZoom){var D=this.elements.zoomer,A=pt(v,4);D.value=Math.max(parseFloat(D.min),Math.min(parseFloat(D.max),A)).toString()}}function Jt(){var v=this,D=v.elements.zoomerWrap=document.createElement("div"),A=v.elements.zoomer=document.createElement("input");se(D,"cr-slider-wrap"),se(A,"cr-slider"),A.type="range",A.step="0.0001",A.value="1",A.style.display=v.options.showZoomer?"":"none",A.setAttribute("aria-label","zoom"),v.element.appendChild(D),D.appendChild(A),v._currentZoom=1;function X(){Ot.call(v,{value:parseFloat(A.value),origin:new me(v.elements.preview),viewportRect:v.elements.viewport.getBoundingClientRect(),transform:ze.parse(v.elements.preview)})}function ne(re){var ge,Ie;if(v.options.mouseWheelZoom==="ctrl"&&re.ctrlKey!==!0)return 0;re.wheelDelta?ge=re.wheelDelta/1200:re.deltaY?ge=re.deltaY/1060:re.detail?ge=re.detail/-60:ge=0,Ie=v._currentZoom+ge*v._currentZoom,re.preventDefault(),ot.call(v,Ie),X.call(v)}v.elements.zoomer.addEventListener("input",X),v.elements.zoomer.addEventListener("change",X),v.options.mouseWheelZoom&&(v.elements.boundary.addEventListener("mousewheel",ne),v.elements.boundary.addEventListener("DOMMouseScroll",ne))}function Ot(v){var D=this,A=v?v.transform:ze.parse(D.elements.preview),X=v?v.viewportRect:D.elements.viewport.getBoundingClientRect(),ne=v?v.origin:new me(D.elements.preview);function re(){var Ne={};Ne[M]=A.toString(),Ne[O]=ne.toString(),J(D.elements.preview,Ne)}if(D._currentZoom=v?v.value:D._currentZoom,A.scale=D._currentZoom,D.elements.zoomer.setAttribute("aria-valuenow",D._currentZoom),re(),D.options.enforceBoundary){var ge=nt.call(D,X),Ie=ge.translate,Pe=ge.origin;A.x>=Ie.maxX&&(ne.x=Pe.minX,A.x=Ie.maxX),A.x<=Ie.minX&&(ne.x=Pe.maxX,A.x=Ie.minX),A.y>=Ie.maxY&&(ne.y=Pe.minY,A.y=Ie.maxY),A.y<=Ie.minY&&(ne.y=Pe.maxY,A.y=Ie.minY)}re(),xt.call(D),Et.call(D)}function nt(v){var D=this,A=D._currentZoom,X=v.width,ne=v.height,re=D.elements.boundary.clientWidth/2,ge=D.elements.boundary.clientHeight/2,Ie=D.elements.preview.getBoundingClientRect(),Pe=Ie.width,Ne=Ie.height,Fe=X/2,Qe=ne/2,ie=(Fe/A-re)*-1,Se=ie-(Pe*(1/A)-X*(1/A)),ce=(Qe/A-ge)*-1,Oe=ce-(Ne*(1/A)-ne*(1/A)),qe=1/A*Fe,tt=Pe*(1/A)-qe,ct=1/A*Qe,lt=Ne*(1/A)-ct;return{translate:{maxX:ie,minX:Se,maxY:ce,minY:Oe},origin:{maxX:tt,minX:qe,maxY:lt,minY:ct}}}function _t(v){var D=this,A=D._currentZoom,X=D.elements.preview.getBoundingClientRect(),ne=D.elements.viewport.getBoundingClientRect(),re=ze.parse(D.elements.preview.style[M]),ge=new me(D.elements.preview),Ie=ne.top-X.top+ne.height/2,Pe=ne.left-X.left+ne.width/2,Ne={},Fe={};if(v){var Qe=ge.x,ie=ge.y,Se=re.x,ce=re.y;Ne.y=Qe,Ne.x=ie,re.y=Se,re.x=ce}else Ne.y=Ie/A,Ne.x=Pe/A,Fe.y=(Ne.y-ge.y)*(1-A),Fe.x=(Ne.x-ge.x)*(1-A),re.x-=Fe.x,re.y-=Fe.y;var Oe={};Oe[O]=Ne.x+"px "+Ne.y+"px",Oe[M]=re.toString(),J(D.elements.preview,Oe)}function Sr(){var v=this,D=!1,A,X,ne,re,ge;function Ie(ce,Oe){var qe=v.elements.preview.getBoundingClientRect(),tt=ge.y+Oe,ct=ge.x+ce;v.options.enforceBoundary?(re.top>qe.top+Oe&&re.bottom<qe.bottom+Oe&&(ge.y=tt),re.left>qe.left+ce&&re.right<qe.right+ce&&(ge.x=ct)):(ge.y=tt,ge.x=ct)}function Pe(ce){v.elements.preview.setAttribute("aria-grabbed",ce),v.elements.boundary.setAttribute("aria-dropeffect",ce?"move":"none")}function Ne(ce){var Oe=37,qe=38,tt=39,ct=40;if(ce.shiftKey&&(ce.keyCode===qe||ce.keyCode===ct)){var lt;ce.keyCode===qe?lt=parseFloat(v.elements.zoomer.value)+parseFloat(v.elements.zoomer.step):lt=parseFloat(v.elements.zoomer.value)-parseFloat(v.elements.zoomer.step),v.setZoom(lt)}else if(v.options.enableKeyMovement&&ce.keyCode>=37&&ce.keyCode<=40){ce.preventDefault();var At=yt(ce.keyCode);ge=ze.parse(v.elements.preview),document.body.style[T]="none",re=v.elements.viewport.getBoundingClientRect(),Fe(At)}function yt(nr){switch(nr){case Oe:return[1,0];case qe:return[0,1];case tt:return[-1,0];case ct:return[0,-1]}}}function Fe(ce){var Oe=ce[0],qe=ce[1],tt={};Ie(Oe,qe),tt[M]=ge.toString(),J(v.elements.preview,tt),ft.call(v),document.body.style[T]="",_t.call(v),Et.call(v),ne=0}function Qe(ce){if(!(ce.button!==void 0&&ce.button!==0)&&(ce.preventDefault(),!D)){if(D=!0,A=ce.pageX,X=ce.pageY,ce.touches){var Oe=ce.touches[0];A=Oe.pageX,X=Oe.pageY}Pe(D),ge=ze.parse(v.elements.preview),window.addEventListener("mousemove",ie),window.addEventListener("touchmove",ie),window.addEventListener("mouseup",Se),window.addEventListener("touchend",Se),document.body.style[T]="none",re=v.elements.viewport.getBoundingClientRect()}}function ie(ce){ce.preventDefault();var Oe=ce.pageX,qe=ce.pageY;if(ce.touches){var tt=ce.touches[0];Oe=tt.pageX,qe=tt.pageY}var ct=Oe-A,lt=qe-X,At={};if(ce.type==="touchmove"&&ce.touches.length>1){var yt=ce.touches[0],nr=ce.touches[1],Er=Math.sqrt((yt.pageX-nr.pageX)*(yt.pageX-nr.pageX)+(yt.pageY-nr.pageY)*(yt.pageY-nr.pageY));ne||(ne=Er/v._currentZoom);var Dr=Er/ne;ot.call(v,Dr),j(v.elements.zoomer);return}Ie(ct,lt),At[M]=ge.toString(),J(v.elements.preview,At),ft.call(v),X=qe,A=Oe}function Se(){D=!1,Pe(D),window.removeEventListener("mousemove",ie),window.removeEventListener("touchmove",ie),window.removeEventListener("mouseup",Se),window.removeEventListener("touchend",Se),document.body.style[T]="",_t.call(v),Et.call(v),ne=0}v.elements.overlay.addEventListener("mousedown",Qe),v.elements.viewport.addEventListener("keydown",Ne),v.elements.overlay.addEventListener("touchstart",Qe)}function ft(){if(this.elements){var v=this,D=v.elements.boundary.getBoundingClientRect(),A=v.elements.preview.getBoundingClientRect();J(v.elements.overlay,{width:A.width+"px",height:A.height+"px",top:A.top-D.top+"px",left:A.left-D.left+"px"})}}var xt=he(ft,500);function Et(){var v=this,D=v.get();if(er.call(v))if(v.options.update.call(v,D),v.$&&typeof Prototype>"u")v.$(v.element).trigger("update.croppie",D);else{var A;window.CustomEvent?A=new CustomEvent("update",{detail:D}):(A=document.createEvent("CustomEvent"),A.initCustomEvent("update",!0,!0,D)),v.element.dispatchEvent(A)}}function er(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function tr(){var v=this,D=1,A={},X=v.elements.preview,ne,re=new ze(0,0,D),ge=new me,Ie=er.call(v);!Ie||v.data.bound||(v.data.bound=!0,A[M]=re.toString(),A[O]=ge.toString(),A.opacity=1,J(X,A),ne=v.elements.preview.getBoundingClientRect(),v._originalImageWidth=ne.width,v._originalImageHeight=ne.height,v.data.orientation=Lt.call(v)?mt(v.elements.img):v.data.orientation,v.options.enableZoom?rr.call(v,!0):v._currentZoom=D,re.scale=v._currentZoom,A[M]=re.toString(),J(X,A),v.data.points.length?ei.call(v,v.data.points):Qi.call(v),_t.call(v),ft.call(v))}function rr(v){var D=this,A=Math.max(D.options.minZoom,0)||0,X=D.options.maxZoom||1.5,ne,re,ge=D.elements.zoomer,Ie=parseFloat(ge.value),Pe=D.elements.boundary.getBoundingClientRect(),Ne=_e(D.elements.img,D.data.orientation),Fe=D.elements.viewport.getBoundingClientRect(),Qe,ie;D.options.enforceBoundary&&(Qe=Fe.width/Ne.width,ie=Fe.height/Ne.height,A=Math.max(Qe,ie)),A>=X&&(X=A+1),ge.min=pt(A,4),ge.max=pt(X,4),!v&&(Ie<ge.min||Ie>ge.max)?ot.call(D,Ie<ge.min?ge.min:ge.max):v&&(re=Math.max(Pe.width/Ne.width,Pe.height/Ne.height),ne=D.data.boundZoom!==null?D.data.boundZoom:re,ot.call(D,ne)),j(ge)}function ei(v){if(v.length!==4)throw"Croppie - Invalid number of points supplied: "+v;var D=this,A=v[2]-v[0],X=D.elements.viewport.getBoundingClientRect(),ne=D.elements.boundary.getBoundingClientRect(),re={left:X.left-ne.left,top:X.top-ne.top},ge=X.width/A,Ie=v[1],Pe=v[0],Ne=-1*v[1]+re.top,Fe=-1*v[0]+re.left,Qe={};Qe[O]=Pe+"px "+Ie+"px",Qe[M]=new ze(Fe,Ne,ge).toString(),J(D.elements.preview,Qe),ot.call(D,ge),D._currentZoom=ge}function Qi(){var v=this,D=v.elements.preview.getBoundingClientRect(),A=v.elements.viewport.getBoundingClientRect(),X=v.elements.boundary.getBoundingClientRect(),ne=A.left-X.left,re=A.top-X.top,ge=ne-(D.width-A.width)/2,Ie=re-(D.height-A.height)/2,Pe=new ze(ge,Ie,v._currentZoom);J(v.elements.preview,M,Pe.toString())}function ut(v){var D=this,A=D.elements.canvas,X=D.elements.img,ne=A.getContext("2d");ne.clearRect(0,0,A.width,A.height),A.width=X.width,A.height=X.height;var re=D.options.enableOrientation&&v||mt(X);dt(A,X,re)}function lr(v){var D=this,A=v.points,X=$e(A[0]),ne=$e(A[1]),re=$e(A[2]),ge=$e(A[3]),Ie=re-X,Pe=ge-ne,Ne=v.circle,Fe=document.createElement("canvas"),Qe=Fe.getContext("2d"),ie=v.outputWidth||Ie,Se=v.outputHeight||Pe;Fe.width=ie,Fe.height=Se,v.backgroundColor&&(Qe.fillStyle=v.backgroundColor,Qe.fillRect(0,0,ie,Se));var ce=X,Oe=ne,qe=Ie,tt=Pe,ct=0,lt=0,At=ie,yt=Se;return X<0&&(ce=0,ct=Math.abs(X)/Ie*ie),qe+ce>D._originalImageWidth&&(qe=D._originalImageWidth-ce,At=qe/Ie*ie),ne<0&&(Oe=0,lt=Math.abs(ne)/Pe*Se),tt+Oe>D._originalImageHeight&&(tt=D._originalImageHeight-Oe,yt=tt/Pe*Se),Qe.drawImage(this.elements.preview,ce,Oe,qe,tt,ct,lt,At,yt),Ne&&(Qe.fillStyle="#fff",Qe.globalCompositeOperation="destination-in",Qe.beginPath(),Qe.arc(Fe.width/2,Fe.height/2,Fe.width/2,0,Math.PI*2,!0),Qe.closePath(),Qe.fill()),Fe}function gt(v){var D=v.points,A=document.createElement("div"),X=document.createElement("img"),ne=D[2]-D[0],re=D[3]-D[1];return se(A,"croppie-result"),A.appendChild(X),J(X,{left:-1*D[0]+"px",top:-1*D[1]+"px"}),X.src=v.url,J(A,{width:ne+"px",height:re+"px"}),A}function ti(v){return lr.call(this,v).toDataURL(v.format,v.quality)}function ir(v){var D=this;return new Promise(function(A){lr.call(D,v).toBlob(function(X){A(X)},v.format,v.quality)})}function Br(v){this.elements.img.parentNode&&(Array.prototype.forEach.call(this.elements.img.classList,function(D){v.classList.add(D)}),this.elements.img.parentNode.replaceChild(v,this.elements.img),this.elements.preview=v),this.elements.img=v}function St(v,D){var A=this,X,ne=[],re=null,ge=Lt.call(A);if(typeof v=="string")X=v,v={};else if(Array.isArray(v))ne=v.slice();else{if(typeof v>"u"&&A.data.url)return tr.call(A),Et.call(A),null;X=v.url,ne=v.points||[],re=typeof v.zoom>"u"?null:v.zoom}return A.data.bound=!1,A.data.url=X||A.data.url,A.data.boundZoom=re,Ae(X,ge).then(function(Ie){if(Br.call(A,Ie),ne.length)A.options.relative&&(ne=[ne[0]*Ie.naturalWidth/100,ne[1]*Ie.naturalHeight/100,ne[2]*Ie.naturalWidth/100,ne[3]*Ie.naturalHeight/100]);else{var Pe=_e(Ie),Ne=A.elements.viewport.getBoundingClientRect(),Fe=Ne.width/Ne.height,Qe=Pe.width/Pe.height,ie,Se;Qe>Fe?(Se=Pe.height,ie=Se*Fe):(ie=Pe.width,Se=Pe.height/Fe);var ce=(Pe.width-ie)/2,Oe=(Pe.height-Se)/2,qe=ce+ie,tt=Oe+Se;A.data.points=[ce,Oe,qe,tt]}A.data.orientation=v.orientation||1,A.data.points=ne.map(function(ct){return parseFloat(ct)}),A.options.useCanvas&&ut.call(A,A.data.orientation),tr.call(A),Et.call(A),D&&D()})}function pt(v,D){return parseFloat(v).toFixed(D||0)}function Bt(){var v=this,D=v.elements.preview.getBoundingClientRect(),A=v.elements.viewport.getBoundingClientRect(),X=A.left-D.left,ne=A.top-D.top,re=(A.width-v.elements.viewport.offsetWidth)/2,ge=(A.height-v.elements.viewport.offsetHeight)/2,Ie=X+v.elements.viewport.offsetWidth+re,Pe=ne+v.elements.viewport.offsetHeight+ge,Ne=v._currentZoom;(Ne===1/0||isNaN(Ne))&&(Ne=1);var Fe=v.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return X=Math.max(Fe,X/Ne),ne=Math.max(Fe,ne/Ne),Ie=Math.max(Fe,Ie/Ne),Pe=Math.max(Fe,Pe/Ne),{points:[pt(X),pt(ne),pt(Ie),pt(Pe)],zoom:Ne,orientation:v.data.orientation}}var Dt={type:"canvas",format:"png",quality:1},ri=["jpeg","webp","png"];function ii(v){var D=this,A=Bt.call(D),X=ue(fe(Dt),fe(v)),ne=typeof v=="string"?v:X.type||"base64",re=X.size||"viewport",ge=X.format,Ie=X.quality,Pe=X.backgroundColor,Ne=typeof X.circle=="boolean"?X.circle:D.options.viewport.type==="circle",Fe=D.elements.viewport.getBoundingClientRect(),Qe=Fe.width/Fe.height,ie;return re==="viewport"?(A.outputWidth=Fe.width,A.outputHeight=Fe.height):typeof re=="object"&&(re.width&&re.height?(A.outputWidth=re.width,A.outputHeight=re.height):re.width?(A.outputWidth=re.width,A.outputHeight=re.width/Qe):re.height&&(A.outputWidth=re.height*Qe,A.outputHeight=re.height)),ri.indexOf(ge)>-1&&(A.format="image/"+ge,A.quality=Ie),A.circle=Ne,A.url=D.data.url,A.backgroundColor=Pe,ie=new Promise(function(Se){switch(ne.toLowerCase()){case"rawcanvas":Se(lr.call(D,A));break;case"canvas":case"base64":Se(ti.call(D,A));break;case"blob":ir.call(D,A).then(Se);break;default:Se(gt.call(D,A));break}}),ie}function Yi(){tr.call(this)}function Mr(v){if(!this.options.useCanvas||!this.options.enableOrientation)throw"Croppie: Cannot rotate without enableOrientation && EXIF.js included";var D=this,A=D.elements.canvas;if(D.data.orientation=Y(D.data.orientation,v),dt(A,D.elements.img,D.data.orientation),_t.call(D,!0),rr.call(D),Math.abs(v)/90%2===1){var X=D._originalImageHeight,ne=D._originalImageWidth;D._originalImageWidth=X,D._originalImageHeight=ne}}function Ji(){var v=this;v.element.removeChild(v.elements.boundary),Ge(v.element,"croppie-container"),v.options.enableZoom&&v.element.removeChild(v.elements.zoomerWrap),delete v.elements}if(typeof window<"u"&&window.jQuery){var dr=window.jQuery;dr.fn.croppie=function(v){var D=typeof v;if(D==="string"){var A=Array.prototype.slice.call(arguments,1),X=dr(this).data("croppie");return v==="get"?X.get():v==="result"?X.result.apply(X,A):v==="bind"?X.bind.apply(X,A):this.each(function(){var ne=dr(this).data("croppie");if(ne){var re=ne[v];if(dr.isFunction(re))re.apply(ne,A),v==="destroy"&&dr(this).removeData("croppie");else throw"Croppie "+v+" method not found"}})}else return this.each(function(){var ne=new Xt(this,v);ne.$=dr,dr(this).data("croppie",ne)})}}function Xt(v,D){if(v.className.indexOf("croppie-container")>-1)throw new Error("Croppie: Can't initialize croppie more than once");if(this.element=v,this.options=ue(fe(Xt.defaults),D),this.element.tagName.toLowerCase()==="img"){var A=this.element;se(A,"cr-original-image"),et(A,{"aria-hidden":"true",alt:""});var X=document.createElement("div");this.element.parentNode.appendChild(X),X.appendChild(A),this.element=X,this.options.url=this.options.url||A.src}if(Ct.call(this),this.options.url){var ne={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,St.call(this,ne)}}return Xt.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},Xt.globals={translate:"translate3d"},ue(Xt.prototype,{bind:function(v,D){return St.call(this,v,D)},get:function(){var v=Bt.call(this),D=v.points;return this.options.relative&&(D[0]/=this.elements.img.naturalWidth/100,D[1]/=this.elements.img.naturalHeight/100,D[2]/=this.elements.img.naturalWidth/100,D[3]/=this.elements.img.naturalHeight/100),v},result:function(v){return ii.call(this,v)},refresh:function(){return Yi.call(this)},setZoom:function(v){ot.call(this,v),j(this.elements.zoomer)},rotate:function(v){Mr.call(this,v)},destroy:function(){return Ji.call(this)}}),Xt})})(Vn,Vn.exports)),Vn.exports}var Ag=Og();const Yg=_g(Ag);export{Yg as C,Rt as a,Qg as d,Xg as f,_g as g};
