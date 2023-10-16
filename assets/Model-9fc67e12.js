import{r as o,c as We,j as p}from"./index-3f34ffb3.js";import{u as Te,a as ie,_ as ae,D as De,V as A,O as ce,P as le,b as B,G as Z,c as Oe,M as N,d as z}from"./Projects-db1b1e1e.js";const W=new A,U=new A,$e=new A;function Fe(e,t,r){const n=W.setFromMatrixPosition(e.matrixWorld);n.project(t);const s=r.width/2,a=r.height/2;return[n.x*s+s,-(n.y*a)+a]}function He(e,t){const r=W.setFromMatrixPosition(e.matrixWorld),n=U.setFromMatrixPosition(t.matrixWorld),s=r.sub(n),a=t.getWorldDirection($e);return s.angleTo(a)>Math.PI/2}function ze(e,t,r,n){const s=W.setFromMatrixPosition(e.matrixWorld),a=s.clone();a.project(t),r.setFromCamera(a,t);const h=r.intersectObjects(n,!0);if(h.length){const c=h[0].distance;return s.distanceTo(r.ray.origin)<c}return!0}function Le(e,t){if(t instanceof ce)return t.zoom;if(t instanceof le){const r=W.setFromMatrixPosition(e.matrixWorld),n=U.setFromMatrixPosition(t.matrixWorld),s=t.fov*Math.PI/180,a=r.distanceTo(n);return 1/(2*Math.tan(s/2)*a)}else return 1}function Ae(e,t,r){if(t instanceof le||t instanceof ce){const n=W.setFromMatrixPosition(e.matrixWorld),s=U.setFromMatrixPosition(t.matrixWorld),a=n.distanceTo(s),h=(r[1]-r[0])/(t.far-t.near),c=r[1]-h*t.far;return Math.round(h*a+c)}}const _=e=>Math.abs(e)<1e-10?0:e;function ue(e,t,r=""){let n="matrix3d(";for(let s=0;s!==16;s++)n+=_(t[s]*e.elements[s])+(s!==15?",":")");return r+n}const Ve=(e=>t=>ue(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Ie=(e=>(t,r)=>ue(t,e(r),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function ke(e){return e&&typeof e=="object"&&"current"in e}const Ge=o.forwardRef(({children:e,eps:t=.001,style:r,className:n,prepend:s,center:a,fullscreen:h,portal:c,distanceFactor:g,sprite:me=!1,transform:y=!1,occlude:l,onOcclude:q,castShadow:fe,receiveShadow:xe,material:pe,geometry:J,zIndexRange:D=[16777271,0],calculatePosition:K=Fe,as:ye="div",wrapperClass:V,pointerEvents:Q="auto",...v},X)=>{const{gl:Y,camera:u,scene:ee,size:m,raycaster:ge,events:ve,viewport:Me}=Te(),[d]=o.useState(()=>document.createElement(ye)),I=o.useRef(),x=o.useRef(null),te=o.useRef(0),O=o.useRef([0,0]),C=o.useRef(null),k=o.useRef(null),j=(c==null?void 0:c.current)||ve.connected||Y.domElement.parentNode,P=o.useRef(null),$=o.useRef(!1),F=o.useMemo(()=>l&&l!=="blending"||Array.isArray(l)&&l.length&&ke(l[0]),[l]);o.useLayoutEffect(()=>{const f=Y.domElement;l&&l==="blending"?(f.style.zIndex=`${Math.floor(D[0]/2)}`,f.style.position="absolute",f.style.pointerEvents="none"):(f.style.zIndex=null,f.style.position=null,f.style.pointerEvents=null)},[l]),o.useLayoutEffect(()=>{if(x.current){const f=I.current=We(d);if(ee.updateMatrixWorld(),y)d.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const i=K(x.current,u,m);d.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${i[0]}px,${i[1]}px,0);transform-origin:0 0;`}return j&&(s?j.prepend(d):j.appendChild(d)),()=>{j&&j.removeChild(d),f.unmount()}}},[j,y]),o.useLayoutEffect(()=>{V&&(d.className=V)},[V]);const re=o.useMemo(()=>y?{position:"absolute",top:0,left:0,width:m.width,height:m.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:a?"translate3d(-50%,-50%,0)":"none",...h&&{top:-m.height/2,left:-m.width/2,width:m.width,height:m.height},...r},[r,a,h,m,y]),Pe=o.useMemo(()=>({position:"absolute",pointerEvents:Q}),[Q]);o.useLayoutEffect(()=>{if($.current=!1,y){var f;(f=I.current)==null||f.render(o.createElement("div",{ref:C,style:re},o.createElement("div",{ref:k,style:Pe},o.createElement("div",{ref:X,className:n,style:r,children:e}))))}else{var i;(i=I.current)==null||i.render(o.createElement("div",{ref:X,style:re,className:n,children:e}))}});const E=o.useRef(!0);ie(f=>{if(x.current){u.updateMatrixWorld(),x.current.updateWorldMatrix(!0,!1);const i=y?O.current:K(x.current,u,m);if(y||Math.abs(te.current-u.zoom)>t||Math.abs(O.current[0]-i[0])>t||Math.abs(O.current[1]-i[1])>t){const b=He(x.current,u);let M=!1;F&&(Array.isArray(l)?M=l.map(w=>w.current):l!=="blending"&&(M=[ee]));const R=E.current;if(M){const w=ze(x.current,u,ge,M);E.current=w&&!b}else E.current=!b;R!==E.current&&(q?q(!E.current):d.style.display=E.current?"block":"none");const H=Math.floor(D[0]/2),be=l?F?[D[0],H]:[H-1,0]:D;if(d.style.zIndex=`${Ae(x.current,u,be)}`,y){const[w,oe]=[m.width/2,m.height/2],G=u.projectionMatrix.elements[5]*oe,{isOrthographicCamera:se,top:we,left:Se,bottom:je,right:Ee}=u,Ce=Ve(u.matrixWorldInverse),Re=se?`scale(${G})translate(${_(-(Ee+Se)/2)}px,${_((we+je)/2)}px)`:`translateZ(${G}px)`;let S=x.current.matrixWorld;me&&(S=u.matrixWorldInverse.clone().transpose().copyPosition(S).scale(x.current.scale),S.elements[3]=S.elements[7]=S.elements[11]=0,S.elements[15]=1),d.style.width=m.width+"px",d.style.height=m.height+"px",d.style.perspective=se?"":`${G}px`,C.current&&k.current&&(C.current.style.transform=`${Re}${Ce}translate(${w}px,${oe}px)`,k.current.style.transform=Ie(S,1/((g||10)/400)))}else{const w=g===void 0?1:Le(x.current,u)*g;d.style.transform=`translate3d(${i[0]}px,${i[1]}px,0) scale(${w})`}O.current=i,te.current=u.zoom}}if(!F&&P.current&&!$.current)if(y){if(C.current){const i=C.current.children[0];if(i!=null&&i.clientWidth&&i!=null&&i.clientHeight){const{isOrthographicCamera:b}=u;if(b||J)v.scale&&(Array.isArray(v.scale)?v.scale instanceof A?P.current.scale.copy(v.scale.clone().divideScalar(1)):P.current.scale.set(1/v.scale[0],1/v.scale[1],1/v.scale[2]):P.current.scale.setScalar(1/v.scale));else{const M=(g||10)/400,R=i.clientWidth*M,H=i.clientHeight*M;P.current.scale.set(R,H,1)}$.current=!0}}}else{const i=d.children[0];if(i!=null&&i.clientWidth&&i!=null&&i.clientHeight){const b=1/Me.factor,M=i.clientWidth*b,R=i.clientHeight*b;P.current.scale.set(M,R,1),$.current=!0}P.current.lookAt(f.camera.position)}});const ne=o.useMemo(()=>({vertexShader:y?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[y]);return o.createElement("group",ae({},v,{ref:x}),l&&!F&&o.createElement("mesh",{castShadow:fe,receiveShadow:xe,ref:P},J||o.createElement("planeGeometry",null),pe||o.createElement("shaderMaterial",{side:De,vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader})))});let L=null,de="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function he(e,t,r){return n=>{r&&r(n),e&&(L||(L=new Oe),L.setDecoderPath(typeof e=="string"?e:de),n.setDRACOLoader(L)),t&&n.setMeshoptDecoder(typeof N=="function"?N():N)}}function T(e,t=!0,r=!0,n){return B(Z,e,he(t,r,n))}T.preload=(e,t=!0,r=!0,n)=>B.preload(Z,e,he(t,r,n));T.clear=e=>B.clear(Z,e);T.setDecoderPath=e=>{de=e};function Ne(e,t){const r=e+"Geometry";return o.forwardRef(({args:n,children:s,...a},h)=>{const c=o.useRef(null);return o.useImperativeHandle(h,()=>c.current),o.useLayoutEffect(()=>void(t==null?void 0:t(c.current))),o.createElement("mesh",ae({ref:c},a),o.createElement(r,{attach:"geometry",args:n}),s)})}const _e=Ne("plane"),Be="_htmlMain_1lssb_1",Ze={htmlMain:Be};function Je(e){const{nodes:t,materials:r}=T("./TEST.glb"),n=o.useRef(),s=o.useRef(),a=o.useRef(),h=e.Hovered;return ie(c=>{const g=c.clock.getElapsedTime();n.current.rotation.x=z.lerp(n.current.rotation.x,Math.cos(g/2)/20+.25,.1),n.current.rotation.y=z.lerp(n.current.rotation.y,Math.sin(g/25)/45,.1),n.current.rotation.z=z.lerp(n.current.rotation.z,Math.sin(g/10)/50,.8),n.current.position.y=z.lerp(n.current.position.y,(-2+Math.sin(g/2))/7,.8),s.current.rotation.y+=.01,a.current.rotation.y+=-.01}),p.jsx("group",{...e,dispose:null,ref:n,children:p.jsxs("group",{scale:[10,10,10],"rotation-x":-276,"rotation-z":45,children:[p.jsx("group",{ref:s,children:p.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Circle.geometry,material:r["Material.005"],rotation:[0,-1.4,0],scale:1.1,userData:{name:"Circle"}})}),p.jsx("group",{ref:a,children:p.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Circle001.geometry,material:r["Material.006"],position:[0,.1,0],scale:[.9,1.1,.9],userData:{name:"Circle.001"}})}),p.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Circle002.geometry,material:r["Material.007"],position:[0,.3,0],scale:.4,userData:{name:"Circle.002"}}),p.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Circle003.geometry,material:r["Material.008"],position:[0,.2,0],scale:.7,userData:{name:"Circle.003"}}),p.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.Circle004.geometry,material:r["Material.009"],position:[0,.3,0],scale:.2,userData:{name:"Circle.004"},children:p.jsx(_e,{visible:!1,scale:[10,10,1],position:[0,2,-2],children:p.jsx(Ge,{className:Ze.htmlMain,"rotation-x":-Math.PI*2,position:[1e-4,0,1],transform:!0,scale:.08,center:!0,style:{opacity:"0.8",width:"100%",height:"100%"},children:p.jsx("div",{style:{height:"100%"},onPointerDown:c=>c.stopPropagation(),children:h})})})})]})})}T.preload("./TEST.glb");export{Je as default};
