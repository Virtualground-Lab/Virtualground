(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{79104:function(t,e,n){"use strict";var r=n(67294),i=n(16600),o=n(85893);e.Z=function(t){const{children:e,defer:n=!1,fallback:a=null}=t,[s,l]=r.useState(!1);return(0,i.Z)((()=>{n||l(!0)}),[n]),r.useEffect((()=>{n&&l(!0)}),[n]),(0,o.jsx)(r.Fragment,{children:s?e:a})}},53147:function(t,e,n){"use strict";var r=n(95318);e.Z=void 0;var i=r(n(64938)),o=n(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");e.Z=a},78389:function(t,e,n){"use strict";var r=n(95318);e.Z=void 0;var i=r(n(64938)),o=n(85893),a=(0,i.default)([(0,o.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"},"0"),(0,o.jsx)("path",{d:"m15.08 11.03-2.12-2.12L7 14.86V17h2.1zm1.77-1.76c.2-.2.2-.51 0-.71l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06z"},"1")],"NoteAltOutlined");e.Z=a},52428:function(t,e,n){"use strict";var r=n(95318);e.Z=void 0;var i=r(n(64938)),o=n(85893),a=(0,i.default)([(0,o.jsx)("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),(0,o.jsx)("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),(0,o.jsx)("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt");e.Z=a},69956:function(t,e,n){"use strict";var r=n(95318);e.Z=void 0;var i=r(n(64938)),o=n(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"}),"Videocam");e.Z=a},54128:function(t,e){"use strict";e.Z={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"}},8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.1.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,o,a=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var s=(e+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){o="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(o=i.options.separator+o),o=n[u-l-1]+o;n=o}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),a+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",void 0!==window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window){var e=window.innerHeight+window.scrollY,n=t.el.offsetTop+t.el.offsetHeight;n<e&&n>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay)):window.scrollY>n&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},17857:function(t,e,n){"use strict";var r=n(67294),i=n(8273);function o(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=o(r);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function h(t){var e=r.useRef(t);return p((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},b=function(t){var e=r.useMemo((function(){return l(l({},m),t)}),[t]),n=e.ref,o=e.startOnMount,a=e.enableReinitialize,s=e.delay,u=e.onEnd,c=e.onStart,p=e.onPauseResume,b=e.onReset,v=e.onUpdate,y=f(e,d),g=r.useRef(),V=r.useRef(),w=r.useRef(!1),O=h((function(){return function(t,e){var n=e.decimal,r=e.decimals,o=e.duration,a=e.easingFn,s=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,h=e.suffix,d=e.useEasing,m=e.enableScrollSpy,b=e.scrollSpyDelay;return new i.CountUp(t,s,{startVal:p,duration:o,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:h,useEasing:d,useGrouping:!!f,enableScrollSpy:m,scrollSpyDelay:b})}("string"===typeof n?n:n.current,y)})),E=h((function(t){var e=g.current;if(e&&!t)return e;var n=O();return g.current=n,n})),C=h((function(){var t=function(){return E(!0).start((function(){null===u||void 0===u||u({pauseResume:T,reset:j,start:S,update:x})}))};s&&s>0?V.current=setTimeout(t,1e3*s):t(),null===c||void 0===c||c({pauseResume:T,reset:j,update:x})})),T=h((function(){E().pauseResume(),null===p||void 0===p||p({reset:j,start:S,update:x})})),j=h((function(){V.current&&clearTimeout(V.current),E().reset(),null===b||void 0===b||b({pauseResume:T,start:S,update:x})})),x=h((function(t){E().update(t),null===v||void 0===v||v({pauseResume:T,reset:j,start:S})})),S=h((function(){j(),C()})),k=h((function(t){o&&(t&&j(),C())}));return r.useEffect((function(){w.current?a&&k(!0):(w.current=!0,k())}),[a,w,k,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){j()}}),[j]),{start:S,pauseResume:T,reset:j,update:x,getCountUp:E}},v=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,o=t.children,s=t.style,u=f(t,v),p=a.default.useRef(null),d=a.default.useRef(!1),m=b(l(l({},u),{},{ref:p,startOnMount:"function"!==typeof o||0===t.delay,enableReinitialize:!1})),y=m.start,g=m.reset,V=m.update,w=m.pauseResume,O=m.getCountUp,E=h((function(){y()})),C=h((function(e){t.preserveValue||g(),V(e)})),T=h((function(){"function"!==typeof t.children||p.current instanceof Element?O():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){T()}),[T]),r.useEffect((function(){d.current&&C(t.end)}),[t.end,C]);var j=n&&t;return r.useEffect((function(){n&&d.current&&E()}),[E,n,j]),r.useEffect((function(){!n&&d.current&&E()}),[E,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){d.current=!0}),[]),"function"===typeof o?o({countUpRef:p,start:y,reset:g,update:V,pauseResume:w,getCountUp:O}):a.default.createElement("span",c({className:e,ref:p,style:s},i),t.start?O().formattingFn(t.start):"")}},33082:function(t,e,n){var r;r=function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(5)()},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=function(t,e,n){var r=t.direction,i=t.value;switch(r){case"top":return n.top+i<e.top&&n.bottom>e.bottom&&n.left<e.left&&n.right>e.right;case"left":return n.left+i<e.left&&n.bottom>e.bottom&&n.top<e.top&&n.right>e.right;case"bottom":return n.bottom-i>e.bottom&&n.left<e.left&&n.right>e.right&&n.top<e.top;case"right":return n.right-i>e.right&&n.left<e.left&&n.top<e.top&&n.bottom>e.bottom}}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n(1),i=n.n(r),o=n(2),a=n.n(o),s=n(0),l=n.n(s),u=n(3),c=n.n(u);function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=function(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?d(t):e}(this,h(e).call(this,t)),b(d(n),"getContainer",(function(){return n.props.containment||window})),b(d(n),"addEventListener",(function(t,e,r,i){var o;n.debounceCheck||(n.debounceCheck={});var a=function(){o=null,n.check()},s={target:t,fn:i>-1?function(){o||(o=setTimeout(a,i||0))}:function(){clearTimeout(o),o=setTimeout(a,r||0)},getLastTimeout:function(){return o}};t.addEventListener(e,s.fn),n.debounceCheck[e]=s})),b(d(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),b(d(n),"stopWatching",(function(){if(n.debounceCheck)for(var t in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(t)){var e=n.debounceCheck[t];clearTimeout(e.getLastTimeout()),e.target.removeEventListener(t,e.fn),n.debounceCheck[t]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),b(d(n),"check",(function(){var t,e,r=n.node;if(!r)return n.state;if(t=function(t){return void 0===t.width&&(t.width=t.right-t.left),void 0===t.height&&(t.height=t.bottom-t.top),t}(n.roundRectDown(r.getBoundingClientRect())),n.props.containment){var i=n.props.containment.getBoundingClientRect();e={top:i.top,left:i.left,bottom:i.bottom,right:i.right}}else e={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var o=n.props.offset||{};"object"===f(o)&&(e.top+=o.top||0,e.left+=o.left||0,e.bottom-=o.bottom||0,e.right-=o.right||0);var a={top:t.top>=e.top,left:t.left>=e.left,bottom:t.bottom<=e.bottom,right:t.right<=e.right},s=t.height>0&&t.width>0,l=s&&a.top&&a.left&&a.bottom&&a.right;if(s&&n.props.partialVisibility){var u=t.top<=e.bottom&&t.bottom>=e.top&&t.left<=e.right&&t.right>=e.left;"string"===typeof n.props.partialVisibility&&(u=a[n.props.partialVisibility]),l=n.props.minTopValue?u&&t.top<=e.bottom-n.props.minTopValue:u}"string"===typeof o.direction&&"number"===typeof o.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",o.direction,o.value),l=c()(o,t,e));var p=n.state;return n.state.isVisible!==l&&(p={isVisible:l,visibilityRect:a},n.setState(p),n.props.onChange&&n.props.onChange(l)),p})),n.state={isVisible:null,visibilityRect:{}},n}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(t){this.node=a.a.findDOMNode(this),this.props.active&&!t.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(t){return{top:Math.floor(t.top),left:Math.floor(t.left),bottom:Math.floor(t.bottom),right:Math.floor(t.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):i.a.Children.only(this.props.children)}}])&&p(n.prototype,r),o&&p(n,o),e}(i.a.Component);b(v,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:i.a.createElement("span",null)}),b(v,"propTypes",{onChange:l.a.func,active:l.a.bool,partialVisibility:l.a.oneOfType([l.a.bool,l.a.oneOf(["top","right","bottom","left"])]),delayedCall:l.a.bool,offset:l.a.oneOfType([l.a.shape({top:l.a.number,left:l.a.number,bottom:l.a.number,right:l.a.number}),l.a.shape({direction:l.a.oneOf(["top","right","bottom","left"]),value:l.a.number})]),scrollCheck:l.a.bool,scrollDelay:l.a.number,scrollThrottle:l.a.number,resizeCheck:l.a.bool,resizeDelay:l.a.number,resizeThrottle:l.a.number,intervalCheck:l.a.bool,intervalDelay:l.a.number,containment:"undefined"!==typeof window?l.a.instanceOf(window.Element):l.a.any,children:l.a.oneOfType([l.a.element,l.a.func]),minTopValue:l.a.number})},function(t,e,n){"use strict";var r=n(6);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},t.exports=r(n(67294),n(73935))}}]);