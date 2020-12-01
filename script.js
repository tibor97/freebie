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