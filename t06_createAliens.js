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

ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.color = 'cyan';

ball_1.vel.x = 2;

ball_1.bounciness = 1;

ball_1.friction = 0;

ball_1.drag = 0;

wallLH  = new Sprite(0, height/2, 8, height, 'k');

wallLH.color = 'black';

wallRH  = new Sprite(900, 450, 8, 1000, 'k');

wallRH.color = 'black';

wallTop = new Sprite(500, 0, 1000, 8, 'k');

wallTop.color = 'black'

wallBot = new Sprite(0, 900, 1800, 8, 'k');

wallBot.color = 'black'

for (i = 0; i < 100; i++) {

  alien = new Sprite();

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

}

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