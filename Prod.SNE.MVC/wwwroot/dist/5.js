(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v7.1.2 (2019-06-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(O,J){ true&&module.exports?(J["default"]=J,module.exports=O.document?J(O):J): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return J(O)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)})("undefined"!==typeof window?window:this,function(O){function J(a,E,H,B){a.hasOwnProperty(E)||(a[E]=B.apply(null,H))}var G={};J(G,"parts/Globals.js",[],function(){var a="undefined"===typeof O?"undefined"!==typeof window?window:{}:O,E=a.document,
H=a.navigator&&a.navigator.userAgent||"",B=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,h=/(edge|msie|trident)/i.test(H)&&!a.opera,e=-1!==H.indexOf("Firefox"),q=-1!==H.indexOf("Chrome"),t=e&&4>parseInt(H.split("Firefox/")[1],10);return{product:"Highcharts",version:"7.1.2",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:t,hasTouch:E&&"undefined"!==typeof E.documentElement.ontouchstart,isMS:h,isWebKit:-1!==H.indexOf("AppleWebKit"),isFirefox:e,isChrome:q,isSafari:!q&&
-1!==H.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(H),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:B,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});J(G,"parts/Utilities.js",[G["parts/Globals.js"]],function(a){a.timers=[];var E=a.charts,H=a.doc,B=a.win;a.error=function(h,e,q){var t=a.isNumber(h)?"Highcharts error #"+h+": www.highcharts.com/errors/"+h:h,u=function(){if(e)throw Error(t);
B.console&&console.log(t)};q?a.fireEvent(q,"displayError",{code:h,message:t},u):u()};a.Fx=function(a,e,q){this.options=e;this.elem=a;this.prop=q};a.Fx.prototype={dSetter:function(){var a=this.paths[0],e=this.paths[1],q=[],t=this.now,u=a.length,v;if(1===t)q=this.toD;else if(u===e.length&&1>t)for(;u--;)v=parseFloat(a[u]),q[u]=isNaN(v)?e[u]:t*parseFloat(e[u]-v)+v;else q=e;this.elem.attr("d",q,null,!0)},update:function(){var a=this.elem,e=this.prop,q=this.now,t=this.options.step;if(this[e+"Setter"])this[e+
"Setter"]();else a.attr?a.element&&a.attr(e,q,null,!0):a.style[e]=q+this.unit;t&&t.call(a,q,this)},run:function(h,e,q){var t=this,u=t.options,v=function(a){return v.stopped?!1:t.step(a)},n=B.requestAnimationFrame||function(a){setTimeout(a,13)},g=function(){for(var d=0;d<a.timers.length;d++)a.timers[d]()||a.timers.splice(d--,1);a.timers.length&&n(g)};h!==e||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=h,this.end=e,this.unit=q,this.now=this.start,this.pos=0,v.elem=this.elem,
v.prop=this.prop,v()&&1===a.timers.push(v)&&n(g)):(delete u.curAnim[this.prop],u.complete&&0===Object.keys(u.curAnim).length&&u.complete.call(this.elem))},step:function(h){var e=+new Date,q,t=this.options,u=this.elem,v=t.complete,n=t.duration,g=t.curAnim;u.attr&&!u.element?h=!1:h||e>=n+this.startTime?(this.now=this.end,this.pos=1,this.update(),q=g[this.prop]=!0,a.objectEach(g,function(a){!0!==a&&(q=!1)}),q&&v&&v.call(u),h=!1):(this.pos=t.easing((e-this.startTime)/n),this.now=this.start+(this.end-
this.start)*this.pos,this.update(),h=!0);return h},initPath:function(h,e,q){function t(a){var b,l;for(c=a.length;c--;)b="M"===a[c]||"L"===a[c],l=/[a-zA-Z]/.test(a[c+3]),b&&l&&a.splice(c+1,0,a[c+1],a[c+2],a[c+1],a[c+2])}function u(a,d){for(;a.length<k;){a[0]=d[k-a.length];var l=a.slice(0,b);[].splice.apply(a,[0,0].concat(l));x&&(l=a.slice(a.length-b),[].splice.apply(a,[a.length,0].concat(l)),c--)}a[0]="M"}function v(a,c){for(var l=(k-a.length)/b;0<l&&l--;)p=a.slice().splice(a.length/K-b,b*K),p[0]=
c[k-b-l*b],m&&(p[b-6]=p[b-2],p[b-5]=p[b-1]),[].splice.apply(a,[a.length/K,0].concat(p)),x&&l--}e=e||"";var n,g=h.startX,d=h.endX,m=-1<e.indexOf("C"),b=m?7:3,k,p,c;e=e.split(" ");q=q.slice();var x=h.isArea,K=x?2:1,w;m&&(t(e),t(q));if(g&&d){for(c=0;c<g.length;c++)if(g[c]===d[0]){n=c;break}else if(g[0]===d[d.length-g.length+c]){n=c;w=!0;break}else if(g[g.length-1]===d[d.length-g.length+c]){n=g.length-c;break}"undefined"===typeof n&&(e=[])}e.length&&a.isNumber(n)&&(k=q.length+n*K*b,w?(u(e,q),v(q,e)):
(u(q,e),v(e,q)));return[e,q]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var h,e=arguments,q,t={},u=function(e,n){"object"!==typeof e&&(e={});a.objectEach(n,function(g,d){!a.isObject(g,!0)||a.isClass(g)||a.isDOMElement(g)?e[d]=n[d]:e[d]=u(e[d]||{},g)});return e};!0===e[0]&&(t=e[1],e=Array.prototype.slice.call(e,2));q=e.length;for(h=0;h<
q;h++)t=u(t,e[h]);return t};a.pInt=function(a,e){return parseInt(a,e||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(h,e){return!!h&&"object"===typeof h&&(!e||!a.isArray(h))};a.isDOMElement=function(h){return a.isObject(h)&&"number"===typeof h.nodeType};a.isClass=function(h){var e=h&&h.constructor;return!(!a.isObject(h,!0)||a.isDOMElement(h)||!e||!e.name||
"Object"===e.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,e){for(var h=a.length;h--;)if(a[h]===e){a.splice(h,1);break}};a.defined=function(a){return"undefined"!==typeof a&&null!==a};a.attr=function(h,e,q){var t;a.isString(e)?a.defined(q)?h.setAttribute(e,q):h&&h.getAttribute&&((t=h.getAttribute(e))||"class"!==e||(t=h.getAttribute(e+"Name"))):a.defined(e)&&a.isObject(e)&&a.objectEach(e,function(a,e){h.setAttribute(e,a)});return t};
a.splat=function(h){return a.isArray(h)?h:[h]};a.syncTimeout=function(a,e,q){if(e)return setTimeout(a,e,q);a.call(0,q)};a.clearTimeout=function(h){a.defined(h)&&clearTimeout(h)};a.extend=function(a,e){var h;a||(a={});for(h in e)a[h]=e[h];return a};a.pick=function(){var a=arguments,e,q,t=a.length;for(e=0;e<t;e++)if(q=a[e],"undefined"!==typeof q&&null!==q)return q};a.css=function(h,e){a.isMS&&!a.svg&&e&&"undefined"!==typeof e.opacity&&(e.filter="alpha(opacity\x3d"+100*e.opacity+")");a.extend(h.style,
e)};a.createElement=function(h,e,q,t,u){h=H.createElement(h);var v=a.css;e&&a.extend(h,e);u&&v(h,{padding:"0",border:"none",margin:"0"});q&&v(h,q);t&&t.appendChild(h);return h};a.extendClass=function(h,e){var q=function(){};q.prototype=new h;a.extend(q.prototype,e);return q};a.pad=function(a,e,q){return Array((e||2)+1-String(a).replace("-","").length).join(q||"0")+a};a.relativeLength=function(a,e,q){return/%$/.test(a)?e*parseFloat(a)/100+(q||0):parseFloat(a)};a.wrap=function(a,e,q){var h=a[e];a[e]=
function(){var a=Array.prototype.slice.call(arguments),e=arguments,n=this;n.proceed=function(){h.apply(n,arguments.length?arguments:e)};a.unshift(h);a=q.apply(this,a);n.proceed=null;return a}};a.datePropsToTimestamps=function(h){a.objectEach(h,function(e,q){a.isObject(e)&&"function"===typeof e.getTime?h[q]=e.getTime():(a.isObject(e)||a.isArray(e))&&a.datePropsToTimestamps(e)})};a.formatSingle=function(h,e,q){var t=/\.([0-9])/,u=a.defaultOptions.lang;/f$/.test(h)?(q=(q=h.match(t))?q[1]:-1,null!==e&&
(e=a.numberFormat(e,q,u.decimalPoint,-1<h.indexOf(",")?u.thousandsSep:""))):e=(q||a.time).dateFormat(h,e);return e};a.format=function(h,e,q){for(var t="{",u=!1,v,n,g,d,m=[],b;h;){t=h.indexOf(t);if(-1===t)break;v=h.slice(0,t);if(u){v=v.split(":");n=v.shift().split(".");d=n.length;b=e;for(g=0;g<d;g++)b&&(b=b[n[g]]);v.length&&(b=a.formatSingle(v.join(":"),b,q));m.push(b)}else m.push(v);h=h.slice(t+1);t=(u=!u)?"}":"{"}m.push(h);return m.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/
Math.LN10))};a.normalizeTickInterval=function(h,e,q,t,u){var v,n=h;q=a.pick(q,1);v=h/q;e||(e=u?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===q?e=e.filter(function(a){return 0===a%1}):.1>=q&&(e=[1/q])));for(t=0;t<e.length&&!(n=e[t],u&&n*q>=h||!u&&v<=(e[t]+(e[t+1]||e[t]))/2);t++);return n=a.correctFloat(n*q,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,e){var h=a.length,t,u;for(u=0;u<h;u++)a[u].safeI=u;a.sort(function(a,n){t=e(a,n);return 0===t?a.safeI-n.safeI:t});for(u=
0;u<h;u++)delete a[u].safeI};a.arrayMin=function(a){for(var e=a.length,h=a[0];e--;)a[e]<h&&(h=a[e]);return h};a.arrayMax=function(a){for(var e=a.length,h=a[0];e--;)a[e]>h&&(h=a[e]);return h};a.destroyObjectProperties=function(h,e){a.objectEach(h,function(a,t){a&&a!==e&&a.destroy&&a.destroy();delete h[t]})};a.discardElement=function(h){var e=a.garbageBin;e||(e=a.createElement("div"));h&&e.appendChild(h);e.innerHTML=""};a.correctFloat=function(a,e){return parseFloat(a.toPrecision(e||14))};a.setAnimation=
function(h,e){e.renderer.globalAnimation=a.pick(h,e.options.chart.animation,!0)};a.animObject=function(h){return a.isObject(h)?a.merge(h):{duration:h?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(h,e,q,t){h=+h||0;e=+e;var u=a.defaultOptions.lang,v=(h.toString().split(".")[1]||"").split("e")[0].length,n,g,d=h.toString().split("e");-1===e?e=Math.min(v,20):a.isNumber(e)?e&&d[1]&&0>d[1]&&(n=e+ +d[1],0<=n?(d[0]=
(+d[0]).toExponential(n).split("e")[0],e=n):(d[0]=d[0].split(".")[0]||0,h=20>e?(d[0]*Math.pow(10,d[1])).toFixed(e):0,d[1]=0)):e=2;g=(Math.abs(d[1]?d[0]:h)+Math.pow(10,-Math.max(e,v)-1)).toFixed(e);v=String(a.pInt(g));n=3<v.length?v.length%3:0;q=a.pick(q,u.decimalPoint);t=a.pick(t,u.thousandsSep);h=(0>h?"-":"")+(n?v.substr(0,n)+t:"");h+=v.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+t);e&&(h+=q+g.slice(-e));d[1]&&0!==+h&&(h+="e"+d[1]);return h};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*
a)-1)};a.getStyle=function(h,e,q){if("width"===e)return Math.max(0,Math.min(h.offsetWidth,h.scrollWidth,h.getBoundingClientRect&&"none"===a.getStyle(h,"transform",!1)?Math.floor(h.getBoundingClientRect().width):Infinity)-a.getStyle(h,"padding-left")-a.getStyle(h,"padding-right"));if("height"===e)return Math.max(0,Math.min(h.offsetHeight,h.scrollHeight)-a.getStyle(h,"padding-top")-a.getStyle(h,"padding-bottom"));B.getComputedStyle||a.error(27,!0);if(h=B.getComputedStyle(h,void 0))h=h.getPropertyValue(e),
a.pick(q,"opacity"!==e)&&(h=a.pInt(h));return h};a.inArray=function(a,e,q){return e.indexOf(a,q)};a.find=Array.prototype.find?function(a,e){return a.find(e)}:function(a,e){var h,t=a.length;for(h=0;h<t;h++)if(e(a[h],h))return a[h]};a.keys=Object.keys;a.offset=function(a){var e=H.documentElement;a=a.parentElement||a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(B.pageYOffset||e.scrollTop)-(e.clientTop||0),left:a.left+(B.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};a.stop=function(h,
e){for(var q=a.timers.length;q--;)a.timers[q].elem!==h||e&&e!==a.timers[q].prop||(a.timers[q].stopped=!0)};a.objectEach=function(a,e,q){for(var h in a)a.hasOwnProperty(h)&&e.call(q||a[h],a[h],h,a)};a.objectEach({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(h,e){a[e]=function(a){return Array.prototype[h].apply(a,[].slice.call(arguments,1))}});a.addEvent=function(h,e,q,t){void 0===t&&(t={});var u,v=h.addEventListener||a.addEventListenerPolyfill;u="function"===typeof h&&
h.prototype?h.prototype.protoEvents=h.prototype.protoEvents||{}:h.hcEvents=h.hcEvents||{};a.Point&&h instanceof a.Point&&h.series&&h.series.chart&&(h.series.chart.runTrackerClick=!0);v&&v.call(h,e,q,!1);u[e]||(u[e]=[]);u[e].push({fn:q,order:"number"===typeof t.order?t.order:Infinity});u[e].sort(function(a,g){return a.order-g.order});return function(){a.removeEvent(h,e,q)}};a.removeEvent=function(h,e,q){function t(n,g){var d=h.removeEventListener||a.removeEventListenerPolyfill;d&&d.call(h,n,g,!1)}
function u(n){var g,d;h.nodeName&&(e?(g={},g[e]=!0):g=n,a.objectEach(g,function(a,b){if(n[b])for(d=n[b].length;d--;)t(b,n[b][d].fn)}))}var v;["protoEvents","hcEvents"].forEach(function(a){var g=h[a];g&&(e?(v=g[e]||[],q?(g[e]=v.filter(function(a){return q!==a.fn}),t(e,q)):(u(g),g[e]=[])):(u(g),h[a]={}))})};a.fireEvent=function(h,e,q,t){var u,v;q=q||{};H.createEvent&&(h.dispatchEvent||h.fireEvent)?(u=H.createEvent("Events"),u.initEvent(e,!0,!0),a.extend(u,q),h.dispatchEvent?h.dispatchEvent(u):h.fireEvent(e,
u)):(q.target||a.extend(q,{preventDefault:function(){q.defaultPrevented=!0},target:h,type:e}),function(a,g){void 0===a&&(a=[]);void 0===g&&(g=[]);var d=0,m=0,b=a.length+g.length;for(v=0;v<b;v++)!1===(a[d]?g[m]?a[d].order<=g[m].order?a[d++]:g[m++]:a[d++]:g[m++]).fn.call(h,q)&&q.preventDefault()}(h.protoEvents&&h.protoEvents[e],h.hcEvents&&h.hcEvents[e]));t&&!q.defaultPrevented&&t.call(h,q)};a.animate=function(h,e,q){var t,u="",v,n,g;a.isObject(q)||(g=arguments,q={duration:g[2],easing:g[3],complete:g[4]});
a.isNumber(q.duration)||(q.duration=400);q.easing="function"===typeof q.easing?q.easing:Math[q.easing]||Math.easeInOutSine;q.curAnim=a.merge(e);a.objectEach(e,function(d,g){a.stop(h,g);n=new a.Fx(h,q,g);v=null;"d"===g?(n.paths=n.initPath(h,h.d,e.d),n.toD=e.d,t=0,v=1):h.attr?t=h.attr(g):(t=parseFloat(a.getStyle(h,g))||0,"opacity"!==g&&(u="px"));v||(v=d);v&&v.match&&v.match("px")&&(v=v.replace(/px/g,""));n.run(t,v,u)})};a.seriesType=function(h,e,q,t,u){var v=a.getOptions(),n=a.seriesTypes;v.plotOptions[h]=
a.merge(v.plotOptions[e],q);n[h]=a.extendClass(n[e]||function(){},t);n[h].prototype.type=h;u&&(n[h].prototype.pointClass=a.extendClass(a.Point,u));return n[h]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),e=0;return function(){return"highcharts-"+a+"-"+e++}}();a.isFunction=function(a){return"function"===typeof a};B.jQuery&&(B.jQuery.fn.highcharts=function(){var h=[].slice.call(arguments);if(this[0])return h[0]?(new (a[a.isString(h[0])?h.shift():"Chart"])(this[0],h[0],h[1]),
this):E[a.attr(this[0],"data-highcharts-chart")]})});J(G,"parts/Color.js",[G["parts/Globals.js"]],function(a){var E=a.isNumber,H=a.merge,B=a.pInt;a.Color=function(h){if(!(this instanceof a.Color))return new a.Color(h);this.init(h)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[B(a[1]),B(a[2]),B(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[B(a[1]),B(a[2]),B(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(h){var e,q,t,u;if((this.input=h=this.names[h&&h.toLowerCase?h.toLowerCase():""]||h)&&h.stops)this.stops=h.stops.map(function(e){return new a.Color(e[1])});else if(h&&h.charAt&&"#"===h.charAt()&&(e=h.length,h=parseInt(h.substr(1),16),7===e?q=[(h&16711680)>>16,(h&65280)>>8,h&255,1]:4===e&&(q=[(h&3840)>>4|(h&3840)>>8,(h&240)>>4|h&240,(h&15)<<4|h&15,1])),!q)for(t=this.parsers.length;t--&&!q;)u=
this.parsers[t],(e=u.regex.exec(h))&&(q=u.parse(e));this.rgba=q||[]},get:function(a){var e=this.input,h=this.rgba,t;this.stops?(t=H(e),t.stops=[].concat(t.stops),this.stops.forEach(function(e,h){t.stops[h]=[t.stops[h][0],e.get(a)]})):t=h&&E(h[0])?"rgb"===a||!a&&1===h[3]?"rgb("+h[0]+","+h[1]+","+h[2]+")":"a"===a?h[3]:"rgba("+h.join(",")+")":e;return t},brighten:function(a){var e,h=this.rgba;if(this.stops)this.stops.forEach(function(e){e.brighten(a)});else if(E(a)&&0!==a)for(e=0;3>e;e++)h[e]+=B(255*
a),0>h[e]&&(h[e]=0),255<h[e]&&(h[e]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,e){var h=this.rgba,t=a.rgba;t.length&&h&&h.length?(a=1!==t[3]||1!==h[3],e=(a?"rgba(":"rgb(")+Math.round(t[0]+(h[0]-t[0])*(1-e))+","+Math.round(t[1]+(h[1]-t[1])*(1-e))+","+Math.round(t[2]+(h[2]-t[2])*(1-e))+(a?","+(t[3]+(h[3]-t[3])*(1-e)):"")+")"):e=a.input||"none";return e}};a.color=function(h){return new a.Color(h)}});J(G,"parts/SvgRenderer.js",[G["parts/Globals.js"]],function(a){var E,
H,B=a.addEvent,h=a.animate,e=a.attr,q=a.charts,t=a.color,u=a.css,v=a.createElement,n=a.defined,g=a.deg2rad,d=a.destroyObjectProperties,m=a.doc,b=a.extend,k=a.erase,p=a.hasTouch,c=a.isArray,x=a.isFirefox,K=a.isMS,w=a.isObject,F=a.isString,C=a.isWebKit,l=a.merge,D=a.noop,A=a.objectEach,z=a.pick,I=a.pInt,f=a.removeEvent,r=a.splat,Q=a.stop,N=a.svg,L=a.SVG_NS,M=a.symbolSizes,R=a.win;E=a.SVGElement=function(){return this};b(E.prototype,{opacity:1,SVG_NS:L,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
init:function(y,f){this.element="span"===f?v(f):m.createElementNS(this.SVG_NS,f);this.renderer=y;a.fireEvent(this,"afterInit")},animate:function(y,f,b){var c=a.animObject(z(f,this.renderer.globalAnimation,!0));z(m.hidden,m.msHidden,m.webkitHidden,!1)&&(c.duration=0);0!==c.duration?(b&&(c.complete=b),h(this,y,c)):(this.attr(y,void 0,b),a.objectEach(y,function(a,y){c.step&&c.step.call(this,a,{prop:y,pos:1})},this));return this},complexColor:function(y,f,b){var r=this.renderer,d,p,k,g,S,L,m,x,e,D,w,
z=[],N;a.fireEvent(this.renderer,"complexColor",{args:arguments},function(){y.radialGradient?p="radialGradient":y.linearGradient&&(p="linearGradient");p&&(k=y[p],S=r.gradients,m=y.stops,D=b.radialReference,c(k)&&(y[p]=k={x1:k[0],y1:k[1],x2:k[2],y2:k[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===p&&D&&!n(k.gradientUnits)&&(g=k,k=l(k,r.getRadialAttr(D,g),{gradientUnits:"userSpaceOnUse"})),A(k,function(a,y){"id"!==y&&z.push(y,a)}),A(m,function(a){z.push(a)}),z=z.join(","),S[z]?w=S[z].attr("id"):
(k.id=w=a.uniqueKey(),S[z]=L=r.createElement(p).attr(k).add(r.defs),L.radAttr=g,L.stops=[],m.forEach(function(y){0===y[1].indexOf("rgba")?(d=a.color(y[1]),x=d.get("rgb"),e=d.get("a")):(x=y[1],e=1);y=r.createElement("stop").attr({offset:y[0],"stop-color":x,"stop-opacity":e}).add(L);L.stops.push(y)})),N="url("+r.url+"#"+w+")",b.setAttribute(f,N),b.gradient=z,y.toString=function(){return N})})},applyTextOutline:function(y){var f=this.element,b,c,r;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,
this.renderer.getContrast(f.style.fill)));y=y.split(" ");b=y[y.length-1];(c=y[0])&&"none"!==c&&a.svg&&(this.fakeTS=!0,y=[].slice.call(f.getElementsByTagName("tspan")),this.ySetter=this.xSetter,c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,f){return 2*y+f}),this.removeTextOutline(y),r=f.firstChild,y.forEach(function(a,y){0===y&&(a.setAttribute("x",f.getAttribute("x")),y=f.getAttribute("y"),a.setAttribute("y",y||0),null===y&&f.setAttribute("y",0));a=a.cloneNode(1);e(a,{"class":"highcharts-text-outline",
fill:b,stroke:b,"stroke-width":c,"stroke-linejoin":"round"});f.insertBefore(a,r)}))},removeTextOutline:function(a){for(var y=a.length,f;y--;)f=a[y],"highcharts-text-outline"===f.getAttribute("class")&&k(a,this.element.removeChild(f))},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(y,f,b,c){var r,k=this.element,l,p=this,d,g,L=this.symbolCustomAttribs;"string"===typeof y&&void 0!==f&&(r=y,y={},y[r]=f);"string"===typeof y?p=(this[y+"Getter"]||
this._defaultGetter).call(this,y,k):(A(y,function(f,b){d=!1;c||Q(this,b);this.symbolName&&-1!==a.inArray(b,L)&&(l||(this.symbolAttr(y),l=!0),d=!0);!this.rotation||"x"!==b&&"y"!==b||(this.doTransform=!0);d||(g=this[b+"Setter"]||this._defaultSetter,g.call(this,f,b,k),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(b)&&this.updateShadows(b,f,g))},this),this.afterSetters());b&&b.call(this);return p},afterSetters:function(){this.doTransform&&(this.updateTransform(),
this.doTransform=!1)},updateShadows:function(a,f,b){for(var y=this.shadows,c=y.length;c--;)b.call(y[c],"height"===a?Math.max(f-(y[c].cutHeight||0),0):"d"===a?this.d:f,a,y[c])},addClass:function(a,f){var y=this.attr("class")||"";f||(a=(a||"").split(/ /g).reduce(function(a,f){-1===y.indexOf(f)&&a.push(f);return a},y?[y]:[]).join(" "));a!==y&&this.attr("class",a);return this},hasClass:function(a){return-1!==(this.attr("class")||"").split(" ").indexOf(a)},removeClass:function(a){return this.attr("class",
(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(f){y[f]=z(a[f],y[f])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,f){var y;f=f||a.strokeWidth||0;y=Math.round(f)%2/2;a.x=Math.floor(a.x||this.x||0)+y;a.y=Math.floor(a.y||this.y||0)+y;a.width=
Math.floor((a.width||this.width||0)-2*y);a.height=Math.floor((a.height||this.height||0)-2*y);n(a.strokeWidth)&&(a.strokeWidth=f);return a},css:function(a){var y=this.styles,f={},c=this.element,r,k="",l,p=!y,d=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);y&&A(a,function(a,b){a!==y[b]&&(f[b]=a,p=!0)});p&&(y&&(a=b(y,f)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===c.nodeName.toLowerCase()&&a.width&&(r=this.textWidth=I(a.width))),this.styles=a,r&&!N&&this.renderer.forExport&&
delete a.width,c.namespaceURI===this.SVG_NS?(l=function(a,y){return"-"+y.toLowerCase()},A(a,function(a,y){-1===d.indexOf(y)&&(k+=y.replace(/([A-Z])/g,l)+":"+a+";")}),k&&e(c,"style",k)):u(c,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},getStyle:function(a){return R.getComputedStyle(this.element||this,"").getPropertyValue(a)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||
0;var a=this.getStyle("stroke-width"),f;a.indexOf("px")===a.length-2?a=I(a):(f=m.createElementNS(L,"rect"),e(f,{width:a,"stroke-width":0}),this.element.parentNode.appendChild(f),a=f.getBBox().width,f.parentNode.removeChild(f));return a},on:function(a,f){var y=this,b=y.element;p&&"click"===a?(b.ontouchstart=function(a){y.touchEventFired=Date.now();a.preventDefault();f.call(b,a)},b.onclick=function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&f.call(b,
a)}):b["on"+a]=f;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,y.radAttr));return this},translate:function(a,f){return this.attr({translateX:a,translateY:f})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,f=this.translateY||0,b=this.scaleX,c=this.scaleY,r=this.inverted,k=this.rotation,l=
this.matrix,p=this.element;r&&(a+=this.width,f+=this.height);a=["translate("+a+","+f+")"];n(l)&&a.push("matrix("+l.join(",")+")");r?a.push("rotate(90) scale(-1,1)"):k&&a.push("rotate("+k+" "+z(this.rotationOriginX,p.getAttribute("x"),0)+" "+z(this.rotationOriginY,p.getAttribute("y")||0)+")");(n(b)||n(c))&&a.push("scale("+z(b,1)+" "+z(c,1)+")");a.length&&p.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,f,b){var y,
c,r,p,l={};c=this.renderer;r=c.alignedObjects;var d,g;if(a){if(this.alignOptions=a,this.alignByTranslate=f,!b||F(b))this.alignTo=y=b||"renderer",k(r,this),r.push(this),b=null}else a=this.alignOptions,f=this.alignByTranslate,y=this.alignTo;b=z(b,c[y],c);y=a.align;c=a.verticalAlign;r=(b.x||0)+(a.x||0);p=(b.y||0)+(a.y||0);"right"===y?d=1:"center"===y&&(d=2);d&&(r+=(b.width-(a.width||0))/d);l[f?"translateX":"x"]=Math.round(r);"bottom"===c?g=1:"middle"===c&&(g=2);g&&(p+=(b.height-(a.height||0))/g);l[f?
"translateY":"y"]=Math.round(p);this[this.placed?"animate":"attr"](l);this.placed=!0;this.alignAttr=l;return this},getBBox:function(a,f){var y,c=this.renderer,r,k=this.element,l=this.styles,p,d=this.textStr,A,L=c.cache,m=c.cacheKeys,x=k.namespaceURI===this.SVG_NS,e;f=z(f,this.rotation);r=f*g;p=c.styledMode?k&&E.prototype.getStyle.call(k,"font-size"):l&&l.fontSize;n(d)&&(e=d.toString(),-1===e.indexOf("\x3c")&&(e=e.replace(/[0-9]/g,"0")),e+=["",f||0,p,this.textWidth,l&&l.textOverflow].join());e&&!a&&
(y=L[e]);if(!y){if(x||c.forExport){try{(A=this.fakeTS&&function(a){[].forEach.call(k.querySelectorAll(".highcharts-text-outline"),function(f){f.style.display=a})})&&A("none"),y=k.getBBox?b({},k.getBBox()):{width:k.offsetWidth,height:k.offsetHeight},A&&A("")}catch(Y){""}if(!y||0>y.width)y={width:0,height:0}}else y=this.htmlGetBBox();c.isSVG&&(a=y.width,c=y.height,x&&(y.height=c={"11px,17":14,"13px,20":16}[l&&l.fontSize+","+Math.round(c)]||c),f&&(y.width=Math.abs(c*Math.sin(r))+Math.abs(a*Math.cos(r)),
y.height=Math.abs(c*Math.cos(r))+Math.abs(a*Math.sin(r))));if(e&&0<y.height){for(;250<m.length;)delete L[m.shift()];L[e]||m.push(e);L[e]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var f=this;f.animate({opacity:0},{duration:a||150,complete:function(){f.attr({y:-9999})}})},add:function(a){var f=this.renderer,y=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;
void 0!==this.textStr&&f.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:f.box).appendChild(y);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var f=a.parentNode;f&&f.removeChild(a)},destroy:function(){var a=this,f=a.element||{},b=a.renderer,c=b.isSVG&&"SPAN"===f.nodeName&&a.parentGroup,r=f.ownerSVGElement,l=a.clipPath;f.onclick=f.onmouseout=f.onmouseover=f.onmousemove=f.point=null;Q(a);l&&r&&([].forEach.call(r.querySelectorAll("[clip-path],[CLIP-PATH]"),
function(a){-1<a.getAttribute("clip-path").indexOf(l.element.id)&&a.removeAttribute("clip-path")}),a.clipPath=l.destroy());if(a.stops){for(r=0;r<a.stops.length;r++)a.stops[r]=a.stops[r].destroy();a.stops=null}a.safeRemoveChild(f);for(b.styledMode||a.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)f=c.parentGroup,a.safeRemoveChild(c.div),delete c.div,c=f;a.alignTo&&k(b.alignedObjects,a);A(a,function(f,y){delete a[y]})},shadow:function(a,f,b){var y=[],c,r,l=this.element,k,p,d,g;if(!a)this.destroyShadows();
else if(!this.shadows){p=z(a.width,3);d=(a.opacity||.15)/p;g=this.parentInverted?"(-1,-1)":"("+z(a.offsetX,1)+", "+z(a.offsetY,1)+")";for(c=1;c<=p;c++)r=l.cloneNode(0),k=2*p+1-2*c,e(r,{stroke:a.color||"#000000","stroke-opacity":d*c,"stroke-width":k,transform:"translate"+g,fill:"none"}),r.setAttribute("class",(r.getAttribute("class")||"")+" highcharts-shadow"),b&&(e(r,"height",Math.max(e(r,"height")-k,0)),r.cutHeight=k),f?f.element.appendChild(r):l.parentNode&&l.parentNode.insertBefore(r,l),y.push(r);
this.shadows=y}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=z(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,f,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a=
"M 0 0");this[f]!==a&&(b.setAttribute(f,a),this[f]=a)},dashstyleSetter:function(a){var f,y=this["stroke-width"];"inherit"===y&&(y=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(f=a.length;f--;)a[f]=I(a[f])*y;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",
a)}},alignSetter:function(a){var f={left:"start",center:"middle",right:"end"};f[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",f[a]))},opacitySetter:function(a,f,b){this[f]=a;b.setAttribute(f,a)},titleSetter:function(a){var f=this.element.getElementsByTagName("title")[0];f||(f=m.createElementNS(this.SVG_NS,"title"),this.element.appendChild(f));f.firstChild&&f.removeChild(f.firstChild);f.appendChild(m.createTextNode(String(z(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,
"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))},setTextPath:function(f,b){var y=this.element,c={textAnchor:"text-anchor"},r,k=!1,p,d=this.textPathWrapper,g=!d;b=l(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},b);r=b.attributes;if(f&&b&&b.enabled){this.options&&this.options.padding&&(r.dx=-this.options.padding);d||(this.textPathWrapper=d=this.renderer.createElement("textPath"),
k=!0);p=d.element;(b=f.element.getAttribute("id"))||f.element.setAttribute("id",b=a.uniqueKey());if(g)for(f=y.getElementsByTagName("tspan");f.length;)f[0].setAttribute("y",0),p.appendChild(f[0]);k&&d.add({element:this.text?this.text.element:y});p.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+b);n(r.dy)&&(p.parentNode.setAttribute("dy",r.dy),delete r.dy);n(r.dx)&&(p.parentNode.setAttribute("dx",r.dx),delete r.dx);a.objectEach(r,function(a,f){p.setAttribute(c[f]||f,a)});
y.removeAttribute("transform");this.removeTextOutline.call(d,[].slice.call(y.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=D}else d&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(y,f));return this},destroyTextPath:function(a,f){var b;f.element.setAttribute("id","");for(b=this.textPathWrapper.element.childNodes;b.length;)a.firstChild.appendChild(b[0]);a.firstChild.removeChild(this.textPathWrapper.element);
delete f.textPathWrapper},fillSetter:function(a,f,b){"string"===typeof a?b.setAttribute(f,a):a&&this.complexColor(a,f,b)},visibilitySetter:function(a,f,b){"inherit"===a?b.removeAttribute(f):this[f]!==a&&b.setAttribute(f,a);this[f]=a},zIndexSetter:function(a,f){var b=this.renderer,y=this.parentGroup,c=(y||b).element||b.box,r,k=this.element,l=!1,p,b=c===b.box;r=this.added;var d;n(a)?(k.setAttribute("data-z-index",a),a=+a,this[f]===a&&(r=!1)):n(this[f])&&k.removeAttribute("data-z-index");this[f]=a;if(r){(a=
this.zIndex)&&y&&(y.handleZ=!0);f=c.childNodes;for(d=f.length-1;0<=d&&!l;d--)if(y=f[d],r=y.getAttribute("data-z-index"),p=!n(r),y!==k)if(0>a&&p&&!b&&!d)c.insertBefore(k,f[d]),l=!0;else if(I(r)<=a||p&&(!n(a)||0<=a))c.insertBefore(k,f[d+1]||null),l=!0;l||(c.insertBefore(k,f[b?3:0]||null),l=!0)}return l},_defaultSetter:function(a,f,b){b.setAttribute(f,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=
E.prototype.rotationOriginXSetter=E.prototype.rotationOriginYSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=E.prototype.matrixSetter=function(a,f){this[f]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,f,b){this[f]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===f&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),
this.hasStroke=!1)};H=a.SVGRenderer=function(){this.init.apply(this,arguments)};b(H.prototype,{Element:E,SVG_NS:L,init:function(a,f,b,c,r,k,l){var y;y=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});l||y.css(this.getStyle(c));c=y.element;a.appendChild(c);e(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&e(c,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=c;this.boxWrapper=y;this.alignedObjects=[];this.url=(x||C)&&m.getElementsByTagName("base").length?R.location.href.split("#")[0].replace(/<[^>]*>/g,
"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 7.1.2"));this.defs=this.createElement("defs").add();this.allowHTML=k;this.forExport=r;this.styledMode=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,b,!1);var p;x&&a.getBoundingClientRect&&(f=function(){u(a,{left:0,top:0});p=a.getBoundingClientRect();u(a,{left:Math.ceil(p.left)-p.left+"px",top:Math.ceil(p.top)-p.top+
"px"})},f(),this.unSubPixelFix=B(R,"resize",f))},definition:function(a){function f(a,c){var y;r(a).forEach(function(a){var r=b.createElement(a.tagName),k={};A(a,function(a,f){"tagName"!==f&&"children"!==f&&"textContent"!==f&&(k[f]=a)});r.attr(k);r.add(c||b.defs);a.textContent&&r.element.appendChild(m.createTextNode(a.textContent));f(a.children||[],r);y=r});return y}var b=this;return f(a)},getStyle:function(a){return this.style=b({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var f=new this.Element;f.init(this,a);return f},draw:D,getRadialAttr:function(a,f){return{cx:a[0]-a[2]/
2+f.cx*a[2],cy:a[1]-a[2]/2+f.cy*a[2],r:f.r*a[2]}},truncate:function(a,f,b,c,r,k,l){var y=this,p=a.rotation,d,g=c?1:0,A=(b||c).length,L=A,x=[],e=function(a){f.firstChild&&f.removeChild(f.firstChild);a&&f.appendChild(m.createTextNode(a))},n=function(k,p){p=p||k;if(void 0===x[p])if(f.getSubStringLength)try{x[p]=r+f.getSubStringLength(0,c?p+1:p)}catch(Z){""}else y.getSpanWidth&&(e(l(b||c,k)),x[p]=r+y.getSpanWidth(a,f));return x[p]},D,w;a.rotation=0;D=n(f.textContent.length);if(w=r+D>k){for(;g<=A;)L=Math.ceil((g+
A)/2),c&&(d=l(c,L)),D=n(L,d&&d.length-1),g===A?g=A+1:D>k?A=L-1:g=L;0===A?e(""):b&&A===b.length-1||e(d||l(b||c,L))}c&&c.splice(0,L);a.actualWidth=D;a.rotation=p;return w},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var f=a.element,b=this,c=b.forExport,r=z(a.textStr,"").toString(),y=-1!==r.indexOf("\x3c"),k=f.childNodes,p,l=e(f,"x"),d=a.styles,g=a.textWidth,x=d&&d.lineHeight,n=d&&d.textOutline,D=d&&"ellipsis"===d.textOverflow,w=
d&&"nowrap"===d.whiteSpace,Q=d&&d.fontSize,M,C,h=k.length,d=g&&!a.added&&this.box,F=function(a){var c;b.styledMode||(c=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:Q||b.style.fontSize||12);return x?I(x):b.fontMetrics(c,a.getAttribute("style")?a:f).h},R=function(a,f){A(b.escapes,function(b,c){f&&-1!==f.indexOf(b)||(a=a.toString().replace(new RegExp(b,"g"),c))});return a},v=function(a,f){var b;b=a.indexOf("\x3c");a=a.substring(b,a.indexOf("\x3e")-b);b=a.indexOf(f+"\x3d");if(-1!==b&&(b=b+f.length+
1,f=a.charAt(b),'"'===f||"'"===f))return a=a.substring(b+1),a.substring(0,a.indexOf(f))};M=[r,D,w,x,n,Q,g].join();if(M!==a.textCache){for(a.textCache=M;h--;)f.removeChild(k[h]);y||n||D||g||-1!==r.indexOf(" ")?(d&&d.appendChild(f),y?(r=b.styledMode?r.replace(/<(b|strong)>/g,'\x3cspan class\x3d"highcharts-strong"\x3e').replace(/<(i|em)>/g,'\x3cspan class\x3d"highcharts-emphasized"\x3e'):r.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e'),
r=r.replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g)):r=[r],r=r.filter(function(a){return""!==a}),r.forEach(function(r,y){var k,d=0,A=0;r=r.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");k=r.split("|||");k.forEach(function(r){if(""!==r||1===k.length){var x={},n=m.createElementNS(b.SVG_NS,"tspan"),z,M;(z=v(r,"class"))&&e(n,"class",z);if(z=v(r,"style"))z=z.replace(/(;| |^)color([ :])/,"$1fill$2"),e(n,"style",
z);(M=v(r,"href"))&&!c&&(e(n,"onclick",'location.href\x3d"'+M+'"'),e(n,"class","highcharts-anchor"),b.styledMode||u(n,{cursor:"pointer"}));r=R(r.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==r){n.appendChild(m.createTextNode(r));d?x.dx=0:y&&null!==l&&(x.x=l);e(n,x);f.appendChild(n);!d&&C&&(!N&&c&&u(n,{display:"block"}),e(n,"dy",F(n)));if(g){var h=r.replace(/([^\^])-/g,"$1- ").split(" "),x=!w&&(1<k.length||y||1<h.length);M=0;var I=F(n);if(D)p=b.truncate(a,n,r,void 0,0,Math.max(0,g-parseInt(Q||
12,10)),function(a,f){return a.substring(0,f)+"\u2026"});else if(x)for(;h.length;)h.length&&!w&&0<M&&(n=m.createElementNS(L,"tspan"),e(n,{dy:I,x:l}),z&&e(n,"style",z),n.appendChild(m.createTextNode(h.join(" ").replace(/- /g,"-"))),f.appendChild(n)),b.truncate(a,n,null,h,0===M?A:0,g,function(a,f){return h.slice(0,f).join(" ").replace(/- /g,"-")}),A=a.actualWidth,M++}d++}}});C=C||f.childNodes.length}),D&&p&&a.attr("title",R(a.textStr,["\x26lt;","\x26gt;"])),d&&d.removeChild(f),n&&a.applyTextOutline&&
a.applyTextOutline(n)):f.appendChild(m.createTextNode(R(r)))}},getContrast:function(a){a=t(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,f,c,r,k,d,p,g,A,L){var y=this.label(a,f,c,A,null,null,L,null,"button"),n=0,x=this.styledMode;y.attr(l({padding:8,r:2},k));if(!x){var m,e,D,w;k=l({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},k);m=k.style;delete k.style;d=l(k,{fill:"#e6e6e6"},d);
e=d.style;delete d.style;p=l(k,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},p);D=p.style;delete p.style;g=l(k,{style:{color:"#cccccc"}},g);w=g.style;delete g.style}B(y.element,K?"mouseover":"mouseenter",function(){3!==n&&y.setState(1)});B(y.element,K?"mouseout":"mouseleave",function(){3!==n&&y.setState(n)});y.setState=function(a){1!==a&&(y.state=n=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||
0]);x||y.attr([k,d,p,g][a||0]).css([m,e,D,w][a||0])};x||y.attr(k).css(b({cursor:"default"},m));return y.on("click",function(a){3!==n&&r.call(y,a)})},crispLine:function(a,f){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-f%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+f%2/2);return a},path:function(a){var f=this.styledMode?{}:{fill:"none"};c(a)?f.d=a:w(a)&&b(f,a);return this.createElement("path").attr(f)},circle:function(a,f,b){a=w(a)?a:void 0===a?{}:{x:a,y:f,r:b};f=this.createElement("circle");f.xSetter=
f.ySetter=function(a,f,b){b.setAttribute("c"+f,a)};return f.attr(a)},arc:function(a,f,b,c,r,k){w(a)?(c=a,f=c.y,b=c.r,a=c.x):c={innerR:c,start:r,end:k};a=this.symbol("arc",a,f,b,b,c);a.r=b;return a},rect:function(a,f,b,c,r,k){r=w(a)?a.r:r;var d=this.createElement("rect");a=w(a)?a:void 0===a?{}:{x:a,y:f,width:Math.max(b,0),height:Math.max(c,0)};this.styledMode||(void 0!==k&&(a.strokeWidth=k,a=d.crisp(a)),a.fill="none");r&&(a.r=r);d.rSetter=function(a,f,b){d.r=a;e(b,{rx:a,ry:a})};d.rGetter=function(){return d.r};
return d.attr(a)},setSize:function(a,f,b){var c=this.alignedObjects,r=c.length;this.width=a;this.height=f;for(this.boxWrapper.animate({width:a,height:f},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:z(b,!0)?void 0:0});r--;)c[r].align()},g:function(a){var f=this.createElement("g");return a?f.attr({"class":"highcharts-"+a}):f},image:function(a,f,c,r,k,d){var p={preserveAspectRatio:"none"},l,y=function(a,f){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink",
"href",f):a.setAttribute("hc-svg-href",f)},g=function(f){y(l.element,a);d.call(l,f)};1<arguments.length&&b(p,{x:f,y:c,width:r,height:k});l=this.createElement("image").attr(p);d?(y(l.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),p=new R.Image,B(p,"load",g),p.src=a,p.complete&&g({})):y(l.element,a);return l},symbol:function(a,f,c,r,k,d){var p=this,l,y=/^url\((.*?)\)$/,g=y.test(a),A=!g&&(this.symbols[a]?a:"circle"),L=A&&this.symbols[A],x=n(f)&&L&&L.call(this.symbols,
Math.round(f),Math.round(c),r,k,d),e,D;L?(l=this.path(x),p.styledMode||l.attr("fill","none"),b(l,{symbolName:A,x:f,y:c,width:r,height:k}),d&&b(l,d)):g&&(e=a.match(y)[1],l=this.image(e),l.imgwidth=z(M[e]&&M[e].width,d&&d.width),l.imgheight=z(M[e]&&M[e].height,d&&d.height),D=function(){l.attr({width:l.width,height:l.height})},["width","height"].forEach(function(a){l[a+"Setter"]=function(a,f){var b={},c=this["img"+f],r="width"===f?"translateX":"translateY";this[f]=a;n(c)&&(d&&"within"===d.backgroundSize&&
this.width&&this.height&&(c=Math.round(c*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(f,c),this.alignByTranslate||(b[r]=((this[f]||0)-c)/2,this.attr(b)))}}),n(f)&&l.attr({x:f,y:c}),l.isImg=!0,n(l.imgwidth)&&n(l.imgheight)?D():(l.attr({width:0,height:0}),v("img",{onload:function(){var a=q[p.chartIndex];0===this.width&&(u(this,{position:"absolute",top:"-999em"}),m.body.appendChild(this));M[e]={width:this.width,height:this.height};l.imgwidth=
this.width;l.imgheight=this.height;l.element&&D();this.parentNode&&this.parentNode.removeChild(this);p.imgCount--;if(!p.imgCount&&a&&a.onload)a.onload()},src:e}),this.imgCount++));return l},symbols:{circle:function(a,f,b,c){return this.arc(a+b/2,f+c/2,b/2,c/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(a,f,b,c){return["M",a,f,"L",a+b,f,a+b,f+c,a,f+c,"Z"]},triangle:function(a,f,b,c){return["M",a+b/2,f,"L",a+b,f+c,a,f+c,"Z"]},"triangle-down":function(a,f,b,c){return["M",a,f,"L",a+b,
f,a+b/2,f+c,"Z"]},diamond:function(a,f,b,c){return["M",a+b/2,f,"L",a+b,f+c/2,a+b/2,f+c,a,f+c/2,"Z"]},arc:function(a,f,b,c,r){var d=r.start,k=r.r||b,l=r.r||c||b,p=r.end-.001;b=r.innerR;c=z(r.open,.001>Math.abs(r.end-r.start-2*Math.PI));var y=Math.cos(d),g=Math.sin(d),A=Math.cos(p),p=Math.sin(p),d=.001>r.end-d-Math.PI?0:1;r=["M",a+k*y,f+l*g,"A",k,l,0,d,z(r.clockwise,1),a+k*A,f+l*p];n(b)&&r.push(c?"M":"L",a+b*A,f+b*p,"A",b,b,0,d,0,a+b*y,f+b*g);r.push(c?"":"Z");return r},callout:function(a,f,b,c,r){var d=
Math.min(r&&r.r||0,b,c),k=d+6,l=r&&r.anchorX;r=r&&r.anchorY;var p;p=["M",a+d,f,"L",a+b-d,f,"C",a+b,f,a+b,f,a+b,f+d,"L",a+b,f+c-d,"C",a+b,f+c,a+b,f+c,a+b-d,f+c,"L",a+d,f+c,"C",a,f+c,a,f+c,a,f+c-d,"L",a,f+d,"C",a,f,a,f,a+d,f];l&&l>b?r>f+k&&r<f+c-k?p.splice(13,3,"L",a+b,r-6,a+b+6,r,a+b,r+6,a+b,f+c-d):p.splice(13,3,"L",a+b,c/2,l,r,a+b,c/2,a+b,f+c-d):l&&0>l?r>f+k&&r<f+c-k?p.splice(33,3,"L",a,r+6,a-6,r,a,r-6,a,f+d):p.splice(33,3,"L",a,c/2,l,r,a,c/2,a,f+d):r&&r>c&&l>a+k&&l<a+b-k?p.splice(23,3,"L",l+6,f+
c,l,f+c+6,l-6,f+c,a+d,f+c):r&&0>r&&l>a+k&&l<a+b-k&&p.splice(3,3,"L",l-6,f,l,f-6,l+6,f,b-d,f);return p}},clipRect:function(f,b,c,r){var d=a.uniqueKey()+"-",l=this.createElement("clipPath").attr({id:d}).add(this.defs);f=this.rect(f,b,c,r,0).add(l);f.id=d;f.clipPath=l;f.count=0;return f},text:function(a,f,b,c){var r={};if(c&&(this.allowHTML||!this.forExport))return this.html(a,f,b);r.x=Math.round(f||0);b&&(r.y=Math.round(b));n(a)&&(r.text=a);a=this.createElement("text").attr(r);c||(a.xSetter=function(a,
f,b){var c=b.getElementsByTagName("tspan"),r,d=b.getAttribute(f),l;for(l=0;l<c.length;l++)r=c[l],r.getAttribute(f)===d&&r.setAttribute(f,a);b.setAttribute(f,a)});return a},fontMetrics:function(a,f){a=!this.styledMode&&/px/.test(a)||!R.getComputedStyle?a||f&&f.style&&f.style.fontSize||this.style&&this.style.fontSize:f&&E.prototype.getStyle.call(f,"font-size");a=/px/.test(a)?I(a):12;f=24>a?a+3:Math.round(1.2*a);return{h:f,b:Math.round(.8*f),f:a}},rotCorr:function(a,f,b){var c=a;f&&b&&(c=Math.max(c*
Math.cos(f*g),4));return{x:-a/3*Math.sin(f*g),y:c}},label:function(c,r,d,k,p,g,A,L,x){var y=this,e=y.styledMode,m=y.g("button"!==x&&"label"),D=m.text=y.text("",0,0,A).attr({zIndex:1}),w,z,N=0,M=3,Q=0,C,h,I,F,R,v={},K,t,q=/^url\((.*?)\)$/.test(k),u=e||q,S=function(){return e?w.strokeWidth()%2/2:(K?parseInt(K,10):0)%2/2},U,P,T;x&&m.addClass("highcharts-"+x);U=function(){var a=D.element.style,f={};z=(void 0===C||void 0===h||R)&&n(D.textStr)&&D.getBBox();m.width=(C||z.width||0)+2*M+Q;m.height=(h||z.height||
0)+2*M;t=M+Math.min(y.fontMetrics(a&&a.fontSize,D).b,z?z.height:Infinity);u&&(w||(m.box=w=y.symbols[k]||q?y.symbol(k):y.rect(),w.addClass(("button"===x?"":"highcharts-label-box")+(x?" highcharts-"+x+"-box":"")),w.add(m),a=S(),f.x=a,f.y=(L?-t:0)+a),f.width=Math.round(m.width),f.height=Math.round(m.height),w.attr(b(f,v)),v={})};P=function(){var a=Q+M,f;f=L?0:t;n(C)&&z&&("center"===R||"right"===R)&&(a+={center:.5,right:1}[R]*(C-z.width));if(a!==D.x||f!==D.y)D.attr("x",a),D.hasBoxWidthChanged&&(z=D.getBBox(!0),
U()),void 0!==f&&D.attr("y",f);D.x=a;D.y=f};T=function(a,f){w?w.attr(a,f):v[a]=f};m.onAdd=function(){D.add(m);m.attr({text:c||0===c?c:"",x:r,y:d});w&&n(p)&&m.attr({anchorX:p,anchorY:g})};m.widthSetter=function(f){C=a.isNumber(f)?f:null};m.heightSetter=function(a){h=a};m["text-alignSetter"]=function(a){R=a};m.paddingSetter=function(a){n(a)&&a!==M&&(M=m.padding=a,P())};m.paddingLeftSetter=function(a){n(a)&&a!==Q&&(Q=a,P())};m.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==N&&(N=a,z&&m.attr({x:I}))};
m.textSetter=function(a){void 0!==a&&D.attr({text:a});U();P()};m["stroke-widthSetter"]=function(a,f){a&&(u=!0);K=this["stroke-width"]=a;T(f,a)};e?m.rSetter=function(a,f){T(f,a)}:m.strokeSetter=m.fillSetter=m.rSetter=function(a,f){"r"!==f&&("fill"===f&&a&&(u=!0),m[f]=a);T(f,a)};m.anchorXSetter=function(a,f){p=m.anchorX=a;T(f,Math.round(a)-S()-I)};m.anchorYSetter=function(a,f){g=m.anchorY=a;T(f,a-F)};m.xSetter=function(a){m.x=a;N&&(a-=N*((C||z.width)+2*M),m["forceAnimate:x"]=!0);I=Math.round(a);m.attr("translateX",
I)};m.ySetter=function(a){F=m.y=Math.round(a);m.attr("translateY",F)};var B=m.css;A={css:function(a){if(a){var f={};a=l(a);m.textProps.forEach(function(b){void 0!==a[b]&&(f[b]=a[b],delete a[b])});D.css(f);"width"in f&&U();"fontSize"in f&&(U(),P())}return B.call(m,a)},getBBox:function(){return{width:z.width+2*M,height:z.height+2*M,x:z.x-M,y:z.y-M}},destroy:function(){f(m.element,"mouseenter");f(m.element,"mouseleave");D&&(D=D.destroy());w&&(w=w.destroy());E.prototype.destroy.call(m);m=y=U=P=T=null}};
e||(A.shadow=function(a){a&&(U(),w&&w.shadow(a));return m});return b(m,A)}});a.Renderer=H});J(G,"parts/Html.js",[G["parts/Globals.js"]],function(a){var E=a.attr,H=a.createElement,B=a.css,h=a.defined,e=a.extend,q=a.isFirefox,t=a.isMS,u=a.isWebKit,v=a.pick,n=a.pInt,g=a.SVGElement,d=a.SVGRenderer,m=a.win;e(g.prototype,{htmlCss:function(a){var b="SPAN"===this.element.tagName&&a&&"width"in a,d=v(b&&a.width,void 0),c;b&&(delete a.width,this.textWidth=d,c=!0);a&&"ellipsis"===a.textOverflow&&(a.whiteSpace=
"nowrap",a.overflow="hidden");this.styles=e(this.styles,a);B(this.element,a);c&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,d=this.element,p=this.translateX||0,c=this.translateY||0,g=this.x||0,m=this.y||0,e=this.textAlign||"left",F={left:0,center:.5,right:1}[e],C=this.styles,l=C&&C.whiteSpace;B(d,{marginLeft:p,marginTop:c});
!a.styledMode&&this.shadows&&this.shadows.forEach(function(a){B(a,{marginLeft:p+1,marginTop:c+1})});this.inverted&&[].forEach.call(d.childNodes,function(b){a.invertChild(b,d)});if("SPAN"===d.tagName){var C=this.rotation,D=this.textWidth&&n(this.textWidth),A=[C,e,d.innerHTML,this.textWidth,this.textAlign].join(),z;(z=D!==this.oldTextWidth)&&!(z=D>this.oldTextWidth)&&((z=this.textPxLength)||(B(d,{width:"",whiteSpace:l||"nowrap"}),z=d.offsetWidth),z=z>D);z&&(/[ \-]/.test(d.textContent||d.innerText)||
"ellipsis"===d.style.textOverflow)?(B(d,{width:D+"px",display:"block",whiteSpace:l||"normal"}),this.oldTextWidth=D,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;A!==this.cTT&&(l=a.fontMetrics(d.style.fontSize,d).b,!h(C)||C===(this.oldRotation||0)&&e===this.oldAlign||this.setSpanRotation(C,F,l),this.getSpanCorrection(!h(C)&&this.textPxLength||d.offsetWidth,l,F,C,e));B(d,{left:g+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});this.cTT=A;this.oldRotation=C;this.oldAlign=e}}else this.alignOnAdd=
!0},setSpanRotation:function(a,d,p){var b={},k=this.renderer.getTransformKey();b[k]=b.transform="rotate("+a+"deg)";b[k+(q?"Origin":"-origin")]=b.transformOrigin=100*d+"% "+p+"px";B(this.element,b)},getSpanCorrection:function(a,d,p){this.xCorr=-a*p;this.yCorr=-d}});e(d.prototype,{getTransformKey:function(){return t&&!/Edge/.test(m.navigator.userAgent)?"-ms-transform":u?"-webkit-transform":q?"MozTransform":m.opera?"-o-transform":""},html:function(b,d,p){var c=this.createElement("span"),k=c.element,
m=c.renderer,n=m.isSVG,h=function(a,b){["opacity","visibility"].forEach(function(c){a[c+"Setter"]=function(d,l,f){var r=a.div?a.div.style:b;g.prototype[c+"Setter"].call(this,d,l,f);r&&(r[l]=d)}});a.addedSetters=!0},C=a.charts[m.chartIndex],C=C&&C.styledMode;c.textSetter=function(a){a!==k.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;k.innerHTML=v(a,"");c.doTransform=!0};n&&h(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=function(a,b){"align"===b&&(b=
"textAlign");c[b]=a;c.doTransform=!0};c.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};c.attr({text:b,x:Math.round(d),y:Math.round(p)}).css({position:"absolute"});C||c.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});k.style.whiteSpace="nowrap";c.css=c.htmlCss;n&&(c.add=function(a){var b,d=m.box.parentNode,l=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)l.push(a),a=a.parentGroup;l.reverse().forEach(function(a){function f(f,b){a[b]=
f;"translateX"===b?r.left=f+"px":r.top=f+"px";a.doTransform=!0}var r,p=E(a.element,"class");p&&(p={className:p});b=a.div=a.div||H("div",p,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||d);r=b.style;e(a,{classSetter:function(a){return function(f){this.element.setAttribute("class",f);a.className=f}}(b),on:function(){l[0].div&&c.on.apply({element:l[0].div},arguments);return a},translateXSetter:f,
translateYSetter:f});a.addedSetters||h(a)})}}else b=d;b.appendChild(k);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})});J(G,"parts/Time.js",[G["parts/Globals.js"]],function(a){var E=a.defined,H=a.extend,B=a.merge,h=a.pick,e=a.timeUnits,q=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var e=h(a&&a.useUTC,!0),v=this;this.options=a=B(!0,this.options||{},a);this.Date=a.Date||q.Date||Date;this.timezoneOffset=(this.useUTC=e)&&
a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(e&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,g){var d=g.getTime(),m=d-v.getTimezoneOffset(g);g.setTime(m);a=g["getUTC"+a]();g.setTime(d);return a},this.set=function(a,g,d){var m;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===g.getTimezoneOffset()%60)g["set"+a](d);else m=v.getTimezoneOffset(g),m=g.getTime()-m,g.setTime(m),g["setUTC"+a](d),a=v.getTimezoneOffset(g),
m=g.getTime()+a,g.setTime(m)}):e?(this.get=function(a,g){return g["getUTC"+a]()},this.set=function(a,g,d){return g["setUTC"+a](d)}):(this.get=function(a,g){return g["get"+a]()},this.set=function(a,g,d){return g["set"+a](d)})},makeTime:function(e,q,v,n,g,d){var m,b,k;this.useUTC?(m=this.Date.UTC.apply(0,arguments),b=this.getTimezoneOffset(m),m+=b,k=this.getTimezoneOffset(m),b!==k?m+=k-b:b-36E5!==this.getTimezoneOffset(m-36E5)||a.isSafari||(m-=36E5)):m=(new this.Date(e,q,h(v,1),h(n,0),h(g,0),h(d,0))).getTime();
return m},timezoneOffsetFunction:function(){var e=this,h=this.options,v=q.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(h.timezone){if(v)return function(a){return 6E4*-v.tz(a,h.timezone).utcOffset()};a.error(25)}return this.useUTC&&h.getTimezoneOffset?function(a){return 6E4*h.getTimezoneOffset(a)}:function(){return 6E4*(e.timezoneOffset||0)}},dateFormat:function(e,h,v){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||"";e=a.pick(e,"%Y-%m-%d %H:%M:%S");
var n=this,g=new this.Date(h),d=this.get("Hours",g),m=this.get("Day",g),b=this.get("Date",g),k=this.get("Month",g),p=this.get("FullYear",g),c=a.defaultOptions.lang,x=c.weekdays,q=c.shortWeekdays,w=a.pad,g=a.extend({a:q?q[m]:x[m].substr(0,3),A:x[m],d:w(b),e:w(b,2," "),w:m,b:c.shortMonths[k],B:c.months[k],m:w(k+1),o:k+1,y:p.toString().substr(2,2),Y:p,H:w(d),k:d,I:w(d%12||12),l:d%12||12,M:w(n.get("Minutes",g)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:w(g.getSeconds()),L:w(Math.floor(h%1E3),3)},a.dateFormats);
a.objectEach(g,function(a,b){for(;-1!==e.indexOf("%"+b);)e=e.replace("%"+b,"function"===typeof a?a.call(n,h):a)});return v?e.substr(0,1).toUpperCase()+e.substr(1):e},resolveDTLFormat:function(e){return a.isObject(e,!0)?e:(e=a.splat(e),{main:e[0],from:e[1],to:e[2]})},getTimeTicks:function(a,q,v,n){var g=this,d=[],m,b={},k;m=new g.Date(q);var p=a.unitRange,c=a.count||1,x;n=h(n,1);if(E(q)){g.set("Milliseconds",m,p>=e.second?0:c*Math.floor(g.get("Milliseconds",m)/c));p>=e.second&&g.set("Seconds",m,p>=
e.minute?0:c*Math.floor(g.get("Seconds",m)/c));p>=e.minute&&g.set("Minutes",m,p>=e.hour?0:c*Math.floor(g.get("Minutes",m)/c));p>=e.hour&&g.set("Hours",m,p>=e.day?0:c*Math.floor(g.get("Hours",m)/c));p>=e.day&&g.set("Date",m,p>=e.month?1:Math.max(1,c*Math.floor(g.get("Date",m)/c)));p>=e.month&&(g.set("Month",m,p>=e.year?0:c*Math.floor(g.get("Month",m)/c)),k=g.get("FullYear",m));p>=e.year&&g.set("FullYear",m,k-k%c);p===e.week&&(k=g.get("Day",m),g.set("Date",m,g.get("Date",m)-k+n+(k<n?-7:0)));k=g.get("FullYear",
m);n=g.get("Month",m);var K=g.get("Date",m),w=g.get("Hours",m);q=m.getTime();g.variableTimezone&&(x=v-q>4*e.month||g.getTimezoneOffset(q)!==g.getTimezoneOffset(v));q=m.getTime();for(m=1;q<v;)d.push(q),q=p===e.year?g.makeTime(k+m*c,0):p===e.month?g.makeTime(k,n+m*c):!x||p!==e.day&&p!==e.week?x&&p===e.hour&&1<c?g.makeTime(k,n,K,w+m*c):q+p*c:g.makeTime(k,n,K+m*c*(p===e.day?1:7)),m++;d.push(q);p<=e.hour&&1E4>d.length&&d.forEach(function(a){0===a%18E5&&"000000000"===g.dateFormat("%H%M%S%L",a)&&(b[a]="day")})}d.info=
H(a,{higherRanks:b,totalRange:p*c});return d}}});J(G,"parts/Options.js",[G["parts/Globals.js"]],function(a){var E=a.color,H=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",
plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",
textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",
second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',backgroundColor:E("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,
style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(B){a.defaultOptions=H(!0,a.defaultOptions,B);a.time.update(H(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};
a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(H(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(B,h,e){return a.time.dateFormat(B,h,e)};""});J(G,"parts/Tick.js",[G["parts/Globals.js"]],function(a){var E=a.correctFloat,H=a.defined,B=a.destroyObjectProperties,h=a.fireEvent,e=a.isNumber,q=a.merge,t=a.pick,u=a.deg2rad;a.Tick=function(a,e,g,d,m){this.axis=a;this.pos=e;this.type=g||"";this.isNewLabel=this.isNew=!0;this.parameters=m||{};this.tickmarkOffset=this.parameters.tickmarkOffset;
this.options=this.parameters.options;g||d||this.addLabel()};a.Tick.prototype={addLabel:function(){var e=this,n=e.axis,g=n.options,d=n.chart,m=n.categories,b=n.names,k=e.pos,p=t(e.options&&e.options.labels,g.labels),c=n.tickPositions,x=k===c[0],h=k===c[c.length-1],m=this.parameters.category||(m?t(m[k],b[k],k):k),w=e.label,c=c.info,F,C,l,D;n.isDatetimeAxis&&c&&(C=d.time.resolveDTLFormat(g.dateTimeLabelFormats[!g.grid&&c.higherRanks[k]||c.unitName]),F=C.main);e.isFirst=x;e.isLast=h;e.formatCtx={axis:n,
chart:d,isFirst:x,isLast:h,dateTimeLabelFormat:F,tickPositionInfo:c,value:n.isLog?E(n.lin2log(m)):m,pos:k};g=n.labelFormatter.call(e.formatCtx,this.formatCtx);if(D=C&&C.list)e.shortenLabel=function(){for(l=0;l<D.length;l++)if(w.attr({text:n.labelFormatter.call(a.extend(e.formatCtx,{dateTimeLabelFormat:D[l]}))}),w.getBBox().width<n.getSlotWidth(e)-2*t(p.padding,5))return;w.attr({text:""})};if(H(w))w&&w.textStr!==g&&(!w.textWidth||p.style&&p.style.width||w.styles.width||w.css({width:null}),w.attr({text:g}),
w.textPxLength=w.getBBox().width);else{if(e.label=w=H(g)&&p.enabled?d.renderer.text(g,0,0,p.useHTML).add(n.labelGroup):null)d.styledMode||w.css(q(p.style)),w.textPxLength=w.getBBox().width;e.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var e=this.axis,g=e.options.labels,d=a.x,m=e.chart.chartWidth,b=e.chart.spacing,k=t(e.labelLeft,Math.min(e.pos,b[3])),b=t(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,m-
b[1])),p=this.label,c=this.rotation,x={left:0,center:.5,right:1}[e.labelAlign||p.attr("align")],h=p.getBBox().width,w=e.getSlotWidth(this),F=w,C=1,l,D={};if(c||"justify"!==t(g.overflow,"justify"))0>c&&d-x*h<k?l=Math.round(d/Math.cos(c*u)-k):0<c&&d+x*h>b&&(l=Math.round((m-d)/Math.cos(c*u)));else if(m=d+(1-x)*h,d-x*h<k?F=a.x+F*(1-x)-k:m>b&&(F=b-a.x+F*x,C=-1),F=Math.min(w,F),F<w&&"center"===e.labelAlign&&(a.x+=C*(w-F-x*(w-Math.min(h,F)))),h>F||e.autoRotation&&(p.styles||{}).width)l=F;l&&(this.shortenLabel?
this.shortenLabel():(D.width=Math.floor(l),(g.style||{}).textOverflow||(D.textOverflow="ellipsis"),p.css(D)))},getPosition:function(e,n,g,d){var m=this.axis,b=m.chart,k=d&&b.oldChartHeight||b.chartHeight;e={x:e?a.correctFloat(m.translate(n+g,null,null,d)+m.transB):m.left+m.offset+(m.opposite?(d&&b.oldChartWidth||b.chartWidth)-m.right-m.left:0),y:e?k-m.bottom+m.offset-(m.opposite?m.height:0):a.correctFloat(k-m.translate(n+g,null,null,d)-m.transB)};e.y=Math.max(Math.min(e.y,1E5),-1E5);h(this,"afterGetPosition",
{pos:e});return e},getLabelPosition:function(a,e,g,d,m,b,k,p){var c=this.axis,x=c.transA,n=c.reversed,w=c.staggerLines,F=c.tickRotCorr||{x:0,y:0},C=m.y,l=d||c.reserveSpaceDefault?0:-c.labelOffset*("center"===c.labelAlign?.5:1),D={};H(C)||(C=0===c.side?g.rotation?-8:-g.getBBox().height:2===c.side?F.y+8:Math.cos(g.rotation*u)*(F.y-g.getBBox(!1,0).height/2));a=a+m.x+l+F.x-(b&&d?b*x*(n?-1:1):0);e=e+C-(b&&!d?b*x*(n?1:-1):0);w&&(g=k/(p||1)%w,c.opposite&&(g=w-g-1),e+=c.labelOffset/w*g);D.x=a;D.y=Math.round(e);
h(this,"afterGetLabelPosition",{pos:D,tickmarkOffset:b,index:k});return D},getMarkPath:function(a,e,g,d,m,b){return b.crispLine(["M",a,e,"L",a+(m?0:-g),e+(m?g:0)],d)},renderGridLine:function(a,e,g){var d=this.axis,m=d.options,b=this.gridLine,k={},p=this.pos,c=this.type,x=t(this.tickmarkOffset,d.tickmarkOffset),n=d.chart.renderer,w=c?c+"Grid":"grid",h=m[w+"LineWidth"],C=m[w+"LineColor"],m=m[w+"LineDashStyle"];b||(d.chart.styledMode||(k.stroke=C,k["stroke-width"]=h,m&&(k.dashstyle=m)),c||(k.zIndex=
1),a&&(e=0),this.gridLine=b=n.path().attr(k).addClass("highcharts-"+(c?c+"-":"")+"grid-line").add(d.gridGroup));if(b&&(g=d.getPlotLinePath({value:p+x,lineWidth:b.strokeWidth()*g,force:"pass",old:a})))b[a||this.isNew?"attr":"animate"]({d:g,opacity:e})},renderMark:function(a,e,g){var d=this.axis,m=d.options,b=d.chart.renderer,k=this.type,p=k?k+"Tick":"tick",c=d.tickSize(p),x=this.mark,n=!x,w=a.x;a=a.y;var h=t(m[p+"Width"],!k&&d.isXAxis?1:0),m=m[p+"Color"];c&&(d.opposite&&(c[0]=-c[0]),n&&(this.mark=
x=b.path().addClass("highcharts-"+(k?k+"-":"")+"tick").add(d.axisGroup),d.chart.styledMode||x.attr({stroke:m,"stroke-width":h})),x[n?"attr":"animate"]({d:this.getMarkPath(w,a,c[0],x.strokeWidth()*g,d.horiz,b),opacity:e}))},renderLabel:function(a,n,g,d){var m=this.axis,b=m.horiz,k=m.options,p=this.label,c=k.labels,x=c.step,m=t(this.tickmarkOffset,m.tickmarkOffset),h=!0,w=a.x;a=a.y;p&&e(w)&&(p.xy=a=this.getLabelPosition(w,a,p,b,c,m,d,x),this.isFirst&&!this.isLast&&!t(k.showFirstLabel,1)||this.isLast&&
!this.isFirst&&!t(k.showLastLabel,1)?h=!1:!b||c.step||c.rotation||n||0===g||this.handleOverflow(a),x&&d%x&&(h=!1),h&&e(a.y)?(a.opacity=g,p[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(p.attr("y",-9999),this.isNewLabel=!0))},render:function(e,n,g){var d=this.axis,m=d.horiz,b=this.pos,k=t(this.tickmarkOffset,d.tickmarkOffset),b=this.getPosition(m,b,k,n),k=b.x,p=b.y,d=m&&k===d.pos+d.len||!m&&p===d.pos?-1:1;g=t(g,1);this.isActive=!0;this.renderGridLine(n,g,d);this.renderMark(b,g,d);this.renderLabel(b,
n,g,e);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){B(this,this.axis)}}});J(G,"parts/Axis.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animObject,B=a.arrayMax,h=a.arrayMin,e=a.color,q=a.correctFloat,t=a.defaultOptions,u=a.defined,v=a.deg2rad,n=a.destroyObjectProperties,g=a.extend,d=a.fireEvent,m=a.format,b=a.getMagnitude,k=a.isArray,p=a.isNumber,c=a.isString,x=a.merge,K=a.normalizeTickInterval,w=a.objectEach,F=a.pick,C=a.removeEvent,l=a.seriesTypes,D=a.splat,A=
a.syncTimeout,z=a.Tick,I=function(){this.init.apply(this,arguments)};a.extend(I.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",
minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,
text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,
title:{rotation:0}},init:function(f,b){var c=b.isX,r=this;r.chart=f;r.horiz=f.inverted&&!r.isZAxis?!c:c;r.isXAxis=c;r.coll=r.coll||(c?"xAxis":"yAxis");d(this,"init",{userOptions:b});r.opposite=b.opposite;r.side=b.side||(r.horiz?r.opposite?0:2:r.opposite?1:3);r.setOptions(b);var l=this.options,p=l.type;r.labelFormatter=l.labels.formatter||r.defaultLabelFormatter;r.userOptions=b;r.minPixelPadding=0;r.reversed=l.reversed;r.visible=!1!==l.visible;r.zoomEnabled=!1!==l.zoomEnabled;r.hasNames="category"===
p||!0===l.categories;r.categories=l.categories||r.hasNames;r.names||(r.names=[],r.names.keys={});r.plotLinesAndBandsGroups={};r.isLog="logarithmic"===p;r.isDatetimeAxis="datetime"===p;r.positiveValuesOnly=r.isLog&&!r.allowNegativeLog;r.isLinked=u(l.linkedTo);r.ticks={};r.labelEdge=[];r.minorTicks={};r.plotLinesAndBands=[];r.alternateBands={};r.len=0;r.minRange=r.userMinRange=l.minRange||l.maxZoom;r.range=l.range;r.offset=l.offset||0;r.stacks={};r.oldStacks={};r.stacksTouched=0;r.max=null;r.min=null;
r.crosshair=F(l.crosshair,D(f.options.tooltip.crosshairs)[c?0:1],!1);b=r.options.events;-1===f.axes.indexOf(r)&&(c?f.axes.splice(f.xAxis.length,0,r):f.axes.push(r),f[r.coll].push(r));r.series=r.series||[];f.inverted&&!r.isZAxis&&c&&void 0===r.reversed&&(r.reversed=!0);w(b,function(f,b){a.isFunction(f)&&E(r,b,f)});r.lin2log=l.linearToLogConverter||r.lin2log;r.isLog&&(r.val2lin=r.log2lin,r.lin2val=r.lin2log);d(this,"afterInit")},setOptions:function(a){this.options=x(this.defaultOptions,"yAxis"===this.coll&&
this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],x(t[this.coll],a));d(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var f=this.axis,b=this.value,c=f.chart.time,d=f.categories,l=this.dateTimeLabelFormat,p=t.lang,k=p.numericSymbols,p=p.numericSymbolMagnitude||1E3,e=k&&k.length,g,A=f.options.labels.format,f=f.isLog?Math.abs(b):f.tickInterval;if(A)g=m(A,this,c);else if(d)g=
b;else if(l)g=c.dateFormat(l,b);else if(e&&1E3<=f)for(;e--&&void 0===g;)c=Math.pow(p,e+1),f>=c&&0===10*b%c&&null!==k[e]&&0!==b&&(g=a.numberFormat(b/c,-1)+k[e]);void 0===g&&(g=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart,c;d(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(f){if(f.visible||
!b.options.chart.ignoreHiddenSeries){var r=f.options,d=r.threshold,l,k;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=d&&(d=null);if(a.isXAxis)r=f.xData,r.length&&(c=f.getXExtremes(r),l=c.min,k=c.max,p(l)||l instanceof Date||(r=r.filter(p),c=f.getXExtremes(r),l=c.min,k=c.max),r.length&&(a.dataMin=Math.min(F(a.dataMin,l),l),a.dataMax=Math.max(F(a.dataMax,k),k)));else if(f.getExtremes(),k=f.dataMax,l=f.dataMin,u(l)&&u(k)&&(a.dataMin=Math.min(F(a.dataMin,l),l),a.dataMax=Math.max(F(a.dataMax,k),k)),u(d)&&
(a.threshold=d),!r.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});d(this,"afterGetSeriesExtremes")},translate:function(a,b,c,d,l,k){var f=this.linkedParent||this,r=1,e=0,g=d?f.oldTransA:f.transA;d=d?f.oldMin:f.min;var m=f.minPixelPadding;l=(f.isOrdinal||f.isBroken||f.isLog&&l)&&f.lin2val;g||(g=f.transA);c&&(r*=-1,e=f.len);f.reversed&&(r*=-1,e-=r*(f.sector||f.len));b?(a=(a*r+e-m)/g+d,l&&(a=f.lin2val(a))):(l&&(a=f.val2lin(a)),a=p(d)?r*(a-d)*g+e+r*m+(p(k)?g*k:0):void 0);return a},toPixels:function(a,
b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a){var f=this,b=f.chart,c=f.left,l=f.top,k=a.old,e=a.value,g=a.translatedValue,m=a.lineWidth,A=a.force,x,D,n,w,z=k&&b.oldChartHeight||b.chartHeight,h=k&&b.oldChartWidth||b.chartWidth,C,I=f.transB,q=function(a,f,b){if("pass"!==A&&a<f||a>b)A?a=Math.min(Math.max(f,a),b):C=!0;return a};a={value:e,lineWidth:m,old:k,force:A,acrossPanes:a.acrossPanes,
translatedValue:g};d(this,"getPlotLinePath",a,function(a){g=F(g,f.translate(e,null,null,k));g=Math.min(Math.max(-1E5,g),1E5);x=n=Math.round(g+I);D=w=Math.round(z-g-I);p(g)?f.horiz?(D=l,w=z-f.bottom,x=n=q(x,c,c+f.width)):(x=c,n=h-f.right,D=w=q(D,l,l+f.height)):(C=!0,A=!1);a.path=C&&!A?null:b.renderer.crispLine(["M",x,D,"L",n,w],m||1)});return a.path},getLinearTickPositions:function(a,b,c){var f,r=q(Math.floor(b/a)*a);c=q(Math.ceil(c/a)*a);var d=[],l;q(r+a)===r&&(l=20);if(this.single)return[b];for(b=
r;b<=c;){d.push(b);b=q(b+a,l);if(b===f)break;f=b}return d},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?F(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,d=a.minorTickInterval,l=[],p=a.pointRangePadding||0,k=a.min-p,p=a.max+p,g=p-k;if(g&&g/d<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(f,b,c){b&&l.push.apply(l,a.getLogTickPositions(d,c[b-1],c[b],!0))});else if(a.isDatetimeAxis&&
"auto"===this.getMinorTickInterval())l=l.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),k,p,b.startOfWeek));else for(b=k+(c[0]-k)%d;b<=p&&b!==l[0];b+=d)l.push(b);0!==l.length&&a.trimTicks(l);return l},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,l,p,k,g,e,m,A;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(u(a.min)||u(a.max)?this.minRange=null:(this.series.forEach(function(a){e=a.xData;for(k=m=a.xIncrement?1:e.length-1;0<k;k--)if(g=e[k]-e[k-1],void 0===p||g<p)p=
g}),this.minRange=Math.min(5*p,this.dataMax-this.dataMin)));c-b<this.minRange&&(l=this.dataMax-this.dataMin>=this.minRange,A=this.minRange,d=(A-c+b)/2,d=[b-d,F(a.min,b-d)],l&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=B(d),c=[b+A,F(a.max,b+A)],l&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=h(c),c-b<A&&(d[0]=c-A,d[1]=F(a.min,c-A),b=B(d)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:this.series.forEach(function(f){var b=f.closestPointRange,
c=f.visible||!f.chart.options.chart.ignoreHiddenSeries;!f.noSharedTooltip&&u(b)&&c&&(a=u(a)?Math.min(a,b):b)});return a},nameToX:function(a){var f=k(this.categories),b=f?this.categories:this.names,c=a.options.x,d;a.series.requireSorting=!1;u(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():f?b.indexOf(a.name):F(b.keys[a.name],-1));-1===c?f||(d=b.length):d=c;void 0!==d&&(this.names[d]=a.name,this.names.keys[a.name]=d);return d},updateNames:function(){var a=this,b=this.names;0<b.length&&
(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(f){f.xIncrement=null;if(!f.points||f.isDirtyData)a.max=Math.max(a.max,f.xData.length-1),f.processData(),f.generatePoints();f.data.forEach(function(b,c){var r;b&&b.options&&void 0!==b.name&&(r=a.nameToX(b),void 0!==r&&r!==b.x&&(b.x=r,f.xData[c]=r))})}))},setAxisTranslation:function(a){var f=this,b=f.max-f.min,p=f.axisPointRange||0,k,g=0,e=0,A=f.linkedParent,m=!!f.categories,
x=f.transA,D=f.isXAxis;if(D||m||p)k=f.getClosest(),A?(g=A.minPointOffset,e=A.pointRangePadding):f.series.forEach(function(a){var b=m?1:D?F(a.options.pointRange,k,0):f.axisPointRange||0,r=a.options.pointPlacement;p=Math.max(p,b);if(!f.single||m)a=l.xrange&&a instanceof l.xrange?!D:D,g=Math.max(g,a&&c(r)?0:b/2),e=Math.max(e,a&&"on"===r?0:b)}),A=f.ordinalSlope&&k?f.ordinalSlope/k:1,f.minPointOffset=g*=A,f.pointRangePadding=e*=A,f.pointRange=Math.min(p,b),D&&(f.closestPointRange=k);a&&(f.oldTransA=x);
f.translationSlope=f.transA=x=f.staticScale||f.len/(b+e||1);f.transB=f.horiz?f.left:f.bottom;f.minPixelPadding=x*g;d(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(f){var c=this,l=c.chart,k=c.options,g=c.isLog,e=c.isDatetimeAxis,A=c.isXAxis,m=c.isLinked,x=k.maxPadding,D=k.minPadding,n,w=k.tickInterval,z=k.tickPixelInterval,h=c.categories,C=p(c.threshold)?c.threshold:null,I=c.softThreshold,t,v,B;e||h||m||this.getTickAmount();v=F(c.userMin,
k.min);B=F(c.userMax,k.max);m?(c.linkedParent=l[c.coll][k.linkedTo],n=c.linkedParent.getExtremes(),c.min=F(n.min,n.dataMin),c.max=F(n.max,n.dataMax),k.type!==c.linkedParent.options.type&&a.error(11,1,l)):(!I&&u(C)&&(c.dataMin>=C?(n=C,D=0):c.dataMax<=C&&(t=C,x=0)),c.min=F(v,n,c.dataMin),c.max=F(B,t,c.dataMax));g&&(c.positiveValuesOnly&&!f&&0>=Math.min(c.min,F(c.dataMin,c.min))&&a.error(10,1,l),c.min=q(c.log2lin(c.min),15),c.max=q(c.log2lin(c.max),15));c.range&&u(c.max)&&(c.userMin=c.min=v=Math.max(c.dataMin,
c.minFromRange()),c.userMax=B=c.max,c.range=null);d(c,"foundExtremes");c.beforePadding&&c.beforePadding();c.adjustForMinRange();!(h||c.axisPointRange||c.usePercentage||m)&&u(c.min)&&u(c.max)&&(l=c.max-c.min)&&(!u(v)&&D&&(c.min-=l*D),!u(B)&&x&&(c.max+=l*x));p(k.softMin)&&!p(c.userMin)&&k.softMin<c.min&&(c.min=v=k.softMin);p(k.softMax)&&!p(c.userMax)&&k.softMax>c.max&&(c.max=B=k.softMax);p(k.floor)&&(c.min=Math.min(Math.max(c.min,k.floor),Number.MAX_VALUE));p(k.ceiling)&&(c.max=Math.max(Math.min(c.max,
k.ceiling),F(c.userMax,-Number.MAX_VALUE)));I&&u(c.dataMin)&&(C=C||0,!u(v)&&c.min<C&&c.dataMin>=C?c.min=c.options.minRange?Math.min(C,c.max-c.minRange):C:!u(B)&&c.max>C&&c.dataMax<=C&&(c.max=c.options.minRange?Math.max(C,c.min+c.minRange):C));c.tickInterval=c.min===c.max||void 0===c.min||void 0===c.max?1:m&&!w&&z===c.linkedParent.options.tickPixelInterval?w=c.linkedParent.tickInterval:F(w,this.tickAmount?(c.max-c.min)/Math.max(this.tickAmount-1,1):void 0,h?1:(c.max-c.min)*z/Math.max(c.len,z));A&&
!f&&c.series.forEach(function(a){a.processData(c.min!==c.oldMin||c.max!==c.oldMax)});c.setAxisTranslation(!0);c.beforeSetTickPositions&&c.beforeSetTickPositions();c.postProcessTickInterval&&(c.tickInterval=c.postProcessTickInterval(c.tickInterval));c.pointRange&&!w&&(c.tickInterval=Math.max(c.pointRange,c.tickInterval));f=F(k.minTickInterval,c.isDatetimeAxis&&c.closestPointRange);!w&&c.tickInterval<f&&(c.tickInterval=f);e||g||w||(c.tickInterval=K(c.tickInterval,null,b(c.tickInterval),F(k.allowDecimals,
!(.5<c.tickInterval&&5>c.tickInterval&&1E3<c.max&&9999>c.max)),!!this.tickAmount));this.tickAmount||(c.tickInterval=c.unsquish());this.setTickPositions()},setTickPositions:function(){var f=this.options,c,b=f.tickPositions;c=this.getMinorTickInterval();var l=f.tickPositioner,k=f.startOnTick,p=f.endOnTick;this.tickmarkOffset=this.categories&&"between"===f.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===c&&this.tickInterval?this.tickInterval/5:c;this.single=this.min===this.max&&
u(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==f.allowDecimals);this.tickPositions=c=b&&b.slice();!c&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(c=[this.min,this.max],a.error(19,!1,this.chart)):c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,f.units),this.min,this.max,f.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,
this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()],c[0]===c[1]&&(c.length=1)),this.tickPositions=c,l&&(l=l.apply(this,[this.min,this.max])))&&(this.tickPositions=c=l);this.paddedTicks=c.slice(0);this.trimTicks(c,k,p);this.isLinked||(this.single&&2>c.length&&!this.categories&&(this.min-=.5,this.max+=.5),b||l||this.adjustTickAmount());d(this,"afterSetTickPositions")},trimTicks:function(a,c,b){var f=a[0],l=a[a.length-1],k=this.minPointOffset||
0;d(this,"trimTicks");if(!this.isLinked){if(c&&-Infinity!==f)this.min=f;else for(;this.min-k>a[0];)a.shift();if(b)this.max=l;else for(;this.max+k<a[a.length-1];)a.pop();0===a.length&&u(f)&&!this.options.tickPositions&&a.push((l+f)/2)}},alignToOthers:function(){var a={},c,b=this.options;!1===this.chart.options.chart.alignTicks||!1===b.alignTicks||!1===b.startOnTick||!1===b.endOnTick||this.isLog||this.chart[this.coll].forEach(function(f){var b=f.options,b=[f.horiz?b.left:b.top,b.width,b.height,b.pane].join();
f.series.length&&(a[b]?c=!0:a[b]=1)});return c},getTickAmount:function(){var a=this.options,c=a.tickAmount,b=a.tickPixelInterval;!u(a.tickInterval)&&this.len<b&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(c=2);!c&&this.alignToOthers()&&(c=Math.ceil(this.len/b)+1);4>c&&(this.finalTickAmt=c,c=5);this.tickAmount=c},adjustTickAmount:function(){var a=this.options,c=this.tickInterval,b=this.tickPositions,d=this.tickAmount,l=this.finalTickAmt,k=b&&b.length,p=F(this.threshold,this.softThreshold?
0:null),g;if(this.hasData()){if(k<d){for(g=this.min;b.length<d;)b.length%2||g===p?b.push(q(b[b.length-1]+c)):b.unshift(q(b[0]-c));this.transA*=(k-1)/(d-1);this.min=a.startOnTick?b[0]:Math.min(this.min,b[0]);this.max=a.endOnTick?b[b.length-1]:Math.max(this.max,b[b.length-1])}else k>d&&(this.tickInterval*=2,this.setTickPositions());if(u(l)){for(c=a=b.length;c--;)(3===l&&1===c%2||2>=l&&0<c&&c<a-1)&&b.splice(c,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(a){return a.isDirtyData||
a.isDirty||a.xAxis.isDirty}),c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();(c=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==
this.oldMax)):this.cleanStacks&&this.cleanStacks();d(this,"afterSetScale")},setExtremes:function(a,c,b,l,k){var f=this,p=f.chart;b=F(b,!0);f.series.forEach(function(a){delete a.kdTree});k=g(k,{min:a,max:c});d(f,"setExtremes",k,function(){f.userMin=a;f.userMax=c;f.eventArgs=k;b&&p.redraw(l)})},zoom:function(a,c){var f=this.dataMin,b=this.dataMax,l=this.options,k=Math.min(f,F(l.min,f)),p=Math.max(b,F(l.max,b));a={newMin:a,newMax:c};d(this,"zoom",a,function(a){var c=a.newMin,d=a.newMax;if(c!==this.min||
d!==this.max)this.allowZoomOutside||(u(f)&&(c<k&&(c=k),c>p&&(c=p)),u(b)&&(d<k&&(d=k),d>p&&(d=p))),this.displayBtn=void 0!==c||void 0!==d,this.setExtremes(c,d,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed},setAxisSize:function(){var f=this.chart,c=this.options,b=c.offsets||[0,0,0,0],d=this.horiz,l=this.width=Math.round(a.relativeLength(F(c.width,f.plotWidth-b[3]+b[1]),f.plotWidth)),k=this.height=Math.round(a.relativeLength(F(c.height,f.plotHeight-b[0]+b[2]),f.plotHeight)),p=this.top=Math.round(a.relativeLength(F(c.top,
f.plotTop+b[0]),f.plotHeight,f.plotTop)),c=this.left=Math.round(a.relativeLength(F(c.left,f.plotLeft+b[3]),f.plotWidth,f.plotLeft));this.bottom=f.chartHeight-k-p;this.right=f.chartWidth-l-c;this.len=Math.max(d?l:k,0);this.pos=d?c:p},getExtremes:function(){var a=this.isLog;return{min:a?q(this.lin2log(this.min)):this.min,max:a?q(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var f=this.isLog,c=f?this.lin2log(this.min):
this.min,f=f?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=c:Infinity===a?a=f:c>a?a=c:f<a&&(a=f);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){var f=(F(a,0)-90*this.side+720)%360;a={align:"center"};d(this,"autoLabelAlign",a,function(a){15<f&&165>f?a.align="right":195<f&&345>f&&(a.align="left")});return a.align},tickSize:function(a){var f=this.options,c=f[a+"Length"],b=F(f[a+"Width"],"tick"===a&&this.isXAxis&&!this.categories?1:0),l;b&&c&&("inside"===f[a+"Position"]&&(c=
-c),l=[c,b]);a={tickSize:l};d(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,b=this.tickInterval,d=b,l=this.len/(((this.categories?1:0)+this.max-this.min)/b),k,p=a.rotation,g=this.labelMetrics(),e,A=Number.MAX_VALUE,m,x=this.max-this.min,
D=function(a){var f=a/(l||1),f=1<f?Math.ceil(f):1;f*b>x&&Infinity!==a&&Infinity!==l&&(f=Math.ceil(x/b));return q(f*b)};c?(m=!a.staggerLines&&!a.step&&(u(p)?[p]:l<F(a.autoRotationLimit,80)&&a.autoRotation))&&m.forEach(function(a){var f;if(a===p||a&&-90<=a&&90>=a)e=D(Math.abs(g.h/Math.sin(v*a))),f=e+Math.abs(a/360),f<A&&(A=f,k=a,d=e)}):a.step||(d=D(g.h));this.autoRotation=m;this.labelRotation=F(k,p);return d},getSlotWidth:function(a){var f=this.chart,c=this.horiz,b=this.options.labels,d=Math.max(this.tickPositions.length-
(this.categories?0:1),1),l=f.margin[3];return a&&a.slotWidth||c&&2>(b.step||0)&&!b.rotation&&(this.staggerLines||1)*this.len/d||!c&&(b.style&&parseInt(b.style.width,10)||l&&l-f.spacing[3]||.33*f.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,l=this.ticks,k=this.options.labels,p=k&&k.style||{},g=this.horiz,e=this.getSlotWidth(),A=Math.max(1,Math.round(e-2*(k.padding||5))),m={},x=this.labelMetrics(),D=k.style&&k.style.textOverflow,n,w,z=0,C;c(k.rotation)||
(m.rotation=k.rotation||0);d.forEach(function(a){(a=l[a])&&a.label&&a.label.textPxLength>z&&(z=a.label.textPxLength)});this.maxLabelLength=z;if(this.autoRotation)z>A&&z>x.h?m.rotation=this.labelRotation:this.labelRotation=0;else if(e&&(n=A,!D))for(w="clip",A=d.length;!g&&A--;)if(C=d[A],C=l[C].label)C.styles&&"ellipsis"===C.styles.textOverflow?C.css({textOverflow:"clip"}):C.textPxLength>e&&C.css({width:e+"px"}),C.getBBox().height>this.len/d.length-(x.h-x.f)&&(C.specificTextOverflow="ellipsis");m.rotation&&
(n=z>.5*a.chartHeight?.33*a.chartHeight:z,D||(w="ellipsis"));if(this.labelAlign=k.align||this.autoLabelAlign(this.labelRotation))m.align=this.labelAlign;d.forEach(function(a){var f=(a=l[a])&&a.label,c=p.width,b={};f&&(f.attr(m),a.shortenLabel?a.shortenLabel():n&&!c&&"nowrap"!==p.whiteSpace&&(n<f.textPxLength||"SPAN"===f.element.tagName)?(b.width=n,D||(b.textOverflow=f.specificTextOverflow||w),f.css(b)):f.styles&&f.styles.width&&!b.width&&!c&&f.css({width:null}),delete f.specificTextOverflow,a.rotation=
m.rotation)},this);this.tickRotCorr=b.rotCorr(x.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&u(this.min)&&u(this.max)},addTitle:function(a){var f=this.chart.renderer,c=this.horiz,b=this.opposite,d=this.options.title,l,k=this.chart.styledMode;this.axisTitle||((l=d.textAlign)||(l=(c?{low:"left",middle:"center",high:"right"}:{low:b?"right":"left",middle:"center",high:b?"left":"right"})[d.align]),this.axisTitle=
f.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:l}).addClass("highcharts-axis-title"),k||this.axisTitle.css(x(d.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);k||d.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var f=this.ticks;f[a]?f[a].addLabel():f[a]=new z(this,a)},getOffset:function(){var a=this,c=a.chart,b=c.renderer,l=a.options,k=a.tickPositions,p=a.ticks,g=a.horiz,e=
a.side,A=c.inverted&&!a.isZAxis?[1,0,3,2][e]:e,m,x,D=0,n,z=0,C=l.title,h=l.labels,I=0,q=c.axisOffset,c=c.clipOffset,K=[-1,1,1,-1][e],t=l.className,v=a.axisParent;m=a.hasData();a.showAxis=x=m||F(l.showEmpty,!0);a.staggerLines=a.horiz&&h.staggerLines;a.axisGroup||(a.gridGroup=b.g("grid").attr({zIndex:l.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(v),a.axisGroup=b.g("axis").attr({zIndex:l.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(v),
a.labelGroup=b.g("axis-labels").attr({zIndex:h.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(t||"")).add(v));m||a.isLinked?(k.forEach(function(c,b){a.generateTick(c,b)}),a.renderUnsquish(),a.reserveSpaceDefault=0===e||2===e||{1:"left",3:"right"}[e]===a.labelAlign,F(h.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&k.forEach(function(a){I=Math.max(p[a].getLabelSize(),I)}),a.staggerLines&&(I*=a.staggerLines),a.labelOffset=I*(a.opposite?-1:1)):w(p,function(a,
c){a.destroy();delete p[c]});C&&C.text&&!1!==C.enabled&&(a.addTitle(x),x&&!1!==C.reserveSpace&&(a.titleOffset=D=a.axisTitle.getBBox()[g?"height":"width"],n=C.offset,z=u(n)?0:F(C.margin,g?5:10)));a.renderLine();a.offset=K*F(l.offset,q[e]?q[e]+(l.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};b=0===e?-a.labelMetrics().h:2===e?a.tickRotCorr.y:0;z=Math.abs(I)+z;I&&(z=z-b+K*(g?F(h.y,a.tickRotCorr.y+8*K):h.x));a.axisTitleMargin=F(n,z);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(p,
k));g=this.tickSize("tick");q[e]=Math.max(q[e],a.axisTitleMargin+D+K*a.offset,z,k&&k.length&&g?g[0]+K*a.offset:0);l=l.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);c[A]=Math.max(c[A],l);d(this,"afterGetOffset")},getLinePath:function(a){var c=this.chart,b=this.opposite,f=this.offset,d=this.horiz,l=this.left+(b?this.width:0)+f,f=c.chartHeight-this.bottom-(b?this.height:0)+f;b&&(a*=-1);return c.renderer.crispLine(["M",d?this.left:l,d?f:this.top,"L",d?c.chartWidth-this.right:l,d?f:c.chartHeight-this.bottom],
a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,c=this.left,b=this.top,l=this.len,k=this.options.title,p=a?c:b,e=this.opposite,g=this.offset,A=k.x||0,m=k.y||0,x=this.axisTitle,D=this.chart.renderer.fontMetrics(k.style&&k.style.fontSize,x),x=Math.max(x.getBBox(null,
0).height-D.h-1,0),l={low:p+(a?0:l),middle:p+l/2,high:p+(a?l:0)}[k.align],c=(a?b+this.height:c)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+[-x,x,D.f,-x][this.side],a={x:a?l+A:c+(e?this.width:0)+g+A,y:a?c+m-(e?this.height:0)+g:l+m};d(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var c=this.chart.hasRendered&&p(this.oldMin),b=this.minorTicks;b[a]||(b[a]=new z(this,a,"minor"));c&&b[a].isNew&&b[a].render(null,!0);b[a].render(null,!1,1)},renderTick:function(a,c){var b=
this.isLinked,f=this.ticks,d=this.chart.hasRendered&&p(this.oldMin);if(!b||a>=this.min&&a<=this.max)f[a]||(f[a]=new z(this,a)),d&&f[a].isNew&&f[a].render(c,!0,-1),f[a].render(c)},render:function(){var c=this,b=c.chart,l=c.options,k=c.isLog,e=c.isLinked,g=c.tickPositions,m=c.axisTitle,x=c.ticks,D=c.minorTicks,n=c.alternateBands,C=l.stackLabels,h=l.alternateGridColor,I=c.tickmarkOffset,q=c.axisLine,F=c.showAxis,K=H(b.renderer.globalAnimation),t,v;c.labelEdge.length=0;c.overlap=!1;[x,D,n].forEach(function(a){w(a,
function(a){a.isActive=!1})});if(c.hasData()||e)c.minorTickInterval&&!c.categories&&c.getMinorTickPositions().forEach(function(a){c.renderMinorTick(a)}),g.length&&(g.forEach(function(a,b){c.renderTick(a,b)}),I&&(0===c.min||c.single)&&(x[-1]||(x[-1]=new z(c,-1,null,!0)),x[-1].render(-1))),h&&g.forEach(function(f,l){v=void 0!==g[l+1]?g[l+1]+I:c.max-I;0===l%2&&f<c.max&&v<=c.max+(b.polar?-I:I)&&(n[f]||(n[f]=new a.PlotLineOrBand(c)),t=f+I,n[f].options={from:k?c.lin2log(t):t,to:k?c.lin2log(v):v,color:h},
n[f].render(),n[f].isActive=!0)}),c._addedPlotLB||((l.plotLines||[]).concat(l.plotBands||[]).forEach(function(a){c.addPlotBandOrLine(a)}),c._addedPlotLB=!0);[x,D,n].forEach(function(a){var c,f=[],l=K.duration;w(a,function(a,c){a.isActive||(a.render(c,!1,0),a.isActive=!1,f.push(c))});A(function(){for(c=f.length;c--;)a[f[c]]&&!a[f[c]].isActive&&(a[f[c]].destroy(),delete a[f[c]])},a!==n&&b.hasRendered&&l?l:0)});q&&(q[q.isPlaced?"animate":"attr"]({d:this.getLinePath(q.strokeWidth())}),q.isPlaced=!0,q[F?
"show":"hide"](!0));m&&F&&(l=c.getTitlePosition(),p(l.y)?(m[m.isNew?"attr":"animate"](l),m.isNew=!1):(m.attr("y",-9999),m.isNew=!0));C&&C.enabled&&c.renderStackTotals();c.isDirty=!1;d(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,b=c.stacks,f=c.plotLinesAndBands,l;d(this,"destroy",
{keepEvents:a});a||C(c);w(b,function(a,c){n(a);b[c]=null});[c.ticks,c.minorTicks,c.alternateBands].forEach(function(a){n(a)});if(f)for(a=f.length;a--;)f[a].destroy();"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){c[a]&&(c[a]=c[a].destroy())});for(l in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[l]=c.plotLinesAndBandsGroups[l].destroy();w(c,function(a,b){-1===c.keepProps.indexOf(b)&&delete c[b]})},drawCrosshair:function(a,
c){var b,f=this.crosshair,l=F(f.snap,!0),k,p=this.cross;d(this,"drawCrosshair",{e:a,point:c});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(u(c)||!l)){l?u(c)&&(k=F(c.crosshairPos,this.isXAxis?c.plotX:this.len-c.plotY)):k=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);u(k)&&(b=this.getPlotLinePath({value:c&&(this.isXAxis?c.x:F(c.stackY,c.y)),translatedValue:k})||null);if(!u(b)){this.hideCrosshair();return}l=this.categories&&!this.isRadial;p||(this.cross=p=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(l?"category ":"thin ")+f.className).attr({zIndex:F(f.zIndex,2)}).add(),this.chart.styledMode||(p.attr({stroke:f.color||(l?e("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":F(f.width,1)}).css({"pointer-events":"none"}),f.dashStyle&&p.attr({dashstyle:f.dashStyle})));p.show().attr({d:b});l&&!f.width&&p.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();d(this,"afterDrawCrosshair",{e:a,point:c})},hideCrosshair:function(){this.cross&&this.cross.hide();d(this,"afterHideCrosshair")}});
return a.Axis=I});J(G,"parts/DateTimeAxis.js",[G["parts/Globals.js"]],function(a){var E=a.Axis,H=a.getMagnitude,B=a.normalizeTickInterval,h=a.timeUnits;E.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};E.prototype.normalizeTimeTickInterval=function(a,q){var e=q||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],
["year",null]];q=e[e.length-1];var u=h[q[0]],v=q[1],n;for(n=0;n<e.length&&!(q=e[n],u=h[q[0]],v=q[1],e[n+1]&&a<=(u*v[v.length-1]+h[e[n+1][0]])/2);n++);u===h.year&&a<5*u&&(v=[1,2,5]);a=B(a/u,v,"year"===q[0]?Math.max(H(a/u),1):1);return{unitRange:u,count:a,unitName:q[0]}}});J(G,"parts/LogarithmicAxis.js",[G["parts/Globals.js"]],function(a){var E=a.Axis,H=a.getMagnitude,B=a.normalizeTickInterval,h=a.pick;E.prototype.getLogTickPositions=function(a,q,t,u){var e=this.options,n=this.len,g=[];u||(this._minorAutoInterval=
null);if(.5<=a)a=Math.round(a),g=this.getLinearTickPositions(a,q,t);else if(.08<=a)for(var n=Math.floor(q),d,m,b,k,p,e=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];n<t+1&&!p;n++)for(m=e.length,d=0;d<m&&!p;d++)b=this.log2lin(this.lin2log(n)*e[d]),b>q&&(!u||k<=t)&&void 0!==k&&g.push(k),k>t&&(p=!0),k=b;else q=this.lin2log(q),t=this.lin2log(t),a=u?this.getMinorTickInterval():e.tickInterval,a=h("auto"===a?null:a,this._minorAutoInterval,e.tickPixelInterval/(u?5:1)*(t-q)/((u?n/this.tickPositions.length:
n)||1)),a=B(a,null,H(a)),g=this.getLinearTickPositions(a,q,t).map(this.log2lin),u||(this._minorAutoInterval=a/5);u||(this.tickInterval=a);return g};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}});J(G,"parts/PlotLineOrBand.js",[G["parts/Globals.js"],G["parts/Axis.js"]],function(a,E){var H=a.arrayMax,B=a.arrayMin,h=a.defined,e=a.destroyObjectProperties,q=a.erase,t=a.merge,u=a.pick;a.PlotLineOrBand=function(a,e){this.axis=a;e&&(this.options=
e,this.id=e.id)};a.PlotLineOrBand.prototype={render:function(){a.fireEvent(this,"render");var e=this,n=e.axis,g=n.horiz,d=e.options,m=d.label,b=e.label,k=d.to,p=d.from,c=d.value,x=h(p)&&h(k),q=h(c),w=e.svgElem,F=!w,C=[],l=d.color,D=u(d.zIndex,0),A=d.events,C={"class":"highcharts-plot-"+(x?"band ":"line ")+(d.className||"")},z={},I=n.chart.renderer,f=x?"bands":"lines";n.isLog&&(p=n.log2lin(p),k=n.log2lin(k),c=n.log2lin(c));n.chart.styledMode||(q?(C.stroke=l,C["stroke-width"]=d.width,d.dashStyle&&(C.dashstyle=
d.dashStyle)):x&&(l&&(C.fill=l),d.borderWidth&&(C.stroke=d.borderColor,C["stroke-width"]=d.borderWidth)));z.zIndex=D;f+="-"+D;(l=n.plotLinesAndBandsGroups[f])||(n.plotLinesAndBandsGroups[f]=l=I.g("plot-"+f).attr(z).add());F&&(e.svgElem=w=I.path().attr(C).add(l));if(q)C=n.getPlotLinePath({value:c,lineWidth:w.strokeWidth(),acrossPanes:d.acrossPanes});else if(x)C=n.getPlotBandPath(p,k,d);else return;(F||!w.d)&&C&&C.length?(w.attr({d:C}),A&&a.objectEach(A,function(a,c){w.on(c,function(a){A[c].apply(e,
[a])})})):w&&(C?(w.show(!0),w.animate({d:C})):w.d&&(w.hide(),b&&(e.label=b=b.destroy())));m&&h(m.text)&&C&&C.length&&0<n.width&&0<n.height&&!C.isFlat?(m=t({align:g&&x&&"center",x:g?!x&&4:10,verticalAlign:!g&&x&&"middle",y:g?x?16:10:x?6:-4,rotation:g&&!x&&90},m),this.renderLabel(m,C,x,D)):b&&b.hide();return e},renderLabel:function(a,e,g,d){var m=this.label,b=this.axis.chart.renderer;m||(m={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(a.className||
"")},m.zIndex=d,this.label=m=b.text(a.text,0,0,a.useHTML).attr(m).add(),this.axis.chart.styledMode||m.css(a.style));d=e.xBounds||[e[1],e[4],g?e[6]:e[1]];e=e.yBounds||[e[2],e[5],g?e[7]:e[2]];g=B(d);b=B(e);m.align(a,!1,{x:g,y:b,width:H(d)-g,height:H(e)-b});m.show(!0)},destroy:function(){q(this.axis.plotLinesAndBands,this);delete this.axis;e(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,e){var g=this.getPlotLinePath({value:e,force:!0,acrossPanes:this.options.acrossPanes}),d=this.getPlotLinePath({value:a,
force:!0,acrossPanes:this.options.acrossPanes}),m=[],b=this.horiz,k=1,p;a=a<this.min&&e<this.min||a>this.max&&e>this.max;if(d&&g)for(a&&(p=d.toString()===g.toString(),k=0),a=0;a<d.length;a+=6)b&&g[a+1]===d[a+1]?(g[a+1]+=k,g[a+4]+=k):b||g[a+2]!==d[a+2]||(g[a+2]+=k,g[a+5]+=k),m.push("M",d[a+1],d[a+2],"L",d[a+4],d[a+5],g[a+4],g[a+5],g[a+1],g[a+2],"z"),m.isFlat=p;return m},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},
addPlotBandOrLine:function(e,n){var g=(new a.PlotLineOrBand(this,e)).render(),d=this.userOptions;g&&(n&&(d[n]=d[n]||[],d[n].push(e)),this.plotLinesAndBands.push(g));return g},removePlotBandOrLine:function(a){for(var e=this.plotLinesAndBands,g=this.options,d=this.userOptions,m=e.length;m--;)e[m].id===a&&e[m].destroy();[g.plotLines||[],d.plotLines||[],g.plotBands||[],d.plotBands||[]].forEach(function(b){for(m=b.length;m--;)b[m].id===a&&q(b,b[m])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},
removePlotLine:function(a){this.removePlotBandOrLine(a)}})});J(G,"parts/Tooltip.js",[G["parts/Globals.js"]],function(a){var E=a.doc,H=a.extend,B=a.format,h=a.isNumber,e=a.merge,q=a.pick,t=a.splat,u=a.syncTimeout,v=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split;this.outside=q(e.outside,!(!a.scrollablePixelsX&&
!a.scrollablePixelsY))&&!this.split},cleanSplit:function(a){this.chart.series.forEach(function(e){var d=e&&e.tt;d&&(!d.isActive||a?e.tt=d.destroy():d.isActive=!1)})},applyFilter:function(){var a=this.chart;a.renderer.definition({tagName:"filter",id:"drop-shadow-"+a.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},
{tagName:"feMergeNode","in":"SourceGraphic"}]}]});a.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+a.index+"{filter:url(#drop-shadow-"+a.index+")}"})},getLabel:function(){var e=this,g=this.chart.renderer,d=this.chart.styledMode,m=this.options,b,k;this.label||(this.outside&&(this.container=b=a.doc.createElement("div"),b.className="highcharts-tooltip-container",a.css(b,{position:"absolute",top:"1px",pointerEvents:m.style&&m.style.pointerEvents,zIndex:3}),a.doc.body.appendChild(b),
this.renderer=g=new a.Renderer(b,0,0)),this.split?this.label=g.g("tooltip"):(this.label=g.label("",0,0,m.shape||"callout",null,null,m.useHTML,null,"tooltip").attr({padding:m.padding,r:m.borderRadius}),d||this.label.attr({fill:m.backgroundColor,"stroke-width":m.borderWidth}).css(m.style).shadow(m.shadow)),d&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index)),this.outside&&(k={x:this.label.xSetter,y:this.label.ySetter},this.label.xSetter=function(a,c){k[c].call(this.label,
e.distance);b.style.left=a+"px"},this.label.ySetter=function(a,c){k[c].call(this.label,e.distance);b.style.top=a+"px"}),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();e(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,e(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),a.discardElement(this.container));
a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(e,g,d,m){var b=this,k=b.now,p=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(e-k.x)||1<Math.abs(g-k.y)),c=b.followPointer||1<b.len;H(k,{x:p?(2*k.x+e)/3:e,y:p?(k.y+g)/2:g,anchorX:c?void 0:p?(2*k.anchorX+d)/3:d,anchorY:c?void 0:p?(k.anchorY+m)/2:m});b.getLabel().attr(k);p&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(e,g,d,m)},32))},hide:function(e){var g=this;a.clearTimeout(this.hideTimer);
e=q(e,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){g.getLabel()[e?"fadeOut":"hide"]();g.isHidden=!0},e))},getAnchor:function(a,e){var d=this.chart,g=d.pointer,b=d.inverted,k=d.plotTop,p=d.plotLeft,c=0,x=0,h,w;a=t(a);this.followPointer&&e?(void 0===e.chartX&&(e=g.normalize(e)),a=[e.chartX-d.plotLeft,e.chartY-k]):a[0].tooltipPos?a=a[0].tooltipPos:(a.forEach(function(a){h=a.series.yAxis;w=a.series.xAxis;c+=a.plotX+(!b&&w?w.left-p:0);x+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+
(!b&&h?h.top-k:0)}),c/=a.length,x/=a.length,a=[b?d.plotWidth-x:c,this.shared&&!b&&1<a.length&&e?e.chartY-k:b?d.plotHeight-c:x]);return a.map(Math.round)},getPosition:function(a,e,d){var g=this.chart,b=this.distance,k={},p=g.inverted&&d.h||0,c,x=this.outside,h=x?E.documentElement.clientWidth-2*b:g.chartWidth,w=x?Math.max(E.body.scrollHeight,E.documentElement.scrollHeight,E.body.offsetHeight,E.documentElement.offsetHeight,E.documentElement.clientHeight):g.chartHeight,n=g.pointer.chartPosition,C=["y",
w,e,(x?n.top-b:0)+d.plotY+g.plotTop,x?0:g.plotTop,x?w:g.plotTop+g.plotHeight],l=["x",h,a,(x?n.left-b:0)+d.plotX+g.plotLeft,x?0:g.plotLeft,x?h:g.plotLeft+g.plotWidth],D=!this.followPointer&&q(d.ttBelow,!g.inverted===!!d.negative),A=function(a,c,f,l,d,e){var g=f<l-b,A=l+b+f<c,m=l-b-f;l+=b;if(D&&A)k[a]=l;else if(!D&&g)k[a]=m;else if(g)k[a]=Math.min(e-f,0>m-p?m:m-p);else if(A)k[a]=Math.max(d,l+p+f>c?l:l+p);else return!1},z=function(a,c,f,l){var d;l<b||l>c-b?d=!1:k[a]=l<f/2?1:l>c-f/2?c-f-2:l-f/2;return d},
I=function(a){var b=C;C=l;l=b;c=a},f=function(){!1!==A.apply(0,C)?!1!==z.apply(0,l)||c||(I(!0),f()):c?k.x=k.y=0:(I(!0),f())};(g.inverted||1<this.len)&&I();f();return k},defaultFormatter:function(a){var e=this.points||t(this),d;d=[a.tooltipFooterHeaderFormatter(e[0])];d=d.concat(a.bodyFormatter(e));d.push(a.tooltipFooterHeaderFormatter(e[0],!0));return d},refresh:function(e,g){var d=this.chart,m=this.options,b,k=e,p,c={},x,h=[];x=m.formatter||this.defaultFormatter;var c=this.shared,w=d.styledMode,
n=[];m.enabled&&(a.clearTimeout(this.hideTimer),this.followPointer=t(k)[0].series.tooltipOptions.followPointer,p=this.getAnchor(k,g),g=p[0],b=p[1],!c||k.series&&k.series.noSharedTooltip?c=k.getLabelConfig():(n=d.pointer.getActiveSeries(k),d.series.forEach(function(a){(a.options.inactiveOtherPoints||-1===n.indexOf(a))&&a.setState("inactive",!0)}),k.forEach(function(a){a.setState("hover");h.push(a.getLabelConfig())}),c={x:k[0].category,y:k[0].y},c.points=h,k=k[0]),this.len=h.length,x=x.call(c,this),
c=k.series,this.distance=q(c.tooltipOptions.distance,16),!1===x?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(x,t(e)):(m.style.width&&!w||d.css({width:this.chart.spacingBox.width}),d.attr({text:x&&x.join?x.join(""):x}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+q(k.colorIndex,c.colorIndex)),w||d.attr({stroke:m.borderColor||k.color||c.color||"#666666"}),this.updatePosition({plotX:g,plotY:b,negative:k.negative,ttBelow:k.ttBelow,
h:p[2]||0})),this.isHidden=!1),a.fireEvent(this,"refresh"))},renderSplit:function(e,g){var d=this,m=[],b=this.chart,k=b.renderer,p=!0,c=this.options,x=0,h,w=this.getLabel(),n=b.plotTop;a.isString(e)&&(e=[!1,e]);e.slice(0,g.length+1).forEach(function(a,l){if(!1!==a&&""!==a){l=g[l-1]||{isHeader:!0,plotX:g[0].plotX,plotY:b.plotHeight};var e=l.series||d,A=e.tt,z=l.series||{},C="highcharts-color-"+q(l.colorIndex,z.colorIndex,"none");A||(A={padding:c.padding,r:c.borderRadius},b.styledMode||(A.fill=c.backgroundColor,
A["stroke-width"]=c.borderWidth),e.tt=A=k.label(null,null,null,(l.isHeader?c.headerShape:c.shape)||"callout",null,null,c.useHTML).addClass("highcharts-tooltip-box "+C).attr(A).add(w));A.isActive=!0;A.attr({text:a});b.styledMode||A.css(c.style).shadow(c.shadow).attr({stroke:c.borderColor||l.color||z.color||"#333333"});a=A.getBBox();z=a.width+A.strokeWidth();l.isHeader?(x=a.height,b.xAxis[0].opposite&&(h=!0,n-=x),z=Math.max(0,Math.min(l.plotX+b.plotLeft-z/2,b.chartWidth+(b.scrollablePixelsX?b.scrollablePixelsX-
b.marginRight:0)-z))):z=l.plotX+b.plotLeft-q(c.distance,16)-z;0>z&&(p=!1);a=(l.series&&l.series.yAxis&&l.series.yAxis.pos)+(l.plotY||0);a-=n;l.isHeader&&(a=h?-x:b.plotHeight+x);m.push({target:a,rank:l.isHeader?1:0,size:e.tt.getBBox().height+1,point:l,x:z,tt:A})}});this.cleanSplit();c.positioner&&m.forEach(function(a){var b=c.positioner.call(d,a.tt.getBBox().width,a.size,a.point);a.x=b.x;a.align=0;a.target=b.y;a.rank=q(b.rank,a.rank)});a.distribute(m,b.plotHeight+x);m.forEach(function(a){var l=a.point,
k=l.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:p||l.isHeader||c.positioner?a.x:l.plotX+b.plotLeft+d.distance,y:a.pos+n,anchorX:l.isHeader?l.plotX+b.plotLeft:l.plotX+k.xAxis.pos,anchorY:l.isHeader?b.plotTop+b.plotHeight/2:l.plotY+k.yAxis.pos})})},updatePosition:function(a){var e=this.chart,d=this.getLabel(),m=(this.options.positioner||this.getPosition).call(this,d.width,d.height,a),b=a.plotX+e.plotLeft;a=a.plotY+e.plotTop;var k;this.outside&&(k=(this.options.borderWidth||0)+2*
this.distance,this.renderer.setSize(d.width+k,d.height+k,!1),b+=e.pointer.chartPosition.left-m.x,a+=e.pointer.chartPosition.top-m.y);this.move(Math.round(m.x),Math.round(m.y||0),b,a)},getDateFormat:function(a,e,d,m){var b=this.chart.time,k=b.dateFormat("%m-%d %H:%M:%S.%L",e),p,c,g={millisecond:15,second:12,minute:9,hour:6,day:3},h="millisecond";for(c in v){if(a===v.week&&+b.dateFormat("%w",e)===d&&"00:00:00.000"===k.substr(6)){c="week";break}if(v[c]>a){c=h;break}if(g[c]&&k.substr(g[c])!=="01-01 00:00:00.000".substr(g[c]))break;
"week"!==c&&(h=c)}c&&(p=b.resolveDTLFormat(m[c]).main);return p},getXDateFormat:function(a,e,d){e=e.dateTimeLabelFormats;var g=d&&d.closestPointRange;return(g?this.getDateFormat(g,a.x,d.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(e,g){var d=g?"footer":"header",m=e.series,b=m.tooltipOptions,k=b.xDateFormat,p=m.xAxis,c=p&&"datetime"===p.options.type&&h(e.key),x=b[d+"Format"];g={isFooter:g,labelConfig:e};a.fireEvent(this,"headerFormatter",g,function(a){c&&!k&&(k=this.getXDateFormat(e,
b,p));c&&k&&(e.point&&e.point.tooltipDateKeys||["key"]).forEach(function(a){x=x.replace("{point."+a+"}","{point."+a+":"+k+"}")});m.chart.styledMode&&(x=this.styledModeFormat(x));a.text=B(x,{point:e,series:m},this.chart.time)});return g.text},bodyFormatter:function(a){return a.map(function(a){var d=a.series.tooltipOptions;return(d[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,d[(a.point.formatPrefix||"point")+"Format"]||"")})},styledModeFormat:function(a){return a.replace('style\x3d"font-size: 10px"',
'class\x3d"highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class\x3d"highcharts-color-{$1.colorIndex}"')}}});J(G,"parts/Pointer.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.attr,B=a.charts,h=a.color,e=a.css,q=a.defined,t=a.extend,u=a.find,v=a.fireEvent,n=a.isNumber,g=a.isObject,d=a.offset,m=a.pick,b=a.splat,k=a.Tooltip;a.Pointer=function(a,c){this.init(a,c)};a.Pointer.prototype={init:function(a,c){this.options=c;this.chart=a;this.runChartClick=c.chart.events&&
!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};k&&(a.tooltip=new k(a,c.tooltip),this.followTouchMove=m(c.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var c=this.chart,b=c.options.chart,d=b.zoomType||"",c=c.inverted;/touch/.test(a.type)&&(d=m(b.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!c||d&&c;this.zoomVert=d&&!c||a&&c;this.hasZoom=a||d},normalize:function(a,c){var b;b=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:
a;c||(this.chartPosition=c=d(this.chart.container));return t(a,{chartX:Math.round(b.pageX-c.left),chartY:Math.round(b.pageY-c.top)})},getCoordinates:function(a){var c={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(b){c[b.isXAxis?"xAxis":"yAxis"].push({axis:b,value:b.toValue(a[b.horiz?"chartX":"chartY"])})});return c},findNearestKDPoint:function(a,c,b){var d;a.forEach(function(a){var k=!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(b,k);if((k=g(a,!0))&&!(k=
!g(d,!0)))var k=d.distX-a.distX,e=d.dist-a.dist,l=(a.series.group&&a.series.group.zIndex)-(d.series.group&&d.series.group.zIndex),k=0<(0!==k&&c?k:0!==e?e:0!==l?l:d.series.index>a.series.index?-1:1);k&&(d=a)});return d},getPointFromEvent:function(a){a=a.target;for(var c;a&&!c;)c=a.point,a=a.parentNode;return c},getChartCoordinatesFromPoint:function(a,c){var b=a.series,d=b.xAxis,b=b.yAxis,k=m(a.clientX,a.plotX),e=a.shapeArgs;if(d&&b)return c?{chartX:d.len+d.pos-k,chartY:b.len+b.pos-a.plotY}:{chartX:k+
d.pos,chartY:a.plotY+b.pos};if(e&&e.x&&e.y)return{chartX:e.x,chartY:e.y}},getHoverData:function(a,c,b,d,k,e){var p,l=[];d=!(!d||!a);var x=c&&!c.stickyTracking?[c]:b.filter(function(a){return a.visible&&!(!k&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(p=d?a:this.findNearestKDPoint(x,k,e))&&p.series;p&&(k&&!c.noSharedTooltip?(x=b.filter(function(a){return a.visible&&!(!k&&a.directTouch)&&m(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),x.forEach(function(a){var c=
u(a.points,function(a){return a.x===p.x&&!a.isNull});g(c)&&(a.chart.isBoosting&&(c=a.getPoint(c)),l.push(c))})):l.push(p));return{hoverPoint:p,hoverSeries:c,hoverPoints:l}},runPointActions:function(b,c){var d=this.chart,k=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,e=k?k.shared:!1,p=c||d.hoverPoint,g=p&&p.series||d.hoverSeries,g=this.getHoverData(p,g,d.series,"touchmove"!==b.type&&(!!c||g&&g.directTouch&&this.isDirectTouch),e,b),l=[],D,p=g.hoverPoint;D=g.hoverPoints;c=(g=g.hoverSeries)&&
g.tooltipOptions.followPointer;e=e&&g&&!g.noSharedTooltip;if(p&&(p!==d.hoverPoint||k&&k.isHidden)){(d.hoverPoints||[]).forEach(function(a){-1===D.indexOf(a)&&a.setState()});if(d.hoverSeries!==g)g.onMouseOver();l=this.getActiveSeries(D);d.series.forEach(function(a){(a.options.inactiveOtherPoints||-1===l.indexOf(a))&&a.setState("inactive",!0)});(D||[]).forEach(function(a){a.setState("hover")});d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!p.series)return;p.firePointEvent("mouseOver");d.hoverPoints=
D;d.hoverPoint=p;k&&k.refresh(e?D:p,b)}else c&&k&&!k.isHidden&&(p=k.getAnchor([{}],b),k.updatePosition({plotX:p[0],plotY:p[1]}));this.unDocMouseMove||(this.unDocMouseMove=E(d.container.ownerDocument,"mousemove",function(c){var b=B[a.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(c)}));d.axes.forEach(function(c){var d=m(c.crosshair.snap,!0),l=d?a.find(D,function(a){return a.series[c.coll]===c}):void 0;l||!d?c.drawCrosshair(b,l):c.hideCrosshair()})},getActiveSeries:function(a){var c=[],b;(a||[]).forEach(function(a){b=
a.series;c.push(b);b.linkedParent&&c.push(b.linkedParent);b.linkedSeries&&(c=c.concat(b.linkedSeries));b.navigatorSeries&&c.push(b.navigatorSeries)});return c},reset:function(a,c){var d=this.chart,k=d.hoverSeries,e=d.hoverPoint,p=d.hoverPoints,g=d.tooltip,l=g&&g.shared?p:e;a&&l&&b(l).forEach(function(c){c.series.isCartesian&&void 0===c.plotX&&(a=!1)});if(a)g&&l&&b(l).length&&(g.refresh(l),g.shared&&p?p.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,
a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):e&&(e.setState(e.state,!0),d.axes.forEach(function(a){a.crosshair&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();p&&p.forEach(function(a){a.setState()});if(k)k.onMouseOut();g&&g.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());d.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,d;b.series.forEach(function(k){d=a||k.getPlotBox();
k.xAxis&&k.xAxis.zoomEnabled&&k.group&&(k.group.attr(d),k.markerGroup&&(k.markerGroup.attr(d),k.markerGroup.clip(c?b.clipRect:null)),k.dataLabelsGroup&&k.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var c=this.chart;c.mouseIsDown=a.type;c.cancelClick=!1;c.mouseDownX=this.mouseDownX=a.chartX;c.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var c=this.chart,b=c.options.chart,d=a.chartX,k=a.chartY,e=this.zoomHor,p=this.zoomVert,l=c.plotLeft,g=c.plotTop,m=c.plotWidth,
z=c.plotHeight,n,f=this.selectionMarker,r=this.mouseDownX,q=this.mouseDownY,t=b.panKey&&a[b.panKey+"Key"];f&&f.touch||(d<l?d=l:d>l+m&&(d=l+m),k<g?k=g:k>g+z&&(k=g+z),this.hasDragged=Math.sqrt(Math.pow(r-d,2)+Math.pow(q-k,2)),10<this.hasDragged&&(n=c.isInsidePlot(r-l,q-g),c.hasCartesianSeries&&(this.zoomX||this.zoomY)&&n&&!t&&!f&&(this.selectionMarker=f=c.renderer.rect(l,g,e?1:m,p?1:z,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),c.styledMode||f.attr({fill:b.selectionMarkerFill||h("#335cad").setOpacity(.25).get()})),
f&&e&&(d-=r,f.attr({width:Math.abs(d),x:(0<d?0:d)+r})),f&&p&&(d=k-q,f.attr({height:Math.abs(d),y:(0<d?0:d)+q})),n&&!f&&b.panning&&c.pan(a,b.panning)))},drop:function(a){var c=this,b=this.chart,d=this.hasPinched;if(this.selectionMarker){var k={originalEvent:a,xAxis:[],yAxis:[]},p=this.selectionMarker,g=p.attr?p.attr("x"):p.x,l=p.attr?p.attr("y"):p.y,m=p.attr?p.attr("width"):p.width,A=p.attr?p.attr("height"):p.height,z;if(this.hasDragged||d)b.axes.forEach(function(b){if(b.zoomEnabled&&q(b.min)&&(d||
c[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])){var f=b.horiz,e="touchend"===a.type?b.minPixelPadding:0,p=b.toValue((f?g:l)+e),f=b.toValue((f?g+m:l+A)-e);k[b.coll].push({axis:b,min:Math.min(p,f),max:Math.max(p,f)});z=!0}}),z&&v(b,"selection",k,function(a){b.zoom(t(a,d?{animation:!1}:null))});n(b.index)&&(this.selectionMarker=this.selectionMarker.destroy());d&&this.scaleGroups()}b&&n(b.index)&&(e(b.container,{cursor:b._cursor}),b.cancelClick=10<this.hasDragged,b.mouseIsDown=this.hasDragged=this.hasPinched=
!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var c=this.chart,b=this.chartPosition;a=this.normalize(a,b);!b||this.inClass(a.target,"highcharts-tracker")||c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=
B[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;q(a.hoverChartIndex)&&B[a.hoverChartIndex]&&B[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.preventDefault||(b.returnValue=!1);"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},
inClass:function(a,c){for(var b;a;){if(b=H(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var c=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!c||!a||c.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+c.index)&&this.inClass(a,"highcharts-tracker")))c.onMouseOut()},onContainerClick:function(a){var c=this.chart,b=c.hoverPoint,d=c.plotLeft,
k=c.plotTop;a=this.normalize(a);c.cancelClick||(b&&this.inClass(a.target,"highcharts-tracker")?(v(b.series,"click",t(a,{point:b})),c.hoverPoint&&b.firePointEvent("click",a)):(t(a,this.getCoordinates(a)),c.isInsidePlot(a.chartX-d,a.chartY-k)&&v(c,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,d=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=
E(c,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=E(d,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=E(d,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=
a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,d){b[d]=null})}}});J(G,"parts/TouchPointer.js",[G["parts/Globals.js"]],function(a){var E=a.charts,H=a.extend,B=a.noop,h=a.pick;H(a.Pointer.prototype,{pinchTranslate:function(a,h,t,u,v,n){this.zoomHor&&this.pinchTranslateDirection(!0,a,h,t,u,v,n);this.zoomVert&&this.pinchTranslateDirection(!1,a,h,t,u,v,n)},pinchTranslateDirection:function(a,
h,t,u,v,n,g,d){var e=this.chart,b=a?"x":"y",k=a?"X":"Y",p="chart"+k,c=a?"width":"height",x=e["plot"+(a?"Left":"Top")],q,w,F=d||1,C=e.inverted,l=e.bounds[a?"h":"v"],D=1===h.length,A=h[0][p],z=t[0][p],I=!D&&h[1][p],f=!D&&t[1][p],r;t=function(){!D&&20<Math.abs(A-I)&&(F=d||Math.abs(z-f)/Math.abs(A-I));w=(x-z)/F+A;q=e["plot"+(a?"Width":"Height")]/F};t();h=w;h<l.min?(h=l.min,r=!0):h+q>l.max&&(h=l.max-q,r=!0);r?(z-=.8*(z-g[b][0]),D||(f-=.8*(f-g[b][1])),t()):g[b]=[z,f];C||(n[b]=w-x,n[c]=q);n=C?1/F:F;v[c]=
q;v[b]=h;u[C?a?"scaleY":"scaleX":"scale"+k]=F;u["translate"+k]=n*x+(z-n*A)},pinch:function(a){var e=this,t=e.chart,u=e.pinchDown,v=a.touches,n=v.length,g=e.lastValidTouch,d=e.hasZoom,m=e.selectionMarker,b={},k=1===n&&(e.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||e.runChartClick),p={};1<n&&(e.initiated=!0);d&&e.initiated&&!k&&a.preventDefault();[].map.call(v,function(a){return e.normalize(a)});"touchstart"===a.type?([].forEach.call(v,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),
g.x=[u[0].chartX,u[1]&&u[1].chartX],g.y=[u[0].chartY,u[1]&&u[1].chartY],t.axes.forEach(function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(Math.min(h(a.options.min,a.dataMin),a.dataMin)),k=a.toPixels(Math.max(h(a.options.max,a.dataMax),a.dataMax)),e=Math.max(d,k);b.min=Math.min(a.pos,Math.min(d,k)-c);b.max=Math.max(a.pos+a.len,e+c)}}),e.res=!0):e.followTouchMove&&1===n?this.runPointActions(e.normalize(a)):u.length&&(m||(e.selectionMarker=m=H({destroy:B,touch:!0},
t.plotBox)),e.pinchTranslate(u,v,b,m,p,g),e.hasPinched=d,e.scaleGroups(b,p),e.res&&(e.res=!1,this.reset(!1,0)))},touch:function(e,q){var t=this.chart,u,v;if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===e.touches.length?(e=this.normalize(e),(v=t.isInsidePlot(e.chartX-t.plotLeft,e.chartY-t.plotTop))&&!t.openMenu?(q&&this.runPointActions(e),"touchmove"===e.type&&(q=this.pinchDown,u=q[0]?4<=Math.sqrt(Math.pow(q[0].chartX-e.chartX,2)+Math.pow(q[0].chartY-
e.chartY,2)):!1),h(u,!0)&&this.pinch(e)):q&&this.reset()):2===e.touches.length&&this.pinch(e)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(e){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(e)}})});J(G,"parts/MSPointer.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.charts,B=a.css,h=a.doc,e=a.extend,q=a.noop,t=a.Pointer,u=a.removeEvent,v=a.win,n=a.wrap;if(!a.hasTouch&&(v.PointerEvent||
v.MSPointerEvent)){var g={},d=!!v.PointerEvent,m=function(){var b=[];b.item=function(a){return this[a]};a.objectEach(g,function(a){b.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return b},b=function(b,d,c,e){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!H[a.hoverChartIndex]||(e(b),e=H[a.hoverChartIndex].pointer,e[d]({type:c,target:b.currentTarget,preventDefault:q,touches:m()}))};e(t.prototype,{onContainerPointerDown:function(a){b(a,"onContainerTouchStart","touchstart",
function(a){g[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){b(a,"onContainerTouchMove","touchmove",function(a){g[a.pointerId]={pageX:a.pageX,pageY:a.pageY};g[a.pointerId].target||(g[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){b(a,"onDocumentTouchEnd","touchend",function(a){delete g[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,
d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(h,d?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});n(t.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&B(b.container,{"-ms-touch-action":"none","touch-action":"none"})});n(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});n(t.prototype,"destroy",function(a){this.batchMSEvents(u);a.call(this)})}});J(G,"parts/Legend.js",[G["parts/Globals.js"]],function(a){var E=
a.addEvent,H=a.css,B=a.discardElement,h=a.defined,e=a.fireEvent,q=a.isFirefox,t=a.marginNames,u=a.merge,v=a.pick,n=a.setAnimation,g=a.stableSort,d=a.win,m=a.wrap;a.Legend=function(a,d){this.init(a,d)};a.Legend.prototype={init:function(a,d){this.chart=a;this.setOptions(d);d.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=E(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&
this.unchartrender())},setOptions:function(a){var b=v(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=u(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.symbolWidth=v(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,d){var b=this.chart;this.setOptions(u(!0,this.options,a));this.destroy();b.isDirtyLegend=b.isDirtyBox=!0;
v(d,!0)&&b.redraw();e(this,"afterUpdate")},colorizeItem:function(a,d){a.legendGroup[d?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var b=this.options,c=a.legendItem,k=a.legendLine,g=a.legendSymbol,m=this.itemHiddenStyle.color,b=d?b.itemStyle.color:m,h=d?a.color||m:m,n=a.options&&a.options.marker,l={fill:h};c&&c.css({fill:b,color:b});k&&k.attr({stroke:h});g&&(n&&g.isMarker&&(l=a.pointAttribs(),d||(l.stroke=l.fill=m)),g.attr(l))}e(this,"afterColorizeItem",{item:a,
visible:d})},positionItems:function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var b=this.options,d=b.symbolPadding,b=!b.rtl,c=a._legendItemPos,e=c[0],c=c[1],g=a.checkbox;if((a=a.legendGroup)&&a.element)a[h(a.translateY)?"animate":"attr"]({translateX:b?e:this.legendWidth-e-2*d-4,translateY:c});g&&(g.x=e,g.y=c)},destroyItem:function(a){var b=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(b){a[b]&&
(a[b]=a[b].destroy())});b&&B(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(b){["legendItem","legendGroup"].forEach(a,b)});"clipRect up down pager nav box title group".split(" ").forEach(a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,d,e=this.clipHeight||this.legendHeight,c=this.titleHeight;a&&(d=a.translateY,this.allItems.forEach(function(b){var k=b.checkbox,g;k&&(g=d+c+k.y+(this.scrollOffset||
0)+3,H(k,{left:a.translateX+b.checkboxOffset+k.x-20+"px",top:g+"px",display:this.proximate||g>d-6&&g<d+e-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,d=this.padding,e=a.title,c=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,d-3,d-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(e.style),this.title.add(this.group)),e.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),c=a.height,
this.offsetWidth=a.width,this.contentGroup.attr({translateY:c}));this.titleHeight=c},setText:function(b){var d=this.options;b.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,b,this.chart.time):d.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,d=b.renderer,c=this.options,e=this.symbolWidth,g=c.symbolPadding,m=this.itemStyle,h=this.itemHiddenStyle,n="horizontal"===c.layout?v(c.itemDistance,20):0,l=!c.rtl,D=a.legendItem,A=!a.series,z=!A&&a.series.drawLegendSymbol?a.series:
a,I=z.options,I=this.createCheckboxForItem&&I&&I.showCheckbox,n=e+g+n+(I?20:0),f=c.useHTML,r=a.options.className;D||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+z.type+"-series highcharts-color-"+a.colorIndex+(r?" "+r:"")+(A?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=D=d.text("",l?e+g:-g,this.baseline||0,f),b.styledMode||D.css(u(a.visible?m:h)),D.attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=d.fontMetrics(b.styledMode?
12:m.fontSize,D),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,D.attr("y",this.baseline)),this.symbolHeight=c.symbolHeight||this.fontMetrics.f,z.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,D,f));I&&!a.checkbox&&this.createCheckboxForItem(a);this.colorizeItem(a,a.visible);!b.styledMode&&m.width||D.css({width:(c.itemWidth||this.widthOption||b.spacingBox.width)-n});this.setText(a);b=D.getBBox();a.itemWidth=a.checkboxOffset=c.itemWidth||a.legendItemWidth||b.width+n;this.maxItemWidth=
Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight)},layoutItem:function(a){var b=this.options,d=this.padding,c="horizontal"===b.layout,e=a.itemHeight,g=b.itemMarginBottom||0,m=this.itemMarginTop,h=c?v(b.itemDistance,20):0,n=this.maxLegendWidth,b=b.alignColumns&&this.totalItemWidth>n?this.maxItemWidth:a.itemWidth;c&&this.itemX-d+b>n&&(this.itemX=d,this.lastLineHeight&&(this.itemY+=m+this.lastLineHeight+
g),this.lastLineHeight=0);this.lastItemY=m+this.itemY+g;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];c?this.itemX+=b:(this.itemY+=m+e+g,this.lastLineHeight=e);this.offsetWidth=this.widthOption||Math.max((c?this.itemX-d-(a.checkbox?0:h):b)+d,this.offsetWidth)},getAllItems:function(){var a=[];this.chart.series.forEach(function(b){var d=b&&b.options;b&&v(d.showInLegend,h(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===d.legendType?b.data:
b)))});e(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,d){var b=this.chart,c=this.options,e=this.getAlignment(),k=void 0!==b.options.title.margin?b.titleOffset+b.options.title.margin:0;e&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(g,m){g.test(e)&&!h(a[m])&&(b[t[m]]=Math.max(b[t[m]],
b.legend[(m+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][m]*c[m%2?"x":"y"]+v(c.margin,12)+d[m]+(0===m&&(0===b.titleOffset?0:k))))})},proximatePositions:function(){var b=this.chart,d=[],e="left"===this.options.align;this.allItems.forEach(function(c){var k,g;g=e;var m;c.yAxis&&c.points&&(c.xAxis.options.reversed&&(g=!g),k=a.find(g?c.points:c.points.slice(0).reverse(),function(b){return a.isNumber(b.plotY)}),g=c.legendGroup.getBBox().height,m=c.yAxis.top-b.plotTop,c.visible?(k=k?k.plotY:c.yAxis.height,
k+=m-.3*g):k=m+c.yAxis.height,d.push({target:k,size:g,item:c}))},this);a.distribute(d,b.plotHeight);d.forEach(function(a){a.item._legendItemPos[1]=b.plotTop-b.spacing[0]+a.pos})},render:function(){var b=this.chart,d=b.renderer,m=this.group,c,h,n,w=this.box,q=this.options,C=this.padding;this.itemX=C;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=a.relativeLength(q.width,b.spacingBox.width-C);c=b.spacingBox.width-2*C-q.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,
2))&&(c/=2);this.maxLegendWidth=this.widthOption||c;m||(this.group=m=d.g("legend").attr({zIndex:7}).add(),this.contentGroup=d.g().attr({zIndex:1}).add(m),this.scrollGroup=d.g().add(this.contentGroup));this.renderTitle();c=this.getAllItems();g(c,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});q.reversed&&c.reverse();this.allItems=c;this.display=h=!!c.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;c.forEach(this.renderItem,
this);c.forEach(this.layoutItem,this);c=(this.widthOption||this.offsetWidth)+C;n=this.lastItemY+this.lastLineHeight+this.titleHeight;n=this.handleOverflow(n);n+=C;w||(this.box=w=d.rect().addClass("highcharts-legend-box").attr({r:q.borderRadius}).add(m),w.isNew=!0);b.styledMode||w.attr({stroke:q.borderColor,"stroke-width":q.borderWidth||0,fill:q.backgroundColor||"none"}).shadow(q.shadow);0<c&&0<n&&(w[w.isNew?"attr":"animate"](w.crisp.call({},{x:0,y:0,width:c,height:n},w.strokeWidth())),w.isNew=!1);
w[h?"show":"hide"]();b.styledMode&&"none"===m.getStyle("display")&&(c=n=0);this.legendWidth=c;this.legendHeight=n;h&&(d=b.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(w=d.y+b.titleOffset,d=u(d,{y:0<b.titleOffset?w+=b.options.title.margin:w})),m.align(u(q,{width:c,height:n,verticalAlign:this.proximate?"top":q.verticalAlign}),!0,d));this.proximate||this.positionItems();e(this,"afterRender")},handleOverflow:function(a){var b=this,d=this.chart,c=d.renderer,e=this.options,g=e.y,m=this.padding,
g=d.spacingBox.height+("top"===e.verticalAlign?-g:g)-m,h=e.maxHeight,n,l=this.clipRect,D=e.navigation,A=v(D.animation,!0),z=D.arrowSize||12,I=this.nav,f=this.pages,r,q=this.allItems,t=function(a){"number"===typeof a?l.attr({height:a}):l&&(b.clipRect=l.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")},L=function(a){b[a]=c.circle(0,0,1.3*z).translate(z/2,z/2).add(I);d.styledMode||b[a].attr("fill","rgba(0,0,0,0.0001)");
return b[a]};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(g/=2);h&&(g=Math.min(g,h));f.length=0;a>g&&!1!==D.enabled?(this.clipHeight=n=Math.max(g-20-this.titleHeight-m,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,q.forEach(function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),l=f.length;if(!l||c-f[l-1]>n&&(r||c)!==f[l-1])f.push(r||c),l++;a.pageIx=l-1;r&&(q[b-1].pageIx=l-1);b===q.length-1&&c+d-f[l-1]>n&&c!==r&&(f.push(c),a.pageIx=l);
c!==r&&(r=c)}),l||(l=b.clipRect=c.clipRect(0,m,9999,0),b.contentGroup.clip(l)),t(n),I||(this.nav=I=c.g().attr({zIndex:1}).add(this.group),this.up=c.symbol("triangle",0,0,z,z).add(I),L("upTracker").on("click",function(){b.scroll(-1,A)}),this.pager=c.text("",15,10).addClass("highcharts-legend-navigation"),d.styledMode||this.pager.css(D.style),this.pager.add(I),this.down=c.symbol("triangle-down",0,0,z,z).add(I),L("downTracker").on("click",function(){b.scroll(1,A)})),b.scroll(0),a=g):I&&(t(),this.nav=
I.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,d){var b=this.pages,c=b.length,e=this.currentPage+a;a=this.clipHeight;var k=this.options.navigation,g=this.pager,m=this.padding;e>c&&(e=c);0<e&&(void 0!==d&&n(d,this.chart),this.nav.attr({translateX:m,translateY:a+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===e?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),
g.attr({text:e+"/"+c}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":e===c?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),this.chart.styledMode||(this.up.attr({fill:1===e?k.inactiveColor:k.activeColor}),this.upTracker.css({cursor:1===e?"default":"pointer"}),this.down.attr({fill:e===c?k.inactiveColor:k.activeColor}),this.downTracker.css({cursor:e===c?"default":"pointer"})),this.scrollOffset=-b[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),
this.currentPage=e,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,d){var b=a.symbolHeight,c=a.options.squareSymbol;d.legendSymbol=this.chart.renderer.rect(c?(a.symbolWidth-b)/2:0,a.baseline-b+1,c?b:a.symbolWidth,b,v(a.options.symbolRadius,b/2)).addClass("highcharts-point").attr({zIndex:3}).add(d.legendGroup)},drawLineMarker:function(a){var b=this.options,d=b.marker,c=a.symbolWidth,e=a.symbolHeight,g=e/2,m=this.chart.renderer,h=this.legendGroup;a=a.baseline-Math.round(.3*
a.fontMetrics.b);var n={};this.chart.styledMode||(n={"stroke-width":b.lineWidth||0},b.dashStyle&&(n.dashstyle=b.dashStyle));this.legendLine=m.path(["M",0,a,"L",c,a]).addClass("highcharts-graph").attr(n).add(h);d&&!1!==d.enabled&&c&&(b=Math.min(v(d.radius,g),g),0===this.symbol.indexOf("url")&&(d=u(d,{width:e,height:e}),b=0),this.legendSymbol=d=m.symbol(this.symbol,c/2-b,a-b,2*b,2*b,d).addClass("highcharts-point").add(h),d.isMarker=!0)}};(/Trident\/7\.0/.test(d.navigator&&d.navigator.userAgent)||q)&&
m(a.Legend.prototype,"positionItem",function(a,d){var b=this,c=function(){d._legendItemPos&&a.call(b,d)};c();b.bubbleLegend||setTimeout(c)})});J(G,"parts/Chart.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animate,B=a.animObject,h=a.attr,e=a.doc,q=a.Axis,t=a.createElement,u=a.defaultOptions,v=a.discardElement,n=a.charts,g=a.css,d=a.defined,m=a.extend,b=a.find,k=a.fireEvent,p=a.isNumber,c=a.isObject,x=a.isString,K=a.Legend,w=a.marginNames,F=a.merge,C=a.objectEach,l=a.Pointer,D=a.pick,
A=a.pInt,z=a.removeEvent,I=a.seriesTypes,f=a.splat,r=a.syncTimeout,Q=a.win,N=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new N(a,b,c)};m(N.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(x(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,f){var d,l=b.series,e=b.plotOptions||{};k(this,"init",{args:arguments},function(){b.series=null;d=F(u,b);C(d.plotOptions,function(a,b){c(a)&&(a.tooltip=e[b]&&
F(e[b].tooltip)||void 0)});d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=l;this.userOptions=b;var g=d.chart,m=g.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=f;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new a.Time(b.time):a.time;this.styledMode=g.styledMode;this.hasCartesianSeries=g.showAxes;var A=this;A.index=n.length;n.push(A);
a.chartCount++;m&&C(m,function(b,c){a.isFunction(b)&&E(A,c,b)});A.xAxis=[];A.yAxis=[];A.pointCount=A.colorCounter=A.symbolCounter=0;k(A,"afterInit");A.firstRender()})},initSeries:function(b){var c=this.options.chart;(c=I[b.type||c.type||c.defaultSeriesType])||a.error(17,!0,this);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var f=c?b:a;a=c?a:b;return 0<=f&&f<=this.plotWidth&&
0<=a&&a<=this.plotHeight},redraw:function(b){k(this,"beforeRedraw");var c=this.axes,f=this.series,d=this.pointer,l=this.legend,e=this.userOptions.legend,g=this.isDirtyLegend,A,p,r=this.hasCartesianSeries,h=this.isDirtyBox,D,z=this.renderer,n=z.isHidden(),x=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);n&&this.temporaryDisplay();this.layOutTitles();for(b=f.length;b--;)if(D=f[b],D.options.stacking&&(A=!0,D.isDirty)){p=!0;break}if(p)for(b=f.length;b--;)D=f[b],D.options.stacking&&
(D.isDirty=!0);f.forEach(function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),g=!0):e&&(e.labelFormatter||e.labelFormat)&&(g=!0));a.isDirtyData&&k(a,"updatedData")});g&&l&&l.options.enabled&&(l.render(),this.isDirtyLegend=!1);A&&this.getStacks();r&&c.forEach(function(a){a.updateNames();a.setScale()});this.getMargins();r&&(c.forEach(function(a){a.isDirty&&(h=!0)}),c.forEach(function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,x.push(function(){k(a,"afterSetExtremes",
m(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(h||A)&&a.redraw()}));h&&this.drawChartBox();k(this,"predraw");f.forEach(function(a){(h||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});d&&d.reset(!0);z.draw();k(this,"redraw");k(this,"render");n&&this.temporaryDisplay(!0);x.forEach(function(a){a.call()})},get:function(a){function c(b){return b.id===a||b.options&&b.options.id===a}var f,d=this.series,l;f=b(this.axes,c)||b(this.series,c);for(l=0;!f&&l<d.length;l++)f=b(d[l].points||[],c);return f},
getAxes:function(){var a=this,b=this.options,c=b.xAxis=f(b.xAxis||{}),b=b.yAxis=f(b.yAxis||{});k(this,"getAxes");c.forEach(function(a,b){a.index=b;a.isX=!0});b.forEach(function(a,b){a.index=b});c.concat(b).forEach(function(b){new q(a,b)});k(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];this.series.forEach(function(b){a=a.concat((b[b.hasGroupedData?"points":"data"]||[]).filter(function(a){return a.selected}))});return a},getSelectedSeries:function(){return this.series.filter(function(a){return a.selected})},
setTitle:function(a,b,c){var f=this,d=f.options,l=f.styledMode,e;e=d.title=F(!l&&{style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=F(!l&&{style:{color:"#666666"}},d.subtitle,b);[["title",a,e],["subtitle",b,d]].forEach(function(a,b){var c=a[0],d=f[c],e=a[1];a=a[2];d&&e&&(f[c]=d=d.destroy());a&&!d&&(f[c]=f.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),f[c].update=function(a){f.setTitle(!b&&a,b&&a)},l||f[c].css(a.style))});
f.layOutTitles(c)},layOutTitles:function(a){var b=0,c,f=this.renderer,d=this.spacingBox;["title","subtitle"].forEach(function(a){var c=this[a],l=this.options[a];a="title"===a?-3:l.verticalAlign?0:b+2;var e;c&&(this.styledMode||(e=l.style.fontSize),e=f.fontMetrics(e,c).b,c.css({width:(l.width||d.width+l.widthAdjust)+"px"}).align(m({y:a+e},l),!1,"spacingBox"),l.floating||l.verticalAlign||(b=Math.ceil(b+c.getBBox(l.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&
c&&(this.isDirtyBox=this.isDirtyLegend=c,this.hasRendered&&D(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,f=this.renderTo;d(c)||(this.containerWidth=a.getStyle(f,"width"));d(b)||(this.containerHeight=a.getStyle(f,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;
if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(e.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){e.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,e.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||
c.style.setProperty("display","block","important");c=c.parentNode;if(c===e.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,f=c.chart,d,l;b=this.renderTo;var r=a.uniqueKey(),D,z;b||(this.renderTo=b=f.renderTo);x(b)&&(this.renderTo=b=e.getElementById(b));b||a.error(13,!0,this);d=A(h(b,"data-highcharts-chart"));p(d)&&n[d]&&n[d].hasRendered&&n[d].destroy();h(b,"data-highcharts-chart",this.index);b.innerHTML="";
f.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();d=this.chartWidth;l=this.chartHeight;g(b,{overflow:"hidden"});this.styledMode||(D=m({position:"relative",overflow:"hidden",width:d+"px",height:l+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},f.style));this.container=b=t("div",{id:r},D,b);this._cursor=b.style.cursor;this.renderer=new (a[f.renderer]||a.Renderer)(b,d,l,null,f.forExport,c.exporting&&c.exporting.allowHTML,this.styledMode);
this.setClassName(f.className);if(this.styledMode)for(z in c.defs)this.renderer.definition(c.defs[z]);else this.renderer.setStyle(f.style);this.renderer.chartIndex=this.index;k(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,c=this.margin,f=this.titleOffset;this.resetMargins();f&&!d(c[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);k(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=
this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&a.axes.forEach(function(a){a.visible&&a.getOffset()});w.forEach(function(f,l){d(c[l])||(a[f]+=b[l])});a.setChartSize()},reflow:function(b){var c=this,f=c.options.chart,l=c.renderTo,g=d(f.width)&&d(f.height),k=f.width||a.getStyle(l,"width"),f=f.height||a.getStyle(l,"height"),l=b?b.target:Q;if(!g&&!c.isPrinting&&k&&f&&(l===Q||l===e)){if(k!==c.containerWidth||f!==c.containerHeight)a.clearTimeout(c.reflowTimeout),c.reflowTimeout=r(function(){c.container&&
c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=k;c.containerHeight=f}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=E(Q,"resize",function(a){b.reflow(a)}),E(this,"destroy",this.unbindReflow))},setSize:function(b,c,f){var d=this,l=d.renderer,e;d.isResizing+=1;a.setAnimation(f,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;void 0!==b&&(d.options.chart.width=b);void 0!==c&&(d.options.chart.height=
c);d.getChartSize();d.styledMode||(e=l.globalAnimation,(e?H:g)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},e));d.setChartSize(!0);l.setSize(d.chartWidth,d.chartHeight,f);d.axes.forEach(function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(f);d.oldChartHeight=null;k(d,"resize");r(function(){d&&k(d,"endResize",null,function(){--d.isResizing})},B(e).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,
f=this.chartWidth,d=this.chartHeight,l=this.options.chart,e=this.spacing,g=this.clipOffset,m,A,p,r;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=A=Math.round(this.plotTop);this.plotWidth=p=Math.max(0,Math.round(f-m-this.marginRight));this.plotHeight=r=Math.max(0,Math.round(d-A-this.marginBottom));this.plotSizeX=b?r:p;this.plotSizeY=b?p:r;this.plotBorderWidth=l.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:f-e[3]-e[1],height:d-e[0]-e[2]};this.plotBox=c.plotBox={x:m,
y:A,width:p,height:r};f=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(f,g[3])/2);c=Math.ceil(Math.max(f,g[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(f,g[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(f,g[2])/2-c))};a||this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()});k(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){k(this,"resetMargins");var a=this,b=a.options.chart;["margin","spacing"].forEach(function(f){var d=
b[f],l=c(d)?d:[d,d,d,d];["Top","Right","Bottom","Left"].forEach(function(c,d){a[f][d]=D(b[f+c],l[d])})});w.forEach(function(b,c){a[b]=D(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,f=this.chartHeight,d=this.chartBackground,l=this.plotBackground,e=this.plotBorder,g,m=this.styledMode,A=this.plotBGImage,p=a.backgroundColor,r=a.plotBackgroundColor,h=a.plotBackgroundImage,D,z=this.plotLeft,
n=this.plotTop,x=this.plotWidth,w=this.plotHeight,C=this.plotBox,I=this.clipRect,q=this.clipBox,t="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),t="attr");if(m)g=D=d.strokeWidth();else{g=a.borderWidth||0;D=g+(a.shadow?8:0);p={fill:p||"none"};if(g||d["stroke-width"])p.stroke=a.borderColor,p["stroke-width"]=g;d.attr(p).shadow(a.shadow)}d[t]({x:D/2,y:D/2,width:c-D-g%2,height:f-D-g%2,r:a.borderRadius});t="animate";l||(t="attr",this.plotBackground=l=b.rect().addClass("highcharts-plot-background").add());
l[t](C);m||(l.attr({fill:r||"none"}).shadow(a.plotShadow),h&&(A?A.animate(C):this.plotBGImage=b.image(h,z,n,x,w).add()));I?I.animate({width:q.width,height:q.height}):this.clipRect=b.clipRect(q);t="animate";e||(t="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());m||e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[t](e.crisp({x:z,y:n,width:x,height:w},-e.strokeWidth()));this.isDirtyBox=!1;k(this,"afterDrawChartBox")},propFromSeries:function(){var a=
this,b=a.options.chart,c,f=a.options.series,d,l;["inverted","angular","polar"].forEach(function(e){c=I[b.type||b.defaultSeriesType];l=b[e]||c&&c.prototype[e];for(d=f&&f.length;!l&&d--;)(c=I[f[d].type])&&c.prototype[e]&&(l=!0);a[e]=l})},linkSeries:function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var c=b.options.linkedTo;x(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=
D(b.options.visible,c.options.visible,b.visible))});k(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&b.items.forEach(function(c){var f=m(b.style,c.style),d=A(f.left)+a.plotLeft,l=A(f.top)+a.plotTop+12;delete f.left;delete f.top;a.renderer.text(c.html,d,l).attr({zIndex:2}).css(f).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,f=0,d,l,e;this.setTitle();
this.legend=new K(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return f=21,!0});d=this.plotHeight=Math.max(this.plotHeight-f,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();l=1.1<c/this.plotWidth;e=1.05<d/this.plotHeight;if(l||e)a.forEach(function(a){(a.horiz&&l||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&
a.forEach(function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=F(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(Q.location.href=a.href)}).attr({align:a.position.align,
zIndex:8}),b.styledMode||this.credits.css(a.style),this.credits.add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,f=b.series,d=b.container,l,e=d&&d.parentNode;k(b,"destroy");b.renderer.forExport?a.erase(n,b):n[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");z(b);for(l=c.length;l--;)c[l]=c[l].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(l=f.length;l--;)f[l]=
f[l].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",z(d),e&&v(d));C(b,function(a,c){delete b[c]})},firstRender:function(){var b=this,c=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();(a.isArray(c.series)?
c.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();k(b,"beforeRender");l&&(b.pointer=new l(b,c));b.render();if(!b.renderer.imgCount&&b.onload)b.onload();b.temporaryDisplay(!0)}},onload:function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);k(this,"load");k(this,"render");d(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})});J(G,"parts/ScrollablePlotArea.js",[G["parts/Globals.js"]],function(a){var E=
a.addEvent,H=a.Chart;E(H,"afterSetChartSize",function(B){var h=this.options.chart.scrollablePlotArea,e=h&&h.minWidth,h=h&&h.minHeight,q;if(!this.renderer.forExport){if(e){if(this.scrollablePixelsX=e=Math.max(0,e-this.chartWidth))this.plotWidth+=e,this.inverted?this.clipBox.height+=e:this.clipBox.width+=e,q={1:{name:"right",value:e}}}else h&&(this.scrollablePixelsY=e=Math.max(0,h-this.chartHeight))&&(this.plotHeight+=e,this.inverted?this.clipBox.width+=e:this.clipBox.height+=e,q={2:{name:"bottom",
value:e}});q&&!B.skipAxes&&this.axes.forEach(function(e){q[e.side]?e.getPlotLinePath=function(){var h=q[e.side].name,t=this[h],n;this[h]=t-q[e.side].value;n=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this[h]=t;return n}:(e.setAxisSize(),e.setAxisTranslation())})}});E(H,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});H.prototype.setUpScrolling=function(){var B={WebkitOverflowScrolling:"touch",
overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(B.overflowX="auto");this.scrollablePixelsY&&(B.overflowY="auto");this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},B,this.renderTo);this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};H.prototype.moveFixedElements=function(){var a=this.container,h=this.fixedRenderer,e=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-reset-zoom .highcharts-subtitle .highcharts-title .highcharts-legend-checkbox".split(" "),
q;this.scrollablePixelsX&&!this.inverted?q=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?q=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?q=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(q=".highcharts-yaxis");e.push(q,q+"-labels");e.forEach(function(e){[].forEach.call(a.querySelectorAll(e),function(a){(a.namespaceURI===h.SVG_NS?h.box:h.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})})};H.prototype.applyFixed=function(){var B,h,e=!this.fixedDiv,q=
this.options.chart.scrollablePlotArea;e?(this.fixedDiv=a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=B=new a.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight),this.scrollableMask=B.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(a.pick(q.opacity,.85)).get(),
zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),E(this,"afterShowResetZoom",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);B=this.chartWidth+(this.scrollablePixelsX||0);h=this.chartHeight+(this.scrollablePixelsY||0);a.stop(this.container);this.container.style.width=B+"px";this.container.style.height=h+"px";this.renderer.boxWrapper.attr({width:B,height:h,viewBox:[0,0,B,h].join(" ")});this.chartBackground.attr({width:B,height:h});
this.scrollablePixelsY&&(this.scrollingContainer.style.height=this.chartHeight+"px");e&&(q.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*q.scrollPositionX),q.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*q.scrollPositionY));h=this.axisOffset;e=this.plotTop-h[0]-1;q=this.plotLeft-h[3]-1;B=this.plotTop+this.plotHeight+h[2]+1;h=this.plotLeft+this.plotWidth+h[1]+1;var t=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),u=this.plotTop+this.plotHeight-
(this.scrollablePixelsY||0),e=this.scrollablePixelsX?["M",0,e,"L",this.plotLeft-1,e,"L",this.plotLeft-1,B,"L",0,B,"Z","M",t,e,"L",this.chartWidth,e,"L",this.chartWidth,B,"L",t,B,"Z"]:this.scrollablePixelsY?["M",q,0,"L",q,this.plotTop-1,"L",h,this.plotTop-1,"L",h,0,"Z","M",q,u,"L",q,this.chartHeight,"L",h,this.chartHeight,"L",h,u,"Z"]:["M",0,0];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:e})}});J(G,"parts/Point.js",[G["parts/Globals.js"]],function(a){var E,H=a.extend,B=a.erase,
h=a.fireEvent,e=a.format,q=a.isArray,t=a.isNumber,u=a.pick,v=a.uniqueKey,n=a.defined,g=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,e,b){this.series=a;this.applyOptions(e,b);this.id=n(this.id)?this.id:v();this.resolveColor();a.chart.pointCount++;h(this,"afterInit");return this},resolveColor:function(){var a=this.series,e;e=a.chart.options.chart.colorCount;var b=a.chart.styledMode;b||this.options.color||(this.color=a.color);a.options.colorByPoint?(b||(e=a.options.colors||
a.chart.options.colors,this.color=this.color||e[a.colorCounter],e=e.length),b=a.colorCounter,a.colorCounter++,a.colorCounter===e&&(a.colorCounter=0)):b=a.colorIndex;this.colorIndex=u(this.colorIndex,b)},applyOptions:function(a,e){var b=this.series,d=b.options.pointValKey||b.pointValKey;a=E.prototype.optionsToObject.call(this,a);H(this,a);this.options=this.options?H(this.options,a):a;a.group&&delete this.group;a.dataLabels&&delete this.dataLabels;d&&(this.y=this[d]);if(this.isNull=u(this.isValid&&
!this.isValid(),null===this.x||!t(this.y,!0)))this.formatPrefix="null";this.selected&&(this.state="select");"name"in this&&void 0===e&&b.xAxis&&b.xAxis.hasNames&&(this.x=b.xAxis.nameToX(this));void 0===this.x&&b&&(this.x=void 0===e?b.autoIncrement(this):e);return this},setNestedProperty:function(d,e,b){b.split(".").reduce(function(b,d,c,g){b[d]=g.length-1===c?e:a.isObject(b[d],!0)?b[d]:{};return b[d]},d);return d},optionsToObject:function(d){var e={},b=this.series,g=b.options.keys,p=g||b.pointArrayMap||
["y"],c=p.length,h=0,n=0;if(t(d)||null===d)e[p[0]]=d;else if(q(d))for(!g&&d.length>c&&(b=typeof d[0],"string"===b?e.name=d[0]:"number"===b&&(e.x=d[0]),h++);n<c;)g&&void 0===d[h]||(0<p[n].indexOf(".")?a.Point.prototype.setNestedProperty(e,d[h],p[n]):e[p[n]]=d[h]),h++,n++;else"object"===typeof d&&(e=d,d.dataLabels&&(b._hasPointLabels=!0),d.marker&&(b._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":
"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,e=a.zones,a=a.zoneAxis||"y",b=0,g;for(g=e[b];this[a]>=g.value;)g=e[++b];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=g&&g.color&&!this.options.color?g.color:this.nonZonedColor;return g},
destroy:function(){var a=this.series.chart,e=a.hoverPoints,b;a.pointCount--;e&&(this.setState(),B(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)g(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(b in this)this[b]=null},destroyElements:function(a){var d=this,b=[],e,g;a=a||{graphic:1,dataLabel:1};a.graphic&&b.push("graphic","shadowGroup");a.dataLabel&&b.push("dataLabel","dataLabelUpper","connector");
for(g=b.length;g--;)e=b[g],d[e]&&(d[e]=d[e].destroy());["dataLabel","connector"].forEach(function(b){var c=b+"s";a[b]&&d[c]&&(d[c].forEach(function(a){a.element&&a.destroy()}),delete d[c])})},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,b=d.tooltipOptions,g=u(b.valueDecimals,
""),p=b.valuePrefix||"",c=b.valueSuffix||"";d.chart.styledMode&&(a=d.chart.tooltip.styledModeFormat(a));(d.pointArrayMap||["y"]).forEach(function(b){b="{point."+b;if(p||c)a=a.replace(RegExp(b+"}","g"),p+b+"}"+c);a=a.replace(RegExp(b+"}","g"),b+":,."+g+"f}")});return e(a,{point:this,series:this.series},d.chart.time)},firePointEvent:function(a,e,b){var d=this,g=this.series.options;(g.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&g.allowPointSelect&&
(b=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});h(this,a,e,b)},visible:!0}});J(G,"parts/Series.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animObject,B=a.arrayMax,h=a.arrayMin,e=a.correctFloat,q=a.defaultOptions,t=a.defaultPlotOptions,u=a.defined,v=a.erase,n=a.extend,g=a.fireEvent,d=a.isArray,m=a.isNumber,b=a.isString,k=a.merge,p=a.objectEach,c=a.pick,x=a.removeEvent,K=a.splat,w=a.SVGElement,F=a.syncTimeout,C=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,
allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},
verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",
cropShoulder:1,init:function(b,d){g(this,"init",{options:d});var e=this,l,k=b.series,f;e.chart=b;e.options=d=e.setOptions(d);e.linkedSeries=[];e.bindAxes();n(e,{name:d.name,state:"",visible:!1!==d.visible,selected:!0===d.selected});l=d.events;p(l,function(b,c){!a.isFunction(b)||e.hcEvents&&e.hcEvents[c]&&e.hcEvents[c].some(function(a){return a.fn===b})||E(e,c,b)});if(l&&l.click||d.point&&d.point.events&&d.point.events.click||d.allowPointSelect)b.runTrackerClick=!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(a){e[a+
"Data"]||(e[a+"Data"]=[])});e.points||e.setData(d.data,!1);e.isCartesian&&(b.hasCartesianSeries=!0);k.length&&(f=k[k.length-1]);e._i=c(f&&f._i,-1)+1;b.orderSeries(this.insert(k));g(this,"afterInit")},insert:function(a){var b=this.options.index,d;if(m(b)){for(d=a.length;d--;)if(b>=c(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return c(d,a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;g(this,"bindAxes",null,function(){(b.axisTypes||
[]).forEach(function(l){d[l].forEach(function(a){e=a.options;if(c[l]===e.index||void 0!==c[l]&&c[l]===e.id||void 0===c[l]&&0===e.index)b.insert(a.series),b[l]=a,a.isDirty=!0});b[l]||b.optionalAxis===l||a.error(18,!0,d)})})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,e=m(b)?function(f){var d="y"===f&&c.toYData?c.toYData(a):a[f];c[f+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};c.parallelArrays.forEach(e)},hasData:function(){return this.visible&&
void 0!==this.dataMax&&void 0!==this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,e=a.pointIntervalUnit,g=this.chart.time,b=c(b,a.pointStart,0);this.pointInterval=d=c(this.pointInterval,a.pointInterval,1);e&&(a=new g.Date(b),"day"===e?g.set("Date",a,g.get("Date",a)+d):"month"===e?g.set("Month",a,g.get("Month",a)+d):"year"===e&&g.set("FullYear",a,g.get("FullYear",a)+d),d=a.getTime()-b);this.xIncrement=b+d;return b},setOptions:function(a){var b=
this.chart,d=b.options,e=d.plotOptions,l=b.userOptions||{};a=k(a);var b=b.styledMode,f={plotOptions:e,userOptions:a};g(this,"setOptions",f);var m=l.plotOptions||{},p=f.plotOptions[this.type];this.userOptions=f.userOptions;l=k(p,e.series,l.plotOptions&&l.plotOptions[this.type],a);this.tooltipOptions=k(q.tooltip,q.plotOptions.series&&q.plotOptions.series.tooltip,q.plotOptions[this.type].tooltip,d.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=c(a.stickyTracking,
m[this.type]&&m[this.type].stickyTracking,m.series&&m.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:l.stickyTracking);null===p.marker&&delete l.marker;this.zoneAxis=l.zoneAxis;d=this.zones=(l.zones||[]).slice();!l.negativeColor&&!l.negativeFillColor||l.zones||(e={value:l[this.zoneAxis+"Threshold"]||l.threshold||0,className:"highcharts-negative"},b||(e.color=l.negativeColor,e.fillColor=l.negativeFillColor),d.push(e));d.length&&u(d[d.length-1].value)&&d.push(b?{}:{color:this.color,
fillColor:this.fillColor});g(this,"afterSetOptions",{options:l});return l},getName:function(){return c(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,d){var e,l=this.chart,f=this.userOptions,g=a+"Index",k=a+"Counter",m=d?d.length:c(l.options.chart[a+"Count"],l[a+"Count"]);b||(e=c(f[g],f["_"+g]),u(e)||(l.series.length||(l[k]=0),f["_"+g]=e=l[k]%m,l[k]+=1),d&&(b=d[e]));void 0!==e&&(this[g]=e);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?
this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var c=a.id;a=a.x;var d=this.points,e,f;c&&(f=(c=this.chart.get(c))&&c.index,void 0!==f&&(e=!0));void 0===f&&m(a)&&(f=this.xData.indexOf(a,b));-1!==f&&void 0!==f&&this.cropped&&(f=f>=this.cropStart?f-this.cropStart:f);!e&&d[f]&&d[f].touched&&(f=void 0);return f},
drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var c=this.options,d=this.points,e=[],l,f,g,k=this.requireSorting,p=b.length===d.length,h=!0;this.xIncrement=null;b.forEach(function(b,f){var h,A=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};h=A.x;if(A.id||m(h))if(h=this.findPointIndex(A,g),-1===h||void 0===h?e.push(b):d[h]&&b!==c.data[h]?(d[h].update(b,!1,null,!1),d[h].touched=!0,k&&(g=h+1)):d[h]&&(d[h].touched=!0),!p||f!==h||this.hasDerivedData)l=
!0},this);if(l)for(b=d.length;b--;)(f=d[b])&&!f.touched&&f.remove(!1);else p?b.forEach(function(a,b){d[b].update&&a!==d[b].y&&d[b].update(a,!1,null,!1)}):h=!1;d.forEach(function(a){a&&(a.touched=!1)});if(!h)return!1;e.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);return!0},setData:function(e,g,k,p){var l=this,f=l.points,h=f&&f.length||0,A,n=l.options,D=l.chart,z=null,x=l.xAxis,w=n.turboThreshold,C=this.xData,q=this.yData,t=(A=l.pointArrayMap)&&A.length,u=n.keys,F=0,v=1,K;e=e||[];A=e.length;
g=c(g,!0);!1!==p&&A&&h&&!l.cropped&&!l.hasGroupedData&&l.visible&&!l.isSeriesBoosting&&(K=this.updateData(e));if(!K){l.xIncrement=null;l.colorCounter=0;this.parallelArrays.forEach(function(a){l[a+"Data"].length=0});if(w&&A>w){for(k=0;null===z&&k<A;)z=e[k],k++;if(m(z))for(k=0;k<A;k++)C[k]=this.autoIncrement(),q[k]=e[k];else if(d(z))if(t)for(k=0;k<A;k++)z=e[k],C[k]=z[0],q[k]=z.slice(1,t+1);else for(u&&(F=u.indexOf("x"),v=u.indexOf("y"),F=0<=F?F:0,v=0<=v?v:1),k=0;k<A;k++)z=e[k],C[k]=z[F],q[k]=z[v];else a.error(12,
!1,D)}else for(k=0;k<A;k++)void 0!==e[k]&&(z={series:l},l.pointClass.prototype.applyOptions.apply(z,[e[k]]),l.updateParallelArrays(z,k));q&&b(q[0])&&a.error(14,!0,D);l.data=[];l.options.data=l.userOptions.data=e;for(k=h;k--;)f[k]&&f[k].destroy&&f[k].destroy();x&&(x.minRange=x.userMinRange);l.isDirty=D.isDirtyBox=!0;l.isDirtyData=!!f;k=!1}"point"===n.legendType&&(this.processData(),this.generatePoints());g&&D.redraw(k)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,l;l=0;var f,g,
k=this.xAxis,m,p=this.options;m=p.cropThreshold;var h=this.getExtremesFromAll||p.getExtremesFromAll,n=this.isCartesian,p=k&&k.val2lin,x=k&&k.isLog,w=this.requireSorting,C,q;if(n&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!b)return!1;k&&(b=k.getExtremes(),C=b.min,q=b.max);n&&this.sorted&&!h&&(!m||e>m||this.forceCrop)&&(c[e-1]<C||c[0]>q?(c=[],d=[]):this.yData&&(c[0]<C||c[e-1]>q)&&(l=this.cropData(this.xData,this.yData,C,q),c=l.xData,d=l.yData,l=l.start,f=!0));for(m=c.length||1;--m;)e=x?p(c[m])-
p(c[m-1]):c[m]-c[m-1],0<e&&(void 0===g||e<g)?g=e:0>e&&w&&(a.error(15,!1,this.chart),w=!1);this.cropped=f;this.cropStart=l;this.processedXData=c;this.processedYData=d;this.closestPointRange=g},cropData:function(a,b,d,e,g){var f=a.length,l=0,k=f,m;g=c(g,this.cropShoulder);for(m=0;m<f;m++)if(a[m]>=d){l=Math.max(0,m-g);break}for(d=m;d<f;d++)if(a[d]>e){k=d+g;break}return{xData:a.slice(l,k),yData:b.slice(l,k),start:l,end:k}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,d,e=this.processedXData,
f=this.processedYData,k=this.pointClass,m=e.length,p=this.cropStart||0,h,x=this.hasGroupedData,a=a.keys,w,C=[],q;c||x||(c=[],c.length=b.length,c=this.data=c);a&&x&&(this.options.keys=!1);for(q=0;q<m;q++)h=p+q,x?(w=(new k).init(this,[e[q]].concat(K(f[q]))),w.dataGroup=this.groupMap[q],w.dataGroup.options&&(w.options=w.dataGroup.options,n(w,w.dataGroup.options),delete w.dataLabels)):(w=c[h])||void 0===b[h]||(c[h]=w=(new k).init(this,b[h],e[q])),w&&(w.index=h,C[q]=w);this.options.keys=a;if(c&&(m!==(d=
c.length)||x))for(q=0;q<d;q++)q!==p||x||(q+=m),c[q]&&(c[q].destroyElements(),c[q].plotX=void 0);this.data=c;this.points=C;g(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:h(a),max:B(a)}},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,e,l=[],f=0;e=this.xAxis.getExtremes();var k=e.min,p=e.max,n,w,x=this.requireSorting?this.cropShoulder:0,q,C;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(C=0;C<e;C++)if(w=c[C],q=a[C],n=(m(q,!0)||d(q))&&(!b.positiveValuesOnly||
q.length||0<q),w=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[C+x]||w)>=k&&(c[C-x]||w)<=p,n&&w)if(n=q.length)for(;n--;)"number"===typeof q[n]&&(l[f++]=q[n]);else l[f++]=q;this.dataMin=h(l);this.dataMax=B(l);g(this,"afterGetExtremes")},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,k=this.xAxis,p=k.categories,h=this.yAxis,f=this.points,r=f.length,n=!!this.modifyValue,w,q=this.pointPlacementToXValue(),
C=m(q),x=a.threshold,t=a.startFromThreshold?x:0,F,v,K,B,E=this.zoneAxis||"y",H=Number.MAX_VALUE;for(w=0;w<r;w++){var G=f[w],J=G.x;v=G.y;var V=G.low,O=b&&h.stacks[(this.negStacks&&v<(t?0:x)?"-":"")+this.stackKey],W,X;h.positiveValuesOnly&&null!==v&&0>=v&&(G.isNull=!0);G.plotX=F=e(Math.min(Math.max(-1E5,k.translate(J,0,0,0,1,q,"flags"===this.type)),1E5));b&&this.visible&&!G.isNull&&O&&O[J]&&(B=this.getStackIndicator(B,J,this.index),W=O[J],X=W.points[B.key]);d(X)&&(V=X[0],v=X[1],V===t&&B.key===O[J].base&&
(V=c(m(x)&&x,h.min)),h.positiveValuesOnly&&0>=V&&(V=null),G.total=G.stackTotal=W.total,G.percentage=W.total&&G.y/W.total*100,G.stackY=v,W.setOffset(this.pointXOffset||0,this.barW||0));G.yBottom=u(V)?Math.min(Math.max(-1E5,h.translate(V,0,1,0,1)),1E5):null;n&&(v=this.modifyValue(v,G));G.plotY=v="number"===typeof v&&Infinity!==v?Math.min(Math.max(-1E5,h.translate(v,0,1,0,1)),1E5):void 0;G.isInside=void 0!==v&&0<=v&&v<=h.len&&0<=F&&F<=k.len;G.clientX=C?e(k.translate(J,0,0,0,1,q)):F;G.negative=G[E]<(a[E+
"Threshold"]||x||0);G.category=p&&void 0!==p[G.x]?p[G.x]:G.x;G.isNull||(void 0!==K&&(H=Math.min(H,Math.abs(F-K))),K=F);G.zone=this.zones.length&&G.getZone()}this.closestPointRangePx=H;g(this,"afterTranslate")},getValidPoints:function(a,b,c){var d=this.chart;return(a||this.points||[]).filter(function(a){return b&&!d.isInsidePlot(a.plotX,a.plotY,d.inverted)?!1:c||!a.isNull})},getClipBox:function(a,b){var c=this.options,d=this.chart,e=d.inverted,f=this.xAxis,l=f&&this.yAxis;a&&!1===c.clip&&l?a=e?{y:-d.chartWidth+
l.len+l.pos,height:d.chartWidth,width:d.chartHeight,x:-d.chartHeight+f.len+f.pos}:{y:-l.pos,height:d.chartHeight,width:d.chartWidth,x:-f.pos}:(a=this.clipBox||d.clipBox,b&&(a.width=d.plotSizeX,a.x=0));return b?{width:a.width,x:a.x}:a},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,f=this.clipBox,l=this.getClipBox(a),g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,l.height,c.xAxis,c.yAxis].join(),k=b[g],m=b[g+"m"];k||(a&&(l.width=0,e&&(l.x=b.plotSizeX+
(!1!==c.clip?0:b.plotTop)),b[g+"m"]=m=d.clipRect(e?b.plotSizeX+99:-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight)),b[g]=k=d.clipRect(l),k.count={length:0});a&&!k.count[this.index]&&(k.count[this.index]=!0,k.count.length+=1);if(!1!==c.clip||a)this.group.clip(a||f?k:b.clipRect),this.markerGroup.clip(m),this.sharedClipKey=g;a||(k.count[this.index]&&(delete k.count[this.index],--k.count.length),0===k.count.length&&g&&b[g]&&(f||(b[g]=b[g].destroy()),b[g+"m"]&&(b[g+"m"]=b[g+"m"].destroy())))},
animate:function(a){var b=this.chart,c=H(this.options.animation),d,e;a?this.setClip(c):(d=this.sharedClipKey,a=b[d],e=this.getClipBox(c,!0),a&&a.animate(e,c),b[d+"m"]&&b[d+"m"].animate({width:e.width+99,x:e.x-(b.inverted?0:99)},c),this.animate=null)},afterAnimate:function(){this.setClip();g(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,d,e,g,f,k,m=this.options.marker,p,h,n,w=this[this.specialGroup]||this.markerGroup;d=this.xAxis;var q,x=c(m.enabled,
!d||d.isRadial?!0:null,this.closestPointRangePx>=m.enabledThreshold*m.radius);if(!1!==m.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)if(e=a[d],k=(f=e.graphic)?"animate":"attr",p=e.marker||{},h=!!e.marker,g=x&&void 0===p.enabled||p.enabled,n=!1!==e.isInside,g&&!e.isNull){g=c(p.symbol,this.symbol);q=this.markerAttribs(e,e.selected&&"select");f?f[n?"show":"hide"](!0).animate(q):n&&(0<q.width||e.hasImage)&&(e.graphic=f=b.renderer.symbol(g,q.x,q.y,q.width,q.height,h?p:m).add(w));if(f&&!b.styledMode)f[k](this.pointAttribs(e,
e.selected&&"select"));f&&f.addClass(e.getClassName(),!0)}else f&&(e.graphic=f.destroy())},markerAttribs:function(a,b){var d=this.options.marker,e=a.marker||{},l=e.symbol||d.symbol,f=c(e.radius,d.radius);b&&(d=d.states[b],b=e.states&&e.states[b],f=c(b&&b.radius,d&&d.radius,f+(d&&d.radiusPlus||0)));a.hasImage=l&&0===l.indexOf("url");a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var d=this.options.marker,e=a&&a.options,l=e&&
e.marker||{},f=this.color,g=e&&e.color,k=a&&a.color,e=c(l.lineWidth,d.lineWidth),m=a&&a.zone&&a.zone.color;a=1;f=g||m||k||f;g=l.fillColor||d.fillColor||f;f=l.lineColor||d.lineColor||f;b=b||"normal";d=d.states[b];b=l.states&&l.states[b]||{};e=c(b.lineWidth,d.lineWidth,e+c(b.lineWidthPlus,d.lineWidthPlus,0));g=b.fillColor||d.fillColor||g;f=b.lineColor||d.lineColor||f;a=c(b.opacity,d.opacity,a);return{stroke:f,"stroke-width":e,fill:g,opacity:a}},destroy:function(b){var c=this,d=c.chart,e=/AppleWebKit\/533/.test(C.navigator.userAgent),
l,f,k=c.data||[],m,h;g(c,"destroy");b||x(c);(c.axisTypes||[]).forEach(function(a){(h=c[a])&&h.series&&(v(h.series,c),h.isDirty=h.forceRedraw=!0)});c.legendItem&&c.chart.legend.destroyItem(c);for(f=k.length;f--;)(m=k[f])&&m.destroy&&m.destroy();c.points=null;a.clearTimeout(c.animationTimeout);p(c,function(a,b){a instanceof w&&!a.survive&&(l=e&&"group"===b?"hide":"destroy",a[l]())});d.hoverSeries===c&&(d.hoverSeries=null);v(d.series,c);d.orderSeries();p(c,function(a,d){b&&"hcEvents"===d||delete c[d]})},
getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,l,g=[],k=[],m;a=a||d.points;(l=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&l&&(f=4-f);!e.connectNulls||b||c||(a=this.getValidPoints(a));a.forEach(function(l,p){var h=l.plotX,n=l.plotY,r=a[p-1];(l.leftCliff||r&&r.rightCliff)&&!c&&(m=!0);l.isNull&&!u(b)&&0<p?m=!e.connectNulls:l.isNull&&!b?m=!0:(0===p||m?p=["M",l.plotX,l.plotY]:d.getPointSpline?p=d.getPointSpline(a,l,p):f?(p=1===f?["L",r.plotX,n]:2===f?["L",(r.plotX+h)/2,r.plotY,
"L",(r.plotX+h)/2,n]:["L",h,r.plotY],p.push("L",h,n)):p=["L",h,n],k.push(l.x),f&&(k.push(l.x),2===f&&k.push(l.x)),g.push.apply(g,p),m=!1)});g.xMap=k;return d.graphPath=g},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=this.chart.styledMode,e=[["graph","highcharts-graph"]];d||e[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);e=a.getZonesGraphs(e);e.forEach(function(f,e){var l=f[0],g=a[l],k=g?"animate":"attr";g?(g.endX=a.preventGraphAnimation?
null:c.xMap,g.animate({d:c})):c.length&&(a[l]=g=a.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(a.group));g&&!d&&(l={stroke:f[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?l.dashstyle=f[3]:"square"!==b.linecap&&(l["stroke-linecap"]=l["stroke-linejoin"]="round"),g[k](l).shadow(2>e&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,c){c=["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||
"")];this.chart.styledMode||c.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(c)},this);return a},applyZones:function(){var a=this,b=this.chart,d=b.renderer,e=this.zones,g,f,k=this.clips||[],m,p=this.graph,h=this.area,n=Math.max(b.chartWidth,b.chartHeight),w=this[(this.zoneAxis||"y")+"Axis"],q,x,C=b.inverted,t,u,v,F,K=!1;e.length&&(p||h)&&w&&void 0!==w.min?(x=w.reversed,t=w.horiz,p&&!this.showLine&&p.hide(),h&&h.hide(),q=w.getExtremes(),e.forEach(function(e,l){g=x?t?b.plotWidth:
0:t?0:w.toPixels(q.min)||0;g=Math.min(Math.max(c(f,g),0),n);f=Math.min(Math.max(Math.round(w.toPixels(c(e.value,q.max),!0)||0),0),n);K&&(g=f=w.toPixels(q.max));u=Math.abs(g-f);v=Math.min(g,f);F=Math.max(g,f);w.isXAxis?(m={x:C?F:v,y:0,width:u,height:n},t||(m.x=b.plotHeight-m.x)):(m={x:0,y:C?F:v,width:n,height:u},t&&(m.y=b.plotWidth-m.y));C&&d.isVML&&(m=w.isXAxis?{x:0,y:x?v:F,height:m.width,width:b.chartWidth}:{x:m.y-b.plotLeft-b.spacingBox.x,y:0,width:m.height,height:b.chartHeight});k[l]?k[l].animate(m):
k[l]=d.clipRect(m);p&&a["zone-graph-"+l].clip(k[l]);h&&a["zone-area-"+l].clip(k[l]);K=e.value>q.max;a.resetZones&&0===f&&(f=void 0)}),this.clips=k):a.visible&&(p&&p.show(!0),h&&h.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=E(d,"resize",b),E(c,"destroy",e),b(a),c.invertGroups=b)},
plotGroup:function(a,b,c,d,e){var f=this[a],l=!f;l&&(this[a]=f=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));f.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(u(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(f.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);f.attr({visibility:c})[l?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;
a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&H(d.animation).duration,f=a.visible?"inherit":"hidden",k=d.zIndex,m=a.hasRendered,p=b.seriesGroup,h=b.inverted;g(this,"render");c=a.plotGroup("group","series",f,k,p);a.markerGroup=a.plotGroup("markerGroup","markers",f,k,p);e&&a.animate(!0);c.inverted=a.isCartesian||a.invertable?h:!1;a.drawGraph&&
(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(h);!1===d.clip||a.sharedClipKey||m||c.clip(b.clipRect);e&&a.animate();m||(a.animationTimeout=F(function(){a.afterAnimate()},e));a.isDirty=!1;a.hasRendered=!0;g(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,e=this.xAxis,g=this.yAxis;d&&(a.inverted&&
d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:c(e&&e.left,a.plotLeft),translateY:c(g&&g.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b,a)},buildKDTree:function(a){function b(a,d,e){var f,g;if(g=a&&a.length)return f=c.kdAxisArray[d%
e],a.sort(function(a,b){return a[f]-b[f]}),g=Math.floor(g/2),{point:a[g],left:b(a.slice(0,g),d+1,e),right:b(a.slice(g+1),d+1,e)}}this.buildingKdTree=!0;var c=this,d=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;F(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),d,d);c.buildingKdTree=!1},c.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,c){function d(a,b,c,k){var m=b.point,p=e.kdAxisArray[c%k],h,n,r=m;n=u(a[f])&&u(m[f])?Math.pow(a[f]-m[f],2):null;
h=u(a[g])&&u(m[g])?Math.pow(a[g]-m[g],2):null;h=(n||0)+(h||0);m.dist=u(h)?Math.sqrt(h):Number.MAX_VALUE;m.distX=u(n)?Math.sqrt(n):Number.MAX_VALUE;p=a[p]-m[p];h=0>p?"left":"right";n=0>p?"right":"left";b[h]&&(h=d(a,b[h],c+1,k),r=h[l]<r[l]?h:m);b[n]&&Math.sqrt(p*p)<r[l]&&(a=d(a,b[n],c+1,k),r=a[l]<r[l]?a:r);return r}var e=this,f=this.kdAxisArray[0],g=this.kdAxisArray[1],l=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return d(a,
this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options.pointPlacement;"between"===a&&(a=.5);m(a)&&(a*=c(this.options.pointRange||this.xAxis.pointRange));return a}})});J(G,"parts/Stacking.js",[G["parts/Globals.js"]],function(a){var E=a.Axis,H=a.Chart,B=a.correctFloat,h=a.defined,e=a.destroyObjectProperties,q=a.format,t=a.objectEach,u=a.pick,v=a.Series;a.StackItem=function(a,e,d,m,b){var g=a.chart.inverted;this.axis=a;this.isNegative=d;this.options=e;this.x=m;this.total=null;this.points=
{};this.stack=b;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(g?d?"left":"right":"center"),verticalAlign:e.verticalAlign||(g?"middle":d?"bottom":"top"),y:u(e.y,g?4:d?14:-6),x:u(e.x,g?d?-6:6:0)};this.textAlign=e.textAlign||(g?d?"right":"left":"center")};a.StackItem.prototype={destroy:function(){e(this,this.axis)},render:function(a){var e=this.axis.chart,d=this.options,m=d.format,m=m?q(m,this,e.time):d.formatter.call(this);this.label?this.label.attr({text:m,visibility:"hidden"}):
this.label=e.renderer.text(m,null,null,d.useHTML).css(d.style).attr({align:this.textAlign,rotation:d.rotation,visibility:"hidden"}).add(a);this.label.labelrank=e.plotHeight},setOffset:function(a,e,d,m){var b=this.axis,g=b.chart;m=b.translate(b.usePercentage?100:m?m:this.total,0,0,0,1);d=b.translate(d?d:0);d=h(m)&&Math.abs(m-d);a=g.xAxis[0].translate(this.x)+a;b=h(m)&&this.getStackBox(g,this,a,m,e,d,b);(e=this.label)&&b&&(e.align(this.alignOptions,null,b),b=e.alignAttr,e[!1===this.options.crop||g.isInsidePlot(b.x,
b.y)?"show":"hide"](!0))},getStackBox:function(a,e,d,m,b,k,p){var c=e.axis.reversed,g=a.inverted;a=p.height+p.pos-(g?a.plotLeft:a.plotTop);e=e.isNegative&&!c||!e.isNegative&&c;return{x:g?e?m:m-k:d,y:g?a-d-b:e?a-m-k:a-m,width:g?k:b,height:g?b:k}}};H.prototype.getStacks=function(){var a=this;a.yAxis.forEach(function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});a.series.forEach(function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+u(e.options.stack,
""))})};E.prototype.buildStacks=function(){var a=this.series,e=u(this.options.reversedStacks,!0),d=a.length,m;if(!this.isXAxis){this.usePercentage=!1;for(m=d;m--;)a[e?m:d-m-1].setStackedPoints();for(m=0;m<d;m++)a[m].modifyStacks()}};E.prototype.renderStackTotals=function(){var a=this.chart,e=a.renderer,d=this.stacks,m=this.stackTotalGroup;m||(this.stackTotalGroup=m=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());m.translate(a.plotLeft,a.plotTop);t(d,function(a){t(a,function(a){a.render(m)})})};
E.prototype.resetStacks=function(){var a=this,e=a.stacks;a.isXAxis||t(e,function(d){t(d,function(e,b){e.touched<a.stacksTouched?(e.destroy(),delete d[b]):(e.total=null,e.cumulative=null)})})};E.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),t(a,function(a){t(a,function(a){a.cumulative=a.total})}))};v.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var e=this.processedXData,
g=this.processedYData,d=[],m=g.length,b=this.options,k=b.threshold,p=u(b.startFromThreshold&&k,0),c=b.stack,b=b.stacking,q=this.stackKey,t="-"+q,w=this.negStacks,v=this.yAxis,C=v.stacks,l=v.oldStacks,D,A,z,I,f,r,E;v.stacksTouched+=1;for(f=0;f<m;f++)r=e[f],E=g[f],D=this.getStackIndicator(D,r,this.index),I=D.key,z=(A=w&&E<(p?0:k))?t:q,C[z]||(C[z]={}),C[z][r]||(l[z]&&l[z][r]?(C[z][r]=l[z][r],C[z][r].total=null):C[z][r]=new a.StackItem(v,v.options.stackLabels,A,r,c)),z=C[z][r],null!==E?(z.points[I]=z.points[this.index]=
[u(z.cumulative,p)],h(z.cumulative)||(z.base=I),z.touched=v.stacksTouched,0<D.index&&!1===this.singleStacks&&(z.points[I][0]=z.points[this.index+","+r+",0"][0])):z.points[I]=z.points[this.index]=null,"percent"===b?(A=A?q:t,w&&C[A]&&C[A][r]?(A=C[A][r],z.total=A.total=Math.max(A.total,z.total)+Math.abs(E)||0):z.total=B(z.total+(Math.abs(E)||0))):z.total=B(z.total+(E||0)),z.cumulative=u(z.cumulative,p)+(E||0),null!==E&&(z.points[I].push(z.cumulative),d[f]=z.cumulative);"percent"===b&&(v.usePercentage=
!0);this.stackedYData=d;v.oldStacks={}}};v.prototype.modifyStacks=function(){var a=this,e=a.stackKey,d=a.yAxis.stacks,m=a.processedXData,b,k=a.options.stacking;a[k+"Stacker"]&&[e,"-"+e].forEach(function(e){for(var c=m.length,g,p;c--;)if(g=m[c],b=a.getStackIndicator(b,g,a.index,e),p=(g=d[e]&&d[e][g])&&g.points[b.key])a[k+"Stacker"](p,g,c)})};v.prototype.percentStacker=function(a,e,d){e=e.total?100/e.total:0;a[0]=B(a[0]*e);a[1]=B(a[1]*e);this.stackedYData[d]=a[1]};v.prototype.getStackIndicator=function(a,
e,d,m){!h(a)||a.x!==e||m&&a.key!==m?a={x:e,index:0,key:m}:a.index++;a.key=[d,e,a.index].join();return a}});J(G,"parts/Dynamics.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.animate,B=a.Axis,h=a.Chart,e=a.createElement,q=a.css,t=a.defined,u=a.erase,v=a.extend,n=a.fireEvent,g=a.isNumber,d=a.isObject,m=a.isArray,b=a.merge,k=a.objectEach,p=a.pick,c=a.Point,x=a.Series,K=a.seriesTypes,w=a.setAnimation,F=a.splat;a.cleanRecursively=function(b,c){var e={};k(b,function(g,l){if(d(b[l],!0)&&!b.nodeType&&
c[l])g=a.cleanRecursively(b[l],c[l]),Object.keys(g).length&&(e[l]=g);else if(d(b[l])||b[l]!==c[l])e[l]=b[l]});return e};v(h.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),n(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();n(e,"afterAddSeries",{series:d});b&&e.redraw(c)}));return d},addAxis:function(a,c,d,e){var g=c?"xAxis":"yAxis",l=this.options;a=b(a,{index:this[g].length,isX:c});c=new B(this,a);l[g]=F(l[g]||{});l[g].push(a);p(d,!0)&&this.redraw(e);
return c},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,g=c.loading,k=function(){d&&q(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=e("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=e("span",{className:"highcharts-loading-inner"},null,d),E(b,"redraw",k));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;b.styledMode||(q(d,v(g.style,{zIndex:10})),
q(b.loadingSpan,g.labelStyle),b.loadingShown||(q(d,{opacity:0,display:""}),H(d,{opacity:g.style.opacity||.5},{duration:g.showDuration||0})));b.loadingShown=!0;k()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",this.styledMode||H(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){q(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:"xAxis yAxis zAxis series colorAxis pane".split(" "),update:function(c,d,e,m){var l=this,h={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},f,r,w,q,x=[];n(l,"update",{options:c});c.isResponsiveOptions||
l.setResponsive(!1,!0);c=a.cleanRecursively(c,l.options);b(!0,l.userOptions,c);if(f=c.chart){b(!0,l.options.chart,f);"className"in f&&l.setClassName(f.className);"reflow"in f&&l.setReflow(f.reflow);if("inverted"in f||"polar"in f||"type"in f)l.propFromSeries(),r=!0;"alignTicks"in f&&(r=!0);k(f,function(a,b){-1!==l.propsRequireUpdateSeries.indexOf("chart."+b)&&(w=!0);-1!==l.propsRequireDirtyBox.indexOf(b)&&(l.isDirtyBox=!0);-1!==l.propsRequireReflow.indexOf(b)&&(q=!0)});!l.styledMode&&"style"in f&&
l.renderer.setStyle(f.style)}!l.styledMode&&c.colors&&(this.options.colors=c.colors);c.plotOptions&&b(!0,this.options.plotOptions,c.plotOptions);c.time&&this.time===a.time&&(this.time=new a.Time(c.time));k(c,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[h[b]])l[h[b]](a);"chart"!==b&&-1!==l.propsRequireUpdateSeries.indexOf(b)&&(w=!0)});this.collectionsWithUpdate.forEach(function(a){var b;c[a]&&("series"===a&&(b=[],l[a].forEach(function(a,c){a.options.isInternal||
b.push(p(a.options.index,c))})),F(c[a]).forEach(function(c,d){(d=t(c.id)&&l.get(c.id)||l[a][b?b[d]:d])&&d.coll===a&&(d.update(c,!1),e&&(d.touched=!0));!d&&e&&l.collectionsWithInit[a]&&(l.collectionsWithInit[a][0].apply(l,[c].concat(l.collectionsWithInit[a][1]||[]).concat([!1])).touched=!0)}),e&&l[a].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:x.push(a)}))});x.forEach(function(a){a.remove&&a.remove(!1)});r&&l.axes.forEach(function(a){a.update({},!1)});w&&l.series.forEach(function(a){a.update({},
!1)});c.loading&&b(!0,l.options.loading,c.loading);r=f&&f.width;f=f&&f.height;a.isString(f)&&(f=a.relativeLength(f,r||l.chartWidth));q||g(r)&&r!==l.chartWidth||g(f)&&f!==l.chartHeight?l.setSize(r,f,m):p(d,!0)&&l.redraw(m);n(l,"afterUpdate",{options:c,redraw:d,animation:m})},setSubtitle:function(a){this.setTitle(void 0,a)}});h.prototype.collectionsWithInit={xAxis:[h.prototype.addAxis,[!0]],yAxis:[h.prototype.addAxis,[!1]],series:[h.prototype.addSeries]};v(c.prototype,{update:function(a,b,c,e){function g(){l.applyOptions(a);
null===l.y&&k&&(l.graphic=k.destroy());d(a,!0)&&(k&&k.element&&a&&a.marker&&void 0!==a.marker.symbol&&(l.graphic=k.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()),l.connector&&(l.connector=l.connector.destroy()));m=l.index;f.updateParallelArrays(l,m);n.data[m]=d(n.data[m],!0)||d(a,!0)?l.options:p(a,n.data[m]);f.isDirty=f.isDirtyData=!0;!f.fixedBox&&f.hasCartesianSeries&&(h.isDirtyBox=!0);"point"===n.legendType&&(h.isDirtyLegend=!0);b&&h.redraw(c)}var l=this,f=l.series,
k=l.graphic,m,h=f.chart,n=f.options;b=p(b,!0);!1===e?g():l.firePointEvent("update",{options:a},g)},remove:function(a,b){this.series.removePoint(this.series.data.indexOf(this),a,b)}});v(x.prototype,{addPoint:function(a,b,c,d,e){var g=this.options,f=this.data,l=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,m=g.data,h,w=this.xData,q,x,C;b=p(b,!0);h={series:this};this.pointClass.prototype.applyOptions.apply(h,[a]);C=h.x;x=w.length;if(this.requireSorting&&C<w[x-1])for(q=!0;x&&w[x-1]>C;)x--;this.updateParallelArrays(h,
"splice",x,0,0);this.updateParallelArrays(h,x);k&&h.name&&(k[C]=h.name);m.splice(x,0,a);q&&(this.data.splice(x,0,null),this.processData());"point"===g.legendType&&this.generatePoints();c&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(h,"shift"),m.shift()));!1!==e&&n(this,"addPoint",{point:h});this.isDirtyData=this.isDirty=!0;b&&l.redraw(d)},removePoint:function(a,b,c){var d=this,e=d.data,g=e[a],f=d.points,l=d.chart,k=function(){f&&f.length===e.length&&f.splice(a,1);e.splice(a,
1);d.options.data.splice(a,1);d.updateParallelArrays(g||{series:d},"splice",a,1);g&&g.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&l.redraw()};w(c,l);b=p(b,!0);g?g.firePointEvent("remove",null,k):k()},remove:function(a,b,c,d){function e(){g.destroy(d);g.remove=null;f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();p(a,!0)&&f.redraw(b)}var g=this,f=g.chart;!1!==c?n(g,"remove",null,e):e()},update:function(c,d){c=a.cleanRecursively(c,this.userOptions);n(this,"update",{options:c});var e=this,g=e.chart,l=e.userOptions,
k,f=e.initialType||e.type,m=c.type||l.type||g.options.chart.type,h=!(this.hasDerivedData||c.dataGrouping||m&&m!==this.type||void 0!==c.pointStart||c.pointInterval||c.pointIntervalUnit||c.keys),w=K[f].prototype,q,x=["group","markerGroup","dataLabelsGroup","transformGroup"],t=["navigatorSeries","baseSeries"],C=e.finishedAnimating&&{animation:!1},u={};h&&(t.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY",
"maxY","minX","maxX"),!1!==c.visible&&t.push("area","graph"),e.parallelArrays.forEach(function(a){t.push(a+"Data")}),c.data&&this.setData(c.data,!1));c=b(l,C,{index:void 0===l.index?e.index:l.index,pointStart:p(l.pointStart,e.xData[0])},!h&&{data:e.options.data},c);t=x.concat(t);t.forEach(function(a){t[a]=e[a];delete e[a]});e.remove(!1,null,!1,!0);for(q in w)e[q]=void 0;K[m||f]?v(e,K[m||f].prototype):a.error(17,!0,g);t.forEach(function(a){e[a]=t[a]});e.init(g,c);h&&this.points&&(k=e.options,!1===
k.visible?(u.graphic=1,u.dataLabel=1):(k.marker&&!1===k.marker.enabled&&!e._hasPointMarkers&&(u.graphic=1),k.dataLabels&&!1===k.dataLabels.enabled&&!e._hasPointLabels&&(u.dataLabel=1)),this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(u).length&&a.destroyElements(u),!1===k.showInLegend&&a.legendItem&&g.legend.destroyItem(a))},this));c.zIndex!==l.zIndex&&x.forEach(function(a){e[a]&&e[a].attr({zIndex:c.zIndex})});e.initialType=f;g.linkSeries();n(this,"afterUpdate");p(d,!0)&&
g.redraw(h?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});v(B.prototype,{update:function(a,c){var d=this.chart,e=a&&a.events||{};a=b(this.userOptions,a);d.options[this.coll].indexOf&&(d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)]=a);k(d.options[this.coll].events,function(a,b){"undefined"===typeof e[b]&&(e[b]=void 0)});this.destroy(!0);this.init(d,v(a,{events:e}));d.isDirtyBox=!0;p(c,!0)&&d.redraw()},remove:function(a){for(var b=
this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);u(b.axes,this);u(b[c],this);m(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];b[c].forEach(function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})});J(G,"parts/AreaSeries.js",[G["parts/Globals.js"]],function(a){var E=a.color,H=a.pick,B=a.Series,
h=a.seriesType;h("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(e){var h=[],t=[],u=this.xAxis,v=this.yAxis,n=v.stacks[this.stackKey],g={},d=this.index,m=v.series,b=m.length,k,p=H(v.options.reversedStacks,!0)?1:-1,c;e=e||this.points;if(this.options.stacking){for(c=0;c<e.length;c++)e[c].leftNull=e[c].rightNull=null,g[e[c].x]=e[c];a.objectEach(n,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});k=m.map(function(a){return a.visible});t.forEach(function(a,
e){var m=0,q,x;if(g[a]&&!g[a].isNull)h.push(g[a]),[-1,1].forEach(function(l){var m=1===l?"rightNull":"leftNull",h=0,w=n[t[e+l]];if(w)for(c=d;0<=c&&c<b;)q=w.points[c],q||(c===d?g[a][m]=!0:k[c]&&(x=n[a].points[c])&&(h-=x[1]-x[0])),c+=p;g[a][1===l?"rightCliff":"leftCliff"]=h});else{for(c=d;0<=c&&c<b;){if(q=n[a].points[c]){m=q[1];break}c+=p}m=v.translate(m,0,1,0,1);h.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:m,yBottom:m})}})}return h},getGraphPath:function(e){var h=B.prototype.getGraphPath,
t=this.options,u=t.stacking,v=this.yAxis,n,g,d=[],m=[],b=this.index,k,p=v.stacks[this.stackKey],c=t.threshold,x=v.getThreshold(t.threshold),K,t=a.pick(t.connectNulls,"percent"===u),w=function(a,g,l){var h=e[a];a=u&&p[h.x].points[b];var n=h[l+"Null"]||0;l=h[l+"Cliff"]||0;var w,q,h=!0;l||n?(w=(n?a[0]:a[1])+l,q=a[0]+l,h=!!n):!u&&e[g]&&e[g].isNull&&(w=q=c);void 0!==w&&(m.push({plotX:k,plotY:null===w?x:v.getThreshold(w),isNull:h,isCliff:!0}),d.push({plotX:k,plotY:null===q?x:v.getThreshold(q),doCurve:!1}))};
e=e||this.points;u&&(e=this.getStackPoints(e));for(n=0;n<e.length;n++)if(g=e[n].isNull,k=H(e[n].rectPlotX,e[n].plotX),K=H(e[n].yBottom,x),!g||t)t||w(n,n-1,"left"),g&&!u&&t||(m.push(e[n]),d.push({x:n,plotX:k,plotY:K})),t||w(n,n+1,"right");n=h.call(this,m,!0,!0);d.reversed=!0;g=h.call(this,d,!0,!0);g.length&&(g[0]="L");g=n.concat(g);h=h.call(this,m,!1,t);g.xMap=n.xMap;this.areaPath=g;return h},drawGraph:function(){this.areaPath=[];B.prototype.drawGraph.apply(this);var a=this,h=this.areaPath,t=this.options,
u=[["area","highcharts-area",this.color,t.fillColor]];this.zones.forEach(function(e,h){u.push(["zone-area-"+h,"highcharts-area highcharts-zone-area-"+h+" "+e.className,e.color||a.color,e.fillColor||t.fillColor])});u.forEach(function(e){var n=e[0],g=a[n],d=g?"animate":"attr",m={};g?(g.endX=a.preventGraphAnimation?null:h.xMap,g.animate({d:h})):(m.zIndex=0,g=a[n]=a.chart.renderer.path(h).addClass(e[1]).add(a.group),g.isArea=!0);a.chart.styledMode||(m.fill=H(e[3],E(e[2]).setOpacity(H(t.fillOpacity,.75)).get()));
g[d](m);g.startX=h.xMap;g.shiftUnit=t.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})});J(G,"parts/SplineSeries.js",[G["parts/Globals.js"]],function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,B,h){var e=B.plotX,q=B.plotY,t=a[h-1];h=a[h+1];var u,v,n,g;if(t&&!t.isNull&&!1!==t.doCurve&&!B.isCliff&&h&&!h.isNull&&!1!==h.doCurve&&!B.isCliff){a=t.plotY;n=h.plotX;h=h.plotY;var d=0;u=(1.5*e+t.plotX)/2.5;v=(1.5*q+a)/2.5;n=(1.5*e+n)/2.5;g=(1.5*q+h)/2.5;n!==
u&&(d=(g-v)*(n-e)/(n-u)+q-g);v+=d;g+=d;v>a&&v>q?(v=Math.max(a,q),g=2*q-v):v<a&&v<q&&(v=Math.min(a,q),g=2*q-v);g>h&&g>q?(g=Math.max(h,q),v=2*q-g):g<h&&g<q&&(g=Math.min(h,q),v=2*q-g);B.rightContX=n;B.rightContY=g}B=["C",E(t.rightContX,t.plotX),E(t.rightContY,t.plotY),E(u,e),E(v,q),e,q];t.rightContX=t.rightContY=null;return B}})});J(G,"parts/AreaSplineSeries.js",[G["parts/Globals.js"]],function(a){var E=a.seriesTypes.area.prototype,H=a.seriesType;H("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,
getGraphPath:E.getGraphPath,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})});J(G,"parts/ColumnSeries.js",[G["parts/Globals.js"]],function(a){var E=a.animObject,H=a.color,B=a.extend,h=a.defined,e=a.isNumber,q=a.merge,t=a.pick,u=a.Series,v=a.seriesType,n=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},
dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){u.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&d.series.forEach(function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=this,d=a.options,e=a.xAxis,b=a.yAxis,k=e.options.reversedStacks,
k=e.reversed&&!k||!e.reversed&&k,h,c={},n=0;!1===d.grouping?n=1:a.chart.series.forEach(function(d){var e=d.options,g=d.yAxis,k;d.type!==a.type||!d.visible&&a.chart.options.chart.ignoreHiddenSeries||b.len!==g.len||b.pos!==g.pos||(e.stacking?(h=d.stackKey,void 0===c[h]&&(c[h]=n++),k=c[h]):!1!==e.grouping&&(k=n++),d.columnIndex=k)});var q=Math.min(Math.abs(e.transA)*(e.ordinalSlope||d.pointRange||e.closestPointRange||e.tickInterval||1),e.len),w=q*d.groupPadding,u=(q-2*w)/(n||1),d=Math.min(d.maxPointWidth||
e.len,t(d.pointWidth,u*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(u-d)/2+(w+((a.columnIndex||0)+(k?1:0))*u-q/2)*(k?-1:1)};return a.columnMetrics},crispCol:function(a,d,e,b){var g=this.chart,m=this.borderWidth,c=-(m%2?.5:0),m=m%2?.5:1;g.inverted&&g.renderer.isVML&&(m+=1);this.options.crisp&&(e=Math.round(a+e)+c,a=Math.round(a)+c,e-=a);b=Math.round(d+b)+m;c=.5>=Math.abs(d)&&.5<b;d=Math.round(d)+m;b-=d;c&&b&&(--d,b+=1);return{x:a,y:d,width:e,height:b}},translate:function(){var a=this,d=
a.chart,e=a.options,b=a.dense=2>a.closestPointRange*a.xAxis.transA,b=a.borderWidth=t(e.borderWidth,b?0:1),k=a.yAxis,p=e.threshold,c=a.translatedThreshold=k.getThreshold(p),n=t(e.minPointLength,5),q=a.getColumnMetrics(),w=q.width,v=a.barW=Math.max(w,1+2*b),C=a.pointXOffset=q.offset,l=a.dataMin,D=a.dataMax;d.inverted&&(c-=.5);e.pointPadding&&(v=Math.ceil(v));u.prototype.translate.apply(a);a.points.forEach(function(b){var e=t(b.yBottom,c),g=999+Math.abs(e),f=w,g=Math.min(Math.max(-g,b.plotY),k.len+g),
m=b.plotX+C,q=v,x=Math.min(g,e),u,A=Math.max(g,e)-x;n&&Math.abs(A)<n&&(A=n,u=!k.reversed&&!b.negative||k.reversed&&b.negative,b.y===p&&a.dataMax<=p&&k.min<p&&l!==D&&(u=!u),x=Math.abs(x-c)>n?e-n:c-(u?n:0));h(b.options.pointWidth)&&(f=q=Math.ceil(b.options.pointWidth),m-=Math.round((f-w)/2));b.barX=m;b.pointWidth=f;b.tooltipPos=d.inverted?[k.len+k.pos-d.plotLeft-g,a.xAxis.len-m-q/2,A]:[m+q/2,g+k.pos-d.plotTop,A];b.shapeType=a.pointClass.prototype.shapeType||"rect";b.shapeArgs=a.crispCol.apply(a,b.isNull?
[m,c,q,0]:[m,x,q,A])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,d){var e=this.options,b,k=this.pointAttrToOptions||{};b=k.stroke||"borderColor";var g=k["stroke-width"]||"borderWidth",c=a&&a.color||this.color,h=a&&a[b]||e[b]||this.color||c,n=a&&a[g]||e[g]||this[g]||0,k=a&&a.dashStyle||e.dashStyle,w=t(e.opacity,1),u;a&&this.zones.length&&(u=a.getZone(),c=
a.options.color||u&&u.color||this.color,u&&(h=u.borderColor||h,k=u.dashStyle||k,n=u.borderWidth||n));d&&(a=q(e.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,c=a.color||void 0!==d&&H(c).brighten(a.brightness).get()||c,h=a[b]||h,n=a[g]||n,k=a.dashStyle||k,w=t(a.opacity,w));b={fill:c,stroke:h,"stroke-width":n,opacity:w};k&&(b.dashstyle=k);return b},drawPoints:function(){var a=this,d=this.chart,m=a.options,b=d.renderer,k=m.animationLimit||250,h;a.points.forEach(function(c){var g=
c.graphic,p=g&&d.pointCount<k?"animate":"attr";if(e(c.plotY)&&null!==c.y){h=c.shapeArgs;g&&g.element.nodeName!==c.shapeType&&(g=g.destroy());if(g)g[p](q(h));else c.graphic=g=b[c.shapeType](h).add(c.group||a.group);if(m.borderRadius)g[p]({r:m.borderRadius});d.styledMode||g[p](a.pointAttribs(c,c.selected&&"select")).shadow(!1!==c.allowShadow&&m.shadow,null,m.stacking&&!m.borderRadius);g.addClass(c.getClassName(),!0)}else g&&(c.graphic=g.destroy())})},animate:function(a){var d=this,e=this.yAxis,b=d.options,
g=this.chart.inverted,h={},c=g?"translateX":"translateY",q;n&&(a?(h.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(b.threshold))),g?h.translateX=a-e.len:h.translateY=a,d.clipBox&&d.setClip(),d.group.attr(h)):(q=d.group.attr(c),d.group.animate({scaleY:1},B(E(d.options.animation),{step:function(a,b){h[c]=q+b.pos*(e.pos-q);d.group.attr(h)}})),d.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&d.series.forEach(function(d){d.type===a.type&&(d.isDirty=!0)});u.prototype.remove.apply(a,
arguments)}})});J(G,"parts/BarSeries.js",[G["parts/Globals.js"]],function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})});J(G,"parts/ScatterSeries.js",[G["parts/Globals.js"]],function(a){var E=a.Series,H=a.seriesType;H("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 10px"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)},applyJitter:function(){var a=this,h=this.options.jitter,e=this.points.length;h&&this.points.forEach(function(q,t){["x","y"].forEach(function(u,v){var n,g="plot"+u.toUpperCase(),d,m;h[u]&&!q.isNull&&(n=a[u+"Axis"],m=h[u]*n.transA,n&&!n.isLog&&(d=Math.max(0,q[g]-m),n=Math.min(n.len,q[g]+m),v=1E4*
Math.sin(t+v*e),q[g]=d+(n-d)*(v-Math.floor(v)),"x"===u&&(q.clientX=q.plotX)))})})}});a.addEvent(E,"afterTranslate",function(){this.applyJitter&&this.applyJitter()})});J(G,"mixins/centered-series.js",[G["parts/Globals.js"]],function(a){var E=a.deg2rad,H=a.isNumber,B=a.pick,h=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,q=this.chart,t=2*(a.slicedOffset||0),u=q.plotWidth-2*t,q=q.plotHeight-2*t,v=a.center,v=[B(v[0],"50%"),B(v[1],"50%"),a.size||"100%",a.innerSize||0],
n=Math.min(u,q),g,d;for(g=0;4>g;++g)d=v[g],a=2>g||2===g&&/%$/.test(d),v[g]=h(d,[u,q,n,v[2]][g])+(a?t:0);v[3]>v[2]&&(v[3]=v[2]);return v},getStartAndEndRadians:function(a,h){a=H(a)?a:0;h=H(h)&&h>a&&360>h-a?h:a+360;return{start:E*(a+-90),end:E*(h+-90)}}}});J(G,"parts/PieSeries.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,H=a.CenteredSeriesMixin,B=a.defined,h=H.getStartAndEndRadians,e=a.merge,q=a.noop,t=a.pick,u=a.Point,v=a.Series,n=a.seriesType,g=a.setAnimation;n("pie","line",{center:[null,
null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0,connectorShape:"fixedOffset",crookDistance:"70%"},ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,
directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var d=this,b=d.points,e=d.startAngleRad;a||(b.forEach(function(a){var b=a.graphic,g=a.shapeArgs;b&&(b.attr({r:a.startR||d.center[3]/2,start:e,end:e}),b.animate({r:g.r,start:g.start,end:g.end},d.options.animation))}),d.animate=null)},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var a,e=0,b=this.points,
g=b.length,h,c=this.options.ignoreHiddenPoint;for(a=0;a<g;a++)h=b[a],e+=c&&!h.visible?0:h.isNull?0:h.y;this.total=e;for(a=0;a<g;a++)h=b[a],h.percentage=0<e&&(h.visible||!c)?h.y/e*100:0,h.total=e},generatePoints:function(){v.prototype.generatePoints.call(this);this.updateTotals()},getX:function(a,e,b){var d=this.center,g=this.radii?this.radii[b.index]:d[2]/2;return d[0]+(e?-1:1)*Math.cos(Math.asin(Math.max(Math.min((a-d[1])/(g+b.labelDistance),1),-1)))*(g+b.labelDistance)+(0<b.labelDistance?(e?-1:
1)*this.options.dataLabels.padding:0)},translate:function(d){this.generatePoints();var e=0,b=this.options,g=b.slicedOffset,p=g+(b.borderWidth||0),c,n,q=h(b.startAngle,b.endAngle),w=this.startAngleRad=q.start,q=(this.endAngleRad=q.end)-w,u=this.points,C,l,v=b.dataLabels.distance,b=b.ignoreHiddenPoint,A,z=u.length,B;d||(this.center=d=this.getCenter());for(A=0;A<z;A++){B=u[A];c=w+e*q;if(!b||B.visible)e+=B.percentage/100;n=w+e*q;B.shapeType="arc";B.shapeArgs={x:d[0],y:d[1],r:d[2]/2,innerR:d[3]/2,start:Math.round(1E3*
c)/1E3,end:Math.round(1E3*n)/1E3};B.labelDistance=t(B.options.dataLabels&&B.options.dataLabels.distance,v);B.labelDistance=a.relativeLength(B.labelDistance,B.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,B.labelDistance);n=(n+c)/2;n>1.5*Math.PI?n-=2*Math.PI:n<-Math.PI/2&&(n+=2*Math.PI);B.slicedTranslation={translateX:Math.round(Math.cos(n)*g),translateY:Math.round(Math.sin(n)*g)};C=Math.cos(n)*d[2]/2;l=Math.sin(n)*d[2]/2;B.tooltipPos=[d[0]+.7*C,d[1]+.7*l];B.half=n<-Math.PI/
2||n>Math.PI/2?1:0;B.angle=n;c=Math.min(p,B.labelDistance/5);B.labelPosition={natural:{x:d[0]+C+Math.cos(n)*B.labelDistance,y:d[1]+l+Math.sin(n)*B.labelDistance},"final":{},alignment:0>B.labelDistance?"center":B.half?"right":"left",connectorPosition:{breakAt:{x:d[0]+C+Math.cos(n)*c,y:d[1]+l+Math.sin(n)*c},touchingSliceAt:{x:d[0]+C,y:d[1]+l}}}}},drawGraph:null,redrawPoints:function(){var a=this,g=a.chart,b=g.renderer,k,h,c,n,q=a.options.shadow;!q||a.shadowGroup||g.styledMode||(a.shadowGroup=b.g("shadow").attr({zIndex:-1}).add(a.group));
a.points.forEach(function(d){var m={};h=d.graphic;if(!d.isNull&&h){n=d.shapeArgs;k=d.getTranslate();if(!g.styledMode){var p=d.shadowGroup;q&&!p&&(p=d.shadowGroup=b.g("shadow").add(a.shadowGroup));p&&p.attr(k);c=a.pointAttribs(d,d.selected&&"select")}d.delayedRendering?(h.setRadialReference(a.center).attr(n).attr(k),g.styledMode||h.attr(c).attr({"stroke-linejoin":"round"}).shadow(q,p),d.delayedRendering=!1):(h.setRadialReference(a.center),g.styledMode||e(!0,m,c),e(!0,m,n,k),h.animate(m));h.attr({visibility:d.visible?
"inherit":"hidden"});h.addClass(d.getClassName())}else h&&(d.graphic=h.destroy())})},drawPoints:function(){var a=this.chart.renderer;this.points.forEach(function(d){d.graphic||(d.graphic=a[d.shapeType](d.shapeArgs).add(d.series.group),d.delayedRendering=!0)})},searchPoint:q,sortByAngle:function(a,e){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:H.getCenter,getSymbol:q},{init:function(){u.prototype.init.apply(this,
arguments);var a=this,e;a.name=t(a.name,"Slice");e=function(b){a.slice("select"===b.type)};E(a,"select",e);E(a,"unselect",e);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,e){var b=this,d=b.series,g=d.chart,c=d.options.ignoreHiddenPoint;e=t(e,c);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,d.options.data[d.data.indexOf(b)]=b.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(c){if(b[c])b[c][a?"show":"hide"](!0)}),
b.legendItem&&g.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),c&&(d.isDirty=!0),e&&g.redraw())},slice:function(a,e,b){var d=this.series;g(b,d.chart);t(e,!0);this.sliced=this.options.sliced=B(a)?a:!this.sliced;d.options.data[d.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var d=
this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(d.x,d.y,d.r+a,d.r+a,{innerR:this.shapeArgs.r-1,start:d.start,end:d.end})},connectorShapes:{fixedOffset:function(a,e,b){var d=e.breakAt;e=e.touchingSliceAt;return["M",a.x,a.y].concat(b.softConnector?["C",a.x+("left"===a.alignment?-5:5),a.y,2*d.x-e.x,2*d.y-e.y,d.x,d.y]:["L",d.x,d.y]).concat(["L",e.x,e.y])},straight:function(a,e){e=e.touchingSliceAt;return["M",a.x,a.y,"L",e.x,e.y]},crookedLine:function(d,e,b){e=
e.touchingSliceAt;var g=this.series,h=g.center[0],c=g.chart.plotWidth,m=g.chart.plotLeft,g=d.alignment,n=this.shapeArgs.r;b=a.relativeLength(b.crookDistance,1);b="left"===g?h+n+(c+m-h-n)*(1-b):m+(h-n)*b;h=["L",b,d.y];if("left"===g?b>d.x||b<e.x:b<d.x||b>e.x)h=[];return["M",d.x,d.y].concat(h).concat(["L",e.x,e.y])}},getConnectorPath:function(){var a=this.labelPosition,e=this.series.options.dataLabels,b=e.connectorShape,g=this.connectorShapes;g[b]&&(b=g[b]);return b.call(this,{x:a.final.x,y:a.final.y,
alignment:a.alignment},a.connectorPosition,e)}})});J(G,"parts/DataLabels.js",[G["parts/Globals.js"]],function(a){var E=a.arrayMax,H=a.defined,B=a.extend,h=a.format,e=a.merge,q=a.noop,t=a.pick,u=a.relativeLength,v=a.Series,n=a.seriesTypes,g=a.stableSort,d=a.isArray,m=a.splat;a.distribute=function(b,d,e){function c(a,b){return a.target-b.target}var k,h=!0,m=b,p=[],n;n=0;var l=m.reducedLen||d;for(k=b.length;k--;)n+=b[k].size;if(n>l){g(b,function(a,b){return(b.rank||0)-(a.rank||0)});for(n=k=0;n<=l;)n+=
b[k].size,k++;p=b.splice(k-1,b.length)}g(b,c);for(b=b.map(function(a){return{size:a.size,targets:[a.target],align:t(a.align,.5)}});h;){for(k=b.length;k--;)h=b[k],n=(Math.min.apply(0,h.targets)+Math.max.apply(0,h.targets))/2,h.pos=Math.min(Math.max(0,n-h.size*h.align),d-h.size);k=b.length;for(h=!1;k--;)0<k&&b[k-1].pos+b[k-1].size>b[k].pos&&(b[k-1].size+=b[k].size,b[k-1].targets=b[k-1].targets.concat(b[k].targets),b[k-1].align=.5,b[k-1].pos+b[k-1].size>d&&(b[k-1].pos=d-b[k-1].size),b.splice(k,1),h=
!0)}m.push.apply(m,p);k=0;b.some(function(b){var c=0;if(b.targets.some(function(){m[k].pos=b.pos+c;if(Math.abs(m[k].pos-m[k].target)>e)return m.slice(0,k+1).forEach(function(a){delete a.pos}),m.reducedLen=(m.reducedLen||d)-.1*d,m.reducedLen>.1*d&&a.distribute(m,d,e),!0;c+=m[k].size;k++}))return!0});g(m,c)};v.prototype.drawDataLabels=function(){function b(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=
c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}function g(a,b){var c=[],f;if(d(a)&&!d(b))c=a.map(function(a){return e(a,b)});else if(d(b)&&!d(a))c=b.map(function(b){return e(a,b)});else if(d(a)||d(b))for(f=Math.max(a.length,b.length);f--;)c[f]=e(a[f],b[f]);else c=e(a,b);return c}var p=this,c=p.chart,n=p.options,q=n.dataLabels,w=p.points,u,C=p.hasRendered||0,l,v=a.animObject(n.animation).duration,A=Math.min(v,200),z=!c.renderer.forExport&&t(q.defer,0<A),B=c.renderer,q=g(g(c.options.plotOptions&&
c.options.plotOptions.series&&c.options.plotOptions.series.dataLabels,c.options.plotOptions&&c.options.plotOptions[p.type]&&c.options.plotOptions[p.type].dataLabels),q);a.fireEvent(this,"drawDataLabels");if(d(q)||q.enabled||p._hasPointLabels)l=p.plotGroup("dataLabelsGroup","data-labels",z&&!C?"hidden":"inherit",q.zIndex||6),z&&(l.attr({opacity:+C}),C||setTimeout(function(){var a=p.dataLabelsGroup;a&&(p.visible&&l.show(!0),a[n.animation?"animate":"attr"]({opacity:1},{duration:A}))},v-A)),w.forEach(function(d){u=
m(g(q,d.dlOptions||d.options&&d.options.dataLabels));u.forEach(function(e,f){var g=e.enabled&&(!d.isNull||d.dataLabelOnNull)&&b(d,e),k,m,q,w,r=d.dataLabels?d.dataLabels[f]:d.dataLabel,u=d.connectors?d.connectors[f]:d.connector,x=!r;g&&(k=d.getLabelConfig(),m=t(e[d.formatPrefix+"Format"],e.format),k=H(m)?h(m,k,c.time):(e[d.formatPrefix+"Formatter"]||e.formatter).call(k,e),m=e.style,q=e.rotation,c.styledMode||(m.color=t(e.color,m.color,p.color,"#000000"),"contrast"===m.color&&(d.contrastColor=B.getContrast(d.color||
p.color),m.color=e.inside||0>t(e.distance,d.labelDistance)||n.stacking?d.contrastColor:"#000000"),n.cursor&&(m.cursor=n.cursor)),w={r:e.borderRadius||0,rotation:q,padding:e.padding,zIndex:1},c.styledMode||(w.fill=e.backgroundColor,w.stroke=e.borderColor,w["stroke-width"]=e.borderWidth),a.objectEach(w,function(a,b){void 0===a&&delete w[b]}));!r||g&&H(k)?g&&H(k)&&(r?w.text=k:(d.dataLabels=d.dataLabels||[],r=d.dataLabels[f]=q?B.text(k,0,-9999).addClass("highcharts-data-label"):B.label(k,0,-9999,e.shape,
null,null,e.useHTML,null,"data-label"),f||(d.dataLabel=r),r.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(e.className||"")+(e.useHTML?" highcharts-tracker":""))),r.options=e,r.attr(w),c.styledMode||r.css(m).shadow(e.shadow),r.added||r.add(l),e.textPath&&!e.useHTML&&r.setTextPath(d.getDataLabelPath&&d.getDataLabelPath(r)||d.graphic,e.textPath),p.alignDataLabel(d,r,e,null,x)):(d.dataLabel=d.dataLabel&&d.dataLabel.destroy(),d.dataLabels&&(1===d.dataLabels.length?delete d.dataLabels:delete d.dataLabels[f]),
f||delete d.dataLabel,u&&(d.connector=d.connector.destroy(),d.connectors&&(1===d.connectors.length?delete d.connectors:delete d.connectors[f])))})});a.fireEvent(this,"afterDrawDataLabels")};v.prototype.alignDataLabel=function(a,d,e,c,g){var b=this.chart,k=this.isCartesian&&b.inverted,h=t(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=t(a.plotY,-9999),l=d.getBBox(),p,n=e.rotation,q=e.align,u=this.visible&&(a.series.forceDL||b.isInsidePlot(h,Math.round(m),k)||c&&b.isInsidePlot(h,k?c.x+1:c.y+c.height-1,k)),
f="justify"===t(e.overflow,"justify");if(u&&(p=b.renderer.fontMetrics(b.styledMode?void 0:e.style.fontSize,d).b,c=B({x:k?this.yAxis.len-m:h,y:Math.round(k?this.xAxis.len-h:m),width:0,height:0},c),B(e,{width:l.width,height:l.height}),n?(f=!1,h=b.renderer.rotCorr(p,n),h={x:c.x+e.x+c.width/2+h.x,y:c.y+e.y+{top:0,middle:.5,bottom:1}[e.verticalAlign]*c.height},d[g?"attr":"animate"](h).attr({align:q}),m=(n+720)%360,m=180<m&&360>m,"left"===q?h.y-=m?l.height:0:"center"===q?(h.x-=l.width/2,h.y-=l.height/2):
"right"===q&&(h.x-=l.width,h.y-=m?0:l.height),d.placed=!0,d.alignAttr=h):(d.align(e,null,c),h=d.alignAttr),f&&0<=c.height?a.isLabelJustified=this.justifyDataLabel(d,e,h,l,c,g):t(e.crop,!0)&&(u=b.isInsidePlot(h.x,h.y)&&b.isInsidePlot(h.x+l.width,h.y+l.height)),e.shape&&!n))d[g?"attr":"animate"]({anchorX:k?b.plotWidth-a.plotY:a.plotX,anchorY:k?b.plotHeight-a.plotX:a.plotY});u||(d.attr({y:-9999}),d.placed=!1)};v.prototype.justifyDataLabel=function(a,d,e,c,g,h){var b=this.chart,k=d.align,m=d.verticalAlign,
l,p,n=a.box?0:a.padding||0;l=e.x+n;0>l&&("right"===k?d.align="left":d.x=-l,p=!0);l=e.x+c.width-n;l>b.plotWidth&&("left"===k?d.align="right":d.x=b.plotWidth-l,p=!0);l=e.y+n;0>l&&("bottom"===m?d.verticalAlign="top":d.y=-l,p=!0);l=e.y+c.height-n;l>b.plotHeight&&("top"===m?d.verticalAlign="bottom":d.y=b.plotHeight-l,p=!0);p&&(a.placed=!h,a.align(d,null,g));return p};n.pie&&(n.pie.prototype.dataLabelPositioners={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,
d,e,c){return a.getX(e<d.top+2||e>d.bottom-2?c:e,d.half,d)},justify:function(a,d,e){return e[0]+(a.half?-1:1)*(d+a.labelDistance)},alignToPlotEdges:function(a,d,e,c){a=a.getBBox().width;return d?a+c:e-a-c},alignToConnectors:function(a,d,e,c){var b=0,g;a.forEach(function(a){g=a.dataLabel.getBBox().width;g>b&&(b=g)});return d?b+c:e-b-c}},n.pie.prototype.drawDataLabels=function(){var b=this,d=b.data,g,c=b.chart,h=b.options.dataLabels,m=h.connectorPadding,n,q=c.plotWidth,u=c.plotHeight,l=c.plotLeft,D=
Math.round(c.chartWidth/3),A,z=b.center,B=z[2]/2,f=z[1],r,G,N,L,M=[[],[]],J,y,S,U,P=[0,0,0,0],T=b.dataLabelPositioners,O;b.visible&&(h.enabled||b._hasPointLabels)&&(d.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),v.prototype.drawDataLabels.apply(b),d.forEach(function(a){a.dataLabel&&(a.visible?(M[a.half].push(a),a.dataLabel._pos=null,!H(h.style.width)&&!H(a.options.dataLabels&&
a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>D&&(a.dataLabel.css({width:.7*D}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),M.forEach(function(d,e){var k,p,n=d.length,w=[],v;if(n)for(b.sortByAngle(d,e-.5),0<b.maxLabelDistance&&(k=Math.max(0,f-B-b.maxLabelDistance),p=Math.min(f+B+b.maxLabelDistance,c.plotHeight),d.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,
f-B-a.labelDistance),a.bottom=Math.min(f+B+a.labelDistance,c.plotHeight),v=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+v/2,size:v,rank:a.y},w.push(a.distributeBox))}),k=p+v-k,a.distribute(w,k,k/5)),U=0;U<n;U++){g=d[U];N=g.labelPosition;r=g.dataLabel;S=!1===g.visible?"hidden":"inherit";y=k=N.natural.y;w&&H(g.distributeBox)&&(void 0===g.distributeBox.pos?S="hidden":(L=g.distributeBox.size,y=T.radialDistributionY(g)));delete g.positionIndex;if(h.justify)J=
T.justify(g,B,z);else switch(h.alignTo){case "connectors":J=T.alignToConnectors(d,e,q,l);break;case "plotEdges":J=T.alignToPlotEdges(r,e,q,l);break;default:J=T.radialDistributionX(b,g,y,k)}r._attr={visibility:S,align:N.alignment};r._pos={x:J+h.x+({left:m,right:-m}[N.alignment]||0),y:y+h.y-10};N.final.x=J;N.final.y=y;t(h.crop,!0)&&(G=r.getBBox().width,k=null,J-G<m&&1===e?(k=Math.round(G-J+m),P[3]=Math.max(k,P[3])):J+G>q-m&&0===e&&(k=Math.round(J+G-q+m),P[1]=Math.max(k,P[1])),0>y-L/2?P[0]=Math.max(Math.round(-y+
L/2),P[0]):y+L/2>u&&(P[2]=Math.max(Math.round(y+L/2-u),P[2])),r.sideOverflow=k)}}),0===E(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),this.points.forEach(function(a){O=e(h,a.options.dataLabels);if(n=t(O.connectorWidth,1)){var d;A=a.connector;if((r=a.dataLabel)&&r._pos&&a.visible&&0<a.labelDistance){S=r._attr.visibility;if(d=!A)a.connector=A=c.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(b.dataLabelsGroup),
c.styledMode||A.attr({"stroke-width":n,stroke:O.connectorColor||a.color||"#666666"});A[d?"attr":"animate"]({d:a.getConnectorPath()});A.attr("visibility",S)}else A&&(a.connector=A.destroy())}}))},n.pie.prototype.placeDataLabels=function(){this.points.forEach(function(a){var b=a.dataLabel,d;b&&a.visible&&((d=b._pos)?(b.sideOverflow&&(b._attr.width=Math.max(b.getBBox().width-b.sideOverflow,0),b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),
b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](d),b.moved=!0):b&&b.attr({y:-9999}));delete a.distributeBox},this)},n.pie.prototype.alignDataLabel=q,n.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,d=this.options,c=d.center,e=d.minSize||80,g,h=null!==d.size;h||(null!==c[0]?g=Math.max(b[2]-Math.max(a[1],a[3]),e):(g=Math.max(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2),null!==c[1]?g=Math.max(Math.min(g,b[2]-Math.max(a[0],a[2])),e):(g=Math.max(Math.min(g,b[2]-a[0]-a[2]),e),
b[1]+=(a[0]-a[2])/2),g<b[2]?(b[2]=g,b[3]=Math.min(u(d.innerSize||0,g),g),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):h=!0);return h});n.column&&(n.column.prototype.alignDataLabel=function(a,d,g,c,h){var b=this.chart.inverted,k=a.series,m=a.dlBox||a.shapeArgs,n=t(a.below,a.plotY>t(this.translatedThreshold,k.yAxis.len)),l=t(g.inside,!!this.options.stacking);m&&(c=e(m),0>c.y&&(c.height+=c.y,c.y=0),m=c.y+c.height-k.yAxis.len,0<m&&(c.height-=m),b&&(c={x:k.yAxis.len-c.y-c.height,y:k.xAxis.len-
c.x-c.width,width:c.height,height:c.width}),l||(b?(c.x+=n?0:c.width,c.width=0):(c.y+=n?c.height:0,c.height=0)));g.align=t(g.align,!b||l?"center":n?"right":"left");g.verticalAlign=t(g.verticalAlign,b||l?"middle":n?"top":"bottom");v.prototype.alignDataLabel.call(this,a,d,g,c,h);a.isLabelJustified&&a.contrastColor&&d.css({color:a.contrastColor})})});J(G,"modules/overlapping-datalabels.src.js",[G["parts/Globals.js"]],function(a){var E=a.Chart,G=a.isArray,B=a.objectEach,h=a.pick,e=a.addEvent,q=a.fireEvent;
e(E,"render",function(){var a=[];(this.labelCollectors||[]).forEach(function(e){a=a.concat(e())});(this.yAxis||[]).forEach(function(e){e.options.stackLabels&&!e.options.stackLabels.allowOverlap&&B(e.stacks,function(e){B(e,function(e){a.push(e.label)})})});(this.series||[]).forEach(function(e){var q=e.options.dataLabels;e.visible&&(!1!==q.enabled||e._hasPointLabels)&&e.points.forEach(function(e){e.visible&&(G(e.dataLabels)?e.dataLabels:e.dataLabel?[e.dataLabel]:[]).forEach(function(g){var d=g.options;
g.labelrank=h(d.labelrank,e.labelrank,e.shapeArgs&&e.shapeArgs.height);d.allowOverlap||a.push(g)})})});this.hideOverlappingLabels(a)});E.prototype.hideOverlappingLabels=function(a){var e=this,h=a.length,n=e.renderer,g,d,m,b,k,p,c=function(a,b,c,d,e,g,k,h){return!(e>a+c||e+k<a||g>b+d||g+h<b)};m=function(a){var b,c,d,e=a.box?0:a.padding||0;d=0;if(a&&(!a.alignAttr||a.placed))return b=a.alignAttr||{x:a.attr("x"),y:a.attr("y")},c=a.parentGroup,a.width||(d=a.getBBox(),a.width=d.width,a.height=d.height,
d=n.fontMetrics(null,a.element).h),{x:b.x+(c.translateX||0)+e,y:b.y+(c.translateY||0)+e-d,width:a.width-2*e,height:a.height-2*e}};for(d=0;d<h;d++)if(g=a[d])g.oldOpacity=g.opacity,g.newOpacity=1,g.absoluteBox=m(g);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(d=0;d<h;d++)for(p=(m=a[d])&&m.absoluteBox,g=d+1;g<h;++g)if(k=(b=a[g])&&b.absoluteBox,p&&k&&m!==b&&0!==m.newOpacity&&0!==b.newOpacity&&(k=c(p.x,p.y,p.width,p.height,k.x,k.y,k.width,k.height)))(m.labelrank<b.labelrank?m:b).newOpacity=
0;a.forEach(function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&(a.alignAttr&&a.placed?(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b),q(e,"afterHideOverlappingLabels")):a.attr({opacity:c})),a.isOld=!0)})}});J(G,"parts/Interaction.js",[G["parts/Globals.js"]],function(a){var E=a.addEvent,G=a.Chart,B=a.createElement,h=a.css,e=a.defaultOptions,q=a.defaultPlotOptions,t=a.extend,u=a.fireEvent,v=a.hasTouch,n=a.isObject,g=a.isArray,d=a.Legend,
m=a.merge,b=a.pick,k=a.Point,p=a.Series,c=a.seriesTypes,x=a.svg,J;J=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=function(a){var b=c.getPointFromEvent(a);void 0!==b&&(c.isDirectTouch=!0,b.onMouseOver(a))},e;a.points.forEach(function(a){e=g(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);e.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",
d).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(v)a[e].on("touchstart",d);!b.styledMode&&a.options.cursor&&a[e].css(h).css({cursor:a.options.cursor})}}),a._hasTracking=!0);u(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,g=a.chart,k=g.pointer,h=g.renderer,f=g.options.tooltip.snap,m=a.tracker,n,p=function(){if(g.hoverSeries!==a)a.onMouseOver()},q="rgba(192,192,192,"+(x?.0001:.002)+")";if(e&&!c)for(n=
e+1;n--;)"M"===d[n]&&d.splice(n+1,0,d[n+1]-f,d[n+2],"L"),(n&&"M"===d[n]||n===e)&&d.splice(n,0,"L",d[n-2]+f,d[n-1]);m?m.attr({d:d}):a.graph&&(a.tracker=h.path(d).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),g.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:q,fill:c?q:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*f)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",
p).on("mouseout",function(a){k.onTrackerMouseOut(a)});b.cursor&&!g.styledMode&&a.css({cursor:b.cursor});if(v)a.on("touchstart",p)}));u(this,"afterDrawTracker")}};c.column&&(c.column.prototype.drawTracker=J.drawTrackerPoint);c.pie&&(c.pie.prototype.drawTracker=J.drawTrackerPoint);c.scatter&&(c.scatter.prototype.drawTracker=J.drawTrackerPoint);t(d.prototype,{setItemEvents:function(a,b,c){var d=this,e=d.chart.renderer.boxWrapper,g=a instanceof k,h="highcharts-legend-"+(g?"point":"series")+"-active",
n=d.chart.styledMode;(c?b:a.legendGroup).on("mouseover",function(){d.allItems.forEach(function(b){a!==b&&b.setState("inactive",!g)});a.setState("hover");a.visible&&e.addClass(h);n||b.css(d.options.itemHoverStyle)}).on("mouseout",function(){d.styledMode||b.css(m(a.visible?d.itemStyle:d.itemHiddenStyle));d.allItems.forEach(function(b){a!==b&&b.setState("",!g)});e.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};e.removeClass(h);b={browserEvent:b};a.firePointEvent?
a.firePointEvent("legendItemClick",b,c):u(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=B("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){u(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});t(G.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=e.lang,d=b.options.chart.resetZoomButton,
g=d.theme,k=g.states,h="chart"===d.relativeTo||"spaceBox"===d.relativeTo?null:"plotBox";u(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,g,k&&k.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,h)});u(this,"afterShowResetZoom")},zoomOut:function(){u(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(c){var d=this,e,g=d.pointer,k=!1,h=d.inverted?g.mouseDownX:g.mouseDownY,
m;!c||c.resetSelection?(d.axes.forEach(function(a){e=a.zoom()}),g.initiated=!1):c.xAxis.concat(c.yAxis).forEach(function(b){var c=b.axis,l=d.inverted?c.left:c.top,m=d.inverted?l+c.width:l+c.height,n=c.isXAxis,p=!1;if(!n&&h>=l&&h<=m||n||!a.defined(h))p=!0;g[n?"zoomX":"zoomY"]&&p&&(e=c.zoom(b.min,b.max),c.displayBtn&&(k=!0))});m=d.resetZoomButton;k&&!m?d.showResetZoom():!k&&n(m)&&(d.resetZoomButton=m.destroy());e&&d.redraw(b(d.options.chart.animation,c&&c.animation,100>d.pointCount))},pan:function(a,
b){var c=this,d=c.hoverPoints,e;u(this,"pan",{originalEvent:a},function(){d&&d.forEach(function(a){a.setState()});("xy"===b?[1,0]:[1]).forEach(function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,g=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",f=c[d],l=(b.pointRange||0)/2,k=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,h=b.getExtremes(),m=b.toValue(f-g,!0)+l*k,k=b.toValue(f+b.len-g,!0)-l*k,n=k<m,f=n?k:m,m=n?m:k,k=Math.min(h.dataMin,l?h.min:b.toValue(b.toPixels(h.min)-b.minPixelPadding)),
l=Math.max(h.dataMax,l?h.max:b.toValue(b.toPixels(h.max)+b.minPixelPadding)),n=k-f;0<n&&(m+=n,f=k);n=m-l;0<n&&(m=l,f-=n);b.series.length&&f!==h.min&&m!==h.max&&(b.setExtremes(f,m,!1,!1,{trigger:"pan"}),e=!0);c[d]=g});e&&c.redraw(!1);h(c.container,{cursor:"move"})})}});t(k.prototype,{select:function(a,c){var d=this,e=d.series,g=e.chart;a=b(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;e.options.data[e.data.indexOf(d)]=d.options;d.setState(a&&
"select");c||g.getSelectedPoints().forEach(function(a){var b=a.series;a.selected&&a!==d&&(a.selected=a.options.selected=!1,b.options.data[b.data.indexOf(a)]=a.options,a.setState(g.hoverPoints&&b.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");
this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=m(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(c,d){a.isFunction(c)&&E(b,d,c)});this.hasImportedEvents=!0}},setState:function(a,c){var d=Math.floor(this.plotX),e=this.plotY,g=this.series,k=this.state,h=g.options.states[a||"normal"]||{},m=q[g.type].marker&&g.options.marker,f=m&&
!1===m.enabled,n=m&&m.states&&m.states[a||"normal"]||{},p=!1===n.enabled,w=g.stateMarkerGraphic,v=this.marker||{},x=g.chart,B=g.halo,y,E,F,G=m&&g.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===h.enabled||a&&(p||f&&!1===n.enabled)||a&&v.states&&v.states[a]&&!1===v.states[a].enabled)){this.state=a;G&&(y=g.markerAttribs(this,a));if(this.graphic)k&&this.graphic.removeClass("highcharts-point-"+k),a&&this.graphic.addClass("highcharts-point-"+a),x.styledMode||(E=g.pointAttribs(this,
a),F=b(x.options.chart.animation,h.animation),g.options.inactiveOtherPoints&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:E.opacity},F)}),this.connector&&this.connector.animate({opacity:E.opacity},F)),this.graphic.animate(E,F)),y&&this.graphic.animate(y,b(x.options.chart.animation,n.animation,m.animation)),w&&w.hide();else{if(a&&n){k=v.symbol||g.symbol;w&&w.currentSymbol!==k&&(w=w.destroy());if(w)w[c?"animate":"attr"]({x:y.x,y:y.y});else k&&(g.stateMarkerGraphic=w=x.renderer.symbol(k,
y.x,y.y,y.width,y.height).add(g.markerGroup),w.currentSymbol=k);!x.styledMode&&w&&w.attr(g.pointAttribs(this,a))}w&&(w[a&&x.isInsidePlot(d,e,x.inverted)?"show":"hide"](),w.element.point=this)}(a=h.halo)&&a.size?(B||(g.halo=B=x.renderer.path().add((this.graphic||w).parentGroup)),B.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),B.attr({"class":"highcharts-halo highcharts-color-"+b(this.colorIndex,g.colorIndex)+(this.className?" "+this.className:""),zIndex:-1}),B.point=this,x.styledMode||B.attr(t({fill:this.color||
g.color,"fill-opacity":a.opacity},a.attributes))):B&&B.point&&B.point.haloPath&&B.animate({d:B.point.haloPath(0)},null,B.hide);u(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});t(p.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&u(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,
b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&u(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",!0)})},setState:function(a,c){var d=this,e=d.options,g=d.graph,k=e.inactiveOtherPoints,h=e.states,m=e.lineWidth,f=e.opacity,n=b(h[a||"normal"]&&h[a||"normal"].animation,d.chart.options.chart.animation),e=0;a=a||"";if(d.state!==a&&([d.group,d.markerGroup,d.dataLabelsGroup].forEach(function(b){b&&
(d.state&&b.removeClass("highcharts-series-"+d.state),a&&b.addClass("highcharts-series-"+a))}),d.state=a,!d.chart.styledMode)){if(h[a]&&!1===h[a].enabled)return;a&&(m=h[a].lineWidth||m+(h[a].lineWidthPlus||0),f=b(h[a].opacity,f));if(g&&!g.dashstyle)for(h={"stroke-width":m},g.animate(h,n);d["zone-graph-"+e];)d["zone-graph-"+e].attr(h),e+=1;k||[d.group,d.markerGroup,d.dataLabelsGroup,d.labelBySeries].forEach(function(a){a&&a.animate({opacity:f},n)})}c&&k&&d.points&&d.points.forEach(function(b){b.setState&&
b.setState(a)})},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,g,k=d.options.chart.ignoreHiddenSeries,h=c.visible;g=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!h:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][g]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(a){a.options.stacking&&
a.visible&&(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});k&&(d.isDirtyBox=!0);u(c,g);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);u(this,a?"select":"unselect")},drawTracker:J.drawTrackerGraph})});J(G,"parts/Responsive.js",[G["parts/Globals.js"]],function(a){var E=a.Chart,G=a.isArray,B=a.isObject,h=
a.pick,e=a.splat;E.prototype.setResponsive=function(e,h){var q=this.options.responsive,t=[],n=this.currentResponsive;!h&&q&&q.rules&&q.rules.forEach(function(g){void 0===g._id&&(g._id=a.uniqueKey());this.matchResponsiveRule(g,t,e)},this);h=a.merge.apply(0,t.map(function(e){return a.find(q.rules,function(a){return a._id===e}).chartOptions}));h.isResponsiveOptions=!0;t=t.toString()||void 0;t!==(n&&n.ruleIds)&&(n&&this.update(n.undoOptions,e,!0),t?(n=this.currentOptions(h),n.isResponsiveOptions=!0,this.currentResponsive=
{ruleIds:t,mergedOptions:h,undoOptions:n},this.update(h,e,!0)):this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,e){var q=a.condition;(q.callback||function(){return this.chartWidth<=h(q.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=h(q.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=h(q.minWidth,0)&&this.chartHeight>=h(q.minHeight,0)}).call(this)&&e.push(a._id)};E.prototype.currentOptions=function(q){function t(n,g,d,m){var b;a.objectEach(n,function(a,n){if(!m&&-1<u.collectionsWithUpdate.indexOf(n))for(a=
e(a),d[n]=[],b=0;b<a.length;b++)g[n][b]&&(d[n][b]={},t(a[b],g[n][b],d[n][b],m+1));else B(a)?(d[n]=G(a)?[]:{},t(a,g[n]||{},d[n],m+1)):d[n]=h(g[n],null)})}var u=this,v={};t(q,this.options,v,0);return v}});J(G,"masters/highcharts.src.js",[G["parts/Globals.js"]],function(a){return a});G["masters/highcharts.src.js"]._modules=G;return G["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/gestion.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/gestion.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n    <p style=\"font-size: 20px; color: white\">Procesando información, por favor no cierre la ventana.</p>\r\n</ngx-spinner>\r\n<br>\r\n<ng-container>\r\n    <div [hidden]=\"!show_main_title\" class=\"row\">\r\n        <div class=\"col-md-2 col-sm-1\"></div>\r\n        <div class=\"col-md-8 col-sm-10\">\r\n            <div  align=\"center\">\r\n                <h1 class=\"title-custom\">Bienvenido/a a la plataforma de encuestas institucional</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2 col-sm-1\">\r\n            <!--\r\n            <button [hidden]=\"true\" #btnPlayMainAudio id=\"btnPlayMainAudio\" \r\n            class=\"btnPlayMainAudio\" (click)=\"this.main_audio.muted = false;this.main_audio.play()\">Play</button>-->\r\n            <button [hidden]=\"true\" #btnPlayMainAudio id=\"btnPlayMainAudio\" \r\n            class=\"btnPlayMainAudio\" >Play</button>\r\n            <div align=\"right\" *ngIf=\"loading_audio\" style=\"margin-top: 2px\">\r\n                <div class=\"col-md-2 col-sm-12\">\r\n                    <span style=\"color:#cf2a27;font-size:25px\">\r\n                        <nz-spin nzSimple></nz-spin>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div  align=\"right\" *ngIf=\"!loading_audio && audio_finally_loaded && audio_exists\" style=\"margin-top: 2px\">\r\n                <div class=\"col-md-3 col-sm-12\">\r\n                    <table>\r\n                        <tr>\r\n                            <td>\r\n                                <span *ngIf=\"audio_exists\" style=\"color:#cf2a27;font-size:25px\" \r\n                                    class=\"btn_hoverable\" (click)=\"handleAudioClick()\">\r\n                                    <i [class]=\"volume_value>0?(volume_value>30?'fa fa-volume-up':'fa fa-volume-down'):'fa fa-volume-off'\"></i>\r\n                                </span>\r\n                            </td>\r\n                            <td style=\"padding-left:5px\">\r\n                                <span *ngIf=\"audio_exists\" style=\"color:#cf2a27;font-size:25px\" \r\n                                class=\"btn_hoverable\" (click)=\"handleAudioPause()\">\r\n                                    <i [class]=\"audio_paused?'fa fa-play-circle-o':'fa fa-pause-circle-o'\"></i>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"col-md-7 col-sm-12\" [hidden]=\"!show_control_audio\">\r\n                    <nz-slider [(ngModel)]=\"volume_value\" (ngModelChange)=\"setVolumeOfObject($event)\" ></nz-slider>\r\n                </div>\r\n            </div>\r\n            <div  align=\"right\" *ngIf=\"!loading_audio && !audio_finally_loaded && audio_exists\" style=\"margin-top: 2px\">\r\n                <div class=\"col-md-2 col-sm-12\">\r\n                    <span *ngIf=\"audio_exists\" style=\"color:#cf2a27;font-size:25px\" \r\n                    class=\"btn_disabled\" >\r\n                    <i class=\"fa fa-volume-off\"></i>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<hr class=\"mt-0\">\r\n<ng-container *ngIf=\"show_welcome\">\r\n    <div class=\"_container\">\r\n        <app-my-chk-editor [(ngModel)]=\"welcome_text\" [configEditor]=\"{}\" [readonly]=\"true\"></app-my-chk-editor>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10\" align=\"center\">\r\n                <!--\r\n                <div style=\"width: 95%;\" *ngIf=\"page_loaded\" align=\"center\">\r\n                    <video \r\n                    src=\"../../../../../assets/images/BIENVENIDOA.mp4\"\r\n                    autoplay controls width=\"100%\"></video>\r\n                   \r\n                    <video \r\n                    src=\"https://produce365.sharepoint.com/sites/BibliotecaExterno/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FBibliotecaExterno%2FDocumentos%20compartidos%2FComunicaci%C3%B3n%20Interna%2FVIDEOS%2FSistema%20de%20Encuesta%2FBIENVENIDOA%20%282%29%2Emp4&parent=%2Fsites%2FBibliotecaExterno%2FDocumentos%20compartidos%2FComunicaci%C3%B3n%20Interna%2FVIDEOS%2FSistema%20de%20Encuesta&p=true&ga=1\"\r\n                    autoplay controls width=\"100%\"></video>\r\n                   \r\n                </div>\r\n                -->\r\n                \r\n                <div style=\"width: 95%;\" *ngIf=\"page_loaded && idYoutubeVideo\" align=\"center\">\r\n                    <youtube-player\r\n                        [videoId]=\"idYoutubeVideo\"\r\n                        (ready)=\"savePlayer($event)\"\r\n                        [width]=\"'100%'\"\r\n                        [height]=\"400\"\r\n                        (change)=\"onStateChange($event)\">\r\n                    </youtube-player>\r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n        <!--\r\n        <div  style=\"width: 100%;\" *ngIf=\"loaded_media && page_loaded && url_video==null\">\r\n            <img [src]=\"urlArchivo[0]\" width=\"95%\">\r\n        </div>\r\n        <div  align=\"center\" *ngIf=\"loaded_media==false && page_loaded && url_video==null\">\r\n            <img src=\"../../../../../assets/images/Imagen_no_disponible.png\" width=\"450px\">\r\n        </div>\r\n        -->\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top: 20px;\">\r\n        <div class=\"col-sm-12\" align=\"center\">\r\n            <button type=\"button\" class=\"btn btn-primary-custom\" *ngIf=\"!disable_next_btn\" (click)=\"goMainList()\">Continuar&nbsp;<i class=\"fa fa-chevron-circle-right\"></i></button>\r\n            <button type=\"button\" class=\"btn btn-primary-custom\" *ngIf=\"disable_next_btn\" disabled>Continuar&nbsp;<i class=\"fa fa-chevron-circle-right\"></i></button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show_main_list\">\r\n    <app-listado-principal (onIniciarLLenado)=\"handleOnIniciarLLenado($event)\" \r\n    (onIniciarListado)=\"handleOnIniciarListado($event)\"></app-listado-principal>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"_container\" *ngIf=\"show_actual_list\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-1\" align=\"center\">\r\n            <div style=\"margin-top: 145px\">\r\n                <span class=\"btn_hoverable carrusel_icon\" [hidden]=\"index_carrusel==0?true:false\" (click)=\"prev()\" >\r\n                    <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n            <div style=\"width: 100%;\">\r\n                <nz-carousel nzAutoPlay [nzAutoPlaySpeed]=\"10000\" style=\"height: 400px;\">\r\n                    <div nz-carousel-content *ngFor=\"let _div of array_paged_front;let idx of index\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-4\" *ngFor=\"let item of _div.data; let _idx of index\" style=\"height: 390px;\">\r\n                                <div class=\"card\" >\r\n                                    <div class=\"card-body\" \r\n                                    (mouseenter) =\"this.array_hover_control[item.id_encuesta_str]=true;\" \r\n                                    (mouseleave) =\"this.array_hover_control[item.id_encuesta_str]=false;\"\r\n                                    style=\"min-height:300px; max-height:300px;\r\n                                    border: 1px solid rgba(0,0,0,.125);padding: 0px;\">\r\n                                        <div *ngIf=\"!array_hover_control[item.id_encuesta_str]\">\r\n                                            <div style=\"padding:20px\">\r\n                                                <span class=\"text_red\">\r\n                                                    Vigencia:<br>\r\n                                                    Inicio:&nbsp;{{item.fecha_inicio | date:'dd/MM/yyyy hh:mm a'}}<br>\r\n                                                    Fin:&nbsp;&nbsp;&nbsp;{{item.fecha_fin | date:'dd/MM/yyyy hh:mm a'}}\r\n                                                </span>\r\n                                                <br><br><br>\r\n                                                <h3 align=\"center\">{{item.titulo}}</h3>\r\n                                                <p align=\"right\" style=\"font-size: 12px;margin-top:10px\" *ngIf=\"item.es_anonima\"><strong>Esta encuesta es anónima</strong></p>\r\n                                                <p align=\"right\" style=\"font-size: 12px;margin-top:10px\">{{item.mensaje_corto_presentacion}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"array_hover_control[item.id_encuesta_str]\" align=\"center\">\r\n                                            <img *ngIf=\"item.has_imagen && item.loaded\" [src]=\"item.b64_img_presentacion\" width=\"100%\" height=\"100%\">\r\n                                            <img *ngIf=\"!item.has_imagen && item.loaded\" src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"95%\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"card-footer\" style=\"border: 1px solid rgba(0,0,0,.125)\" \r\n                                    *ngIf=\"!item.resuelto && item.fecha_fin_date>today && item.id_estado_resuelto==_ESTADO_COMPLETADO.por_completar\"\r\n                                    align=\"center\">\r\n                                        <div class=\"btn_hoverable\" style=\"width:200px;height:45px\"\r\n                                            (click)=\"verParaLLenado(item)\">\r\n                                            <div class=\"w3-light-red w3-round-xlarge\" align=\"left\" >\r\n                                                <div class=\"w3-container w3-green w3-round-xlarge\" \r\n                                                [ngStyle]=\"{'width': item.porcentaje_avance+'%'}\">&nbsp;</div>\r\n                                            </div>\r\n                                            <div class=\"text_completar\">Completar</div>\r\n                                        </div>                                     \r\n                                    </div>\r\n                                    <div class=\"card-footer\" style=\"border: 1px solid rgba(0,0,0,.125)\"\r\n                                    align=\"center\" *ngIf=\"!item.resuelto && item.fecha_fin_date>today && item.id_estado_resuelto!=_ESTADO_COMPLETADO.por_completar\" >\r\n                                        <button (click)=\"verParaLLenado(item)\" \r\n                                        type=\"button\" class=\"btn btn-primary-custom btn_footer_card_carrusel\" >\r\n                                            Iniciar\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"card-footer\" style=\"border: 1px solid rgba(0,0,0,.125)\"\r\n                                    align=\"center\" *ngIf=\"!item.resuelto && today>=item.fecha_fin_date\" >\r\n                                        <button \r\n                                        type=\"button\" class=\"btn btn-default-custom btn_footer_card_carrusel\" >\r\n                                            Sin llenar\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"card-footer\" style=\"border: 1px solid rgba(0,0,0,.125)\"\r\n                                    align=\"center\" *ngIf=\"item.resuelto\"  >\r\n                                    <button \r\n                                        type=\"button\" class=\"btn btn-default-custom btn_footer_card_carrusel\" >\r\n                                            Finalizado\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                    \r\n                                        \r\n                                    \r\n\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </nz-carousel>\r\n                <span class=\"btn_hoverable\" (click)=\"goListadoTodosEncuestas()\" style=\"color:#dc3545\">Ver todas las encuestas</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-1\" align=\"center\">\r\n            <div style=\"margin-top: 145px\">\r\n                <span class=\"btn_hoverable carrusel_icon\" [hidden]=\"(total_pages>0 && index_carrusel==total_pages-1)?true:false\" (click)=\"next()\">\r\n                    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"verItemParaLLenado\">\r\n    <app-vista-encuesta *ngIf=\"verItemParaLLenado\"\r\n    (onGoInicio)=\"handleGoInicio($event)\"\r\n    [main_data]=\"encuesta_main_data\"\r\n    [welcome_data]=\"encuesta_welcome_data\"\r\n    [indicaciones]=\"indicaciones\"\r\n    [agradecimiento_data]=\"encuesta_agradecimiento_data\"></app-vista-encuesta>\r\n</ng-container>\r\n<ng-container *ngIf=\"verListadoTodos\">\r\n    <app-listado-todos-por-usuario *ngIf=\"verListadoTodos\"\r\n    (onGoListadoPrincipal)=\"handleGoListadoPrincipal($event)\">\r\n    </app-listado-todos-por-usuario>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"_container\" *ngIf=\"verListado\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <span class=\"btn_hoverable\" (click)=\"goBackMainList()\"><u style=\"color:#006192\">Inicio > Encuesta >...</u></span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\" align=\"center\">\r\n            <br><h1 style=\"color:#dc3545\">Listado de encuestas</h1>\r\n        </div>\r\n        <div class=\"col-md-5 col-sm-12\">\r\n            <div class=\"form-group\">\r\n                <label for=\"\">Título</label>\r\n                <nz-form-item>\r\n                    <nz-form-control nzErrorTip=\"Debe ingresar la pregunta!\">\r\n                        <nz-input-group>\r\n                            <input type=\"text\"\r\n                            class=\"form-control\" \r\n                            maxlength=\"500\"\r\n                            placeholder=\"--Buscar por título--\"\r\n                            [(ngModel)]=\"frm.titulo\">\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-12\"></div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n            <label for=\"\">Estado</label>\r\n            <nz-form-item>\r\n                <nz-form-control nzErrorTip=\"Debe ingresar la pregunta!\">\r\n                    <nz-input-group>\r\n                        <nz-select nzAllowClear nzShowSearch nzPlaceHolder=\"--Todos--\"\r\n                        [(ngModel)]=\"frm.estado\">\r\n                            <ng-container *ngFor=\"let item of array_estados\">\r\n                                <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\r\n                            </ng-container>\r\n                        </nz-select>\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5 col-sm-12 row\">\r\n           <div style=\"padding-left:18px\">\r\n            <table>\r\n                <tr style=\"border:0px\">\r\n                    <td style=\"border:0px\"><label>Desde&nbsp;&nbsp;</label></td>\r\n                    <td style=\"border:0px\">\r\n                        <nz-date-picker \r\n                        [(ngModel)]=\"frm.fecha_inicio\"\r\n                        nzFormat=\"dd/MM/yyyy\">\r\n                        </nz-date-picker>\r\n                    </td>\r\n\r\n                    <td style=\"border:0px\"><label>&nbsp;Hasta&nbsp;&nbsp;</label></td>\r\n                    <td style=\"border:0px\">\r\n                        <nz-date-picker\r\n                        [(ngModel)]=\"frm.fecha_fin\"\r\n                        nzFormat=\"dd/MM/yyyy\">\r\n                        </nz-date-picker>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n           </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-12\"></div>\r\n        <div class=\"col-md-4 col-sm-12\">\r\n            <div class=\"form-group text-right\">\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"get_list()\">\r\n                    <i class=\"fa fa-search\"></i> Buscar\r\n                </button>\r\n                &nbsp;&nbsp;\r\n                <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"handleClickLimpiar()\">\r\n                    <i class=\"fa fa-eraser\"aria-hidden=\"true\"></i> Limpiar\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\"> \r\n        <div class=\"table-responsive table-striped table-bordered table-hover\" \r\n        style=\"overflow-x:hidden;border:0px;padding: 0px 10px 0px 10px;\">\r\n            <nz-table #ajaxTable class=\"container-table-custom\" nzShowSizeChanger [nzFrontPagination]=\"false\"\r\n            [nzBordered]=\"true\" [nzData]=\"EncuestaList\" [nzLoading]=\"cargando_tabla\" [nzTotal]=\"total\"\r\n            [(nzPageIndex)]=\"pageIndex\" [(nzPageSize)]=\"pageSize\" (nzPageIndexChange)=\"handleClickBuscar()\"\r\n            (nzPageSizeChange)=\"handleClickBuscar(true)\" style=\"border:0px\">\r\n                <tbody style=\"border:0px\">\r\n                    <tr *ngFor=\"let item of ajaxTable.data; let i = index\" style=\"border:0px\">\r\n                        <td align=\"center\" width=\"300px\" style=\"border:0px\">\r\n                            <div>\r\n                                <img *ngIf=\"item.has_imagen\" [src]=\"item.b64_file\" width=\"100%\">\r\n                                <img *ngIf=\"!item.has_imagen\" src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"100%\">\r\n                            </div>\r\n                        </td>\r\n                        <td style=\"border:0px\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <h3 style=\"color:#dc3545\">{{item.titulo}}</h3>\r\n                                </div>\r\n                                <div class=\"col-sm-12\">\r\n                                    <p>{{item.descripcion}}</p>\r\n                                </div>\r\n                                <div class=\"col-sm-12\" align=\"right\">\r\n                                    <div *ngIf=\"!item.resuelto && item.fecha_fin_date>item.today && item.id_estado_resuelto==_ESTADO_COMPLETADO.por_completar\">\r\n                                        <div class=\"btn_hoverable\" style=\"width:86px;height:45px\"\r\n                                            (click)=\"verParaLLenado(item)\">\r\n                                            <div class=\"w3-light-red w3-round-xlarge\" align=\"left\" >\r\n                                                <div class=\"w3-container w3-green w3-round-xlarge\" \r\n                                                [ngStyle]=\"{'width': item.porcentaje_avance+'%'}\">&nbsp;</div>\r\n                                            </div>\r\n                                            <div class=\"text_completar\">Completar</div>\r\n                                        </div>    \r\n                                    </div>\r\n                                    <button *ngIf=\"!item.resuelto && item.fecha_fin_date>item.today && item.id_estado_resuelto!=_ESTADO_COMPLETADO.por_completar\" \r\n                                        (click)=\"verParaLLenado(item)\" type=\"button\" class=\"btn btn-primary-custom\" >\r\n                                        Iniciar\r\n                                    </button>\r\n                                    <button *ngIf=\"!item.resuelto && item.today>=item.fecha_fin_date\"\r\n                                        (click)=\"verResultados(item)\" type=\"button\" class=\"btn btn-primary-custom\" >\r\n                                        Ver resultados\r\n                                    </button>\r\n                                    <span *ngIf=\"item.resuelto && item.fecha_fin_date>item.today\" >\r\n                                        <strong style=\"color:#c92329\">\r\n                                            Usted ya completó esta encuesta. Pronto podras ver los resultados.\r\n                                        </strong>\r\n                                    </span>\r\n                                    <button *ngIf=\"item.resuelto && item.today>item.fecha_fin_date\" \r\n                                        (click)=\"verResultados(item)\" type=\"button\" class=\"btn btn-primary-custom\" >\r\n                                        Ver resultados\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </nz-table>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n\r\n<ng-container *ngIf=\"verItemParaLLenado\">\r\n    <app-vista-encuesta *ngIf=\"verItemParaLLenado\"\r\n    (onGoInicio)=\"handleGoInicio($event)\"\r\n    [main_data]=\"encuesta_main_data\"\r\n    [welcome_data]=\"encuesta_welcome_data\"\r\n    [indicaciones]=\"indicaciones\"\r\n    [agradecimiento_data]=\"encuesta_agradecimiento_data\"></app-vista-encuesta>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"show_resultados\">\r\n    <app-resultado-chart *ngIf=\"show_resultados\"\r\n    (onEmitDataToHeader)=\"handleOnEmitDataToHeader($event)\"\r\n    (onGoBackListadoAll)=\"handleGoBackListadoAll($event)\"\r\n    [titulo_encuesta]=\"selected_title\"\r\n    [id_encuesta]=\"selected_id_encuesta\"></app-resultado-chart>\r\n</ng-container>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-container *ngIf=\"show_pregunta_llenado\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"row\" *ngIf=\"total>0\">\r\n                    <div class=\"col-sm-12\" align=\"center\"><h1 style=\"color:#dc3545\">{{title?title:''}}</h1></div>\r\n                    <!--<div class=\"col-sm-12\" style=\"padding-top:10px\" *ngIf=\"loaded_pagination\" align=\"center\">\r\n                        <nz-pagination *ngIf=\"loaded_pagination\" [nzPageIndex]=\"pageIndex\" [nzTotal]=\"50\"\r\n                        (nzPageIndexChange)=\"onPageChange($event)\"></nz-pagination>\r\n                    </div>-->\r\n                    <div class=\"col-sm-12\" style=\"padding-top:10px; padding-bottom:10px\" *ngIf=\"!loaded_pagination\" align=\"center\">\r\n                        <span style=\"color:#cf2a27;font-size:25px\">\r\n                            <nz-spin nzSimple></nz-spin>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-sm-12\" style=\"padding-top:10px; padding-bottom:10px\" *ngIf=\"loaded_pagination\" align=\"center\">\r\n                        <!--\r\n                        <nz-radio-group [(ngModel)]=\"pageIndex\" nzButtonStyle=\"solid\" (ngModelChange)=\"onPageChange($event)\">\r\n                            <label *ngFor=\"let page of pagination_array; let idx=index;\"  \r\n                            nz-radio-button\r\n                            [ngClass]=\"{'btn_marked': pagination_array_resolved[idx].resolved   getResolved(page.id_pregunta)}\"\r\n                            [nzValue]=\"page.page\" >{{page.page}}</label>\r\n                        </nz-radio-group>-->\r\n                        <nz-radio-group [(ngModel)]=\"pageIndex\" nzButtonStyle=\"solid\" (ngModelChange)=\"onPageChange($event)\">\r\n                            <label *ngFor=\"let page of getPaginationNotHidden(); let idx=index;\"  \r\n                            nz-radio-button\r\n                            [ngClass]=\"{'btn_marked': page.resolved}\"\r\n                            [nzValue]=\"page.page\" >{{page.page}}</label>\r\n                        </nz-radio-group>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-11 col-sm-9\" *ngIf=\"total>0 && Pregunta\">\r\n                        <h3><button nz-button nzType=\"primary\" nzShape=\"circle\">{{pageIndex}}</button>&nbsp;{{Pregunta.pregunta}}</h3>\r\n                    </div>\r\n                    <div class=\"col-md-1 col-sm-3 row\" *ngIf=\"total>0 && Pregunta\" align=\"right\">\r\n                        <div class=\"col-md-2 col-sm-12 text-right\">\r\n                            <span style=\"color:#cf2a27;font-size:25px\" class=\"btn_hoverable\" \r\n                                (click)=\"start_speech()\">\r\n                                <i class=\"fa fa-volume-up\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <!--\r\n                        <div class=\"col-md-10 col-sm-12\">\r\n                            <nz-slider [(ngModel)]=\"volume_value_pregunta\" (ngModelChange)=\"setVolumeOfPregunta($event)\" ></nz-slider>\r\n                        </div>-->\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12\" style=\"padding-top:5px\" *ngIf=\"total>0 && Pregunta && Pregunta.descripcion && Pregunta.descripcion!=''\">\r\n                        <p>{{Pregunta.descripcion}}</p>\r\n                    </div>\r\n                    <div class=\"col-sm-12\" style=\"padding-top:5px\" *ngIf=\"total>0\" align=\"center\">\r\n                        <div  *ngIf=\"_loaded_media_pregunta && _idYoutubeVideo_pregunta && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.video\" align=\"center\">\r\n                            <youtube-player\r\n                                [videoId]=\"_idYoutubeVideo_pregunta\"\r\n                                (ready)=\"_savePlayer_pregunta($event)\"\r\n                                [width]=\"'100%'\"\r\n                                [height]=\"300\"\r\n                                (change)=\"_onStateChange_pregunta($event)\">\r\n                            </youtube-player>\r\n                        </div>\r\n                        <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_pregunta && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                            <img [src]=\"_urlArchivo_pregunta\" width=\"400px\" height=\"415px\">\r\n                        </div>\r\n                        <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_pregunta==false && Pregunta && Pregunta.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                            <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"400px\" height=\"415px\">\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"col-sm-12\" style=\"padding-top:5px\" *ngIf=\"total>0 && JSON_PREGUNTA!=null\">\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && JSON_PREGUNTA.tbl_data==2\" class=\"row\">\r\n                            <div class=\"col-md-4 col-sm-6\">\r\n                                <div style=\"background-color:#dedede; height: 34px;\">\r\n                                    <label style=\"padding-top:7px\">\r\n                                        &nbsp;&nbsp;<strong>{{JSON_PREGUNTA.tbl_data==1?'Dependecia':'Regimen'}}</strong>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-sm-6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                        <nz-input-group>\r\n                                            <nz-select nzAllowClear nzShowSearch \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta\"\r\n                                            style=\"width: 100%; \"\r\n                                            nzPlaceHolder=\"--Seleccione--\">\r\n                                                <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                    <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                </ng-container>\r\n                                            </nz-select>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && JSON_PREGUNTA.tbl_data==1\" class=\"row\">\r\n                            <div class=\"col-md-4 col-sm-6\">\r\n                                <div style=\"background-color:#dedede; height: 34px;\">\r\n                                    <label style=\"padding-top:7px\">\r\n                                        &nbsp;&nbsp;<strong>Órgano de alta dirección</strong>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-sm-6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                        <nz-input-group>\r\n                                            <nz-select nzAllowClear nzShowSearch \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta.d1\"\r\n                                            (ngModelChange)=\"getD2($event)\"\r\n                                            style=\"width: 100%; \"\r\n                                            nzPlaceHolder=\"--Seleccione--\">\r\n                                                <ng-container *ngFor=\"let item of d1\">\r\n                                                    <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                </ng-container>\r\n                                            </nz-select>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-4 col-sm-6\">\r\n                                <div style=\"background-color:#dedede; height: 34px;\">\r\n                                    <label style=\"padding-top:7px\">\r\n                                        &nbsp;&nbsp;<strong>Dirección/Oficina General</strong>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-sm-6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                        <nz-input-group>\r\n                                            <nz-select nzAllowClear nzShowSearch \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta.d2\"\r\n                                            (ngModelChange)=\"getD3($event)\"\r\n                                            style=\"width: 100%; \"\r\n                                            [nzDisabled]=\"d2_disabled\"\r\n                                            nzPlaceHolder=\"--Seleccione--\">\r\n                                                <ng-container *ngFor=\"let item of d2\">\r\n                                                    <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                </ng-container>\r\n                                            </nz-select>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"col-md-4 col-sm-6\">\r\n                                <div style=\"background-color:#dedede; height: 34px;\">\r\n                                    <label style=\"padding-top:7px\">\r\n                                        &nbsp;&nbsp;<strong>Unidad Orgánica</strong>\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-sm-6\">\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                        <nz-input-group>\r\n                                            <nz-select nzAllowClear nzShowSearch \r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta.d3\"\r\n                                            style=\"width: 100%; \"\r\n                                            [nzDisabled]=\"d3_disabled\"\r\n                                            nzPlaceHolder=\"--Seleccione--\">\r\n                                                <ng-container *ngFor=\"let item of d3\">\r\n                                                    <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                </ng-container>\r\n                                            </nz-select>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\" *ngFor=\"let item of JSON_PREGUNTA.opciones; let idx=index\">\r\n                                    <div  style=\"width:100%;min-height: 40px;text-align: center;border:1px solid #4f4f4f;\" align=\"center\"\r\n                                    [class]=\"JSON_PREGUNTA.respuesta[item.idx].selected?'_btn btn-primary-custom':'_btn btn-white'\"\r\n                                    (click)=\"setOneClickedOnly(idx)\">\r\n                                        {{item.descripcion}}\r\n                                    </div>\r\n                                    <!--\r\n                                    <button type=\"button\" \r\n                                     >\r\n                                    {{item.descripcion}}\r\n                                    </button>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.seleccion_multiple\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\" *ngFor=\"let item of JSON_PREGUNTA.opciones; let idx=index\">\r\n                                    <div [class]=\"JSON_PREGUNTA.respuesta[item.idx].selected?'_btn btn-primary-custom':'_btn btn-white'\"\r\n                                    style=\"width:100%;min-height: 40px;text-align: center;border:1px solid #4f4f4f;\" align=\"center\"\r\n                                    (click)=\"JSON_PREGUNTA.respuesta[item.idx].selected=!JSON_PREGUNTA.respuesta[item.idx].selected\">\r\n                                        {{item.descripcion}}\r\n                                    </div>\r\n                                    <!--\r\n                                    <button type=\"button\" [class]=\"JSON_PREGUNTA.respuesta[item.idx].selected?'btn btn-primary-custom':'btn btn-white'\"\r\n                                    style=\"width:100%;height: 40px\" align=\"center\"\r\n                                    (click)=\"JSON_PREGUNTA.respuesta[item.idx].selected=!JSON_PREGUNTA.respuesta[item.idx].selected\">\r\n                                    {{item.descripcion}}\r\n                                    </button>-->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.numerico_entero\" class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <nz-form-item style=\"width:100%\">\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:100%\">\r\n                                        <nz-input-group style=\"width:100%\">\r\n                                            <input type=\"number\" nz-input [(ngModel)]=\"JSON_PREGUNTA.respuesta\" (keypress)=\"($event.charCode >= 48 && $event.charCode < 58)\"/>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.numerico_decimal\" class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <nz-form-item style=\"width:100%\">\r\n                                    <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:100%\">\r\n                                        <nz-input-group style=\"width:100%\">\r\n                                            <nz-input-number  style=\"width:100%\"\r\n                                                [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                                [nzMin]=\"1\" \r\n                                                [nzMax]=\"9999\" \r\n                                                [nzStep]=\"setNroDecimales(JSON_PREGUNTA.nro_decimal)\">\r\n                                            </nz-input-number>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                            <nz-form-item>\r\n                                <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\">\r\n                                    <nz-input-group>\r\n                                        <nz-select nzAllowClear nzShowSearch \r\n                                        [(ngModel)]=\"JSON_PREGUNTA.respuesta[0]\"\r\n                                        nzPlaceHolder=\"--Seleccione--\">\r\n                                            <ng-container *ngFor=\"let item of JSON_PREGUNTA.opciones\">\r\n                                                <nz-option [nzValue]=\"item.idx\" [nzLabel]=\"item.descripcion\"></nz-option>\r\n                                            </ng-container>\r\n                                        </nz-select>\r\n                                    </nz-input-group>\r\n                                </nz-form-control>\r\n                            </nz-form-item>\r\n                        </div>\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.matriz\">\r\n                            <div class=\"table-responsive table-striped table-bordered table-hover\">\r\n                                <nz-table #basicTable \r\n                                [nzData]=\"JSON_PREGUNTA.respuesta\"\r\n                                [nzFrontPagination]=\"false\"\r\n                                [nzShowPagination]=\"false\"\r\n                                [nzLoading]=\"loading_matriz\"\r\n                                class=\"container-table-custom\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th></th>\r\n                                            <th *ngFor=\"let col of JSON_PREGUNTA.columnas\" align=\"center\">{{col.nombre_columna}}</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr  *ngFor=\"let fila of basicTable.data\">\r\n                                            <td align=\"center\">{{ fila.nombre_fila }}</td>\r\n                                            <td *ngFor=\"let col of fila.columnas;\" align=\"center\">\r\n                                                <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_entero\">\r\n                                                    <nz-form-item style=\"width:95%\">\r\n                                                        <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:150px\">\r\n                                                            <nz-input-group style=\"width:95%\">\r\n                                                                <nz-input-number  style=\"width:95%\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    [nzMin]=\"1\" \r\n                                                                    [nzMax]=\"9999\">\r\n                                                                </nz-input-number>\r\n                                                            </nz-input-group>\r\n                                                        </nz-form-control>\r\n                                                    </nz-form-item>\r\n                                                </div>\r\n                                                <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.numerico_decimal\">\r\n                                                    <nz-form-item style=\"width: 95%\">\r\n                                                        <nz-form-control nzErrorTip=\"Debe seleccionar un número!\" style=\"width:150px\">\r\n                                                            <nz-input-group style=\"width:95%\">\r\n                                                                <nz-input-number  style=\"width:95%\"\r\n                                                                    [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                    [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                    (ngModelChange)=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                    [nzMin]=\"1\" \r\n                                                                    [nzMax]=\"9999\" \r\n                                                                    [nzStep]=\"setNroDecimales(col.forma.nro_decimal)\">\r\n                                                                </nz-input-number>\r\n                                                            </nz-input-group>\r\n                                                        </nz-form-control>\r\n                                                    </nz-form-item>\r\n                                                </div>\r\n                                                <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_unica\">\r\n                                                    <nz-form-item>\r\n                                                        <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:150px\">\r\n                                                            <nz-input-group>\r\n                                                                <nz-select nzAllowClear nzShowSearch\r\n                                                                (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx,true)\"\r\n                                                                [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                style=\"width: 95%; \"\r\n                                                                nzPlaceHolder=\"--Seleccione--\">\r\n                                                                    <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                        <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                    </ng-container>\r\n                                                                </nz-select>\r\n                                                            </nz-input-group>\r\n                                                        </nz-form-control>\r\n                                                    </nz-form-item>\r\n                                                </div>\r\n                                                <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.seleccion_multiple ||\r\n                                                col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_libre\">\r\n                                                    <nz-form-item>\r\n                                                        <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:150px\">\r\n                                                            <nz-input-group>\r\n                                                                <nz-select nzAllowClear nzShowSearch \r\n                                                                [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                style=\"width: 95%; \"\r\n                                                                nzMode=\"multiple\"\r\n                                                                nzPlaceHolder=\"--Seleccione--\">\r\n                                                                    <ng-container *ngFor=\"let _item of col.forma.opciones\">\r\n                                                                        <nz-option [nzValue]=\"_item.descripcion\" [nzLabel]=\"_item.descripcion\"></nz-option>\r\n                                                                    </ng-container>\r\n                                                                </nz-select>\r\n                                                            </nz-input-group>\r\n                                                        </nz-form-control>\r\n                                                    </nz-form-item>\r\n                                                </div>\r\n                                                <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==2\" class=\"row\">\r\n                                                    <nz-form-item>\r\n                                                        <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:150px\">\r\n                                                            <nz-input-group>\r\n                                                                <nz-select nzAllowClear nzShowSearch \r\n                                                                [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                style=\"width: 100%; \"\r\n                                                                nzPlaceHolder=\"--Seleccione--\">\r\n                                                                    <ng-container *ngFor=\"let item of array_regimen_cbo\">\r\n                                                                        <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                    </ng-container>\r\n                                                                </nz-select>\r\n                                                            </nz-input-group>\r\n                                                        </nz-form-control>\r\n                                                    </nz-form-item>\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"col.forma.id_tipo==_TIPO_PREGUNTA.desplegable_institucional && col.forma.tbl_data==1\" class=\"row\">\r\n                                                    <nz-form-item>\r\n                                                        <nz-form-control nzErrorTip=\"Debe seleccionar una alternativa!\" style=\"width:150px\">\r\n                                                            <nz-input-group>\r\n                                                                <nz-select nzAllowClear nzShowSearch \r\n                                                                [formControl]=\"frmMtz[fila.idx][col.idx]\"\r\n                                                                [(ngModel)]=\"fila.respuestas[col.idx]\" \r\n                                                                (ngModelChange)\t=\"setRespuestaMatriz(fila.idx,col.idx)\"\r\n                                                                style=\"width: 100%; \"\r\n                                                                nzPlaceHolder=\"--Seleccione--\">\r\n                                                                    <ng-container *ngFor=\"let item of array_d_gen\">\r\n                                                                        <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.nombre\"></nz-option>\r\n                                                                    </ng-container>\r\n                                                                </nz-select>\r\n                                                            </nz-input-group>\r\n                                                        </nz-form-control>\r\n                                                    </nz-form-item>\r\n                                                </div>\r\n\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </nz-table>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.fecha\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-5 col-sm-6\">\r\n                                    <div style=\"background-color:#EAEFF5; height: 40px;\">\r\n                                        <label style=\"padding-top:9px\">\r\n                                            &nbsp;&nbsp;<strong>Selecciona fecha</strong>\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-7 col-sm-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <nz-date-picker \r\n                                        [(ngModel)]=\"JSON_PREGUNTA.respuesta\" \r\n                                        nzFormat=\"{{formato_fecha}}\"\r\n                                        nzPlaceHolder=\"{{formato_fecha}}\">\r\n                                        </nz-date-picker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> \r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.texto\" >\r\n                            <div class=\"form-group\">\r\n                                <nz-form-item>\r\n                                    <nz-form-control nzErrorTip=\"Debe ingresar un texto.\">\r\n                                        <nz-input-group>\r\n                                            <textarea nz-input class=\"form-control\" \r\n                                            maxlength=\"{{cantidad_caracteres}}\"\r\n                                            [(ngModel)]=\"JSON_PREGUNTA.respuesta\"  placeholder=\"Ingresar indicaciones\"></textarea>\r\n                                        </nz-input-group>\r\n                                    </nz-form-control>\r\n                                </nz-form-item>   \r\n                            </div>\r\n                            <span class=\"text-caracteres\">Caracteres max: {{cantidad_caracteres}}</span>\r\n                        </div> \r\n                        <div *ngIf=\"JSON_PREGUNTA.id_tipo==_TIPO_PREGUNTA.archivo\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6 col-sm-12\">\r\n                                    <label for=\"\">Adjunta tu archivo</label>\r\n                                    <app-file-uploader-custom  \r\n                                    [fileInfo]=\"true\"  \r\n                                    [id]=\"JSON_PREGUNTA.respuesta\" \r\n                                    [(Files)]=\"_imagen_archivo\" \r\n                                    [(Uploading)]=\"estaGuardando\"\r\n                                    [pesoMaximoEnMB]=\"pesoMaximoEnMB\" \r\n                                    [esBorrador]=\"false\" \r\n                                    (FileChange)=\"set_imagen_iden($event)\"\r\n                                    (onRemovedIdFile)=\"handleRemovedFilePresentacion($event)\"\r\n                                    [extensionAceptados]=\"_imagen_extensionAceptados\"   \r\n                                    [tiposMimePermitidos]=\"_imagen_MimePermitidos\" \r\n                                    [view_width]=\"600\"\r\n                                    [puedeVerArchivo]=\"true\"\r\n                                    [puedeEliminarArchivo]=\"true\"\r\n                                    [puedeDescargarArchivo] = \"true\"\r\n                                    [url]=\"url\" \r\n                                    [loading]=\"estaGuardando\">\r\n                                </app-file-uploader-custom>\r\n                                </div>\r\n                            </div>\r\n                        </div> \r\n                    </div>        \r\n                </div>\r\n                <div class=\"row\" style=\"padding-top: 10px\">\r\n                    <div class=\"col-sm-6 text-left\">\r\n                        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"GoBackEncuesta()\" *ngIf=\"pageIndex==1\" >\r\n                            <i class=\"fa fa-reply\"></i> Volver\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"onPageChangePrev()\" *ngIf=\"pageIndex>1\">\r\n                            <i class=\"fa fa-caret-left\"></i> Atrás\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"col-sm-6 text-right\">\r\n                        <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"goFinalizarEncuesta()\" *ngIf=\"pageIndex>=total\" style=\"margin-right: 0px;\">\r\n                            Finalizar <i class=\"fa fa-caret-right\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"onPageChangeNext()\" *ngIf=\"total>pageIndex\"  style=\"margin-right: 0px;\">\r\n                            Siguiente <i class=\"fa fa-caret-right\"></i></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"show_final_envio\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10 row\">\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br><h1 style=\"color:#dc3545\">{{title?title:''}}</h1>\r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br><br><br>\r\n                    <p style=\"font-size:15px\">Usted ha completado y enviado su encuesta con fecha {{fecha_envio | date:'dd/MM/yyyy hh:mm:ss a'}}</p>\r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br>\r\n                    <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"show_agradecimientos()\" style=\"font-size:15px\">\r\n                        <i class=\"fa fa-check\"></i> Aceptar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"show_pantalla_agradecimiento\">\r\n    <div class=\"_container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <br><h1 style=\"color:#dc3545\">{{title?title:''}}</h1>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n            <div class=\"col-sm-10 row\">\r\n                <div class=\"col-sm-11\">\r\n                    <h3 style=\"color:#dc3545\">{{agradecimiento_data?agradecimiento_data.mensaje_agradecimiento:''}}</h3>\r\n                </div>\r\n                <div class=\"col-sm-1\" align=\"right\"></div>\r\n                \r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br>\r\n                    <div  *ngIf=\"_loaded_media_agradecimiento && _idYoutubeVideo_agradecimiento \r\n                    && agradecimiento_data \r\n                    && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.video\" align=\"center\">\r\n                        <youtube-player\r\n                            [videoId]=\"_idYoutubeVideo_agradecimiento\"\r\n                            (ready)=\"_savePlayer_agradecimiento($event)\"\r\n                            [width]=\"'100%'\"\r\n                            [height]=\"400\"\r\n                            (change)=\"_onStateChange_agradecimiento($event)\">\r\n                        </youtube-player>\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_agradecimiento && agradecimiento_data && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                        <img [src]=\"_urlArchivo_agradecimiento\" width=\"400px\" height=\"415px\">\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"_loaded_media_agradecimiento==false && agradecimiento_data && agradecimiento_data.id_tipo_archivo==_TIPO_ARCHIVO.imagen\">\r\n                        <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"400px\" height=\"415px\">\r\n                    </div> \r\n                </div>\r\n                <div class=\"col-sm-12\" align=\"center\">\r\n                    <br>\r\n                    <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"goBackToInicio()\" style=\"font-size:15px\">\r\n                        Volver al inicio <i class=\"fa fa-share\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\"></div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"_container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <span class=\"btn_hoverable\" (click)=\"volver_listado()\"><u style=\"color:#006192\">Inicio > Encuesta > Resultados</u></span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\" align=\"center\">\r\n            <br><h1 style=\"color:#dc3545\">Resultados demográficos de {{titulo_encuesta}}</h1>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <h5 style=\"font-size: 14px\">1. Resultados demográficos por dependencia</h5>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div id=\"chart_dependencias\" style=\"height: 400px; width: 100%;\"></div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <h5 style=\"font-size: 14px\">2. Resultados demográficos por rango de edades</h5>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div id=\"chart_edades\" style=\"height: 400px; width: 100%;\"></div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <h5 style=\"font-size: 14px\">3. Resultados demográficos por sexo</h5>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div id=\"chart_sexos\" style=\"height: 400px; width: 100%;\"></div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <h5 style=\"font-size: 14px\">4. Resultados demográficos por regimén</h5>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div id=\"chart_regimen\" style=\"height: 400px; width: 100%;\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\" *ngIf=\"has_file\">\r\n            <iframe [src]=\"b64_pdf_file\" width=\"100%\" height=\"400px\"></iframe>\r\n        </div>\r\n        <div class=\"col-sm-12\" *ngIf=\"!has_file\" align=\"center\">\r\n            <!--<img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"400px\" height=\"415px\">-->\r\n            <br><h1 style=\"color:#dc3545\">El informe de encuesta aún no ha sido cargado en el sistema.</h1>\r\n        </div>\r\n        <div class=\"col-sm-12\" style=\"padding-top:20px\">\r\n            <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"volver_listado()\">\r\n                <i class=\"fa fa-reply\" aria-hidden=\"true\"></i> Volver\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"show_selected_encuesta\">\r\n    <div class=\"_container\">\r\n        <div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 row\">\r\n                    <div class=\"col-sm-9\"><h3 style=\"color:#dc3545\">{{main_data?main_data.titulo:''}}</h3></div>\r\n                    <div class=\"col-sm-3\" align=\"right\">\r\n                        <button [hidden]=\"true\" #btnPlayWelcomeAudio id=\"btnPlayWelcomeAudio\" \r\n                        class=\"btnPlayWelcomeAudio\" (click)=\"this.welcome_audio.muted = false;this.welcome_audio.play()\">Play</button>\r\n                        <div align=\"right\" *ngIf=\"_loading_audio\" style=\"margin-top: 2px\">\r\n                            <div class=\"col-md-2 col-sm-12\">\r\n                                <span style=\"color:#cf2a27;font-size:25px\">\r\n                                    <nz-spin nzSimple></nz-spin>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div  align=\"right\" *ngIf=\"_audio_loaded && _audio_exists\" style=\"margin-top: 2px\">\r\n                            <div class=\"col-md-3 col-sm-12\">\r\n                                <table>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <span style=\"color:#cf2a27;font-size:25px\" \r\n                                            class=\"btn_hoverable\" (click)=\"_handleWelcomeEncuestaClick()\">\r\n                                                <i [class]=\"_volume_value>0?(_volume_value>30?'fa fa-volume-up':'fa fa-volume-down'):'fa fa-volume-off'\"></i>\r\n                                            </span>\r\n                                        </td>\r\n                                        <td style=\"padding-left:5px\">\r\n                                            <span style=\"color:#cf2a27;font-size:25px\" \r\n                                            class=\"btn_hoverable\" (click)=\"handleAudioPauseEncuesta()\">\r\n                                                <i [class]=\"audio_paused_encuesta?'fa fa-play-circle-o':'fa fa-pause-circle-o'\"></i>\r\n                                        </span>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"col-md-7 col-sm-12\" [hidden]=\"!_show_control_audio\">\r\n                                <nz-slider [(ngModel)]=\"_volume_value\" (ngModelChange)=\"_setVolumeOfObject($event)\" ></nz-slider>\r\n                            </div>\r\n                        </div>\r\n                        <div  align=\"right\" *ngIf=\"!_audio_loaded && _audio_exists\" style=\"margin-top: 2px\">\r\n                            <div class=\"col-md-2 col-sm-12\">\r\n                                <span *ngIf=\"_audio_exists\" style=\"color:#cf2a27;font-size:25px\" \r\n                                class=\"btn_disabled\" >\r\n                                <i class=\"fa fa-volume-off\"></i>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\" style=\"padding-top:5px\">\r\n                    <div class=\"row\" *ngIf=\"main_data.es_anonima\">\r\n                        <div class=\"col-md-3 col-sm-6\">Tipo:</div>\r\n                        <div class=\"col-md-9 col-sm-6\">\r\n                            <strong>Anónima</strong>\r\n                            <p>{{main_data.mensaje_es_anonima}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3 col-sm-6\">Tiempo estimado:</div>\r\n                        <div class=\"col-md-9 col-sm-6\">{{main_data.tiempo_estimado}} minutos</div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"padding-top:5px\">\r\n                        <div class=\"col-md-3 col-sm-6\">Nro de preguntas:</div>\r\n                        <div class=\"col-md-9 col-sm-6\">{{PreguntasList.length}} preguntas</div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"padding-top:5px\">\r\n                        <div class=\"col-sm-12\"><strong><u>Indicaciones</u></strong></div>\r\n                        <div class=\"col-sm-12\">\r\n                            <app-my-chk-editor [(ngModel)]=\"indicaciones\" [configEditor]=\"{}\" [readonly]=\"true\"></app-my-chk-editor>\r\n                        </div>\r\n                    </div>\r\n                    <div align=\"right\" class=\"row\" *ngIf=\"_loading_audio\" style=\"margin-top: 2px\">\r\n                        <div class=\"col-sm-12\">\r\n                            <span style=\"color:#cf2a27;font-size:25px\">\r\n                                <nz-spin nzSimple></nz-spin>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"margin-top: 20px\" *ngIf=\"!_loading_audio\">\r\n                        <div class=\"col-sm-6 text-left\">\r\n                            <button type=\"button\" class=\"btn btn-default-custom\" (click)=\"goInicio()\" >\r\n                                <i class=\"fa fa-reply\"></i> Volver al inicio\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"col-sm-6 text-right\">\r\n                            <button type=\"button\" class=\"btn btn-primary-custom\" (click)=\"goEncuesta()\">\r\n                                Iniciar encuesta <i class=\"fa fa-paper-plane\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6 col-sm-12\">\r\n                    <div align=\"center\" *ngIf=\"show_loader_encuesta\" style=\"margin-top: 5px\">\r\n                        <div>\r\n                            <span style=\"color:#cf2a27;\">\r\n                                <nz-spin nzSimple [nzSize]=\"'large'\"></nz-spin>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"!show_loader_encuesta && _loaded_media && _idYoutubeVideo\" align=\"center\">\r\n                        <youtube-player\r\n                            [videoId]=\"_idYoutubeVideo\"\r\n                            (ready)=\"_savePlayer($event)\"\r\n                            [width]=\"'100%'\"\r\n                            [height]=\"400\"\r\n                            (change)=\"_onStateChange($event)\">\r\n                        </youtube-player>\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"!show_loader_encuesta && _loaded_media && welcome_data.url_video==null\">\r\n                        <img [src]=\"_urlArchivo\" width=\"95%\">\r\n                    </div>\r\n                    <div  style=\"width: 100%;\" *ngIf=\"!show_loader_encuesta && _loaded_media==false && welcome_data.url_video==null\">\r\n                        <img src=\"../../../../../../../assets/images/Imagen_no_disponible.png\" width=\"95%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\" style=\"padding: 0px;\">\r\n                    <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: left;\">\r\n                        <img src=\"../../../../../../../assets/images/logo-produce2.png\" width=\"65%\">\r\n                    </div>\r\n                    <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: center;\">\r\n                        <img src=\"../../../../../../../assets/images/logo-proinnovate.png\" width=\"60%\">\r\n                    </div>\r\n                    <div class=\"col-md-4\" style=\"padding: 0px; text-align-last: right;\">\r\n                        <img src=\"../../../../../../../assets/images/logo-pecap.png\" width=\"60%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show_preguntas\">\r\n    <app-llenado-pregunta *ngIf=\"show_preguntas\"\r\n    (onEmitDataToHeader)=\"handleOnEmitDataToHeader($event)\"\r\n    (onGoBackEncuesta)=\"handleGoBackEncuesta($event)\"\r\n    (onGoToInicio)=\"handleGoBackInicio($event)\"\r\n    [agradecimiento_data]=\"agradecimiento_data\"\r\n    [es_anonima]=\"main_data?main_data.es_anonima:true\"\r\n    [disparadoresRespuestas]=\"disparadoresRespuestas\"\r\n    [paginado_registrado]=\"paginado_registrado\"\r\n    [_total_preguntas]=\"_total_preguntas\"\r\n    [total]=\"total\" [pageIndex]=\"pageIndex\"\r\n    [presetIndex]=\"presetIndex\"\r\n    [id_encuesta]=\"id_encuesta\" \r\n    [title]=\"main_data?main_data.titulo:''\"\r\n   ></app-llenado-pregunta>\r\n</ng-container>");

/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/gestion-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/gestion-routing.module.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ./gestion.component */ "./src/app/modules/encuestado/pages/gestion/gestion.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, gestion_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        {
            path: "",
            component: gestion_component_1.GestionComponent
        },
    ];
    let WelcomeRoutingModule = class WelcomeRoutingModule {
    };
    WelcomeRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            declarations: [],
            exports: [router_1.RouterModule],
        })
    ], WelcomeRoutingModule);
    exports.WelcomeRoutingModule = WelcomeRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/gestion.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/gestion.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.btn_disabled:hover{\r\n  cursor: not-allowed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvL3BhZ2VzL2dlc3Rpb24vZ2VzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW5jdWVzdGFkby9wYWdlcy9nZXN0aW9uL2dlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5faG92ZXJhYmxlOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bl9kaXNhYmxlZDpob3ZlcntcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/gestion.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/gestion.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, forms_1, i18n_1, ng_zorro_antd_1, router_1, ngx_spinner_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let GestionComponent = class GestionComponent {
        constructor(_fileService, _authService, i18n, file_Service, fb, notification, router, activeRouter, _alertService, configuracion_inicial_s, sis_enumerado_s, spinner, sanitizer, cd) {
            this._fileService = _fileService;
            this._authService = _authService;
            this.i18n = i18n;
            this.file_Service = file_Service;
            this.fb = fb;
            this.notification = notification;
            this.router = router;
            this.activeRouter = activeRouter;
            this._alertService = _alertService;
            this.configuracion_inicial_s = configuracion_inicial_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.show_welcome = true;
            this.show_main_list = false;
            this.url_video = null;
            this.audio_exists = false;
            this.page_loaded = false;
            this.welcome_text = '';
            this.loading_audio = true;
            //#region  YOUTUBE VIDEO
            this.idYoutubeVideo = null;
            this.version = '...';
            //#endregion
            this.contentType = "";
            this.urlArchivo = [null, null];
            this.b64_audio = null;
            this.loaded_media = false;
            this.audio_finally_loaded = false;
            this.onGetSavedFileByCode = (codigo, index) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success) {
                        if (resp.Data) {
                            if (resp.Data[0].content != null) {
                                var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                                var len = binary.length;
                                var buffer = new ArrayBuffer(len);
                                var view = new Uint8Array(buffer);
                                for (var i = 0; i < len; i++) {
                                    view[i] = binary.charCodeAt(i);
                                }
                                this.contentType = resp.Data[0].contentType;
                                let contentType = this.contentType;
                                var blob = new Blob([view], { type: contentType });
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                                this.loaded_media = true;
                                this.urlArchivo[index] = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, null);
                                this.loaded_media = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", null);
                            this.loaded_media = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], null);
                        this.loaded_media = false;
                    }
                });
            });
            this.AudioContext = new AudioContext();
            this.audio_started = false;
            this.onGetSavedFileByCodeAudio = (codigo, has_video = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then((resp) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (resp.Success) {
                        if (resp.Data) {
                            if (resp.Data[0].content != null) {
                                var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                                var len = binary.length;
                                var buffer = new ArrayBuffer(len);
                                var view = new Uint8Array(buffer);
                                for (var i = 0; i < len; i++) {
                                    view[i] = binary.charCodeAt(i);
                                }
                                const audioContext = new AudioContext();
                                const gainNode = audioContext.createGain();
                                gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                                gainNode.connect(audioContext.destination);
                                const arr = view; // Uint8Array.from(response.data.data)
                                const audio = yield audioContext.decodeAudioData(arr.buffer);
                                const source = audioContext.createBufferSource();
                                source.buffer = audio;
                                source.loop = true;
                                source.connect(gainNode);
                                if (!has_video) {
                                    source.start(0);
                                    this.audio_started = true;
                                    this.audio_paused = false;
                                }
                                else {
                                    this.audio_paused = true;
                                }
                                this.AudioContext = audioContext;
                                this.AudioSource = source;
                                this.GainNode = gainNode;
                                //var blob = new Blob([view], { type: contentType });
                                this.audio_finally_loaded = true;
                                this.audio_exists = true;
                                this.loading_audio = false;
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, "Error de audio");
                                this.audio_finally_loaded = false;
                                this.loading_audio = false;
                                this.audio_exists = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", "Error de audio");
                            this.audio_finally_loaded = false;
                            this.loading_audio = false;
                            this.audio_exists = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], "Error de audio");
                        this.audio_finally_loaded = false;
                        this.loading_audio = false;
                    }
                }));
            });
            //#region AUDIO
            this.audio_paused = true;
            this.handleAudioPause = () => {
                this.audio_paused = !this.audio_paused;
                if (!this.audio_paused) {
                    if (!this.audio_started) {
                        const gainNode = this.GainNode;
                        gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                        gainNode.connect(this.AudioContext.destination);
                        this.AudioSource.connect(gainNode);
                        this.AudioSource.start(0);
                        this.audio_started = true;
                    }
                    else {
                        this.AudioContext.resume();
                    }
                }
                else {
                    this.AudioContext.suspend();
                }
            };
            this.volume_value = 50;
            this.setVolumeOfObject = (e) => {
                setTimeout(() => {
                    if (!this.audio_paused) {
                        const gainNode = this.GainNode;
                        gainNode.gain.value = e / 100; // setting it to 10%
                        gainNode.connect(this.AudioContext.destination);
                        this.AudioSource.connect(gainNode);
                        if (!this.audio_started) {
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    /*
                    this.main_audio.volume= e/100;
                    this.main_audio.play();*/
                }, 100);
            };
            this.is_muted = false;
            this.mute_unmute_audio = () => {
                this.is_muted = !this.is_muted;
                if (this.is_muted) {
                    this.AudioContext.resume();
                }
                else {
                    this.AudioContext.suspend();
                }
            };
            this.show_control_audio = false;
            //#endregion
            this.show_main_title = true;
            this.disable_next_btn = false;
            this.handleOnIniciarLLenado = (event) => {
                if (event) { //ocultar el play y pausar
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            this.AudioContext.suspend();
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            //this.AudioContext.resume()  
                        }
                    }
                    this.show_main_title = false;
                }
                else { //mostrar y desmutear
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            //this.AudioContext.suspend()
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            if (!this.audio_paused) {
                                this.AudioContext.resume();
                            }
                        }
                    }
                    /*
                    this.main_audio.muted=false;
                    this.main_audio.play();*/
                    this.show_main_title = true;
                    this.disable_next_btn = false;
                }
            };
            this.handleOnIniciarListado = (event) => {
                if (event) { //ocultar el play y mutear O PAUSAR
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            this.AudioContext.suspend();
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            //this.AudioContext.resume()  
                        }
                    }
                    /*
                    this.main_audio.muted=true;
                    this.main_audio.play();*/
                    this.show_main_title = false;
                }
                else { //mostrar y desmutear
                    /*
                    this.main_audio.muted=false;
                    this.main_audio.play();*/
                    if (this.audio_finally_loaded && this.audio_exists) {
                        if (!this.audio_started) {
                            const gainNode = this.GainNode;
                            gainNode.gain.value = this.volume_value / 100; // setting it to 10%
                            gainNode.connect(this.AudioContext.destination);
                            this.AudioSource.connect(gainNode);
                            this.AudioSource.start(0);
                            this.audio_started = true;
                        }
                        if (this.AudioContext.state === 'running') {
                            //this.AudioContext.suspend()
                        }
                        else if (this.AudioContext.state === 'suspended') {
                            if (!this.audio_paused) {
                                this.AudioContext.resume();
                            }
                        }
                    }
                    this.show_main_title = true;
                    this.disable_next_btn = false;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }
            };
            this.i18n.setLocale(i18n_1.es_ES);
            this._fileService.rutaBase = this._authService.GetConfig().Urls.URL_GA_UI;
            this.version = '12.0.1'; //que coincida con el package json--->// "ngx-youtube-player": "^12.0.1
        }
        ngOnInit() {
            this.getConfiguracion_inicial();
        }
        getConfiguracion_inicial() {
            localStorage.setItem("is_filling", "false");
            this.spinner.show();
            this.loading_audio = true;
            this.configuracion_inicial_s.GetActualConfiguracion(_core_1.TIPO_ENCUESTA.intranet).then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (datos.data) {
                    let item = datos.data;
                    //datos.data.texto_bienvenida=datos.data.texto_bienvenida.replace(`\"`,'"');
                    this.welcome_text = datos.data.texto_bienvenida;
                    this.configuracion = datos.data;
                    if (item.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                        if (item.iden_imagen) {
                            yield this.onGetSavedFileByCode(item.iden_imagen, 0);
                        }
                    }
                    else {
                        this.url_video = item.url_video;
                        this.idYoutubeVideo = item.url_video.substring(32, 43);
                    }
                    this.page_loaded = true;
                    this.spinner.hide();
                    if (item.iden_audio_fondo) {
                        yield this.onGetSavedFileByCodeAudio(item.iden_audio_fondo, item.url_video ? true : false);
                        this.loading_audio = false;
                    }
                    else {
                        this.loading_audio = false;
                    }
                }
                this.cd.markForCheck();
                this.cd.detectChanges();
            })).catch(err => { });
        }
        onStateChange(event) {
            this.ytEvent = event.data;
        }
        savePlayer(player) {
            this.player = player;
            setTimeout(() => { this.player.playVideo(); }, 350);
        }
        handleAudioClick() {
            this.show_control_audio = !this.show_control_audio;
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
        //#region PASES ENTRE PANTALLAS
        goMainList() {
            this.disable_next_btn = true;
            this.show_welcome = false;
            this.show_main_list = true;
        }
    };
    GestionComponent.ctorParameters = () => [
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: ng_zorro_antd_1.NzI18nService },
        { type: _core_1.FileService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute },
        { type: _core_1.AlertService },
        { type: _core_1.ConfiguracionInicialService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.ViewChild('btnPlayMainAudio', { static: false })
    ], GestionComponent.prototype, "btnPlayMainAudio", void 0);
    GestionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-gestion',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./gestion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/gestion.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./gestion.component.css */ "./src/app/modules/encuestado/pages/gestion/gestion.component.css")).default]
        })
    ], GestionComponent);
    exports.GestionComponent = GestionComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/gestion.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/gestion.module.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"), __webpack_require__(/*! @app/_shared */ "./src/app/_shared/index.ts"), __webpack_require__(/*! @cmp/core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js"), __webpack_require__(/*! ./gestion.component */ "./src/app/modules/encuestado/pages/gestion/gestion.component.ts"), __webpack_require__(/*! ./gestion-routing.module */ "./src/app/modules/encuestado/pages/gestion/gestion-routing.module.ts"), __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js"), __webpack_require__(/*! ./pages/listado-principal/listado-principal.component */ "./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.ts"), __webpack_require__(/*! ./pages/vista-encuesta/vista-encuesta.component */ "./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.ts"), __webpack_require__(/*! ./pages/llenado-pregunta/llenado-pregunta.component */ "./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.ts"), __webpack_require__(/*! @app/_core/ng-zorro-modules */ "./src/app/_core/ng-zorro-modules.ts"), __webpack_require__(/*! ./pages/listado-todos-por-usuario/listado-todos-por-usuario.component */ "./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.ts"), __webpack_require__(/*! ./pages/resultado-chart/resultado-chart.component */ "./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, _shared_1, core_2, forms_1, ngx_spinner_1, ckeditor5_angular_1, gestion_component_1, gestion_routing_module_1, ngx_youtube_player_1, listado_principal_component_1, vista_encuesta_component_1, llenado_pregunta_component_1, ng_zorro_modules_1, listado_todos_por_usuario_component_1, resultado_chart_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let GestionModule = class GestionModule {
    };
    GestionModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                gestion_routing_module_1.WelcomeRoutingModule,
                _shared_1.SharedModule,
                ng_zorro_modules_1.DemoNgZorroAntdModule,
                //HighchartsChartModule,
                core_2.CoreComponentsModule,
                ngx_spinner_1.NgxSpinnerModule,
                ckeditor5_angular_1.CKEditorModule,
                forms_1.ReactiveFormsModule,
                core_2.CoreDirectivesModule,
                ngx_youtube_player_1.NgxYoutubePlayerModule.forRoot()
            ],
            declarations: [
                gestion_component_1.GestionComponent,
                listado_principal_component_1.ListadoPrincipalComponent,
                vista_encuesta_component_1.VistaEncuestaComponent,
                llenado_pregunta_component_1.LlenadoPreguntaComponent,
                listado_todos_por_usuario_component_1.ListadoTodosPorUsuarioComponent,
                resultado_chart_component_1.ResultadoChartComponent,
            ],
            providers: []
        })
    ], GestionModule);
    exports.GestionModule = GestionModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.css ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n.carrusel_icon{\r\n    font-size:30px;\r\n}\r\n.text_red{\r\n    color: #dc3545;\r\n    font-size:14px\r\n}\r\n.btn_footer_card_carrusel{\r\n    height: 45px;\r\n    width: 200px;\r\n    font-size: 18px;\r\n}\r\n/*\r\n.ant-table-thead > tr > th.ant-table-column-sort {\r\n    background: #dc3545;\r\n}*/\r\n.text_completar {\r\n    float: center;\r\n    margin-right: 6px;\r\n    margin-top: -35px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    font-size: 18px;\r\n    color:#ffffff;\r\n    text-align: center;\r\n}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-red{\r\n    color: #000!important;\r\n    background-color: #dc3545!important;\r\n}\r\n.w3-round-xlarge {\r\n    border-radius: 5px;\r\n    height: 43px;\r\n}\r\n.w3-container {\r\n    padding: 0.2em 16px;\r\n}\r\n.w3-round-xlarge {\r\n\tborder-radius: 5px;\r\n}\r\n.w3-round-xlarge{border-radius:5px}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-container,.w3-panel{padding:0.01em 16px}\r\n.w3-panel{margin-top:16px;margin-bottom:16px}\r\n/* End extract */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvL3BhZ2VzL2dlc3Rpb24vcGFnZXMvbGlzdGFkby1wcmluY2lwYWwvbGlzdGFkby1wcmluY2lwYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTs7O0VBR0U7QUFDRjtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0EsZ0NBQWdDLG9CQUFvQixDQUFDLGtDQUFrQztBQUN2RjtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBLGlCQUFpQixpQkFBaUI7QUFFbEM7cUdBQ3FHLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVTtBQUN4SSx3QkFBd0IsbUJBQW1CO0FBQUMsVUFBVSxlQUFlLENBQUMsa0JBQWtCO0FBQ3hGLGdCQUFnQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW5jdWVzdGFkby9wYWdlcy9nZXN0aW9uL3BhZ2VzL2xpc3RhZG8tcHJpbmNpcGFsL2xpc3RhZG8tcHJpbmNpcGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX2hvdmVyYWJsZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FycnVzZWxfaWNvbntcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG59XHJcbi50ZXh0X3JlZHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgZm9udC1zaXplOjE0cHhcclxufVxyXG4uYnRuX2Zvb3Rlcl9jYXJkX2NhcnJ1c2Vse1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi8qXHJcbi5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLmFudC10YWJsZS1jb2x1bW4tc29ydCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG59Ki9cclxuLnRleHRfY29tcGxldGFyIHtcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC8qY29sb3I6ICMyNDREQUU7Ki9cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnczLWdyZWVuLC53My1ob3Zlci1ncmVlbjpob3Zlcntjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM0Q0FGNTAhaW1wb3J0YW50fVxyXG4udzMtbGlnaHQtcmVke1xyXG4gICAgY29sb3I6ICMwMDAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53My1yb3VuZC14bGFyZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG59XHJcbi53My1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMC4yZW0gMTZweDtcclxufVxyXG4udzMtcm91bmQteGxhcmdlIHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnczLXJvdW5kLXhsYXJnZXtib3JkZXItcmFkaXVzOjVweH1cclxuXHJcbi53My1jb250YWluZXI6YWZ0ZXIsLnczLWNvbnRhaW5lcjpiZWZvcmUsLnczLXBhbmVsOmFmdGVyLC53My1wYW5lbDpiZWZvcmUsLnczLXJvdzphZnRlciwudzMtcm93OmJlZm9yZSwudzMtcm93LXBhZGRpbmc6YWZ0ZXIsLnczLXJvdy1wYWRkaW5nOmJlZm9yZSxcclxuLnczLWNlbGwtcm93OmJlZm9yZSwudzMtY2VsbC1yb3c6YWZ0ZXIsLnczLWNsZWFyOmFmdGVyLC53My1jbGVhcjpiZWZvcmUsLnczLWJhcjpiZWZvcmUsLnczLWJhcjphZnRlcntjb250ZW50OlwiXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofVxyXG4udzMtY29udGFpbmVyLC53My1wYW5lbHtwYWRkaW5nOjAuMDFlbSAxNnB4fS53My1wYW5lbHttYXJnaW4tdG9wOjE2cHg7bWFyZ2luLWJvdHRvbToxNnB4fVxyXG4vKiBFbmQgZXh0cmFjdCAqL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, _core_1, forms_1, ng_zorro_antd_1, router_1, ngx_spinner_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ListadoPrincipalComponent = class ListadoPrincipalComponent {
        constructor(_fileService, _authService, i18n, fb, notification, router, activeRouter, _alertService, encuesta_s, sis_enumerado_s, spinner, sanitizer, cd) {
            this._fileService = _fileService;
            this._authService = _authService;
            this.i18n = i18n;
            this.fb = fb;
            this.notification = notification;
            this.router = router;
            this.activeRouter = activeRouter;
            this._alertService = _alertService;
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this._ESTADO_COMPLETADO = _core_1.ESTADO_COMPLETADO;
            this.today = new Date();
            this.array = [1, 2, 3, 4, 5];
            this.array_paged_front = [];
            this.array_hover_control = {};
            this.total_pages = 0;
            this.index_carrusel = 0;
            this.check_index_carrusel = () => {
                let actual = this.myCarousel ? this.myCarousel.activeIndex : 0;
                setTimeout(() => {
                    this.index_carrusel = actual;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                    this.check_index_carrusel();
                }, 150);
            };
            this.contentType = "";
            this.urlArchivo = [];
            this.b64_audio = null;
            this.onGetSavedFileByCode = (codigo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success) {
                        if (resp.Data) {
                            if (resp.Data[0].content != null) {
                                var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                                var len = binary.length;
                                var buffer = new ArrayBuffer(len);
                                var view = new Uint8Array(buffer);
                                for (var i = 0; i < len; i++) {
                                    view[i] = binary.charCodeAt(i);
                                }
                                this.contentType = resp.Data[0].contentType;
                                let contentType = this.contentType;
                                //var blob = new Blob([view], { type: contentType });
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                                //this.urlArchivo[index]= this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError);
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar");
                        }
                    }
                    if (!resp.Success)
                        this._alertService.open("error", resp.Messages[0]);
                });
            });
            this.onGetSavedFileByCodeWithReturn = (codigo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let ur_file = null, has_file = false;
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success && resp.Data && resp.Data[0].content != null) {
                        var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                        var len = binary.length;
                        var buffer = new ArrayBuffer(len);
                        var view = new Uint8Array(buffer);
                        for (var i = 0; i < len; i++) {
                            view[i] = binary.charCodeAt(i);
                        }
                        this.contentType = resp.Data[0].contentType;
                        let contentType = this.contentType;
                        //var blob = new Blob([view], { type: contentType });
                        ur_file = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                        has_file = true;
                    }
                });
                return ur_file;
                //return has_file?this.sanitizer.bypassSecurityTrustResourceUrl(ur_file):null;
            });
            /*
            this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
            */
            //
            this.show_actual_list = true;
            this.verItemParaLLenado = false;
            this.selected_item = null;
            this.onIniciarLLenado = new core_1.EventEmitter();
            this.encuesta_data = {};
            this.onIniciarListado = new core_1.EventEmitter();
            this.verListadoTodos = false;
            this.goListadoTodosEncuestas = () => {
                this.show_actual_list = false;
                this.verListadoTodos = true;
                this.onIniciarListado.emit(true);
            };
            this.handleGoListadoPrincipal = (e = null) => {
                this.show_actual_list = true;
                //this.getEncuestasListByUser();
                this.verListadoTodos = false;
                this.onIniciarListado.emit(false);
            };
        }
        ngOnInit() {
            this.getEncuestasListByUser();
            this.check_index_carrusel();
        }
        getEncuestasListByUser() {
            localStorage.setItem("is_filling", "false");
            let filtro = { dni_user: '', id_dependencia: 0, today: new Date(), id_tipo_encuesta: _core_1.TIPO_ENCUESTA.intranet };
            this.spinner.show();
            this.encuesta_s._GetEncuestasListByUser(filtro)
                .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let array_data = datos.data.filter(f => f.resuelto != true);
                array_data.forEach(x => {
                    let prs = (x.conteo_resuelto ? (100 * (x.conteo_resuelto / x.total_preguntas)) : 0);
                    x.porcentaje_avance = String(prs > 100 ? 100 : prs);
                    x.id_encuesta_str = String(x.id_encuesta);
                    x.fecha_fin_date = new Date(x.fecha_fin);
                    this.array_hover_control[String(x.id_encuesta)] = false;
                });
                let new_front = [];
                let idx = 0, _arr = [], page = 1;
                for (let i = 0; i < array_data.length; i++) {
                    let e = array_data[i];
                    e.is_mouse_hover = false; ///ogligatorio, no remover, es un auxiliar para el mouseover
                    e.loaded = false; ///ogligatorio, no remover, es un auxiliar para el mouseover
                    let b64 = null;
                    if (e.iden_imagen_presentacion != null) {
                        b64 = yield this.onGetSavedFileByCodeWithReturn(e.iden_imagen_presentacion);
                    }
                    e.b64_img_presentacion = b64;
                    e.has_imagen = b64 ? true : false;
                    e.loaded = true;
                    _arr.push(e);
                    idx += 1;
                    if (idx == 3) {
                        new_front.push({
                            page: page,
                            data: _arr
                        });
                        idx = 0;
                        _arr = [];
                        page++;
                    }
                    else {
                        if (i == array_data.length - 1) {
                            if (_arr.length > 0) {
                                new_front.push({
                                    page: page,
                                    data: _arr
                                });
                            }
                        }
                    }
                }
                this.total_pages = new_front.length;
                this.array_paged_front = new_front;
                this.spinner.hide();
                this.cd.markForCheck();
                this.cd.detectChanges();
            }))
                .catch(() => { this.spinner.hide(); });
        }
        prev() {
            this.myCarousel.pre();
            //this.myCarousel.goTo(Number(this.index_carrusel));
        }
        next() {
            this.myCarousel.next();
        }
        verParaLLenado(item) {
            this.spinner.show();
            this.encuesta_s._getEncuestaDataByID(item.id_encuesta).then(datos => {
                this.encuesta_data = datos.data;
                this.encuesta_main_data = this.encuesta_data.encuesta;
                this.encuesta_welcome_data = this.encuesta_data.bienvenida;
                this.indicaciones = this.encuesta_data.bienvenida.indicaciones ? this.encuesta_data.bienvenida.indicaciones : '';
                this.encuesta_agradecimiento_data = this.encuesta_data.agradecimiento;
                this.selected_item = item;
                this.onIniciarLLenado.emit(true);
                this.verItemParaLLenado = true;
                this.spinner.hide();
                this.show_actual_list = false;
                this.cd.detectChanges();
                this.cd.markForCheck();
            }).catch(err => { });
        }
        handleGoInicio(e) {
            this.verItemParaLLenado = false;
            this.show_actual_list = true;
            this.onIniciarLLenado.emit(false);
            this.getEncuestasListByUser();
        }
    };
    ListadoPrincipalComponent.ctorParameters = () => [
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: ng_zorro_antd_1.NzI18nService },
        { type: forms_1.FormBuilder },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute },
        { type: _core_1.AlertService },
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.ViewChild(ng_zorro_antd_1.NzCarouselComponent, { static: false })
    ], ListadoPrincipalComponent.prototype, "myCarousel", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoPrincipalComponent.prototype, "onIniciarLLenado", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoPrincipalComponent.prototype, "onIniciarListado", void 0);
    ListadoPrincipalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-listado-principal',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./listado-principal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./listado-principal.component.css */ "./src/app/modules/encuestado/pages/gestion/pages/listado-principal/listado-principal.component.css")).default]
        })
    ], ListadoPrincipalComponent);
    exports.ListadoPrincipalComponent = ListadoPrincipalComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n\r\ntable{\r\n    border:0px\r\n}\r\n\r\n.text_completar {\r\n    float: center;\r\n    margin-right: 0px;\r\n    margin-top: -28px;\r\n    position: relative;\r\n    z-index: 2;\r\n    /*color: #244DAE;*/\r\n    font-size: 14px;\r\n    color:#ffffff;\r\n    text-align: center;\r\n}\r\n\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n\r\n.w3-light-red{\r\n    color: #000!important;\r\n    background-color: #dc3545!important;\r\n}\r\n\r\n.w3-round-xlarge {\r\n    border-radius: 5px;\r\n    height: 34px;\r\n}\r\n\r\n.w3-container {\r\n    padding: 0.2em 16px;\r\n}\r\n\r\n.w3-round-xlarge {\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.w3-round-xlarge{border-radius:5px}\r\n\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n\r\n.w3-container,.w3-panel{padding:0.01em 16px}\r\n\r\n.w3-panel{margin-top:16px;margin-bottom:16px}\r\n\r\n/* End extract */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvL3BhZ2VzL2dlc3Rpb24vcGFnZXMvbGlzdGFkby10b2Rvcy1wb3ItdXN1YXJpby9saXN0YWRvLXRvZG9zLXBvci11c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFJQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUNBLGdDQUFnQyxvQkFBb0IsQ0FBQyxrQ0FBa0M7O0FBQ3ZGO0lBQ0kscUJBQXFCO0lBQ3JCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUNBLGlCQUFpQixpQkFBaUI7O0FBRWxDO3FHQUNxRyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVU7O0FBQ3hJLHdCQUF3QixtQkFBbUI7O0FBQUMsVUFBVSxlQUFlLENBQUMsa0JBQWtCOztBQUN4RixnQkFBZ0IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VuY3Vlc3RhZG8vcGFnZXMvZ2VzdGlvbi9wYWdlcy9saXN0YWRvLXRvZG9zLXBvci11c3VhcmlvL2xpc3RhZG8tdG9kb3MtcG9yLXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5faG92ZXJhYmxlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIGJvcmRlcjowcHhcclxufVxyXG5cclxuXHJcblxyXG4udGV4dF9jb21wbGV0YXIge1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgLypjb2xvcjogIzI0NERBRTsqL1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udzMtZ3JlZW4sLnczLWhvdmVyLWdyZWVuOmhvdmVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzRDQUY1MCFpbXBvcnRhbnR9XHJcbi53My1saWdodC1yZWR7XHJcbiAgICBjb2xvcjogIzAwMCFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcclxufVxyXG5cclxuLnczLXJvdW5kLXhsYXJnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuLnczLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAxNnB4O1xyXG59XHJcbi53My1yb3VuZC14bGFyZ2Uge1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udzMtcm91bmQteGxhcmdle2JvcmRlci1yYWRpdXM6NXB4fVxyXG5cclxuLnczLWNvbnRhaW5lcjphZnRlciwudzMtY29udGFpbmVyOmJlZm9yZSwudzMtcGFuZWw6YWZ0ZXIsLnczLXBhbmVsOmJlZm9yZSwudzMtcm93OmFmdGVyLC53My1yb3c6YmVmb3JlLC53My1yb3ctcGFkZGluZzphZnRlciwudzMtcm93LXBhZGRpbmc6YmVmb3JlLFxyXG4udzMtY2VsbC1yb3c6YmVmb3JlLC53My1jZWxsLXJvdzphZnRlciwudzMtY2xlYXI6YWZ0ZXIsLnczLWNsZWFyOmJlZm9yZSwudzMtYmFyOmJlZm9yZSwudzMtYmFyOmFmdGVye2NvbnRlbnQ6XCJcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9XHJcbi53My1jb250YWluZXIsLnczLXBhbmVse3BhZGRpbmc6MC4wMWVtIDE2cHh9LnczLXBhbmVse21hcmdpbi10b3A6MTZweDttYXJnaW4tYm90dG9tOjE2cHh9XHJcbi8qIEVuZCBleHRyYWN0ICovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.ts ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ListadoTodosPorUsuarioComponent = class ListadoTodosPorUsuarioComponent {
        constructor(notification, encuesta_s, sis_enumerado_s, spinner, modal, _fileService, sanitizer, cd) {
            this.notification = notification;
            this.encuesta_s = encuesta_s;
            this.sis_enumerado_s = sis_enumerado_s;
            this.spinner = spinner;
            this.modal = modal;
            this._fileService = _fileService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.onGoListadoPrincipal = new core_1.EventEmitter();
            this.onEmitDataToHeader = new core_1.EventEmitter();
            this.array_estados = [{ id: 1, name: 'Vigentes' }, { id: 2, name: 'Anteriores' }];
            this.frm = {
                titulo: null,
                estado: 1,
                fecha_inicio: null,
                fecha_fin: null
            };
            this.handleOnEmitDataToHeader = (e) => {
                this.onEmitDataToHeader.emit(e);
            };
            this._ESTADO_COMPLETADO = _core_1.ESTADO_COMPLETADO;
            this.EncuestaList = [];
            this.cargando_tabla = true;
            this.pageIndex = 1;
            this.total = 0;
            this.pageSize = 10;
            this.get_list = () => {
                localStorage.setItem("is_filling", "false");
                this.cargando_tabla = true;
                let filtro = Object.assign({}, this.frm);
                this.spinner.show();
                let today = new Date(); //
                this.encuesta_s._GetAllEncuestasListByUser(filtro, this.pageIndex, this.pageSize)
                    .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    this.spinner.hide();
                    if (datos && datos.data && datos.data.Data) {
                        let dt = datos.data.Data;
                        for (let i = 0; i < dt.length; i++) {
                            let e = dt[i];
                            e.porcentaje_avance = String(e.conteo_resuelto ? (100 * (e.conteo_resuelto / e.total_preguntas)) : 0);
                            e.fecha_fin_date = new Date(e.fin);
                            e.today = today;
                            let b64 = yield this.onGetSavedFileByCodeWithReturn(e.iden_imagen);
                            dt[i].b64_file = b64;
                            dt[i].has_imagen = b64 ? true : false;
                        }
                        this.EncuestaList = dt;
                        this.total = datos.data.TotalRows;
                    }
                    this.cargando_tabla = false;
                }))
                    .catch(() => {
                    this.cargando_tabla = false;
                });
            };
            this.onGetSavedFileByCodeWithReturn = (codigo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let ur_file = null, has_file = false;
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success && resp.Data && resp.Data[0].content != null) {
                        var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                        var len = binary.length;
                        var buffer = new ArrayBuffer(len);
                        var view = new Uint8Array(buffer);
                        for (var i = 0; i < len; i++) {
                            view[i] = binary.charCodeAt(i);
                        }
                        let contentType = resp.Data[0].contentType;
                        //var blob = new Blob([view], { type: contentType });
                        ur_file = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                        has_file = true;
                    }
                });
                //return ur_file;
                return has_file ? this.sanitizer.bypassSecurityTrustResourceUrl(ur_file) : null;
            });
            this.handleClickLimpiar = () => {
                this.frm = {
                    titulo: null,
                    estado: 1,
                    fecha_inicio: null,
                    fecha_fin: null
                };
                this.pageIndex = 1;
                this.get_list();
            };
            this.handleClickBuscar = (reset = false) => {
                if (reset) {
                    this.pageIndex = 1;
                }
                this.get_list();
            };
            this.goBackMainList = () => {
                this.onGoListadoPrincipal.emit(true);
                localStorage.setItem("is_filling", "false");
            };
            this.verListado = true;
            this.verItemParaLLenado = false;
            this.encuesta_data = {};
            this.selected_id_encuesta = 0;
            this.selected_title = 0;
            this.show_resultados = false;
            this.handleGoBackListadoAll = (e) => {
                this.show_resultados = false;
                this.verListado = true;
                localStorage.setItem("is_filling", "false");
            };
        }
        ngOnInit() {
            this.get_list();
        }
        verParaLLenado(item) {
            this.spinner.show();
            this.encuesta_s._getEncuestaDataByID(item.id_encuesta).then(datos => {
                this.encuesta_data = datos.data;
                this.encuesta_main_data = this.encuesta_data.encuesta;
                this.encuesta_welcome_data = this.encuesta_data.bienvenida;
                this.indicaciones = this.encuesta_data.bienvenida.indicaciones ? this.encuesta_data.bienvenida.indicaciones : '';
                this.encuesta_agradecimiento_data = this.encuesta_data.agradecimiento;
                this.selected_item = item;
                this.verItemParaLLenado = true;
                this.verListado = false;
                this.spinner.hide();
                this.cd.detectChanges();
                this.cd.markForCheck();
            }).catch(err => { });
        }
        handleGoInicio(e) {
            this.verItemParaLLenado = false;
            this.verListado = true;
            localStorage.setItem("is_filling", "false");
            this.get_list();
        }
        verResultados(item) {
            this.selected_title = item.titulo;
            this.selected_id_encuesta = item.id_encuesta;
            this.verListado = false;
            this.show_resultados = true;
        }
    };
    ListadoTodosPorUsuarioComponent.ctorParameters = () => [
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: _core_1.EncuestasService },
        { type: _core_1.SisEnumeradoService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: _core_1.FileService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoTodosPorUsuarioComponent.prototype, "onGoListadoPrincipal", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ListadoTodosPorUsuarioComponent.prototype, "onEmitDataToHeader", void 0);
    ListadoTodosPorUsuarioComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-listado-todos-por-usuario',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./listado-todos-por-usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./listado-todos-por-usuario.component.css */ "./src/app/modules/encuestado/pages/gestion/pages/listado-todos-por-usuario/listado-todos-por-usuario.component.css")).default]
        })
    ], ListadoTodosPorUsuarioComponent);
    exports.ListadoTodosPorUsuarioComponent = ListadoTodosPorUsuarioComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvL3BhZ2VzL2dlc3Rpb24vcGFnZXMvbGxlbmFkby1wcmVndW50YS9sbGVuYWRvLXByZWd1bnRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvL3BhZ2VzL2dlc3Rpb24vcGFnZXMvbGxlbmFkby1wcmVndW50YS9sbGVuYWRvLXByZWd1bnRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX2hvdmVyYWJsZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @app/_core/services/respuesta.service */ "./src/app/_core/services/respuesta.service.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js"), __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, platform_browser_1, _core_1, respuesta_service_1, ng_zorro_antd_1, ngx_spinner_1, speak_tts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let LlenadoPreguntaComponent = class LlenadoPreguntaComponent {
        constructor(spinner, encuesta_s, notification, respuesta_s, _fileService, modal, _authService, _alertService, sanitizer, cd) {
            this.spinner = spinner;
            this.encuesta_s = encuesta_s;
            this.notification = notification;
            this.respuesta_s = respuesta_s;
            this._fileService = _fileService;
            this.modal = modal;
            this._authService = _authService;
            this._alertService = _alertService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.id_encuesta = 0;
            this.es_anonima = false;
            this.total = 7;
            this.paginado_registrado = [];
            this.pageIndex = 1;
            this.disparadoresRespuestas = [];
            this.onGoBackEncuesta = new core_1.EventEmitter();
            this.onGoToInicio = new core_1.EventEmitter();
            this.onEmitDataToHeader = new core_1.EventEmitter();
            this.show_pregunta_llenado = true;
            this.total_page = 5;
            this.respuestas = [];
            this.JSON_PREGUNTA = null;
            this.cargando_tabla = true;
            this.pageSize = 1;
            this._TIPO_ARCHIVO = _core_1.TIPO_ARCHIVO_ENUMERADO;
            this._array_preguntas_visibles = [];
            this.formato_fecha = "";
            this.cantidad_caracteres = "1000";
            this.estaGuardando = false;
            this.pesoMaximoEnMB = _core_1.FILE_SETTINGS.maxFileSize;
            this.imagen_extensionAceptados = [".png", ".jpeg", ".gif", ".pdf", ".doc", ".docx", ".xls", ".xlsx"];
            this.imagen_MimePermitidos = ["image/png", "image/jpeg", "image/gif", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
            this._imagen_extensionAceptados = [];
            this._imagen_MimePermitidos = [];
            this.url = "/api/comun/descargar-archivo";
            this.loaded_pagination = false;
            this.pagination_array = [];
            this.pagination_array_resolved = [];
            this.buscarDisparadores = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.encuesta_s._GetPreguntasCondicionalesByEncuesta({ id_encuesta: this.id_encuesta }).then((datos) => {
                    if (datos && datos.data) {
                        this.disparadoresRespuestas = datos.data;
                    }
                    else {
                        this.disparadoresRespuestas = [];
                    }
                }).catch(() => { this.disparadoresRespuestas = []; });
            });
            this.detectar_resueltos = () => {
                let copy_page = this.pagination_array; //_resolved;
                this.loaded_pagination = false;
                this.pagination_array.forEach((f, index) => {
                    let rpta = this.respuestas.find(x => x.id_pregunta == f.id_pregunta);
                    let _pregunta = copy_page.find(x => x.id_pregunta == f.id_pregunta);
                    if (_pregunta) {
                        let _idx_pregunta = copy_page.indexOf(_pregunta);
                        if (rpta) {
                            let json_respuesta = JSON.parse(rpta.json_respuesta);
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                if (json_respuesta.tbl_data == 1) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.d1 == null ? false : true;
                                }
                                if (json_respuesta.tbl_data == 2) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                                }
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta.filter(ff => ff.selected == true);
                                copy_page[_idx_pregunta].resolved = filter.length == 0 ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta[0];
                                copy_page[_idx_pregunta].resolved = filter ? true : false;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.length == 0 ? false : true;
                            }
                        }
                        else {
                            copy_page[_idx_pregunta].resolved = false;
                        }
                    }
                });
                copy_page.forEach((x, idx) => { x.page = idx + 1; });
                setTimeout(() => {
                    //this.pagination_array_resolved=copy_page;
                    this.pagination_array = copy_page;
                    this.loaded_pagination = true;
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }, 120);
            };
            this.getResolved = (id_pregunta) => {
                let find = this.pagination_array_resolved.find(x => x.id_pregunta == id_pregunta);
                return find ? find.resolved : false;
            };
            //#region AUDIO PREGUNTA 
            this.volume_value_pregunta = 50;
            this.show_volume_audio = false;
            this.audio_paused_pregunta = true;
            this.audio_speech_pregunta = false;
            this.first_run = true;
            this.result = '';
            this.check_if_pending_audio = () => {
                if (!this.speech.pending()) { //ya no qujeda nada por hablar
                    this.audio_speech_pregunta = false;
                    this.audio_paused_pregunta = true;
                }
            };
            //#endregion
            //#region MANEJO VIDEO
            this._idYoutubeVideo_pregunta = null;
            this._idYoutubeVideo_agradecimiento = null;
            //#endregion
            this._TIPO_PREGUNTA = _core_1.TIPO_PREGUNTA;
            this.RESPUESTA_MATRIZ = [];
            this.frmMtz = [];
            this.get_Preguntas = (show_spinner = true) => {
                this.cargando_tabla = true;
                let _id_pregunta = 0;
                setTimeout(() => {
                    if (this.Pregunta) {
                        let _filtered = this.pagination_array.filter(x => x.page == this.pageIndex);
                        _id_pregunta = _filtered.find(x => x.hidden == false) ? _filtered.find(x => x.hidden == false).id_pregunta : 0;
                    }
                    else {
                        _id_pregunta = this.pagination_array.find(x => x.page == this.pageIndex && x.hidden == false).id_pregunta;
                    }
                    let filtro = { id_pregunta: _id_pregunta }; //this.pageIndex;
                    if (show_spinner) {
                        this.spinner.show();
                    }
                    localStorage.setItem("is_filling", "true");
                    this.detectar_resueltos();
                    this.total = this.pagination_array.filter(x => x.hidden == false).length;
                    this.encuesta_s._GetPreguntaByIdenPregunta(filtro)
                        .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        console.log(datos);
                        if (datos && datos.data && datos.data.Data) {
                            let data = datos.data.Data;
                            let pregunta = data[0];
                            this.Pregunta = data[0];
                            this.html_pregunta = '<p>' + pregunta.pregunta + '</p>';
                            if (this.respuestas.find(f => f.id_pregunta == pregunta.id_pregunta)) {
                                let rpta = this.respuestas.find(f => f.id_pregunta == pregunta.id_pregunta);
                                let json_ = JSON.parse(rpta.json_respuesta);
                                if (json_.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                    //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
                                }
                                if (json_.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                    let controls = [];
                                    json_.respuesta.forEach((f, fidx) => {
                                        controls.push([]);
                                        f.columnas.forEach((c, cidx) => {
                                            controls[fidx].push(new forms_1.FormControl(f.respuestas[cidx]));
                                        });
                                    });
                                    this.frmMtz = controls;
                                    //this.RESPUESTA_MATRIZ=json_.respuesta;
                                    //RESPUESTA_MATRIZ[fila.idx].columnas[col.idx].forma.respuesta
                                }
                                else {
                                    //this.RESPUESTA_MATRIZ=[];
                                    this.frmMtz = [];
                                }
                                this.JSON_PREGUNTA = json_;
                            }
                            else {
                                this.JSON_PREGUNTA = JSON.parse(pregunta.json_alternativas);
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                    if (this.JSON_PREGUNTA.tbl_data == 1) {
                                        this.JSON_PREGUNTA.respuesta = { d1: null, d2: null, d3: null };
                                    }
                                    //this.setComboInstitucional(Number(this.JSON_PREGUNTA.tbl_data));
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre ||
                                    this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                    this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                    if (this.JSON_PREGUNTA.id_tipo != _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                        let rpta = [];
                                        this.JSON_PREGUNTA.opciones.forEach(f => {
                                            let item = f;
                                            item.selected = false;
                                            rpta.push(item);
                                        });
                                        this.JSON_PREGUNTA.respuesta = rpta;
                                    }
                                    else {
                                        this.JSON_PREGUNTA.respuesta = [null];
                                    }
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                    let rpta = [];
                                    let controls = [];
                                    this.JSON_PREGUNTA.filas.forEach((f, fidx) => {
                                        let item = f;
                                        let vals = [];
                                        let columnas = [];
                                        controls.push([]);
                                        this.JSON_PREGUNTA.columnas.forEach(c => {
                                            let col = c;
                                            if (c.forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero
                                                || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica || c.forma.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                                vals.push(null);
                                            }
                                            else { //c.forma.id_tipo==TIPO_PREGUNTA.desplegable_libre || c.forma.id_tipo==TIPO_PREGUNTA.seleccion_multiple
                                                vals.push([]);
                                            }
                                            if (c.forma.id_tipo_pregunta == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                                col.forma.respuesta = [null];
                                                controls[fidx].push(new forms_1.FormControl(null));
                                            }
                                            else {
                                                controls[fidx].push(new forms_1.FormControl(col.forma.respuesta));
                                            }
                                            columnas.push(col);
                                        });
                                        item.respuestas = vals;
                                        item.columnas = columnas;
                                        rpta.push(item);
                                    });
                                    this.frmMtz = controls;
                                    this.RESPUESTA_MATRIZ = rpta;
                                    this.JSON_PREGUNTA.respuesta = rpta;
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                                    let fechas = JSON.parse(pregunta.json_tipo_fecha);
                                    for (let i = 0; i < fechas.length; i++) {
                                        if (fechas[i].id_enumerado == 1 && fechas[i].selected) {
                                            this.formato_fecha = "yyyy";
                                        }
                                        if (fechas[i].id_enumerado == 2 && fechas[i].selected) {
                                            this.formato_fecha = "MM/yyyy";
                                        }
                                        if (fechas[i].id_enumerado == 3 && fechas[i].selected) {
                                            this.formato_fecha = "dd/MM/yyyy";
                                        }
                                    }
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                                    let caracter = JSON.parse(pregunta.json_alternativas);
                                    this.cantidad_caracteres = caracter.nro_caracteres;
                                }
                                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                                    let archivoTipos = JSON.parse(pregunta.json_archivo_tipo_archivo);
                                    for (let i = 0; i < archivoTipos.length; i++) {
                                        if (archivoTipos[i].id_enumerado == 1 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".png", ".jpeg", ".gif");
                                            this._imagen_MimePermitidos.push("image/png", "image/jpeg", "image/gif");
                                        }
                                        if (archivoTipos[i].id_enumerado == 2 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".pdf");
                                            this._imagen_MimePermitidos.push("application/pdf");
                                        }
                                        if (archivoTipos[i].id_enumerado == 3 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".doc", ".docx");
                                            this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
                                        }
                                        if (archivoTipos[i].id_enumerado == 4 && archivoTipos[i].selected) {
                                            this._imagen_extensionAceptados.push(".xls", ".xlsx");
                                            this._imagen_MimePermitidos.push("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                                        }
                                    }
                                }
                            }
                            this.emit_data_to_header(data[0], this.pageIndex);
                            if (pregunta.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                                let url = pregunta.url_video;
                                this._idYoutubeVideo_pregunta = url.substring(32, 43);
                                this._loaded_media_pregunta = true;
                            }
                            else {
                                yield this.onGetSavedFileByCode(pregunta.iden_imagen);
                                this._loaded_media_pregunta = true;
                            }
                        }
                        this.cargando_tabla = false;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                        this.spinner.hide();
                    }))
                        .catch(() => {
                        this.cargando_tabla = false;
                        this.spinner.hide();
                    });
                }, 120);
            };
            this.emit_data_to_header = (pregunta, page_index) => {
                let _id_pregunta = pregunta.id_pregunta;
                let posibles = this.JSON_PREGUNTA;
                /*if(this.RESPUESTA_MATRIZ.length > 0){
                  let rpts=this.RESPUESTA_MATRIZ;
                  rpts.forEach((f,fidx)=>{
                    f.columnas.forEach((c,cidx)=>{
                      let valores = this.frmMtz[fidx][cidx].value;
                      c.forma.respuesta = c.id_tipo==TIPO_PREGUNTA.seleccion_unica?[valores]:valores;
                    });
                  });
                  posibles.respuesta=rpts;
                }*/
                let _respuesta = this.respuestas.find(f => f.id_pregunta == _id_pregunta) ? this.respuestas.find(f => f.id_pregunta == _id_pregunta).json_respuesta : posibles;
                let data_emit = {
                    id_encuesta: this.id_encuesta,
                    pageIndex: page_index,
                    id_pregunta: _id_pregunta,
                    respuesta: _respuesta,
                    es_anonima: this.es_anonima,
                    paginado: this.pagination_array
                };
                let json = JSON.stringify(data_emit);
                localStorage.setItem("is_filling_content", json);
                this.onEmitDataToHeader.emit(data_emit);
            };
            //#region COMBOS INSTITUCIONAL
            this.array_cbo_intitucional = [];
            this.d1 = [];
            this.d2 = [];
            this.d3 = [];
            this.d2_disabled = false;
            this.d3_disabled = false;
            this.array_regimen_cbo = [];
            this.array_d_gen = [];
            this.array_d1 = [];
            this.array_d2 = [];
            this.array_d3 = [];
            this.getD2 = ($event) => {
                let dt = this.array_d_gen;
                this.JSON_PREGUNTA.respuesta.d2 = null;
                this.JSON_PREGUNTA.respuesta.d3 = null;
                this.d2 = dt.filter(f => f.CODDEP_RESPONSABLE == $event);
                this.d2_disabled = this.d2.length > 0 ? false : true;
                this.d3_disabled = this.d2.length > 0 ? false : true;
            };
            this.getD3 = ($event) => {
                let dt = this.array_d_gen;
                this.JSON_PREGUNTA.respuesta.d3 = null;
                this.d3 = dt.filter(f => f.CODDEP_RESPONSABLE == $event);
                this.d3_disabled = this.d3.length > 0 ? false : true;
            };
            //#endregion
            //#region  EVENTOS DEL LLENADO
            this.setOneClickedOnly = (idx) => {
                this.JSON_PREGUNTA.respuesta.forEach((e, index) => {
                    e.selected = (index == idx ? true : false);
                });
                this.cd.markForCheck();
                this.cd.detectChanges();
                this.detectarDisparador();
            };
            this.loading_matriz = false;
            //#endregion
            this._loaded_media_pregunta = false;
            this._loaded_media_agradecimiento = false;
            this.onGetSavedFileByCode = (codigo, es_agradecimiento = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success) {
                        if (resp.Data) {
                            if (resp.Data[0].content != null) {
                                var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                                var len = binary.length;
                                var buffer = new ArrayBuffer(len);
                                var view = new Uint8Array(buffer);
                                for (var i = 0; i < len; i++) {
                                    view[i] = binary.charCodeAt(i);
                                }
                                let contentType = resp.Data[0].contentType;
                                var blob = new Blob([view], { type: contentType });
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                                if (es_agradecimiento == false) {
                                    this._urlArchivo_pregunta = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media_pregunta = true;
                                }
                                else {
                                    this._urlArchivo_agradecimiento = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media_agradecimiento = true;
                                }
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, 'Error de imagen');
                                if (es_agradecimiento == false) {
                                    this._loaded_media_pregunta = false;
                                }
                                else {
                                    this._loaded_media_agradecimiento = false;
                                }
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", "Error de imagen");
                            if (es_agradecimiento == false) {
                                this._loaded_media_pregunta = false;
                            }
                            else {
                                this._loaded_media_agradecimiento = false;
                            }
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], "Error de imagen");
                        if (es_agradecimiento == false) {
                            this._loaded_media_pregunta = false;
                        }
                        else {
                            this._loaded_media_agradecimiento = false;
                        }
                    }
                    this.cd.detectChanges();
                    this.cd.markForCheck();
                }, (error) => {
                    //console.error(error);
                    console.log(error);
                });
            });
            //#region VIAJE ENTE PREGUNTAS
            this.onPageChange = (e) => {
                e = e ? Number(e) : null;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    setTimeout(() => {
                        /*this.pagination_array.forEach(pg=>{
                          pg.selected=(pg.page==e?true:false);
                        })*/
                        this.presetIndex = e;
                        this.goNextPregunta();
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
                else {
                    setTimeout(() => {
                        let before = this.presetIndex;
                        this.pageIndex = before;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.onPageChangeNext = () => {
                let e = this.pageIndex + 1;
                //this.pageIndex += 1;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    setTimeout(() => {
                        /*this.pagination_array.forEach(pg=>{
                          pg.selected=(pg.page==e?true:false);
                        })*/
                        this.presetIndex = e;
                        this.goNextPregunta(1);
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
                else {
                    setTimeout(() => {
                        //let before = this.presetIndex;
                        //this.pageIndex=before;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.onPageChangePrev = () => {
                let e = this.pageIndex - 1;
                //this.pageIndex = e;
                let _continue = true;
                if (this.Pregunta.es_obligatorio) {
                    if (this.is_validChangePregunta()) {
                        _continue = true;
                        this.calcel_speech();
                    }
                    else {
                        _continue = false;
                    }
                }
                else {
                    _continue = true;
                }
                if (_continue) {
                    setTimeout(() => {
                        /*this.pagination_array.forEach(pg=>{
                          pg.selected=(pg.page==e?true:false);
                        })*/
                        this.presetIndex = e;
                        this.goNextPregunta(-1);
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
                else {
                    setTimeout(() => {
                        //let before = this.presetIndex;
                        //this.pageIndex=before;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    }, 150);
                }
            };
            this.is_validChangePregunta = () => {
                let valid = true;
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                    if (this.JSON_PREGUNTA.tbl_data == 2 && this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                    if (this.JSON_PREGUNTA.tbl_data == 1 && this.JSON_PREGUNTA.respuesta.d1 == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                    this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                    let filter = this.JSON_PREGUNTA.respuesta.filter(f => f.selected == true).length;
                    if (filter == 0) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                    if (this.JSON_PREGUNTA.respuesta[0] == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal
                    || this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                    /*let total = (this.JSON_PREGUNTA.filas.length)*(this.JSON_PREGUNTA.columnas.length);
                    let count = 0;
                    this.JSON_PREGUNTA.respuesta.forEach(f=>{
                      f.columnas.forEach(c=>{
                        if(!c.selected){
                          count++;
                        }
                      })
                    });
                    if(total==count){
                      valid=false;
                    }*/
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.archivo) {
                    if (!this.JSON_PREGUNTA.respuesta) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.fecha) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (this.JSON_PREGUNTA.id_tipo == _core_1.TIPO_PREGUNTA.texto) {
                    if (this.JSON_PREGUNTA.respuesta == null) {
                        valid = false;
                    }
                }
                if (!valid) {
                    this.createNotification('warning', 'Advertencia', '<ul><li>Debe responder a esta pregunta para poder continuar.</li></ul>');
                }
                return valid;
            };
            this.goNextPregunta = (aumento = 0) => {
                let _id_pregunta_actual = this.Pregunta.id_pregunta;
                let _actual_page = 0;
                this.pagination_array.forEach(x => {
                    if (x.id_pregunta == _id_pregunta_actual) {
                        _actual_page = x.page;
                    }
                });
                this.pageIndex = _actual_page + aumento;
                if (!this.es_anonima) {
                    if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                        this.respuestas.forEach(e => {
                            if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                            }
                        });
                    }
                    else {
                        this.respuestas.push({
                            id_pregunta: this.Pregunta.id_pregunta,
                            json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                        });
                    }
                    let id_pregunta = this.Pregunta.id_pregunta;
                    let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                    this.spinner.show();
                    let _arr = this._detectar_resueltos(this.pagination_array);
                    _arr.forEach((x, idx) => x.page = idx + 1);
                    this.total = _arr.filter(x => x.hidden == false).length;
                    setTimeout(() => {
                        this.pagination_array = _arr;
                        this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                            .then((datos) => {
                            this.get_Preguntas(false);
                            this.cd.markForCheck();
                            this.cd.detectChanges();
                            /*
                            if(datos.data.Success){
                              this.get_Preguntas(false);
                              this.cd.markForCheck();
                              this.cd.detectChanges();
                            }else{
                              this.spinner.hide();
                            }*/
                        })
                            .catch(() => {
                        });
                    }, 100);
                }
                else {
                    if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                        this.respuestas.forEach(e => {
                            if (e.id_pregunta == this.Pregunta.id_pregunta) {
                                e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                            }
                        });
                    }
                    else {
                        this.respuestas.push({
                            id_pregunta: this.Pregunta.id_pregunta,
                            json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                        });
                    }
                    let _arr = this._detectar_resueltos(this.pagination_array);
                    this.total = _arr.filter(x => x.hidden == false).length;
                    _arr.forEach((x, idx) => x.page = idx + 1);
                    /*
                    setTimeout(()=>{
                      this.pagination_array=_arr;
                    },100)*/
                    this.pagination_array = _arr;
                    this.get_Preguntas();
                }
            };
            this.GoBackEncuesta = () => {
                /*if(this.RESPUESTA_MATRIZ.length > 0){
                  let rpts=this.RESPUESTA_MATRIZ;
                  this.JSON_PREGUNTA.respuesta=rpts;
                }*/
                if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                    this.respuestas.forEach(e => {
                        if (e.id_pregunta == this.Pregunta.id_pregunta) {
                            e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                        }
                    });
                }
                else {
                    this.respuestas.push({
                        id_pregunta: this.Pregunta.id_pregunta,
                        json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                    });
                }
                let str = this.es_anonima ? 'Perderá los datos registrados hasta el momento.' : 'Podrás volver a ingresar y responder desde donde te quedaste.';
                this.modal.confirm({
                    nzTitle: 'Confirmación de salir de encuesta',
                    nzContent: '¿Esta seguro de salir de la plataforma sin completar su encuesta?<br>' + str,
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        if (!this.es_anonima) {
                            let id_pregunta = this.Pregunta.id_pregunta;
                            let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                            this.spinner.show();
                            this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                                .then((datos) => {
                                //NAVEGAR A PANTALLA DE FINALIZACION
                                this.onGoBackEncuesta.emit(true);
                                this.go_GoodBye();
                                this.spinner.hide();
                                this.cd.markForCheck();
                                this.cd.detectChanges();
                            })
                                .catch(() => { });
                        }
                        else {
                            this.onGoBackEncuesta.emit(true);
                        }
                    },
                    nzOnCancel: () => { }
                });
            };
            this.respuesta_final = null;
            this.fecha_envio = new Date();
            this.goFinalizarEncuesta = () => {
                /*if(this.RESPUESTA_MATRIZ.length > 0){
                  let rpts=this.RESPUESTA_MATRIZ;
                  this.JSON_PREGUNTA.respuesta=rpts;
                }*/
                if (this.respuestas.find(f => f.id_pregunta == this.Pregunta.id_pregunta)) {
                    this.respuestas.forEach(e => {
                        if (e.id_pregunta == this.Pregunta.id_pregunta) {
                            e.json_respuesta = JSON.stringify(this.JSON_PREGUNTA);
                        }
                    });
                }
                else {
                    this.respuestas.push({
                        id_pregunta: this.Pregunta.id_pregunta,
                        json_respuesta: JSON.stringify(this.JSON_PREGUNTA)
                    });
                }
                this.calcel_speech();
                this.modal.confirm({
                    nzTitle: 'Confirmación de finalización de encuesta',
                    nzContent: '¿Esta seguro de finalizar la encuesta?<br>Una vez finalizada no podrá modificar su respuesta.',
                    nzOkText: 'Si',
                    nzOkType: 'primary',
                    nzCancelText: 'No',
                    nzOnOk: () => {
                        localStorage.setItem("is_filling", "true");
                        if (!this.es_anonima) {
                            let id_pregunta = this.Pregunta.id_pregunta;
                            let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                            this.spinner.show();
                            this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 2, JSON.stringify(this.pagination_array))
                                .then((datos) => {
                                this.respuesta_final = datos.data;
                                this.fecha_envio = new Date(datos.data.Value.fecha_envio);
                                //NAVEGAR A PANTALLA DE FINALIZACION
                                this.go_GoodBye();
                                this.spinner.hide();
                                this.cd.markForCheck();
                                this.cd.detectChanges();
                            })
                                .catch(() => { });
                        }
                        else {
                            //SaveAndFinishEncuestaAnonima
                            let _respuestas = this.respuestas.map(m => { return { id_pregunta: Number(m.id_pregunta), json_rpta: m.json_respuesta }; });
                            this.respuestas.forEach;
                            let filter = {
                                id_encuesta: this.id_encuesta,
                                user_name: '',
                                dni_trabajador: '',
                                id_estado: 2,
                                nro_pregunta: this.pageIndex,
                                sexo: "",
                                edad: 0,
                                respuestas: _respuestas
                            };
                            this.spinner.show();
                            this.respuesta_s._SaveAndFinishEncuestaAnonima(filter)
                                .then((datos) => {
                                if (datos.data.Success) {
                                    this.respuesta_final = datos.data;
                                    this.fecha_envio = new Date(datos.data.Value);
                                    //NAVEGAR A PANTALLA DE FINALIZACION
                                    this.spinner.hide();
                                    this.go_GoodBye();
                                }
                                else {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(e => {
                                        str += '<li>' + e + '</li>';
                                    });
                                    str += '</ul>';
                                    this.createNotification('error', 'Advertencia', str);
                                }
                                this.cd.markForCheck();
                                this.cd.detectChanges();
                            })
                                .catch(() => { });
                        }
                    },
                    nzOnCancel: () => {
                        if (!this.es_anonima) {
                            let id_pregunta = this.Pregunta.id_pregunta;
                            let respuesta = this.respuestas.find(f => f.id_pregunta == id_pregunta).json_respuesta;
                            this.respuesta_s._UpdatePreguntaActualEncuesta(this.id_encuesta, this.pageIndex, id_pregunta, respuesta, 1, JSON.stringify(this.pagination_array))
                                .then((datos) => {
                                if (!datos.data.Success) {
                                    let str = '<ul>';
                                    datos.data.Messages.forEach(e => {
                                        str += '<li>' + e + '</li>';
                                    });
                                    str += '</ul>';
                                    this.createNotification('error', 'Advertencia', str);
                                }
                                this.cd.markForCheck();
                                this.cd.detectChanges();
                            })
                                .catch(() => {
                            });
                        }
                    }
                });
            };
            this.show_final_envio = false;
            this.goBackToInicio = () => {
                this.onGoToInicio.emit(true);
            };
            this.getPaginationNotHidden = () => {
                let _arr = this.pagination_array.filter(x => x.hidden == false);
                _arr.forEach((x, idx) => x.page = idx + 1);
                return _arr;
            };
            this._detectar_resueltos = (array) => {
                let copy_page = array; //_resolved;
                this._total_preguntas.forEach((f, index) => {
                    let rpta = this.respuestas.find(x => x.id_pregunta == f.id_pregunta);
                    let _pregunta = copy_page.find(x => x.id_pregunta == f.id_pregunta);
                    if (_pregunta) {
                        let _idx_pregunta = copy_page.indexOf(_pregunta);
                        if (rpta) {
                            let json_respuesta = JSON.parse(rpta.json_respuesta);
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_institucional) {
                                if (json_respuesta.tbl_data == 1) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.d1 == null ? false : true;
                                }
                                if (json_respuesta.tbl_data == 2) {
                                    copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                                }
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_multiple ||
                                json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.seleccion_unica) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta.filter(ff => ff.selected == true);
                                copy_page[_idx_pregunta].resolved = filter.length == 0 ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.desplegable_libre) {
                                let filter = json_respuesta.respuesta.length == 0 ? null : json_respuesta.respuesta[0];
                                copy_page[_idx_pregunta].resolved = filter ? true : false;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_entero || json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.numerico_decimal) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta == null ? false : true;
                            }
                            if (json_respuesta.id_tipo == _core_1.TIPO_PREGUNTA.matriz) {
                                copy_page[_idx_pregunta].resolved = json_respuesta.respuesta.length == 0 ? false : true;
                            }
                        }
                        else {
                            copy_page[_idx_pregunta].resolved = false;
                        }
                    }
                });
                return copy_page;
            };
            this.paginado_totalizado = [];
            //#endregion
            this.show_pantalla_agradecimiento = false;
            this.show_agradecimientos = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.spinner.show();
                this.show_final_envio = false;
                this.show_pantalla_agradecimiento = true;
                if (this.agradecimiento_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.video) {
                    let url = this.agradecimiento_data.url_video;
                    this._idYoutubeVideo_agradecimiento = url.substring(32, 43);
                    this._loaded_media_agradecimiento = true;
                }
                else {
                    yield this.onGetSavedFileByCode(this.agradecimiento_data.iden_imagen, true);
                }
                this.spinner.hide();
            });
            this.createNotification = (type, title, message) => {
                this.notification.create(type, title, message);
            };
            this.set_imagen_iden = (data) => {
                this.JSON_PREGUNTA.respuesta = data.codigo;
            };
            this.handleRemovedFilePresentacion = (e) => {
                this.id_archivo = null;
            };
            this.speech = new speak_tts_1.default();
            if (this.speech.hasBrowserSupport()) {
                this.speech
                    .init({
                    volume: this.volume_value_pregunta / 100,
                    lang: 'es-MX',
                    rate: 1,
                    pitch: 1,
                    voice: 'Microsoft Raul - Spanish (Mexico)',
                    splitSentences: true,
                    listeners: {
                        onvoiceschanged: (voices) => { },
                        onvolumechanged: (vol) => { }
                    },
                })
                    .then((data) => {
                    this.speechData = data;
                })
                    .catch((e) => { console.log('An error occured while initializing : ', e); });
            }
        }
        ngOnInit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                /*this.pagination_array.forEach(pg=>{
                      pg.selected=(pg.page==e?true:false);
                    })*/
                yield this._getComboInstitucional(1);
                yield this._getComboInstitucional(2);
                if (this.disparadoresRespuestas.length == 0) {
                    yield this.buscarDisparadores();
                }
                this.crear_paginado();
                this.detectar_resueltos();
                setTimeout(() => {
                    this.loaded_pagination = true;
                    if (!this.es_anonima) {
                        this.spinner.show();
                        this.respuesta_s._GetRespuestasByEncuestaAndEncuestado(this.id_encuesta, _core_1.TIPO_ENCUESTA.intranet)
                            .then((datos) => {
                            this.respuestas = datos.data;
                            this.get_Preguntas(false);
                        })
                            .catch(() => { });
                    }
                    else {
                        this.get_Preguntas();
                    }
                    this.cd.markForCheck();
                    this.cd.detectChanges();
                }, 350);
            });
        }
        _show_hide_controlVolume() {
            this.show_volume_audio = !this.show_volume_audio;
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
        setVolumeOfPregunta(valor) {
            setTimeout(() => {
                if (this.audio_speech_pregunta) {
                    if (this.speech.pending()) {
                        this.speech.pause();
                        this.speech.setVolume(valor / 100);
                        this.speech.resume();
                    }
                    else {
                        this.speech.setVolume(valor / 100);
                        this.start_speech();
                    }
                }
            }, 100);
        }
        start_speech() {
            this.audio_speech_pregunta = true;
            let temporalDivElement = document.createElement('div');
            temporalDivElement.innerHTML = this.html_pregunta;
            this.result =
                temporalDivElement.textContent || temporalDivElement.innerText || '';
            this.speech
                .speak({
                text: this.result,
            })
                .then(() => {
                this.audio_speech_pregunta = false;
                this.audio_paused_pregunta = true;
            })
                .catch((e) => {
                console.error('An error occurred :', e);
            });
        }
        pause() {
            this.speech.pause();
        }
        calcel_speech() {
            this.speech.cancel();
        }
        resume() {
            this.speech.resume();
        }
        setLanguage(i) {
            this.speech.setLanguage(this.speechData.voices[i].lang);
            this.speech.setVoice(this.speechData.voices[i].name);
        }
        _onStateChange_pregunta(event) {
            this._ytEvent_pregunta = event.data;
        }
        _savePlayer_pregunta(player) {
            this._player_pregunta = player;
            //setTimeout(() =>{ this._player_agradecimiento.playVideo();},350)
        }
        _onStateChange_agradecimiento(event) {
            this._ytEvent_agradecimiento = event.data;
        }
        _savePlayer_agradecimiento(player) {
            this._player_agradecimiento = player;
            setTimeout(() => { this._player_agradecimiento.playVideo(); }, 350);
        }
        json_to_String(st) {
            return JSON.stringify(st);
        }
        setRespuestaMatriz(fila_idx, col_idx, es_seleccion_unica = false) {
        }
        getComboInstitucional(id_tabla) {
            this.respuesta_s._GetDesplegableInstitucional(id_tabla)
                .then((datos) => {
                if (id_tabla == 2) {
                    this.array_cbo_intitucional = datos.data;
                }
                else {
                    let dt = datos.data;
                    let d1 = datos.data.filter(f => f.ID_TIPO_DEPENDENCIA == 2
                        && f.ES_DEPGENERAL == true && f.CODDEP_RESPONSABLE == null);
                    d1.forEach(e => {
                        let d2 = dt.filter(f => f.CODDEP_RESPONSABLE == e.id);
                        d2.forEach(x => {
                            let d3 = dt.filter(f => f.CODDEP_RESPONSABLE == x.id);
                            d3.forEach(y => {
                                let d4 = dt.filter(f => f.CODDEP_RESPONSABLE == y.id);
                                y.data = d4;
                            });
                            x.data = d3;
                        });
                        e.data = d2;
                    });
                    this.array_cbo_intitucional = datos.data;
                    this.d1 = d1.map(m => { return { id: m.id, nombre: m.nombre }; });
                    if (this.JSON_PREGUNTA.respuesta.d1) {
                        this.d2 = datos.data.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
                        this.d2_disabled = this.d2.length > 0 ? false : true;
                        this.d3_disabled = this.d2.length > 0 ? false : true;
                    }
                    if (this.JSON_PREGUNTA.respuesta.d2) {
                        this.d3 = datos.data.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
                        this.d3_disabled = this.d3.length > 0 ? false : true;
                    }
                }
                //CODDEP_RESPONSABLE
            })
                .catch(() => { });
        }
        setComboInstitucional(id_tabla) {
            if (id_tabla == 1) {
                if (this.JSON_PREGUNTA.respuesta.d1) {
                    this.d2 = this.array_d_gen.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d1);
                    this.d2_disabled = this.d2.length > 0 ? false : true;
                    this.d3_disabled = this.d2.length > 0 ? false : true;
                }
                if (this.JSON_PREGUNTA.respuesta.d2) {
                    this.d3 = this.array_d_gen.filter(x => x.CODDEP_RESPONSABLE == this.JSON_PREGUNTA.respuesta.d2);
                    this.d3_disabled = this.d3.length > 0 ? false : true;
                }
            }
        }
        _getComboInstitucional(id_tabla) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.respuesta_s._GetDesplegableInstitucional(id_tabla)
                    .then((datos) => {
                    if (id_tabla == 2) {
                        this.array_regimen_cbo = datos.data;
                    }
                    else {
                        let dt = datos.data;
                        let d1 = datos.data.filter(f => f.ID_TIPO_DEPENDENCIA == 2
                            && f.ES_DEPGENERAL == true && f.CODDEP_RESPONSABLE == null);
                        d1.forEach(e => {
                            let d2 = dt.filter(f => f.CODDEP_RESPONSABLE == e.id);
                            d2.forEach(x => {
                                let d3 = dt.filter(f => f.CODDEP_RESPONSABLE == x.id);
                                d3.forEach(y => {
                                    let d4 = dt.filter(f => f.CODDEP_RESPONSABLE == y.id);
                                    y.data = d4;
                                });
                                x.data = d3;
                            });
                            e.data = d2;
                        });
                        this.array_d_gen = datos.data;
                        this.d1 = d1.map(m => { return { id: m.id, nombre: m.nombre }; });
                    }
                    //CODDEP_RESPONSABLE
                })
                    .catch(() => { });
            });
        }
        setNroDecimales(nroDecimales) {
            return 1 / (100 * nroDecimales);
        }
        change_status_matriz(idFila, idCol, future_status) {
            let rpta = this.JSON_PREGUNTA.respuesta;
            this.JSON_PREGUNTA.respuesta = [];
            rpta[idFila].columnas[idCol].selected = future_status;
            this.loading_matriz = true;
            setTimeout(() => {
                this.JSON_PREGUNTA.respuesta = rpta;
                this.loading_matriz = false;
            }, 450);
        }
        go_GoodBye() {
            this.show_pregunta_llenado = false;
            this.show_final_envio = true;
        }
        //#endregion
        //#region DETECCION DE DISPARADORES Y PAGINADOR
        detectarDisparador() {
            if (this.Pregunta.es_condicional) {
                let disparadores_noVisibles = [];
                let disparadores_visibles = [];
                let array_pag = [];
                this.loaded_pagination = false;
                if (this.Pregunta.id_tipo_pregunta == this._TIPO_PREGUNTA.seleccion_unica) {
                    let _tiene_respuesta = this.JSON_PREGUNTA.respuesta.find(x => x.selected == true);
                    if (_tiene_respuesta) {
                        let _rpta = JSON.stringify(this.JSON_PREGUNTA.respuesta);
                        let _id_pregunta = this.Pregunta.id_pregunta;
                        disparadores_noVisibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional != _rpta);
                        disparadores_visibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta && x.json_respuesta_condicional == _rpta);
                    }
                    else {
                        disparadores_noVisibles = [];
                        disparadores_visibles = this.disparadoresRespuestas.filter(x => x.id_pregunta_condicional == this.Pregunta.id_pregunta);
                    }
                }
                this.pagination_array.forEach(x => {
                    if (disparadores_noVisibles.find(f => f.id_pregunta == x.id_pregunta) || disparadores_visibles.find(f => f.id_pregunta == x.id_pregunta)) {
                        if (disparadores_noVisibles.find(f => f.id_pregunta == x.id_pregunta)) {
                            let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                            find.hidden = true;
                            array_pag.push(find);
                        }
                        if (disparadores_visibles.find(f => f.id_pregunta == x.id_pregunta)) {
                            let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                            find.hidden = false;
                            array_pag.push(find);
                        }
                    }
                    else {
                        let find = this.paginado_totalizado.find(f => f.id_pregunta == x.id_pregunta);
                        array_pag.push(find);
                    }
                });
                array_pag.forEach((x, idx) => { x.page = idx + 1; });
                this.total = array_pag.filter(x => x.hidden == false).length;
                this.pagination_array = this._detectar_resueltos(array_pag);
                this.loaded_pagination = true;
                this.cd.markForCheck();
                this.cd.detectChanges();
                /*setTimeout(()=>{
                  this.total = array_pag.filter(x=>x.hidden==false).length;
                  this.pagination_array=this._detectar_resueltos(array_pag);
                  this.loaded_pagination=true;
                  this.cd.markForCheck();
                  this.cd.detectChanges();
                },50);*/
            }
        }
        crear_paginado() {
            let array_pag = [];
            let _existentes = this.paginado_registrado;
            if (_existentes.length > 0) {
                this.pagination_array = _existentes;
                this.paginado_totalizado = _existentes;
            }
            else {
                for (let i = 0; i < this._total_preguntas.length; i++) {
                    let _find = _existentes.find(x => x.id_pregunta == this._total_preguntas[i].id_pregunta);
                    let e = {
                        page: i + 1,
                        selected: this.pageIndex == i + 1 ? true : false,
                        id_pregunta: this._total_preguntas[i].id_pregunta,
                        resolved: false,
                        hidden: false
                    };
                    if (_find) {
                        e.resolved = _find.resolved;
                    }
                    array_pag.push(e);
                    this.pagination_array_resolved.push(e);
                }
                this.pagination_array = array_pag;
                this.paginado_totalizado = array_pag;
            }
        }
    };
    LlenadoPreguntaComponent.ctorParameters = () => [
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: _core_1.EncuestasService },
        { type: ng_zorro_antd_1.NzNotificationService },
        { type: respuesta_service_1.RespuestaService },
        { type: _core_1.FileService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: _core_1.AuthService },
        { type: _core_1.AlertService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "es_anonima", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "total", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "_total_preguntas", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "paginado_registrado", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "pageIndex", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "presetIndex", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "agradecimiento_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], LlenadoPreguntaComponent.prototype, "disparadoresRespuestas", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaComponent.prototype, "onGoBackEncuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaComponent.prototype, "onGoToInicio", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], LlenadoPreguntaComponent.prototype, "onEmitDataToHeader", void 0);
    LlenadoPreguntaComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-llenado-pregunta',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./llenado-pregunta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./llenado-pregunta.component.css */ "./src/app/modules/encuestado/pages/gestion/pages/llenado-pregunta/llenado-pregunta.component.css")).default]
        })
    ], LlenadoPreguntaComponent);
    exports.LlenadoPreguntaComponent = LlenadoPreguntaComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvL3BhZ2VzL2dlc3Rpb24vcGFnZXMvcmVzdWx0YWRvLWNoYXJ0L3Jlc3VsdGFkby1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW5jdWVzdGFkby9wYWdlcy9nZXN0aW9uL3BhZ2VzL3Jlc3VsdGFkby1jaGFydC9yZXN1bHRhZG8tY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5faG92ZXJhYmxlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, _core_1, ng_zorro_antd_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import HC_exporting from '../../../../../assets/lib/highcharts/modules/exporting';
    //import * as Highcharts from '../../../../../assets/lib/highcharts';
    var Highcharts = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
    //HC_exporting(Highcharts);
    let ResultadoChartComponent = class ResultadoChartComponent {
        constructor(encuesta_s, _fileService, spinner, modal, sanitizer, cd) {
            this.encuesta_s = encuesta_s;
            this._fileService = _fileService;
            this.spinner = spinner;
            this.modal = modal;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.onGoBackListadoAll = new core_1.EventEmitter();
            this.b64_pdf_file = null;
            this.has_file = false;
            this.onGetSavedFileByCodeWithReturn = (codigo) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let ur_file = null, has_file = false;
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success && resp.Data && resp.Data[0].content != null) {
                        var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                        var len = binary.length;
                        var buffer = new ArrayBuffer(len);
                        var view = new Uint8Array(buffer);
                        for (var i = 0; i < len; i++) {
                            view[i] = binary.charCodeAt(i);
                        }
                        let contentType = resp.Data[0].contentType;
                        //var blob = new Blob([view], { type: contentType });
                        ur_file = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                        this.has_file = true;
                        has_file = true;
                    }
                });
                //return ur_file;
                return has_file ? this.sanitizer.bypassSecurityTrustResourceUrl(ur_file) : null;
            });
        }
        ngOnInit() {
            this.getChartData();
        }
        getChartData() {
            this.spinner.show();
            this.has_file = false;
            this.b64_pdf_file = null;
            let _id_ecnuesta = this.id_encuesta;
            this.encuesta_s._GetResultadosChartByEncuesta(_id_ecnuesta)
                .then((datos) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (datos && datos.data) {
                    let dt = datos.data;
                    this.draw_chart_dependencias(dt.Dependencias);
                    this.draw_chart_edades(dt.Edades);
                    this.draw_chart_sexos(dt.Sexos);
                    this.draw_chart_regimen(dt.Regimen);
                    if (dt.iden_pdf) {
                        this.b64_pdf_file = yield this.onGetSavedFileByCodeWithReturn(dt.iden_pdf);
                    }
                    else {
                        this.b64_pdf_file = null;
                        this.has_file = false;
                    }
                }
                this.spinner.hide();
            }))
                .catch(() => { });
        }
        //chart_dependencias,chart_edades,chart_sexos,chart_regimen
        draw_chart_dependencias(data) {
            let suma = 0;
            data.forEach(f => {
                suma += f.Val;
            });
            let maped_data = data.map(m => { return { name: m.Iden, type: "column", data: [suma > 0 ? (100 * m.Val / suma) : 0] }; });
            var chart_1 = Highcharts.chart("chart_dependencias", {
                chart: {
                    zoomType: 'xy'
                },
                credits: { enabled: false },
                title: {
                    align: 'left',
                    text: ''
                },
                xAxis: {
                    type: 'category',
                    categories: ['Dependencias'],
                    crosshair: true
                },
                yAxis: [{
                        title: {
                            text: '',
                        },
                        min: 0,
                        max: 100
                    }],
                legend: {
                    enabled: true
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.2f}%'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td>{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                series: maped_data /*[
                    {
                        name: "Browsers",
                        type: 'column',
                        data: [50.123]
                    }
                ]*/
            });
        }
        draw_chart_edades(data) {
            let suma = 0;
            data.forEach(f => {
                suma += f.Val;
            });
            let maped_data = data.map(m => { return { name: m.Iden, type: "column", data: [suma > 0 ? (100 * m.Val / suma) : 0] }; });
            var chart_2 = Highcharts.chart('chart_edades', {
                chart: {
                    zoomType: 'xy'
                },
                credits: { enabled: false },
                title: {
                    align: 'left',
                    text: ''
                },
                xAxis: {
                    type: 'category',
                    categories: ['Edades'],
                    crosshair: true
                },
                yAxis: [{
                        title: {
                            text: '',
                        },
                        min: 0,
                        max: 100
                    }],
                legend: {
                    enabled: true
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.2f}%'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td>{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.2f} %</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                series: maped_data /*[
                    {
                        name: "Browsers",
                        type: 'column',
                        data: [50.123]
                    }
                ]*/
            });
        }
        draw_chart_sexos(data) {
            let suma = 0;
            data.forEach(f => {
                suma += f.Val;
            });
            let maped_data = data.map(m => { return { name: m.Iden, y: suma > 0 ? m.Val / suma : 0 }; });
            Highcharts.chart('chart_sexos', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                credits: { enabled: false },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                        }
                    }
                },
                series: [{
                        name: 'Sexos',
                        colorByPoint: true,
                        data: maped_data /*[{
                            name: 'Chrome',
                            y: 61.41
                        }, {
                            name: 'Internet Explorer',
                            y: 11.84
                        }, {
                            name: 'Firefox',
                            y: 10.85
                        }]*/
                    }]
            });
        }
        draw_chart_regimen(data) {
            let suma = 0;
            data.forEach(f => {
                suma += f.Val;
            });
            let maped_data = data.map(m => { return { name: m.Iden, y: suma > 0 ? m.Val / suma : 0 }; });
            Highcharts.chart('chart_regimen', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                credits: { enabled: false },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                        }
                    }
                },
                series: [{
                        name: 'Regimén',
                        colorByPoint: true,
                        data: maped_data /*[{
                            name: 'Chrome',
                            y: 61.41
                        }, {
                            name: 'Internet Explorer',
                            y: 11.84
                        }, {
                            name: 'Firefox',
                            y: 10.85
                        }]*/
                    }]
            });
        }
        volver_listado() {
            this.onGoBackListadoAll.emit(true);
        }
    };
    ResultadoChartComponent.ctorParameters = () => [
        { type: _core_1.EncuestasService },
        { type: _core_1.FileService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: ng_zorro_antd_1.NzModalService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], ResultadoChartComponent.prototype, "titulo_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], ResultadoChartComponent.prototype, "id_encuesta", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], ResultadoChartComponent.prototype, "onGoBackListadoAll", void 0);
    ResultadoChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-resultado-chart',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./resultado-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./resultado-chart.component.css */ "./src/app/modules/encuestado/pages/gestion/pages/resultado-chart/resultado-chart.component.css")).default]
        })
    ], ResultadoChartComponent);
    exports.ResultadoChartComponent = ResultadoChartComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn_hoverable:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.btn_disabled:hover{\r\n  cursor: not-allowed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbmN1ZXN0YWRvL3BhZ2VzL2dlc3Rpb24vcGFnZXMvdmlzdGEtZW5jdWVzdGEvdmlzdGEtZW5jdWVzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VuY3Vlc3RhZG8vcGFnZXMvZ2VzdGlvbi9wYWdlcy92aXN0YS1lbmN1ZXN0YS92aXN0YS1lbmN1ZXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl9ob3ZlcmFibGU6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuX2Rpc2FibGVkOmhvdmVye1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"), __webpack_require__(/*! @app/_core */ "./src/app/_core/index.ts"), __webpack_require__(/*! @app/_core/services/respuesta.service */ "./src/app/_core/services/respuesta.service.ts"), __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, _core_1, respuesta_service_1, ngx_spinner_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let VistaEncuestaComponent = class VistaEncuestaComponent {
        constructor(spinner, respuesta_s, encuesta_s, _fileService, _authService, _alertService, sanitizer, cd) {
            this.spinner = spinner;
            this.respuesta_s = respuesta_s;
            this.encuesta_s = encuesta_s;
            this._fileService = _fileService;
            this._authService = _authService;
            this._alertService = _alertService;
            this.sanitizer = sanitizer;
            this.cd = cd;
            this.onGoInicio = new core_1.EventEmitter();
            this.onEmitDataToHeader = new core_1.EventEmitter();
            this.show_selected_encuesta = true;
            this.show_preguntas = false;
            this.PreguntasList = [];
            this._loaded_media = false;
            this.show_loader_encuesta = true;
            this.handleOnEmitDataToHeader = (e) => {
                this.onEmitDataToHeader.emit(e);
            };
            this._audio_loaded = false;
            this._audio_exists = false;
            this._b64_audio = null;
            this.onGetSavedFileByCode = (codigo, is_audio = false) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then(resp => {
                    if (resp.Success) {
                        if (resp.Data) {
                            if (resp.Data[0].content != null) {
                                var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                                var len = binary.length;
                                var buffer = new ArrayBuffer(len);
                                var view = new Uint8Array(buffer);
                                for (var i = 0; i < len; i++) {
                                    view[i] = binary.charCodeAt(i);
                                }
                                let contentType = resp.Data[0].contentType;
                                var urlArchivo = 'data:' + contentType + ';base64,' + resp.Data[0].content;
                                if (is_audio) {
                                    this._b64_audio = urlArchivo;
                                    this._audio_loaded = true;
                                }
                                else {
                                    this._urlArchivo = this.sanitizer.bypassSecurityTrustResourceUrl(urlArchivo);
                                    this._loaded_media = true;
                                }
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, is_audio ? "Error de audio" : null);
                                if (is_audio)
                                    this._audio_loaded = false;
                                else
                                    this._loaded_media = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", is_audio ? "Error de audio" : null);
                            if (is_audio)
                                this._audio_loaded = false;
                            else
                                this._loaded_media = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], is_audio ? "Error de audio" : null);
                        this._audio_loaded = false;
                    }
                });
            });
            //#region MANEJO VIDEO
            this._idYoutubeVideo = null;
            //#endregion
            this.goInicio = () => {
                if (this._audio_loaded) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    if (!this._audio_started) {
                        this.AudioSourceEncuesta.start(0);
                        this._audio_started = true;
                    }
                    if (this.AudioContextEncuesta.state === 'running') {
                        this.AudioContextEncuesta.suspend();
                    }
                    else if (this.AudioContextEncuesta.state === 'suspended') {
                        //this.AudioContextEncuesta.resume()  
                    }
                }
                localStorage.setItem("is_filling", "false");
                this.onGoInicio.emit(true);
            };
            //#region CONTROL AUDIOI
            this.AudioContextEncuesta = new AudioContext();
            this._audio_started = false;
            this.audio_paused_encuesta = true;
            this.onGetSavedFileByCodeAudio = (codigo, has_video = true) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this._fileService.getFilesById(codigo).then((resp) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (resp.Success) {
                        if (resp.Data) {
                            if (resp.Data[0].content != null) {
                                var binary = atob(resp.Data[0].content.replace(/\s/g, ''));
                                var len = binary.length;
                                var buffer = new ArrayBuffer(len);
                                var view = new Uint8Array(buffer);
                                for (var i = 0; i < len; i++) {
                                    view[i] = binary.charCodeAt(i);
                                }
                                const audioContext = new AudioContext();
                                const gainNode = audioContext.createGain();
                                gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                                gainNode.connect(audioContext.destination);
                                const arr = view; // Uint8Array.from(response.data.data)
                                const audio = yield audioContext.decodeAudioData(arr.buffer);
                                const source = audioContext.createBufferSource();
                                source.buffer = audio;
                                source.loop = true;
                                source.connect(gainNode);
                                if (!has_video) {
                                    source.start(0);
                                    this._audio_started = true;
                                    this.audio_paused_encuesta = false;
                                }
                                else {
                                    this.audio_paused_encuesta = true;
                                }
                                this.AudioContextEncuesta = audioContext;
                                this.AudioSourceEncuesta = source;
                                this.GainNodeEncuesta = gainNode;
                                this._b64_audio = 'xasdasd';
                                this._audio_loaded = true;
                                this._loading_audio = false;
                            }
                            else {
                                this._alertService.open("error", resp.Data[0].mensajeError, "Error de audio");
                                this._audio_loaded = false;
                                this._loading_audio = false;
                            }
                        }
                        else {
                            this._alertService.open("error", "Sin datos para cargar", "Error de audio");
                            this._audio_loaded = false;
                            this._loading_audio = false;
                        }
                    }
                    if (!resp.Success) {
                        this._alertService.open("error", resp.Messages[0], "Error de audio");
                        this._audio_loaded = false;
                        this._loading_audio = false;
                    }
                }));
            });
            this._loading_audio = true;
            this._show_control_audio = false;
            this._volume_value = 50;
            this.handleAudioPauseEncuesta = () => {
                this.audio_paused_encuesta = !this.audio_paused_encuesta;
                if (!this.audio_paused_encuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    if (!this._audio_started) {
                        this.AudioSourceEncuesta.start(0);
                        this._audio_started = true;
                    }
                    if (this.AudioContextEncuesta.state === 'suspended') {
                        this.AudioContextEncuesta.resume();
                    }
                }
                else {
                    if (this.AudioContextEncuesta.state === 'running') {
                        this.AudioContextEncuesta.suspend();
                    }
                }
            };
            this._total_preguntas = [];
            this.disparadoresRespuestas = [];
            this.paginado_registrado = [];
            this.goEncuesta = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this._audio_loaded) {
                    //this.welcome_audio.volume= 0;
                    //this.welcome_audio.play();
                    if (!this._audio_started) {
                        const gainNode = this.GainNodeEncuesta;
                        gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                        gainNode.connect(this.AudioContextEncuesta.destination);
                        this.AudioSourceEncuesta.connect(gainNode);
                        this.AudioSourceEncuesta.start(0);
                        this._audio_started = true;
                    }
                    if (this.AudioContextEncuesta.state === 'running') {
                        this.AudioContextEncuesta.suspend();
                    }
                    else if (this.AudioContextEncuesta.state === 'suspended') {
                        //this.AudioContextEncuesta.resume()  
                    }
                }
                this.id_encuesta = this.main_data.id_encuesta;
                yield this.encuesta_s._GetPreguntasCondicionalesByEncuesta({ id_encuesta: this.id_encuesta })
                    .then((datos) => {
                    if (datos && datos.data) {
                        this.disparadoresRespuestas = datos.data;
                    }
                    else {
                        this.disparadoresRespuestas = [];
                    }
                })
                    .catch(() => { this.disparadoresRespuestas = []; });
                if (this.main_data.es_anonima) {
                    this.paginado_registrado = [];
                    let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                    this.encuesta_s._GetPreguntasByEncuesta(filtro, 1, 1000)
                        .then((datos) => {
                        let _rr = [];
                        if (datos && datos.data && datos.data.Data) {
                            this.total = datos.data.TotalRows;
                            datos.data.Data.forEach((e, idx) => {
                                _rr.push({
                                    nro: idx + 1,
                                    id_pregunta: e.id_pregunta
                                });
                            });
                            this._total_preguntas = _rr;
                        }
                        else {
                            this._total_preguntas = [];
                        }
                        this.pageIndex = 1;
                        this.presetIndex = 1;
                        this.show_selected_encuesta = false;
                        this.show_preguntas = true;
                        this.cd.markForCheck();
                        this.cd.detectChanges();
                    })
                        .catch(() => { });
                }
                else {
                    yield this.encuesta_s._GetPaginadoRegistrado({ id_encuesta: this.id_encuesta, id_tipo_encuesta: _core_1.TIPO_ENCUESTA.extranet }, 1, 1000)
                        .then((datos) => {
                        if (datos && datos.data && datos.data.Data) {
                            this.paginado_registrado = datos.data.Data[0].json ? JSON.parse(datos.data.Data[0].json) : [];
                        }
                        else {
                            this.paginado_registrado = [];
                        }
                    }).catch(() => { this.disparadoresRespuestas = []; });
                    let filtro = { id_encuesta: this.id_encuesta, _mostar_solo_condicional: false };
                    this.encuesta_s._GetPreguntasByEncuesta(filtro, this.pageIndex, 1000)
                        .then((datos) => {
                        let _rr = [];
                        datos.data.Data.forEach((e, idx) => {
                            _rr.push({
                                nro: idx + 1,
                                id_pregunta: e.id_pregunta
                            });
                        });
                        this._total_preguntas = _rr;
                        this.respuesta_s._GetPreguntaActualEncuesta(this.id_encuesta)
                            .then((datos) => {
                            let splited = datos.data ? datos.data.Value.split(',') : "0,0,0".split(',');
                            this.total = Number(splited[1]);
                            this.pageIndex = Number(splited[0]);
                            this.presetIndex = Number(splited[0]);
                            this.cd.markForCheck();
                            this.cd.detectChanges();
                            this.show_selected_encuesta = false;
                            this.show_preguntas = true;
                        })
                            .catch(() => { });
                    }).catch(() => { });
                }
            });
            this.handleGoBackEncuesta = ($event) => {
                this.id_encuesta = 0;
                this.show_selected_encuesta = true;
                this.show_preguntas = false;
                localStorage.setItem("is_filling", "false");
                if (!this._audio_started && this.GainNodeEncuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    this.AudioSourceEncuesta.start(0);
                    this._audio_started = true;
                }
                if (this.AudioContextEncuesta.state === 'running') {
                    //this.AudioContextEncuesta.suspend()
                }
                else if (this.AudioContextEncuesta.state === 'suspended') {
                    this.AudioContextEncuesta.resume();
                }
            };
            this.handleGoBackInicio = ($event) => {
                this.id_encuesta = 0;
                localStorage.setItem("is_filling", "false");
                this.show_selected_encuesta = true;
                this.show_preguntas = false;
                if (!this._audio_started && this.GainNodeEncuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = this._volume_value / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    this.AudioSourceEncuesta.start(0);
                    this._audio_started = true;
                }
                if (this.AudioContextEncuesta.state === 'running') {
                    this.AudioContextEncuesta.suspend();
                }
                else if (this.AudioContextEncuesta.state === 'suspended') {
                    //this.AudioContextEncuesta.resume()  
                }
                this.onGoInicio.emit(true);
            };
        }
        ;
        ngOnInit() {
            this.getPreguntasList();
            this.load_media();
        }
        getPreguntasList() {
            localStorage.setItem("is_filling", "false");
            let filtro = { id_encuesta: this.main_data.id_encuesta };
            this.encuesta_s._GetPreguntasByEncuesta(filtro, 1, 200)
                .then((datos) => {
                if (datos && datos.data && datos.data.Data) {
                    let data = datos.data.Data;
                    data.forEach((e, _idx) => { e.idx = _idx; });
                    this.PreguntasList = data;
                }
            })
                .catch(() => { });
        }
        load_media() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.welcome_data.id_tipo_archivo == _core_1.TIPO_ARCHIVO_ENUMERADO.imagen) {
                    if (this.welcome_data.iden_imagen) {
                        yield this.onGetSavedFileByCode(this.welcome_data.iden_imagen);
                        this.show_loader_encuesta = false;
                    }
                }
                else {
                    if (this.welcome_data.url_video != null) {
                        let url = this.welcome_data.url_video;
                        this._idYoutubeVideo = url.substring(32, 43);
                        this._loaded_media = true;
                    }
                    else {
                        this._loaded_media = false;
                    }
                    this.show_loader_encuesta = false;
                }
                if (this.welcome_data.iden_audio) {
                    yield this.onGetSavedFileByCodeAudio(this.welcome_data.iden_audio, this.welcome_data.url_video && this.welcome_data.url_video != '' ? true : false);
                    /*var _Sound = (function () {
                      var df = document.createDocumentFragment();
                      return function Sound(src,has_video) {
                          var snd = new Audio(src);
                          df.appendChild(snd); // keep in fragment until finished playing
                          snd.addEventListener('ended', function () {df.removeChild(snd);});
                          snd.volume=0.5;
                          snd.loop=true;
                          if(!has_video){
                            snd.muted = true;
                            snd.play();
                            snd.muted = false;
                            snd.play();
                          }
                          return snd;
                      }
                    }());
                    this.welcome_audio = _Sound(this._b64_audio,this.welcome_data.url_video?true:false);*/
                }
                else {
                    this._loading_audio = false;
                }
                this._audio_exists = this.welcome_data.iden_audio ? true : false;
            });
        }
        _onStateChange(event) {
            this._ytEvent = event.data;
        }
        _savePlayer(player) {
            this._player = player;
            setTimeout(() => { this._player.playVideo(); }, 350);
        }
        _setVolumeOfObject(valor) {
            setTimeout(() => {
                if (!this.audio_paused_encuesta) {
                    const gainNode = this.GainNodeEncuesta;
                    gainNode.gain.value = valor / 100; // setting it to 10%
                    gainNode.connect(this.AudioContextEncuesta.destination);
                    this.AudioSourceEncuesta.connect(gainNode);
                    if (!this._audio_started) {
                        this.AudioSourceEncuesta.start(0);
                        this._audio_started = true;
                    }
                }
                this.cd.markForCheck();
                this.cd.detectChanges();
                //this.welcome_audio.volume= valor/100;
                //this.welcome_audio.play();
            }, 100);
        }
        _handleWelcomeEncuestaClick() {
            this._show_control_audio = !this._show_control_audio;
            this.cd.markForCheck();
            this.cd.detectChanges();
        }
    };
    VistaEncuestaComponent.ctorParameters = () => [
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: respuesta_service_1.RespuestaService },
        { type: _core_1.EncuestasService },
        { type: _core_1.FileService },
        { type: _core_1.AuthService },
        { type: _core_1.AlertService },
        { type: platform_browser_1.DomSanitizer },
        { type: core_1.ChangeDetectorRef }
    ];
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaComponent.prototype, "main_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaComponent.prototype, "welcome_data", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaComponent.prototype, "indicaciones", void 0);
    tslib_1.__decorate([
        core_1.Input()
    ], VistaEncuestaComponent.prototype, "agradecimiento_data", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], VistaEncuestaComponent.prototype, "onGoInicio", void 0);
    tslib_1.__decorate([
        core_1.Output()
    ], VistaEncuestaComponent.prototype, "onEmitDataToHeader", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('btnPlayMainAudio', { static: false })
    ], VistaEncuestaComponent.prototype, "btnPlayMainAudio", void 0);
    VistaEncuestaComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-vista-encuesta',
            template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./vista-encuesta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.html")).default,
            styles: [tslib_1.__importDefault(__webpack_require__(/*! ./vista-encuesta.component.css */ "./src/app/modules/encuestado/pages/gestion/pages/vista-encuesta/vista-encuesta.component.css")).default]
        })
    ], VistaEncuestaComponent);
    exports.VistaEncuestaComponent = VistaEncuestaComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=5.js.map