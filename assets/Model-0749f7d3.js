import{at as n,r as i,a5 as l,j as e,au as _,av as c}from"./index-2f8f5032.js";const y="_htmlMain_1cezf_1",g={htmlMain:y};function p(a){const{nodes:t,materials:o}=n("./laptop.glb"),r=i.useRef();l(s=>{const m=s.clock.getElapsedTime();r.current.rotation.x=c.lerp(r.current.rotation.x,open?Math.cos(m/10)/8+.35:0,.1),r.current.rotation.y=c.lerp(r.current.rotation.y,open?Math.sin(m/10)/2:0,.1),r.current.rotation.z=c.lerp(r.current.rotation.z,open?Math.sin(m/10)/4:0,.1),r.current.position.y=c.lerp(r.current.position.y,open?(-2+Math.sin(m))/5:-7,.6)}),i.useEffect(()=>()=>{},[]);const u=a.Scale,[h,d]=i.useState(window.innerWidth);return i.useEffect(()=>{function s(){d(window.innerWidth)}return()=>{window.removeEventListener("resize",s)}},[]),a==null||a.Hovered,e.jsxs("group",{ref:r,...a,dispose:null,scale:h<=820?u:3.2,"rotation-x":19,position:[0,-10,0],children:[e.jsxs("group",{rotation:[-Math.PI,0,-3.135],children:[e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_BottomPart_Cube001.geometry,material:o["Black.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_BottomPart_Cube001_1.geometry,material:o["Main.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_BottomPart_Cube001_2.geometry,material:o["Second.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_BottomPart_Cube001_3.geometry,material:o["KeysMain.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_BottomPart_Cube001_4.geometry,material:o["KeysBottom.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_BottomPart_Cube001_5.geometry,material:o["TopLine.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_BottomPart_Cube001_6.geometry,material:o["DarkGrey.001"]})]}),e.jsxs("group",{rotation:[Math.PI*.85,0,-3.135],children:[e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001.geometry,material:o["Outline.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_1.geometry,children:e.jsx(_,{className:g.htmlMain,position:[-.05,1.35,-.001],transform:!0,occlude:!0,"rotation-y":91.11,"rotation-x":94.33,scale:[.07,.088,.07],center:!0,style:{width:"96vw",height:"125vh"},children:e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onPointerDown:s=>s.stopPropagation()})})}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_2.geometry,material:o["Emission.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_3.geometry,material:o["Logo.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_4.geometry,material:o["Main.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_5.geometry,material:o["Text.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_6.geometry,material:o["Camera.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_7.geometry,material:o["Camera1.001"]}),e.jsx("mesh",{castShadow:!0,receiveShadow:!0,geometry:t.macBook_TopPart_Cube001_8.geometry,material:o["CameraGreen.001"]})]})]})}n.preload("./laptop.glb");export{p as default};
