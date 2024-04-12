import{S as m,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com/api/",i="?key=43339942-99901bbe97dd078ee80d94f6e",s=`&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,e=r+i+s;return fetch(e).then(t=>t.json()).catch(t=>{throw new Error(t.status)})}const c=document.querySelector(".gallery");function h(o){const r=o.hits.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:l,comments:u,downloads:d})=>`<li class="card-item">
  <a href=${e}>
  <img src=${s} alt="${t}" height="200"/>
    <ul class="card-info">
      <li>Likes<p>${n}</p></li>
      <li>Views<p>${l}</p></li>
      <li>Comments<p>${u}</p></li>
      <li>Downloads<p>${d}</p></li>
    </ul>
    </a>
</li>`).join("");c.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}const g=document.querySelector(".img-search-form"),a=document.querySelector(".loader");g.addEventListener("submit",y);function y(o){o.preventDefault(),c.innerHTML="",a.classList.remove("hidden");const r=o.target.elements.query.value.trim();p(r).then(i=>{i.totalHits===0||r===""?(a.classList.add("hidden"),f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"})):(a.classList.add("hidden"),h(i))}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
