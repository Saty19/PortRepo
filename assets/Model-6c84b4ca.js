import{r as i,a4 as Pe,at as Me,a5 as re,l as H,au as je,e as _e,ap as ie,P as ne,j as r,av as se,aw as L}from"./index-7d951ac9.js";const B=new H,N=new H,Ce=new H;function Te(t,e,o){const n=B.setFromMatrixPosition(t.matrixWorld);n.project(e);const a=o.width/2,l=o.height/2;return[n.x*a+a,-(n.y*l)+l]}function ke(t,e){const o=B.setFromMatrixPosition(t.matrixWorld),n=N.setFromMatrixPosition(e.matrixWorld),a=o.sub(n),l=e.getWorldDirection(Ce);return a.angleTo(l)>Math.PI/2}function Ee(t,e,o,n){const a=B.setFromMatrixPosition(t.matrixWorld),l=a.clone();l.project(e),o.setFromCamera(l,e);const g=o.intersectObjects(n,!0);if(g.length){const v=g[0].distance;return a.distanceTo(o.ray.origin)<v}return!0}function Be(t,e){if(e instanceof ie)return e.zoom;if(e instanceof ne){const o=B.setFromMatrixPosition(t.matrixWorld),n=N.setFromMatrixPosition(e.matrixWorld),a=e.fov*Math.PI/180,l=o.distanceTo(n);return 1/(2*Math.tan(a/2)*l)}else return 1}function We(t,e,o){if(e instanceof ne||e instanceof ie){const n=B.setFromMatrixPosition(t.matrixWorld),a=N.setFromMatrixPosition(e.matrixWorld),l=n.distanceTo(a),g=(o[1]-o[0])/(e.far-e.near),v=o[1]-g*e.far;return Math.round(g*l+v)}}const D=t=>Math.abs(t)<1e-10?0:t;function ae(t,e,o=""){let n="matrix3d(";for(let a=0;a!==16;a++)n+=D(e[a]*t.elements[a])+(a!==15?",":")");return o+n}const Re=(t=>e=>ae(e,t))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Ae=(t=>(e,o)=>ae(e,t(o),"translate(-50%,-50%)"))(t=>[1/t,1/t,1/t,1,-1/t,-1/t,-1/t,-1,1/t,1/t,1/t,1,1,1,1,1]);function Oe(t){return t&&typeof t=="object"&&"current"in t}const ze=i.forwardRef(({children:t,eps:e=.001,style:o,className:n,prepend:a,center:l,fullscreen:g,portal:v,distanceFactor:b,sprite:T=!1,transform:d=!1,occlude:c,onOcclude:S,castShadow:ce,receiveShadow:le,material:ue,geometry:G,zIndexRange:W=[16777271,0],calculatePosition:U=Te,as:me="div",wrapperClass:F,pointerEvents:Z="auto",...p},K)=>{const{gl:J,camera:u,scene:Q,size:h,raycaster:de,events:he,viewport:xe}=Pe(),[m]=i.useState(()=>document.createElement(me)),I=i.useRef(),f=i.useRef(null),X=i.useRef(0),R=i.useRef([0,0]),k=i.useRef(null),V=i.useRef(null),_=(v==null?void 0:v.current)||he.connected||J.domElement.parentNode,w=i.useRef(null),A=i.useRef(!1),O=i.useMemo(()=>c&&c!=="blending"||Array.isArray(c)&&c.length&&Oe(c[0]),[c]);i.useLayoutEffect(()=>{const x=J.domElement;c&&c==="blending"?(x.style.zIndex=`${Math.floor(W[0]/2)}`,x.style.position="absolute",x.style.pointerEvents="none"):(x.style.zIndex=null,x.style.position=null,x.style.pointerEvents=null)},[c]),i.useLayoutEffect(()=>{if(f.current){const x=I.current=Me(m);if(Q.updateMatrixWorld(),d)m.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const s=U(f.current,u,h);m.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${s[0]}px,${s[1]}px,0);transform-origin:0 0;`}return _&&(a?_.prepend(m):_.appendChild(m)),()=>{_&&_.removeChild(m),x.unmount()}}},[_,d]),i.useLayoutEffect(()=>{F&&(m.className=F)},[F]);const Y=i.useMemo(()=>d?{position:"absolute",top:0,left:0,width:h.width,height:h.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:l?"translate3d(-50%,-50%,0)":"none",...g&&{top:-h.height/2,left:-h.width/2,width:h.width,height:h.height},...o},[o,l,g,h,d]),fe=i.useMemo(()=>({position:"absolute",pointerEvents:Z}),[Z]);i.useLayoutEffect(()=>{if(A.current=!1,d){var x;(x=I.current)==null||x.render(i.createElement("div",{ref:k,style:Y},i.createElement("div",{ref:V,style:fe},i.createElement("div",{ref:K,className:n,style:o,children:t}))))}else{var s;(s=I.current)==null||s.render(i.createElement("div",{ref:K,style:Y,className:n,children:t}))}});const C=i.useRef(!0);re(x=>{if(f.current){u.updateMatrixWorld(),f.current.updateWorldMatrix(!0,!1);const s=d?R.current:U(f.current,u,h);if(d||Math.abs(X.current-u.zoom)>e||Math.abs(R.current[0]-s[0])>e||Math.abs(R.current[1]-s[1])>e){const P=ke(f.current,u);let y=!1;O&&(Array.isArray(c)?y=c.map(M=>M.current):c!=="blending"&&(y=[Q]));const E=C.current;if(y){const M=Ee(f.current,u,de,y);C.current=M&&!P}else C.current=!P;E!==C.current&&(S?S(!C.current):m.style.display=C.current?"block":"none");const z=Math.floor(W[0]/2),ge=c?O?[W[0],z]:[z-1,0]:W;if(m.style.zIndex=`${We(f.current,u,ge)}`,d){const[M,te]=[h.width/2,h.height/2],q=u.projectionMatrix.elements[5]*te,{isOrthographicCamera:oe,top:pe,left:ye,bottom:ve,right:we}=u,be=Re(u.matrixWorldInverse),Se=oe?`scale(${q})translate(${D(-(we+ye)/2)}px,${D((pe+ve)/2)}px)`:`translateZ(${q}px)`;let j=f.current.matrixWorld;T&&(j=u.matrixWorldInverse.clone().transpose().copyPosition(j).scale(f.current.scale),j.elements[3]=j.elements[7]=j.elements[11]=0,j.elements[15]=1),m.style.width=h.width+"px",m.style.height=h.height+"px",m.style.perspective=oe?"":`${q}px`,k.current&&V.current&&(k.current.style.transform=`${Se}${be}translate(${M}px,${te}px)`,V.current.style.transform=Ae(j,1/((b||10)/400)))}else{const M=b===void 0?1:Be(f.current,u)*b;m.style.transform=`translate3d(${s[0]}px,${s[1]}px,0) scale(${M})`}R.current=s,X.current=u.zoom}}if(!O&&w.current&&!A.current)if(d){if(k.current){const s=k.current.children[0];if(s!=null&&s.clientWidth&&s!=null&&s.clientHeight){const{isOrthographicCamera:P}=u;if(P||G)p.scale&&(Array.isArray(p.scale)?p.scale instanceof H?w.current.scale.copy(p.scale.clone().divideScalar(1)):w.current.scale.set(1/p.scale[0],1/p.scale[1],1/p.scale[2]):w.current.scale.setScalar(1/p.scale));else{const y=(b||10)/400,E=s.clientWidth*y,z=s.clientHeight*y;w.current.scale.set(E,z,1)}A.current=!0}}}else{const s=m.children[0];if(s!=null&&s.clientWidth&&s!=null&&s.clientHeight){const P=1/xe.factor,y=s.clientWidth*P,E=s.clientHeight*P;w.current.scale.set(y,E,1),A.current=!0}w.current.lookAt(x.camera.position)}});const ee=i.useMemo(()=>({vertexShader:d?void 0:`
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
      `}),[d]);return i.createElement("group",je({},p,{ref:f}),c&&!O&&i.createElement("mesh",{castShadow:ce,receiveShadow:le,ref:w},G||i.createElement("planeGeometry",null),ue||i.createElement("shaderMaterial",{side:_e,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader})))}),Le="_htmlMain_1cezf_1",$e={htmlMain:Le},$=()=>{const t={height:"900px",backgroundColor:"#f0f0f0",padding:"20px",textAlign:"center"},e={maxWidth:"100%",maxHeight:"400px",margin:"20px 0",borderRadius:"8px"};return r.jsxs("div",{style:t,children:[r.jsx("h1",{children:"Tall Component"}),r.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Placeholder Image",style:e}),r.jsx("p",{style:{color:"black"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})},He=()=>{const t={height:"900px",backgroundColor:"#f0f0f0",padding:"20px",textAlign:"center"},e={maxWidth:"100%",maxHeight:"400px",margin:"20px 0",borderRadius:"8px"};return r.jsxs("div",{style:t,children:[r.jsx("h1",{children:"Tall Component"}),r.jsx("img",{src:"https://via.placeholder.com/800x400",alt:"Placeholder Image",style:e}),r.jsx("p",{style:{color:"black"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),r.jsx("h1",{style:{color:"black"},children:"MILAN"}),r.jsx("button",{style:{background:"blue",fontSize:"2vw",color:"white",cursor:"pointer"},children:"bhim"})]})};function Ie(t){const{nodes:e,materials:o}=se("./laptop.glb"),n=i.useRef();re(c=>{const S=c.clock.getElapsedTime();n.current.rotation.x=L.lerp(n.current.rotation.x,open?Math.cos(S/10)/8+.35:0,.1),n.current.rotation.y=L.lerp(n.current.rotation.y,open?Math.sin(S/10)/2:0,.1),n.current.rotation.z=L.lerp(n.current.rotation.z,open?Math.sin(S/10)/4:0,.1),n.current.position.y=L.lerp(n.current.position.y,open?(-2+Math.sin(S))/5:-7,.6)}),i.useEffect(()=>()=>{},[]);const l={MAGENTO:$,REACT:He,ANGULAR:$,PHP:$,LARAVEL:$},g=t.Scale,[v,b]=i.useState(window.innerWidth);i.useEffect(()=>{function c(){b(window.innerWidth)}return()=>{window.removeEventListener("resize",c)}},[]);const T=t==null?void 0:t.Hovered,d=l[T==null?void 0:T.name];return r.jsxs("group",{ref:n,...t,dispose:null,scale:v<=820?g:3.2,"rotation-x":19,position:[0,-10,0],children:[r.jsxs("group",{rotation:[-Math.PI,0,-3.135],children:[r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001.geometry,material:o["Black.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_1.geometry,material:o["Main.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_2.geometry,material:o["Second.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_3.geometry,material:o["KeysMain.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_4.geometry,material:o["KeysBottom.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_5.geometry,material:o["TopLine.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_BottomPart_Cube001_6.geometry,material:o["DarkGrey.001"]})]}),r.jsxs("group",{rotation:[Math.PI*.85,0,-3.135],children:[r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001.geometry,material:o["Outline.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_1.geometry,children:r.jsx(ze,{className:$e.htmlMain,position:[-.05,1.35,-.001],transform:!0,occlude:!0,"rotation-y":91.11,"rotation-x":94.33,scale:[.07,.088,.07],center:!0,style:{width:"96vw",height:"125vh"},children:r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onPointerDown:c=>c.stopPropagation(),children:r.jsx(d,{})})})}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_2.geometry,material:o["Emission.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_3.geometry,material:o["Logo.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_4.geometry,material:o["Main.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_5.geometry,material:o["Text.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_6.geometry,material:o["Camera.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_7.geometry,material:o["Camera1.001"]}),r.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:e.macBook_TopPart_Cube001_8.geometry,material:o["CameraGreen.001"]})]})]})}se.preload("./laptop.glb");export{Ie as default};
