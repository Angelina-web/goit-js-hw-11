import{a as f,S as d,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(n){const o="50799853-cb389a837cb73f28ab1cf5f3e",t="https://pixabay.com/api/",s={key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(t,{params:s}).then(e=>e.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery a");function p(n){const o=n.map(t=>`
      <li class="gallery-item">
      <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
        <ul>
          <li>Likes: ${t.likes}</li>
          <li>Views: ${t.views}</li>
          <li>Comments: ${t.comments}</li>
          <li>Downloads: ${t.downloads}</li>
          </ul>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){l.innerHTML=""}function g(){c.style.display="block"}function L(){c.style.display="none"}const u=document.querySelector(".form"),b=u.elements["search-text"];u.addEventListener("submit",n=>{n.preventDefault();const o=b.value.trim();if(!o){i.error({message:"Please enter a search term!"});return}h(),g(),m(o).then(t=>{const{hits:s}=t;s.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!"}):p(s)}).catch(()=>{i.error({message:"Error fetching data. Try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
