import{a as w,i as l,S as b}from"./assets/vendor-4fb3e0b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const L="37887281-69a6e413b8501c16bd9004fb8",S="https://pixabay.com/api/",v=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"40"});async function g(o,e=1){return(await w.get(`${S}?key=${L}&q=${o}&${v}&page=${e}`)).data}function h(o){return o.hits.map(e=>`            
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
            `).join("")}function s(o,e=0){switch(o){case"error":$();break;case"warningSQ":E();break;case"warningEnd":M();break;case"success":C(e);break}}function $(){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",color:"red",onClosed:function(){}})}function E(){l.show({title:"Warning",message:"Please enter your search query.",position:"topRight",color:"yellow",onClosed:function(){}})}function M(){l.show({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"yellow",onClosed:function(){}})}function C(o){l.show({title:"Success",message:`Hooray! We found  ${o.totalHits} images.`,position:"topRight",color:"green",onClosed:function(){}})}const m=document.querySelector(".search-form input"),R=document.querySelector(".search-form"),f=document.querySelector(".gallery"),a=document.querySelector(".load-more"),p=new b(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});let d=1;R.addEventListener("submit",_);a.addEventListener("click",k);async function _(o){o.preventDefault(),window.scrollTo(0,0),d=1;const e=m.value.toLowerCase();if(e===""){s("warningSQ"),c();return}try{const r=await g(e);if(r.hits.length===0){a.classList.add("is-hidden"),s("error"),c();return}y(r),s("success",r),f.innerHTML=h(r),p.refresh()}catch(r){q(r)}}async function k(){const o=m.value.toLowerCase();if(!o){s("warningSQ"),c();return}d+=1;const e=await g(o,d);if(y(e),e.hits.length===0){s("warningEnd");return}const r=h(e);f.insertAdjacentHTML("beforeend",r),p.refresh();const{height:i}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}function y(o){o.hits.length<40?(a.classList.add("is-hidden"),s("warningEnd")):a.classList.remove("is-hidden")}function q(o){c(),s("error"),console.log(o)}function c(){f.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
