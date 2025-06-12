import{a as u,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function d(r){const s="50799853-cb389a837cb73f28ab1cf5f3e",t="https://pixabay.com/api/",n={key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(t,{params:n}).then(e=>e.data)}const l=document.querySelector(".gallery"),m=new f(".gallery a");function y(r){const s=r.map(t=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",s),m.refresh()}function p(){l.innerHTML=""}function h(){const r=document.querySelector(".loader");r&&(r.style.display="block")}function g(){const r=document.querySelector(".loader");r&&(r.style.display="none")}const c=document.querySelector(".form"),L=c.elements["search-text"];c.addEventListener("submit",r=>{r.preventDefault();const s=L.value.trim();if(!s){i.error({message:"Please enter a search term!"});return}p(),h(),d(s).then(t=>{const{hits:n}=t;n.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!"}):y(n)}).catch(()=>{i.error({message:"Error fetching data. Try again later."})}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
