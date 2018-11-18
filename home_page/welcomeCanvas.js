var image = new Image();
	image.src = "images/gladiator.jpg";

	function draw() 
	{
		var canvas = document.getElementById("welcomeCanvas");
		var context = canvas.getContext("2d");
		context.drawImage(image, 0, 0, 200, 250); 
	} // end function draw
	
	window.addEventListener( "load", draw, false );
