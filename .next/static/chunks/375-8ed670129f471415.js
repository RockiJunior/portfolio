(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,i=o(n(7294)),u=n(6273),s=n(2725),l=n(3462),c=n(1018),f=n(7190),d=n(1210),p=n(8684),v={};function m(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var y=i.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,g=e.children,h=e.prefetch,b=e.passHref,C=e.replace,S=e.shallow,M=e.scroll,_=e.locale,x=e.onClick,k=e.onMouseEnter,O=e.onTouchStart,R=e.legacyBehavior,j=void 0===R?!0!==Boolean(!1):R,E=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!j||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var L=!1!==h,T=i.default.useContext(l.RouterContext),P=i.default.useContext(c.AppRouterContext);P&&(T=P);var w,U=i.default.useMemo((function(){var e=r(u.resolveHref(T,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?u.resolveHref(T,y):n||t}}),[T,o,y]),I=U.href,N=U.as,B=i.default.useRef(I),A=i.default.useRef(N);j&&(w=i.default.Children.only(n));var q=j?w&&"object"===typeof w&&w.ref:t,z=r(f.useIntersection({rootMargin:"200px"}),3),H=z[0],W=z[1],Z=z[2],D=i.default.useCallback((function(e){A.current===N&&B.current===I||(Z(),A.current=N,B.current=I),H(e),q&&("function"===typeof q?q(e):"object"===typeof q&&(q.current=e))}),[N,q,I,Z,H]);i.default.useEffect((function(){var e=W&&L&&u.isLocalURL(I),t="undefined"!==typeof _?_:T&&T.locale,n=v[I+"%"+N+(t?"%"+t:"")];e&&!n&&m(T,I,N,{locale:t})}),[N,I,W,_,L,T]);var K={ref:D,onClick:function(e){j||"function"!==typeof x||x(e),j&&w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,l,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:s}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};c?i.default.startTransition(d):d()}}(e,T,I,N,C,S,M,_,Boolean(P),L)},onMouseEnter:function(e){j||"function"!==typeof k||k(e),j&&w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),!L&&P||u.isLocalURL(I)&&m(T,I,N,{priority:!0})},onTouchStart:function(e){j||"function"!==typeof O||O(e),j&&w.props&&"function"===typeof w.props.onTouchStart&&w.props.onTouchStart(e),!L&&P||u.isLocalURL(I)&&m(T,I,N,{priority:!0})}};if(!j||b||"a"===w.type&&!("href"in w.props)){var G="undefined"!==typeof _?_:T&&T.locale,F=T&&T.isLocaleDomain&&d.getDomainLocale(N,G,T.locales,T.domainLocales);K.href=F||p.addBasePath(s.addLocale(N,G,T&&T.defaultLocale))}return j?i.default.cloneElement(w,K):i.default.createElement("a",Object.assign({},E,K),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!i,c=r(o.useState(!1),2),f=c[0],d=c[1],p=r(o.useState(null),2),v=p[0],m=p[1];o.useEffect((function(){if(i){if(l||f)return;if(v&&v.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},s.push(n),u.set(n,t),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(r)}}}),[v,l,n,t,f]);var y=o.useCallback((function(){d(!1)}),[]);return[m,f,y]};var o=n(7294),a=n(9311),i="function"===typeof IntersectionObserver,u=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i;var u=r.default.createContext(null);t.TemplateContext=u},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4865:function(e,t,n){var r,o;r=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(e,t,n){return e<t?t:e>n?n:e}function r(e){return 100*(-1+e)}function o(e,n,o){var a;return(a="translate3d"===t.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+n+"ms "+o,a}e.configure=function(e){var n,r;for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&(t[n]=r);return this},e.status=null,e.set=function(r){var u=e.isStarted();r=n(r,t.minimum,1),e.status=1===r?null:r;var s=e.render(!u),l=s.querySelector(t.barSelector),c=t.speed,f=t.easing;return s.offsetWidth,a((function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),i(l,o(r,c,f)),1===r?(i(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout((function(){i(s,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){e.remove(),n()}),c)}),c)):setTimeout(n,c)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout((function(){e.status&&(e.trickle(),n())}),t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var r=e.status;return r?("number"!==typeof t&&(t=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+t,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&e.start(),t++,n++,r.always((function(){0===--n?(t=0,e.done()):e.set((t-n)/t)})),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var a,u=o.querySelector(t.barSelector),l=n?"-100":r(e.status||0),c=document.querySelector(t.parent);return i(u,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),t.showSpinner||(a=o.querySelector(t.spinnerSelector))&&f(a),c!=document.body&&s(c,"nprogress-custom-parent"),c.appendChild(o),o},e.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var a=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function r(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+a)in n)return r;return t}function o(e){return e=n(e),t[e]||(t[e]=r(e))}function a(e,t,n){t=o(t),e.style[t]=n}return function(e,t){var n,r,o=arguments;if(2==o.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&a(e,n,r);else a(e,o[1],o[2])}}();function u(e,t){return("string"==typeof e?e:c(e)).indexOf(" "+t+" ")>=0}function s(e,t){var n=c(e),r=n+t;u(n,t)||(e.className=r.substring(1))}function l(e,t){var n,r=c(e);u(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function c(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e},void 0===(o="function"===typeof r?r.call(t,n,t,e):r)||(e.exports=o)}}]);