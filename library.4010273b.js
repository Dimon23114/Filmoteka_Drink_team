var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("krGWQ"),i("1gwH7"),i("3owK3"),i("cp1UA"),i("1VOaQ"),i("2shzp");var a=i("6K2nx"),r=i("krGWQ"),s=i("iQg7w");const l=document.querySelector("[data-film-modal-open]"),o=document.querySelector(".watched-btn"),d=document.querySelector(".queue-btn");function c(e){const t=[],n=(e.genres.map((e=>{t.push(e.name)})),t.join(", ")),i=e.release_date.slice(0,4)||e.first_air_date.slice(0,4);console.log(i);return`<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="${e.id}">\n            <img class="main-render__image"\n            src="https://image.tmdb.org/t/p/w500${e.poster_path}"\n            alt="${e.original_title||e.name}" \n            data-id="${e.id}">\n            <h2 class="main-render__title" data-id="${e.id}">\n            ${e.original_title||e.name}\n            </h2>\n            <p class="main-render__text" data-id="${e.id}">${n} | ${i}</p>\n        </a>\n        </li>`}function p(e){e.preventDefault();const t=localStorage.getItem("watched_list"),n=t?JSON.parse(t):[];0===n.length?l.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of watched movies is empty.</p>\n            </li>':n.map((e=>{l.insertAdjacentHTML("beforeend",c(e))}))}function u(){l.innerHTML=""}l.addEventListener("click",a.openBackDrop),l.addEventListener("click",a.addClassHidden),window.addEventListener("load",p),d.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("btn--active"),d.classList.add("btn--active"),window.removeEventListener("load",p),u(),function(e){e.preventDefault();const t=localStorage.getItem("queue_list"),n=t?JSON.parse(t):[];0===n.length?l.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of queued movies is empty.</p>\n            </li>':n.map((e=>{l.insertAdjacentHTML("beforeend",c(e))}))}(e)})),o.addEventListener("click",(function(e){e.preventDefault(),d.classList.remove("btn--active"),o.classList.add("btn--active"),u(),p(e)})),l.addEventListener("click",s.getToBtns),r.refs.modalCloseBtn.addEventListener("click",(function(e){const t=JSON.parse(localStorage.getItem("watched_list")),n=JSON.parse(localStorage.getItem("queue_list"));0===t.length&&(l.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of watched movies is empty.</p>\n            </li>');0===n.length&&(l.innerHTML='<li class="api-error">\n            <p class="api-error__desc">The list of watched movies is empty.</p>\n            </li>')})),i("86Okh"),i("4kseb");
//# sourceMappingURL=library.4010273b.js.map