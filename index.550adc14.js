var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("krGWQ");var s=r("4kseb");const a={totalPages:1,totalItems:20,itemsPerPage:20,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn-custom">{{page}}</a>',currentPage:'<strong class="tui-page-btn-custom tui-is-selected-custom">{{page}}</strong>',moveButton:'<a id="{{type}}" href="#" class="tui-page-btn-custom tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span id="{{type}}" class="tui-page-btn-custom tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn-custom tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=document.querySelector("#tui-pagination-container"),l=(e,t)=>{let{totalPages:n,visiblePages:r}=a;const s=Math.ceil(r/2);if(n<=1)i.classList.add("visually-hidden");else{var l,o;if(document.querySelector(".tui-page-btn-custom.tui-last").innerHTML=`${n}`,document.querySelector(".tui-page-btn-custom.tui-first").innerHTML=`${e}`,t<e+s||n<=r)document.querySelector(".tui-page-btn-custom.tui-first").classList.add("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-prev").classList.add("visually-hidden");else null===(l=document.querySelector("#prev"))||void 0===l||l.after(document.querySelector("#first")),document.querySelector(".tui-page-btn-custom.tui-first").classList.remove("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-prev").classList.remove("visually-hidden");if(t>n-s||n<=r)document.querySelector(".tui-page-btn-custom.tui-last").classList.add("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-next").classList.add("visually-hidden");else null===(o=document.querySelector("#last"))||void 0===o||o.after(document.querySelector("#next")),document.querySelector(".tui-page-btn-custom.tui-last").classList.remove("visually-hidden"),document.querySelector(".tui-page-btn-custom.tui-next").classList.remove("visually-hidden");i.classList.remove("visually-hidden")}};let o=[];const c=document.querySelector(".main-render");!async function(e){await(0,s.fetchTrendMovies)(e).then((({data:{results:t}})=>{l(1,e),o=[],t.forEach((e=>{let t={id:e.id,poster:e.poster_path,title:e.original_title,genres:e.genre_ids,year:e.release_date?e.release_date.slice(0,4):"Year N/A"};o.push(t)}))})).catch((e=>console.log(e))),await(0,s.fetchGenresOfMovie)().then((e=>{const{data:{genres:t}}=e;o.forEach((e=>{switch(e.genres=e.genres.map((e=>(t.forEach((t=>{t.id===e&&(e=t.name)})),e))),!0){case e.genres.length>0&&e.genres.length<=2:e.genres=e.genres.join(", ");break;case e.genres.length>2:e.genres[2]="Other",e.genres=e.genres.slice(0,3).join(", ");break;default:e.genres="Genre N/A"}}))})).catch((e=>{console.log("Failed to get genres : ",e),o.map((e=>e.genres="Genres N/A"))})),c.innerHTML=o.map((({id:e,poster:t,title:n,genres:r,year:s})=>`\n<li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="${e}">\n        <div class="main-render__image-box">\n          <img class="main-render__image"\n          src="${t?`https://image.tmdb.org/t/p/w500${t}`:imgPlaceholder}"\n          alt="${n}" \n          data-id="${e}">\n          </div>\n          <div class="main-render__discription">\n          <h2 class="main-render__title" data-id="${e}">\n            ${n}\n          </h2>\n          <p class="main-render__text" data-id="${e}">${r} | ${s}</p>\n          </div>\n        </a>\n      </li>\n`)).join(""),setTimeout((()=>{if(0===o.length){const e='<li class="api-error">\n            <p class="api-error__desc">The list of popular movies is temporarily unavailable.<br>Please, retry later!\n            </p>\n            </li>';c.innerHTML=e}}),500)}(1);s=r("4kseb");var d=r("krGWQ");function u(e,t){switch(e.genres=e.genre_ids.map((e=>(t.forEach((t=>{t.id===e&&(e=t.name)})),e))),!0){case e.genres.length>0&&e.genres.length<=2:e.genres=e.genres.join(", ");break;case e.genres.length>2:e.genres[2]="Other",e.genres=e.genres.slice(0,3).join(", ");break;default:e.genres="Genre N/A"}}function m(e){e.year=e.release_date?e.release_date.slice(0,4):"Year N/A"}d.refs.searchForm.addEventListener("submit",(async function(e){e.preventDefault();let t=e.target.elements.searchQuery.value.trim();if(""===t)return;d.refs.mainRenderList.innerHTML="";const n=await(0,s.fetchSearchAnyMovie)(t);if(null===n)return void(d.refs.searchTextBox.innerHTML="Search result not successful. Enter the correct movie name and ");if(0===n.total_pages)return void(d.refs.searchTextBox.innerHTML="Search result not successful. Enter the correct movie name and ");d.refs.searchTextBox.innerHTML="";const r=await(0,s.fetchGenresOfMovie)();n.results.forEach((e=>{u(e,r.data.genres),m(e)})),d.refs.mainRenderList.innerHTML=(a=n.results,a.reduce(((e,t)=>e+`\n    <li class="main-render__item">\n        <a href="#" class="main-render__link" data-id="${t.id}">\n        <div class="main-render__image-box">\n          <img class="main-render__image"\n          src="${t.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:t.imgPlaceholder}"\n          alt="${t.original_title}" \n          data-id="${t.id}">\n          </div>\n          <div class="main-render__discription">\n          <h2 class="main-render__title" data-id="${t.id}">\n            ${t.original_title}\n          </h2>\n          <p class="main-render__text" data-id="${t.id}">${t.genres} | ${t.year}</p>\n          </div>\n        </a>\n      </li>`),""));var a})),document.querySelector(".preloader"),window.addEventListener("load",(()=>{preloader.classList.add("preloader--hide"),setTimeout((()=>{preloader.remove()}),1e3)})),r("3owK3"),r("6K2nx"),r("cp1UA"),r("1VOaQ"),r("jSHFF"),r("hQpB0"),r("4kseb");
//# sourceMappingURL=index.550adc14.js.map