"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[190],{190:(y,c,r)=>{r.r(c),r.d(c,{MediumBlogComponent:()=>v});var t=r(3953),a=r(177),l=r(6697),p=r(5387);let m=(()=>{class n{transform(e){let o=document.createElement("div");return o.innerHTML=e,o.innerText}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275pipe=t.EJ8({name:"nodeToText",type:n,pure:!0,standalone:!0})}return n})();var g=r(1626),f=r(634);let u=(()=>{class n{constructor(){this._http=(0,t.WQX)(g.Qq)}getPosts(){return this._http.get(f.Z6)}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),h=(()=>{class n{transform(e,o,i,d="...",O=!0){return e.length>i?O?d+e.slice(o,i)+d:e.slice(o,i):e}static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275pipe=t.EJ8({name:"shorten",type:n,pure:!0,standalone:!0})}return n})();const b=(n,s)=>s.link,M=n=>({"background-image":n});function C(n,s){if(1&n&&(t.j41(0,"div",4)(1,"div",5)(2,"a",6)(3,"div",7)(4,"div",8)(5,"p"),t.EFF(6),t.k0s(),t.j41(7,"span"),t.EFF(8),t.nI1(9,"date"),t.k0s()()(),t.j41(10,"div",9)(11,"div",8)(12,"p"),t.EFF(13),t.nI1(14,"nodeToText"),t.nI1(15,"shorten"),t.k0s()()()()()()),2&n){const e=s.$implicit;t.R7$(2),t.Y8G("href",e.link,t.B4B),t.BMQ("title",e.title),t.R7$(),t.Y8G("ngStyle",t.eq3(15,M,"url("+e.thumbnail+")")),t.R7$(3),t.JRh(e.title),t.R7$(2),t.JRh(t.i5U(9,6,e.pubDate,"longDate")),t.R7$(5),t.SpI(" ",t.brH(15,11,t.bMT(14,9,e.content),60,250)," ")}}function P(n,s){1&n&&(t.j41(0,"div",4)(1,"div",5),t.EFF(2,"There are no posts published yet."),t.k0s()())}let v=(()=>{class n extends p.H{constructor(){super(...arguments),this.posts={items:[]},this.postsService=(0,t.WQX)(u)}ngOnInit(){this.fetchPosts()}fetchPosts(){this.postsService.getPosts().pipe((0,l.s)(1)).subscribe({next:e=>{this.posts=e},error:({error:e})=>alert(e.message)})}static#t=this.\u0275fac=(()=>{let e;return function(i){return(e||(e=t.xGo(n)))(i||n)}})();static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-medium-blog"]],standalone:!0,features:[t.Vt3,t.aNF],decls:9,vars:1,consts:[["title",""],[1,"medium-blog"],[1,"wrapper"],[1,"cols"],[1,"col"],[1,"container"],["target","_blank",3,"href"],[1,"front",3,"ngStyle"],[1,"inner"],[1,"back"]],template:function(o,i){1&o&&(t.j41(0,"section",1)(1,"h1",null,0),t.EFF(3,"Medium Posts"),t.k0s(),t.j41(4,"div",2)(5,"div",3),t.Z7z(6,C,16,17,"div",4,b,!1,P,3,0,"div",4),t.k0s()()()),2&o&&(t.R7$(6),t.Dyx(i.posts.items))},dependencies:[a.vh,a.B3,m,h],styles:['.medium-blog[_ngcontent-%COMP%]{padding:2rem 0 10rem}.medium-blog[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem}.wrapper[_ngcontent-%COMP%]{width:90%;margin:0 auto;max-width:80rem}.cols[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.col[_ngcontent-%COMP%]{width:calc(25% - 2rem);margin:1rem;cursor:pointer}.container[_ngcontent-%COMP%]{transform-style:preserve-3d;perspective:1000px}.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{background-size:cover;box-shadow:0 4px 8px #00000040;border-radius:10px;background-position:center;transition:transform .3s cubic-bezier(.4,.2,.2,1);backface-visibility:hidden;text-align:center;min-height:280px;height:auto;color:#fff}.back[_ngcontent-%COMP%]{background:#cedce7;background:linear-gradient(45deg,#543ab7,#00acc1)}.front[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;content:"";display:block;opacity:.6;background-color:#000;backface-visibility:hidden;border-radius:10px}.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%]{transition:transform .3s cubic-bezier(.4,.2,.2,1)}.back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.inner[_ngcontent-%COMP%]{transform:translateY(-50%);top:50%;position:absolute;left:0;width:100%;padding:2rem;box-sizing:border-box;outline:1px solid transparent;perspective:inherit;z-index:2}.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{visibility:hidden;transform:rotateY(180deg);transform-style:preserve-3d}.container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{transform:rotateY(0);transform-style:preserve-3d}.container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%]{visibility:visible;transform:rotateY(0);transform-style:preserve-3d}.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%]{transform:rotateY(-180deg);transform-style:preserve-3d}.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:2rem;position:relative}.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after{content:"";width:4rem;height:2px;position:absolute;background:#c6d4df;display:block;left:0;right:0;margin:0 auto;bottom:-.75rem}.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffffffb3}@media screen and (max-width: 64rem){.col[_ngcontent-%COMP%]{width:calc(33.333333% - 2rem)}}@media screen and (max-width: 48rem){.col[_ngcontent-%COMP%]{width:calc(50% - 2rem)}}@media screen and (max-width: 32rem){.col[_ngcontent-%COMP%]{width:100%;margin:0 0 2rem}}']})}return n})()}}]);