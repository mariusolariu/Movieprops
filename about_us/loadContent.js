var contactUsB;
var ajaxObj;

function $(x){ return document.getElementById(x);}
window.addEventListener("load", main, false);

function main(){
	contactUsB = $("contactUsB");
	contactUsB.addEventListener("click", loadContactForm, false); 
}

function loadContactForm(){
	try{
		ajaxObj = new XMLHttpRequest();
		ajaxObj.addEventListener("readystatechange", stateChange, false);
		ajaxObj.open("GET","test.html", true);		
		ajaxObj.send(null);
	}catch(exception){
		alert("Request to load contact form failed \n Reason: " + exception);
	}
}

function stateChange(){
	if (ajaxObj.readyState == 4 && ajaxObj.status == 200){
		$("contentDiv").innerHTML = "";	
		$("contentDiv").innerHTML = ajaxObj.responseText; 	

	}
}
