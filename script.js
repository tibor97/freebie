var hamburgerMenu = document.querySelector('.c-hamburger-menu');
var nav = document.querySelector('nav');
var navbarList = document.querySelector('.c-navbar-list');
var navbarListItems = document.querySelectorAll('.c-navbar-link');

hamburgerMenu.onclick = function() {
    navbarList.classList.toggle('active');
    hamburgerMenu.classList.toggle('c-hamburger-menu--toggle');
}

navbarListItems.forEach(function(navItems) {
	navItems.onclick = function(){
		if(event.target.matches('.c-navbar-link')){
			navbarList.classList.remove('active');
    		hamburgerMenu.classList.toggle('c-hamburger-menu--toggle');
		}
	}
});

const tabs = document.querySelectorAll(".c-tabs-wrapper");
const tab = document.querySelectorAll(".c-tab");
const tabContent = document.querySelectorAll(".tab-content");

function onTabClick(event) {

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("c-tab--active");
  }

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("tab-content--active");
  }

  event.target.classList.add('c-tab--active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('pricing-section-wrapper').getElementsByClassName(classString)[0].classList.add("tab-content--active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}