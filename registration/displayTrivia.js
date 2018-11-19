window.addEventListener("load", main, false);

function $(x) { return document.getElementById(x);}

function main(){
	var id = setInterval(getNewTrivia, 3000);
}

var ajaxObj;

function getNewTrivia(){
	try{
		ajaxObj = createCORSRequest("GET", "http://webdev.student.uws.ac.uk/movie-trivia.php");
//		ajaxObj.withCredentials = true;
//		ajaxObj.setRequestHeader("Access-Control-Allow-Origin", "*");
		ajaxObj.addEventListener("readystatechange", processTrivia, true);
		ajaxObj.send();
	}catch (exception){
		alert(exception);
	}
}

function processTrivia(){
	if (ajaxObj.readyState == 4 && ajaxObj.status == 200){
		$("triviaP").innerHTML = "";
	    var parser = JSON.parse(ajaxObj.responseText);
		$("triviP").innerHTML = parser.movie-trivia;	
	}
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

