const __vite__fileDeps=["./Attractor-BA5ywiAd.js","./ParticlesInteractorBase-vfDeBun3.js","./index-CNCEsL4D.js","../css/index-CaXNxjUu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as e}from"./index-CNCEsL4D.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await e(()=>import("./Attractor-BA5ywiAd.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new o(a)},r)}export{i as loadParticlesAttractInteraction};
