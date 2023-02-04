var modalBody = document.getElementsByClassName('modal__body')[0]
var modalLogin = document.getElementsByClassName('modal__login')[0]
var modalSignup =document.getElementsByClassName('modal__signup')[0]

function openModalBody() {
	modalBody.style.display = "block";
}

function closeModalBody() {
	modalBody.style.display = "none";
	modalSignup.style.display = "none";
	modalLogin.style.display = "none";
}

function openLoginForm() {
	openModalBody()
	modalLogin.style.display = "flex";
	modalSignup.style.display = "none";
}

function openSignupForm() {
	openModalBody()
	modalSignup.style.display = "flex";
	modalLogin.style.display = "none";
}

modalBody.onclick = function(e) {
	if(e.target == this) {
		closeModalBody()
	}
}
