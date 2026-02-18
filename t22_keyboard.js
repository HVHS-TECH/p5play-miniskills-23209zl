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
	Bob = new Sprite(100, 100, 100, 'd');
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

	if (mouse.presses()) {

		Bob.moveTo(height / 2, width / 2, n);

	}

	if (kb.pressing('left')) {

		// Set sprite's velocity to the left
		Bob.vel.x = -6;
	}

	else if (kb.pressing('right')) {
		Bob.vel.x = 6;
	};

	if (kb.released('left')) {
		Bob.vel.x = 0;

		// Set sprite's velocity to zero

	}

	text("Hello World", 50, 50)



	var name = "Mr Bob";

	text("Hello " + name, 50, 100);

}

/*******************************************************/
//  END OF APP
/*******************************************************/