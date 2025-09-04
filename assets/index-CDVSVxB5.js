(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Nf={exports:{}},_o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Fx(){if(Vg)return _o;Vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return _o.Fragment=e,_o.jsx=i,_o.jsxs=i,_o}var kg;function Hx(){return kg||(kg=1,Nf.exports=Fx()),Nf.exports}var dt=Hx(),Lf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Gx(){if(Xg)return le;Xg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,R={};function y(D,tt,St){this.props=D,this.context=tt,this.refs=R,this.updater=St||M}y.prototype.isReactComponent={},y.prototype.setState=function(D,tt){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,tt,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(D,tt,St){this.props=D,this.context=tt,this.refs=R,this.updater=St||M}var P=I.prototype=new _;P.constructor=I,A(P,y.prototype),P.isPureReactComponent=!0;var U=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function F(D,tt,St,yt,wt,Bt){return St=Bt.ref,{$$typeof:o,type:D,key:tt,ref:St!==void 0?St:null,props:Bt}}function K(D,tt){return F(D.type,tt,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function C(D){var tt={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(St){return tt[St]})}var k=/\/+/g;function it(D,tt){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):tt.toString(36)}function q(){}function rt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(q,q):(D.status="pending",D.then(function(tt){D.status==="pending"&&(D.status="fulfilled",D.value=tt)},function(tt){D.status==="pending"&&(D.status="rejected",D.reason=tt)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function et(D,tt,St,yt,wt){var Bt=typeof D;(Bt==="undefined"||Bt==="boolean")&&(D=null);var J=!1;if(D===null)J=!0;else switch(Bt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(D.$$typeof){case o:case e:J=!0;break;case g:return J=D._init,et(J(D._payload),tt,St,yt,wt)}}if(J)return wt=wt(D),J=yt===""?"."+it(D,0):yt,U(wt)?(St="",J!=null&&(St=J.replace(k,"$&/")+"/"),et(wt,tt,St,"",function(Xt){return Xt})):wt!=null&&(w(wt)&&(wt=K(wt,St+(wt.key==null||D&&D.key===wt.key?"":(""+wt.key).replace(k,"$&/")+"/")+J)),tt.push(wt)),1;J=0;var gt=yt===""?".":yt+":";if(U(D))for(var At=0;At<D.length;At++)yt=D[At],Bt=gt+it(yt,At),J+=et(yt,tt,St,Bt,wt);else if(At=S(D),typeof At=="function")for(D=At.call(D),At=0;!(yt=D.next()).done;)yt=yt.value,Bt=gt+it(yt,At++),J+=et(yt,tt,St,Bt,wt);else if(Bt==="object"){if(typeof D.then=="function")return et(rt(D),tt,St,yt,wt);throw tt=String(D),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return J}function L(D,tt,St){if(D==null)return D;var yt=[],wt=0;return et(D,yt,"","",function(Bt){return tt.call(St,Bt,wt++)}),yt}function X(D){if(D._status===-1){var tt=D._result;tt=tt(),tt.then(function(St){(D._status===0||D._status===-1)&&(D._status=1,D._result=St)},function(St){(D._status===0||D._status===-1)&&(D._status=2,D._result=St)}),D._status===-1&&(D._status=0,D._result=tt)}if(D._status===1)return D._result.default;throw D._result}var H=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function mt(){}return le.Children={map:L,forEach:function(D,tt,St){L(D,function(){tt.apply(this,arguments)},St)},count:function(D){var tt=0;return L(D,function(){tt++}),tt},toArray:function(D){return L(D,function(tt){return tt})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},le.Component=y,le.Fragment=i,le.Profiler=l,le.PureComponent=I,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},le.cache=function(D){return function(){return D.apply(null,arguments)}},le.cloneElement=function(D,tt,St){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var yt=A({},D.props),wt=D.key,Bt=void 0;if(tt!=null)for(J in tt.ref!==void 0&&(Bt=void 0),tt.key!==void 0&&(wt=""+tt.key),tt)!G.call(tt,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&tt.ref===void 0||(yt[J]=tt[J]);var J=arguments.length-2;if(J===1)yt.children=St;else if(1<J){for(var gt=Array(J),At=0;At<J;At++)gt[At]=arguments[At+2];yt.children=gt}return F(D.type,wt,void 0,void 0,Bt,yt)},le.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},le.createElement=function(D,tt,St){var yt,wt={},Bt=null;if(tt!=null)for(yt in tt.key!==void 0&&(Bt=""+tt.key),tt)G.call(tt,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(wt[yt]=tt[yt]);var J=arguments.length-2;if(J===1)wt.children=St;else if(1<J){for(var gt=Array(J),At=0;At<J;At++)gt[At]=arguments[At+2];wt.children=gt}if(D&&D.defaultProps)for(yt in J=D.defaultProps,J)wt[yt]===void 0&&(wt[yt]=J[yt]);return F(D,Bt,void 0,void 0,null,wt)},le.createRef=function(){return{current:null}},le.forwardRef=function(D){return{$$typeof:d,render:D}},le.isValidElement=w,le.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:X}},le.memo=function(D,tt){return{$$typeof:p,type:D,compare:tt===void 0?null:tt}},le.startTransition=function(D){var tt=B.T,St={};B.T=St;try{var yt=D(),wt=B.S;wt!==null&&wt(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(mt,H)}catch(Bt){H(Bt)}finally{B.T=tt}},le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(D){return B.H.use(D)},le.useActionState=function(D,tt,St){return B.H.useActionState(D,tt,St)},le.useCallback=function(D,tt){return B.H.useCallback(D,tt)},le.useContext=function(D){return B.H.useContext(D)},le.useDebugValue=function(){},le.useDeferredValue=function(D,tt){return B.H.useDeferredValue(D,tt)},le.useEffect=function(D,tt,St){var yt=B.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(D,tt)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(D,tt,St){return B.H.useImperativeHandle(D,tt,St)},le.useInsertionEffect=function(D,tt){return B.H.useInsertionEffect(D,tt)},le.useLayoutEffect=function(D,tt){return B.H.useLayoutEffect(D,tt)},le.useMemo=function(D,tt){return B.H.useMemo(D,tt)},le.useOptimistic=function(D,tt){return B.H.useOptimistic(D,tt)},le.useReducer=function(D,tt,St){return B.H.useReducer(D,tt,St)},le.useRef=function(D){return B.H.useRef(D)},le.useState=function(D){return B.H.useState(D)},le.useSyncExternalStore=function(D,tt,St){return B.H.useSyncExternalStore(D,tt,St)},le.useTransition=function(){return B.H.useTransition()},le.version="19.1.1",le}var Wg;function sd(){return Wg||(Wg=1,Lf.exports=Gx()),Lf.exports}var vn=sd(),Of={exports:{}},vo={},Pf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Vx(){return qg||(qg=1,(function(o){function e(L,X){var H=L.length;L.push(X);t:for(;0<H;){var mt=H-1>>>1,D=L[mt];if(0<l(D,X))L[mt]=X,L[H]=D,H=mt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var X=L[0],H=L.pop();if(H!==X){L[0]=H;t:for(var mt=0,D=L.length,tt=D>>>1;mt<tt;){var St=2*(mt+1)-1,yt=L[St],wt=St+1,Bt=L[wt];if(0>l(yt,H))wt<D&&0>l(Bt,yt)?(L[mt]=Bt,L[wt]=H,mt=wt):(L[mt]=yt,L[St]=H,mt=St);else if(wt<D&&0>l(Bt,H))L[mt]=Bt,L[wt]=H,mt=wt;else break t}}return X}function l(L,X){var H=L.sortIndex-X.sortIndex;return H!==0?H:L.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,S=3,M=!1,A=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=L)r(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(p)}}function B(L){if(R=!1,U(L),!A)if(i(m)!==null)A=!0,G||(G=!0,it());else{var X=i(p);X!==null&&et(B,X.startTime-L)}}var G=!1,F=-1,K=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<K)}function k(){if(y=!1,G){var L=o.unstable_now();w=L;var X=!0;try{t:{A=!1,R&&(R=!1,I(F),F=-1),M=!0;var H=S;try{e:{for(U(L),v=i(m);v!==null&&!(v.expirationTime>L&&C());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,S=v.priorityLevel;var D=mt(v.expirationTime<=L);if(L=o.unstable_now(),typeof D=="function"){v.callback=D,U(L),X=!0;break e}v===i(m)&&r(m),U(L)}else r(m);v=i(m)}if(v!==null)X=!0;else{var tt=i(p);tt!==null&&et(B,tt.startTime-L),X=!1}}break t}finally{v=null,S=H,M=!1}X=void 0}}finally{X?it():G=!1}}}var it;if(typeof P=="function")it=function(){P(k)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,rt=q.port2;q.port1.onmessage=k,it=function(){rt.postMessage(null)}}else it=function(){_(k,0)};function et(L,X){F=_(function(){L(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var H=S;S=X;try{return L()}finally{S=H}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=S;S=L;try{return X()}finally{S=H}},o.unstable_scheduleCallback=function(L,X,H){var mt=o.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?mt+H:mt):H=mt,L){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=H+D,L={id:g++,callback:X,priorityLevel:L,startTime:H,expirationTime:D,sortIndex:-1},H>mt?(L.sortIndex=H,e(p,L),i(m)===null&&L===i(p)&&(R?(I(F),F=-1):R=!0,et(B,H-mt))):(L.sortIndex=D,e(m,L),A||M||(A=!0,G||(G=!0,it()))),L},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(L){var X=S;return function(){var H=S;S=X;try{return L.apply(this,arguments)}finally{S=H}}}})(zf)),zf}var Yg;function kx(){return Yg||(Yg=1,Pf.exports=Vx()),Pf.exports}var Bf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Xx(){if(jg)return An;jg=1;var o=sd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.1.1",An}var Zg;function Wx(){if(Zg)return Bf.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bf.exports=Xx(),Bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function qx(){if(Kg)return vo;Kg=1;var o=kx(),e=sd(),i=Wx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),t;if(f===s)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,s=f;break}if(T===s){x=!0,s=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=c;break}if(T===s){x=!0,s=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var q=Symbol.for("react.client.reference");function rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case P:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:rt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return rt(t(n))}catch{}}return null}var et=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},mt=[],D=-1;function tt(t){return{current:t}}function St(t){0>D||(t.current=mt[D],mt[D]=null,D--)}function yt(t,n){D++,mt[D]=t.current,t.current=n}var wt=tt(null),Bt=tt(null),J=tt(null),gt=tt(null);function At(t,n){switch(yt(J,n),yt(Bt,t),yt(wt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?gg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=gg(n),t=_g(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}St(wt),yt(wt,t)}function Xt(){St(wt),St(Bt),St(J)}function Yt(t){t.memoizedState!==null&&yt(gt,t);var n=wt.current,a=_g(n,t.type);n!==a&&(yt(Bt,t),yt(wt,a))}function de(t){Bt.current===t&&(St(wt),St(Bt)),gt.current===t&&(St(gt),fo._currentValue=H)}var tn=Object.prototype.hasOwnProperty,z=o.unstable_scheduleCallback,De=o.unstable_cancelCallback,re=o.unstable_shouldYield,ne=o.unstable_requestPaint,Pt=o.unstable_now,Fe=o.unstable_getCurrentPriorityLevel,Vt=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,Xe=o.unstable_NormalPriority,We=o.unstable_LowPriority,N=o.unstable_IdlePriority,E=o.log,nt=o.unstable_setDisableYieldValue,ft=null,_t=null;function ut(t){if(typeof E=="function"&&nt(t),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ft,t)}catch{}}var zt=Math.clz32?Math.clz32:jt,Rt=Math.log,Wt=Math.LN2;function jt(t){return t>>>=0,t===0?32:31-(Rt(t)/Wt|0)|0}var Mt=256,Nt=4194304;function Kt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Kt(s):(x&=T,x!==0?c=Kt(x):a||(a=T&~t,a!==0&&(c=Kt(a))))):(T=s&~f,T!==0?c=Kt(T):x!==0?c=Kt(x):a||(a=s&~t,a!==0&&(c=Kt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Dt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),t}function bt(){var t=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),t}function Ct(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function It(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Et(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-zt(a),vt=1<<ht;T[ht]=0,O[ht]=-1;var at=$[ht];if(at!==null)for($[ht]=null,ht=0;ht<at.length;ht++){var st=at[ht];st!==null&&(st.lane&=-536870913)}a&=~vt}s!==0&&xt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function xt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Gt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function ae(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ae(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:zg(t.type))}function ci(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var on=Math.random().toString(36).slice(2),ln="__reactFiber$"+on,Ye="__reactProps$"+on,Si="__reactContainer$"+on,_r="__reactEvents$"+on,Io="__reactListeners$"+on,vr="__reactHandles$"+on,Es="__reactResources$"+on,yi="__reactMarker$"+on;function xr(t){delete t[ln],delete t[Ye],delete t[_r],delete t[Io],delete t[vr]}function Di(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Si]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=yg(t);t!==null;){if(a=t[ln])return a;t=yg(t)}return n}t=a,a=t.parentNode}return null}function aa(t){if(t=t[ln]||t[Si]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Fa(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ra(t){var n=t[Es];return n||(n=t[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(t){t[yi]=!0}var Fo=new Set,Ho={};function b(t,n){Y(t,n),Y(t+"Capture",n)}function Y(t,n){for(Ho[t]=n,t=0;t<n.length;t++)Fo.add(n[t])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Z={};function Tt(t){return tn.call(Z,t)?!0:tn.call(lt,t)?!1:ot.test(t)?Z[t]=!0:(lt[t]=!0,!1)}function Ut(t,n,a){if(Tt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ft(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Lt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var Jt,te;function qt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+te}var ue=!1;function Me(t,n){if(!t||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var at=st}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(st){at=st}t.call(vt.prototype)}}else{try{throw Error()}catch(st){at=st}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var O=x.split(`
`),$=T.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===$.length)for(s=O.length-1,c=$.length-1;1<=s&&0<=c&&O[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==$[c]){var ht=`
`+O[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=c);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qt(a):""}function Ve(t){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Me(t.type,!1);case 11:return Me(t.type.render,!1);case 1:return Me(t.type,!0);case 31:return qt("Activity");default:return""}}function Ue(t){try{var n="";do n+=Ve(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(t){var n=Qt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ge(t){t._valueTracker||(t._valueTracker=Ge(t))}function En(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Qt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ui(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wn=/[\n"\\]/g;function dn(t){return t.replace(wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(t,n,a,s,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,x,fe(n)):a!=null?Tn(t,x,fe(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+fe(T):t.removeAttribute("name")}function Dn(t,n,a,s,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Tn(t,n,a){n==="number"&&ui(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function je(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function xn(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function Sr(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(et(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||z0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function _d(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&gd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&gd(t,f,n[f])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var B0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(t){return I0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Uc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yr=null,Mr=null;function vd(t){var n=aa(t);if(n&&(t=n.stateNode)){var a=t[Ye]||null;t:switch(t=n.stateNode,n.type){case"input":if(Be(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Ye]||null;if(!c)throw Error(r(90));Be(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&En(s)}break t;case"textarea":xn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&je(t,!!a.multiple,n,!1)}}}var Lc=!1;function xd(t,n,a){if(Lc)return t(n,a);Lc=!0;try{var s=t(n);return s}finally{if(Lc=!1,(yr!==null||Mr!==null)&&(Al(),yr&&(n=yr,t=Mr,Mr=yr=null,vd(n),t)))for(n=0;n<t.length;n++)vd(t[n])}}function Ts(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Ye]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(Ui)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Oc=!1}var sa=null,Pc=null,Vo=null;function Sd(){if(Vo)return Vo;var t,n=Pc,a=n.length,s,c="value"in sa?sa.value:sa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Vo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function yd(){return!1}function On(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:yd,this.isPropagationStopped=yd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=On(Ha),As=g({},Ha,{view:0,detail:0}),F0=On(As),zc,Bc,Rs,qo=g({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(zc=t.screenX-Rs.screenX,Bc=t.screenY-Rs.screenY):Bc=zc=0,Rs=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Md=On(qo),H0=g({},qo,{dataTransfer:0}),G0=On(H0),V0=g({},As,{relatedTarget:0}),Ic=On(V0),k0=g({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=On(k0),W0=g({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=On(W0),Y0=g({},Ha,{data:0}),Ed=On(Y0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=K0[t])?!!n[t]:!1}function Fc(){return Q0}var J0=g({},As,{key:function(t){if(t.key){var n=j0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$0=On(J0),tv=g({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=On(tv),ev=g({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),nv=On(ev),iv=g({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),av=On(iv),rv=g({},qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=On(rv),ov=g({},Ha,{newState:0,oldState:0}),lv=On(ov),cv=[9,13,27,32],Hc=Ui&&"CompositionEvent"in window,Cs=null;Ui&&"documentMode"in document&&(Cs=document.documentMode);var uv=Ui&&"TextEvent"in window&&!Cs,bd=Ui&&(!Hc||Cs&&8<Cs&&11>=Cs),Ad=" ",Rd=!1;function Cd(t,n){switch(t){case"keyup":return cv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function fv(t,n){switch(t){case"compositionend":return wd(n);case"keypress":return n.which!==32?null:(Rd=!0,Ad);case"textInput":return t=n.data,t===Ad&&Rd?null:t;default:return null}}function hv(t,n){if(Er)return t==="compositionend"||!Hc&&Cd(t,n)?(t=Sd(),Vo=Pc=sa=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bd&&n.locale!=="ko"?null:n.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dv[t.type]:n==="textarea"}function Ud(t,n,a,s){yr?Mr?Mr.push(s):Mr=[s]:yr=s,n=Nl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var ws=null,Ds=null;function pv(t){fg(t,0)}function Yo(t){var n=Fa(t);if(En(n))return t}function Nd(t,n){if(t==="change")return n}var Ld=!1;if(Ui){var Gc;if(Ui){var Vc="oninput"in document;if(!Vc){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Vc=typeof Od.oninput=="function"}Gc=Vc}else Gc=!1;Ld=Gc&&(!document.documentMode||9<document.documentMode)}function Pd(){ws&&(ws.detachEvent("onpropertychange",zd),Ds=ws=null)}function zd(t){if(t.propertyName==="value"&&Yo(Ds)){var n=[];Ud(n,Ds,t,Nc(t)),xd(pv,n)}}function mv(t,n,a){t==="focusin"?(Pd(),ws=n,Ds=a,ws.attachEvent("onpropertychange",zd)):t==="focusout"&&Pd()}function gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Ds)}function _v(t,n){if(t==="click")return Yo(n)}function vv(t,n){if(t==="input"||t==="change")return Yo(n)}function xv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:xv;function Us(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!tn.call(n,c)||!kn(t[c],n[c]))return!1}return!0}function Bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,n){var a=Bd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bd(a)}}function Fd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Fd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Hd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ui(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ui(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Sv=Ui&&"documentMode"in document&&11>=document.documentMode,Tr=null,Xc=null,Ns=null,Wc=!1;function Gd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Tr==null||Tr!==ui(s)||(s=Tr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Us(Ns,s)||(Ns=s,s=Nl(Xc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Tr)))}function Ga(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var br={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},qc={},Vd={};Ui&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Va(t){if(qc[t])return qc[t];if(!br[t])return t;var n=br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Vd)return qc[t]=n[a];return t}var kd=Va("animationend"),Xd=Va("animationiteration"),Wd=Va("animationstart"),yv=Va("transitionrun"),Mv=Va("transitionstart"),Ev=Va("transitioncancel"),qd=Va("transitionend"),Yd=new Map,Yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yc.push("scrollEnd");function fi(t,n){Yd.set(t,n),b(n,[t])}var jd=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=jd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ue(n)},jd.set(t,n),n)}return{value:t,source:n,stack:Ue(n)}}var $n=[],Ar=0,jc=0;function jo(){for(var t=Ar,n=jc=Ar=0;n<t;){var a=$n[n];$n[n++]=null;var s=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Zd(a,c,f)}}function Zo(t,n,a,s){$n[Ar++]=t,$n[Ar++]=n,$n[Ar++]=a,$n[Ar++]=s,jc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Zc(t,n,a,s){return Zo(t,n,a,s),Ko(t)}function Rr(t,n){return Zo(t,null,null,n),Ko(t)}function Zd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-zt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Ko(t){if(50<io)throw io=0,ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Cr={};function Tv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new Tv(t,n,a,s)}function Kc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ni(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Qo(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")Kc(t)&&(x=1);else if(typeof t=="string")x=Ax(t,a,wt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Xn(31,a,n,c),t.elementType=w,t.lanes=f,t;case A:return ka(a.children,c,f,n);case R:x=8,c|=24;break;case y:return t=Xn(12,a,n,c|2),t.elementType=y,t.lanes=f,t;case B:return t=Xn(13,a,n,c),t.elementType=B,t.lanes=f,t;case G:return t=Xn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case P:x=10;break t;case I:x=9;break t;case U:x=11;break t;case F:x=14;break t;case K:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ka(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function Qc(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Jc(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wr=[],Dr=0,Jo=null,$o=0,ti=[],ei=0,Xa=null,Li=1,Oi="";function Wa(t,n){wr[Dr++]=$o,wr[Dr++]=Jo,Jo=t,$o=n}function Qd(t,n,a){ti[ei++]=Li,ti[ei++]=Oi,ti[ei++]=Xa,Xa=t;var s=Li;t=Oi;var c=32-zt(s)-1;s&=~(1<<c),a+=1;var f=32-zt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Li=1<<32-zt(n)+c|a<<c|s,Oi=f+t}else Li=1<<f|a<<c|s,Oi=t}function $c(t){t.return!==null&&(Wa(t,1),Qd(t,1,0))}function tu(t){for(;t===Jo;)Jo=wr[--Dr],wr[Dr]=null,$o=wr[--Dr],wr[Dr]=null;for(;t===Xa;)Xa=ti[--ei],ti[ei]=null,Oi=ti[--ei],ti[ei]=null,Li=ti[--ei],ti[ei]=null}var Un=null,Ze=null,be=!1,qa=null,Mi=!1,eu=Error(r(519));function Ya(t){var n=Error(r(418,""));throw Ps(Jn(n,t)),eu}function Jd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[ln]=t,n[Ye]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)ve(ro[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ge(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Sr(n,s.value,s.defaultValue,s.children),ge(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||mg(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Ya(t)}function $d(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Un=Un.return}}function Ls(t){if(t!==Un)return!1;if(!be)return $d(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Ya(t),$d(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ze=di(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ze=null}}else n===27?(n=Ze,Ma(t.type)?(t=Mf,Mf=null,Ze=t):Ze=n):Ze=Un?di(t.stateNode.nextSibling):null;return!0}function Os(){Ze=Un=null,be=!1}function tp(){var t=qa;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),qa=null),t}function Ps(t){qa===null?qa=[t]:qa.push(t)}var nu=tt(null),ja=null,Pi=null;function oa(t,n,a){yt(nu,n._currentValue),n._currentValue=a}function zi(t){t._currentValue=nu.current,St(nu)}function iu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function au(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),iu(f.return,a,t),s||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),iu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function zs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;kn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===gt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(fo):t=[fo])}c=c.return}t!==null&&au(n,t,a,s),n.flags|=262144}function tl(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Za(t){ja=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return ep(ja,t)}function el(t,n){return ja===null&&Za(t),ep(t,n)}function ep(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(r(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var bv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Av=o.unstable_scheduleCallback,Rv=o.unstable_NormalPriority,cn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new bv,data:new Map,refCount:0}}function Bs(t){t.refCount--,t.refCount===0&&Av(Rv,function(){t.controller.abort()})}var Is=null,su=0,Ur=0,Nr=null;function Cv(t,n){if(Is===null){var a=Is=[];su=0,Ur=cf(),Nr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return su++,n.then(np,np),n}function np(){if(--su===0&&Is!==null){Nr!==null&&(Nr.status="fulfilled");var t=Is;Is=null,Ur=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var ip=L.S;L.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cv(t,n),ip!==null&&ip(t,n)};var Ka=tt(null);function ou(){var t=Ka.current;return t!==null?t:He.pooledCache}function nl(t,n){n===null?yt(Ka,Ka.current):yt(Ka,n.pool)}function ap(){var t=ou();return t===null?null:{parent:cn._currentValue,pool:t}}var Fs=Error(r(460)),rp=Error(r(474)),il=Error(r(542)),lu={then:function(){}};function sp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function al(){}function op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(al,al),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t;default:if(typeof n.status=="string")n.then(al,al);else{if(t=He,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t}throw Hs=n,Fs}}var Hs=null;function lp(){if(Hs===null)throw Error(r(459));var t=Hs;return Hs=null,t}function cp(t){if(t===Fs||t===il)throw Error(r(483))}var la=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Ko(t),Zd(t,null,a),n}return Zo(t,s,n,a),Ko(t)}function Gs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gt(t,a)}}function fu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hu=!1;function Vs(){if(hu){var t=Nr;if(t!==null)throw t}}function ks(t,n,a,s){hu=!1;var c=t.updateQueue;la=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,$=O.next;O.next=null,x===null?f=$:x.next=$,x=O;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==x&&(T===null?ht.firstBaseUpdate=$:T.next=$,ht.lastBaseUpdate=O))}if(f!==null){var vt=c.baseState;x=0,ht=$=O=null,T=f;do{var at=T.lane&-536870913,st=at!==T.lane;if(st?(Se&at)===at:(s&at)===at){at!==0&&at===Ur&&(hu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ie=t,$t=T;at=n;var Oe=a;switch($t.tag){case 1:if(ie=$t.payload,typeof ie=="function"){vt=ie.call(Oe,vt,at);break t}vt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=$t.payload,at=typeof ie=="function"?ie.call(Oe,vt,at):ie,at==null)break t;vt=g({},vt,at);break t;case 2:la=!0}}at=T.callback,at!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[at]:st.push(at))}else st={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?($=ht=st,O=vt):ht=ht.next=st,x|=at;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;st=T,T=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ht===null&&(O=vt),c.baseState=O,c.firstBaseUpdate=$,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),va|=x,t.lanes=x,t.memoizedState=vt}}function up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function fp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)up(a[t],n)}var Lr=tt(null),rl=tt(0);function hp(t,n){t=ki,yt(rl,t),yt(Lr,n),ki=t|n.baseLanes}function du(){yt(rl,ki),yt(Lr,Lr.current)}function pu(){ki=rl.current,St(Lr),St(rl)}var fa=0,pe=null,Ne=null,nn=null,sl=!1,Or=!1,Qa=!1,ol=0,Xs=0,Pr=null,Dv=0;function Qe(){throw Error(r(321))}function mu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function gu(t,n,a,s,c,f){return fa=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Zp:Kp,Qa=!1,f=a(s,c),Qa=!1,Or&&(f=pp(n,a,s,c)),dp(t),f}function dp(t){L.H=dl;var n=Ne!==null&&Ne.next!==null;if(fa=0,nn=Ne=pe=null,sl=!1,Xs=0,Pr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&tl(t)&&(pn=!0))}function pp(t,n,a,s){pe=t;var c=0;do{if(Or&&(Pr=null),Xs=0,Or=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Bv,f=n(a,s)}while(Or);return f}function Uv(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?Ws(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(pe.flags|=1024),n}function _u(){var t=ol!==0;return ol=0,t}function vu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xu(t){if(sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sl=!1}fa=0,nn=Ne=pe=null,Or=!1,Xs=ol=0,Pr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?pe.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Ne===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=nn===null?pe.memoizedState:nn.next;if(n!==null)nn=n,Ne=t;else{if(t===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?pe.memoizedState=nn=t:nn=nn.next=t}return nn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(t){var n=Xs;return Xs+=1,Pr===null&&(Pr=[]),t=op(Pr,t,n),n=pe,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Zp:Kp),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ws(t);if(t.$$typeof===P)return bn(t)}throw Error(r(438,String(t)))}function yu(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=pe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Bi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=an();return Mu(n,Ne,t)}function Mu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,O=null,$=n,ht=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(Se&vt)===vt:(fa&vt)===vt){var at=$.revertLane;if(at===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Ur&&(ht=!0);else if((fa&at)===at){$=$.next,at===Ur&&(ht=!0);continue}else vt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=vt,x=f):O=O.next=vt,pe.lanes|=at,va|=at;vt=$.action,Qa&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else at={lane:vt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=at,x=f):O=O.next=at,pe.lanes|=vt,va|=vt;$=$.next}while($!==null&&$!==n);if(O===null?x=f:O.next=T,!kn(f,t.memoizedState)&&(pn=!0,ht&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Eu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);kn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function mp(t,n,a){var s=pe,c=an(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!kn((Ne||c).memoizedState,a);x&&(c.memoizedState=a,pn=!0),c=c.queue;var T=vp.bind(null,s,c,t);if(qs(2048,8,T,[t]),c.getSnapshot!==n||x||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,zr(9,ul(),_p.bind(null,s,c,a,n),null),He===null)throw Error(r(349));f||(fa&124)!==0||gp(s,n,a)}return a}function gp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Su(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _p(t,n,a,s){n.value=a,n.getSnapshot=s,xp(n)&&Sp(t)}function vp(t,n,a){return a(function(){xp(n)&&Sp(t)})}function xp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function Sp(t){var n=Rr(t,2);n!==null&&Zn(n,t,2)}function Tu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Qa){ut(!0);try{a()}finally{ut(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},n}function yp(t,n,a,s){return t.baseState=a,Mu(t,Ne,typeof s=="function"?s:Bi)}function Nv(t,n,a,s,c){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,x={};L.T=x;try{var T=a(c,s),O=L.S;O!==null&&O(x,T),Ep(t,n,T)}catch($){bu(t,n,$)}finally{L.T=f}}else try{f=a(c,s),Ep(t,n,f)}catch($){bu(t,n,$)}}function Ep(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Tp(t,n,s)},function(s){return bu(t,n,s)}):Tp(t,n,a)}function Tp(t,n,a){n.status="fulfilled",n.value=a,bp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mp(t,a)))}function bu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==s)}t.action=null}function bp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ap(t,n){return n}function Rp(t,n){if(be){var a=He.formState;if(a!==null){t:{var s=pe;if(be){if(Ze){e:{for(var c=Ze,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=di(c.nextSibling),s=c.data==="F!";break t}}Ya(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ap,lastRenderedState:n},a.queue=s,a=qp.bind(null,pe,s),s.dispatch=a,s=Tu(!1),f=Du.bind(null,pe,!1,s.queue),s=Pn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Nv.bind(null,pe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Cp(t){var n=an();return wp(n,Ne,t)}function wp(t,n,a){if(n=Mu(t,n,Ap)[0],t=cl(Bi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ws(n)}catch(x){throw x===Fs?il:x}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,zr(9,ul(),Lv.bind(null,c,a),null)),[s,f,t]}function Lv(t,n){t.action=n}function Dp(t){var n=an(),a=Ne;if(a!==null)return wp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function zr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Su(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ul(){return{destroy:void 0,resource:void 0}}function Up(){return an().memoizedState}function fl(t,n,a,s){var c=Pn();s=s===void 0?null:s,pe.flags|=t,c.memoizedState=zr(1|n,ul(),a,s)}function qs(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ne!==null&&s!==null&&mu(s,Ne.memoizedState.deps)?c.memoizedState=zr(n,f,a,s):(pe.flags|=t,c.memoizedState=zr(1|n,f,a,s))}function Np(t,n){fl(8390656,8,t,n)}function Lp(t,n){qs(2048,8,t,n)}function Op(t,n){return qs(4,2,t,n)}function Pp(t,n){return qs(4,4,t,n)}function zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bp(t,n,a){a=a!=null?a.concat([t]):null,qs(4,4,zp.bind(null,n,t),a)}function Au(){}function Ip(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Fp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mu(n,s[1]))return s[0];if(s=t(),Qa){ut(!0);try{t()}finally{ut(!1)}}return a.memoizedState=[s,n],s}function Ru(t,n,a){return a===void 0||(fa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Vm(),pe.lanes|=t,va|=t,a)}function Hp(t,n,a,s){return kn(a,n)?a:Lr.current!==null?(t=Ru(t,a,s),kn(t,n)||(pn=!0),t):(fa&42)===0?(pn=!0,t.memoizedState=a):(t=Vm(),pe.lanes|=t,va|=t,n)}function Gp(t,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var x=L.T,T={};L.T=T,Du(t,!1,n,a);try{var O=c(),$=L.S;if($!==null&&$(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ht=wv(O,s);Ys(t,n,ht,jn(t))}else Ys(t,n,s,jn(t))}catch(vt){Ys(t,n,{then:function(){},status:"rejected",reason:vt},jn())}finally{X.p=f,L.T=x}}function Ov(){}function Cu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Vp(t).queue;Gp(t,c,n,H,a===null?Ov:function(){return kp(t),a(s)})}function Vp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function kp(t){var n=Vp(t).next.queue;Ys(t,n,{},jn())}function wu(){return bn(fo)}function Xp(){return an().memoizedState}function Wp(){return an().memoizedState}function Pv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=ca(a);var s=ua(n,t,a);s!==null&&(Zn(s,n,a),Gs(s,n,a)),n={cache:ru()},t.payload=n;return}n=n.return}}function zv(t,n,a){var s=jn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?Yp(n,a):(a=Zc(t,n,a,s),a!==null&&(Zn(a,t,s),jp(a,n,s)))}function qp(t,n,a){var s=jn();Ys(t,n,a,s)}function Ys(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))Yp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,x))return Zo(t,n,c,0),He===null&&jo(),!1}catch{}finally{}if(a=Zc(t,n,c,s),a!==null)return Zn(a,t,s),jp(a,n,s),!0}return!1}function Du(t,n,a,s){if(s={lane:2,revertLane:cf(),action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=Zc(t,a,s,2),n!==null&&Zn(n,t,2)}function hl(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function Yp(t,n){Or=sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Gt(t,a)}}var dl={readContext:bn,use:ll,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Zp={readContext:bn,use:ll,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Np,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fl(4194308,4,zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fl(4194308,4,t,n)},useInsertionEffect:function(t,n){fl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var s=t();if(Qa){ut(!0);try{t()}finally{ut(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Pn();if(a!==void 0){var c=a(n);if(Qa){ut(!0);try{a(n)}finally{ut(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=zv.bind(null,pe,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Tu(t);var n=t.queue,a=qp.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Au,useDeferredValue:function(t,n){var a=Pn();return Ru(a,t,n)},useTransition:function(){var t=Tu(!1);return t=Gp.bind(null,pe,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=pe,c=Pn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(Se&124)!==0||gp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Np(vp.bind(null,s,f,t),[t]),s.flags|=2048,zr(9,ul(),_p.bind(null,s,f,a,n),null),a},useId:function(){var t=Pn(),n=He.identifierPrefix;if(be){var a=Oi,s=Li;a=(s&~(1<<32-zt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Dv++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:wu,useFormState:Rp,useActionState:Rp,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Du.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:yu,useCacheRefresh:function(){return Pn().memoizedState=Pv.bind(null,pe)}},Kp={readContext:bn,use:ll,useCallback:Ip,useContext:bn,useEffect:Lp,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:cl,useRef:Up,useState:function(){return cl(Bi)},useDebugValue:Au,useDeferredValue:function(t,n){var a=an();return Hp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=cl(Bi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:wu,useFormState:Cp,useActionState:Cp,useOptimistic:function(t,n){var a=an();return yp(a,Ne,t,n)},useMemoCache:yu,useCacheRefresh:Wp},Bv={readContext:bn,use:ll,useCallback:Ip,useContext:bn,useEffect:Lp,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:Eu,useRef:Up,useState:function(){return Eu(Bi)},useDebugValue:Au,useDeferredValue:function(t,n){var a=an();return Ne===null?Ru(a,t,n):Hp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=Eu(Bi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Ws(t),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:wu,useFormState:Dp,useActionState:Dp,useOptimistic:function(t,n){var a=an();return Ne!==null?yp(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:yu,useCacheRefresh:Wp},Br=null,js=0;function pl(t){var n=js;return js+=1,Br===null&&(Br=[]),op(Br,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ml(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qp(t){var n=t._init;return n(t._payload)}function Jp(t){function n(j,V){if(t){var Q=j.deletions;Q===null?(j.deletions=[V],j.flags|=16):Q.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function s(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function c(j,V){return j=Ni(j,V),j.index=0,j.sibling=null,j}function f(j,V,Q){return j.index=Q,t?(Q=j.alternate,Q!==null?(Q=Q.index,Q<V?(j.flags|=67108866,V):Q):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function x(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,V,Q,pt){return V===null||V.tag!==6?(V=Qc(Q,j.mode,pt),V.return=j,V):(V=c(V,Q),V.return=j,V)}function O(j,V,Q,pt){var Ht=Q.type;return Ht===A?ht(j,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===K&&Qp(Ht)===V.type)?(V=c(V,Q.props),Zs(V,Q),V.return=j,V):(V=Qo(Q.type,Q.key,Q.props,null,j.mode,pt),Zs(V,Q),V.return=j,V)}function $(j,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Jc(Q,j.mode,pt),V.return=j,V):(V=c(V,Q.children||[]),V.return=j,V)}function ht(j,V,Q,pt,Ht){return V===null||V.tag!==7?(V=ka(Q,j.mode,pt,Ht),V.return=j,V):(V=c(V,Q),V.return=j,V)}function vt(j,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Qc(""+V,j.mode,Q),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return Q=Qo(V.type,V.key,V.props,null,j.mode,Q),Zs(Q,V),Q.return=j,Q;case M:return V=Jc(V,j.mode,Q),V.return=j,V;case K:var pt=V._init;return V=pt(V._payload),vt(j,V,Q)}if(et(V)||it(V))return V=ka(V,j.mode,Q,null),V.return=j,V;if(typeof V.then=="function")return vt(j,pl(V),Q);if(V.$$typeof===P)return vt(j,el(j,V),Q);ml(j,V)}return null}function at(j,V,Q,pt){var Ht=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:T(j,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Ht?O(j,V,Q,pt):null;case M:return Q.key===Ht?$(j,V,Q,pt):null;case K:return Ht=Q._init,Q=Ht(Q._payload),at(j,V,Q,pt)}if(et(Q)||it(Q))return Ht!==null?null:ht(j,V,Q,pt,null);if(typeof Q.then=="function")return at(j,V,pl(Q),pt);if(Q.$$typeof===P)return at(j,V,el(j,Q),pt);ml(j,Q)}return null}function st(j,V,Q,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(Q)||null,T(V,j,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return j=j.get(pt.key===null?Q:pt.key)||null,O(V,j,pt,Ht);case M:return j=j.get(pt.key===null?Q:pt.key)||null,$(V,j,pt,Ht);case K:var me=pt._init;return pt=me(pt._payload),st(j,V,Q,pt,Ht)}if(et(pt)||it(pt))return j=j.get(Q)||null,ht(V,j,pt,Ht,null);if(typeof pt.then=="function")return st(j,V,Q,pl(pt),Ht);if(pt.$$typeof===P)return st(j,V,Q,el(V,pt),Ht);ml(V,pt)}return null}function ie(j,V,Q,pt){for(var Ht=null,me=null,Zt=V,ee=V=0,gn=null;Zt!==null&&ee<Q.length;ee++){Zt.index>ee?(gn=Zt,Zt=null):gn=Zt.sibling;var Ee=at(j,Zt,Q[ee],pt);if(Ee===null){Zt===null&&(Zt=gn);break}t&&Zt&&Ee.alternate===null&&n(j,Zt),V=f(Ee,V,ee),me===null?Ht=Ee:me.sibling=Ee,me=Ee,Zt=gn}if(ee===Q.length)return a(j,Zt),be&&Wa(j,ee),Ht;if(Zt===null){for(;ee<Q.length;ee++)Zt=vt(j,Q[ee],pt),Zt!==null&&(V=f(Zt,V,ee),me===null?Ht=Zt:me.sibling=Zt,me=Zt);return be&&Wa(j,ee),Ht}for(Zt=s(Zt);ee<Q.length;ee++)gn=st(Zt,j,ee,Q[ee],pt),gn!==null&&(t&&gn.alternate!==null&&Zt.delete(gn.key===null?ee:gn.key),V=f(gn,V,ee),me===null?Ht=gn:me.sibling=gn,me=gn);return t&&Zt.forEach(function(Ra){return n(j,Ra)}),be&&Wa(j,ee),Ht}function $t(j,V,Q,pt){if(Q==null)throw Error(r(151));for(var Ht=null,me=null,Zt=V,ee=V=0,gn=null,Ee=Q.next();Zt!==null&&!Ee.done;ee++,Ee=Q.next()){Zt.index>ee?(gn=Zt,Zt=null):gn=Zt.sibling;var Ra=at(j,Zt,Ee.value,pt);if(Ra===null){Zt===null&&(Zt=gn);break}t&&Zt&&Ra.alternate===null&&n(j,Zt),V=f(Ra,V,ee),me===null?Ht=Ra:me.sibling=Ra,me=Ra,Zt=gn}if(Ee.done)return a(j,Zt),be&&Wa(j,ee),Ht;if(Zt===null){for(;!Ee.done;ee++,Ee=Q.next())Ee=vt(j,Ee.value,pt),Ee!==null&&(V=f(Ee,V,ee),me===null?Ht=Ee:me.sibling=Ee,me=Ee);return be&&Wa(j,ee),Ht}for(Zt=s(Zt);!Ee.done;ee++,Ee=Q.next())Ee=st(Zt,j,ee,Ee.value,pt),Ee!==null&&(t&&Ee.alternate!==null&&Zt.delete(Ee.key===null?ee:Ee.key),V=f(Ee,V,ee),me===null?Ht=Ee:me.sibling=Ee,me=Ee);return t&&Zt.forEach(function(Ix){return n(j,Ix)}),be&&Wa(j,ee),Ht}function Oe(j,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:t:{for(var Ht=Q.key;V!==null;){if(V.key===Ht){if(Ht=Q.type,Ht===A){if(V.tag===7){a(j,V.sibling),pt=c(V,Q.props.children),pt.return=j,j=pt;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===K&&Qp(Ht)===V.type){a(j,V.sibling),pt=c(V,Q.props),Zs(pt,Q),pt.return=j,j=pt;break t}a(j,V);break}else n(j,V);V=V.sibling}Q.type===A?(pt=ka(Q.props.children,j.mode,pt,Q.key),pt.return=j,j=pt):(pt=Qo(Q.type,Q.key,Q.props,null,j.mode,pt),Zs(pt,Q),pt.return=j,j=pt)}return x(j);case M:t:{for(Ht=Q.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(j,V.sibling),pt=c(V,Q.children||[]),pt.return=j,j=pt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}pt=Jc(Q,j.mode,pt),pt.return=j,j=pt}return x(j);case K:return Ht=Q._init,Q=Ht(Q._payload),Oe(j,V,Q,pt)}if(et(Q))return ie(j,V,Q,pt);if(it(Q)){if(Ht=it(Q),typeof Ht!="function")throw Error(r(150));return Q=Ht.call(Q),$t(j,V,Q,pt)}if(typeof Q.then=="function")return Oe(j,V,pl(Q),pt);if(Q.$$typeof===P)return Oe(j,V,el(j,Q),pt);ml(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(j,V.sibling),pt=c(V,Q),pt.return=j,j=pt):(a(j,V),pt=Qc(Q,j.mode,pt),pt.return=j,j=pt),x(j)):a(j,V)}return function(j,V,Q,pt){try{js=0;var Ht=Oe(j,V,Q,pt);return Br=null,Ht}catch(Zt){if(Zt===Fs||Zt===il)throw Zt;var me=Xn(29,Zt,null,j.mode);return me.lanes=pt,me.return=j,me}finally{}}}var Ir=Jp(!0),$p=Jp(!1),ni=tt(null),Ei=null;function ha(t){var n=t.alternate;yt(un,un.current&1),yt(ni,t),Ei===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Ei=t)}function tm(t){if(t.tag===22){if(yt(un,un.current),yt(ni,t),Ei===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ei=t)}}else da()}function da(){yt(un,un.current),yt(ni,ni.current)}function Ii(t){St(ni),Ei===t&&(Ei=null),St(un)}var un=tt(0);function gl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||yf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Uu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Nu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=jn(),c=ca(s);c.payload=n,a!=null&&(c.callback=a),n=ua(t,c,s),n!==null&&(Zn(n,t,s),Gs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=jn(),c=ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ua(t,c,s),n!==null&&(Zn(n,t,s),Gs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),s=ca(a);s.tag=2,n!=null&&(s.callback=n),n=ua(t,s,a),n!==null&&(Zn(n,t,a),Gs(n,t,a))}};function em(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Us(a,s)||!Us(c,f):!0}function nm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Nu.enqueueReplaceState(n,n.state,null)}function Ja(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function im(t){_l(t)}function am(t){console.error(t)}function rm(t){_l(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function sm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Lu(t,n,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function om(t){return t=ca(t),t.tag=3,t}function lm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){sm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){sm(n,a,s),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Iv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ei===null?af():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,c)),!1;case 22:return a.flags|=65536,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,c)),!1}throw Error(r(435,a.tag))}return sf(t,s,c),af(),!1}if(be)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==eu&&(t=Error(r(422),{cause:s}),Ps(Jn(t,a)))):(s!==eu&&(n=Error(r(423),{cause:s}),Ps(Jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Jn(s,a),c=Lu(t.stateNode,s,c),fu(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),no===null?no=[f]:no.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Lu(a.stateNode,s,t),fu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=om(c),lm(c,t,a,s),fu(a,c),!1}a=a.return}while(a!==null);return!1}var cm=Error(r(461)),pn=!1;function Sn(t,n,a,s){n.child=t===null?$p(n,null,a,s):Ir(n,t.child,a,s)}function um(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return Za(n),s=gu(t,n,a,x,f,c),T=_u(),t!==null&&!pn?(vu(t,n,c),Fi(t,n,c)):(be&&T&&$c(n),n.flags|=1,Sn(t,n,s,c),n.child)}function fm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Kc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,hm(t,n,f,s,c)):(t=Qo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Gu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Us,a(x,s)&&t.ref===n.ref)return Fi(t,n,c)}return n.flags|=1,t=Ni(f,s),t.ref=n.ref,t.return=n,n.child=t}function hm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Us(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Gu(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Fi(t,n,c)}return Ou(t,n,a,s,c)}function dm(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return pm(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nl(n,f!==null?f.cachePool:null),f!==null?hp(n,f):du(),tm(n);else return n.lanes=n.childLanes=536870912,pm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(nl(n,f.cachePool),hp(n,f),da(),n.memoizedState=null):(t!==null&&nl(n,null),du(),da());return Sn(t,n,c,a),n.child}function pm(t,n,a,s){var c=ou();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&nl(n,null),du(),tm(n),t!==null&&zs(t,n,s,!0),null}function xl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ou(t,n,a,s,c){return Za(n),a=gu(t,n,a,s,void 0,c),s=_u(),t!==null&&!pn?(vu(t,n,c),Fi(t,n,c)):(be&&s&&$c(n),n.flags|=1,Sn(t,n,a,c),n.child)}function mm(t,n,a,s,c,f){return Za(n),n.updateQueue=null,a=pp(n,s,a,c),dp(t),s=_u(),t!==null&&!pn?(vu(t,n,f),Fi(t,n,f)):(be&&s&&$c(n),n.flags|=1,Sn(t,n,a,f),n.child)}function gm(t,n,a,s,c){if(Za(n),n.stateNode===null){var f=Cr,x=a.contextType;typeof x=="object"&&x!==null&&(f=bn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},cu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?bn(x):Cr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Uu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Nu.enqueueReplaceState(f,f.state,null),ks(n,s,f,c),Vs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,O=Ja(a,T);f.props=O;var $=f.context,ht=a.contextType;x=Cr,typeof ht=="object"&&ht!==null&&(x=bn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&nm(n,f,s,x),la=!1;var at=n.memoizedState;f.state=at,ks(n,s,f,c),Vs(),$=n.memoizedState,T||at!==$||la?(typeof vt=="function"&&(Uu(n,a,vt,s),$=n.memoizedState),(O=la||em(n,a,O,s,at,$,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,uu(t,n),x=n.memoizedProps,ht=Ja(a,x),f.props=ht,vt=n.pendingProps,at=f.context,$=a.contextType,O=Cr,typeof $=="object"&&$!==null&&(O=bn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||at!==O)&&nm(n,f,s,O),la=!1,at=n.memoizedState,f.state=at,ks(n,s,f,c),Vs();var st=n.memoizedState;x!==vt||at!==st||la||t!==null&&t.dependencies!==null&&tl(t.dependencies)?(typeof T=="function"&&(Uu(n,a,T,s),st=n.memoizedState),(ht=la||em(n,a,ht,s,at,st,O)||t!==null&&t.dependencies!==null&&tl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=O,s=ht):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,xl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ir(n,t.child,null,c),n.child=Ir(n,null,a,c)):Sn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Fi(t,n,c),t}function _m(t,n,a,s){return Os(),n.flags|=256,Sn(t,n,a,s),n.child}var Pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zu(t){return{baseLanes:t,cachePool:ap()}}function Bu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function vm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?ha(n):da(),be){var T=Ze,O;if(O=T){t:{for(O=T,T=Mi;O.nodeType!==8;){if(!T){T=null;break t}if(O=di(O.nextSibling),O===null){T=null;break t}}T=O}T!==null?(n.memoizedState={dehydrated:T,treeContext:Xa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},O=Xn(18,null,null,0),O.stateNode=T,O.return=n,n.child=O,Un=n,Ze=null,O=!0):O=!1}O||Ya(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return yf(T)?n.lanes=32:n.lanes=536870912,null;Ii(n)}return T=s.children,s=s.fallback,c?(da(),c=n.mode,T=Sl({mode:"hidden",children:T},c),s=ka(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,c=n.child,c.memoizedState=zu(a),c.childLanes=Bu(t,x,a),n.memoizedState=Pu,s):(ha(n),Iu(n,T))}if(O=t.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Fu(t,n,a)):n.memoizedState!==null?(da(),n.child=t.child,n.flags|=128,n=null):(da(),c=s.fallback,T=n.mode,s=Sl({mode:"visible",children:s.children},T),c=ka(c,T,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ir(n,t.child,null,a),s=n.child,s.memoizedState=zu(a),s.childLanes=Bu(t,x,a),n.memoizedState=Pu,n=c);else if(ha(n),yf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,Ps({value:s,source:null,stack:null}),n=Fu(t,n,a)}else if(pn||zs(t,n,a,!1),x=(a&t.childLanes)!==0,pn||x){if(x=He,x!==null&&(s=a&-a,s=(s&42)!==0?1:ae(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,Rr(t,s),Zn(x,t,s),cm;T.data==="$?"||af(),n=Fu(t,n,a)}else T.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,Ze=di(T.nextSibling),Un=n,be=!0,qa=null,Mi=!1,t!==null&&(ti[ei++]=Li,ti[ei++]=Oi,ti[ei++]=Xa,Li=t.id,Oi=t.overflow,Xa=n),n=Iu(n,s.children),n.flags|=4096);return n}return c?(da(),c=s.fallback,T=n.mode,O=t.child,$=O.sibling,s=Ni(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,$!==null?c=Ni($,c):(c=ka(c,T,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,T=t.child.memoizedState,T===null?T=zu(a):(O=T.cachePool,O!==null?($=cn._currentValue,O=O.parent!==$?{parent:$,pool:$}:O):O=ap(),T={baseLanes:T.baseLanes|a,cachePool:O}),c.memoizedState=T,c.childLanes=Bu(t,x,a),n.memoizedState=Pu,s):(ha(n),a=t.child,t=a.sibling,a=Ni(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Iu(t,n){return n=Sl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Fu(t,n,a){return Ir(n,t.child,null,a),t=Iu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),iu(t.return,n,a)}function Hu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Sm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(Sn(t,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,a,n);else if(t.tag===19)xm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(yt(un,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&gl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&gl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Hu(n,!0,a,null,f);break;case"together":Hu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ni(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ni(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Gu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tl(t)))}function Fv(t,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),oa(n,cn,t.memoizedState.cache),Os();break;case 27:case 5:Yt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:oa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vm(t,n,a):(ha(n),t=Fi(t,n,a),t!==null?t.sibling:null);ha(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Sm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,dm(t,n,a);case 24:oa(n,cn,t.memoizedState.cache)}return Fi(t,n,a)}function ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Gu(t,a)&&(n.flags&128)===0)return pn=!1,Fv(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,be&&(n.flags&1048576)!==0&&Qd(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Kc(s)?(t=Ja(s,t),n.tag=1,n=gm(null,n,s,t,a)):(n.tag=0,n=Ou(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===U){n.tag=11,n=um(null,n,s,t,a);break t}else if(c===F){n.tag=14,n=fm(null,n,s,t,a);break t}}throw n=rt(s)||s,Error(r(306,n,""))}}return n;case 0:return Ou(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ja(s,n.pendingProps),gm(t,n,s,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,uu(t,n),ks(n,s,null,a);var x=n.memoizedState;if(s=x.cache,oa(n,cn,s),s!==f.cache&&au(n,[cn],a,!0),Vs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=_m(t,n,s,a);break t}else if(s!==c){c=Jn(Error(r(424)),n),Ps(c),n=_m(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=di(t.firstChild),Un=n,be=!0,qa=null,Mi=!0,a=$p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Os(),s===c){n=Fi(t,n,a);break t}Sn(t,n,s,a)}n=n.child}return n;case 26:return xl(t,n),t===null?(a=bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Ol(J.current).createElement(a),s[ln]=n,s[Ye]=t,Mn(s,a,t),en(s),n.stateNode=s):n.memoizedState=bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Yt(n),t===null&&be&&(s=n.stateNode=Mg(n.type,n.pendingProps,J.current),Un=n,Mi=!0,c=Ze,Ma(n.type)?(Mf=c,Ze=di(s.firstChild)):Ze=c),Sn(t,n,n.pendingProps.children,a),xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=Ze)&&(s=dx(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,Un=n,Ze=di(s.firstChild),Mi=!1,c=!0):c=!1),c||Ya(n)),Yt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,vf(c,f)?s=null:x!==null&&vf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=gu(t,n,Uv,null,null,a),fo._currentValue=c),xl(t,n),Sn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Ze)&&(a=px(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Un=n,Ze=null,t=!0):t=!1),t||Ya(n)),null;case 13:return vm(t,n,a);case 4:return At(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ir(n,null,s,a):Sn(t,n,s,a),n.child;case 11:return um(t,n,n.type,n.pendingProps,a);case 7:return Sn(t,n,n.pendingProps,a),n.child;case 8:return Sn(t,n,n.pendingProps.children,a),n.child;case 12:return Sn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oa(n,n.type,s.value),Sn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Za(n),c=bn(c),s=s(c),n.flags|=1,Sn(t,n,s,a),n.child;case 14:return fm(t,n,n.type,n.pendingProps,a);case 15:return hm(t,n,n.type,n.pendingProps,a);case 19:return Sm(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=Sl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ni(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return dm(t,n,a);case 24:return Za(n),s=bn(cn),t===null?(c=ou(),c===null&&(c=He,f=ru(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},cu(n),oa(n,cn,c)):((t.lanes&a)!==0&&(uu(t,n),ks(n,null,null,a),Vs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),oa(n,cn,s)):(s=f.cache,oa(n,cn,s),s!==c.cache&&au(n,[cn],a,!0))),Sn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(t){t.flags|=4}function Mm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dg(n)){if(n=ni.current,n!==null&&((Se&4194048)===Se?Ei!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==Ei))throw Hs=lu,rp;t.flags|=8192}}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?bt():536870912,t.lanes|=n,Vr|=n)}function Ks(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Hv(t,n,a){var s=n.pendingProps;switch(tu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(cn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tp())),qe(n),null;case 26:return a=n.memoizedState,t===null?(Hi(n),a!==null?(qe(n),Mm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Hi(n),qe(n),Mm(n,a)):(qe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Hi(n),qe(n),n.flags&=-16777217),null;case 27:de(n),a=J.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=wt.current,Ls(n)?Jd(n):(t=Mg(c,s,a),n.stateNode=t,Hi(n))}return qe(n),null;case 5:if(de(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(t=wt.current,Ls(n))Jd(n);else{switch(c=Ol(J.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[ln]=n,t[Ye]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(Mn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Hi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Un,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||mg(t.nodeValue,a)),t||Ya(n)}else t=Ol(t).createTextNode(s),t[ln]=n,n.stateNode=t}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else Os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=tp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),qe(n),null;case 4:return Xt(),t===null&&df(n.stateNode.containerInfo),qe(n),null;case 10:return zi(n.type),qe(n),null;case 19:if(St(un),c=n.memoizedState,c===null)return qe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)Ks(c,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=gl(t),f!==null){for(n.flags|=128,Ks(c,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Kd(a,t),a=a.sibling;return yt(un,un.current&1|2),n.child}t=t.sibling}c.tail!==null&&Pt()>Tl&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304)}else{if(!s)if(t=gl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),Ks(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return qe(n),null}else 2*Pt()-c.renderingStartTime>Tl&&a!==536870912&&(n.flags|=128,s=!0,Ks(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Pt(),n.sibling=null,t=un.current,yt(un,s?t&1|2:t&1),n):(qe(n),null);case 22:case 23:return Ii(n),pu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&St(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(cn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gv(t,n){switch(tu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zi(cn),Xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 13:if(Ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Os()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return St(un),null;case 4:return Xt(),null;case 10:return zi(n.type),null;case 22:case 23:return Ii(n),pu(),t!==null&&St(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zi(cn),null;case 25:return null;default:return null}}function Em(t,n){switch(tu(n),n.tag){case 3:zi(cn),Xt();break;case 26:case 27:case 5:de(n);break;case 4:Xt();break;case 13:Ii(n);break;case 19:St(un);break;case 10:zi(n.type);break;case 22:case 23:Ii(n),pu(),t!==null&&St(Ka);break;case 24:zi(cn)}}function Qs(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function pa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var O=a,$=T;try{$()}catch(ht){Ie(c,O,ht)}}}s=s.next}while(s!==f)}}catch(ht){Ie(n,n.return,ht)}}function Tm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{fp(n,a)}catch(s){Ie(t,t.return,s)}}}function bm(t,n,a){a.props=Ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function Js(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ie(t,n,c)}}function Ti(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function Am(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function Vu(t,n,a){try{var s=t.stateNode;lx(s,t.type,a,n),s[Ye]=n}catch(c){Ie(t,t.return,c)}}function Rm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ma(t.type)||t.tag===4}function ku(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&(s===27&&Ma(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Xu(t,n,a),t=t.sibling;t!==null;)Xu(t,n,a),t=t.sibling}function Ml(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ma(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ml(t,n,a),t=t.sibling;t!==null;)Ml(t,n,a),t=t.sibling}function Cm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[ln]=t,n[Ye]=a}catch(f){Ie(t,t.return,f)}}var Gi=!1,Je=!1,Wu=!1,wm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Vv(t,n){if(t=t.containerInfo,gf=Hl,t=Hd(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,O=-1,$=0,ht=0,vt=t,at=null;e:for(;;){for(var st;vt!==a||c!==0&&vt.nodeType!==3||(T=x+c),vt!==f||s!==0&&vt.nodeType!==3||(O=x+s),vt.nodeType===3&&(x+=vt.nodeValue.length),(st=vt.firstChild)!==null;)at=vt,vt=st;for(;;){if(vt===t)break e;if(at===a&&++$===c&&(T=x),at===f&&++ht===s&&(O=x),(st=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=st}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Hl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ie=Ja(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(ie,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){Ie(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Sf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Dm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),s&4&&Qs(5,a);break;case 1:if(ma(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}s&64&&Tm(a),s&512&&Js(a,a.return);break;case 3:if(ma(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fp(t,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&s&4&&Cm(a);case 26:case 5:ma(t,a),n===null&&s&4&&Am(a),s&512&&Js(a,a.return);break;case 12:ma(t,a);break;case 13:ma(t,a),s&4&&Lm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Qv.bind(null,a),mx(t,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||Je,c=Gi;var f=Je;Gi=s,(Je=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),Gi=c,Je=f}break;case 30:break;default:ma(t,a)}}function Um(t){var n=t.alternate;n!==null&&(t.alternate=null,Um(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&xr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ke=null,zn=!1;function Vi(t,n,a){for(a=a.child;a!==null;)Nm(t,n,a),a=a.sibling}function Nm(t,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:Je||Ti(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Ti(a,n);var s=ke,c=zn;Ma(a.type)&&(ke=a.stateNode,zn=!1),Vi(t,n,a),oo(a.stateNode),ke=s,zn=c;break;case 5:Je||Ti(a,n);case 6:if(s=ke,c=zn,ke=null,Vi(t,n,a),ke=s,zn=c,ke!==null)if(zn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:ke!==null&&(zn?(t=ke,Sg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),go(t)):Sg(ke,a.stateNode));break;case 4:s=ke,c=zn,ke=a.stateNode.containerInfo,zn=!0,Vi(t,n,a),ke=s,zn=c;break;case 0:case 11:case 14:case 15:Je||pa(2,a,n),Je||pa(4,a,n),Vi(t,n,a);break;case 1:Je||(Ti(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&bm(a,n,s)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:Je=(s=Je)||a.memoizedState!==null,Vi(t,n,a),Je=s;break;default:Vi(t,n,a)}}function Lm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{go(t)}catch(a){Ie(n,n.return,a)}}function kv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wm),n;default:throw Error(r(435,t.tag))}}function qu(t,n){var a=kv(t);n.forEach(function(s){var c=Jv.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Ma(T.type)){ke=T.stateNode,zn=!1;break t}break;case 5:ke=T.stateNode,zn=!1;break t;case 3:case 4:ke=T.stateNode.containerInfo,zn=!0;break t}T=T.return}if(ke===null)throw Error(r(160));Nm(f,x,c),ke=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Om(n,t),n=n.sibling}var hi=null;function Om(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),s&4&&(pa(3,t,t.return),Qs(3,t),pa(5,t,t.return));break;case 1:Wn(n,t),qn(t),s&512&&(Je||a===null||Ti(a,a.return)),s&64&&Gi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(Wn(n,t),qn(t),s&512&&(Je||a===null||Ti(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[yi]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[ln]=t,en(f),s=f;break t;case"link":var x=Cg("link","href",c).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Cg("meta","content",c).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=t,en(f),s=f}t.stateNode=s}else wg(c,t.type,t.stateNode);else t.stateNode=Rg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?wg(c,t.type,t.stateNode):Rg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Vu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),s&512&&(Je||a===null||Ti(a,a.return)),a!==null&&s&4&&Vu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),s&512&&(Je||a===null||Ti(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(st){Ie(t,t.return,st)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Vu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Wu=!0);break;case 6:if(Wn(n,t),qn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(st){Ie(t,t.return,st)}}break;case 3:if(Bl=null,c=hi,hi=Pl(n.containerInfo),Wn(n,t),hi=c,qn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{go(n.containerInfo)}catch(st){Ie(t,t.return,st)}Wu&&(Wu=!1,Pm(t));break;case 4:s=hi,hi=Pl(t.stateNode.containerInfo),Wn(n,t),qn(t),hi=s;break;case 12:Wn(n,t),qn(t);break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=Pt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,$=Gi,ht=Je;if(Gi=$||c,Je=ht||O,Wn(n,t),Je=ht,Gi=$,qn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Gi||Je||$a(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=O.stateNode;var vt=O.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Ie(O,O.return,st)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(st){Ie(O,O.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,qu(t,a))));break;case 19:Wn(n,t),qn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,qu(t,s)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Rm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=ku(t);Ml(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ln(x,""),a.flags&=-33);var T=ku(t);Ml(t,T,x);break;case 3:case 4:var O=a.stateNode.containerInfo,$=ku(t);Xu(t,$,O);break;default:throw Error(r(161))}}catch(ht){Ie(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Pm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dm(t,n.alternate,n),n=n.sibling}function $a(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),$a(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bm(n,n.return,a),$a(n);break;case 27:oo(n.stateNode);case 26:case 5:Ti(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ga(c,f,a),Qs(4,f);break;case 1:if(ga(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ie(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)up(O[c],T)}catch($){Ie(s,s.return,$)}}a&&x&64&&Tm(f),Js(f,f.return);break;case 27:Cm(f);case 26:case 5:ga(c,f,a),a&&s===null&&x&4&&Am(f),Js(f,f.return);break;case 12:ga(c,f,a);break;case 13:ga(c,f,a),a&&x&4&&Lm(c,f);break;case 22:f.memoizedState===null&&ga(c,f,a),Js(f,f.return);break;case 30:break;default:ga(c,f,a)}n=n.sibling}}function Yu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bs(a))}function ju(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bs(t))}function bi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(t,n,a,s),n=n.sibling}function zm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,s),c&2048&&Qs(9,n);break;case 1:bi(t,n,a,s);break;case 3:bi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bs(t)));break;case 12:if(c&2048){bi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Ie(n,n.return,O)}}else bi(t,n,a,s);break;case 13:bi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?bi(t,n,a,s):$s(t,n):f._visibility&2?bi(t,n,a,s):(f._visibility|=2,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Yu(x,n);break;case 24:bi(t,n,a,s),c&2048&&ju(n.alternate,n);break;default:bi(t,n,a,s)}}function Fr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,x=n,T=a,O=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:Fr(f,x,T,O,c),Qs(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Fr(f,x,T,O,c):$s(f,x):(ht._visibility|=2,Fr(f,x,T,O,c)),c&&$&2048&&Yu(x.alternate,x);break;case 24:Fr(f,x,T,O,c),c&&$&2048&&ju(x.alternate,x);break;default:Fr(f,x,T,O,c)}n=n.sibling}}function $s(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:$s(a,s),c&2048&&Yu(s.alternate,s);break;case 24:$s(a,s),c&2048&&ju(s.alternate,s);break;default:$s(a,s)}n=n.sibling}}var to=8192;function Hr(t){if(t.subtreeFlags&to)for(t=t.child;t!==null;)Bm(t),t=t.sibling}function Bm(t){switch(t.tag){case 26:Hr(t),t.flags&to&&t.memoizedState!==null&&Cx(hi,t.memoizedState,t.memoizedProps);break;case 5:Hr(t);break;case 3:case 4:var n=hi;hi=Pl(t.stateNode.containerInfo),Hr(t),hi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=to,to=16777216,Hr(t),to=n):Hr(t));break;default:Hr(t)}}function Im(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Hm(s,t)}Im(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fm(t),t=t.sibling}function Fm(t){switch(t.tag){case 0:case 11:case 15:eo(t),t.flags&2048&&pa(9,t,t.return);break;case 3:eo(t);break;case 12:eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,El(t)):eo(t);break;default:eo(t)}}function El(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Hm(s,t)}Im(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:pa(8,n,n.return),El(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,El(n));break;default:El(n)}t=t.sibling}}function Hm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Bs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Um(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Xv={getCacheForType:function(t){var n=bn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Wv=typeof WeakMap=="function"?WeakMap:Map,Ce=0,He=null,_e=null,Se=0,we=0,Yn=null,_a=!1,Gr=!1,Zu=!1,ki=0,Ke=0,va=0,tr=0,Ku=0,ii=0,Vr=0,no=null,Bn=null,Qu=!1,Ju=0,Tl=1/0,bl=null,xa=null,yn=0,Sa=null,kr=null,Xr=0,$u=0,tf=null,Gm=null,io=0,ef=null;function jn(){if((Ce&2)!==0&&Se!==0)return Se&-Se;if(L.T!==null){var t=Ur;return t!==0?t:cf()}return ye()}function Vm(){ii===0&&(ii=(Se&536870912)===0||be?W():536870912);var t=ni.current;return t!==null&&(t.flags|=32),ii}function Zn(t,n,a){(t===He&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),ya(t,Se,ii,!1)),It(t,a),((Ce&2)===0||t!==He)&&(t===He&&((Ce&2)===0&&(tr|=a),Ke===4&&ya(t,Se,ii,!1)),Ai(t))}function km(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Dt(t,n),c=s?jv(t,n):rf(t,n,!0),f=s;do{if(c===0){Gr&&!s&&ya(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!qv(a)){c=rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=no;var O=T.current.memoizedState.isDehydrated;if(O&&(Wr(T,x).flags|=256),x=rf(T,x,!1),x!==2){if(Zu&&!O){T.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),ya(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ya(s,n,ii,!_a);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ju+300-Pt(),10<c)){if(ya(s,n,ii,!_a),kt(s,0,!0)!==0)break t;s.timeoutHandle=vg(Xm.bind(null,s,a,Bn,bl,Qu,n,ii,tr,Vr,_a,f,2,-0,0),c);break t}Xm(s,a,Bn,bl,Qu,n,ii,tr,Vr,_a,f,0,-0,0)}}break}while(!0);Ai(t)}function Xm(t,n,a,s,c,f,x,T,O,$,ht,vt,at,st){if(t.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(uo={stylesheets:null,count:0,unsuspend:Rx},Bm(n),vt=wx(),vt!==null)){t.cancelPendingCommit=vt(Qm.bind(null,t,n,f,a,s,c,x,T,O,ht,1,at,st)),ya(t,f,x,!$);return}Qm(t,n,f,a,s,c,x,T,O)}function qv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(t,n,a,s){n&=~Ku,n&=~tr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-zt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&xt(t,a,n)}function Al(){return(Ce&6)===0?(ao(0),!1):!0}function nf(){if(_e!==null){if(we===0)var t=_e.return;else t=_e,Pi=ja=null,xu(t),Br=null,js=0,t=_e;for(;t!==null;)Em(t.alternate,t),t=t.return;_e=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ux(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nf(),He=t,_e=a=Ni(t.current,null),Se=n,we=0,Yn=null,_a=!1,Gr=Dt(t,n),Zu=!1,Vr=ii=Ku=tr=va=Ke=0,Bn=no=null,Qu=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-zt(s),f=1<<c;n|=t[c],s&=~f}return ki=n,jo(),a}function Wm(t,n){pe=null,L.H=dl,n===Fs||n===il?(n=lp(),we=3):n===rp?(n=lp(),we=4):we=n===cm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,_e===null&&(Ke=1,vl(t,Jn(n,t.current)))}function qm(){var t=L.H;return L.H=dl,t===null?dl:t}function Ym(){var t=L.A;return L.A=Xv,t}function af(){Ke=4,_a||(Se&4194048)!==Se&&ni.current!==null||(Gr=!0),(va&134217727)===0&&(tr&134217727)===0||He===null||ya(He,Se,ii,!1)}function rf(t,n,a){var s=Ce;Ce|=2;var c=qm(),f=Ym();(He!==t||Se!==n)&&(bl=null,Wr(t,n)),n=!1;var x=Ke;t:do try{if(we!==0&&_e!==null){var T=_e,O=Yn;switch(we){case 8:nf(),x=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=we;if(we=0,Yn=null,qr(t,T,O,$),a&&Gr){x=0;break t}break;default:$=we,we=0,Yn=null,qr(t,T,O,$)}}Yv(),x=Ke;break}catch(ht){Wm(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Pi=ja=null,Ce=s,L.H=c,L.A=f,_e===null&&(He=null,Se=0,jo()),x}function Yv(){for(;_e!==null;)jm(_e)}function jv(t,n){var a=Ce;Ce|=2;var s=qm(),c=Ym();He!==t||Se!==n?(bl=null,Tl=Pt()+500,Wr(t,n)):Gr=Dt(t,n);t:do try{if(we!==0&&_e!==null){n=_e;var f=Yn;e:switch(we){case 1:we=0,Yn=null,qr(t,n,f,1);break;case 2:case 9:if(sp(f)){we=0,Yn=null,Zm(n);break}n=function(){we!==2&&we!==9||He!==t||(we=7),Ai(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:sp(f)?(we=0,Yn=null,Zm(n)):(we=0,Yn=null,qr(t,n,f,7));break;case 5:var x=null;switch(_e.tag){case 26:x=_e.memoizedState;case 5:case 27:var T=_e;if(!x||Dg(x)){we=0,Yn=null;var O=T.sibling;if(O!==null)_e=O;else{var $=T.return;$!==null?(_e=$,Rl($)):_e=null}break e}}we=0,Yn=null,qr(t,n,f,5);break;case 6:we=0,Yn=null,qr(t,n,f,6);break;case 8:nf(),Ke=6;break t;default:throw Error(r(462))}}Zv();break}catch(ht){Wm(t,ht)}while(!0);return Pi=ja=null,L.H=s,L.A=c,Ce=a,_e!==null?0:(He=null,Se=0,jo(),Ke)}function Zv(){for(;_e!==null&&!re();)jm(_e)}function jm(t){var n=ym(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Rl(t):_e=n}function Zm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=mm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=mm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:xu(n);default:Em(a,n),n=_e=Kd(n,ki),n=ym(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Rl(t):_e=n}function qr(t,n,a,s){Pi=ja=null,xu(n),Br=null,js=0;var c=n.return;try{if(Iv(t,c,n,a,Se)){Ke=1,vl(t,Jn(a,t.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;Ke=1,vl(t,Jn(a,t.current)),_e=null;return}n.flags&32768?(be||s===1?t=!0:Gr||(Se&536870912)!==0?t=!1:(_a=t=!0,(s===2||s===9||s===3||s===6)&&(s=ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),Km(n,t)):Rl(n)}function Rl(t){var n=t;do{if((n.flags&32768)!==0){Km(n,_a);return}t=n.return;var a=Hv(n.alternate,n,ki);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);Ke===0&&(Ke=5)}function Km(t,n){do{var a=Gv(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);Ke=6,_e=null}function Qm(t,n,a,s,c,f,x,T,O){t.cancelPendingCommit=null;do Cl();while(yn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=jc,Et(t,a,f,x,T,O),t===He&&(_e=He=null,Se=0),kr=n,Sa=t,Xr=a,$u=f,tf=c,Gm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$v(Xe,function(){return ng(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=X.p,X.p=2,x=Ce,Ce|=4;try{Vv(t,n,a)}finally{Ce=x,X.p=c,L.T=s}}yn=1,Jm(),$m(),tg()}}function Jm(){if(yn===1){yn=0;var t=Sa,n=kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=X.p;X.p=2;var c=Ce;Ce|=4;try{Om(n,t);var f=_f,x=Hd(t.containerInfo),T=f.focusedElem,O=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Fd(T.ownerDocument.documentElement,T)){if(O!==null&&kc(T)){var $=O.start,ht=O.end;if(ht===void 0&&(ht=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ht,T.value.length);else{var vt=T.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ie=T.textContent.length,$t=Math.min(O.start,ie),Oe=O.end===void 0?$t:Math.min(O.end,ie);!st.extend&&$t>Oe&&(x=Oe,Oe=$t,$t=x);var j=Id(T,$t),V=Id(T,Oe);if(j&&V&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var Q=vt.createRange();Q.setStart(j.node,j.offset),st.removeAllRanges(),$t>Oe?(st.addRange(Q),st.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),st.addRange(Q))}}}}for(vt=[],st=T;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var pt=vt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Hl=!!gf,_f=gf=null}finally{Ce=c,X.p=s,L.T=a}}t.current=n,yn=2}}function $m(){if(yn===2){yn=0;var t=Sa,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=X.p;X.p=2;var c=Ce;Ce|=4;try{Dm(t,n.alternate,n)}finally{Ce=c,X.p=s,L.T=a}}yn=3}}function tg(){if(yn===4||yn===3){yn=0,ne();var t=Sa,n=kr,a=Xr,s=Gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,kr=Sa=null,eg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(xa=null),Ae(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=X.p,X.p=2,L.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{L.T=n,X.p=c}}(Xr&3)!==0&&Cl(),Ai(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===ef?io++:(io=0,ef=t):io=0,ao(0)}}function eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bs(n)))}function Cl(t){return Jm(),$m(),tg(),ng()}function ng(){if(yn!==5)return!1;var t=Sa,n=$u;$u=0;var a=Ae(Xr),s=L.T,c=X.p;try{X.p=32>a?32:a,L.T=null,a=tf,tf=null;var f=Sa,x=Xr;if(yn=0,kr=Sa=null,Xr=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,Fm(f.current),zm(f,f.current,x,a),Ce=T,ao(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{X.p=c,L.T=s,eg(t,n)}}function ig(t,n,a){n=Jn(a,n),n=Lu(t.stateNode,n,2),t=ua(t,n,2),t!==null&&(It(t,2),Ai(t))}function Ie(t,n,a){if(t.tag===3)ig(t,t,a);else for(;n!==null;){if(n.tag===3){ig(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xa===null||!xa.has(s))){t=Jn(a,t),a=om(2),s=ua(n,a,2),s!==null&&(lm(a,s,n,t),It(s,2),Ai(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Wv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Zu=!0,c.add(a),t=Kv.bind(null,t,n,a),n.then(t,t))}function Kv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,He===t&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>Pt()-Ju?(Ce&2)===0&&Wr(t,0):Ku|=a,Vr===Se&&(Vr=0)),Ai(t)}function ag(t,n){n===0&&(n=bt()),t=Rr(t,n),t!==null&&(It(t,n),Ai(t))}function Qv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ag(t,a)}function Jv(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ag(t,a)}function $v(t,n){return z(t,n)}var wl=null,Yr=null,of=!1,Dl=!1,lf=!1,er=0;function Ai(t){t!==Yr&&t.next===null&&(Yr===null?wl=Yr=t:Yr=Yr.next=t),Dl=!0,of||(of=!0,ex())}function ao(t,n){if(!lf&&Dl){lf=!0;do for(var a=!1,s=wl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,lg(s,f))}else f=Se,f=kt(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Dt(s,f)||(a=!0,lg(s,f));s=s.next}while(a);lf=!1}}function tx(){rg()}function rg(){Dl=of=!1;var t=0;er!==0&&(cx()&&(t=er),er=0);for(var n=Pt(),a=null,s=wl;s!==null;){var c=s.next,f=sg(s,n);f===0?(s.next=null,a===null?wl=c:a.next=c,c===null&&(Yr=a)):(a=s,(t!==0||(f&3)!==0)&&(Dl=!0)),s=c}ao(t)}function sg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-zt(f),T=1<<x,O=c[x];O===-1?((T&a)===0||(T&s)!==0)&&(c[x]=oe(T,n)):O<=n&&(t.expiredLanes|=T),f&=~T}if(n=He,a=Se,a=kt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&De(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Dt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&De(s),Ae(a)){case 2:case 8:a=se;break;case 32:a=Xe;break;case 268435456:a=N;break;default:a=Xe}return s=og.bind(null,t),a=z(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&De(s),t.callbackPriority=2,t.callbackNode=null,2}function og(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cl()&&t.callbackNode!==a)return null;var s=Se;return s=kt(t,t===He?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(km(t,s,n),sg(t,Pt()),t.callbackNode!=null&&t.callbackNode===a?og.bind(null,t):null)}function lg(t,n){if(Cl())return null;km(t,n,!0)}function ex(){fx(function(){(Ce&6)!==0?z(Vt,tx):rg()})}function cf(){return er===0&&(er=W()),er}function cg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Go(""+t)}function ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function nx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=cg((c[Ye]||null).action),x=s.submitter;x&&(n=(n=x[Ye]||null)?cg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Wo("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var O=x?ug(c,x):new FormData(c);Cu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=x?ug(c,x):new FormData(c),Cu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var uf=0;uf<Yc.length;uf++){var ff=Yc[uf],ix=ff.toLowerCase(),ax=ff[0].toUpperCase()+ff.slice(1);fi(ix,"on"+ax)}fi(kd,"onAnimationEnd"),fi(Xd,"onAnimationIteration"),fi(Wd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(yv,"onTransitionRun"),fi(Mv,"onTransitionStart"),fi(Ev,"onTransitionCancel"),fi(qd,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),b("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),b("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),b("onBeforeInput",["compositionend","keypress","textInput","paste"]),b("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),b("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function fg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],O=T.instance,$=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){_l(ht)}c.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(T=s[x],O=T.instance,$=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=$;try{f(c)}catch(ht){_l(ht)}c.currentTarget=null,f=O}}}}function ve(t,n){var a=n[_r];a===void 0&&(a=n[_r]=new Set);var s=t+"__bubble";a.has(s)||(hg(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),hg(a,t,s,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Ul]){t[Ul]=!0,Fo.forEach(function(a){a!=="selectionchange"&&(rx.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,hf("selectionchange",!1,n))}}function hg(t,n,a,s){switch(zg(n)){case 2:var c=Nx;break;case 8:c=Lx;break;default:c=Rf}a=c.bind(null,n,a,t),c=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=Di(T),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue t}T=T.parentNode}}s=s.return}xd(function(){var $=f,ht=Nc(a),vt=[];t:{var at=Yd.get(t);if(at!==void 0){var st=Wo,ie=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":st=$0;break;case"focusin":ie="focus",st=Ic;break;case"focusout":ie="blur",st=Ic;break;case"beforeblur":case"afterblur":st=Ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=nv;break;case kd:case Xd:case Wd:st=X0;break;case qd:st=av;break;case"scroll":case"scrollend":st=F0;break;case"wheel":st=sv;break;case"copy":case"cut":case"paste":st=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Td;break;case"toggle":case"beforetoggle":st=lv}var $t=(n&4)!==0,Oe=!$t&&(t==="scroll"||t==="scrollend"),j=$t?at!==null?at+"Capture":null:at;$t=[];for(var V=$,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||j===null||(pt=Ts(V,j),pt!=null&&$t.push(so(V,pt,Q))),Oe)break;V=V.return}0<$t.length&&(at=new st(at,ie,null,a,ht),vt.push({event:at,listeners:$t}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",at&&a!==Uc&&(ie=a.relatedTarget||a.fromElement)&&(Di(ie)||ie[Si]))break t;if((st||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ie=a.relatedTarget||a.toElement,st=$,ie=ie?Di(ie):null,ie!==null&&(Oe=u(ie),$t=ie.tag,ie!==Oe||$t!==5&&$t!==27&&$t!==6)&&(ie=null)):(st=null,ie=$),st!==ie)){if($t=Md,pt="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=Td,pt="onPointerLeave",j="onPointerEnter",V="pointer"),Oe=st==null?at:Fa(st),Q=ie==null?at:Fa(ie),at=new $t(pt,V+"leave",st,a,ht),at.target=Oe,at.relatedTarget=Q,pt=null,Di(ht)===$&&($t=new $t(j,V+"enter",ie,a,ht),$t.target=Q,$t.relatedTarget=Oe,pt=$t),Oe=pt,st&&ie)e:{for($t=st,j=ie,V=0,Q=$t;Q;Q=jr(Q))V++;for(Q=0,pt=j;pt;pt=jr(pt))Q++;for(;0<V-Q;)$t=jr($t),V--;for(;0<Q-V;)j=jr(j),Q--;for(;V--;){if($t===j||j!==null&&$t===j.alternate)break e;$t=jr($t),j=jr(j)}$t=null}else $t=null;st!==null&&dg(vt,at,st,$t,!1),ie!==null&&Oe!==null&&dg(vt,Oe,ie,$t,!0)}}t:{if(at=$?Fa($):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=Nd;else if(Dd(at))if(Ld)Ht=vv;else{Ht=gv;var me=mv}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&Dc($.elementType)&&(Ht=Nd):Ht=_v;if(Ht&&(Ht=Ht(t,$))){Ud(vt,Ht,a,ht);break t}me&&me(t,at,$),t==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Tn(at,"number",at.value)}switch(me=$?Fa($):window,t){case"focusin":(Dd(me)||me.contentEditable==="true")&&(Tr=me,Xc=$,Ns=null);break;case"focusout":Ns=Xc=Tr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Gd(vt,a,ht);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":Gd(vt,a,ht)}var Zt;if(Hc)t:{switch(t){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Er?Cd(t,a)&&(ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(bd&&a.locale!=="ko"&&(Er||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Er&&(Zt=Sd()):(sa=ht,Pc="value"in sa?sa.value:sa.textContent,Er=!0)),me=Nl($,ee),0<me.length&&(ee=new Ed(ee,t,null,a,ht),vt.push({event:ee,listeners:me}),Zt?ee.data=Zt:(Zt=wd(a),Zt!==null&&(ee.data=Zt)))),(Zt=uv?fv(t,a):hv(t,a))&&(ee=Nl($,"onBeforeInput"),0<ee.length&&(me=new Ed("onBeforeInput","beforeinput",null,a,ht),vt.push({event:me,listeners:ee}),me.data=Zt)),nx(vt,t,$,a,ht)}fg(vt,n)})}function so(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Nl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ts(t,a),c!=null&&s.unshift(so(t,c,f)),c=Ts(t,n),c!=null&&s.push(so(t,c,f))),t.tag===3)return s;t=t.return}return[]}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dg(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,O=T.alternate,$=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||$===null||(O=$,c?($=Ts(a,f),$!=null&&x.unshift(so(a,$,O))):c||($=Ts(a,f),$!=null&&x.push(so(a,$,O)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var sx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function pg(t){return(typeof t=="string"?t:""+t).replace(sx,`
`).replace(ox,"")}function mg(t,n){return n=pg(n),pg(t)===n}function Ll(){}function Le(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ln(t,""+s);break;case"className":Ft(t,"class",s);break;case"tabIndex":Ft(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(t,a,s);break;case"style":_d(t,s,f);break;case"data":if(n!=="object"){Ft(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Go(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ll);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Go(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ve("beforetoggle",t),ve("toggle",t),Ut(t,"popover",s);break;case"xlinkActuate":Lt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Lt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Lt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Lt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Lt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Lt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ut(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=B0.get(a)||a,Ut(t,a,s))}}function mf(t,n,a,s,c,f){switch(a){case"style":_d(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ln(t,s):(typeof s=="number"||typeof s=="bigint")&&Ln(t,""+s);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ho.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Ye]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ut(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,x,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),s&&Le(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var T=f=x=c=null,O=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":x=ht;break;case"checked":O=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Le(t,n,s,ht,a,null)}}Dn(t,f,T,O,$,x,c,!1),ge(t);return;case"select":ve("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Le(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!s,n!=null?je(t,!!s,n,!1):a!=null&&je(t,!!s,a,!0);return;case"textarea":ve("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Le(t,n,x,T,a,null)}Sr(t,s,c,f),ge(t);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Le(t,n,O,s,a,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(s=0;s<ro.length;s++)ve(ro[s],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,$,s,a,null)}return;default:if(Dc(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&mf(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Le(t,n,T,s,a,null))}function lx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,O=null,$=null,ht=null;for(st in a){var vt=a[st];if(a.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":O=vt;default:s.hasOwnProperty(st)||Le(t,n,st,null,s,vt)}}for(var at in s){var st=s[at];if(vt=a[at],s.hasOwnProperty(at)&&(st!=null||vt!=null))switch(at){case"type":f=st;break;case"name":c=st;break;case"checked":$=st;break;case"defaultChecked":ht=st;break;case"value":x=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==vt&&Le(t,n,at,st,s,vt)}}Be(t,x,T,O,$,ht,f,c);return;case"select":st=x=T=at=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":st=O;default:s.hasOwnProperty(f)||Le(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":at=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==O&&Le(t,n,c,f,s,O)}n=T,a=x,s=st,at!=null?je(t,!!a,at,!1):!!s!=!!a&&(n!=null?je(t,!!a,n,!0):je(t,!!a,a?[]:"",!1));return;case"textarea":st=at=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Le(t,n,T,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":at=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(t,n,x,c,s,f)}xn(t,at,st);return;case"option":for(var ie in a)if(at=a[ie],a.hasOwnProperty(ie)&&at!=null&&!s.hasOwnProperty(ie))switch(ie){case"selected":t.selected=!1;break;default:Le(t,n,ie,null,s,at)}for(O in s)if(at=s[O],st=a[O],s.hasOwnProperty(O)&&at!==st&&(at!=null||st!=null))switch(O){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Le(t,n,O,at,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)at=a[$t],a.hasOwnProperty($t)&&at!=null&&!s.hasOwnProperty($t)&&Le(t,n,$t,null,s,at);for($ in s)if(at=s[$],st=a[$],s.hasOwnProperty($)&&at!==st&&(at!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Le(t,n,$,at,s,st)}return;default:if(Dc(n)){for(var Oe in a)at=a[Oe],a.hasOwnProperty(Oe)&&at!==void 0&&!s.hasOwnProperty(Oe)&&mf(t,n,Oe,void 0,s,at);for(ht in s)at=s[ht],st=a[ht],!s.hasOwnProperty(ht)||at===st||at===void 0&&st===void 0||mf(t,n,ht,at,s,st);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!s.hasOwnProperty(j)&&Le(t,n,j,null,s,at);for(vt in s)at=s[vt],st=a[vt],!s.hasOwnProperty(vt)||at===st||at==null&&st==null||Le(t,n,vt,at,s,st)}var gf=null,_f=null;function Ol(t){return t.nodeType===9?t:t.ownerDocument}function gg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _g(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function cx(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(hx)}:vg;function hx(t){setTimeout(function(){throw t})}function Ma(t){return t==="head"}function Sg(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=t.ownerDocument;if(a&1&&oo(x.documentElement),a&2&&oo(x.body),a&4)for(a=x.head,oo(a),x=a.firstChild;x;){var T=x.nextSibling,O=x.nodeName;x[yi]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(c===0){t.removeChild(f),go(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);go(n)}function Sf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sf(a),xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[yi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function px(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function mx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Mf=null;function yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Mg(t,n,a){switch(n=Ol(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xr(t)}var ai=new Map,Eg=new Set;function Pl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=X.d;X.d={f:gx,r:_x,D:vx,C:xx,L:Sx,m:yx,X:Ex,S:Mx,M:Tx};function gx(){var t=Xi.f(),n=Al();return t||n}function _x(t){var n=aa(t);n!==null&&n.tag===5&&n.type==="form"?kp(n):Xi.r(t)}var Zr=typeof document>"u"?null:document;function Tg(t,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var c=dn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Eg.has(c)||(Eg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function vx(t){Xi.D(t),Tg("dns-prefetch",t,null)}function xx(t,n){Xi.C(t,n),Tg("preconnect",t,n)}function Sx(t,n,a){Xi.L(t,n,a);var s=Zr;if(s&&t&&n){var c='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+dn(a.imageSizes)+'"]')):c+='[href="'+dn(t)+'"]';var f=c;switch(n){case"style":f=Kr(t);break;case"script":f=Qr(t)}ai.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(lo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),Mn(n,"link",t),en(n),s.head.appendChild(n)))}}function yx(t,n){Xi.m(t,n);var a=Zr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+dn(s)+'"][href="'+dn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qr(t)}if(!ai.has(f)&&(t=g({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),Mn(s,"link",t),en(s),a.head.appendChild(s)}}}function Mx(t,n,a){Xi.S(t,n,a);var s=Zr;if(s&&t){var c=ra(s).hoistableStyles,f=Kr(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(lo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&Ef(t,a);var O=x=s.createElement("link");en(O),Mn(O,"link",t),O._p=new Promise(function($,ht){O.onload=$,O.onerror=ht}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,zl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function Ex(t,n){Xi.X(t,n);var a=Zr;if(a&&t){var s=ra(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(co(c)),f||(t=g({src:t,async:!0},n),(n=ai.get(c))&&Tf(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Tx(t,n){Xi.M(t,n);var a=Zr;if(a&&t){var s=ra(a).hoistableScripts,c=Qr(t),f=s.get(c);f||(f=a.querySelector(co(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ai.get(c))&&Tf(t,n),f=a.createElement("script"),en(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function bg(t,n,a,s){var c=(c=J.current)?Pl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Kr(a.href),a=ra(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Kr(a.href);var f=ra(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(lo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||bx(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(a),a=ra(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Kr(t){return'href="'+dn(t)+'"'}function lo(t){return'link[rel="stylesheet"]['+t+"]"}function Ag(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function bx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),en(n),t.head.appendChild(n))}function Qr(t){return'[src="'+dn(t)+'"]'}function co(t){return"script[async]"+t}function Rg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+dn(a.href)+'"]');if(s)return n.instance=s,en(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),en(s),Mn(s,"style",c),zl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Kr(a.href);var f=t.querySelector(lo(c));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=Ag(a),(c=ai.get(c))&&Ef(s,c),f=(t.ownerDocument||t).createElement("link"),en(f);var x=f;return x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),Mn(f,"link",s),n.state.loading|=4,zl(f,a.precedence,t),n.instance=f;case"script":return f=Qr(a.src),(c=t.querySelector(co(f)))?(n.instance=c,en(c),c):(s=a,(c=ai.get(f))&&(s=g({},a),Tf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),en(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,zl(s,a.precedence,t));return n.instance}function zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ef(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Bl=null;function Cg(t,n,a){if(Bl===null){var s=new Map,c=Bl=new Map;c.set(a,s)}else c=Bl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[yi]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function wg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ax(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var uo=null;function Rx(){}function Cx(t,n,a){if(uo===null)throw Error(r(475));var s=uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Kr(a.href),f=t.querySelector(lo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Il.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=t.ownerDocument||t,a=Ag(a),(c=ai.get(c))&&Ef(a,c),f=f.createElement("link"),en(f);var x=f;x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),Mn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Il.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function wx(){if(uo===null)throw Error(r(475));var t=uo;return t.stylesheets&&t.count===0&&bf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&bf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Il(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function bf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,n.forEach(Dx,t),Fl=null,Il.call(t))}function Dx(t,n){if(!(n.state.loading&4)){var a=Fl.get(t);if(a)var s=a.get(null);else{a=new Map,Fl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Il.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var fo={$$typeof:P,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Ux(t,n,a,s,c,f,x,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ug(t,n,a,s,c,f,x,T,O,$,ht,vt){return t=new Ux(t,n,a,x,T,O,$,vt),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},cu(f),t}function Ng(t){return t?(t=Cr,t):Cr}function Lg(t,n,a,s,c,f){c=Ng(c),s.context===null?s.context=c:s.pendingContext=c,s=ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ua(t,s,n),a!==null&&(Zn(a,t,n),Gs(a,t,n))}function Og(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Af(t,n){Og(t,n),(t=t.alternate)&&Og(t,n)}function Pg(t){if(t.tag===13){var n=Rr(t,67108864);n!==null&&Zn(n,t,67108864),Af(t,67108864)}}var Hl=!0;function Nx(t,n,a,s){var c=L.T;L.T=null;var f=X.p;try{X.p=2,Rf(t,n,a,s)}finally{X.p=f,L.T=c}}function Lx(t,n,a,s){var c=L.T;L.T=null;var f=X.p;try{X.p=8,Rf(t,n,a,s)}finally{X.p=f,L.T=c}}function Rf(t,n,a,s){if(Hl){var c=Cf(s);if(c===null)pf(t,n,s,Gl,a),Bg(t,s);else if(Px(c,t,n,a,s))s.stopPropagation();else if(Bg(t,s),n&4&&-1<Ox.indexOf(t)){for(;c!==null;){var f=aa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Kt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var O=1<<31-zt(x);T.entanglements[1]|=O,x&=~O}Ai(f),(Ce&6)===0&&(Tl=Pt()+500,ao(0))}}break;case 13:T=Rr(f,2),T!==null&&Zn(T,f,2),Al(),Af(f,2)}if(f=Cf(s),f===null&&pf(t,n,s,Gl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function Cf(t){return t=Nc(t),wf(t)}var Gl=null;function wf(t){if(Gl=null,t=Di(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gl=t,null}function zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fe()){case Vt:return 2;case se:return 8;case Xe:case We:return 32;case N:return 268435456;default:return 32}default:return 32}}var Df=!1,Ea=null,Ta=null,ba=null,ho=new Map,po=new Map,Aa=[],Ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bg(t,n){switch(t){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(n.pointerId)}}function mo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=aa(n),n!==null&&Pg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Px(t,n,a,s,c){switch(n){case"focusin":return Ea=mo(Ea,t,n,a,s,c),!0;case"dragenter":return Ta=mo(Ta,t,n,a,s,c),!0;case"mouseover":return ba=mo(ba,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return ho.set(f,mo(ho.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,po.set(f,mo(po.get(f)||null,t,n,a,s,c)),!0}return!1}function Ig(t){var n=Di(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ci(t.priority,function(){if(a.tag===13){var s=jn();s=ae(s);var c=Rr(a,s);c!==null&&Zn(c,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Cf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=aa(a),n!==null&&Pg(n),t.blockedOn=a,!1;n.shift()}return!0}function Fg(t,n,a){Vl(t)&&a.delete(n)}function zx(){Df=!1,Ea!==null&&Vl(Ea)&&(Ea=null),Ta!==null&&Vl(Ta)&&(Ta=null),ba!==null&&Vl(ba)&&(ba=null),ho.forEach(Fg),po.forEach(Fg)}function kl(t,n){t.blockedOn===n&&(t.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zx)))}var Xl=null;function Hg(t){Xl!==t&&(Xl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(wf(s||a)===null)continue;break}var f=aa(a);f!==null&&(t.splice(n,3),n-=3,Cu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function go(t){function n(O){return kl(O,t)}Ea!==null&&kl(Ea,t),Ta!==null&&kl(Ta,t),ba!==null&&kl(ba,t),ho.forEach(n),po.forEach(n);for(var a=0;a<Aa.length;a++){var s=Aa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Ig(a),a.blockedOn===null&&Aa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[Ye]||null;if(typeof f=="function")x||Hg(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[Ye]||null)T=x.formAction;else if(wf(c)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Hg(a)}}}function Uf(t){this._internalRoot=t}Wl.prototype.render=Uf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();Lg(a,s,t,n,null,null)},Wl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Lg(t.current,2,null,t,null,null),Al(),n[Si]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,t),a===0&&Ig(t)}};var Gg=e.version;if(Gg!=="19.1.1")throw Error(r(527,Gg,"19.1.1"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Bx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{ft=ql.inject(Bx),_t=ql}catch{}}return vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=im,f=am,x=rm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Ug(t,1,!1,null,null,a,s,c,f,x,T,null),t[Si]=n.current,df(t),new Uf(n)},vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=im,x=am,T=rm,O=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=Ug(t,1,!0,n,a??null,s,c,f,x,T,O,$),n.context=Ng(null),a=n.current,s=jn(),s=ae(s),c=ca(s),c.callback=null,ua(a,c,s),a=s,n.current.lanes=a,It(n,a),Ai(n),t[Si]=n.current,df(t),new Wl(n)},vo.version="19.1.1",vo}var Qg;function Yx(){if(Qg)return Of.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Of.exports=qx(),Of.exports}var jx=Yx();/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kx=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Jg=o=>{const e=Kx(o);return e.charAt(0).toUpperCase()+e.slice(1)},Z_=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),Qx=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=vn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>vn.createElement("svg",{ref:m,...Jx,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:Z_("lucide",l),...!u&&!Qx(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>vn.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=(o,e)=>{const i=vn.forwardRef(({className:r,...l},u)=>vn.createElement($x,{ref:u,iconNode:e,className:Z_(`lucide-${Zx(Jg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Jg(o),i};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],K_=Vn("chart-no-axes-column-increasing",tS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nS=Vn("chevron-right",eS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],hs=Vn("code",iS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Q_=Vn("github",aS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],To=Vn("lightbulb",rS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],J_=Vn("linkedin",sS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$_=Vn("mail",oS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],cS=Vn("map-pin",lS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],t0=Vn("menu",uS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],e0=Vn("phone",fS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],bo=Vn("rocket",hS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],_c=Vn("server",dS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],n0=Vn("square-pen",pS);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],i0=Vn("x",mS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="180",gS=0,$g=1,_S=2,a0=1,vS=2,Ki=3,Ba=0,Fn=1,Qi=2,Pa=0,ps=1,mh=2,t_=3,e_=4,xS=5,ur=100,SS=101,yS=102,MS=103,ES=104,TS=200,bS=201,AS=202,RS=203,gh=204,_h=205,CS=206,wS=207,DS=208,US=209,NS=210,LS=211,OS=212,PS=213,zS=214,vh=0,xh=1,Sh=2,gs=3,yh=4,Mh=5,Eh=6,Th=7,r0=0,BS=1,IS=2,za=0,FS=1,HS=2,GS=3,VS=4,kS=5,XS=6,WS=7,s0=300,_s=301,vs=302,bh=303,Ah=304,Ac=306,Rh=1e3,hr=1001,Ch=1002,xi=1003,qS=1004,Yl=1005,Ci=1006,If=1007,dr=1008,ea=1009,o0=1010,l0=1011,Ro=1012,ld=1013,mr=1014,Ji=1015,No=1016,cd=1017,ud=1018,Co=1020,c0=35902,u0=35899,f0=1021,h0=1022,vi=1023,wo=1026,Do=1027,d0=1028,fd=1029,p0=1030,hd=1031,dd=1033,vc=33776,xc=33777,Sc=33778,yc=33779,wh=35840,Dh=35841,Uh=35842,Nh=35843,Lh=36196,Oh=37492,Ph=37496,zh=37808,Bh=37809,Ih=37810,Fh=37811,Hh=37812,Gh=37813,Vh=37814,kh=37815,Xh=37816,Wh=37817,qh=37818,Yh=37819,jh=37820,Zh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,td=36284,ed=36285,nd=36286,YS=3200,jS=3201,ZS=0,KS=1,Oa="",si="srgb",xs="srgb-linear",Ec="linear",Pe="srgb",Jr=7680,n_=519,QS=512,JS=513,$S=514,m0=515,ty=516,ey=517,ny=518,iy=519,i_=35044,a_="300 es",wi=2e3,Tc=2001;class ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ff=Math.PI/180,id=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function ay(o,e){return(o%e+e)%e}function Hf(o,e,i){return(1-i)*o+i*e}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const S=u[h+0],M=u[h+1],A=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(v!==R||m!==S||p!==M||g!==A){let y=1-d;const _=m*S+p*M+g*A+v*R,I=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const B=Math.sqrt(P),G=Math.atan2(B,_*I);y=Math.sin(y*G)/B,d=Math.sin(d*G)/B}const U=d*I;if(m=m*y+S*U,p=p*y+M*U,g=g*y+A*U,v=v*y+R*U,y===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],S=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+g*v+m*M-p*S,e[i+1]=m*A+g*S+p*v-d*M,e[i+2]=p*A+g*M+d*S-m*v,e[i+3]=g*A-d*v-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),S=m(r/2),M=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=S*g*v+p*M*A,this._y=p*M*v-S*g*A,this._z=p*g*A+S*M*v,this._w=p*g*v-S*M*A;break;case"YXZ":this._x=S*g*v+p*M*A,this._y=p*M*v-S*g*A,this._z=p*g*A-S*M*v,this._w=p*g*v+S*M*A;break;case"ZXY":this._x=S*g*v-p*M*A,this._y=p*M*v+S*g*A,this._z=p*g*A+S*M*v,this._w=p*g*v-S*M*A;break;case"ZYX":this._x=S*g*v-p*M*A,this._y=p*M*v+S*g*A,this._z=p*g*A-S*M*v,this._w=p*g*v+S*M*A;break;case"YZX":this._x=S*g*v+p*M*A,this._y=p*M*v+S*g*A,this._z=p*g*A-S*M*v,this._w=p*g*v-S*M*A;break;case"XZY":this._x=S*g*v-p*M*A,this._y=p*M*v-S*g*A,this._z=p*g*A+S*M*v,this._w=p*g*v+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,i=0,r=0){ct.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(r_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(r_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new ct,r_=new Oo;class ce{constructor(e,i,r,l,u,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],M=r[5],A=r[8],R=l[0],y=l[3],_=l[6],I=l[1],P=l[4],U=l[7],B=l[2],G=l[5],F=l[8];return u[0]=h*R+d*I+m*B,u[3]=h*y+d*P+m*G,u[6]=h*_+d*U+m*F,u[1]=p*R+g*I+v*B,u[4]=p*y+g*P+v*G,u[7]=p*_+g*U+v*F,u[2]=S*R+M*I+A*B,u[5]=S*y+M*P+A*G,u[8]=S*_+M*U+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*h-d*p,S=d*m-g*u,M=p*u-h*m,A=i*v+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(l*p-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(g*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Vf.makeScale(e,i)),this}rotate(e){return this.premultiply(Vf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new ce;function g0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ry(){const o=bc("canvas");return o.style.display="block",o}const s_={};function Uo(o){o in s_||(s_[o]=!0,console.warn(o))}function sy(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const o_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){const o={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Pe&&(l.r=ta(l.r),l.g=ta(l.g),l.b=ta(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?Ec:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Uo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Uo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xs]:{primaries:e,whitePoint:r,transfer:Ec,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Pe,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Te=oy();function ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class ly{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$r===void 0&&($r=bc("canvas")),$r.width=e.width,$r.height=e.height;const l=$r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=$r}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ta(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ta(i[r]/255)*255):i[r]=ta(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cy=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(kf(l[h].image)):u.push(kf(l[h]))}else u=kf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ly.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uy=0;const Xf=new ct;class Hn extends ys{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=hr,l=hr,u=Ci,h=dr,d=vi,m=ea,p=Hn.DEFAULT_ANISOTROPY,g=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Lo(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xf).x}get height(){return this.source.getSize(Xf).y}get depth(){return this.source.getSize(Xf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=s0;Hn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],S=m[1],M=m[5],A=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(M+1)/2,B=(_+1)/2,G=(g+S)/4,F=(v+R)/4,K=(A+y)/4;return P>U&&P>B?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=G/r,u=F/r):U>B?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=G/l,u=K/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=F/u,l=K/u),this.set(r,l,u,i),this}let I=Math.sqrt((y-A)*(y-A)+(v-R)*(v-R)+(S-g)*(S-g));return Math.abs(I)<.001&&(I=1),this.x=(y-A)/I,this.y=(v-R)/I,this.z=(S-g)/I,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fy extends ys{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Hn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new pd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends fy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class _0 extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hy extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jl.copy(r.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Zl.subVectors(this.max,So),ts.subVectors(e.a,So),es.subVectors(e.b,So),ns.subVectors(e.c,So),Ca.subVectors(es,ts),wa.subVectors(ns,es),nr.subVectors(ts,ns);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-nr.z,nr.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,nr.z,0,-nr.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-nr.y,nr.x,0];return!Wf(i,ts,es,ns,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Wf(i,ts,es,ns,Zl))?!1:(Kl.crossVectors(Ca,wa),i=[Kl.x,Kl.y,Kl.z],Wf(i,ts,es,ns,Zl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],pi=new ct,jl=new Po,ts=new ct,es=new ct,ns=new ct,Ca=new ct,wa=new ct,nr=new ct,So=new ct,Zl=new ct,Kl=new ct,ir=new ct;function Wf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){ir.fromArray(o,u);const d=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),m=e.dot(ir),p=i.dot(ir),g=r.dot(ir);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const dy=new Po,yo=new ct,qf=new ct;class Rc{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(qf)),this.expandByPoint(yo.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qi=new ct,Yf=new ct,Ql=new ct,Da=new ct,jf=new ct,Jl=new ct,Zf=new ct;class v0{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yf.copy(e).add(i).multiplyScalar(.5),Ql.copy(i).sub(e).normalize(),Da.copy(this.origin).sub(Yf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=Da.dot(this.direction),m=-Da.dot(Ql),p=Da.lengthSq(),g=Math.abs(1-h*h);let v,S,M,A;if(g>0)if(v=h*m-d,S=h*d-m,A=u*g,v>=0)if(S>=-A)if(S<=A){const R=1/g;v*=R,S*=R,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-A?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p):S<=A?(v=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+S*(S+2*m)+p);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Yf).addScaledVector(Ql,S),M}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,u){jf.subVectors(i,e),Jl.subVectors(r,e),Zf.crossVectors(jf,Jl);let h=this.direction.dot(Zf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,e);const m=d*this.direction.dot(Jl.crossVectors(Da,Jl));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Da));if(p<0||m+p>h)return null;const g=-d*Da.dot(Zf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,h,d,m,p,g,v,S,M,A,R,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,v,S,M,A,R,y)}set(e,i,r,l,u,h,d,m,p,g,v,S,M,A,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=M,_[7]=A,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),h=1/is.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*v,A=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+A*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=A+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,M=m*v,A=p*g,R=p*v;i[0]=S+R*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-A,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,M=m*v,A=p*g,R=p*v;i[0]=S-R*d,i[4]=-h*v,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,M=h*v,A=d*g,R=d*v;i[0]=m*g,i[4]=A*p-M,i[8]=S*p+R,i[1]=m*v,i[5]=R*p+S,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=R-S*v,i[8]=A*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+A,i[10]=S-R*v}else if(e.order==="XZY"){const S=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+R,i[5]=h*g,i[9]=M*v-A,i[2]=A*v-M,i[6]=d*g,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(py,e,my)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ua.crossVectors(r,Kn),Ua.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ua.crossVectors(r,Kn)),Ua.normalize(),$l.crossVectors(Kn,Ua),l[0]=Ua.x,l[4]=$l.x,l[8]=Kn.x,l[1]=Ua.y,l[5]=$l.y,l[9]=Kn.y,l[2]=Ua.z,l[6]=$l.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],M=r[13],A=r[2],R=r[6],y=r[10],_=r[14],I=r[3],P=r[7],U=r[11],B=r[15],G=l[0],F=l[4],K=l[8],w=l[12],C=l[1],k=l[5],it=l[9],q=l[13],rt=l[2],et=l[6],L=l[10],X=l[14],H=l[3],mt=l[7],D=l[11],tt=l[15];return u[0]=h*G+d*C+m*rt+p*H,u[4]=h*F+d*k+m*et+p*mt,u[8]=h*K+d*it+m*L+p*D,u[12]=h*w+d*q+m*X+p*tt,u[1]=g*G+v*C+S*rt+M*H,u[5]=g*F+v*k+S*et+M*mt,u[9]=g*K+v*it+S*L+M*D,u[13]=g*w+v*q+S*X+M*tt,u[2]=A*G+R*C+y*rt+_*H,u[6]=A*F+R*k+y*et+_*mt,u[10]=A*K+R*it+y*L+_*D,u[14]=A*w+R*q+y*X+_*tt,u[3]=I*G+P*C+U*rt+B*H,u[7]=I*F+P*k+U*et+B*mt,u[11]=I*K+P*it+U*L+B*D,u[15]=I*w+P*q+U*X+B*tt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],S=e[10],M=e[14],A=e[3],R=e[7],y=e[11],_=e[15];return A*(+u*m*v-l*p*v-u*d*S+r*p*S+l*d*M-r*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*g-u*m*g)+y*(+i*p*v-i*d*M-u*h*v+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*S+l*h*v-r*h*S+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],S=e[10],M=e[11],A=e[12],R=e[13],y=e[14],_=e[15],I=v*y*p-R*S*p+R*m*M-d*y*M-v*m*_+d*S*_,P=A*S*p-g*y*p-A*m*M+h*y*M+g*m*_-h*S*_,U=g*R*p-A*v*p+A*d*M-h*R*M-g*d*_+h*v*_,B=A*v*m-g*R*m-A*d*S+h*R*S+g*d*y-h*v*y,G=i*I+r*P+l*U+u*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return e[0]=I*F,e[1]=(R*S*u-v*y*u-R*l*M+r*y*M+v*l*_-r*S*_)*F,e[2]=(d*y*u-R*m*u+R*l*p-r*y*p-d*l*_+r*m*_)*F,e[3]=(v*m*u-d*S*u-v*l*p+r*S*p+d*l*M-r*m*M)*F,e[4]=P*F,e[5]=(g*y*u-A*S*u+A*l*M-i*y*M-g*l*_+i*S*_)*F,e[6]=(A*m*u-h*y*u-A*l*p+i*y*p+h*l*_-i*m*_)*F,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*F,e[8]=U*F,e[9]=(A*v*u-g*R*u-A*r*M+i*R*M+g*r*_-i*v*_)*F,e[10]=(h*R*u-A*d*u+A*r*p-i*R*p-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*M-i*d*M)*F,e[12]=B*F,e[13]=(g*R*l-A*v*l+A*r*S-i*R*S-g*r*y+i*v*y)*F,e[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*y-i*d*y)*F,e[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*S+i*d*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,S=u*p,M=u*g,A=u*v,R=h*g,y=h*v,_=d*v,I=m*p,P=m*g,U=m*v,B=r.x,G=r.y,F=r.z;return l[0]=(1-(R+_))*B,l[1]=(M+U)*B,l[2]=(A-P)*B,l[3]=0,l[4]=(M-U)*G,l[5]=(1-(S+_))*G,l[6]=(y+I)*G,l[7]=0,l[8]=(A+P)*F,l[9]=(y-I)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const h=is.set(l[4],l[5],l[6]).length(),d=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,g=1/h,v=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,i.setFromRotationMatrix(mi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=wi,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let A,R;if(m)A=u/(h-u),R=h*u/(h-u);else if(d===wi)A=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Tc)A=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=wi,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let A,R;if(m)A=1/(h-u),R=h/(h-u);else if(d===wi)A=-2/(h-u),R=-(h+u)/(h-u);else if(d===Tc)A=-1/(h-u),R=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const is=new ct,mi=new sn,py=new ct(0,0,0),my=new ct(1,1,1),Ua=new ct,$l=new ct,Kn=new ct,c_=new sn,u_=new Oo;class na{constructor(e=0,i=0,r=0,l=na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return c_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class x0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gy=0;const f_=new ct,as=new Oo,Yi=new sn,tc=new ct,Mo=new ct,_y=new ct,vy=new Oo,h_=new ct(1,0,0),d_=new ct(0,1,0),p_=new ct(0,0,1),m_={type:"added"},xy={type:"removed"},rs={type:"childadded",child:null},Kf={type:"childremoved",child:null};class Gn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new ct,i=new na,r=new Oo,l=new ct(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new ce}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(p_,e)}translateOnAxis(e,i){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(p_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tc.copy(e):tc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Mo,tc,this.up):Yi.lookAt(tc,Mo,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Yi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m_),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xy),Kf.child=e,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m_),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,_y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new ct(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new ct,ji=new ct,Qf=new ct,Zi=new ct,ss=new ct,os=new ct,g_=new ct,Jf=new ct,$f=new ct,th=new ct,eh=new $e,nh=new $e,ih=new $e;class _i{constructor(e=new ct,i=new ct,r=new ct){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){gi.subVectors(l,i),ji.subVectors(r,i),Qf.subVectors(e,i);const h=gi.dot(gi),d=gi.dot(ji),m=gi.dot(Qf),p=ji.dot(ji),g=ji.dot(Qf),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,M=(p*m-d*g)*S,A=(h*g-d*m)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Zi.x),m.addScaledVector(h,Zi.y),m.addScaledVector(d,Zi.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,r),ih.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(eh,u.x),h.addScaledVector(nh,u.y),h.addScaledVector(ih,u.z),h}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),ji.subVectors(e,i),gi.cross(ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),gi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return _i.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ss.subVectors(l,r),os.subVectors(u,r),Jf.subVectors(e,r);const m=ss.dot(Jf),p=os.dot(Jf);if(m<=0&&p<=0)return i.copy(r);$f.subVectors(e,l);const g=ss.dot($f),v=os.dot($f);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ss,h);th.subVectors(e,u);const M=ss.dot(th),A=os.dot(th);if(A>=0&&M<=A)return i.copy(u);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(os,d);const y=g*A-M*v;if(y<=0&&v-g>=0&&M-A>=0)return g_.subVectors(u,l),d=(v-g)/(v-g+(M-A)),i.copy(l).addScaledVector(g_,d);const _=1/(y+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(ss,h).addScaledVector(os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},ec={h:0,s:0,l:0};function ah(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=ay(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ah(h,u,e+1/3),this.g=ah(h,u,e),this.b=ah(h,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const r=S0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Te.workingToColorSpace(Cn.copy(this),e),Math.round(xe(Cn.r*255,0,255))*65536+Math.round(xe(Cn.g*255,0,255))*256+Math.round(xe(Cn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=si){Te.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+i,Na.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Na),e.getHSL(ec);const r=Hf(Na.h,ec.h,i),l=Hf(Na.s,ec.s,i),u=Hf(Na.l,ec.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Re;Re.NAMES=S0;let Sy=0;class zo extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=ps,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class y0 extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new ct,nc=new ze;let yy=0;class li{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=i_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nc.fromBufferAttribute(this,i),nc.applyMatrix3(e),this.setXY(i,nc.x,nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==i_&&(e.usage=this.usage),e}}class M0 extends li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class E0 extends li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pr extends li{constructor(e,i,r){super(new Float32Array(e),i,r)}}let My=0;const ri=new sn,rh=new Gn,ls=new ct,Qn=new Po,Eo=new Po,_n=new ct;class ia extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g0(e)?E0:M0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new pr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Eo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Qn.min,Eo.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Eo.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Eo.min),Qn.expandByPoint(Eo.max))}Qn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(ls.fromBufferAttribute(e,p),_n.add(ls)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new ct,m[K]=new ct;const p=new ct,g=new ct,v=new ct,S=new ze,M=new ze,A=new ze,R=new ct,y=new ct;function _(K,w,C){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),S.fromBufferAttribute(u,K),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),g.sub(p),v.sub(p),M.sub(S),A.sub(S);const k=1/(M.x*A.y-A.x*M.y);isFinite(k)&&(R.copy(g).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(k),y.copy(v).multiplyScalar(M.x).addScaledVector(g,-A.x).multiplyScalar(k),d[K].add(R),d[w].add(R),d[C].add(R),m[K].add(y),m[w].add(y),m[C].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,w=I.length;K<w;++K){const C=I[K],k=C.start,it=C.count;for(let q=k,rt=k+it;q<rt;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const P=new ct,U=new ct,B=new ct,G=new ct;function F(K){B.fromBufferAttribute(l,K),G.copy(B);const w=d[K];P.copy(w),P.sub(B.multiplyScalar(B.dot(w))).normalize(),U.crossVectors(G,w);const k=U.dot(m[K])<0?-1:1;h.setXYZW(K,P.x,P.y,P.z,k)}for(let K=0,w=I.length;K<w;++K){const C=I[K],k=C.start,it=C.count;for(let q=k,rt=k+it;q<rt;q+=3)F(e.getX(q+0)),F(e.getX(q+1)),F(e.getX(q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ct,u=new ct,h=new ct,d=new ct,m=new ct,p=new ct,g=new ct,v=new ct;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,S=new p.constructor(m.length*g);let M=0,A=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*g;for(let _=0;_<g;_++)S[A++]=p[M++]}return new li(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ia,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const S=p[g],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let S=0,M=v.length;S<M;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const __=new sn,ar=new v0,ic=new Rc,v_=new ct,ac=new ct,rc=new ct,sc=new ct,sh=new ct,oc=new ct,x_=new ct,lc=new ct;class $i extends Gn{constructor(e=new ia,i=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){oc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(sh.fromBufferAttribute(v,e),h?oc.addScaledVector(sh,g):oc.addScaledVector(sh.sub(i),g))}i.add(oc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(u),ar.copy(e.ray).recast(e.near),!(ic.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ic,v_)===null||ar.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(__.copy(u).invert(),ar.copy(e.ray).applyMatrix4(__),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ar)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const y=S[A],_=h[y.materialIndex],I=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=I,B=P;U<B;U+=3){const G=d.getX(U),F=d.getX(U+1),K=d.getX(U+2);l=cc(this,_,e,r,p,g,v,G,F,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=A,_=R;y<_;y+=3){const I=d.getX(y),P=d.getX(y+1),U=d.getX(y+2);l=cc(this,h,e,r,p,g,v,I,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const y=S[A],_=h[y.materialIndex],I=Math.max(y.start,M.start),P=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=I,B=P;U<B;U+=3){const G=U,F=U+1,K=U+2;l=cc(this,_,e,r,p,g,v,G,F,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=A,_=R;y<_;y+=3){const I=y,P=y+1,U=y+2;l=cc(this,h,e,r,p,g,v,I,P,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ey(o,e,i,r,l,u,h,d){let m;if(e.side===Fn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Ba,d),m===null)return null;lc.copy(d),lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:o}}function cc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,ac),o.getVertexPosition(m,rc),o.getVertexPosition(p,sc);const g=Ey(o,e,i,r,ac,rc,sc,x_);if(g){const v=new ct;_i.getBarycoord(x_,ac,rc,sc,v),l&&(g.uv=_i.getInterpolatedAttribute(l,d,m,p,v,new ze)),u&&(g.uv1=_i.getInterpolatedAttribute(u,d,m,p,v,new ze)),h&&(g.normal=_i.getInterpolatedAttribute(h,d,m,p,v,new ct),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new ct,materialIndex:0};_i.getNormal(ac,rc,sc,S.normal),g.face=S,g.barycoord=v}return g}class Bo extends ia{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new pr(p,3)),this.setAttribute("normal",new pr(g,3)),this.setAttribute("uv",new pr(v,2));function A(R,y,_,I,P,U,B,G,F,K,w){const C=U/F,k=B/K,it=U/2,q=B/2,rt=G/2,et=F+1,L=K+1;let X=0,H=0;const mt=new ct;for(let D=0;D<L;D++){const tt=D*k-q;for(let St=0;St<et;St++){const yt=St*C-it;mt[R]=yt*I,mt[y]=tt*P,mt[_]=rt,p.push(mt.x,mt.y,mt.z),mt[R]=0,mt[y]=0,mt[_]=G>0?1:-1,g.push(mt.x,mt.y,mt.z),v.push(St/F),v.push(1-D/K),X+=1}}for(let D=0;D<K;D++)for(let tt=0;tt<F;tt++){const St=S+tt+et*D,yt=S+tt+et*(D+1),wt=S+(tt+1)+et*(D+1),Bt=S+(tt+1)+et*D;m.push(St,yt,Bt),m.push(yt,wt,Bt),H+=6}d.addGroup(M,H,w),M+=H,S+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)e[l]=r[l]}return e}function Ty(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function T0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const by={clone:Ss,merge:Nn};var Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ay,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class b0 extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new ct,S_=new ze,y_=new ze;class oi extends b0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,i){return this.getViewBounds(e,S_,y_),i.subVectors(y_,S_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ff*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const cs=-90,us=1;class Cy extends Gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(cs,us,e,i);l.layers=this.layers,this.add(l);const u=new oi(cs,us,e,i);u.layers=this.layers,this.add(u);const h=new oi(cs,us,e,i);h.layers=this.layers,this.add(h);const d=new oi(cs,us,e,i);d.layers=this.layers,this.add(d);const m=new oi(cs,us,e,i);m.layers=this.layers,this.add(m);const p=new oi(cs,us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class A0 extends Hn{constructor(e=[],i=_s,r,l,u,h,d,m,p,g){super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends gr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new A0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),u=new Ia({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Pa});u.uniforms.tEquirect.value=i;const h=new $i(l,u),d=i.minFilter;return i.minFilter===dr&&(i.minFilter=Ci),new Cy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class uc extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dy={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Dy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new uc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Uy extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const lh=new ct,Ny=new ct,Ly=new ce;class lr{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=lh.subVectors(r,i).cross(Ny.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ly.getNormalMatrix(e),l=this.coplanarPoint(lh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Rc,Oy=new ze(.5,.5),fc=new ct;class R0{constructor(e=new lr,i=new lr,r=new lr,l=new lr,u=new lr,h=new lr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=wi,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],S=u[6],M=u[7],A=u[8],R=u[9],y=u[10],_=u[11],I=u[12],P=u[13],U=u[14],B=u[15];if(l[0].setComponents(p-h,M-g,_-A,B-I).normalize(),l[1].setComponents(p+h,M+g,_+A,B+I).normalize(),l[2].setComponents(p+d,M+v,_+R,B+P).normalize(),l[3].setComponents(p-d,M-v,_-R,B-P).normalize(),r)l[4].setComponents(m,S,y,U).normalize(),l[5].setComponents(p-m,M-S,_-y,B-U).normalize();else if(l[4].setComponents(p-m,M-S,_-y,B-U).normalize(),i===wi)l[5].setComponents(p+m,M+S,_+y,B+U).normalize();else if(i===Tc)l[5].setComponents(m,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const i=Oy.distanceTo(e.center);return rr.radius=.7071067811865476+i,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(fc.x=l.normal.x>0?e.max.x:e.min.x,fc.y=l.normal.y>0?e.max.y:e.min.y,fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M_=new sn,ad=new v0,hc=new Rc,dc=new ct;class Py extends Gn{constructor(e=new ia,i=new C0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(l),hc.radius+=u,e.ray.intersectsSphere(hc)===!1)return;M_.copy(l).invert(),ad.copy(e.ray).applyMatrix4(M_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let A=S,R=M;A<R;A++){const y=p.getX(A);dc.fromBufferAttribute(v,y),E_(dc,y,m,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let A=S,R=M;A<R;A++)dc.fromBufferAttribute(v,A),E_(dc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function E_(o,e,i,r,l,u,h){const d=ad.distanceSqToPoint(o);if(d<i){const m=new ct;ad.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class w0 extends Hn{constructor(e,i,r=mr,l,u,h,d=xi,m=xi,p,g=wo,v=1){if(g!==wo&&g!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class D0 extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cc extends ia{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=e/d,S=i/m,M=[],A=[],R=[],y=[];for(let _=0;_<g;_++){const I=_*S-h;for(let P=0;P<p;P++){const U=P*v-u;A.push(U,-I,0),R.push(0,0,1),y.push(P/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const P=I+p*_,U=I+p*(_+1),B=I+1+p*(_+1),G=I+1+p*_;M.push(P,U,G),M.push(U,B,G)}this.setIndex(M),this.setAttribute("position",new pr(A,3)),this.setAttribute("normal",new pr(R,3)),this.setAttribute("uv",new pr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class zy extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class By extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Iy extends b0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Fy extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function T_(o,e,i,r){const l=Hy(r);switch(i){case f0:return o*e;case d0:return o*e/l.components*l.byteLength;case fd:return o*e/l.components*l.byteLength;case p0:return o*e*2/l.components*l.byteLength;case hd:return o*e*2/l.components*l.byteLength;case h0:return o*e*3/l.components*l.byteLength;case vi:return o*e*4/l.components*l.byteLength;case dd:return o*e*4/l.components*l.byteLength;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Nh:return Math.max(o,16)*Math.max(e,8)/4;case wh:case Uh:return Math.max(o,8)*Math.max(e,8)/2;case Lh:case Oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case $h:case td:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ed:case nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Hy(o){switch(o){case ea:case o0:return{byteLength:1,components:1};case Ro:case l0:case No:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case mr:case ld:case Ji:return{byteLength:4,components:1};case c0:case u0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Gy(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<v.length;M++){const A=v[S],R=v[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,v[S]=R)}v.length=S+1;for(let M=0,A=v.length;M<A;M++){const R=v[M];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Vy,alphahash_pars_fragment:ky,alphamap_fragment:Xy,alphamap_pars_fragment:Wy,alphatest_fragment:qy,alphatest_pars_fragment:Yy,aomap_fragment:jy,aomap_pars_fragment:Zy,batching_pars_vertex:Ky,batching_vertex:Qy,begin_vertex:Jy,beginnormal_vertex:$y,bsdfs:tM,iridescence_fragment:eM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:uM,common:fM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:dM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:_M,colorspace_fragment:vM,colorspace_pars_fragment:xM,envmap_fragment:SM,envmap_common_pars_fragment:yM,envmap_pars_fragment:MM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:OM,envmap_vertex:TM,fog_vertex:bM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:CM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:DM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:NM,lights_pars_begin:LM,lights_toon_fragment:PM,lights_toon_pars_fragment:zM,lights_phong_fragment:BM,lights_phong_pars_fragment:IM,lights_physical_fragment:FM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:kM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:YM,map_fragment:jM,map_pars_fragment:ZM,map_particle_fragment:KM,map_particle_pars_fragment:QM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:$M,morphinstance_vertex:tE,morphcolor_vertex:eE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:aE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:_E,project_vertex:vE,dithering_fragment:xE,dithering_pars_fragment:SE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:bE,shadowmask_pars_fragment:AE,skinbase_vertex:RE,skinning_pars_vertex:CE,skinning_vertex:wE,skinnormal_vertex:DE,specularmap_fragment:UE,specularmap_pars_fragment:NE,tonemapping_fragment:LE,tonemapping_pars_fragment:OE,transmission_fragment:PE,transmission_pars_fragment:zE,uv_pars_fragment:BE,uv_pars_vertex:IE,uv_vertex:FE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:kE,backgroundCube_frag:XE,cube_vert:WE,cube_frag:qE,depth_vert:YE,depth_frag:jE,distanceRGBA_vert:ZE,distanceRGBA_frag:KE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:tT,meshbasic_vert:eT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:aT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:fT,meshphysical_frag:hT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:xT,sprite_frag:ST},Ot={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Nn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Nn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Nn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Re(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Nn([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Nn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Nn([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Nn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Nn([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Nn([Ot.common,Ot.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Nn([Ot.lights,Ot.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const pc={r:0,b:0,g:0},sr=new na,yT=new sn;function MT(o,e,i,r,l,u,h){const d=new Re(0);let m=u===!0?0:1,p,g,v=null,S=0,M=null;function A(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:e).get(U)),U}function R(P){let U=!1;const B=A(P);B===null?_(d,m):B&&B.isColor&&(_(B,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,U){const B=A(U);B&&(B.isCubeTexture||B.mapping===Ac)?(g===void 0&&(g=new $i(new Bo(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:Ss(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),sr.copy(U.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(sr)),g.material.toneMapped=Te.getTransfer(B.colorSpace)!==Pe,(v!==B||S!==B.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,v=B,S=B.version,M=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new $i(new Cc(2,2),new Ia({name:"BackgroundMaterial",uniforms:Ss(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(B.colorSpace)!==Pe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||S!==B.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=B,S=B.version,M=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,U){P.getRGB(pc,T0(o)),r.buffers.color.setClear(pc.r,pc.g,pc.b,U,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,U=1){d.set(P),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(d,m)},render:R,addToRenderList:y,dispose:I}}function ET(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,k,it,q,rt){let et=!1;const L=v(q,it,k);u!==L&&(u=L,p(u.object)),et=M(C,q,it,rt),et&&A(C,q,it,rt),rt!==null&&e.update(rt,o.ELEMENT_ARRAY_BUFFER),(et||h)&&(h=!1,U(C,k,it,q),rt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(rt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function v(C,k,it){const q=it.wireframe===!0;let rt=r[C.id];rt===void 0&&(rt={},r[C.id]=rt);let et=rt[k.id];et===void 0&&(et={},rt[k.id]=et);let L=et[q];return L===void 0&&(L=S(m()),et[q]=L),L}function S(C){const k=[],it=[],q=[];for(let rt=0;rt<i;rt++)k[rt]=0,it[rt]=0,q[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:it,attributeDivisors:q,object:C,attributes:{},index:null}}function M(C,k,it,q){const rt=u.attributes,et=k.attributes;let L=0;const X=it.getAttributes();for(const H in X)if(X[H].location>=0){const D=rt[H];let tt=et[H];if(tt===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),D===void 0||D.attribute!==tt||tt&&D.data!==tt.data)return!0;L++}return u.attributesNum!==L||u.index!==q}function A(C,k,it,q){const rt={},et=k.attributes;let L=0;const X=it.getAttributes();for(const H in X)if(X[H].location>=0){let D=et[H];D===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const tt={};tt.attribute=D,D&&D.data&&(tt.data=D.data),rt[H]=tt,L++}u.attributes=rt,u.attributesNum=L,u.index=q}function R(){const C=u.newAttributes;for(let k=0,it=C.length;k<it;k++)C[k]=0}function y(C){_(C,0)}function _(C,k){const it=u.newAttributes,q=u.enabledAttributes,rt=u.attributeDivisors;it[C]=1,q[C]===0&&(o.enableVertexAttribArray(C),q[C]=1),rt[C]!==k&&(o.vertexAttribDivisor(C,k),rt[C]=k)}function I(){const C=u.newAttributes,k=u.enabledAttributes;for(let it=0,q=k.length;it<q;it++)k[it]!==C[it]&&(o.disableVertexAttribArray(it),k[it]=0)}function P(C,k,it,q,rt,et,L){L===!0?o.vertexAttribIPointer(C,k,it,rt,et):o.vertexAttribPointer(C,k,it,q,rt,et)}function U(C,k,it,q){R();const rt=q.attributes,et=it.getAttributes(),L=k.defaultAttributeValues;for(const X in et){const H=et[X];if(H.location>=0){let mt=rt[X];if(mt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(mt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(mt=C.instanceColor)),mt!==void 0){const D=mt.normalized,tt=mt.itemSize,St=e.get(mt);if(St===void 0)continue;const yt=St.buffer,wt=St.type,Bt=St.bytesPerElement,J=wt===o.INT||wt===o.UNSIGNED_INT||mt.gpuType===ld;if(mt.isInterleavedBufferAttribute){const gt=mt.data,At=gt.stride,Xt=mt.offset;if(gt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<H.locationSize;Yt++)_(H.location+Yt,gt.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Yt=0;Yt<H.locationSize;Yt++)y(H.location+Yt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Yt=0;Yt<H.locationSize;Yt++)P(H.location+Yt,tt/H.locationSize,wt,D,At*Bt,(Xt+tt/H.locationSize*Yt)*Bt,J)}else{if(mt.isInstancedBufferAttribute){for(let gt=0;gt<H.locationSize;gt++)_(H.location+gt,mt.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<H.locationSize;gt++)y(H.location+gt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let gt=0;gt<H.locationSize;gt++)P(H.location+gt,tt/H.locationSize,wt,D,tt*Bt,tt/H.locationSize*gt*Bt,J)}}else if(L!==void 0){const D=L[X];if(D!==void 0)switch(D.length){case 2:o.vertexAttrib2fv(H.location,D);break;case 3:o.vertexAttrib3fv(H.location,D);break;case 4:o.vertexAttrib4fv(H.location,D);break;default:o.vertexAttrib1fv(H.location,D)}}}}I()}function B(){K();for(const C in r){const k=r[C];for(const it in k){const q=k[it];for(const rt in q)g(q[rt].object),delete q[rt];delete k[it]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const it in k){const q=k[it];for(const rt in q)g(q[rt].object),delete q[rt];delete k[it]}delete r[C.id]}function F(C){for(const k in r){const it=r[k];if(it[C.id]===void 0)continue;const q=it[C.id];for(const rt in q)g(q[rt].object),delete q[rt];delete it[C.id]}}function K(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:w,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:I}}function TT(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A];i.update(M,r,1)}function m(p,g,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],g[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let A=0;for(let R=0;R<v;R++)A+=g[R]*S[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function bT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==vi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ea&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ji&&!K)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:B,maxSamples:G}}function AT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new lr,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||l;return l=S,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,M){const A=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||u&&!y)u?g(null):p();else{const I=u?0:r,P=I*4;let U=_.clippingState||null;m.value=U,U=g(A,S,P,M);for(let B=0;B!==P;++B)U[B]=i[B];_.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,M,A){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const _=M+R*4,I=S.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let P=0,U=M;P!==R;++P,U+=4)h.copy(v[P]).applyMatrix4(I,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function RT(o){let e=new WeakMap;function i(h,d){return d===bh?h.mapping=_s:d===Ah&&(h.mapping=vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===bh||d===Ah)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new wy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ds=4,b_=[.125,.215,.35,.446,.526,.582],fr=20,ch=new Iy,A_=new Re;let uh=null,fh=0,hh=0,dh=!1;const cr=(1+Math.sqrt(5))/2,fs=1/cr,R_=[new ct(-cr,fs,0),new ct(cr,fs,0),new ct(-fs,0,cr),new ct(fs,0,cr),new ct(0,cr,-fs),new ct(0,cr,fs),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],CT=new ct;class C_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=CT}=u;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,fh,hh),this._renderer.xr.enabled=dh,e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:No,format:vi,colorSpace:xs,depthBuffer:!1},l=w_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wT(u)),this._blurMaterial=DT(u,e,i)}return l}_compileMaterial(e){const i=new $i(this._lodPlanes[0],e);this._renderer.compile(i,ch)}_sceneToCubeUV(e,i,r,l,u){const m=new oi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(A_),v.toneMapping=za,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new y0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new $i(new Bo,R);let _=!1;const I=e.background;I?I.isColor&&(R.color.copy(I),e.background=null,_=!0):(R.color.copy(A_),_=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[P]));const B=this._cubeSize;mc(l,U*B,P>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=S,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===_s||e.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=U_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new $i(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;mc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=R_[(l-u-1)%R_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new $i(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*fr-1),R=u/A,y=isFinite(u)?1+Math.floor(g*R):fr;y>fr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${fr}`);const _=[];let I=0;for(let F=0;F<fr;++F){const K=F/R,w=Math.exp(-K*K/2);_.push(w),F===0?I+=w:F<y&&(I+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/I;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=A,S.mipInt.value=P-r;const U=this._sizeLods[l],B=3*U*(l>P-ds?l-P+ds:0),G=4*(this._cubeSize-U);mc(i,B,G,3*U,2*U),m.setRenderTarget(i),m.render(v,ch)}}function wT(o){const e=[],i=[],r=[];let l=o;const u=o-ds+1+b_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ds?m=b_[h-o+ds-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,A=6,R=3,y=2,_=1,I=new Float32Array(R*A*M),P=new Float32Array(y*A*M),U=new Float32Array(_*A*M);for(let G=0;G<M;G++){const F=G%3*2/3-1,K=G>2?0:-1,w=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];I.set(w,R*A*G),P.set(S,y*A*G);const C=[G,G,G,G,G,G];U.set(C,_*A*G)}const B=new ia;B.setAttribute("position",new li(I,R)),B.setAttribute("uv",new li(P,y)),B.setAttribute("faceIndex",new li(U,_)),e.push(B),l>ds&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function w_(o,e,i){const r=new gr(o,e,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function DT(o,e,i){const r=new Float32Array(fr),l=new ct(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function D_(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function U_(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===bh||m===Ah,g=m===_s||m===vs;if(p||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new C_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new C_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function NT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Uo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function LT(o,e,i,r){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,A=v.attributes.position;let R=0;if(M!==null){const I=M.array;R=M.version;for(let P=0,U=I.length;P<U;P+=3){const B=I[P+0],G=I[P+1],F=I[P+2];S.push(B,G,G,F,F,B)}}else if(A!==void 0){const I=A.array;R=A.version;for(let P=0,U=I.length/3-1;P<U;P+=3){const B=P+0,G=P+1,F=P+2;S.push(B,G,G,F,F,B)}}else return;const y=new(g0(S)?E0:M0)(S,1);y.version=R;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const S=u.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function OT(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,S*h,A),i.update(M,r,A))}function g(S,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,A);let y=0;for(let _=0;_<A;_++)y+=M[_];i.update(y,r,1)}function v(S,M,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,A);let _=0;for(let I=0;I<A;I++)_+=M[I]*R[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function PT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function zT(o,e,i){const r=new WeakMap,l=new $e;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let C=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),R===!0&&(U=2),y===!0&&(U=3);let B=d.attributes.position.count*U,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const F=new Float32Array(B*G*4*v),K=new _0(F,B,G,v);K.type=Ji,K.needsUpdate=!0;const w=U*4;for(let k=0;k<v;k++){const it=_[k],q=I[k],rt=P[k],et=B*G*4*k;for(let L=0;L<it.count;L++){const X=L*w;A===!0&&(l.fromBufferAttribute(it,L),F[et+X+0]=l.x,F[et+X+1]=l.y,F[et+X+2]=l.z,F[et+X+3]=0),R===!0&&(l.fromBufferAttribute(q,L),F[et+X+4]=l.x,F[et+X+5]=l.y,F[et+X+6]=l.z,F[et+X+7]=0),y===!0&&(l.fromBufferAttribute(rt,L),F[et+X+8]=l.x,F[et+X+9]=l.y,F[et+X+10]=l.z,F[et+X+11]=rt.itemSize===4?l.w:1)}}S={count:v,texture:K,size:new ze(B,G)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function BT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const N0=new Hn,N_=new w0(1,1),L0=new _0,O0=new hy,P0=new A0,L_=[],O_=[],P_=new Float32Array(16),z_=new Float32Array(9),B_=new Float32Array(4);function Ms(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=L_[l];if(u===void 0&&(u=new Float32Array(l),L_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function wc(o,e){let i=O_[e];i===void 0&&(i=new Int32Array(e),O_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function IT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function VT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;B_.set(r),o.uniformMatrix2fv(this.addr,!1,B_),hn(i,r)}}function kT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;z_.set(r),o.uniformMatrix3fv(this.addr,!1,z_),hn(i,r)}}function XT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;P_.set(r),o.uniformMatrix4fv(this.addr,!1,P_),hn(i,r)}}function WT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function ZT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function $T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(N_.compareFunction=m0,u=N_):u=N0,i.setTexture2D(e||u,l)}function tb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||O0,l)}function eb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||P0,l)}function nb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||L0,l)}function ib(o){switch(o){case 5126:return IT;case 35664:return FT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return XT;case 5124:case 35670:return WT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return nb}}function ab(o,e){o.uniform1fv(this.addr,e)}function rb(o,e){const i=Ms(e,this.size,2);o.uniform2fv(this.addr,i)}function sb(o,e){const i=Ms(e,this.size,3);o.uniform3fv(this.addr,i)}function ob(o,e){const i=Ms(e,this.size,4);o.uniform4fv(this.addr,i)}function lb(o,e){const i=Ms(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function cb(o,e){const i=Ms(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ub(o,e){const i=Ms(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function fb(o,e){o.uniform1iv(this.addr,e)}function hb(o,e){o.uniform2iv(this.addr,e)}function db(o,e){o.uniform3iv(this.addr,e)}function pb(o,e){o.uniform4iv(this.addr,e)}function mb(o,e){o.uniform1uiv(this.addr,e)}function gb(o,e){o.uniform2uiv(this.addr,e)}function _b(o,e){o.uniform3uiv(this.addr,e)}function vb(o,e){o.uniform4uiv(this.addr,e)}function xb(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||N0,u[h])}function Sb(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||O0,u[h])}function yb(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||P0,u[h])}function Mb(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),hn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||L0,u[h])}function Eb(o){switch(o){case 5126:return ab;case 35664:return rb;case 35665:return sb;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Mb}}class Tb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=ib(i.type)}}class bb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Eb(i.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function I_(o,e){o.seq.push(e),o.map[e.id]=e}function Rb(o,e,i){const r=o.name,l=r.length;for(ph.lastIndex=0;;){const u=ph.exec(r),h=ph.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){I_(i,p===void 0?new Tb(d,o,e):new bb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new Ab(d),I_(i,v)),i=v}}}class Mc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Rb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function F_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Cb=37297;let wb=0;function Db(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const H_=new ce;function Ub(o){Te._getMatrix(H_,Te.workingColorSpace,o);const e=`mat3( ${H_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case Pe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function G_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Db(o.getShaderSource(e),d)}else return u}function Nb(o,e){const i=Ub(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Lb(o,e){let i;switch(e){case FS:i="Linear";break;case HS:i="Reinhard";break;case GS:i="Cineon";break;case VS:i="ACESFilmic";break;case XS:i="AgX";break;case WS:i="Neutral";break;case kS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gc=new ct;function Ob(){Te.getLuminanceCoefficients(gc);const o=gc.x.toFixed(4),e=gc.y.toFixed(4),i=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function zb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Bb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Ao(o){return o!==""}function V_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(Ib,Hb)}const Fb=new Map;function Hb(o,e){let i=he[e];if(i===void 0){const r=Fb.get(e);if(r!==void 0)i=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(i)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(o){return o.replace(Gb,Vb)}function Vb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function W_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===vS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case r0:e="ENVMAP_BLENDING_MULTIPLY";break;case BS:e="ENVMAP_BLENDING_MIX";break;case IS:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function jb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=kb(i),p=Xb(i),g=Wb(i),v=qb(i),S=Yb(i),M=Pb(i),A=zb(u),R=l.createProgram();let y,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(y=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?he.tonemapping_pars_fragment:"",i.toneMapping!==za?Lb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Nb("linearToOutputTexel",i.outputColorSpace),Ob(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),h=rd(h),h=V_(h,i),h=k_(h,i),d=rd(d),d=V_(d,i),d=k_(d,i),h=X_(h),d=X_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=I+y+h,U=I+_+d,B=F_(l,l.VERTEX_SHADER,P),G=F_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,B),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(k){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(R)||"",q=l.getShaderInfoLog(B)||"",rt=l.getShaderInfoLog(G)||"",et=it.trim(),L=q.trim(),X=rt.trim();let H=!0,mt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,B,G);else{const D=G_(l,B,"vertex"),tt=G_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+et+`
`+D+`
`+tt)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(L===""||X==="")&&(mt=!1);mt&&(k.diagnostics={runnable:H,programLog:et,vertexShader:{log:L,prefix:y},fragmentShader:{log:X,prefix:_}})}l.deleteShader(B),l.deleteShader(G),K=new Mc(l,R),w=Bb(l,R)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Cb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=G,this}let Zb=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Qb(e),i.set(e,r)),r}}class Qb{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}}function Jb(o,e,i,r,l,u,h){const d=new x0,m=new Kb,p=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,k,it,q){const rt=it.fog,et=q.geometry,L=w.isMeshStandardMaterial?it.environment:null,X=(w.isMeshStandardMaterial?i:e).get(w.envMap||L),H=X&&X.mapping===Ac?X.image.height:null,mt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const D=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,tt=D!==void 0?D.length:0;let St=0;et.morphAttributes.position!==void 0&&(St=1),et.morphAttributes.normal!==void 0&&(St=2),et.morphAttributes.color!==void 0&&(St=3);let yt,wt,Bt,J;if(mt){const ye=Ri[mt];yt=ye.vertexShader,wt=ye.fragmentShader}else yt=w.vertexShader,wt=w.fragmentShader,m.update(w),Bt=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const gt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Xt=q.isInstancedMesh===!0,Yt=q.isBatchedMesh===!0,de=!!w.map,tn=!!w.matcap,z=!!X,De=!!w.aoMap,re=!!w.lightMap,ne=!!w.bumpMap,Pt=!!w.normalMap,Fe=!!w.displacementMap,Vt=!!w.emissiveMap,se=!!w.metalnessMap,Xe=!!w.roughnessMap,We=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,nt=w.iridescence>0,ft=w.sheen>0,_t=w.transmission>0,ut=We&&!!w.anisotropyMap,zt=N&&!!w.clearcoatMap,Rt=N&&!!w.clearcoatNormalMap,Wt=N&&!!w.clearcoatRoughnessMap,jt=nt&&!!w.iridescenceMap,Mt=nt&&!!w.iridescenceThicknessMap,Nt=ft&&!!w.sheenColorMap,Kt=ft&&!!w.sheenRoughnessMap,kt=!!w.specularMap,Dt=!!w.specularColorMap,oe=!!w.specularIntensityMap,W=_t&&!!w.transmissionMap,bt=_t&&!!w.thicknessMap,Ct=!!w.gradientMap,It=!!w.alphaMap,Et=w.alphaTest>0,xt=!!w.alphaHash,Gt=!!w.extensions;let ae=za;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Ae={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:wt,defines:w.defines,customVertexShaderID:Bt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Yt,batchingColor:Yt&&q._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&q.instanceColor!==null,instancingMorph:Xt&&q.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:tn,envMap:z,envMapMode:z&&X.mapping,envMapCubeUVHeight:H,aoMap:De,lightMap:re,bumpMap:ne,normalMap:Pt,displacementMap:S&&Fe,emissiveMap:Vt,normalMapObjectSpace:Pt&&w.normalMapType===KS,normalMapTangentSpace:Pt&&w.normalMapType===ZS,metalnessMap:se,roughnessMap:Xe,anisotropy:We,anisotropyMap:ut,clearcoat:N,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:E,iridescence:nt,iridescenceMap:jt,iridescenceThicknessMap:Mt,sheen:ft,sheenColorMap:Nt,sheenRoughnessMap:Kt,specularMap:kt,specularColorMap:Dt,specularIntensityMap:oe,transmission:_t,transmissionMap:W,thicknessMap:bt,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===ps&&w.alphaToCoverage===!1,alphaMap:It,alphaTest:Et,alphaHash:xt,combine:w.combine,mapUv:de&&R(w.map.channel),aoMapUv:De&&R(w.aoMap.channel),lightMapUv:re&&R(w.lightMap.channel),bumpMapUv:ne&&R(w.bumpMap.channel),normalMapUv:Pt&&R(w.normalMap.channel),displacementMapUv:Fe&&R(w.displacementMap.channel),emissiveMapUv:Vt&&R(w.emissiveMap.channel),metalnessMapUv:se&&R(w.metalnessMap.channel),roughnessMapUv:Xe&&R(w.roughnessMap.channel),anisotropyMapUv:ut&&R(w.anisotropyMap.channel),clearcoatMapUv:zt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&R(w.sheenRoughnessMap.channel),specularMapUv:kt&&R(w.specularMap.channel),specularColorMapUv:Dt&&R(w.specularColorMap.channel),specularIntensityMapUv:oe&&R(w.specularIntensityMap.channel),transmissionMapUv:W&&R(w.transmissionMap.channel),thicknessMapUv:bt&&R(w.thicknessMap.channel),alphaMapUv:It&&R(w.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Pt||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!et.attributes.uv&&(de||It),fog:!!rt,useFog:w.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:q.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:St,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Te.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Te.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qi,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||Yt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=p.has(1),Ae.vertexUv2s=p.has(2),Ae.vertexUv3s=p.has(3),p.clear(),Ae}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(I(C,w),P(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function I(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function P(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const C=A[w.type];let k;if(C){const it=Ri[C];k=by.clone(it.uniforms)}else k=w.uniforms;return k}function B(w,C){let k;for(let it=0,q=g.length;it<q;it++){const rt=g[it];if(rt.cacheKey===C){k=rt,++k.usedTimes;break}}return k===void 0&&(k=new jb(o,C,w,u),g.push(k)),k}function G(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:B,releaseProgram:G,releaseShaderCache:F,programs:g,dispose:K}}function $b(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function tA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function q_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Y_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,M,A,R,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:A,renderOrder:v.renderOrder,z:R,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=R,_.group=y),e++,_}function d(v,S,M,A,R,y){const _=h(v,S,M,A,R,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,S,M,A,R,y){const _=h(v,S,M,A,R,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||tA),r.length>1&&r.sort(S||q_),l.length>1&&l.sort(S||q_)}function g(){for(let v=e,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function eA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new Y_,o.set(r,[h])):l>=u.length?(h=new Y_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function nA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ct,color:new Re};break;case"SpotLight":i={position:new ct,direction:new ct,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function iA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let aA=0;function rA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sA(o){const e=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const l=new ct,u=new sn,h=new sn;function d(p){let g=0,v=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,R=0,y=0,_=0,I=0,P=0,U=0,B=0,G=0,F=0;p.sort(rA);for(let w=0,C=p.length;w<C;w++){const k=p[w],it=k.color,q=k.intensity,rt=k.distance,et=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=it.r*q,v+=it.g*q,S+=it.b*q;else if(k.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(k.sh.coefficients[L],q);F++}else if(k.isDirectionalLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,H=i.get(k);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=et,r.directionalShadowMatrix[M]=k.shadow.matrix,I++}r.directional[M]=L,M++}else if(k.isSpotLight){const L=e.get(k);L.position.setFromMatrixPosition(k.matrixWorld),L.color.copy(it).multiplyScalar(q),L.distance=rt,L.coneCos=Math.cos(k.angle),L.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),L.decay=k.decay,r.spot[R]=L;const X=k.shadow;if(k.map&&(r.spotLightMap[B]=k.map,B++,X.updateMatrices(k),k.castShadow&&G++),r.spotLightMatrix[R]=X.matrix,k.castShadow){const H=i.get(k);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,r.spotShadow[R]=H,r.spotShadowMap[R]=et,U++}R++}else if(k.isRectAreaLight){const L=e.get(k);L.color.copy(it).multiplyScalar(q),L.halfWidth.set(k.width*.5,0,0),L.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=L,y++}else if(k.isPointLight){const L=e.get(k);if(L.color.copy(k.color).multiplyScalar(k.intensity),L.distance=k.distance,L.decay=k.decay,k.castShadow){const X=k.shadow,H=i.get(k);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,r.pointShadow[A]=H,r.pointShadowMap[A]=et,r.pointShadowMatrix[A]=k.shadow.matrix,P++}r.point[A]=L,A++}else if(k.isHemisphereLight){const L=e.get(k);L.skyColor.copy(k.color).multiplyScalar(q),L.groundColor.copy(k.groundColor).multiplyScalar(q),r.hemi[_]=L,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==M||K.pointLength!==A||K.spotLength!==R||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==I||K.numPointShadows!==P||K.numSpotShadows!==U||K.numSpotMaps!==B||K.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+B-G,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=F,K.directionalLength=M,K.pointLength=A,K.spotLength=R,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=I,K.numPointShadows=P,K.numSpotShadows=U,K.numSpotMaps=B,K.numLightProbes=F,r.version=aA++)}function m(p,g){let v=0,S=0,M=0,A=0,R=0;const y=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const P=p[_];if(P.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(P.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(P.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function j_(o){const e=new sA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function oA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new j_(o),e.set(l,[d])):u>=h.length?(d=new j_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uA(o,e,i){let r=new R0;const l=new ze,u=new ze,h=new $e,d=new zy({depthPacking:jS}),m=new By,p={},g=i.maxTextureSize,v={[Ba]:Fn,[Fn]:Ba,[Qi]:Qi},S=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new ia;A.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $i(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let _=this.type;this.render=function(G,F,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),it=o.state;it.setBlending(Pa),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const q=_!==Ki&&this.type===Ki,rt=_===Ki&&this.type!==Ki;for(let et=0,L=G.length;et<L;et++){const X=G[et],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const mt=H.getFrameExtents();if(l.multiply(mt),u.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/mt.x),l.x=u.x*mt.x,H.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/mt.y),l.y=u.y*mt.y,H.mapSize.y=u.y)),H.map===null||q===!0||rt===!0){const tt=this.type!==Ki?{minFilter:xi,magFilter:xi}:{};H.map!==null&&H.map.dispose(),H.map=new gr(l.x,l.y,tt),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const D=H.getViewportCount();for(let tt=0;tt<D;tt++){const St=H.getViewport(tt);h.set(u.x*St.x,u.y*St.y,u.x*St.z,u.y*St.w),it.viewport(h),H.updateMatrices(X,tt),r=H.getFrustum(),U(F,K,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Ki&&I(H,K),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,k)};function I(G,F){const K=e.update(R);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new gr(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(F,null,K,S,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(F,null,K,M,R,null)}function P(G,F,K,w){let C=null;const k=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(k!==void 0)C=k;else if(C=K.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const it=C.uuid,q=F.uuid;let rt=p[it];rt===void 0&&(rt={},p[it]=rt);let et=rt[q];et===void 0&&(et=C.clone(),rt[q]=et,F.addEventListener("dispose",B)),C=et}if(C.visible=F.visible,C.wireframe=F.wireframe,w===Ki?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const it=o.properties.get(C);it.light=K}return C}function U(G,F,K,w,C){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===Ki)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const q=e.update(G),rt=G.material;if(Array.isArray(rt)){const et=q.groups;for(let L=0,X=et.length;L<X;L++){const H=et[L],mt=rt[H.materialIndex];if(mt&&mt.visible){const D=P(G,mt,w,C);G.onBeforeShadow(o,G,F,K,q,D,H),o.renderBufferDirect(K,null,q,D,G,H),G.onAfterShadow(o,G,F,K,q,D,H)}}}else if(rt.visible){const et=P(G,rt,w,C);G.onBeforeShadow(o,G,F,K,q,et,null),o.renderBufferDirect(K,null,q,et,G,null),G.onAfterShadow(o,G,F,K,q,et,null)}}const it=G.children;for(let q=0,rt=it.length;q<rt;q++)U(it[q],F,K,w,C)}function B(G){G.target.removeEventListener("dispose",B);for(const K in p){const w=p[K],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const fA={[vh]:xh,[Sh]:Eh,[yh]:Th,[gs]:Mh,[xh]:vh,[Eh]:Sh,[Th]:yh,[Mh]:gs};function hA(o,e){function i(){let W=!1;const bt=new $e;let Ct=null;const It=new $e(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!W&&(o.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){W=Et},setClear:function(Et,xt,Gt,ae,Ae){Ae===!0&&(Et*=ae,xt*=ae,Gt*=ae),bt.set(Et,xt,Gt,ae),It.equals(bt)===!1&&(o.clearColor(Et,xt,Gt,ae),It.copy(bt))},reset:function(){W=!1,Ct=null,It.set(-1,0,0,0)}}}function r(){let W=!1,bt=!1,Ct=null,It=null,Et=null;return{setReversed:function(xt){if(bt!==xt){const Gt=e.get("EXT_clip_control");xt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=xt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(xt){xt?gt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(xt){Ct!==xt&&!W&&(o.depthMask(xt),Ct=xt)},setFunc:function(xt){if(bt&&(xt=fA[xt]),It!==xt){switch(xt){case vh:o.depthFunc(o.NEVER);break;case xh:o.depthFunc(o.ALWAYS);break;case Sh:o.depthFunc(o.LESS);break;case gs:o.depthFunc(o.LEQUAL);break;case yh:o.depthFunc(o.EQUAL);break;case Mh:o.depthFunc(o.GEQUAL);break;case Eh:o.depthFunc(o.GREATER);break;case Th:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Et!==xt&&(bt&&(xt=1-xt),o.clearDepth(xt),Et=xt)},reset:function(){W=!1,Ct=null,It=null,Et=null,bt=!1}}}function l(){let W=!1,bt=null,Ct=null,It=null,Et=null,xt=null,Gt=null,ae=null,Ae=null;return{setTest:function(ye){W||(ye?gt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(ye){bt!==ye&&!W&&(o.stencilMask(ye),bt=ye)},setFunc:function(ye,ci,on){(Ct!==ye||It!==ci||Et!==on)&&(o.stencilFunc(ye,ci,on),Ct=ye,It=ci,Et=on)},setOp:function(ye,ci,on){(xt!==ye||Gt!==ci||ae!==on)&&(o.stencilOp(ye,ci,on),xt=ye,Gt=ci,ae=on)},setLocked:function(ye){W=ye},setClear:function(ye){Ae!==ye&&(o.clearStencil(ye),Ae=ye)},reset:function(){W=!1,bt=null,Ct=null,It=null,Et=null,xt=null,Gt=null,ae=null,Ae=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,M=[],A=null,R=!1,y=null,_=null,I=null,P=null,U=null,B=null,G=null,F=new Re(0,0,0),K=0,w=!1,C=null,k=null,it=null,q=null,rt=null;const et=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,X=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),L=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),L=X>=2);let mt=null,D={};const tt=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),yt=new $e().fromArray(tt),wt=new $e().fromArray(St);function Bt(W,bt,Ct,It){const Et=new Uint8Array(4),xt=o.createTexture();o.bindTexture(W,xt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Ct;Gt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return xt}const J={};J[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),gt(o.DEPTH_TEST),h.setFunc(gs),ne(!1),Pt($g),gt(o.CULL_FACE),De(Pa);function gt(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function At(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Xt(W,bt){return v[W]!==bt?(o.bindFramebuffer(W,bt),v[W]=bt,W===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=bt),W===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Yt(W,bt){let Ct=M,It=!1;if(W){Ct=S.get(bt),Ct===void 0&&(Ct=[],S.set(bt,Ct));const Et=W.textures;if(Ct.length!==Et.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Gt=Et.length;xt<Gt;xt++)Ct[xt]=o.COLOR_ATTACHMENT0+xt;Ct.length=Et.length,It=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,It=!0);It&&o.drawBuffers(Ct)}function de(W){return A!==W?(o.useProgram(W),A=W,!0):!1}const tn={[ur]:o.FUNC_ADD,[SS]:o.FUNC_SUBTRACT,[yS]:o.FUNC_REVERSE_SUBTRACT};tn[MS]=o.MIN,tn[ES]=o.MAX;const z={[TS]:o.ZERO,[bS]:o.ONE,[AS]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[NS]:o.SRC_ALPHA_SATURATE,[DS]:o.DST_COLOR,[CS]:o.DST_ALPHA,[RS]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[US]:o.ONE_MINUS_DST_COLOR,[wS]:o.ONE_MINUS_DST_ALPHA,[LS]:o.CONSTANT_COLOR,[OS]:o.ONE_MINUS_CONSTANT_COLOR,[PS]:o.CONSTANT_ALPHA,[zS]:o.ONE_MINUS_CONSTANT_ALPHA};function De(W,bt,Ct,It,Et,xt,Gt,ae,Ae,ye){if(W===Pa){R===!0&&(At(o.BLEND),R=!1);return}if(R===!1&&(gt(o.BLEND),R=!0),W!==xS){if(W!==y||ye!==w){if((_!==ur||U!==ur)&&(o.blendEquation(o.FUNC_ADD),_=ur,U=ur),ye)switch(W){case ps:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFunc(o.ONE,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case e_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ps:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case t_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,P=null,B=null,G=null,F.set(0,0,0),K=0,y=W,w=ye}return}Et=Et||bt,xt=xt||Ct,Gt=Gt||It,(bt!==_||Et!==U)&&(o.blendEquationSeparate(tn[bt],tn[Et]),_=bt,U=Et),(Ct!==I||It!==P||xt!==B||Gt!==G)&&(o.blendFuncSeparate(z[Ct],z[It],z[xt],z[Gt]),I=Ct,P=It,B=xt,G=Gt),(ae.equals(F)===!1||Ae!==K)&&(o.blendColor(ae.r,ae.g,ae.b,Ae),F.copy(ae),K=Ae),y=W,w=!1}function re(W,bt){W.side===Qi?At(o.CULL_FACE):gt(o.CULL_FACE);let Ct=W.side===Fn;bt&&(Ct=!Ct),ne(Ct),W.blending===ps&&W.transparent===!1?De(Pa):De(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Vt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function Pt(W){W!==gS?(gt(o.CULL_FACE),W!==k&&(W===$g?o.cullFace(o.BACK):W===_S?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),k=W}function Fe(W){W!==it&&(L&&o.lineWidth(W),it=W)}function Vt(W,bt,Ct){W?(gt(o.POLYGON_OFFSET_FILL),(q!==bt||rt!==Ct)&&(o.polygonOffset(bt,Ct),q=bt,rt=Ct)):At(o.POLYGON_OFFSET_FILL)}function se(W){W?gt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Xe(W){W===void 0&&(W=o.TEXTURE0+et-1),mt!==W&&(o.activeTexture(W),mt=W)}function We(W,bt,Ct){Ct===void 0&&(mt===null?Ct=o.TEXTURE0+et-1:Ct=mt);let It=D[Ct];It===void 0&&(It={type:void 0,texture:void 0},D[Ct]=It),(It.type!==W||It.texture!==bt)&&(mt!==Ct&&(o.activeTexture(Ct),mt=Ct),o.bindTexture(W,bt||J[W]),It.type=W,It.texture=bt)}function N(){const W=D[mt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(W){yt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),yt.copy(W))}function Kt(W){wt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function kt(W,bt){let Ct=p.get(bt);Ct===void 0&&(Ct=new WeakMap,p.set(bt,Ct));let It=Ct.get(W);It===void 0&&(It=o.getUniformBlockIndex(bt,W.name),Ct.set(W,It))}function Dt(W,bt){const It=p.get(bt).get(W);m.get(bt)!==It&&(o.uniformBlockBinding(bt,It,W.__bindingPointIndex),m.set(bt,It))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},mt=null,D={},v={},S=new WeakMap,M=[],A=null,R=!1,y=null,_=null,I=null,P=null,U=null,B=null,G=null,F=new Re(0,0,0),K=0,w=!1,C=null,k=null,it=null,q=null,rt=null,yt.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:gt,disable:At,bindFramebuffer:Xt,drawBuffers:Yt,useProgram:de,setBlending:De,setMaterial:re,setFlipSided:ne,setCullFace:Pt,setLineWidth:Fe,setPolygonOffset:Vt,setScissorTest:se,activeTexture:Xe,bindTexture:We,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:nt,texImage2D:jt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ft,texSubImage3D:_t,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Nt,viewport:Kt,reset:oe}}function dA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,g=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):bc("canvas")}function R(N,E,nt){let ft=1;const _t=We(N);if((_t.width>nt||_t.height>nt)&&(ft=nt/Math.max(_t.width,_t.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ut=Math.floor(ft*_t.width),zt=Math.floor(ft*_t.height);v===void 0&&(v=A(ut,zt));const Rt=E?A(ut,zt):v;return Rt.width=ut,Rt.height=zt,Rt.getContext("2d").drawImage(N,0,0,ut,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+zt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){o.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,E,nt,ft,_t=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ut=E;if(E===o.RED&&(nt===o.FLOAT&&(ut=o.R32F),nt===o.HALF_FLOAT&&(ut=o.R16F),nt===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.R8UI),nt===o.UNSIGNED_SHORT&&(ut=o.R16UI),nt===o.UNSIGNED_INT&&(ut=o.R32UI),nt===o.BYTE&&(ut=o.R8I),nt===o.SHORT&&(ut=o.R16I),nt===o.INT&&(ut=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(ut=o.RG32F),nt===o.HALF_FLOAT&&(ut=o.RG16F),nt===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),nt===o.UNSIGNED_INT&&(ut=o.RG32UI),nt===o.BYTE&&(ut=o.RG8I),nt===o.SHORT&&(ut=o.RG16I),nt===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),nt===o.UNSIGNED_INT&&(ut=o.RGB32UI),nt===o.BYTE&&(ut=o.RGB8I),nt===o.SHORT&&(ut=o.RGB16I),nt===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),nt===o.BYTE&&(ut=o.RGBA8I),nt===o.SHORT&&(ut=o.RGBA16I),nt===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const zt=_t?Ec:Te.getTransfer(ft);nt===o.FLOAT&&(ut=o.RGBA32F),nt===o.HALF_FLOAT&&(ut=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ut=zt===Pe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function U(N,E){let nt;return N?E===null||E===mr||E===Co?nt=o.DEPTH24_STENCIL8:E===Ji?nt=o.DEPTH32F_STENCIL8:E===Ro&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===mr||E===Co?nt=o.DEPTH_COMPONENT24:E===Ji?nt=o.DEPTH_COMPONENT32F:E===Ro&&(nt=o.DEPTH_COMPONENT16),nt}function B(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==xi&&N.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function G(N){const E=N.target;E.removeEventListener("dispose",G),K(E),E.isVideoTexture&&g.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),C(E)}function K(N){const E=r.get(N);if(E.__webglInit===void 0)return;const nt=N.source,ft=S.get(nt);if(ft){const _t=ft[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&w(N),Object.keys(ft).length===0&&S.delete(nt)}r.remove(N)}function w(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const nt=N.source,ft=S.get(nt);delete ft[E.__cacheKey],h.memory.textures--}function C(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let _t=0;_t<E.__webglFramebuffer[ft].length;_t++)o.deleteFramebuffer(E.__webglFramebuffer[ft][_t]);else o.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[ft]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=N.textures;for(let ft=0,_t=nt.length;ft<_t;ft++){const ut=r.get(nt[ft]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(nt[ft])}r.remove(N)}let k=0;function it(){k=0}function q(){const N=k;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function rt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function et(N,E){const nt=r.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&nt.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(nt,N,E);return}}else N.isExternalTexture&&(nt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function L(N,E){const nt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){J(nt,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function X(N,E){const nt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){J(nt,N,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function H(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){gt(nt,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const mt={[Rh]:o.REPEAT,[hr]:o.CLAMP_TO_EDGE,[Ch]:o.MIRRORED_REPEAT},D={[xi]:o.NEAREST,[qS]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[If]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},tt={[QS]:o.NEVER,[iy]:o.ALWAYS,[JS]:o.LESS,[m0]:o.LEQUAL,[$S]:o.EQUAL,[ny]:o.GEQUAL,[ty]:o.GREATER,[ey]:o.NOTEQUAL};function St(N,E){if(E.type===Ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===If||E.magFilter===Yl||E.magFilter===dr||E.minFilter===Ci||E.minFilter===If||E.minFilter===Yl||E.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,mt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,mt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,mt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,D[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xi||E.minFilter!==Yl&&E.minFilter!==dr||E.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(N,E){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",G));const ft=E.source;let _t=S.get(ft);_t===void 0&&(_t={},S.set(ft,_t));const ut=rt(E);if(ut!==N.__cacheKey){_t[ut]===void 0&&(_t[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),_t[ut].usedTimes++;const zt=_t[N.__cacheKey];zt!==void 0&&(_t[N.__cacheKey].usedTimes--,zt.usedTimes===0&&w(E)),N.__cacheKey=ut,N.__webglTexture=_t[ut].texture}return nt}function wt(N,E,nt){return Math.floor(Math.floor(N/nt)/E)}function Bt(N,E,nt,ft){const ut=N.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,nt,ft,E.data);else{ut.sort((Mt,Nt)=>Mt.start-Nt.start);let zt=0;for(let Mt=1;Mt<ut.length;Mt++){const Nt=ut[zt],Kt=ut[Mt],kt=Nt.start+Nt.count,Dt=wt(Kt.start,E.width,4),oe=wt(Nt.start,E.width,4);Kt.start<=kt+1&&Dt===oe&&wt(Kt.start+Kt.count-1,E.width,4)===Dt?Nt.count=Math.max(Nt.count,Kt.start+Kt.count-Nt.start):(++zt,ut[zt]=Kt)}ut.length=zt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Nt=ut.length;Mt<Nt;Mt++){const Kt=ut[Mt],kt=Math.floor(Kt.start/4),Dt=Math.ceil(Kt.count/4),oe=kt%E.width,W=Math.floor(kt/E.width),bt=Dt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,oe,W,bt,Ct,nt,ft,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function J(N,E,nt){let ft=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=o.TEXTURE_3D);const _t=yt(N,E),ut=E.source;i.bindTexture(ft,N.__webglTexture,o.TEXTURE0+nt);const zt=r.get(ut);if(ut.version!==zt.__version||_t===!0){i.activeTexture(o.TEXTURE0+nt);const Rt=Te.getPrimaries(Te.workingColorSpace),Wt=E.colorSpace===Oa?null:Te.getPrimaries(E.colorSpace),jt=E.colorSpace===Oa||Rt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=Xe(E,Mt);const Nt=u.convert(E.format,E.colorSpace),Kt=u.convert(E.type);let kt=P(E.internalFormat,Nt,Kt,E.colorSpace,E.isVideoTexture);St(ft,E);let Dt;const oe=E.mipmaps,W=E.isVideoTexture!==!0,bt=zt.__version===void 0||_t===!0,Ct=ut.dataReady,It=B(E,Mt);if(E.isDepthTexture)kt=U(E.format===Do,E.type),bt&&(W?i.texStorage2D(o.TEXTURE_2D,1,kt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Nt,Kt,null));else if(E.isDataTexture)if(oe.length>0){W&&bt&&i.texStorage2D(o.TEXTURE_2D,It,kt,oe[0].width,oe[0].height);for(let Et=0,xt=oe.length;Et<xt;Et++)Dt=oe[Et],W?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Nt,Kt,Dt.data):i.texImage2D(o.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Nt,Kt,Dt.data);E.generateMipmaps=!1}else W?(bt&&i.texStorage2D(o.TEXTURE_2D,It,kt,Mt.width,Mt.height),Ct&&Bt(E,Mt,Nt,Kt)):i.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Nt,Kt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,kt,oe[0].width,oe[0].height,Mt.depth);for(let Et=0,xt=oe.length;Et<xt;Et++)if(Dt=oe[Et],E.format!==vi)if(Nt!==null)if(W){if(Ct)if(E.layerUpdates.size>0){const Gt=T_(Dt.width,Dt.height,E.format,E.type);for(const ae of E.layerUpdates){const Ae=Dt.data.subarray(ae*Gt/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Gt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ae,Dt.width,Dt.height,1,Nt,Ae)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Nt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Dt.width,Dt.height,Mt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Nt,Kt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Dt.width,Dt.height,Mt.depth,0,Nt,Kt,Dt.data)}else{W&&bt&&i.texStorage2D(o.TEXTURE_2D,It,kt,oe[0].width,oe[0].height);for(let Et=0,xt=oe.length;Et<xt;Et++)Dt=oe[Et],E.format!==vi?Nt!==null?W?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Nt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Nt,Kt,Dt.data):i.texImage2D(o.TEXTURE_2D,Et,kt,Dt.width,Dt.height,0,Nt,Kt,Dt.data)}else if(E.isDataArrayTexture)if(W){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,kt,Mt.width,Mt.height,Mt.depth),Ct)if(E.layerUpdates.size>0){const Et=T_(Mt.width,Mt.height,E.format,E.type);for(const xt of E.layerUpdates){const Gt=Mt.data.subarray(xt*Et/Mt.data.BYTES_PER_ELEMENT,(xt+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Nt,Kt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,Kt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Nt,Kt,Mt.data);else if(E.isData3DTexture)W?(bt&&i.texStorage3D(o.TEXTURE_3D,It,kt,Mt.width,Mt.height,Mt.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,Kt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Nt,Kt,Mt.data);else if(E.isFramebufferTexture){if(bt)if(W)i.texStorage2D(o.TEXTURE_2D,It,kt,Mt.width,Mt.height);else{let Et=Mt.width,xt=Mt.height;for(let Gt=0;Gt<It;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,kt,Et,xt,0,Nt,Kt,null),Et>>=1,xt>>=1}}else if(oe.length>0){if(W&&bt){const Et=We(oe[0]);i.texStorage2D(o.TEXTURE_2D,It,kt,Et.width,Et.height)}for(let Et=0,xt=oe.length;Et<xt;Et++)Dt=oe[Et],W?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Nt,Kt,Dt):i.texImage2D(o.TEXTURE_2D,Et,kt,Nt,Kt,Dt);E.generateMipmaps=!1}else if(W){if(bt){const Et=We(Mt);i.texStorage2D(o.TEXTURE_2D,It,kt,Et.width,Et.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,Kt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,kt,Nt,Kt,Mt);y(E)&&_(ft),zt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function gt(N,E,nt){if(E.image.length!==6)return;const ft=yt(N,E),_t=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+nt);const ut=r.get(_t);if(_t.version!==ut.__version||ft===!0){i.activeTexture(o.TEXTURE0+nt);const zt=Te.getPrimaries(Te.workingColorSpace),Rt=E.colorSpace===Oa?null:Te.getPrimaries(E.colorSpace),Wt=E.colorSpace===Oa||zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let xt=0;xt<6;xt++)!jt&&!Mt?Nt[xt]=R(E.image[xt],!0,l.maxCubemapSize):Nt[xt]=Mt?E.image[xt].image:E.image[xt],Nt[xt]=Xe(E,Nt[xt]);const Kt=Nt[0],kt=u.convert(E.format,E.colorSpace),Dt=u.convert(E.type),oe=P(E.internalFormat,kt,Dt,E.colorSpace),W=E.isVideoTexture!==!0,bt=ut.__version===void 0||ft===!0,Ct=_t.dataReady;let It=B(E,Kt);St(o.TEXTURE_CUBE_MAP,E);let Et;if(jt){W&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,Kt.width,Kt.height);for(let xt=0;xt<6;xt++){Et=Nt[xt].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];E.format!==vi?kt!==null?W?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,ae.width,ae.height,kt,ae.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,ae.width,ae.height,kt,Dt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,oe,ae.width,ae.height,0,kt,Dt,ae.data)}}}else{if(Et=E.mipmaps,W&&bt){Et.length>0&&It++;const xt=We(Nt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Nt[xt].width,Nt[xt].height,kt,Dt,Nt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,Nt[xt].width,Nt[xt].height,0,kt,Dt,Nt[xt].data);for(let Gt=0;Gt<Et.length;Gt++){const Ae=Et[Gt].image[xt].image;W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,Ae.width,Ae.height,kt,Dt,Ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,oe,Ae.width,Ae.height,0,kt,Dt,Ae.data)}}else{W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,kt,Dt,Nt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,kt,Dt,Nt[xt]);for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];W?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,kt,Dt,ae.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,oe,kt,Dt,ae.image[xt])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ut.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function At(N,E,nt,ft,_t,ut){const zt=u.convert(nt.format,nt.colorSpace),Rt=u.convert(nt.type),Wt=P(nt.internalFormat,zt,Rt,nt.colorSpace),jt=r.get(E),Mt=r.get(nt);if(Mt.__renderTarget=E,!jt.__hasExternalTextures){const Nt=Math.max(1,E.width>>ut),Kt=Math.max(1,E.height>>ut);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,ut,Wt,Nt,Kt,E.depth,0,zt,Rt,null):i.texImage2D(_t,ut,Wt,Nt,Kt,0,zt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,_t,Mt.__webglTexture,0,Fe(E)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,_t,Mt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(N,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ft=E.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,ut=U(E.stencilBuffer,_t),zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Fe(E);Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,N)}else{const ft=E.textures;for(let _t=0;_t<ft.length;_t++){const ut=ft[_t],zt=u.convert(ut.format,ut.colorSpace),Rt=u.convert(ut.type),Wt=P(ut.internalFormat,zt,Rt,ut.colorSpace),jt=Fe(E);nt&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Wt,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Wt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Yt(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),et(E.depthTexture,0);const _t=ft.__webglTexture,ut=Fe(E);if(E.depthTexture.format===wo)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(E.depthTexture.format===Do)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function de(N){const E=r.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ft}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?Yt(E.__webglFramebuffer[0],N):Yt(E.__webglFramebuffer,N)}else if(nt){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=o.createRenderbuffer(),Xt(E.__webglDepthbuffer[ft],N,!1);else{const _t=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ut)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Xt(E.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(N,E,nt){const ft=r.get(N);E!==void 0&&At(ft.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&de(N)}function z(N){const E=N.texture,nt=r.get(N),ft=r.get(E);N.addEventListener("dispose",F);const _t=N.textures,ut=N.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=E.version,h.memory.textures++),ut){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<E.mipmaps.length;Wt++)nt.__webglFramebuffer[Rt][Wt]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Rt=0,Wt=_t.length;Rt<Wt;Rt++){const jt=r.get(_t[Rt]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Vt(N)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<_t.length;Rt++){const Wt=_t[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const jt=u.convert(Wt.format,Wt.colorSpace),Mt=u.convert(Wt.type),Nt=P(Wt.internalFormat,jt,Mt,Wt.colorSpace,N.isXRRenderTarget===!0),Kt=Fe(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Nt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),St(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)At(nt.__webglFramebuffer[Rt][Wt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else At(nt.__webglFramebuffer[Rt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Rt=0,Wt=_t.length;Rt<Wt;Rt++){const jt=_t[Rt],Mt=r.get(jt);let Nt=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Mt.__webglTexture),St(Nt,jt),At(nt.__webglFramebuffer,N,jt,o.COLOR_ATTACHMENT0+Rt,Nt,0),y(jt)&&_(Nt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ft.__webglTexture),St(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Wt=0;Wt<E.mipmaps.length;Wt++)At(nt.__webglFramebuffer[Wt],N,E,o.COLOR_ATTACHMENT0,Rt,Wt);else At(nt.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&_(Rt),i.unbindTexture()}N.depthBuffer&&de(N)}function De(N){const E=N.textures;for(let nt=0,ft=E.length;nt<ft;nt++){const _t=E[nt];if(y(_t)){const ut=I(N),zt=r.get(_t).__webglTexture;i.bindTexture(ut,zt),_(ut),i.unbindTexture()}}}const re=[],ne=[];function Pt(N){if(N.samples>0){if(Vt(N)===!1){const E=N.textures,nt=N.width,ft=N.height;let _t=o.COLOR_BUFFER_BIT;const ut=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(N),Rt=E.length>1;if(Rt)for(let jt=0;jt<E.length;jt++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let jt=0;jt<E.length;jt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const Mt=r.get(E[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,nt,ft,0,0,nt,ft,_t,o.NEAREST),m===!0&&(re.length=0,ne.length=0,re.push(o.COLOR_ATTACHMENT0+jt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(re.push(ut),ne.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let jt=0;jt<E.length;jt++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[jt]);const Mt=r.get(E[jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Fe(N){return Math.min(l.maxSamples,N.samples)}function Vt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Xe(N,E){const nt=N.colorSpace,ft=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==xs&&nt!==Oa&&(Te.getTransfer(nt)===Pe?(ft!==vi||_t!==ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),E}function We(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=it,this.setTexture2D=et,this.setTexture2DArray=L,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=tn,this.setupRenderTarget=z,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function pA(o,e){function i(r,l=Oa){let u;const h=Te.getTransfer(l);if(r===ea)return o.UNSIGNED_BYTE;if(r===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(r===c0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===u0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===o0)return o.BYTE;if(r===l0)return o.SHORT;if(r===Ro)return o.UNSIGNED_SHORT;if(r===ld)return o.INT;if(r===mr)return o.UNSIGNED_INT;if(r===Ji)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===f0)return o.ALPHA;if(r===h0)return o.RGB;if(r===vi)return o.RGBA;if(r===wo)return o.DEPTH_COMPONENT;if(r===Do)return o.DEPTH_STENCIL;if(r===d0)return o.RED;if(r===fd)return o.RED_INTEGER;if(r===p0)return o.RG;if(r===hd)return o.RG_INTEGER;if(r===dd)return o.RGBA_INTEGER;if(r===vc||r===xc||r===Sc||r===yc)if(h===Pe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wh||r===Dh||r===Uh||r===Nh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===wh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Oh||r===Ph)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Lh||r===Oh)return h===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ph)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zh||r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return h===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kh||r===Qh||r===Jh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Kh)return h===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===td||r===ed||r===nd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===$h)return u.COMPRESSED_RED_RGTC1_EXT;if(r===td)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new D0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $i(new Cc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends ys{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,S=null,M=null,A=null;const R=typeof XRWebGLBinding<"u",y=new _A,_={},I=i.getContextAttributes();let P=null,U=null;const B=[],G=[],F=new ze;let K=null;const w=new oi;w.viewport=new $e;const C=new oi;C.viewport=new $e;const k=[w,C],it=new Fy;let q=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=B[J];return gt===void 0&&(gt=new oh,B[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=B[J];return gt===void 0&&(gt=new oh,B[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=B[J];return gt===void 0&&(gt=new oh,B[J]=gt),gt.getHandSpace()};function et(J){const gt=G.indexOf(J.inputSource);if(gt===-1)return;const At=B[gt];At!==void 0&&(At.update(J.inputSource,J.frame,p||h),At.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",X);for(let J=0;J<B.length;J++){const gt=G[J];gt!==null&&(G[J]=null,B[J].disconnect(gt))}q=null,rt=null,y.reset();for(const J in _)delete _[J];e.setRenderTarget(P),M=null,S=null,v=null,l=null,U=null,Bt.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",L),l.addEventListener("inputsourceschange",X),I.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Xt=null,Yt=null;I.depth&&(Yt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=I.stencil?Do:wo,Xt=I.stencil?Co:mr);const de={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:u};v=this.getBinding(),S=v.createProjectionLayer(de),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new gr(S.textureWidth,S.textureHeight,{format:vi,type:ea,depthTexture:new w0(S.textureWidth,S.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const At={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new gr(M.framebufferWidth,M.framebufferHeight,{format:vi,type:ea,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(J){for(let gt=0;gt<J.removed.length;gt++){const At=J.removed[gt],Xt=G.indexOf(At);Xt>=0&&(G[Xt]=null,B[Xt].disconnect(At))}for(let gt=0;gt<J.added.length;gt++){const At=J.added[gt];let Xt=G.indexOf(At);if(Xt===-1){for(let de=0;de<B.length;de++)if(de>=G.length){G.push(At),Xt=de;break}else if(G[de]===null){G[de]=At,Xt=de;break}if(Xt===-1)break}const Yt=B[Xt];Yt&&Yt.connect(At)}}const H=new ct,mt=new ct;function D(J,gt,At){H.setFromMatrixPosition(gt.matrixWorld),mt.setFromMatrixPosition(At.matrixWorld);const Xt=H.distanceTo(mt),Yt=gt.projectionMatrix.elements,de=At.projectionMatrix.elements,tn=Yt[14]/(Yt[10]-1),z=Yt[14]/(Yt[10]+1),De=(Yt[9]+1)/Yt[5],re=(Yt[9]-1)/Yt[5],ne=(Yt[8]-1)/Yt[0],Pt=(de[8]+1)/de[0],Fe=tn*ne,Vt=tn*Pt,se=Xt/(-ne+Pt),Xe=se*-ne;if(gt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xe),J.translateZ(se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Yt[10]===-1)J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const We=tn+se,N=z+se,E=Fe-Xe,nt=Vt+(Xt-Xe),ft=De*z/N*We,_t=re*z/N*We;J.projectionMatrix.makePerspective(E,nt,ft,_t,We,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function tt(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let gt=J.near,At=J.far;y.texture!==null&&(y.depthNear>0&&(gt=y.depthNear),y.depthFar>0&&(At=y.depthFar)),it.near=C.near=w.near=gt,it.far=C.far=w.far=At,(q!==it.near||rt!==it.far)&&(l.updateRenderState({depthNear:it.near,depthFar:it.far}),q=it.near,rt=it.far),it.layers.mask=J.layers.mask|6,w.layers.mask=it.layers.mask&3,C.layers.mask=it.layers.mask&5;const Xt=J.parent,Yt=it.cameras;tt(it,Xt);for(let de=0;de<Yt.length;de++)tt(Yt[de],Xt);Yt.length===2?D(it,w,C):it.projectionMatrix.copy(w.projectionMatrix),St(J,it,Xt)};function St(J,gt,At){At===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=id*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(J){return _[J]};let yt=null;function wt(J,gt){if(g=gt.getViewerPose(p||h),A=gt,g!==null){const At=g.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Xt=!1;At.length!==it.cameras.length&&(it.cameras.length=0,Xt=!0);for(let z=0;z<At.length;z++){const De=At[z];let re=null;if(M!==null)re=M.getViewport(De);else{const Pt=v.getViewSubImage(S,De);re=Pt.viewport,z===0&&(e.setRenderTargetTextures(U,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(U))}let ne=k[z];ne===void 0&&(ne=new oi,ne.layers.enable(z),ne.viewport=new $e,k[z]=ne),ne.matrix.fromArray(De.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(De.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(re.x,re.y,re.width,re.height),z===0&&(it.matrix.copy(ne.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Xt===!0&&it.cameras.push(ne)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const z=v.getDepthInformation(At[0]);z&&z.isValid&&z.texture&&y.init(z,l.renderState)}if(Yt&&Yt.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let z=0;z<At.length;z++){const De=At[z].camera;if(De){let re=_[De];re||(re=new D0,_[De]=re);const ne=v.getCameraImage(De);re.sourceTexture=ne}}}}for(let At=0;At<B.length;At++){const Xt=G[At],Yt=B[At];Xt!==null&&Yt!==void 0&&Yt.update(Xt,gt,p||h)}yt&&yt(J,gt),gt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:gt}),A=null}const Bt=new U0;Bt.setAnimationLoop(wt),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}}const or=new na,xA=new sn;function SA(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,T0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,I,P,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),A(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,I,P):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),P=I.envMap,U=I.envMapRotation;P&&(y.envMap.value=P,or.copy(U),or.x*=-1,or.y*=-1,or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),y.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(or)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,I,P){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=P*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yA(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,P){const U=P.program;r.uniformBlockBinding(I,U)}function p(I,P){let U=l[I.id];U===void 0&&(A(I),U=g(I),l[I.id]=U,I.addEventListener("dispose",y));const B=P.program;r.updateUBOMapping(I,B);const G=e.render.frame;u[I.id]!==G&&(S(I),u[I.id]=G)}function g(I){const P=v();I.__bindingPointIndex=P;const U=o.createBuffer(),B=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,B,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const P=l[I.id],U=I.uniforms,B=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,F=U.length;G<F;G++){const K=Array.isArray(U[G])?U[G]:[U[G]];for(let w=0,C=K.length;w<C;w++){const k=K[w];if(M(k,G,w,B)===!0){const it=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let rt=0;for(let et=0;et<q.length;et++){const L=q[et],X=R(L);typeof L=="number"||typeof L=="boolean"?(k.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,it+rt,k.__data)):L.isMatrix3?(k.__data[0]=L.elements[0],k.__data[1]=L.elements[1],k.__data[2]=L.elements[2],k.__data[3]=0,k.__data[4]=L.elements[3],k.__data[5]=L.elements[4],k.__data[6]=L.elements[5],k.__data[7]=0,k.__data[8]=L.elements[6],k.__data[9]=L.elements[7],k.__data[10]=L.elements[8],k.__data[11]=0):(L.toArray(k.__data,rt),rt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,P,U,B){const G=I.value,F=P+"_"+U;if(B[F]===void 0)return typeof G=="number"||typeof G=="boolean"?B[F]=G:B[F]=G.clone(),!0;{const K=B[F];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return B[F]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function A(I){const P=I.uniforms;let U=0;const B=16;for(let F=0,K=P.length;F<K;F++){const w=Array.isArray(P[F])?P[F]:[P[F]];for(let C=0,k=w.length;C<k;C++){const it=w[C],q=Array.isArray(it.value)?it.value:[it.value];for(let rt=0,et=q.length;rt<et;rt++){const L=q[rt],X=R(L),H=U%B,mt=H%X.boundary,D=H+mt;U+=mt,D!==0&&B-D<X.storage&&(U+=B-D),it.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=U,U+=X.storage}}}const G=U%B;return G>0&&(U+=B-G),I.__size=U,I.__cache={},this}function R(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function y(I){const P=I.target;P.removeEventListener("dispose",y);const U=h.indexOf(P.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class MA{constructor(e={}){const{canvas:i=ry(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const I=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=si;let G=0,F=0,K=null,w=-1,C=null;const k=new $e,it=new $e;let q=null;const rt=new Re(0);let et=0,L=i.width,X=i.height,H=1,mt=null,D=null;const tt=new $e(0,0,L,X),St=new $e(0,0,L,X);let yt=!1;const wt=new R0;let Bt=!1,J=!1;const gt=new sn,At=new ct,Xt=new $e,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function tn(){return K===null?H:1}let z=r;function De(b,Y){return i.getContext(b,Y)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${od}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Et,!1),z===null){const Y="webgl2";if(z=De(Y,b),z===null)throw De(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let re,ne,Pt,Fe,Vt,se,Xe,We,N,E,nt,ft,_t,ut,zt,Rt,Wt,jt,Mt,Nt,Kt,kt,Dt,oe;function W(){re=new NT(z),re.init(),kt=new pA(z,re),ne=new bT(z,re,e,kt),Pt=new hA(z,re),ne.reversedDepthBuffer&&S&&Pt.buffers.depth.setReversed(!0),Fe=new PT(z),Vt=new $b,se=new dA(z,re,Pt,Vt,ne,kt,Fe),Xe=new RT(U),We=new UT(U),N=new Gy(z),Dt=new ET(z,N),E=new LT(z,N,Fe,Dt),nt=new BT(z,E,N,Fe),Mt=new zT(z,ne,se),Rt=new AT(Vt),ft=new Jb(U,Xe,We,re,ne,Dt,Rt),_t=new SA(U,Vt),ut=new eA,zt=new oA(re),jt=new MT(U,Xe,We,Pt,nt,M,m),Wt=new uA(U,nt,ne),oe=new yA(z,Fe,ne,Pt),Nt=new TT(z,re,Fe),Kt=new OT(z,re,Fe),Fe.programs=ft.programs,U.capabilities=ne,U.extensions=re,U.properties=Vt,U.renderLists=ut,U.shadowMap=Wt,U.state=Pt,U.info=Fe}W();const bt=new vA(U,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(L,X,!1))},this.getSize=function(b){return b.set(L,X)},this.setSize=function(b,Y,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=b,X=Y,i.width=Math.floor(b*H),i.height=Math.floor(Y*H),ot===!0&&(i.style.width=b+"px",i.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(L*H,X*H).floor()},this.setDrawingBufferSize=function(b,Y,ot){L=b,X=Y,H=ot,i.width=Math.floor(b*ot),i.height=Math.floor(Y*ot),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,Y,ot,lt){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,Y,ot,lt),Pt.viewport(k.copy(tt).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,Y,ot,lt){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,Y,ot,lt),Pt.scissor(it.copy(St).multiplyScalar(H).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(b){Pt.setScissorTest(yt=b)},this.setOpaqueSort=function(b){mt=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,ot=!0){let lt=0;if(b){let Z=!1;if(K!==null){const Tt=K.texture.format;Z=Tt===dd||Tt===hd||Tt===fd}if(Z){const Tt=K.texture.type,Ut=Tt===ea||Tt===mr||Tt===Ro||Tt===Co||Tt===cd||Tt===ud,Ft=jt.getClearColor(),Lt=jt.getClearAlpha(),Jt=Ft.r,te=Ft.g,qt=Ft.b;Ut?(A[0]=Jt,A[1]=te,A[2]=qt,A[3]=Lt,z.clearBufferuiv(z.COLOR,0,A)):(R[0]=Jt,R[1]=te,R[2]=qt,R[3]=Lt,z.clearBufferiv(z.COLOR,0,R))}else lt|=z.COLOR_BUFFER_BIT}Y&&(lt|=z.DEPTH_BUFFER_BIT),ot&&(lt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),jt.dispose(),ut.dispose(),zt.dispose(),Vt.dispose(),Xe.dispose(),We.dispose(),nt.dispose(),Dt.dispose(),oe.dispose(),ft.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",on),bt.removeEventListener("sessionend",ln),Ye.stop()};function Ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const b=Fe.autoReset,Y=Wt.enabled,ot=Wt.autoUpdate,lt=Wt.needsUpdate,Z=Wt.type;W(),Fe.autoReset=b,Wt.enabled=Y,Wt.autoUpdate=ot,Wt.needsUpdate=lt,Wt.type=Z}function Et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function xt(b){const Y=b.target;Y.removeEventListener("dispose",xt),Gt(Y)}function Gt(b){ae(b),Vt.remove(b)}function ae(b){const Y=Vt.get(b).programs;Y!==void 0&&(Y.forEach(function(ot){ft.releaseProgram(ot)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,ot,lt,Z,Tt){Y===null&&(Y=Yt);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Ft=aa(b,Y,ot,lt,Z);Pt.setMaterial(lt,Ut);let Lt=ot.index,Jt=1;if(lt.wireframe===!0){if(Lt=E.getWireframeAttribute(ot),Lt===void 0)return;Jt=2}const te=ot.drawRange,qt=ot.attributes.position;let ue=te.start*Jt,Me=(te.start+te.count)*Jt;Tt!==null&&(ue=Math.max(ue,Tt.start*Jt),Me=Math.min(Me,(Tt.start+Tt.count)*Jt)),Lt!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Lt.count)):qt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,qt.count));const Ve=Me-ue;if(Ve<0||Ve===1/0)return;Dt.setup(Z,lt,Ft,ot,Lt);let Ue,fe=Nt;if(Lt!==null&&(Ue=N.get(Lt),fe=Kt,fe.setIndex(Ue)),Z.isMesh)lt.wireframe===!0?(Pt.setLineWidth(lt.wireframeLinewidth*tn()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(Z.isLine){let Qt=lt.linewidth;Qt===void 0&&(Qt=1),Pt.setLineWidth(Qt*tn()),Z.isLineSegments?fe.setMode(z.LINES):Z.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else Z.isPoints?fe.setMode(z.POINTS):Z.isSprite&&fe.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Uo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,Ge=Z._multiDrawCounts,ge=Z._multiDrawCount,En=Lt?N.get(Lt).bytesPerElement:1,ui=Vt.get(lt).currentProgram.getUniforms();for(let wn=0;wn<ge;wn++)ui.setValue(z,"_gl_DrawID",wn),fe.render(Qt[wn]/En,Ge[wn])}else if(Z.isInstancedMesh)fe.renderInstances(ue,Ve,Z.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ge=Math.min(ot.instanceCount,Qt);fe.renderInstances(ue,Ve,Ge)}else fe.render(ue,Ve)};function Ae(b,Y,ot){b.transparent===!0&&b.side===Qi&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,yi(b,Y,ot),b.side=Ba,b.needsUpdate=!0,yi(b,Y,ot),b.side=Qi):yi(b,Y,ot)}this.compile=function(b,Y,ot=null){ot===null&&(ot=b),_=zt.get(ot),_.init(Y),P.push(_),ot.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),b!==ot&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const lt=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Ft=Tt[Ut];Ae(Ft,ot,Z),lt.add(Ft)}else Ae(Tt,ot,Z),lt.add(Tt)}),_=P.pop(),lt},this.compileAsync=function(b,Y,ot=null){const lt=this.compile(b,Y,ot);return new Promise(Z=>{function Tt(){if(lt.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){Z(b);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ye=null;function ci(b){ye&&ye(b)}function on(){Ye.stop()}function ln(){Ye.start()}const Ye=new U0;Ye.setAnimationLoop(ci),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(b){ye=b,bt.setAnimationLoop(b),b===null?Ye.stop():Ye.start()},bt.addEventListener("sessionstart",on),bt.addEventListener("sessionend",ln),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Y),Y=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,Y,K),_=zt.get(b,P.length),_.init(Y),P.push(_),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),wt.setFromProjectionMatrix(gt,wi,Y.reversedDepth),J=this.localClippingEnabled,Bt=Rt.init(this.clippingPlanes,J),y=ut.get(b,I.length),y.init(),I.push(y),bt.enabled===!0&&bt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Si(Tt,Y,-1/0,U.sortObjects)}Si(b,Y,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(mt,D),de=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,de&&jt.addToRenderList(y,b),this.info.render.frame++,Bt===!0&&Rt.beginShadows();const ot=_.state.shadowsArray;Wt.render(ot,b,Y),Bt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Z=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(Z.length>0)for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){const Lt=Tt[Ut];Io(lt,Z,b,Lt)}de&&jt.render(b);for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){const Lt=Tt[Ut];_r(y,b,Lt,Lt.viewport)}}else Z.length>0&&Io(lt,Z,b,Y),de&&jt.render(b),_r(y,b,Y);K!==null&&F===0&&(se.updateMultisampleRenderTarget(K),se.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(U,b,Y),Dt.resetDefaultState(),w=-1,C=null,P.pop(),P.length>0?(_=P[P.length-1],Bt===!0&&Rt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Si(b,Y,ot,lt){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)ot=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||wt.intersectsSprite(b)){lt&&Xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const Ut=nt.update(b),Ft=b.material;Ft.visible&&y.push(b,Ut,Ft,ot,Xt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||wt.intersectsObject(b))){const Ut=nt.update(b),Ft=b.material;if(lt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xt.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Xt.copy(Ut.boundingSphere.center)),Xt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(Ft)){const Lt=Ut.groups;for(let Jt=0,te=Lt.length;Jt<te;Jt++){const qt=Lt[Jt],ue=Ft[qt.materialIndex];ue&&ue.visible&&y.push(b,Ut,ue,ot,Xt.z,qt)}}else Ft.visible&&y.push(b,Ut,Ft,ot,Xt.z,null)}}const Tt=b.children;for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++)Si(Tt[Ut],Y,ot,lt)}function _r(b,Y,ot,lt){const Z=b.opaque,Tt=b.transmissive,Ut=b.transparent;_.setupLightsView(ot),Bt===!0&&Rt.setGlobalState(U.clippingPlanes,ot),lt&&Pt.viewport(k.copy(lt)),Z.length>0&&vr(Z,Y,ot),Tt.length>0&&vr(Tt,Y,ot),Ut.length>0&&vr(Ut,Y,ot),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Io(b,Y,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new gr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?No:ea,minFilter:dr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[lt.id],Ut=lt.viewport||k;Tt.setSize(Ut.z*U.transmissionResolutionScale,Ut.w*U.transmissionResolutionScale);const Ft=U.getRenderTarget(),Lt=U.getActiveCubeFace(),Jt=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(rt),et=U.getClearAlpha(),et<1&&U.setClearColor(16777215,.5),U.clear(),de&&jt.render(ot);const te=U.toneMapping;U.toneMapping=za;const qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),Bt===!0&&Rt.setGlobalState(U.clippingPlanes,lt),vr(b,ot,lt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Me=0,Ve=Y.length;Me<Ve;Me++){const Ue=Y[Me],fe=Ue.object,Qt=Ue.geometry,Ge=Ue.material,ge=Ue.group;if(Ge.side===Qi&&fe.layers.test(lt.layers)){const En=Ge.side;Ge.side=Fn,Ge.needsUpdate=!0,Es(fe,ot,lt,Qt,Ge,ge),Ge.side=En,Ge.needsUpdate=!0,ue=!0}}ue===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Ft,Lt,Jt),U.setClearColor(rt,et),qt!==void 0&&(lt.viewport=qt),U.toneMapping=te}function vr(b,Y,ot){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Tt=b.length;Z<Tt;Z++){const Ut=b[Z],Ft=Ut.object,Lt=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&lt!==null&&(te=lt),Ft.layers.test(ot.layers)&&Es(Ft,Y,ot,Lt,te,Jt)}}function Es(b,Y,ot,lt,Z,Tt){b.onBeforeRender(U,Y,ot,lt,Z,Tt),b.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(U,Y,ot,lt,b,Tt),Z.transparent===!0&&Z.side===Qi&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,U.renderBufferDirect(ot,Y,lt,Z,b,Tt),Z.side=Ba,Z.needsUpdate=!0,U.renderBufferDirect(ot,Y,lt,Z,b,Tt),Z.side=Qi):U.renderBufferDirect(ot,Y,lt,Z,b,Tt),b.onAfterRender(U,Y,ot,lt,Z,Tt)}function yi(b,Y,ot){Y.isScene!==!0&&(Y=Yt);const lt=Vt.get(b),Z=_.state.lights,Tt=_.state.shadowsArray,Ut=Z.state.version,Ft=ft.getParameters(b,Z.state,Tt,Y,ot),Lt=ft.getProgramCacheKey(Ft);let Jt=lt.programs;lt.environment=b.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(b.isMeshStandardMaterial?We:Xe).get(b.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",xt),Jt=new Map,lt.programs=Jt);let te=Jt.get(Lt);if(te!==void 0){if(lt.currentProgram===te&&lt.lightsStateVersion===Ut)return Di(b,Ft),te}else Ft.uniforms=ft.getUniforms(b),b.onBeforeCompile(Ft,U),te=ft.acquireProgram(Ft,Lt),Jt.set(Lt,te),lt.uniforms=Ft.uniforms;const qt=lt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),Di(b,Ft),lt.needsLights=ra(b),lt.lightsStateVersion=Ut,lt.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),lt.currentProgram=te,lt.uniformsList=null,te}function xr(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Mc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Di(b,Y){const ot=Vt.get(b);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function aa(b,Y,ot,lt,Z){Y.isScene!==!0&&(Y=Yt),se.resetTextureUnits();const Tt=Y.fog,Ut=lt.isMeshStandardMaterial?Y.environment:null,Ft=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:xs,Lt=(lt.isMeshStandardMaterial?We:Xe).get(lt.envMap||Ut),Jt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!ot.morphAttributes.position,ue=!!ot.morphAttributes.normal,Me=!!ot.morphAttributes.color;let Ve=za;lt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ve=U.toneMapping);const Ue=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,fe=Ue!==void 0?Ue.length:0,Qt=Vt.get(lt),Ge=_.state.lights;if(Bt===!0&&(J===!0||b!==C)){const je=b===C&&lt.id===w;Rt.setState(lt,b,je)}let ge=!1;lt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ge.state.version||Qt.outputColorSpace!==Ft||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Lt||lt.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==qt||Qt.morphNormals!==ue||Qt.morphColors!==Me||Qt.toneMapping!==Ve||Qt.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,Qt.__version=lt.version);let En=Qt.currentProgram;ge===!0&&(En=yi(lt,Y,Z));let ui=!1,wn=!1,dn=!1;const Be=En.getUniforms(),Dn=Qt.uniforms;if(Pt.useProgram(En.program)&&(ui=!0,wn=!0,dn=!0),lt.id!==w&&(w=lt.id,wn=!0),ui||C!==b){Pt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(z,"projectionMatrix",b.projectionMatrix),Be.setValue(z,"viewMatrix",b.matrixWorldInverse);const xn=Be.map.cameraPosition;xn!==void 0&&xn.setValue(z,At.setFromMatrixPosition(b.matrixWorld)),ne.logarithmicDepthBuffer&&Be.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Be.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,wn=!0,dn=!0)}if(Z.isSkinnedMesh){Be.setOptional(z,Z,"bindMatrix"),Be.setOptional(z,Z,"bindMatrixInverse");const je=Z.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Be.setValue(z,"boneTexture",je.boneTexture,se))}Z.isBatchedMesh&&(Be.setOptional(z,Z,"batchingTexture"),Be.setValue(z,"batchingTexture",Z._matricesTexture,se),Be.setOptional(z,Z,"batchingIdTexture"),Be.setValue(z,"batchingIdTexture",Z._indirectTexture,se),Be.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Be.setValue(z,"batchingColorTexture",Z._colorsTexture,se));const Tn=ot.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Mt.update(Z,ot,En),(wn||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Be.setValue(z,"receiveShadow",Z.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Dn.envMap.value=Lt,Dn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(Dn.envMapIntensity.value=Y.environmentIntensity),wn&&(Be.setValue(z,"toneMappingExposure",U.toneMappingExposure),Qt.needsLights&&Fa(Dn,dn),Tt&&lt.fog===!0&&_t.refreshFogUniforms(Dn,Tt),_t.refreshMaterialUniforms(Dn,lt,H,X,_.state.transmissionRenderTarget[b.id]),Mc.upload(z,xr(Qt),Dn,se)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Mc.upload(z,xr(Qt),Dn,se),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Be.setValue(z,"center",Z.center),Be.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Be.setValue(z,"normalMatrix",Z.normalMatrix),Be.setValue(z,"modelMatrix",Z.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const je=lt.uniformsGroups;for(let xn=0,Sr=je.length;xn<Sr;xn++){const Ln=je[xn];oe.update(Ln,En),oe.bind(Ln,En)}}return En}function Fa(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function ra(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,Y,ot){const lt=Vt.get(b);lt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Vt.get(b.texture).__webglTexture=Y,Vt.get(b.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const ot=Vt.get(b);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const en=z.createFramebuffer();this.setRenderTarget=function(b,Y=0,ot=0){K=b,G=Y,F=ot;let lt=!0,Z=null,Tt=!1,Ut=!1;if(b){const Lt=Vt.get(b);if(Lt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(z.FRAMEBUFFER,null),lt=!1;else if(Lt.__webglFramebuffer===void 0)se.setupRenderTarget(b);else if(Lt.__hasExternalTextures)se.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qt=b.depthTexture;if(Lt.__boundDepthTexture!==qt){if(qt!==null&&Vt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(te[Y])?Z=te[Y][ot]:Z=te[Y],Tt=!0):b.samples>0&&se.useMultisampledRTT(b)===!1?Z=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(te)?Z=te[ot]:Z=te,k.copy(b.viewport),it.copy(b.scissor),q=b.scissorTest}else k.copy(tt).multiplyScalar(H).floor(),it.copy(St).multiplyScalar(H).floor(),q=yt;if(ot!==0&&(Z=en),Pt.bindFramebuffer(z.FRAMEBUFFER,Z)&&lt&&Pt.drawBuffers(b,Z),Pt.viewport(k),Pt.scissor(it),Pt.setScissorTest(q),Tt){const Lt=Vt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,ot)}else if(Ut){const Lt=Y;for(let Jt=0;Jt<b.textures.length;Jt++){const te=Vt.get(b.textures[Jt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Jt,te.__webglTexture,ot,Lt)}}else if(b!==null&&ot!==0){const Lt=Vt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,ot)}w=-1},this.readRenderTargetPixels=function(b,Y,ot,lt,Z,Tt,Ut,Ft=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){Pt.bindFramebuffer(z.FRAMEBUFFER,Lt);try{const Jt=b.textures[Ft],te=Jt.format,qt=Jt.type;if(!ne.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-lt&&ot>=0&&ot<=b.height-Z&&(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(Y,ot,lt,Z,kt.convert(te),kt.convert(qt),Tt))}finally{const Jt=K!==null?Vt.get(K).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,Y,ot,lt,Z,Tt,Ut,Ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt)if(Y>=0&&Y<=b.width-lt&&ot>=0&&ot<=b.height-Z){Pt.bindFramebuffer(z.FRAMEBUFFER,Lt);const Jt=b.textures[Ft],te=Jt.format,qt=Jt.type;if(!ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft),z.readPixels(Y,ot,lt,Z,kt.convert(te),kt.convert(qt),0);const Me=K!==null?Vt.get(K).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,Me);const Ve=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await sy(z,Ve,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ue),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(ue),z.deleteSync(Ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,ot=0){const lt=Math.pow(2,-ot),Z=Math.floor(b.image.width*lt),Tt=Math.floor(b.image.height*lt),Ut=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;se.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,Ut,Ft,Z,Tt),Pt.unbindTexture()};const Fo=z.createFramebuffer(),Ho=z.createFramebuffer();this.copyTextureToTexture=function(b,Y,ot=null,lt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(Uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Ut,Ft,Lt,Jt,te,qt,ue,Me,Ve;const Ue=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if(ot!==null)Ut=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,Lt=ot.isBox3?ot.max.z-ot.min.z:1,Jt=ot.min.x,te=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const Tn=Math.pow(2,-Z);Ut=Math.floor(Ue.width*Tn),Ft=Math.floor(Ue.height*Tn),b.isDataArrayTexture?Lt=Ue.depth:b.isData3DTexture?Lt=Math.floor(Ue.depth*Tn):Lt=1,Jt=0,te=0,qt=0}lt!==null?(ue=lt.x,Me=lt.y,Ve=lt.z):(ue=0,Me=0,Ve=0);const fe=kt.convert(Y.format),Qt=kt.convert(Y.type);let Ge;Y.isData3DTexture?(se.setTexture3D(Y,0),Ge=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Ge=z.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Ge=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),En=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ui=z.getParameter(z.UNPACK_SKIP_PIXELS),wn=z.getParameter(z.UNPACK_SKIP_ROWS),dn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,te),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qt);const Be=b.isDataArrayTexture||b.isData3DTexture,Dn=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const Tn=Vt.get(b),je=Vt.get(Y),xn=Vt.get(Tn.__renderTarget),Sr=Vt.get(je.__renderTarget);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,xn.__webglFramebuffer),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Ln=0;Ln<Lt;Ln++)Be&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.get(b).__webglTexture,Z,qt+Ln),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.get(Y).__webglTexture,Tt,Ve+Ln)),z.blitFramebuffer(Jt,te,Ut,Ft,ue,Me,Ut,Ft,z.DEPTH_BUFFER_BIT,z.NEAREST);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||Vt.has(b)){const Tn=Vt.get(b),je=Vt.get(Y);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,Fo),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ho);for(let xn=0;xn<Lt;xn++)Be?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Tn.__webglTexture,Z,qt+xn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tn.__webglTexture,Z),Dn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.__webglTexture,Tt,Ve+xn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,je.__webglTexture,Tt),Z!==0?z.blitFramebuffer(Jt,te,Ut,Ft,ue,Me,Ut,Ft,z.COLOR_BUFFER_BIT,z.NEAREST):Dn?z.copyTexSubImage3D(Ge,Tt,ue,Me,Ve+xn,Jt,te,Ut,Ft):z.copyTexSubImage2D(Ge,Tt,ue,Me,Jt,te,Ut,Ft);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Ge,Tt,ue,Me,Ve,Ut,Ft,Lt,fe,Qt,Ue.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(Ge,Tt,ue,Me,Ve,Ut,Ft,Lt,fe,Ue.data):z.texSubImage3D(Ge,Tt,ue,Me,Ve,Ut,Ft,Lt,fe,Qt,Ue):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,ue,Me,Ut,Ft,fe,Qt,Ue.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,ue,Me,Ue.width,Ue.height,fe,Ue.data):z.texSubImage2D(z.TEXTURE_2D,Tt,ue,Me,Ut,Ft,fe,Qt,Ue);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,En),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ui),z.pixelStorei(z.UNPACK_SKIP_ROWS,wn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dn),Tt===0&&Y.generateMipmaps&&z.generateMipmap(Ge),Pt.unbindTexture()},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&se.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?se.setTextureCube(b,0):b.isData3DTexture?se.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?se.setTexture2DArray(b,0):se.setTexture2D(b,0),Pt.unbindTexture()},this.resetState=function(){G=0,F=0,K=null,Pt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const EA={Rocket:bo,Server:_c,Lightbulb:To,Mail:$_,Code:hs,BarChart:K_,Phone:e0,MapPin:cS,Linkedin:J_,Github:Q_,PenSquare:n0,Menu:t0,X:i0},TA=()=>{const[o,e]=vn.useState("home"),[i,r]=vn.useState(""),l="Building the future, one line of code at a time.",u=50,[h,d]=vn.useState({}),[m,p]=vn.useState({}),[g,v]=vn.useState({}),[S,M]=vn.useState({}),[A,R]=vn.useState(!1),y=vn.useRef(null),_=vn.useRef(null);vn.useEffect(()=>{let q,rt,et,L,X=2e3,H=new Float32Array(X*3),mt=new Float32Array(X*3);const D=new Re,tt=()=>{const wt=window.innerWidth,Bt=window.innerHeight;q=new oi(75,wt/Bt,1,1e3),q.position.z=200,rt=new Uy;const J=new ia,gt=new C0({size:1.5,vertexColors:!0,blending:mh,transparent:!0,opacity:.8});for(let At=0;At<X;At++){const Xt=At*3;H[Xt]=(Math.random()*2-1)*500,H[Xt+1]=(Math.random()*2-1)*500,H[Xt+2]=(Math.random()*2-1)*500,D.setHSL(Math.random()*.1+.5,1,.5),mt[Xt]=D.r,mt[Xt+1]=D.g,mt[Xt+2]=D.b}J.setAttribute("position",new li(H,3)),J.setAttribute("color",new li(mt,3)),L=new Py(J,gt),rt.add(L),et=new MA({antialias:!0,alpha:!0}),et.setPixelRatio(window.devicePixelRatio),et.setSize(wt,Bt),et.setClearColor(0,0),y.current.appendChild(et.domElement),window.addEventListener("resize",St)},St=()=>{const wt=window.innerWidth,Bt=window.innerHeight;q.aspect=wt/Bt,q.updateProjectionMatrix(),et.setSize(wt,Bt)},yt=()=>{requestAnimationFrame(yt),L.rotation.x+=5e-4,L.rotation.y+=.001,et.render(rt,q)};return tt(),yt(),()=>{window.removeEventListener("resize",St),y.current&&et&&(y.current.removeChild(et.domElement),et.dispose())}},[]),vn.useEffect(()=>{let q=0;const rt=setInterval(()=>{q<l.length?(r(et=>et+l.charAt(q)),q++):clearInterval(rt)},u);return()=>clearInterval(rt)},[]),vn.useEffect(()=>{let q="Axora Solutions",rt="Axora Solutions is a leading IT company offering expert services in web development, cloud solutions, AI, and more. We build the future, one line of code at a time.";switch(o){case"services":q="Services - Axora Solutions",rt="Explore our comprehensive suite of IT services including web development, cloud computing, and AI solutions.";break;case"interns":q="Internships - Axora Solutions",rt="Kickstart your career with our hands-on tech internships in software engineering, AI/ML, and design.";break;case"blog":q="Blog - Axora Solutions",rt="Read our latest insights on technology, innovation, and the future of coding from industry experts.";break;case"contact":q="Contact - Axora Solutions",rt="Get in touch with Axora Solutions for expert IT consulting and project inquiries.";break;default:q="Home - Axora Solutions",rt="Axora Solutions is a leading IT company offering expert services in web development, cloud solutions, AI, and more. We build the future, one line of code at a time."}document.title=q;const et=document.querySelector('meta[name="description"]')||document.createElement("meta");if(et.name="description",et.content=rt,et.parentNode||document.head.appendChild(et),o==="services"){const L=w.map((X,H)=>setTimeout(()=>{d(mt=>({...mt,[H]:!0}))},H*150));return p({}),v({}),M({}),()=>L.forEach(X=>clearTimeout(X))}else if(o==="interns"){const L=C.map((X,H)=>setTimeout(()=>{p(mt=>({...mt,[H]:!0}))},H*150));return d({}),v({}),M({}),()=>L.forEach(X=>clearTimeout(X))}else if(o==="blog"){const L=k.map((X,H)=>setTimeout(()=>{v(mt=>({...mt,[H]:!0}))},H*150));return d({}),p({}),M({}),()=>L.forEach(X=>clearTimeout(X))}else if(o==="home"){const L=it.map((X,H)=>setTimeout(()=>{M(mt=>({...mt,[H]:!0}))},H*150));return d({}),p({}),v({}),()=>L.forEach(X=>clearTimeout(X))}else d({}),p({}),v({}),M({})},[o]);const I=q=>{e(q),R(!1),_.current&&_.current.scrollIntoView({behavior:"smooth"})},P=({tab:q,label:rt,icon:et})=>dt.jsxs("button",{onClick:()=>I(q),className:`px-4 py-2 rounded-full font-medium transition-colors duration-300
        ${o===q?"bg-blue-600 text-white shadow-lg":"text-gray-400 hover:text-white hover:bg-slate-800"} flex items-center gap-2`,children:[dt.jsx(et,{size:18}),dt.jsx("span",{children:rt})]}),U=({title:q,children:rt,id:et,innerRef:L,className:X="",maxWidth:H="max-w-7xl"})=>dt.jsx("section",{id:et,ref:L,className:`py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center relative z-10 ${X}`,children:dt.jsxs("div",{className:`${H} w-full`,children:[dt.jsx("h2",{className:"text-4xl sm:text-5xl font-extrabold text-white text-center mb-16 tracking-wide",children:dt.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600",children:q})}),rt]})}),B=({title:q,description:rt,icon:et,isVisible:L,index:X})=>dt.jsxs("div",{"data-index":X,className:`bg-slate-800 p-8 rounded-xl shadow-xl border border-blue-700 transition-all transform duration-1000 ease-out hover:scale-105 hover:shadow-blue-500/20
      ${L?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${X*150}ms`},children:[dt.jsx("div",{className:"flex justify-center mb-6",children:dt.jsx("div",{className:"p-4 bg-blue-600 rounded-full shadow-lg transition-transform hover:rotate-12 duration-300",children:dt.jsx(et,{size:48,className:"text-white"})})}),dt.jsx("h3",{className:"text-2xl font-semibold text-blue-400 mb-2 text-center",children:q}),dt.jsx("p",{className:"text-gray-300 text-center",children:rt})]}),G=({title:q,description:rt,requirement:et,icon:L,isVisible:X,index:H})=>dt.jsxs("div",{"data-index":H,className:`bg-slate-800 p-8 rounded-xl shadow-xl border border-blue-700 transition-all transform duration-1000 ease-out hover:scale-105 hover:shadow-blue-500/20
      ${X?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${H*150}ms`},children:[dt.jsx("div",{className:"flex justify-center mb-6",children:dt.jsx("div",{className:"p-4 bg-blue-600 rounded-full shadow-lg transition-transform hover:rotate-12 duration-300",children:dt.jsx(L,{size:48,className:"text-white"})})}),dt.jsx("h3",{className:"text-2xl font-semibold text-blue-400 mb-2 text-center",children:q}),dt.jsx("p",{className:"text-gray-300 text-center mb-2",children:rt}),dt.jsxs("p",{className:"text-gray-400 text-sm text-center mb-6",children:[dt.jsx("span",{className:"font-semibold text-white",children:"Requirements:"})," ",et]}),dt.jsx("div",{className:"flex justify-center",children:dt.jsx("a",{href:`https://wa.me/1234567890?text=${encodeURIComponent(`I'm interested in the ${q} internship!`)}`,target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105",children:"Apply Now"})})]}),F=({title:q,date:rt,summary:et,icon:L,isVisible:X,index:H})=>dt.jsxs("div",{"data-index":H,className:`bg-slate-800 p-8 rounded-xl shadow-xl border border-blue-700 transition-all transform duration-1000 ease-out hover:scale-105 hover:shadow-blue-500/20
      ${X?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${H*150}ms`},children:[dt.jsx("div",{className:"flex justify-center mb-4",children:dt.jsx("div",{className:"p-3 bg-blue-600 rounded-full shadow-lg transition-transform hover:rotate-12 duration-300",children:dt.jsx(L,{size:32,className:"text-white"})})}),dt.jsx("h3",{className:"text-xl font-semibold text-blue-400 mb-2 text-center",children:q}),dt.jsx("p",{className:"text-gray-400 text-sm text-center mb-4",children:rt}),dt.jsx("p",{className:"text-gray-300 text-center",children:et})]}),K=({title:q,description:rt,icon:et,isVisible:L,index:X})=>dt.jsxs("div",{"data-index":X,className:`p-6 sm:p-8 rounded-xl bg-slate-800 border border-slate-700 shadow-lg flex flex-col items-center text-center space-y-4 transition-all duration-1000 ease-out transform
      ${L?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${X*150}ms`},children:[dt.jsx("div",{className:"p-3 bg-blue-600 rounded-full shadow-lg",children:dt.jsx(et,{size:32,className:"text-white"})}),dt.jsx("h4",{className:"text-xl font-semibold text-blue-400",children:q}),dt.jsx("p",{className:"text-gray-300",children:rt})]}),w=[{title:"Web Development",description:"Crafting responsive, high-performance websites and web applications.",icon:hs},{title:"Cloud Solutions",description:"Expert cloud migration and optimization for scalable and secure infrastructure.",icon:_c},{title:"AI & Machine Learning",description:"Leveraging artificial intelligence to automate processes and create smarter solutions.",icon:To},{title:"Data Analytics",description:"Turning complex data into actionable insights for informed business decisions.",icon:K_},{title:"Mobile App Development",description:"Building native and cross-platform apps for a seamless user experience.",icon:bo},{title:"IT Consulting",description:"Providing strategic guidance and expert advice to optimize your technology stack.",icon:e0}],C=[{title:"Software Engineering Intern",description:"Join our core team to build scalable services and contribute to open-source projects.",requirement:"Proficiency in Python or Java.",icon:hs},{title:"AI/ML Research Intern",description:"Work on cutting-edge machine learning models and help solve complex data-driven problems.",requirement:"Experience with TensorFlow or PyTorch.",icon:To},{title:"UI/UX Design Intern",description:"Collaborate with our design team to create beautiful, intuitive user interfaces for our web applications.",requirement:"A portfolio showcasing design skills.",icon:bo}],k=[{title:"The Future of AI in Web Development",date:"August 20, 2024",summary:"Exploring how AI is revolutionizing front-end frameworks and back-end services.",icon:"Code"},{title:"Leveraging Cloud Computing for Scalability",date:"July 15, 2024",summary:"A deep dive into how businesses can use cloud infrastructure to scale operations efficiently.",icon:"Server"},{title:"5 Essential Skills for an IT Consultant",date:"June 30, 2024",summary:"From data analytics to cybersecurity, here are the skills needed to succeed in IT.",icon:"Lightbulb"},{title:"Introduction to Quantum Computing",date:"June 5, 2024",summary:"An overview of the fascinating world of quantum computing and its potential impact on technology.",icon:"BarChart"},{title:"Building a Better User Experience",date:"May 25, 2024",summary:"Tips and tricks for designing intuitive and engaging user interfaces that users will love.",icon:"Rocket"},{title:"Cybersecurity in the Age of Remote Work",date:"May 10, 2024",summary:"Protecting your data and systems when your team is distributed across different locations.",icon:"Phone"}],it=[{title:"Innovation",description:"We are constantly exploring new technologies to deliver cutting-edge solutions that give you a competitive edge.",icon:To},{title:"Expertise",description:"Our team consists of industry veterans and talented specialists who are passionate about solving complex problems.",icon:hs},{title:"Reliability",description:"We build robust and secure systems that you can depend on, backed by our dedicated support team.",icon:_c},{title:"Client-Centric",description:"Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions.",icon:bo}];return dt.jsxs("div",{className:"bg-slate-900 text-gray-100 min-h-screen font-sans overflow-hidden",children:[dt.jsx("div",{ref:y,className:"fixed top-0 left-0 w-full h-full -z-0"}),dt.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-80 backdrop-blur-sm shadow-lg",children:dt.jsxs("header",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center",children:[dt.jsxs("div",{className:"flex items-center justify-between w-full sm:w-auto",children:[dt.jsxs("div",{className:"flex items-center gap-2",children:[dt.jsx(hs,{size:32,className:"text-blue-400"}),dt.jsx("span",{className:"text-2xl font-bold tracking-wider text-white",children:"AXORA SOLUTIONS"})]}),dt.jsx("button",{onClick:()=>R(!A),className:"sm:hidden text-gray-400 hover:text-white p-2 rounded","aria-label":"Toggle menu",children:A?dt.jsx(i0,{size:24}):dt.jsx(t0,{size:24})})]}),dt.jsxs("nav",{className:`${A?"flex":"hidden"} flex-col sm:flex sm:flex-row justify-center sm:justify-end gap-2 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-0`,children:[dt.jsx(P,{tab:"home",label:"Home",icon:bo}),dt.jsx(P,{tab:"services",label:"Services",icon:_c}),dt.jsx(P,{tab:"interns",label:"Interns",icon:To}),dt.jsx(P,{tab:"blog",label:"Blog",icon:n0}),dt.jsx(P,{tab:"contact",label:"Contact",icon:$_})]})]})}),dt.jsxs("main",{ref:_,className:"pt-1",children:[o==="home"&&dt.jsxs(dt.Fragment,{children:[dt.jsx(U,{className:"min-h-screen",maxWidth:"max-w-screen-2xl",children:dt.jsxs("div",{className:"flex flex-col items-center justify-center gap-12 mt-8 text-center",children:[dt.jsxs("div",{className:"flex-1 relative z-10",children:[dt.jsxs("h1",{className:"text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6",children:[dt.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600",children:"Innovating"}),dt.jsx("br",{}),dt.jsx("span",{className:"text-white",children:"the Digital Future."})]}),dt.jsx("p",{className:"text-xl sm:text-2xl text-gray-300 mb-8 font-mono",children:"Building tomorrow's technology today."}),dt.jsxs("div",{className:"flex justify-center gap-4",children:[dt.jsx("button",{onClick:()=>I("services"),className:"bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105",children:"Our Services"}),dt.jsx("a",{href:"#",onClick:q=>{q.preventDefault(),I("contact")},className:"bg-transparent border-2 border-blue-600 text-blue-400 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 transform hover:scale-105",children:"Get in Touch"})]})]}),dt.jsxs("div",{className:"w-full max-w-md mx-auto p-4 rounded-xl bg-slate-800 shadow-2xl border border-slate-700 font-mono text-xs sm:text-sm relative z-10",children:[dt.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[dt.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),dt.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),dt.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"})]}),dt.jsx("pre",{className:"text-blue-400 overflow-x-auto",children:dt.jsx("code",{className:"whitespace-pre-wrap",children:`// Axora Solutions: We code the future.
          const AxoraSolutions = (focus) => {
  const coreServices = ['Web Dev', 'Cloud', 'AI/ML'];
// Find your solution.                   
  const solution = coreServices.find(s => s === focus) || 'Integrated Services';
  return \`Your partner in \${solution}.\`;
};

AxoraSolutions('Web Dev');
// Returns: 'Your partner in Web Dev.'
`})})]})]})}),dt.jsxs(U,{title:"Why Choose Us?",className:"bg-slate-900 border-t border-slate-800",maxWidth:"max-w-screen-2xl",children:[dt.jsx("p",{className:"text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto",children:"Our passion for technology and dedication to our clients sets us apart."}),dt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:it.map((q,rt)=>dt.jsx(K,{title:q.title,description:q.description,icon:q.icon,isVisible:S[rt],index:rt},rt))}),dt.jsx("div",{className:"flex justify-center mt-12",children:dt.jsxs("button",{onClick:()=>I("contact"),className:"inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105",children:["Start Your Project",dt.jsx(nS,{size:20})]})})]})]}),o==="services"&&dt.jsxs(U,{title:"Our Expertise",children:[dt.jsx("p",{className:"text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto",children:"We provide a full spectrum of technology services to drive your business forward."}),dt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:w.map((q,rt)=>dt.jsx(B,{title:q.title,description:q.description,icon:q.icon,isVisible:h[rt],index:rt},rt))})]}),o==="interns"&&dt.jsxs(U,{title:"Internship Opportunities",children:[dt.jsx("p",{className:"text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto",children:"Learn from the best and kickstart your tech career with our dynamic internship programs."}),dt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:C.map((q,rt)=>dt.jsx(G,{title:q.title,description:q.description,requirement:q.requirement,icon:q.icon,isVisible:m[rt],index:rt},rt))})]}),o==="blog"&&dt.jsxs(U,{title:"Our Latest Insights",children:[dt.jsx("p",{className:"text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto",children:"Stay up-to-date with our thoughts on technology, innovation, and the future of coding."}),dt.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:k.map((q,rt)=>dt.jsx(F,{title:q.title,date:q.date,summary:q.summary,icon:EA[q.icon]||hs,isVisible:g[rt],index:rt},rt))})]}),o==="contact"&&dt.jsx(U,{title:"Get in Touch",children:dt.jsx("div",{className:"bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-700 w-full max-w-3xl mx-auto relative z-10",children:dt.jsxs("form",{className:"space-y-6",children:[dt.jsxs("div",{children:[dt.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:"Name"}),dt.jsx("input",{type:"text",id:"name",name:"name",className:"w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-400 transition-colors",placeholder:"John Doe"})]}),dt.jsxs("div",{children:[dt.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:"Email"}),dt.jsx("input",{type:"email",id:"email",name:"email",className:"w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-400 transition-colors",placeholder:"john.doe@example.com"})]}),dt.jsxs("div",{children:[dt.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),dt.jsx("textarea",{id:"message",name:"message",rows:"4",className:"w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-blue-400 transition-colors",placeholder:"How can we help you?"})]}),dt.jsx("div",{className:"flex justify-center",children:dt.jsx("button",{type:"submit",className:"bg-blue-600 text-white font-bold py-3 px-12 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105",children:"Send Message"})})]})})})]}),dt.jsx("footer",{className:"bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-8 lg:px-16 relative z-10",children:dt.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col items-center justify-between space-y-4 sm:space-y-0 sm:flex-row",children:[dt.jsxs("div",{className:"text-center sm:text-left",children:[dt.jsx("p",{className:"text-gray-400",children:"Axora Solutions."}),dt.jsx("p",{className:"text-sm text-gray-500",children:"© 2025 All rights reserved."})]}),dt.jsxs("div",{className:"flex justify-center items-center gap-4",children:[dt.jsx("a",{href:"#","aria-label":"LinkedIn",className:"text-gray-400 hover:text-blue-400 transition-colors",children:dt.jsx(J_,{size:24})}),dt.jsx("a",{href:"#","aria-label":"GitHub",className:"text-gray-400 hover:text-blue-400 transition-colors",children:dt.jsx(Q_,{size:24})})]})]})})]})};jx.createRoot(document.getElementById("root")).render(dt.jsx(vn.StrictMode,{children:dt.jsx(TA,{})}));
