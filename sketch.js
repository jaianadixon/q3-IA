var x = 10;
var y = 300;
var speed = 5;

function setup(){
  createCanvas(600,400);
}

function draw(){
  background(250,30,100);
  display();
  move();
}

function display(){
  fill(0);
  rect(x,y,30,30); 
  
  line(100,300,400,200);
  line(100,300,400,20);
  
}

function move(){
    x + speed;
   
  if(x>600 || x<0){
    speed = -speed;
  }
}
 