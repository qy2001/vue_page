const __vite__fileDeps=["./Linker-DMHmQ-EU.js","./Ranges-eZ2yWvjz.js","./index-DG0haVY1.js","../css/index-CaXNxjUu.css","./index-DXEmlGQa.js","./OptionsColor-D5gEn3iL.js","./ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as n}from"./index-DG0haVY1.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:i}=await n(()=>import("./Linker-DMHmQ-EU.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return new i(a)},r)}export{o as loadLinksInteraction};