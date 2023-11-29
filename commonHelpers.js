import{a as w,i as l,S as b}from"./assets/vendor-4fb3e0b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const L="37887281-69a6e413b8501c16bd9004fb8",S="https://pixabay.com/api/",v=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40"});async function g(t,e=1){return(await w.get(`${S}?key=${L}&q=${t}&${v}&page=${e}`)).data}function h(t){return t.hits.map(e=>`            
            <div class="photo-card gallery__item">
                <a class="gallery__link" href="${e.largeImageURL}">
                    <img class="gallery__image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                        <b>Likes</b> ${e.likes}
                        </p>
                        <p class="info-item">
                        <b>Views</b> ${e.views}
                        </p>
                        <p class="info-item">
                        <b>Comments</b> ${e.comments}
                        </p>
                        <p class="info-item">
                        <b>Downloads</b> ${e.downloads}
                        </p>
                    </div>
                </a>
            </div>
            `).join("")}function s(t,e=0){switch(t){case"error":$();break;case"warningSQ":E();break;case"warningEnd":M();break;case"success":R(e);break}}function $(){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",color:"red"})}function E(){l.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow"})}function M(){l.show({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"yellow"})}function R(t){l.show({title:"Success",message:`Hooray! We found  ${t.totalHits} images.`,position:"topRight",color:"green"})}const m=document.querySelector(".search-form input"),_=document.querySelector(".search-form"),f=document.querySelector(".gallery"),a=document.querySelector(".load-more"),p=new b(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});let d=1;_.addEventListener("submit",k);a.addEventListener("click",q);async function k(t){t.preventDefault(),window.scrollTo(0,0),d=1;const e=m.value.toLowerCase();if(e===""){s("warningSQ"),c();return}try{const r=await g(e);if(r.hits.length===0){a.classList.add("is-hidden"),s("error"),c();return}y(r),s("success",r),f.innerHTML=h(r),p.refresh()}catch(r){P(r)}}async function q(){const t=m.value.toLowerCase();if(!t){s("warningSQ"),c();return}d+=1;const e=await g(t,d);if(y(e),e.hits.length===0){s("warningEnd");return}const r=h(e);f.insertAdjacentHTML("beforeend",r),p.refresh();const{height:i}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}function y(t){t.hits.length<40?(a.classList.add("is-hidden"),s("warningEnd")):a.classList.remove("is-hidden")}function P(t){c(),s("error"),console.log(t)}function c(){f.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
