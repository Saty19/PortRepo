import{r as l,j as x,V,C as J,a as P,Q,b as ne,E as dt,S as vt,M as F,c as I,D as pt,d as mt,u as N,e as ht,f as xt,g as et,h as gt,i as oe,U as c,B as O,k as yt,w as R,l as _t,m as wt,n as Mt,o as Tt,p as bt,q as St,s as Ct,t as te,G as Pt,v as pe,x as Rt,y as L,z as Et,H as Dt,N as zt,O as At,P as Nt,A as Ot,F as Ut,I as Ft,J as Lt,K as Vt,L as It,R as jt,T as le,W as Bt,X as kt,Y as Wt,Z as tt,_ as Ht,$ as Gt,a0 as Xt,a1 as qt,a2 as rt,a3 as Zt,a4 as H,a5 as at,a6 as Kt,a7 as Yt,a8 as $t,a9 as b,aa as D,ab as de,ac as ie,ad as Y,ae as Jt,af as Qt,ag as er,ah as me,ai as ce,aj as se,ak as tr,al as rr,am as ar,an as ir,ao as nr,ap as or,aq as sr}from"./index-456ac783.js";import{ar as Ga,as as Xa,at as qa}from"./index-456ac783.js";const ee=l.createContext(null);function ua({children:a,enabled:e=!0}){const[t,r]=l.useState([]),i=l.useMemo(()=>({selected:t,select:r,enabled:e}),[t,r,e]);return x.jsx(ee.Provider,{value:i,children:a})}function da({enabled:a=!1,children:e,...t}){const r=l.useRef(null),i=l.useContext(ee);return l.useEffect(()=>{if(i&&a){let o=!1;const n=[];if(r.current.traverse(s=>{s.type==="Mesh"&&n.push(s),i.selected.indexOf(s)===-1&&(o=!0)}),o)return i.select(s=>[...s,...n]),()=>{i.select(s=>s.filter(f=>!n.includes(f)))}}},[a,e,i]),x.jsx("group",{ref:r,...t,children:e})}function $(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function fe(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=a[t];return r}function lr(a,e){if(a){if(typeof a=="string")return fe(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fe(a,e)}}function cr(a){if(Array.isArray(a))return fe(a)}function fr(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dr(a){return cr(a)||fr(a)||lr(a)||ur()}new V;new V;function vr(a,e,t){return Math.max(e,Math.min(t,a))}function pr(a,e){return vr(a-Math.floor(a/e)*e,0,e)}function mr(a,e){var t=pr(e-a,Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t}function it(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}var z=function a(e,t,r){var i=this;it(this,a),$(this,"dot2",function(o,n){return i.x*o+i.y*n}),$(this,"dot3",function(o,n,s){return i.x*o+i.y*n+i.z*s}),this.x=e,this.y=t,this.z=r},hr=[new z(1,1,0),new z(-1,1,0),new z(1,-1,0),new z(-1,-1,0),new z(1,0,1),new z(-1,0,1),new z(1,0,-1),new z(-1,0,-1),new z(0,1,1),new z(0,-1,1),new z(0,1,-1),new z(0,-1,-1)],he=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],xe=new Array(512),ge=new Array(512),xr=function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var t=0;t<256;t++){var r;t&1?r=he[t]^e&255:r=he[t]^e>>8&255,xe[t]=xe[t+256]=r,ge[t]=ge[t+256]=hr[r%12]}};xr(0);function gr(a){if(typeof a=="number")a=Math.abs(a);else if(typeof a=="string"){var e=a;a=0;for(var t=0;t<e.length;t++)a=(a+(t+1)*(e.charCodeAt(t)%96))%2147483647}return a===0&&(a=311),a}function ye(a){var e=gr(a);return function(){var t=e*48271%2147483647;return e=t,t/2147483647}}var yr=function a(e){var t=this;it(this,a),$(this,"seed",0),$(this,"init",function(r){t.seed=r,t.value=ye(r)}),$(this,"value",ye(this.seed)),this.init(e)};new yr(Math.random());var _r=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.01,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1/(2*Math.PI);return r/Math.atan(1/t)*Math.atan(Math.sin(2*Math.PI*e*i)/t)},nt=function(e){return 1/(1+e+.48*e*e+.235*e*e*e)};function S(a,e,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.01,o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:1/0,n=arguments.length>6&&arguments[6]!==void 0?arguments[6]:nt,s=arguments.length>7&&arguments[7]!==void 0?arguments[7]:.001,f="velocity_"+e;if(a.__damp===void 0&&(a.__damp={}),a.__damp[f]===void 0&&(a.__damp[f]=0),Math.abs(a[e]-t)<=s)return a[e]=t,!1;r=Math.max(1e-4,r);var u=2/r,v=n(u*i),g=a[e]-t,m=t,d=o*r;g=Math.min(Math.max(g,-d),d),t=a[e]-g;var _=(a.__damp[f]+u*g)*i;a.__damp[f]=(a.__damp[f]-u*_)*v;var w=t+(g+_)*v;return m-a[e]>0==w>m&&(w=m,a.__damp[f]=(w-m)/i),a[e]=w,!0}function G(a,e,t,r,i,o,n,s){return S(a,e,a[e]+mr(a[e],t),r,i,o,n,s)}var X=new V,_e,we;function wr(a,e,t,r,i,o,n){return typeof e=="number"?X.setScalar(e):Array.isArray(e)?X.set(e[0],e[1]):X.copy(e),_e=S(a,"x",X.x,t,r,i,o,n),we=S(a,"y",X.y,t,r,i,o,n),_e||we}var k=new P,Me,Te,be;function ue(a,e,t,r,i,o,n){return typeof e=="number"?k.setScalar(e):Array.isArray(e)?k.set(e[0],e[1],e[2]):k.copy(e),Me=S(a,"x",k.x,t,r,i,o,n),Te=S(a,"y",k.y,t,r,i,o,n),be=S(a,"z",k.z,t,r,i,o,n),Me||Te||be}var j=new ne,Se,Ce,Pe,Re;function Mr(a,e,t,r,i,o,n){return typeof e=="number"?j.setScalar(e):Array.isArray(e)?j.set(e[0],e[1],e[2],e[3]):j.copy(e),Se=S(a,"x",j.x,t,r,i,o,n),Ce=S(a,"y",j.y,t,r,i,o,n),Pe=S(a,"z",j.z,t,r,i,o,n),Re=S(a,"w",j.w,t,r,i,o,n),Se||Ce||Pe||Re}var q=new dt,Ee,De,ze;function Tr(a,e,t,r,i,o,n){return Array.isArray(e)?q.set(e[0],e[1],e[2],e[3]):q.copy(e),Ee=G(a,"x",q.x,t,r,i,o,n),De=G(a,"y",q.y,t,r,i,o,n),ze=G(a,"z",q.z,t,r,i,o,n),Ee||De||ze}var W=new J,Ae,Ne,Oe;function br(a,e,t,r,i,o,n){return e instanceof J?W.copy(e):Array.isArray(e)?W.setRGB(e[0],e[1],e[2]):W.set(e),Ae=S(a,"r",W.r,t,r,i,o,n),Ne=S(a,"g",W.g,t,r,i,o,n),Oe=S(a,"b",W.b,t,r,i,o,n),Ae||Ne||Oe}var A=new Q,U=new ne,Ue=new ne,Z=new ne,Fe,Le,Ve,Ie;function ot(a,e,t,r,i,o,n){var s=a;Array.isArray(e)?A.set(e[0],e[1],e[2],e[3]):A.copy(e);var f=a.dot(A)>0?1:-1;return A.x*=f,A.y*=f,A.z*=f,A.w*=f,Fe=S(a,"x",A.x,t,r,i,o,n),Le=S(a,"y",A.y,t,r,i,o,n),Ve=S(a,"z",A.z,t,r,i,o,n),Ie=S(a,"w",A.w,t,r,i,o,n),U.set(a.x,a.y,a.z,a.w).normalize(),Ue.set(s.__damp.velocity_x,s.__damp.velocity_y,s.__damp.velocity_z,s.__damp.velocity_w),Z.copy(U).multiplyScalar(Ue.dot(U)/U.dot(U)),s.__damp.velocity_x-=Z.x,s.__damp.velocity_y-=Z.y,s.__damp.velocity_z-=Z.z,s.__damp.velocity_w-=Z.w,a.set(U.x,U.y,U.z,U.w),Fe||Le||Ve||Ie}var K=new vt,je,Be,ke;function Sr(a,e,t,r,i,o,n){return Array.isArray(e)?K.set(e[0],e[1],e[2]):K.copy(e),je=S(a,"radius",K.radius,t,r,i,o,n),Be=G(a,"phi",K.phi,t,r,i,o,n),ke=G(a,"theta",K.theta,t,r,i,o,n),je||Be||ke}var re=new F,We=new P,He=new Q,Ge=new P,Xe,qe,Ze;function Cr(a,e,t,r,i,o,n){var s=a;return s.__damp===void 0&&(s.__damp={position:new P,rotation:new Q,scale:new P},a.decompose(s.__damp.position,s.__damp.rotation,s.__damp.scale)),Array.isArray(e)?re.set.apply(re,dr(e)):re.copy(e),re.decompose(We,He,Ge),Xe=ue(s.__damp.position,We,t,r,i,o,n),qe=ot(s.__damp.rotation,He,t,r,i,o,n),Ze=ue(s.__damp.scale,Ge,t,r,i,o,n),a.compose(s.__damp.position,s.__damp.rotation,s.__damp.scale),Xe||qe||Ze}var st=Object.freeze({__proto__:null,rsqw:_r,exp:nt,damp:S,dampAngle:G,damp2:wr,damp3:ue,damp4:Mr,dampE:Tr,dampC:br,dampQ:ot,dampS:Sr,dampM:Cr});const Pr=l.forwardRef(function({blendFunction:e,worldFocusDistance:t,worldFocusRange:r,focusDistance:i,focusRange:o,focalLength:n,bokehScale:s,resolutionScale:f,resolutionX:u,resolutionY:v,width:g,height:m,target:d,depthTexture:_,...w},p){const{camera:h}=l.useContext(I),y=d!=null,M=l.useMemo(()=>{const T=new pt(h,{blendFunction:e,worldFocusDistance:t,worldFocusRange:r,focusDistance:i,focusRange:o,focalLength:n,bokehScale:s,resolutionScale:f,resolutionX:u,resolutionY:v,width:g,height:m});y&&(T.target=new P),_&&T.setDepthTexture(_.texture,_.packing);const C=T.maskPass.getFullscreenMaterial();return C.maskFunction=mt.MULTIPLY_RGB_SET_ALPHA,T},[h,e,t,r,i,o,n,s,f,u,v,g,m,y,_]);return l.useEffect(()=>()=>{M.dispose()},[M]),x.jsx("primitive",{...w,ref:p,object:M,target:d})}),va=l.forwardRef(({target:a=void 0,mouse:e=!1,debug:t=void 0,manual:r=!1,smoothTime:i=.25,...o},n)=>{const s=l.useRef(null),f=l.useRef(null),u=l.useRef(null),v=N(({scene:C})=>C),g=N(({pointer:C})=>C),{composer:m,camera:d}=l.useContext(I),[_]=l.useState(()=>new ht),[w]=l.useState(()=>new xt);l.useEffect(()=>(m.addPass(_),m.addPass(w),()=>{m.removePass(_),m.removePass(w)}),[m,_,w]),l.useEffect(()=>()=>{_.dispose(),w.dispose()},[_,w]);const[p]=l.useState(()=>new P(0,0,0)),[h]=l.useState(()=>new P(0,0,0)),y=l.useCallback(async(C,E)=>(h.x=C,h.y=E,h.z=await _.readDepth(h),h.z=h.z*2-1,1-h.z>1e-7?h.unproject(d):!1),[h,_,d]),M=l.useCallback(async(C,E=!0)=>{var B;if(a)p.set(...a);else{const{x:ft,y:ut}=e?g:{x:0,y:0},ve=await y(ft,ut);ve&&p.copy(ve)}E&&((B=s.current)!=null&&B.target)&&(i>0&&C>0?st.damp3(s.current.target,p,i,C):s.current.target.copy(p))},[a,p,e,y,i,g]);et(async(C,E)=>{var B;r||M(E),f.current&&f.current.position.copy(p),u.current&&((B=s.current)!=null&&B.target)&&u.current.position.copy(s.current.target)});const T=l.useMemo(()=>({dofRef:s,hitpoint:p,update:M}),[p,M]);return l.useImperativeHandle(n,()=>T,[T]),x.jsxs(x.Fragment,{children:[t?gt(x.jsxs(x.Fragment,{children:[x.jsxs("mesh",{ref:f,children:[x.jsx("sphereGeometry",{args:[t,16,16]}),x.jsx("meshBasicMaterial",{color:"#00ff00",opacity:1,transparent:!0,depthWrite:!1})]}),x.jsxs("mesh",{ref:u,children:[x.jsx("sphereGeometry",{args:[t/2,16,16]}),x.jsx("meshBasicMaterial",{color:"#00ff00",opacity:.5,transparent:!0,depthWrite:!1})]})]}),v):null,x.jsx(Pr,{ref:s,...o,target:p})]})}),Rr={fragmentShader:`

  uniform float iTime;
  uniform vec2 lensPosition;
  uniform vec2 iResolution;
  uniform vec3 colorGain;
  uniform float starPoints;
  uniform float glareSize;
  uniform float flareSize;
  uniform float flareSpeed;
  uniform float flareShape;
  uniform float haloScale;
  uniform float opacity;
  uniform bool animated;
  uniform bool anamorphic;
  uniform bool enabled;
  uniform bool secondaryGhosts;
  uniform bool starBurst;
  uniform float ghostScale;
  uniform bool aditionalStreaks;
  uniform sampler2D lensDirtTexture;
  vec2 vxtC;

  float rndf(float n){return fract(sin(n) * 43758.5453123);}float niz(float p){float fl = floor(p);float fc = fract(p);return mix(rndf(fl),rndf(fl + 1.0), fc);}
  vec3 hsv2rgb(vec3 c){vec4 k = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);vec3 p = abs(fract(c.xxx + k.xyz) * 6.0 - k.www);return c.z * mix(k.xxx, clamp(p - k.xxx, 0.0, 1.0), c.y);}
  float satU(float x){return clamp(x, 0.,1.);}vec2 rtU(vec2 naz, float rtn){return vec2(cos(rtn) * naz.x + sin(rtn) * naz.y,cos(rtn) * naz.y - sin(rtn) * naz.x);}
  vec3 drwF(vec2 p, float intensity, float rnd, float speed, int id){float flhos = (1. / 32.) * float(id) * 0.1;float lingrad = distance(vec2(0.), p);float expg = 1. / exp(lingrad * (fract(rnd) * 0.66 + 0.33));vec3 qzTg = hsv2rgb(vec3( fract( (expg * 8.) + speed * flareSpeed + flhos), pow(1.-abs(expg*2.-1.), 0.45), 20.0 * expg * intensity));float internalStarPoints;if(anamorphic){internalStarPoints = 1.0;} else{internalStarPoints = starPoints;}float ams = length(p * flareShape * sin(internalStarPoints * atan(p.x, p.y)));float kJhg = pow(1.-satU(ams), ( anamorphic ? 100. : 12.));kJhg += satU(expg-0.9) * 3.;kJhg = pow(kJhg * expg, 8. + (1.-intensity) * 5.);if(flareSpeed > 0.0){return vec3(kJhg) * qzTg;} else{return vec3(kJhg) * flareSize * 15.;}}
  float ams2(vec3 a, vec3 b) { return abs(a.x - b.x) + abs(a.y - b.y) + abs(a.z - b.z);}vec3 satU(vec3 x){return clamp(x, vec3(0.0), vec3(1.0));}
  float glR(vec2 naz, vec2 pos, float zsi){vec2 mni;if(animated){mni = rtU(naz-pos, iTime * 0.1);} else{mni = naz-pos;}float ang = atan(mni.y, mni.x) * (anamorphic ? 1.0 : starPoints);float ams2 = length(mni);ams2 = pow(ams2, .9);float f0 = 1.0/(length(naz-pos)*(1.0/zsi*16.0)+.2);return f0+f0*(sin((ang))*.2 +.3);}
  float sdHex(vec2 p){p = abs(p);vec2 q = vec2(p.x*2.0*0.5773503, p.y + p.x*0.5773503);return dot(step(q.xy,q.yx), 1.0-q.yx);}float fpow(float x, float k){return x > k ? pow((x-k)/(1.0-k),2.0) : 0.0;}
  vec3 rHx(vec2 naz, vec2 p, float s, vec3 col){naz -= p;if (abs(naz.x) < 0.2*s && abs(naz.y) < 0.2*s){return mix(vec3(0),mix(vec3(0),col,0.1 + fpow(length(naz/s),0.1)*10.0),smoothstep(0.0,0.1,sdHex(naz*20.0/s)));}return vec3(0);}
  vec3 mLs(vec2 naz, vec2 pos){vec2 mni = naz-pos;vec2 zxMp = naz*(length(naz));float ang = atan(mni.x,mni.y);float f0 = .3/(length(naz-pos)*16.0+1.0);f0 = f0*(sin(niz(sin(ang*3.9-(animated ? iTime : 0.0) * 0.3) * starPoints))*.2 );float f1 = max(0.01-pow(length(naz+1.2*pos),1.9),.0)*7.0;float f2 = max(.9/(10.0+32.0*pow(length(zxMp+0.99*pos),2.0)),.0)*0.35;float f22 = max(.9/(11.0+32.0*pow(length(zxMp+0.85*pos),2.0)),.0)*0.23;float f23 = max(.9/(12.0+32.0*pow(length(zxMp+0.95*pos),2.0)),.0)*0.6;vec2 ztX = mix(naz,zxMp, 0.1);float f4 = max(0.01-pow(length(ztX+0.4*pos),2.9),.0)*4.02;float f42 = max(0.0-pow(length(ztX+0.45*pos),2.9),.0)*4.1;float f43 = max(0.01-pow(length(ztX+0.5*pos),2.9),.0)*4.6;ztX = mix(naz,zxMp,-.4);float f5 = max(0.01-pow(length(ztX+0.1*pos),5.5),.0)*2.0;float f52 = max(0.01-pow(length(ztX+0.2*pos),5.5),.0)*2.0;float f53 = max(0.01-pow(length(ztX+0.1*pos),5.5),.0)*2.0;ztX = mix(naz,zxMp, 2.1);float f6 = max(0.01-pow(length(ztX-0.3*pos),1.61),.0)*3.159;float f62 = max(0.01-pow(length(ztX-0.325*pos),1.614),.0)*3.14;float f63 = max(0.01-pow(length(ztX-0.389*pos),1.623),.0)*3.12;vec3 c = vec3(glR(naz,pos, glareSize));vec2 prot;if(animated){prot = rtU(naz - pos, (iTime * 0.1));} else if(anamorphic){prot = rtU(naz - pos, 1.570796);} else {prot = naz - pos;}c += drwF(prot, (anamorphic ? flareSize * 10. : flareSize), 0.1, iTime, 1);c.r+=f1+f2+f4+f5+f6; c.g+=f1+f22+f42+f52+f62; c.b+=f1+f23+f43+f53+f63;c = c*1.3 * vec3(length(zxMp)+.09);c+=vec3(f0);return c;}
  vec3 cc(vec3 clr, float fct,float fct2){float w = clr.x+clr.y+clr.z;return mix(clr,vec3(w)*fct,w*fct2);}float rnd(vec2 p){float f = fract(sin(dot(p, vec2(12.1234, 72.8392) )*45123.2));return f;}float rnd(float w){float f = fract(sin(w)*1000.);return f;}
  float rShp(vec2 p, int N){float f;float a=atan(p.x,p.y)+.2;float b=6.28319/float(N);f=smoothstep(.5,.51, cos(floor(.5+a/b)*b-a)*length(p.xy)* 2.0  -ghostScale);return f;}
  vec3 drC(vec2 p, float zsi, float dCy, vec3 clr, vec3 clr2, float ams2, vec2 esom){float l = length(p + esom*(ams2*2.))+zsi/2.;float l2 = length(p + esom*(ams2*4.))+zsi/3.;float c = max(0.01-pow(length(p + esom*ams2), zsi*ghostScale), 0.0)*10.;float c1 = max(0.001-pow(l-0.3, 1./40.)+sin(l*20.), 0.0)*3.;float c2 =  max(0.09/pow(length(p-esom*ams2/.5)*1., .95), 0.0)/20.;float s = max(0.02-pow(rShp(p*5. + esom*ams2*5. + dCy, 6) , 1.), 0.0)*1.5;clr = cos(vec3(0.44, .24, .2)*8. + ams2*4.)*0.5+.5;vec3 f = c*clr;f += c1*clr;f += c2*clr;f +=  s*clr;return f-0.01;}
  vec4 geLC(float x){return vec4(vec3(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(mix(vec3(0., 0., 0.),vec3(0., 0., 0.), smoothstep(0.0, 0.063, x)),vec3(0., 0., 0.), smoothstep(0.063, 0.125, x)),vec3(0.0, 0., 0.), smoothstep(0.125, 0.188, x)),vec3(0.188, 0.131, 0.116), smoothstep(0.188, 0.227, x)),vec3(0.31, 0.204, 0.537), smoothstep(0.227, 0.251, x)),vec3(0.192, 0.106, 0.286), smoothstep(0.251, 0.314, x)),vec3(0.102, 0.008, 0.341), smoothstep(0.314, 0.392, x)),vec3(0.086, 0.0, 0.141), smoothstep(0.392, 0.502, x)),vec3(1.0, 0.31, 0.0), smoothstep(0.502, 0.604, x)),vec3(.1, 0.1, 0.1), smoothstep(0.604, 0.643, x)),vec3(1.0, 0.929, 0.0), smoothstep(0.643, 0.761, x)),vec3(1.0, 0.086, 0.424), smoothstep(0.761, 0.847, x)),vec3(1.0, 0.49, 0.0), smoothstep(0.847, 0.89, x)),vec3(0.945, 0.275, 0.475), smoothstep(0.89, 0.941, x)),vec3(0.251, 0.275, 0.796), smoothstep(0.941, 1.0, x))),1.0);}
  float diTN(vec2 p){vec2 f = fract(p);f = (f * f) * (3.0 - (2.0 * f));float n = dot(floor(p), vec2(1.0, 157.0));vec4 a = fract(sin(vec4(n + 0.0, n + 1.0, n + 157.0, n + 158.0)) * 43758.5453123);return mix(mix(a.x, a.y, f.x), mix(a.z, a.w, f.x), f.y);} 
  float fbm(vec2 p){const mat2 m = mat2(0.80, -0.60, 0.60, 0.80);float f = 0.0;f += 0.5000*diTN(p); p = m*p*2.02;f += 0.2500*diTN(p); p = m*p*2.03;f += 0.1250*diTN(p); p = m*p*2.01;f += 0.0625*diTN(p);return f/0.9375;} 
  vec4 geLS(vec2 p){vec2 pp = (p - vec2(0.5)) * 2.0;float a = atan(pp.y, pp.x);vec4 cp = vec4(sin(a * 1.0), length(pp), sin(a * 13.0), sin(a * 53.0));float d = sin(clamp(pow(length(vec2(0.5) - p) * 0.5 + haloScale /2., 5.0), 0.0, 1.0) * 3.14159);vec3 c = vec3(d) * vec3(fbm(cp.xy * 16.0) * fbm(cp.zw * 9.0) * max(max(max(max(0.5, sin(a * 1.0)), sin(a * 3.0) * 0.8), sin(a * 7.0) * 0.8), sin(a * 9.0) * 10.6));c *= vec3(mix(2.0, (sin(length(pp.xy) * 256.0) * 0.5) + 0.5, sin((clamp((length(pp.xy) - 0.875) / 0.1, 0.0, 1.0) + 0.0) * 2.0 * 3.14159) * 1.5) + 0.5) * 0.3275;return vec4(vec3(c * 1.0), d);}
  vec4 geLD(vec2 p){p.xy += vec2(fbm(p.yx * 3.0), fbm(p.yx * 2.0)) * 0.0825;vec3 o = vec3(mix(0.125, 0.25, max(max(smoothstep(0.1, 0.0, length(p - vec2(0.25))),smoothstep(0.4, 0.0, length(p - vec2(0.75)))),smoothstep(0.8, 0.0, length(p - vec2(0.875, 0.125))))));o += vec3(max(fbm(p * 1.0) - 0.5, 0.0)) * 0.5;o += vec3(max(fbm(p * 2.0) - 0.5, 0.0)) * 0.5;o += vec3(max(fbm(p * 4.0) - 0.5, 0.0)) * 0.25;o += vec3(max(fbm(p * 8.0) - 0.75, 0.0)) * 1.0;o += vec3(max(fbm(p * 16.0) - 0.75, 0.0)) * 0.75;o += vec3(max(fbm(p * 64.0) - 0.75, 0.0)) * 0.5;return vec4(clamp(o, vec3(0.15), vec3(1.0)), 1.0);}
  vec4 txL(sampler2D tex, vec2 xtC){if(((xtC.x < 0.) || (xtC.y < 0.)) || ((xtC.x > 1.) || (xtC.y > 1.))){return vec4(0.0);}else{return texture(tex, xtC); }}
  vec4 txD(sampler2D tex, vec2 xtC, vec2 dir, vec3 ditn) {return vec4(txL(tex, (xtC + (dir * ditn.r))).r,txL(tex, (xtC + (dir * ditn.g))).g,txL(tex, (xtC + (dir * ditn.b))).b,1.0);}
  vec4 strB(){vec2 aspXtc = vec2(1.0) - (((vxtC - vec2(0.5)) * vec2(1.0)) + vec2(0.5)); vec2 xtC = vec2(1.0) - vxtC; vec2 ghvc = (vec2(0.5) - xtC) * 0.3 - lensPosition; vec2 ghNm = normalize(ghvc * vec2(1.0)) * vec2(1.0);vec2 haloVec = normalize(ghvc) * 0.6;vec2 hlNm = ghNm * 0.6;vec2 texelSize = vec2(1.0) / vec2(iResolution.xy);vec3 ditn = vec3(-(texelSize.x * 1.5), 0.2, texelSize.x * 1.5);vec4 c = vec4(0.0);for (int i = 0; i < 8; i++) {vec2 offset = xtC + (ghvc * float(i));c += txD(lensDirtTexture, offset, ghNm, ditn) * pow(max(0.0, 1.0 - (length(vec2(0.5) - offset) / length(vec2(0.5)))), 10.0);}vec2 uyTrz = xtC + hlNm; return (c * geLC((length(vec2(0.5) - aspXtc) / length(vec2(haloScale))))) +(txD(lensDirtTexture, uyTrz, ghNm, ditn) * pow(max(0.0, 1.0 - (length(vec2(0.5) - uyTrz) / length(vec2(0.5)))), 10.0));} 
  void mainImage(vec4 v,vec2 r,out vec4 i){vec2 g=r-.5;g.y*=iResolution.y/iResolution.x;vec2 l=lensPosition*.5;l.y*=iResolution.y/iResolution.x;vec3 f=mLs(g,l)*20.*colorGain/256.;if(aditionalStreaks){vec3 o=vec3(.9,.2,.1),p=vec3(.3,.1,.9);for(float n=0.;n<10.;n++)f+=drC(g,pow(rnd(n*2e3)*2.8,.1)+1.41,0.,o+n,p+n,rnd(n*20.)*3.+.2-.5,lensPosition);}if(secondaryGhosts){vec3 n=vec3(0);n+=rHx(g,-lensPosition*.25,ghostScale*1.4,vec3(.25,.35,0));n+=rHx(g,lensPosition*.25,ghostScale*.5,vec3(1,.5,.5));n+=rHx(g,lensPosition*.1,ghostScale*1.6,vec3(1));n+=rHx(g,lensPosition*1.8,ghostScale*2.,vec3(0,.5,.75));n+=rHx(g,lensPosition*1.25,ghostScale*.8,vec3(1,1,.5));n+=rHx(g,-lensPosition*1.25,ghostScale*5.,vec3(.5,.5,.25));n+=fpow(1.-abs(distance(lensPosition*.8,g)-.7),.985)*colorGain/2100.;f+=n;}if(starBurst){vxtC=g+.5;vec4 n=geLD(g);float o=1.-clamp(0.5,0.,.5)*2.;n+=mix(n,pow(n*2.,vec4(2))*.5,o);float s=(g.x+g.y)*(1./6.);vec2 d=mat2(cos(s),-sin(s),sin(s),cos(s))*vxtC;n+=geLS(d)*2.;f+=clamp(n.xyz*strB().xyz,.01,1.);}i=enabled?vec4(mix(f,vec3(0),opacity)+v.xyz,v.w):vec4(v);}
`};class Er extends oe{constructor({blendFunction:e=O.NORMAL,enabled:t=!0,glareSize:r=.2,lensPosition:i=[.01,.01],iResolution:o=[0,0],starPoints:n=6,flareSize:s=.01,flareSpeed:f=.01,flareShape:u=.01,animated:v=!0,anamorphic:g=!1,colorGain:m=new J(20,20,20),lensDirtTexture:d=null,haloScale:_=.5,secondaryGhosts:w=!0,aditionalStreaks:p=!0,ghostScale:h=0,opacity:y=1,starBurst:M=!1}={}){super("LensFlareEffect",Rr.fragmentShader,{blendFunction:e,uniforms:new Map([["enabled",new c(t)],["glareSize",new c(r)],["lensPosition",new c(i)],["iTime",new c(0)],["iResolution",new c(o)],["starPoints",new c(n)],["flareSize",new c(s)],["flareSpeed",new c(f)],["flareShape",new c(u)],["animated",new c(v)],["anamorphic",new c(g)],["colorGain",new c(m)],["lensDirtTexture",new c(d)],["haloScale",new c(_)],["secondaryGhosts",new c(w)],["aditionalStreaks",new c(p)],["ghostScale",new c(h)],["starBurst",new c(M)],["opacity",new c(y)]])})}update(e,t,r){const i=this.uniforms.get("iTime");i&&(i.value+=r)}}const pa=l.forwardRef(({position:a=new P(-25,6,-60),followMouse:e=!1,smoothTime:t=.07,...r},i)=>{const o=N(({viewport:d})=>d),n=N(({raycaster:d})=>d),s=N(({pointer:d})=>d),{scene:f,camera:u}=l.useContext(I),[v]=l.useState(()=>new P),[g]=l.useState(()=>new V),m=l.useMemo(()=>new Er(r),[r]);return et((d,_)=>{var w,p,h;const y=m.uniforms.get("lensPosition"),M=m.uniforms.get("opacity");if(!y||!M)return;let T=1;if(e)y.value.x=s.x,y.value.y=s.y,T=0;else{if(v.copy(a).project(u),v.z>1)return;y.value.x=v.x,y.value.y=v.y,g.set(v.x,v.y),n.setFromCamera(g,u);const C=n.intersectObjects(f.children,!0),{object:E}=C[0];E&&(((w=E.userData)==null?void 0:w.lensflare)==="no-occlusion"?T=0:E instanceof yt&&(((h=(p=E.material.uniforms)==null?void 0:p._transmission)==null?void 0:h.value)>.2||E.material._transmission&&E.material._transmission>.2?T=.2:E.material.transparent&&(T=E.material.opacity)))}st.damp(M,"value",T,t,_)}),l.useEffect(()=>{const d=m.uniforms.get("iResolution");d&&(d.value.x=o.width,d.value.y=o.height)},[m,o]),x.jsx("primitive",{ref:i,object:m,dispose:null})}),ma=R(_t,{blendFunction:O.ADD}),ha=R(wt),xa=R(Mt),ga=l.forwardRef(function({blendFunction:e=O.NORMAL},t){const r=l.useMemo(()=>new Tt(e),[e]);return x.jsx("primitive",{ref:t,object:r,dispose:null})}),ya=R(bt),_a=R(St),wa=R(Ct),Ma=l.forwardRef(function({active:e=!0,...t},r){const i=N(v=>v.invalidate),o=te(t,"delay"),n=te(t,"duration"),s=te(t,"strength"),f=te(t,"chromaticAberrationOffset"),u=l.useMemo(()=>new Pt({...t,delay:o,duration:n,strength:s,chromaticAberrationOffset:f}),[o,n,t,s,f]);return l.useLayoutEffect(()=>{u.mode=e?t.mode||pe.SPORADIC:pe.DISABLED,i()},[e,u,i,t.mode]),l.useEffect(()=>()=>{u.dispose()},[u]),x.jsx("primitive",{ref:r,object:u,dispose:null})}),Ta=l.forwardRef(function(e,t){const{camera:r}=l.useContext(I),i=l.useMemo(()=>new Rt(r,L(e.sun),e),[r,e]);return l.useLayoutEffect(()=>void(i.lightSource=L(e.sun)),[i,e.sun]),x.jsx("primitive",{ref:t,object:i,dispose:null})}),ba=l.forwardRef(function({size:e,...t},r){const i=N(n=>n.invalidate),o=l.useMemo(()=>new Et(t),[t]);return l.useLayoutEffect(()=>{e&&o.setSize(e.width,e.height),i()},[o,e]),x.jsx("primitive",{ref:r,object:o,dispose:null})}),Sa=R(Dt),Ca=R(zt,{blendFunction:O.COLOR_DODGE}),Pa=l.forwardRef(function({selection:e=[],selectionLayer:t=10,blendFunction:r,patternTexture:i,edgeStrength:o,pulseSpeed:n,visibleEdgeColor:s,hiddenEdgeColor:f,width:u,height:v,kernelSize:g,blur:m,xRay:d,..._},w){const p=N(C=>C.invalidate),{scene:h,camera:y}=l.useContext(I),M=l.useMemo(()=>new At(h,y,{blendFunction:r,patternTexture:i,edgeStrength:o,pulseSpeed:n,visibleEdgeColor:s,hiddenEdgeColor:f,width:u,height:v,kernelSize:g,blur:m,xRay:d,..._}),[r,m,y,o,v,f,g,i,n,h,s,u,d]),T=l.useContext(ee);return l.useEffect(()=>{if(!T&&e)return M.selection.set(Array.isArray(e)?e.map(L):[L(e)]),p(),()=>{M.selection.clear(),p()}},[M,e,T,p]),l.useEffect(()=>{M.selectionLayer=t,p()},[M,p,t]),l.useRef(),l.useEffect(()=>{var C;if(T&&T.enabled&&(C=T.selected)!=null&&C.length)return M.selection.set(T.selected),p(),()=>{M.selection.clear(),p()}},[T,M.selection,p]),x.jsx("primitive",{ref:w,object:M})}),Ra=l.forwardRef(function({granularity:e=5},t){const r=l.useMemo(()=>new Nt(e),[e]);return x.jsx("primitive",{ref:t,object:r,dispose:null})}),Ea=R(Ot,{blendFunction:O.OVERLAY,density:1.25}),Dr=(a,e)=>a.layers.enable(e.selection.layer),zr=(a,e)=>a.layers.disable(e.selection.layer),Da=l.forwardRef(function({selection:e=[],selectionLayer:t=10,lights:r=[],luminanceThreshold:i,luminanceSmoothing:o,intensity:n,width:s,height:f,kernelSize:u,mipmapBlur:v,...g},m){r.length===0&&console.warn("SelectiveBloom requires lights to work.");const d=N(y=>y.invalidate),{scene:_,camera:w}=l.useContext(I),p=l.useMemo(()=>new Ut(_,w,{blendFunction:O.ADD,luminanceThreshold:i,luminanceSmoothing:o,intensity:n,width:s,height:f,kernelSize:u,mipmapBlur:v,...g}),[_,w,i,o,n,s,f,u,v,g]),h=l.useContext(ee);return l.useEffect(()=>{if(!h&&e)return p.selection.set(Array.isArray(e)?e.map(L):[L(e)]),d(),()=>{p.selection.clear(),d()}},[p,e,h,d]),l.useEffect(()=>{p.selection.layer=t,d()},[p,d,t]),l.useEffect(()=>{if(r&&r.length>0)return r.forEach(y=>Dr(L(y),p)),d(),()=>{r.forEach(y=>zr(L(y),p)),d()}},[p,d,r,t]),l.useEffect(()=>{var y;if(h&&h.enabled&&(y=h.selected)!=null&&y.length)return p.selection.set(h.selected),d(),()=>{p.selection.clear(),d()}},[h,p.selection,d]),x.jsx("primitive",{ref:m,object:p,dispose:null})}),za=R(Ft),Aa=l.forwardRef(function(e,t){const{camera:r,normalPass:i,downSamplingPass:o,resolutionScale:n}=l.useContext(I),s=l.useMemo(()=>i===null&&o===null?(console.error("Please enable the NormalPass in the EffectComposer in order to use SSAO."),{}):new Lt(r,i&&!o?i.texture:null,{blendFunction:O.MULTIPLY,samples:30,rings:4,distanceThreshold:1,distanceFalloff:0,rangeThreshold:.5,rangeFalloff:.1,luminanceInfluence:.9,radius:20,bias:.5,intensity:1,color:void 0,normalDepthBuffer:o?o.texture:null,resolutionScale:n??1,depthAwareUpsampling:!0,...e}),[r,i,e]);return x.jsx("primitive",{ref:t,object:s,dispose:null})}),Na=R(Vt),Oa=l.forwardRef(function({textureSrc:e,texture:t,...r},i){const o=It(kt,e);l.useLayoutEffect(()=>{o.encoding=jt,o.wrapS=o.wrapT=le},[o]);const n=l.useMemo(()=>new Bt({...r,texture:o||t}),[r,o,t]);return x.jsx("primitive",{ref:i,object:n,dispose:null})}),Ua=l.forwardRef(function({blendFunction:e,adaptive:t,mode:r,resolution:i,maxLuminance:o,whitePoint:n,middleGrey:s,minLuminance:f,averageLuminance:u,adaptationRate:v,...g},m){const d=l.useMemo(()=>new Wt({blendFunction:e,adaptive:t,mode:r,resolution:i,maxLuminance:o,whitePoint:n,middleGrey:s,minLuminance:f,averageLuminance:u,adaptationRate:v}),[e,t,r,i,o,n,s,f,u,v]);return l.useEffect(()=>{d.dispose()},[d]),x.jsx("primitive",{...g,ref:m,object:d,attributes:tt.CONVOLUTION})}),Fa=R(Ht),La=R(Gt),Va=l.forwardRef(function({lut:e,tetrahedralInterpolation:t,...r},i){const o=l.useMemo(()=>new Xt(e,r),[e,r]),n=N(s=>s.invalidate);return l.useLayoutEffect(()=>{t&&(o.tetrahedralInterpolation=t),e&&(o.lut=e),n()},[o,n,e,t]),x.jsx("primitive",{ref:i,object:o,dispose:null})}),Ia=R(qt,{blendFunction:O.ADD}),Ar={fragmentShader:`

    // original shader by Evan Wallace

    #define MAX_ITERATIONS 100

    uniform float blur;
    uniform float taper;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 direction;
    uniform int samples;

    float random(vec3 scale, float seed) {
        /* use the fragment position for a different seed per-pixel */
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = vec4(0.0);
        float total = 0.0;
        vec2 startPixel = vec2(start.x * resolution.x, start.y * resolution.y);
        vec2 endPixel = vec2(end.x * resolution.x, end.y * resolution.y);
        float f_samples = float(samples);
        float half_samples = f_samples / 2.0;

        // use screen diagonal to normalize blur radii
        float maxScreenDistance = distance(vec2(0.0), resolution); // diagonal distance
        float gradientRadius = taper * (maxScreenDistance);
        float blurRadius = blur * (maxScreenDistance / 16.0);

        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        vec2 normal = normalize(vec2(startPixel.y - endPixel.y, endPixel.x - startPixel.x));
        float radius = smoothstep(0.0, 1.0, abs(dot(uv * resolution - startPixel, normal)) / gradientRadius) * blurRadius;

        #pragma unroll_loop_start
        for (int i = 0; i <= MAX_ITERATIONS; i++) {
            if (i >= samples) { break; } // return early if over sample count
            float f_i = float(i);
            float s_i = -half_samples + f_i;
            float percent = (s_i + offset - 0.5) / half_samples;
            float weight = 1.0 - abs(percent);
            vec4 sample_i = texture2D(inputBuffer, uv + normalize(direction) / resolution * percent * radius);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample_i.rgb *= sample_i.a;
            color += sample_i * weight;
            total += weight;
        }
        #pragma unroll_loop_end

        outputColor = color / total;

        /* switch back from pre-multiplied alpha */
        outputColor.rgb /= outputColor.a + 0.00001;
    }
    `};class Nr extends oe{constructor({blendFunction:e=O.NORMAL,blur:t=.15,taper:r=.5,start:i=[.5,0],end:o=[.5,1],samples:n=10,direction:s=[1,1]}={}){super("TiltShiftEffect",Ar.fragmentShader,{blendFunction:e,attributes:tt.CONVOLUTION,uniforms:new Map([["blur",new c(t)],["taper",new c(r)],["start",new c(i)],["end",new c(o)],["samples",new c(n)],["direction",new c(s)]])})}}const ja=R(Nr,{blendFunction:O.NORMAL}),Or=`
uniform sampler2D uCharacters;
uniform float uCharactersCount;
uniform float uCellSize;
uniform bool uInvert;
uniform vec3 uColor;

const vec2 SIZE = vec2(16.);

vec3 greyscale(vec3 color, float strength) {
    float g = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(color, vec3(g), strength);
}

vec3 greyscale(vec3 color) {
    return greyscale(color, 1.0);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / uCellSize;
    vec2 grid = 1.0 / cell;
    vec2 pixelizedUV = grid * (0.5 + floor(uv / grid));
    vec4 pixelized = texture2D(inputBuffer, pixelizedUV);
    float greyscaled = greyscale(pixelized.rgb).r;

    if (uInvert) {
        greyscaled = 1.0 - greyscaled;
    }

    float characterIndex = floor((uCharactersCount - 1.0) * greyscaled);
    vec2 characterPosition = vec2(mod(characterIndex, SIZE.x), floor(characterIndex / SIZE.y));
    vec2 offset = vec2(characterPosition.x, -characterPosition.y) / SIZE;
    vec2 charUV = mod(uv * (cell / SIZE), 1.0 / SIZE) - vec2(0., 1.0 / SIZE) + offset;
    vec4 asciiCharacter = texture2D(uCharacters, charUV);

    asciiCharacter.rgb = uColor * asciiCharacter.r;
    asciiCharacter.a = pixelized.a;
    outputColor = asciiCharacter;
}
`;class Ur extends oe{constructor({font:e="arial",characters:t=" .:,'-^=*+?!|0#X%WM@",fontSize:r=54,cellSize:i=16,color:o="#ffffff",invert:n=!1}={}){const s=new Map([["uCharacters",new c(new rt)],["uCellSize",new c(i)],["uCharactersCount",new c(t.length)],["uColor",new c(new J(o))],["uInvert",new c(n)]]);super("ASCIIEffect",Or,{uniforms:s});const f=this.uniforms.get("uCharacters");f&&(f.value=this.createCharactersTexture(t,e,r))}createCharactersTexture(e,t,r){const i=document.createElement("canvas"),o=1024,n=16,s=o/n;i.width=i.height=o;const f=new Zt(i,void 0,le,le,H,H),u=i.getContext("2d");if(!u)throw new Error("Context not available");u.clearRect(0,0,o,o),u.font=`${r}px ${t}`,u.textAlign="center",u.textBaseline="middle",u.fillStyle="#fff";for(let v=0;v<e.length;v++){const g=e[v],m=v%n,d=Math.floor(v/n);u.fillText(g,m*s+s/2,d*s+s/2)}return f.needsUpdate=!0,f}}const Ba=l.forwardRef(({font:a="arial",characters:e=" .:,'-^=*+?!|0#X%WM@",fontSize:t=54,cellSize:r=16,color:i="#ffffff",invert:o=!1},n)=>{const s=l.useMemo(()=>new Ur({characters:e,font:a,fontSize:t,cellSize:r,color:i,invert:o}),[e,t,r,i,o,a]);return x.jsx("primitive",{ref:n,object:s})}),Fr=`
  uniform float blur;
  uniform float blurSharpness;
  uniform int blurKernel;

  vec3 denoise(
    vec3 center,
    sampler2D tex,
    vec2 uv,
    vec2 invTexSize,
    float blur,
    float blurSharpness,
    int blurKernel
  ) {
    vec3 color, col;
    float total, weight;

    for (int x = -blurKernel; x <= blurKernel; x++) {
      for (int y=-blurKernel; y<=blurKernel; y++) {
        col = textureLod(tex, uv + vec2(x,y) * invTexSize, 0.0).rgb;
        weight = 1.0-abs(dot(col - center, vec3(0.25)));
        weight = pow(weight, blurSharpness);
        color += col * weight;
        total += weight;
      }
    }

    return color / total;
  }
`,Lr=`
  #define MODE_DEFAULT 0
  #define MODE_REFLECTIONS 1
  #define MODE_RAW_REFLECTION 2
  #define MODE_BLURRED_REFLECTIONS 3
  #define MODE_INPUT 4
  #define MODE_BLUR_MIX 5
  #define FLOAT_EPSILON 0.00001
  // uniform sampler2D inputTexture;
  uniform sampler2D reflectionsTexture;
  // uniform float samples;

  ${Fr}

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec4 reflectionsTexel=texture2D(reflectionsTexture, vUv);
    ivec2 size = textureSize(reflectionsTexture, 0);
    vec2 invTexSize= 1.0 / vec2(size.x, size.y);
    vec3 reflectionClr = reflectionsTexel.xyz;
    if (blur > FLOAT_EPSILON) {
      vec3 blurredReflectionsColor = denoise(
        reflectionsTexel.rgb,
        reflectionsTexture,
        vUv,
        invTexSize,
        blur,
        blurSharpness,
        blurKernel
      );
      reflectionClr = mix(reflectionClr, blurredReflectionsColor.rgb, blur);
    }

    #if RENDER_MODE == MODE_DEFAULT
      outputColor = vec4(inputColor.rgb+reflectionClr, 1.0);
    #endif
    #if RENDER_MODE == MODE_REFLECTIONS
      outputColor = vec4(reflectionClr, 1.0);
    #endif
    #if RENDER_MODE == MODE_RAW_REFLECTION
      outputColor = vec4(reflectionsTexel.xyz, 1.0);
    #endif
    #if RENDER_MODE == MODE_BLURRED_REFLECTIONS
      outputColor = vec4(blurredReflectionsTexel.xyz, 1.0);
    #endif
    #if RENDER_MODE == MODE_INPUT
      outputColor = vec4(inputColor.xyz, 1.0);
    #endif
    #if RENDER_MODE == MODE_BLUR_MIX
      outputColor = vec4(vec3(blur), 1.0);
    #endif
  }
`,Vr=`
  vec3 getViewPosition(const float depth) {
    float clipW= _projectionMatrix[2][3] * depth + _projectionMatrix[3][3];
    vec4 clipPosition = vec4((vec3(vUv, depth) - 0.5) * 2.0, 1.0);
    clipPosition *= clipW;
    return(_inverseProjectionMatrix * clipPosition).xyz;
  }

  float getViewZ(const in float depth) {
    #ifdef PERSPECTIVE_CAMERA
      return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
    #else
      return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
    #endif
  }

  vec3 screenSpaceToWorldSpace(const vec2 uv,const float depth){
    vec4 ndc = vec4((uv.x - 0.5) * 2.0,(uv.y - 0.5)* 2.0, (depth - 0.5) * 2.0, 1.0);
    vec4 clip= _inverseProjectionMatrix*ndc;
    vec4 view = cameraMatrixWorld * (clip / clip.w);
    return view.xyz;
  }

  #define Scale (vec3(0.8, 0.8, 0.8))
  #define K (19.19)

  vec3 hash(vec3 a) {
    a = fract(a * Scale);
    a += dot(a, a.yxz + K);
    return fract((a.xxy + a.yxx) * a.zyx);
  }

  float fresnel_dielectric_cos(float cosi, float eta){
    float c = abs(cosi);
    float g = eta * eta - 1.0 +  c* c;
    float result;

    if (g > 0.0){
      g = sqrt(g);
      float A = (g - c) / (g + c);
      float B = (c* (g + c) - 1.0) / (c * (g - c) + 1.0);
      result = 0.5 * A * A * (1.0 + B * B);
    } else {
      result = 1.0;
    }
    
    return result;
  }

  float fresnel_dielectric(vec3 Incoming, vec3 Normal, float eta){
    float cosine = dot(Incoming, Normal);
    return min(1.0, 5.0 * fresnel_dielectric_cos(cosine, eta));
  }
`,Ir=`
  #define INV_EULER 0.36787944117144233

  alpha = velocityDisocclusion < FLOAT_EPSILON ? (alpha + 0.0075) : 0.0;
  alpha = clamp(alpha, 0.0, 1.0);
  bool needsBlur = !didReproject || velocityDisocclusion > 0.5;

  #ifdef boxBlur
    if (needsBlur) inputColor = boxBlurredColor;
  #endif

  if (alpha == 1.0) {
    outputColor = accumulatedColor;
  } else {
    float m = mix(alpha, 1.0, blend);
    if (needsBlur) m = 0.0;
    outputColor = accumulatedColor * m + inputColor * (1.0 - m);
  }
`;class jr extends se{constructor(){super({type:"MRTMaterial",defines:{USE_UV:"",TEMPORAL_RESOLVE:""},uniforms:{opacity:new c(1),normalMap:new c(null),normalScale:new c(new V(1,1)),uvTransform:new c(new tr),roughness:new c(1),roughnessMap:new c(null)},vertexShader:`
        #ifdef USE_MRT
          varying vec2 vHighPrecisionZW;
        #endif
        #define NORMAL
        #if defined(FLAT_SHADED) || defined(USE_BUMPMAP) || defined(TANGENTSPACE_NORMALMAP)
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
        #ifdef USE_UV
          ${rr.replace(/\D+/g,"")>=151?"uniform mat3 uvTransform;":""}
        #endif
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
          #if defined(FLAT_SHADED) || defined(USE_BUMPMAP) || defined(TANGENTSPACE_NORMALMAP)
            vViewPosition = -mvPosition.xyz;
          #endif
          #ifdef USE_MRT
            vHighPrecisionZW = gl_Position.zw;
          #endif
          #ifdef USE_UV
            vUv = (uvTransform * vec3(uv, 1)).xy;
          #endif
        }
      `,fragmentShader:`
        #define NORMAL
        #if defined(FLAT_SHADED) || defined(USE_BUMPMAP) || defined(TANGENTSPACE_NORMALMAP)
          varying vec3 vViewPosition;
        #endif
        #include <packing>
        #include <uv_pars_fragment>
        #include <normal_pars_fragment>
        #include <bumpmap_pars_fragment>
        #include <normalmap_pars_fragment>
        #include <logdepthbuf_pars_fragment>
        #include <clipping_planes_pars_fragment>
        #include <roughnessmap_pars_fragment>

        #ifdef USE_MRT
          layout(location = 0) out vec4 gNormal;
          layout(location = 1) out vec4 gDepth;
          varying vec2 vHighPrecisionZW;
        #endif
        uniform float roughness;
        void main() {
          #include <clipping_planes_fragment>
          #include <logdepthbuf_fragment>
          #include <normal_fragment_begin>
          #include <normal_fragment_maps>

          float roughnessFactor = roughness;

          if (roughness > 10.0e9){
            roughnessFactor = 1.;
          } else {
            #ifdef useRoughnessMap
              vec4 texelRoughness = texture2D(roughnessMap, vUv);
              // reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
              roughnessFactor *= texelRoughness.g;
            #endif
          }

          vec3 normalColor = packNormalToRGB(normal);
          #ifdef USE_MRT
            float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
            vec4 depthColor = packDepthToRGBA(fragCoordZ);
            gNormal = vec4(normalColor, roughnessFactor);
            gDepth = depthColor;
          #else
            gl_FragColor = vec4(normalColor, roughnessFactor);
          #endif
        }
      `,toneMapped:!1}),this.normalMapType=ar,this.normalScale=new V(1,1),Object.defineProperty(this,"glslVersion",{get(){return"USE_MRT"in this.defines?ir:null},set(e){}})}}const lt=`
  varying vec2 vUv;

  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`,Br=`
  varying vec2 vUv;
  uniform sampler2D inputTexture;
  uniform sampler2D accumulatedTexture;
  uniform sampler2D normalTexture;
  uniform sampler2D depthTexture;
  uniform sampler2D envMap;
  uniform mat4 _projectionMatrix;
  uniform mat4 _inverseProjectionMatrix;
  uniform mat4 cameraMatrixWorld;
  uniform float cameraNear;
  uniform float cameraFar;
  uniform float rayDistance;
  uniform float intensity;
  uniform float maxDepthDifference;
  uniform float roughnessFade;
  uniform float maxRoughness;
  uniform float fade;
  uniform float thickness;
  uniform float ior;
  uniform float samples;
  uniform float jitter;
  uniform float jitterRoughness;

  #define INVALID_RAY_COORDS vec2(-1.0);

  #define EARLY_OUT_COLOR vec4(0.0, 0.0, 0.0, 1.0)
  #define FLOAT_EPSILON 0.00001
  float nearMinusFar;
  float nearMulFar;
  float farMinusNear;

  #include <packing>

  ${Vr}

  vec2 RayMarch(vec3 dir, inout vec3 hitPos, inout float rayHitDepthDifference);
  vec2 BinarySearch(in vec3 dir, inout vec3 hitPos, inout float rayHitDepthDifference);
  float fastGetViewZ(const in float depth);
  vec3 getIBLRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness);

  void main() {
    vec4 depthTexel = textureLod(depthTexture, vUv, 0.0);

    if (dot(depthTexel.rgb, depthTexel.rgb) < FLOAT_EPSILON) {
      gl_FragColor = EARLY_OUT_COLOR;
      return;
    }

    float unpackedDepth = unpackRGBAToDepth(depthTexel);
    vec4 normalTexel = textureLod(normalTexture, vUv, 0.0);
    float roughness = normalTexel.a;
    float specular = 1.0 - roughness;

    nearMinusFar = cameraNear - cameraFar;
    nearMulFar = cameraNear * cameraFar;
    farMinusNear = cameraFar - cameraNear;

    normalTexel.rgb = unpackRGBToNormal(normalTexel.rgb);

    float depth = fastGetViewZ(unpackedDepth);
    vec3 viewPos = getViewPosition(depth);
    vec3 viewDir = normalize(viewPos);
    vec3 viewNormal = normalTexel.xyz;
    vec3 worldPos = screenSpaceToWorldSpace(vUv, unpackedDepth);

    vec3 jitt=vec3(0.0);
    if (jitterRoughness != 0.0 || jitter!=0.0){
      vec3 randomJitter = hash(50.0 * samples * worldPos) - 0.5;
      float spread= ((2.0 - specular) + roughness * jitterRoughness);
      float jitterMix = jitter * 0.25 + jitterRoughness * roughness;
      if (jitterMix > 1.0) jitterMix = 1.0;
      jitt = mix(vec3(0.0), randomJitter * spread, jitterMix);
    }
    
    viewNormal += jitt;
    float fresnelFactor = fresnel_dielectric(viewDir, viewNormal, ior);
    vec3 iblRadiance = getIBLRadiance(-viewDir, viewNormal, 0.0) * fresnelFactor;
    float lastFrameAlpha = textureLod(accumulatedTexture, vUv, 0.0).a;
    if (roughness > maxRoughness || (roughness > 1.0 - FLOAT_EPSILON && roughnessFade > 1.0 - FLOAT_EPSILON)) {
      gl_FragColor=vec4(iblRadiance,lastFrameAlpha);
      return;
    }
    
    vec3 reflected = reflect(viewDir, viewNormal);
    vec3 rayDir = reflected *- viewPos.z;
    vec3 hitPos = viewPos;
    float rayHitDepthDifference;
    vec2 coords = RayMarch(rayDir, hitPos, rayHitDepthDifference);
    if (coords.x == -1.0){
      gl_FragColor=vec4(iblRadiance, lastFrameAlpha);
      return;
    }
    
    vec4 SSRTexel = textureLod(inputTexture, coords.xy, 0.0);
    vec4 SSRTexelReflected = textureLod(accumulatedTexture, coords.xy, 0.0);
    vec3 SSR = SSRTexel.rgb + SSRTexelReflected.rgb;
    float roughnessFactor = mix(specular, 1.0, max(0.0, 1.0 - roughnessFade));
    vec2 coordsNDC = (coords.xy * 2.0 - 1.0);
    float screenFade = 0.1;
    float maxDimension = min(1.0, max(abs(coordsNDC.x), abs(coordsNDC.y)));
    float reflectionIntensity = 1.0 - (max(0.0, maxDimension - screenFade) / (1.0 - screenFade));
    reflectionIntensity = max(0.0, reflectionIntensity);
    vec3 finalSSR = mix(iblRadiance, SSR, reflectionIntensity) * roughnessFactor;

    if (fade != 0.0) {
      vec3 hitWorldPos = screenSpaceToWorldSpace(coords, rayHitDepthDifference);
      float reflectionDistance = distance(hitWorldPos, worldPos) + 1.0;
      float opacity = 1.0 / (reflectionDistance * fade * 0.1);
      if(opacity > 1.0) opacity=1.0;
      finalSSR *= opacity;
    }

    finalSSR *= fresnelFactor * intensity;
    finalSSR = min(vec3(1.0), finalSSR);
    float alpha = hitPos.z == 1.0 ? 1.0 : SSRTexelReflected.a;
    alpha = min(lastFrameAlpha, alpha);
    gl_FragColor = vec4(finalSSR, alpha);
  }

  vec2 RayMarch(vec3 dir, inout vec3 hitPos, inout float rayHitDepthDifference) {
    dir=normalize(dir);
    dir *= rayDistance / float(steps);
    float depth;
    vec4 projectedCoord;
    vec4 lastProjectedCoord;
    float unpackedDepth;
    vec4 depthTexel;

    for (int i = 0; i < steps; i++) {
      hitPos += dir;
      projectedCoord = _projectionMatrix * vec4(hitPos, 1.0);
      projectedCoord.xy /= projectedCoord.w;
      projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;

      #ifndef missedRays
        if (
          projectedCoord.x < 0.0 ||
          projectedCoord.x > 1.0 ||
          projectedCoord.y < 0.0 ||
          projectedCoord.y > 1.0
        ) {
          return INVALID_RAY_COORDS;
        }
      #endif

      depthTexel = textureLod(depthTexture, projectedCoord.xy, 0.0);
      unpackedDepth = unpackRGBAToDepth(depthTexel);
      depth = fastGetViewZ(unpackedDepth);
      rayHitDepthDifference = depth - hitPos.z;

      if (rayHitDepthDifference >= 0.0 && rayHitDepthDifference < thickness){
        #if refineSteps == 0
          if (dot(depthTexel.rgb, depthTexel.rgb) < FLOAT_EPSILON) return INVALID_RAY_COORDS;
        #else
          return BinarySearch(dir, hitPos, rayHitDepthDifference);
        #endif
      }

      #ifndef missedRays
        if (hitPos.z > 0.0) return INVALID_RAY_COORDS;
      #endif

      lastProjectedCoord = projectedCoord;
    }
    
    hitPos.z = 1.0;

    #ifndef missedRays
      return INVALID_RAY_COORDS;
    #endif

    rayHitDepthDifference = unpackedDepth;

    return projectedCoord.xy;
  }

  vec2 BinarySearch(in vec3 dir, inout vec3 hitPos, inout float rayHitDepthDifference) {
    float depth;
    vec4 projectedCoord;
    vec2 lastMinProjectedCoordXY;
    float unpackedDepth;
    vec4 depthTexel;

    for (int i = 0; i < refineSteps; i++){
      projectedCoord = _projectionMatrix * vec4(hitPos, 1.0);
      projectedCoord.xy /= projectedCoord.w;
      projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;
      depthTexel = textureLod(depthTexture, projectedCoord.xy, 0.0);
      unpackedDepth = unpackRGBAToDepth(depthTexel);
      depth = fastGetViewZ(unpackedDepth);
      rayHitDepthDifference = depth - hitPos.z;
      dir *= 0.5;

      if (rayHitDepthDifference > 0.0) {
        hitPos -= dir;
      } else {
        hitPos += dir;
      }
    }
    
    if (dot(depthTexel.rgb, depthTexel.rgb) < FLOAT_EPSILON) return INVALID_RAY_COORDS;
    if (abs(rayHitDepthDifference) > maxDepthDifference) return INVALID_RAY_COORDS;

    projectedCoord = _projectionMatrix*vec4(hitPos, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;
    rayHitDepthDifference = unpackedDepth;
    return projectedCoord.xy;
  }

  float fastGetViewZ(const in float depth){
    #ifdef PERSPECTIVE_CAMERA
      return nearMulFar / (farMinusNear * depth - cameraFar);
    #else
      return depth * nearMinusFar - cameraNear;
    #endif
  }

  #include <common>
  #include <cube_uv_reflection_fragment>

  vec3 getIBLRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness){
    #if defined(ENVMAP_TYPE_CUBE_UV)
      vec3 reflectVec = reflect(-viewDir, normal);
      reflectVec = normalize(mix(reflectVec, normal,roughness * roughness));
      reflectVec = inverseTransformDirection(reflectVec, viewMatrix);
      vec4 envMapColor = textureCubeUV(envMap, reflectVec, roughness);
      return envMapColor.rgb * intensity;
    #else
      return vec3(0.0);
    #endif
  }
`;class kr extends se{constructor(){super({type:"ReflectionsMaterial",uniforms:{inputTexture:new c(null),accumulatedTexture:new c(null),normalTexture:new c(null),depthTexture:new c(null),_projectionMatrix:new c(new F),_inverseProjectionMatrix:new c(new F),cameraMatrixWorld:new c(new F),cameraNear:new c(0),cameraFar:new c(0),rayDistance:new c(0),intensity:new c(0),roughnessFade:new c(0),fade:new c(0),thickness:new c(0),ior:new c(0),maxDepthDifference:new c(0),jitter:new c(0),jitterRoughness:new c(0),maxRoughness:new c(0),samples:new c(0),envMap:new c(null),envMapPosition:new c(new P),envMapSize:new c(new P),viewMatrix:new c(new F)},defines:{steps:20,refineSteps:5,CUBEUV_TEXEL_WIDTH:0,CUBEUV_TEXEL_HEIGHT:0,CUBEUV_MAX_MIP:0,vWorldPosition:"worldPos"},fragmentShader:Br,vertexShader:lt,toneMapped:!1,depthWrite:!1,depthTest:!1})}}const ct=a=>{const e=[a],t=[];for(;e.length!==0;){const r=e.shift();r.material&&t.push(r);for(const i of r.children)i.visible&&e.push(i)}return t},Wr=a=>{const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}},Ke=(a,e,t)=>{a.uniforms.envMap.value=e;const r=Wr({envMapCubeUVHeight:t});a.defines.ENVMAP_TYPE_CUBE_UV="",a.defines.CUBEUV_TEXEL_WIDTH=r.texelWidth,a.defines.CUBEUV_TEXEL_HEIGHT=r.texelHeight,a.defines.CUBEUV_MAX_MIP=r.maxMip+".0",a.needsUpdate=!0},Hr=()=>{try{const a=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&a.getContext("webgl2"))}catch{return!1}};class Gr extends de{constructor(e,t={}){super("ReflectionsPass"),this.ssrEffect=void 0,this.cachedMaterials=new WeakMap,this.USE_MRT=!1,this.webgl1DepthPass=null,this.visibleMeshes=[],this.ssrEffect=e,this._scene=e._scene,this._camera=e._camera,this.fullscreenMaterial=new kr,e._camera.isPerspectiveCamera&&(this.fullscreenMaterial.defines.PERSPECTIVE_CAMERA="");const r=t.width||typeof window<"u"?window.innerWidth:2e3,i=t.height||typeof window<"u"?window.innerHeight:1e3;this.renderTarget=new ie(r,i,{minFilter:b,magFilter:b,type:Y,depthBuffer:!1}),this.renderPass=new Jt(this._scene,this._camera),this.USE_MRT=Hr(),this.USE_MRT?(this.gBuffersRenderTarget=new Qt(r,i,2,{minFilter:b,magFilter:b}),this.normalTexture=this.gBuffersRenderTarget.texture[0],this.depthTexture=this.gBuffersRenderTarget.texture[1]):(this.webgl1DepthPass=new er(this._scene,this._camera),this.webgl1DepthPass.renderTarget.minFilter=b,this.webgl1DepthPass.renderTarget.magFilter=b,this.webgl1DepthPass.renderTarget.texture.minFilter=b,this.webgl1DepthPass.renderTarget.texture.magFilter=b,this.webgl1DepthPass.setSize(typeof window<"u"?window.innerWidth:2e3,typeof window<"u"?window.innerHeight:1e3),this.gBuffersRenderTarget=new ie(r,i,{minFilter:b,magFilter:b}),this.normalTexture=this.gBuffersRenderTarget.texture,this.depthTexture=this.webgl1DepthPass.texture),this.fullscreenMaterial.uniforms.normalTexture.value=this.normalTexture,this.fullscreenMaterial.uniforms.depthTexture.value=this.depthTexture,this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssrEffect.temporalResolvePass.accumulatedTexture,this.fullscreenMaterial.uniforms.cameraMatrixWorld.value=this._camera.matrixWorld,this.fullscreenMaterial.uniforms._projectionMatrix.value=this._camera.projectionMatrix,this.fullscreenMaterial.uniforms._inverseProjectionMatrix.value=this._camera.projectionMatrixInverse}setSize(e,t){this.renderTarget.setSize(e*this.ssrEffect.resolutionScale,t*this.ssrEffect.resolutionScale),this.gBuffersRenderTarget.setSize(e*this.ssrEffect.resolutionScale,t*this.ssrEffect.resolutionScale),this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssrEffect.temporalResolvePass.accumulatedTexture,this.fullscreenMaterial.needsUpdate=!0}dispose(){this.renderTarget.dispose(),this.gBuffersRenderTarget.dispose(),this.renderPass.dispose(),this.USE_MRT||this.webgl1DepthPass.dispose(),this.fullscreenMaterial.dispose(),this.normalTexture=null,this.depthTexture=null,this.velocityTexture=null}keepMaterialMapUpdated(e,t,r,i){this.ssrEffect[i]?t[r]!==e[r]&&(e[r]=t[r],e.uniforms[r].value=t[r],t[r]?e.defines[i]="":delete e.defines[i],e.needsUpdate=!0):e[r]!==void 0&&(e[r]=void 0,e.uniforms[r].value=void 0,delete e.defines[i],e.needsUpdate=!0)}setMRTMaterialInScene(){this.visibleMeshes=ct(this._scene);for(const e of this.visibleMeshes)if(e.material){const t=e.material;let[r,i]=this.cachedMaterials.get(e)||[];if(t!==r){i&&i.dispose(),i=new jr,this.USE_MRT&&(i.defines.USE_MRT=""),i.normalScale=t.normalScale,i.uniforms.normalScale.value=t.normalScale;const o=t.map||t.normalMap||t.roughnessMap||t.metalnessMap;o&&(i.uniforms.uvTransform.value=o.matrix),this.cachedMaterials.set(e,[t,i])}this.keepMaterialMapUpdated(i,t,"normalMap","useNormalMap"),this.keepMaterialMapUpdated(i,t,"roughnessMap","useRoughnessMap"),i.uniforms.roughness.value=this.ssrEffect.selection.size===0||this.ssrEffect.selection.has(e)?t.roughness||0:1e11,e.material=i}}unsetMRTMaterialInScene(){for(const t of this.visibleMeshes){var e;if(((e=t.material)==null?void 0:e.type)==="MRTMaterial"){t.visible=!0;const[r]=this.cachedMaterials.get(t);t.material=r}}}render(e,t){this.setMRTMaterialInScene(),e.setRenderTarget(this.gBuffersRenderTarget),this.renderPass.render(e,this.gBuffersRenderTarget),this.unsetMRTMaterialInScene(),this.USE_MRT||this.webgl1DepthPass.renderPass.render(e,this.webgl1DepthPass.renderTarget),this.fullscreenMaterial.uniforms.inputTexture.value=t.texture,this.fullscreenMaterial.uniforms.samples.value=this.ssrEffect.temporalResolvePass.samples,this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,this.fullscreenMaterial.uniforms.viewMatrix.value.copy(this._camera.matrixWorldInverse),e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}const Ye={intensity:1,exponent:1,distance:10,fade:0,roughnessFade:1,thickness:10,ior:1.45,maxRoughness:1,maxDepthDifference:10,blend:.9,correction:1,correctionRadius:1,blur:.5,blurKernel:1,blurSharpness:10,jitter:0,jitterRoughness:0,steps:20,refineSteps:5,missedRays:!0,useNormalMap:!0,useRoughnessMap:!0,resolutionScale:1,velocityResolutionScale:1},Xr=`
  uniform sampler2D inputTexture;
  uniform sampler2D accumulatedTexture;
  uniform sampler2D velocityTexture;
  uniform sampler2D lastVelocityTexture;
  uniform float blend;
  uniform float correction;
  uniform float exponent;
  uniform float samples;
  uniform vec2 invTexSize;
  uniform mat4 curInverseProjectionMatrix;
  uniform mat4 curCameraMatrixWorld;
  uniform mat4 prevInverseProjectionMatrix;
  uniform mat4 prevCameraMatrixWorld;
  varying vec2 vUv;

  #define MAX_NEIGHBOR_DEPTH_DIFFERENCE 0.001
  #define FLOAT_EPSILON 0.00001
  #define FLOAT_ONE_MINUS_EPSILON 0.99999

  vec3 transformexponent;
  vec3 undoColorTransformExponent;

  vec3 transformColor(vec3 color) {
    if (exponent == 1.0) return color;
    return pow(abs(color), transformexponent);
  }

  vec3 undoColorTransform(vec3 color) {
    if (exponent == 1.0) return color;
    return max(pow(abs(color), undoColorTransformExponent), vec3(0.0));
  }

  void main() {
    if (exponent != 1.0){
      transformexponent = vec3(1.0 / exponent);
      undoColorTransformExponent = vec3(exponent);
    }

    vec4 inputTexel = textureLod(inputTexture, vUv, 0.0);
    vec4 accumulatedTexel;
    vec3 inputColor = transformColor(inputTexel.rgb);
    vec3 accumulatedColor;
    float alpha = inputTexel.a;
    float velocityDisocclusion;
    bool didReproject = false;

    #ifdef boxBlur
      vec3 boxBlurredColor = inputTexel.rgb;
    #endif

    vec4 velocity = textureLod(velocityTexture, vUv, 0.0);
    bool isMoving = alpha < 1.0 || dot(velocity.xy, velocity.xy) > 0.0;
    if (isMoving) {
      vec3 minNeighborColor = inputColor;
      vec3 maxNeighborColor = inputColor;
      vec3 col;
      vec2 neighborUv;
      vec2 reprojectedUv = vUv-velocity.xy;
      vec4 lastVelocity = textureLod(lastVelocityTexture, reprojectedUv, 0.0);
      float depth = velocity.b;
      float closestDepth = depth;
      float lastClosestDepth = lastVelocity.b;
      float neighborDepth;
      float lastNeighborDepth;

      for (int x = -correctionRadius; x <= correctionRadius; x++) {
        for (int y = -correctionRadius; y <= correctionRadius; y++) {
          if (x != 0 || y != 0) {
            neighborUv = vUv + vec2(x,y) * invTexSize;
            vec4 neigborVelocity = textureLod(velocityTexture, neighborUv, 0.0);
            neighborDepth = neigborVelocity.b;
            col = textureLod(inputTexture, neighborUv, 0.0).xyz;
            int absX = abs(x);
            int absY = abs(y);

            #ifdef dilation
              if (absX == 1 && absY == 1) {
                if (neighborDepth > closestDepth) {
                  velocity=neigborVelocity;
                  closestDepth=neighborDepth;
                }

                vec4 lastNeighborVelocity = textureLod(velocityTexture, vUv + vec2(x, y) * invTexSize, 0.0);
                lastNeighborDepth = lastNeighborVelocity.b;

                if (neighborDepth > closestDepth) {
                  lastVelocity = lastNeighborVelocity;
                  lastClosestDepth = lastNeighborDepth;
                }
              }
            #endif

            if (abs(depth-neighborDepth) < MAX_NEIGHBOR_DEPTH_DIFFERENCE) {
              #ifdef boxBlur
                if (absX <= 2 && absY <= 2) boxBlurredColor += col;
              #endif

              col = transformColor(col);
              minNeighborColor = min(col, minNeighborColor);
              maxNeighborColor = max(col, maxNeighborColor);
            }
          }
        }
      }

      float velocityLength = length(lastVelocity.xy - velocity.xy);
      velocityDisocclusion = (velocityLength - 0.000005) * 10.0;
      velocityDisocclusion *= velocityDisocclusion;
      reprojectedUv = vUv - velocity.xy;

      #ifdef boxBlur
        float pxRadius = correctionRadius > 5 ? 121.0 : pow(float(correctionRadius * 2 + 1), 2.0);
        boxBlurredColor /= pxRadius;
        boxBlurredColor = transformColor(boxBlurredColor);
      #endif

      if (
        reprojectedUv.x >=0.0 &&
        reprojectedUv.x <= 1.0 &&
        reprojectedUv.y >= 0.0 &&
        reprojectedUv.y <= 1.0
      ) {
        accumulatedTexel = textureLod(accumulatedTexture, reprojectedUv, 0.0);
        accumulatedColor = transformColor(accumulatedTexel.rgb);
        vec3 clampedColor = clamp(accumulatedColor, minNeighborColor, maxNeighborColor);
        accumulatedColor = mix(accumulatedColor, clampedColor, correction);
        didReproject = true;
      } else {
        #ifdef boxBlur
          accumulatedColor=boxBlurredColor;
        #else
          accumulatedColor=inputColor;
        #endif
      }

      if (velocity.r > FLOAT_ONE_MINUS_EPSILON && velocity.g > FLOAT_ONE_MINUS_EPSILON) {
        alpha = 0.0;
        velocityDisocclusion = 1.0;
      }
    } else {
      accumulatedColor = transformColor(textureLod(accumulatedTexture, vUv, 0.0).rgb);
    }

    vec3 outputColor = inputColor;

    #include <custom_compose_shader>

    gl_FragColor = vec4(undoColorTransform(outputColor), alpha);
  }
`;class qr extends se{constructor(e){const t=Xr.replace("#include <custom_compose_shader>",e);super({type:"TemporalResolveMaterial",uniforms:{inputTexture:new c(null),accumulatedTexture:new c(null),velocityTexture:new c(null),lastVelocityTexture:new c(null),samples:new c(1),blend:new c(.5),correction:new c(1),exponent:new c(1),invTexSize:new c(new V)},defines:{correctionRadius:1},vertexShader:lt,fragmentShader:t})}}const Zr=`
    #ifdef USE_SKINNING
      #ifdef BONE_TEXTURE
        uniform sampler2D prevBoneTexture;
        mat4 getPrevBoneMatrix( const in float i ) {
          float j = i * 4.0;
          float x = mod( j, float( boneTextureSize ) );
          float y = floor( j / float( boneTextureSize ) );
          float dx = 1.0 / float( boneTextureSize );
          float dy = 1.0 / float( boneTextureSize );
          y = dy * ( y + 0.5 );
          vec4 v1 = texture2D( prevBoneTexture, vec2( dx * ( x + 0.5 ), y ) );
          vec4 v2 = texture2D( prevBoneTexture, vec2( dx * ( x + 1.5 ), y ) );
          vec4 v3 = texture2D( prevBoneTexture, vec2( dx * ( x + 2.5 ), y ) );
          vec4 v4 = texture2D( prevBoneTexture, vec2( dx * ( x + 3.5 ), y ) );
          mat4 bone = mat4( v1, v2, v3, v4 );
          return bone;
        }
      #else
        uniform mat4 prevBoneMatrices[ MAX_BONES ];
        mat4 getPrevBoneMatrix( const in float i ) {
          mat4 bone = prevBoneMatrices[ int(i) ];
          return bone;
        }
      #endif
    #endif
`,Kr=`
    vec3 transformed;

    // Get the normal
    ${D.skinbase_vertex}
    ${D.beginnormal_vertex}
    ${D.skinnormal_vertex}
    ${D.defaultnormal_vertex}

    // Get the current vertex position
    transformed = vec3( position );
    ${D.skinning_vertex}
    newPosition = velocityMatrix * vec4( transformed, 1.0 );

    // Get the previous vertex position
    transformed = vec3( position );
    ${D.skinbase_vertex.replace(/mat4 /g,"").replace(/getBoneMatrix/g,"getPrevBoneMatrix")}
    ${D.skinning_vertex.replace(/vec4 /g,"")}
    prevPosition = prevVelocityMatrix * vec4( transformed, 1.0 );

    gl_Position = newPosition;
`;class Yr extends se{constructor(){super({uniforms:{prevVelocityMatrix:{value:new F},velocityMatrix:{value:new F},prevBoneTexture:{value:null},interpolateGeometry:{value:0},intensity:{value:1},boneTexture:{value:null},alphaTest:{value:0},map:{value:null},alphaMap:{value:null},opacity:{value:1}},vertexShader:`
                    #define MAX_BONES 1024

                    ${D.skinning_pars_vertex}
                    ${Zr}

                    uniform mat4 velocityMatrix;
                    uniform mat4 prevVelocityMatrix;
                    uniform float interpolateGeometry;
                    varying vec4 prevPosition;
                    varying vec4 newPosition;
          varying vec2 vHighPrecisionZW;

                    void main() {

                        ${Kr}

            vHighPrecisionZW = gl_Position.zw;

                    }`,fragmentShader:`
                    uniform float intensity;
                    varying vec4 prevPosition;
                    varying vec4 newPosition;
          varying vec2 vHighPrecisionZW;

                    void main() {
            #ifdef FULL_MOVEMENT
            gl_FragColor = vec4( 1., 1., 1. - gl_FragCoord.z, 0. );
            return;
            #endif

                        vec2 pos0 = (prevPosition.xy / prevPosition.w) * 0.5 + 0.5;
                        vec2 pos1 = (newPosition.xy / newPosition.w) * 0.5 + 0.5;

                        vec2 vel = pos1 - pos0;

            float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

                        gl_FragColor = vec4( vel, 1. - fragCoordZ, 0. );

                    }`}),this.isVelocityMaterial=!0}}const $r=new J(0),Jr=["visible","wireframe","side"];class Qr extends de{constructor(e,t){var r,i;super("VelocityPass"),this.cachedMaterials=new WeakMap,this.lastCameraTransform={position:new P,quaternion:new Q},this.visibleMeshes=[],this.renderedMeshesThisFrame=0,this.renderedMeshesLastFrame=0,this._scene=e,this._camera=t,this.renderTarget=new ie(((r=window)==null?void 0:r.innerWidth)||1e3,((i=window)==null?void 0:i.innerHeight)||1e3,{type:Y})}setVelocityMaterialInScene(){this.renderedMeshesThisFrame=0,this.visibleMeshes=ct(this._scene);for(const r of this.visibleMeshes){var e;const i=r.material;let[o,n]=this.cachedMaterials.get(r)||[];if(i!==o){var t;n=new Yr,n.lastMatrixWorld=new F,r.material=n,(t=r.skeleton)!=null&&t.boneTexture&&this.saveBoneTexture(r),this.cachedMaterials.set(r,[i,n])}if(n.uniforms.velocityMatrix.value.multiplyMatrices(this._camera.projectionMatrix,r.modelViewMatrix),r.userData.needsUpdatedReflections||i.map instanceof nr?("FULL_MOVEMENT"in n.defines||(n.needsUpdate=!0),n.defines.FULL_MOVEMENT=""):"FULL_MOVEMENT"in n.defines&&(delete n.defines.FULL_MOVEMENT,n.needsUpdate=!0),r.visible=this.cameraMovedThisFrame||!r.matrixWorld.equals(n.lastMatrixWorld)||r.skeleton||"FULL_MOVEMENT"in n.defines,r.material=n,!!r.visible){this.renderedMeshesThisFrame++;for(const s of Jr)n[s]=i[s];(e=r.skeleton)!=null&&e.boneTexture&&(n.defines.USE_SKINNING="",n.defines.BONE_TEXTURE="",n.uniforms.boneTexture.value=r.skeleton.boneTexture)}}}saveBoneTexture(e){let t=e.material.uniforms.prevBoneTexture.value;if(t&&t.image.width===e.skeleton.boneTexture.width)t=e.material.uniforms.prevBoneTexture.value,t.image.data.set(e.skeleton.boneTexture.image.data);else{var r;(r=t)==null||r.dispose();const i=e.skeleton.boneTexture.image.data.slice(),o=e.skeleton.boneTexture.image.width;t=new or(i,o,o,ce,sr),e.material.uniforms.prevBoneTexture.value=t,t.needsUpdate=!0}}unsetVelocityMaterialInScene(){for(const t of this.visibleMeshes)if(t.material.isVelocityMaterial){var e;t.visible=!0,t.material.lastMatrixWorld.copy(t.matrixWorld),t.material.uniforms.prevVelocityMatrix.value.multiplyMatrices(this._camera.projectionMatrix,t.modelViewMatrix),(e=t.skeleton)!=null&&e.boneTexture&&this.saveBoneTexture(t),t.material=this.cachedMaterials.get(t)[0]}}setSize(e,t){this.renderTarget.setSize(e,t)}renderVelocity(e){if(e.setRenderTarget(this.renderTarget),this.renderedMeshesThisFrame>0){const{background:t}=this._scene;this._scene.background=$r,e.render(this._scene,this._camera),this._scene.background=t}else e.clearColor()}checkCameraMoved(){const e=this.lastCameraTransform.position.distanceToSquared(this._camera.position),t=8*(1-this.lastCameraTransform.quaternion.dot(this._camera.quaternion));return e>1e-6||t>1e-6?(this.lastCameraTransform.position.copy(this._camera.position),this.lastCameraTransform.quaternion.copy(this._camera.quaternion),!0):!1}render(e){this.cameraMovedThisFrame=this.checkCameraMoved(),this.setVelocityMaterialInScene(),(this.renderedMeshesThisFrame>0||this.renderedMeshesLastFrame>0)&&this.renderVelocity(e),this.unsetVelocityMaterialInScene(),this.renderedMeshesLastFrame=this.renderedMeshesThisFrame}}const $e=new V;class ea extends de{constructor(e,t,r,i={}){super("TemporalResolvePass"),this.velocityPass=null,this.velocityResolutionScale=1,this.samples=1,this.lastCameraTransform={position:new P,quaternion:new Q},this._scene=e,this._camera=t,this.renderTarget=new ie(1,1,{minFilter:b,magFilter:b,type:Y,depthBuffer:!1}),this.velocityPass=new Qr(e,t),this.fullscreenMaterial=new qr(r),this.fullscreenMaterial.defines.correctionRadius=i.correctionRadius||1,i.dilation&&(this.fullscreenMaterial.defines.dilation=""),i.boxBlur&&(this.fullscreenMaterial.defines.boxBlur=""),this.setupFramebuffers(1,1),this.checkCanUseSharedVelocityTexture()}dispose(){this._scene.userData.velocityTexture===this.velocityPass.renderTarget.texture&&(delete this._scene.userData.velocityTexture,delete this._scene.userData.lastVelocityTexture),this.renderTarget.dispose(),this.accumulatedTexture.dispose(),this.fullscreenMaterial.dispose(),this.velocityPass.dispose()}setSize(e,t){this.renderTarget.setSize(e,t),this.velocityPass.setSize(e*this.velocityResolutionScale,t*this.velocityResolutionScale),this.velocityPass.renderTarget.texture.minFilter=this.velocityResolutionScale===1?H:b,this.velocityPass.renderTarget.texture.magFilter=this.velocityResolutionScale===1?H:b,this.velocityPass.renderTarget.texture.needsUpdate=!0,this.fullscreenMaterial.uniforms.invTexSize.value.set(1/e,1/t),this.setupFramebuffers(e,t)}setupFramebuffers(e,t){this.accumulatedTexture&&this.accumulatedTexture.dispose(),this.lastVelocityTexture&&this.lastVelocityTexture.dispose(),this.accumulatedTexture=new me(e,t,ce),this.accumulatedTexture.minFilter=b,this.accumulatedTexture.magFilter=b,this.accumulatedTexture.type=Y,this.lastVelocityTexture=new me(e*this.velocityResolutionScale,t*this.velocityResolutionScale,ce),this.lastVelocityTexture.minFilter=this.velocityResolutionScale===1?H:b,this.lastVelocityTexture.magFilter=this.velocityResolutionScale===1?H:b,this.lastVelocityTexture.type=Y,this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.accumulatedTexture,this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this.lastVelocityTexture,this.fullscreenMaterial.needsUpdate=!0}checkCanUseSharedVelocityTexture(){return this._scene.userData.velocityTexture&&this.velocityPass.renderTarget.texture!==this._scene.userData.velocityTexture?this.velocityPass.renderTarget.texture===this.fullscreenMaterial.uniforms.velocityTexture.value&&(this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this._scene.userData.lastVelocityTexture,this.fullscreenMaterial.uniforms.velocityTexture.value=this._scene.userData.velocityTexture,this.fullscreenMaterial.needsUpdate=!0):this.velocityPass.renderTarget.texture!==this.fullscreenMaterial.uniforms.velocityTexture.value&&(this.fullscreenMaterial.uniforms.velocityTexture.value=this.velocityPass.renderTarget.texture,this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this.lastVelocityTexture,this.fullscreenMaterial.needsUpdate=!0,this._scene.userData.velocityTexture||(this._scene.userData.velocityTexture=this.velocityPass.renderTarget.texture,this._scene.userData.lastVelocityTexture=this.lastVelocityTexture)),this.velocityPass.renderTarget.texture!==this.fullscreenMaterial.uniforms.velocityTexture.value}checkNeedsResample(){const e=this.lastCameraTransform.position.distanceToSquared(this._camera.position),t=8*(1-this.lastCameraTransform.quaternion.dot(this._camera.quaternion));(e>1e-6||t>1e-6)&&(this.samples=1,this.lastCameraTransform.position.copy(this._camera.position),this.lastCameraTransform.quaternion.copy(this._camera.quaternion))}render(e){this.samples++,this.checkNeedsResample(),this.fullscreenMaterial.uniforms.samples.value=this.samples,e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),e.copyFramebufferToTexture($e,this.accumulatedTexture),e.setRenderTarget(this.velocityPass.renderTarget),e.copyFramebufferToTexture($e,this.lastVelocityTexture)}}const Je=function(e,t){let r=1,i=0;for(;e>0;)r/=t,i+=r*(e%t),e=~~(e/t);return i},ta=a=>{const e=[];let t=1;const r=t+a;for(;t<r;t++)e.push([Je(t,2)-.5,Je(t,3)-.5]);return e};function Qe(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const ra=`
#if defined( USE_ENVMAP ) || defined(  ) || defined ( USE_SHADOWMAP )
    vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

    #ifdef BOX_PROJECTED_ENV_MAP
        vWorldPosition = worldPosition.xyz;
    #endif
#endif
`,aa=`
#ifdef BOX_PROJECTED_ENV_MAP
    uniform vec3 envMapSize;
    uniform vec3 envMapPosition;
    varying vec3 vWorldPosition;

    vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {
        vec3 nDir = normalize( v );

        vec3 rbmax = ( .5 * cubeSize + cubePos - vWorldPosition ) / nDir;
        vec3 rbmin = ( -.5 * cubeSize + cubePos - vWorldPosition ) / nDir;

        vec3 rbminmax;

        rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
        rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
        rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

        float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
        vec3 boxIntersection = vWorldPosition + nDir * correction;

        return boxIntersection - cubePos;
    }
#endif
`,ia=`
#ifdef BOX_PROJECTED_ENV_MAP
    worldNormal = parallaxCorrectNormal( worldNormal, envMapSize, envMapPosition );
#endif
`,na=`
#ifdef BOX_PROJECTED_ENV_MAP
    reflectVec = parallaxCorrectNormal( reflectVec, envMapSize, envMapPosition );
#endif
`;function oa(a,e,t){a.defines.BOX_PROJECTED_ENV_MAP="",a.uniforms.envMapPosition={value:e},a.uniforms.envMapSize={value:t};const r=new RegExp(Qe("vec3 worldNormal = inverseTransformDirection ( normal , viewMatrix ) ;").replaceAll(" ","\\s*"),"g"),i=new RegExp(Qe("reflectVec = inverseTransformDirection ( reflectVec , viewMatrix ) ;").replaceAll(" ","\\s*"),"g");a.vertexShader=`varying vec3 vWorldPosition;
`+a.vertexShader.replace("#include <worldpos_vertex>",ra),a.fragmentShader=aa+`
`+a.fragmentShader.replace("#include <envmap_physical_pars_fragment>",D.envmap_physical_pars_fragment).replace(r,`vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
                ${ia}`).replace(i,`reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
                ${na}`)}const sa=["blur","blurSharpness","blurKernel"],la=new at(1);let ae;class ca extends oe{constructor(e,t,r=Ye){super("SSREffect",Lr,{type:"FinalSSRMaterial",uniforms:new Map([["reflectionsTexture",new c(null)],["blur",new c(0)],["blurSharpness",new c(0)],["blurKernel",new c(0)]]),defines:new Map([["RENDER_MODE","0"]])}),this.haltonSequence=ta(1024),this.haltonIndex=0,this.selection=new Kt,this.lastSize=void 0,this.cubeCamera=new Yt(.001,1e3,la),this.usingBoxProjectedEnvMap=!1,this._scene=e,this._camera=t,r={...Ye,...r,...{boxBlur:!0,dilation:!0}},this.temporalResolvePass=new ea(e,t,Ir,r),this.uniforms.get("reflectionsTexture").value=this.temporalResolvePass.renderTarget.texture,this.reflectionsPass=new Gr(this,r),this.temporalResolvePass.fullscreenMaterial.uniforms.inputTexture.value=this.reflectionsPass.renderTarget.texture,this.lastSize={width:r.width,height:r.height,resolutionScale:r.resolutionScale,velocityResolutionScale:r.velocityResolutionScale},this.setSize(r.width,r.height),this.makeOptionsReactive(r)}makeOptionsReactive(e){let t=!1;const r=this.reflectionsPass.fullscreenMaterial.uniforms,i=Object.keys(r);for(const o of Object.keys(e))Object.defineProperty(this,o,{get(){return e[o]},set(n){if(!(e[o]===n&&t))switch(e[o]=n,sa.includes(o)||this.setSize(this.lastSize.width,this.lastSize.height,!0),o){case"resolutionScale":this.setSize(this.lastSize.width,this.lastSize.height);break;case"velocityResolutionScale":this.temporalResolvePass.velocityResolutionScale=n,this.setSize(this.lastSize.width,this.lastSize.height,!0);break;case"blur":this.uniforms.get("blur").value=n;break;case"blurSharpness":this.uniforms.get("blurSharpness").value=n;break;case"blurKernel":this.uniforms.get("blurKernel").value=n;break;case"steps":this.reflectionsPass.fullscreenMaterial.defines.steps=parseInt(n),this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"refineSteps":this.reflectionsPass.fullscreenMaterial.defines.refineSteps=parseInt(n),this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"missedRays":n?this.reflectionsPass.fullscreenMaterial.defines.missedRays="":delete this.reflectionsPass.fullscreenMaterial.defines.missedRays,this.reflectionsPass.fullscreenMaterial.needsUpdate=t;break;case"correctionRadius":this.temporalResolvePass.fullscreenMaterial.defines.correctionRadius=Math.round(n),this.temporalResolvePass.fullscreenMaterial.needsUpdate=t;break;case"blend":this.temporalResolvePass.fullscreenMaterial.uniforms.blend.value=n;break;case"correction":this.temporalResolvePass.fullscreenMaterial.uniforms.correction.value=n;break;case"exponent":this.temporalResolvePass.fullscreenMaterial.uniforms.exponent.value=n;break;case"distance":r.rayDistance.value=n;default:i.includes(o)&&(r[o].value=n)}}}),this[o]=e[o];t=!0}setSize(e,t,r=!1){!r&&e===this.lastSize.width&&t===this.lastSize.height&&this.resolutionScale===this.lastSize.resolutionScale&&this.velocityResolutionScale===this.lastSize.velocityResolutionScale||(this.temporalResolvePass.setSize(e,t),this.reflectionsPass.setSize(e,t),this.lastSize={width:e,height:t,resolutionScale:this.resolutionScale,velocityResolutionScale:this.velocityResolutionScale})}generateBoxProjectedEnvMapFallback(e,t=new P,r=new P,i=512){this.cubeCamera.renderTarget.dispose(),this.cubeCamera.renderTarget=new at(i),this.cubeCamera.position.copy(t),this.cubeCamera.updateMatrixWorld(),this.cubeCamera.update(e,this._scene),ae||(ae=new $t(e),ae.compileCubemapShader());const o=ae.fromCubemap(this.cubeCamera.renderTarget.texture).texture;o.minFilter=b,o.magFilter=b;const n=this.reflectionsPass.fullscreenMaterial;return oa(n,t,r),n.fragmentShader=n.fragmentShader.replace("vec3 worldPos","worldPos").replace("varying vec3 vWorldPosition;","vec3 worldPos;"),n.uniforms.envMapPosition.value.copy(t),n.uniforms.envMapSize.value.copy(r),Ke(n,o,i),this.usingBoxProjectedEnvMap=!0,o}setIBLRadiance(e,t){this._scene.traverse(r=>{if(r.material){var i;const o=(i=t.properties.get(r.material))==null?void 0:i.uniforms;o&&"disableIBLRadiance"in o&&(o.disableIBLRadiance.value=e)}})}deleteBoxProjectedEnvMapFallback(){const e=this.reflectionsPass.fullscreenMaterial;e.uniforms.envMap.value=null,e.fragmentShader=e.fragmentShader.replace("worldPos = ","vec3 worldPos = "),delete e.defines.BOX_PROJECTED_ENV_MAP,e.needsUpdate=!0,this.usingBoxProjectedEnvMap=!1}dispose(){super.dispose(),this.reflectionsPass.dispose(),this.temporalResolvePass.dispose()}update(e,t){if(!this.usingBoxProjectedEnvMap&&this._scene.environment){const s=this.reflectionsPass.fullscreenMaterial;let f=null;if(this._scene.traverse(u=>{if(!f&&u.material&&!u.material.envMap){const v=e.properties.get(u.material);"envMap"in v&&v.envMap instanceof rt&&(f=v.envMap)}}),f){const u=this._scene.environment.image.height;Ke(s,f,u)}}this.haltonIndex=(this.haltonIndex+1)%this.haltonSequence.length;const[r,i]=this.haltonSequence[this.haltonIndex],{width:o,height:n}=this.lastSize;this.temporalResolvePass.velocityPass.render(e),this._camera.setViewOffset&&this._camera.setViewOffset(o,n,r,i,o,n),this.reflectionsPass.render(e,t),this.temporalResolvePass.render(e),this._camera.clearViewOffset()}static patchDirectEnvIntensity(e=0){e===0?D.envmap_physical_pars_fragment=D.envmap_physical_pars_fragment.replace("vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {","vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) { return vec3(0.0);"):D.envmap_physical_pars_fragment=D.envmap_physical_pars_fragment.replace("vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );","vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness ) * "+e.toFixed(5)+";")}}const ka=l.forwardRef(function({ENABLE_BLUR:e=!0,USE_MRT:t=!0,...r},i){const{invalidate:o}=N(),{scene:n,camera:s}=l.useContext(I),f=l.useMemo(()=>new ca(n,s,{ENABLE_BLUR:e,USE_MRT:t,...r}),[n,s,e,t,r]),u=l.useContext(ee);return l.useEffect(()=>{var v;if(u&&u.enabled&&(v=u.selected)!=null&&v.length)return f.selection.set(u.selected),o(),()=>{f.selection.clear(),o()}},[u]),x.jsx("primitive",{ref:i,object:f,...r})});export{Ba as ASCII,va as Autofocus,ma as Bloom,ha as BrightnessContrast,xa as ChromaticAberration,ga as ColorAverage,ya as ColorDepth,_a as Depth,Pr as DepthOfField,wa as DotScreen,Ga as EffectComposer,I as EffectComposerContext,Na as FXAA,Ma as Glitch,Ta as GodRays,ba as Grid,Sa as HueSaturation,Va as LUT,pa as LensFlare,Er as LensFlareEffect,Xa as N8AO,Ca as Noise,Pa as Outline,Ra as Pixelation,qa as SMAA,Aa as SSAO,ka as SSR,Ea as Scanline,da as Select,ua as Selection,Da as SelectiveBloom,za as Sepia,La as ShockWave,Oa as Texture,Ia as TiltShift,ja as TiltShift2,Nr as TiltShiftEffect,Ua as ToneMapping,Fa as Vignette,L as resolveRef,ee as selectionContext,te as useVector2,R as wrapEffect};
