(()=>{"use strict";const e=function(){const e=document.querySelector("main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact-page");const t=document.createElement("h2");t.textContent="Where to find us",t.classList.add("contact__title");const n=document.createElement("div");n.classList.add("contact__section");const d=document.createElement("div");d.textContent="Come : DON'T COME TO US. WE'LL COME TO YOU";const a=document.createElement("div");a.textContent="Mail us : DON'T MAIL US. WE'LL MAIL YOU";const c=document.createElement("div");return c.textContent="Call us : DON'T CALL US. WE'LL CALL YOU",n.appendChild(d),n.appendChild(a),n.appendChild(c),e.appendChild(n),e}())};function t(e){const t=document.createElement("div");t.classList.add("card");const n=document.createElement("h3");return n.classList.add("card__name"),n.textContent=e,t.appendChild(n),t}const n=function(){const e=document.querySelector("main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("hero");const t=document.createElement("h1");return t.textContent="Feed Your Soul",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("dishes");const n=document.createElement("h2");n.textContent="Popular dishes",n.classList.add("dishes__title"),e.appendChild(n);const d=document.createElement("div");return d.classList.add("dishes__cards"),d.appendChild(t("Pizza")),d.appendChild(t("Burger")),e.appendChild(d),e}())};function d(e,t,n){const d=document.createElement("div");d.classList.add("menu__item");const a=document.createElement("h5");a.textContent=e;const c=document.createElement("p");c.textContent=n;const o=document.createElement("p");return o.textContent=t+" $",d.appendChild(a),d.appendChild(c),d.appendChild(o),d}const a=function(){const e=document.querySelector("main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h3");t.textContent="Our Menu";const n=document.createElement("div");return n.classList.add("menu__items"),n.appendChild(d("Pizza","24","smoked mozzarela, basil")),n.appendChild(d("Ricotta Pizza","27","smoked mozzarela, basil")),n.appendChild(d("Margherita Pizza","31","smoked mozzarela, basil")),n.appendChild(d("Havana Burger","35","smoked mozzarela, basil")),n.appendChild(d("BBQ Burger","24","smoked mozzarela, basil")),n.appendChild(d("Vegan Burger","35","smoked mozzarela, basil")),e.appendChild(t),e.appendChild(n),e}())};!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const d=document.createElement("img");return d.classList.add("header__logo"),t.appendChild(d),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav");const d=document.createElement("div");d.classList.add("nav__item"),d.textContent="Home",d.addEventListener("click",n);const c=document.createElement("div");c.classList.add("nav__item"),c.textContent="Menu",c.addEventListener("click",a);const o=document.createElement("div");return o.classList.add("nav__item"),o.textContent="Contact Us",o.addEventListener("click",e),t.appendChild(d),t.appendChild(c),t.appendChild(o),t}()),t}()),t.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e}()),t.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("div");t.classList.add("footer__section");const n=document.createElement("div");n.textContent="dont mess with us";const d=document.createElement("a");return d.setAttribute("src","mailto:support@gamil.com"),d.textContent="Just Don't",t.appendChild(n),t.appendChild(d),e.appendChild(t),e}()),n()}()})();