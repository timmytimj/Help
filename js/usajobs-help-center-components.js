/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.5",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",u="PAUSED",f=n.defaults,d=this,h=i.extend({},f,r),g=[],p=!1,v=0,m=u,w=!0,y=0,S=!0,b=function(){for(var e in h)f.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T),h.refreshInterval=parseInt(h.refreshInterval)||f.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=u),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=O(g),t.on("shift.controller_sort",function(){g=O(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=O(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",u=r.defaults,f=this,d=i.extend({},u,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)u.hasOwnProperty(e)||delete d[e];for(var t in u)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),f},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),f):f},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(f,new e.Event(i,t.namespace,f,n))})}return f},f.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&f.update())}).on("shift.internal",function(){S(),f.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(f),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(f),f.trigger("add",{controller:s}),f.update()),f},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,f.update(!0)),f):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(f),f.trigger("remove")}return f},this.destroy=function(e){return f.trigger("destroy",{reset:e}),f.remove(),f.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,f.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),f.progress(t)}else T&&h===l&&O(!0);else s.updateScene(f,!1);return f},this.refresh=function(){return b(),E(),f},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||O(),t){var o={progress:g,state:h,scrollDirection:r},u=h!=n,p=function(e){f.trigger(e,o)};u&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),u&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return f}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(f))&&!e&&(f.trigger("change",{what:t,newval:d[t]}),f.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&r){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=v;v=n,u&&!e&&f.trigger("shift",{reason:"triggerElementPosition"})},x=function(){d.triggerHook>0&&f.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(t){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=u[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){f[e]||(f[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(f.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&f.trigger("shift",{reason:e})),f):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*f.triggerHook()),e};var T,A;f.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&O(),t&&_()}).on("progress.internal",function(){O()}).on("add.internal",function(){_()}).on("destroy.internal",function(e){f.removePin(e.reset)});var O=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&_()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),_());var u=i.get.offset(A.spacer,!0),f=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;u[t.vertical?"top":"left"]+=f,i.css(A.spacer.firstChild,{top:u.top,left:u.left})}}},_=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},N=function(){s&&T&&h===l&&!s.info("isDocument")&&O()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&_()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return f;if("fixed"===i.css(e,"position"))return f;if(T){if(T===e)return f;f.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var u=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(u,d),u.setAttribute(t,""),i.addClass(u,n.spacerClass),A={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(u,{width:c.width}),A.relSize.height&&i.css(u,{height:c.height}),u.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",N),window.addEventListener("resize",N),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),O(),f},this.removePin=function(e){if(T){if(h===l&&O(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},o.forEach(function(e){margins[e]=r[e]||""}),i.css(n,margins)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",N),window.removeEventListener("resize",N),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return f};var R,k=[];return f.on("destroy.internal",function(e){f.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&f.removeClassToggle(),R=t,k=n,f.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),f):f},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),f.off("start.internal_class end.internal_class"),R=void 0,k=[],f},w(),f};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!f.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],u=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};f.String=function(e){return"string"===f(e)},f.Function=function(e){return"function"===f(e)},f.Array=function(e){return Array.isArray(e)},f.Number=function(e){return!f.Array(e)&&e-parseFloat(e)+1>=0},f.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(f.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===f(t)||f.Array(t))for(var r=0,i=n.length=t.length;i>r;r++){var o=t[r];n[r]=f.DomElement(o)?o:d.elements(o)}else(f.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(f.String(t))return i(e)[s(t)];if(f.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
!function(e,t){if("object"==typeof exports&&exports)t(exports);else{var n={};t(n),"function"==typeof define&&define.amd?define(n):e.Mustache=n}}(this,function(e){function t(e,t){return f.call(e,t)}function n(e){return!t(d,e)}function r(e){return"function"==typeof e}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e){return String(e).replace(/[&<>"'\/]/g,function(e){return y[e]})}function s(e){if(!g(e)||2!==e.length)throw new Error("Invalid tags: "+e);return[new RegExp(i(e[0])+"\\s*"),new RegExp("\\s*"+i(e[1]))]}function a(t,r){function o(){if(C&&!E)for(;k.length;)delete _[k.pop()];else k=[];C=!1,E=!1}r=r||e.tags,t=t||"","string"==typeof r&&(r=r.split(b));for(var a,p,h,f,d,m,g=s(r),y=new c(t),T=[],_=[],k=[],C=!1,E=!1;!y.eos();){if(a=y.pos,h=y.scanUntil(g[0]))for(var A=0,N=h.length;N>A;++A)f=h.charAt(A),n(f)?k.push(_.length):E=!0,_.push(["text",f,a,a+1]),a+=1,"\n"===f&&o();if(!y.scan(g[0]))break;if(C=!0,p=y.scan(S)||"name",y.scan(v),"="===p?(h=y.scanUntil(x),y.scan(x),y.scanUntil(g[1])):"{"===p?(h=y.scanUntil(new RegExp("\\s*"+i("}"+r[1]))),y.scan(w),y.scanUntil(g[1]),p="&"):h=y.scanUntil(g[1]),!y.scan(g[1]))throw new Error("Unclosed tag at "+y.pos);if(d=[p,h,a,y.pos],_.push(d),"#"===p||"^"===p)T.push(d);else if("/"===p){if(m=T.pop(),!m)throw new Error('Unopened section "'+h+'" at '+a);if(m[1]!==h)throw new Error('Unclosed section "'+m[1]+'" at '+a)}else"name"===p||"{"===p||"&"===p?E=!0:"="===p&&(g=s(r=h.split(b)))}if(m=T.pop())throw new Error('Unclosed section "'+m[1]+'" at '+y.pos);return l(u(_))}function u(e){for(var t,n,r=[],i=0,o=e.length;o>i;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function l(e){for(var t,n,r=[],i=r,o=[],s=0,a=e.length;a>s;++s)switch(t=e[s],t[0]){case"#":case"^":i.push(t),o.push(t),i=t[4]=[];break;case"/":n=o.pop(),n[5]=t[2],i=o.length>0?o[o.length-1][4]:r;break;default:i.push(t)}return r}function c(e){this.string=e,this.tail=e,this.pos=0}function p(e,t){this.view=null==e?{}:e,this.cache={".":this.view},this.parent=t}function h(){this.cache={}}var f=RegExp.prototype.test,d=/\S/,m=Object.prototype.toString,g=Array.isArray||function(e){return"[object Array]"===m.call(e)},y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},v=/\s*/,b=/\s+/,x=/\s*=/,w=/\s*\}/,S=/#|\^|\/|>|\{|&|=|!/;c.prototype.eos=function(){return""===this.tail},c.prototype.scan=function(e){var t=this.tail.match(e);if(t&&0===t.index){var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n}return""},c.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},p.prototype.push=function(e){return new p(e,this)},p.prototype.lookup=function(e){var t;if(e in this.cache)t=this.cache[e];else{for(var n=this;n;){if(e.indexOf(".")>0){t=n.view;for(var i=e.split("."),o=0;null!=t&&o<i.length;)t=t[i[o++]]}else t=n.view[e];if(null!=t)break;n=n.parent}this.cache[e]=t}return r(t)&&(t=t.call(this.view)),t},h.prototype.clearCache=function(){this.cache={}},h.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=a(e,t)),r},h.prototype.render=function(e,t,n){var r=this.parse(e),i=t instanceof p?t:new p(t);return this.renderTokens(r,i,n,e)},h.prototype.renderTokens=function(t,n,i,o){function s(e){return c.render(e,n,i)}for(var a,u,l="",c=this,p=0,h=t.length;h>p;++p)switch(a=t[p],a[0]){case"#":if(u=n.lookup(a[1]),!u)continue;if(g(u))for(var f=0,d=u.length;d>f;++f)l+=this.renderTokens(a[4],n.push(u[f]),i,o);else if("object"==typeof u||"string"==typeof u)l+=this.renderTokens(a[4],n.push(u),i,o);else if(r(u)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(a[3],a[5]),s),null!=u&&(l+=u)}else l+=this.renderTokens(a[4],n,i,o);break;case"^":u=n.lookup(a[1]),(!u||g(u)&&0===u.length)&&(l+=this.renderTokens(a[4],n,i,o));break;case">":if(!i)continue;u=r(i)?i(a[1]):i[a[1]],null!=u&&(l+=this.renderTokens(this.parse(u),n,i,u));break;case"&":u=n.lookup(a[1]),null!=u&&(l+=u);break;case"name":u=n.lookup(a[1]),null!=u&&(l+=e.escape(u));break;case"text":l+=a[1]}return l},e.name="mustache.js",e.version="0.8.1",e.tags=["{{","}}"];var T=new h;e.clearCache=function(){return T.clearCache()},e.parse=function(e,t){return T.parse(e,t)},e.render=function(e,t,n){return T.render(e,t,n)},e.to_html=function(t,n,i,o){var s=e.render(t,n,i);return r(o)?void o(s):s},e.escape=o,e.Scanner=c,e.Context=p,e.Writer=h});var dateFormat=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g,r=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e};return function(i,o,s){var a=dateFormat;if(1!=arguments.length||"[object String]"!=Object.prototype.toString.call(i)||/\d/.test(i)||(o=i,i=void 0),i=i?new Date(i):new Date,isNaN(i))throw SyntaxError("invalid date");o=String(a.masks[o]||o||a.masks["default"]),"UTC:"==o.slice(0,4)&&(o=o.slice(4),s=!0);var u=s?"getUTC":"get",l=i[u+"Date"](),c=i[u+"Day"](),p=i[u+"Month"](),h=i[u+"FullYear"](),f=i[u+"Hours"](),d=i[u+"Minutes"](),m=i[u+"Seconds"](),g=i[u+"Milliseconds"](),y=s?0:i.getTimezoneOffset(),v={d:l,dd:r(l),ddd:a.i18n.dayNames[c],dddd:a.i18n.dayNames[c+7],m:p+1,mm:r(p+1),mmm:a.i18n.monthNames[p],mmmm:a.i18n.monthNames[p+12],yy:String(h).slice(2),yyyy:h,h:f%12||12,hh:r(f%12||12),H:f,HH:r(f),M:d,MM:r(d),s:m,ss:r(m),l:r(g,3),L:r(g>99?Math.round(g/10):g),t:12>f?"a":"p",tt:12>f?"am":"pm",T:12>f?"A":"P",TT:12>f?"AM":"PM",Z:s?"UTC":(String(i).match(t)||[""]).pop().replace(n,""),o:(y>0?"-":"+")+r(100*Math.floor(Math.abs(y)/60)+Math.abs(y)%60,4),S:["th","st","nd","rd"][l%10>3?0:(l%100-l%10!=10)*l%10]};return o.replace(e,function(e){return e in v?v[e]:e.slice(1,e.length-1)})}}();dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},dateFormat.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},Date.prototype.format=function(e,t){return dateFormat(this,e,t)},/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.12.1
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.com/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 */
function(e,t){"object"==typeof exports?module.exports=t(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"==typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],t):e.URI=t(e.punycode,e.IPv6,e.SecondLevelDomains,e)}(this,function(e,t,n,r){"use strict";function i(e,t){return this instanceof i?(void 0===e&&(e="undefined"!=typeof location?location.href+"":""),this.href(e),void 0!==t?this.absoluteTo(t):this):new i(e,t)}function o(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function s(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function a(e){return"Array"===s(e)}function u(e,t){var n,r,i={};if(a(t))for(n=0,r=t.length;r>n;n++)i[t[n]]=!0;else i[t]=!0;for(n=0,r=e.length;r>n;n++)void 0!==i[e[n]]&&(e.splice(n,1),r--,n--);return e}function l(e,t){var n,r;if(a(t)){for(n=0,r=t.length;r>n;n++)if(!l(e,t[n]))return!1;return!0}var i=s(t);for(n=0,r=e.length;r>n;n++)if("RegExp"===i){if("string"==typeof e[n]&&e[n].match(t))return!0}else if(e[n]===t)return!0;return!1}function c(e,t){if(!a(e)||!a(t))return!1;if(e.length!==t.length)return!1;e.sort(),t.sort();for(var n=0,r=e.length;r>n;n++)if(e[n]!==t[n])return!1;return!0}function p(e){return escape(e)}function h(e){return encodeURIComponent(e).replace(/[!'()*]/g,p).replace(/\*/g,"%2A")}var f=r&&r.URI;i.version="1.12.1";var d=i.prototype,m=Object.prototype.hasOwnProperty;i._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:i.duplicateQueryParameters,escapeQuerySpace:i.escapeQuerySpace}},i.duplicateQueryParameters=!1,i.escapeQuerySpace=!0,i.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,i.idn_expression=/[^a-z0-9\.-]/i,i.punycode_expression=/(xn--)/i,i.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,i.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/gi,i.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u201e\u2018\u2019]+$/},i.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},i.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/,i.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src"},i.getDomAttribute=function(e){if(!e||!e.nodeName)return void 0;var t=e.nodeName.toLowerCase();return"input"===t&&"image"!==e.type?void 0:i.domAttributes[t]},i.encode=h,i.decode=decodeURIComponent,i.iso8859=function(){i.encode=escape,i.decode=unescape},i.unicode=function(){i.encode=h,i.decode=decodeURIComponent},i.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}},i.encodeQuery=function(e,t){var n=i.encode(e+"");return void 0===t&&(t=i.escapeQuerySpace),t?n.replace(/%20/g,"+"):n},i.decodeQuery=function(e,t){e+="",void 0===t&&(t=i.escapeQuerySpace);try{return i.decode(t?e.replace(/\+/g,"%20"):e)}catch(n){return e}},i.recodePath=function(e){for(var t=(e+"").split("/"),n=0,r=t.length;r>n;n++)t[n]=i.encodePathSegment(i.decode(t[n]));return t.join("/")},i.decodePath=function(e){for(var t=(e+"").split("/"),n=0,r=t.length;r>n;n++)t[n]=i.decodePathSegment(t[n]);return t.join("/")};var g,y={encode:"encode",decode:"decode"},v=function(e,t){return function(n){return i[t](n+"").replace(i.characters[e][t].expression,function(n){return i.characters[e][t].map[n]})}};for(g in y)i[g+"PathSegment"]=v("pathname",y[g]);i.encodeReserved=v("reserved","encode"),i.parse=function(e,t){var n;return t||(t={}),n=e.indexOf("#"),n>-1&&(t.fragment=e.substring(n+1)||null,e=e.substring(0,n)),n=e.indexOf("?"),n>-1&&(t.query=e.substring(n+1)||null,e=e.substring(0,n)),"//"===e.substring(0,2)?(t.protocol=null,e=e.substring(2),e=i.parseAuthority(e,t)):(n=e.indexOf(":"),n>-1&&(t.protocol=e.substring(0,n)||null,t.protocol&&!t.protocol.match(i.protocol_expression)?t.protocol=void 0:"file"===t.protocol?e=e.substring(n+3):"//"===e.substring(n+1,n+3)?(e=e.substring(n+3),e=i.parseAuthority(e,t)):(e=e.substring(n+1),t.urn=!0))),t.path=e,t},i.parseHost=function(e,t){var n,r,i=e.indexOf("/");return-1===i&&(i=e.length),"["===e.charAt(0)?(n=e.indexOf("]"),t.hostname=e.substring(1,n)||null,t.port=e.substring(n+2,i)||null):e.indexOf(":")!==e.lastIndexOf(":")?(t.hostname=e.substring(0,i)||null,t.port=null):(r=e.substring(0,i).split(":"),t.hostname=r[0]||null,t.port=r[1]||null),t.hostname&&"/"!==e.substring(i).charAt(0)&&(i++,e="/"+e),e.substring(i)||"/"},i.parseAuthority=function(e,t){return e=i.parseUserinfo(e,t),i.parseHost(e,t)},i.parseUserinfo=function(e,t){var n,r=e.indexOf("/"),o=r>-1?e.lastIndexOf("@",r):e.indexOf("@");return o>-1&&(-1===r||r>o)?(n=e.substring(0,o).split(":"),t.username=n[0]?i.decode(n[0]):null,n.shift(),t.password=n[0]?i.decode(n.join(":")):null,e=e.substring(o+1)):(t.username=null,t.password=null),e},i.parseQuery=function(e,t){if(!e)return{};if(e=e.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,""),!e)return{};for(var n,r,o,s={},a=e.split("&"),u=a.length,l=0;u>l;l++)n=a[l].split("="),r=i.decodeQuery(n.shift(),t),o=n.length?i.decodeQuery(n.join("="),t):null,s[r]?("string"==typeof s[r]&&(s[r]=[s[r]]),s[r].push(o)):s[r]=o;return s},i.build=function(e){var t="";return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=i.buildAuthority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragment),t},i.buildHost=function(e){var t="";return e.hostname?(i.ip6_expression.test(e.hostname)?t+=e.port?"["+e.hostname+"]:"+e.port:e.hostname:(t+=e.hostname,e.port&&(t+=":"+e.port)),t):""},i.buildAuthority=function(e){return i.buildUserinfo(e)+i.buildHost(e)},i.buildUserinfo=function(e){var t="";return e.username&&(t+=i.encode(e.username),e.password&&(t+=":"+i.encode(e.password)),t+="@"),t},i.buildQuery=function(e,t,n){var r,o,s,u,l="";for(o in e)if(m.call(e,o)&&o)if(a(e[o]))for(r={},s=0,u=e[o].length;u>s;s++)void 0!==e[o][s]&&void 0===r[e[o][s]+""]&&(l+="&"+i.buildQueryParameter(o,e[o][s],n),t!==!0&&(r[e[o][s]+""]=!0));else void 0!==e[o]&&(l+="&"+i.buildQueryParameter(o,e[o],n));return l.substring(1)},i.buildQueryParameter=function(e,t,n){return i.encodeQuery(e,n)+(null!==t?"="+i.encodeQuery(t,n):"")},i.addQuery=function(e,t,n){if("object"==typeof t)for(var r in t)m.call(t,r)&&i.addQuery(e,r,t[r]);else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");if(void 0===e[t])return void(e[t]=n);"string"==typeof e[t]&&(e[t]=[e[t]]),a(n)||(n=[n]),e[t]=e[t].concat(n)}},i.removeQuery=function(e,t,n){var r,o,s;if(a(t))for(r=0,o=t.length;o>r;r++)e[t[r]]=void 0;else if("object"==typeof t)for(s in t)m.call(t,s)&&i.removeQuery(e,s,t[s]);else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");void 0!==n?e[t]===n?e[t]=void 0:a(e[t])&&(e[t]=u(e[t],n)):e[t]=void 0}},i.hasQuery=function(e,t,n,r){if("object"==typeof t){for(var o in t)if(m.call(t,o)&&!i.hasQuery(e,o,t[o]))return!1;return!0}if("string"!=typeof t)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(s(n)){case"Undefined":return t in e;case"Boolean":var u=Boolean(a(e[t])?e[t].length:e[t]);return n===u;case"Function":return!!n(e[t],t,e);case"Array":if(!a(e[t]))return!1;var p=r?l:c;return p(e[t],n);case"RegExp":return a(e[t])?r?l(e[t],n):!1:Boolean(e[t]&&e[t].match(n));case"Number":n=String(n);case"String":return a(e[t])?r?l(e[t],n):!1:e[t]===n;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},i.commonPath=function(e,t){var n,r=Math.min(e.length,t.length);for(n=0;r>n;n++)if(e.charAt(n)!==t.charAt(n)){n--;break}return 1>n?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":(("/"!==e.charAt(n)||"/"!==t.charAt(n))&&(n=e.substring(0,n).lastIndexOf("/")),e.substring(0,n+1))},i.withinString=function(e,t,n){n||(n={});var r=n.start||i.findUri.start,o=n.end||i.findUri.end,s=n.trim||i.findUri.trim,a=/[a-z0-9-]=["']?$/i;for(r.lastIndex=0;;){var u=r.exec(e);if(!u)break;var l=u.index;if(n.ignoreHtml){var c=e.slice(Math.max(l-3,0),l);if(c&&a.test(c))continue}var p=l+e.slice(l).search(o),h=e.slice(l,p).replace(s,"");if(!n.ignore||!n.ignore.test(h)){p=l+h.length;var f=t(h,l,p,e);e=e.slice(0,l)+f+e.slice(p),r.lastIndex=l+f.length}}return r.lastIndex=0,e},i.ensureValidHostname=function(t){if(t.match(i.invalid_hostname_characters)){if(!e)throw new TypeError("Hostname '"+t+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(e.toASCII(t).match(i.invalid_hostname_characters))throw new TypeError("Hostname '"+t+"' contains characters other than [A-Z0-9.-]")}},i.noConflict=function(e){if(e){var n={URI:this.noConflict()};return URITemplate&&"function"==typeof URITemplate.noConflict&&(n.URITemplate=URITemplate.noConflict()),t&&"function"==typeof t.noConflict&&(n.IPv6=t.noConflict()),SecondLevelDomains&&"function"==typeof SecondLevelDomains.noConflict&&(n.SecondLevelDomains=SecondLevelDomains.noConflict()),n}return r.URI===this&&(r.URI=f),this},d.build=function(e){return e===!0?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=i.build(this._parts),this._deferred_build=!1),this},d.clone=function(){return new i(this)},d.valueOf=d.toString=function(){return this.build(!1)._string},y={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"},v=function(e){return function(t,n){return void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!n),this)}};for(g in y)d[g]=v(y[g]);y={query:"?",fragment:"#"},v=function(e,t){return function(n,r){return void 0===n?this._parts[e]||"":(null!==n&&(n+="",n.charAt(0)===t&&(n=n.substring(1))),this._parts[e]=n,this.build(!r),this)}};for(g in y)d[g]=v(g,y[g]);y={search:["?","query"],hash:["#","fragment"]},v=function(e,t){return function(n,r){var i=this[e](n,r);return"string"==typeof i&&i.length?t+i:i}};for(g in y)d[g]=v(y[g][1],y[g][0]);d.pathname=function(e,t){if(void 0===e||e===!0){var n=this._parts.path||(this._parts.hostname?"/":"");return e?i.decodePath(n):n}return this._parts.path=e?i.recodePath(e):"/",this.build(!t),this},d.path=d.pathname,d.href=function(e,t){var n;if(void 0===e)return this.toString();this._string="",this._parts=i._parts();var r=e instanceof i,o="object"==typeof e&&(e.hostname||e.path||e.pathname);if(e.nodeName){var s=i.getDomAttribute(e);e=e[s]||"",o=!1}if(!r&&o&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e)this._parts=i.parse(e,this._parts);else{if(!r&&!o)throw new TypeError("invalid input");var a=r?e._parts:e;for(n in a)m.call(this._parts,n)&&(this._parts[n]=a[n])}return this.build(!t),this},d.is=function(e){var t=!1,r=!1,o=!1,s=!1,a=!1,u=!1,l=!1,c=!this._parts.urn;switch(this._parts.hostname&&(c=!1,r=i.ip4_expression.test(this._parts.hostname),o=i.ip6_expression.test(this._parts.hostname),t=r||o,s=!t,a=s&&n&&n.has(this._parts.hostname),u=s&&i.idn_expression.test(this._parts.hostname),l=s&&i.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return c;case"absolute":return!c;case"domain":case"name":return s;case"sld":return a;case"ip":return t;case"ip4":case"ipv4":case"inet4":return r;case"ip6":case"ipv6":case"inet6":return o;case"idn":return u;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":return l}return null};var b=d.protocol,x=d.port,w=d.hostname;d.protocol=function(e,t){if(void 0!==e&&e&&(e=e.replace(/:(\/\/)?$/,""),!e.match(i.protocol_expression)))throw new TypeError("Protocol '"+e+"' contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return b.call(this,e,t)},d.scheme=d.protocol,d.port=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e&&(0===e&&(e=null),e&&(e+="",":"===e.charAt(0)&&(e=e.substring(1)),e.match(/[^0-9]/))))throw new TypeError("Port '"+e+"' contains characters other than [0-9]");return x.call(this,e,t)},d.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e){var n={};i.parseHost(e,n),e=n.hostname}return w.call(this,e,t)},d.host=function(e,t){return this._parts.urn?void 0===e?"":this:void 0===e?this._parts.hostname?i.buildHost(this._parts):"":(i.parseHost(e,this._parts),this.build(!t),this)},d.authority=function(e,t){return this._parts.urn?void 0===e?"":this:void 0===e?this._parts.hostname?i.buildAuthority(this._parts):"":(i.parseAuthority(e,this._parts),this.build(!t),this)},d.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){if(!this._parts.username)return"";var n=i.buildUserinfo(this._parts);return n.substring(0,n.length-1)}return"@"!==e[e.length-1]&&(e+="@"),i.parseUserinfo(e,this._parts),this.build(!t),this},d.resource=function(e,t){var n;return void 0===e?this.path()+this.search()+this.hash():(n=i.parse(e),this._parts.path=n.path,this._parts.query=n.query,this._parts.fragment=n.fragment,this.build(!t),this)},d.subdomain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,n)||""}var r=this._parts.hostname.length-this.domain().length,s=this._parts.hostname.substring(0,r),a=new RegExp("^"+o(s));return e&&"."!==e.charAt(e.length-1)&&(e+="."),e&&i.ensureValidHostname(e),this._parts.hostname=this._parts.hostname.replace(a,e),this.build(!t),this},d.domain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.match(/\./g);if(n&&n.length<2)return this._parts.hostname;var r=this._parts.hostname.length-this.tld(t).length-1;return r=this._parts.hostname.lastIndexOf(".",r-1)+1,this._parts.hostname.substring(r)||""}if(!e)throw new TypeError("cannot set domain empty");if(i.ensureValidHostname(e),!this._parts.hostname||this.is("IP"))this._parts.hostname=e;else{var s=new RegExp(o(this.domain())+"$");this._parts.hostname=this._parts.hostname.replace(s,e)}return this.build(!t),this},d.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var r=this._parts.hostname.lastIndexOf("."),i=this._parts.hostname.substring(r+1);return t!==!0&&n&&n.list[i.toLowerCase()]?n.get(this._parts.hostname)||i:i}var s;if(!e)throw new TypeError("cannot set TLD empty");if(e.match(/[^a-zA-Z0-9-]/)){if(!n||!n.is(e))throw new TypeError("TLD '"+e+"' contains characters other than [A-Z0-9]");s=new RegExp(o(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(s,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");s=new RegExp(o(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(s,e)}return this.build(!t),this},d.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||e===!0){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var n=this._parts.path.length-this.filename().length-1,r=this._parts.path.substring(0,n)||(this._parts.hostname?"/":"");return e?i.decodePath(r):r}var s=this._parts.path.length-this.filename().length,a=this._parts.path.substring(0,s),u=new RegExp("^"+o(a));return this.is("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=i.recodePath(e),this._parts.path=this._parts.path.replace(u,e),this.build(!t),this},d.filename=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||e===!0){if(!this._parts.path||"/"===this._parts.path)return"";var n=this._parts.path.lastIndexOf("/"),r=this._parts.path.substring(n+1);return e?i.decodePathSegment(r):r}var s=!1;"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\.?\//)&&(s=!0);var a=new RegExp(o(this.filename())+"$");return e=i.recodePath(e),this._parts.path=this._parts.path.replace(a,e),s?this.normalizePath(t):this.build(!t),this},d.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||e===!0){if(!this._parts.path||"/"===this._parts.path)return"";var n,r,s=this.filename(),a=s.lastIndexOf(".");return-1===a?"":(n=s.substring(a+1),r=/^[a-z0-9%]+$/i.test(n)?n:"",e?i.decodePathSegment(r):r)}"."===e.charAt(0)&&(e=e.substring(1));var u,l=this.suffix();if(l)u=new RegExp(e?o(l)+"$":o("."+l)+"$");else{if(!e)return this;this._parts.path+="."+i.recodePath(e)}return u&&(e=i.recodePath(e),this._parts.path=this._parts.path.replace(u,e)),this.build(!t),this},d.segment=function(e,t,n){var r=this._parts.urn?":":"/",i=this.path(),o="/"===i.substring(0,1),s=i.split(r);if(void 0!==e&&"number"!=typeof e&&(n=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)throw new Error("Bad segment '"+e+"', must be 0-based integer");if(o&&s.shift(),0>e&&(e=Math.max(s.length+e,0)),void 0===t)return void 0===e?s:s[e];if(null===e||void 0===s[e])if(a(t)){s=[];for(var u=0,l=t.length;l>u;u++)(t[u].length||s.length&&s[s.length-1].length)&&(s.length&&!s[s.length-1].length&&s.pop(),s.push(t[u]))}else(t||"string"==typeof t)&&(""===s[s.length-1]?s[s.length-1]=t:s.push(t));else t||"string"==typeof t&&t.length?s[e]=t:s.splice(e,1);return o&&s.unshift(""),this.path(s.join(r),n)},d.segmentCoded=function(e,t,n){var r,o,s;if("number"!=typeof e&&(n=t,t=e,e=void 0),void 0===t){if(r=this.segment(e,t,n),a(r))for(o=0,s=r.length;s>o;o++)r[o]=i.decode(r[o]);else r=void 0!==r?i.decode(r):void 0;return r}if(a(t))for(o=0,s=t.length;s>o;o++)t[o]=i.decode(t[o]);else t="string"==typeof t?i.encode(t):t;return this.segment(e,t,n)};var S=d.query;return d.query=function(e,t){if(e===!0)return i.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"==typeof e){var n=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace),r=e.call(this,n);return this._parts.query=i.buildQuery(r||n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=i.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):S.call(this,e,t)},d.setQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("object"==typeof e)for(var o in e)m.call(e,o)&&(r[o]=e[o]);else{if("string"!=typeof e)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");r[e]=void 0!==t?t:null}return this._parts.query=i.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},d.addQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return i.addQuery(r,e,void 0===t?null:t),this._parts.query=i.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},d.removeQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return i.removeQuery(r,e,t),this._parts.query=i.buildQuery(r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},d.hasQuery=function(e,t,n){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return i.hasQuery(r,e,t,n)},d.setSearch=d.setQuery,d.addSearch=d.addQuery,d.removeSearch=d.removeQuery,d.hasSearch=d.hasQuery,d.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},d.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},d.normalizeHostname=function(n){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!n)),this},d.normalizePort=function(e){return"string"==typeof this._parts.protocol&&this._parts.port===i.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},d.normalizePath=function(e){if(this._parts.urn)return this;if(!this._parts.path||"/"===this._parts.path)return this;var t,n,r,o=this._parts.path,s="";for("/"!==o.charAt(0)&&(t=!0,o="/"+o),o=o.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),t&&(s=o.substring(1).match(/^(\.\.\/)+/)||"",s&&(s=s[0]));;){if(n=o.indexOf("/.."),-1===n)break;0!==n?(r=o.substring(0,n).lastIndexOf("/"),-1===r&&(r=n),o=o.substring(0,r)+o.substring(n+3)):o=o.substring(3)}return t&&this.is("relative")&&(o=s+o.substring(1)),o=i.recodePath(o),this._parts.path=o,this.build(!e),this},d.normalizePathname=d.normalizePath,d.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!e)),this},d.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},d.normalizeSearch=d.normalizeQuery,d.normalizeHash=d.normalizeFragment,d.iso8859=function(){var e=i.encode,t=i.decode;return i.encode=escape,i.decode=decodeURIComponent,this.normalize(),i.encode=e,i.decode=t,this},d.unicode=function(){var e=i.encode,t=i.decode;return i.encode=h,i.decode=unescape,this.normalize(),i.encode=e,i.decode=t,this},d.readable=function(){var t=this.clone();t.username("").password("").normalize();var n="";if(t._parts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(n+=e.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t._parts.port)):n+=t.host()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(n+="/"),n+=t.path(!0),t._parts.query){for(var r="",o=0,s=t._parts.query.split("&"),a=s.length;a>o;o++){var u=(s[o]||"").split("=");r+="&"+i.decodeQuery(u[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==u[1]&&(r+="="+i.decodeQuery(u[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}n+="?"+r.substring(1)}return n+=i.decodeQuery(t.hash(),!0)},d.absoluteTo=function(e){var t,n,r,o=this.clone(),s=["protocol","username","password","hostname","port"];if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(e instanceof i||(e=new i(e)),o._parts.protocol||(o._parts.protocol=e._parts.protocol),this._parts.hostname)return o;for(n=0;r=s[n];n++)o._parts[r]=e._parts[r];return o._parts.path?".."===o._parts.path.substring(-2)&&(o._parts.path+="/"):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=e._parts.query)),"/"!==o.path().charAt(0)&&(t=e.directory(),o._parts.path=(t?t+"/":"")+o._parts.path,o.normalizePath()),o.build(),o},d.relativeTo=function(e){var t,n,r,o,s,a=this.clone().normalize();if(a._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(e=new i(e).normalize(),t=a._parts,n=e._parts,o=a.path(),s=e.path(),"/"!==o.charAt(0))throw new Error("URI is already relative");if("/"!==s.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI");if(t.protocol===n.protocol&&(t.protocol=null),t.username!==n.username||t.password!==n.password)return a.build();if(null!==t.protocol||null!==t.username||null!==t.password)return a.build();if(t.hostname!==n.hostname||t.port!==n.port)return a.build();if(t.hostname=null,t.port=null,o===s)return t.path="",a.build();if(r=i.commonPath(a.path(),e.path()),!r)return a.build();var u=n.path.substring(r.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");return t.path=u+t.path.substring(r.length),a.build()},d.equals=function(e){var t,n,r,o=this.clone(),s=new i(e),u={},l={},p={};if(o.normalize(),s.normalize(),o.toString()===s.toString())return!0;if(t=o.query(),n=s.query(),o.query(""),s.query(""),o.toString()!==s.toString())return!1;if(t.length!==n.length)return!1;u=i.parseQuery(t,this._parts.escapeQuerySpace),l=i.parseQuery(n,this._parts.escapeQuerySpace);for(r in u)if(m.call(u,r)){if(a(u[r])){if(!c(u[r],l[r]))return!1}else if(u[r]!==l[r])return!1;p[r]=!0}for(r in l)if(m.call(l,r)&&!p[r])return!1;return!0},d.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},d.escapeQuerySpace=function(e){return this._parts.escapeQuerySpace=!!e,this},i});/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.4.5
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
var lunr=function(e){var t=new lunr.Index;return t.pipeline.add(lunr.stopWordFilter,lunr.stemmer),e&&e.call(t,t),t};lunr.version="0.4.5","undefined"!=typeof module&&(module.exports=lunr),lunr.utils={},lunr.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),lunr.utils.zeroFillArray=function(){var e=[0];return function(t){for(;t>e.length;)e=e.concat(e);return e.slice(0,t)}}(),lunr.EventEmitter=function(){this.events={}},lunr.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");n.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},lunr.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);this.events[e].splice(n,1),this.events[e].length||delete this.events[e]}},lunr.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach(function(e){e.apply(void 0,t)})}},lunr.EventEmitter.prototype.hasHandler=function(e){return e in this.events},lunr.tokenizer=function(e){if(!arguments.length||null==e||void 0==e)return[];if(Array.isArray(e))return e.map(function(e){return e.toLowerCase()});for(var t=(""+e).replace(/^\s+/,""),n=t.length-1;n>=0;n--)if(/\S/.test(t.charAt(n))){t=t.substring(0,n+1);break}return t.split(/\s+/).map(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"").toLowerCase()})},lunr.Pipeline=function(){this._stack=[]},lunr.Pipeline.registeredFunctions={},lunr.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&lunr.utils.warn("Overwriting existing registered function: "+t),e.label=t,lunr.Pipeline.registeredFunctions[e.label]=e},lunr.Pipeline.warnIfFunctionNotRegistered=function(e){var t=e.label&&e.label in this.registeredFunctions;t||lunr.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},lunr.Pipeline.load=function(e){var t=new lunr.Pipeline;return e.forEach(function(e){var n=lunr.Pipeline.registeredFunctions[e];if(!n)throw Error("Cannot load un-registered function: "+e);t.add(n)}),t},lunr.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){lunr.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},lunr.Pipeline.prototype.after=function(e,t){lunr.Pipeline.warnIfFunctionNotRegistered(t);var n=this._stack.indexOf(e)+1;this._stack.splice(n,0,t)},lunr.Pipeline.prototype.before=function(e,t){lunr.Pipeline.warnIfFunctionNotRegistered(t);var n=this._stack.indexOf(e);this._stack.splice(n,0,t)},lunr.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);this._stack.splice(t,1)},lunr.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,r=this._stack.length,i=0;n>i;i++){for(var o=e[i],s=0;r>s&&(o=this._stack[s](o,i,e),void 0!==o);s++);void 0!==o&&t.push(o)}return t},lunr.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return lunr.Pipeline.warnIfFunctionNotRegistered(e),e.label})},lunr.Vector=function(e){this.elements=e},lunr.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e,t=0,n=this.elements,r=n.length,i=0;r>i;i++)e=n[i],t+=e*e;return this._magnitude=Math.sqrt(t)},lunr.Vector.prototype.dot=function(e){for(var t=this.elements,n=e.elements,r=t.length,i=0,o=0;r>o;o++)i+=t[o]*n[o];return i},lunr.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},lunr.Vector.prototype.toArray=function(){return this.elements},lunr.SortedSet=function(){this.length=0,this.elements=[]},lunr.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},lunr.SortedSet.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){~this.indexOf(e)||this.elements.splice(this.locationFor(e),0,e)},this),this.length=this.elements.length},lunr.SortedSet.prototype.toArray=function(){return this.elements.slice()},lunr.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},lunr.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},lunr.SortedSet.prototype.indexOf=function(e,t,n){var t=t||0,n=n||this.elements.length,r=n-t,i=t+Math.floor(r/2),o=this.elements[i];return 1>=r?o===e?i:-1:e>o?this.indexOf(e,i,n):o>e?this.indexOf(e,t,i):o===e?i:void 0},lunr.SortedSet.prototype.locationFor=function(e,t,n){var t=t||0,n=n||this.elements.length,r=n-t,i=t+Math.floor(r/2),o=this.elements[i];if(1>=r){if(o>e)return i;if(e>o)return i+1}return e>o?this.locationFor(e,i,n):o>e?this.locationFor(e,t,i):void 0},lunr.SortedSet.prototype.intersect=function(e){for(var t=new lunr.SortedSet,n=0,r=0,i=this.length,o=e.length,s=this.elements,a=e.elements;!(n>i-1||r>o-1);)s[n]!==a[r]?s[n]<a[r]?n++:s[n]>a[r]&&r++:(t.add(s[n]),n++,r++);return t},lunr.SortedSet.prototype.clone=function(){var e=new lunr.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},lunr.SortedSet.prototype.union=function(e){var t,n,r;return this.length>=e.length?(t=this,n=e):(t=e,n=this),r=t.clone(),r.add.apply(r,n.toArray()),r},lunr.SortedSet.prototype.toJSON=function(){return this.toArray()},lunr.Index=function(){this._fields=[],this._ref="id",this.pipeline=new lunr.Pipeline,this.documentStore=new lunr.Store,this.tokenStore=new lunr.TokenStore,this.corpusTokens=new lunr.SortedSet,this.eventEmitter=new lunr.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},lunr.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},lunr.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},lunr.Index.load=function(e){e.version!==lunr.version&&lunr.utils.warn("version mismatch: current "+lunr.version+" importing "+e.version);var t=new this;return t._fields=e.fields,t._ref=e.ref,t.documentStore=lunr.Store.load(e.documentStore),t.tokenStore=lunr.TokenStore.load(e.tokenStore),t.corpusTokens=lunr.SortedSet.load(e.corpusTokens),t.pipeline=lunr.Pipeline.load(e.pipeline),t},lunr.Index.prototype.field=function(e,t){var t=t||{},n={name:e,boost:t.boost||1};return this._fields.push(n),this},lunr.Index.prototype.ref=function(e){return this._ref=e,this},lunr.Index.prototype.add=function(e,t){var n={},r=new lunr.SortedSet,i=e[this._ref],t=void 0===t?!0:t;this._fields.forEach(function(t){var i=this.pipeline.run(lunr.tokenizer(e[t.name]));n[t.name]=i,lunr.SortedSet.prototype.add.apply(r,i)},this),this.documentStore.set(i,r),lunr.SortedSet.prototype.add.apply(this.corpusTokens,r.toArray());for(var o=0;r.length>o;o++){var s=r.elements[o],a=this._fields.reduce(function(e,t){var r=n[t.name].length;if(!r)return e;var i=n[t.name].filter(function(e){return e===s}).length;return e+i/r*t.boost},0);this.tokenStore.add(s,{ref:i,tf:a})}t&&this.eventEmitter.emit("add",e,this)},lunr.Index.prototype.remove=function(e,t){var n=e[this._ref],t=void 0===t?!0:t;if(this.documentStore.has(n)){var r=this.documentStore.get(n);this.documentStore.remove(n),r.forEach(function(e){this.tokenStore.remove(e,n)},this),t&&this.eventEmitter.emit("remove",e,this)}},lunr.Index.prototype.update=function(e,t){var t=void 0===t?!0:t;this.remove(e,!1),this.add(e,!1),t&&this.eventEmitter.emit("update",e,this)},lunr.Index.prototype.idf=function(e){var t="@"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,t))return this._idfCache[t];var n=this.tokenStore.count(e),r=1;return n>0&&(r=1+Math.log(this.tokenStore.length/n)),this._idfCache[t]=r},lunr.Index.prototype.search=function(e){var t=this.pipeline.run(lunr.tokenizer(e)),n=lunr.utils.zeroFillArray(this.corpusTokens.length),r=[],i=this._fields.reduce(function(e,t){return e+t.boost},0),o=t.some(function(e){return this.tokenStore.has(e)},this);if(!o)return[];t.forEach(function(e,t,o){var s=1/o.length*this._fields.length*i,a=this,u=this.tokenStore.expand(e).reduce(function(t,r){var i=a.corpusTokens.indexOf(r),o=a.idf(r),u=1,l=new lunr.SortedSet;if(r!==e){var c=Math.max(3,r.length-e.length);u=1/Math.log(c)}return i>-1&&(n[i]=s*o*u),Object.keys(a.tokenStore.get(r)).forEach(function(e){l.add(e)}),t.union(l)},new lunr.SortedSet);r.push(u)},this);var s=r.reduce(function(e,t){return e.intersect(t)}),a=new lunr.Vector(n);return s.map(function(e){return{ref:e,score:a.similarity(this.documentVector(e))}},this).sort(function(e,t){return t.score-e.score})},lunr.Index.prototype.documentVector=function(e){for(var t=this.documentStore.get(e),n=t.length,r=lunr.utils.zeroFillArray(this.corpusTokens.length),i=0;n>i;i++){var o=t.elements[i],s=this.tokenStore.get(o)[e].tf,a=this.idf(o);r[this.corpusTokens.indexOf(o)]=s*a}return new lunr.Vector(r)},lunr.Index.prototype.toJSON=function(){return{version:lunr.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},lunr.Store=function(){this.store={},this.length=0},lunr.Store.load=function(e){var t=new this;return t.length=e.length,t.store=Object.keys(e.store).reduce(function(t,n){return t[n]=lunr.SortedSet.load(e.store[n]),t},{}),t},lunr.Store.prototype.set=function(e,t){this.store[e]=t,this.length=Object.keys(this.store).length},lunr.Store.prototype.get=function(e){return this.store[e]},lunr.Store.prototype.has=function(e){return e in this.store},lunr.Store.prototype.remove=function(e){this.has(e)&&(delete this.store[e],this.length--)},lunr.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},lunr.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",r="[aeiouy]",i=n+"[^aeiouy]*",o=r+"[aeiou]*",s="^("+i+")?"+o+i,a="^("+i+")?"+o+i+"("+o+")?$",u="^("+i+")?"+o+i+o+i,l="^("+i+")?"+r;return function(n){var o,c,p,h,f,d,m;if(3>n.length)return n;if(p=n.substr(0,1),"y"==p&&(n=p.toUpperCase()+n.substr(1)),h=/^(.+?)(ss|i)es$/,f=/^(.+?)([^s])s$/,h.test(n)?n=n.replace(h,"$1$2"):f.test(n)&&(n=n.replace(f,"$1$2")),h=/^(.+?)eed$/,f=/^(.+?)(ed|ing)$/,h.test(n)){var g=h.exec(n);h=RegExp(s),h.test(g[1])&&(h=/.$/,n=n.replace(h,""))}else if(f.test(n)){var g=f.exec(n);o=g[1],f=RegExp(l),f.test(o)&&(n=o,f=/(at|bl|iz)$/,d=RegExp("([^aeiouylsz])\\1$"),m=RegExp("^"+i+r+"[^aeiouwxy]$"),f.test(n)?n+="e":d.test(n)?(h=/.$/,n=n.replace(h,"")):m.test(n)&&(n+="e"))}if(h=/^(.+?)y$/,h.test(n)){var g=h.exec(n);o=g[1],h=RegExp(l),h.test(o)&&(n=o+"i")}if(h=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,h.test(n)){var g=h.exec(n);o=g[1],c=g[2],h=RegExp(s),h.test(o)&&(n=o+e[c])}if(h=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,h.test(n)){var g=h.exec(n);o=g[1],c=g[2],h=RegExp(s),h.test(o)&&(n=o+t[c])}if(h=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,f=/^(.+?)(s|t)(ion)$/,h.test(n)){var g=h.exec(n);o=g[1],h=RegExp(u),h.test(o)&&(n=o)}else if(f.test(n)){var g=f.exec(n);o=g[1]+g[2],f=RegExp(u),f.test(o)&&(n=o)}if(h=/^(.+?)e$/,h.test(n)){var g=h.exec(n);o=g[1],h=RegExp(u),f=RegExp(a),d=RegExp("^"+i+r+"[^aeiouwxy]$"),(h.test(o)||f.test(o)&&!d.test(o))&&(n=o)}return h=/ll$/,f=RegExp(u),h.test(n)&&f.test(n)&&(h=/.$/,n=n.replace(h,"")),"y"==p&&(n=p.toLowerCase()+n.substr(1)),n}}(),lunr.Pipeline.registerFunction(lunr.stemmer,"stemmer"),lunr.stopWordFilter=function(e){return-1===lunr.stopWordFilter.stopWords.indexOf(e)?e:void 0},lunr.stopWordFilter.stopWords=new lunr.SortedSet,lunr.stopWordFilter.stopWords.length=119,lunr.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],lunr.Pipeline.registerFunction(lunr.stopWordFilter,"stopWordFilter"),lunr.TokenStore=function(){this.root={docs:{}},this.length=0},lunr.TokenStore.load=function(e){var t=new this;return t.root=e.root,t.length=e.length,t},lunr.TokenStore.prototype.add=function(e,t,n){var n=n||this.root,r=e[0],i=e.slice(1);return r in n||(n[r]={docs:{}}),0===i.length?(n[r].docs[t.ref]=t,void(this.length+=1)):this.add(i,t,n[r])},lunr.TokenStore.prototype.has=function(e){if(!e)return!1;for(var t=this.root,n=0;e.length>n;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},lunr.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var t=this.root,n=0;e.length>n;n++){if(!t[e[n]])return{};t=t[e[n]]}return t},lunr.TokenStore.prototype.get=function(e,t){return this.getNode(e,t).docs||{}},lunr.TokenStore.prototype.count=function(e,t){return Object.keys(this.get(e,t)).length},lunr.TokenStore.prototype.remove=function(e,t){if(e){for(var n=this.root,r=0;e.length>r;r++){if(!(e[r]in n))return;n=n[e[r]]}delete n.docs[t]}},lunr.TokenStore.prototype.expand=function(e,t){var n=this.getNode(e),r=n.docs||{},t=t||[];return Object.keys(r).length&&t.push(e),Object.keys(n).forEach(function(n){"docs"!==n&&t.concat(this.expand(e+n,t))},this),t},lunr.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(e){var t=function(e){var t,n=Array.prototype.slice;return function(){var r=n.call(arguments),i=this;clearTimeout(t),t=setTimeout(function(){e.apply(i,r)},100)}},n=function(e){var t=e.match(/(\d+)/g);return new Date(t[0],t[1]-1,t[2])},r=function(){function r(t,n){this.$elem=t,this.$results=e(n.results),this.$entries=e(n.entries,this.$results),this.indexDataUrl=n.indexUrl,this.template=this.compileTemplate(e(n.template)),this.emptyMsg=n.emptyMsg,this.initialize()}return r.prototype.initialize=function(){var t=this;this.loadIndexData(function(n){t.entries=e.map(n.docs,t.createEntry),t.index=lunr.Index.load(n.index),t.populateSearchFromQuery(),t.bindKeypress()})},r.prototype.compileTemplate=function(e){var t=e.text();return Mustache.parse(t),function(e,n){return Mustache.render(t,e,n)}},r.prototype.loadIndexData=function(t){e.getJSON(this.indexDataUrl,t)},r.prototype.createEntry=function(t,r){var i=e.extend({id:r+1},t);return t.date&&e.extend(i,{date:n(t.date),pubdate:function(){return dateFormat(n(t.date),"yyyy-mm-dd")},displaydate:function(){return dateFormat(n(t.date),"mmm dd, yyyy")}}),i},r.prototype.bindKeypress=function(){var e=this,n=this.$elem.val();this.$elem.bind("keyup",t(function(){var t=e.$elem.val();t!==n&&e.search(t),n=t}))},r.prototype.search=function(t){var n=this.entries;if(t.length<3)this.$results.hide(),this.$entries.empty();else{var r=e.map(this.index.search(t),function(t){return e.grep(n,function(e){return e.id===parseInt(t.ref,10)})[0]});this.displayResults(r)}},r.prototype.displayResults=function(e){var t=this.$entries,n=this.$results;t.empty(),t.append(0===e.length?"<p>"+this.emptyMsg+"</p>":this.template({entries:e})),n.show()},r.prototype.populateSearchFromQuery=function(){var e=new URI(window.location.search.toString()),t=e.search(!0);t.hasOwnProperty("q")&&(this.$elem.val(t.q),this.search(t.q.toString()))},r}();e.fn.lunrSearch=function(t){return t=e.extend({},e.fn.lunrSearch.defaults,t),new r(this,t),this},e.fn.lunrSearch.defaults={indexUrl:"/js/index.json",results:"#search-results",entries:".entries",template:"#search-results-template",emptyMsg:"Sorry, no help articles could be found."}}(jQuery);
//# sourceMappingURL=search.js.map
var $help = $('[data-object="help.contact_us"]');

$help.on('change', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="help.contact_us"]'),
    behavior = $el.attr('data-behavior'),
    selected_id = $el.val(),
    $target = $object.find('#' + $el.attr('aria-controls'));

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    $el.trigger(action, { el: $el, object: $object, selected_id: selected_id, target: $target });
  });
});

$help.on('help.open', function(event, opts) {
  var $send_button = $('#btn-send'),
    $all_topics = opts.target.find('.usajobs-help-topic'),
    $target_topics = opts.target.find('.' + opts.selected_id);

  event.preventDefault();

  if (opts.selected_id !== '0') {
    $send_button.removeAttr('disabled');
    opts.target.attr('aria-hidden', 'false');
    $all_topics.attr('aria-hidden', 'true');
    $target_topics.attr('aria-hidden', 'false');
  } else {
    $send_button.attr('disabled', 'disabled');
    opts.target.attr('aria-hidden', 'true');
    $all_topics.attr('aria-hidden', 'true');
  }

  // Show optional fields for login/password
  if (opts.selected_id === 'sign-in-password') {
    opts.object.find('#contactOptionalData').attr('aria-hidden', 'false');
  } else {
    opts.object.find('#contactOptionalData').attr('aria-hidden', 'true');
  }
});

var $help_accordion = $('[data-object="help-accordion"]'),
  hideContentByDefault = function () {
    var $drawers = $help_accordion.find('[data-behavior="help-accordion.toggle"]'),
      drawer_state;

    $.each($drawers, function (idx, drawer) {
      drawer_state = $(drawer).attr('aria-expanded');

      if (drawer_state === 'false') {
        $help_accordion.find('#' + $(drawer).attr('aria-controls')).attr('aria-hidden', 'true');
      }
    });
  };

// Hide drawer contents that should be hidden by default
hideContentByDefault();

$help_accordion.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="help-accordion"]'),
    behavior = $el.attr('data-behavior'),
    $target = $object.find('#' + $el.attr('aria-controls')),
    state = $target.attr('aria-hidden');

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^help/)) {
      $el.trigger(action, { el: $el, object: $object, target: $target, state: state });
    }
  });
});

$help_accordion.on('help-accordion.toggle', function(event, opts) {
  event.preventDefault();

  if (opts.state === 'true') {
    opts.target.slideDown(function () {
      // Clean up and remove any style elements from other drawers
      opts.object.find('.usa-accordion-content[aria-hidden=true]').slideUp();

      $('html, body').animate({
        scrollTop: opts.object.offset().top
      });
    });
  } else {
    opts.target.slideUp(function () {
      $('html, body').animate({
        scrollTop: opts.object.offset().top
      });
    });
  }
});

var $article = $('[data-object="help-article"]'),
  fireEvent = function (action, label) {
    if (window.ga && ga.create) {
      var trackerName = ga.getAll()[0].get('name');
      ga(trackerName + '.send', 'event', 'helpcenter', action, label);
    }
  },
  hideContentByDefault = function () {
    var $drawers = $article.find('[data-behavior="help-article.contact-event"]'),
      drawer_state;

    $.each($drawers, function (idx, drawer) {
      drawer_state = $(drawer).attr('aria-expanded');

      if (drawer_state === 'false') {
        $article.find('#' + $(drawer).attr('aria-controls')).hide();
      }
    });
  };

// Hide drawer contents that should be hidden by default
hideContentByDefault();

$article.on('click', '[data-behavior]', function (event) {
  var $el = $(this),
    $object = $el.closest('[data-object="help-article"]'),
    behavior = $el.attr('data-behavior'),
    selected_id = $el.val(),
    $target = $('body').find('#' + $el.attr('aria-controls'));

  event.preventDefault();
  $el.blur(); // Removes focus

  // Each behavior attached to the element should be triggered
  $.each(behavior.split(' '), function (idx, action) {
    if (action.match(/^help-article/)) {
      $el.trigger(action, { el: $el, object: $object, selected_id: selected_id, target: $target });
    }
  });
});

$article.on('help-article.contact', function(event, opts) {
  opts.target.siblings('button').trigger('click');
  fireEvent('select', 'USAJOBS_' + window.location.pathname);
});

$article.on('help-article.contact-event', function(event, opts) {
  if (opts.el.attr('aria-expanded') === 'false') {
    opts.target.slideUp(function () {
      $('html, body').animate({
        scrollTop: opts.object.offset().top
      });
    });

    fireEvent('close', 'USAJOBS_' + window.location.pathname);
  } else {
    opts.target.slideDown(function () {
      $('html, body').animate({
        scrollTop: opts.target.offset().top
      });
    });

    fireEvent('open', 'USAJOBS_' + window.location.pathname);
  }
});

// Search autocomplete locations
function TermsHighlighter(s, t) {
  var splitString = t.split(" ");
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] !== "") {
      var matcher = new RegExp("(" + $.ui.autocomplete.escapeRegex(splitString[i]) + ")", "ig");
      s = s.replace(matcher, "<strong>$1</strong>");
    }
  }
  return s;
}

var HelpURLHelper = { DataConfig: "https://data.usajobs.gov" };
//{{ReplaceURLHelper}}

// Search autocomplete
var $location = $('#uhp-location'),
  $keyword = $('#uhp-keyword'),
  $search_form = $('#uhp-search'),
  handleLocationReturn = function () {
    $location.keypress(function (event) {
      if (event.which == 13) {
        closeLocationAutocomplete();
        $search_form.submit();
      }
    });
  },
  closeLocationAutocomplete = function () {
    $location.catcomplete('close');
    $location.blur(); // unfocus the input so the keyboard will close
  };

handleLocationReturn();

$.widget("custom.catcomplete", $.ui.autocomplete, {
  _create: function() {
    this._super();
    this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
  },
  _renderMenu: function(ul, items) {
    var that = this,
      currentCategory = "";

    ul.addClass("usajobs-search-location-autocomplete");

    $.each(items, function(index, item) {
      var li;

      item.value = item.Name;
      item.label = item.Name;
      item.category = item.Type;

      if (item.category != currentCategory) {
        ul.append('<li class="ui-autocomplete-category ' + item.category + '">' + item.category + '</li>');
        currentCategory = item.category;
      }
      li = that._renderItemData( ul, item );
      if (item.category) {
        li.attr("aria-label", item.category + " : " + item.label);
      }
    });
  },
  _renderItem: function (ul, item) {
     return $("<li>")
     .addClass(item.type)
     .attr("data-value", item.value)
     .append($("<a>").html(item.label))
     .appendTo(ul);
  }
});

$.widget("custom.keywordcomplete", $.ui.autocomplete, {
    _create: function () {
        this._super();
        this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function (ul, items) {
        ul.addClass("usajobs-search-keyword-autocomplete");
        var that = this,
            currentCategory = "",
            header = '<li class="ui-autocomplete-close-header">Close &nbsp;&nbsp;&times;</li>',
            $header = $(header);

        $.each(items, function (index, item) {
            var li;
            if (item.type != currentCategory) {
                ul.append('<li class="ui-autocomplete-category ' + item.type + ' ">' + item.type + '</li>');
                currentCategory = item.type;
            }
            li = that._renderItemData(ul, item);
            if (item.Type) {
                li.attr("aria-label", item.type + " : " + item.value);
            }
        });
    },
    _renderItem: function (ul, item) {
        return $("<li>")
        .addClass(item.type)
        .attr("data-value", item.value)
        .append($("<a>").html(item.label))
        .appendTo(ul);
    }
});

var url = 'https://ac.usajobs.gov/locationAC',
  autocompleteRequest = function (request, response) {
    $.ajax({
      url: url,
      dataType: 'jsonp',
      crossdomain: true,
      cache: true,
      jsonpCallback: 'usaj151067976',
      data: { t: request.term },
      success: function (data) {
        response(data);
      }
    });
  };

var keywordautocompleterequest = function (request, response) {
  $.ajax({
    url: HelpURLHelper.DataConfig + "/api/Autocomplete/Keyword",
    dataType: "json",
    crossdomain: true,
    cache: true,
    data: { term: request.term },
    success: function (data) {
      var results = [];

      for (var key in data) {
        for (var i = 0; i < data[key].length; i++) {
          var label = data[key][i].Name,
            code = data[key][i].Code;

          if (key == "series") {
            label = code + " - " + data[key][i].Name;
          } else if (key == "occupations") {
            code = data[key][i].Name;
          }

          if (data[key][i].hasOwnProperty('Acronym')) {
            label = label + " (" + data[key][i].Acronym.toUpperCase() + ")";
          }

          var autocompleteItem = {
                        value: label,
                        label: splitTermHighlighter(label, request.term),
                        type: key,
                        actualValue: code
          };
          results.push(autocompleteItem);
        }
      }
      response(results);
    },
    global: false
  });
};

$location.catcomplete({
  appendTo: "#search-inner-autocomplete-container",
  source: autocompleteRequest,
  minLength: 2,
  open: function () {
    var data = $(this).data('custom-catcomplete');

    $("ul.ui-menu").width($(this).innerWidth());

    $location.off('menufocus hover mouseover mouseenter');

    data
      .menu
      .element
      .find('li a')
      .each(function () {
        var $me = $(this),
          keywords = data.term.split(' ').join('|');

        $me.addClass("ui-corner-all");
        $me.html($me.text().replace(new RegExp('(' + keywords + ')', 'gi'), '<strong>$1</strong>'));
      });
  },
  select: function (event, ui) {
    var selected = ui.item,
      field_name,
      pill_name,
      $hidden_cities = $('<input type="hidden" name="locations[]"></input>'),
      $hidden_states = $('<input type="hidden" name="states[]"></input>'),
      $hidden_countries = $('<input type="hidden" name="countries[]"></input>'),
      value = selected.label.split(' (')[0]; // Removes the acronym

    if (selected.Type === 'Cities') {
      field_name = 'locations';
      pill_name = field_name + '-' + Date.now(); // This is a hacky way to get a unique ID

      // Add hidden field so entry sticks around
      $hidden_cities
        .attr('id', pill_name)
        .attr('value', value);

      $hidden_cities.appendTo($search_form);
    } else if (selected.Type === 'States') {
      field_name = 'states';
      pill_name = field_name + '-' + Date.now(); // This is a hacky way to get a unique ID

      // Add hidden field so entry sticks around
      $hidden_states
        .attr('id', pill_name)
        .attr('value', value);

      $hidden_states.appendTo($search_form);
    } else if (selected.Type === 'Countries') {
      field_name = 'countries';
      pill_name = field_name + '-' + Date.now(); // This is a hacky way to get a unique ID

      // Add hidden field so entry sticks around
      $hidden_countries
        .attr('id', pill_name)
        .attr('value', value);

      $hidden_countries.appendTo($search_form);
    }

    logLocationAC(value);
    $location.val(value);
    closeLocationAutocomplete();
    // $search_form.submit();

    return false;
  }
});

$keyword.keywordcomplete({
	source: keywordautocompleterequest,
	minLength: 2,
	select: function (event, ui) {
	  var selectedObj = ui.item,
		  parameter = "";

	   switch (selectedObj.type) {
                case "series":
                    parameter = "j=" + selectedObj.actualValue;
                    break;
                case "agencies":
                    parameter = "a=" + selectedObj.actualValue;
                    break;
                case "departments":
                    parameter = "d=" + selectedObj.actualValue;
                    break;
                case "occupations":
                    parameter = "soc=" + selectedObj.actualValue;
                    break;
                case "job titles":
                    parameter = "jt=" + selectedObj.actualValue;
                    break;
            }

	  window.location.href = "/Search?" + parameter;

	  return false;
	},
	open: function () {
	  $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
	  $("ul.ui-menu").width($(this).innerWidth());
	},
	close: function () {
	   $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
	}
});

$(function () { // wait for document ready

	// init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// get all slides
	var slides = document.querySelectorAll(".usajobs-help-center-timeline-panel");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i])
			.addTo(controller);
	}
});
