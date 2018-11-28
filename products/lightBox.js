window.addEventListener("load", main, false);
function $(x){ return document.getElementById(x); }

var slideIndex = 1;
var imgs;
var slideContainter;
var captionText;

function main(){
	imgs = document.getElementsByClassName("imgStyle");
	slideContainer = $("mySlidesId");
	captionText = $("caption"); 
}


function openModal(){
		$("myModal").style.display = "block";
}

function closeModal(){
		$("myModal").style.display = "none";
}


//showSlide(slideIndex);

function plusSlides(n){
	showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
    n = (n === -1 ) ? imgs.length - 1 :  n;
    n = (n === imgs.length) ? 0 : n;
	slideIndex = n;

	slideContainer.style.display = "block";
	captionText.innerHTML = imgs[n].alt;
	$("imgContainer").src = imgs[n].src;
	$("slideNumberDiv").innerHTML = (slideIndex + 1) + "/" + imgs.length;	
}
