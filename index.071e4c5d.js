!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i),i("4Nugj"),i("i91Q7");var a,s=i("bpxeT"),o=i("2TvXO"),c=i("62hKk");i("dDDEV");window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
a=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,i,a,s=Object.prototype.hasOwnProperty;for(i=1,a=arguments.length;i<a;i+=1)for(r in n=arguments[i])s.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),i=n(17),a=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):a(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var i,a;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(a=e.length,i=n;n>=0&&i<a;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var r=n(29),i=n(30),a=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=a(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),i=n(7),a=n(0),s=n(1),o=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=a({},u,e),this._currentPage=0,this._view=new o(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),a=this._getEdge(t);return e.leftPageNumber=a.left,e.rightPageNumber=a.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),a=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(a/2),(n=(e=Math.max(t-r,1))+a-1)>i&&(e=Math.max(i-a+1,1),n=i)):(e=(s-1)*a+1,n=s*a,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),i=n(14),a=n(4),s=n(16),o=n(2),c=n(5),u=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){r(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var r=this;a(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):s(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},f.prototype.once=function(t,e,n){var r=this;if(s(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,r=0;if(o(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},f.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,a=e===r.context,s=i&&a;return s&&n._forgetContext(r.context),s}},f.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):a(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},f.prototype.off=function(t,e){a(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),i=n(7),a=n(21),s=n(22),o=n(24),c=n(25),u=n(0),l=n(4),f=n(28),p=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],g=["prev","next"],_=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(d,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(d,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(g,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,r,i=a(e);o(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!p.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),i=n(3),a=n(23);function s(t,e,n,r){function s(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,r){var s=a(t,e),o=!1;i(s,(function(t){return t.handler!==n||(o=!0,!1)})),o||s.push({handler:n,wrappedHandler:r})}(t,e,n,s)}t.exports=function(t,e,n,a){r(e)?i(e.split(/\s+/g),(function(e){s(t,e,n,a)})):i(e,(function(e,r){s(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),i=n(8),a=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,c=[];o?r(n,(function(e){t.classList.add(e)})):((e=a(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),s(t,c))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),i=n(3),a=n(2),s=n(4),o=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,h=/^["']\w+["']$/,d=/"|'/g,g=/^-?\d+\.?\d*$/,_={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],a=0,s=0;return i(e,(function(t,i){0===t.indexOf("if")?a+=1:"/if"===t?a-=1:a||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(s,i)),s=i+1)})),r.push(e.slice(s)),{exps:n,sourcesInsideIf:r}}(t,e),a=!1,s="";return i(r.exps,(function(t,e){return(a=y(t,n))&&(s=b(r.sourcesInsideIf[e],n)),!a})),s},each:function(t,e,n){var r=y(t,n),s=a(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[s]=r,c["@this"]=t,o(n,c),u+=b(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),a=t[i+1],s=y(t.slice(0,i),n),c={};return c[a]=s,b(e,o(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],a=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(a,r)),a=r+n[0].length,n=e.exec(t);return i.push(t.slice(a)),i};function v(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:h.test(t)?r=t.replace(d,""):u.test(t)?r=v((n=t.split(l))[0],e)[v(n[1],e)]:f.test(t)?r=v((n=t.split(p))[0],e)[n[1]]:g.test(t)&&(r=parseFloat(t)),r}function x(t,e,n){for(var r,i,a,o,c=_[t],u=1,l=2,f=e[l];u&&s(f);)0===f.indexOf(t)?u+=1:0===f.indexOf("/"+t)&&(u-=1,r=l),f=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,a=r,(o=e.splice(i+1,a-i)).pop(),o),n),e}function y(t,e){var n=v(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(v(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function b(t,e){for(var n,r,i,a=1,o=t[a];s(o);)r=(n=o.split(" "))[0],_[r]?(i=x(r,t.splice(a,t.length-a),e),t=t.concat(i)):t[a]=y(n,e),o=t[a+=2];return t.join("")}t.exports=function(t,e){return b(m(t,c),e)}},function(t,e,n){"use strict";var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(a);(r(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return(new Date).getTime()-t>6048e5}(s)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},a();var u={currentPage:0,pagination:null},l=(document.querySelector("#tui-pagination-container"),c=i("62hKk"),document.querySelector(".main-render")),f=document.querySelector(".pagination"),p=0;function h(t,e){var n="",r=t-1,i=t+1,a=t+2;p=t,t>1&&(n+='<li class="pagination-left-arrow">&#129144;</li>'),t>1&&(n+='<li class="pagination-number-first">1</li>'),t>4&&(n+='<li class="pagination-dots">...</li>'),t>3&&(n+='<li class="pagination-number">'.concat(t-2,"</li>")),t>2&&(n+='<li class="pagination-number">'.concat(r,"</li>")),n+='<li class="pagination-number active"><b>'.concat(t,"</b></li>"),e-1>t&&(n+='<li class="pagination-number">'.concat(i,"</li>")),e-2>t&&(n+='<li class="pagination-number">'.concat(a,"</li>")),e-3>t&&(n+='<li class="pagination-dots">...</li>'),e>t&&(n+='<li class="pagination-number">'.concat(e,"</li>"),n+='<li class="pagination-right-arrow">&#129146;<li>'),f.innerHTML=n}function d(t){h(t.page,t.total_pages);var e=[];t.results.forEach((function(t){var n={id:t.id,poster:t.poster_path,title:t.original_title,genres:t.genre_ids,year:t.release_date?t.release_date.slice(0,4):"Year N/A"};e.push(n)})),(0,c.fetchGenresOfMovie)().then((function(t){var n=t.data.genres;return e.forEach((function(t){switch(t.genres=t.genres.map((function(t){return n.forEach((function(e){e.id===t&&(t=e.name)})),t})),!0){case t.genres.length>0&&t.genres.length<=2:t.genres=t.genres.join(", ");break;case t.genres.length>2:t.genres[2]="Other",t.genres=t.genres.slice(0,3).join(", ");break;default:t.genres="Genre N/A"}})),e})).then((function(t){l.innerHTML=t.map((function(t){var e=t.id,n=t.poster,r=t.title,i=t.genres,a=t.year;return'\n  <li class="main-render__item">\n          <a href="#" class="main-render__link" data-id="'.concat(e,'">          \n            <img class="main-render__image"\n            src="').concat(n?"https://image.tmdb.org/t/p/w500".concat(n):imgPlaceholder,'"\n            alt="').concat(r,'" \n            data-id="').concat(e,'">\n            <h2 class="main-render__title" data-id="').concat(e,'">\n              ').concat(r,'\n            </h2>\n            <p class="main-render__text" data-id="').concat(e,'">').concat(i," | ").concat(a,"</p>\n            \n          </a>\n        </li>\n  ")})).join("")})).catch((function(t){console.log("Failed to get genres : ",t),e.map((function(t){return t.genres="Genres N/A"}))}))}f.addEventListener("click",(function(t){var e=document.querySelector('input[name="searchQuery"]').value;if("LI"!==t.target.nodeName)return;"🡸"===t.target.textContent&&(p-=1,e?(0,c.fetchSearchAnyMovie)(e,p).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})):(0,c.fetchTrendMovies)(p).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})));"🡺"===t.target.textContent&&(p+=1,e?(0,c.fetchSearchAnyMovie)(e,p).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})):(0,c.fetchTrendMovies)(p).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})));if("..."===t.target.textContent)return;e?(0,c.fetchSearchAnyMovie)(e,t.target.textContent).then((function(t){d(t.data)})).catch((function(t){return console.log(t)})):(0,c.fetchTrendMovies)(t.target.textContent).then((function(t){d(t.data)})).catch((function(t){return console.log(t)}));window.scrollTo({top:0,behavior:"smooth"})})),document.querySelector(".preloader"),window.addEventListener("load",(function(){preloader.classList.add("preloader--hide"),setTimeout((function(){preloader.remove()}),500)}));var g=[],_=document.querySelector(".main-render");function m(){return(m=t(s)(t(o).mark((function e(n){return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.currentPage=1,t.next=3,(0,c.fetchTrendMovies)(n).then((function(t){var e=t.data;h(e.page,e.total_pages),g=[],e.results.forEach((function(t){var e={id:t.id,poster:t.poster_path,title:t.original_title,genres:t.genre_ids,year:t.release_date?t.release_date.slice(0,4):"Year N/A"};g.push(e)}))})).catch((function(t){return console.log(t)}));case 3:return t.next=5,(0,c.fetchGenresOfMovie)().then((function(t){var e=t.data.genres;g.forEach((function(t){switch(t.genres=t.genres.map((function(t){return e.forEach((function(e){e.id===t&&(t=e.name)})),t})),!0){case t.genres.length>0&&t.genres.length<=2:t.genres=t.genres.join(", ");break;case t.genres.length>2:t.genres[2]="Other",t.genres=t.genres.slice(0,3).join(", ");break;default:t.genres="Genre N/A"}}))})).catch((function(t){console.log("Failed to get genres : ",t),g.map((function(t){return t.genres="Genres N/A"}))}));case 5:_.innerHTML=g.map((function(t){var e=t.id,n=t.poster,r=t.title,i=t.genres,a=t.year;return'\n<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="'.concat(e,'">\n        \n          <img class="main-render__image"\n          src="').concat(n?"https://image.tmdb.org/t/p/w500".concat(n):imgPlaceholder,'"\n          alt="').concat(r,'" \n          data-id="').concat(e,'">\n          \n          \n          <h2 class="main-render__title" data-id="').concat(e,'">\n            ').concat(r,'\n          </h2>\n          <p class="main-render__text" data-id="').concat(e,'">').concat(i," | ").concat(a,"</p>\n          \n        </a>\n      </li>\n")})).join(""),setTimeout((function(){if(0===g.length){_.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of popular movies is temporarily unavailable.<br>Please, retry later!\n            </p>\n            </li>'}}),500);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(t){m.apply(this,arguments)}(1);s=i("bpxeT"),o=i("2TvXO"),c=i("62hKk");var v=i("4Nugj");function x(t){return t.reduce((function(t,e){return t+'\n    <li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="'.concat(e.id,'">\n            <img class="main-render__image"\n          src="').concat(e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):e.imgPlaceholder,'"\n          alt="').concat(e.original_title,'" \n          data-id="').concat(e.id,'">\n              <h2 class="main-render__title" data-id="').concat(e.id,'">\n            ').concat(e.original_title,'\n          </h2>\n          <p class="main-render__text" data-id="').concat(e.id,'">').concat(e.genres," | ").concat(e.year,"</p>\n        </a>\n      </li>")}),"")}function y(t,e){switch(t.genres=t.genre_ids.map((function(t){return e.forEach((function(e){e.id===t&&(t=e.name)})),t})),!0){case t.genres.length>0&&t.genres.length<=2:t.genres=t.genres.join(", ");break;case t.genres.length>2:t.genres[2]="Other",t.genres=t.genres.slice(0,3).join(", ");break;default:t.genres="Genre N/A"}}function b(t){t.year=t.release_date?t.release_date.slice(0,4):"Year N/A"}function P(){return(P=t(s)(t(o).mark((function e(n){var r,i,a;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=n.target.elements.searchQuery.value.trim(),1,""!==r){t.next=5;break}return t.abrupt("return");case 5:return v.refs.mainRenderList.innerHTML="",t.next=8,(0,c.fetchSearchAnyMovie)(r);case 8:if(null!==(i=t.sent)){t.next=12;break}return v.refs.searchTextBox.innerHTML="Search result not successful. Enter the correct movie name.",t.abrupt("return");case 12:if(0!==i.total_pages){t.next=15;break}return v.refs.searchTextBox.innerHTML="Search result not successful. Enter the correct movie name.",t.abrupt("return");case 15:return v.refs.searchTextBox.innerHTML="",t.next=18,(0,c.fetchGenresOfMovie)();case 18:a=t.sent,i.data.results.forEach((function(t){y(t,a.data.genres),b(t)})),h(i.data.page,i.data.total_pages),v.refs.mainRenderList.innerHTML=x(i.data.results);case 22:case"end":return t.stop()}}),e)})))).apply(this,arguments)}v.refs.searchForm.addEventListener("submit",(function(t){return P.apply(this,arguments)})),i("8YbB4"),i("bktnR"),i("2TPGI"),i("dsadE"),i("jomzW"),i("62hKk")}();
//# sourceMappingURL=index.071e4c5d.js.map
