window.addEventListener("load", main, false);
var ajaxObj;

function $(x) { return document.getElementById(x); }

function main(){

}

function openInfoModal(id){
	$("moreInfoModal").style.display = "block";

	try{
		ajaxObj = new XMLHttpRequest();
		ajaxObj.addEventListener("readystatechange", responseToReq, false);
		ajaxObj.open("GET","more_info/" + id + ".txt", true);
		ajaxObj.send(null);
	}catch (e){
		window.alert(" Failed to get info about the movie where prop was used! \n Reason:" + e);
	}	
}

function responseToReq(){
	if (ajaxObj.readyState == 4 && ajaxObj.status == 200){
		$("infoContent").innerHTML = ajaxObj.responseText;
	}
}

function closeInfoModal(){
	$("moreInfoModal").style.display = "none";
}
