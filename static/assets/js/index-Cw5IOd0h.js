const __vite__fileDeps=["./Collider-lFU9PNsn.js","./index-CNCEsL4D.js","../css/index-CaXNxjUu.css","./ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as a}from"./index-CNCEsL4D.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async r=>{const{Collider:i}=await a(()=>import("./Collider-lFU9PNsn.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new i(r)},o)}export{n as loadParticlesCollisionsInteraction};