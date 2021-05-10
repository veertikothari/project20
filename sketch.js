
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(900,400);
}


function draw(){
 background("white");
 text("x:"+mouseX,50,100);
 text("y:"+mouseY,50,120);
  // change the value of Red based on the mouse movement about the X axis
    if(mouseX<300){
    background(mouseX,0,0)}
    // change the value of Blue based on the mouse movement about the X axis
    if(mouseX>300 && mouseX<600){
      background(0,0,mouseX)
    }
  // change the value of Green based on the mouse movement about the X axis
    if(mouseX>600){
      background(0,mouseX,0)
    }

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}