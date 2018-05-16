
var p1;
var p2;
var p1V , p2V;  // velocity  pixels per second
var ball , ballV;
var start = false;
var pause = false;

document.addEventListener("keydown" , startgame);

function setup(){ // runs only once
	createCanvas(1000 , 600);
	//paddle1 = createVector(0,0); // paddles will be Vectors (keeps coord)
	//paddle2 = createVector(980,0);
	p1 =  height / 2 - 75; // paddle is just height parameter
	p2 = height / 2 - 75; // height and width are defined into library
	ball = createVector(width /2 , height / 2);
//	ballV = createVector(Math.random(1,3) , Math.random(1,3));
	ballV = createVector(2 , Math.random(3));
	//alert(ballV.y);
	ballV.y *=3;
	// velocity  pixels per second
	p1V = p2V = 0;
	p1S = p2S = 0;  // scores
	
	

}
function draw() {  // 60 times per second 
	//rect(50,50,20,20);
	background(51); // brightnesss level
    
	
	rect(0 ,p1 , 20 , 150 ); //this functions read w and h as arguments of createCanvas
	rect(width - 20 , p2 , 20 , 150 );

	//constrain - constrain a value betwen min and max
	p1 = constrain(p1 , 0 , height - 150) ;// on canvas do not limit this values
	p2 = constrain(p2 , 0 , height - 150) ;
	                            // min height , max height for both the same

	// draw a ball
	ellipse(ball.x , ball.y  ,20);  // radius is 10
	// the ball is gonna be a vector

	if(start == true && (pause == false)){
	handlePaddles(); 
	handleBall(); // because it is called 60 times per second
	}  
}

function handleBall(){

	ball.x += ballV.x;
	ball.y += ballV.y;


	if(ball.y > height - 10  ||  ball.y < 0 + 10) { // minus ball radius
		// top and bottom canvas collision

		ballV.y *= -1 ; // opposite  directions

	}
	// paddle collision
	if(ball.x <= 30 && ball.x >= 20){  // left + ball radius

		if(ball.x <= 5){
			p2S++;
			reset();
		}

		if(ball.y > p1 && (ball.y < p1 + 150)){ // in range of a paddle

			ballV.x *= -1;
			console.log("p1");
		}
	}else if(ball.x >= width - 30  ){ // right

		if(ball.x >= width - 8){
			p1S ++;
			reset();
		}


		if(ball.y > p2 && (ball.y < p2 + 150)){ // in range of a paddle

			ballV.x *= -1;
			console.log("p2");
	}
}

	
}

function reset(){
	ball = createVector(width /2 , height / 2);
}

function handlePaddles() {   // like a KeyListener
	
	// player one controls
	if(keyIsDown(87)){

		p1V -= 5;

	}else if(keyIsDown(83)){ // js key codes

		p1V += 5;
	}


	// player two controls 
	if(keyIsDown(38)){

		p2V -= 5;
	}else if(keyIsDown(40)){

		p2V += 5;
	}

	// change the positions cause it is currently a constraint
	p1V *= 0.6; // make it slower
	p2V *= 0.6;

	p1 += p1V;
	p2 += p2V;
}
function startgame(event){
	
	if(event.keyCode == 32 && start != true){
		start = true;
		document.getElementById('xd').innerHTML = "press space to pause";
	}
	else if(event.keyCode == 32 && start == true && pause == false){
		pause = true;
	}
	else if(event.keyCode == 32 && start == true && pause == true){
		pause = false;
	}
}
// createVector just make a vector x , y , z
// magnitude - rozmiar
// ball Velocity is a vector cause ball is moving 2D 
// ellipse creates an elliptic shape on a canvas