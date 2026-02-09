/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(900, 900);
Bob= new Sprite(100, 100, 100, 'd');
Bob.color = 'yellow';
Bob.rotationSpeed = 2;
Bob.vel.x = 2;
world.gravity.y = 10;
Bob.rotationSpeed = -10;
Bob.bounciness = 1.5;
Bob.friction = 0.5;
Bob.drag = 0.5;

platform_1 = new Sprite(100, 350, 200, 10, 'k');
platform_1.color = 'red';
platform_1.rotation = 1;
}
	

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('lightblue'); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/