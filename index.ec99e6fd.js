var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},e.parcelRequired7c6=i),i("krGWQ");var a=i("4kseb");const n={totalPages:1,totalItems:20,itemsPerPage:20,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn-custom">{{page}}</a>',currentPage:'<strong class="tui-page-btn-custom tui-is-selected-custom">{{page}}</strong>',moveButton:'<a id="{{type}}" href="#" class="tui-page-btn-custom tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span id="{{type}}" class="tui-page-btn-custom tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn-custom tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},r=document.querySelector("#tui-pagination-container"),l=(e,t)=>{let{totalPages:s,visiblePages:i}=n;const a=Math.ceil(i/2);if(s<=1)r.classList.add("visually-hidden");else{var l,o;if(document.querySelector(".tui-page-btn-custom.tui-last").innerHTML=`${s}`,document.querySelector(".tui-page-btn-custom.tui-first").innerHTML=`${e}`,t<e+a||s<=i)document.querySelector(".tui-page-btn-custom.tui-first").classList.add("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-prev").classList.add("visually-hidden");else null===(l=document.querySelector("#prev"))||void 0===l||l.after(document.querySelector("#first")),document.querySelector(".tui-page-btn-custom.tui-first").classList.remove("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-prev").classList.remove("visually-hidden");if(t>s-a||s<=i)document.querySelector(".tui-page-btn-custom.tui-last").classList.add("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-next").classList.add("visually-hidden");else null===(o=document.querySelector("#last"))||void 0===o||o.after(document.querySelector("#next")),document.querySelector(".tui-page-btn-custom.tui-last").classList.remove("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-next").classList.remove("visually-hidden");r.classList.remove("visually-hidden")}};let o=[];const c=document.querySelector(".main-render");!async function(e){await(0,a.fetchTrendMovies)(e).then((({data:{results:t}})=>{l(1,e),o=[],t.forEach((e=>{let t={id:e.id,poster:e.poster_path,title:e.original_title,genres:e.genre_ids,year:e.release_date?e.release_date.slice(0,4):"Year N/A"};o.push(t)}))})).catch((e=>console.log(e))),await(0,a.fetchGenresOfMovie)().then((e=>{const{data:{genres:t}}=e;o.forEach((e=>{switch(e.genres=e.genres.map((e=>(t.forEach((t=>{t.id===e&&(e=t.name)})),e))),!0){case e.genres.length>0&&e.genres.length<=2:e.genres=e.genres.join(", ");break;case e.genres.length>2:e.genres[2]="Other",e.genres=e.genres.slice(0,3).join(", ");break;default:e.genres="Genre N/A"}}))})).catch((e=>{console.log("Failed to get genres : ",e),o.map((e=>e.genres="Genres N/A"))})),c.innerHTML=o.map((({id:e,poster:t,title:s,genres:i,year:a})=>`\n<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="${e}">\n        <div class="main-render__image-box">\n          <img class="main-render__image"\n          src="${t?`https://image.tmdb.org/t/p/w500${t}`:imgPlaceholder}"\n          alt="${s}" \n          data-id="${e}">\n          </div>\n          <div class="main-render__discription">\n          <h2 class="main-render__title" data-id="${e}">\n            ${s}\n          </h2>\n          <p class="main-render__text" data-id="${e}">${i} | ${a}</p>\n          </div>\n        </a>\n      </li>\n`)).join(""),setTimeout((()=>{if(0===o.length){const e='<li class="api-error">\n            <p class="api-error__desc">The list of popular movies is temporarily unavailable.<br>Please, retry later!\n            </p>\n            </li>';c.innerHTML=e}}),500)}(1),document.querySelector(".preloader"),window.addEventListener("load",(()=>{preloader.classList.add("preloader--hide"),setTimeout((()=>{preloader.remove()}),1e3)})),i("3owK3"),i("6K2nx"),i("cp1UA"),i("1VOaQ"),i("jSHFF"),i("hQpB0"),i("4kseb");
//# sourceMappingURL=index.ec99e6fd.js.map