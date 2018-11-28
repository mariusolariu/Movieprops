window.addEventListener("load", main, false);

function $(x) { return document.getElementById(x);}

function main(){
	var id = setInterval(getNewTrivia, 13000);
}

var ajaxObj;

function getNewTrivia(){
	try{
		ajaxObj = new XMLHttpRequest();	
		ajaxObj.addEventListener("readystatechange", processTrivia, true);
		ajaxObj.open("GET", "https://cors.io/?http://webdev.student.uws.ac.uk/movie-trivia.php",true);
		ajaxObj.send(null);
	}catch (exception){
		alert(exception);
	}
}

function processTrivia(){
	if (ajaxObj.readyState == 4 && ajaxObj.status == 200){
		$("triviaP").innerHTML = "";
	    var parser = JSON.parse(ajaxObj.responseText);
		$("triviaP").innerHTML = parser["movie-trivia"];	
	}
}

