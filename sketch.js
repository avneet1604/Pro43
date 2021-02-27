var hr;
var min;
var sec;
var hrAng, minAng, secAng;


function setup() {
  createCanvas(800,400);
  //to convert angles in degrees
  angleMode(DEGREES);

}

function draw() {
  background(0);  

  //translate and rotate
  translate(200,200);
  rotate(-90);

//calculating time with predefined function from p5.js
 hr = hour();
 min = minute();
 sec = second();

 //to create iterative rotation
 secAng = map(sec, 0,60,0,360);
 minAng = map(min, 0,60,0,360);
 hrAng = map(hr% 12,0,12,0,360);

 //draw hands for sec
 push();
 rotate(secAng);
 stroke("blue");
 strokeWeight(5);
 line(0,0,100,0);
 pop();

//draw hands for min
 push();
 rotate(minAng);
 stroke("yellow");
 strokeWeight(5);
 line(0,0,75,0);
 pop();

 //draw hands for hr
 push();
 rotate(hrAng);
 stroke("red");
 strokeWeight(5);
 line(0,0,50,0);
 pop();

//stroke()

}