// build time:Sun May 29 2022 20:43:31 GMT+0800 (中国标准时间)
var CONFIG={version:"0.2.5",hostname:"https://weiweiblog.top",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},darkmode:!1,auto_scroll:!0,js:{valine:"gh/amehime/MiniValine@4.2.2-beta10/dist/MiniValine.min.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0.12.0/dist/contrib/copy-tex.min.js",fancybox:"combine/npm/jquery@3.5.1/dist/jquery.min.js,npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js,npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0.12.0/dist/katex.min.css",mermaid:"css/mermaid.css",fancybox:"combine/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css,npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.min.css"},loader:{start:!1,"switch":!1},search:null,valine:{appId:"kl5JrUN5000r27Bf6nY2bqUK-MdYXbMMI",appKey:"gWUCcf5tg1D2WjTmJFKOFMoi",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:!0,NoRecordIP:!1,serverURLs:"https://kl5jrun5.api.lncldglobal.com",powerMode:!0,tagMeta:{visitor:"新朋友",master:"主人",friend:"小伙伴",investor:"金主粑粑"},tagColor:{master:"var(--color-orange)",friend:"var(--color-aqua)",investor:"var(--color-pink)"},tagMember:{master:null,friend:null,investor:null}},quicklink:{timeout:3e3,priority:!0},audio:[{title:"列表1",list:["https://music.163.com/#/playlist?id=2854790489"]}]};const getRndInteger=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},getDocHeight=function(){return $("main > .inner").offsetHeight},getScript=function(e,t,a){if(a)t();else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(e,a){(a||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n=void 0,!a&&t&&setTimeout(t,0))},n.src=e,document.head.appendChild(n)}},assetUrl=function(e,t){var a=CONFIG[e][t];return a.indexOf("npm")>-1||a.indexOf("gh")>-1||a.indexOf("combine")>-1?"//cdn.jsdelivr.net/"+a:a.indexOf("http")>-1?a:statics+a},vendorJs=function(e,t,a){LOCAL[e]&&getScript(assetUrl("js",e),t||function(){window[e]=!0},a||window[e])},vendorCss=function(e,t){window["css"+e]||LOCAL[e]&&(document.head.createChild("link",{rel:"stylesheet",href:assetUrl("css",e)}),window["css"+e]=!0)},pjaxScript=function(e){var t=e.text||e.textContent||e.innerHTML||"",a=e.parentNode;a.removeChild(e);var n=document.createElement("script");e.id&&(n.id=e.id),e.className&&(n.className=e.className),e.type&&(n.type=e.type),e.src&&(n.src=e.src,n.async=!1),void 0!==e.dataset.pjax&&(n.dataset.pjax=""),""!==t&&n.appendChild(document.createTextNode(t)),a.appendChild(n)},pageScroll=function(e,t,a){var n={targets:"number"==typeof t?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||("number"==typeof e?e:e?e.top()+document.documentElement.scrollTop-siteNavHeight:0),complete:function(){a&&a()}};anime(n)},transition=function(e,t,a){var n={},i="none";switch(t){case 0:n={opacity:[1,0]};break;case 1:n={opacity:[0,1]},i="block";break;case"bounceUpIn":n={begin:function(t){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},i="block";break;case"shrinkIn":n={begin:function(t){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},i="block";break;case"slideRightIn":n={begin:function(t){e.display("block")},translateX:[100,0],opacity:[0,1]},i="block";break;case"slideRightOut":n={translateX:[0,100],opacity:[1,0]};break;default:n=t,i=t.display}anime(Object.assign({targets:e,duration:200,easing:"linear"},n)).finished.then(function(){e.display(i),a&&a()})},store={get:function(e){return localStorage.getItem(e)},set:function(e,t){return localStorage.setItem(e,t),t},del:function(e){localStorage.removeItem(e)}},$=function(e,t){return t=t||document,0===e.indexOf("#")?t.getElementById(e.replace("#","")):t.querySelector(e)};$.all=function(e,t){return t=t||document,t.querySelectorAll(e)},$.each=function(e,t,a){return $.all(e,a).forEach(t)},Object.assign(HTMLElement.prototype,{createChild:function(e,t,a){var n=document.createElement(e);switch(Object.assign(n,t),a){case"after":this.insertAfter(n);break;case"replace":this.innerHTML="";default:this.appendChild(n)}return n},wrap:function(e){var t=document.createElement("div");Object.assign(t,e),this.parentNode.insertBefore(t,this),this.parentNode.removeChild(this),t.appendChild(this)},height:function(e){return e&&(this.style.height="number"==typeof e?e+"rem":e),this.getBoundingClientRect().height},width:function(e){return e&&(this.style.width="number"==typeof e?e+"rem":e),this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){return null===t?this.removeAttribute(e):t?(this.setAttribute(e,t),this):this.getAttribute(e)},insertAfter:function(e){var t=this.parentNode;t.lastChild==this?t.appendChild(e):t.insertBefore(e,this.nextSibling)},display:function(e){return null==e?this.style.display:(this.style.display=e,this)},child:function(e){return $(e,this)},find:function(e){return $.all(e,this)},_class:function(e,t,a){var n=t.indexOf(" ")?t.split(" "):[t],i=this;n.forEach(function(t){"toggle"==e?i.classList.toggle(t,a):i.classList[e](t)})},addClass:function(e){return this._class("add",e),this},removeClass:function(e){return this._class("remove",e),this},toggleClass:function(e,t){return this._class("toggle",e,t),this},hasClass:function(e){return this.classList.contains(e)}});var NOWPLAYING=null;const isMobile=/mobile/i.test(window.navigator.userAgent),mediaPlayer=function(e,t){var a={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause":function(t){i.paused?e.player.play():e.player.pause()},music:function(e){s.el.hasClass("show")?s.hide():(s.el.addClass("show"),r.scroll().title())}}},n={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(a){var n=new RegExp(a[0]),i=n.exec(e);null!==i&&(t=[a[1],a[2],i[1]])}),t},fetch:function(e){var t=[];return new Promise(function(a,i){e.forEach(function(e){var i=n.parse(e);if(i[0]){var s=JSON.stringify(i),r=store.get(s);r?(t.push.apply(t,JSON.parse(r)),a(t)):fetch("https://api.i-meto.com/meting/api?server="+i[0]+"&type="+i[1]+"&id="+i[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){store.set(s,JSON.stringify(e)),t.push.apply(t,e),a(t)})["catch"](function(e){})}else t.push(e),a(t)})})},secondToTime:function(e){var t=function(e){return isNaN(e)?"00":e<10?"0"+e:""+e},a=Math.floor(e/3600),n=Math.floor((e-3600*a)/60),i=Math.floor(e-3600*a-60*n);return(a>0?[a,n,i]:[n,i]).map(t).join(":")},nameMap:{dragStart:isMobile?"touchstart":"mousedown",dragMove:isMobile?"touchmove":"mousemove",dragEnd:isMobile?"touchend":"mouseup"}},i=null;e.player={_id:n.random(999999),group:!0,load:function(e){var t="";e&&e.length>0?this.options.rawList!==e&&(this.options.rawList=e,r.clear()):(t="none",this.pause());for(var a in h.el)h.el[a].display(t);return this},fetch:function(){var e=this;return new Promise(function(t,a){if(r.data.length>0)t();else if(e.options.rawList){var i=[];e.options.rawList.forEach(function(t,a){i.push(new Promise(function(i,s){var o,c=a;t.list?(e.group=!0,o=t.list):(c=0,e.group=!1,o=[t]),n.fetch(o).then(function(e){r.add(c,e),i()})}))}),Promise.all(i).then(function(){t(!0)})}}).then(function(t){t&&(r.create(),d.create(),e.mode())})},mode:function(){var e=r.data.length;if(e&&r.errnum!=e){var t="next"==d.step?1:-1,a=function(){var a=r.index+t;(a>e||a<0)&&(a="next"==d.step?0:e-1),r.index=a},i=function(){var t=n.random(e);r.index!==t?r.index=t:a()};switch(this.options.mode){case"random":i();break;case"order":a();break;case"loop":d.step&&a(),r.index==-1&&i()}this.init()}},"switch":function(e){"number"==typeof e&&e!=r.index&&r.current()&&!r.current().error&&(r.index=e,this.init())},init:function(){var e=r.current();if(!e||e.error)return void this.mode();var t=!1;i.paused||(t=!0,this.stop()),i.attr("src",e.url),i.attr("title",e.name+" - "+e.artist),this.volume(store.get("_PlayerVolume")||"0.7"),this.muted(store.get("_PlayerMuted")),l.create(),"audio"==this.options.type&&c.create(),1==t&&this.play()},play:function(){if(NOWPLAYING&&NOWPLAYING.player.pause(),r.current().error)return void this.mode();i.play().then(function(){r.scroll()})["catch"](function(e){})},pause:function(){i.pause(),document.title=originTitle},stop:function(){i.pause(),i.currentTime=0,document.title=originTitle},seek:function(e){e=Math.max(e,0),e=Math.min(e,i.duration),i.currentTime=e,l.update(e/i.duration)},muted:function(e){"muted"==e?(i.muted=e,store.set("_PlayerMuted",e),d.update(0)):(store.del("_PlayerMuted"),i.muted=!1,d.update(i.volume))},volume:function(e){isNaN(e)||(d.update(e),store.set("_PlayerVolume",e),i.volume=e)},mini:function(){s.hide()}};var s={el:null,create:function(){this.el||(this.el=e.createChild("div",{className:"player-info",innerHTML:("audio"==e.player.options.type?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),c.el=this.el.child(".preview"),r.el=this.el.child(".playlist"),d.el=this.el.child(".controller"))},hide:function(){var e=this.el;e.addClass("hide"),window.setTimeout(function(){e.removeClass("show hide")},300)}},r={el:null,data:[],index:-1,errnum:0,add:function(e,t){var a=this;t.forEach(function(t,n){t.group=e,t.name=t.name||t.title||"Meida name",t.artist=t.artist||t.author||"Anonymous",t.cover=t.cover||t.pic,t.type=t.type||"normal",a.data.push(t)})},clear:function(){this.data=[],this.el.innerHTML="",this.index!==-1&&(this.index=-1,e.player.fetch())},create:function(){var t=this.el;this.data.map(function(a,n){if(!a.el){var s="list-"+e.player._id+"-"+a.group,o=$("#"+s);return o||(o=t.createChild("div",{id:s,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"}),e.player.group&&o.attr("data-title",e.player.options.rawList[a.group].title).attr("data-id",e.player._id)),a.el=o.child("ol").createChild("li",{title:a.name+" - "+a.artist,innerHTML:'<span class="info"><span>'+a.name+"</span><span>"+a.artist+"</span></span>",onclick:function(t){var a=t.currentTarget;return r.index===n&&l.el?void(i.paused?e.player.play():e.player.seek(i.duration*l.percent(t,a))):(e.player["switch"](n),void e.player.play())}}),a}}),tabFormat()},current:function(){return this.data[this.index]},scroll:function(){var e=this.current(),t=this.el.child("li.active");t&&t.removeClass("active");var a=this.el.child(".tab.active");return a&&a.removeClass("active"),t=this.el.find(".nav li")[e.group],t&&t.addClass("active"),a=this.el.find(".tab")[e.group],a&&a.addClass("active"),pageScroll(e.el,e.el.offsetTop),this},title:function(){if(!i.paused){var e=this.current();document.title="Now Playing..."+e.name+" - "+e.artist+" | "+originTitle}},error:function(){var e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},o={el:null,data:null,index:0,create:function(e){var t=r.index,a=this,n=r.current().lrc,i=function(n){if(t===r.index){a.data=a.parse(n);var i="";a.data.forEach(function(e,t){i+="<p"+(0===t?' class="current"':"")+">"+e[1]+"</p>"}),a.el=e.createChild("div",{className:"inner",innerHTML:i},"replace"),a.index=0}};n.startsWith("http")?this.fetch(n,i):i(n)},update:function(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0]))for(var t=0;t<this.data.length;t++)if(e>=this.data[t][0]&&(!this.data[t+1]||e<this.data[t+1][0])){this.index=t;var a=-(this.index-1);this.el.style.transform="translateY("+a+"rem)",this.el.style.webkitTransform="translateY("+a+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[t].addClass("current")}},parse:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var a=[];const n=t.length;for(var i=0;i<n;i++){const s=t[i].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),r=t[i].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const o=s.length;for(var c=0;c<o;c++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[c]),d=60*l[1],u=parseInt(l[2]),h=l[4]?parseInt(l[4])/(2===(l[4]+"").length?100:1e3):0,p=d+u+h;a.push([p,r])}}}return a=a.filter(function(e){return e[1]}),a.sort(function(e,t){return e[0]-t[0]}),a}return[]},fetch:function(e,t){fetch(e).then(function(e){return e.text()}).then(function(e){t(e)})["catch"](function(e){})}},c={el:null,create:function(){var t=r.current();this.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur" /></div></div><div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+'</span><div class="lrc"></div></div>',this.el.child(".cover").addEventListener("click",e.player.options.events["play-pause"]),o.create(this.el.child(".lrc"))}},l={el:null,bar:null,create:function(){var e=r.current().el;e&&(this.el&&(this.el.parentNode.removeClass("current").removeEventListener(n.nameMap.dragStart,this.drag),this.el.remove()),this.el=e.createChild("div",{className:"progress"}),this.el.attr("data-dtime",n.secondToTime(0)),this.bar=this.el.createChild("div",{className:"bar"}),e.addClass("current"),e.addEventListener(n.nameMap.dragStart,this.drag),r.scroll())},update:function(e){this.bar.width(Math.floor(100*e)+"%"),this.el.attr("data-ptime",n.secondToTime(e*i.duration))},seeking:function(e){e?this.el.addClass("seeking"):this.el.removeClass("seeking")},percent:function(e,t){var a=((e.clientX||e.changedTouches[0].clientX)-t.left())/t.width();return a=Math.max(a,0),Math.min(a,1)},drag:function(t){t.preventDefault();var a=r.current().el,s=function(e){e.preventDefault();var t=l.percent(e,a);l.update(t),o.update(t*i.duration)},c=function(t){t.preventDefault(),a.removeEventListener(n.nameMap.dragEnd,c),a.removeEventListener(n.nameMap.dragMove,s);var r=l.percent(t,a);l.update(r),e.player.seek(r*i.duration),i.disableTimeupdate=!1,l.seeking(!1)};i.disableTimeupdate=!0,l.seeking(!0),a.addEventListener(n.nameMap.dragMove,s),a.addEventListener(n.nameMap.dragEnd,c)}},d={el:null,btns:{},step:"next",create:function(){if(e.player.options.controls){var t=this;e.player.options.controls.forEach(function(a){if(!t.btns[a]){var s={onclick:function(n){t.events[a]?t.events[a](n):e.player.options.events[a](n)}};switch(a){case"volume":s.className=" "+(i.muted?"off":"on"),s.innerHTML='<div class="bar"></div>',s["on"+n.nameMap.dragStart]=t.events.volume,s.onclick=null;break;case"mode":s.className=" "+e.player.options.mode;break;default:s.className=""}s.className=a+s.className+" btn",t.btns[a]=t.el.createChild("div",s)}}),t.btns.volume.bar=t.btns.volume.child(".bar")}},events:{mode:function(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}d.btns.mode.className="mode "+e.player.options.mode+" btn",store.set("_PlayerMode",e.player.options.mode)},volume:function(t){t.preventDefault();var a=t.currentTarget,s=!1,r=function(t){t.preventDefault(),e.player.volume(d.percent(t,a)),s=!0},o=function(t){t.preventDefault(),a.removeEventListener(n.nameMap.dragEnd,o),a.removeEventListener(n.nameMap.dragMove,r),s?(e.player.muted(),e.player.volume(d.percent(t,a))):i.muted?(e.player.muted(),e.player.volume(i.volume)):(e.player.muted("muted"),d.update(0))};a.addEventListener(n.nameMap.dragMove,r),a.addEventListener(n.nameMap.dragEnd,o)},backward:function(t){d.step="prev",e.player.mode()},forward:function(t){d.step="next",e.player.mode()}},update:function(e){d.btns.volume.className="volume "+(!i.muted&&e>0?"on":"off")+" btn",d.btns.volume.bar.width(Math.floor(100*e)+"%")},percent:function(e,t){var a=((e.clientX||e.changedTouches[0].clientX)-t.left())/t.width();return a=Math.max(a,0),Math.min(a,1)}},u={onerror:function(){r.error(),e.player.mode()},ondurationchange:function(){1!==i.duration&&l.el.attr("data-dtime",n.secondToTime(i.duration))},onloadedmetadata:function(){e.player.seek(0),l.el.attr("data-dtime",n.secondToTime(i.duration))},onplay:function(){e.parentNode.addClass("playing"),showtip(this.attr("title")),NOWPLAYING=e},onpause:function(){e.parentNode.removeClass("playing"),NOWPLAYING=null},ontimeupdate:function(){this.disableTimeupdate||(l.update(this.currentTime/this.duration),o.update(this.currentTime))},onended:function(t){e.player.mode(),e.player.play()}},h={el:{},create:function(){if(e.player.options.btns){var t=this;e.player.options.btns.forEach(function(a){t.el[a]||(t.el[a]=e.createChild("div",{className:a+" btn",onclick:function(t){e.player.fetch().then(function(){e.player.options.events[a](t)})}}))})}}},p=function(t){e.player.created||(e.player.options=Object.assign(a,t),e.player.options.mode=store.get("_PlayerMode")||e.player.options.mode,h.create(),i=e.createChild(e.player.options.type,u),s.create(),e.parentNode.addClass(e.player.options.type),e.player.created=!0)};return p(t),e};var statics=CONFIG.statics.indexOf("//")>0?CONFIG.statics:CONFIG.root,scrollAction={x:"undefined",y:"undefined"},diffY=0,originTitle,titleTime;const BODY=document.getElementsByTagName("body")[0],HTML=document.documentElement,Container=$("#container"),loadCat=$("#loading"),siteNav=$("#nav"),siteHeader=$("#header"),menuToggle=siteNav.child(".toggle"),quickBtn=$("#quick"),sideBar=$("#sidebar"),siteBrand=$("#brand");var toolBtn=$("#tool"),toolPlayer,backToTop,goToComment,showContents,siteSearch=$("#search"),siteNavHeight,headerHightInner,headerHight,oWinHeight=window.innerHeight,oWinWidth=window.innerWidth,LOCAL_HASH=0,LOCAL_URL=window.location.href,pjax;const lazyload=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}}),Loader={timer:null,lock:!1,show:function(){clearTimeout(this.timer),document.body.removeClass("loaded"),loadCat.attr("style","display:block"),Loader.lock=!1},hide:function(e){CONFIG.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){Loader.lock||(CONFIG.loader.start&&transition(loadCat,0),document.body.addClass("loaded"),Loader.lock=!0)}},changeTheme=function(e){var t=$(".theme .ic");"dark"==e?(HTML.attr("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(HTML.attr("data-theme",null),t.removeClass("i-moon"),t.addClass("i-sun"))},changeMetaTheme=function(e){"dark"==HTML.attr("data-theme")&&(e="#222"),$('meta[name="theme-color"]').attr("content",e)},themeColorListener=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){e.matches?changeTheme("dark"):changeTheme()});var e=store.get("theme");e?changeTheme(e):CONFIG.darkmode&&changeTheme("dark"),$(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic"),a=BODY.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=function(){transition(a,{delay:2500,opacity:0},function(){BODY.removeChild(a)})};if(t.hasClass("i-sun"))var i=function(){a.addClass("dark"),changeTheme("dark"),store.set("theme","dark"),n()};else{a.addClass("dark");var i=function(){a.removeClass("dark"),changeTheme(),store.set("theme","light"),n()}}transition(a,1,function(){setTimeout(i,210)})})},visibilityListener=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":$('[rel="icon"]').attr("href",statics+CONFIG.favicon.hidden),document.title=LOCAL.favicon.hide,CONFIG.loader["switch"]&&Loader.show(),clearTimeout(titleTime);break;case"visible":$('[rel="icon"]').attr("href",statics+CONFIG.favicon.normal),document.title=LOCAL.favicon.show,CONFIG.loader["switch"]&&Loader.hide(1e3),titleTime=setTimeout(function(){document.title=originTitle},2e3)}})},showtip=function(e){if(e){var t=BODY.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide"),setTimeout(function(){BODY.removeChild(t)},300)},3e3)}},resizeHandle=function(e){siteNavHeight=siteNav.height(),headerHightInner=siteHeader.height(),headerHight=headerHightInner+$("#waves").height(),oWinWidth!=window.innerWidth&&sideBarToggleHandle(null,1),oWinHeight=window.innerHeight,oWinWidth=window.innerWidth,sideBar.child(".panels").height(oWinHeight+"px")},scrollHandle=function(e){var t=window.innerHeight,a=getDocHeight(),n=a>t?a-t:document.body.scrollHeight-t,i=window.pageYOffset>headerHightInner,s=window.pageYOffset>0;changeMetaTheme(i?"#FFF":"#222"),siteNav.toggleClass("show",i),toolBtn.toggleClass("affix",s),siteBrand.toggleClass("affix",s),sideBar.toggleClass("affix",window.pageYOffset>headerHight&&document.body.offsetWidth>991),"undefined"==typeof scrollAction.y&&(scrollAction.y=window.pageYOffset),diffY=scrollAction.y-window.pageYOffset,diffY<0?(siteNav.removeClass("up"),siteNav.toggleClass("down",i)):diffY>0&&(siteNav.removeClass("down"),siteNav.toggleClass("up",i)),scrollAction.y=window.pageYOffset;var r=Math.round(Math.min(100*window.pageYOffset/n,100))+"%";backToTop.child("span").innerText=r,$(".percent").width(r)},pagePosition=function(){CONFIG.auto_scroll&&store.set(LOCAL_URL,scrollAction.y)},positionInit=function(e){var t=window.location.hash,a=null;return LOCAL_HASH?void store.del(LOCAL_URL):(a=t?$(decodeURI(t)):CONFIG.auto_scroll?parseInt(store.get(LOCAL_URL)):0,a&&(pageScroll(a),LOCAL_HASH=1),void(e&&t&&!LOCAL_HASH&&(pageScroll(a),LOCAL_HASH=1)))},clipBoard=function(e,t){var a=BODY.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:!0,value:e});const n=document.getSelection(),i=n.rangeCount>0&&n.getRangeAt(0);a.select(),a.setSelectionRange(0,e.length),a.readOnly=!1;var s=document.execCommand("copy");t&&t(s),a.blur(),i&&(n.removeAllRanges(),n.addRange(i)),BODY.removeChild(a)},sideBarToggleHandle=function(e,t){sideBar.hasClass("on")?(sideBar.removeClass("on"),menuToggle.removeClass("close"),t?sideBar.style="":transition(sideBar,"slideRightOut")):t?sideBar.style="":transition(sideBar,"slideRightIn",function(){sideBar.addClass("on"),menuToggle.addClass("close")})},sideBarTab=function(){var e=sideBar.child(".inner");sideBar.find(".panel");sideBar.child(".tab")&&e.removeChild(sideBar.child(".tab"));var t=document.createElement("ul"),a="active";t.className="tab",["contents","related","overview"].forEach(function(e){var n=sideBar.child(".panel."+e);if(n.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1)return void("contents"==e&&showContents.display("none"));"contents"==e&&showContents.display("");var i=document.createElement("li"),s=document.createElement("span"),r=document.createTextNode(n.attr("data-title"));s.appendChild(r),i.appendChild(s),i.addClass(e+" item"),a?(n.addClass(a),i.addClass(a)):n.removeClass("active"),i.addEventListener("click",function(e){var t=event.currentTarget;t.hasClass("active")||(sideBar.find(".tab .item").forEach(function(e){e.removeClass("active")}),sideBar.find(".panel").forEach(function(e){e.removeClass("active")}),sideBar.child(".panel."+t.className.replace(" item","")).addClass("active"),t.addClass("active"))}),t.appendChild(i),a=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),sideBar.child(".panels").style.paddingTop=""):sideBar.child(".panels").style.paddingTop=".625rem"},sidebarTOC=function(){var e=$.all(".contents li");if(!(e.length<1)){var t=Array.prototype.slice.call(e)||[],a=null;t=t.map(function(e,t){var n=e.child("a.toc-link"),s=$(decodeURI(n.attr("href")));if(s){var r=s.child("a.anchor"),o=function(e){e.preventDefault();var n=$(decodeURI(e.currentTarget.attr("href")));a=t,pageScroll(n,null,function(){i(t),a=null})};return n.addEventListener("click",o),r&&r.addEventListener("click",function(e){o(e),clipBoard(CONFIG.hostname+"/"+LOCAL.path+e.currentTarget.attr("href"))}),s}});var n=sideBar.child(".contents.panel"),i=function(a,i){var s=e[a];if(s&&!s.hasClass("current")){$.each(".toc .active",function(e){e&&e.removeClass("active current")}),t.forEach(function(e){e&&e.removeClass("active")}),s.addClass("active current"),t[a]&&t[a].addClass("active");for(var r=s.parentNode;!r.matches(".contents");){if(r.matches("li")){r.addClass("active");var o=$(r.child("a.toc-link").attr("href"));o&&o.addClass("active")}r=r.parentNode}"none"!=getComputedStyle(sideBar).display&&n.hasClass("active")&&pageScroll(n,s.offsetTop-n.offsetHeight/4)}},s=function(e){var a=0,n=e[a];if(n.boundingClientRect.top>0)return a=t.indexOf(n.target),0===a?0:a-1;for(;a<e.length;a++){if(!(e[a].boundingClientRect.top<=0))return t.indexOf(n.target);n=e[a]}return t.indexOf(n.target)},r=function(){if(window.IntersectionObserver){var e=new IntersectionObserver(function(e,t){var n=s(e)+(diffY<0?1:0);null===a&&i(n)},{rootMargin:"0px 0px -100% 0px",threshold:0});t.forEach(function(t){t&&e.observe(t)})}};r()}},backToTopHandle=function(){pageScroll(0)},goToBottomHandle=function(){pageScroll(parseInt(Container.height()))},goToCommentHandle=function(){pageScroll($("#comments"))},menuActive=function(){$.each(".menu .item:not(.title)",function(e){var t=e.child("a[href]"),a=e.parentNode.parentNode;if(t){var n=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),i=!CONFIG.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),s=t.hostname===location.hostname&&(n||i);e.toggleClass("active",s),e.parentNode.child(".active")&&a.hasClass("dropdown")?a.removeClass("active").addClass("expand"):a.removeClass("expand")}})},cardActive=function(){if($(".index.wrap")){if(window.IntersectionObserver){var e=new IntersectionObserver(function(t){t.forEach(function(t){t.target.hasClass("show")?e.unobserve(t.target):(t.isIntersecting||t.intersectionRatio>0)&&(t.target.addClass("show"),e.unobserve(t.target))})},{root:null,threshold:[.3]});$.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)}),$(".index.wrap .item:first-child").addClass("show")}else $.each(".index.wrap article.item, .index.wrap section.item",function(e){e.hasClass("show")===!1&&e.addClass("show")});$.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){$(".cards .item.active")&&$(".cards .item.active").removeClass("active"),e.addClass("active")})}),["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})}},registerExtURL=function(){$.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join("")),t.rel="noopener external nofollow noreferrer",t.target="_blank",t.className=e.className,t.title=e.title||e.innerText,t.innerHTML=e.innerHTML,e.dataset.backgroundImage&&(t.dataset.backgroundImage=e.dataset.backgroundImage),e.parentNode.replaceChild(t,e)})},postFancybox=function(e){$(e+" .md img")&&(vendorCss("fancybox"),vendorJs("fancybox",function(){var t=jQuery.noConflict();$.each(e+" p.gallery",function(e){var t=document.createElement("div");t.className="gallery",t.attr("data-height",e.attr("data-height")||220),t.innerHTML=e.innerHTML.replace(/<br>/g,""),e.parentNode.insertBefore(t,e),e.remove()}),$.each(e+" .md img:not(.emoji):not(.vemoji)",function(e){var a,n=t(e),i="image-info";if(!n.is("a img")){var s=n.attr("data-src")||n.attr("src");n.data("safe-src",s);var r=n.wrap('<a class="fancybox" href="'+s+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");n.is(".gallery img")?i="jg-caption":r.attr("data-fancybox","default").attr("rel","default")}if(a=e.attr("title")){r.attr("data-caption",a);var o=document.createElement("span"),c=document.createTextNode(a);o.appendChild(c),o.addClass(i),e.insertAfter(o)}}),$.each(e+" div.gallery",function(e,a){t(e).justifiedGallery({rowHeight:t(e).data("height")||120,rel:"gallery-"+a}).on("jg.complete",function(){t(this).find("a").each(function(e,t){t.attr("data-fancybox","gallery-"+a)})})}),t.fancybox.defaults.hash=!1,t(e+" .fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},window.jQuery))},postBeauty=function(){loadComments(),$(".md")&&(postFancybox(".post.block"),$(".post.block").oncopy=function(e){if(showtip(LOCAL.copyright),LOCAL.nocopy)return void e.preventDefault();var t=$("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var a="# "+t.child(".author").innerText,n="# "+t.child(".link").innerText,i="# "+t.child(".license").innerText,s=a+"<br>"+n+"<br>"+i+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>"),r=a+"\n"+n+"\n"+i+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData)e.clipboardData.setData("text/html",s),e.clipboardData.setData("text/plain",r);else if(window.clipboardData)return window.clipboardData.setData("text",r)}},$.each("li ruby",function(e){var t=e.parentNode;"LI"!=e.parentNode.tagName&&(t=e.parentNode.parentNode),t.addClass("ruby")}),$.each("ol[start]",function(e){e.style.counterReset="counter "+parseInt(e.attr("start")-1)}),$.each(".md table",function(e){e.wrap({className:"table-container"})}),$.each(".highlight > .table-container",function(e){e.className="code-container"}),$.each("figure.highlight",function(e){var t=e.child(".code-container"),a=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var n=e.child(".copy-btn");LOCAL.nocopy?n.remove():(n.addEventListener("click",function(e){var a=e.currentTarget,n="",i="";t.find("pre").forEach(function(e){i+=n+e.innerText,n="\n"}),clipBoard(i,function(e){a.child(".ic").className=e?"ic i-check":"ic i-times",a.blur(),showtip(LOCAL.copyright)})}),n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)}));var i=e.child(".breakline-btn");i.addEventListener("click",function(t){var a=t.currentTarget;e.hasClass("breakline")?(e.removeClass("breakline"),a.child(".ic").className="ic i-align-left"):(e.addClass("breakline"),a.child(".ic").className="ic i-align-justify")});var s=e.child(".fullscreen-btn"),r=function(){e.removeClass("fullscreen"),e.scrollTop=0,BODY.removeClass("fullscreen"),s.child(".ic").className="ic i-expand"},o=function(t){t.currentTarget;e.hasClass("fullscreen")?(r(),d&&d(),pageScroll(e)):(e.addClass("fullscreen"),BODY.addClass("fullscreen"),s.child(".ic").className="ic i-compress",l&&l())};if(s.addEventListener("click",o),a&&a.addEventListener("click",o),t&&t.find("tr").length>15){t.style.maxHeight="300px",t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var c=t.child(".show-btn"),l=function(){t.style.maxHeight="",c.addClass("open")},d=function(){t.style.maxHeight="300px",c.removeClass("open")};c.addEventListener("click",function(e){c.hasClass("open")?(r(),
d(),pageScroll(t)):l()})}}),$.each("pre.mermaid > svg",function(e){e.style.maxWidth=""}),$.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=$("#qr");"inline-flex"===t.display()?transition(t,0):transition(t,1,function(){t.display("inline-flex")})})}),$.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){e.hasClass("correct")?(e.toggleClass("right"),e.parentNode.parentNode.addClass("show")):e.toggleClass("wrong")})}),$.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})}),$.each(".quiz > p:first-child",function(e){var t=e.parentNode,a="choice";(t.hasClass("true")||t.hasClass("false"))&&(a="true_false"),t.hasClass("multi")&&(a="multiple"),t.hasClass("fill")&&(a="gap_fill"),t.hasClass("essay")&&(a="essay"),e.attr("data-type",LOCAL.quiz[a])}),$.each(".quiz .mistake",function(e){e.attr("data-type",LOCAL.quiz.mistake)}),$.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(5*Math.random())]}),$.each(".md div.player",function(e){mediaPlayer(e,{type:e.attr("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(e.attr("data-src"))).fetch()}))},tabFormat=function(){var e;$.each("div.tab",function(t,a){if(!t.attr("data-ready")){var n=t.attr("data-id"),i=t.attr("data-title"),s=$("#"+n);if(s)e=!1;else{s=document.createElement("div"),s.className="tabs",s.id=n,s.innerHTML='<div class="show-btn"></div>';var r=s.child(".show-btn");r.addEventListener("click",function(e){pageScroll(s)}),t.parentNode.insertBefore(s,t),e=!0}var o=s.child(".nav ul");o||(o=s.createChild("div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul"));var c=o.createChild("li",{innerHTML:i});e&&(c.addClass("active"),t.addClass("active")),c.addEventListener("click",function(e){var a=e.currentTarget;s.find(".active").forEach(function(e){e.removeClass("active")}),t.addClass("active"),a.addClass("active")}),s.appendChild(t),t.attr("data-ready",!0)}})},loadComments=function(){var e=$("#comments");if(!e)return void goToComment.display("none");if(goToComment.display(""),window.IntersectionObserver){var t=new IntersectionObserver(function(e,t){var a=e[0];vendorCss("valine"),(a.isIntersecting||a.intersectionRatio>0)&&(transition($("#comments"),"bounceUpIn"),t.disconnect())});t.observe(e)}else vendorCss("valine")},algoliaSearch=function(e){if(null!==CONFIG.search){siteSearch||(siteSearch=BODY.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'}));var t=instantsearch({indexName:CONFIG.search.indexName,searchClient:algoliasearch(CONFIG.search.appID,CONFIG.search.apiKey),searchFunction:function(e){var t=$(".search-input");t.value&&e.search()}});t.on("render",function(){e.refresh($("#search-hits"))}),t.addWidgets([instantsearch.widgets.configure({hitsPerPage:CONFIG.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(e){var t=e.categories?"<span>"+e.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+CONFIG.root+e.path+'">'+t+e._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:!1,showFirst:!1,showLast:!1,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]),t.start(),$.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden",transition(siteSearch,"shrinkIn",function(){$(".search-input").focus()})})});const a=function(){document.body.style.overflow="",transition(siteSearch,0)};siteSearch.addEventListener("click",function(e){e.target===siteSearch&&a()}),$(".close-btn").addEventListener("click",a),window.addEventListener("pjax:success",a),window.addEventListener("keyup",function(e){"Escape"===e.key&&a()})}},domInit=function(){$.each(".overview .menu > .item",function(e){siteNav.child(".menu").appendChild(e.cloneNode(!0))}),loadCat.addEventListener("click",Loader.vanish),menuToggle.addEventListener("click",sideBarToggleHandle),$(".dimmer").addEventListener("click",sideBarToggleHandle),quickBtn.child(".down").addEventListener("click",goToBottomHandle),quickBtn.child(".up").addEventListener("click",backToTopHandle),toolBtn||(toolBtn=siteHeader.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),toolPlayer=toolBtn.child(".player"),backToTop=toolBtn.child(".back-to-top"),goToComment=toolBtn.child(".chat"),showContents=toolBtn.child(".contents"),backToTop.addEventListener("click",backToTopHandle),goToComment.addEventListener("click",goToCommentHandle),showContents.addEventListener("click",sideBarToggleHandle),mediaPlayer(toolPlayer),$("main").addEventListener("click",function(){toolPlayer.player.mini()})},pjaxReload=function(){pagePosition(),sideBar.hasClass("on")&&transition(sideBar,function(){sideBar.removeClass("on"),menuToggle.removeClass("close")}),$("#main").innerHTML="",$("#main").appendChild(loadCat.lastChild.cloneNode(!0)),pageScroll(0)},siteRefresh=function(e){LOCAL_HASH=0,LOCAL_URL=window.location.href,vendorCss("katex"),vendorJs("copy_tex"),vendorCss("mermaid"),vendorJs("chart"),vendorJs("valine",function(){var e=Object.assign({},CONFIG.valine);e=Object.assign(e,LOCAL.valine||{}),e.el="#comments",e.pathname=LOCAL.path,e.pjax=pjax,e.lazyload=lazyload,new MiniValine(e),setTimeout(function(){positionInit(1),postFancybox(".v")},1e3)},window.MiniValine),e||$.each("script[data-pjax]",pjaxScript),originTitle=document.title,resizeHandle(),menuActive(),sideBarTab(),sidebarTOC(),registerExtURL(),postBeauty(),tabFormat(),toolPlayer.player.load(LOCAL.audio||CONFIG.audio||{}),Loader.hide(),setTimeout(function(){positionInit()},500),cardActive(),lazyload.observe()},siteInit=function(){domInit(),pjax=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:!1,cacheBust:!1}),CONFIG.quicklink.ignores=LOCAL.ignores,quicklink.listen(CONFIG.quicklink),visibilityListener(),themeColorListener(),algoliaSearch(pjax),window.addEventListener("scroll",scrollHandle),window.addEventListener("resize",resizeHandle),window.addEventListener("pjax:send",pjaxReload),window.addEventListener("pjax:success",siteRefresh),window.addEventListener("beforeunload",function(){pagePosition()}),siteRefresh(1)};window.addEventListener("DOMContentLoaded",siteInit),console.log("%c Theme.Shoka v"+CONFIG.version+" %c https://shoka.lostyu.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
//rebuild by hrmmi 