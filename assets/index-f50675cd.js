(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function yM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ex={exports:{}},$f={},tx={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu=Symbol.for("react.element"),SM=Symbol.for("react.portal"),MM=Symbol.for("react.fragment"),EM=Symbol.for("react.strict_mode"),TM=Symbol.for("react.profiler"),wM=Symbol.for("react.provider"),AM=Symbol.for("react.context"),CM=Symbol.for("react.forward_ref"),RM=Symbol.for("react.suspense"),bM=Symbol.for("react.memo"),PM=Symbol.for("react.lazy"),H_=Symbol.iterator;function LM(n){return n===null||typeof n!="object"?null:(n=H_&&n[H_]||n["@@iterator"],typeof n=="function"?n:null)}var nx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ix=Object.assign,rx={};function rl(n,e,t){this.props=n,this.context=e,this.refs=rx,this.updater=t||nx}rl.prototype.isReactComponent={};rl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};rl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function sx(){}sx.prototype=rl.prototype;function dm(n,e,t){this.props=n,this.context=e,this.refs=rx,this.updater=t||nx}var hm=dm.prototype=new sx;hm.constructor=dm;ix(hm,rl.prototype);hm.isPureReactComponent=!0;var V_=Array.isArray,ox=Object.prototype.hasOwnProperty,pm={current:null},ax={key:!0,ref:!0,__self:!0,__source:!0};function lx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ox.call(e,i)&&!ax.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Uu,type:n,key:s,ref:o,props:r,_owner:pm.current}}function DM(n,e){return{$$typeof:Uu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function mm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Uu}function UM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var G_=/\/+/g;function Md(n,e){return typeof n=="object"&&n!==null&&n.key!=null?UM(""+n.key):e.toString(36)}function Bc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Uu:case SM:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Md(o,0):i,V_(r)?(t="",n!=null&&(t=n.replace(G_,"$&/")+"/"),Bc(r,e,t,"",function(u){return u})):r!=null&&(mm(r)&&(r=DM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(G_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",V_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Md(s,a);o+=Bc(s,e,t,l,r)}else if(l=LM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Md(s,a++),o+=Bc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vu(n,e,t){if(n==null)return n;var i=[],r=0;return Bc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function NM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gn={current:null},Hc={transition:null},IM={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:Hc,ReactCurrentOwner:pm};at.Children={map:Vu,forEach:function(n,e,t){Vu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Vu(n,function(){e++}),e},toArray:function(n){return Vu(n,function(e){return e})||[]},only:function(n){if(!mm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=rl;at.Fragment=MM;at.Profiler=TM;at.PureComponent=dm;at.StrictMode=EM;at.Suspense=RM;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IM;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ix({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ox.call(e,l)&&!ax.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Uu,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:AM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:wM,_context:n},n.Consumer=n};at.createElement=lx;at.createFactory=function(n){var e=lx.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:CM,render:n}};at.isValidElement=mm;at.lazy=function(n){return{$$typeof:PM,_payload:{_status:-1,_result:n},_init:NM}};at.memo=function(n,e){return{$$typeof:bM,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=Hc.transition;Hc.transition={};try{n()}finally{Hc.transition=e}};at.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};at.useCallback=function(n,e){return Gn.current.useCallback(n,e)};at.useContext=function(n){return Gn.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return Gn.current.useDeferredValue(n)};at.useEffect=function(n,e){return Gn.current.useEffect(n,e)};at.useId=function(){return Gn.current.useId()};at.useImperativeHandle=function(n,e,t){return Gn.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return Gn.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return Gn.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return Gn.current.useMemo(n,e)};at.useReducer=function(n,e,t){return Gn.current.useReducer(n,e,t)};at.useRef=function(n){return Gn.current.useRef(n)};at.useState=function(n){return Gn.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return Gn.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return Gn.current.useTransition()};at.version="18.2.0";tx.exports=at;var Ct=tx.exports;const ps=yM(Ct);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OM=Ct,FM=Symbol.for("react.element"),kM=Symbol.for("react.fragment"),zM=Object.prototype.hasOwnProperty,BM=OM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HM={key:!0,ref:!0,__self:!0,__source:!0};function ux(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zM.call(e,i)&&!HM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:FM,type:n,key:s,ref:o,props:r,_owner:BM.current}}$f.Fragment=kM;$f.jsx=ux;$f.jsxs=ux;ex.exports=$f;var Ee=ex.exports,Bh={},cx={exports:{}},yi={},fx={exports:{}},dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,W){var C=U.length;U.push(W);e:for(;0<C;){var N=C-1>>>1,H=U[N];if(0<r(H,W))U[N]=W,U[C]=H,C=N;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var W=U[0],C=U.pop();if(C!==W){U[0]=C;e:for(var N=0,H=U.length,ue=H>>>1;N<ue;){var re=2*(N+1)-1,fe=U[re],ve=re+1,ye=U[ve];if(0>r(fe,C))ve<H&&0>r(ye,fe)?(U[N]=ye,U[ve]=C,N=ve):(U[N]=fe,U[re]=C,N=re);else if(ve<H&&0>r(ye,C))U[N]=ye,U[ve]=C,N=ve;else break e}}return W}function r(U,W){var C=U.sortIndex-W.sortIndex;return C!==0?C:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var W=t(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=U)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(u)}}function y(U){if(_=!1,x(U),!g)if(t(l)!==null)g=!0,J(E);else{var W=t(u);W!==null&&O(y,W.startTime-U)}}function E(U,W){g=!1,_&&(_=!1,d(P),P=-1),p=!0;var C=f;try{for(x(W),h=t(l);h!==null&&(!(h.expirationTime>W)||U&&!j());){var N=h.callback;if(typeof N=="function"){h.callback=null,f=h.priorityLevel;var H=N(h.expirationTime<=W);W=n.unstable_now(),typeof H=="function"?h.callback=H:h===t(l)&&i(l),x(W)}else i(l);h=t(l)}if(h!==null)var ue=!0;else{var re=t(u);re!==null&&O(y,re.startTime-W),ue=!1}return ue}finally{h=null,f=C,p=!1}}var w=!1,M=null,P=-1,S=5,T=-1;function j(){return!(n.unstable_now()-T<S)}function z(){if(M!==null){var U=n.unstable_now();T=U;var W=!0;try{W=M(!0,U)}finally{W?I():(w=!1,M=null)}}else w=!1}var I;if(typeof v=="function")I=function(){v(z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,k=F.port2;F.port1.onmessage=z,I=function(){k.postMessage(null)}}else I=function(){m(z,0)};function J(U){M=U,w||(w=!0,I())}function O(U,W){P=m(function(){U(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,J(E))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var C=f;f=W;try{return U()}finally{f=C}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var C=f;f=U;try{return W()}finally{f=C}},n.unstable_scheduleCallback=function(U,W,C){var N=n.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?N+C:N):C=N,U){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=C+H,U={id:c++,callback:W,priorityLevel:U,startTime:C,expirationTime:H,sortIndex:-1},C>N?(U.sortIndex=C,e(u,U),t(l)===null&&U===t(u)&&(_?(d(P),P=-1):_=!0,O(y,C-N))):(U.sortIndex=H,e(l,U),g||p||(g=!0,J(E))),U},n.unstable_shouldYield=j,n.unstable_wrapCallback=function(U){var W=f;return function(){var C=f;f=W;try{return U.apply(this,arguments)}finally{f=C}}}})(dx);fx.exports=dx;var VM=fx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=Ct,vi=VM;function le(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var px=new Set,su={};function No(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(su[n]=e,n=0;n<e.length;n++)px.add(e[n])}var Br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hh=Object.prototype.hasOwnProperty,GM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W_={},X_={};function WM(n){return Hh.call(X_,n)?!0:Hh.call(W_,n)?!1:GM.test(n)?X_[n]=!0:(W_[n]=!0,!1)}function XM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function jM(n,e,t,i){if(e===null||typeof e>"u"||XM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){mn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];mn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){mn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){mn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){mn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){mn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){mn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){mn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){mn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var _m=/[\-:]([a-z])/g;function gm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(_m,gm);mn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(_m,gm);mn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(_m,gm);mn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){mn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});mn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){mn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function vm(n,e,t,i){var r=mn.hasOwnProperty(e)?mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jM(e,t,r,i)&&(t=null),i||r===null?WM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var jr=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),ca=Symbol.for("react.portal"),fa=Symbol.for("react.fragment"),xm=Symbol.for("react.strict_mode"),Vh=Symbol.for("react.profiler"),mx=Symbol.for("react.provider"),_x=Symbol.for("react.context"),ym=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),Sm=Symbol.for("react.memo"),es=Symbol.for("react.lazy"),gx=Symbol.for("react.offscreen"),j_=Symbol.iterator;function cl(n){return n===null||typeof n!="object"?null:(n=j_&&n[j_]||n["@@iterator"],typeof n=="function"?n:null)}var It=Object.assign,Ed;function Al(n){if(Ed===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+n}var Td=!1;function wd(n,e){if(!n||Td)return"";Td=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Td=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Al(n):""}function YM(n){switch(n.tag){case 5:return Al(n.type);case 16:return Al("Lazy");case 13:return Al("Suspense");case 19:return Al("SuspenseList");case 0:case 2:case 15:return n=wd(n.type,!1),n;case 11:return n=wd(n.type.render,!1),n;case 1:return n=wd(n.type,!0),n;default:return""}}function Xh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fa:return"Fragment";case ca:return"Portal";case Vh:return"Profiler";case xm:return"StrictMode";case Gh:return"Suspense";case Wh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _x:return(n.displayName||"Context")+".Consumer";case mx:return(n._context.displayName||"Context")+".Provider";case ym:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Sm:return e=n.displayName||null,e!==null?e:Xh(n.type)||"Memo";case es:e=n._payload,n=n._init;try{return Xh(n(e))}catch{}}return null}function qM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xh(e);case 8:return e===xm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ps(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $M(n){var e=vx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wu(n){n._valueTracker||(n._valueTracker=$M(n))}function xx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=vx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function cf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function jh(n,e){var t=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Y_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ps(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yx(n,e){e=e.checked,e!=null&&vm(n,"checked",e,!1)}function Yh(n,e){yx(n,e);var t=Ps(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?qh(n,e.type,t):e.hasOwnProperty("defaultValue")&&qh(n,e.type,Ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function q_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function qh(n,e,t){(e!=="number"||cf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Cl=Array.isArray;function Ca(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ps(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function $h(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(le(92));if(Cl(t)){if(1<t.length)throw Error(le(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ps(t)}}function Sx(n,e){var t=Ps(e.value),i=Ps(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function K_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Mx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Mx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xu,Ex=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Xu=Xu||document.createElement("div"),Xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ou(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KM=["Webkit","ms","Moz","O"];Object.keys(Ol).forEach(function(n){KM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ol[e]=Ol[n]})});function Tx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ol.hasOwnProperty(n)&&Ol[n]?(""+e).trim():e+"px"}function wx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Tx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ZM=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zh(n,e){if(e){if(ZM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Qh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=null;function Mm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ep=null,Ra=null,ba=null;function Z_(n){if(n=Ou(n)){if(typeof ep!="function")throw Error(le(280));var e=n.stateNode;e&&(e=ed(e),ep(n.stateNode,n.type,e))}}function Ax(n){Ra?ba?ba.push(n):ba=[n]:Ra=n}function Cx(){if(Ra){var n=Ra,e=ba;if(ba=Ra=null,Z_(n),e)for(n=0;n<e.length;n++)Z_(e[n])}}function Rx(n,e){return n(e)}function bx(){}var Ad=!1;function Px(n,e,t){if(Ad)return n(e,t);Ad=!0;try{return Rx(n,e,t)}finally{Ad=!1,(Ra!==null||ba!==null)&&(bx(),Cx())}}function au(n,e){var t=n.stateNode;if(t===null)return null;var i=ed(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(le(231,e,typeof t));return t}var tp=!1;if(Br)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){tp=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{tp=!1}function QM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Fl=!1,ff=null,df=!1,np=null,JM={onError:function(n){Fl=!0,ff=n}};function eE(n,e,t,i,r,s,o,a,l){Fl=!1,ff=null,QM.apply(JM,arguments)}function tE(n,e,t,i,r,s,o,a,l){if(eE.apply(this,arguments),Fl){if(Fl){var u=ff;Fl=!1,ff=null}else throw Error(le(198));df||(df=!0,np=u)}}function Io(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Lx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Q_(n){if(Io(n)!==n)throw Error(le(188))}function nE(n){var e=n.alternate;if(!e){if(e=Io(n),e===null)throw Error(le(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Q_(r),n;if(s===i)return Q_(r),e;s=s.sibling}throw Error(le(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(t.alternate!==i)throw Error(le(190))}if(t.tag!==3)throw Error(le(188));return t.stateNode.current===t?n:e}function Dx(n){return n=nE(n),n!==null?Ux(n):null}function Ux(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ux(n);if(e!==null)return e;n=n.sibling}return null}var Nx=vi.unstable_scheduleCallback,J_=vi.unstable_cancelCallback,iE=vi.unstable_shouldYield,rE=vi.unstable_requestPaint,Ht=vi.unstable_now,sE=vi.unstable_getCurrentPriorityLevel,Em=vi.unstable_ImmediatePriority,Ix=vi.unstable_UserBlockingPriority,hf=vi.unstable_NormalPriority,oE=vi.unstable_LowPriority,Ox=vi.unstable_IdlePriority,Kf=null,fr=null;function aE(n){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(Kf,n,void 0,(n.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:cE,lE=Math.log,uE=Math.LN2;function cE(n){return n>>>=0,n===0?32:31-(lE(n)/uE|0)|0}var ju=64,Yu=4194304;function Rl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Rl(a):(s&=o,s!==0&&(i=Rl(s)))}else o=t&~r,o!==0?i=Rl(o):s!==0&&(i=Rl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-er(e),r=1<<t,i|=n[t],e&=~r;return i}function fE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-er(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=fE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ip(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Fx(){var n=ju;return ju<<=1,!(ju&4194240)&&(ju=64),n}function Cd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-er(e),n[e]=t}function hE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-er(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Tm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-er(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ht=0;function kx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var zx,wm,Bx,Hx,Vx,rp=!1,qu=[],ms=null,_s=null,gs=null,lu=new Map,uu=new Map,is=[],pE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(n,e){switch(n){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":lu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(e.pointerId)}}function dl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ou(e),e!==null&&wm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function mE(n,e,t,i,r){switch(e){case"focusin":return ms=dl(ms,n,e,t,i,r),!0;case"dragenter":return _s=dl(_s,n,e,t,i,r),!0;case"mouseover":return gs=dl(gs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return lu.set(s,dl(lu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uu.set(s,dl(uu.get(s)||null,n,e,t,i,r)),!0}return!1}function Gx(n){var e=no(n.target);if(e!==null){var t=Io(e);if(t!==null){if(e=t.tag,e===13){if(e=Lx(t),e!==null){n.blockedOn=e,Vx(n.priority,function(){Bx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=sp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Jh=i,t.target.dispatchEvent(i),Jh=null}else return e=Ou(t),e!==null&&wm(e),n.blockedOn=t,!1;e.shift()}return!0}function tg(n,e,t){Vc(n)&&t.delete(e)}function _E(){rp=!1,ms!==null&&Vc(ms)&&(ms=null),_s!==null&&Vc(_s)&&(_s=null),gs!==null&&Vc(gs)&&(gs=null),lu.forEach(tg),uu.forEach(tg)}function hl(n,e){n.blockedOn===e&&(n.blockedOn=null,rp||(rp=!0,vi.unstable_scheduleCallback(vi.unstable_NormalPriority,_E)))}function cu(n){function e(r){return hl(r,n)}if(0<qu.length){hl(qu[0],n);for(var t=1;t<qu.length;t++){var i=qu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ms!==null&&hl(ms,n),_s!==null&&hl(_s,n),gs!==null&&hl(gs,n),lu.forEach(e),uu.forEach(e),t=0;t<is.length;t++)i=is[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<is.length&&(t=is[0],t.blockedOn===null);)Gx(t),t.blockedOn===null&&is.shift()}var Pa=jr.ReactCurrentBatchConfig,mf=!0;function gE(n,e,t,i){var r=ht,s=Pa.transition;Pa.transition=null;try{ht=1,Am(n,e,t,i)}finally{ht=r,Pa.transition=s}}function vE(n,e,t,i){var r=ht,s=Pa.transition;Pa.transition=null;try{ht=4,Am(n,e,t,i)}finally{ht=r,Pa.transition=s}}function Am(n,e,t,i){if(mf){var r=sp(n,e,t,i);if(r===null)Fd(n,e,i,_f,t),eg(n,i);else if(mE(r,n,e,t,i))i.stopPropagation();else if(eg(n,i),e&4&&-1<pE.indexOf(n)){for(;r!==null;){var s=Ou(r);if(s!==null&&zx(s),s=sp(n,e,t,i),s===null&&Fd(n,e,i,_f,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fd(n,e,i,null,t)}}var _f=null;function sp(n,e,t,i){if(_f=null,n=Mm(i),n=no(n),n!==null)if(e=Io(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Lx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return _f=n,null}function Wx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sE()){case Em:return 1;case Ix:return 4;case hf:case oE:return 16;case Ox:return 536870912;default:return 16}default:return 16}}var ss=null,Cm=null,Gc=null;function Xx(){if(Gc)return Gc;var n,e=Cm,t=e.length,i,r="value"in ss?ss.value:ss.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Gc=r.slice(n,1<i?1-i:void 0)}function Wc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $u(){return!0}function ng(){return!1}function Si(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$u:ng,this.isPropagationStopped=ng,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),e}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rm=Si(sl),Iu=It({},sl,{view:0,detail:0}),xE=Si(Iu),Rd,bd,pl,Zf=It({},Iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pl&&(pl&&n.type==="mousemove"?(Rd=n.screenX-pl.screenX,bd=n.screenY-pl.screenY):bd=Rd=0,pl=n),Rd)},movementY:function(n){return"movementY"in n?n.movementY:bd}}),ig=Si(Zf),yE=It({},Zf,{dataTransfer:0}),SE=Si(yE),ME=It({},Iu,{relatedTarget:0}),Pd=Si(ME),EE=It({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),TE=Si(EE),wE=It({},sl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),AE=Si(wE),CE=It({},sl,{data:0}),rg=Si(CE),RE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=PE[n])?!!e[n]:!1}function bm(){return LE}var DE=It({},Iu,{key:function(n){if(n.key){var e=RE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Wc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(n){return n.type==="keypress"?Wc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Wc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),UE=Si(DE),NE=It({},Zf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sg=Si(NE),IE=It({},Iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),OE=Si(IE),FE=It({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),kE=Si(FE),zE=It({},Zf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),BE=Si(zE),HE=[9,13,27,32],Pm=Br&&"CompositionEvent"in window,kl=null;Br&&"documentMode"in document&&(kl=document.documentMode);var VE=Br&&"TextEvent"in window&&!kl,jx=Br&&(!Pm||kl&&8<kl&&11>=kl),og=String.fromCharCode(32),ag=!1;function Yx(n,e){switch(n){case"keyup":return HE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var da=!1;function GE(n,e){switch(n){case"compositionend":return qx(e);case"keypress":return e.which!==32?null:(ag=!0,og);case"textInput":return n=e.data,n===og&&ag?null:n;default:return null}}function WE(n,e){if(da)return n==="compositionend"||!Pm&&Yx(n,e)?(n=Xx(),Gc=Cm=ss=null,da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jx&&e.locale!=="ko"?null:e.data;default:return null}}var XE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!XE[n.type]:e==="textarea"}function $x(n,e,t,i){Ax(i),e=gf(e,"onChange"),0<e.length&&(t=new Rm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var zl=null,fu=null;function jE(n){oy(n,0)}function Qf(n){var e=ma(n);if(xx(e))return n}function YE(n,e){if(n==="change")return e}var Kx=!1;if(Br){var Ld;if(Br){var Dd="oninput"in document;if(!Dd){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Dd=typeof ug.oninput=="function"}Ld=Dd}else Ld=!1;Kx=Ld&&(!document.documentMode||9<document.documentMode)}function cg(){zl&&(zl.detachEvent("onpropertychange",Zx),fu=zl=null)}function Zx(n){if(n.propertyName==="value"&&Qf(fu)){var e=[];$x(e,fu,n,Mm(n)),Px(jE,e)}}function qE(n,e,t){n==="focusin"?(cg(),zl=e,fu=t,zl.attachEvent("onpropertychange",Zx)):n==="focusout"&&cg()}function $E(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Qf(fu)}function KE(n,e){if(n==="click")return Qf(e)}function ZE(n,e){if(n==="input"||n==="change")return Qf(e)}function QE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ir=typeof Object.is=="function"?Object.is:QE;function du(n,e){if(ir(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Hh.call(e,r)||!ir(n[r],e[r]))return!1}return!0}function fg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dg(n,e){var t=fg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fg(t)}}function Qx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Qx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Jx(){for(var n=window,e=cf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=cf(n.document)}return e}function Lm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function JE(n){var e=Jx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Qx(t.ownerDocument.documentElement,t)){if(i!==null&&Lm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=dg(t,s);var o=dg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var eT=Br&&"documentMode"in document&&11>=document.documentMode,ha=null,op=null,Bl=null,ap=!1;function hg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ap||ha==null||ha!==cf(i)||(i=ha,"selectionStart"in i&&Lm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bl&&du(Bl,i)||(Bl=i,i=gf(op,"onSelect"),0<i.length&&(e=new Rm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ha)))}function Ku(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var pa={animationend:Ku("Animation","AnimationEnd"),animationiteration:Ku("Animation","AnimationIteration"),animationstart:Ku("Animation","AnimationStart"),transitionend:Ku("Transition","TransitionEnd")},Ud={},ey={};Br&&(ey=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Jf(n){if(Ud[n])return Ud[n];if(!pa[n])return n;var e=pa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ey)return Ud[n]=e[t];return n}var ty=Jf("animationend"),ny=Jf("animationiteration"),iy=Jf("animationstart"),ry=Jf("transitionend"),sy=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Os(n,e){sy.set(n,e),No(e,[n])}for(var Nd=0;Nd<pg.length;Nd++){var Id=pg[Nd],tT=Id.toLowerCase(),nT=Id[0].toUpperCase()+Id.slice(1);Os(tT,"on"+nT)}Os(ty,"onAnimationEnd");Os(ny,"onAnimationIteration");Os(iy,"onAnimationStart");Os("dblclick","onDoubleClick");Os("focusin","onFocus");Os("focusout","onBlur");Os(ry,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);No("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));No("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));No("onBeforeInput",["compositionend","keypress","textInput","paste"]);No("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));No("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));No("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iT=new Set("cancel close invalid load scroll toggle".split(" ").concat(bl));function mg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,tE(i,e,void 0,n),n.currentTarget=null}function oy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;mg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;mg(r,a,u),s=l}}}if(df)throw n=np,df=!1,np=null,n}function Et(n,e){var t=e[dp];t===void 0&&(t=e[dp]=new Set);var i=n+"__bubble";t.has(i)||(ay(e,n,2,!1),t.add(i))}function Od(n,e,t){var i=0;e&&(i|=4),ay(t,n,i,e)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function hu(n){if(!n[Zu]){n[Zu]=!0,px.forEach(function(t){t!=="selectionchange"&&(iT.has(t)||Od(t,!1,n),Od(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Zu]||(e[Zu]=!0,Od("selectionchange",!1,e))}}function ay(n,e,t,i){switch(Wx(e)){case 1:var r=gE;break;case 4:r=vE;break;default:r=Am}t=r.bind(null,e,t,n),r=void 0,!tp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Fd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=no(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Px(function(){var u=s,c=Mm(t),h=[];e:{var f=sy.get(n);if(f!==void 0){var p=Rm,g=n;switch(n){case"keypress":if(Wc(t)===0)break e;case"keydown":case"keyup":p=UE;break;case"focusin":g="focus",p=Pd;break;case"focusout":g="blur",p=Pd;break;case"beforeblur":case"afterblur":p=Pd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=SE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=OE;break;case ty:case ny:case iy:p=TE;break;case ry:p=kE;break;case"scroll":p=xE;break;case"wheel":p=BE;break;case"copy":case"cut":case"paste":p=AE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sg}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=au(v,d),y!=null&&_.push(pu(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Jh&&(g=t.relatedTarget||t.fromElement)&&(no(g)||g[Hr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?no(g):null,g!==null&&(m=Io(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=ig,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=sg,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:ma(p),x=g==null?f:ma(g),f=new _(y,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,no(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=ko(x))v++;for(x=0,y=d;y;y=ko(y))x++;for(;0<v-x;)_=ko(_),v--;for(;0<x-v;)d=ko(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=ko(_),d=ko(d)}_=null}else _=null;p!==null&&_g(h,f,p,_,!1),g!==null&&m!==null&&_g(h,m,g,_,!0)}}e:{if(f=u?ma(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=YE;else if(lg(f))if(Kx)E=ZE;else{E=$E;var w=qE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=KE);if(E&&(E=E(n,u))){$x(h,E,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&qh(f,"number",f.value)}switch(w=u?ma(u):window,n){case"focusin":(lg(w)||w.contentEditable==="true")&&(ha=w,op=u,Bl=null);break;case"focusout":Bl=op=ha=null;break;case"mousedown":ap=!0;break;case"contextmenu":case"mouseup":case"dragend":ap=!1,hg(h,t,c);break;case"selectionchange":if(eT)break;case"keydown":case"keyup":hg(h,t,c)}var M;if(Pm)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else da?Yx(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(jx&&t.locale!=="ko"&&(da||P!=="onCompositionStart"?P==="onCompositionEnd"&&da&&(M=Xx()):(ss=c,Cm="value"in ss?ss.value:ss.textContent,da=!0)),w=gf(u,P),0<w.length&&(P=new rg(P,n,null,t,c),h.push({event:P,listeners:w}),M?P.data=M:(M=qx(t),M!==null&&(P.data=M)))),(M=VE?GE(n,t):WE(n,t))&&(u=gf(u,"onBeforeInput"),0<u.length&&(c=new rg("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=M))}oy(h,e)})}function pu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function gf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=au(n,t),s!=null&&i.unshift(pu(n,s,r)),s=au(n,e),s!=null&&i.push(pu(n,s,r))),n=n.return}return i}function ko(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _g(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=au(t,s),l!=null&&o.unshift(pu(t,l,a))):r||(l=au(t,s),l!=null&&o.push(pu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var rT=/\r\n?/g,sT=/\u0000|\uFFFD/g;function gg(n){return(typeof n=="string"?n:""+n).replace(rT,`
`).replace(sT,"")}function Qu(n,e,t){if(e=gg(e),gg(n)!==e&&t)throw Error(le(425))}function vf(){}var lp=null,up=null;function cp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fp=typeof setTimeout=="function"?setTimeout:void 0,oT=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,aT=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(n){return vg.resolve(null).then(n).catch(lT)}:fp;function lT(n){setTimeout(function(){throw n})}function kd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),cu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);cu(e)}function vs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function xg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ol=Math.random().toString(36).slice(2),lr="__reactFiber$"+ol,mu="__reactProps$"+ol,Hr="__reactContainer$"+ol,dp="__reactEvents$"+ol,uT="__reactListeners$"+ol,cT="__reactHandles$"+ol;function no(n){var e=n[lr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Hr]||t[lr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=xg(n);n!==null;){if(t=n[lr])return t;n=xg(n)}return e}n=t,t=n.parentNode}return null}function Ou(n){return n=n[lr]||n[Hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ma(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(le(33))}function ed(n){return n[mu]||null}var hp=[],_a=-1;function Fs(n){return{current:n}}function wt(n){0>_a||(n.current=hp[_a],hp[_a]=null,_a--)}function yt(n,e){_a++,hp[_a]=n.current,n.current=e}var Ls={},Cn=Fs(Ls),$n=Fs(!1),So=Ls;function Va(n,e){var t=n.type.contextTypes;if(!t)return Ls;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Kn(n){return n=n.childContextTypes,n!=null}function xf(){wt($n),wt(Cn)}function yg(n,e,t){if(Cn.current!==Ls)throw Error(le(168));yt(Cn,e),yt($n,t)}function ly(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,qM(n)||"Unknown",r));return It({},t,i)}function yf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ls,So=Cn.current,yt(Cn,n),yt($n,$n.current),!0}function Sg(n,e,t){var i=n.stateNode;if(!i)throw Error(le(169));t?(n=ly(n,e,So),i.__reactInternalMemoizedMergedChildContext=n,wt($n),wt(Cn),yt(Cn,n)):wt($n),yt($n,t)}var Rr=null,td=!1,zd=!1;function uy(n){Rr===null?Rr=[n]:Rr.push(n)}function fT(n){td=!0,uy(n)}function ks(){if(!zd&&Rr!==null){zd=!0;var n=0,e=ht;try{var t=Rr;for(ht=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Rr=null,td=!1}catch(r){throw Rr!==null&&(Rr=Rr.slice(n+1)),Nx(Em,ks),r}finally{ht=e,zd=!1}}return null}var ga=[],va=0,Sf=null,Mf=0,Ai=[],Ci=0,Mo=null,Dr=1,Ur="";function $s(n,e){ga[va++]=Mf,ga[va++]=Sf,Sf=n,Mf=e}function cy(n,e,t){Ai[Ci++]=Dr,Ai[Ci++]=Ur,Ai[Ci++]=Mo,Mo=n;var i=Dr;n=Ur;var r=32-er(i)-1;i&=~(1<<r),t+=1;var s=32-er(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Dr=1<<32-er(e)+r|t<<r|i,Ur=s+n}else Dr=1<<s|t<<r|i,Ur=n}function Dm(n){n.return!==null&&($s(n,1),cy(n,1,0))}function Um(n){for(;n===Sf;)Sf=ga[--va],ga[va]=null,Mf=ga[--va],ga[va]=null;for(;n===Mo;)Mo=Ai[--Ci],Ai[Ci]=null,Ur=Ai[--Ci],Ai[Ci]=null,Dr=Ai[--Ci],Ai[Ci]=null}var mi=null,pi=null,bt=!1,$i=null;function fy(n,e){var t=Di(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Mg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,mi=n,pi=vs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,mi=n,pi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Mo!==null?{id:Dr,overflow:Ur}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Di(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,mi=n,pi=null,!0):!1;default:return!1}}function pp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mp(n){if(bt){var e=pi;if(e){var t=e;if(!Mg(n,e)){if(pp(n))throw Error(le(418));e=vs(t.nextSibling);var i=mi;e&&Mg(n,e)?fy(i,t):(n.flags=n.flags&-4097|2,bt=!1,mi=n)}}else{if(pp(n))throw Error(le(418));n.flags=n.flags&-4097|2,bt=!1,mi=n}}}function Eg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function Ju(n){if(n!==mi)return!1;if(!bt)return Eg(n),bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!cp(n.type,n.memoizedProps)),e&&(e=pi)){if(pp(n))throw dy(),Error(le(418));for(;e;)fy(n,e),e=vs(e.nextSibling)}if(Eg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(le(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){pi=vs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}pi=null}}else pi=mi?vs(n.stateNode.nextSibling):null;return!0}function dy(){for(var n=pi;n;)n=vs(n.nextSibling)}function Ga(){pi=mi=null,bt=!1}function Nm(n){$i===null?$i=[n]:$i.push(n)}var dT=jr.ReactCurrentBatchConfig;function Yi(n,e){if(n&&n.defaultProps){e=It({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ef=Fs(null),Tf=null,xa=null,Im=null;function Om(){Im=xa=Tf=null}function Fm(n){var e=Ef.current;wt(Ef),n._currentValue=e}function _p(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function La(n,e){Tf=n,Im=xa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(qn=!0),n.firstContext=null)}function ki(n){var e=n._currentValue;if(Im!==n)if(n={context:n,memoizedValue:e,next:null},xa===null){if(Tf===null)throw Error(le(308));xa=n,Tf.dependencies={lanes:0,firstContext:n}}else xa=xa.next=n;return e}var io=null;function km(n){io===null?io=[n]:io.push(n)}function hy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,km(e)):(t.next=r.next,r.next=t),e.interleaved=t,Vr(n,i)}function Vr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ts=!1;function zm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function py(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vr(n,t)}return r=i.interleaved,r===null?(e.next=e,km(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vr(n,t)}function Xc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Tm(n,t)}}function Tg(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function wf(n,e,t,i){var r=n.updateQueue;ts=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=It({},h,f);break e;case 2:ts=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);To|=o,n.lanes=o,n.memoizedState=h}}function wg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var my=new hx.Component().refs;function gp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:It({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var nd={isMounted:function(n){return(n=n._reactInternals)?Io(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Ss(n),s=kr(i,r);s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(tr(e,n,r,i),Xc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Ss(n),s=kr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(tr(e,n,r,i),Xc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=Ss(n),r=kr(t,i);r.tag=2,e!=null&&(r.callback=e),e=xs(n,r,i),e!==null&&(tr(e,n,i,t),Xc(e,n,i))}};function Ag(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!du(t,i)||!du(r,s):!0}function _y(n,e,t){var i=!1,r=Ls,s=e.contextType;return typeof s=="object"&&s!==null?s=ki(s):(r=Kn(e)?So:Cn.current,i=e.contextTypes,s=(i=i!=null)?Va(n,r):Ls),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Cg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&nd.enqueueReplaceState(e,e.state,null)}function vp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=my,zm(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ki(s):(s=Kn(e)?So:Cn.current,r.context=Va(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nd.enqueueReplaceState(r,r.state,null),wf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ml(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(le(309));var i=t.stateNode}if(!i)throw Error(le(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===my&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(le(284));if(!t._owner)throw Error(le(290,n))}return n}function ec(n,e){throw n=Object.prototype.toString.call(e),Error(le(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Rg(n){var e=n._init;return e(n._payload)}function gy(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Ms(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=jd(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var E=x.type;return E===fa?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===es&&Rg(E)===v.type)?(y=r(v,x.props),y.ref=ml(d,v,x),y.return=d,y):(y=Zc(x.type,x.key,x.props,null,d.mode,y),y.ref=ml(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Yd(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,E){return v===null||v.tag!==7?(v=lo(x,d.mode,y,E),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=jd(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gu:return x=Zc(v.type,v.key,v.props,null,d.mode,x),x.ref=ml(d,null,v),x.return=d,x;case ca:return v=Yd(v,d.mode,x),v.return=d,v;case es:var y=v._init;return h(d,y(v._payload),x)}if(Cl(v)||cl(v))return v=lo(v,d.mode,x,null),v.return=d,v;ec(d,v)}return null}function f(d,v,x,y){var E=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:return x.key===E?l(d,v,x,y):null;case ca:return x.key===E?u(d,v,x,y):null;case es:return E=x._init,f(d,v,E(x._payload),y)}if(Cl(x)||cl(x))return E!==null?null:c(d,v,x,y,null);ec(d,x)}return null}function p(d,v,x,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gu:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,E);case ca:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,E);case es:var w=y._init;return p(d,v,x,w(y._payload),E)}if(Cl(y)||cl(y))return d=d.get(x)||null,c(v,d,y,E,null);ec(v,y)}return null}function g(d,v,x,y){for(var E=null,w=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var T=f(d,M,x[P],y);if(T===null){M===null&&(M=S);break}n&&M&&T.alternate===null&&e(d,M),v=s(T,v,P),w===null?E=T:w.sibling=T,w=T,M=S}if(P===x.length)return t(d,M),bt&&$s(d,P),E;if(M===null){for(;P<x.length;P++)M=h(d,x[P],y),M!==null&&(v=s(M,v,P),w===null?E=M:w.sibling=M,w=M);return bt&&$s(d,P),E}for(M=i(d,M);P<x.length;P++)S=p(M,d,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?E=S:w.sibling=S,w=S);return n&&M.forEach(function(j){return e(d,j)}),bt&&$s(d,P),E}function _(d,v,x,y){var E=cl(x);if(typeof E!="function")throw Error(le(150));if(x=E.call(x),x==null)throw Error(le(151));for(var w=E=null,M=v,P=v=0,S=null,T=x.next();M!==null&&!T.done;P++,T=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var j=f(d,M,T.value,y);if(j===null){M===null&&(M=S);break}n&&M&&j.alternate===null&&e(d,M),v=s(j,v,P),w===null?E=j:w.sibling=j,w=j,M=S}if(T.done)return t(d,M),bt&&$s(d,P),E;if(M===null){for(;!T.done;P++,T=x.next())T=h(d,T.value,y),T!==null&&(v=s(T,v,P),w===null?E=T:w.sibling=T,w=T);return bt&&$s(d,P),E}for(M=i(d,M);!T.done;P++,T=x.next())T=p(M,d,P,T.value,y),T!==null&&(n&&T.alternate!==null&&M.delete(T.key===null?P:T.key),v=s(T,v,P),w===null?E=T:w.sibling=T,w=T);return n&&M.forEach(function(z){return e(d,z)}),bt&&$s(d,P),E}function m(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===fa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:e:{for(var E=x.key,w=v;w!==null;){if(w.key===E){if(E=x.type,E===fa){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===es&&Rg(E)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=ml(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===fa?(v=lo(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=Zc(x.type,x.key,x.props,null,d.mode,y),y.ref=ml(d,v,x),y.return=d,d=y)}return o(d);case ca:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=Yd(x,d.mode,y),v.return=d,d=v}return o(d);case es:return w=x._init,m(d,v,w(x._payload),y)}if(Cl(x))return g(d,v,x,y);if(cl(x))return _(d,v,x,y);ec(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=jd(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return m}var Wa=gy(!0),vy=gy(!1),Fu={},dr=Fs(Fu),_u=Fs(Fu),gu=Fs(Fu);function ro(n){if(n===Fu)throw Error(le(174));return n}function Bm(n,e){switch(yt(gu,e),yt(_u,n),yt(dr,Fu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Kh(e,n)}wt(dr),yt(dr,e)}function Xa(){wt(dr),wt(_u),wt(gu)}function xy(n){ro(gu.current);var e=ro(dr.current),t=Kh(e,n.type);e!==t&&(yt(_u,n),yt(dr,t))}function Hm(n){_u.current===n&&(wt(dr),wt(_u))}var Lt=Fs(0);function Af(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function Vm(){for(var n=0;n<Bd.length;n++)Bd[n]._workInProgressVersionPrimary=null;Bd.length=0}var jc=jr.ReactCurrentDispatcher,Hd=jr.ReactCurrentBatchConfig,Eo=0,Nt=null,$t=null,sn=null,Cf=!1,Hl=!1,vu=0,hT=0;function _n(){throw Error(le(321))}function Gm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ir(n[t],e[t]))return!1;return!0}function Wm(n,e,t,i,r,s){if(Eo=s,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jc.current=n===null||n.memoizedState===null?gT:vT,n=t(i,r),Hl){s=0;do{if(Hl=!1,vu=0,25<=s)throw Error(le(301));s+=1,sn=$t=null,e.updateQueue=null,jc.current=xT,n=t(i,r)}while(Hl)}if(jc.current=Rf,e=$t!==null&&$t.next!==null,Eo=0,sn=$t=Nt=null,Cf=!1,e)throw Error(le(300));return n}function Xm(){var n=vu!==0;return vu=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Nt.memoizedState=sn=n:sn=sn.next=n,sn}function zi(){if($t===null){var n=Nt.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var e=sn===null?Nt.memoizedState:sn.next;if(e!==null)sn=e,$t=n;else{if(n===null)throw Error(le(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},sn===null?Nt.memoizedState=sn=n:sn=sn.next=n}return sn}function xu(n,e){return typeof e=="function"?e(n):e}function Vd(n){var e=zi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=$t,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Eo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Nt.lanes|=c,To|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ir(i,e.memoizedState)||(qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Nt.lanes|=s,To|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Gd(n){var e=zi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ir(s,e.memoizedState)||(qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function yy(){}function Sy(n,e){var t=Nt,i=zi(),r=e(),s=!ir(i.memoizedState,r);if(s&&(i.memoizedState=r,qn=!0),i=i.queue,jm(Ty.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||sn!==null&&sn.memoizedState.tag&1){if(t.flags|=2048,yu(9,Ey.bind(null,t,i,r,e),void 0,null),an===null)throw Error(le(349));Eo&30||My(t,e,r)}return r}function My(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ey(n,e,t,i){e.value=t,e.getSnapshot=i,wy(e)&&Ay(n)}function Ty(n,e,t){return t(function(){wy(e)&&Ay(n)})}function wy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ir(n,t)}catch{return!0}}function Ay(n){var e=Vr(n,1);e!==null&&tr(e,n,1,-1)}function bg(n){var e=sr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:n},e.queue=n,n=n.dispatch=_T.bind(null,Nt,n),[e.memoizedState,n]}function yu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Cy(){return zi().memoizedState}function Yc(n,e,t,i){var r=sr();Nt.flags|=n,r.memoizedState=yu(1|e,t,void 0,i===void 0?null:i)}function id(n,e,t,i){var r=zi();i=i===void 0?null:i;var s=void 0;if($t!==null){var o=$t.memoizedState;if(s=o.destroy,i!==null&&Gm(i,o.deps)){r.memoizedState=yu(e,t,s,i);return}}Nt.flags|=n,r.memoizedState=yu(1|e,t,s,i)}function Pg(n,e){return Yc(8390656,8,n,e)}function jm(n,e){return id(2048,8,n,e)}function Ry(n,e){return id(4,2,n,e)}function by(n,e){return id(4,4,n,e)}function Py(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ly(n,e,t){return t=t!=null?t.concat([n]):null,id(4,4,Py.bind(null,e,n),t)}function Ym(){}function Dy(n,e){var t=zi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Gm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Uy(n,e){var t=zi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Gm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ny(n,e,t){return Eo&21?(ir(t,e)||(t=Fx(),Nt.lanes|=t,To|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=t)}function pT(n,e){var t=ht;ht=t!==0&&4>t?t:4,n(!0);var i=Hd.transition;Hd.transition={};try{n(!1),e()}finally{ht=t,Hd.transition=i}}function Iy(){return zi().memoizedState}function mT(n,e,t){var i=Ss(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Oy(n))Fy(e,t);else if(t=hy(n,e,t,i),t!==null){var r=Vn();tr(t,n,i,r),ky(t,e,i)}}function _T(n,e,t){var i=Ss(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Oy(n))Fy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ir(a,o)){var l=e.interleaved;l===null?(r.next=r,km(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=hy(n,e,r,i),t!==null&&(r=Vn(),tr(t,n,i,r),ky(t,e,i))}}function Oy(n){var e=n.alternate;return n===Nt||e!==null&&e===Nt}function Fy(n,e){Hl=Cf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ky(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Tm(n,t)}}var Rf={readContext:ki,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},gT={readContext:ki,useCallback:function(n,e){return sr().memoizedState=[n,e===void 0?null:e],n},useContext:ki,useEffect:Pg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Yc(4194308,4,Py.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Yc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Yc(4,2,n,e)},useMemo:function(n,e){var t=sr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=sr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=mT.bind(null,Nt,n),[i.memoizedState,n]},useRef:function(n){var e=sr();return n={current:n},e.memoizedState=n},useState:bg,useDebugValue:Ym,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=bg(!1),e=n[0];return n=pT.bind(null,n[1]),sr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Nt,r=sr();if(bt){if(t===void 0)throw Error(le(407));t=t()}else{if(t=e(),an===null)throw Error(le(349));Eo&30||My(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Pg(Ty.bind(null,i,s,n),[n]),i.flags|=2048,yu(9,Ey.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=sr(),e=an.identifierPrefix;if(bt){var t=Ur,i=Dr;t=(i&~(1<<32-er(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=vu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=hT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},vT={readContext:ki,useCallback:Dy,useContext:ki,useEffect:jm,useImperativeHandle:Ly,useInsertionEffect:Ry,useLayoutEffect:by,useMemo:Uy,useReducer:Vd,useRef:Cy,useState:function(){return Vd(xu)},useDebugValue:Ym,useDeferredValue:function(n){var e=zi();return Ny(e,$t.memoizedState,n)},useTransition:function(){var n=Vd(xu)[0],e=zi().memoizedState;return[n,e]},useMutableSource:yy,useSyncExternalStore:Sy,useId:Iy,unstable_isNewReconciler:!1},xT={readContext:ki,useCallback:Dy,useContext:ki,useEffect:jm,useImperativeHandle:Ly,useInsertionEffect:Ry,useLayoutEffect:by,useMemo:Uy,useReducer:Gd,useRef:Cy,useState:function(){return Gd(xu)},useDebugValue:Ym,useDeferredValue:function(n){var e=zi();return $t===null?e.memoizedState=n:Ny(e,$t.memoizedState,n)},useTransition:function(){var n=Gd(xu)[0],e=zi().memoizedState;return[n,e]},useMutableSource:yy,useSyncExternalStore:Sy,useId:Iy,unstable_isNewReconciler:!1};function ja(n,e){try{var t="",i=e;do t+=YM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Wd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function xp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var yT=typeof WeakMap=="function"?WeakMap:Map;function zy(n,e,t){t=kr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Pf||(Pf=!0,bp=i),xp(n,e)},t}function By(n,e,t){t=kr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){xp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){xp(n,e),typeof i!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Lg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new yT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=NT.bind(null,n,e,t),e.then(n,n))}function Dg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ug(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=kr(-1,1),e.tag=2,xs(t,e,1))),t.lanes|=1),n)}var ST=jr.ReactCurrentOwner,qn=!1;function In(n,e,t,i){e.child=n===null?vy(e,null,t,i):Wa(e,n.child,t,i)}function Ng(n,e,t,i,r){t=t.render;var s=e.ref;return La(e,r),i=Wm(n,e,t,i,s,r),t=Xm(),n!==null&&!qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gr(n,e,r)):(bt&&t&&Dm(e),e.flags|=1,In(n,e,i,r),e.child)}function Ig(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!t_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Hy(n,e,s,i,r)):(n=Zc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:du,t(o,i)&&n.ref===e.ref)return Gr(n,e,r)}return e.flags|=1,n=Ms(s,i),n.ref=e.ref,n.return=e,e.child=n}function Hy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(du(s,i)&&n.ref===e.ref)if(qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(qn=!0);else return e.lanes=n.lanes,Gr(n,e,r)}return yp(n,e,t,i,r)}function Vy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Sa,ui),ui|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,yt(Sa,ui),ui|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,yt(Sa,ui),ui|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,yt(Sa,ui),ui|=i;return In(n,e,r,t),e.child}function Gy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function yp(n,e,t,i,r){var s=Kn(t)?So:Cn.current;return s=Va(e,s),La(e,r),t=Wm(n,e,t,i,s,r),i=Xm(),n!==null&&!qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Gr(n,e,r)):(bt&&i&&Dm(e),e.flags|=1,In(n,e,t,r),e.child)}function Og(n,e,t,i,r){if(Kn(t)){var s=!0;yf(e)}else s=!1;if(La(e,r),e.stateNode===null)qc(n,e),_y(e,t,i),vp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ki(u):(u=Kn(t)?So:Cn.current,u=Va(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Cg(e,o,i,u),ts=!1;var f=e.memoizedState;o.state=f,wf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||$n.current||ts?(typeof c=="function"&&(gp(e,t,c,i),l=e.memoizedState),(a=ts||Ag(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,py(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yi(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ki(l):(l=Kn(t)?So:Cn.current,l=Va(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Cg(e,o,i,l),ts=!1,f=e.memoizedState,o.state=f,wf(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||$n.current||ts?(typeof p=="function"&&(gp(e,t,p,i),g=e.memoizedState),(u=ts||Ag(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Sp(n,e,t,i,s,r)}function Sp(n,e,t,i,r,s){Gy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Sg(e,t,!1),Gr(n,e,s);i=e.stateNode,ST.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,a,s)):In(n,e,a,s),e.memoizedState=i.state,r&&Sg(e,t,!0),e.child}function Wy(n){var e=n.stateNode;e.pendingContext?yg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&yg(n,e.context,!1),Bm(n,e.containerInfo)}function Fg(n,e,t,i,r){return Ga(),Nm(r),e.flags|=256,In(n,e,t,i),e.child}var Mp={dehydrated:null,treeContext:null,retryLane:0};function Ep(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xy(n,e,t){var i=e.pendingProps,r=Lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),yt(Lt,r&1),n===null)return mp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=od(o,i,0,null),n=lo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ep(t),e.memoizedState=Mp,n):qm(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return MT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ms(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ms(a,s):(s=lo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ep(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Mp,i}return s=n.child,n=s.sibling,i=Ms(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function qm(n,e){return e=od({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function tc(n,e,t,i){return i!==null&&Nm(i),Wa(e,n.child,null,t),n=qm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function MT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Wd(Error(le(422))),tc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=od({mode:"visible",children:i.children},r,0,null),s=lo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,o),e.child.memoizedState=Ep(o),e.memoizedState=Mp,s);if(!(e.mode&1))return tc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=Wd(s,i,void 0),tc(n,e,o,i)}if(a=(o&n.childLanes)!==0,qn||a){if(i=an,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vr(n,r),tr(i,n,r,-1))}return e_(),i=Wd(Error(le(421))),tc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=IT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,pi=vs(r.nextSibling),mi=e,bt=!0,$i=null,n!==null&&(Ai[Ci++]=Dr,Ai[Ci++]=Ur,Ai[Ci++]=Mo,Dr=n.id,Ur=n.overflow,Mo=e),e=qm(e,i.children),e.flags|=4096,e)}function kg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),_p(n.return,e,t)}function Xd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function jy(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(In(n,e,i.children,t),i=Lt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kg(n,t,e);else if(n.tag===19)kg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(yt(Lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Af(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Xd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Af(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Xd(e,!0,t,null,s);break;case"together":Xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Gr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),To|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(le(153));if(e.child!==null){for(n=e.child,t=Ms(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ms(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ET(n,e,t){switch(e.tag){case 3:Wy(e),Ga();break;case 5:xy(e);break;case 1:Kn(e.type)&&yf(e);break;case 4:Bm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Ef,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Lt,Lt.current&1),e.flags|=128,null):t&e.child.childLanes?Xy(n,e,t):(yt(Lt,Lt.current&1),n=Gr(n,e,t),n!==null?n.sibling:null);yt(Lt,Lt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return jy(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Lt,Lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Vy(n,e,t)}return Gr(n,e,t)}var Yy,Tp,qy,$y;Yy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Tp=function(){};qy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ro(dr.current);var s=null;switch(t){case"input":r=jh(n,r),i=jh(n,i),s=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),s=[];break;case"textarea":r=$h(n,r),i=$h(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=vf)}Zh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(su.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(su.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Et("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$y=function(n,e,t,i){t!==i&&(e.flags|=4)};function _l(n,e){if(!bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function gn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function TT(n,e,t){var i=e.pendingProps;switch(Um(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(e),null;case 1:return Kn(e.type)&&xf(),gn(e),null;case 3:return i=e.stateNode,Xa(),wt($n),wt(Cn),Vm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ju(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$i!==null&&(Dp($i),$i=null))),Tp(n,e),gn(e),null;case 5:Hm(e);var r=ro(gu.current);if(t=e.type,n!==null&&e.stateNode!=null)qy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return gn(e),null}if(n=ro(dr.current),Ju(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[lr]=e,i[mu]=s,n=(e.mode&1)!==0,t){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<bl.length;r++)Et(bl[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Y_(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":$_(i,s),Et("invalid",i)}Zh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qu(i.textContent,a,n),r=["children",""+a]):su.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(t){case"input":Wu(i),q_(i,s,!0);break;case"textarea":Wu(i),K_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[lr]=e,n[mu]=i,Yy(n,e,!1,!1),e.stateNode=n;e:{switch(o=Qh(t,i),t){case"dialog":Et("cancel",n),Et("close",n),r=i;break;case"iframe":case"object":case"embed":Et("load",n),r=i;break;case"video":case"audio":for(r=0;r<bl.length;r++)Et(bl[r],n);r=i;break;case"source":Et("error",n),r=i;break;case"img":case"image":case"link":Et("error",n),Et("load",n),r=i;break;case"details":Et("toggle",n),r=i;break;case"input":Y_(n,i),r=jh(n,i),Et("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),Et("invalid",n);break;case"textarea":$_(n,i),r=$h(n,i),Et("invalid",n);break;default:r=i}Zh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ex(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ou(n,l):typeof l=="number"&&ou(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(su.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",n):l!=null&&vm(n,s,l,o))}switch(t){case"input":Wu(n),q_(n,i,!1);break;case"textarea":Wu(n),K_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ps(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ca(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ca(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=vf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gn(e),null;case 6:if(n&&e.stateNode!=null)$y(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(t=ro(gu.current),ro(dr.current),Ju(e)){if(i=e.stateNode,t=e.memoizedProps,i[lr]=e,(s=i.nodeValue!==t)&&(n=mi,n!==null))switch(n.tag){case 3:Qu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[lr]=e,e.stateNode=i}return gn(e),null;case 13:if(wt(Lt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&pi!==null&&e.mode&1&&!(e.flags&128))dy(),Ga(),e.flags|=98560,s=!1;else if(s=Ju(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[lr]=e}else Ga(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gn(e),s=!1}else $i!==null&&(Dp($i),$i=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Lt.current&1?Zt===0&&(Zt=3):e_())),e.updateQueue!==null&&(e.flags|=4),gn(e),null);case 4:return Xa(),Tp(n,e),n===null&&hu(e.stateNode.containerInfo),gn(e),null;case 10:return Fm(e.type._context),gn(e),null;case 17:return Kn(e.type)&&xf(),gn(e),null;case 19:if(wt(Lt),s=e.memoizedState,s===null)return gn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_l(s,!1);else{if(Zt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Af(n),o!==null){for(e.flags|=128,_l(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return yt(Lt,Lt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ht()>Ya&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304)}else{if(!i)if(n=Af(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return gn(e),null}else 2*Ht()-s.renderingStartTime>Ya&&t!==1073741824&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ht(),e.sibling=null,t=Lt.current,yt(Lt,i?t&1|2:t&1),e):(gn(e),null);case 22:case 23:return Jm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ui&1073741824&&(gn(e),e.subtreeFlags&6&&(e.flags|=8192)):gn(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function wT(n,e){switch(Um(e),e.tag){case 1:return Kn(e.type)&&xf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xa(),wt($n),wt(Cn),Vm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Hm(e),null;case 13:if(wt(Lt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Ga()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return wt(Lt),null;case 4:return Xa(),null;case 10:return Fm(e.type._context),null;case 22:case 23:return Jm(),null;case 24:return null;default:return null}}var nc=!1,Sn=!1,AT=typeof WeakSet=="function"?WeakSet:Set,we=null;function ya(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ot(n,e,i)}else t.current=null}function wp(n,e,t){try{t()}catch(i){Ot(n,e,i)}}var zg=!1;function CT(n,e){if(lp=mf,n=Jx(),Lm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(up={focusedElem:n,selectionRange:t},mf=!1,we=e;we!==null;)if(e=we,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,we=n;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Yi(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(y){Ot(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}return g=zg,zg=!1,g}function Vl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&wp(e,t,s)}r=r.next}while(r!==i)}}function rd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ap(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Ky(n){var e=n.alternate;e!==null&&(n.alternate=null,Ky(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[lr],delete e[mu],delete e[dp],delete e[uT],delete e[cT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zy(n){return n.tag===5||n.tag===3||n.tag===4}function Bg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=vf));else if(i!==4&&(n=n.child,n!==null))for(Cp(n,e,t),n=n.sibling;n!==null;)Cp(n,e,t),n=n.sibling}function Rp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Rp(n,e,t),n=n.sibling;n!==null;)Rp(n,e,t),n=n.sibling}var fn=null,qi=!1;function qr(n,e,t){for(t=t.child;t!==null;)Qy(n,e,t),t=t.sibling}function Qy(n,e,t){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(Kf,t)}catch{}switch(t.tag){case 5:Sn||ya(t,e);case 6:var i=fn,r=qi;fn=null,qr(n,e,t),fn=i,qi=r,fn!==null&&(qi?(n=fn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):fn.removeChild(t.stateNode));break;case 18:fn!==null&&(qi?(n=fn,t=t.stateNode,n.nodeType===8?kd(n.parentNode,t):n.nodeType===1&&kd(n,t),cu(n)):kd(fn,t.stateNode));break;case 4:i=fn,r=qi,fn=t.stateNode.containerInfo,qi=!0,qr(n,e,t),fn=i,qi=r;break;case 0:case 11:case 14:case 15:if(!Sn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wp(t,e,o),r=r.next}while(r!==i)}qr(n,e,t);break;case 1:if(!Sn&&(ya(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ot(t,e,a)}qr(n,e,t);break;case 21:qr(n,e,t);break;case 22:t.mode&1?(Sn=(i=Sn)||t.memoizedState!==null,qr(n,e,t),Sn=i):qr(n,e,t);break;default:qr(n,e,t)}}function Hg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new AT),e.forEach(function(i){var r=OT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Hi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fn=a.stateNode,qi=!1;break e;case 3:fn=a.stateNode.containerInfo,qi=!0;break e;case 4:fn=a.stateNode.containerInfo,qi=!0;break e}a=a.return}if(fn===null)throw Error(le(160));Qy(s,o,r),fn=null,qi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jy(e,n),e=e.sibling}function Jy(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hi(e,n),rr(n),i&4){try{Vl(3,n,n.return),rd(3,n)}catch(_){Ot(n,n.return,_)}try{Vl(5,n,n.return)}catch(_){Ot(n,n.return,_)}}break;case 1:Hi(e,n),rr(n),i&512&&t!==null&&ya(t,t.return);break;case 5:if(Hi(e,n),rr(n),i&512&&t!==null&&ya(t,t.return),n.flags&32){var r=n.stateNode;try{ou(r,"")}catch(_){Ot(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yx(r,s),Qh(a,o);var u=Qh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?wx(r,h):c==="dangerouslySetInnerHTML"?Ex(r,h):c==="children"?ou(r,h):vm(r,c,h,u)}switch(a){case"input":Yh(r,s);break;case"textarea":Sx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ca(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ca(r,!!s.multiple,s.defaultValue,!0):Ca(r,!!s.multiple,s.multiple?[]:"",!1))}r[mu]=s}catch(_){Ot(n,n.return,_)}}break;case 6:if(Hi(e,n),rr(n),i&4){if(n.stateNode===null)throw Error(le(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Ot(n,n.return,_)}}break;case 3:if(Hi(e,n),rr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{cu(e.containerInfo)}catch(_){Ot(n,n.return,_)}break;case 4:Hi(e,n),rr(n);break;case 13:Hi(e,n),rr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zm=Ht())),i&4&&Hg(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Sn=(u=Sn)||c,Hi(e,n),Sn=u):Hi(e,n),rr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(we=n,c=n.child;c!==null;){for(h=we=c;we!==null;){switch(f=we,p=f.child,f.tag){case 0:case 11:case 14:case 15:Vl(4,f,f.return);break;case 1:ya(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Ot(i,t,_)}}break;case 5:ya(f,f.return);break;case 22:if(f.memoizedState!==null){Gg(h);continue}}p!==null?(p.return=f,we=p):Gg(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tx("display",o))}catch(_){Ot(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Ot(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hi(e,n),rr(n),i&4&&Hg(n);break;case 21:break;default:Hi(e,n),rr(n)}}function rr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Zy(t)){var i=t;break e}t=t.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ou(r,""),i.flags&=-33);var s=Bg(n);Rp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Bg(n);Cp(n,a,o);break;default:throw Error(le(161))}}catch(l){Ot(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function RT(n,e,t){we=n,eS(n)}function eS(n,e,t){for(var i=(n.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Sn;a=nc;var u=Sn;if(nc=o,(Sn=l)&&!u)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?Wg(r):l!==null?(l.return=o,we=l):Wg(r);for(;s!==null;)we=s,eS(s),s=s.sibling;we=r,nc=a,Sn=u}Vg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Vg(n)}}function Vg(n){for(;we!==null;){var e=we;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Sn||rd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Sn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Yi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}wg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&cu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Sn||e.flags&512&&Ap(e)}catch(f){Ot(e,e.return,f)}}if(e===n){we=null;break}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}}function Gg(n){for(;we!==null;){var e=we;if(e===n){we=null;break}var t=e.sibling;if(t!==null){t.return=e.return,we=t;break}we=e.return}}function Wg(n){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{rd(4,e)}catch(l){Ot(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ot(e,r,l)}}var s=e.return;try{Ap(e)}catch(l){Ot(e,s,l)}break;case 5:var o=e.return;try{Ap(e)}catch(l){Ot(e,o,l)}}}catch(l){Ot(e,e.return,l)}if(e===n){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var bT=Math.ceil,bf=jr.ReactCurrentDispatcher,$m=jr.ReactCurrentOwner,Oi=jr.ReactCurrentBatchConfig,ft=0,an=null,Xt=null,pn=0,ui=0,Sa=Fs(0),Zt=0,Su=null,To=0,sd=0,Km=0,Gl=null,jn=null,Zm=0,Ya=1/0,Ar=null,Pf=!1,bp=null,ys=null,ic=!1,os=null,Lf=0,Wl=0,Pp=null,$c=-1,Kc=0;function Vn(){return ft&6?Ht():$c!==-1?$c:$c=Ht()}function Ss(n){return n.mode&1?ft&2&&pn!==0?pn&-pn:dT.transition!==null?(Kc===0&&(Kc=Fx()),Kc):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Wx(n.type)),n):1}function tr(n,e,t,i){if(50<Wl)throw Wl=0,Pp=null,Error(le(185));Nu(n,t,i),(!(ft&2)||n!==an)&&(n===an&&(!(ft&2)&&(sd|=t),Zt===4&&rs(n,pn)),Zn(n,i),t===1&&ft===0&&!(e.mode&1)&&(Ya=Ht()+500,td&&ks()))}function Zn(n,e){var t=n.callbackNode;dE(n,e);var i=pf(n,n===an?pn:0);if(i===0)t!==null&&J_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&J_(t),e===1)n.tag===0?fT(Xg.bind(null,n)):uy(Xg.bind(null,n)),aT(function(){!(ft&6)&&ks()}),t=null;else{switch(kx(i)){case 1:t=Em;break;case 4:t=Ix;break;case 16:t=hf;break;case 536870912:t=Ox;break;default:t=hf}t=lS(t,tS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function tS(n,e){if($c=-1,Kc=0,ft&6)throw Error(le(327));var t=n.callbackNode;if(Da()&&n.callbackNode!==t)return null;var i=pf(n,n===an?pn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Df(n,i);else{e=i;var r=ft;ft|=2;var s=iS();(an!==n||pn!==e)&&(Ar=null,Ya=Ht()+500,ao(n,e));do try{DT();break}catch(a){nS(n,a)}while(1);Om(),bf.current=s,ft=r,Xt!==null?e=0:(an=null,pn=0,e=Zt)}if(e!==0){if(e===2&&(r=ip(n),r!==0&&(i=r,e=Lp(n,r))),e===1)throw t=Su,ao(n,0),rs(n,i),Zn(n,Ht()),t;if(e===6)rs(n,i);else{if(r=n.current.alternate,!(i&30)&&!PT(r)&&(e=Df(n,i),e===2&&(s=ip(n),s!==0&&(i=s,e=Lp(n,s))),e===1))throw t=Su,ao(n,0),rs(n,i),Zn(n,Ht()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Ks(n,jn,Ar);break;case 3:if(rs(n,i),(i&130023424)===i&&(e=Zm+500-Ht(),10<e)){if(pf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=fp(Ks.bind(null,n,jn,Ar),e);break}Ks(n,jn,Ar);break;case 4:if(rs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-er(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bT(i/1960))-i,10<i){n.timeoutHandle=fp(Ks.bind(null,n,jn,Ar),i);break}Ks(n,jn,Ar);break;case 5:Ks(n,jn,Ar);break;default:throw Error(le(329))}}}return Zn(n,Ht()),n.callbackNode===t?tS.bind(null,n):null}function Lp(n,e){var t=Gl;return n.current.memoizedState.isDehydrated&&(ao(n,e).flags|=256),n=Df(n,e),n!==2&&(e=jn,jn=t,e!==null&&Dp(e)),n}function Dp(n){jn===null?jn=n:jn.push.apply(jn,n)}function PT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ir(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rs(n,e){for(e&=~Km,e&=~sd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-er(e),i=1<<t;n[t]=-1,e&=~i}}function Xg(n){if(ft&6)throw Error(le(327));Da();var e=pf(n,0);if(!(e&1))return Zn(n,Ht()),null;var t=Df(n,e);if(n.tag!==0&&t===2){var i=ip(n);i!==0&&(e=i,t=Lp(n,i))}if(t===1)throw t=Su,ao(n,0),rs(n,e),Zn(n,Ht()),t;if(t===6)throw Error(le(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ks(n,jn,Ar),Zn(n,Ht()),null}function Qm(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Ya=Ht()+500,td&&ks())}}function wo(n){os!==null&&os.tag===0&&!(ft&6)&&Da();var e=ft;ft|=1;var t=Oi.transition,i=ht;try{if(Oi.transition=null,ht=1,n)return n()}finally{ht=i,Oi.transition=t,ft=e,!(ft&6)&&ks()}}function Jm(){ui=Sa.current,wt(Sa)}function ao(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,oT(t)),Xt!==null)for(t=Xt.return;t!==null;){var i=t;switch(Um(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xf();break;case 3:Xa(),wt($n),wt(Cn),Vm();break;case 5:Hm(i);break;case 4:Xa();break;case 13:wt(Lt);break;case 19:wt(Lt);break;case 10:Fm(i.type._context);break;case 22:case 23:Jm()}t=t.return}if(an=n,Xt=n=Ms(n.current,null),pn=ui=e,Zt=0,Su=null,Km=sd=To=0,jn=Gl=null,io!==null){for(e=0;e<io.length;e++)if(t=io[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}io=null}return n}function nS(n,e){do{var t=Xt;try{if(Om(),jc.current=Rf,Cf){for(var i=Nt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cf=!1}if(Eo=0,sn=$t=Nt=null,Hl=!1,vu=0,$m.current=null,t===null||t.return===null){Zt=1,Su=e,Xt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Dg(o);if(p!==null){p.flags&=-257,Ug(p,o,a,s,e),p.mode&1&&Lg(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Lg(s,u,e),e_();break e}l=Error(le(426))}}else if(bt&&a.mode&1){var m=Dg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ug(m,o,a,s,e),Nm(ja(l,a));break e}}s=l=ja(l,a),Zt!==4&&(Zt=2),Gl===null?Gl=[s]:Gl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=zy(s,l,e);Tg(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ys===null||!ys.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=By(s,a,e);Tg(s,y);break e}}s=s.return}while(s!==null)}sS(t)}catch(E){e=E,Xt===t&&t!==null&&(Xt=t=t.return);continue}break}while(1)}function iS(){var n=bf.current;return bf.current=Rf,n===null?Rf:n}function e_(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),an===null||!(To&268435455)&&!(sd&268435455)||rs(an,pn)}function Df(n,e){var t=ft;ft|=2;var i=iS();(an!==n||pn!==e)&&(Ar=null,ao(n,e));do try{LT();break}catch(r){nS(n,r)}while(1);if(Om(),ft=t,bf.current=i,Xt!==null)throw Error(le(261));return an=null,pn=0,Zt}function LT(){for(;Xt!==null;)rS(Xt)}function DT(){for(;Xt!==null&&!iE();)rS(Xt)}function rS(n){var e=aS(n.alternate,n,ui);n.memoizedProps=n.pendingProps,e===null?sS(n):Xt=e,$m.current=null}function sS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=wT(t,e),t!==null){t.flags&=32767,Xt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,Xt=null;return}}else if(t=TT(t,e,ui),t!==null){Xt=t;return}if(e=e.sibling,e!==null){Xt=e;return}Xt=e=n}while(e!==null);Zt===0&&(Zt=5)}function Ks(n,e,t){var i=ht,r=Oi.transition;try{Oi.transition=null,ht=1,UT(n,e,t,i)}finally{Oi.transition=r,ht=i}return null}function UT(n,e,t,i){do Da();while(os!==null);if(ft&6)throw Error(le(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(le(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(hE(n,s),n===an&&(Xt=an=null,pn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ic||(ic=!0,lS(hf,function(){return Da(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Oi.transition,Oi.transition=null;var o=ht;ht=1;var a=ft;ft|=4,$m.current=null,CT(n,t),Jy(t,n),JE(up),mf=!!lp,up=lp=null,n.current=t,RT(t),rE(),ft=a,ht=o,Oi.transition=s}else n.current=t;if(ic&&(ic=!1,os=n,Lf=r),s=n.pendingLanes,s===0&&(ys=null),aE(t.stateNode),Zn(n,Ht()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pf)throw Pf=!1,n=bp,bp=null,n;return Lf&1&&n.tag!==0&&Da(),s=n.pendingLanes,s&1?n===Pp?Wl++:(Wl=0,Pp=n):Wl=0,ks(),null}function Da(){if(os!==null){var n=kx(Lf),e=Oi.transition,t=ht;try{if(Oi.transition=null,ht=16>n?16:n,os===null)var i=!1;else{if(n=os,os=null,Lf=0,ft&6)throw Error(le(331));var r=ft;for(ft|=4,we=n.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(we=u;we!==null;){var c=we;switch(c.tag){case 0:case 11:case 15:Vl(8,c,s)}var h=c.child;if(h!==null)h.return=c,we=h;else for(;we!==null;){c=we;var f=c.sibling,p=c.return;if(Ky(c),c===u){we=null;break}if(f!==null){f.return=p,we=f;break}we=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,we=d;break e}we=s.return}}var v=n.current;for(we=v;we!==null;){o=we;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,we=x;else e:for(o=v;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rd(9,a)}}catch(E){Ot(a,a.return,E)}if(a===o){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(ft=r,ks(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(Kf,n)}catch{}i=!0}return i}finally{ht=t,Oi.transition=e}}return!1}function jg(n,e,t){e=ja(t,e),e=zy(n,e,1),n=xs(n,e,1),e=Vn(),n!==null&&(Nu(n,1,e),Zn(n,e))}function Ot(n,e,t){if(n.tag===3)jg(n,n,t);else for(;e!==null;){if(e.tag===3){jg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ys===null||!ys.has(i))){n=ja(t,n),n=By(e,n,1),e=xs(e,n,1),n=Vn(),e!==null&&(Nu(e,1,n),Zn(e,n));break}}e=e.return}}function NT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,an===n&&(pn&t)===t&&(Zt===4||Zt===3&&(pn&130023424)===pn&&500>Ht()-Zm?ao(n,0):Km|=t),Zn(n,e)}function oS(n,e){e===0&&(n.mode&1?(e=Yu,Yu<<=1,!(Yu&130023424)&&(Yu=4194304)):e=1);var t=Vn();n=Vr(n,e),n!==null&&(Nu(n,e,t),Zn(n,t))}function IT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),oS(n,t)}function OT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),oS(n,t)}var aS;aS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||$n.current)qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return qn=!1,ET(n,e,t);qn=!!(n.flags&131072)}else qn=!1,bt&&e.flags&1048576&&cy(e,Mf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qc(n,e),n=e.pendingProps;var r=Va(e,Cn.current);La(e,t),r=Wm(null,e,i,n,r,t);var s=Xm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kn(i)?(s=!0,yf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zm(e),r.updater=nd,e.stateNode=r,r._reactInternals=e,vp(e,i,n,t),e=Sp(null,e,i,!0,s,t)):(e.tag=0,bt&&s&&Dm(e),In(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(qc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kT(i),n=Yi(i,n),r){case 0:e=yp(null,e,i,n,t);break e;case 1:e=Og(null,e,i,n,t);break e;case 11:e=Ng(null,e,i,n,t);break e;case 14:e=Ig(null,e,i,Yi(i.type,n),t);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yi(i,r),yp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yi(i,r),Og(n,e,i,r,t);case 3:e:{if(Wy(e),n===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,py(n,e),wf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ja(Error(le(423)),e),e=Fg(n,e,i,t,r);break e}else if(i!==r){r=ja(Error(le(424)),e),e=Fg(n,e,i,t,r);break e}else for(pi=vs(e.stateNode.containerInfo.firstChild),mi=e,bt=!0,$i=null,t=vy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ga(),i===r){e=Gr(n,e,t);break e}In(n,e,i,t)}e=e.child}return e;case 5:return xy(e),n===null&&mp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,cp(i,r)?o=null:s!==null&&cp(i,s)&&(e.flags|=32),Gy(n,e),In(n,e,o,t),e.child;case 6:return n===null&&mp(e),null;case 13:return Xy(n,e,t);case 4:return Bm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):In(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yi(i,r),Ng(n,e,i,r,t);case 7:return In(n,e,e.pendingProps,t),e.child;case 8:return In(n,e,e.pendingProps.children,t),e.child;case 12:return In(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,yt(Ef,i._currentValue),i._currentValue=o,s!==null)if(ir(s.value,o)){if(s.children===r.children&&!$n.current){e=Gr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=kr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),_p(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),_p(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}In(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,La(e,t),r=ki(r),i=i(r),e.flags|=1,In(n,e,i,t),e.child;case 14:return i=e.type,r=Yi(i,e.pendingProps),r=Yi(i.type,r),Ig(n,e,i,r,t);case 15:return Hy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yi(i,r),qc(n,e),e.tag=1,Kn(i)?(n=!0,yf(e)):n=!1,La(e,t),_y(e,i,r),vp(e,i,r,t),Sp(null,e,i,!0,n,t);case 19:return jy(n,e,t);case 22:return Vy(n,e,t)}throw Error(le(156,e.tag))};function lS(n,e){return Nx(n,e)}function FT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(n,e,t,i){return new FT(n,e,t,i)}function t_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function kT(n){if(typeof n=="function")return t_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ym)return 11;if(n===Sm)return 14}return 2}function Ms(n,e){var t=n.alternate;return t===null?(t=Di(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Zc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")t_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case fa:return lo(t.children,r,s,e);case xm:o=8,r|=8;break;case Vh:return n=Di(12,t,e,r|2),n.elementType=Vh,n.lanes=s,n;case Gh:return n=Di(13,t,e,r),n.elementType=Gh,n.lanes=s,n;case Wh:return n=Di(19,t,e,r),n.elementType=Wh,n.lanes=s,n;case gx:return od(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case mx:o=10;break e;case _x:o=9;break e;case ym:o=11;break e;case Sm:o=14;break e;case es:o=16,i=null;break e}throw Error(le(130,n==null?n:typeof n,""))}return e=Di(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function lo(n,e,t,i){return n=Di(7,n,i,e),n.lanes=t,n}function od(n,e,t,i){return n=Di(22,n,i,e),n.elementType=gx,n.lanes=t,n.stateNode={isHidden:!1},n}function jd(n,e,t){return n=Di(6,n,null,e),n.lanes=t,n}function Yd(n,e,t){return e=Di(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function zT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function n_(n,e,t,i,r,s,o,a,l){return n=new zT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Di(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zm(s),n}function BT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ca,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function uS(n){if(!n)return Ls;n=n._reactInternals;e:{if(Io(n)!==n||n.tag!==1)throw Error(le(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(n.tag===1){var t=n.type;if(Kn(t))return ly(n,t,e)}return e}function cS(n,e,t,i,r,s,o,a,l){return n=n_(t,i,!0,n,r,s,o,a,l),n.context=uS(null),t=n.current,i=Vn(),r=Ss(t),s=kr(i,r),s.callback=e??null,xs(t,s,r),n.current.lanes=r,Nu(n,r,i),Zn(n,i),n}function ad(n,e,t,i){var r=e.current,s=Vn(),o=Ss(r);return t=uS(t),e.context===null?e.context=t:e.pendingContext=t,e=kr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=xs(r,e,o),n!==null&&(tr(n,r,o,s),Xc(n,r,o)),o}function Uf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function i_(n,e){Yg(n,e),(n=n.alternate)&&Yg(n,e)}function HT(){return null}var fS=typeof reportError=="function"?reportError:function(n){console.error(n)};function r_(n){this._internalRoot=n}ld.prototype.render=r_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(le(409));ad(n,e,null,null)};ld.prototype.unmount=r_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;wo(function(){ad(null,n,null,null)}),e[Hr]=null}};function ld(n){this._internalRoot=n}ld.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<is.length&&e!==0&&e<is[t].priority;t++);is.splice(t,0,n),t===0&&Gx(n)}};function s_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ud(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qg(){}function VT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Uf(o);s.call(u)}}var o=cS(e,i,n,0,null,!1,!1,"",qg);return n._reactRootContainer=o,n[Hr]=o.current,hu(n.nodeType===8?n.parentNode:n),wo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Uf(l);a.call(u)}}var l=n_(n,0,!1,null,null,!1,!1,"",qg);return n._reactRootContainer=l,n[Hr]=l.current,hu(n.nodeType===8?n.parentNode:n),wo(function(){ad(e,l,t,i)}),l}function cd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uf(o);a.call(l)}}ad(e,o,n,r)}else o=VT(t,e,n,r,i);return Uf(o)}zx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rl(e.pendingLanes);t!==0&&(Tm(e,t|1),Zn(e,Ht()),!(ft&6)&&(Ya=Ht()+500,ks()))}break;case 13:wo(function(){var i=Vr(n,1);if(i!==null){var r=Vn();tr(i,n,1,r)}}),i_(n,1)}};wm=function(n){if(n.tag===13){var e=Vr(n,134217728);if(e!==null){var t=Vn();tr(e,n,134217728,t)}i_(n,134217728)}};Bx=function(n){if(n.tag===13){var e=Ss(n),t=Vr(n,e);if(t!==null){var i=Vn();tr(t,n,e,i)}i_(n,e)}};Hx=function(){return ht};Vx=function(n,e){var t=ht;try{return ht=n,e()}finally{ht=t}};ep=function(n,e,t){switch(e){case"input":if(Yh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ed(i);if(!r)throw Error(le(90));xx(i),Yh(i,r)}}}break;case"textarea":Sx(n,t);break;case"select":e=t.value,e!=null&&Ca(n,!!t.multiple,e,!1)}};Rx=Qm;bx=wo;var GT={usingClientEntryPoint:!1,Events:[Ou,ma,ed,Ax,Cx,Qm]},gl={findFiberByHostInstance:no,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},WT={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Dx(n),n===null?null:n.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||HT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Kf=rc.inject(WT),fr=rc}catch{}}yi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GT;yi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!s_(e))throw Error(le(200));return BT(n,e,null,t)};yi.createRoot=function(n,e){if(!s_(n))throw Error(le(299));var t=!1,i="",r=fS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=n_(n,1,!1,null,null,t,!1,i,r),n[Hr]=e.current,hu(n.nodeType===8?n.parentNode:n),new r_(e)};yi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(le(188)):(n=Object.keys(n).join(","),Error(le(268,n)));return n=Dx(e),n=n===null?null:n.stateNode,n};yi.flushSync=function(n){return wo(n)};yi.hydrate=function(n,e,t){if(!ud(e))throw Error(le(200));return cd(null,n,e,!0,t)};yi.hydrateRoot=function(n,e,t){if(!s_(n))throw Error(le(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=fS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=cS(e,null,n,1,t??null,r,!1,s,o),n[Hr]=e.current,hu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ld(e)};yi.render=function(n,e,t){if(!ud(e))throw Error(le(200));return cd(null,n,e,!1,t)};yi.unmountComponentAtNode=function(n){if(!ud(n))throw Error(le(40));return n._reactRootContainer?(wo(function(){cd(null,null,n,!1,function(){n._reactRootContainer=null,n[Hr]=null})}),!0):!1};yi.unstable_batchedUpdates=Qm;yi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ud(t))throw Error(le(200));if(n==null||n._reactInternals===void 0)throw Error(le(38));return cd(n,e,t,!1,i)};yi.version="18.2.0-next-9e3b772b8-20220608";function dS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dS)}catch(n){console.error(n)}}dS(),cx.exports=yi;var XT=cx.exports,$g=XT;Bh.createRoot=$g.createRoot,Bh.hydrateRoot=$g.hydrateRoot;const jT="_navMenu_1jzxd_5",YT="_navMenuTest_1jzxd_14",qT="_navBox_1jzxd_23",$T="_design_1jzxd_62",KT="_button_1jzxd_77",ZT="_buttonRight_1jzxd_89",vl={navMenu:jT,navMenuTest:YT,navBox:qT,design:$T,button:KT,buttonRight:ZT},QT="_list_o66va_6",JT={list:QT},ew=({Toggle:n})=>{const e=[{id:1,navitem:"Home"},{id:2,navitem:"About"},{id:3,navitem:"Work"},{id:4,navitem:"Port"},{id:5,navitem:"Contact"}],t=i=>{let r=0;const s="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let o=null;clearInterval(o),o=setInterval(()=>{i.target.innerText=i.target.innerText.split("").map((a,l)=>l<r?i.target.dataset.value[l]:s[Math.floor(Math.random()*26)]).join(""),r>=i.target.dataset.value.length&&clearInterval(o),r+=1/3},30)};return Ee.jsx("ul",{className:JT.list,children:e.map(i=>Ee.jsx("li",{children:Ee.jsx("h1",{onMouseOver:t,"data-value":i.navitem,children:i.navitem})},i.id))})},tw=()=>{const[n,e]=Ct.useState(!1),t=()=>{e(!n)},[i,r]=Ct.useState(!1);Ct.useEffect(()=>{const o=()=>{window.scrollY>0?r(!0):r(!1)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[i]);const s={position:i?"fixed":"sticky",top:0,left:0,right:0,background:"white",zIndex:100};return Ee.jsx("nav",{style:s,children:Ee.jsx("div",{className:n?`${vl.navMenuTest}`:`${vl.navMenu}`,children:Ee.jsxs("div",{className:vl.navBox,children:[Ee.jsx("div",{children:Ee.jsx("button",{className:n?`${vl.buttonRight}`:`${vl.button}`,onClick:t,children:n?Ee.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 165 165",fill:"none",children:[Ee.jsx("path",{d:"M38.5 8.5L88 58.5L84.5 81.5L108.5 79L163.867 134.776L153 145.5L140 145.5L89.5 97L67 97L67 76.092L11.1322 20.2242L20.6782 10.6783L38.5 8.5Z",fill:"black"}),Ee.jsx("path",{d:"M11.1322 134.776L63 82.5L63 101.012L83.0801 101.012L35 148.5L26.5 151L11.1322 134.776Z",fill:"black"}),Ee.jsx("path",{d:"M92 55.856L144.856 3.00006L163.948 22.0919L111.092 74.9479L88.5 77L92 55.856Z",fill:"black"})]}):Ee.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"25",viewBox:"0 0 194 147",fill:"none",children:[Ee.jsx("path",{d:"M0 0H194V13.5L175 27H112.5H97H83.5H0V0Z",fill:"black"}),Ee.jsx("path",{d:"M0 60H90V80.5L82.5 87H0V60Z",fill:"black"}),Ee.jsx("path",{d:"M0 120H145.5L160 133.5V147H0V120Z",fill:"black"})]})})}),n&&Ee.jsx(ew,{Toggle:n})]})})})};var hS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kg=ps.createContext&&ps.createContext(hS),Es=globalThis&&globalThis.__assign||function(){return Es=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Es.apply(this,arguments)},nw=globalThis&&globalThis.__rest||function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t};function pS(n){return n&&n.map(function(e,t){return ps.createElement(e.tag,Es({key:t},e.attr),pS(e.child))})}function o_(n){return function(e){return ps.createElement(iw,Es({attr:Es({},n.attr)},e),pS(n.child))}}function iw(n){var e=function(t){var i=n.attr,r=n.size,s=n.title,o=nw(n,["attr","size","title"]),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),ps.createElement("svg",Es({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:Es(Es({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ps.createElement("title",null,s),n.children)};return Kg!==void 0?ps.createElement(Kg.Consumer,null,function(t){return e(t)}):e(hS)}function rw(n){return o_({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(n)}function sw(n){return o_({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"}}]})(n)}function ow(n){return o_({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}}]})(n)}function Cr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function mS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _i={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},a_,Tn,Ft,Ui=1e8,_t=1/Ui,Up=Math.PI*2,aw=Up/4,lw=0,_S=Math.sqrt,uw=Math.cos,cw=Math.sin,ln=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},Wr=function(e){return typeof e=="number"},l_=function(e){return typeof e>"u"},gr=function(e){return typeof e=="object"},Qn=function(e){return e!==!1},u_=function(){return typeof window<"u"},sc=function(e){return kt(e)||ln(e)},gS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,Np=/(?:-?\.?\d|\.)+/gi,vS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xS=/[+-]=-?[.\d]+/,yS=/[^,'"\[\]\s]+/gi,fw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Dt,wi,Ip,c_,xi={},Nf={},SS,MS=function(e){return(Nf=Ao(e,xi))&&ni},f_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},If=function(e,t){return!t&&console.warn(e)},ES=function(e,t){return e&&(xi[e]=t)&&Nf&&(Nf[e]=t)||xi},Mu=function(){return 0},dw={suppressEvents:!0,isStart:!0,kill:!1},Qc={suppressEvents:!0,kill:!1},hw={suppressEvents:!0},d_={},Ts=[],Op={},TS,fi={},$d={},Zg=30,Jc=[],h_="",p_=function(e){var t=e[0],i,r;if(gr(t)||kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Jc.length;r--&&!Jc[r].targetTest(t););i=Jc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new qS(e[r],i)))||e.splice(r,1);return e},uo=function(e){return e._gsap||p_(Ni(e))[0]._gsap},wS=function(e,t,i){return(i=e[t])&&kt(i)?e[t]():l_(i)&&e.getAttribute&&e.getAttribute(t)||i},Jn=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},dn=function(e){return Math.round(e*1e7)/1e7||0},Ua=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},pw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Of=function(){var e=Ts.length,t=Ts.slice(0),i,r;for(Op={},Ts.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},AS=function(e,t,i,r){Ts.length&&!Tn&&Of(),e.render(t,i,r||Tn&&t<0&&(e._initted||e._startAt)),Ts.length&&!Tn&&Of()},CS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yS).length<2?t:ln(e)?e.trim():e},RS=function(e){return e},Bi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},mw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ao=function(e,t){for(var i in t)e[i]=t[i];return e},Qg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=gr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ff=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Xl=function(e){var t=e.parent||Dt,i=e.keyframes?mw(wn(e.keyframes)):Bi;if(Qn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},_w=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},bS=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},fd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ds=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},co=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},gw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fp=function(e,t,i,r){return e._startAt&&(Tn?e._startAt.revert(Qc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},vw=function n(e){return!e||e._ts&&n(e.parent)},Jg=function(e){return e._repeat?$a(e._tTime,e=e.duration()+e._rDelay)*e:0},$a=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},kf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dd=function(e){return e._end=dn(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},hd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=dn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dd(e),i._dirty||co(i,e)),e},PS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=kf(e.rawTime(),t),(!t._dur||ku(0,t.totalDuration(),i)-t._tTime>_t)&&t.render(i,!0)),co(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-_t}},ur=function(e,t,i,r){return t.parent&&Ds(t),t._start=dn((Wr(i)?i:i||e!==Dt?Ti(e,i,t):e._time)+t._delay),t._end=dn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bS(e,t,"_first","_last",e._sort?"_start":0),kp(t)||(e._recent=t),r||PS(e,t),e._ts<0&&hd(e,e._tTime),e},LS=function(e,t){return(xi.ScrollTrigger||f_("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},DS=function(e,t,i,r,s){if(__(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&TS!==di.frame)return Ts.push(e),e._lazy=[s,r],1},xw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},kp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&xw(e)&&!(!e._initted&&kp(e))||(e._ts<0||e._dp._ts<0)&&!kp(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=ku(0,e._tDur,t),c=$a(l,a),e._yoyo&&c&1&&(o=1-o),c!==$a(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Tn||r||e._zTime===_t||!t&&e._zTime){if(!e._initted&&DS(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?_t:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Fp(e,t,i,!0),e._onUpdate&&!i&&Ii(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ds(e,1),!i&&!Tn&&(Ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Sw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ka=function(e,t,i,r){var s=e._repeat,o=dn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:dn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&hd(e,e._tTime=e._tDur*a),e.parent&&dd(e),i||co(e.parent,e),e},e0=function(e){return e instanceof Yn?co(e):Ka(e,e._dur)},Mw={_start:0,endTime:Mu,totalDuration:Mu},Ti=function n(e,t,i){var r=e.labels,s=e._recent||Mw,o=e.duration()>=Ui?s.endTime(!1):e._dur,a,l,u;return ln(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(wn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},jl=function(e,t,i){var r=Wr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Qn(l.vars.inherit)&&l.parent;o.immediateRender=Qn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Wt(t[0],o,t[s+1])},zs=function(e,t){return e||e===0?t(e):t},ku=function(e,t,i){return i<e?e:i>t?t:i},En=function(e,t){return!ln(e)||!(t=fw.exec(e))?"":t[1]},Ew=function(e,t,i){return zs(i,function(r){return ku(e,t,r)})},zp=[].slice,US=function(e,t){return e&&gr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&gr(e[0]))&&!e.nodeType&&e!==wi},Tw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return ln(r)&&!t||US(r,1)?(s=i).push.apply(s,Ni(r)):i.push(r)})||i},Ni=function(e,t,i){return Ft&&!t&&Ft.selector?Ft.selector(e):ln(e)&&!i&&(Ip||!Za())?zp.call((t||c_).querySelectorAll(e),0):wn(e)?Tw(e,i):US(e)?zp.call(e,0):e?[e]:[]},Bp=function(e){return e=Ni(e)[0]||If("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ni(t,i.querySelectorAll?i:i===e?If("Invalid scope")||c_.createElement("div"):e)}},NS=function(e){return e.sort(function(){return .5-Math.random()})},IS=function(e){if(kt(e))return e;var t=gr(e)?e:{each:e},i=fo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return ln(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],d,v,x,y,E,w,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Ui])[1],!S){for(M=-Ui;M<(M=g[S++].getBoundingClientRect().left)&&S<_;);S--}for(m=o[_]=[],d=l?Math.min(S,_)*c-.5:r%S,v=S===Ui?0:l?_*h/S-.5:r/S|0,M=0,P=Ui,w=0;w<_;w++)x=w%S-d,y=v-(w/S|0),m[w]=E=u?Math.abs(u==="y"?y:x):_S(x*x+y*y),E>M&&(M=E),E<P&&(P=E);r==="random"&&NS(m),m.max=M-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=En(t.amount||t.each)||0,i=i&&_<0?XS(i):i}return _=(m[f]-m.min)/m.max||0,dn(m.b+(i?i(_):_)*m.v)+m.u}},Hp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=dn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Wr(i)?0:En(i))}},OS=function(e,t){var i=wn(e),r,s;return!i&&gr(e)&&(r=i=e.radius||Ui,e.values?(e=Ni(e.values),(s=!Wr(e[0]))&&(r*=r)):e=Hp(e.increment)),zs(t,i?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Ui,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||Wr(o)?c:c+En(o)}:Hp(e))},FS=function(e,t,i,r){return zs(wn(e)?!t:i===!0?!!(i=0):!r,function(){return wn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},ww=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Aw=function(e,t){return function(i){return e(parseFloat(i))+(t||En(i))}},Cw=function(e,t,i){return zS(e,t,0,1,i)},kS=function(e,t,i){return zs(i,function(r){return e[~~t(r)]})},Rw=function n(e,t,i){var r=t-e;return wn(e)?kS(e,n(0,e.length),t):zs(i,function(s){return(r+(s-e)%r)%r+e})},bw=function n(e,t,i){var r=t-e,s=r*2;return wn(e)?kS(e,n(0,e.length-1),t):zs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Eu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?yS:Np),i+=e.substr(t,r-t)+FS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},zS=function(e,t,i,r,s){var o=t-e,a=r-i;return zs(s,function(l){return i+((l-e)/o*a||0)})},Pw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=ln(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=Ao(wn(e)?[]:{},e));if(!c){for(l in t)m_.call(a,e,l,"get",t[l]);s=function(g){return x_(g,a)||(o?e.p:e)}}}return zs(i,s)},t0=function(e,t,i){var r=e.labels,s=Ui,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ii=function(e,t,i){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ts.length&&Of(),a&&(Ft=a),c=l?s.apply(u,l):s.call(u),Ft=o,c},Pl=function(e){return Ds(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Tn),e.progress()<1&&Ii(e,"onInterrupt"),e},Ea,BS=[],HS=function(e){if(u_()&&e){e=!e.name&&e.default||e;var t=e.name,i=kt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Mu,render:x_,add:m_,kill:jw,modifier:Xw,rawVars:0},o={targetTest:0,get:0,getSetter:v_,aliases:{},register:0};if(Za(),e!==r){if(fi[t])return;Bi(r,Bi(Ff(e,s),o)),Ao(r.prototype,Ao(s,Ff(e,o))),fi[r.prop=t]=r,e.targetTest&&(Jc.push(r),d_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ES(t,r),e.register&&e.register(ni,r,ei)}else e&&BS.push(e)},mt=255,Ll={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},Kd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*mt+.5|0},VS=function(e,t,i){var r=e?Wr(e)?[e>>16,e>>8&mt,e&mt]:0:Ll.black,s,o,a,l,u,c,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ll[e])r=Ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&mt,r&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Np),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Kd(l+1/3,s,o),r[1]=Kd(l,s,o),r[2]=Kd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(vS),i&&r.length<4&&(r[3]=1),r}else r=e.match(Np)||Ll.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/mt,o=r[1]/mt,a=r[2]/mt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},GS=function(e){var t=[],i=[],r=-1;return e.split(ws).forEach(function(s){var o=s.match(Ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},n0=function(e,t,i){var r="",s=(e+r).match(ws),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=VS(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=GS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(ws,"1").split(Ma),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(ws),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},ws=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ll)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Lw=/hsl[a]?\(/,WS=function(e){var t=e.join(" "),i;if(ws.lastIndex=0,ws.test(t))return i=Lw.test(t),e[1]=n0(e[1],i),e[0]=n0(e[0],i,GS(e[1])),!0},Tu,di=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,p,g=function _(m){var d=n()-r,v=m===!0,x,y,E,w;if(d>e&&(i+=d-t),r+=d,E=r-i,x=E-o,(x>0||v)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](E,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){SS&&(!Ip&&u_()&&(wi=Ip=window,c_=wi.document||{},xi.gsap=ni,(wi.gsapVersions||(wi.gsapVersions=[])).push(ni.version),MS(Nf||wi.GreenSockGlobals||!wi.gsap&&wi||{}),c=wi.requestAnimationFrame,BS.forEach(HS)),l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Tu=1,g(2))},sleep:function(){(c?wi.cancelAnimationFrame:clearTimeout)(l),Tu=0,u=Mu},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,v){var x=d?function(y,E,w,M){m(y,E,w,M),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),Za(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),Za=function(){return!Tu&&di.wake()},ut={},Dw=/^[\d.\-M][\d.\-,\s]/,Uw=/["']/g,Nw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Uw,"").trim():+u,r=l.substr(a+1).trim();return t},Iw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Ow=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Nw(t[1])]:Iw(e).split(",").map(CS)):ut._CE&&Dw.test(e)?ut._CE("",e):i},XS=function(e){return function(t){return 1-e(1-t)}},jS=function n(e,t){for(var i=e._first,r;i;)i instanceof Yn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},fo=function(e,t){return e&&(kt(e)?e:ut[e]||Ow(e))||t},Oo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Jn(e,function(a){ut[a]=xi[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},YS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Up*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*cw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:YS(a);return s=Up/s,l.config=function(u,c){return n(e,u,c)},l},Qd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:YS(i);return r.config=function(s){return n(e,s)},r};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Oo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Oo("Elastic",Zd("in"),Zd("out"),Zd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Oo("Circ",function(n){return-(_S(1-n*n)-1)});Oo("Sine",function(n){return n===1?1:-uw(n*aw)+1});Oo("Back",Qd("in"),Qd("out"),Qd());ut.SteppedEase=ut.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-_t;return function(a){return((r*ku(0,o,a)|0)+s)*i}}};qa.ease=ut["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return h_+=n+","+n+"Params,"});var qS=function(e,t){this.id=lw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wS,this.set=t?t.getSetter:v_},wu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ka(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Tu||di.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ka(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Za(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hd(this,i),!s._dp||s.parent||PS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ur(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===_t||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),AS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Jg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Jg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?$a(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?kf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_t?0:this._rts,this.totalTime(ku(-Math.abs(this._delay),this._tDur,r),!0),dd(this),gw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ur(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Qn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=hw);var r=Tn;return Tn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Tn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,e0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,e0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ti(this,i),Qn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Qn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-_t)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=kt(i)?i:RS,a=function(){var u=r.then;r.then=null,kt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Pl(this)},n}();Bi(wu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var Yn=function(n){mS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Qn(i.sortChildren),Dt&&ur(i.parent||Dt,Cr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&LS(Cr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return jl(0,arguments,this),this},t.from=function(r,s,o){return jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Xl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(r,s,Ti(this,o),1),this},t.call=function(r,s,o){return ur(this,Wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Wt(r,o,Ti(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Xl(o).immediateRender=Qn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,Xl(a).immediateRender=Qn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:dn(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,d,v,x,y,E,w,M;if(this!==Dt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,d=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=dn(c%m),c===l?(_=this._repeat,f=u):(_=~~(c/m),_&&_===c/m&&(f=u,_--),f>u&&(f=u)),E=$a(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),w&&_&1&&(f=u-f,M=1),_!==E&&!this._lock){var P=w&&E&1,S=P===(w&&_&1);if(_<E&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:dn(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ii(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;jS(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Sw(this,dn(a),dn(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Ii(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-_t);break}}p=g}else{p=this._last;for(var T=r<0?r:f;p;){if(g=p._prev,(p._act||T<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||Tn&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=T?-_t:_t);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-_t)._zTime=f>=a?1:-1,this._ts))return this._start=y,dd(this),this.render(r,s,o);this._onUpdate&&!s&&Ii(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ds(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ii(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Wr(s)||(s=Ti(this,s,r)),!(r instanceof wu)){if(wn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(ln(r))return this.addLabel(r,s);if(kt(r))r=Wt.delayedCall(0,r);else return this}return this!==r?ur(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ui);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Wt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return ln(r)?this.removeLabel(r):kt(r)?this.killTweensOf(r):(fd(this,r),r===this._recent&&(this._recent=this._last),co(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dn(di.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ti(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Wt.delayedCall(0,s||Mu,o);return a.data="isPause",this._hasPause=1,ur(this,a,Ti(this,r))},t.removePause=function(r){var s=this._first;for(r=Ti(this,r);s;)s._start===r&&s.data==="isPause"&&Ds(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)as!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Ni(r),l=this._first,u=Wr(s),c;l;)l instanceof Wt?pw(l._targets,a)&&(u?(!as||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ti(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Wt.to(o,Bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||_t,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Ka(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Bi({startAt:{time:Ti(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),t0(this,Ti(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),t0(this,Ti(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return co(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),co(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ui,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ur(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ka(o,o===Dt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Dt._ts&&(AS(Dt,kf(r,Dt)),TS=di.frame),di.frame>=Zg){Zg+=_i.autoSleep||120;var s=Dt._first;if((!s||!s._ts)&&_i.autoSleep&&di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||di.sleep()}}},e}(wu);Bi(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fw=function(e,t,i,r,s,o,a){var l=new ei(this._pt,e,t,0,1,e1,null,s),u=0,c=0,h,f,p,g,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Eu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(qd)||[];h=qd.exec(r);)g=h[0],_=r.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Ua(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=qd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(xS.test(r)||d)&&(l.e=0),this._pt=l,l},m_=function(e,t,i,r,s,o,a,l,u,c){kt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:kt(h)?u?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=kt(h)?u?Vw:QS:g_,g;if(ln(r)&&(~r.indexOf("random(")&&(r=Eu(r)),r.charAt(1)==="="&&(g=Ua(f,r)+(En(f)||0),(g||g===0)&&(r=g))),!c||f!==r||Vp)return!isNaN(f*r)&&r!==""?(g=new ei(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?Ww:JS,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&f_(t,r),Fw.call(this,e,t,f,r,p,l||_i.stringFilter,u))},kw=function(e,t,i,r,s){if(kt(e)&&(e=Yl(e,s,t,i,r)),!gr(e)||e.style&&e.nodeType||wn(e)||gS(e))return ln(e)?Yl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Yl(e[a],s,t,i,r);return o},$S=function(e,t,i,r,s,o){var a,l,u,c;if(fi[e]&&(a=new fi[e]).init(s,a.rawVars?t[e]:kw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ei(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ea))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},as,Vp,__=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,p=r.yoyoEase,g=r.keyframes,_=r.autoRevert,m=e._dur,d=e._startAt,v=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:v,E=e._overwrite==="auto"&&!a_,w=e.timeline,M,P,S,T,j,z,I,F,k,J,O,U,W;if(w&&(!g||!s)&&(s="none"),e._ease=fo(s,qa.ease),e._yEase=p?XS(fo(p===!0?s:p,qa.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(F=v[0]?uo(v[0]).harness:0,U=F&&r[F.prop],M=Ff(r,d_),d&&(d._zTime<0&&d.progress(1),t<0&&f&&a&&!_?d.render(-1,!0):d.revert(f&&m?Qc:dw),d._lazy=0),o){if(Ds(e._startAt=Wt.set(v,Bi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Qn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn||!a&&!_)&&e._startAt.revert(Qc),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(f&&m&&!d){if(t&&(a=!1),S=Bi({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Qn(l),immediateRender:a,stagger:0,parent:x},M),U&&(S[F.prop]=U),Ds(e._startAt=Wt.set(v,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn?e._startAt.revert(Qc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Qn(l)||l&&!m,P=0;P<v.length;P++){if(j=v[P],I=j._gsap||p_(v)[P]._gsap,e._ptLookup[P]=J={},Op[I.id]&&Ts.length&&Of(),O=y===v?P:y.indexOf(j),F&&(k=new F).init(j,U||M,e,O,y)!==!1&&(e._pt=T=new ei(e._pt,j,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(C){J[C]=T}),k.priority&&(z=1)),!F||U)for(S in M)fi[S]&&(k=$S(S,M,e,O,j,y))?k.priority&&(z=1):J[S]=T=m_.call(e,j,S,"get",M[S],O,y,0,r.stringFilter);e._op&&e._op[P]&&e.kill(j,e._op[P]),E&&e._pt&&(as=e,Dt.killTweensOf(j,J,e.globalTime(t)),W=!e.parent,as=0),e._pt&&l&&(Op[I.id]=1)}z&&t1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!W,g&&t<=0&&w.render(Ui,!0,!0)},zw=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vp=1,e.vars[t]="+=0",__(e,a),Vp=0,1;l.push(u)}for(f=l.length;f--;)c=l[f],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=Bt(i)+En(c.e)),c.b&&(c.b=u.s+En(c.b))},Bw=function(e,t){var i=e[0]?uo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ao({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Hw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(wn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Yl=function(e,t,i,r,s){return kt(e)?e.call(t,i,r,s):ln(e)&&~e.indexOf("random(")?Eu(e):e},KS=h_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ZS={};Jn(KS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return ZS[n]=1});var Wt=function(n){mS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Xl(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,v=r.parent||Dt,x=(wn(i)||gS(i)?Wr(i[0]):"length"in r)?[i]:Ni(i),y,E,w,M,P,S,T,j;if(a._targets=x.length?p_(x):If("GSAP target "+i+" not found. https://greensock.com",!_i.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||sc(u)||sc(c)){if(r=a.vars,y=a.timeline=new Yn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Cr(a),y._start=0,f||sc(u)||sc(c)){if(M=x.length,T=f&&IS(f),gr(f))for(P in f)~KS.indexOf(P)&&(j||(j={}),j[P]=f[P]);for(E=0;E<M;E++)w=Ff(r,ZS),w.stagger=0,d&&(w.yoyoEase=d),j&&Ao(w,j),S=x[E],w.duration=+Yl(u,Cr(a),E,S,x),w.delay=(+Yl(c,Cr(a),E,S,x)||0)-a._delay,!f&&M===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(S,w,T?T(E,S,x):0),y._ease=ut.none;y.duration()?u=c=0:a.timeline=0}else if(g){Xl(Bi(y.vars.defaults,{ease:"none"})),y._ease=fo(g.ease||r.ease||"none");var z=0,I,F,k;if(wn(g))g.forEach(function(J){return y.to(x,J,">")}),y.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||Hw(P,g[P],w,g.easeEach);for(P in w)for(I=w[P].sort(function(J,O){return J.t-O.t}),z=0,E=0;E<I.length;E++)F=I[E],k={ease:F.e,duration:(F.t-(E?I[E-1].t:0))/100*u},k[P]=F.v,y.to(x,k,z),z+=k.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!a_&&(as=Cr(a),Dt.killTweensOf(x),as=0),ur(v,Cr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!g&&a._start===dn(v._time)&&Qn(h)&&vw(Cr(a))&&v.data!=="nested")&&(a._tTime=-_t,a.render(Math.max(0,-c)||0)),m&&LS(Cr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-_t&&!c?l:r<_t?0:r,f,p,g,_,m,d,v,x,y;if(!u)yw(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=dn(h%_),h===l?(g=this._repeat,f=u):(g=~~(h/_),g&&g===h/_&&(f=u,g--),f>u&&(f=u)),d=this._yoyo&&g&1,d&&(y=this._yEase,f=u-f),m=$a(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&jS(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render(dn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(DS(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/u),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&!g&&(Ii(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:!f&&d?-_t:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Fp(this,r,s,o),Ii(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Fp(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ds(this,1),!s&&!(c&&!a)&&(h||a||d)&&(Ii(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Tu||di.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||__(this,l),u=this._ease(l/this._dur),zw(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(hd(this,0),this.parent||bS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Pl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,as&&as.vars.overwrite!==!0)._first||Pl(this),this.parent&&o!==this.timeline.totalDuration()&&Ka(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ni(r):a,u=this._ptLookup,c=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&_w(a,l))return s==="all"&&(this._pt=0),Pl(this);for(h=this._op=this._op||[],s!=="all"&&(ln(s)&&(_={},Jn(s,function(v){return _[v]=1}),s=_),s=Bw(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=u[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&fd(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Pl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Dt.killTweensOf(r,s,o)},e}(wu);Bi(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(n){Wt[n]=function(){var e=new Yn,t=zp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var g_=function(e,t,i){return e[t]=i},QS=function(e,t,i){return e[t](i)},Vw=function(e,t,i,r){return e[t](r.fp,i)},Gw=function(e,t,i){return e.setAttribute(t,i)},v_=function(e,t){return kt(e[t])?QS:l_(e[t])&&e.setAttribute?Gw:g_},JS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ww=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},e1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},x_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Xw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},jw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?fd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Yw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},t1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ei=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||JS,this.d=l||this,this.set=u||g_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Yw,this.m=i,this.mt=s,this.tween=r},n}();Jn(h_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return d_[n]=1});xi.TweenMax=xi.TweenLite=Wt;xi.TimelineLite=xi.TimelineMax=Yn;Dt=new Yn({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_i.stringFilter=WS;var ho=[],ef={},qw=[],i0=0,$w=0,Jd=function(e){return(ef[e]||qw).map(function(t){return t()})},Gp=function(){var e=Date.now(),t=[];e-i0>2&&(Jd("matchMediaInit"),ho.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=wi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Jd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),i0=e,Jd("matchMedia"))},n1=function(){function n(t,i){this.selector=i&&Bp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$w++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){kt(i)&&(s=r,r=i,i=kt);var o=this,a=function(){var u=Ft,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Bp(s)),Ft=o,h=r.apply(o,arguments),kt(h)&&o._r.push(h),Ft=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===kt?a(o):i?o[i]=a:a},e.ignore=function(i){var r=Ft;Ft=null,i(this),Ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1/0}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Wt)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=ho.length;a--;)ho[a].id===this.id&&ho.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),Kw=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){gr(i)||(i={matches:i});var o=new n1(0,s||this.scope),a=o.conditions={},l,u,c;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=wi.matchMedia(i[u]),l&&(ho.indexOf(o)<0&&ho.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Gp):l.addEventListener("change",Gp)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return HS(r)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,t){return Dt.getTweensOf(e,t)},getProperty:function(e,t,i,r){ln(e)&&(e=Ni(e)[0]);var s=uo(e||{}).get,o=i?RS:CS;return i==="native"&&(i=""),e&&(t?o((fi[t]&&fi[t].get||s)(e,t,i,r)):function(a,l,u){return o((fi[a]&&fi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Ni(e),e.length>1){var r=e.map(function(c){return ni.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=fi[t],a=uo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Ea._pt=0,h.init(e,i?c+i:c,Ea,0,[e]),h.render(1,h),Ea._pt&&x_(1,Ea)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ni.to(e,Ao((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fo(e.ease,qa.ease)),Qg(qa,e||{})},config:function(e){return Qg(_i,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!fi[a]&&!xi[a]&&If(t+" effect requires "+a+" plugin.")}),$d[t]=function(a,l,u){return i(Ni(a),Bi(l||{},s),u)},o&&(Yn.prototype[t]=function(a,l,u){return this.add($d[t](a,gr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ut[e]=fo(t)},parseEase:function(e,t){return arguments.length?fo(e,t):ut},getById:function(e){return Dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Yn(e),r,s;for(i.smoothChildTiming=Qn(e.smoothChildTiming),Dt.remove(i),i._dp=0,i._time=i._tTime=Dt._time,r=Dt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Wt&&r.vars.onComplete===r._targets[0]))&&ur(i,r,r._start-r._delay),r=s;return ur(Dt,i,0),i},context:function(e,t){return e?new n1(e,t):Ft},matchMedia:function(e){return new Kw(e)},matchMediaRefresh:function(){return ho.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Gp()},addEventListener:function(e,t){var i=ef[e]||(ef[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ef[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Rw,wrapYoyo:bw,distribute:IS,random:FS,snap:OS,normalize:Cw,getUnit:En,clamp:Ew,splitColor:VS,toArray:Ni,selector:Bp,mapRange:zS,pipe:ww,unitize:Aw,interpolate:Pw,shuffle:NS},install:MS,effects:$d,ticker:di,updateRoot:Yn.updateRoot,plugins:fi,globalTimeline:Dt,core:{PropTween:ei,globals:ES,Tween:Wt,Timeline:Yn,Animation:wu,getCache:uo,_removeLinkedListItem:fd,reverting:function(){return Tn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return a_=e}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return zf[n]=Wt[n]});di.add(Yn.updateRoot);Ea=zf.to({},{duration:0});var Zw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Qw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Zw(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},eh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(ln(s)&&(l={},Jn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Qw(a,s)}}}},ni=zf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Tn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},eh("roundProps",Hp),eh("modifiers"),eh("snap",OS))||zf;Wt.version=Yn.version=ni.version="3.12.2";SS=1;u_()&&Za();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var r0,ls,Na,y_,so,s0,S_,Jw=function(){return typeof window<"u"},Xr={},Zs=180/Math.PI,Ia=Math.PI/180,zo=Math.atan2,o0=1e8,M_=/([A-Z])/g,eA=/(left|right|width|margin|padding|x)/i,tA=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},i1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},r1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sA=function(e,t,i){return e.style[t]=i},oA=function(e,t,i){return e.style.setProperty(t,i)},aA=function(e,t,i){return e._gsap[t]=i},lA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},uA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},cA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ut="transform",nr=Ut+"Origin",fA=function n(e,t){var i=this,r=this.target,s=r.style;if(e in Xr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=cr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=br(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:br(r,e);else return cr.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Ut)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(nr,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},s1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},dA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(M_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=S_(),(!s||!s.isStart)&&!i[Ut]&&(s1(i),r.uncache=1)}},o1=function(e,t){var i={target:e,props:[],revert:dA,save:fA};return e._gsap||ni.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},a1,Xp=function(e,t){var i=ls.createElementNS?ls.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ls.createElement(e);return i.style?i:ls.createElement(e)},hr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(M_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Qa(t)||t,1)||""},a0="O,Moz,ms,Ms,Webkit".split(","),Qa=function(e,t,i){var r=t||so,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(a0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?a0[o]:"")+e},jp=function(){Jw()&&window.document&&(r0=window,ls=r0.document,Na=ls.documentElement,so=Xp("div")||{style:{}},Xp("div"),Ut=Qa(Ut),nr=Ut+"Origin",so.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",a1=!!Qa("perspective"),S_=ni.core.reverting,y_=1)},th=function n(e){var t=Xp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Na.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Na.removeChild(t),this.style.cssText=s,o},l0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},l1=function(e){var t;try{t=e.getBBox()}catch{t=th.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===th||(t=th.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+l0(e,["x","cx","x1"])||0,y:+l0(e,["y","cy","y1"])||0,width:0,height:0}:t},u1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&l1(e))},Au=function(e,t){if(t){var i=e.style;t in Xr&&t!==nr&&(t=Ut),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(M_,"-$1").toLowerCase())):i.removeAttribute(t)}},us=function(e,t,i,r,s,o){var a=new ei(e._pt,t,i,0,1,o?r1:i1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},u0={deg:1,rad:1,turn:1},hA={grid:1,flex:1},Us=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=so.style,l=eA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,_,m,d;return r===o||!s||u0[r]||u0[o]?s:(o!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&u1(e),(p||o==="%")&&(Xr[t]||~t.indexOf("adius"))?(g=d?e.getBBox()[l?"width":"height"]:e[c],Bt(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ls||!_.appendChild)&&(_=ls.body),m=_._gsap,m&&p&&m.width&&l&&m.time===di.time&&!m.uncache?Bt(s/m.width*h):((p||o==="%")&&!hA[hr(_,"display")]&&(a.position=hr(e,"position")),_===e&&(a.position="static"),_.appendChild(so),g=so[c],_.removeChild(so),a.position="absolute",l&&p&&(m=uo(_),m.time=di.time,m.width=_[c]),Bt(f?g*s/h:g&&s?h/g*s:0))))},br=function(e,t,i,r){var s;return y_||jp(),t in cr&&t!=="transform"&&(t=cr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xr[t]&&t!=="transform"?(s=Ru(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Hf(hr(e,nr))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Bf[t]&&Bf[t](e,t,i)||hr(e,t)||wS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Us(e,t,s,i)+i:s},pA=function(e,t,i,r){if(!i||i==="none"){var s=Qa(t,e,1),o=s&&hr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=hr(e,"borderTopColor"))}var a=new ei(this._pt,e.style,t,0,1,e1),l=0,u=0,c,h,f,p,g,_,m,d,v,x,y,E;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=hr(e,t)||r,e.style[t]=i),c=[i,r],WS(c),i=c[0],r=c[1],f=i.match(Ma)||[],E=r.match(Ma)||[],E.length){for(;h=Ma.exec(r);)m=h[0],v=r.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ua(p,m)+y),d=parseFloat(m),x=m.substr((d+"").length),l=Ma.lastIndex-x.length,x||(x=x||_i.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Us(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?r1:i1;return xS.test(r)&&(a.e=0),this._pt=a,a},c0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=c0[i]||i,t[1]=c0[r]||r,t.join(" ")},_A=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Xr[a]&&(l=1,a=a==="transformOrigin"?nr:Ut),Au(i,a);l&&(Au(i,Ut),o&&(o.svg&&i.removeAttribute("transform"),Ru(i,1),o.uncache=1,s1(r)))}},Bf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ei(e._pt,t,i,0,0,_A);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Cu=[1,0,0,1,0,0],c1={},f1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},f0=function(e){var t=hr(e,Ut);return f1(t)?Cu:t.substr(7).match(vS).map(Bt)},E_=function(e,t){var i=e._gsap||uo(e),r=e.style,s=f0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Cu:s):(s===Cu&&!e.offsetParent&&e!==Na&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Na.appendChild(e)),s=f0(e),l?r.display=l:Au(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Na.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yp=function(e,t,i,r,s,o){var a=e._gsap,l=s||E_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,M,P,S;i?l!==Cu&&(M=p*m-g*_)&&(P=y*(m/M)+E*(-_/M)+(_*v-m*d)/M,S=y*(-g/M)+E*(p/M)-(p*v-g*d)/M,y=P,E=S):(w=l1(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&a.smooth?(d=y-u,v=E-c,a.xOffset=h+(d*p+v*_)-d,a.yOffset=f+(d*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[nr]="0px 0px",o&&(us(o,a,"xOrigin",u,y),us(o,a,"yOrigin",c,E),us(o,a,"xOffset",h,a.xOffset),us(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Ru=function(e,t){var i=e._gsap||new qS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=hr(e,nr)||"0",c,h,f,p,g,_,m,d,v,x,y,E,w,M,P,S,T,j,z,I,F,k,J,O,U,W,C,N,H,ue,re,fe;return c=h=f=_=m=d=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&u1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),r.scale=r.rotate=r.translate="none"),M=E_(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Yp(e,O||u,!!O||i.originIsAbsolute,i.smooth!==!1,M)),E=i.xOrigin||0,w=i.yOrigin||0,M!==Cu&&(j=M[0],z=M[1],I=M[2],F=M[3],c=k=M[4],h=J=M[5],M.length===6?(p=Math.sqrt(j*j+z*z),g=Math.sqrt(F*F+I*I),_=j||z?zo(z,j)*Zs:0,v=I||F?zo(I,F)*Zs+_:0,v&&(g*=Math.abs(Math.cos(v*Ia))),i.svg&&(c-=E-(E*j+w*I),h-=w-(E*z+w*F))):(fe=M[6],ue=M[7],C=M[8],N=M[9],H=M[10],re=M[11],c=M[12],h=M[13],f=M[14],P=zo(fe,H),m=P*Zs,P&&(S=Math.cos(-P),T=Math.sin(-P),O=k*S+C*T,U=J*S+N*T,W=fe*S+H*T,C=k*-T+C*S,N=J*-T+N*S,H=fe*-T+H*S,re=ue*-T+re*S,k=O,J=U,fe=W),P=zo(-I,H),d=P*Zs,P&&(S=Math.cos(-P),T=Math.sin(-P),O=j*S-C*T,U=z*S-N*T,W=I*S-H*T,re=F*T+re*S,j=O,z=U,I=W),P=zo(z,j),_=P*Zs,P&&(S=Math.cos(P),T=Math.sin(P),O=j*S+z*T,U=k*S+J*T,z=z*S-j*T,J=J*S-k*T,j=O,k=U),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Bt(Math.sqrt(j*j+z*z+I*I)),g=Bt(Math.sqrt(J*J+fe*fe)),P=zo(k,J),v=Math.abs(P)>2e-4?P*Zs:0,y=re?1/(re<0?-re:re):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!f1(hr(e,Ut)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Bt(p),i.scaleY=Bt(g),i.rotation=Bt(_)+a,i.rotationX=Bt(m)+a,i.rotationY=Bt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[nr]=Hf(u)),i.xOffset=i.yOffset=0,i.force3D=_i.force3D,i.renderTransform=i.svg?vA:a1?d1:gA,i.uncache=0,i},Hf=function(e){return(e=e.split(" "))[0]+" "+e[1]},nh=function(e,t,i){var r=En(t);return Bt(parseFloat(t)+parseFloat(Us(e,"x",i+"px",r)))+r},gA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,d1(e,t)},Gs="0deg",xl="0px",Ws=") ",d1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",E=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==Gs||c!==Gs)){var w=parseFloat(c)*Ia,M=Math.sin(w),P=Math.cos(w),S;w=parseFloat(h)*Ia,S=Math.cos(w),o=nh(v,o,M*S*-x),a=nh(v,a,-Math.sin(w)*-x),l=nh(v,l,P*S*-x+x)}m!==xl&&(y+="perspective("+m+Ws),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||o!==xl||a!==xl||l!==xl)&&(y+=l!==xl||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ws),u!==Gs&&(y+="rotate("+u+Ws),c!==Gs&&(y+="rotateY("+c+Ws),h!==Gs&&(y+="rotateX("+h+Ws),(f!==Gs||p!==Gs)&&(y+="skew("+f+", "+p+Ws),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ws),v.style[Ut]=y||"translate(0, 0)"},vA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),E,w,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ia,u*=Ia,E=Math.cos(l)*h,w=Math.sin(l)*h,M=Math.sin(l-u)*-f,P=Math.cos(l-u)*f,u&&(c*=Ia,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=Bt(E),w=Bt(w),M=Bt(M),P=Bt(P)):(E=h,P=f,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Us(p,"x",o,"px"),y=Us(p,"y",a,"px")),(g||_||m||d)&&(x=Bt(x+g-(g*E+_*M)+m),y=Bt(y+_-(g*w+_*P)+d)),(r||s)&&(S=p.getBBox(),x=Bt(x+r/100*S.width),y=Bt(y+s/100*S.height)),S="matrix("+E+","+w+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ut]=S)},xA=function(e,t,i,r,s){var o=360,a=ln(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zs:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*o0)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*o0)%o-~~(u/o)*o)),e._pt=f=new ei(e._pt,t,i,r,u,nA),f.e=c,f.u="deg",e._props.push(i),f},d0=function(e,t){for(var i in t)e[i]=t[i];return e},yA=function(e,t,i){var r=d0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ut]=t,a=Ru(i,1),Au(i,Ut),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ut],o[Ut]=t,a=Ru(i,1),o[Ut]=u);for(l in Xr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=En(u),g=En(c),h=p!==g?Us(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new ei(e._pt,a,l,h,f-h,Wp),e._pt.u=g||0,e._props.push(l));d0(a,r)};Jn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Bf[e>1?"border"+n:n]=function(a,l,u,c,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return br(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var h1={name:"css",register:jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,p,g,_,m,d,v,x,y,E,w,M,P;y_||jp(),this.styles=this.styles||o1(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(fi[_]&&$S(_,t,i,r,e,s)))){if(p=typeof c,g=Bf[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Eu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",ws.lastIndex=0,ws.test(u)||(m=En(u),d=En(c)),d?m!==d&&(u=Us(e,_,u,d)+d):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],ln(u)&&~u.indexOf("random(")&&(u=Eu(u)),En(u+"")||(u+=_i.units[_]||En(br(e,_))||""),(u+"").charAt(1)==="="&&(u=br(e,_))):u=br(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in cr&&(_==="autoAlpha"&&(f===1&&br(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),us(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=cr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Xr,x){if(this.styles.save(_),y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ru(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new ei(this._pt,a,Ut,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new ei(this._pt,E,"scaleY",E.scaleY,(v?Ua(E.scaleY,v+h):h)-E.scaleY||0,Wp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(nr,0,a[nr]),c=mA(c),E.svg?Yp(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==E.zOrigin&&us(this,E,"zOrigin",E.zOrigin,d),us(this,a,_,Hf(u),Hf(c)));continue}else if(_==="svgOrigin"){Yp(e,c,1,w,0,this);continue}else if(_ in c1){xA(this,E,_,f,v?Ua(f,v+c):c);continue}else if(_==="smoothOrigin"){us(this,E,"smooth",E.smooth,c);continue}else if(_==="force3D"){E[_]=c;continue}else if(_==="transform"){yA(this,c,e);continue}}else _ in a||(_=Qa(_)||_);if(x||(h||h===0)&&(f||f===0)&&!tA.test(c)&&_ in a)m=(u+"").substr((f+"").length),h||(h=0),d=En(c)||(_ in _i.units?_i.units[_]:m),m!==d&&(f=Us(e,_,u,d)),this._pt=new ei(this._pt,x?E:a,_,f,(v?Ua(f,v+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?rA:Wp),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=iA);else if(_ in a)pA.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){f_(_,c);continue}x||(_ in a?P.push(_,0,a[_]):P.push(_,1,u||e[_])),o.push(_)}}M&&t1(this)},render:function(e,t){if(t.tween._time||!S_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:br,aliases:cr,getSetter:function(e,t,i){var r=cr[t];return r&&r.indexOf(",")<0&&(t=r),t in Xr&&t!==nr&&(e._gsap.x||br(e,"x"))?i&&s0===i?t==="scale"?lA:aA:(s0=i||{})&&(t==="scale"?uA:cA):e.style&&!l_(e.style[t])?sA:~t.indexOf("-")?oA:v_(e,t)},core:{_removeProperty:Au,_getMatrix:E_}};ni.utils.checkPrefix=Qa;ni.core.getStyleSaver=o1;(function(n,e,t,i){var r=Jn(n+","+e+","+t,function(s){Xr[s]=1});Jn(e,function(s){_i.units[s]="deg",c1[s]=1}),cr[r[13]]=n+","+e,Jn(i,function(s){var o=s.split(":");cr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){_i.units[n]="px"});ni.registerPlugin(h1);var Co=ni.registerPlugin(h1)||ni;Co.core.Tween;const SA="_container_1ux0w_18",MA="_video_1ux0w_31",EA="_prospective_1ux0w_41",TA="_leftContent_1ux0w_45",wA="_rightTopContent_1ux0w_57",AA="_rightBottomContent_1ux0w_67",CA="_linkTag_1ux0w_75",RA="_MainContent_1ux0w_84",bA="_card_1ux0w_93",PA="_thumb_1ux0w_104",LA="_span_1ux0w_125",DA="_Cardh1_1ux0w_136",UA="_leftH1_1ux0w_144",NA="_imageBacktext_1ux0w_166",IA="_imageFrontTest_1ux0w_171",OA="_rightContent_1ux0w_182",Mi={container:SA,video:MA,prospective:EA,leftContent:TA,rightTopContent:wA,rightBottomContent:AA,linkTag:CA,MainContent:RA,card:bA,thumb:PA,span:LA,Cardh1:DA,leftH1:UA,imageBacktext:NA,imageFrontTest:IA,rightContent:OA},FA="/PortRepo/assets/video-c2ecae32.webm",kA=()=>{const[n,e]=Ct.useState(window.innerWidth),t=()=>{e(window.innerWidth)};return Ct.useEffect(()=>{const i=document.querySelector(`.${Mi.card}`);return document.querySelector(".can").addEventListener("mousemove",s=>{const o=-(window.innerWidth/2-s.pageX)/60,a=(window.innerHeight/2-s.pageY)/60;Co.to(i,{duration:.5,rotationY:o,rotationX:a,ease:"power2.out"})}),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),Ee.jsxs("div",{className:`can ${Mi.container}`,children:[Ee.jsx("video",{loop:!0,autoPlay:!0,muted:!0,className:Mi.video,children:Ee.jsx("source",{src:FA,type:"video/webm"})}),Ee.jsxs("div",{className:Mi.leftContent,children:[Ee.jsx("h1",{className:Mi.leftH1,children:"YOUR IMAGINATION"}),Ee.jsx("h2",{className:Mi.leftH1,style:{color:""},children:"MY INNOVATION"})]}),Ee.jsx("div",{className:Mi.MainContent,children:Ee.jsxs("div",{className:`${Mi.card} card`,children:[Ee.jsx("div",{className:`${Mi.thumb} thumb`}),Ee.jsx("h2",{className:`${Mi.Cardh1} Cardh1`,children:"SATYA"}),Ee.jsx("span",{className:`${Mi.span} span`,children:"CREATIVE THE WAY YOU KNOW!"})]})}),Ee.jsxs("div",{className:Mi.linkTag,children:[Ee.jsx(ow,{color:n>840?"white":"black"}),Ee.jsx(rw,{color:n>840?"white":"black"}),Ee.jsx(sw,{color:n>840?"white":"black"})]})]})};const zA="_container_1pcsv_1",BA="_parent_1pcsv_20",HA="_rectangle_1pcsv_29",VA="_leftContent_1pcsv_42",GA="_rightContent_1pcsv_48",WA="_Parragraph_1pcsv_58",XA="_section_1pcsv_71",jA="_threeContent_1pcsv_75",ri={container:zA,parent:BA,rectangle:HA,leftContent:VA,rightContent:GA,Parragraph:WA,section:XA,threeContent:jA};function h0(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function YA(n,e,t){return e&&h0(n.prototype,e),t&&h0(n,t),n}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hn,qp,hi,cs,fs,Oa,p1,Qs,ql,m1,Nr,ji,_1,g1=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},v1=1,Ta=[],rt=[],pr=[],$l=Date.now,$p=function(e,t){return t},qA=function(){var e=ql.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,pr),rt=i,pr=r,$p=function(o,a){return t[o](a)}},As=function(e,t){return~pr.indexOf(e)&&pr[pr.indexOf(e)+1][t]},Kl=function(e){return!!~m1.indexOf(e)},Dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Ln=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},oc="scrollLeft",ac="scrollTop",Kp=function(){return Nr&&Nr.isPressed||rt.cache++},Vf=function(e,t){var i=function r(s){if(s||s===0){v1&&(hi.history.scrollRestoration="manual");var o=Nr&&Nr.isPressed;s=r.v=Math.round(s)||(Nr&&Nr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&$p("ss",s)}else(t||rt.cache!==r.cacheID||$p("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Bn={s:oc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vf(function(n){return arguments.length?hi.scrollTo(n,Kt.sc()):hi.pageXOffset||cs[oc]||fs[oc]||Oa[oc]||0})},Kt={s:ac,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:Vf(function(n){return arguments.length?hi.scrollTo(Bn.sc(),n):hi.pageYOffset||cs[ac]||fs[ac]||Oa[ac]||0})},Xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ns=function(e,t){var i=t.s,r=t.sc;Kl(e)&&(e=cs.scrollingElement||fs);var s=rt.indexOf(e),o=r===Kt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Dn(e,"scroll",Kp);var a=rt[s+o],l=a||(rt[s+o]=Vf(As(e,i),!0)||(Kl(e)?r:Vf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},Zp=function(e,t,i){var r=e,s=e,o=$l(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=$l();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,d=$l();return(g||g===0)&&g!==r&&c(g),o===a||d-a>u?0:(r+(i?m:-m))/((i?d:o)-_)*1e3};return{update:c,reset:h,getVelocity:f}},yl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},p0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},x1=function(){ql=hn.core.globals().ScrollTrigger,ql&&ql.core&&qA()},y1=function(e){return hn=e||g1(),hn&&typeof document<"u"&&document.body&&(hi=window,cs=document,fs=cs.documentElement,Oa=cs.body,m1=[hi,cs,fs,Oa],hn.utils.clamp,_1=hn.core.context||function(){},Qs="onpointerenter"in Oa?"pointer":"mouse",p1=jt.isTouch=hi.matchMedia&&hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ji=jt.eventTypes=("ontouchstart"in fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return v1=0},500),x1(),qp=1),qp};Bn.op=Kt;rt.cache=0;var jt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){qp||y1(hn)||console.warn("Please gsap.registerPlugin(Observer)"),ql||x1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,d=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,E=i.onRight,w=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,T=i.onChangeY,j=i.onChange,z=i.onToggleX,I=i.onToggleY,F=i.onHover,k=i.onHoverEnd,J=i.onMove,O=i.ignoreCheck,U=i.isNormalizer,W=i.onGestureStart,C=i.onGestureEnd,N=i.onWheel,H=i.onEnable,ue=i.onDisable,re=i.onClick,fe=i.scrollSpeed,ve=i.capture,ye=i.allowClicks,Te=i.lockAxis,Be=i.onLockAxis;this.target=a=Xn(a)||fs,this.vars=i,p&&(p=hn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,fe=fe||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(hi.getComputedStyle(Oa).lineHeight)||22);var gt,Ne,V,Fe,xe,De,Le,q=this,ke=0,ze=0,qe=Ns(a,Bn),Ke=Ns(a,Kt),vt=qe(),b=Ke(),A=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ji[0]==="pointerdown",X=Kl(a),te=a.ownerDocument||cs,ne=[0,0,0],se=[0,0,0],Ce=0,oe=function(){return Ce=$l()},Z=function(ge,We){return(q.event=ge)&&p&&~p.indexOf(ge.target)||We&&A&&ge.pointerType!=="touch"||O&&O(ge,We)},L=function(){q._vx.reset(),q._vy.reset(),Ne.pause(),h&&h(q)},ee=function(){var ge=q.deltaX=p0(ne),We=q.deltaY=p0(se),Qe=Math.abs(ge)>=r,Se=Math.abs(We)>=r;j&&(Qe||Se)&&j(q,ge,We,ne,se),Qe&&(E&&q.deltaX>0&&E(q),w&&q.deltaX<0&&w(q),S&&S(q),z&&q.deltaX<0!=ke<0&&z(q),ke=q.deltaX,ne[0]=ne[1]=ne[2]=0),Se&&(P&&q.deltaY>0&&P(q),M&&q.deltaY<0&&M(q),T&&T(q),I&&q.deltaY<0!=ze<0&&I(q),ze=q.deltaY,se[0]=se[1]=se[2]=0),(Fe||V)&&(J&&J(q),V&&(v(q),V=!1),Fe=!1),De&&!(De=!1)&&Be&&Be(q),xe&&(N(q),xe=!1),gt=0},pe=function(ge,We,Qe){ne[Qe]+=ge,se[Qe]+=We,q._vx.update(ge),q._vy.update(We),u?gt||(gt=requestAnimationFrame(ee)):ee()},ce=function(ge,We){Te&&!Le&&(q.axis=Le=Math.abs(ge)>Math.abs(We)?"x":"y",De=!0),Le!=="y"&&(ne[2]+=ge,q._vx.update(ge,!0)),Le!=="x"&&(se[2]+=We,q._vy.update(We,!0)),u?gt||(gt=requestAnimationFrame(ee)):ee()},he=function(ge){if(!Z(ge,1)){ge=yl(ge,c);var We=ge.clientX,Qe=ge.clientY,Se=We-q.x,it=Qe-q.y,He=q.isDragging;q.x=We,q.y=Qe,(He||Math.abs(q.startX-We)>=s||Math.abs(q.startY-Qe)>=s)&&(v&&(V=!0),He||(q.isDragging=!0),ce(Se,it),He||m&&m(q))}},Ie=q.onPress=function(Ue){Z(Ue,1)||Ue&&Ue.button||(q.axis=Le=null,Ne.pause(),q.isPressed=!0,Ue=yl(Ue),ke=ze=0,q.startX=q.x=Ue.clientX,q.startY=q.y=Ue.clientY,q._vx.reset(),q._vy.reset(),Dn(U?a:te,ji[1],he,c,!0),q.deltaX=q.deltaY=0,x&&x(q))},Ge=q.onRelease=function(Ue){if(!Z(Ue,1)){Ln(U?a:te,ji[1],he,!0);var ge=!isNaN(q.y-q.startY),We=q.isDragging&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Qe=yl(Ue);!We&&ge&&(q._vx.reset(),q._vy.reset(),c&&ye&&hn.delayedCall(.08,function(){if($l()-Ce>300&&!Ue.defaultPrevented){if(Ue.target.click)Ue.target.click();else if(te.createEvent){var Se=te.createEvent("MouseEvents");Se.initMouseEvent("click",!0,!0,hi,1,Qe.screenX,Qe.screenY,Qe.clientX,Qe.clientY,!1,!1,!1,!1,0,null),Ue.target.dispatchEvent(Se)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,h&&!U&&Ne.restart(!0),d&&We&&d(q),y&&y(q,We)}},D=function(ge){return ge.touches&&ge.touches.length>1&&(q.isGesturing=!0)&&W(ge,q.isDragging)},de=function(){return(q.isGesturing=!1)||C(q)},K=function(ge){if(!Z(ge)){var We=qe(),Qe=Ke();pe((We-vt)*fe,(Qe-b)*fe,1),vt=We,b=Qe,h&&Ne.restart(!0)}},ie=function(ge){if(!Z(ge)){ge=yl(ge,c),N&&(xe=!0);var We=(ge.deltaMode===1?l:ge.deltaMode===2?hi.innerHeight:1)*g;pe(ge.deltaX*We,ge.deltaY*We,0),h&&!U&&Ne.restart(!0)}},ae=function(ge){if(!Z(ge)){var We=ge.clientX,Qe=ge.clientY,Se=We-q.x,it=Qe-q.y;q.x=We,q.y=Qe,Fe=!0,(Se||it)&&ce(Se,it)}},Ve=function(ge){q.event=ge,F(q)},st=function(ge){q.event=ge,k(q)},ot=function(ge){return Z(ge)||yl(ge,c)&&re(q)};Ne=q._dc=hn.delayedCall(f||.25,L).pause(),q.deltaX=q.deltaY=0,q._vx=Zp(0,50,!0),q._vy=Zp(0,50,!0),q.scrollX=qe,q.scrollY=Ke,q.isDragging=q.isGesturing=q.isPressed=!1,_1(this),q.enable=function(Ue){return q.isEnabled||(Dn(X?te:a,"scroll",Kp),o.indexOf("scroll")>=0&&Dn(X?te:a,"scroll",K,c,ve),o.indexOf("wheel")>=0&&Dn(a,"wheel",ie,c,ve),(o.indexOf("touch")>=0&&p1||o.indexOf("pointer")>=0)&&(Dn(a,ji[0],Ie,c,ve),Dn(te,ji[2],Ge),Dn(te,ji[3],Ge),ye&&Dn(a,"click",oe,!1,!0),re&&Dn(a,"click",ot),W&&Dn(te,"gesturestart",D),C&&Dn(te,"gestureend",de),F&&Dn(a,Qs+"enter",Ve),k&&Dn(a,Qs+"leave",st),J&&Dn(a,Qs+"move",ae)),q.isEnabled=!0,Ue&&Ue.type&&Ie(Ue),H&&H(q)),q},q.disable=function(){q.isEnabled&&(Ta.filter(function(Ue){return Ue!==q&&Kl(Ue.target)}).length||Ln(X?te:a,"scroll",Kp),q.isPressed&&(q._vx.reset(),q._vy.reset(),Ln(U?a:te,ji[1],he,!0)),Ln(X?te:a,"scroll",K,ve),Ln(a,"wheel",ie,ve),Ln(a,ji[0],Ie,ve),Ln(te,ji[2],Ge),Ln(te,ji[3],Ge),Ln(a,"click",oe,!0),Ln(a,"click",ot),Ln(te,"gesturestart",D),Ln(te,"gestureend",de),Ln(a,Qs+"enter",Ve),Ln(a,Qs+"leave",st),Ln(a,Qs+"move",ae),q.isEnabled=q.isPressed=q.isDragging=!1,ue&&ue(q))},q.kill=q.revert=function(){q.disable();var Ue=Ta.indexOf(q);Ue>=0&&Ta.splice(Ue,1),Nr===q&&(Nr=0)},Ta.push(q),U&&Kl(a)&&(Nr=q),q.enable(_)},YA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();jt.version="3.12.2";jt.create=function(n){return new jt(n)};jt.register=y1;jt.getAll=function(){return Ta.slice()};jt.getById=function(n){return Ta.filter(function(e){return e.vars.id===n})[0]};g1()&&hn.registerPlugin(jt);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,oa,lt,Pt,Ki,Tt,S1,Gf,Wf,wa,tf,lc,yn,pd,Qp,On,m0,_0,aa,M1,ih,E1,ai,T1,w1,A1,Jr,Jp,T_,Fa,w_,rh,uc=1,kn=Date.now,sh=kn(),Fi=0,Dl=0,g0=function(e,t,i){var r=ci(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},v0=function(e,t){return t&&(!ci(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$A=function n(){return Dl&&requestAnimationFrame(n)},x0=function(){return pd=1},y0=function(){return pd=0},or=function(e){return e},Ul=function(e){return Math.round(e*1e5)/1e5||0},C1=function(){return typeof window<"u"},R1=function(){return Ae||C1()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Ro=function(e){return!!~S1.indexOf(e)},b1=function(e){return(e==="Height"?w_:lt["inner"+e])||Ki["client"+e]||Tt["client"+e]},P1=function(e){return As(e,"getBoundingClientRect")||(Ro(e)?function(){return lf.width=lt.innerWidth,lf.height=w_,lf}:function(){return Pr(e)})},KA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=As(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?b1(s):e["client"+s])||0}},ZA=function(e,t){return!t||~pr.indexOf(e)?P1(e):function(){return lf}},Ir=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=As(e,i))?o()-P1(e)()[s]:Ro(e)?(Ki[i]||Tt[i])-b1(r):e[i]-e["offset"+r])},cc=function(e,t){for(var i=0;i<aa.length;i+=3)(!t||~t.indexOf(aa[i+1]))&&e(aa[i],aa[i+1],aa[i+2])},ci=function(e){return typeof e=="string"},Hn=function(e){return typeof e=="function"},nf=function(e){return typeof e=="number"},Js=function(e){return typeof e=="object"},Sl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},oh=function(e,t){if(e.enabled){var i=t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Bo=Math.abs,L1="left",D1="top",A_="right",C_="bottom",po="width",mo="height",Zl="Right",Ql="Left",Jl="Top",eu="Bottom",Gt="padding",Ri="margin",Ja="Width",R_="Height",cn="px",bi=function(e){return lt.getComputedStyle(e)},QA=function(e){var t=bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},S0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Pr=function(e,t){var i=t&&bi(e)[Qp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},em=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},U1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},JA=function(e){return function(t){return Ae.utils.snap(U1(e),t)}},b_=function(e){var t=Ae.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},eC=function(e){return function(t,i){return b_(U1(e))(t,i.direction)}},fc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},rn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},nn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},dc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},M0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},hc={toggleActions:"play",anticipatePin:0},Xf={top:0,left:0,center:.5,bottom:1,right:1},rf=function(e,t){if(ci(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Xf?Xf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,g=Pt.createElement("div"),_=Ro(i)||As(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,d=_?Tt:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===Kt?A_:C_)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(g,d.children[0]):d.appendChild(g),g._offset=g["offset"+r.op.d2],sf(g,0,r,v),g},sf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ja]=1,s["border"+a+Ja]=0,s[i.p]=t+"px",Ae.set(e,s)},et=[],tm={},bu,E0=function(){return kn()-Fi>34&&(bu||(bu=requestAnimationFrame(zr)))},Ho=function(){(!ai||!ai.isPressed||ai.startX>Tt.clientWidth)&&(rt.cache++,ai?bu||(bu=requestAnimationFrame(zr)):zr(),Fi||Po("scrollStart"),Fi=kn())},ah=function(){A1=lt.innerWidth,w1=lt.innerHeight},Nl=function(){rt.cache++,!yn&&!E1&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!T1||A1!==lt.innerWidth||Math.abs(lt.innerHeight-w1)>lt.innerHeight*.25)&&Gf.restart(!0)},bo={},tC=[],N1=function n(){return nn(nt,"scrollEnd",n)||oo(!0)},Po=function(e){return bo[e]&&bo[e].map(function(t){return t()})||tC},li=[],I1=function(e){for(var t=0;t<li.length;t+=5)(!e||li[t+4]&&li[t+4].query===e)&&(li[t].style.cssText=li[t+1],li[t].getBBox&&li[t].setAttribute("transform",li[t+2]||""),li[t+3].uncache=1)},P_=function(e,t){var i;for(On=0;On<et.length;On++)i=et[On],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));t&&I1(t),t||Po("revert")},O1=function(e,t){rt.cache++,(t||!Fn)&&rt.forEach(function(i){return Hn(i)&&i.cacheID++&&(i.rec=0)}),ci(e)&&(lt.history.scrollRestoration=T_=e)},Fn,_o=0,T0,nC=function(){if(T0!==_o){var e=T0=_o;requestAnimationFrame(function(){return e===_o&&oo(!0)})}},F1=function(){Tt.appendChild(Fa),w_=Fa.offsetHeight||lt.innerHeight,Tt.removeChild(Fa)},oo=function(e,t){if(Fi&&!e){rn(nt,"scrollEnd",N1);return}F1(),Fn=nt.isRefreshing=!0,rt.forEach(function(r){return Hn(r)&&++r.cacheID&&(r.rec=r())});var i=Po("refreshInit");M1&&nt.sort(),t||P_(),rt.forEach(function(r){Hn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),et.forEach(function(r,s){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-a),r.refresh()}}),et.forEach(function(r){var s=Ir(r.scroller,r._dir);(r.vars.end==="max"||r._endClamp&&r.end>s)&&r.setPositions(r.start,Math.max(r.start+1,s),!0)}),i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Hn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),O1(T_,1),Gf.pause(),_o++,Fn=2,zr(2),et.forEach(function(r){return Hn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Fn=nt.isRefreshing=!1,Po("refresh")},nm=0,of=1,tu,zr=function(e){if(!Fn||e===2){nt.isUpdating=!0,tu&&tu.update(0);var t=et.length,i=kn(),r=i-sh>=50,s=t&&et[0].scroll();if(of=nm>s?-1:1,Fn||(nm=s),r&&(Fi&&!pd&&i-Fi>200&&(Fi=0,Po("scrollEnd")),tf=sh,sh=i),of<0){for(On=t;On-- >0;)et[On]&&et[On].update(0,r);of=1}else for(On=0;On<t;On++)et[On]&&et[On].update(0,r);nt.isUpdating=!1}bu=0},im=[L1,D1,C_,A_,Ri+eu,Ri+Zl,Ri+Jl,Ri+Ql,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],af=im.concat([po,mo,"boxSizing","max"+Ja,"max"+R_,"position",Ri,Gt,Gt+Jl,Gt+Zl,Gt+eu,Gt+Ql]),iC=function(e,t,i){ka(i);var r=e._gsap;if(r.spacerIsNative)ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},lh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=im.length,o=t.style,a=e.style,l;s--;)l=im[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[C_]=a[A_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[po]=em(e,Bn)+cn,o[mo]=em(e,Kt)+cn,o[Gt]=a[Ri]=a[D1]=a[L1]="0",ka(r),a[po]=a["max"+Ja]=i[po],a[mo]=a["max"+R_]=i[mo],a[Gt]=i[Gt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},rC=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(rC,"-$1").toLowerCase())}},mc=function(e){for(var t=af.length,i=e.style,r=[],s=0;s<t;s++)r.push(af[s],i[af[s]]);return r.t=e,r},sC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},lf={left:0,top:0},w0=function(e,t,i,r,s,o,a,l,u,c,h,f,p,g){Hn(e)&&(e=e(l)),ci(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?rf("0"+e.substr(3),i):0));var _=p?p.time():0,m,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),nf(e))p&&(e=Ae.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&sf(a,i,r,!0);else{Hn(t)&&(t=t(l));var x=(e||"0").split(" "),y,E,w,M;v=Xn(t,l)||Tt,y=Pr(v)||{},(!y||!y.left&&!y.top)&&bi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Pr(v),M?v.style.display=M:v.style.removeProperty("display")),E=rf(x[0],y[r.d]),w=rf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+E+s-w,a&&sf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,sf(o,P,r,S&&P>20||!S&&(h?Math.max(Tt[m],Ki[m]):o.parentNode[m])<=P+1),h&&(u=Pr(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+cn))}return p&&v&&(m=Pr(v),p.seek(f),d=Pr(v),p._caScrollDist=m[r.p]-d[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},oC=/(webkit|moz|length|cssText|inset)/i,A0=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=bi(e);for(o in a)!+o&&!oC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},k1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},_c=function(e,t,i){var r={};r[t.p]="+="+i,Ae.set(e,r)},C0=function(e,t){var i=Ns(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var f=o.tween,p=l.onComplete,g={};u=u||i();var _=k1(i,u,function(){f.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,f&&f.kill(),l[r]=a,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,zr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Ae.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(e,"wheel",i.wheelHandler),nt.isTouch&&rn(e,"touchmove",i.wheelHandler),s},nt=function(){function n(t,i){oa||n.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jp(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Dl){this.update=this.refresh=this.kill=or;return}i=S0(ci(i)||nf(i)||i.nodeType?{trigger:i}:i,hc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,E=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,T=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Bn:Kt,j=!h&&h!==0,z=Xn(i.scroller||lt),I=Ae.core.getCache(z),F=Ro(z),k=("pinType"in i?i.pinType:As(z,"pinType")||F&&"fixed")==="fixed",J=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=j&&i.toggleActions.split(" "),U="markers"in i?i.markers:hc.markers,W=F?0:parseFloat(bi(z)["border"+T.p2+Ja])||0,C=this,N=i.onRefreshInit&&function(){return i.onRefreshInit(C)},H=KA(z,F,T),ue=ZA(z,F),re=0,fe=0,ve=0,ye=Ns(z,T),Te,Be,gt,Ne,V,Fe,xe,De,Le,q,ke,ze,qe,Ke,vt,b,A,X,te,ne,se,Ce,oe,Z,L,ee,pe,ce,he,Ie,Ge,D,de,K,ie,ae,Ve,st,ot;if(C._startClamp=C._endClamp=!1,C._dir=T,m*=45,C.scroller=z,C.scroll=M?M.time.bind(M):ye,Ne=ye(),C.vars=i,r=r||i.animation,"refreshPriority"in i&&(M1=1,i.refreshPriority===-9999&&(tu=C)),I.tweenScroll=I.tweenScroll||{top:C0(z,Kt),left:C0(z,Bn)},C.tweenTo=Te=I.tweenScroll[T.p],C.scrubDuration=function(Se){de=nf(Se)&&Se,de?D?D.duration(Se):D=Ae.to(r,{ease:"expo",totalProgress:"+=0",duration:de,paused:!0,onComplete:function(){return d&&d(C)}}):(D&&D.progress(1).kill(),D=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(h),Ie=0,l||(l=r.vars.id)),y&&((!Js(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Tt.style&&Ae.set(F?[Tt,Ki]:z,{scrollBehavior:"auto"}),rt.forEach(function(Se){return Hn(Se)&&Se.target===(F?Pt.scrollingElement||Ki:z)&&(Se.smooth=!1)}),gt=Hn(y.snapTo)?y.snapTo:y.snapTo==="labels"?JA(r):y.snapTo==="labelsDirectional"?eC(r):y.directional!==!1?function(Se,it){return b_(y.snapTo)(Se,kn()-fe<500?0:it.direction)}:Ae.utils.snap(y.snapTo),K=y.duration||{min:.1,max:2},K=Js(K)?wa(K.min,K.max):wa(K,K),ie=Ae.delayedCall(y.delay||de/2||.1,function(){var Se=ye(),it=kn()-fe<500,He=Te.tween;if((it||Math.abs(C.getVelocity())<10)&&!He&&!pd&&re!==Se){var Xe=(Se-Fe)/Ke,zt=r&&!j?r.totalProgress():Xe,Je=it?0:(zt-Ge)/(kn()-tf)*1e3||0,At=Ae.utils.clamp(-Xe,1-Xe,Bo(Je/2)*Je/.185),un=Xe+(y.inertia===!1?0:At),Yt=wa(0,1,gt(un,C)),St=Math.round(Fe+Yt*Ke),R=y,B=R.onStart,$=R.onInterrupt,G=R.onComplete;if(Se<=xe&&Se>=Fe&&St!==Se){if(He&&!He._initted&&He.data<=Bo(St-Se))return;y.inertia===!1&&(At=Yt-Xe),Te(St,{duration:K(Bo(Math.max(Bo(un-zt),Bo(Yt-zt))*.185/Je/.05||0)),ease:y.ease||"power3",data:Bo(St-Se),onInterrupt:function(){return ie.restart(!0)&&$&&$(C)},onComplete:function(){C.update(),re=ye(),Ie=Ge=r&&!j?r.totalProgress():C.progress,v&&v(C),G&&G(C)}},Se,At*Ke,St-Se-At*Ke),B&&B(C,Te.tween)}}else C.isActive&&re!==Se&&ie.restart(!0)}).pause()),l&&(tm[l]=C),f=C.trigger=Xn(f||p!==!0&&p),ot=f&&f._gsap&&f._gsap.stRevert,ot&&(ot=ot(C)),p=p===!0?f:Xn(p),ci(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Ri||(g=!g&&p.parentNode&&p.parentNode.style&&bi(p.parentNode).display==="flex"?!1:Gt),C.pin=p,Be=Ae.core.getCache(p),Be.spacer?vt=Be.pinState:(w&&(w=Xn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Be.spacerIsNative=!!w,w&&(Be.spacerState=mc(w))),Be.spacer=X=w||Pt.createElement("div"),X.classList.add("pin-spacer"),l&&X.classList.add("pin-spacer-"+l),Be.pinState=vt=mc(p)),i.force3D!==!1&&Ae.set(p,{force3D:!0}),C.spacer=X=Be.spacer,he=bi(p),Z=he[g+T.os2],ne=Ae.getProperty(p),se=Ae.quickSetter(p,T.a,cn),lh(p,X,he),A=mc(p)),U){ze=Js(U)?S0(U,M0):M0,q=pc("scroller-start",l,z,T,ze,0),ke=pc("scroller-end",l,z,T,ze,0,q),te=q["offset"+T.op.d2];var Ue=Xn(As(z,"content")||z);De=this.markerStart=pc("start",l,Ue,T,ze,te,0,M),Le=this.markerEnd=pc("end",l,Ue,T,ze,te,0,M),M&&(st=Ae.quickSetter([De,Le],T.a,cn)),!k&&!(pr.length&&As(z,"fixedMarkers")===!0)&&(QA(F?Tt:z),Ae.set([q,ke],{force3D:!0}),ee=Ae.quickSetter(q,T.a,cn),ce=Ae.quickSetter(ke,T.a,cn))}if(M){var ge=M.vars.onUpdate,We=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){C.update(0,0,1),ge&&ge.apply(M,We||[])})}if(C.previous=function(){return et[et.indexOf(C)-1]},C.next=function(){return et[et.indexOf(C)+1]},C.revert=function(Se,it){if(!it)return C.kill(!0);var He=Se!==!1||!C.enabled,Xe=yn;He!==C.isReverted&&(He&&(ae=Math.max(ye(),C.scroll.rec||0),ve=C.progress,Ve=r&&r.progress()),De&&[De,Le,q,ke].forEach(function(zt){return zt.style.display=He?"none":"block"}),He&&(yn=C,C.update(He)),p&&(!E||!C.isActive)&&(He?iC(p,X,vt):lh(p,X,bi(p),L)),He||C.update(He),yn=Xe,C.isReverted=He)},C.refresh=function(Se,it,He,Xe){if(!((yn||!C.enabled)&&!it)){if(p&&Se&&Fi){rn(n,"scrollEnd",N1);return}!Fn&&N&&N(C),yn=C,Te.tween&&!He&&(Te.tween.kill(),Te.tween=0),D&&D.pause(),_&&r&&r.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var zt=H(),Je=ue(),At=M?M.duration():Ir(z,T),un=Ke<=.01,Yt=0,St=Xe||0,R=Js(He)?He.end:i.end,B=i.endTrigger||f,$=Js(He)?He.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),G=C.pinnedContainer=i.pinnedContainer&&Xn(i.pinnedContainer,C),Q=f&&Math.max(0,et.indexOf(C))||0,me=Q,Me,be,Oe,je,Re,Pe,ct,Mt,Rn,bn,dt,Ye,Yr;for(U&&Js(He)&&(Ye=Ae.getProperty(q,T.p),Yr=Ae.getProperty(ke,T.p));me--;)Pe=et[me],Pe.end||Pe.refresh(0,1)||(yn=C),ct=Pe.pin,ct&&(ct===f||ct===p||ct===G)&&!Pe.isReverted&&(bn||(bn=[]),bn.unshift(Pe),Pe.revert(!0,!0)),Pe!==et[me]&&(Q--,me--);for(Hn($)&&($=$(C)),$=g0($,"start",C),Fe=w0($,f,zt,T,ye(),De,q,C,Je,W,k,At,M,C._startClamp&&"_startClamp")||(p?-.001:0),Hn(R)&&(R=R(C)),ci(R)&&!R.indexOf("+=")&&(~R.indexOf(" ")?R=(ci($)?$.split(" ")[0]:"")+R:(Yt=rf(R.substr(2),zt),R=ci($)?$:(M?Ae.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Fe):Fe)+Yt,B=f)),R=g0(R,"end",C),xe=Math.max(Fe,w0(R||(B?"100% 0":At),B,zt,T,ye()+Yt,Le,ke,C,Je,W,k,At,M,C._endClamp&&"_endClamp"))||-.001,Yt=0,me=Q;me--;)Pe=et[me],ct=Pe.pin,ct&&Pe.start-Pe._pinPush<=Fe&&!M&&Pe.end>0&&(Me=Pe.end-(C._startClamp?Math.max(0,Pe.start):Pe.start),(ct===f&&Pe.start-Pe._pinPush<Fe||ct===G)&&isNaN($)&&(Yt+=Me*(1-Pe.progress)),ct===p&&(St+=Me));if(Fe+=Yt,xe+=Yt,C._startClamp&&(C._startClamp+=Yt),C._endClamp&&!Fn&&(C._endClamp=xe||-.001,xe=Math.min(xe,Ir(z,T))),Ke=xe-Fe||(Fe-=.01)&&.001,un&&(ve=Ae.utils.clamp(0,1,Ae.utils.normalize(Fe,xe,ae))),C._pinPush=St,De&&Yt&&(Me={},Me[T.a]="+="+Yt,G&&(Me[T.p]="-="+ye()),Ae.set([De,Le],Me)),p)Me=bi(p),je=T===Kt,Oe=ye(),Ce=parseFloat(ne(T.a))+St,!At&&xe>1&&(dt=(F?Pt.scrollingElement||Ki:z).style,dt={style:dt,value:dt["overflow"+T.a.toUpperCase()]},F&&bi(Tt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(dt.style["overflow"+T.a.toUpperCase()]="scroll")),lh(p,X,Me),A=mc(p),be=Pr(p,!0),Mt=k&&Ns(z,je?Bn:Kt)(),g&&(L=[g+T.os2,Ke+St+cn],L.t=X,me=g===Gt?em(p,T)+Ke+St:0,me&&L.push(T.d,me+cn),ka(L),G&&et.forEach(function(xt){xt.pin===G&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),k&&ye(ae)),k&&(Re={top:be.top+(je?Oe-Fe:Mt)+cn,left:be.left+(je?Mt:Oe-Fe)+cn,boxSizing:"border-box",position:"fixed"},Re[po]=Re["max"+Ja]=Math.ceil(be.width)+cn,Re[mo]=Re["max"+R_]=Math.ceil(be.height)+cn,Re[Ri]=Re[Ri+Jl]=Re[Ri+Zl]=Re[Ri+eu]=Re[Ri+Ql]="0",Re[Gt]=Me[Gt],Re[Gt+Jl]=Me[Gt+Jl],Re[Gt+Zl]=Me[Gt+Zl],Re[Gt+eu]=Me[Gt+eu],Re[Gt+Ql]=Me[Gt+Ql],b=sC(vt,Re,E),Fn&&ye(0)),r?(Rn=r._initted,ih(1),r.render(r.duration(),!0,!0),oe=ne(T.a)-Ce+Ke+St,pe=Math.abs(Ke-oe)>1,k&&pe&&b.splice(b.length-2,2),r.render(0,!0,!0),Rn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ih(0)):oe=Ke,dt&&(dt.value?dt.style["overflow"+T.a.toUpperCase()]=dt.value:dt.style.removeProperty("overflow-"+T.a));else if(f&&ye()&&!M)for(be=f.parentNode;be&&be!==Tt;)be._pinOffset&&(Fe-=be._pinOffset,xe-=be._pinOffset),be=be.parentNode;bn&&bn.forEach(function(xt){return xt.revert(!1,!0)}),C.start=Fe,C.end=xe,Ne=V=Fn?ae:ye(),!M&&!Fn&&(Ne<ae&&ye(ae),C.scroll.rec=0),C.revert(!1,!0),fe=kn(),ie&&(re=-1,ie.restart(!0)),yn=0,r&&j&&(r._initted||Ve)&&r.progress()!==Ve&&r.progress(Ve||0,!0).render(r.time(),!0,!0),(un||ve!==C.progress||M)&&(r&&!j&&r.totalProgress(M&&Fe<-.001&&!ve?Ae.utils.normalize(Fe,xe,0):ve,!0),C.progress=un||(Ne-Fe)/Ke===ve?0:ve),p&&g&&(X._pinOffset=Math.round(C.progress*oe)),D&&D.invalidate(),isNaN(Ye)||(Ye-=Ae.getProperty(q,T.p),Yr-=Ae.getProperty(ke,T.p),_c(q,T,Ye),_c(De,T,Ye-(Xe||0)),_c(ke,T,Yr),_c(Le,T,Yr-(Xe||0))),un&&!Fn&&C.update(),c&&!Fn&&!qe&&(qe=!0,c(C),qe=!1)}},C.getVelocity=function(){return(ye()-V)/(kn()-tf)*1e3||0},C.endAnimation=function(){Sl(C.callbackAnimation),r&&(D?D.progress(1):r.paused()?j||Sl(r,C.direction<0,1):Sl(r,r.reversed()))},C.labelToScroll=function(Se){return r&&r.labels&&(Fe||C.refresh()||Fe)+r.labels[Se]/r.duration()*Ke||0},C.getTrailing=function(Se){var it=et.indexOf(C),He=C.direction>0?et.slice(0,it).reverse():et.slice(it+1);return(ci(Se)?He.filter(function(Xe){return Xe.vars.preventOverlaps===Se}):He).filter(function(Xe){return C.direction>0?Xe.end<=Fe:Xe.start>=xe})},C.update=function(Se,it,He){if(!(M&&!He&&!Se)){var Xe=Fn===!0?ae:C.scroll(),zt=Se?0:(Xe-Fe)/Ke,Je=zt<0?0:zt>1?1:zt||0,At=C.progress,un,Yt,St,R,B,$,G,Q;if(it&&(V=Ne,Ne=M?ye():Xe,y&&(Ge=Ie,Ie=r&&!j?r.totalProgress():Je)),m&&!Je&&p&&!yn&&!uc&&Fi&&Fe<Xe+(Xe-V)/(kn()-tf)*m&&(Je=1e-4),Je!==At&&C.enabled){if(un=C.isActive=!!Je&&Je<1,Yt=!!At&&At<1,$=un!==Yt,B=$||!!Je!=!!At,C.direction=Je>At?1:-1,C.progress=Je,B&&!yn&&(St=Je&&!At?0:Je===1?1:At===1?2:3,j&&(R=!$&&O[St+1]!=="none"&&O[St+1]||O[St],Q=r&&(R==="complete"||R==="reset"||R in r))),S&&($||Q)&&(Q||h||!r)&&(Hn(S)?S(C):C.getTrailing(S).forEach(function(Oe){return Oe.endAnimation()})),j||(D&&!yn&&!uc?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",Je,r._tTime/r._tDur):(D.vars.totalProgress=Je,D.invalidate().restart())):r&&r.totalProgress(Je,!!(yn&&(fe||Se)))),p){if(Se&&g&&(X.style[g+T.os2]=Z),!k)se(Ul(Ce+oe*Je));else if(B){if(G=!Se&&Je>At&&xe+1>Xe&&Xe+1>=Ir(z,T),E)if(!Se&&(un||G)){var me=Pr(p,!0),Me=Xe-Fe;A0(p,Tt,me.top+(T===Kt?Me:0)+cn,me.left+(T===Kt?0:Me)+cn)}else A0(p,X);ka(un||G?b:A),pe&&Je<1&&un||se(Ce+(Je===1&&!G?oe:0))}}y&&!Te.tween&&!yn&&!uc&&ie.restart(!0),a&&($||x&&Je&&(Je<1||!rh))&&Wf(a.targets).forEach(function(Oe){return Oe.classList[un||x?"add":"remove"](a.className)}),o&&!j&&!Se&&o(C),B&&!yn?(j&&(Q&&(R==="complete"?r.pause().totalProgress(1):R==="reset"?r.restart(!0).pause():R==="restart"?r.restart(!0):r[R]()),o&&o(C)),($||!rh)&&(u&&$&&oh(C,u),J[St]&&oh(C,J[St]),x&&(Je===1?C.kill(!1,1):J[St]=0),$||(St=Je===1?1:3,J[St]&&oh(C,J[St]))),P&&!un&&Math.abs(C.getVelocity())>(nf(P)?P:2500)&&(Sl(C.callbackAnimation),D?D.progress(1):Sl(r,R==="reverse"?1:!Je,1))):j&&o&&!yn&&o(C)}if(ce){var be=M?Xe/M.duration()*(M._caScrollDist||0):Xe;ee(be+(q._isFlipped?1:0)),ce(be)}st&&st(-Xe/M.duration()*(M._caScrollDist||0))}},C.enable=function(Se,it){C.enabled||(C.enabled=!0,rn(z,"resize",Nl),F||rn(z,"scroll",Ho),N&&rn(n,"refreshInit",N),Se!==!1&&(C.progress=ve=0,Ne=V=re=ye()),it!==!1&&C.refresh())},C.getTween=function(Se){return Se&&Te?Te.tween:D},C.setPositions=function(Se,it,He,Xe){if(M){var zt=M.scrollTrigger,Je=M.duration(),At=zt.end-zt.start;Se=zt.start+At*Se/Je,it=zt.start+At*it/Je}C.refresh(!1,!1,{start:v0(Se,He&&!!C._startClamp),end:v0(it,He&&!!C._endClamp)},Xe),C.update()},C.adjustPinSpacing=function(Se){if(L&&Se){var it=L.indexOf(T.d)+1;L[it]=parseFloat(L[it])+Se+cn,L[1]=parseFloat(L[1])+Se+cn,ka(L)}},C.disable=function(Se,it){if(C.enabled&&(Se!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,it||D&&D.pause(),ae=0,Be&&(Be.uncache=1),N&&nn(n,"refreshInit",N),ie&&(ie.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!F)){for(var He=et.length;He--;)if(et[He].scroller===z&&et[He]!==C)return;nn(z,"resize",Nl),F||nn(z,"scroll",Ho)}},C.kill=function(Se,it){C.disable(Se,it),D&&!it&&D.kill(),l&&delete tm[l];var He=et.indexOf(C);He>=0&&et.splice(He,1),He===On&&of>0&&On--,He=0,et.forEach(function(Xe){return Xe.scroller===C.scroller&&(He=1)}),He||Fn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,Se&&r.revert({kill:!1}),it||r.kill()),De&&[De,Le,q,ke].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),tu===C&&(tu=0),p&&(Be&&(Be.uncache=1),He=0,et.forEach(function(Xe){return Xe.pin===p&&He++}),He||(Be.spacer=0)),i.onKill&&i.onKill(C)},et.push(C),C.enable(!1,!1),ot&&ot(C),r&&r.add&&!Ke){var Qe=C.update;C.update=function(){C.update=Qe,Fe||xe||C.refresh()},Ae.delayedCall(.01,C.update),Ke=.01,Fe=xe=0}else C.refresh();p&&nC()},n.register=function(i){return oa||(Ae=i||R1(),C1()&&window.document&&n.enable(),oa=Dl),oa},n.defaults=function(i){if(i)for(var r in i)hc[r]=i[r];return hc},n.disable=function(i,r){Dl=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),nn(lt,"wheel",Ho),nn(Pt,"scroll",Ho),clearInterval(lc),nn(Pt,"touchcancel",or),nn(Tt,"touchstart",or),fc(nn,Pt,"pointerdown,touchstart,mousedown",x0),fc(nn,Pt,"pointerup,touchend,mouseup",y0),Gf.kill(),cc(nn);for(var s=0;s<rt.length;s+=3)dc(nn,rt[s],rt[s+1]),dc(nn,rt[s],rt[s+2])},n.enable=function(){if(lt=window,Pt=document,Ki=Pt.documentElement,Tt=Pt.body,Ae&&(Wf=Ae.utils.toArray,wa=Ae.utils.clamp,Jp=Ae.core.context||or,ih=Ae.core.suppressOverwrites||or,T_=lt.history.scrollRestoration||"auto",nm=lt.pageYOffset,Ae.core.globals("ScrollTrigger",n),Tt)){Dl=1,Fa=document.createElement("div"),Fa.style.height="100vh",Fa.style.position="absolute",F1(),$A(),jt.register(Ae),n.isTouch=jt.isTouch,Jr=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),rn(lt,"wheel",Ho),S1=[lt,Pt,Ki,Tt],Ae.matchMedia?(n.matchMedia=function(l){var u=Ae.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Ae.addEventListener("matchMediaInit",function(){return P_()}),Ae.addEventListener("matchMediaRevert",function(){return I1()}),Ae.addEventListener("matchMedia",function(){oo(0,1),Po("matchMedia")}),Ae.matchMedia("(orientation: portrait)",function(){return ah(),ah})):console.warn("Requires GSAP 3.11.0 or later"),ah(),rn(Pt,"scroll",Ho);var i=Tt.style,r=i.borderTopStyle,s=Ae.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Pr(Tt),Kt.m=Math.round(o.top+Kt.sc())||0,Bn.m=Math.round(o.left+Bn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),lc=setInterval(E0,250),Ae.delayedCall(.5,function(){return uc=0}),rn(Pt,"touchcancel",or),rn(Tt,"touchstart",or),fc(rn,Pt,"pointerdown,touchstart,mousedown",x0),fc(rn,Pt,"pointerup,touchend,mouseup",y0),Qp=Ae.utils.checkPrefix("transform"),af.push(Qp),oa=kn(),Gf=Ae.delayedCall(.2,oo).pause(),aa=[Pt,"visibilitychange",function(){var l=lt.innerWidth,u=lt.innerHeight;Pt.hidden?(m0=l,_0=u):(m0!==l||_0!==u)&&Nl()},Pt,"DOMContentLoaded",oo,lt,"load",oo,lt,"resize",Nl],cc(rn),et.forEach(function(l){return l.enable(0,1)}),a=0;a<rt.length;a+=3)dc(nn,rt[a],rt[a+1]),dc(nn,rt[a],rt[a+2])}},n.config=function(i){"limitCallbacks"in i&&(rh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(lc)||(lc=r)&&setInterval(E0,r),"ignoreMobileResize"in i&&(T1=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(cc(nn)||cc(rn,i.autoRefreshEvents||"none"),E1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Xn(i),o=rt.indexOf(s),a=Ro(s);~o&&rt.splice(o,a?6:2),r&&(a?pr.unshift(lt,r,Tt,r,Ki,r):pr.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(ci(i)?Xn(i):i).getBoundingClientRect(),a=o[s?po:mo]*r||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},n.positionInViewport=function(i,r,s){ci(i)&&(i=Xn(i));var o=i.getBoundingClientRect(),a=o[s?po:mo],l=r==null?a/2:r in Xf?Xf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=bo.killAll||[];bo={},r.forEach(function(s){return s()})}},n}();nt.version="3.12.2";nt.saveStyles=function(n){return n?Wf(n).forEach(function(e){if(e&&e.style){var t=li.indexOf(e);t>=0&&li.splice(t,5),li.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Jp())}}):li};nt.revert=function(n,e){return P_(!n,e)};nt.create=function(n,e){return new nt(n,e)};nt.refresh=function(n){return n?Nl():(oa||nt.register())&&oo(!0)};nt.update=function(n){return++rt.cache&&zr(n===!0?2:0)};nt.clearScrollMemory=O1;nt.maxScroll=function(n,e){return Ir(n,e?Bn:Kt)};nt.getScrollFunc=function(n,e){return Ns(Xn(n),e?Bn:Kt)};nt.getById=function(n){return tm[n]};nt.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Fi};nt.snapDirectional=b_;nt.addEventListener=function(n,e){var t=bo[n]||(bo[n]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(n,e){var t=bo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};nt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],p=Ae.delayedCall(r,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Hn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Hn(s)&&(s=s(),rn(nt,"refresh",function(){return s=e.batchMax()})),Wf(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(nt.create(u))}),t};var R0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},uh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===Ki&&n(Tt,t)},gc={auto:1,scroll:1},aC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=kn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(gc[(l=bi(s)).overflowY]||gc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ro(s)&&(gc[(l=bi(s)).overflowY]||gc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},z1=function(e,t,i,r){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&aC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&rn(Pt,jt.eventTypes[0],P0,!1,!0)},onDisable:function(){return nn(Pt,jt.eventTypes[0],P0,!0)}})},lC=/(input|label|select|textarea)/i,b0,P0=function(e){var t=lC.test(e.target.tagName);(t||b0)&&(e._gsapAllow=!0,b0=t)},uC=function(e){Js(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Xn(e.target)||Ki,c=Ae.core.globals().ScrollSmoother,h=c&&c.get(),f=Jr&&(e.content&&Xn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=Ns(u,Kt),g=Ns(u,Bn),_=1,m=(jt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,d=0,v=Hn(r)?function(){return r(a)}:function(){return r||2.8},x,y,E=z1(u,e.type,!0,s),w=function(){return y=!1},M=or,P=or,S=function(){l=Ir(u,Kt),P=wa(Jr?1:0,l),i&&(M=wa(0,Ir(u,Bn))),x=_o},T=function(){f._gsap.y=Ul(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},j=function(){if(y){requestAnimationFrame(w);var U=Ul(a.deltaY/2),W=P(p.v-U);if(f&&W!==p.v+p.offset){p.offset=W-p.v;var C=Ul((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",p.cacheID=rt.cache,zr()}return!0}p.offset&&T(),y=!0},z,I,F,k,J=function(){S(),z.isActive()&&z.vars.scrollY>l&&(p()>l?z.progress(1)&&p(l):z.resetTo("scrollY",l))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return Jr&&O.type==="touchmove"&&j()||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=_;_=Ul((lt.visualViewport&&lt.visualViewport.scale||1)/m),z.pause(),O!==_&&uh(u,_>1.01?!0:i?!1:"x"),I=g(),F=p(),S(),x=_o},e.onRelease=e.onGestureStart=function(O,U){if(p.offset&&T(),!U)k.restart(!0);else{rt.cache++;var W=v(),C,N;i&&(C=g(),N=C+W*.05*-O.velocityX/.227,W*=R0(g,C,N,Ir(u,Bn)),z.vars.scrollX=M(N)),C=p(),N=C+W*.05*-O.velocityY/.227,W*=R0(p,C,N,Ir(u,Kt)),z.vars.scrollY=P(N),z.invalidate().duration(W).play(.01),(Jr&&z.vars.scrollY>=l||C>=l-1)&&Ae.to({},{onUpdate:J,duration:W})}o&&o(O)},e.onWheel=function(){z._ts&&z.pause(),kn()-d>1e3&&(x=0,d=kn())},e.onChange=function(O,U,W,C,N){if(_o!==x&&S(),U&&i&&g(M(C[2]===U?I+(O.startX-O.x):g()+U-C[1])),W){p.offset&&T();var H=N[2]===W,ue=H?F+O.startY-O.y:p()+W-N[1],re=P(ue);H&&ue!==re&&(F+=re-ue),p(re)}(W||U)&&zr()},e.onEnable=function(){uh(u,i?!1:"x"),nt.addEventListener("refresh",J),rn(lt,"resize",J),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){uh(u,!0),nn(lt,"resize",J),nt.removeEventListener("refresh",J),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=Jr,Jr&&!p()&&p(1),Jr&&Ae.ticker.add(or),k=a._dc,z=Ae.to(a,{ease:"power4",paused:!0,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:k1(p,p(),function(){return z.pause()})},onUpdate:zr,onComplete:k.vars.onComplete}),a};nt.sort=function(n){return et.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};nt.observe=function(n){return new jt(n)};nt.normalizeScroll=function(n){if(typeof n>"u")return ai;if(n===!0&&ai)return ai.enable();if(n===!1)return ai&&ai.kill();var e=n instanceof jt?n:uC(n);return ai&&ai.target===e.target&&ai.kill(),Ro(e.target)&&(ai=e),e};nt.core={_getVelocityProp:Zp,_inputObserver:z1,_scrollers:rt,_proxies:pr,bridge:{ss:function(){Fi||Po("scrollStart"),Fi=kn()},ref:function(){return yn}}};R1()&&Ae.registerPlugin(nt);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const L_="156",Vo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cC=0,L0=1,fC=2,B1=1,dC=2,wr=3,Is=0,ti=1,Lr=2,Cs=0,za=1,D0=2,U0=3,N0=4,hC=5,la=100,pC=101,mC=102,I0=103,O0=104,_C=200,gC=201,vC=202,xC=203,H1=204,V1=205,yC=206,SC=207,MC=208,EC=209,TC=210,wC=0,AC=1,CC=2,rm=3,RC=4,bC=5,PC=6,LC=7,G1=0,DC=1,UC=2,Rs=0,NC=1,IC=2,OC=3,FC=4,kC=5,W1=300,el=301,tl=302,sm=303,om=304,md=306,am=1e3,Qi=1001,lm=1002,zn=1003,F0=1004,ch=1005,Pi=1006,zC=1007,Pu=1008,bs=1009,BC=1010,HC=1011,D_=1012,X1=1013,ds=1014,hs=1015,Lu=1016,j1=1017,Y1=1018,go=1020,VC=1021,Ji=1023,GC=1024,WC=1025,vo=1026,nl=1027,XC=1028,q1=1029,jC=1030,$1=1031,K1=1033,fh=33776,dh=33777,hh=33778,ph=33779,k0=35840,z0=35841,B0=35842,H0=35843,YC=36196,V0=37492,G0=37496,W0=37808,X0=37809,j0=37810,Y0=37811,q0=37812,$0=37813,K0=37814,Z0=37815,Q0=37816,J0=37817,ev=37818,tv=37819,nv=37820,iv=37821,mh=36492,rv=36494,sv=36495,qC=36283,ov=36284,av=36285,lv=36286,Z1=3e3,xo=3001,$C=3200,KC=3201,Q1=0,ZC=1,yo="",Rt="srgb",vr="srgb-linear",_d="display-p3",_h=7680,QC=519,JC=512,eR=513,tR=514,nR=515,iR=516,rR=517,sR=518,oR=519,uv=35044,cv="300 es",um=1035,Or=2e3,jf=2001;class Fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fv=1234567;const nu=Math.PI/180,Du=180/Math.PI;function al(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function Mn(n,e,t){return Math.max(e,Math.min(t,n))}function U_(n,e){return(n%e+e)%e}function aR(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function lR(n,e,t){return n!==e?(t-n)/(e-n):0}function iu(n,e,t){return(1-t)*n+t*e}function uR(n,e,t,i){return iu(n,e,1-Math.exp(-t*i))}function cR(n,e=1){return e-Math.abs(U_(n,e*2)-e)}function fR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pR(n,e){return n+Math.random()*(e-n)}function mR(n){return n*(.5-Math.random())}function _R(n){n!==void 0&&(fv=n);let e=fv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gR(n){return n*nu}function vR(n){return n*Du}function cm(n){return(n&n-1)===0&&n!==0}function xR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yR(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*h,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const SR={DEG2RAD:nu,RAD2DEG:Du,generateUUID:al,clamp:Mn,euclideanModulo:U_,mapLinear:aR,inverseLerp:lR,lerp:iu,damp:uR,pingpong:cR,smoothstep:fR,smootherstep:dR,randInt:hR,randFloat:pR,randFloatSpread:mR,seededRandom:_R,degToRad:gR,radToDeg:vR,isPowerOfTwo:cm,ceilPowerOfTwo:xR,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:yR,normalize:Un,denormalize:ua};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,o,a,l,u){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],y=r[7],E=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*E,s[3]=o*m+a*x+l*w,s[6]=o*d+a*y+l*M,s[1]=u*_+c*v+h*E,s[4]=u*m+c*x+h*w,s[7]=u*d+c*y+h*M,s[2]=f*_+p*v+g*E,s[5]=f*m+p*x+g*w,s[8]=f*d+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gh.makeScale(e,t)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new tt;function J1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function MR(){const n=qf("canvas");return n.style.display="block",n}const dv={};function ru(n){n in dv||(dv[n]=!0,console.warn(n))}function Ba(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ER=new tt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),TR=new tt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wR(n){return n.convertSRGBToLinear().applyMatrix3(TR)}function AR(n){return n.applyMatrix3(ER).convertLinearToSRGB()}const CR={[vr]:n=>n,[Rt]:n=>n.convertSRGBToLinear(),[_d]:wR},RR={[vr]:n=>n,[Rt]:n=>n.convertLinearToSRGB(),[_d]:AR},Vi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return vr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=CR[e],r=RR[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Wo;class eM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wo===void 0&&(Wo=qf("canvas")),Wo.width=e.width,Wo.height=e.height;const i=Wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ba(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ba(t[i]/255)*255):t[i]=Ba(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bR=0;class tM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=al(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xh(r[o].image)):s.push(xh(r[o]))}else s=xh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function xh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PR=0;class gi extends Fo{constructor(e=gi.DEFAULT_IMAGE,t=gi.DEFAULT_MAPPING,i=Qi,r=Qi,s=Pi,o=Pu,a=Ji,l=bs,u=gi.DEFAULT_ANISOTROPY,c=yo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=al(),this.name="",this.source=new tM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===xo?Rt:yo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case am:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case lm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case am:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case lm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?xo:Z1}set encoding(e){ru("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xo?Rt:yo}}gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=W1;gi.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,i=0,r=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,E=(d+1)/2,w=(c+f)/4,M=(h+_)/4,P=(g+m)/4;return x>y&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LR extends Fo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ru("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xo?Rt:yo),this.texture=new gi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pi,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends LR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nM extends gi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DR extends gi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,d*v);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,c=c*m+g*y,h=h*m+_*y,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=E,u*=E,c*=E,h*=E}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-a*p,e[t+2]=u*g+c*p+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-h*-o,this.y=c*l+f*-o+h*-s-u*-a,this.z=h*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yh=new Y,hv=new Do;class zu{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)yr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yr)}else r.boundingBox===null&&r.computeBoundingBox(),Xo.copy(r.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yr),yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),vc.subVectors(this.max,Ml),jo.subVectors(e.a,Ml),Yo.subVectors(e.b,Ml),qo.subVectors(e.c,Ml),$r.subVectors(Yo,jo),Kr.subVectors(qo,Yo),Xs.subVectors(jo,qo);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Xs.z,Xs.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Xs.z,0,-Xs.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Xs.y,Xs.x,0];return!Sh(t,jo,Yo,qo,vc)||(t=[1,0,0,0,1,0,0,0,1],!Sh(t,jo,Yo,qo,vc))?!1:(xc.crossVectors($r,Kr),t=[xc.x,xc.y,xc.z],Sh(t,jo,Yo,qo,vc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],yr=new Y,Xo=new zu,jo=new Y,Yo=new Y,qo=new Y,$r=new Y,Kr=new Y,Xs=new Y,Ml=new Y,vc=new Y,xc=new Y,js=new Y;function Sh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){js.fromArray(n,s);const a=r.x*Math.abs(js.x)+r.y*Math.abs(js.y)+r.z*Math.abs(js.z),l=e.dot(js),u=t.dot(js),c=i.dot(js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const UR=new zu,El=new Y,Mh=new Y;class N_{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):UR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const t=El.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(El,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(Mh)),this.expandByPoint(El.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new Y,Eh=new Y,yc=new Y,Zr=new Y,Th=new Y,Sc=new Y,wh=new Y;class iM{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Eh.copy(e).add(t).multiplyScalar(.5),yc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Eh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yc),a=Zr.dot(this.direction),l=-Zr.dot(yc),u=Zr.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Eh).addScaledVector(yc,f),p}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const i=Sr.dot(this.direction),r=Sr.dot(Sr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,i,r,s){Th.subVectors(t,e),Sc.subVectors(i,e),wh.crossVectors(Th,Sc);let o=this.direction.dot(wh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zr.subVectors(this.origin,e);const l=a*this.direction.dot(Sc.crossVectors(Zr,Sc));if(l<0)return null;const u=a*this.direction.dot(Th.cross(Zr));if(u<0||l+u>o)return null;const c=-a*Zr.dot(wh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),s=1/$o.setFromMatrixColumn(e,1).length(),o=1/$o.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NR,e,IR)}lookAt(e,t,i){const r=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Qr.crossVectors(i,si),Qr.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Qr.crossVectors(i,si)),Qr.normalize(),Mc.crossVectors(si,Qr),r[0]=Qr.x,r[4]=Mc.x,r[8]=si.x,r[1]=Qr.y,r[5]=Mc.y,r[9]=si.y,r[2]=Qr.z,r[6]=Mc.z,r[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],E=i[15],w=r[0],M=r[4],P=r[8],S=r[12],T=r[1],j=r[5],z=r[9],I=r[13],F=r[2],k=r[6],J=r[10],O=r[14],U=r[3],W=r[7],C=r[11],N=r[15];return s[0]=o*w+a*T+l*F+u*U,s[4]=o*M+a*j+l*k+u*W,s[8]=o*P+a*z+l*J+u*C,s[12]=o*S+a*I+l*O+u*N,s[1]=c*w+h*T+f*F+p*U,s[5]=c*M+h*j+f*k+p*W,s[9]=c*P+h*z+f*J+p*C,s[13]=c*S+h*I+f*O+p*N,s[2]=g*w+_*T+m*F+d*U,s[6]=g*M+_*j+m*k+d*W,s[10]=g*P+_*z+m*J+d*C,s[14]=g*S+_*I+m*O+d*N,s[3]=v*w+x*T+y*F+E*U,s[7]=v*M+x*j+y*k+E*W,s[11]=v*P+x*z+y*J+E*C,s[15]=v*S+x*I+y*O+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,x=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,y=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,E=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,w=t*v+i*x+r*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*M,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*d+t*f*d)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(g*h*s-c*_*s-g*i*p+t*_*p+c*i*d-t*h*d)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*M,e[12]=E*M,e[13]=(c*_*r-g*h*r+g*i*f-t*_*f-c*i*m+t*h*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,g=s*h,_=o*c,m=o*h,d=a*h,v=l*u,x=l*c,y=l*h,E=i.x,w=i.y,M=i.z;return r[0]=(1-(_+d))*E,r[1]=(p+y)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+d))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$o.set(r[0],r[1],r[2]).length();const o=$o.set(r[4],r[5],r[6]).length(),a=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gi.copy(this);const u=1/s,c=1/o,h=1/a;return Gi.elements[0]*=u,Gi.elements[1]*=u,Gi.elements[2]*=u,Gi.elements[4]*=c,Gi.elements[5]*=c,Gi.elements[6]*=c,Gi.elements[8]*=h,Gi.elements[9]*=h,Gi.elements[10]*=h,t.setFromRotationMatrix(Gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Or){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Or)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===jf)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Or){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,p=(i+r)*c;let g,_;if(a===Or)g=(o+s)*h,_=-2*h;else if(a===jf)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $o=new Y,Gi=new Qt,NR=new Y(0,0,0),IR=new Y(1,1,1),Qr=new Y,Mc=new Y,si=new Y,pv=new Qt,mv=new Do;class gd{constructor(e=0,t=0,i=0,r=gd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gd.DEFAULT_ORDER="XYZ";class rM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OR=0;const _v=new Y,Ko=new Do,Mr=new Qt,Ec=new Y,Tl=new Y,FR=new Y,kR=new Do,gv=new Y(1,0,0),vv=new Y(0,1,0),xv=new Y(0,0,1),zR={type:"added"},BR={type:"removed"};class An extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Y,t=new gd,i=new Do,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new tt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new rM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.premultiply(Ko),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(vv,e)}rotateZ(e){return this.rotateOnAxis(xv,e)}translateOnAxis(e,t){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(vv,e)}translateZ(e){return this.translateOnAxis(xv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ec.copy(e):Ec.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Tl,Ec,this.up):Mr.lookAt(Ec,Tl,this.up),this.quaternion.setFromRotationMatrix(Mr),r&&(Mr.extractRotation(r.matrixWorld),Ko.setFromRotationMatrix(Mr),this.quaternion.premultiply(Ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,FR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,kR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new Y(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new Y,Er=new Y,Ah=new Y,Tr=new Y,Zo=new Y,Qo=new Y,yv=new Y,Ch=new Y,Rh=new Y,bh=new Y;let Tc=!1;class Zi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wi.subVectors(e,t),r.cross(Wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wi.subVectors(r,t),Er.subVectors(i,t),Ah.subVectors(e,t);const o=Wi.dot(Wi),a=Wi.dot(Er),l=Wi.dot(Ah),u=Er.dot(Er),c=Er.dot(Ah),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tr),Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getUV(e,t,i,r,s,o,a,l){return Tc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Tr),l.setScalar(0),l.addScaledVector(s,Tr.x),l.addScaledVector(o,Tr.y),l.addScaledVector(a,Tr.z),l}static isFrontFacing(e,t,i,r){return Wi.subVectors(i,t),Er.subVectors(e,t),Wi.cross(Er).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Wi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Tc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tc=!0),Zi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Zi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zo.subVectors(r,i),Qo.subVectors(s,i),Ch.subVectors(e,i);const l=Zo.dot(Ch),u=Qo.dot(Ch);if(l<=0&&u<=0)return t.copy(i);Rh.subVectors(e,r);const c=Zo.dot(Rh),h=Qo.dot(Rh);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Zo,o);bh.subVectors(e,s);const p=Zo.dot(bh),g=Qo.dot(bh);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Qo,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return yv.subVectors(s,r),a=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(yv,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(Zo,o).addScaledVector(Qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let HR=0;class Bu extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HR++}),this.uuid=al(),this.name="",this.type="Material",this.blending=za,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=H1,this.blendDst=V1,this.blendEquation=la,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rm,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_h,this.stencilZFail=_h,this.stencilZPass=_h,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==za&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Ph(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Vi.workingColorSpace){return this.r=e,this.g=t,this.b=i,Vi.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Vi.workingColorSpace){if(e=U_(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ph(o,s,e+1/3),this.g=Ph(o,s,e),this.b=Ph(o,s,e-1/3)}return Vi.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=sM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=vh(e.r),this.g=vh(e.g),this.b=vh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Vi.fromWorkingColorSpace(xn.copy(this),e),Math.round(Mn(xn.r*255,0,255))*65536+Math.round(Mn(xn.g*255,0,255))*256+Math.round(Mn(xn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vi.workingColorSpace){Vi.fromWorkingColorSpace(xn.copy(this),t);const i=xn.r,r=xn.g,s=xn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Vi.workingColorSpace){return Vi.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Rt){Vi.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,i=xn.g,r=xn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),Xi.h+=e,Xi.s+=t,Xi.l+=i,this.setHSL(Xi.h,Xi.s,Xi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(wc);const i=iu(Xi.h,wc.h,t),r=iu(Xi.s,wc.s,t),s=iu(Xi.l,wc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new pt;pt.NAMES=sM;class oM extends Bu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=G1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new Y,Ac=new $e;class mr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uv,this.updateRange={offset:0,count:-1},this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ac.fromBufferAttribute(this,t),Ac.applyMatrix3(e),this.setXY(t,Ac.x,Ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),i=Un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uv&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class aM extends mr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lM extends mr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _r extends mr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let VR=0;const Ei=new Qt,Lh=new An,Jo=new Y,oi=new zu,wl=new zu,tn=new Y;class Bs extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J1(e)?lM:aM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _r(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new N_);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wl.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(oi.min,wl.min),oi.expandByPoint(tn),tn.addVectors(oi.max,wl.max),oi.expandByPoint(tn)):(oi.expandByPoint(wl.min),oi.expandByPoint(wl.max))}oi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)tn.fromBufferAttribute(a,u),l&&(Jo.fromBufferAttribute(e,u),tn.add(Jo)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mr(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new Y,c[T]=new Y;const h=new Y,f=new Y,p=new Y,g=new $e,_=new $e,m=new $e,d=new Y,v=new Y;function x(T,j,z){h.fromArray(r,T*3),f.fromArray(r,j*3),p.fromArray(r,z*3),g.fromArray(o,T*2),_.fromArray(o,j*2),m.fromArray(o,z*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(I),v.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),u[T].add(d),u[j].add(d),u[z].add(d),c[T].add(v),c[j].add(v),c[z].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,j=y.length;T<j;++T){const z=y[T],I=z.start,F=z.count;for(let k=I,J=I+F;k<J;k+=3)x(i[k+0],i[k+1],i[k+2])}const E=new Y,w=new Y,M=new Y,P=new Y;function S(T){M.fromArray(s,T*3),P.copy(M);const j=u[T];E.copy(j),E.sub(M.multiplyScalar(M.dot(j))).normalize(),w.crossVectors(P,j);const I=w.dot(c[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=I}for(let T=0,j=y.length;T<j;++T){const z=y[T],I=z.start,F=z.count;for(let k=I,J=I+F;k<J;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,h=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new mr(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bs,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sv=new Qt,Ys=new iM,Cc=new N_,Mv=new Y,ea=new Y,ta=new Y,na=new Y,Dh=new Y,Rc=new Y,bc=new $e,Pc=new $e,Lc=new $e,Ev=new Y,Tv=new Y,wv=new Y,Dc=new Y,Uc=new Y;class Fr extends An{constructor(e=new Bs,t=new oM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Dh.fromBufferAttribute(h,e),o?Rc.addScaledVector(Dh,c):Rc.addScaledVector(Dh.sub(t),c))}t.add(Rc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(Cc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Cc,Mv)===null||Ys.origin.distanceToSquared(Mv)>(e.far-e.near)**2))&&(Sv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(Sv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=x;y<E;y+=3){const w=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Nc(this,d,e,i,u,c,h,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Nc(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=x;y<E;y+=3){const w=y,M=y+1,P=y+2;r=Nc(this,d,e,i,u,c,h,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,y=m+2;r=Nc(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function GR(n,e,t,i,r,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Is,a),l===null)return null;Uc.copy(a),Uc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Uc);return u<t.near||u>t.far?null:{distance:u,point:Uc.clone(),object:n}}function Nc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ea),n.getVertexPosition(l,ta),n.getVertexPosition(u,na);const c=GR(n,e,t,i,ea,ta,na,Dc);if(c){r&&(bc.fromBufferAttribute(r,a),Pc.fromBufferAttribute(r,l),Lc.fromBufferAttribute(r,u),c.uv=Zi.getInterpolation(Dc,ea,ta,na,bc,Pc,Lc,new $e)),s&&(bc.fromBufferAttribute(s,a),Pc.fromBufferAttribute(s,l),Lc.fromBufferAttribute(s,u),c.uv1=Zi.getInterpolation(Dc,ea,ta,na,bc,Pc,Lc,new $e),c.uv2=c.uv1),o&&(Ev.fromBufferAttribute(o,a),Tv.fromBufferAttribute(o,l),wv.fromBufferAttribute(o,u),c.normal=Zi.getInterpolation(Dc,ea,ta,na,Ev,Tv,wv,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new Y,materialIndex:0};Zi.getNormal(ea,ta,na,h.normal),c.face=h}return c}class Hu extends Bs{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _r(u,3)),this.setAttribute("normal",new _r(c,3)),this.setAttribute("uv",new _r(h,2));function g(_,m,d,v,x,y,E,w,M,P,S){const T=y/M,j=E/P,z=y/2,I=E/2,F=w/2,k=M+1,J=P+1;let O=0,U=0;const W=new Y;for(let C=0;C<J;C++){const N=C*j-I;for(let H=0;H<k;H++){const ue=H*T-z;W[_]=ue*v,W[m]=N*x,W[d]=F,u.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[d]=w>0?1:-1,c.push(W.x,W.y,W.z),h.push(H/M),h.push(1-C/P),O+=1}}for(let C=0;C<P;C++)for(let N=0;N<M;N++){const H=f+N+k*C,ue=f+N+k*(C+1),re=f+(N+1)+k*(C+1),fe=f+(N+1)+k*C;l.push(H,ue,fe),l.push(ue,re,fe),U+=6}a.addGroup(p,U,S),p+=U,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function il(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const i=il(n[t]);for(const r in i)e[r]=i[r]}return e}function WR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uM(n){return n.getRenderTarget()===null?n.outputColorSpace:vr}const XR={clone:il,merge:Nn};var jR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Uo extends Bu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jR,this.fragmentShader=YR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=il(e.uniforms),this.uniformsGroups=WR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cM extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Li extends cM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Du*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Du*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ia=-90,ra=1;class qR extends An{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Li(ia,ra,e,t);r.layers=this.layers,this.add(r);const s=new Li(ia,ra,e,t);s.layers=this.layers,this.add(s);const o=new Li(ia,ra,e,t);o.layers=this.layers,this.add(o);const a=new Li(ia,ra,e,t);a.layers=this.layers,this.add(a);const l=new Li(ia,ra,e,t);l.layers=this.layers,this.add(l);const u=new Li(ia,ra,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Or)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class fM extends gi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:el,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $R extends Lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ru("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xo?Rt:yo),this.texture=new fM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hu(5,5,5),s=new Uo({name:"CubemapFromEquirect",uniforms:il(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Cs});s.uniforms.tEquirect.value=t;const o=new Fr(r,s),a=t.minFilter;return t.minFilter===Pu&&(t.minFilter=Pi),new qR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Uh=new Y,KR=new Y,ZR=new tt;class ns{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Uh.subVectors(i,t).cross(KR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ZR.getNormalMatrix(e),r=this.coplanarPoint(Uh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new N_,Ic=new Y;class I_{constructor(e=new ns,t=new ns,i=new ns,r=new ns,s=new ns,o=new ns){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Or){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-d).normalize(),i[1].setComponents(l+s,f+u,m+p,y+d).normalize(),i[2].setComponents(l+o,f+c,m+g,y+v).normalize(),i[3].setComponents(l-o,f-c,m-g,y-v).normalize(),i[4].setComponents(l-a,f-h,m-_,y-x).normalize(),t===Or)i[5].setComponents(l+a,f+h,m+_,y+x).normalize();else if(t===jf)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ic.x=r.normal.x>0?e.max.x:e.min.x,Ic.y=r.normal.y>0?e.max.y:e.min.y,Ic.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function QR(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,f=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,h,f),u.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const f=c.array,p=c.updateRange;n.bindBuffer(h,u),p.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:o,remove:a,update:l}}class O_ extends Bs{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*f-o;for(let x=0;x<u;x++){const y=x*h-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),E=v+1+u*(d+1),w=v+1+u*d;p.push(x,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new _r(g,3)),this.setAttribute("normal",new _r(_,3)),this.setAttribute("uv",new _r(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new O_(e.width,e.height,e.widthSegments,e.heightSegments)}}var JR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e2=`#ifdef USE_ALPHAHASH
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
#endif`,t2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,r2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c2=`#ifdef USE_IRIDESCENCE
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
#endif`,f2=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,x2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,y2=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,S2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,M2=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C2="gl_FragColor = linearToOutputTexel( gl_FragColor );",R2=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b2=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,P2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L2=`#ifdef USE_ENVMAP
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
#endif`,D2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U2=`#ifdef USE_ENVMAP
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
#endif`,N2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k2=`#ifdef USE_GRADIENTMAP
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
}`,z2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,B2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,W2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,X2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,K2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Z2=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ab=`#if defined( USE_POINTS_UV )
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
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,db=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zb=`#ifdef USE_SKINNING
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
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nP=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,iP=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,sP=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lP=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uP=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cP=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,fP=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,hP=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,mP=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_P=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gP=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,xP=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,SP=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MP=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,EP=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,TP=`uniform float size;
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
}`,wP=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,AP=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,CP=`uniform vec3 color;
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
}`,RP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,bP=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ze={alphahash_fragment:JR,alphahash_pars_fragment:e2,alphamap_fragment:t2,alphamap_pars_fragment:n2,alphatest_fragment:i2,alphatest_pars_fragment:r2,aomap_fragment:s2,aomap_pars_fragment:o2,begin_vertex:a2,beginnormal_vertex:l2,bsdfs:u2,iridescence_fragment:c2,bumpmap_pars_fragment:f2,clipping_planes_fragment:d2,clipping_planes_pars_fragment:h2,clipping_planes_pars_vertex:p2,clipping_planes_vertex:m2,color_fragment:_2,color_pars_fragment:g2,color_pars_vertex:v2,color_vertex:x2,common:y2,cube_uv_reflection_fragment:S2,defaultnormal_vertex:M2,displacementmap_pars_vertex:E2,displacementmap_vertex:T2,emissivemap_fragment:w2,emissivemap_pars_fragment:A2,colorspace_fragment:C2,colorspace_pars_fragment:R2,envmap_fragment:b2,envmap_common_pars_fragment:P2,envmap_pars_fragment:L2,envmap_pars_vertex:D2,envmap_physical_pars_fragment:W2,envmap_vertex:U2,fog_vertex:N2,fog_pars_vertex:I2,fog_fragment:O2,fog_pars_fragment:F2,gradientmap_pars_fragment:k2,lightmap_fragment:z2,lightmap_pars_fragment:B2,lights_lambert_fragment:H2,lights_lambert_pars_fragment:V2,lights_pars_begin:G2,lights_toon_fragment:X2,lights_toon_pars_fragment:j2,lights_phong_fragment:Y2,lights_phong_pars_fragment:q2,lights_physical_fragment:$2,lights_physical_pars_fragment:K2,lights_fragment_begin:Z2,lights_fragment_maps:Q2,lights_fragment_end:J2,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:rb,map_pars_fragment:sb,map_particle_fragment:ob,map_particle_pars_fragment:ab,metalnessmap_fragment:lb,metalnessmap_pars_fragment:ub,morphcolor_vertex:cb,morphnormal_vertex:fb,morphtarget_pars_vertex:db,morphtarget_vertex:hb,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:_b,normal_pars_vertex:gb,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:yb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:Eb,opaque_fragment:Tb,packing:wb,premultiplied_alpha_fragment:Ab,project_vertex:Cb,dithering_fragment:Rb,dithering_pars_fragment:bb,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Nb,shadowmask_pars_fragment:Ib,skinbase_vertex:Ob,skinning_pars_vertex:Fb,skinning_vertex:kb,skinnormal_vertex:zb,specularmap_fragment:Bb,specularmap_pars_fragment:Hb,tonemapping_fragment:Vb,tonemapping_pars_fragment:Gb,transmission_fragment:Wb,transmission_pars_fragment:Xb,uv_pars_fragment:jb,uv_pars_vertex:Yb,uv_vertex:qb,worldpos_vertex:$b,background_vert:Kb,background_frag:Zb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:eP,cube_frag:tP,depth_vert:nP,depth_frag:iP,distanceRGBA_vert:rP,distanceRGBA_frag:sP,equirect_vert:oP,equirect_frag:aP,linedashed_vert:lP,linedashed_frag:uP,meshbasic_vert:cP,meshbasic_frag:fP,meshlambert_vert:dP,meshlambert_frag:hP,meshmatcap_vert:pP,meshmatcap_frag:mP,meshnormal_vert:_P,meshnormal_frag:gP,meshphong_vert:vP,meshphong_frag:xP,meshphysical_vert:yP,meshphysical_frag:SP,meshtoon_vert:MP,meshtoon_frag:EP,points_vert:TP,points_frag:wP,shadow_vert:AP,shadow_frag:CP,sprite_vert:RP,sprite_frag:bP},_e={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ar={basic:{uniforms:Nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Nn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Nn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Nn([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Nn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Nn([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Nn([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Nn([_e.common,_e.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Nn([_e.lights,_e.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ar.physical={uniforms:Nn([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Oc={r:0,b:0,g:0};function PP(n,e,t,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function g(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===md)?(c===void 0&&(c=new Fr(new Hu(1,1,1),new Uo({name:"BackgroundCubeMaterial",uniforms:il(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Rt,(h!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Fr(new O_(2,2),new Uo({name:"BackgroundMaterial",uniforms:il(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(Oc,uM(n)),i.buffers.color.setClear(Oc.r,Oc.g,Oc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function LP(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function h(F,k,J,O,U){let W=!1;if(o){const C=_(O,J,k);u!==C&&(u=C,p(u.object)),W=d(F,O,J,U),W&&v(F,O,J,U)}else{const C=k.wireframe===!0;(u.geometry!==O.id||u.program!==J.id||u.wireframe!==C)&&(u.geometry=O.id,u.program=J.id,u.wireframe=C,W=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(W||c)&&(c=!1,P(F,k,J,O),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,k,J){const O=J.wireframe===!0;let U=a[F.id];U===void 0&&(U={},a[F.id]=U);let W=U[k.id];W===void 0&&(W={},U[k.id]=W);let C=W[O];return C===void 0&&(C=m(f()),W[O]=C),C}function m(F){const k=[],J=[],O=[];for(let U=0;U<r;U++)k[U]=0,J[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:O,object:F,attributes:{},index:null}}function d(F,k,J,O){const U=u.attributes,W=k.attributes;let C=0;const N=J.getAttributes();for(const H in N)if(N[H].location>=0){const re=U[H];let fe=W[H];if(fe===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;C++}return u.attributesNum!==C||u.index!==O}function v(F,k,J,O){const U={},W=k.attributes;let C=0;const N=J.getAttributes();for(const H in N)if(N[H].location>=0){let re=W[H];re===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),U[H]=fe,C++}u.attributes=U,u.attributesNum=C,u.index=O}function x(){const F=u.newAttributes;for(let k=0,J=F.length;k<J;k++)F[k]=0}function y(F){E(F,0)}function E(F,k){const J=u.newAttributes,O=u.enabledAttributes,U=u.attributeDivisors;J[F]=1,O[F]===0&&(n.enableVertexAttribArray(F),O[F]=1),U[F]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,k),U[F]=k)}function w(){const F=u.newAttributes,k=u.enabledAttributes;for(let J=0,O=k.length;J<O;J++)k[J]!==F[J]&&(n.disableVertexAttribArray(J),k[J]=0)}function M(F,k,J,O,U,W,C){C===!0?n.vertexAttribIPointer(F,k,J,U,W):n.vertexAttribPointer(F,k,J,O,U,W)}function P(F,k,J,O){if(i.isWebGL2===!1&&(F.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=O.attributes,W=J.getAttributes(),C=k.defaultAttributeValues;for(const N in W){const H=W[N];if(H.location>=0){let ue=U[N];if(ue===void 0&&(N==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),N==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ue!==void 0){const re=ue.normalized,fe=ue.itemSize,ve=t.get(ue);if(ve===void 0)continue;const ye=ve.buffer,Te=ve.type,Be=ve.bytesPerElement,gt=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||ue.gpuType===X1);if(ue.isInterleavedBufferAttribute){const Ne=ue.data,V=Ne.stride,Fe=ue.offset;if(Ne.isInstancedInterleavedBuffer){for(let xe=0;xe<H.locationSize;xe++)E(H.location+xe,Ne.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let xe=0;xe<H.locationSize;xe++)y(H.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let xe=0;xe<H.locationSize;xe++)M(H.location+xe,fe/H.locationSize,Te,re,V*Be,(Fe+fe/H.locationSize*xe)*Be,gt)}else{if(ue.isInstancedBufferAttribute){for(let Ne=0;Ne<H.locationSize;Ne++)E(H.location+Ne,ue.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)y(H.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,ye);for(let Ne=0;Ne<H.locationSize;Ne++)M(H.location+Ne,fe/H.locationSize,Te,re,fe*Be,fe/H.locationSize*Ne*Be,gt)}}else if(C!==void 0){const re=C[N];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(H.location,re);break;case 3:n.vertexAttrib3fv(H.location,re);break;case 4:n.vertexAttrib4fv(H.location,re);break;default:n.vertexAttrib1fv(H.location,re)}}}}w()}function S(){z();for(const F in a){const k=a[F];for(const J in k){const O=k[J];for(const U in O)g(O[U].object),delete O[U];delete k[J]}delete a[F]}}function T(F){if(a[F.id]===void 0)return;const k=a[F.id];for(const J in k){const O=k[J];for(const U in O)g(O[U].object),delete O[U];delete k[J]}delete a[F.id]}function j(F){for(const k in a){const J=a[k];if(J[F.id]===void 0)continue;const O=J[F.id];for(const U in O)g(O[U].object),delete O[U];delete J[F.id]}}function z(){I(),c=!0,u!==l&&(u=l,p(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function DP(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,u,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function UP(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),E=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:w}}function NP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ns,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(g,f,x,p);for(let E=0;E!==x;++E)y[E]=t[E];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function IP(n){let e=new WeakMap;function t(o,a){return a===sm?o.mapping=el:a===om&&(o.mapping=tl),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sm||a===om)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new $R(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hM extends cM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Aa=4,Av=[.125,.215,.35,.446,.526,.582],to=20,Nh=new hM,Cv=new pt;let Ih=null;const eo=(1+Math.sqrt(5))/2,sa=1/eo,Rv=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,eo,sa),new Y(0,eo,-sa),new Y(sa,0,eo),new Y(-sa,0,eo),new Y(eo,sa,0),new Y(-eo,sa,0)];class bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ih=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih),e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===el||e.mapping===tl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Lu,format:Ji,colorSpace:vr,depthBuffer:!1},r=Pv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OP(s)),this._blurMaterial=FP(s,e,t)}return r}_compileMaterial(e){const t=new Fr(this._lodPlanes[0],e);this._renderer.compile(t,Nh)}_sceneToCubeUV(e,t,i,r){const a=new Li(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Cv),c.toneMapping=Rs,c.autoClear=!1;const p=new oM({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),g=new Fr(new Hu,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Cv),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;Fc(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===el||e.mapping===tl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rv[(r-1)%Rv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Fr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*to-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):to;m>to&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${to}`);const d=[];let v=0;for(let M=0;M<to;++M){const P=M/_,S=Math.exp(-P*P/2);d.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],E=3*y*(r>x-Aa?r-x+Aa:0),w=4*(this._cubeSize-y);Fc(t,E,w,3*y,2*y),l.setRenderTarget(t),l.render(h,Nh)}}function OP(n){const e=[],t=[],i=[];let r=n;const s=n-Aa+1+Av.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Aa?l=Av[o-n+Aa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,P=w>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,_*g*w),x.set(f,m*g*w);const T=[w,w,w,w,w,w];y.set(T,d*g*w)}const E=new Bs;E.setAttribute("position",new mr(v,_)),E.setAttribute("uv",new mr(x,m)),E.setAttribute("faceIndex",new mr(y,d)),e.push(E),r>Aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pv(n,e,t){const i=new Lo(n,e,t);return i.texture.mapping=md,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function FP(n,e,t){const i=new Float32Array(to),r=new Y(0,1,0);return new Uo({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:F_(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Lv(){return new Uo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F_(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Dv(){return new Uo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function F_(){return`

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
	`}function kP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===sm||l===om,c=l===el||l===tl;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new bv(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new bv(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function BP(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],w=v[x+1],M=v[x+2];f.push(E,w,w,M,M,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,w=x+1,M=x+2;f.push(E,w,w,M,M,E)}}else return;const m=new(J1(f)?lM:aM)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function HP(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,p){n.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function VP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function GP(n,e){return n[0]-e[0]}function WP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function XP(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new on,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let k=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),E===!0&&(S=3);let T=c.attributes.position.count*S,j=1;T>e.maxTextureSize&&(j=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const z=new Float32Array(T*j*4*_),I=new nM(z,T,j,_);I.type=hs,I.needsUpdate=!0;const F=S*4;for(let J=0;J<_;J++){const O=w[J],U=M[J],W=P[J],C=T*j*4*J;for(let N=0;N<O.count;N++){const H=N*F;x===!0&&(o.fromBufferAttribute(O,N),z[C+H+0]=o.x,z[C+H+1]=o.y,z[C+H+2]=o.z,z[C+H+3]=0),y===!0&&(o.fromBufferAttribute(U,N),z[C+H+4]=o.x,z[C+H+5]=o.y,z[C+H+6]=o.z,z[C+H+7]=0),E===!0&&(o.fromBufferAttribute(W,N),z[C+H+8]=o.x,z[C+H+9]=o.y,z[C+H+10]=o.z,z[C+H+11]=W.itemSize===4?o.w:1)}}m={count:_,texture:I,size:new $e(T,j)},s.set(c,m),c.addEventListener("dispose",k)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const v=c.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[c.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<g;y++){const E=_[y];E[0]=y,E[1]=f[y]}_.sort(WP);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(GP);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const E=a[y],w=E[0],M=E[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),d&&c.getAttribute("morphNormal"+y)!==d[w]&&c.setAttribute("morphNormal"+y,d[w]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function jP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const pM=new gi,mM=new nM,_M=new DR,gM=new fM,Uv=[],Nv=[],Iv=new Float32Array(16),Ov=new Float32Array(9),Fv=new Float32Array(4);function ll(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uv[r];if(s===void 0&&(s=new Float32Array(r),Uv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vd(n,e){let t=Nv[e];t===void 0&&(t=new Int32Array(e),Nv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function $P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function KP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function ZP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,i))return;Fv.set(i),n.uniformMatrix2fv(this.addr,!1,Fv),en(t,i)}}function QP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,i))return;Ov.set(i),n.uniformMatrix3fv(this.addr,!1,Ov),en(t,i)}}function JP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,i))return;Iv.set(i),n.uniformMatrix4fv(this.addr,!1,Iv),en(t,i)}}function eL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function nL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function iL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function rL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function oL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function aL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function lL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||pM,r)}function uL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_M,r)}function cL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||gM,r)}function fL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mM,r)}function dL(n){switch(n){case 5126:return YP;case 35664:return qP;case 35665:return $P;case 35666:return KP;case 35674:return ZP;case 35675:return QP;case 35676:return JP;case 5124:case 35670:return eL;case 35667:case 35671:return tL;case 35668:case 35672:return nL;case 35669:case 35673:return iL;case 5125:return rL;case 36294:return sL;case 36295:return oL;case 36296:return aL;case 35678:case 36198:case 36298:case 36306:case 35682:return lL;case 35679:case 36299:case 36307:return uL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return fL}}function hL(n,e){n.uniform1fv(this.addr,e)}function pL(n,e){const t=ll(e,this.size,2);n.uniform2fv(this.addr,t)}function mL(n,e){const t=ll(e,this.size,3);n.uniform3fv(this.addr,t)}function _L(n,e){const t=ll(e,this.size,4);n.uniform4fv(this.addr,t)}function gL(n,e){const t=ll(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vL(n,e){const t=ll(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xL(n,e){const t=ll(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yL(n,e){n.uniform1iv(this.addr,e)}function SL(n,e){n.uniform2iv(this.addr,e)}function ML(n,e){n.uniform3iv(this.addr,e)}function EL(n,e){n.uniform4iv(this.addr,e)}function TL(n,e){n.uniform1uiv(this.addr,e)}function wL(n,e){n.uniform2uiv(this.addr,e)}function AL(n,e){n.uniform3uiv(this.addr,e)}function CL(n,e){n.uniform4uiv(this.addr,e)}function RL(n,e,t){const i=this.cache,r=e.length,s=vd(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||pM,s[o])}function bL(n,e,t){const i=this.cache,r=e.length,s=vd(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_M,s[o])}function PL(n,e,t){const i=this.cache,r=e.length,s=vd(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gM,s[o])}function LL(n,e,t){const i=this.cache,r=e.length,s=vd(t,r);Jt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mM,s[o])}function DL(n){switch(n){case 5126:return hL;case 35664:return pL;case 35665:return mL;case 35666:return _L;case 35674:return gL;case 35675:return vL;case 35676:return xL;case 5124:case 35670:return yL;case 35667:case 35671:return SL;case 35668:case 35672:return ML;case 35669:case 35673:return EL;case 5125:return TL;case 36294:return wL;case 36295:return AL;case 36296:return CL;case 35678:case 36198:case 36298:case 36306:case 35682:return RL;case 35679:case 36299:case 36307:return bL;case 35680:case 36300:case 36308:case 36293:return PL;case 36289:case 36303:case 36311:case 36292:return LL}}class UL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=dL(t.type)}}class NL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=DL(t.type)}}class IL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function kv(n,e){n.seq.push(e),n.map[e.id]=e}function OL(n,e,t){const i=n.name,r=i.length;for(Oh.lastIndex=0;;){const s=Oh.exec(i),o=Oh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){kv(t,u===void 0?new UL(a,n,e):new NL(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new IL(a),kv(t,h)),t=h}}}class uf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);OL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function zv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let FL=0;function kL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zL(n){switch(n){case vr:return["Linear","( value )"];case Rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Bv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kL(n.getShaderSource(e),o)}else return r}function BL(n,e){const t=zL(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function HL(n,e){let t;switch(e){case NC:t="Linear";break;case IC:t="Reinhard";break;case OC:t="OptimizedCineon";break;case FC:t="ACESFilmic";break;case kC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function VL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Il).join(`
`)}function GL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Il(n){return n!==""}function Hv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XL=/^[ \t]*#include +<([\w\d./]+)>/gm;function fm(n){return n.replace(XL,YL)}const jL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YL(n,e){let t=Ze[e];if(t===void 0){const i=jL.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fm(t)}const qL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gv(n){return n.replace(qL,$L)}function $L(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===B1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function ZL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case el:case tl:e="ENVMAP_TYPE_CUBE";break;case md:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tl:e="ENVMAP_MODE_REFRACTION";break}return e}function JL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case G1:e="ENVMAP_BLENDING_MULTIPLY";break;case DC:e="ENVMAP_BLENDING_MIX";break;case UC:e="ENVMAP_BLENDING_ADD";break}return e}function eD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KL(t),u=ZL(t),c=QL(t),h=JL(t),f=eD(t),p=t.isWebGL2?"":VL(t),g=GL(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Il).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Il).join(`
`),d.length>0&&(d+=`
`)):(m=[Wv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),d=[p,Wv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Rs?HL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,BL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Il).join(`
`)),o=fm(o),o=Hv(o,t),o=Vv(o,t),a=fm(a),a=Hv(a,t),a=Vv(a,t),o=Gv(o),a=Gv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,y=v+d+a,E=zv(r,r.VERTEX_SHADER,x),w=zv(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,E),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),T=r.getShaderInfoLog(E).trim(),j=r.getShaderInfoLog(w).trim();let z=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,w);else{const F=Bv(r,E,"vertex"),k=Bv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+F+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||j==="")&&(I=!1);I&&(this.diagnostics={runnable:z,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(E),r.deleteShader(w);let M;this.getUniforms=function(){return M===void 0&&(M=new uf(r,_)),M};let P;return this.getAttributes=function(){return P===void 0&&(P=WL(r,_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let nD=0;class iD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rD(e),t.set(e,i)),i}}class rD{constructor(e){this.id=nD++,this.code=e,this.usedTimes=0}}function sD(n,e,t,i,r,s,o){const a=new rM,l=new iD,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,T,j,z,I){const F=z.fog,k=I.geometry,J=S.isMeshStandardMaterial?z.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),U=O&&O.mapping===md?O.image.height:null,W=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const C=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=C!==void 0?C.length:0;let H=0;k.morphAttributes.position!==void 0&&(H=1),k.morphAttributes.normal!==void 0&&(H=2),k.morphAttributes.color!==void 0&&(H=3);let ue,re,fe,ve;if(W){const ge=ar[W];ue=ge.vertexShader,re=ge.fragmentShader}else ue=S.vertexShader,re=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const ye=n.getRenderTarget(),Te=I.isInstancedMesh===!0,Be=!!S.map,gt=!!S.matcap,Ne=!!O,V=!!S.aoMap,Fe=!!S.lightMap,xe=!!S.bumpMap,De=!!S.normalMap,Le=!!S.displacementMap,q=!!S.emissiveMap,ke=!!S.metalnessMap,ze=!!S.roughnessMap,qe=S.anisotropy>0,Ke=S.clearcoat>0,vt=S.iridescence>0,b=S.sheen>0,A=S.transmission>0,X=qe&&!!S.anisotropyMap,te=Ke&&!!S.clearcoatMap,ne=Ke&&!!S.clearcoatNormalMap,se=Ke&&!!S.clearcoatRoughnessMap,Ce=vt&&!!S.iridescenceMap,oe=vt&&!!S.iridescenceThicknessMap,Z=b&&!!S.sheenColorMap,L=b&&!!S.sheenRoughnessMap,ee=!!S.specularMap,pe=!!S.specularColorMap,ce=!!S.specularIntensityMap,he=A&&!!S.transmissionMap,Ie=A&&!!S.thicknessMap,Ge=!!S.gradientMap,D=!!S.alphaMap,de=S.alphaTest>0,K=!!S.alphaHash,ie=!!S.extensions,ae=!!k.attributes.uv1,Ve=!!k.attributes.uv2,st=!!k.attributes.uv3;let ot=Rs;return S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ot=n.toneMapping),{isWebGL2:c,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:re,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Te,instancingColor:Te&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:vr,map:Be,matcap:gt,envMap:Ne,envMapMode:Ne&&O.mapping,envMapCubeUVHeight:U,aoMap:V,lightMap:Fe,bumpMap:xe,normalMap:De,displacementMap:f&&Le,emissiveMap:q,normalMapObjectSpace:De&&S.normalMapType===ZC,normalMapTangentSpace:De&&S.normalMapType===Q1,metalnessMap:ke,roughnessMap:ze,anisotropy:qe,anisotropyMap:X,clearcoat:Ke,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,iridescence:vt,iridescenceMap:Ce,iridescenceThicknessMap:oe,sheen:b,sheenColorMap:Z,sheenRoughnessMap:L,specularMap:ee,specularColorMap:pe,specularIntensityMap:ce,transmission:A,transmissionMap:he,thicknessMap:Ie,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===za,alphaMap:D,alphaTest:de,alphaHash:K,combine:S.combine,mapUv:Be&&_(S.map.channel),aoMapUv:V&&_(S.aoMap.channel),lightMapUv:Fe&&_(S.lightMap.channel),bumpMapUv:xe&&_(S.bumpMap.channel),normalMapUv:De&&_(S.normalMap.channel),displacementMapUv:Le&&_(S.displacementMap.channel),emissiveMapUv:q&&_(S.emissiveMap.channel),metalnessMapUv:ke&&_(S.metalnessMap.channel),roughnessMapUv:ze&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:te&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(S.sheenRoughnessMap.channel),specularMapUv:ee&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:ce&&_(S.specularIntensityMap.channel),transmissionMapUv:he&&_(S.transmissionMap.channel),thicknessMapUv:Ie&&_(S.thicknessMap.channel),alphaMapUv:D&&_(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(De||qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Ve,vertexUv3s:st,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Be||D),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&S.map.colorSpace===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Lr,flipSided:S.side===ti,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ie&&S.extensions.derivatives===!0,extensionFragDepth:ie&&S.extensions.fragDepth===!0,extensionDrawBuffers:ie&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)T.push(j),T.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(v(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const T=g[S.type];let j;if(T){const z=ar[T];j=XR.clone(z.uniforms)}else j=S.uniforms;return j}function E(S,T){let j;for(let z=0,I=u.length;z<I;z++){const F=u[z];if(F.cacheKey===T){j=F,++j.usedTimes;break}}return j===void 0&&(j=new tD(n,T,S,s),u.push(j)),j}function w(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:P}}function oD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function aD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||aD),i.length>1&&i.sort(f||Xv),r.length>1&&r.sort(f||Xv)}function c(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function lD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new jv,n.set(i,[o])):r>=s.length?(o=new jv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function uD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function cD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fD=0;function dD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hD(n,e){const t=new uD,i=cD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new Y);const s=new Y,o=new Qt,a=new Qt;function l(c,h){let f=0,p=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,m=0,d=0,v=0,x=0,y=0,E=0,w=0,M=0,P=0;c.sort(dD);const S=h===!0?Math.PI:1;for(let j=0,z=c.length;j<z;j++){const I=c[j],F=I.color,k=I.intensity,J=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=F.r*k*S,p+=F.g*k*S,g+=F.b*k*S;else if(I.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],k);else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const W=I.shadow,C=i.get(I);C.shadowBias=W.bias,C.shadowNormalBias=W.normalBias,C.shadowRadius=W.radius,C.shadowMapSize=W.mapSize,r.directionalShadow[_]=C,r.directionalShadowMap[_]=O,r.directionalShadowMatrix[_]=I.shadow.matrix,y++}r.directional[_]=U,_++}else if(I.isSpotLight){const U=t.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(F).multiplyScalar(k*S),U.distance=J,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,r.spot[d]=U;const W=I.shadow;if(I.map&&(r.spotLightMap[M]=I.map,M++,W.updateMatrices(I),I.castShadow&&P++),r.spotLightMatrix[d]=W.matrix,I.castShadow){const C=i.get(I);C.shadowBias=W.bias,C.shadowNormalBias=W.normalBias,C.shadowRadius=W.radius,C.shadowMapSize=W.mapSize,r.spotShadow[d]=C,r.spotShadowMap[d]=O,w++}d++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(F).multiplyScalar(k),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=U,v++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*S),U.distance=I.distance,U.decay=I.decay,I.castShadow){const W=I.shadow,C=i.get(I);C.shadowBias=W.bias,C.shadowNormalBias=W.normalBias,C.shadowRadius=W.radius,C.shadowMapSize=W.mapSize,C.shadowCameraNear=W.camera.near,C.shadowCameraFar=W.camera.far,r.pointShadow[m]=C,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=I.shadow.matrix,E++}r.point[m]=U,m++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(k*S),U.groundColor.copy(I.groundColor).multiplyScalar(k*S),r.hemi[x]=U,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==v||T.hemiLength!==x||T.numDirectionalShadows!==y||T.numPointShadows!==E||T.numSpotShadows!==w||T.numSpotMaps!==M)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,T.directionalLength=_,T.pointLength=m,T.spotLength=d,T.rectAreaLength=v,T.hemiLength=x,T.numDirectionalShadows=y,T.numPointShadows=E,T.numSpotShadows=w,T.numSpotMaps=M,r.version=fD++)}function u(c,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),f++}else if(y.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Yv(n,e){const t=new hD(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function pD(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Yv(n,e),t.set(s,[l])):o>=a.length?(l=new Yv(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class mD extends Bu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$C,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _D extends Bu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vD=`uniform sampler2D shadow_pass;
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
}`;function xD(n,e,t){let i=new I_;const r=new $e,s=new $e,o=new on,a=new mD({depthPacking:KC}),l=new _D,u={},c=t.maxTextureSize,h={[Is]:ti,[ti]:Is,[Lr]:Lr},f=new Uo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:gD,fragmentShader:vD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bs;g.setAttribute("position",new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fr(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B1;let d=this.type;this.render=function(E,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const P=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Cs),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const z=d!==wr&&this.type===wr,I=d===wr&&this.type!==wr;for(let F=0,k=E.length;F<k;F++){const J=E[F],O=J.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const U=O.getFrameExtents();if(r.multiply(U),s.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/U.x),r.x=s.x*U.x,O.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/U.y),r.y=s.y*U.y,O.mapSize.y=s.y)),O.map===null||z===!0||I===!0){const C=this.type!==wr?{minFilter:zn,magFilter:zn}:{};O.map!==null&&O.map.dispose(),O.map=new Lo(r.x,r.y,C),O.map.texture.name=J.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const W=O.getViewportCount();for(let C=0;C<W;C++){const N=O.getViewport(C);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),j.viewport(o),O.updateMatrices(J,C),i=O.getFrustum(),y(w,M,O.camera,J,this.type)}O.isPointLightShadow!==!0&&this.type===wr&&v(O,M),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(P,S,T)};function v(E,w){const M=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Lo(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,M,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,M,p,_,null)}function x(E,w,M,P){let S=null;const T=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)S=T;else if(S=M.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=S.uuid,z=w.uuid;let I=u[j];I===void 0&&(I={},u[j]=I);let F=I[z];F===void 0&&(F=S.clone(),I[z]=F),S=F}if(S.visible=w.visible,S.wireframe=w.wireframe,P===wr?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,M.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const j=n.properties.get(S);j.light=M}return S}function y(E,w,M,P,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===wr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const z=e.update(E),I=E.material;if(Array.isArray(I)){const F=z.groups;for(let k=0,J=F.length;k<J;k++){const O=F[k],U=I[O.materialIndex];if(U&&U.visible){const W=x(E,U,P,S);n.renderBufferDirect(M,null,z,W,E,O)}}}else if(I.visible){const F=x(E,I,P,S);n.renderBufferDirect(M,null,z,F,E,null)}}const j=E.children;for(let z=0,I=j.length;z<I;z++)y(j[z],w,M,P,S)}}function yD(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const de=new on;let K=null;const ie=new on(0,0,0,0);return{setMask:function(ae){K!==ae&&!D&&(n.colorMask(ae,ae,ae,ae),K=ae)},setLocked:function(ae){D=ae},setClear:function(ae,Ve,st,ot,Ue){Ue===!0&&(ae*=ot,Ve*=ot,st*=ot),de.set(ae,Ve,st,ot),ie.equals(de)===!1&&(n.clearColor(ae,Ve,st,ot),ie.copy(de))},reset:function(){D=!1,K=null,ie.set(-1,0,0,0)}}}function s(){let D=!1,de=null,K=null,ie=null;return{setTest:function(ae){ae?ye(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ae){de!==ae&&!D&&(n.depthMask(ae),de=ae)},setFunc:function(ae){if(K!==ae){switch(ae){case wC:n.depthFunc(n.NEVER);break;case AC:n.depthFunc(n.ALWAYS);break;case CC:n.depthFunc(n.LESS);break;case rm:n.depthFunc(n.LEQUAL);break;case RC:n.depthFunc(n.EQUAL);break;case bC:n.depthFunc(n.GEQUAL);break;case PC:n.depthFunc(n.GREATER);break;case LC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ae}},setLocked:function(ae){D=ae},setClear:function(ae){ie!==ae&&(n.clearDepth(ae),ie=ae)},reset:function(){D=!1,de=null,K=null,ie=null}}}function o(){let D=!1,de=null,K=null,ie=null,ae=null,Ve=null,st=null,ot=null,Ue=null;return{setTest:function(ge){D||(ge?ye(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(ge){de!==ge&&!D&&(n.stencilMask(ge),de=ge)},setFunc:function(ge,We,Qe){(K!==ge||ie!==We||ae!==Qe)&&(n.stencilFunc(ge,We,Qe),K=ge,ie=We,ae=Qe)},setOp:function(ge,We,Qe){(Ve!==ge||st!==We||ot!==Qe)&&(n.stencilOp(ge,We,Qe),Ve=ge,st=We,ot=Qe)},setLocked:function(ge){D=ge},setClear:function(ge){Ue!==ge&&(n.clearStencil(ge),Ue=ge)},reset:function(){D=!1,de=null,K=null,ie=null,ae=null,Ve=null,st=null,ot=null,Ue=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,v=null,x=null,y=null,E=null,w=null,M=null,P=null,S=!1,T=null,j=null,z=null,I=null,F=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,O=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),J=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),J=O>=2);let W=null,C={};const N=n.getParameter(n.SCISSOR_BOX),H=n.getParameter(n.VIEWPORT),ue=new on().fromArray(N),re=new on().fromArray(H);function fe(D,de,K,ie){const ae=new Uint8Array(4),Ve=n.createTexture();n.bindTexture(D,Ve),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<K;st++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(de+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Ve}const ve={};ve[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ye(n.DEPTH_TEST),l.setFunc(rm),Le(!1),q(L0),ye(n.CULL_FACE),xe(Cs);function ye(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function Te(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Be(D,de){return p[D]!==de?(n.bindFramebuffer(D,de),p[D]=de,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function gt(D,de){let K=_,ie=!1;if(D)if(K=g.get(de),K===void 0&&(K=[],g.set(de,K)),D.isWebGLMultipleRenderTargets){const ae=D.texture;if(K.length!==ae.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Ve=0,st=ae.length;Ve<st;Ve++)K[Ve]=n.COLOR_ATTACHMENT0+Ve;K.length=ae.length,ie=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,ie=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,ie=!0);ie&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ne(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const V={[la]:n.FUNC_ADD,[pC]:n.FUNC_SUBTRACT,[mC]:n.FUNC_REVERSE_SUBTRACT};if(i)V[I0]=n.MIN,V[O0]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(V[I0]=D.MIN_EXT,V[O0]=D.MAX_EXT)}const Fe={[_C]:n.ZERO,[gC]:n.ONE,[vC]:n.SRC_COLOR,[H1]:n.SRC_ALPHA,[TC]:n.SRC_ALPHA_SATURATE,[MC]:n.DST_COLOR,[yC]:n.DST_ALPHA,[xC]:n.ONE_MINUS_SRC_COLOR,[V1]:n.ONE_MINUS_SRC_ALPHA,[EC]:n.ONE_MINUS_DST_COLOR,[SC]:n.ONE_MINUS_DST_ALPHA};function xe(D,de,K,ie,ae,Ve,st,ot){if(D===Cs){d===!0&&(Te(n.BLEND),d=!1);return}if(d===!1&&(ye(n.BLEND),d=!0),D!==hC){if(D!==v||ot!==S){if((x!==la||w!==la)&&(n.blendEquation(n.FUNC_ADD),x=la,w=la),ot)switch(D){case za:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case D0:n.blendFunc(n.ONE,n.ONE);break;case U0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case N0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case za:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case D0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case U0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case N0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,E=null,M=null,P=null,v=D,S=ot}return}ae=ae||de,Ve=Ve||K,st=st||ie,(de!==x||ae!==w)&&(n.blendEquationSeparate(V[de],V[ae]),x=de,w=ae),(K!==y||ie!==E||Ve!==M||st!==P)&&(n.blendFuncSeparate(Fe[K],Fe[ie],Fe[Ve],Fe[st]),y=K,E=ie,M=Ve,P=st),v=D,S=!1}function De(D,de){D.side===Lr?Te(n.CULL_FACE):ye(n.CULL_FACE);let K=D.side===ti;de&&(K=!K),Le(K),D.blending===za&&D.transparent===!1?xe(Cs):xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ie=D.stencilWrite;u.setTest(ie),ie&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(D){T!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),T=D)}function q(D){D!==cC?(ye(n.CULL_FACE),D!==j&&(D===L0?n.cullFace(n.BACK):D===fC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),j=D}function ke(D){D!==z&&(J&&n.lineWidth(D),z=D)}function ze(D,de,K){D?(ye(n.POLYGON_OFFSET_FILL),(I!==de||F!==K)&&(n.polygonOffset(de,K),I=de,F=K)):Te(n.POLYGON_OFFSET_FILL)}function qe(D){D?ye(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Ke(D){D===void 0&&(D=n.TEXTURE0+k-1),W!==D&&(n.activeTexture(D),W=D)}function vt(D,de,K){K===void 0&&(W===null?K=n.TEXTURE0+k-1:K=W);let ie=C[K];ie===void 0&&(ie={type:void 0,texture:void 0},C[K]=ie),(ie.type!==D||ie.texture!==de)&&(W!==K&&(n.activeTexture(K),W=K),n.bindTexture(D,de||ve[D]),ie.type=D,ie.texture=de)}function b(){const D=C[W];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function A(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){ue.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function ce(D){re.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),re.copy(D))}function he(D,de){let K=h.get(de);K===void 0&&(K=new WeakMap,h.set(de,K));let ie=K.get(D);ie===void 0&&(ie=n.getUniformBlockIndex(de,D.name),K.set(D,ie))}function Ie(D,de){const ie=h.get(de).get(D);c.get(de)!==ie&&(n.uniformBlockBinding(de,ie,D.__bindingPointIndex),c.set(de,ie))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},W=null,C={},p={},g=new WeakMap,_=[],m=null,d=!1,v=null,x=null,y=null,E=null,w=null,M=null,P=null,S=!1,T=null,j=null,z=null,I=null,F=null,ue.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ye,disable:Te,bindFramebuffer:Be,drawBuffers:gt,useProgram:Ne,setBlending:xe,setMaterial:De,setFlipSided:Le,setCullFace:q,setLineWidth:ke,setPolygonOffset:ze,setScissorTest:qe,activeTexture:Ke,bindTexture:vt,unbindTexture:b,compressedTexImage2D:A,compressedTexImage3D:X,texImage2D:L,texImage3D:ee,updateUBOMapping:he,uniformBlockBinding:Ie,texStorage2D:oe,texStorage3D:Z,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:se,compressedTexSubImage3D:Ce,scissor:pe,viewport:ce,reset:Ge}}function SD(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,A){return d?new OffscreenCanvas(b,A):qf("canvas")}function x(b,A,X,te){let ne=1;if((b.width>te||b.height>te)&&(ne=te/Math.max(b.width,b.height)),ne<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=A?Yf:Math.floor,Ce=se(ne*b.width),oe=se(ne*b.height);_===void 0&&(_=v(Ce,oe));const Z=X?v(Ce,oe):_;return Z.width=Ce,Z.height=oe,Z.getContext("2d").drawImage(b,0,0,Ce,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ce+"x"+oe+")."),Z}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return cm(b.width)&&cm(b.height)}function E(b){return a?!1:b.wrapS!==Qi||b.wrapT!==Qi||b.minFilter!==zn&&b.minFilter!==Pi}function w(b,A){return b.generateMipmaps&&A&&b.minFilter!==zn&&b.minFilter!==Pi}function M(b){n.generateMipmap(b)}function P(b,A,X,te,ne=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=A;return A===n.RED&&(X===n.FLOAT&&(se=n.R32F),X===n.HALF_FLOAT&&(se=n.R16F),X===n.UNSIGNED_BYTE&&(se=n.R8)),A===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(se=n.R8UI),X===n.UNSIGNED_SHORT&&(se=n.R16UI),X===n.UNSIGNED_INT&&(se=n.R32UI),X===n.BYTE&&(se=n.R8I),X===n.SHORT&&(se=n.R16I),X===n.INT&&(se=n.R32I)),A===n.RG&&(X===n.FLOAT&&(se=n.RG32F),X===n.HALF_FLOAT&&(se=n.RG16F),X===n.UNSIGNED_BYTE&&(se=n.RG8)),A===n.RGBA&&(X===n.FLOAT&&(se=n.RGBA32F),X===n.HALF_FLOAT&&(se=n.RGBA16F),X===n.UNSIGNED_BYTE&&(se=te===Rt&&ne===!1?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)),(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(b,A,X){return w(b,X)===!0||b.isFramebufferTexture&&b.minFilter!==zn&&b.minFilter!==Pi?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function T(b){return b===zn||b===F0||b===ch?n.NEAREST:n.LINEAR}function j(b){const A=b.target;A.removeEventListener("dispose",j),I(A),A.isVideoTexture&&g.delete(A)}function z(b){const A=b.target;A.removeEventListener("dispose",z),k(A)}function I(b){const A=i.get(b);if(A.__webglInit===void 0)return;const X=b.source,te=m.get(X);if(te){const ne=te[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(b),Object.keys(te).length===0&&m.delete(X)}i.remove(b)}function F(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const X=b.source,te=m.get(X);delete te[A.__cacheKey],o.memory.textures--}function k(b){const A=b.texture,X=i.get(b),te=i.get(A);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(X.__webglFramebuffer[ne]))for(let se=0;se<X.__webglFramebuffer[ne].length;se++)n.deleteFramebuffer(X.__webglFramebuffer[ne][se]);else n.deleteFramebuffer(X.__webglFramebuffer[ne]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[ne])}else{if(Array.isArray(X.__webglFramebuffer))for(let ne=0;ne<X.__webglFramebuffer.length;ne++)n.deleteFramebuffer(X.__webglFramebuffer[ne]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,se=A.length;ne<se;ne++){const Ce=i.get(A[ne]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(A[ne])}i.remove(A),i.remove(b)}let J=0;function O(){J=0}function U(){const b=J;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),J+=1,b}function W(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function C(b,A){const X=i.get(b);if(b.isVideoTexture&&Ke(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(X,b,A);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+A)}function N(b,A){const X=i.get(b);if(b.version>0&&X.__version!==b.version){Be(X,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+A)}function H(b,A){const X=i.get(b);if(b.version>0&&X.__version!==b.version){Be(X,b,A);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+A)}function ue(b,A){const X=i.get(b);if(b.version>0&&X.__version!==b.version){gt(X,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+A)}const re={[am]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[lm]:n.MIRRORED_REPEAT},fe={[zn]:n.NEAREST,[F0]:n.NEAREST_MIPMAP_NEAREST,[ch]:n.NEAREST_MIPMAP_LINEAR,[Pi]:n.LINEAR,[zC]:n.LINEAR_MIPMAP_NEAREST,[Pu]:n.LINEAR_MIPMAP_LINEAR},ve={[JC]:n.NEVER,[oR]:n.ALWAYS,[eR]:n.LESS,[nR]:n.LEQUAL,[tR]:n.EQUAL,[sR]:n.GEQUAL,[iR]:n.GREATER,[rR]:n.NOTEQUAL};function ye(b,A,X){if(X?(n.texParameteri(b,n.TEXTURE_WRAP_S,re[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,re[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,re[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,fe[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,fe[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Qi||A.wrapT!==Qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==zn&&A.minFilter!==Pi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===zn||A.minFilter!==ch&&A.minFilter!==Pu||A.type===hs&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Lu&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Te(b,A){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",j));const te=A.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const se=W(A);if(se!==b.__cacheKey){ne[se]===void 0&&(ne[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[se].usedTimes++;const Ce=ne[b.__cacheKey];Ce!==void 0&&(ne[b.__cacheKey].usedTimes--,Ce.usedTimes===0&&F(A)),b.__cacheKey=se,b.__webglTexture=ne[se].texture}return X}function Be(b,A,X){let te=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=n.TEXTURE_3D);const ne=Te(b,A),se=A.source;t.bindTexture(te,b.__webglTexture,n.TEXTURE0+X);const Ce=i.get(se);if(se.version!==Ce.__version||ne===!0){t.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const oe=E(A)&&y(A.image)===!1;let Z=x(A.image,oe,!1,c);Z=vt(A,Z);const L=y(Z)||a,ee=s.convert(A.format,A.colorSpace);let pe=s.convert(A.type),ce=P(A.internalFormat,ee,pe,A.colorSpace,A.isVideoTexture);ye(te,A,L);let he;const Ie=A.mipmaps,Ge=a&&A.isVideoTexture!==!0,D=Ce.__version===void 0||ne===!0,de=S(A,Z,L);if(A.isDepthTexture)ce=n.DEPTH_COMPONENT,a?A.type===hs?ce=n.DEPTH_COMPONENT32F:A.type===ds?ce=n.DEPTH_COMPONENT24:A.type===go?ce=n.DEPTH24_STENCIL8:ce=n.DEPTH_COMPONENT16:A.type===hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===vo&&ce===n.DEPTH_COMPONENT&&A.type!==D_&&A.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ds,pe=s.convert(A.type)),A.format===nl&&ce===n.DEPTH_COMPONENT&&(ce=n.DEPTH_STENCIL,A.type!==go&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=go,pe=s.convert(A.type))),D&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,ce,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ce,Z.width,Z.height,0,ee,pe,null));else if(A.isDataTexture)if(Ie.length>0&&L){Ge&&D&&t.texStorage2D(n.TEXTURE_2D,de,ce,Ie[0].width,Ie[0].height);for(let K=0,ie=Ie.length;K<ie;K++)he=Ie[K],Ge?t.texSubImage2D(n.TEXTURE_2D,K,0,0,he.width,he.height,ee,pe,he.data):t.texImage2D(n.TEXTURE_2D,K,ce,he.width,he.height,0,ee,pe,he.data);A.generateMipmaps=!1}else Ge?(D&&t.texStorage2D(n.TEXTURE_2D,de,ce,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,ee,pe,Z.data)):t.texImage2D(n.TEXTURE_2D,0,ce,Z.width,Z.height,0,ee,pe,Z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ge&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ce,Ie[0].width,Ie[0].height,Z.depth);for(let K=0,ie=Ie.length;K<ie;K++)he=Ie[K],A.format!==Ji?ee!==null?Ge?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,Z.depth,ee,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ce,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,Z.depth,ee,pe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ce,he.width,he.height,Z.depth,0,ee,pe,he.data)}else{Ge&&D&&t.texStorage2D(n.TEXTURE_2D,de,ce,Ie[0].width,Ie[0].height);for(let K=0,ie=Ie.length;K<ie;K++)he=Ie[K],A.format!==Ji?ee!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(n.TEXTURE_2D,K,0,0,he.width,he.height,ee,pe,he.data):t.texImage2D(n.TEXTURE_2D,K,ce,he.width,he.height,0,ee,pe,he.data)}else if(A.isDataArrayTexture)Ge?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ce,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ee,pe,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,Z.width,Z.height,Z.depth,0,ee,pe,Z.data);else if(A.isData3DTexture)Ge?(D&&t.texStorage3D(n.TEXTURE_3D,de,ce,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ee,pe,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ce,Z.width,Z.height,Z.depth,0,ee,pe,Z.data);else if(A.isFramebufferTexture){if(D)if(Ge)t.texStorage2D(n.TEXTURE_2D,de,ce,Z.width,Z.height);else{let K=Z.width,ie=Z.height;for(let ae=0;ae<de;ae++)t.texImage2D(n.TEXTURE_2D,ae,ce,K,ie,0,ee,pe,null),K>>=1,ie>>=1}}else if(Ie.length>0&&L){Ge&&D&&t.texStorage2D(n.TEXTURE_2D,de,ce,Ie[0].width,Ie[0].height);for(let K=0,ie=Ie.length;K<ie;K++)he=Ie[K],Ge?t.texSubImage2D(n.TEXTURE_2D,K,0,0,ee,pe,he):t.texImage2D(n.TEXTURE_2D,K,ce,ee,pe,he);A.generateMipmaps=!1}else Ge?(D&&t.texStorage2D(n.TEXTURE_2D,de,ce,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee,pe,Z)):t.texImage2D(n.TEXTURE_2D,0,ce,ee,pe,Z);w(A,L)&&M(te),Ce.__version=se.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function gt(b,A,X){if(A.image.length!==6)return;const te=Te(b,A),ne=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+X);const se=i.get(ne);if(ne.version!==se.__version||te===!0){t.activeTexture(n.TEXTURE0+X),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,oe=A.image[0]&&A.image[0].isDataTexture,Z=[];for(let K=0;K<6;K++)!Ce&&!oe?Z[K]=x(A.image[K],!1,!0,u):Z[K]=oe?A.image[K].image:A.image[K],Z[K]=vt(A,Z[K]);const L=Z[0],ee=y(L)||a,pe=s.convert(A.format,A.colorSpace),ce=s.convert(A.type),he=P(A.internalFormat,pe,ce,A.colorSpace),Ie=a&&A.isVideoTexture!==!0,Ge=se.__version===void 0||te===!0;let D=S(A,L,ee);ye(n.TEXTURE_CUBE_MAP,A,ee);let de;if(Ce){Ie&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,he,L.width,L.height);for(let K=0;K<6;K++){de=Z[K].mipmaps;for(let ie=0;ie<de.length;ie++){const ae=de[ie];A.format!==Ji?pe!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,pe,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,he,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,pe,ce,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,he,ae.width,ae.height,0,pe,ce,ae.data)}}}else{de=A.mipmaps,Ie&&Ge&&(de.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,he,Z[0].width,Z[0].height));for(let K=0;K<6;K++)if(oe){Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Z[K].width,Z[K].height,pe,ce,Z[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,he,Z[K].width,Z[K].height,0,pe,ce,Z[K].data);for(let ie=0;ie<de.length;ie++){const Ve=de[ie].image[K].image;Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Ve.width,Ve.height,pe,ce,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,he,Ve.width,Ve.height,0,pe,ce,Ve.data)}}else{Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe,ce,Z[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,he,pe,ce,Z[K]);for(let ie=0;ie<de.length;ie++){const ae=de[ie];Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,pe,ce,ae.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,he,pe,ce,ae.image[K])}}}w(A,ee)&&M(n.TEXTURE_CUBE_MAP),se.__version=ne.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function Ne(b,A,X,te,ne,se){const Ce=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),Z=P(X.internalFormat,Ce,oe,X.colorSpace);if(!i.get(A).__hasExternalTextures){const ee=Math.max(1,A.width>>se),pe=Math.max(1,A.height>>se);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,Z,ee,pe,A.depth,0,Ce,oe,null):t.texImage2D(ne,se,Z,ee,pe,0,Ce,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),qe(A)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0,ze(A)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function V(b,A,X){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let te=n.DEPTH_COMPONENT16;if(X||qe(A)){const ne=A.depthTexture;ne&&ne.isDepthTexture&&(ne.type===hs?te=n.DEPTH_COMPONENT32F:ne.type===ds&&(te=n.DEPTH_COMPONENT24));const se=ze(A);qe(A)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,te,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,te,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const te=ze(A);X&&qe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,A.width,A.height):qe(A)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const te=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0;ne<te.length;ne++){const se=te[ne],Ce=s.convert(se.format,se.colorSpace),oe=s.convert(se.type),Z=P(se.internalFormat,Ce,oe,se.colorSpace),L=ze(A);X&&qe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,Z,A.width,A.height):qe(A)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,Z,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Z,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),C(A.depthTexture,0);const te=i.get(A.depthTexture).__webglTexture,ne=ze(A);if(A.depthTexture.format===vo)qe(A)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(A.depthTexture.format===nl)qe(A)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function xe(b){const A=i.get(b),X=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Fe(A.__webglFramebuffer,b)}else if(X){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]=n.createRenderbuffer(),V(A.__webglDepthbuffer[te],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),V(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,A,X){const te=i.get(b);A!==void 0&&Ne(te.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&xe(b)}function Le(b){const A=b.texture,X=i.get(b),te=i.get(A);b.addEventListener("dispose",z),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=A.version,o.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,Ce=y(b)||a;if(ne){X.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[oe]=[];for(let Z=0;Z<A.mipmaps.length;Z++)X.__webglFramebuffer[oe][Z]=n.createFramebuffer()}else X.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let oe=0;oe<A.mipmaps.length;oe++)X.__webglFramebuffer[oe]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const oe=b.texture;for(let Z=0,L=oe.length;Z<L;Z++){const ee=i.get(oe[Z]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&qe(b)===!1){const oe=se?A:[A];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Z=0;Z<oe.length;Z++){const L=oe[Z];X.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[Z]);const ee=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),ce=P(L.internalFormat,ee,pe,L.colorSpace,b.isXRRenderTarget===!0),he=ze(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ce,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,X.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),V(X.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ye(n.TEXTURE_CUBE_MAP,A,Ce);for(let oe=0;oe<6;oe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Z=0;Z<A.mipmaps.length;Z++)Ne(X.__webglFramebuffer[oe][Z],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Z);else Ne(X.__webglFramebuffer[oe],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(A,Ce)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const oe=b.texture;for(let Z=0,L=oe.length;Z<L;Z++){const ee=oe[Z],pe=i.get(ee);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),ye(n.TEXTURE_2D,ee,Ce),Ne(X.__webglFramebuffer,b,ee,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),w(ee,Ce)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,te.__webglTexture),ye(oe,A,Ce),a&&A.mipmaps&&A.mipmaps.length>0)for(let Z=0;Z<A.mipmaps.length;Z++)Ne(X.__webglFramebuffer[Z],b,A,n.COLOR_ATTACHMENT0,oe,Z);else Ne(X.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,oe,0);w(A,Ce)&&M(oe),t.unbindTexture()}b.depthBuffer&&xe(b)}function q(b){const A=y(b)||a,X=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,ne=X.length;te<ne;te++){const se=X[te];if(w(se,A)){const Ce=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(se).__webglTexture;t.bindTexture(Ce,oe),M(Ce),t.unbindTexture()}}}function ke(b){if(a&&b.samples>0&&qe(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],X=b.width,te=b.height;let ne=n.COLOR_BUFFER_BIT;const se=[],Ce=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(b),Z=b.isWebGLMultipleRenderTargets===!0;if(Z)for(let L=0;L<A.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let L=0;L<A.length;L++){se.push(n.COLOR_ATTACHMENT0+L),b.depthBuffer&&se.push(Ce);const ee=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ee===!1&&(b.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Z&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[L]),ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Z){const pe=i.get(A[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ne,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let L=0;L<A.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,oe.__webglColorRenderbuffer[L]);const ee=i.get(A[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function ze(b){return Math.min(h,b.samples)}function qe(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ke(b){const A=o.render.frame;g.get(b)!==A&&(g.set(b,A),b.update())}function vt(b,A){const X=b.colorSpace,te=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===um||X!==vr&&X!==yo&&(X===Rt||X===_d?a===!1?e.has("EXT_sRGB")===!0&&te===Ji?(b.format=um,b.minFilter=Pi,b.generateMipmaps=!1):A=eM.sRGBToLinear(A):(te!==Ji||ne!==bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=C,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=ue,this.rebindTextures=De,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=qe}const MD=0,qt=1;function ED(n,e,t){const i=t.isWebGL2;function r(s,o=yo){let a;const l=o===Rt||o===_d?qt:MD;if(s===bs)return n.UNSIGNED_BYTE;if(s===j1)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Y1)return n.UNSIGNED_SHORT_5_5_5_1;if(s===BC)return n.BYTE;if(s===HC)return n.SHORT;if(s===D_)return n.UNSIGNED_SHORT;if(s===X1)return n.INT;if(s===ds)return n.UNSIGNED_INT;if(s===hs)return n.FLOAT;if(s===Lu)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===VC)return n.ALPHA;if(s===Ji)return n.RGBA;if(s===GC)return n.LUMINANCE;if(s===WC)return n.LUMINANCE_ALPHA;if(s===vo)return n.DEPTH_COMPONENT;if(s===nl)return n.DEPTH_STENCIL;if(s===um)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===XC)return n.RED;if(s===q1)return n.RED_INTEGER;if(s===jC)return n.RG;if(s===$1)return n.RG_INTEGER;if(s===K1)return n.RGBA_INTEGER;if(s===fh||s===dh||s===hh||s===ph)if(l===qt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ph)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ph)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===k0||s===z0||s===B0||s===H0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===k0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===z0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===B0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===H0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===YC)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===V0||s===G0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===V0)return l===qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===G0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===W0||s===X0||s===j0||s===Y0||s===q0||s===$0||s===K0||s===Z0||s===Q0||s===J0||s===ev||s===tv||s===nv||s===iv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===W0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===X0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===j0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Y0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===q0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===K0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Z0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Q0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===J0)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ev)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tv)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nv)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===iv)return l===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mh||s===rv||s===sv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mh)return l===qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qC||s===ov||s===av||s===lv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ov)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===av)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===go?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class TD extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kc extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wD={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class AD extends gi{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:vo,c!==vo&&c!==nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===vo&&(i=ds),i===void 0&&c===nl&&(i=go),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class CD extends Fo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const v=[],x=[],y=new Li;y.layers.enable(1),y.viewport=new on;const E=new Li;E.layers.enable(2),E.viewport=new on;const w=[y,E],M=new TD;M.layers.enable(1),M.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let H=v[N];return H===void 0&&(H=new Fh,v[N]=H),H.getTargetRaySpace()},this.getControllerGrip=function(N){let H=v[N];return H===void 0&&(H=new Fh,v[N]=H),H.getGripSpace()},this.getHand=function(N){let H=v[N];return H===void 0&&(H=new Fh,v[N]=H),H.getHandSpace()};function T(N){const H=x.indexOf(N.inputSource);if(H===-1)return;const ue=v[H];ue!==void 0&&(ue.update(N.inputSource,N.frame,u||o),ue.dispatchEvent({type:N.type,data:N.inputSource}))}function j(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",z);for(let N=0;N<v.length;N++){const H=x[N];H!==null&&(x[N]=null,v[N].disconnect(H))}P=null,S=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,C.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",j),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:p}),d=new Lo(p.framebufferWidth,p.framebufferHeight,{format:Ji,type:bs,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,ue=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=_.stencil?nl:vo,ue=_.stencil?go:ds);const fe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),d=new Lo(f.textureWidth,f.textureHeight,{format:Ji,type:bs,depthTexture:new AD(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ve=e.properties.get(d);ve.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),C.setContext(r),C.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(N){for(let H=0;H<N.removed.length;H++){const ue=N.removed[H],re=x.indexOf(ue);re>=0&&(x[re]=null,v[re].disconnect(ue))}for(let H=0;H<N.added.length;H++){const ue=N.added[H];let re=x.indexOf(ue);if(re===-1){for(let ve=0;ve<v.length;ve++)if(ve>=x.length){x.push(ue),re=ve;break}else if(x[ve]===null){x[ve]=ue,re=ve;break}if(re===-1)break}const fe=v[re];fe&&fe.connect(ue)}}const I=new Y,F=new Y;function k(N,H,ue){I.setFromMatrixPosition(H.matrixWorld),F.setFromMatrixPosition(ue.matrixWorld);const re=I.distanceTo(F),fe=H.projectionMatrix.elements,ve=ue.projectionMatrix.elements,ye=fe[14]/(fe[10]-1),Te=fe[14]/(fe[10]+1),Be=(fe[9]+1)/fe[5],gt=(fe[9]-1)/fe[5],Ne=(fe[8]-1)/fe[0],V=(ve[8]+1)/ve[0],Fe=ye*Ne,xe=ye*V,De=re/(-Ne+V),Le=De*-Ne;H.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Le),N.translateZ(De),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const q=ye+De,ke=Te+De,ze=Fe-Le,qe=xe+(re-Le),Ke=Be*Te/ke*q,vt=gt*Te/ke*q;N.projectionMatrix.makePerspective(ze,qe,Ke,vt,q,ke),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function J(N,H){H===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(H.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;M.near=E.near=y.near=N.near,M.far=E.far=y.far=N.far,(P!==M.near||S!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,S=M.far);const H=N.parent,ue=M.cameras;J(M,H);for(let re=0;re<ue.length;re++)J(ue[re],H);ue.length===2?k(M,y,E):M.projectionMatrix.copy(y.projectionMatrix),O(N,M,H)};function O(N,H,ue){ue===null?N.matrix.copy(H.matrixWorld):(N.matrix.copy(ue.matrixWorld),N.matrix.invert(),N.matrix.multiply(H.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Du*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let U=null;function W(N,H){if(c=H.getViewerPose(u||o),g=H,c!==null){const ue=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let re=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let fe=0;fe<ue.length;fe++){const ve=ue[fe];let ye=null;if(p!==null)ye=p.getViewport(ve);else{const Be=h.getViewSubImage(f,ve);ye=Be.viewport,fe===0&&(e.setRenderTargetTextures(d,Be.colorTexture,f.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(d))}let Te=w[fe];Te===void 0&&(Te=new Li,Te.layers.enable(fe),Te.viewport=new on,w[fe]=Te),Te.matrix.fromArray(ve.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ve.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(ye.x,ye.y,ye.width,ye.height),fe===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Te)}}for(let ue=0;ue<v.length;ue++){const re=x[ue],fe=v[ue];re!==null&&fe!==void 0&&fe.update(re,H,u||o)}U&&U(N,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}const C=new dM;C.setAnimationLoop(W),this.setAnimationLoop=function(N){U=N},this.dispose=function(){}}}function RD(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,uM(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ti&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ti&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ti&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bD(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(v,E);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),E=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const P=y[w];if(p(P,w,E)===!0){const S=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let z=0;z<T.length;z++){const I=T[z],F=_(I);typeof I=="number"?(P.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,S+j,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=I.elements[0],P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=I.elements[0],P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=I.elements[0]):(I.toArray(P.__data,j),j+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y){const E=v.value;if(y[x]===void 0){if(typeof E=="number")y[x]=E;else{const w=Array.isArray(E)?E:[E],M=[];for(let P=0;P<w.length;P++)M.push(w[P].clone());y[x]=M}return!0}else if(typeof E=="number"){if(y[x]!==E)return y[x]=E,!0}else{const w=Array.isArray(y[x])?y[x]:[y[x]],M=Array.isArray(E)?E:[E];for(let P=0;P<w.length;P++){const S=w[P];if(S.equals(M[P])===!1)return S.copy(M[P]),!0}}return!1}function g(v){const x=v.uniforms;let y=0;const E=16;let w=0;for(let M=0,P=x.length;M<P;M++){const S=x[M],T={boundary:0,storage:0},j=Array.isArray(S.value)?S.value:[S.value];for(let z=0,I=j.length;z<I;z++){const F=j[z],k=_(F);T.boundary+=k.boundary,T.storage+=k.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,M>0){w=y%E;const z=E-w;w!==0&&z-T.boundary<0&&(y+=E-w,S.__offset=y)}y+=T.storage}return w=y%E,w>0&&(y+=E-w),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class vM{constructor(e={}){const{canvas:t=MR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=Rs,this.toneMappingExposure=1;const x=this;let y=!1,E=0,w=0,M=null,P=-1,S=null;const T=new on,j=new on;let z=null;const I=new pt(0);let F=0,k=t.width,J=t.height,O=1,U=null,W=null;const C=new on(0,0,k,J),N=new on(0,0,k,J);let H=!1;const ue=new I_;let re=!1,fe=!1,ve=null;const ye=new Qt,Te=new $e,Be=new Y,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return M===null?O:1}let V=i;function Fe(R,B){for(let $=0;$<R.length;$++){const G=R[$],Q=t.getContext(G,B);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${L_}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ie,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),V=Fe(B,R),V===null)throw Fe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xe,De,Le,q,ke,ze,qe,Ke,vt,b,A,X,te,ne,se,Ce,oe,Z,L,ee,pe,ce,he,Ie;function Ge(){xe=new zP(V),De=new UP(V,xe,e),xe.init(De),ce=new ED(V,xe,De),Le=new yD(V,xe,De),q=new VP(V),ke=new oD,ze=new SD(V,xe,Le,ke,De,ce,q),qe=new IP(x),Ke=new kP(x),vt=new QR(V,De),he=new LP(V,xe,vt,De),b=new BP(V,vt,q,he),A=new jP(V,b,vt,q),L=new XP(V,De,ze),Ce=new NP(ke),X=new sD(x,qe,Ke,xe,De,he,Ce),te=new RD(x,ke),ne=new lD,se=new pD(xe,De),Z=new PP(x,qe,Ke,Le,A,f,l),oe=new xD(x,A,De),Ie=new bD(V,q,De,Le),ee=new DP(V,xe,q,De),pe=new HP(V,xe,q,De),q.programs=X.programs,x.capabilities=De,x.extensions=xe,x.properties=ke,x.renderLists=ne,x.shadowMap=oe,x.state=Le,x.info=q}Ge();const D=new CD(x,V);this.xr=D,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(k,J,!1))},this.getSize=function(R){return R.set(k,J)},this.setSize=function(R,B,$=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,J=B,t.width=Math.floor(R*O),t.height=Math.floor(B*O),$===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(k*O,J*O).floor()},this.setDrawingBufferSize=function(R,B,$){k=R,J=B,O=$,t.width=Math.floor(R*$),t.height=Math.floor(B*$),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(C)},this.setViewport=function(R,B,$,G){R.isVector4?C.set(R.x,R.y,R.z,R.w):C.set(R,B,$,G),Le.viewport(T.copy(C).multiplyScalar(O).floor())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,B,$,G){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,B,$,G),Le.scissor(j.copy(N).multiplyScalar(O).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(R){Le.setScissorTest(H=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(R=!0,B=!0,$=!0){let G=0;if(R){let Q=!1;if(M!==null){const me=M.texture.format;Q=me===K1||me===$1||me===q1}if(Q){const me=M.texture.type,Me=me===bs||me===ds||me===D_||me===go||me===j1||me===Y1,be=Z.getClearColor(),Oe=Z.getClearAlpha(),je=be.r,Re=be.g,Pe=be.b;Me?(p[0]=je,p[1]=Re,p[2]=Pe,p[3]=Oe,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=je,g[1]=Re,g[2]=Pe,g[3]=Oe,V.clearBufferiv(V.COLOR,0,g))}else G|=V.COLOR_BUFFER_BIT}B&&(G|=V.DEPTH_BUFFER_BIT),$&&(G|=V.STENCIL_BUFFER_BIT),V.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ne.dispose(),se.dispose(),ke.dispose(),qe.dispose(),Ke.dispose(),A.dispose(),he.dispose(),Ie.dispose(),X.dispose(),D.dispose(),D.removeEventListener("sessionstart",ge),D.removeEventListener("sessionend",We),ve&&(ve.dispose(),ve=null),Qe.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=q.autoReset,B=oe.enabled,$=oe.autoUpdate,G=oe.needsUpdate,Q=oe.type;Ge(),q.autoReset=R,oe.enabled=B,oe.autoUpdate=$,oe.needsUpdate=G,oe.type=Q}function ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const B=R.target;B.removeEventListener("dispose",ae),Ve(B)}function Ve(R){st(R),ke.remove(R)}function st(R){const B=ke.get(R).programs;B!==void 0&&(B.forEach(function($){X.releaseProgram($)}),R.isShaderMaterial&&X.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,$,G,Q,me){B===null&&(B=gt);const Me=Q.isMesh&&Q.matrixWorld.determinant()<0,be=un(R,B,$,G,Q);Le.setMaterial(G,Me);let Oe=$.index,je=1;if(G.wireframe===!0){if(Oe=b.getWireframeAttribute($),Oe===void 0)return;je=2}const Re=$.drawRange,Pe=$.attributes.position;let ct=Re.start*je,Mt=(Re.start+Re.count)*je;me!==null&&(ct=Math.max(ct,me.start*je),Mt=Math.min(Mt,(me.start+me.count)*je)),Oe!==null?(ct=Math.max(ct,0),Mt=Math.min(Mt,Oe.count)):Pe!=null&&(ct=Math.max(ct,0),Mt=Math.min(Mt,Pe.count));const Rn=Mt-ct;if(Rn<0||Rn===1/0)return;he.setup(Q,G,be,$,Oe);let bn,dt=ee;if(Oe!==null&&(bn=vt.get(Oe),dt=pe,dt.setIndex(bn)),Q.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*Ne()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(Q.isLine){let Ye=G.linewidth;Ye===void 0&&(Ye=1),Le.setLineWidth(Ye*Ne()),Q.isLineSegments?dt.setMode(V.LINES):Q.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else Q.isPoints?dt.setMode(V.POINTS):Q.isSprite&&dt.setMode(V.TRIANGLES);if(Q.isInstancedMesh)dt.renderInstances(ct,Rn,Q.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Yr=Math.min($.instanceCount,Ye);dt.renderInstances(ct,Rn,Yr)}else dt.render(ct,Rn)},this.compile=function(R,B){function $(G,Q,me){G.transparent===!0&&G.side===Lr&&G.forceSinglePass===!1?(G.side=ti,G.needsUpdate=!0,Je(G,Q,me),G.side=Is,G.needsUpdate=!0,Je(G,Q,me),G.side=Lr):Je(G,Q,me)}m=se.get(R),m.init(),v.push(m),R.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights),R.traverse(function(G){const Q=G.material;if(Q)if(Array.isArray(Q))for(let me=0;me<Q.length;me++){const Me=Q[me];$(Me,R,G)}else $(Q,R,G)}),v.pop(),m=null};let ot=null;function Ue(R){ot&&ot(R)}function ge(){Qe.stop()}function We(){Qe.start()}const Qe=new dM;Qe.setAnimationLoop(Ue),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(R){ot=R,D.setAnimationLoop(R),R===null?Qe.stop():Qe.start()},D.addEventListener("sessionstart",ge),D.addEventListener("sessionend",We),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(B),B=D.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,B,M),m=se.get(R,v.length),m.init(),v.push(m),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ue.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,re=Ce.init(this.clippingPlanes,fe),_=ne.get(R,d.length),_.init(),d.push(_),Se(R,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(U,W),this.info.render.frame++,re===!0&&Ce.beginShadows();const $=m.state.shadowsArray;if(oe.render($,R,B),re===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(_,R),m.setupLights(x._useLegacyLights),B.isArrayCamera){const G=B.cameras;for(let Q=0,me=G.length;Q<me;Q++){const Me=G[Q];it(_,R,Me,Me.viewport)}}else it(_,R,B);M!==null&&(ze.updateMultisampleRenderTarget(M),ze.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(x,R,B),he.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Se(R,B,$,G){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){G&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Me=A.update(R),be=R.material;be.visible&&_.push(R,Me,be,$,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){const Me=A.update(R),be=R.material;if(G&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Be.copy(Me.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(be)){const Oe=Me.groups;for(let je=0,Re=Oe.length;je<Re;je++){const Pe=Oe[je],ct=be[Pe.materialIndex];ct&&ct.visible&&_.push(R,Me,ct,$,Be.z,Pe)}}else be.visible&&_.push(R,Me,be,$,Be.z,null)}}const me=R.children;for(let Me=0,be=me.length;Me<be;Me++)Se(me[Me],B,$,G)}function it(R,B,$,G){const Q=R.opaque,me=R.transmissive,Me=R.transparent;m.setupLightsView($),re===!0&&Ce.setGlobalState(x.clippingPlanes,$),me.length>0&&He(Q,me,B,$),G&&Le.viewport(T.copy(G)),Q.length>0&&Xe(Q,B,$),me.length>0&&Xe(me,B,$),Me.length>0&&Xe(Me,B,$),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function He(R,B,$,G){const Q=De.isWebGL2;ve===null&&(ve=new Lo(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Lu:bs,minFilter:Pu,samples:Q?4:0})),x.getDrawingBufferSize(Te),Q?ve.setSize(Te.x,Te.y):ve.setSize(Yf(Te.x),Yf(Te.y));const me=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(I),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();const Me=x.toneMapping;x.toneMapping=Rs,Xe(R,$,G),ze.updateMultisampleRenderTarget(ve),ze.updateRenderTargetMipmap(ve);let be=!1;for(let Oe=0,je=B.length;Oe<je;Oe++){const Re=B[Oe],Pe=Re.object,ct=Re.geometry,Mt=Re.material,Rn=Re.group;if(Mt.side===Lr&&Pe.layers.test(G.layers)){const bn=Mt.side;Mt.side=ti,Mt.needsUpdate=!0,zt(Pe,$,G,ct,Mt,Rn),Mt.side=bn,Mt.needsUpdate=!0,be=!0}}be===!0&&(ze.updateMultisampleRenderTarget(ve),ze.updateRenderTargetMipmap(ve)),x.setRenderTarget(me),x.setClearColor(I,F),x.toneMapping=Me}function Xe(R,B,$){const G=B.isScene===!0?B.overrideMaterial:null;for(let Q=0,me=R.length;Q<me;Q++){const Me=R[Q],be=Me.object,Oe=Me.geometry,je=G===null?Me.material:G,Re=Me.group;be.layers.test($.layers)&&zt(be,B,$,Oe,je,Re)}}function zt(R,B,$,G,Q,me){R.onBeforeRender(x,B,$,G,Q,me),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(x,B,$,G,R,me),Q.transparent===!0&&Q.side===Lr&&Q.forceSinglePass===!1?(Q.side=ti,Q.needsUpdate=!0,x.renderBufferDirect($,B,G,Q,R,me),Q.side=Is,Q.needsUpdate=!0,x.renderBufferDirect($,B,G,Q,R,me),Q.side=Lr):x.renderBufferDirect($,B,G,Q,R,me),R.onAfterRender(x,B,$,G,Q,me)}function Je(R,B,$){B.isScene!==!0&&(B=gt);const G=ke.get(R),Q=m.state.lights,me=m.state.shadowsArray,Me=Q.state.version,be=X.getParameters(R,Q.state,me,B,$),Oe=X.getProgramCacheKey(be);let je=G.programs;G.environment=R.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(R.isMeshStandardMaterial?Ke:qe).get(R.envMap||G.environment),je===void 0&&(R.addEventListener("dispose",ae),je=new Map,G.programs=je);let Re=je.get(Oe);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===Me)return At(R,be),Re}else be.uniforms=X.getUniforms(R),R.onBuild($,be,x),R.onBeforeCompile(be,x),Re=X.acquireProgram(be,Oe),je.set(Oe,Re),G.uniforms=be.uniforms;const Pe=G.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=Ce.uniform),At(R,be),G.needsLights=St(R),G.lightsStateVersion=Me,G.needsLights&&(Pe.ambientLightColor.value=Q.state.ambient,Pe.lightProbe.value=Q.state.probe,Pe.directionalLights.value=Q.state.directional,Pe.directionalLightShadows.value=Q.state.directionalShadow,Pe.spotLights.value=Q.state.spot,Pe.spotLightShadows.value=Q.state.spotShadow,Pe.rectAreaLights.value=Q.state.rectArea,Pe.ltc_1.value=Q.state.rectAreaLTC1,Pe.ltc_2.value=Q.state.rectAreaLTC2,Pe.pointLights.value=Q.state.point,Pe.pointLightShadows.value=Q.state.pointShadow,Pe.hemisphereLights.value=Q.state.hemi,Pe.directionalShadowMap.value=Q.state.directionalShadowMap,Pe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Pe.spotShadowMap.value=Q.state.spotShadowMap,Pe.spotLightMatrix.value=Q.state.spotLightMatrix,Pe.spotLightMap.value=Q.state.spotLightMap,Pe.pointShadowMap.value=Q.state.pointShadowMap,Pe.pointShadowMatrix.value=Q.state.pointShadowMatrix);const ct=Re.getUniforms(),Mt=uf.seqWithValue(ct.seq,Pe);return G.currentProgram=Re,G.uniformsList=Mt,Re}function At(R,B){const $=ke.get(R);$.outputColorSpace=B.outputColorSpace,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function un(R,B,$,G,Q){B.isScene!==!0&&(B=gt),ze.resetTextureUnits();const me=B.fog,Me=G.isMeshStandardMaterial?B.environment:null,be=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:vr,Oe=(G.isMeshStandardMaterial?Ke:qe).get(G.envMap||Me),je=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Re=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Mt=!!$.morphAttributes.color;let Rn=Rs;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Rn=x.toneMapping);const bn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=bn!==void 0?bn.length:0,Ye=ke.get(G),Yr=m.state.lights;if(re===!0&&(fe===!0||R!==S)){const ii=R===S&&G.id===P;Ce.setState(G,R,ii)}let xt=!1;G.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Yr.state.version||Ye.outputColorSpace!==be||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Q.isInstancedMesh&&Ye.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ye.instancingColor===!1&&Q.instanceColor!==null||Ye.envMap!==Oe||G.fog===!0&&Ye.fog!==me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ce.numPlanes||Ye.numIntersection!==Ce.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==Re||Ye.morphTargets!==Pe||Ye.morphNormals!==ct||Ye.morphColors!==Mt||Ye.toneMapping!==Rn||De.isWebGL2===!0&&Ye.morphTargetsCount!==dt)&&(xt=!0):(xt=!0,Ye.__version=G.version);let Hs=Ye.currentProgram;xt===!0&&(Hs=Je(G,B,Q));let z_=!1,ul=!1,xd=!1;const Pn=Hs.getUniforms(),Vs=Ye.uniforms;if(Le.useProgram(Hs.program)&&(z_=!0,ul=!0,xd=!0),G.id!==P&&(P=G.id,ul=!0),z_||S!==R){Pn.setValue(V,"projectionMatrix",R.projectionMatrix),Pn.setValue(V,"viewMatrix",R.matrixWorldInverse);const ii=Pn.map.cameraPosition;ii!==void 0&&ii.setValue(V,Be.setFromMatrixPosition(R.matrixWorld)),De.logarithmicDepthBuffer&&Pn.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pn.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,ul=!0,xd=!0)}if(Q.isSkinnedMesh){Pn.setOptional(V,Q,"bindMatrix"),Pn.setOptional(V,Q,"bindMatrixInverse");const ii=Q.skeleton;ii&&(De.floatVertexTextures?(ii.boneTexture===null&&ii.computeBoneTexture(),Pn.setValue(V,"boneTexture",ii.boneTexture,ze),Pn.setValue(V,"boneTextureSize",ii.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yd=$.morphAttributes;if((yd.position!==void 0||yd.normal!==void 0||yd.color!==void 0&&De.isWebGL2===!0)&&L.update(Q,$,Hs),(ul||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,Pn.setValue(V,"receiveShadow",Q.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vs.envMap.value=Oe,Vs.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ul&&(Pn.setValue(V,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Yt(Vs,xd),me&&G.fog===!0&&te.refreshFogUniforms(Vs,me),te.refreshMaterialUniforms(Vs,G,O,J,ve),uf.upload(V,Ye.uniformsList,Vs,ze)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(uf.upload(V,Ye.uniformsList,Vs,ze),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pn.setValue(V,"center",Q.center),Pn.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Pn.setValue(V,"normalMatrix",Q.normalMatrix),Pn.setValue(V,"modelMatrix",Q.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ii=G.uniformsGroups;for(let Sd=0,xM=ii.length;Sd<xM;Sd++)if(De.isWebGL2){const B_=ii[Sd];Ie.update(B_,Hs),Ie.bind(B_,Hs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hs}function Yt(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function St(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,B,$){ke.get(R.texture).__webglTexture=B,ke.get(R.depthTexture).__webglTexture=$;const G=ke.get(R);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=$===void 0,G.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,B){const $=ke.get(R);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,$=0){M=R,E=B,w=$;let G=!0,Q=null,me=!1,Me=!1;if(R){const Oe=ke.get(R);Oe.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(V.FRAMEBUFFER,null),G=!1):Oe.__webglFramebuffer===void 0?ze.setupRenderTarget(R):Oe.__hasExternalTextures&&ze.rebindTextures(R,ke.get(R.texture).__webglTexture,ke.get(R.depthTexture).__webglTexture);const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Me=!0);const Re=ke.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Re[B])?Q=Re[B][$]:Q=Re[B],me=!0):De.isWebGL2&&R.samples>0&&ze.useMultisampledRTT(R)===!1?Q=ke.get(R).__webglMultisampledFramebuffer:Array.isArray(Re)?Q=Re[$]:Q=Re,T.copy(R.viewport),j.copy(R.scissor),z=R.scissorTest}else T.copy(C).multiplyScalar(O).floor(),j.copy(N).multiplyScalar(O).floor(),z=H;if(Le.bindFramebuffer(V.FRAMEBUFFER,Q)&&De.drawBuffers&&G&&Le.drawBuffers(R,Q),Le.viewport(T),Le.scissor(j),Le.setScissorTest(z),me){const Oe=ke.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,$)}else if(Me){const Oe=ke.get(R.texture),je=B||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,$||0,je)}P=-1},this.readRenderTargetPixels=function(R,B,$,G,Q,me,Me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ke.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){Le.bindFramebuffer(V.FRAMEBUFFER,be);try{const Oe=R.texture,je=Oe.format,Re=Oe.type;if(je!==Ji&&ce.convert(je)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===Lu&&(xe.has("EXT_color_buffer_half_float")||De.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Re!==bs&&ce.convert(Re)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===hs&&(De.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-G&&$>=0&&$<=R.height-Q&&V.readPixels(B,$,G,Q,ce.convert(je),ce.convert(Re),me)}finally{const Oe=M!==null?ke.get(M).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(R,B,$=0){const G=Math.pow(2,-$),Q=Math.floor(B.image.width*G),me=Math.floor(B.image.height*G);ze.setTexture2D(B,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,R.x,R.y,Q,me),Le.unbindTexture()},this.copyTextureToTexture=function(R,B,$,G=0){const Q=B.image.width,me=B.image.height,Me=ce.convert($.format),be=ce.convert($.type);ze.setTexture2D($,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,G,R.x,R.y,Q,me,Me,be,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,G,R.x,R.y,B.mipmaps[0].width,B.mipmaps[0].height,Me,B.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,G,R.x,R.y,Me,be,B.image),G===0&&$.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(R,B,$,G,Q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=R.max.x-R.min.x+1,Me=R.max.y-R.min.y+1,be=R.max.z-R.min.z+1,Oe=ce.convert(G.format),je=ce.convert(G.type);let Re;if(G.isData3DTexture)ze.setTexture3D(G,0),Re=V.TEXTURE_3D;else if(G.isDataArrayTexture)ze.setTexture2DArray(G,0),Re=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);const Pe=V.getParameter(V.UNPACK_ROW_LENGTH),ct=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Mt=V.getParameter(V.UNPACK_SKIP_PIXELS),Rn=V.getParameter(V.UNPACK_SKIP_ROWS),bn=V.getParameter(V.UNPACK_SKIP_IMAGES),dt=$.isCompressedTexture?$.mipmaps[0]:$.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?V.texSubImage3D(Re,Q,B.x,B.y,B.z,me,Me,be,Oe,je,dt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Re,Q,B.x,B.y,B.z,me,Me,be,Oe,dt.data)):V.texSubImage3D(Re,Q,B.x,B.y,B.z,me,Me,be,Oe,je,dt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Pe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ct),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Mt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Rn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,bn),Q===0&&G.generateMipmaps&&V.generateMipmap(Re),Le.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ze.setTextureCube(R,0):R.isData3DTexture?ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ze.setTexture2DArray(R,0):ze.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){E=0,w=0,M=null,Le.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Or}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?xo:Z1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xo?Rt:vr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class PD extends vM{}PD.prototype.isWebGL1Renderer=!0;class LD extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class k_ extends Bs{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new Y,h=new Y,f=new Y;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),c.x=e*Math.cos(_),c.y=e*Math.sin(_),f.subVectors(h,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new _r(a,3)),this.setAttribute("normal",new _r(l,3)),this.setAttribute("uv",new _r(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new k_(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class DD extends Bu{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q1,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UD extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kh=new Qt,qv=new Y,$v=new Y;class ND{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new I_,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qv.setFromMatrixPosition(e.matrixWorld),t.position.copy(qv),$v.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($v),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ID extends ND{constructor(){super(new hM(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OD extends UD{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new ID}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kv{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:L_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=L_);const Zv={type:"change"},zh={type:"start"},Qv={type:"end"},zc=new iM,Jv=new ns,FD=Math.cos(70*SR.DEG2RAD);class kD extends Fo{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vo.ROTATE,MIDDLE:Vo.DOLLY,RIGHT:Vo.PAN},this.touches={ONE:Go.ROTATE,TWO:Go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",A),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Zv),i.update(),s=r.NONE},this.update=function(){const L=new Y,ee=new Do().setFromUnitVectors(e.up,new Y(0,1,0)),pe=ee.clone().invert(),ce=new Y,he=new Do,Ie=new Y,Ge=2*Math.PI;return function(de=null){const K=i.object.position;L.copy(K).sub(i.target),L.applyQuaternion(ee),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&j(S(de)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ie=i.minAzimuthAngle,ae=i.maxAzimuthAngle;isFinite(ie)&&isFinite(ae)&&(ie<-Math.PI?ie+=Ge:ie>Math.PI&&(ie-=Ge),ae<-Math.PI?ae+=Ge:ae>Math.PI&&(ae-=Ge),ie<=ae?a.theta=Math.max(ie,Math.min(ae,a.theta)):a.theta=a.theta>(ie+ae)/2?Math.max(ie,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*u),L.setFromSpherical(a),L.applyQuaternion(pe),K.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let Ve=!1;if(i.zoomToCursor&&w){let st=null;if(i.object.isPerspectiveCamera){const ot=L.length();st=W(ot*u);const Ue=ot-st;i.object.position.addScaledVector(y,Ue),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ot=new Y(E.x,E.y,0);ot.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ve=!0;const Ue=new Y(E.x,E.y,0);Ue.unproject(i.object),i.object.position.sub(Ue).add(ot),i.object.updateMatrixWorld(),st=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;st!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(st).add(i.object.position):(zc.origin.copy(i.object.position),zc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(zc.direction))<FD?e.lookAt(i.target):(Jv.setFromNormalAndCoplanarPoint(i.object.up,i.target),zc.intersectPlane(Jv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ve=!0);return u=1,w=!1,Ve||ce.distanceToSquared(i.object.position)>o||8*(1-he.dot(i.object.quaternion))>o||Ie.distanceToSquared(i.target)>0?(i.dispatchEvent(Zv),ce.copy(i.object.position),he.copy(i.object.quaternion),Ie.copy(i.target),Ve=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ne),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",qe),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",ze),i.domElement.removeEventListener("pointerup",qe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",A),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Kv,l=new Kv;let u=1;const c=new Y,h=new $e,f=new $e,p=new $e,g=new $e,_=new $e,m=new $e,d=new $e,v=new $e,x=new $e,y=new Y,E=new $e;let w=!1;const M=[],P={};function S(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function j(L){l.theta-=L}function z(L){l.phi-=L}const I=function(){const L=new Y;return function(pe,ce){L.setFromMatrixColumn(ce,0),L.multiplyScalar(-pe),c.add(L)}}(),F=function(){const L=new Y;return function(pe,ce){i.screenSpacePanning===!0?L.setFromMatrixColumn(ce,1):(L.setFromMatrixColumn(ce,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(pe),c.add(L)}}(),k=function(){const L=new Y;return function(pe,ce){const he=i.domElement;if(i.object.isPerspectiveCamera){const Ie=i.object.position;L.copy(Ie).sub(i.target);let Ge=L.length();Ge*=Math.tan(i.object.fov/2*Math.PI/180),I(2*pe*Ge/he.clientHeight,i.object.matrix),F(2*ce*Ge/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(pe*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),F(ce*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(L){if(!i.zoomToCursor)return;w=!0;const ee=i.domElement.getBoundingClientRect(),pe=L.clientX-ee.left,ce=L.clientY-ee.top,he=ee.width,Ie=ee.height;E.x=pe/he*2-1,E.y=-(ce/Ie)*2+1,y.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function W(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function C(L){h.set(L.clientX,L.clientY)}function N(L){U(L),d.set(L.clientX,L.clientY)}function H(L){g.set(L.clientX,L.clientY)}function ue(L){f.set(L.clientX,L.clientY),p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ee=i.domElement;j(2*Math.PI*p.x/ee.clientHeight),z(2*Math.PI*p.y/ee.clientHeight),h.copy(f),i.update()}function re(L){v.set(L.clientX,L.clientY),x.subVectors(v,d),x.y>0?J(T()):x.y<0&&O(T()),d.copy(v),i.update()}function fe(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),k(m.x,m.y),g.copy(_),i.update()}function ve(L){U(L),L.deltaY<0?O(T()):L.deltaY>0&&J(T()),i.update()}function ye(L){let ee=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),ee=!0;break}ee&&(L.preventDefault(),i.update())}function Te(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),ee=.5*(M[0].pageY+M[1].pageY);h.set(L,ee)}}function Be(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),ee=.5*(M[0].pageY+M[1].pageY);g.set(L,ee)}}function gt(){const L=M[0].pageX-M[1].pageX,ee=M[0].pageY-M[1].pageY,pe=Math.sqrt(L*L+ee*ee);d.set(0,pe)}function Ne(){i.enableZoom&&gt(),i.enablePan&&Be()}function V(){i.enableZoom&&gt(),i.enableRotate&&Te()}function Fe(L){if(M.length==1)f.set(L.pageX,L.pageY);else{const pe=Z(L),ce=.5*(L.pageX+pe.x),he=.5*(L.pageY+pe.y);f.set(ce,he)}p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ee=i.domElement;j(2*Math.PI*p.x/ee.clientHeight),z(2*Math.PI*p.y/ee.clientHeight),h.copy(f)}function xe(L){if(M.length===1)_.set(L.pageX,L.pageY);else{const ee=Z(L),pe=.5*(L.pageX+ee.x),ce=.5*(L.pageY+ee.y);_.set(pe,ce)}m.subVectors(_,g).multiplyScalar(i.panSpeed),k(m.x,m.y),g.copy(_)}function De(L){const ee=Z(L),pe=L.pageX-ee.x,ce=L.pageY-ee.y,he=Math.sqrt(pe*pe+ce*ce);v.set(0,he),x.set(0,Math.pow(v.y/d.y,i.zoomSpeed)),J(x.y),d.copy(v)}function Le(L){i.enableZoom&&De(L),i.enablePan&&xe(L)}function q(L){i.enableZoom&&De(L),i.enableRotate&&Fe(L)}function ke(L){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",ze),i.domElement.addEventListener("pointerup",qe)),se(L),L.pointerType==="touch"?X(L):Ke(L))}function ze(L){i.enabled!==!1&&(L.pointerType==="touch"?te(L):vt(L))}function qe(L){Ce(L),M.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",ze),i.domElement.removeEventListener("pointerup",qe)),i.dispatchEvent(Qv),s=r.NONE}function Ke(L){let ee;switch(L.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Vo.DOLLY:if(i.enableZoom===!1)return;N(L),s=r.DOLLY;break;case Vo.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;H(L),s=r.PAN}else{if(i.enableRotate===!1)return;C(L),s=r.ROTATE}break;case Vo.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;C(L),s=r.ROTATE}else{if(i.enablePan===!1)return;H(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zh)}function vt(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ue(L);break;case r.DOLLY:if(i.enableZoom===!1)return;re(L);break;case r.PAN:if(i.enablePan===!1)return;fe(L);break}}function b(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(zh),ve(L),i.dispatchEvent(Qv))}function A(L){i.enabled===!1||i.enablePan===!1||ye(L)}function X(L){switch(oe(L),M.length){case 1:switch(i.touches.ONE){case Go.ROTATE:if(i.enableRotate===!1)return;Te(),s=r.TOUCH_ROTATE;break;case Go.PAN:if(i.enablePan===!1)return;Be(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Go.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ne(),s=r.TOUCH_DOLLY_PAN;break;case Go.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;V(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zh)}function te(L){switch(oe(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Fe(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;q(L),i.update();break;default:s=r.NONE}}function ne(L){i.enabled!==!1&&L.preventDefault()}function se(L){M.push(L)}function Ce(L){delete P[L.pointerId];for(let ee=0;ee<M.length;ee++)if(M[ee].pointerId==L.pointerId){M.splice(ee,1);return}}function oe(L){let ee=P[L.pointerId];ee===void 0&&(ee=new $e,P[L.pointerId]=ee),ee.set(L.pageX,L.pageY)}function Z(L){const ee=L.pointerId===M[0].pointerId?M[1]:M[0];return P[ee.pointerId]}i.domElement.addEventListener("contextmenu",ne),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",qe),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}const zD="_canvas_9tqr2_1",BD={canvas:zD},HD=()=>{const n=Ct.useRef(null);return Ct.useEffect(()=>{const e=n.current,t=new LD,i=new Li(75,1,.1,1e3),r=new vM({antialias:!0,alpha:!0}),s=()=>{const{width:f,height:p}=e.getBoundingClientRect();e.width=f,e.height=p,i.aspect=f/p,i.updateProjectionMatrix(),r.setSize(f,p)},o=new kD(i,r.domElement);s(),window.addEventListener("resize",s),r.setSize(e.width,e.height),e.appendChild(r.domElement);const a=new k_,l=new DD({color:16777215,wireframe:!0}),u=new Fr(a,l);u.scale.set(1.2,1.2,1.2),t.add(u);const c=new OD({color:1048575},10);c.position.set(2,2,0),t.add(c),i.position.z=5;const h=()=>{requestAnimationFrame(h),u.rotation.x+=.01,u.rotation.y+=.01,o.update(),r.render(t,i)};return h(),()=>{window.removeEventListener("resize",s)}},[]),Ee.jsx("div",{className:` ${BD.canvas}`,ref:n})},VD=()=>{const n=Ct.useRef(null),e=Ct.useRef(null),t=Ct.useRef(null),i=Ct.useRef(null),r=Ct.useRef(null),s=Ct.useRef(null),o=Ct.useRef(null),a=Ct.useRef(null),l=Ct.useRef(null);return Ct.useEffect(()=>{Co.registerPlugin(nt);const u=window.matchMedia("(max-width: 820px)").matches,c=Co.timeline({scrollTrigger:{trigger:".section",markers:!1,start:`${u?"40%":"30%"} 90%`,end:`${u?"70%":"90%"} 20%`,scrub:1,toggleActions:"play none none none"}});return u?(c.to(n.current,{y:"100%",direction:1},2),c.to(e.current,{y:"100%",direction:1},2.5),c.to(t.current,{y:"100%",direction:1},3),c.to(i.current,{y:"100%",direction:1},3.5),c.to(o.current,{opacity:1,duration:1},3),c.to(l.current,{width:"90%",top:"60%",height:"70%",duration:2},4),c.to(r.current,{opacity:1,duration:.8,ease:"none"},.6),c.to(s.current,{opacity:1,duration:1,ease:"none"},0)):(c.to(n.current,{y:"100%",direction:1},2),c.to(e.current,{y:"100%",direction:1},2.5),c.to(t.current,{y:"100%",direction:1},3),c.to(i.current,{y:"100%",direction:1},3.5),c.to(o.current,{opacity:1,duration:1},3),c.to(l.current,{width:"90%",top:"85%",borderRadius:10,duration:2},4),c.to(r.current,{opacity:1,duration:.8,ease:"none"},.6),c.to(s.current,{opacity:1,duration:1,ease:"none"},0)),()=>{c.kill(),nt.getAll().forEach(h=>{h.kill()})}},[]),Ee.jsxs("div",{className:`section ${ri.container}`,children:[Ee.jsxs("div",{className:ri.leftContent,ref:s,children:[Ee.jsxs("div",{style:{width:"100%"},ref:a,children:[Ee.jsx("div",{className:ri.parent,children:Ee.jsx("div",{className:ri.rectangle,ref:n,children:"JAVA"})}),Ee.jsx("div",{className:ri.parent,children:Ee.jsx("div",{className:ri.rectangle,ref:e,children:"JAVASCRIPT"})}),Ee.jsx("div",{className:ri.parent,children:Ee.jsx("div",{className:ri.rectangle,ref:t,children:"REACT"})}),Ee.jsx("div",{className:ri.parent,children:Ee.jsx("div",{className:ri.rectangle,ref:i,children:"THREE"})})]}),Ee.jsx("p",{ref:o,className:ri.Parragraph,children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis laborum molestiae placeat voluptatum animi at ex quos doloribus mollitia adipisci?"})]}),Ee.jsxs("div",{className:ri.rightContent,ref:r,children:[Ee.jsxs("div",{className:ri.threeContent,ref:l,children:["NO LIMIT TO SHOW ",Ee.jsx("br",{}),"YOUR 3D CONTENT"]}),Ee.jsx(HD,{})]})]})};const GD="/PortRepo/assets/img-f116dd65.jpg";Co.registerPlugin(nt);function WD(){const n=Ct.useRef(null),e=Ct.useRef(null),[t,i]=Ct.useState(window.innerWidth),r=()=>{i(window.innerWidth)};return Ct.useEffect(()=>{function s(a){const l=[],u=n.current;for(let c=0;c<u.innerText.length;c++){const h=document.createElement("div");u.innerText[c]===" "?h.innerHTML="&nbsp;":h.textContent=u.innerText[c],l.push(h)}u.innerHTML="",l.forEach(c=>{u.appendChild(c)}),Co.fromTo(`${a} div`,{opacity:0,y:30},{duration:1,opacity:1,y:0,stagger:.02,scrollTrigger:{trigger:a,start:"top 70%",toggleActions:"play pause none none",end:"90% 70%",pinSpacing:!0,scrub:.5}},-1)}const o=Co.timeline({scrollTrigger:{trigger:e.current,start:"10% 80%",end:"90% 70%",scrub:.8}});return o.to(".box",{width:`${t?"95%":"40%"}`,duration:1},.5),o.fromTo(".BoxWrapperContent",{opacity:0,x:0},{opacity:1,x:`${t?"0":"100"}`,duration:1},.8),s("#text-anim"),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),Ee.jsxs("div",{className:"container",ref:e,children:[Ee.jsx("h1",{ref:n,id:"text-anim",children:"NOW I AM JUST USING THIS FOR TESTING"}),Ee.jsx("div",{style:{width:"80%",height:"1px",background:"black",float:"right",marginTop:"10%",marginLeft:"auto"}}),Ee.jsxs("div",{className:"BoxWrapper",children:[Ee.jsx("div",{className:"BoxWrapperContent",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto nulla pariatur sunt suscipit non sit fugiat, optio repellendus commodi?"}),Ee.jsx("div",{className:"box",children:Ee.jsx("img",{src:GD,className:"img"})})]})]})}const XD=()=>Ee.jsxs("div",{children:[Ee.jsx("div",{style:{position:"fixed",right:"2%",top:"5%",zIndex:1e3},children:Ee.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"33",height:"18",viewBox:"0 0 33 18",fill:"none",children:[Ee.jsx("path",{d:"M18 8.5C18.3874 9.12801 17.9356 9.9375 17.1977 9.9375H10.8008C9.95294 9.9375 9.26562 9.25019 9.26562 8.40234V8.40234C9.26562 7.5545 9.95294 6.86719 10.8008 6.86719H16.9102L18 8.5V8.5ZM24 16.5L4.26562 16.8047C3.84375 16.8047 3.38281 16.7305 2.88281 16.582C2.38281 16.4336 1.91797 16.1914 1.48828 15.8555C1.06641 15.5117 0.710938 15.0703 0.421875 14.5312C0.140625 13.9844 0 13.3164 0 12.5273V1.53516C0 1.32422 0.0390625 1.125 0.117188 0.9375C0.195312 0.75 0.300781 0.585938 0.433594 0.445312C0.574219 0.304688 0.738281 0.195312 0.925781 0.117188C1.11328 0.0390625 1.31641 0 1.53516 0H13L15 3L3.04688 3.04688V12.5273C3.04688 12.9258 3.15234 13.2305 3.36328 13.4414C3.57422 13.6523 3.88281 13.7578 4.28906 13.7578L22 13.5L24 16.5Z",fill:"white"}),Ee.jsx("path",{d:"M32.5 3.04688H25.7852V17.3447L22.7383 12.7516V3.04688H16.3118L14.2773 0H32.5V3.04688Z",fill:"white"})]})}),Ee.jsxs("div",{children:[Ee.jsx(tw,{}),Ee.jsx(kA,{}),Ee.jsx(VD,{})," ",Ee.jsx(WD,{})]})]});Bh.createRoot(document.getElementById("root")).render(Ee.jsx(ps.StrictMode,{children:Ee.jsx(XD,{})}));
