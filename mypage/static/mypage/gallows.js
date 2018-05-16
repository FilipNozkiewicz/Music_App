
var pass = "Bez pracy nie  ma kolaczy";
var pass1 = "Co cie nie zabije to cie wzmocni"
var pass2 = "Lubie placki";
var pass3 = "xdddd";
var password1 = "No man is an island";
var password = "xx";
var xd = Math.floor(Math.random()*5);

switch(xd){
case 0: 
	 password = pass;
	 break;
case 1: 
	 password = pass1;
	 break;
case 2: password = pass2;
	 break;
case 3: password = pass3
	break;
case 4: password = password1;
	break;
}


password = password.toUpperCase();
var code = "-- --- -- -- ------";
var loose_sound = new Audio('sounds/windows.mp3');
var win_sound = new Audio('sounds/win.mp3');
var total_win_sound = new Audio('score.mp3');
var total_loose_sound = new Audio('score.mp3');
code = "";
var pass_length = password.length;

for(i = 0 ; i < password.length ; i++){


	if(password[i] != ' '){
		code += "-";
	}
	else{
		code += " ";
	}
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
function write_password(){


	document.getElementById('bo').innerHTML = password;
	
}
function write_code(){
	document.getElementById('bo').innerHTML =  code;
}

var k = 0;
var m = "-";

function check(letter){
	if(password.includes(letter)){
	for(i = 0 ; i < password.length ; i++){

			if(password[i] == letter){
			code = setCharAt(code , i , letter);
			}
		}
		
		win_sound.play();
		document.getElementById(letter).style.backgroundColor = "green";
		document.getElementById('bo').innerHTML = code;
		if(code.includes(m) == false ){
			win_sound.play();
			document.getElementById('bo').style.color = "green";
			document.getElementById('bo').innerHTML = "YOU HAVE WON";
		}
	}
	else{
		k++;
		loose_sound.play();
		document.getElementById(letter).style.backgroundColor = "red";
		if(k == 9){
			document.getElementById('bo').style.color = "red";
		document.getElementById('bo').innerHTML = "YOU HAVE LOST";
		}
		if(k < 10)
		document.getElementById('photo').style.backgroundImage = "url('icons/s" + k +".jpg')";
		}
	}
	function initClock(){

 	 		var date = new Date();
 	 		var hour = date.getHours() % 12; 
 	 		var min = date.getMinutes() ;
 	 		var sec = date.getSeconds() ;

 	 		var hourdeg = (hour * 30) + (0.5 * min); // 360 / 12
 	 		var mindeg = (min * 6) + (0.1 * sec) ;
 	 		var secdeg = (sec * 6) ; // because of deggress 360 deg / 60 = 6

 	 		document.getElementById('hh').style.transform = "rotate(" + hourdeg + "deg)"; // add rotation by function of style
 	 		document.getElementById('mh').style.transform = "rotate(" + mindeg + "deg)";
 	 		document.getElementById('sh').style.transform = "rotate(" + secdeg + "deg)";
 	 		
 	 		setTimeout("initClock()" , 1000); // call method after each 1s
 	 	};

