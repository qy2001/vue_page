const __vite__fileDeps=["./LifeUpdater-B3hJOsLx.js","./ValueWithRandom-BuM715L6.js","./index-CQS2CWJB.js","../css/index-CaXNxjUu.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as i}from"./index-CQS2CWJB.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-B3hJOsLx.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};