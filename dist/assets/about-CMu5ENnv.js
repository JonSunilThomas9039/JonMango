import{i as r,a}from"./navigation-nmZ8YraR.js";document.addEventListener("DOMContentLoaded",()=>{r(),a(),d()});function c(){const e=document.getElementById("about-promo-iframe");if(e&&e.contentWindow)try{e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}catch{}}function d(){const e=document.getElementById("about-play-promo-btn"),o=document.getElementById("about-promo-container");e&&o&&(e.addEventListener("click",t=>{t.preventDefault(),o.innerHTML=`
        <div style="position: relative; width: 100%; aspect-ratio: 16/9; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5); background: #000;">
          <iframe id="about-promo-iframe"
                  src="https://www.youtube-nocookie.com/embed/EGSUtEnfX9g?autoplay=1&enablejsapi=1&rel=0" 
                  title="Magnovite 2026 Official Promo" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen 
                  style="width: 100%; height: 100%; border: none; display: block;">
          </iframe>
        </div>
      `}),"IntersectionObserver"in window&&new IntersectionObserver(n=>{n.forEach(i=>{(!i.isIntersecting||i.intersectionRatio<.2)&&c()})},{threshold:[0,.2]}).observe(o))}
