const __vite__fileDeps=["./Bouncer-ASH2PVjY.js","./index-MvapZdAc.js","../css/index-CaXNxjUu.css","./Ranges-BTm80SpW.js","./ExternalInteractorBase-CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as o}from"./index-MvapZdAc.js";class a{constructor(){this.distance=200}load(t){t&&t.distance!==void 0&&(this.distance=t.distance)}}async function c(e,t=!0){await e.addInteractor("externalBounce",async n=>{const{Bouncer:r}=await o(()=>import("./Bouncer-ASH2PVjY.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(n)},t)}export{a as Bounce,c as loadExternalBounceInteraction};