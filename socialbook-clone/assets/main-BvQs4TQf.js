(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();function l(){const e=document.getElementById("dark-btn");e.addEventListener("click",()=>{e.classList.toggle("dark-btn-on"),document.body.classList.toggle("dark-theme"),localStorage.setItem("theme",localStorage.getItem("theme")==="light"?"dark":"light")});const s=localStorage.getItem("theme")||"light";localStorage.setItem("theme",s),s==="dark"?(e.classList.add("dark-btn-on"),document.body.classList.add("dark-theme")):(e.classList.remove("dark-btn-on"),document.body.classList.remove("dark-theme"))}const d=[{name:"John Nicholson",date:"June 24 2021, 13:40pm",avatar:"images/profile-pic.png",text:"Subscribe for more tutorials on website development and UI design.",image:"images/feed-image/feed-image-1.png",likes:250,comments:705,shares:100},{name:"John Nicholson",date:"June 24 2021, 13:40pm",avatar:"images/profile-pic.png",text:"Subscribe for more tutorials on website development and UI design.",image:"images/feed-image/feed-image-2.png",likes:150,comments:35,shares:20},{name:"John Nicholson",date:"June 24 2021, 13:40pm",avatar:"images/profile-pic.png",text:"Subscribe for more tutorials on website development and UI design.",image:"images/feed-image/feed-image-3.png",likes:40,comments:100,shares:45},{name:"John Nicholson",date:"June 24 2021, 13:40pm",avatar:"images/profile-pic.png",text:"Subscribe for more tutorials on website development and UI design.",image:"images/feed-image/feed-image-5.png",likes:120,comments:45,shares:20},{name:"John Nicholson",date:"June 24 2021, 13:40pm",avatar:"images/profile-pic.png",text:"Subscribe for more tutorials on website development and UI design.",image:"images/feed-image/feed-image-4.png",likes:120,comments:45,shares:20}];function m(e){return` 
   <article class="post">
      <div class="post__row">
        <div class="post__user-profile">
		  	  <div class="post__avatar avatar avatar--size-45">
              <img class="avatar__image" src="${e.avatar}" alt="Profile Image">
			 </div>
          <div class="post__user-text">
            <h3 class="post__author">${e.name}</h3>
            <span class="post__date">${e.date}</span>
          </div>
        </div>
        <a href="#"><i class="fa-solid fa-ellipsis-v"></i></a>
      </div>

      <div class="post__text">
        <p>
          ${e.text}
          <a class="post__link" href="#">#WebDevelopment</a>
          <a class="post__link" href="#">#UIDesign</a>
        </p>

        <img class="post__img" src="${e.image}" alt="Feed Image">

        <div class="post__row">
          <div class="post__activity">
            <div class="post__activity-item">
              <svg class="icon"><use href="images/sprite.svg#like"></use></svg>
              ${e.likes}
            </div>
            <div class="post__activity-item">
              <svg class="icon"><use href="images/sprite.svg#comments"></use></svg>
              ${e.comments}
            </div>
            <div class="post__activity-item">
              <svg class="icon"><use href="images/sprite.svg#share"></use></svg>
              ${e.shares}
            </div>
          </div>

          <div class="post__profile-icon">
			   <div class="post__avatar avatar avatar--size-22">
               <img class="avatar__image" src="${e.avatar}" alt="Profile img">
				</div>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>
    </article>
`}function g(e){const s=document.getElementById(e);if(!s){console.error(`Container with id "${e}" not found`);return}s.innerHTML="",d.forEach((a,n)=>{const t=m(a),i=document.createElement("div");i.innerHTML=t;const o=i.firstElementChild;n===0&&o.classList.add("post--first"),s.append(o)})}const p=[{day:"18",month:"March",title:"Social Media",location:"Willson Tech Park",link:"#"},{day:"22",month:"June",title:"Mobile Marketing",location:"Willson Tech Park",link:"#"}];function u(e){return`
      <li class="sidebar-events__item">
      <div class="sidebar-events__left-item">
        <h3>${e.day}</h3>
        <span>${e.month}</span>
      </div>

      <div class="sidebar-events__right-item">
        <h4>${e.title}</h4>
        <p>
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          ${e.location}
        </p>
        <a href="${e.link}">More Info</a>
      </div>
    </li>

  `}const v=[{name:"Alison Mina",photo:"/images/members/member-1.png"},{name:"Jackson Aston",photo:"/images/members/member-2.png"},{name:"Samona Rose",photo:"/images/members/member-3.png"}];function h(e){return`
	 <li class="sidebar-chat__item">
      <div class="sidebar-chat__online online">
		   <div class="sidebar-chat__avatar avatar avatar--size-40">
            <img class="avatar__image" src="${e.photo}" alt="Photo of ${e.name}">
		   </div>
      </div>
      <h3 class="sidebar-chat__name">${e.name}</h3>
    </li>

	`}function r(e,s,a=""){return`
	    <div class="sidebar-title-box">
      <h4 class="sidebar-title-box__title">${e}</h4>
        <button class="sidebar-title-box__button ${a}" type="button">
        ${s}
      </button>

    </div>
	`}function f(e){const s=document.getElementById(e);s&&(s.innerHTML=`
	 <section class="sidebar-section sidebar-events">
      ${r("Events","See All")}

      <ul class="sidebar-events__list">
        ${p.map(u).join("")}
      </ul>
    </section>

    <section class="sidebar-section sidebar-ads">
      ${r("Advertisement","Close","close-btn")}
      <img class="sidebar-ads__img" src="images/advertisement.png" alt="Advertisement">
    </section>

    <section class="sidebar-section sidebar-chat">
      ${r("Conversation","Hide Chat","hide-chat-btn")}

      <ul class="sidebar-chat__list">
        ${v.map(h).join("")}
      </ul>
    </section>
	`)}function c(e,s,a="is-hidden"){const n=document.querySelector(e),t=document.querySelector(s);!n||!t||n.addEventListener("click",()=>{t.classList.toggle(a)})}l();document.getElementById("posts-container")&&g("posts-container");document.getElementById("right-sidebar")&&f("right-sidebar");c(".profile-btn",".settings-menu","is-open");c(".hide-chat-btn",".sidebar-chat__list","is-open");c(".close-btn",".sidebar-ads__img","is-open");
