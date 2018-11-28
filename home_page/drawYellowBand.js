			window.addEventListener("load", main, false);

			function main(){
				var context = document.getElementById("drawMottoBackground").getContext("2d");
				var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) ;
				var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) ;
				
				var gradient = context.createLinearGradient(0,0,0,125);
				gradient.addColorStop(0, "yellow");
				gradient.addColorStop(0.3, "orange");
				gradient.addColorStop(0.7, "orange");
				gradient.addColorStop(1, "yellow");

				context.fillStyle = gradient;
				context.fillRect(0,0, width, height);

			}
	
