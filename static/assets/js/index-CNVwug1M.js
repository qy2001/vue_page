const __vite__fileDeps=["./Grabber-Cwx2ufDN.js","./CanvasUtils-DXIWLR07.js","./index-CQS2CWJB.js","../css/index-CaXNxjUu.css","./ExternalInteractorBase-CIi3zRdK.js","./OptionsColor-6W_oNEvQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{z as e}from"./index-CQS2CWJB.js";import{O as r}from"./OptionsColor-6W_oNEvQ.js";class s{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=r.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new s}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async t=>{const{Grabber:o}=await e(()=>import("./Grabber-Cwx2ufDN.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return new o(t)},i)}export{f as Grab,s as GrabLinks,a as loadExternalGrabInteraction};