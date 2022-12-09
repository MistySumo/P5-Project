// You can create custom variables here
let sunY = 45;
/* 
EVERYTHING in the SETUP() function only happens once when the page is first loaded.
This is also an example of a multiline comment. Single Line comments start with //
*/
function setup() {
  createCanvas(500, 350);
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);

  //setting the ba
  background('lightblue');
}

/*
All of the code inside of the DRAW() function runs multiple times per second (usually 60 times per second on most computers).
*/
function draw() {
  //putting the backround function here means there is a fresh screen drawn each time. This is needed if you want to make things look like they're moving across the screen
  background('lightblue');

  // The Sun
  fill('yellow')
  circle(0, sunY, 100, 100)

  // The clouds
  fill('Grey');
  ellipse(100, 25, 25, 25);
  ellipse(115, 24, 25, 25);
  ellipse(90, 36, 25, 25);
  ellipse(110, 42, 25, 25);
  // Different Clouds
  ellipse(150, 25, 25, 25);
  ellipse(165, 24, 25, 25);
  ellipse(140, 36, 25, 25);
  ellipse(155, 42, 25, 25);
  // Different Clouds
  ellipse(200, 25, 25, 25);
  ellipse(215, 24, 25, 25);
  ellipse(190, 36, 25, 25);
  ellipse(205, 42, 25, 25);
  // Different Clouds
  ellipse(250, 25, 25, 25);
  ellipse(265, 24, 25, 25);
  ellipse(240, 36, 25, 25);
  ellipse(255, 42, 25, 25);
  // Different Clouds
  ellipse(300, 25, 25, 25);
  ellipse(315, 24, 25, 25);
  ellipse(290, 36, 25, 25);
  ellipse(305, 42, 25, 25);
  // Different Clouds
  ellipse(350, 25, 25, 25);
  ellipse(365, 24, 25, 25);
  ellipse(340, 36, 25, 25);
  ellipse(355, 42, 25, 25);
  // Different Clouds
  ellipse(400, 25, 25, 25);
  ellipse(415, 24, 25, 25);
  ellipse(390, 36, 25, 25);
  ellipse(405, 42, 25, 25);
  // Different Clouds
  ellipse(450, 25, 25, 25);
  ellipse(465, 24, 25, 25);
  ellipse(440, 36, 25, 25);
  ellipse(455, 42, 25, 25);

  fill('DarkGreen') //grass color 
  rect(0, 250, 500, 100)


  // Key press function that moves the sun
  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      sunY = sunY - 3;
    } else if (keyCode === DOWN_ARROW) {
      sunY = sunY + 3;
    }
  }



} // End Draw 