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
}
	

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('lightblue'); 

Bob.moveTowards(mouseX, mouseY, 1);

if (mouse.presses()) {

Bob.moveTo(xPos, yPos, n);

}
}

/*******************************************************/
//  END OF APP
/*******************************************************/