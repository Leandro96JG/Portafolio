import './polyfills.server.mjs';
import{a as f,d as l}from"./chunk-TYKL2RCG.mjs";import{b as M,c as g}from"./chunk-HITXCD2X.mjs";import{Aa as s,Ba as u,Ra as c,S as d,Wa as p,h as e,m,n as r}from"./chunk-4R4MW575.mjs";var A=[{path:"dashboard",loadChildren:()=>import("./chunk-WRXXUG75.mjs").then(o=>o.DashboardModule),data:{animation:"dashboard"}},{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"**",component:g,data:{animation:"notPageFound"}}],h=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o});static \u0275inj=e({imports:[p.forRoot(A),M,p]})}return o})();var n=(()=>{class o{title="my-portafolio";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=m({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(t,C){t&1&&d(0,"router-outlet")},dependencies:[c],data:{animation:[]}})}return o})();var y=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o,bootstrap:[n]});static \u0275inj=e({providers:[u()],imports:[s,h,f]})}return o})();var v=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o,bootstrap:[n]});static \u0275inj=e({imports:[y,l]})}return o})();export{v as a};