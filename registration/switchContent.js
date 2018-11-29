window.addEventListener("load", main, false);

function $(x) { return document.getElementById(x); }

var loginDiv;
var newAccFormDiv;

function main(){
	loginDiv = $("loginDiv");
	newAccFormDiv = $("newAccFormDiv");	

	$("newAccA").addEventListener("click", changeContent, false);
	$("goBackButton").addEventListener("click", goBackMainPage, false);
    $("submitB").addEventListener("click", sayThanks, false);
}

function changeContent(){
	loginDiv.style.display = "none";
	newAccFormDiv.style.display = "block";
}

function goBackMainPage(){
	loginDiv.style.display = "block";
	newAccFormDiv.style.display = "none";
}

function sayThanks(){
    $("thanksHeader").style.display = "block";
    $("thanksHeader").innerHTML = "Thank you for submiting information!";
}