 // if documnet is first loaded

 document.addEventListener("mousemove", xdd);

			function xdd(event){
				$('.coordinates').text("Os X : " + event.pageX + "Os Y : " + event.pageY );
				if(event.pageX > 600 && event.pageY < 300 ){
					document.getElementById('pp').style.opacity = "0.2";
				}
				else if(event.pageX > 600 && event.pageY > 300){
					document.getElementById('pp').style.opacity = "0.5";
				}
				else{
					document.getElementById('pp').style.opacity = "1";
				}
			};
			
	