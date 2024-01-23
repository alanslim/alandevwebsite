function Cm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Uo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function $m(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Bd={exports:{}},gi={},Fd={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),Am=Symbol.for("react.portal"),Tm=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Dm=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),_m=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),Im=Symbol.for("react.suspense"),Lm=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),qu=Symbol.iterator;function jm(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wd=Object.assign,Hd={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Ud}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vd(){}Vd.prototype=Or.prototype;function Fs(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Ud}var Us=Fs.prototype=new Vd;Us.constructor=Fs;Wd(Us,Or.prototype);Us.isPureReactComponent=!0;var ec=Array.isArray,Qd=Object.prototype.hasOwnProperty,Ws={current:null},Gd={key:!0,ref:!0,__self:!0,__source:!0};function Yd(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Qd.call(t,r)&&!Gd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Wo,type:e,key:l,ref:i,props:o,_owner:Ws.current}}function Mm(e,t){return{$$typeof:Wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wo}function zm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tc=/\/+/g;function Xi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zm(""+e.key):t.toString(36)}function xl(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Wo:case Am:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Xi(i,0):r,ec(o)?(n="",e!=null&&(n=e.replace(tc,"$&/")+"/"),xl(o,t,n,"",function(u){return u})):o!=null&&(Hs(o)&&(o=Mm(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(tc,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ec(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Xi(l,a);i+=xl(l,t,n,s,o)}else if(s=jm(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Xi(l,a++),i+=xl(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Zo(e,t,n){if(e==null)return e;var r=[],o=0;return xl(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Bm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},kl={transition:null},Fm={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:kl,ReactCurrentOwner:Ws};G.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Or;G.Fragment=Tm;G.Profiler=Dm;G.PureComponent=Fs;G.StrictMode=Pm;G.Suspense=Im;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wd({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ws.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Qd.call(t,s)&&!Gd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wo,type:e.type,key:o,ref:l,props:r,_owner:i}};G.createContext=function(e){return e={$$typeof:_m,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nm,_context:e},e.Consumer=e};G.createElement=Yd;G.createFactory=function(e){var t=Yd.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Rm,render:e}};G.isValidElement=Hs;G.lazy=function(e){return{$$typeof:Om,_payload:{_status:-1,_result:e},_init:Bm}};G.memo=function(e,t){return{$$typeof:Lm,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=kl.transition;kl.transition={};try{e()}finally{kl.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return We.current.useCallback(e,t)};G.useContext=function(e){return We.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return We.current.useDeferredValue(e)};G.useEffect=function(e,t){return We.current.useEffect(e,t)};G.useId=function(){return We.current.useId()};G.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return We.current.useMemo(e,t)};G.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};G.useRef=function(e){return We.current.useRef(e)};G.useState=function(e){return We.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return We.current.useTransition()};G.version="18.2.0";Fd.exports=G;var g=Fd.exports;const E=Uo(g),Um=Cm({__proto__:null,default:E},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=g,Hm=Symbol.for("react.element"),Vm=Symbol.for("react.fragment"),Qm=Object.prototype.hasOwnProperty,Gm=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ym={key:!0,ref:!0,__self:!0,__source:!0};function Kd(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Qm.call(t,r)&&!Ym.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Hm,type:e,key:l,ref:i,props:o,_owner:Gm.current}}gi.Fragment=Vm;gi.jsx=Kd;gi.jsxs=Kd;Bd.exports=gi;var C=Bd.exports,Na={},Xd={exports:{}},ot={},Zd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,_){var O=A.length;A.push(_);e:for(;0<O;){var Y=O-1>>>1,W=A[Y];if(0<o(W,_))A[Y]=_,A[O]=W,O=Y;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var _=A[0],O=A.pop();if(O!==_){A[0]=O;e:for(var Y=0,W=A.length,M=W>>>1;Y<M;){var z=2*(Y+1)-1,K=A[z],B=z+1,H=A[B];if(0>o(K,O))B<W&&0>o(H,K)?(A[Y]=H,A[B]=O,Y=B):(A[Y]=K,A[z]=O,Y=z);else if(B<W&&0>o(H,O))A[Y]=H,A[B]=O,Y=B;else break e}}return _}function o(A,_){var O=A.sortIndex-_.sortIndex;return O!==0?O:A.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],h=1,f=null,m=3,w=!1,y=!1,k=!1,$=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(A){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=A)r(u),_.sortIndex=_.expirationTime,t(s,_);else break;_=n(u)}}function v(A){if(k=!1,d(A),!y)if(n(s)!==null)y=!0,we(x);else{var _=n(u);_!==null&&pe(v,_.startTime-A)}}function x(A,_){y=!1,k&&(k=!1,p(D),D=-1),w=!0;var O=m;try{for(d(_),f=n(s);f!==null&&(!(f.expirationTime>_)||A&&!Q());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,m=f.priorityLevel;var W=Y(f.expirationTime<=_);_=e.unstable_now(),typeof W=="function"?f.callback=W:f===n(s)&&r(s),d(_)}else r(s);f=n(s)}if(f!==null)var M=!0;else{var z=n(u);z!==null&&pe(v,z.startTime-_),M=!1}return M}finally{f=null,m=O,w=!1}}var b=!1,S=null,D=-1,j=5,L=-1;function Q(){return!(e.unstable_now()-L<j)}function Z(){if(S!==null){var A=e.unstable_now();L=A;var _=!0;try{_=S(!0,A)}finally{_?ae():(b=!1,S=null)}}else b=!1}var ae;if(typeof c=="function")ae=function(){c(Z)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,te=re.port2;re.port1.onmessage=Z,ae=function(){te.postMessage(null)}}else ae=function(){$(Z,0)};function we(A){S=A,b||(b=!0,ae())}function pe(A,_){D=$(function(){A(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,we(x))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(A){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var O=m;m=_;try{return A()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,_){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var O=m;m=A;try{return _()}finally{m=O}},e.unstable_scheduleCallback=function(A,_,O){var Y=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Y+O:Y):O=Y,A){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,A={id:h++,callback:_,priorityLevel:A,startTime:O,expirationTime:W,sortIndex:-1},O>Y?(A.sortIndex=O,t(u,A),n(s)===null&&A===n(u)&&(k?(p(D),D=-1):k=!0,pe(v,O-Y))):(A.sortIndex=W,t(s,A),y||w||(y=!0,we(x))),A},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(A){var _=m;return function(){var O=m;m=_;try{return A.apply(this,arguments)}finally{m=O}}}})(Jd);Zd.exports=Jd;var Km=Zd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=g,rt=Km;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ef=new Set,go={};function Gn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(go[e]=t,e=0;e<t.length;e++)ef.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_a=Object.prototype.hasOwnProperty,Xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nc={},rc={};function Zm(e){return _a.call(rc,e)?!0:_a.call(nc,e)?!1:Xm.test(e)?rc[e]=!0:(nc[e]=!0,!1)}function Jm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qm(e,t,n,r){if(t===null||typeof t>"u"||Jm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vs,Qs);Ie[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vs,Qs);Ie[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vs,Qs);Ie[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gs(e,t,n,r){var o=Ie.hasOwnProperty(t)?Ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qm(t,n,o,r)&&(n=null),r||o===null?Zm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),Ks=Symbol.for("react.forward_ref"),Ia=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),rf=Symbol.for("react.offscreen"),oc=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Zi;function Jr(e){if(Zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||""}return`
`+Zi+e}var Ji=!1;function qi(e,t){if(!e||Ji)return"";Ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function eg(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Ra:return"Profiler";case Ys:return"StrictMode";case Ia:return"Suspense";case La:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nf:return(e.displayName||"Context")+".Consumer";case tf:return(e._context.displayName||"Context")+".Provider";case Ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function tg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ng(e){var t=of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qo(e){e._valueTracker||(e._valueTracker=ng(e))}function lf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=of(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function af(e,t){t=t.checked,t!=null&&Gs(e,"checked",t,!1)}function Ma(e,t){af(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?za(e,t.type,n):t.hasOwnProperty("defaultValue")&&za(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function za(e,t,n){(t!=="number"||Ml(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(qr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function sf(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var el,cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=el.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rg=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){rg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]})});function df(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=df(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var og=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(e,t){if(t){if(og[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,vr=null,yr=null;function uc(e){if(e=Qo(e)){if(typeof Va!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ki(t),Va(e.stateNode,e.type,t))}}function pf(e){vr?yr?yr.push(e):yr=[e]:vr=e}function hf(){if(vr){var e=vr,t=yr;if(yr=vr=null,uc(e),t)for(e=0;e<t.length;e++)uc(t[e])}}function mf(e,t){return e(t)}function gf(){}var ea=!1;function vf(e,t,n){if(ea)return e(t,n);ea=!0;try{return mf(e,t,n)}finally{ea=!1,(vr!==null||yr!==null)&&(gf(),hf())}}function yo(e,t){var n=e.stateNode;if(n===null)return null;var r=ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Qa=!1;if(Vt)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Qa=!1}function lg(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var io=!1,zl=null,Bl=!1,Ga=null,ig={onError:function(e){io=!0,zl=e}};function ag(e,t,n,r,o,l,i,a,s){io=!1,zl=null,lg.apply(ig,arguments)}function sg(e,t,n,r,o,l,i,a,s){if(ag.apply(this,arguments),io){if(io){var u=zl;io=!1,zl=null}else throw Error(P(198));Bl||(Bl=!0,Ga=u)}}function Yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(Yn(e)!==e)throw Error(P(188))}function ug(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return cc(o),e;if(l===r)return cc(o),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function wf(e){return e=ug(e),e!==null?xf(e):null}function xf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xf(e);if(t!==null)return t;e=e.sibling}return null}var kf=rt.unstable_scheduleCallback,dc=rt.unstable_cancelCallback,cg=rt.unstable_shouldYield,dg=rt.unstable_requestPaint,ye=rt.unstable_now,fg=rt.unstable_getCurrentPriorityLevel,Js=rt.unstable_ImmediatePriority,Sf=rt.unstable_UserBlockingPriority,Fl=rt.unstable_NormalPriority,pg=rt.unstable_LowPriority,Ef=rt.unstable_IdlePriority,vi=null,Nt=null;function hg(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:vg,mg=Math.log,gg=Math.LN2;function vg(e){return e>>>=0,e===0?32:31-(mg(e)/gg|0)|0}var tl=64,nl=4194304;function eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ul(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=eo(a):(l&=i,l!==0&&(r=eo(l)))}else i=n&~o,i!==0?r=eo(i):l!==0&&(r=eo(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function yg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-xt(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=yg(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bf(){var e=tl;return tl<<=1,!(tl&4194240)&&(tl=64),e}function ta(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function xg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function Cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $f,eu,Af,Tf,Pf,Ka=!1,rl=[],un=null,cn=null,dn=null,wo=new Map,xo=new Map,rn=[],kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function Hr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Qo(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sg(e,t,n,r,o){switch(t){case"focusin":return un=Hr(un,e,t,n,r,o),!0;case"dragenter":return cn=Hr(cn,e,t,n,r,o),!0;case"mouseover":return dn=Hr(dn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return wo.set(l,Hr(wo.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,xo.set(l,Hr(xo.get(l)||null,e,t,n,r,o)),!0}return!1}function Df(e){var t=Nn(e.target);if(t!==null){var n=Yn(t);if(n!==null){if(t=n.tag,t===13){if(t=yf(n),t!==null){e.blockedOn=t,Pf(e.priority,function(){Af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return t=Qo(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function pc(e,t,n){Sl(e)&&n.delete(t)}function Eg(){Ka=!1,un!==null&&Sl(un)&&(un=null),cn!==null&&Sl(cn)&&(cn=null),dn!==null&&Sl(dn)&&(dn=null),wo.forEach(pc),xo.forEach(pc)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ka||(Ka=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Eg)))}function ko(e){function t(o){return Vr(o,e)}if(0<rl.length){Vr(rl[0],e);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&Vr(un,e),cn!==null&&Vr(cn,e),dn!==null&&Vr(dn,e),wo.forEach(t),xo.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Df(n),n.blockedOn===null&&rn.shift()}var wr=Kt.ReactCurrentBatchConfig,Wl=!0;function bg(e,t,n,r){var o=ee,l=wr.transition;wr.transition=null;try{ee=1,tu(e,t,n,r)}finally{ee=o,wr.transition=l}}function Cg(e,t,n,r){var o=ee,l=wr.transition;wr.transition=null;try{ee=4,tu(e,t,n,r)}finally{ee=o,wr.transition=l}}function tu(e,t,n,r){if(Wl){var o=Xa(e,t,n,r);if(o===null)da(e,t,r,Hl,n),fc(e,r);else if(Sg(o,e,t,n,r))r.stopPropagation();else if(fc(e,r),t&4&&-1<kg.indexOf(e)){for(;o!==null;){var l=Qo(o);if(l!==null&&$f(l),l=Xa(e,t,n,r),l===null&&da(e,t,r,Hl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else da(e,t,r,null,n)}}var Hl=null;function Xa(e,t,n,r){if(Hl=null,e=Zs(r),e=Nn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hl=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fg()){case Js:return 1;case Sf:return 4;case Fl:case pg:return 16;case Ef:return 536870912;default:return 16}default:return 16}}var ln=null,nu=null,El=null;function _f(){if(El)return El;var e,t=nu,n=t.length,r,o="value"in ln?ln.value:ln.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return El=o.slice(e,1<r?1-r:void 0)}function bl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function hc(){return!1}function lt(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ol:hc,this.isPropagationStopped=hc,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=lt(jr),Vo=fe({},jr,{view:0,detail:0}),$g=lt(Vo),na,ra,Qr,yi=fe({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(na=e.screenX-Qr.screenX,ra=e.screenY-Qr.screenY):ra=na=0,Qr=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ra}}),mc=lt(yi),Ag=fe({},yi,{dataTransfer:0}),Tg=lt(Ag),Pg=fe({},Vo,{relatedTarget:0}),oa=lt(Pg),Dg=fe({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ng=lt(Dg),_g=fe({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rg=lt(_g),Ig=fe({},jr,{data:0}),gc=lt(Ig),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jg[e])?!!t[e]:!1}function ou(){return Mg}var zg=fe({},Vo,{key:function(e){if(e.key){var t=Lg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bg=lt(zg),Fg=fe({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=lt(Fg),Ug=fe({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Wg=lt(Ug),Hg=fe({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=lt(Hg),Qg=fe({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gg=lt(Qg),Yg=[9,13,27,32],lu=Vt&&"CompositionEvent"in window,ao=null;Vt&&"documentMode"in document&&(ao=document.documentMode);var Kg=Vt&&"TextEvent"in window&&!ao,Rf=Vt&&(!lu||ao&&8<ao&&11>=ao),yc=" ",wc=!1;function If(e,t){switch(e){case"keyup":return Yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Xg(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(wc=!0,yc);case"textInput":return e=t.data,e===yc&&wc?null:e;default:return null}}function Zg(e,t){if(rr)return e==="compositionend"||!lu&&If(e,t)?(e=_f(),El=nu=ln=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rf&&t.locale!=="ko"?null:t.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jg[e.type]:t==="textarea"}function Of(e,t,n,r){pf(r),t=Vl(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var so=null,So=null;function qg(e){Gf(e,0)}function wi(e){var t=ir(e);if(lf(t))return e}function e0(e,t){if(e==="change")return t}var jf=!1;if(Vt){var la;if(Vt){var ia="oninput"in document;if(!ia){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),ia=typeof kc.oninput=="function"}la=ia}else la=!1;jf=la&&(!document.documentMode||9<document.documentMode)}function Sc(){so&&(so.detachEvent("onpropertychange",Mf),So=so=null)}function Mf(e){if(e.propertyName==="value"&&wi(So)){var t=[];Of(t,So,e,Zs(e)),vf(qg,t)}}function t0(e,t,n){e==="focusin"?(Sc(),so=t,So=n,so.attachEvent("onpropertychange",Mf)):e==="focusout"&&Sc()}function n0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(So)}function r0(e,t){if(e==="click")return wi(t)}function o0(e,t){if(e==="input"||e==="change")return wi(t)}function l0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:l0;function Eo(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!_a.call(t,o)||!Et(e[o],t[o]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,t){var n=Ec(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(){for(var e=window,t=Ml();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ml(e.document)}return t}function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function i0(e){var t=Bf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zf(n.ownerDocument.documentElement,n)){if(r!==null&&iu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=bc(n,l);var i=bc(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a0=Vt&&"documentMode"in document&&11>=document.documentMode,or=null,Za=null,uo=null,Ja=!1;function Cc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||or==null||or!==Ml(r)||(r=or,"selectionStart"in r&&iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Eo(uo,r)||(uo=r,r=Vl(Za,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},aa={},Ff={};Vt&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function xi(e){if(aa[e])return aa[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ff)return aa[e]=t[n];return e}var Uf=xi("animationend"),Wf=xi("animationiteration"),Hf=xi("animationstart"),Vf=xi("transitionend"),Qf=new Map,$c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Qf.set(e,t),Gn(t,[e])}for(var sa=0;sa<$c.length;sa++){var ua=$c[sa],s0=ua.toLowerCase(),u0=ua[0].toUpperCase()+ua.slice(1);En(s0,"on"+u0)}En(Uf,"onAnimationEnd");En(Wf,"onAnimationIteration");En(Hf,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Vf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sg(r,t,void 0,e),e.currentTarget=null}function Gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;Ac(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;Ac(o,a,u),l=s}}}if(Bl)throw e=Ga,Bl=!1,Ga=null,e}function oe(e,t){var n=t[rs];n===void 0&&(n=t[rs]=new Set);var r=e+"__bubble";n.has(r)||(Yf(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),Yf(n,e,r,t)}var il="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[il]){e[il]=!0,ef.forEach(function(n){n!=="selectionchange"&&(c0.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[il]||(t[il]=!0,ca("selectionchange",!1,t))}}function Yf(e,t,n,r){switch(Nf(t)){case 1:var o=bg;break;case 4:o=Cg;break;default:o=tu}n=o.bind(null,t,n,e),o=void 0,!Qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function da(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Nn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}vf(function(){var u=l,h=Zs(n),f=[];e:{var m=Qf.get(e);if(m!==void 0){var w=ru,y=e;switch(e){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":w=Bg;break;case"focusin":y="focus",w=oa;break;case"focusout":y="blur",w=oa;break;case"beforeblur":case"afterblur":w=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Wg;break;case Uf:case Wf:case Hf:w=Ng;break;case Vf:w=Vg;break;case"scroll":w=$g;break;case"wheel":w=Gg;break;case"copy":case"cut":case"paste":w=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=vc}var k=(t&4)!==0,$=!k&&e==="scroll",p=k?m!==null?m+"Capture":null:m;k=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,p!==null&&(v=yo(c,p),v!=null&&k.push(Co(c,v,d)))),$)break;c=c.return}0<k.length&&(m=new w(m,y,null,n,h),f.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Ha&&(y=n.relatedTarget||n.fromElement)&&(Nn(y)||y[Qt]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Nn(y):null,y!==null&&($=Yn(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(k=mc,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=vc,v="onPointerLeave",p="onPointerEnter",c="pointer"),$=w==null?m:ir(w),d=y==null?m:ir(y),m=new k(v,c+"leave",w,n,h),m.target=$,m.relatedTarget=d,v=null,Nn(h)===u&&(k=new k(p,c+"enter",y,n,h),k.target=d,k.relatedTarget=$,v=k),$=v,w&&y)t:{for(k=w,p=y,c=0,d=k;d;d=Jn(d))c++;for(d=0,v=p;v;v=Jn(v))d++;for(;0<c-d;)k=Jn(k),c--;for(;0<d-c;)p=Jn(p),d--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Jn(k),p=Jn(p)}k=null}else k=null;w!==null&&Tc(f,m,w,k,!1),y!==null&&$!==null&&Tc(f,$,y,k,!0)}}e:{if(m=u?ir(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var x=e0;else if(xc(m))if(jf)x=o0;else{x=n0;var b=t0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=r0);if(x&&(x=x(e,u))){Of(f,x,n,h);break e}b&&b(e,m,u),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&za(m,"number",m.value)}switch(b=u?ir(u):window,e){case"focusin":(xc(b)||b.contentEditable==="true")&&(or=b,Za=u,uo=null);break;case"focusout":uo=Za=or=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,Cc(f,n,h);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Cc(f,n,h)}var S;if(lu)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else rr?If(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Rf&&n.locale!=="ko"&&(rr||D!=="onCompositionStart"?D==="onCompositionEnd"&&rr&&(S=_f()):(ln=h,nu="value"in ln?ln.value:ln.textContent,rr=!0)),b=Vl(u,D),0<b.length&&(D=new gc(D,e,null,n,h),f.push({event:D,listeners:b}),S?D.data=S:(S=Lf(n),S!==null&&(D.data=S)))),(S=Kg?Xg(e,n):Zg(e,n))&&(u=Vl(u,"onBeforeInput"),0<u.length&&(h=new gc("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=S))}Gf(f,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=yo(e,n),l!=null&&r.unshift(Co(e,l,o)),l=yo(e,t),l!=null&&r.push(Co(e,l,o))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=yo(n,l),s!=null&&i.unshift(Co(n,s,a))):o||(s=yo(n,l),s!=null&&i.push(Co(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var d0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function Pc(e){return(typeof e=="string"?e:""+e).replace(d0,`
`).replace(f0,"")}function al(e,t,n){if(t=Pc(t),Pc(e)!==t&&n)throw Error(P(425))}function Ql(){}var qa=null,es=null;function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,Dc=typeof Promise=="function"?Promise:void 0,h0=typeof queueMicrotask=="function"?queueMicrotask:typeof Dc<"u"?function(e){return Dc.resolve(null).then(e).catch(m0)}:ns;function m0(e){setTimeout(function(){throw e})}function fa(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ko(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ko(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Mr,$o="__reactProps$"+Mr,Qt="__reactContainer$"+Mr,rs="__reactEvents$"+Mr,g0="__reactListeners$"+Mr,v0="__reactHandles$"+Mr;function Nn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nc(e);e!==null;){if(n=e[Dt])return n;e=Nc(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[Dt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ki(e){return e[$o]||null}var os=[],ar=-1;function bn(e){return{current:e}}function ie(e){0>ar||(e.current=os[ar],os[ar]=null,ar--)}function ne(e,t){ar++,os[ar]=e.current,e.current=t}var xn={},ze=bn(xn),Ye=bn(!1),zn=xn;function br(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function Gl(){ie(Ye),ie(ze)}function _c(e,t,n){if(ze.current!==xn)throw Error(P(168));ne(ze,t),ne(Ye,n)}function Kf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,tg(e)||"Unknown",o));return fe({},n,r)}function Yl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,zn=ze.current,ne(ze,e),ne(Ye,Ye.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Kf(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,ie(Ye),ie(ze),ne(ze,e)):ie(Ye),ne(Ye,n)}var Ft=null,Si=!1,pa=!1;function Xf(e){Ft===null?Ft=[e]:Ft.push(e)}function y0(e){Si=!0,Xf(e)}function Cn(){if(!pa&&Ft!==null){pa=!0;var e=0,t=ee;try{var n=Ft;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Si=!1}catch(o){throw Ft!==null&&(Ft=Ft.slice(e+1)),kf(Js,Cn),o}finally{ee=t,pa=!1}}return null}var sr=[],ur=0,Kl=null,Xl=0,at=[],st=0,Bn=null,Ut=1,Wt="";function Pn(e,t){sr[ur++]=Xl,sr[ur++]=Kl,Kl=e,Xl=t}function Zf(e,t,n){at[st++]=Ut,at[st++]=Wt,at[st++]=Bn,Bn=e;var r=Ut;e=Wt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var l=32-xt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ut=1<<32-xt(t)+o|n<<o|r,Wt=l+e}else Ut=1<<l|n<<o|r,Wt=e}function au(e){e.return!==null&&(Pn(e,1),Zf(e,1,0))}function su(e){for(;e===Kl;)Kl=sr[--ur],sr[ur]=null,Xl=sr[--ur],sr[ur]=null;for(;e===Bn;)Bn=at[--st],at[st]=null,Wt=at[--st],at[st]=null,Ut=at[--st],at[st]=null}var tt=null,et=null,ue=!1,wt=null;function Jf(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Ut,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function is(e){if(ue){var t=et;if(t){var n=t;if(!Ic(e,t)){if(ls(e))throw Error(P(418));t=fn(n.nextSibling);var r=tt;t&&Ic(e,t)?Jf(r,n):(e.flags=e.flags&-4097|2,ue=!1,tt=e)}}else{if(ls(e))throw Error(P(418));e.flags=e.flags&-4097|2,ue=!1,tt=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function sl(e){if(e!==tt)return!1;if(!ue)return Lc(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ts(e.type,e.memoizedProps)),t&&(t=et)){if(ls(e))throw qf(),Error(P(418));for(;t;)Jf(e,t),t=fn(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?fn(e.stateNode.nextSibling):null;return!0}function qf(){for(var e=et;e;)e=fn(e.nextSibling)}function Cr(){et=tt=null,ue=!1}function uu(e){wt===null?wt=[e]:wt.push(e)}var w0=Kt.ReactCurrentBatchConfig;function vt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zl=bn(null),Jl=null,cr=null,cu=null;function du(){cu=cr=Jl=null}function fu(e){var t=Zl.current;ie(Zl),e._currentValue=t}function as(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Jl=e,cu=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(Jl===null)throw Error(P(308));cr=e,Jl.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var _n=null;function pu(e){_n===null?_n=[e]:_n.push(e)}function ep(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,pu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Gt(e,n)}return o=r.interleaved,o===null?(t.next=t,pu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Gt(e,n)}function Cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}function Oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ql(e,t,n,r){var o=e.updateQueue;nn=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(l!==null){var f=o.baseState;i=0,h=u=s=null,a=l;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,k=a;switch(m=t,w=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){f=y.call(w,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,m=typeof y=="function"?y.call(w,f,m):y,m==null)break e;f=fe({},f,m);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=w,s=f):h=h.next=w,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Un|=i,e.lanes=i,e.memoizedState=f}}function jc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var np=new qd.Component().refs;function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=mn(e),l=Ht(r,o);l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,o),t!==null&&(kt(t,e,o,r),Cl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=mn(e),l=Ht(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,o),t!==null&&(kt(t,e,o,r),Cl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=mn(e),o=Ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=pn(e,o,r),t!==null&&(kt(t,e,r,n),Cl(t,e,r))}};function Mc(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Eo(n,r)||!Eo(o,l):!0}function rp(e,t,n){var r=!1,o=xn,l=t.contextType;return typeof l=="object"&&l!==null?l=ft(l):(o=Ke(t)?zn:ze.current,r=t.contextTypes,l=(r=r!=null)?br(e,o):xn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=np,hu(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ft(l):(l=Ke(t)?zn:ze.current,o.context=br(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ss(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ei.enqueueReplaceState(o,o.state,null),ql(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===np&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ul(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function op(e){function t(p,c){if(e){var d=p.deletions;d===null?(p.deletions=[c],p.flags|=16):d.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=gn(p,c),p.index=0,p.sibling=null,p}function l(p,c,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<c?(p.flags|=2,c):d):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,d,v){return c===null||c.tag!==6?(c=xa(d,p.mode,v),c.return=p,c):(c=o(c,d),c.return=p,c)}function s(p,c,d,v){var x=d.type;return x===nr?h(p,c,d.props.children,v,d.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===tn&&Bc(x)===c.type)?(v=o(c,d.props),v.ref=Gr(p,c,d),v.return=p,v):(v=Nl(d.type,d.key,d.props,null,p.mode,v),v.ref=Gr(p,c,d),v.return=p,v)}function u(p,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=ka(d,p.mode,v),c.return=p,c):(c=o(c,d.children||[]),c.return=p,c)}function h(p,c,d,v,x){return c===null||c.tag!==7?(c=jn(d,p.mode,v,x),c.return=p,c):(c=o(c,d),c.return=p,c)}function f(p,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=xa(""+c,p.mode,d),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jo:return d=Nl(c.type,c.key,c.props,null,p.mode,d),d.ref=Gr(p,null,c),d.return=p,d;case tr:return c=ka(c,p.mode,d),c.return=p,c;case tn:var v=c._init;return f(p,v(c._payload),d)}if(qr(c)||Ur(c))return c=jn(c,p.mode,d,null),c.return=p,c;ul(p,c)}return null}function m(p,c,d,v){var x=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:a(p,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Jo:return d.key===x?s(p,c,d,v):null;case tr:return d.key===x?u(p,c,d,v):null;case tn:return x=d._init,m(p,c,x(d._payload),v)}if(qr(d)||Ur(d))return x!==null?null:h(p,c,d,v,null);ul(p,d)}return null}function w(p,c,d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(d)||null,a(c,p,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return p=p.get(v.key===null?d:v.key)||null,s(c,p,v,x);case tr:return p=p.get(v.key===null?d:v.key)||null,u(c,p,v,x);case tn:var b=v._init;return w(p,c,d,b(v._payload),x)}if(qr(v)||Ur(v))return p=p.get(d)||null,h(c,p,v,x,null);ul(c,v)}return null}function y(p,c,d,v){for(var x=null,b=null,S=c,D=c=0,j=null;S!==null&&D<d.length;D++){S.index>D?(j=S,S=null):j=S.sibling;var L=m(p,S,d[D],v);if(L===null){S===null&&(S=j);break}e&&S&&L.alternate===null&&t(p,S),c=l(L,c,D),b===null?x=L:b.sibling=L,b=L,S=j}if(D===d.length)return n(p,S),ue&&Pn(p,D),x;if(S===null){for(;D<d.length;D++)S=f(p,d[D],v),S!==null&&(c=l(S,c,D),b===null?x=S:b.sibling=S,b=S);return ue&&Pn(p,D),x}for(S=r(p,S);D<d.length;D++)j=w(S,p,D,d[D],v),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?D:j.key),c=l(j,c,D),b===null?x=j:b.sibling=j,b=j);return e&&S.forEach(function(Q){return t(p,Q)}),ue&&Pn(p,D),x}function k(p,c,d,v){var x=Ur(d);if(typeof x!="function")throw Error(P(150));if(d=x.call(d),d==null)throw Error(P(151));for(var b=x=null,S=c,D=c=0,j=null,L=d.next();S!==null&&!L.done;D++,L=d.next()){S.index>D?(j=S,S=null):j=S.sibling;var Q=m(p,S,L.value,v);if(Q===null){S===null&&(S=j);break}e&&S&&Q.alternate===null&&t(p,S),c=l(Q,c,D),b===null?x=Q:b.sibling=Q,b=Q,S=j}if(L.done)return n(p,S),ue&&Pn(p,D),x;if(S===null){for(;!L.done;D++,L=d.next())L=f(p,L.value,v),L!==null&&(c=l(L,c,D),b===null?x=L:b.sibling=L,b=L);return ue&&Pn(p,D),x}for(S=r(p,S);!L.done;D++,L=d.next())L=w(S,p,D,L.value,v),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?D:L.key),c=l(L,c,D),b===null?x=L:b.sibling=L,b=L);return e&&S.forEach(function(Z){return t(p,Z)}),ue&&Pn(p,D),x}function $(p,c,d,v){if(typeof d=="object"&&d!==null&&d.type===nr&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Jo:e:{for(var x=d.key,b=c;b!==null;){if(b.key===x){if(x=d.type,x===nr){if(b.tag===7){n(p,b.sibling),c=o(b,d.props.children),c.return=p,p=c;break e}}else if(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===tn&&Bc(x)===b.type){n(p,b.sibling),c=o(b,d.props),c.ref=Gr(p,b,d),c.return=p,p=c;break e}n(p,b);break}else t(p,b);b=b.sibling}d.type===nr?(c=jn(d.props.children,p.mode,v,d.key),c.return=p,p=c):(v=Nl(d.type,d.key,d.props,null,p.mode,v),v.ref=Gr(p,c,d),v.return=p,p=v)}return i(p);case tr:e:{for(b=d.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(p,c.sibling),c=o(c,d.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ka(d,p.mode,v),c.return=p,p=c}return i(p);case tn:return b=d._init,$(p,c,b(d._payload),v)}if(qr(d))return y(p,c,d,v);if(Ur(d))return k(p,c,d,v);ul(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,d),c.return=p,p=c):(n(p,c),c=xa(d,p.mode,v),c.return=p,p=c),i(p)):n(p,c)}return $}var $r=op(!0),lp=op(!1),Go={},_t=bn(Go),Ao=bn(Go),To=bn(Go);function Rn(e){if(e===Go)throw Error(P(174));return e}function mu(e,t){switch(ne(To,t),ne(Ao,e),ne(_t,Go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fa(t,e)}ie(_t),ne(_t,t)}function Ar(){ie(_t),ie(Ao),ie(To)}function ip(e){Rn(To.current);var t=Rn(_t.current),n=Fa(t,e.type);t!==n&&(ne(Ao,e),ne(_t,n))}function gu(e){Ao.current===e&&(ie(_t),ie(Ao))}var ce=bn(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function vu(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var $l=Kt.ReactCurrentDispatcher,ma=Kt.ReactCurrentBatchConfig,Fn=0,de=null,Ee=null,$e=null,ti=!1,co=!1,Po=0,x0=0;function Le(){throw Error(P(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function wu(e,t,n,r,o,l){if(Fn=l,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$l.current=e===null||e.memoizedState===null?b0:C0,e=n(r,o),co){l=0;do{if(co=!1,Po=0,25<=l)throw Error(P(301));l+=1,$e=Ee=null,t.updateQueue=null,$l.current=$0,e=n(r,o)}while(co)}if($l.current=ni,t=Ee!==null&&Ee.next!==null,Fn=0,$e=Ee=de=null,ti=!1,t)throw Error(P(300));return e}function xu(){var e=Po!==0;return Po=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?de.memoizedState=$e=e:$e=$e.next=e,$e}function pt(){if(Ee===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=$e===null?de.memoizedState:$e.next;if(t!==null)$e=t,Ee=e;else{if(e===null)throw Error(P(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},$e===null?de.memoizedState=$e=e:$e=$e.next=e}return $e}function Do(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=pt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var h=u.lane;if((Fn&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,i=r):s=s.next=f,de.lanes|=h,Un|=h}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,Et(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,de.lanes|=l,Un|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function va(e){var t=pt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Et(l,t.memoizedState)||(Ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ap(){}function sp(e,t){var n=de,r=pt(),o=t(),l=!Et(r.memoizedState,o);if(l&&(r.memoizedState=o,Ge=!0),r=r.queue,ku(dp.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,No(9,cp.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error(P(349));Fn&30||up(n,t,o)}return o}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,fp(t)&&pp(e)}function dp(e,t,n){return n(function(){fp(t)&&pp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function pp(e){var t=Gt(e,1);t!==null&&kt(t,e,1,-1)}function Fc(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t.queue=e,e=e.dispatch=E0.bind(null,de,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hp(){return pt().memoizedState}function Al(e,t,n,r){var o=Tt();de.flags|=e,o.memoizedState=No(1|t,n,void 0,r===void 0?null:r)}function bi(e,t,n,r){var o=pt();r=r===void 0?null:r;var l=void 0;if(Ee!==null){var i=Ee.memoizedState;if(l=i.destroy,r!==null&&yu(r,i.deps)){o.memoizedState=No(t,n,l,r);return}}de.flags|=e,o.memoizedState=No(1|t,n,l,r)}function Uc(e,t){return Al(8390656,8,e,t)}function ku(e,t){return bi(2048,8,e,t)}function mp(e,t){return bi(4,2,e,t)}function gp(e,t){return bi(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yp(e,t,n){return n=n!=null?n.concat([e]):null,bi(4,4,vp.bind(null,t,e),n)}function Su(){}function wp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kp(e,t,n){return Fn&21?(Et(n,t)||(n=bf(),de.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function k0(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),t()}finally{ee=n,ma.transition=r}}function Sp(){return pt().memoizedState}function S0(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ep(e))bp(t,n);else if(n=ep(e,t,n,r),n!==null){var o=Ue();kt(n,e,r,o),Cp(n,t,r)}}function E0(e,t,n){var r=mn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ep(e))bp(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Et(a,i)){var s=t.interleaved;s===null?(o.next=o,pu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ep(e,t,o,r),n!==null&&(o=Ue(),kt(n,e,r,o),Cp(n,t,r))}}function Ep(e){var t=e.alternate;return e===de||t!==null&&t===de}function bp(e,t){co=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}var ni={readContext:ft,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},b0={readContext:ft,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Al(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Al(4194308,4,e,t)},useInsertionEffect:function(e,t){return Al(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=S0.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:Su,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=k0.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=Tt();if(ue){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Pe===null)throw Error(P(349));Fn&30||up(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Uc(dp.bind(null,r,l,e),[e]),r.flags|=2048,No(9,cp.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Pe.identifierPrefix;if(ue){var n=Wt,r=Ut;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Po++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=x0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C0={readContext:ft,useCallback:wp,useContext:ft,useEffect:ku,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:ga,useRef:hp,useState:function(){return ga(Do)},useDebugValue:Su,useDeferredValue:function(e){var t=pt();return kp(t,Ee.memoizedState,e)},useTransition:function(){var e=ga(Do)[0],t=pt().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:sp,useId:Sp,unstable_isNewReconciler:!1},$0={readContext:ft,useCallback:wp,useContext:ft,useEffect:ku,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:xp,useReducer:va,useRef:hp,useState:function(){return va(Do)},useDebugValue:Su,useDeferredValue:function(e){var t=pt();return Ee===null?t.memoizedState=e:kp(t,Ee.memoizedState,e)},useTransition:function(){var e=va(Do)[0],t=pt().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:sp,useId:Sp,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=eg(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ya(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function $p(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oi||(oi=!0,xs=r),cs(e,t)},n}function Ap(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){cs(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){cs(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new A0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=F0.bind(null,e,t,n),t.then(e,e))}function Hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var T0=Kt.ReactCurrentOwner,Ge=!1;function Fe(e,t,n,r){t.child=e===null?lp(t,null,n,r):$r(t,e.child,n,r)}function Qc(e,t,n,r,o){n=n.render;var l=t.ref;return xr(t,o),r=wu(e,t,n,r,l,o),n=xu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(ue&&n&&au(t),t.flags|=1,Fe(e,t,r,o),t.child)}function Gc(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Du(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Tp(e,t,l,r,o)):(e=Nl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(i,r)&&e.ref===t.ref)return Yt(e,t,o)}return t.flags|=1,e=gn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Tp(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Eo(l,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Yt(e,t,o)}return ds(e,t,n,r,o)}function Pp(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(fr,qe),qe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(fr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ne(fr,qe),qe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ne(fr,qe),qe|=r;return Fe(e,t,o,n),t.child}function Dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,n,r,o){var l=Ke(n)?zn:ze.current;return l=br(t,l),xr(t,o),n=wu(e,t,n,r,l,o),r=xu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(ue&&r&&au(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Yc(e,t,n,r,o){if(Ke(n)){var l=!0;Yl(t)}else l=!1;if(xr(t,o),t.stateNode===null)Tl(e,t),rp(t,n,r),us(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=Ke(n)?zn:ze.current,u=br(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&zc(t,i,r,u),nn=!1;var m=t.memoizedState;i.state=m,ql(t,r,i,o),s=t.memoizedState,a!==r||m!==s||Ye.current||nn?(typeof h=="function"&&(ss(t,n,h,r),s=t.memoizedState),(a=nn||Mc(t,n,a,r,m,s,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,tp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:vt(t.type,a),i.props=u,f=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=ft(s):(s=Ke(n)?zn:ze.current,s=br(t,s));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||m!==s)&&zc(t,i,r,s),nn=!1,m=t.memoizedState,i.state=m,ql(t,r,i,o);var y=t.memoizedState;a!==f||m!==y||Ye.current||nn?(typeof w=="function"&&(ss(t,n,w,r),y=t.memoizedState),(u=nn||Mc(t,n,u,r,m,y,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return fs(e,t,n,r,l,o)}function fs(e,t,n,r,o,l){Dp(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Rc(t,n,!1),Yt(e,t,l);r=t.stateNode,T0.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=$r(t,e.child,null,l),t.child=$r(t,null,a,l)):Fe(e,t,a,l),t.memoizedState=r.state,o&&Rc(t,n,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?_c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_c(e,t.context,!1),mu(e,t.containerInfo)}function Kc(e,t,n,r,o){return Cr(),uu(o),t.flags|=256,Fe(e,t,n,r),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function _p(e,t,n){var r=t.pendingProps,o=ce.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ce,o&1),e===null)return is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Ai(i,r,0,null),e=jn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=hs(n),t.memoizedState=ps,e):Eu(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return P0(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=gn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=gn(a,l):(l=jn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?hs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ps,r}return l=e.child,e=l.sibling,r=gn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eu(e,t){return t=Ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function cl(e,t,n,r){return r!==null&&uu(r),$r(t,e.child,null,n),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function P0(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ya(Error(P(422))),cl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ai({mode:"visible",children:r.children},o,0,null),l=jn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&$r(t,e.child,null,i),t.child.memoizedState=hs(i),t.memoizedState=ps,l);if(!(t.mode&1))return cl(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(P(419)),r=ya(l,r,void 0),cl(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ge||a){if(r=Pe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Gt(e,o),kt(r,e,o,-1))}return Pu(),r=ya(Error(P(421))),cl(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=U0.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,et=fn(o.nextSibling),tt=t,ue=!0,wt=null,e!==null&&(at[st++]=Ut,at[st++]=Wt,at[st++]=Bn,Ut=e.id,Wt=e.overflow,Bn=t),t=Eu(t,r.children),t.flags|=4096,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),as(e.return,t,n)}function wa(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Rp(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Fe(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ei(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),wa(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ei(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}wa(t,!0,n,null,l);break;case"together":wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function D0(e,t,n){switch(t.tag){case 3:Np(t),Cr();break;case 5:ip(t);break;case 1:Ke(t.type)&&Yl(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(Zl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?_p(e,t,n):(ne(ce,ce.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ne(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Pp(e,t,n)}return Yt(e,t,n)}var Ip,ms,Lp,Op;Ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ms=function(){};Lp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rn(_t.current);var l=null;switch(n){case"input":o=ja(e,o),r=ja(e,r),l=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),l=[];break;case"textarea":o=Ba(e,o),r=Ba(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ql)}Ua(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(go.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(go.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Op=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function N0(e,t,n){var r=t.pendingProps;switch(su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ke(t.type)&&Gl(),Oe(t),null;case 3:return r=t.stateNode,Ar(),ie(Ye),ie(ze),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(Es(wt),wt=null))),ms(e,t),Oe(t),null;case 5:gu(t);var o=Rn(To.current);if(n=t.type,e!==null&&t.stateNode!=null)Lp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Oe(t),null}if(e=Rn(_t.current),sl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Dt]=t,r[$o]=l,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(o=0;o<to.length;o++)oe(to[o],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":lc(r,l),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},oe("invalid",r);break;case"textarea":ac(r,l),oe("invalid",r)}Ua(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&al(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&al(r.textContent,a,e),o=["children",""+a]):go.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&oe("scroll",r)}switch(n){case"input":qo(r),ic(r,l,!0);break;case"textarea":qo(r),sc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ql)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Dt]=t,e[$o]=r,Ip(e,t,!1,!1),t.stateNode=e;e:{switch(i=Wa(n,r),n){case"dialog":oe("cancel",e),oe("close",e),o=r;break;case"iframe":case"object":case"embed":oe("load",e),o=r;break;case"video":case"audio":for(o=0;o<to.length;o++)oe(to[o],e);o=r;break;case"source":oe("error",e),o=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),o=r;break;case"details":oe("toggle",e),o=r;break;case"input":lc(e,r),o=ja(e,r),oe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),oe("invalid",e);break;case"textarea":ac(e,r),o=Ba(e,r),oe("invalid",e);break;default:o=r}Ua(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?ff(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cf(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vo(e,s):typeof s=="number"&&vo(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(go.hasOwnProperty(l)?s!=null&&l==="onScroll"&&oe("scroll",e):s!=null&&Gs(e,l,s,i))}switch(n){case"input":qo(e),ic(e,r,!1);break;case"textarea":qo(e),sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?gr(e,!!r.multiple,l,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Op(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Rn(To.current),Rn(_t.current),sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(l=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:al(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ie(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&et!==null&&t.mode&1&&!(t.flags&128))qf(),Cr(),t.flags|=98560,l=!1;else if(l=sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[Dt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),l=!1}else wt!==null&&(Es(wt),wt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?be===0&&(be=3):Pu())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Ar(),ms(e,t),e===null&&bo(t.stateNode.containerInfo),Oe(t),null;case 10:return fu(t.type._context),Oe(t),null;case 17:return Ke(t.type)&&Gl(),Oe(t),null;case 19:if(ie(ce),l=t.memoizedState,l===null)return Oe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Yr(l,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ei(e),i!==null){for(t.flags|=128,Yr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ce,ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&ye()>Pr&&(t.flags|=128,r=!0,Yr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ei(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ue)return Oe(t),null}else 2*ye()-l.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,Yr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ye(),t.sibling=null,n=ce.current,ne(ce,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function _0(e,t){switch(su(t),t.tag){case 1:return Ke(t.type)&&Gl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),ie(Ye),ie(ze),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(ie(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ce),null;case 4:return Ar(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var dl=!1,Me=!1,R0=typeof WeakSet=="function"?WeakSet:Set,I=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function gs(e,t,n){try{n()}catch(r){he(e,t,r)}}var Zc=!1;function I0(e,t){if(qa=Wl,e=Bf(),iu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,h=0,f=e,m=null;t:for(;;){for(var w;f!==n||o!==0&&f.nodeType!==3||(a=i+o),f!==l||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===e)break t;if(m===n&&++u===o&&(a=i),m===l&&++h===r&&(s=i),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(es={focusedElem:e,selectionRange:n},Wl=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,$=y.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:vt(t.type,k),$);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){he(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=Zc,Zc=!1,y}function fo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&gs(t,n,l)}o=o.next}while(o!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jp(e){var t=e.alternate;t!==null&&(e.alternate=null,jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[$o],delete t[rs],delete t[g0],delete t[v0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mp(e){return e.tag===5||e.tag===3||e.tag===4}function Jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ql));else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}function ws(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}var Ne=null,yt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)zp(e,t,n),n=n.sibling}function zp(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:Me||dr(n,t);case 6:var r=Ne,o=yt;Ne=null,Zt(e,t,n),Ne=r,yt=o,Ne!==null&&(yt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(yt?(e=Ne,n=n.stateNode,e.nodeType===8?fa(e.parentNode,n):e.nodeType===1&&fa(e,n),ko(e)):fa(Ne,n.stateNode));break;case 4:r=Ne,o=yt,Ne=n.stateNode.containerInfo,yt=!0,Zt(e,t,n),Ne=r,yt=o;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&gs(n,t,i),o=o.next}while(o!==r)}Zt(e,t,n);break;case 1:if(!Me&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Zt(e,t,n),Me=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new R0),t.forEach(function(r){var o=W0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,yt=!1;break e;case 3:Ne=a.stateNode.containerInfo,yt=!0;break e;case 4:Ne=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Ne===null)throw Error(P(160));zp(l,i,o),Ne=null,yt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),$t(e),r&4){try{fo(3,e,e.return),Ci(3,e)}catch(k){he(e,e.return,k)}try{fo(5,e,e.return)}catch(k){he(e,e.return,k)}}break;case 1:mt(t,e),$t(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(mt(t,e),$t(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var o=e.stateNode;try{vo(o,"")}catch(k){he(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&af(o,l),Wa(a,i);var u=Wa(a,l);for(i=0;i<s.length;i+=2){var h=s[i],f=s[i+1];h==="style"?ff(o,f):h==="dangerouslySetInnerHTML"?cf(o,f):h==="children"?vo(o,f):Gs(o,h,f,u)}switch(a){case"input":Ma(o,l);break;case"textarea":sf(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?gr(o,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?gr(o,!!l.multiple,l.defaultValue,!0):gr(o,!!l.multiple,l.multiple?[]:"",!1))}o[$o]=l}catch(k){he(e,e.return,k)}}break;case 6:if(mt(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){he(e,e.return,k)}}break;case 3:if(mt(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(t.containerInfo)}catch(k){he(e,e.return,k)}break;case 4:mt(t,e),$t(e);break;case 13:mt(t,e),$t(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||($u=ye())),r&4&&qc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||h,mt(t,e),Me=u):mt(t,e),$t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(f=I=h;I!==null;){switch(m=I,w=m.child,m.tag){case 0:case 11:case 14:case 15:fo(4,m,m.return);break;case 1:dr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){he(r,n,k)}}break;case 5:dr(m,m.return);break;case 22:if(m.memoizedState!==null){td(f);continue}}w!==null?(w.return=m,I=w):td(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=df("display",i))}catch(k){he(e,e.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){he(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(t,e),$t(e),r&4&&qc(e);break;case 21:break;default:mt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vo(o,""),r.flags&=-33);var l=Jc(e);ws(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Jc(e);ys(e,a,i);break;default:throw Error(P(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L0(e,t,n){I=e,Fp(e)}function Fp(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||dl;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Me;a=dl;var u=Me;if(dl=i,(Me=s)&&!u)for(I=o;I!==null;)i=I,s=i.child,i.tag===22&&i.memoizedState!==null?nd(o):s!==null?(s.return=i,I=s):nd(o);for(;l!==null;)I=l,Fp(l),l=l.sibling;I=o,dl=a,Me=u}ed(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,I=l):ed(e)}}function ed(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&jc(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jc(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Me||t.flags&512&&vs(t)}catch(m){he(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function td(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function nd(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){he(t,o,s)}}var l=t.return;try{vs(t)}catch(s){he(t,l,s)}break;case 5:var i=t.return;try{vs(t)}catch(s){he(t,i,s)}}}catch(s){he(t,t.return,s)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var O0=Math.ceil,ri=Kt.ReactCurrentDispatcher,bu=Kt.ReactCurrentOwner,dt=Kt.ReactCurrentBatchConfig,X=0,Pe=null,ke=null,_e=0,qe=0,fr=bn(0),be=0,_o=null,Un=0,$i=0,Cu=0,po=null,Qe=null,$u=0,Pr=1/0,zt=null,oi=!1,xs=null,hn=null,fl=!1,an=null,li=0,ho=0,ks=null,Pl=-1,Dl=0;function Ue(){return X&6?ye():Pl!==-1?Pl:Pl=ye()}function mn(e){return e.mode&1?X&2&&_e!==0?_e&-_e:w0.transition!==null?(Dl===0&&(Dl=bf()),Dl):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e):1}function kt(e,t,n,r){if(50<ho)throw ho=0,ks=null,Error(P(185));Ho(e,n,r),(!(X&2)||e!==Pe)&&(e===Pe&&(!(X&2)&&($i|=n),be===4&&on(e,_e)),Xe(e,r),n===1&&X===0&&!(t.mode&1)&&(Pr=ye()+500,Si&&Cn()))}function Xe(e,t){var n=e.callbackNode;wg(e,t);var r=Ul(e,e===Pe?_e:0);if(r===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dc(n),t===1)e.tag===0?y0(rd.bind(null,e)):Xf(rd.bind(null,e)),h0(function(){!(X&6)&&Cn()}),n=null;else{switch(Cf(r)){case 1:n=Js;break;case 4:n=Sf;break;case 16:n=Fl;break;case 536870912:n=Ef;break;default:n=Fl}n=Kp(n,Up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Up(e,t){if(Pl=-1,Dl=0,X&6)throw Error(P(327));var n=e.callbackNode;if(kr()&&e.callbackNode!==n)return null;var r=Ul(e,e===Pe?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ii(e,r);else{t=r;var o=X;X|=2;var l=Hp();(Pe!==e||_e!==t)&&(zt=null,Pr=ye()+500,On(e,t));do try{z0();break}catch(a){Wp(e,a)}while(!0);du(),ri.current=l,X=o,ke!==null?t=0:(Pe=null,_e=0,t=be)}if(t!==0){if(t===2&&(o=Ya(e),o!==0&&(r=o,t=Ss(e,o))),t===1)throw n=_o,On(e,0),on(e,r),Xe(e,ye()),n;if(t===6)on(e,r);else{if(o=e.current.alternate,!(r&30)&&!j0(o)&&(t=ii(e,r),t===2&&(l=Ya(e),l!==0&&(r=l,t=Ss(e,l))),t===1))throw n=_o,On(e,0),on(e,r),Xe(e,ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Dn(e,Qe,zt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=$u+500-ye(),10<t)){if(Ul(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ns(Dn.bind(null,e,Qe,zt),t);break}Dn(e,Qe,zt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-xt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*O0(r/1960))-r,10<r){e.timeoutHandle=ns(Dn.bind(null,e,Qe,zt),r);break}Dn(e,Qe,zt);break;case 5:Dn(e,Qe,zt);break;default:throw Error(P(329))}}}return Xe(e,ye()),e.callbackNode===n?Up.bind(null,e):null}function Ss(e,t){var n=po;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=ii(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Es(t)),e}function Es(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function j0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Et(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Cu,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function rd(e){if(X&6)throw Error(P(327));kr();var t=Ul(e,0);if(!(t&1))return Xe(e,ye()),null;var n=ii(e,t);if(e.tag!==0&&n===2){var r=Ya(e);r!==0&&(t=r,n=Ss(e,r))}if(n===1)throw n=_o,On(e,0),on(e,t),Xe(e,ye()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Qe,zt),Xe(e,ye()),null}function Au(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Pr=ye()+500,Si&&Cn())}}function Wn(e){an!==null&&an.tag===0&&!(X&6)&&kr();var t=X;X|=1;var n=dt.transition,r=ee;try{if(dt.transition=null,ee=1,e)return e()}finally{ee=r,dt.transition=n,X=t,!(X&6)&&Cn()}}function Tu(){qe=fr.current,ie(fr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,p0(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gl();break;case 3:Ar(),ie(Ye),ie(ze),vu();break;case 5:gu(r);break;case 4:Ar();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:fu(r.type._context);break;case 22:case 23:Tu()}n=n.return}if(Pe=e,ke=e=gn(e.current,null),_e=qe=t,be=0,_o=null,Cu=$i=Un=0,Qe=po=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}_n=null}return e}function Wp(e,t){do{var n=ke;try{if(du(),$l.current=ni,ti){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ti=!1}if(Fn=0,$e=Ee=de=null,co=!1,Po=0,bu.current=null,n===null||n.return===null){be=1,_o=t,ke=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=_e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Hc(i);if(w!==null){w.flags&=-257,Vc(w,i,a,l,t),w.mode&1&&Wc(l,u,t),t=w,s=u;var y=t.updateQueue;if(y===null){var k=new Set;k.add(s),t.updateQueue=k}else y.add(s);break e}else{if(!(t&1)){Wc(l,u,t),Pu();break e}s=Error(P(426))}}else if(ue&&a.mode&1){var $=Hc(i);if($!==null){!($.flags&65536)&&($.flags|=256),Vc($,i,a,l,t),uu(Tr(s,a));break e}}l=s=Tr(s,a),be!==4&&(be=2),po===null?po=[l]:po.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=$p(l,s,t);Oc(l,p);break e;case 1:a=s;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(hn===null||!hn.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Ap(l,a,t);Oc(l,v);break e}}l=l.return}while(l!==null)}Qp(n)}catch(x){t=x,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Hp(){var e=ri.current;return ri.current=ni,e===null?ni:e}function Pu(){(be===0||be===3||be===2)&&(be=4),Pe===null||!(Un&268435455)&&!($i&268435455)||on(Pe,_e)}function ii(e,t){var n=X;X|=2;var r=Hp();(Pe!==e||_e!==t)&&(zt=null,On(e,t));do try{M0();break}catch(o){Wp(e,o)}while(!0);if(du(),X=n,ri.current=r,ke!==null)throw Error(P(261));return Pe=null,_e=0,be}function M0(){for(;ke!==null;)Vp(ke)}function z0(){for(;ke!==null&&!cg();)Vp(ke)}function Vp(e){var t=Yp(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Qp(e):ke=t,bu.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_0(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,ke=null;return}}else if(n=N0(n,t,qe),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);be===0&&(be=5)}function Dn(e,t,n){var r=ee,o=dt.transition;try{dt.transition=null,ee=1,B0(e,t,n,r)}finally{dt.transition=o,ee=r}return null}function B0(e,t,n,r){do kr();while(an!==null);if(X&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(xg(e,l),e===Pe&&(ke=Pe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,Kp(Fl,function(){return kr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=dt.transition,dt.transition=null;var i=ee;ee=1;var a=X;X|=4,bu.current=null,I0(e,n),Bp(n,e),i0(es),Wl=!!qa,es=qa=null,e.current=n,L0(n),dg(),X=a,ee=i,dt.transition=l}else e.current=n;if(fl&&(fl=!1,an=e,li=o),l=e.pendingLanes,l===0&&(hn=null),hg(n.stateNode),Xe(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(oi)throw oi=!1,e=xs,xs=null,e;return li&1&&e.tag!==0&&kr(),l=e.pendingLanes,l&1?e===ks?ho++:(ho=0,ks=e):ho=0,Cn(),null}function kr(){if(an!==null){var e=Cf(li),t=dt.transition,n=ee;try{if(dt.transition=null,ee=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,li=0,X&6)throw Error(P(331));var o=X;for(X|=4,I=e.current;I!==null;){var l=I,i=l.child;if(I.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(I=u;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:fo(8,h,l)}var f=h.child;if(f!==null)f.return=h,I=f;else for(;I!==null;){h=I;var m=h.sibling,w=h.return;if(jp(h),h===u){I=null;break}if(m!==null){m.return=w,I=m;break}I=w}}}var y=l.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var $=k.sibling;k.sibling=null,k=$}while(k!==null)}}I=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,I=i;else e:for(;I!==null;){if(l=I,l.flags&2048)switch(l.tag){case 0:case 11:case 15:fo(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,I=p;break e}I=l.return}}var c=e.current;for(I=c;I!==null;){i=I;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,I=d;else e:for(i=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ci(9,a)}}catch(x){he(a,a.return,x)}if(a===i){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(X=o,Cn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{ee=n,dt.transition=t}}return!1}function od(e,t,n){t=Tr(n,t),t=$p(e,t,1),e=pn(e,t,1),t=Ue(),e!==null&&(Ho(e,1,t),Xe(e,t))}function he(e,t,n){if(e.tag===3)od(e,e,n);else for(;t!==null;){if(t.tag===3){od(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=Tr(n,e),e=Ap(t,e,1),t=pn(t,e,1),e=Ue(),t!==null&&(Ho(t,1,e),Xe(t,e));break}}t=t.return}}function F0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(_e&n)===n&&(be===4||be===3&&(_e&130023424)===_e&&500>ye()-$u?On(e,0):Cu|=n),Xe(e,t)}function Gp(e,t){t===0&&(e.mode&1?(t=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):t=1);var n=Ue();e=Gt(e,t),e!==null&&(Ho(e,t,n),Xe(e,n))}function U0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gp(e,n)}function W0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Gp(e,n)}var Yp;Yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,D0(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,ue&&t.flags&1048576&&Zf(t,Xl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tl(e,t),e=t.pendingProps;var o=br(t,ze.current);xr(t,n),o=wu(null,t,r,e,o,n);var l=xu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(l=!0,Yl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hu(t),o.updater=Ei,t.stateNode=o,o._reactInternals=t,us(t,r,e,n),t=fs(null,t,r,!0,l,n)):(t.tag=0,ue&&l&&au(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=V0(r),e=vt(r,e),o){case 0:t=ds(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Gc(null,t,r,vt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),ds(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Yc(e,t,r,o,n);case 3:e:{if(Np(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,o=l.element,tp(e,t),ql(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Tr(Error(P(423)),t),t=Kc(e,t,r,n,o);break e}else if(r!==o){o=Tr(Error(P(424)),t),t=Kc(e,t,r,n,o);break e}else for(et=fn(t.stateNode.containerInfo.firstChild),tt=t,ue=!0,wt=null,n=lp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===o){t=Yt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return ip(t),e===null&&is(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ts(r,o)?i=null:l!==null&&ts(r,l)&&(t.flags|=32),Dp(e,t),Fe(e,t,i,n),t.child;case 6:return e===null&&is(t),null;case 13:return _p(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Qc(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,ne(Zl,r._currentValue),r._currentValue=i,l!==null)if(Et(l.value,i)){if(l.children===o.children&&!Ye.current){t=Yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Ht(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),as(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(P(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),as(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,xr(t,n),o=ft(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=vt(r,t.pendingProps),o=vt(r.type,o),Gc(e,t,r,o,n);case 15:return Tp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Tl(e,t),t.tag=1,Ke(r)?(e=!0,Yl(t)):e=!1,xr(t,n),rp(t,r,o),us(t,r,o,n),fs(null,t,r,!0,e,n);case 19:return Rp(e,t,n);case 22:return Pp(e,t,n)}throw Error(P(156,t.tag))};function Kp(e,t){return kf(e,t)}function H0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new H0(e,t,n,r)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function V0(e){if(typeof e=="function")return Du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ks)return 11;if(e===Xs)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Du(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nr:return jn(n.children,o,l,t);case Ys:i=8,o|=8;break;case Ra:return e=ct(12,n,t,o|2),e.elementType=Ra,e.lanes=l,e;case Ia:return e=ct(13,n,t,o),e.elementType=Ia,e.lanes=l,e;case La:return e=ct(19,n,t,o),e.elementType=La,e.lanes=l,e;case rf:return Ai(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tf:i=10;break e;case nf:i=9;break e;case Ks:i=11;break e;case Xs:i=14;break e;case tn:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=ct(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function jn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Ai(e,t,n,r){return e=ct(22,e,r,t),e.elementType=rf,e.lanes=n,e.stateNode={isHidden:!1},e}function xa(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function ka(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Q0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ta(0),this.expirationTimes=ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ta(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nu(e,t,n,r,o,l,i,a,s){return e=new Q0(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ct(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(l),e}function G0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return xn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Kf(e,n,t)}return t}function Zp(e,t,n,r,o,l,i,a,s){return e=Nu(n,r,!0,e,o,l,i,a,s),e.context=Xp(null),n=e.current,r=Ue(),o=mn(n),l=Ht(r,o),l.callback=t??null,pn(n,l,o),e.current.lanes=o,Ho(e,o,r),Xe(e,r),e}function Ti(e,t,n,r){var o=t.current,l=Ue(),i=mn(o);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(o,t,i),e!==null&&(kt(e,o,i,l),Cl(e,o,i)),i}function ai(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _u(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function Y0(){return null}var Jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}Pi.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ti(e,t,null,null)};Pi.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){Ti(null,e,null,null)}),t[Qt]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Df(e)}};function Iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function K0(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=ai(i);l.call(u)}}var i=Zp(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=i,e[Qt]=i.current,bo(e.nodeType===8?e.parentNode:e),Wn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ai(s);a.call(u)}}var s=Nu(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=s,e[Qt]=s.current,bo(e.nodeType===8?e.parentNode:e),Wn(function(){Ti(t,s,n,r)}),s}function Ni(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=ai(i);a.call(s)}}Ti(t,i,e,o)}else i=K0(n,t,e,o,r);return ai(i)}$f=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=eo(t.pendingLanes);n!==0&&(qs(t,n|1),Xe(t,ye()),!(X&6)&&(Pr=ye()+500,Cn()))}break;case 13:Wn(function(){var r=Gt(e,1);if(r!==null){var o=Ue();kt(r,e,1,o)}}),_u(e,1)}};eu=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Ue();kt(t,e,134217728,n)}_u(e,134217728)}};Af=function(e){if(e.tag===13){var t=mn(e),n=Gt(e,t);if(n!==null){var r=Ue();kt(n,e,t,r)}_u(e,t)}};Tf=function(){return ee};Pf=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Va=function(e,t,n){switch(t){case"input":if(Ma(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ki(r);if(!o)throw Error(P(90));lf(r),Ma(r,o)}}}break;case"textarea":sf(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};mf=Au;gf=Wn;var X0={usingClientEntryPoint:!1,Events:[Qo,ir,ki,pf,hf,Au]},Kr={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Z0={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||Y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{vi=pl.inject(Z0),Nt=pl}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(t))throw Error(P(200));return G0(e,t,null,n)};ot.createRoot=function(e,t){if(!Iu(e))throw Error(P(299));var n=!1,r="",o=Jp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nu(e,1,!1,null,null,n,!1,r,o),e[Qt]=t.current,bo(e.nodeType===8?e.parentNode:e),new Ru(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=wf(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Wn(e)};ot.hydrate=function(e,t,n){if(!Di(t))throw Error(P(200));return Ni(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Iu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Jp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Zp(t,null,e,1,n??null,o,!1,l,i),e[Qt]=t.current,bo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Pi(t)};ot.render=function(e,t,n){if(!Di(t))throw Error(P(200));return Ni(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Di(e))throw Error(P(40));return e._reactRootContainer?(Wn(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};ot.unstable_batchedUpdates=Au;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Di(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ni(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function qp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qp)}catch(e){console.error(e)}}qp(),Xd.exports=ot;var _i=Xd.exports,ad=_i;Na.createRoot=ad.createRoot,Na.hydrateRoot=ad.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const sd="popstate";function J0(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return bs("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:si(o)}return ev(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q0(){return Math.random().toString(36).substr(2,8)}function ud(e,t){return{usr:e.state,key:e.key,idx:t}}function bs(e,t,n,r){return n===void 0&&(n=null),Ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zr(t):t,{state:n,key:t&&t.key||r||q0()})}function si(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ev(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=sn.Pop,s=null,u=h();u==null&&(u=0,i.replaceState(Ro({},i.state,{idx:u}),""));function h(){return(i.state||{idx:null}).idx}function f(){a=sn.Pop;let $=h(),p=$==null?null:$-u;u=$,s&&s({action:a,location:k.location,delta:p})}function m($,p){a=sn.Push;let c=bs(k.location,$,p);n&&n(c,$),u=h()+1;let d=ud(c,u),v=k.createHref(c);try{i.pushState(d,"",v)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;o.location.assign(v)}l&&s&&s({action:a,location:k.location,delta:1})}function w($,p){a=sn.Replace;let c=bs(k.location,$,p);n&&n(c,$),u=h();let d=ud(c,u),v=k.createHref(c);i.replaceState(d,"",v),l&&s&&s({action:a,location:k.location,delta:0})}function y($){let p=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof $=="string"?$:si($);return ge(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let k={get action(){return a},get location(){return e(o,i)},listen($){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(sd,f),s=$,()=>{o.removeEventListener(sd,f),s=null}},createHref($){return t(o,$)},createURL:y,encodeLocation($){let p=y($);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:w,go($){return i.go($)}};return k}var cd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cd||(cd={}));function tv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zr(t):t,o=Dr(r.pathname||"/",n);if(o==null)return null;let l=eh(e);nv(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=dv(l[a],pv(o));return i}function eh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(ge(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=vn([r,s.relativePath]),h=n.concat(s);l.children&&l.children.length>0&&(ge(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),eh(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:uv(u,l.index),routesMeta:h})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of th(l.path))o(l,i,s)}),t}function th(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=th(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function nv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rv=/^:[\w-]+$/,ov=3,lv=2,iv=1,av=10,sv=-2,dd=e=>e==="*";function uv(e,t){let n=e.split("/"),r=n.length;return n.some(dd)&&(r+=sv),t&&(r+=lv),n.filter(o=>!dd(o)).reduce((o,l)=>o+(rv.test(l)?ov:l===""?iv:av),r)}function cv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function dv(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",h=Cs({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!h)return null;Object.assign(r,h.params);let f=a.route;l.push({params:r,pathname:vn([o,h.pathname]),pathnameBase:yv(vn([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=vn([o,h.pathnameBase]))}return l}function Cs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,h,f)=>{let{paramName:m,isOptional:w}=h;if(m==="*"){let k=a[f]||"";i=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const y=a[f];return w&&!y?u[m]=void 0:u[m]=hv(y||"",m),u},{}),pathname:l,pathnameBase:i,pattern:e}}function fv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function pv(e){try{return decodeURI(e)}catch(t){return Lu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hv(e,t){try{return decodeURIComponent(e)}catch(n){return Lu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Dr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?zr(e):e;return{pathname:n?n.startsWith("/")?n:gv(n,t):t,search:wv(r),hash:xv(o)}}function gv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function nh(e,t){let n=vv(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=zr(e):(o=Ro({},e),ge(!o.pathname||!o.pathname.includes("?"),Sa("?","pathname","search",o)),ge(!o.pathname||!o.pathname.includes("#"),Sa("#","pathname","hash",o)),ge(!o.search||!o.search.includes("#"),Sa("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}a=f>=0?t[f]:"/"}let s=mv(o,a),u=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),yv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function kv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const oh=["post","put","patch","delete"];new Set(oh);const Sv=["get",...oh];new Set(Sv);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}const Ri=g.createContext(null),lh=g.createContext(null),$n=g.createContext(null),Ii=g.createContext(null),Kn=g.createContext({outlet:null,matches:[],isDataRoute:!1}),ih=g.createContext(null);function Ev(e,t){let{relative:n}=t===void 0?{}:t;Yo()||ge(!1);let{basename:r,navigator:o}=g.useContext($n),{hash:l,pathname:i,search:a}=Li(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:vn([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Yo(){return g.useContext(Ii)!=null}function Ko(){return Yo()||ge(!1),g.useContext(Ii).location}function ah(e){g.useContext($n).static||g.useLayoutEffect(e)}function bv(){let{isDataRoute:e}=g.useContext(Kn);return e?jv():Cv()}function Cv(){Yo()||ge(!1);let e=g.useContext(Ri),{basename:t,future:n,navigator:r}=g.useContext($n),{matches:o}=g.useContext(Kn),{pathname:l}=Ko(),i=JSON.stringify(nh(o,n.v7_relativeSplatPath)),a=g.useRef(!1);return ah(()=>{a.current=!0}),g.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=rh(u,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:vn([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,i,l,e])}function Li(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext($n),{matches:o}=g.useContext(Kn),{pathname:l}=Ko(),i=JSON.stringify(nh(o,r.v7_relativeSplatPath));return g.useMemo(()=>rh(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function $v(e,t){return Av(e,t)}function Av(e,t,n,r){Yo()||ge(!1);let{navigator:o}=g.useContext($n),{matches:l}=g.useContext(Kn),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Ko(),h;if(t){var f;let $=typeof t=="string"?zr(t):t;s==="/"||(f=$.pathname)!=null&&f.startsWith(s)||ge(!1),h=$}else h=u;let m=h.pathname||"/",w=s==="/"?m:m.slice(s.length)||"/",y=tv(e,{pathname:w}),k=_v(y&&y.map($=>Object.assign({},$,{params:Object.assign({},a,$.params),pathname:vn([s,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?s:vn([s,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),l,n,r);return t&&k?g.createElement(Ii.Provider,{value:{location:Io({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:sn.Pop}},k):k}function Tv(){let e=Ov(),t=kv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:o},n):null,null)}const Pv=g.createElement(Tv,null);class Dv extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(Kn.Provider,{value:this.props.routeContext},g.createElement(ih.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nv(e){let{routeContext:t,match:n,children:r}=e,o=g.useContext(Ri);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Kn.Provider,{value:t},r)}function _v(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let h=i.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));h>=0||ge(!1),i=i.slice(0,Math.min(i.length,h+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:m,errors:w}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||y){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((h,f,m)=>{let w,y=!1,k=null,$=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||Pv,s&&(u<0&&m===0?(Mv("route-fallback",!1),y=!0,$=null):u===m&&(y=!0,$=f.route.hydrateFallbackElement||null)));let p=t.concat(i.slice(0,m+1)),c=()=>{let d;return w?d=k:y?d=$:f.route.Component?d=g.createElement(f.route.Component,null):f.route.element?d=f.route.element:d=h,g.createElement(Nv,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:d})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?g.createElement(Dv,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var sh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sh||{}),ui=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ui||{});function Rv(e){let t=g.useContext(Ri);return t||ge(!1),t}function Iv(e){let t=g.useContext(lh);return t||ge(!1),t}function Lv(e){let t=g.useContext(Kn);return t||ge(!1),t}function uh(e){let t=Lv(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function Ov(){var e;let t=g.useContext(ih),n=Iv(ui.UseRouteError),r=uh(ui.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function jv(){let{router:e}=Rv(sh.UseNavigateStable),t=uh(ui.UseNavigateStable),n=g.useRef(!1);return ah(()=>{n.current=!0}),g.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Io({fromRouteId:t},l)))},[e,t])}const fd={};function Mv(e,t,n){!t&&!fd[e]&&(fd[e]=!0)}function no(e){ge(!1)}function zv(e){let{basename:t="/",children:n=null,location:r,navigationType:o=sn.Pop,navigator:l,static:i=!1,future:a}=e;Yo()&&ge(!1);let s=t.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:s,navigator:l,static:i,future:Io({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=zr(r));let{pathname:h="/",search:f="",hash:m="",state:w=null,key:y="default"}=r,k=g.useMemo(()=>{let $=Dr(h,s);return $==null?null:{location:{pathname:$,search:f,hash:m,state:w,key:y},navigationType:o}},[s,h,f,m,w,y,o]);return k==null?null:g.createElement($n.Provider,{value:u},g.createElement(Ii.Provider,{children:n,value:k}))}function Bv(e){let{children:t,location:n}=e;return $v($s(t),n)}new Promise(()=>{});function $s(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,o)=>{if(!g.isValidElement(r))return;let l=[...t,o];if(r.type===g.Fragment){n.push.apply(n,$s(r.props.children,l));return}r.type!==no&&ge(!1),!r.props.index||!r.props.children||ge(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=$s(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ci.apply(this,arguments)}function ch(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Fv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Uv(e,t){return e.button===0&&(!t||t==="_self")&&!Fv(e)}const Wv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Hv=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Vv=g.createContext({isTransitioning:!1}),Qv="startTransition",pd=Um[Qv];function Gv(e){let{basename:t,children:n,future:r,window:o}=e,l=g.useRef();l.current==null&&(l.current=J0({window:o,v5Compat:!0}));let i=l.current,[a,s]=g.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},h=g.useCallback(f=>{u&&pd?pd(()=>s(f)):s(f)},[s,u]);return g.useLayoutEffect(()=>i.listen(h),[i,h]),g.createElement(zv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xv=g.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:h,unstable_viewTransition:f}=t,m=ch(t,Wv),{basename:w}=g.useContext($n),y,k=!1;if(typeof u=="string"&&Kv.test(u)&&(y=u,Yv))try{let d=new URL(window.location.href),v=u.startsWith("//")?new URL(d.protocol+u):new URL(u),x=Dr(v.pathname,w);v.origin===d.origin&&x!=null?u=x+v.search+v.hash:k=!0}catch{}let $=Ev(u,{relative:o}),p=Jv(u,{replace:i,state:a,target:s,preventScrollReset:h,relative:o,unstable_viewTransition:f});function c(d){r&&r(d),d.defaultPrevented||p(d)}return g.createElement("a",ci({},m,{href:y||$,onClick:k||l?r:c,ref:n,target:s}))}),Sr=g.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:l="",end:i=!1,style:a,to:s,unstable_viewTransition:u,children:h}=t,f=ch(t,Hv),m=Li(s,{relative:f.relative}),w=Ko(),y=g.useContext(lh),{navigator:k,basename:$}=g.useContext($n),p=y!=null&&qv(m)&&u===!0,c=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,d=w.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(d=d.toLowerCase(),v=v?v.toLowerCase():null,c=c.toLowerCase()),v&&$&&(v=Dr(v,$)||v);const x=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let b=d===c||!i&&d.startsWith(c)&&d.charAt(x)==="/",S=v!=null&&(v===c||!i&&v.startsWith(c)&&v.charAt(c.length)==="/"),D={isActive:b,isPending:S,isTransitioning:p},j=b?r:void 0,L;typeof l=="function"?L=l(D):L=[l,b?"active":null,S?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let Q=typeof a=="function"?a(D):a;return g.createElement(Xv,ci({},f,{"aria-current":j,className:L,ref:n,style:Q,to:s,unstable_viewTransition:u}),typeof h=="function"?h(D):h)});var As;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(As||(As={}));var hd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hd||(hd={}));function Zv(e){let t=g.useContext(Ri);return t||ge(!1),t}function Jv(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a}=t===void 0?{}:t,s=bv(),u=Ko(),h=Li(e,{relative:i});return g.useCallback(f=>{if(Uv(f,n)){f.preventDefault();let m=r!==void 0?r:si(u)===si(h);s(e,{replace:m,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a})}},[u,s,h,r,o,n,e,l,i,a])}function qv(e,t){t===void 0&&(t={});let n=g.useContext(Vv);n==null&&ge(!1);let{basename:r}=Zv(As.useViewTransitionState),o=Li(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=Dr(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Dr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cs(o.pathname,i)!=null||Cs(o.pathname,l)!=null}var dh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var l="",i=0;i<arguments.length;i++){var a=arguments[i];a&&(l=o(l,r(a)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var a in l)t.call(l,a)&&l[a]&&(i=o(i,a));return i}function o(l,i){return i?l?l+" "+i:l+i:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(dh);var ey=dh.exports;const fh=Uo(ey),ty=["xxl","xl","lg","md","sm","xs"],ny="xs",ry=g.createContext({prefixes:{},breakpoints:ty,minBreakpoint:ny});function ph(e,t){const{prefixes:n}=g.useContext(ry);return e||n[t]||t}var hh={exports:{}},oy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ly=oy,iy=ly;function mh(){}function gh(){}gh.resetWarningCache=mh;var ay=function(){function e(r,o,l,i,a,s){if(s!==iy){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:gh,resetWarningCache:mh};return n.PropTypes=n,n};hh.exports=ay();var Ou=hh.exports;const Xr=Uo(Ou),vh=g.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},l)=>{const i=ph(e,"container"),a=typeof t=="string"?`-${t}`:"-fluid";return C.jsx(n,{ref:l,...o,className:fh(r,t?`${i}${a}`:i)})});vh.displayName="Container";const Lo=vh;Xr.string,Xr.bool,Xr.bool,Xr.bool,Xr.bool;const yh=g.forwardRef(({bsPrefix:e,className:t,fluid:n=!1,rounded:r=!1,roundedCircle:o=!1,thumbnail:l=!1,...i},a)=>(e=ph(e,"img"),C.jsx("img",{ref:a,...i,className:fh(t,n&&`${e}-fluid`,r&&"rounded",o&&"rounded-circle",l&&`${e}-thumbnail`)})));yh.displayName="Image";const sy=yh,uy=()=>C.jsxs(Lo,{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[C.jsxs("div",{className:"marcus_img",children:[C.jsx("img",{src:"./marcus2.png"}),C.jsx("h1",{className:"big_h1",children:"Alan Altindis"}),C.jsx("p",{children:"Frontend developer from Almaty"})]}),C.jsx("div",{className:"ul_main",children:C.jsxs("ul",{children:[C.jsx("li",{children:C.jsx(Sr,{className:"nav-link",to:"/projects",children:"My Projects"})}),C.jsx("li",{children:C.jsx(Sr,{className:"nav-link",to:"/about",children:"About Me"})}),C.jsx("li",{children:C.jsx(Sr,{className:"nav-link",to:"/contacts",children:"Contacts"})})]})})]});var Oi={exports:{}},wh={};function xh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=xh(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function md(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=xh(e))&&(r&&(r+=" "),r+=t);return r}const cy=Object.freeze(Object.defineProperty({__proto__:null,clsx:md,default:md},Symbol.toStringTag,{value:"Module"})),dy=$m(cy);var ve={},It={};Object.defineProperty(It,"__esModule",{value:!0});It.dontSetMe=gy;It.findInArray=fy;It.int=my;It.isFunction=py;It.isNum=hy;function fy(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function py(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function hy(e){return typeof e=="number"&&!isNaN(e)}function my(e){return parseInt(e,10)}function gy(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.browserPrefixToKey=Sh;Xn.browserPrefixToStyle=vy;Xn.default=void 0;Xn.getPrefix=kh;const Ea=["Moz","Webkit","O","ms"];function kh(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<Ea.length;r++)if(Sh(t,Ea[r])in n)return Ea[r];return""}function Sh(e,t){return t?"".concat(t).concat(yy(e)):e}function vy(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function yy(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}Xn.default=kh();Object.defineProperty(ve,"__esModule",{value:!0});ve.addClassName=Ch;ve.addEvent=ky;ve.addUserSelectStyles=_y;ve.createCSSTransform=Ty;ve.createSVGTransform=Py;ve.getTouch=Dy;ve.getTouchIdentifier=Ny;ve.getTranslation=ju;ve.innerHeight=Cy;ve.innerWidth=$y;ve.matchesSelector=bh;ve.matchesSelectorAndParentsTo=xy;ve.offsetXYFromParent=Ay;ve.outerHeight=Ey;ve.outerWidth=by;ve.removeClassName=$h;ve.removeEvent=Sy;ve.removeUserSelectStyles=Ry;var nt=It,gd=wy(Xn);function Eh(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Eh=function(r){return r?n:t})(e)}function wy(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Eh(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}let hl="";function bh(e,t){return hl||(hl=(0,nt.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,nt.isFunction)(e[n])})),(0,nt.isFunction)(e[hl])?e[hl](t):!1}function xy(e,t,n){let r=e;do{if(bh(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function ky(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function Sy(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Ey(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,nt.int)(n.borderTopWidth),t+=(0,nt.int)(n.borderBottomWidth),t}function by(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,nt.int)(n.borderLeftWidth),t+=(0,nt.int)(n.borderRightWidth),t}function Cy(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,nt.int)(n.paddingTop),t-=(0,nt.int)(n.paddingBottom),t}function $y(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,nt.int)(n.paddingLeft),t-=(0,nt.int)(n.paddingRight),t}function Ay(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),l=(e.clientX+t.scrollLeft-o.left)/n,i=(e.clientY+t.scrollTop-o.top)/n;return{x:l,y:i}}function Ty(e,t){const n=ju(e,t,"px");return{[(0,gd.browserPrefixToKey)("transform",gd.default)]:n}}function Py(e,t){return ju(e,t,"")}function ju(e,t,n){let{x:r,y:o}=e,l="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const i="".concat(typeof t.x=="string"?t.x:t.x+n),a="".concat(typeof t.y=="string"?t.y:t.y+n);l="translate(".concat(i,", ").concat(a,")")+l}return l}function Dy(e,t){return e.targetTouches&&(0,nt.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,nt.findInArray)(e.changedTouches,n=>t===n.identifier)}function Ny(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function _y(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&Ch(e.body,"react-draggable-transparent-selection")}function Ry(e){if(e)try{if(e.body&&$h(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function Ch(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function $h(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var Lt={};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.canDragX=Oy;Lt.canDragY=jy;Lt.createCoreData=zy;Lt.createDraggableData=By;Lt.getBoundPosition=Iy;Lt.getControlPosition=My;Lt.snapToGrid=Ly;var Ze=It,pr=ve;function Iy(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:Fy(r);const o=Mu(e);if(typeof r=="string"){const{ownerDocument:l}=o,i=l.defaultView;let a;if(r==="parent"?a=o.parentNode:a=l.querySelector(r),!(a instanceof i.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const s=a,u=i.getComputedStyle(o),h=i.getComputedStyle(s);r={left:-o.offsetLeft+(0,Ze.int)(h.paddingLeft)+(0,Ze.int)(u.marginLeft),top:-o.offsetTop+(0,Ze.int)(h.paddingTop)+(0,Ze.int)(u.marginTop),right:(0,pr.innerWidth)(s)-(0,pr.outerWidth)(o)-o.offsetLeft+(0,Ze.int)(h.paddingRight)-(0,Ze.int)(u.marginRight),bottom:(0,pr.innerHeight)(s)-(0,pr.outerHeight)(o)-o.offsetTop+(0,Ze.int)(h.paddingBottom)-(0,Ze.int)(u.marginBottom)}}return(0,Ze.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,Ze.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,Ze.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,Ze.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function Ly(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function Oy(e){return e.props.axis==="both"||e.props.axis==="x"}function jy(e){return e.props.axis==="both"||e.props.axis==="y"}function My(e,t,n){const r=typeof t=="number"?(0,pr.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const o=Mu(n),l=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,pr.offsetXYFromParent)(r||e,l,n.props.scale)}function zy(e,t,n){const r=!(0,Ze.isNum)(e.lastX),o=Mu(e);return r?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function By(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Fy(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Mu(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var ji={},Mi={};Object.defineProperty(Mi,"__esModule",{value:!0});Mi.default=Uy;function Uy(){}Object.defineProperty(ji,"__esModule",{value:!0});ji.default=void 0;var ba=Hy(g),Ve=zu(Ou),Wy=zu(_i),je=ve,Jt=Lt,Ca=It,Zr=zu(Mi);function zu(e){return e&&e.__esModule?e:{default:e}}function Ah(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ah=function(r){return r?n:t})(e)}function Hy(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Ah(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}function Be(e,t,n){return t=Vy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vy(e){var t=Qy(e,"string");return typeof t=="symbol"?t:String(t)}function Qy(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const gt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let qt=gt.mouse,zi=class extends ba.Component{constructor(){super(...arguments),Be(this,"dragging",!1),Be(this,"lastX",NaN),Be(this,"lastY",NaN),Be(this,"touchIdentifier",null),Be(this,"mounted",!1),Be(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,je.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,je.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const o=(0,je.getTouchIdentifier)(t);this.touchIdentifier=o;const l=(0,Jt.getControlPosition)(t,o,this);if(l==null)return;const{x:i,y:a}=l,s=(0,Jt.createCoreData)(this,i,a);(0,Zr.default)("DraggableCore: handleDragStart: %j",s),(0,Zr.default)("calling",this.props.onStart),!(this.props.onStart(t,s)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,je.addUserSelectStyles)(r),this.dragging=!0,this.lastX=i,this.lastY=a,(0,je.addEvent)(r,qt.move,this.handleDrag),(0,je.addEvent)(r,qt.stop,this.handleDragStop))}),Be(this,"handleDrag",t=>{const n=(0,Jt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let a=r-this.lastX,s=o-this.lastY;if([a,s]=(0,Jt.snapToGrid)(this.props.grid,a,s),!a&&!s)return;r=this.lastX+a,o=this.lastY+s}const l=(0,Jt.createCoreData)(this,r,o);if((0,Zr.default)("DraggableCore: handleDrag: %j",l),this.props.onDrag(t,l)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const s=document.createEvent("MouseEvents");s.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(s)}return}this.lastX=r,this.lastY=o}),Be(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,Jt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let s=r-this.lastX||0,u=o-this.lastY||0;[s,u]=(0,Jt.snapToGrid)(this.props.grid,s,u),r=this.lastX+s,o=this.lastY+u}const l=(0,Jt.createCoreData)(this,r,o);if(this.props.onStop(t,l)===!1||this.mounted===!1)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,je.removeUserSelectStyles)(a.ownerDocument),(0,Zr.default)("DraggableCore: handleDragStop: %j",l),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,Zr.default)("DraggableCore: Removing handlers"),(0,je.removeEvent)(a.ownerDocument,qt.move,this.handleDrag),(0,je.removeEvent)(a.ownerDocument,qt.stop,this.handleDragStop))}),Be(this,"onMouseDown",t=>(qt=gt.mouse,this.handleDragStart(t))),Be(this,"onMouseUp",t=>(qt=gt.mouse,this.handleDragStop(t))),Be(this,"onTouchStart",t=>(qt=gt.touch,this.handleDragStart(t))),Be(this,"onTouchEnd",t=>(qt=gt.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,je.addEvent)(t,gt.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,je.removeEvent)(n,gt.mouse.move,this.handleDrag),(0,je.removeEvent)(n,gt.touch.move,this.handleDrag),(0,je.removeEvent)(n,gt.mouse.stop,this.handleDragStop),(0,je.removeEvent)(n,gt.touch.stop,this.handleDragStop),(0,je.removeEvent)(t,gt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,je.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:Wy.default.findDOMNode(this)}render(){return ba.cloneElement(ba.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};ji.default=zi;Be(zi,"displayName","DraggableCore");Be(zi,"propTypes",{allowAnyClick:Ve.default.bool,children:Ve.default.node.isRequired,disabled:Ve.default.bool,enableUserSelectHack:Ve.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:Ve.default.arrayOf(Ve.default.number),handle:Ve.default.string,cancel:Ve.default.string,nodeRef:Ve.default.object,onStart:Ve.default.func,onDrag:Ve.default.func,onStop:Ve.default.func,onMouseDown:Ve.default.func,scale:Ve.default.number,className:Ca.dontSetMe,style:Ca.dontSetMe,transform:Ca.dontSetMe});Be(zi,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return s.default}}),e.default=void 0;var t=m(g),n=h(Ou),r=h(_i),o=h(dy),l=ve,i=Lt,a=It,s=h(ji),u=h(Mi);function h(c){return c&&c.__esModule?c:{default:c}}function f(c){if(typeof WeakMap!="function")return null;var d=new WeakMap,v=new WeakMap;return(f=function(x){return x?v:d})(c)}function m(c,d){if(!d&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var v=f(d);if(v&&v.has(c))return v.get(c);var x={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in c)if(S!=="default"&&Object.prototype.hasOwnProperty.call(c,S)){var D=b?Object.getOwnPropertyDescriptor(c,S):null;D&&(D.get||D.set)?Object.defineProperty(x,S,D):x[S]=c[S]}return x.default=c,v&&v.set(c,x),x}function w(){return w=Object.assign?Object.assign.bind():function(c){for(var d=1;d<arguments.length;d++){var v=arguments[d];for(var x in v)Object.prototype.hasOwnProperty.call(v,x)&&(c[x]=v[x])}return c},w.apply(this,arguments)}function y(c,d,v){return d=k(d),d in c?Object.defineProperty(c,d,{value:v,enumerable:!0,configurable:!0,writable:!0}):c[d]=v,c}function k(c){var d=$(c,"string");return typeof d=="symbol"?d:String(d)}function $(c,d){if(typeof c!="object"||c===null)return c;var v=c[Symbol.toPrimitive];if(v!==void 0){var x=v.call(c,d||"default");if(typeof x!="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(c)}class p extends t.Component{static getDerivedStateFromProps(d,v){let{position:x}=d,{prevPropsPosition:b}=v;return x&&(!b||x.x!==b.x||x.y!==b.y)?((0,u.default)("Draggable: getDerivedStateFromProps %j",{position:x,prevPropsPosition:b}),{x:x.x,y:x.y,prevPropsPosition:{...x}}):null}constructor(d){super(d),y(this,"onDragStart",(v,x)=>{if((0,u.default)("Draggable: onDragStart: %j",x),this.props.onStart(v,(0,i.createDraggableData)(this,x))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),y(this,"onDrag",(v,x)=>{if(!this.state.dragging)return!1;(0,u.default)("Draggable: onDrag: %j",x);const b=(0,i.createDraggableData)(this,x),S={x:b.x,y:b.y,slackX:0,slackY:0};if(this.props.bounds){const{x:j,y:L}=S;S.x+=this.state.slackX,S.y+=this.state.slackY;const[Q,Z]=(0,i.getBoundPosition)(this,S.x,S.y);S.x=Q,S.y=Z,S.slackX=this.state.slackX+(j-S.x),S.slackY=this.state.slackY+(L-S.y),b.x=S.x,b.y=S.y,b.deltaX=S.x-this.state.x,b.deltaY=S.y-this.state.y}if(this.props.onDrag(v,b)===!1)return!1;this.setState(S)}),y(this,"onDragStop",(v,x)=>{if(!this.state.dragging||this.props.onStop(v,(0,i.createDraggableData)(this,x))===!1)return!1;(0,u.default)("Draggable: onDragStop: %j",x);const S={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:j,y:L}=this.props.position;S.x=j,S.y=L}this.setState(S)}),this.state={dragging:!1,dragged:!1,x:d.position?d.position.x:d.defaultPosition.x,y:d.position?d.position.y:d.defaultPosition.y,prevPropsPosition:{...d.position},slackX:0,slackY:0,isElementSVG:!1},d.position&&!(d.onDrag||d.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var d,v;return(d=(v=this.props)===null||v===void 0||(v=v.nodeRef)===null||v===void 0?void 0:v.current)!==null&&d!==void 0?d:r.default.findDOMNode(this)}render(){const{axis:d,bounds:v,children:x,defaultPosition:b,defaultClassName:S,defaultClassNameDragging:D,defaultClassNameDragged:j,position:L,positionOffset:Q,scale:Z,...ae}=this.props;let re={},te=null;const pe=!!!L||this.state.dragging,A=L||b,_={x:(0,i.canDragX)(this)&&pe?this.state.x:A.x,y:(0,i.canDragY)(this)&&pe?this.state.y:A.y};this.state.isElementSVG?te=(0,l.createSVGTransform)(_,Q):re=(0,l.createCSSTransform)(_,Q);const O=(0,o.default)(x.props.className||"",S,{[D]:this.state.dragging,[j]:this.state.dragged});return t.createElement(s.default,w({},ae,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(x),{className:O,style:{...x.props.style,...re},transform:te}))}}e.default=p,y(p,"displayName","Draggable"),y(p,"propTypes",{...s.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:a.dontSetMe,style:a.dontSetMe,transform:a.dontSetMe}),y(p,"defaultProps",{...s.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(wh);const{default:Th,DraggableCore:Gy}=wh;Oi.exports=Th;Oi.exports.default=Th;Oi.exports.DraggableCore=Gy;var Yy=Oi.exports;const Ky=Uo(Yy);var Xy=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,Te=function(){return Te=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Te.apply(this,arguments)};function Oo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var le="-ms-",mo="-moz-",q="-webkit-",Ph="comm",Bi="rule",Bu="decl",Zy="@import",Dh="@keyframes",Jy="@layer",Nh=Math.abs,Fu=String.fromCharCode,Ts=Object.assign;function qy(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function _h(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function U(e,t,n){return e.replace(t,n)}function _l(e,t,n){return e.indexOf(t,n)}function Ae(e,t){return e.charCodeAt(t)|0}function Nr(e,t,n){return e.slice(t,n)}function Pt(e){return e.length}function Rh(e){return e.length}function ro(e,t){return t.push(e),e}function e1(e,t){return e.map(t).join("")}function vd(e,t){return e.filter(function(n){return!Bt(n,t)})}var Fi=1,_r=1,Ih=0,ht=0,xe=0,Br="";function Ui(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:Fi,column:_r,length:i,return:"",siblings:a}}function en(e,t){return Ts(Ui("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=en(e.root,{children:[e]});ro(e,e.siblings)}function t1(){return xe}function n1(){return xe=ht>0?Ae(Br,--ht):0,_r--,xe===10&&(_r=1,Fi--),xe}function St(){return xe=ht<Ih?Ae(Br,ht++):0,_r++,xe===10&&(_r=1,Fi++),xe}function Mn(){return Ae(Br,ht)}function Rl(){return ht}function Wi(e,t){return Nr(Br,e,t)}function Ps(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r1(e){return Fi=_r=1,Ih=Pt(Br=e),ht=0,[]}function o1(e){return Br="",e}function $a(e){return _h(Wi(ht-1,Ds(e===91?e+2:e===40?e+1:e)))}function l1(e){for(;(xe=Mn())&&xe<33;)St();return Ps(e)>2||Ps(xe)>3?"":" "}function i1(e,t){for(;--t&&St()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return Wi(e,Rl()+(t<6&&Mn()==32&&St()==32))}function Ds(e){for(;St();)switch(xe){case e:return ht;case 34:case 39:e!==34&&e!==39&&Ds(xe);break;case 40:e===41&&Ds(e);break;case 92:St();break}return ht}function a1(e,t){for(;St()&&e+xe!==57;)if(e+xe===84&&Mn()===47)break;return"/*"+Wi(t,ht-1)+"*"+Fu(e===47?e:St())}function s1(e){for(;!Ps(Mn());)St();return Wi(e,ht)}function u1(e){return o1(Il("",null,null,null,[""],e=r1(e),0,[0],e))}function Il(e,t,n,r,o,l,i,a,s){for(var u=0,h=0,f=i,m=0,w=0,y=0,k=1,$=1,p=1,c=0,d="",v=o,x=l,b=r,S=d;$;)switch(y=c,c=St()){case 40:if(y!=108&&Ae(S,f-1)==58){_l(S+=U($a(c),"&","&\f"),"&\f",Nh(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=$a(c);break;case 9:case 10:case 13:case 32:S+=l1(y);break;case 92:S+=i1(Rl()-1,7);continue;case 47:switch(Mn()){case 42:case 47:ro(c1(a1(St(),Rl()),t,n,s),s);break;default:S+="/"}break;case 123*k:a[u++]=Pt(S)*p;case 125*k:case 59:case 0:switch(c){case 0:case 125:$=0;case 59+h:p==-1&&(S=U(S,/\f/g,"")),w>0&&Pt(S)-f&&ro(w>32?wd(S+";",r,n,f-1,s):wd(U(S," ","")+";",r,n,f-2,s),s);break;case 59:S+=";";default:if(ro(b=yd(S,t,n,u,h,o,a,d,v=[],x=[],f,l),l),c===123)if(h===0)Il(S,t,b,b,v,l,f,a,x);else switch(m===99&&Ae(S,3)===110?100:m){case 100:case 108:case 109:case 115:Il(e,b,b,r&&ro(yd(e,b,b,0,0,o,a,d,o,v=[],f,x),x),o,x,f,a,r?v:x);break;default:Il(S,b,b,b,[""],x,0,a,x)}}u=h=w=0,k=p=1,d=S="",f=i;break;case 58:f=1+Pt(S),w=y;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&n1()==125)continue}switch(S+=Fu(c),c*k){case 38:p=h>0?1:(S+="\f",-1);break;case 44:a[u++]=(Pt(S)-1)*p,p=1;break;case 64:Mn()===45&&(S+=$a(St())),m=Mn(),h=f=Pt(d=S+=s1(Rl())),c++;break;case 45:y===45&&Pt(S)==2&&(k=0)}}return l}function yd(e,t,n,r,o,l,i,a,s,u,h,f){for(var m=o-1,w=o===0?l:[""],y=Rh(w),k=0,$=0,p=0;k<r;++k)for(var c=0,d=Nr(e,m+1,m=Nh($=i[k])),v=e;c<y;++c)(v=_h($>0?w[c]+" "+d:U(d,/&\f/g,w[c])))&&(s[p++]=v);return Ui(e,t,n,o===0?Bi:a,s,u,h,f)}function c1(e,t,n,r){return Ui(e,t,n,Ph,Fu(t1()),Nr(e,2,-2),0,r)}function wd(e,t,n,r,o){return Ui(e,t,n,Bu,Nr(e,0,r),Nr(e,r+1,-1),r,o)}function Lh(e,t,n){switch(qy(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return mo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+mo+e+le+e+e;case 5936:switch(Ae(e,t+11)){case 114:return q+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+le+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+le+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+le+e+e;case 6165:return q+e+le+"flex-"+e+e;case 5187:return q+e+U(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+le+"flex-$1$2")+e;case 5443:return q+e+le+"flex-item-"+U(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":le+"grid-row-"+U(e,/flex-|-self/g,""))+e;case 4675:return q+e+le+"flex-line-pack"+U(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+le+U(e,"shrink","negative")+e;case 5292:return q+e+le+U(e,"basis","preferred-size")+e;case 6060:return q+"box-"+U(e,"-grow","")+q+e+le+U(e,"grow","positive")+e;case 4554:return q+U(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return le+"grid-column-align"+Nr(e,t)+e;break;case 2592:case 3360:return le+U(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Bt(r.props,/grid-\w+-end/)})?~_l(e+(n=n[t].value),"span",0)?e:le+U(e,"-start","")+e+le+"grid-row-span:"+(~_l(n,"span",0)?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":le+U(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Bt(r.props,/grid-\w+-start/)})?e:le+U(U(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+mo+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_l(e,"stretch",0)?Lh(U(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return U(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,u){return le+o+":"+l+u+(i?le+o+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if(Ae(e,t+6)===121)return U(e,":",":"+q)+e;break;case 6444:switch(Ae(e,Ae(e,14)===45?18:11)){case 120:return U(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(Ae(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+le+"$2box$3")+e;case 100:return U(e,":",":"+le)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return U(e,"scroll-","scroll-snap-")+e}return e}function di(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function d1(e,t,n,r){switch(e.type){case Jy:if(e.children.length)break;case Zy:case Bu:return e.return=e.return||e.value;case Ph:return"";case Dh:return e.return=e.value+"{"+di(e.children,r)+"}";case Bi:if(!Pt(e.value=e.props.join(",")))return""}return Pt(n=di(e.children,r))?e.return=e.value+"{"+n+"}":""}function f1(e){var t=Rh(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function p1(e){return function(t){t.root||(t=t.return)&&e(t)}}function h1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Bu:e.return=Lh(e.value,e.length,n);return;case Dh:return di([en(e,{value:U(e.value,"@","@"+q)})],r);case Bi:if(e.length)return e1(n=e.props,function(o){switch(Bt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(en(e,{props:[U(o,/:(read-\w+)/,":"+mo+"$1")]})),qn(en(e,{props:[o]})),Ts(e,{props:vd(n,r)});break;case"::placeholder":qn(en(e,{props:[U(o,/:(plac\w+)/,":"+q+"input-$1")]})),qn(en(e,{props:[U(o,/:(plac\w+)/,":"+mo+"$1")]})),qn(en(e,{props:[U(o,/:(plac\w+)/,le+"input-$1")]})),qn(en(e,{props:[o]})),Ts(e,{props:vd(n,r)});break}return""})}}var m1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Je={},Rr=typeof process<"u"&&Je!==void 0&&(Je.REACT_APP_SC_ATTR||Je.SC_ATTR)||"data-styled",Oh="active",jh="data-styled-version",Hi="6.1.8",Uu=`/*!sc*/
`,Wu=typeof window<"u"&&"HTMLElement"in window,g1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Je!==void 0&&Je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Je.REACT_APP_SC_DISABLE_SPEEDY!==""?Je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Je!==void 0&&Je.SC_DISABLE_SPEEDY!==void 0&&Je.SC_DISABLE_SPEEDY!==""&&Je.SC_DISABLE_SPEEDY!=="false"&&Je.SC_DISABLE_SPEEDY),v1={},Vi=Object.freeze([]),Ir=Object.freeze({});function Mh(e,t,n){return n===void 0&&(n=Ir),e.theme!==n.theme&&e.theme||t||n.theme}var zh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),y1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,w1=/(^-|-$)/g;function xd(e){return e.replace(y1,"-").replace(w1,"")}var x1=/(a)(d)/gi,ml=52,kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ns(e){var t,n="";for(t=Math.abs(e);t>ml;t=t/ml|0)n=kd(t%ml)+n;return(kd(t%ml)+n).replace(x1,"$1-$2")}var Aa,Bh=5381,hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Fh=function(e){return hr(Bh,e)};function Uh(e){return Ns(Fh(e)>>>0)}function k1(e){return e.displayName||e.name||"Component"}function Ta(e){return typeof e=="string"&&!0}var Wh=typeof Symbol=="function"&&Symbol.for,Hh=Wh?Symbol.for("react.memo"):60115,S1=Wh?Symbol.for("react.forward_ref"):60112,E1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C1=((Aa={})[S1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Aa[Hh]=Vh,Aa);function Sd(e){return("type"in(t=e)&&t.type.$$typeof)===Hh?Vh:"$$typeof"in e?C1[e.$$typeof]:E1;var t}var $1=Object.defineProperty,A1=Object.getOwnPropertyNames,Ed=Object.getOwnPropertySymbols,T1=Object.getOwnPropertyDescriptor,P1=Object.getPrototypeOf,bd=Object.prototype;function Qh(e,t,n){if(typeof t!="string"){if(bd){var r=P1(t);r&&r!==bd&&Qh(e,r,n)}var o=A1(t);Ed&&(o=o.concat(Ed(t)));for(var l=Sd(e),i=Sd(t),a=0;a<o.length;++a){var s=o[a];if(!(s in b1||n&&n[s]||i&&s in i||l&&s in l)){var u=T1(t,s);try{$1(e,s,u)}catch{}}}}return e}function Hn(e){return typeof e=="function"}function Hu(e){return typeof e=="object"&&"styledComponentId"in e}function In(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _s(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Rs(e,t,n){if(n===void 0&&(n=!1),!n&&!jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Rs(e[r],t[r]);else if(jo(t))for(var r in t)e[r]=Rs(e[r],t[r]);return e}function Vu(e,t){Object.defineProperty(e,"toString",{value:t})}function Vn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var D1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw Vn(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(Uu);return n},e}(),Ll=new Map,fi=new Map,Ol=1,gl=function(e){if(Ll.has(e))return Ll.get(e);for(;fi.has(Ol);)Ol++;var t=Ol++;return Ll.set(e,t),fi.set(t,e),t},N1=function(e,t){Ol=t+1,Ll.set(e,t),fi.set(t,e)},_1="style[".concat(Rr,"][").concat(jh,'="').concat(Hi,'"]'),R1=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),I1=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},L1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Uu),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(R1);if(s){var u=0|parseInt(s[1],10),h=s[2];u!==0&&(N1(h,u),I1(e,h,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function O1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Gh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Rr,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(Rr,Oh),r.setAttribute(jh,Hi);var i=O1();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},j1=function(){function e(t){this.element=Gh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw Vn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),M1=function(){function e(t){this.element=Gh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),z1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Cd=Wu,B1={isServer:!Wu,useCSSOMInjection:!g1},pi=function(){function e(t,n,r){t===void 0&&(t=Ir),n===void 0&&(n={});var o=this;this.options=Te(Te({},B1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wu&&Cd&&(Cd=!1,function(l){for(var i=document.querySelectorAll(_1),a=0,s=i.length;a<s;a++){var u=i[a];u&&u.getAttribute(Rr)!==Oh&&(L1(l,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Vu(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",u=function(f){var m=function(p){return fi.get(p)}(f);if(m===void 0)return"continue";var w=l.names.get(m),y=i.getGroup(f);if(w===void 0||y.length===0)return"continue";var k="".concat(Rr,".g").concat(f,'[id="').concat(m,'"]'),$="";w!==void 0&&w.forEach(function(p){p.length>0&&($+="".concat(p,","))}),s+="".concat(y).concat(k,'{content:"').concat($,'"}').concat(Uu)},h=0;h<a;h++)u(h);return s}(o)})}return e.registerId=function(t){return gl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new z1(o):r?new j1(o):new M1(o)}(this.options),new D1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(gl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(gl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),F1=/&/g,U1=/^\s*\/\/.*$/gm;function Yh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Yh(n.children,t)),n})}function W1(e){var t,n,r,o=e===void 0?Ir:e,l=o.options,i=l===void 0?Ir:l,a=o.plugins,s=a===void 0?Vi:a,u=function(m,w,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},h=s.slice();h.push(function(m){m.type===Bi&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(F1,n).replace(r,u))}),i.prefix&&h.push(h1),h.push(d1);var f=function(m,w,y,k){w===void 0&&(w=""),y===void 0&&(y=""),k===void 0&&(k="&"),t=k,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var $=m.replace(U1,""),p=u1(y||w?"".concat(y," ").concat(w," { ").concat($," }"):$);i.namespace&&(p=Yh(p,i.namespace));var c=[];return di(p,f1(h.concat(p1(function(d){return c.push(d)})))),c};return f.hash=s.length?s.reduce(function(m,w){return w.name||Vn(15),hr(m,w.name)},Bh).toString():"",f}var H1=new pi,Is=W1(),Kh=E.createContext({shouldForwardProp:void 0,styleSheet:H1,stylis:Is});Kh.Consumer;E.createContext(void 0);function Ls(){return g.useContext(Kh)}var V1=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=Is);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Vu(this,function(){throw Vn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Is),this.name+t.hash},e}(),Q1=function(e){return e>="A"&&e<="Z"};function $d(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Q1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Xh=function(e){return e==null||e===!1||e===""},Zh=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!Xh(l)&&(Array.isArray(l)&&l.isCss||Hn(l)?r.push("".concat($d(o),":"),l,";"):jo(l)?r.push.apply(r,Oo(Oo(["".concat(o," {")],Zh(l),!1),["}"],!1)):r.push("".concat($d(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in m1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(Xh(e))return[];if(Hu(e))return[".".concat(e.styledComponentId)];if(Hn(e)){if(!Hn(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return yn(o,t,n,r)}var l;return e instanceof V1?n?(e.inject(n,r),[e.getName(r)]):[e]:jo(e)?Zh(e):Array.isArray(e)?Array.prototype.concat.apply(Vi,e.map(function(i){return yn(i,t,n,r)})):[e.toString()]}function Jh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hn(n)&&!Hu(n))return!1}return!0}var G1=Fh(Hi),Y1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Jh(t),this.componentId=n,this.baseHash=hr(G1,n),this.baseStyle=r,pi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=In(o,this.staticRulesId);else{var l=_s(yn(this.rules,t,n,r)),i=Ns(hr(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=In(o,i),this.staticRulesId=i}else{for(var s=hr(this.baseHash,r.hash),u="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")u+=f;else if(f){var m=_s(yn(f,t,n,r));s=hr(s,m+h),u+=m}}if(u){var w=Ns(s>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),o=In(o,w)}}return o},e}(),Mo=E.createContext(void 0);Mo.Consumer;function K1(e){var t=E.useContext(Mo),n=g.useMemo(function(){return function(r,o){if(!r)throw Vn(14);if(Hn(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw Vn(8);return o?Te(Te({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?E.createElement(Mo.Provider,{value:n},e.children):null}var Pa={};function X1(e,t,n){var r=Hu(e),o=e,l=!Ta(e),i=t.attrs,a=i===void 0?Vi:i,s=t.componentId,u=s===void 0?function(v,x){var b=typeof v!="string"?"sc":xd(v);Pa[b]=(Pa[b]||0)+1;var S="".concat(b,"-").concat(Uh(Hi+b+Pa[b]));return x?"".concat(x,"-").concat(S):S}(t.displayName,t.parentComponentId):s,h=t.displayName,f=h===void 0?function(v){return Ta(v)?"styled.".concat(v):"Styled(".concat(k1(v),")")}(e):h,m=t.displayName&&t.componentId?"".concat(xd(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;y=function(v,x){return k(v,x)&&$(v,x)}}else y=k}var p=new Y1(n,m,r?o.componentStyle:void 0);function c(v,x){return function(b,S,D){var j=b.attrs,L=b.componentStyle,Q=b.defaultProps,Z=b.foldedComponentIds,ae=b.styledComponentId,re=b.target,te=E.useContext(Mo),we=Ls(),pe=b.shouldForwardProp||we.shouldForwardProp,A=Mh(S,te,Q)||Ir,_=function(K,B,H){for(var Ce,N=Te(Te({},B),{className:void 0,theme:H}),F=0;F<K.length;F+=1){var V=Hn(Ce=K[F])?Ce(N):Ce;for(var J in V)N[J]=J==="className"?In(N[J],V[J]):J==="style"?Te(Te({},N[J]),V[J]):V[J]}return B.className&&(N.className=In(N.className,B.className)),N}(j,S,A),O=_.as||re,Y={};for(var W in _)_[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&_.theme===A||(W==="forwardedAs"?Y.as=_.forwardedAs:pe&&!pe(W,O)||(Y[W]=_[W]));var M=function(K,B){var H=Ls(),Ce=K.generateAndInjectStyles(B,H.styleSheet,H.stylis);return Ce}(L,_),z=In(Z,ae);return M&&(z+=" "+M),_.className&&(z+=" "+_.className),Y[Ta(O)&&!zh.has(O)?"class":"className"]=z,Y.ref=D,g.createElement(O,Y)}(d,v,x)}c.displayName=f;var d=E.forwardRef(c);return d.attrs=w,d.componentStyle=p,d.displayName=f,d.shouldForwardProp=y,d.foldedComponentIds=r?In(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=m,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(x){for(var b=[],S=1;S<arguments.length;S++)b[S-1]=arguments[S];for(var D=0,j=b;D<j.length;D++)Rs(x,j[D],!0);return x}({},o.defaultProps,v):v}}),Vu(d,function(){return".".concat(d.styledComponentId)}),l&&Qh(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Ad(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Td=function(e){return Object.assign(e,{isCss:!0})};function R(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hn(e)||jo(e))return Td(yn(Ad(Vi,Oo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):Td(yn(Ad(r,t)))}function Os(e,t,n){if(n===void 0&&(n=Ir),!t)throw Vn(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,R.apply(void 0,Oo([o],l,!1)))};return r.attrs=function(o){return Os(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Os(e,t,Te(Te({},n),o))},r}var qh=function(e){return Os(X1,e)},T=qh;zh.forEach(function(e){T[e]=qh(e)});var Z1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Jh(t),pi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(_s(yn(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&pi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function J1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=R.apply(void 0,Oo([e],t,!1)),o="sc-global-".concat(Uh(JSON.stringify(r))),l=new Z1(r,o),i=function(s){var u=Ls(),h=E.useContext(Mo),f=E.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(f,s,u.styleSheet,h,u.stylis),E.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,s,u.styleSheet,h,u.stylis),function(){return l.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,h,u.stylis]),null};function a(s,u,h,f,m){if(l.isStatic)l.renderStyles(s,v1,h,m);else{var w=Te(Te({},u),{theme:Mh(u,f,i.defaultProps)});l.renderStyles(s,w,h,m)}}return E.memo(i)}const Qu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Gu="inset 2px 2px 3px rgba(0,0,0,0.2)",bt=()=>R`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Ct=({background:e="material",color:t="materialText"}={})=>R`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Xo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>R`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Qn=()=>R`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,er={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},q1=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Qu:!1,o?Gu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),me=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return R`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[er[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[er[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[er[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[er[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>q1({theme:r,topLeftInner:er[t][n.topLeftInner],bottomRightInner:er[t][n.bottomRightInner],hasShadow:o})};
  `},Lr=()=>R`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,ew=e=>Buffer.from(e).toString("base64"),tw=typeof btoa<"u"?btoa:ew,vl=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${tw(n)})`},Yu=(e="default")=>R`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Xo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Ct()}
    ${e==="flat"?Qn():me({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${Ct()}
    ${e==="flat"?Qn():me({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?me({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>vl(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>vl(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>vl(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>vl(t.materialText,0)};
  }
`,nw=T.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,rw=g.forwardRef(({children:e,underline:t=!0,...n},r)=>E.createElement(nw,{ref:r,underline:t,...n},e));rw.displayName="Anchor";const ow=T.header`
  ${me()};
  ${Ct()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,lw=g.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>E.createElement(ow,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));lw.displayName="AppBar";const Zn=()=>{};function Ln(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function iw(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Pd(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(iw(t)))}function kn(e){return typeof e=="number"?`${e}px`:e}const aw=T.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,sw=T.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,uw=g.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>E.createElement(aw,{noBorder:n,ref:a,size:kn(r),square:o,src:l,...i},l?E.createElement(sw,{src:l,alt:e}):t));uw.displayName="Avatar";const Re={sm:"28px",md:"36px",lg:"44px"},cw=R`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Re[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Re[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Qi=T.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?R`
          ${Qn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&Lr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?R`
          ${Ct()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&me({style:"buttonThin"})}
          }
          &:active {
            ${!t&&me({style:"buttonThinPressed"})}
          }
          ${e&&me({style:"buttonThinPressed"})}
          ${t&&bt()}
        `:R`
          ${Ct()};
          border: none;
          ${t&&bt()}
          ${e?Xo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?R`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:R`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${me(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&me({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Lr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${cw}
`,ut=g.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Zn,primary:u=!1,variant:h="default",...f},m)=>E.createElement(Qi,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:m,size:l,square:i,type:r,variant:h,...f},n));ut.displayName="Button";function Sn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=g.useState(e),u=g.useCallback(h=>{i||s(h)},[i]);if(i&&typeof t!="function"&&!r){const h=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(h)}return[i?o:a,u]}const js=T.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Re[e.size]};
  width: ${e=>e.square?Re[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Re[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&bt()}
`,dw=g.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>E.createElement(js,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));dw.displayName="MenuListItem";const fw=T.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${me({style:"window"})}
  ${Ct()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;fw.displayName="MenuList";const Rt=20,hi=T.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Rt}px;
  height: ${Rt}px;
  opacity: 0;
  z-index: -1;
`,Ku=T.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&bt()}

  ${js} & {
    margin: 0;
    height: 100%;
  }
  ${js}:hover & {
    ${({$disabled:e,theme:t})=>!e&&R`
        color: ${t.materialTextInvert};
      `};
  }
`,Xu=T.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${hi}:focus ~ & {
    ${Lr}
  }
  ${hi}:not(:disabled) ~ &:active {
    ${Lr}
  }
`,Ot=T.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Gu};`}
  }
`,pw=T.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Yu()}
`,em=g.forwardRef(({children:e,shadow:t=!0,...n},r)=>E.createElement(Ot,{ref:r,shadow:t,...n},E.createElement(pw,null,e)));em.displayName="ScrollView";const tm=R`
  width: ${Rt}px;
  height: ${Rt}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,hw=T(Ot)`
  ${tm}
  width: ${Rt}px;
  height: ${Rt}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,mw=T.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${tm}
  width: ${Rt-4}px;
  height: ${Rt-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,gw=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,vw=T.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Xo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,yw={flat:mw,default:hw},ww=g.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Zn,style:a={},value:s,variant:u="default",...h},f)=>{var m;const[w,y]=Sn({defaultValue:n,onChange:i,readOnly:(m=h.readOnly)!==null&&m!==void 0?m:r,value:e}),k=g.useCallback(c=>{const d=c.target.checked;y(d),i(c)},[i,y]),$=yw[u];let p=null;return o?p=vw:w&&(p=gw),E.createElement(Ku,{$disabled:r,className:t,style:a},E.createElement(hi,{disabled:r,onChange:r?void 0:k,readOnly:r,type:"checkbox",value:s,checked:w,"data-indeterminate":o,ref:f,...h}),E.createElement($,{$disabled:r,role:"presentation"},p&&E.createElement(p,{$disabled:r,variant:u})),l&&E.createElement(Xu,null,l))});ww.displayName="Checkbox";const nm=T.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${kn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${kn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;nm.displayName="Separator";const xw=T(Qi)`
  padding-left: 8px;
`,kw=T(nm)`
  height: 21px;
  position: relative;
  top: 0;
`,rm=T.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Sw=T.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?R`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:R`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${rm}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Lr}
    outline-offset: -8px;
  }
`,Ew=T.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?R`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:R`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,bw=g.forwardRef(({value:e,defaultValue:t,onChange:n=Zn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,u]=Sn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),h=f=>{const m=f.target.value;u(m),n(f)};return E.createElement(xw,{disabled:r,as:"div",variant:o,size:"md"},E.createElement(rm,{onChange:h,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),E.createElement(Sw,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&E.createElement(kw,{orientation:"vertical"}),E.createElement(Ew,{$disabled:r,variant:o}))});bw.displayName="ColorInput";const Cw=T.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>R`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Xo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Dd=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],$w=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Aw({digit:e=0,pixelSize:t=2,...n}){const r=$w[Number(e)].map((o,l)=>o?`${Dd[l]} active`:Dd[l]);return E.createElement(Cw,{pixelSize:t,...n},r.map((o,l)=>E.createElement("span",{className:o,key:l})))}const Tw=T.div`
  ${me({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Pw={sm:1,md:2,lg:3,xl:4},Dw=g.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=g.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return E.createElement(Tw,{ref:o,...r},l.map((i,a)=>E.createElement(Aw,{digit:i,pixelSize:Pw[n],key:a})))});Dw.displayName="Counter";const om=R`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Re.md};
`,Nw=T(Ot).attrs({"data-testid":"variant-default"})`
  ${om}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,_w=T.div.attrs({"data-testid":"variant-flat"})`
  ${Qn()}
  ${om}
  position: relative;
`,lm=R`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&bt()}
`,Rw=T.input`
  ${lm}
  padding: 0 8px;
`,Iw=T.textarea`
  ${lm}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Yu(e)}
`,im=g.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Zn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const u=i==="flat"?_w:Nw,h=g.useMemo(()=>{var f;return a.multiline?E.createElement(Iw,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):E.createElement(Rw,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(f=a.type)!==null&&f!==void 0?f:"text",variant:i,...a})},[t,r,a,s,i]);return E.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},h)});im.displayName="TextInput";const Lw=T.div`
  display: inline-flex;
  align-items: center;
`,Ms=T(ut)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?R`
          height: calc(50% - 1px);
        `:R`
          height: 50%;
        `}
`,Ow=T.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?R`
          height: calc(${Re.md} - 4px);
        `:R`
          height: ${Re.md};
          margin-left: 2px;
        `}
`,Nd=T.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?R`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:R`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Ms}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?R`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:R`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,am=g.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:u,variant:h="default",width:f,...m},w)=>{const[y,k]=Sn({defaultValue:t,onChange:l,readOnly:i,value:u}),$=g.useCallback(b=>{const S=parseFloat(b.target.value);k(S)},[k]),p=g.useCallback(b=>{const S=Ln(parseFloat(((y??0)+b).toFixed(2)),o??null,r??null);k(S),l==null||l(S)},[r,o,l,k,y]),c=g.useCallback(()=>{y!==void 0&&(l==null||l(y))},[l,y]),d=g.useCallback(()=>{p(a)},[p,a]),v=g.useCallback(()=>{p(-a)},[p,a]),x=h==="flat"?"flat":"raised";return E.createElement(Lw,{className:e,style:{...s,width:f!==void 0?kn(f):"auto"},...m},E.createElement(im,{value:y,variant:h,onChange:$,disabled:n,type:"number",readOnly:i,ref:w,fullWidth:!0,onBlur:c}),E.createElement(Ow,{variant:h},E.createElement(Ms,{"data-testid":"increment",variant:x,disabled:n||i,onClick:d},E.createElement(Nd,{invert:!0})),E.createElement(Ms,{"data-testid":"decrement",variant:x,disabled:n||i,onClick:v},E.createElement(Nd,null))))});am.displayName="NumberInput";function jw(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const sm=e=>g.useMemo(()=>e??jw(),[e]),um=R`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,cm=R`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Zu=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Mw=T.div`
  ${um}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Zu}:focus & {
    ${cm}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,dm=R`
  height: ${Re.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?bt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,zw=T(Ot)`
  ${dm}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Bw=T.div`
  ${Qn()}
  ${dm}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Fw=T.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${um}
  cursor: pointer;
  &:disabled {
    ${bt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,fm=T(Qi).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?R`
          height: 100%;
          margin-right: 0;
        `:R`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,Uw=T.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${fm}:active & {
    margin-top: 2px;
  }
`,Ww=T.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Qu};
  ${({variant:e="default"})=>e==="flat"?R`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:R`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Yu(e)}
`,Hw=T.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Re.md} - 4px);
  line-height: calc(${Re.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?cm:""}
  user-select: none;
`,Vw=[],pm=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=Vw,readOnly:i,style:a,value:s,variant:u,width:h})=>{var f;const m=g.useMemo(()=>l.filter(Boolean),[l]),[w,y]=Sn({defaultValue:t??((f=m==null?void 0:m[0])===null||f===void 0?void 0:f.value),onChange:o,readOnly:i,value:s}),k=!(n||i),$=g.useMemo(()=>({className:e,style:{...a,width:h}}),[e,a,h]),p=g.useMemo(()=>E.createElement(fm,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},E.createElement(Uw,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),c=g.useMemo(()=>u==="flat"?Bw:zw,[u]);return g.useMemo(()=>({isEnabled:k,options:m,value:w,setValue:y,wrapperProps:$,DropdownButton:p,Wrapper:c}),[p,c,k,m,y,w,$])},Qw={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Gw=1e3,Yw=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:u,value:h,selectRef:f,setValue:m,wrapperRef:w})=>{const y=g.useRef(null),k=g.useRef([]),$=g.useRef(0),p=g.useRef(0),c=g.useRef(),d=g.useRef("search"),v=g.useRef(""),x=g.useRef(),[b,S]=Sn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),D=g.useMemo(()=>{const N=s.findIndex(F=>F.value===h);return $.current=Ln(N,0,null),s[N]},[s,h]),[j,L]=g.useState(s[0]),Q=g.useCallback(N=>{const F=y.current,V=k.current[N];if(!V||!F){c.current=N;return}c.current=void 0;const J=F.clientHeight,se=F.scrollTop,De=F.scrollTop+J,Se=V.offsetTop,it=V.offsetHeight,jt=V.offsetTop+V.offsetHeight;Se<se&&F.scrollTo(0,Se),jt>De&&F.scrollTo(0,Se-J+it),V.focus({preventScroll:!0})},[y]),Z=g.useCallback((N,{scroll:F}={})=>{var V;const J=s.length-1;let se;switch(N){case"first":{se=0;break}case"last":{se=J;break}case"next":{se=Ln(p.current+1,0,J);break}case"previous":{se=Ln(p.current-1,0,J);break}case"selected":{se=Ln((V=$.current)!==null&&V!==void 0?V:0,0,J);break}default:se=N}p.current=se,L(s[se]),F&&Q(se)},[p,s,Q]),ae=g.useCallback(({fromEvent:N})=>{S(!0),Z("selected",{scroll:!0}),i==null||i({fromEvent:N})},[Z,i,S]),re=g.useCallback(()=>{d.current="search",v.current="",clearTimeout(x.current)},[]),te=g.useCallback(({focusSelect:N,fromEvent:F})=>{var V;n==null||n({fromEvent:F}),S(!1),L(s[0]),re(),c.current=void 0,N&&((V=f.current)===null||V===void 0||V.focus())},[re,n,s,f,S]),we=g.useCallback(({fromEvent:N})=>{b?te({focusSelect:!1,fromEvent:N}):ae({fromEvent:N})},[te,ae,b]),pe=g.useCallback((N,{fromEvent:F})=>{$.current!==N&&($.current=N,m(s[N].value),t==null||t(s[N],{fromEvent:F}))},[t,s,m]),A=g.useCallback(({focusSelect:N,fromEvent:F})=>{pe(p.current,{fromEvent:F}),te({focusSelect:N,fromEvent:F})},[te,pe]),_=g.useCallback((N,{fromEvent:F,select:V})=>{var J;switch(d.current==="cycleFirstLetter"&&N!==v.current&&(d.current="search"),N===v.current?d.current="cycleFirstLetter":v.current+=N,d.current){case"search":{let se=s.findIndex(De=>{var Se;return((Se=De.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(v.current))===0});se<0&&(se=s.findIndex(De=>{var Se;return((Se=De.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(N))===0}),v.current=N),se>=0&&(V?pe(se,{fromEvent:F}):Z(se,{scroll:!0}));break}case"cycleFirstLetter":{const se=V?(J=$.current)!==null&&J!==void 0?J:-1:p.current;let De=s.findIndex((Se,it)=>{var jt;return it>se&&((jt=Se.label)===null||jt===void 0?void 0:jt.toLocaleUpperCase().indexOf(N))===0});De<0&&(De=s.findIndex(Se=>{var it;return((it=Se.label)===null||it===void 0?void 0:it.toLocaleUpperCase().indexOf(N))===0})),De>=0&&(V?pe(De,{fromEvent:F}):Z(De,{scroll:!0}));break}}clearTimeout(x.current),x.current=setTimeout(()=>{d.current==="search"&&(v.current="")},Gw)},[Z,s,pe]),O=g.useCallback(N=>{var F;N.button===0&&(N.preventDefault(),(F=f.current)===null||F===void 0||F.focus(),we({fromEvent:N}),l==null||l(N))},[l,f,we]),Y=g.useCallback(N=>{A({focusSelect:!0,fromEvent:N})},[A]),W=g.useCallback(N=>{const{altKey:F,code:V,ctrlKey:J,metaKey:se,shiftKey:De}=N,{ARROW_DOWN:Se,ARROW_UP:it,END:jt,ENTER:An,ESC:Xt,HOME:Yi,SPACE:Ki,TAB:Fr}=Qw,Ju=F||J||se||De;if(!(V===Fr&&(F||J||se)||V!==Fr&&Ju))switch(V){case Se:{if(N.preventDefault(),!b){ae({fromEvent:N});return}Z("next",{scroll:!0});break}case it:{if(N.preventDefault(),!b){ae({fromEvent:N});return}Z("previous",{scroll:!0});break}case jt:{if(N.preventDefault(),!b){ae({fromEvent:N});return}Z("last",{scroll:!0});break}case An:{if(!b)return;N.preventDefault(),A({focusSelect:!0,fromEvent:N});break}case Xt:{if(!b)return;N.preventDefault(),te({focusSelect:!0,fromEvent:N});break}case Yi:{if(N.preventDefault(),!b){ae({fromEvent:N});return}Z("first",{scroll:!0});break}case Ki:{N.preventDefault(),b?A({focusSelect:!0,fromEvent:N}):ae({fromEvent:N});break}case Fr:{if(!b)return;De||N.preventDefault(),A({focusSelect:!De,fromEvent:N});break}default:!Ju&&V.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),_(V.replace(/^Key/,""),{select:!b,fromEvent:N}))}},[Z,te,b,ae,_,A]),M=g.useCallback(N=>{W(N),o==null||o(N)},[W,o]),z=g.useCallback(N=>{Z(N)},[Z]),K=g.useCallback(N=>{b||(re(),e==null||e(N))},[re,e,b]),B=g.useCallback(N=>{re(),r==null||r(N)},[re,r]),H=g.useCallback(N=>{y.current=N,c.current!==void 0&&Q(c.current)},[Q]),Ce=g.useCallback((N,F)=>{k.current[F]=N,c.current===F&&Q(c.current)},[Q]);return g.useEffect(()=>{if(!b)return()=>{};const N=F=>{var V;const J=F.target;!((V=w.current)===null||V===void 0)&&V.contains(J)||(F.preventDefault(),te({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[te,b,w]),g.useMemo(()=>({activeOption:j,handleActivateOptionIndex:z,handleBlur:K,handleButtonKeyDown:M,handleDropdownKeyDown:W,handleFocus:B,handleMouseDown:O,handleOptionClick:Y,handleSetDropdownRef:H,handleSetOptionRef:Ce,open:b,selectedOption:D}),[j,z,K,M,B,W,O,Y,H,Ce,b,D])},Kw=g.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:u,...h},f)=>{const{isEnabled:m,options:w,setValue:y,value:k,DropdownButton:$,Wrapper:p}=pm({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),c=g.useCallback(d=>{const v=w.find(x=>x.value===d.target.value);v&&(y(v.value),r==null||r(v,{fromEvent:d}))},[r,w,y]);return E.createElement(p,{className:e,style:{...i,width:u}},E.createElement(Zu,null,E.createElement(Fw,{...h,disabled:n,onChange:m?c:Zn,ref:f,value:k},w.map((d,v)=>{var x;return E.createElement("option",{key:`${d.value}-${v}`,value:d.value},(x=d.label)!==null&&x!==void 0?x:d.value)})),$))});Kw.displayName="SelectNative";function Xw({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=g.useCallback(()=>{e(n)},[e,n]),s=g.useCallback(h=>{i(h,n)},[n,i]),u=sm();return E.createElement(Hw,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function Zw({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:u,onBlur:h,onChange:f,onClose:m,onFocus:w,onKeyDown:y,onMouseDown:k,onOpen:$,open:p,options:c,readOnly:d,shadow:v=!0,style:x,variant:b="default",value:S,width:D="auto",...j},L){const{isEnabled:Q,options:Z,setValue:ae,value:re,wrapperProps:te,DropdownButton:we,Wrapper:pe}=pm({className:n,defaultValue:r,disabled:o,native:!1,onChange:f,options:c,style:x,readOnly:d,value:S,variant:b,width:D}),A=g.useRef(null),_=g.useRef(null),O=g.useRef(null),{activeOption:Y,handleActivateOptionIndex:W,handleBlur:M,handleButtonKeyDown:z,handleDropdownKeyDown:K,handleFocus:B,handleMouseDown:H,handleOptionClick:Ce,handleSetDropdownRef:N,handleSetOptionRef:F,open:V,selectedOption:J}=Yw({onBlur:h,onChange:f,onClose:m,onFocus:w,onKeyDown:y,onMouseDown:k,onOpen:$,open:p,options:Z,value:re,selectRef:_,setValue:ae,wrapperRef:O});g.useImperativeHandle(L,()=>({focus:An=>{var Xt;(Xt=_.current)===null||Xt===void 0||Xt.focus(An)},node:A.current,value:String(re)}),[re]);const se=g.useMemo(()=>J?typeof l=="function"?l(J):J.label:"",[l,J]),De=Q?1:void 0,Se=g.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),it=sm(),jt=g.useMemo(()=>Z.map((An,Xt)=>{const Yi=`${re}-${Xt}`,Ki=An===Y,Fr=An===J;return E.createElement(Xw,{activateOptionIndex:W,active:Ki,index:Xt,key:Yi,onClick:Ce,option:An,selected:Fr,setRef:F})}),[Y,W,Ce,F,Z,J,re]);return E.createElement(pe,{...te,$disabled:o,ref:O,shadow:v,style:{...x,width:D}},E.createElement("input",{name:u,ref:A,type:"hidden",value:String(re),...i}),E.createElement(Zu,{"aria-disabled":o,"aria-expanded":V,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":Q&&V?it:void 0,onBlur:M,onFocus:B,onKeyDown:z,onMouseDown:Q?H:k,ref:_,role:"button",tabIndex:De,...j},E.createElement(Mw,null,se),we),Q&&V&&E.createElement(Ww,{id:it,onKeyDown:K,ref:N,role:"listbox",style:Se,tabIndex:0,variant:b},jt))}const hm=g.forwardRef(Zw);hm.displayName="Select";const Jw=T.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,mi=g.forwardRef(function({children:t,noPadding:n=!1,...r},o){return E.createElement(Jw,{noPadding:n,ref:o,...r},t)});mi.displayName="Toolbar";const qw=T.div`
  padding: 16px;
`,zo=g.forwardRef(function({children:t,...n},r){return E.createElement(qw,{ref:r,...n},t)});zo.displayName="WindowContent";const ex=T.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?R`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:R`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Qi} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Bo=g.forwardRef(function({active:t=!0,children:n,...r},o){return E.createElement(ex,{active:t,ref:o,...r},n)});Bo.displayName="WindowHeader";const tx=T.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${me({style:"window"})}
  ${Ct()}
`,nx=T.span`
  ${({theme:e})=>R`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Fo=g.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>E.createElement(tx,{ref:l,shadow:r,...o},e,t&&E.createElement(nx,{"data-testid":"resizeHandle",ref:n})));Fo.displayName="Window";const rx=T(em)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,ox=T.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,lx=T.div`
  display: flex;
  flex-wrap: wrap;
`,Mt=T.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,ix=T.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,ax=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function sx(e,t){return new Date(e,t+1,0).getDate()}function ux(e,t,n){return new Date(e,t,n).getDay()}function cx(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const dx=g.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=g.useState(()=>cx(t)),{year:s,month:u,day:h}=i,f=g.useCallback(({value:$})=>{a(p=>({...p,month:$}))},[]),m=g.useCallback($=>{a(p=>({...p,year:$}))},[]),w=g.useCallback($=>{a(p=>({...p,day:$}))},[]),y=g.useCallback(()=>{const $=[i.year,i.month+1,i.day].map(p=>String(p).padStart(2,"0")).join("-");n==null||n($)},[i.day,i.month,i.year,n]),k=g.useMemo(()=>{const $=Array.from({length:42}),p=ux(s,u,1);let c=h;const d=sx(s,u);return c=c<d?c:d,$.forEach((v,x)=>{if(x>=p&&x<d+p){const b=x-p+1;$[x]=E.createElement(Mt,{key:x,onClick:()=>{w(b)}},E.createElement(ix,{active:b===c},b))}else $[x]=E.createElement(Mt,{key:x})}),$},[h,w,u,s]);return E.createElement(Fo,{className:e,ref:l,shadow:o,style:{margin:20}},E.createElement(Bo,null,E.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),E.createElement(zo,null,E.createElement(mi,{noPadding:!0,style:{justifyContent:"space-between"}},E.createElement(hm,{options:ax,value:u,onChange:f,width:128,menuMaxHeight:200}),E.createElement(am,{value:s,onChange:m,width:100})),E.createElement(rx,null,E.createElement(ox,null,E.createElement(Mt,null,"S"),E.createElement(Mt,null,"M"),E.createElement(Mt,null,"T"),E.createElement(Mt,null,"W"),E.createElement(Mt,null,"T"),E.createElement(Mt,null,"F"),E.createElement(Mt,null,"S")),E.createElement(lx,null,k)),E.createElement(mi,{noPadding:!0,style:{justifyContent:"space-between"}},E.createElement(ut,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),E.createElement(ut,{fullWidth:!0,onClick:n?y:void 0,disabled:!n},"OK"))))});dx.displayName="DatePicker";const fx=e=>{switch(e){case"status":case"well":return R`
        ${me({style:"status"})}
      `;case"window":case"outside":return R`
        ${me({style:"window"})}
      `;case"field":return R`
        ${me({style:"field"})}
      `;default:return R`
        ${me()}
      `}},px=T.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>fx(e)}
  ${({variant:e})=>Ct(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,mm=g.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>E.createElement(px,{ref:o,shadow:t,variant:n,...r},e));mm.displayName="Frame";const hx=T.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&R`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&bt()}
`,mx=T.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,gx=g.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>E.createElement(hx,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&E.createElement(mx,{variant:n},e),r));gx.displayName="GroupBox";const vx=T.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${kn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;vx.displayName="Handle";const yx="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",wx=T.div`
  display: inline-block;
  height: ${({size:e})=>kn(e)};
  width: ${({size:e})=>kn(e)};
`,xx=T.span`
  display: block;
  background: ${yx};
  background-size: cover;
  width: 100%;
  height: 100%;
`,kx=g.forwardRef(({size:e=30,...t},n)=>E.createElement(wx,{size:e,ref:n,...t},E.createElement(xx,null)));kx.displayName="Hourglass";const Sx=T.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Ex=T.div`
  position: relative;
`,bx=T.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Cx=T(Ot).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,$x=T.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Ax=g.forwardRef(({backgroundStyles:e,children:t,...n},r)=>E.createElement(Sx,{ref:r,...n},E.createElement(Ex,null,E.createElement(bx,null,E.createElement(Cx,{style:e},t)),E.createElement($x,null))));Ax.displayName="Monitor";const Tx=T.div`
  display: inline-block;
  height: ${Re.md};
  width: 100%;
`,Px=T(Ot)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,gm=R`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Dx=T.div`
  position: relative;
  top: 4px;
  ${gm}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Nx=T.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${gm}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,_x=T.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,vm=17,Rx=T.span`
  display: inline-block;
  width: ${vm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Ix=g.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=g.useRef(null),[s,u]=g.useState([]),h=g.useCallback(()=>{if(!a.current||n===void 0)return;const f=a.current.getBoundingClientRect().width,m=Math.round(n/100*f/vm);u(Array.from({length:m}))},[n]);return g.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h]),E.createElement(Tx,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},E.createElement(Px,{variant:r,shadow:t},r==="default"?E.createElement(E.Fragment,null,E.createElement(Dx,{"data-testid":"defaultProgress1"},i),E.createElement(Nx,{"data-testid":"defaultProgress2",value:n},i)):E.createElement(_x,{ref:a,"data-testid":"tileProgress"},s.map((f,m)=>E.createElement(Rx,{key:m})))))});Ix.displayName="ProgressBar";const ym=R`
  width: ${Rt}px;
  height: ${Rt}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Lx=T(Ot)`
  ${ym}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Ox=T.div`
  ${Qn()}
  ${ym}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,jx=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,Mx={flat:Ox,default:Lx},zx=g.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const u=Mx[i];return E.createElement(Ku,{$disabled:n,className:t,style:l},E.createElement(u,{$disabled:n,role:"presentation"},e&&E.createElement(jx,{$disabled:n,variant:i})),E.createElement(hi,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&E.createElement(Xu,null,r))});zx.displayName="Radio";const Bx=typeof window<"u"?g.useLayoutEffect:g.useEffect;function Tn(e){const t=g.useRef(e);return Bx(()=>{t.current=e}),g.useCallback((...n)=>(0,t.current)(...n),[])}function _d(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Rd(e,t){return g.useMemo(()=>e==null&&t==null?null:n=>{_d(e,n),_d(t,n)},[e,t])}let Gi=!0,zs=!1,Id;const Fx={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Ux(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&Fx[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Wx(e){e.metaKey||e.altKey||e.ctrlKey||(Gi=!0)}function Da(){Gi=!1}function Hx(){this.visibilityState==="hidden"&&zs&&(Gi=!0)}function Vx(e){e.addEventListener("keydown",Wx,!0),e.addEventListener("mousedown",Da,!0),e.addEventListener("pointerdown",Da,!0),e.addEventListener("touchstart",Da,!0),e.addEventListener("visibilitychange",Hx,!0)}function Qx(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Gi||Ux(t)}function Gx(){zs=!0,window.clearTimeout(Id),Id=window.setTimeout(()=>{zs=!1},100)}function Yx(){const e=g.useCallback(t=>{const n=_i.findDOMNode(t);n!=null&&Vx(n.ownerDocument)},[]);return{isFocusVisible:Qx,onBlurVisible:Gx,ref:e}}function Kx(e,t,n){return(n-t)*e+t}function yl(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function wl(e){return e&&e.ownerDocument||document}function Xx(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const Zx=T.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?R`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:R`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,wm=()=>R`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?R`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:R`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Jx=T(Ot)`
  ${wm()}
`,qx=T(Ot)`
  ${wm()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,ek=T.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?R`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:R`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?R`
          ${Qn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:R`
          ${Ct()}
          ${me()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Xo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,mr=6,tk=T.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?R`
          right: ${-mr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${mr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:R`
          bottom: ${-mr}px;
          height: ${mr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&R`
      ${bt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,nk=T.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?R`
          transform: translate(${mr+2}px, ${mr+1}px);
        `:R`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,rk=g.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:h="100%",step:f=1,value:m,variant:w="default",...y},k)=>{const $=w==="flat"?qx:Jx,p=u==="vertical",[c=o,d]=Sn({defaultValue:e,onChange:i??a,value:m}),{isFocusVisible:v,onBlurVisible:x,ref:b}=Yx(),[S,D]=g.useState(!1),j=g.useRef(),L=g.useRef(null),Q=Rd(b,j),Z=Rd(k,Q),ae=Tn(M=>{v(M)&&D(!0)}),re=Tn(()=>{S!==!1&&(D(!1),x())}),te=g.useRef(),we=g.useMemo(()=>n===!0&&Number.isFinite(f)?[...Array(Math.round((r-o)/f)+1)].map((M,z)=>({label:void 0,value:o+f*z})):Array.isArray(n)?n:[],[n,r,o,f]),pe=Tn(M=>{const z=(r-o)/10,K=we.map(Ce=>Ce.value),B=K.indexOf(c);let H=0;switch(M.key){case"Home":H=o;break;case"End":H=r;break;case"PageUp":f&&(H=c+z);break;case"PageDown":f&&(H=c-z);break;case"ArrowRight":case"ArrowUp":f?H=c+f:H=K[B+1]||K[K.length-1];break;case"ArrowLeft":case"ArrowDown":f?H=c-f:H=K[B-1]||K[0];break;default:return}M.preventDefault(),f&&(H=Pd(H,f,o)),H=Ln(H,o,r),d(H),D(!0),i==null||i(H),a==null||a(H)}),A=g.useCallback(M=>{if(!j.current)return 0;const z=j.current.getBoundingClientRect();let K;p?K=(z.bottom-M.y)/z.height:K=(M.x-z.left)/z.width;let B;if(B=Kx(K,o,r),f)B=Pd(B,f,o);else{const H=we.map(N=>N.value),Ce=Xx(H,B);B=H[Ce]}return B=Ln(B,o,r),B},[we,r,o,f,p]),_=Tn(M=>{var z;const K=yl(M,te.current);if(!K)return;const B=A(K);(z=L.current)===null||z===void 0||z.focus(),d(B),D(!0),i==null||i(B)}),O=Tn(M=>{const z=yl(M,te.current);if(!z)return;const K=A(z);a==null||a(K),te.current=void 0;const B=wl(j.current);B.removeEventListener("mousemove",_),B.removeEventListener("mouseup",O),B.removeEventListener("touchmove",_),B.removeEventListener("touchend",O)}),Y=Tn(M=>{var z;s==null||s(M),M.preventDefault(),(z=L.current)===null||z===void 0||z.focus(),D(!0);const K=yl(M,te.current);if(K){const H=A(K);d(H),i==null||i(H)}const B=wl(j.current);B.addEventListener("mousemove",_),B.addEventListener("mouseup",O)}),W=Tn(M=>{var z;M.preventDefault();const K=M.changedTouches[0];K!=null&&(te.current=K.identifier),(z=L.current)===null||z===void 0||z.focus(),D(!0);const B=yl(M,te.current);if(B){const Ce=A(B);d(Ce),i==null||i(Ce)}const H=wl(j.current);H.addEventListener("touchmove",_),H.addEventListener("touchend",O)});return g.useEffect(()=>{const{current:M}=j;M==null||M.addEventListener("touchstart",W);const z=wl(M);return()=>{M==null||M.removeEventListener("touchstart",W),z.removeEventListener("mousemove",_),z.removeEventListener("mouseup",O),z.removeEventListener("touchmove",_),z.removeEventListener("touchend",O)}},[O,_,W]),E.createElement(Zx,{$disabled:t,hasMarks:!!we.length,isFocused:S,onMouseDown:Y,orientation:u,ref:Z,size:kn(h),...y},E.createElement("input",{disabled:t,name:l,type:"hidden",value:c??0}),we&&we.map(M=>E.createElement(tk,{$disabled:t,"data-testid":"tick",key:M.value/(r-o)*100,orientation:u,style:{[p?"bottom":"left"]:`${(M.value-o)/(r-o)*100}%`}},M.label&&E.createElement(nk,{"aria-hidden":!0,"data-testid":"mark",orientation:u},M.label))),E.createElement($,{orientation:u,variant:w}),E.createElement(ek,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":c,onBlur:re,onFocus:ae,onKeyDown:pe,orientation:u,ref:L,role:"slider",style:{[p?"bottom":"left"]:`${(p?-100:0)+100*(c-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:w}))});rk.displayName="Slider";const ok=T.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Gu};
  overflow-y: auto;
`,xm=g.forwardRef(function({children:t,...n},r){return E.createElement(ok,{ref:r,...n},t)});xm.displayName="TableBody";const lk=T.td`
  padding: 0 8px;
`,At=g.forwardRef(function({children:t,...n},r){return E.createElement(lk,{ref:r,...n},t)});At.displayName="TableDataCell";const ik=T.thead`
  display: table-header-group;
`,km=g.forwardRef(function({children:t,...n},r){return E.createElement(ik,{ref:r,...n},t)});km.displayName="TableHead";const ak=T.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${me()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&R`
      &:active {
        &:before {
          ${me({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&bt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&bt()}
  }
`,jl=g.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Zn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return E.createElement(ak,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},E.createElement("div",null,n))});jl.displayName="TableHeadCell";const sk=T.tr`
  color: inherit;
  display: table-row;
  height: calc(${Re.md} - 2px);
  line-height: calc(${Re.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,oo=g.forwardRef(function({children:t,...n},r){return E.createElement(sk,{ref:r,...n},t)});oo.displayName="TableRow";const uk=T.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,ck=T(Ot)`
  &:before {
    box-shadow: none;
  }
`,Sm=g.forwardRef(({children:e,...t},n)=>E.createElement(ck,null,E.createElement(uk,{ref:n,...t},e)));Sm.displayName="Table";const dk=T.button`
  ${Ct()}
  ${me()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Re.md};
  line-height: ${Re.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Lr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Re.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,fk=g.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>E.createElement(dk,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));fk.displayName="Tab";const pk=T.div`
  ${Ct()}
  ${me()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,hk=g.forwardRef(({children:e,...t},n)=>E.createElement(pk,{ref:n,...t},e));hk.displayName="TabBody";const mk=T.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,gk=T.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function vk(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const yk=g.forwardRef(({value:e,onChange:t=Zn,children:n,rows:r=1,...o},l)=>{const i=g.useMemo(()=>{var a;const s=(a=E.Children.map(n,f=>{if(!E.isValidElement(f))return null;const m={selected:f.props.value===e,onClick:t};return E.cloneElement(f,m)}))!==null&&a!==void 0?a:[],u=vk(s,r).map((f,m)=>({key:m,tabs:f})),h=u.findIndex(f=>f.tabs.some(m=>m.props.selected));return u.push(u.splice(h,1)[0]),u},[n,t,r,e]);return E.createElement(mk,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>E.createElement(gk,{key:a.key},a.tabs)))});yk.displayName="Tabs";const wk=["blur","focus"],xk=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Ld(e){return"nativeEvent"in e&&wk.includes(e.type)}function Od(e){return"nativeEvent"in e&&xk.includes(e.type)}const kk={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Sk=T.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Qu};
  text-align: center;
  font-size: 1rem;
  ${e=>kk[e.position]}
`,Ek=T.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,bk=g.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:h,onOpen:f,style:m,text:w,position:y="top",...k},$)=>{const[p,c]=g.useState(!1),[d,v]=g.useState(),[x,b]=g.useState(),S=!n,D=!r,j=A=>{window.clearTimeout(d),window.clearTimeout(x);const _=window.setTimeout(()=>{c(!0),f==null||f(A)},o);v(_)},L=A=>{A.persist(),Ld(A)?s==null||s(A):Od(A)&&(u==null||u(A)),j(A)},Q=A=>{window.clearTimeout(d),window.clearTimeout(x);const _=window.setTimeout(()=>{c(!1),a==null||a(A)},l);b(_)},Z=A=>{A.persist(),Ld(A)?i==null||i(A):Od(A)&&(h==null||h(A)),Q(A)},ae=S?Z:void 0,re=S?L:void 0,te=D?L:void 0,we=D?Z:void 0,pe=S?0:void 0;return E.createElement(Ek,{"data-testid":"tooltip-wrapper",onBlur:ae,onFocus:re,onMouseEnter:te,onMouseLeave:we,tabIndex:pe},E.createElement(Sk,{className:e,"data-testid":"tooltip",position:y,ref:$,show:p,style:m,...k},w),t)});bk.displayName="Tooltip";const Bs=T(Xu)`
  white-space: nowrap;
`,Em=R`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":R`
          cursor: pointer;

          :focus {
            ${Bs} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Ck=T.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&R`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,$k=T.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?R`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:R`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,Ak=T.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Tk=T.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Em};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,jd=T(Ku)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Em};
`,Pk=T.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Md(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function zd(e){e.preventDefault()}function bm({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const u=o===0,h=g.useCallback(f=>{var m,w;const y=!!(f.items&&f.items.length>0),k=n.includes(f.id),$=(m=t||f.disabled)!==null&&m!==void 0?m:!1,p=$?zd:x=>l(x,f),c=$?zd:x=>l(x,f),d=i===f.id,v=E.createElement(Pk,{"aria-hidden":!0},f.icon);return E.createElement($k,{key:f.label,isRootLevel:u,role:"treeitem","aria-expanded":k,"aria-selected":d,hasItems:y},y?E.createElement(Ak,{open:k},E.createElement(Tk,{onClick:p,$disabled:$},E.createElement(jd,{$disabled:$},v,E.createElement(Bs,null,f.label))),k&&E.createElement(bm,{className:e,disabled:$,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(w=f.items)!==null&&w!==void 0?w:[]})):E.createElement(jd,{as:"button",$disabled:$,onClick:c},v,E.createElement(Bs,null,f.label)))},[e,t,n,u,o,l,i,a]);return E.createElement(Ck,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(h))}function Dk({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:u=[]},h){const[f,m]=Sn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[w,y]=Sn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),k=g.useCallback((c,d)=>{if(i){const v=Md(f,d);i(c,v)}m(v=>Md(v,d))},[f,i,m]),$=g.useCallback((c,d)=>{y(d),l&&l(c,d)},[l,y]),p=g.useCallback((c,d)=>{c.preventDefault(),$(c,d.id),d.items&&d.items.length&&k(c,d.id)},[$,k]);return E.createElement(bm,{className:e,disabled:r,expanded:f,level:0,innerRef:h,select:p,selected:w,style:s,tree:u})}const Nk=g.forwardRef(Dk);Nk.displayName="TreeView";const _k=()=>{const[e,t]=g.useState(!0),n=()=>{t(!e)};return C.jsxs(C.Fragment,{children:[C.jsx("div",{style:{width:"100%"},children:C.jsx(Sr,{className:"nav-link spc",to:"/",children:C.jsx(ut,{children:"Go back"})})}),C.jsxs(Lo,{style:{marginTop:"7%"},children:[C.jsx("h1",{className:"big_h1",children:"Hello, my name is Alan. I'm 26 yrs old software developer from Almaty"}),C.jsx("p",{className:"big_text",children:"There is a list of reasons why you should choose me:"})]}),C.jsxs("div",{className:"desktop-windows",children:[C.jsxs(Fo,{resizable:!0,className:"window",style:{width:"50%",marginTop:"2%"},children:[C.jsxs(Bo,{className:"window-title",children:[C.jsx("span",{children:"AboutMe.exe"}),C.jsx(ut,{style:{left:"83%"},children:C.jsx("span",{className:"close-icon"})})]}),C.jsxs(mi,{children:[C.jsx(ut,{variant:"menu",size:"sm",children:"File"}),C.jsx(ut,{variant:"menu",size:"sm",children:"Edit"}),C.jsx(ut,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),C.jsx(zo,{children:C.jsxs("ul",{children:[C.jsx("li",{children:"* Im profient in React, Redux, RTK, React Router Dom"}),C.jsx("li",{children:"* Im also interested in backend. I know Node js, express js. Im also learning php rn"}),C.jsx("li",{children:"* I know some wordpress, including WPGatsby and WPGraphQL =)"}),C.jsx("li",{children:" * MySQL, SQLite, MariaDB, Postgres"}),C.jsx("li",{children:"* Git, Github, Prettier, Vite, Sass, Scss and of course HTML/CSS/VanillaJS"}),C.jsx("li",{children:" * Im cool, funny, smart, communicative"}),C.jsx("li",{children:"* My cat will be sad if you don't hire me, you can see his photo below!"})]})}),C.jsx(mm,{variant:"well",className:"footer",onClick:n,style:{cursor:"pointer"},children:"Click here to see my cat!"})]}),C.jsx(Ky,{children:C.jsxs(Fo,{resizable:!0,className:`window ${e?"dnone":""}`,style:{width:"300px",height:"300px",marginTop:"2%"},children:[C.jsxs(Bo,{className:"window-title",children:[C.jsx("span",{children:"cat.exe"}),C.jsx(ut,{style:{marginLeft:"80%",bottom:"32px",left:"26px"},onClick:n,children:C.jsx("span",{className:"close-icon"})})]}),C.jsxs(zo,{style:{textAlign:"center"},children:[C.jsx("img",{src:"./leo.png",width:"200px",height:"200px",alt:"my cool cat"}),C.jsx("p",{children:"His name is leo btw"})]})]})})]}),C.jsx("div",{className:"mobile-windows",children:C.jsxs(Lo,{children:[C.jsxs("ul",{children:[C.jsx("li",{children:"* Im profient in React, Redux, RTK, React Router Dom"}),C.jsx("li",{children:"* Im also interested in backend. I know Node js, express js. Im also learning php rn"}),C.jsx("li",{children:"* I know some wordpress, including WPGatsby and WPGraphQL =)"}),C.jsx("li",{children:" * MySQL, SQLite, MariaDB, Postgres"}),C.jsx("li",{children:"* Git, Github, Prettier, Vite, Sass, Scss and of course HTML/CSS/VanillaJS"}),C.jsx("li",{children:" * Im cool, funny, smart, communicative"}),C.jsx("li",{children:"* My cat will be sad if you don't hire me, you can see his photo below!"})]}),C.jsx(sy,{src:"./leo.png",roundedCircle:!0}),C.jsx("p",{children:"His name is leo btw"})]})})]})},Rk=()=>C.jsxs(C.Fragment,{children:[C.jsx("div",{style:{width:"100%"},children:C.jsx(Sr,{className:"nav-link spc",to:"/",children:C.jsx(ut,{children:"Go back"})})}),C.jsxs(Lo,{children:[C.jsx("h1",{className:"big_h1",children:"Contact Me:"}),C.jsxs("ul",{children:[C.jsxs("li",{className:"big_p",children:["Instagram:",C.jsx("a",{href:"https://www.instagram.com/alanltnds/",children:" @alanltnds"})]}),C.jsxs("li",{className:"big_p",children:["Telegram: ",C.jsx("a",{href:"t.me/antiquerex",children:"antiquerex"})]}),C.jsxs("li",{className:"big_p",children:["Linkedin:",C.jsx("a",{href:"https://www.linkedin.com/in/alan-altindis-782485130/",children:"Alan Altindis"})]}),C.jsxs("li",{className:"big_p",children:["Phone: ",C.jsx("a",{href:"tel: +77770535867",children:"+77770535867"})]}),C.jsxs("li",{className:"big_p",children:["Github: ",C.jsx("a",{href:"https://github.com/alanslim",children:"alanslim"})]})]})]})]}),Ik=()=>C.jsxs("div",{className:"d-flex px_600",children:[C.jsx("div",{style:{width:"100%"},children:C.jsx(Sr,{className:"nav-link spc",to:"/",children:C.jsx(ut,{children:"Go back"})})}),C.jsxs(Lo,{children:[C.jsx("div",{className:"desktop-windows",children:C.jsxs(Fo,{style:{width:600,marginLeft:50},children:[C.jsx(Bo,{children:"Projects.exe"}),C.jsx(zo,{children:C.jsxs(Sm,{children:[C.jsx(km,{children:C.jsxs(oo,{children:[C.jsx(jl,{children:"Type"}),C.jsx(jl,{children:"Name"}),C.jsx(jl,{children:"Link"})]})}),C.jsxs(xm,{children:[C.jsxs(oo,{children:[C.jsx(At,{style:{textAlign:"center"},children:C.jsx("span",{role:"img","aria-label":"LEAF",children:"HTML/CSS website"})}),C.jsx(At,{children:"os2.kz"}),C.jsx(At,{children:C.jsx("a",{href:"https://www.os2.kz/",children:"Click"})})]}),C.jsxs(oo,{children:[C.jsx(At,{style:{textAlign:"center"},children:C.jsx("span",{role:"img","aria-label":"fire",children:"Web application"})}),C.jsx(At,{children:"os2.kz/tamek"}),C.jsx(At,{children:C.jsx("a",{href:"https://www.os2.kz/tamek/",children:"Click"})})]}),C.jsxs(oo,{children:[C.jsx(At,{style:{textAlign:"center"},children:C.jsx("span",{role:"img","aria-label":"lightning",children:"Mobile application"})}),C.jsx(At,{children:"ONAY CLONE"}),C.jsx(At,{children:C.jsx("a",{href:"https://github.com/alanslim/onay/",children:"Click"})})]})]})]})})]})}),C.jsx("div",{className:"mobile-windows",children:C.jsxs("ul",{children:[C.jsxs("li",{children:[" ",C.jsx("a",{href:"https:/www.os2.kz",children:"os2.kz"})]}),C.jsxs("li",{children:["  ",C.jsx("a",{href:"https:/www.os2.kz/tamek",children:"tamek react app"})]}),C.jsxs("li",{children:["  ",C.jsx("a",{href:"https://github.com/alanslim/onay/",children:"onay react-native"})]})]})})]})]}),Lk="/assets/ms_sans_serif-7vK4zdaj.woff2",Ok="/assets/ms_sans_serif_bold--XaUURxl.woff2",jk=T.div`
  padding: 5rem;
  background: ${({theme:e})=>e.desktopBackground};
  height: 100%
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: grab;
    user-select: none;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: ${({theme:e})=>e.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 100%;
    min-height: 200px;
    margin: 0 auto; /* Центрирование по горизонтали */
    /* Убрать position: absolute; */
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`,Mk=J1`
  ${Xy}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Lk}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Ok}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`,zk=()=>C.jsxs(jk,{style:{minHeight:"900px"},children:[C.jsx(Mk,{}),C.jsx(Gv,{children:C.jsxs(Bv,{children:[C.jsx(no,{path:"/",element:C.jsx(uy,{})}),C.jsx(no,{path:"/projects",element:C.jsx(Ik,{})}),C.jsx(no,{path:"/about",element:C.jsx(_k,{})}),C.jsx(no,{path:"/contacts",element:C.jsx(Rk,{})})]})})]});var Bk={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},Fk=Bk;const Uk=Uo(Fk);Na.createRoot(document.getElementById("root")).render(C.jsx(E.StrictMode,{children:C.jsx(K1,{theme:Uk,children:C.jsx(zk,{})})}));
