var slideIndex = 0

function autoSlider() {
    var i;
	var slideList = document.getElementsByClassName("background-slider__slides");
	for (i = 0; i < slideList.length; i++) {
		slideList[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slideList.length) {
		slideIndex = 1;
	}
	slideList[slideIndex - 1].style.display = "block";
	setTimeout(autoSlider, 5000);
}

autoSlider()