!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a),a("4Nugj"),a("8YbB4"),a("2TPGI");var i=a("bktnR"),r=document.querySelector("[data-film-modal-open]"),c=document.querySelector(".watched-btn"),d=document.querySelector(".queue-btn");function o(){return data.map((function(e){var n=e.id,t=e.poster_path,a=e.original_title,i=e.name,r=e.genres,c=e.release_date,d=e.first_air_date;return'<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="'.concat(n,'">\n        <div class="main-render__image-box">\n            <img class="main-render__image"\n            src="https://image.tmdb.org/t/p/w500').concat(t,'"\n            alt="').concat(a||i,'" \n            data-id="').concat(n,'">\n            </div>\n            <div class="main-render__discription">\n            <h2 class="main-render__title" data-id="').concat(n,'">\n            ').concat(a||i,'\n            </h2>\n            <p class="main-render__text" data-id="').concat(n,'">').concat(r," | ").concat(c||d,"</p>\n            </div>\n        </a>\n        </li>")})).join("")}function s(e){e.preventDefault();var n=localStorage.getItem("watched");0===(n?JSON.parse(n):[]).length?r.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of watched movies is empty.</p>\n            </li>':r.insertAdjacentHTML("beforeend",o)}function l(){r.innerHTML=""}r.addEventListener("click",i.openBackDrop),r.addEventListener("click",i.toggleClassHidden),window.addEventListener("load",s),d.addEventListener("click",(function(e){e.preventDefault(),c.classList.remove("btn--active"),d.classList.add("btn--active"),window.removeEventListener("load",s),l(),function(e){e.preventDefault();var n=localStorage.getItem("queue");0===(n?JSON.parse(n):[]).length?r.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of queued movies is empty.</p>\n            </li>':r.insertAdjacentHTML("beforeend",o)}(e)})),c.addEventListener("click",(function(e){e.preventDefault(),d.classList.remove("btn--active"),c.classList.add("btn--active"),l(),s(e)}))}();
//# sourceMappingURL=library.8f982aef.js.map
