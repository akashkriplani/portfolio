"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[670],{1670:(v,m,c)=>{c.r(m),c.d(m,{ExperienceNewComponent:()=>C});var p=c(6895),f=c(8159),O=c(7224),n=c(8274);const h=["title"];function M(s,o){if(1&s&&(n.TgZ(0,"li")(1,"div",3),n._uU(2),n.qZA(),n.TgZ(3,"div",4),n._uU(4),n.qZA(),n.TgZ(5,"div",5),n._uU(6),n.qZA()()),2&s){const a=o.$implicit;n.Jzz("--accent-color: ",a.accentColor,""),n.xp6(2),n.Oqu(a.date),n.xp6(2),n.Oqu(a.title),n.xp6(2),n.hij(" ",a.description," ")}}let C=(()=>{class s{constructor(a){this.renderer=a}ngOnInit(){this.experiences=O.j9}ngAfterViewInit(){new f.Z("h1",{returnGenerated:!0,delimiter:"character",tag:"span",search:!1,customClass:"",aria:!0,debug:!1,name:"blast"});let a=this.titlePieces.nativeElement.children,d=0;for(const e of Array.from(a))setTimeout(()=>{this.renderer.addClass(e,"animated"),this.renderer.addClass(e,"bounceIn")},d),d+=100,setTimeout(()=>{this.renderer.removeClass(e,"animated"),this.renderer.removeClass(e,"bounceIn"),this.renderer.setStyle(e,"opacity",1),e.addEventListener("mouseenter",()=>{this.renderer.addClass(e,"animated"),this.renderer.addClass(e,"rubberBand")}),e.addEventListener("mouseleave",()=>{this.renderer.removeClass(e,"animated"),this.renderer.removeClass(e,"rubberBand")})},1500)}}return s.\u0275fac=function(a){return new(a||s)(n.Y36(n.Qsj))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-experience-new"]],viewQuery:function(a,d){if(1&a&&n.Gf(h,5),2&a){let e;n.iGM(e=n.CRH())&&(d.titlePieces=e.first)}},standalone:!0,features:[n.jDz],decls:6,vars:1,consts:[[1,"experience"],["title",""],[3,"style",4,"ngFor","ngForOf"],[1,"date"],[1,"title"],[1,"descr"]],template:function(a,d){1&a&&(n.TgZ(0,"section",0)(1,"h1",null,1),n._uU(3,"Work Experience"),n.qZA(),n.TgZ(4,"ul"),n.YNc(5,M,7,6,"li",2),n.qZA()()),2&a&&(n.xp6(5),n.Q6J("ngForOf",d.experiences))},dependencies:[p.ez,p.sg],styles:['.experience[_ngcontent-%COMP%]{--color: rgba(30, 30, 30);--bgColor: rgba(245, 245, 245);min-height:100vh;display:grid;align-content:center;gap:2rem;padding:2rem}h1[_ngcontent-%COMP%]{text-align:center;font-size:4rem}ul[_ngcontent-%COMP%]{--col-gap: 2rem;--row-gap: 2rem;--line-w: .25rem;display:grid;grid-template-columns:var(--line-w) 1fr;grid-auto-columns:max-content;column-gap:var(--col-gap);list-style:none;width:min(60rem,90%);margin-inline:auto;padding-bottom:10rem}ul[_ngcontent-%COMP%]:before{content:"";grid-column:1;grid-row:1/span 20;background:rgb(225,225,225);border-radius:calc(var(--line-w) / 2)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:var(--row-gap)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{grid-column:2;--inlineP: 1.5rem;margin-inline:var(--inlineP);grid-row:span 2;display:grid;grid-template-rows:min-content min-content min-content}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{--dateH: 3rem;height:var(--dateH);margin-inline:calc(var(--inlineP) * -1);text-align:center;background-color:var(--accent-color);color:#fff;font-size:1.25rem;font-weight:700;display:grid;place-content:center;position:relative;border-radius:calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:before{content:"";width:var(--inlineP);aspect-ratio:1;background:var(--accent-color);background-image:linear-gradient(rgba(0,0,0,.2) 100%,transparent);position:absolute;top:100%;clip-path:polygon(0 0,100% 0,0 100%);right:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]:after{content:"";position:absolute;width:2rem;aspect-ratio:1;border:.3rem solid var(--accent-color);border-radius:50%;top:50%;transform:translate(50%,-50%);right:calc(100% + var(--col-gap) + var(--line-w) / 2)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]{position:relative;padding-inline:1.5rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{overflow:hidden;padding-block-start:1.5rem;padding-block-end:1rem;font-weight:500}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]{padding-block-end:1.5rem;font-weight:300}@media (min-width: 40rem){ul[_ngcontent-%COMP%]{grid-template-columns:1fr var(--line-w) 1fr}ul[_ngcontent-%COMP%]:before{grid-column:2}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd){grid-column:1}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){grid-column:3}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){grid-row:2/4}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .date[_ngcontent-%COMP%]:before{clip-path:polygon(0 0,100% 0,100% 100%);left:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .date[_ngcontent-%COMP%]:after{transform:translate(-50%,-50%);left:calc(100% + var(--col-gap) + var(--line-w) / 2)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .date[_ngcontent-%COMP%]{border-radius:0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0}}']}),s})()},8159:(v,m,c)=>{function f(e){let t,r="",l=0;const i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=getText(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[l++];)r+=getText(t);return r}c.d(m,{Z:()=>d});const n_latinLetters="\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F",h={abbreviations:new RegExp("[^"+n_latinLetters+"](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^"+n_latinLetters+"]","ig"),innerWordPeriod:new RegExp("["+n_latinLetters+"].["+n_latinLetters+"]","ig"),onlyContainsPunctuation:new RegExp("[^\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]"),adjoinedPunctuation:new RegExp("^[\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]+|[\u2013\u2014\u2032\u2019'\u201c\u2033\u201e\"(\xab.\u2026\xa1\xbf\u2032\u2019'\u201d\u2033\u201c\")\xbb.\u2026!?]+$","g"),skippedElements:/(script|style|select|textarea)/i,hasPluginClass:new RegExp("(^| )blast( |$)","gi")};function C(e){return e.replace(/{{(\d{1,3})}}/g,function(t,r){return String.fromCharCode(r)})}const a=function o(e,t){let r=-1,l=0;if(3===e.nodeType&&e.data.length){if(Element.nodeBeginning&&(e.data=t.search||"sentence"!==t.delimiter?C(e.data):function M(e){return e.replace(exports.Reg.abbreviations,function(t){return t.replace(/\./g,"{{46}}")}).replace(exports.Reg.innerWordPeriod,function(t){return t.replace(/\./g,"{{46}}")})}(e.data),Element.nodeBeginning=!1),r=e.data.search(t.processedDelimiterRegex),-1!==r){var i=e.data.match(t.processedDelimiterRegex),g=i[0],P=i[1]||!1;""===g?r++:P&&P!==g&&(r+=g.indexOf(P),g=P);var u=e.splitText(r);u.splitText(g.length),l=1,!t.search&&"sentence"===t.delimiter&&(u.data=C(u.data));var b=((e,t)=>{const r=document.createElement(t.tag);if(r.className=t.name,t.customClass&&(r.className+=" "+t.customClass,t.generateIndexID&&(r.id=t.customClass+"-"+Element.blastedIndex)),"all"===t.delimiter&&/\s/.test(e.data)&&(r.style.whiteSpace="pre-line"),!0===t.generateValueClass&&!t.search&&("character"===t.delimiter||"word"===t.delimiter)){var l,i=e.data;"word"===t.delimiter&&Reg.onlyContainsPunctuation.test(i)&&(i=i.replace(Reg.adjoinedPunctuation,"")),l=NAME+"-"+t.delimiter.toLowerCase()+"-"+i.toLowerCase(),r.className+=" "+l}return t.aria&&r.setAttribute("aria-hidden","true"),r.appendChild(e.cloneNode(!1)),r})(u,t,Element);u.parentNode.replaceChild(b,u),Element.wrappers.push(b),Element.blastedIndex++}}else if(1===e.nodeType&&e.hasChildNodes()&&!h.skippedElements.test(e.tagName)&&!h.hasPluginClass.test(e.className))for(var _=0;_<e.childNodes.length;_++)Element.nodeBeginning=!0,_+=o(e.childNodes[_],t);return l},d=class{constructor(e,t={}){this.elements=[],this.elements="string"==typeof e?Array.from(document.querySelectorAll(e)):[e],this.opts={returnGenerated:t.returnGenerated||!0,delimiter:t.delimiter||"word",tag:t.tag||"span",search:t.search||!1,customClass:t.customClass||"",generateIndexID:t.generateIndexID||!1,generateValueClass:t.generateValueClass||!1,aria:!t.hasOwnProperty("aria")||t.aria,debug:t.debug||!1,name:t.name||"blast"},Element={blastedIndex:0,nodeBeginning:!1,wrappers:Element.wrappers||[]};const r=this.createDelimiters();this.opts.processedDelimiter=r.delimiter,this.opts.processedDelimiterRegex=r.delimiterRegex,this.processedElements=this.processElements(),this.opts.debug&&console.time("blast"),this.processedElements.map(l=>{a(l,this.opts)}),this.opts.debug&&console.timeEnd("blast")}createDelimiters(e=null){return function p(e){let r,t=e.delimiter;if(e.search.length&&("string"==typeof e.search||/^\d/.test(parseFloat(e.search))))t=e.search.toString().replace(/[-[\]{,}(.)*+?|^$\\\/]/g,"\\$&"),r=new RegExp("(?:^|[^-"+characterRanges.latinLetters+"])("+t+"('s)?)(?![-"+characterRanges.latinLetters+"])","i");else switch("string"==typeof t&&(t=t.toLowerCase()),t){case"all":r=/(.)/;break;case"letter":case"char":case"character":r=/(\S)/;break;case"word":r=/\s*(\S+)\s*/;break;case"sentence":r=/(?=\S)(([.]{2,})?[^!?]+?([.\u2026!?]+|(?=\s+$)|$)(\s*[\u2032\u2019'\u201d\u2033\u201c")\xbb]+)*)/;break;case"element":r=/(?=\S)([\S\s]*\S)/;break;default:t instanceof RegExp?r=t:console.log(NAME+": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting.")}return{delimiter:t,delimiterRegex:r}}(e||this.opts)}getText(e){return f(e)}processElements(e=null,t=null){return((e,t)=>e.map(r=>{const l=f(r);let i=t.tag||"span";try{document.createElement(i)}catch{i="span",t.debug&&console.log(NAME+": Invalid tag supplied. Defaulting to span.")}return t.aria&&r.setAttribute("aria-label",l),r.classList.add("blast-root"),r}))(e||this.elements,t||this.opts)}}}}]);