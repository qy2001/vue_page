import{C as v}from"./Ranges-eZ2yWvjz.js";import{an as M,ad as b,ao as g,ag as E,U as x,V as O,ak as d}from"./index-DG0haVY1.js";import{Attract as A}from"./index-CDRR_YSx.js";import{E as C}from"./ExternalInteractorBase-CIi3zRdK.js";const D=1,P=1,y=0;function h(s,a,t,i,c){const e=s.actualOptions.interactivity.modes.attract;if(!e)return;const o=s.particles.quadTree.query(i,c);for(const r of o){const{dx:f,dy:n,distance:l}=M(r.position,a),m=e.speed*e.factor,p=b(g(e.easing)(P-l/t)*m,D,e.maxSpeed),k=E.create(l?f/l*p:m,l?n/l*p:m);r.position.subFrom(k)}}function R(s,a){s.attract||(s.attract={particles:[]});const{attract:t}=s;if(t.finish||(t.count||(t.count=0),t.count++,t.count===s.particles.count&&(t.finish=!0)),t.clicking){const i=s.interactivity.mouse.clickPosition,c=s.retina.attractModeDistance;if(!c||c<y||!i)return;h(s,i,c,new v(i.x,i.y,c),e=>a(e))}else t.clicking===!1&&(t.particles=[])}function T(s,a){const t=s.interactivity.mouse.position,i=s.retina.attractModeDistance;!i||i<y||!t||h(s,t,i,new v(t.x,t.y,i),c=>a(c))}const u="attract";class H extends C{constructor(a,t){super(t),this._engine=a,t.attract||(t.attract={particles:[]}),this.handleClickMode=i=>{const c=this.container.actualOptions,e=c.interactivity.modes.attract;if(!(!e||i!==u)){t.attract||(t.attract={particles:[]}),t.attract.clicking=!0,t.attract.count=0;for(const o of t.attract.particles)this.isEnabled(o)&&o.velocity.setTo(o.initialVelocity);t.attract.particles=[],t.attract.finish=!1,setTimeout(()=>{t.destroyed||(t.attract||(t.attract={particles:[]}),t.attract.clicking=!1)},e.duration*x)}}}clear(){}init(){const a=this.container,t=a.actualOptions.interactivity.modes.attract;t&&(a.retina.attractModeDistance=t.distance*a.retina.pixelRatio)}interact(){const a=this.container,t=a.actualOptions,i=a.interactivity.status===O,c=t.interactivity.events,{enable:e,mode:o}=c.onHover,{enable:r,mode:f}=c.onClick;i&&e&&d(u,o)?T(this.container,n=>this.isEnabled(n)):r&&d(u,f)&&R(this.container,n=>this.isEnabled(n))}isEnabled(a){const t=this.container,i=t.actualOptions,c=t.interactivity.mouse,e=((a==null?void 0:a.interactivity)??i.interactivity).events;if((!c.position||!e.onHover.enable)&&(!c.clickPosition||!e.onClick.enable))return!1;const o=e.onHover.mode,r=e.onClick.mode;return d(u,o)||d(u,r)}loadModeOptions(a,...t){a.attract||(a.attract=new A);for(const i of t)a.attract.load(i==null?void 0:i.attract)}reset(){}}export{H as Attractor};
