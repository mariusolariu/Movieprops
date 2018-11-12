window.addEventListener("load", main, false);
var ajaxObject;

function main(){
	//document.getElementById("test").addEventListener("click", doSmth, false);

	
	displayPage("movieprops_home_content.html");
}

function doSmth(){
	alert("Hi");
}

function displayPage(url){
	try{
		ajaxObject = new XMLHttpRequest();
		ajaxObject.addEventListener("readystatechange", requestStateChanged, false);
		ajaxObject.open("GET", url, true);
		ajaxObject.send(null);	
	}catch(exception){
		alert("Can't display the requested page: '" + url + "' in div content \n" + "Error: " + exception);
		//alert("Couldn't display content page: " + url);
	}
}

function requestStateChanged(){
	if (ajaxObject.readyState == 4 && ajaxObject.status == 200){
		//document.getElementById("content").innerHTML = "";
		documemt.getElementById("content").innerHTML = ajaxObject.responseText;
	}
}


