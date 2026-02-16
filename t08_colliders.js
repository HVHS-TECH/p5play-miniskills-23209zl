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

	ball_1 = new Sprite(width / 2, height / 2, 50, 'd');

	ball_1.color = 'cyan';

	ball_1.vel.x = 2;

	ball_1.bounciness = 1;

	ball_1.friction = 0;

	ball_1.drag = 0;

	wallLH = new Sprite(0, height / 2, 8, height, 'k');

	wallLH.color = 'black';

	wallRH = new Sprite(900, 450, 8, 1000, 'k');

	wallRH.color = 'black';

	wallTop = new Sprite(500, 0, 1000, 8, 'k');

	wallTop.color = 'black';

	wallBot = new Sprite(0, 900, 1800, 8, 'k');

	wallBot.color = 'black';

	randNum = random(6, 8);

	// Create a group for the aliens

	alienGroup = new Group();

	for (i = 0; i < 100; i++) {

		alien = new Sprite(width / 3, height / 3, 40, 40);

		alien.vel.x = 3;

		alien.vel.y = 4;

		alien.bounciness = 1;

		alien.friction = 0;

		alienGroup.add(alien);

		// Register a callback:

		// if any alien in alienGroup collides with ball_1, call func2Call
	}

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('lightblue');

	alienGroup.collides(ball_1, func2Call);

	function func2Call(alien, _ball_1) {

		// Delete the alien which was hit

		alien.remove();

	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/