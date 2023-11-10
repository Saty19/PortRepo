import{r as o,a4 as Se,at as Me,a5 as re,l as F,au as be,e as _e,ap as oe,P as ne,av as se,j as i,aw as z}from"./index-71b8fcd3.js";const T=new F,V=new F,je=new F;function Ce(t,e,r){const n=T.setFromMatrixPosition(t.matrixWorld);n.project(e);const a=r.width/2,c=r.height/2;return[n.x*a+a,-(n.y*c)+c]}function Be(t,e){const r=T.setFromMatrixPosition(t.matrixWorld),n=V.setFromMatrixPosition(e.matrixWorld),a=r.sub(n),c=e.getWorldDirection(je);return a.angleTo(c)>Math.PI/2}function Ee(t,e,r,n){const a=T.setFromMatrixPosition(t.matrixWorld),c=a.clone();c.project(e),r.setFromCamera(c,e);const x=r.intersectObjects(n,!0);if(x.length){const w=x[0].distance;return a.distanceTo(r.ray.origin)<w}return!0}function Te(t,e){if(e instanceof oe)return e.zoom;if(e instanceof ne){const r=T.setFromMatrixPosition(t.matrixWorld),n=V.setFromMatrixPosition(e.matrixWorld),a=e.fov*Math.PI/180,c=r.distanceTo(n);return 1/(2*Math.tan(a/2)*c)}else return 1}function We(t,e,r){if(e instanceof ne||e instanceof oe){const n=T.setFromMatrixPosition(t.matrixWorld),a=V.setFromMatrixPosition(e.matrixWorld),c=n.distanceTo(a),x=(r[1]-r[0])/(e.far-e.near),w=r[1]-x*e.far;return Math.round(x*c+w)}}const L=t=>Math.abs(t)<1e-10?0:t;function ie(t,e,r=""){let n="matrix3d(";for(let a=0;a!==16;a++)n+=L(e[a]*t.elements[a])+(a!==15?",":")");return r+n}const ke=(t=>e=>ie(e,t))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Re=(t=>(e,r)=>ie(e,t(r),"translate(-50%,-50%)"))(t=>[1/t,1/t,1/t,1,-1/t,-1/t,-1/t,-1,1/t,1/t,1/t,1,1,1,1,1]);function Oe(t){return t&&typeof t=="object"&&"current"in t}const $e=o.forwardRef(({children:t,eps:e=.001,style:r,className:n,prepend:a,center:c,fullscreen:x,portal:w,distanceFactor:y,sprite:_=!1,transform:g=!1,occlude:l,onOcclude:N,castShadow:ae,receiveShadow:ce,material:le,geometry:G,zIndexRange:W=[16777271,0],calculatePosition:Z=Ce,as:ue="div",wrapperClass:H,pointerEvents:K="auto",...v},U)=>{const{gl:q,camera:u,scene:J,size:h,raycaster:me,events:he,viewport:de}=Se(),[m]=o.useState(()=>document.createElement(ue)),A=o.useRef(),f=o.useRef(null),Q=o.useRef(0),k=o.useRef([0,0]),B=o.useRef(null),D=o.useRef(null),j=(w==null?void 0:w.current)||he.connected||q.domElement.parentNode,P=o.useRef(null),R=o.useRef(!1),O=o.useMemo(()=>l&&l!=="blending"||Array.isArray(l)&&l.length&&Oe(l[0]),[l]);o.useLayoutEffect(()=>{const d=q.domElement;l&&l==="blending"?(d.style.zIndex=`${Math.floor(W[0]/2)}`,d.style.position="absolute",d.style.pointerEvents="none"):(d.style.zIndex=null,d.style.position=null,d.style.pointerEvents=null)},[l]),o.useLayoutEffect(()=>{if(f.current){const d=A.current=Me(m);if(J.updateMatrixWorld(),g)m.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const s=Z(f.current,u,h);m.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${s[0]}px,${s[1]}px,0);transform-origin:0 0;`}return j&&(a?j.prepend(m):j.appendChild(m)),()=>{j&&j.removeChild(m),d.unmount()}}},[j,g]),o.useLayoutEffect(()=>{H&&(m.className=H)},[H]);const X=o.useMemo(()=>g?{position:"absolute",top:0,left:0,width:h.width,height:h.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:c?"translate3d(-50%,-50%,0)":"none",...x&&{top:-h.height/2,left:-h.width/2,width:h.width,height:h.height},...r},[r,c,x,h,g]),fe=o.useMemo(()=>({position:"absolute",pointerEvents:K}),[K]);o.useLayoutEffect(()=>{if(R.current=!1,g){var d;(d=A.current)==null||d.render(o.createElement("div",{ref:B,style:X},o.createElement("div",{ref:D,style:fe},o.createElement("div",{ref:U,className:n,style:r,children:t}))))}else{var s;(s=A.current)==null||s.render(o.createElement("div",{ref:U,style:X,className:n,children:t}))}});const C=o.useRef(!0);re(d=>{if(f.current){u.updateMatrixWorld(),f.current.updateWorldMatrix(!0,!1);const s=g?k.current:Z(f.current,u,h);if(g||Math.abs(Q.current-u.zoom)>e||Math.abs(k.current[0]-s[0])>e||Math.abs(k.current[1]-s[1])>e){const S=Be(f.current,u);let p=!1;O&&(Array.isArray(l)?p=l.map(M=>M.current):l!=="blending"&&(p=[J]));const E=C.current;if(p){const M=Ee(f.current,u,me,p);C.current=M&&!S}else C.current=!S;E!==C.current&&(N?N(!C.current):m.style.display=C.current?"block":"none");const $=Math.floor(W[0]/2),xe=l?O?[W[0],$]:[$-1,0]:W;if(m.style.zIndex=`${We(f.current,u,xe)}`,g){const[M,ee]=[h.width/2,h.height/2],I=u.projectionMatrix.elements[5]*ee,{isOrthographicCamera:te,top:ye,left:ge,bottom:ve,right:pe}=u,we=ke(u.matrixWorldInverse),Pe=te?`scale(${I})translate(${L(-(pe+ge)/2)}px,${L((ye+ve)/2)}px)`:`translateZ(${I}px)`;let b=f.current.matrixWorld;_&&(b=u.matrixWorldInverse.clone().transpose().copyPosition(b).scale(f.current.scale),b.elements[3]=b.elements[7]=b.elements[11]=0,b.elements[15]=1),m.style.width=h.width+"px",m.style.height=h.height+"px",m.style.perspective=te?"":`${I}px`,B.current&&D.current&&(B.current.style.transform=`${Pe}${we}translate(${M}px,${ee}px)`,D.current.style.transform=Re(b,1/((y||10)/400)))}else{const M=y===void 0?1:Te(f.current,u)*y;m.style.transform=`translate3d(${s[0]}px,${s[1]}px,0) scale(${M})`}k.current=s,Q.current=u.zoom}}if(!O&&P.current&&!R.current)if(g){if(B.current){const s=B.current.children[0];if(s!=null&&s.clientWidth&&s!=null&&s.clientHeight){const{isOrthographicCamera:S}=u;if(S||G)v.scale&&(Array.isArray(v.scale)?v.scale instanceof F?P.current.scale.copy(v.scale.clone().divideScalar(1)):P.current.scale.set(1/v.scale[0],1/v.scale[1],1/v.scale[2]):P.current.scale.setScalar(1/v.scale));else{const p=(y||10)/400,E=s.clientWidth*p,$=s.clientHeight*p;P.current.scale.set(E,$,1)}R.current=!0}}}else{const s=m.children[0];if(s!=null&&s.clientWidth&&s!=null&&s.clientHeight){const S=1/de.factor,p=s.clientWidth*S,E=s.clientHeight*S;P.current.scale.set(p,E,1),R.current=!0}P.current.lookAt(d.camera.position)}});const Y=o.useMemo(()=>({vertexShader:g?void 0:`
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
      `}),[g]);return o.createElement("group",be({},v,{ref:f}),l&&!O&&o.createElement("mesh",{castShadow:ae,receiveShadow:ce,ref:P},G||o.createElement("planeGeometry",null),le||o.createElement("shaderMaterial",{side:_e,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader})))}),ze="_htmlMain_1cezf_1",Fe={htmlMain:ze};function Ae(t){const{nodes:e,materials:r}=se("./laptop.glb"),n=o.useRef();re(y=>{const _=y.clock.getElapsedTime();n.current.rotation.x=z.lerp(n.current.rotation.x,open?Math.cos(_/10)/8+.35:0,.1),n.current.rotation.y=z.lerp(n.current.rotation.y,open?Math.sin(_/10)/2:0,.1),n.current.rotation.z=z.lerp(n.current.rotation.z,open?Math.sin(_/10)/4:0,.1),n.current.position.y=z.lerp(n.current.position.y,open?(-2+Math.sin(_))/5:-7,.6)}),o.useEffect(()=>()=>{},[]);const c=t.Scale,[x,w]=o.useState(window.innerWidth);return o.useEffect(()=>{function y(){w(window.innerWidth)}return()=>{window.removeEventListener("resize",y)}},[]),t==null||t.Hovered,i.jsxs("group",{ref:n,...t,dispose:null,scale:x<=820?c:3.2,"rotation-x":19,position:[0,-10,0],children:[i.jsxs("group",{rotation:[-Math.PI,0,-3.135],children:[i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001.geometry,material:r["Black.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_1.geometry,material:r["Main.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_2.geometry,material:r["Second.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_3.geometry,material:r["KeysMain.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_4.geometry,material:r["KeysBottom.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_5.geometry,material:r["TopLine.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_6.geometry,material:r["DarkGrey.001"]})]}),i.jsxs("group",{rotation:[Math.PI*.85,0,-3.135],children:[i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001.geometry,material:r["Outline.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_1.geometry,children:i.jsx($e,{className:Fe.htmlMain,position:[-.05,1.35,-.001],transform:!0,occlude:!0,"rotation-y":91.11,"rotation-x":94.33,scale:[.07,.088,.07],center:!0,style:{width:"96vw",height:"125vh"},children:i.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onPointerDown:y=>y.stopPropagation()})})}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_2.geometry,material:r["Emission.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_3.geometry,material:r["Logo.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_4.geometry,material:r["Main.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_5.geometry,material:r["Text.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_6.geometry,material:r["Camera.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_7.geometry,material:r["Camera1.001"]}),i.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_8.geometry,material:r["CameraGreen.001"]})]})]})}se.preload("./laptop.glb");export{Ae as default};
