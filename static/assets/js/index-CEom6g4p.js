const __vite__fileDeps=["./Collider-Dvz01R3w.js","./index-DG0haVY1.js","../css/index-CaXNxjUu.css","./ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as a}from"./index-DG0haVY1.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async r=>{const{Collider:i}=await a(()=>import("./Collider-Dvz01R3w.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new i(r)},o)}export{n as loadParticlesCollisionsInteraction};
