"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[426],{6426:(O,c,l)=>{l.r(c),l.d(c,{ExperienceComponent:()=>p});var n=l(4438),r=l(177),a=l(2815);let d=(()=>{class o{constructor(){this.elementRef=(0,n.WQX)(n.aKT),this.renderer=(0,n.WQX)(n.sFG)}onScroll(){this.toggleView()}ngOnInit(){this.toggleView()}toggleView(){this.isElementInViewport(this.elementRef.nativeElement)?this.elementRef.nativeElement.classList.contains(this.className)||this.renderer.addClass(this.elementRef.nativeElement,this.className):this.elementRef.nativeElement.classList.contains(this.className)&&this.renderer.removeClass(this.elementRef.nativeElement,this.className)}isElementInViewport(i){const e=i.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}static#n=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275dir=n.FsC({type:o,selectors:[["","appTimeline",""]],hostBindings:function(e,t){1&e&&n.bIt("scroll",function(){return t.onScroll()},!1,n.tSv)},inputs:{className:[n.Mj6.None,"customClassName","className"]},standalone:!0})}return o})();var g=l(634);const m=["title"];function C(o,M){if(1&o&&(n.j41(0,"li",4)(1,"div")(2,"time"),n.EFF(3),n.k0s(),n.j41(4,"div",5)(5,"h2"),n.EFF(6),n.k0s(),n.j41(7,"p"),n.EFF(8),n.k0s(),n.j41(9,"span"),n.EFF(10),n.k0s()()()()),2&o){const i=M.$implicit;n.R7$(3),n.JRh(i.yearRange),n.R7$(3),n.JRh(i.company),n.R7$(2),n.JRh(i.designation),n.R7$(2),n.JRh(i.role)}}let p=(()=>{class o{constructor(){this.experience=g.Qi,this.renderer=(0,n.WQX)(n.sFG)}ngAfterViewInit(){new a.A("h1",{returnGenerated:!0,delimiter:"character",tag:"span",search:!1,customClass:"",aria:!0,debug:!1,name:"blast"});let i=this.titlePieces.nativeElement.children,e=0;for(const t of Array.from(i))setTimeout(()=>{this.renderer.addClass(t,"animated"),this.renderer.addClass(t,"bounceIn")},e),e+=100,setTimeout(()=>{this.renderer.removeClass(t,"animated"),this.renderer.removeClass(t,"bounceIn"),this.renderer.setStyle(t,"opacity",1),t.addEventListener("mouseenter",()=>{this.renderer.addClass(t,"animated"),this.renderer.addClass(t,"rubberBand")}),t.addEventListener("mouseleave",()=>{this.renderer.removeClass(t,"animated"),this.renderer.removeClass(t,"rubberBand")})},1500)}static#n=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275cmp=n.VBU({type:o,selectors:[["app-experience"]],viewQuery:function(e,t){if(1&e&&n.GBs(m,5),2&e){let s;n.mGM(s=n.lsd())&&(t.titlePieces=s.first)}},standalone:!0,features:[n.aNF],decls:7,vars:1,consts:[["title",""],[1,"timeline"],[1,"header"],["appTimeline","","customClassName","in-view",4,"ngFor","ngForOf"],["appTimeline","","customClassName","in-view"],[1,"discovery"]],template:function(e,t){1&e&&(n.j41(0,"section",1)(1,"header",2)(2,"h1",null,0),n.EFF(4,"Work History"),n.k0s()(),n.j41(5,"ul"),n.DNE(6,C,11,4,"li",3),n.k0s()()),2&e&&(n.R7$(6),n.Y8G("ngForOf",t.experience))},dependencies:[r.pM,d],styles:['.timeline[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:center;width:100%;top:5%}.timeline[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:4rem;padding:5px 0}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-bottom:200px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;position:relative;width:6px;margin:0 auto;padding-top:50px;background:#fff}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:0;transform:translate(-50%) rotate(45deg);width:20px;height:20px;z-index:2;background:#eee}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;bottom:0;width:500px;padding:20px;background:#ffffff1a;box-shadow:4px 13px 30px 1px #543ab733;border-radius:5px;display:flex;align-items:center}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{position:absolute;background:#f5af19;width:150px;height:30px;top:-15px;border-radius:5px;display:flex;justify-content:center;align-items:center;letter-spacing:2px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:100px;display:flex;flex-direction:column;justify-content:center;align-items:center}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .discovery[_ngcontent-%COMP%]{margin-right:10px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd) > div[_ngcontent-%COMP%]{left:45px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2n) > div[_ngcontent-%COMP%]{left:-539px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transition:all .5s ease-in-out}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(odd)   div[_ngcontent-%COMP%]{transform:translate3d(100px,-10px,0) rotate(10deg)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2n)   div[_ngcontent-%COMP%]{transform:translate3d(-100px,-10px,0) rotate(10deg)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.in-view[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:none;visibility:visible;opacity:1}@media screen and (max-width: 900px){.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:250px;flex-direction:column}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:80%;margin:10px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2n) > div[_ngcontent-%COMP%]{left:-289px}}@media screen and (max-width: 600px){body[_ngcontent-%COMP%]{background:#8bfff4}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:20px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:calc(100vw - 91px)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2n) > div[_ngcontent-%COMP%]{left:45px}}']})}return o})()}}]);