
DJANGO_STATIC_URL = '{{ STATIC_URL }}';
const cvs = document.getElementById("snake"); 
const ctx = cvs.getContext("2d");
// create a 2 dimensional rendering 2d object 

const box = 32; // single box for one part of snake dimension

const ground = new Image();




////////////////////////////
/////////////////LOAD AUDIO /////
const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const left = new Audio();
const right = new Audio();
const down = new Audio();

dead.src = "sounds/dead.mp3"
eat.src = "sounds/eat.mp3"
up.src = "sounds/up.mp3"
down.src = "sounds/down.mp3"
left.src = "sounds/left.mp3"
right.src = "sounds/right.mp3"
//////////////////////////////

const foodImg = new Image();

foodImg.src = "images/food.png";
// define a structure
let snake = [];    // local variable  snake is object of 2  coord
snake[0] = {
	x : 9 * box, // at beginiini it is goona start at 9 th box at width
	y : 10 * box  // and 10 th box at height
}
// sth like a structure
// create a food
let food = {   
	x : Math.floor(Math.random()*17+1) * box, // random() in js from 0 to 1
	y : Math.floor(Math.random()*15+3) * box, // 17 width 15 height
	//+ 3 because of height handler is at the top of the image 
}
// create the score

let score = 0;
let direc; // var for direction
// control the snake

document.addEventListener("keydown" , direction);
// this event is called when the key is pressed
// first argument is kind of event and the second is function
// into which event must be  assigned

function direction(event){  // event as a parameter it can be named different
	if((event.keyCode == 37) && (direc != "RIGHT")){ 
		left.play();
		direc = "LEFT";
	}else if((event.keyCode == 38) && (direc != "DOWN")){
		up.play();
		direc = "UP";
	}else if((event.keyCode == 39) && (direc != "LEFT")){
		right.play();
		direc = "RIGHT";
	}else if((event.keyCode == 40) && (direc != "UP")){
		down.play();
		direc = "DOWN";
	}
}

// drawing everything
function draw(){

	ctx.drawImage(ground , 0 , 0);  // draw Image with coordinates

	for(let i = 0; i < snake.length ; i++){
		ctx.fillStyle = (i == 0)? "green" : "white"; // defines color for rectangle
		// simple condition
		ctx.fillRect(snake[i].x , snake[i].y , box , box);
		// draw rectangle (x coord , y coord , width , height)
		ctx.strokeStyle = "#FC0808";
		ctx.strokeRect(snake[i].x , snake[i].y , box , box);
		// draws rectangle edge (coordinates and width and height)
	}
	ctx.drawImage(foodImg , food.x , food.y  );
	// 0 positions
	let snakeX = snake[0].x; // star positions
	let snakeY = snake[0].y;
	/////////////////
	//// if the snake eats the food
	/////which direction
	if(direc == "LEFT") snakeX -= box;
	if(direc == "RIGHT") snakeX += box;
	if(direc == "UP") snakeY -= box;
	if(direc == "DOWN")	snakeY += box;
	////////////////////////////
	//// easy just compare coord for food and snake (must be the same)
	if(snakeX == food.x && snakeY == food.y){
		eat.play();
		score++;
		food = {
			x : Math.floor(Math.random()*17 + 1) * box,
			y : Math.floor(Math.random()*15 + 3) * box
		}
		// if that happens i do not remove the last element 
		// that makes it longer
	}else{
		snake.pop();
	}
	////////////////////////
	let newHead = {
		x : snakeX,
		y : snakeY
	}
	///////////////CHECK SNAKE COLLISION WITH TAIL //////////////////////
	function collision(head , array){
		for (let i = 0 ; i < array.length ; i++){
			if(head.x == array[i].x && head.y == array[i].y){
				return true;
			}
		}
		return false;

	}
	///////////////////////////////////////////////////////////////////////
	// game over rules
	if (snakeX < 1*box || snakeX > (15 +2) * box || snakeY < 3*box || snakeY > (15+2)*box 
		|| collision(newHead , snake)){ 
		dead.play();
		document.getElementById('over').src = "images/game-over.png";
		clearInterval(game);
		// stop time , stop executin function made by setInterval(function , time)
	}
	///////////////////////////////////
	
	////// add a new head
	
	snake.unshift(newHead);
	// add new item at the beginnig of an array
	/////////////////////////
	ctx.fillStyle = "white";
	ctx.font = "45px Changa one";
	ctx.fillText(score , 2*box , 1.6 * box );
	// draw text what text , x coord , y coord

}

let game = setInterval(draw , 100);