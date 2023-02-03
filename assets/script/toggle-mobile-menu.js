var mobileMenuToggleBtn = document.getElementById("toggle-menu-bar");
var mobileMenu = document.getElementById("mobile-menu");

function openMobileMenu() {
	mobileMenu.style.display = "block";
    mobileMenuToggleBtn.querySelector('i').className="fa fa-times"
}

function closeMobileMenu() {
	mobileMenu.style.display = "none";
    mobileMenuToggleBtn.querySelector('i').className="fa fa-bars"
}

function toggleMobileMenu() {
	if (mobileMenu.style.display == "block") {
		closeMobileMenu();
	} else {
		openMobileMenu();
	}
}

var mobileSubMenuToggleBtn = document.getElementById("toggle-sub-menu-bar");
var mobileSubMenu = document.getElementById("mobile-sub-menu");

function openMobileSubMenu() {
	mobileSubMenu.style.display = "block";
    mobileSubMenuToggleBtn.querySelector('i').className="fa fa-caret-up"
}

function closeMobileSubMenu() {
	mobileSubMenu.style.display = "none";
    mobileSubMenuToggleBtn.querySelector('i').className="fa fa-caret-down"
}

function toggleMobileSubMenu() {
	if (mobileSubMenu.style.display == "block") {
		closeMobileSubMenu();
	} else {
		openMobileSubMenu();
	}
}