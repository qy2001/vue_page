const __vite__fileDeps=["./ColorUpdater-DbZYUwsX.js","./index-DG0haVY1.js","../css/index-CaXNxjUu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as e}from"./index-DG0haVY1.js";async function d(r,t=!0){await r.addParticleUpdater("color",async o=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DbZYUwsX.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new a(o)},t)}export{d as loadColorUpdater};