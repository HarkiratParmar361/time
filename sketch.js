var hr,mn,sc

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  hr=hour();
mn=minute();
sc=second();
map()
line()
angleMode(DEGREESS);
}
function map(){
scAngle=map(sc,o,60,0,360);
}

function line(){
stroke(225,0,0);
strokeWeight(7);
line(0,0,100,0);
}
