const __vite__fileDeps=["./LifeUpdater-CNr9Q7XJ.js","./ValueWithRandom-B5xwgRg4.js","./index-DG0haVY1.js","../css/index-CaXNxjUu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as i}from"./index-DG0haVY1.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CNr9Q7XJ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
