"use strict";

export default function initSidebar(menuSelector, sidebarSelector, containerSelector) {
	const menuIcon=document.querySelector(menuSelector)
	const sidebar=document.querySelector(sidebarSelector)
	const container=document.querySelector(containerSelector)

	if(!menuIcon || !sidebar || !container) return

	menuIcon.addEventListener("click", ()=>{
		sidebar.classList.toggle("sidebar--small");
		container.classList.toggle("container--large")
	})
}