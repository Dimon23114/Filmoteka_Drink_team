!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r),r("4Nugj"),r("i91Q7");var a,s=r("bpxeT"),o=r("2TvXO"),c=r("62hKk");r("dDDEV");window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
a=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,r,a,s=Object.prototype.hasOwnProperty;for(r=1,a=arguments.length;r<a;r+=1)for(i in n=arguments[r])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),r=n(17),a=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):a(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var r,a;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,r=n;n>=0&&r<a;r+=1)if(e[r]===t)return r;return-1}},function(t,e,n){"use strict";var i=n(29),r=n(30),a=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=a(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),r=n(7),a=n(0),s=n(1),o=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(t,e){this._options=a({},u,e),this._currentPage=0,this._view=new o(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,r=this._getLastPage(),a=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(a/2),(n=(e=Math.max(t-i,1))+a-1)>r&&(e=Math.max(r-a+1,1),n=r)):(e=(s-1)*a+1,n=s*a,n=Math.min(n,r)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),r=n(14),a=n(4),s=n(16),o=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;a(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):s(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(s(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function r(){e.apply(n,arguments),i.off(t,r,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(o(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,a=e===i.context,s=r&&a;return s&&n._forgetContext(i.context),s}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),r=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):a(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),r=n(7),a=n(21),s=n(22),o=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],_=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(d,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(d,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==r||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,i,r=a(e);o(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),r=n(3),a=n(23);function s(t,e,n,i){function s(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,i){var s=a(t,e),o=!1;r(s,(function(t){return t.handler!==n||(o=!0,!1)})),o||s.push({handler:n,wrappedHandler:i})}(t,e,n,s)}t.exports=function(t,e,n,a){i(e)?r(e.split(/\s+/g),(function(e){s(t,e,n,a)})):r(e,(function(e,i){s(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),r=n(8),a=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,c=[];o?i(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){r(t,c)<0&&c.push(t)})),s(t,c))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),r=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),r=n(3),a=n(2),s=n(4),o=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,_={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],a=0,s=0;return r(e,(function(t,r){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,r)),s=r+1)})),i.push(e.slice(s)),{exps:n,sourcesInsideIf:i}}(t,e),a=!1,s="";return r(i.exps,(function(t,e){return(a=b(t,n))&&(s=y(i.sourcesInsideIf[e],n)),!a})),s},each:function(t,e,n){var i=b(t,n),s=a(i)?"@index":"@key",c={},u="";return r(i,(function(t,i){c[s]=i,c["@this"]=t,o(n,c),u+=y(e.slice(),n)})),u},with:function(t,e,n){var r=i("as",t),a=t[r+1],s=b(t.slice(0,r),n),c={};return c[a]=s,y(e,o(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(a,i)),a=i+n[0].length,n=e.exec(t);return r.push(t.slice(a)),r};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(d,""):u.test(t)?i=v((n=t.split(l))[0],e)[v(n[1],e)]:p.test(t)?i=v((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function x(t,e,n){for(var i,r,a,o,c=_[t],u=1,l=2,p=e[l];u&&s(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(r=0,a=i,(o=e.splice(r+1,a-r)).pop(),o),n),e}function b(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return r(e,(function(t){i.push(v(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function y(t,e){for(var n,i,r,a=1,o=t[a];s(o);)i=(n=o.split(" "))[0],_[i]?(r=x(i,t.splice(a,t.length-a),e),t=t.concat(r)):t[a]=b(n,e),o=t[a+=2];return t.join("")}t.exports=function(t,e){return y(m(t,c),e)}},function(t,e,n){"use strict";var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,(function(t,e){r+="&"+e+"="+t})),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},a();var u={currentPage:0,pagination:null},l=(document.querySelector("#tui-pagination-container"),c=r("62hKk"),document.querySelector(".main-render")),p=document.querySelector(".pagination"),f=0;function h(t,e){var n="",i=t-1,r=t+1,a=t+2;f=t,t>1&&(n+='<li class="pagination-left-arrow">&#129144;</li>'),t>1&&(n+='<li class="pagination-number-first">1</li>'),t>4&&(n+='<li class="pagination-dots">...</li>'),t>3&&(n+='<li class="pagination-number">'.concat(t-2,"</li>")),t>2&&(n+='<li class="pagination-number">'.concat(i,"</li>")),n+='<li class="pagination-number active"><b>'.concat(t,"</b></li>"),e-1>t&&(n+='<li class="pagination-number">'.concat(r,"</li>")),e-2>t&&(n+='<li class="pagination-number">'.concat(a,"</li>")),e-3>t&&(n+='<li class="pagination-dots">...</li>'),e>t&&(n+='<li class="pagination-number">'.concat(e,"</li>"),n+='<li class="pagination-right-arrow">&#129146;<li>'),p.innerHTML=n}function d(t){h(t.page,t.total_pages),console.log(t);var e=[];t.results.forEach((function(t){var n={id:t.id,poster:t.poster_path,title:t.original_title,genres:t.genre_ids,year:t.release_date?t.release_date.slice(0,4):"Year N/A"};e.push(n),l.innerHTML=e.map((function(t){var e=t.id,n=t.poster,i=t.title,r=t.genres,a=t.year;return'\n<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="'.concat(e,'">        \n          <img class="main-render__image"\n          src="').concat(n?"https://image.tmdb.org/t/p/w500".concat(n):imgPlaceholder,'"\n          alt="').concat(i,'" \n          data-id="').concat(e,'">          \n          <h2 class="main-render__title" data-id="').concat(e,'">\n            ').concat(i,'\n          </h2>\n          <p class="main-render__text" data-id="').concat(e,'">').concat(r," | ").concat(a,"</p>         \n        </a>\n      </li>\n")})).join("")}))}p.addEventListener("click",(function(t){if("LI"!==t.target.nodeName)return;"🡸"===t.target.textContent&&(f-=1,(0,c.fetchTrendMovies)(f).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})));"🡺"===t.target.textContent&&(f+=1,(0,c.fetchTrendMovies)(f).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})));if("..."===t.target.textContent)return;(0,c.fetchTrendMovies)(t.target.textContent).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})),window.scrollTo({top:0,behavior:"smooth"})})),document.querySelector(".preloader"),window.addEventListener("load",(function(){preloader.classList.add("preloader--hide"),setTimeout((function(){preloader.remove()}),500)}));var g=[],_=document.querySelector(".main-render");function m(){return(m=t(s)(t(o).mark((function e(n){return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.currentPage=1,t.next=3,(0,c.fetchTrendMovies)(n).then((function(t){var e=t.data;h(e.page,e.total_pages),console.log(e),g=[],e.results.forEach((function(t){var e={id:t.id,poster:t.poster_path,title:t.original_title,genres:t.genre_ids,year:t.release_date?t.release_date.slice(0,4):"Year N/A"};g.push(e)}))})).catch((function(t){return console.log(t)}));case 3:return t.next=5,(0,c.fetchGenresOfMovie)().then((function(t){var e=t.data.genres;g.forEach((function(t){switch(t.genres=t.genres.map((function(t){return e.forEach((function(e){e.id===t&&(t=e.name)})),t})),!0){case t.genres.length>0&&t.genres.length<=2:t.genres=t.genres.join(", ");break;case t.genres.length>2:t.genres[2]="Other",t.genres=t.genres.slice(0,3).join(", ");break;default:t.genres="Genre N/A"}}))})).catch((function(t){console.log("Failed to get genres : ",t),g.map((function(t){return t.genres="Genres N/A"}))}));case 5:_.innerHTML=g.map((function(t){var e=t.id,n=t.poster,i=t.title,r=t.genres,a=t.year;return'\n<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="'.concat(e,'">\n        \n          <img class="main-render__image"\n          src="').concat(n?"https://image.tmdb.org/t/p/w500".concat(n):imgPlaceholder,'"\n          alt="').concat(i,'" \n          data-id="').concat(e,'">\n          \n          \n          <h2 class="main-render__title" data-id="').concat(e,'">\n            ').concat(i,'\n          </h2>\n          <p class="main-render__text" data-id="').concat(e,'">').concat(r," | ").concat(a,"</p>\n          \n        </a>\n      </li>\n")})).join(""),setTimeout((function(){if(0===g.length){_.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of popular movies is temporarily unavailable.<br>Please, retry later!\n            </p>\n            </li>'}}),500);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(t){m.apply(this,arguments)}(1);s=r("bpxeT"),o=r("2TvXO"),c=r("62hKk");var v=r("4Nugj");function x(t){return t.reduce((function(t,e){return t+'\n    <li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="'.concat(e.id,'">\n        <div class="main-render__image-box">\n          <img class="main-render__image"\n          src="').concat(e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):e.imgPlaceholder,'"\n          alt="').concat(e.original_title,'" \n          data-id="').concat(e.id,'">\n          </div>\n          <div class="main-render__discription">\n          <h2 class="main-render__title" data-id="').concat(e.id,'">\n            ').concat(e.original_title,'\n          </h2>\n          <p class="main-render__text" data-id="').concat(e.id,'">').concat(e.genres," | ").concat(e.year,"</p>\n          </div>\n        </a>\n      </li>")}),"")}function b(t,e){switch(t.genres=t.genre_ids.map((function(t){return e.forEach((function(e){e.id===t&&(t=e.name)})),t})),!0){case t.genres.length>0&&t.genres.length<=2:t.genres=t.genres.join(", ");break;case t.genres.length>2:t.genres[2]="Other",t.genres=t.genres.slice(0,3).join(", ");break;default:t.genres="Genre N/A"}}function y(t){t.year=t.release_date?t.release_date.slice(0,4):"Year N/A"}function P(){return(P=t(s)(t(o).mark((function e(n){var i,r,a;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),i=n.target.elements.searchQuery.value.trim(),1,""!==i){t.next=5;break}return t.abrupt("return");case 5:return v.refs.mainRenderList.innerHTML="",t.next=8,(0,c.fetchSearchAnyMovie)(i);case 8:if(null!==(r=t.sent)){t.next=12;break}return v.refs.searchTextBox.innerHTML="Search result not successful. Enter the correct movie name and ",t.abrupt("return");case 12:if(0!==r.total_pages){t.next=15;break}return v.refs.searchTextBox.innerHTML="Search result not successful. Enter the correct movie name and ",t.abrupt("return");case 15:return v.refs.searchTextBox.innerHTML="",t.next=18,(0,c.fetchGenresOfMovie)();case 18:a=t.sent,r.results.forEach((function(t){b(t,a.data.genres),y(t)})),v.refs.mainRenderList.innerHTML=x(r.results);case 21:case"end":return t.stop()}}),e)})))).apply(this,arguments)}v.refs.searchForm.addEventListener("submit",(function(t){return P.apply(this,arguments)})),r("8YbB4"),r("bktnR"),r("2TPGI"),r("dsadE"),r("jomzW"),r("62hKk")}();
//# sourceMappingURL=index.5cc6b043.js.map