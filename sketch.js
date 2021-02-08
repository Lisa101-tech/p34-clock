var hr 
var mn 
var sc 
var scAngle,hrAngle,mnAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  scAngle=map(sc,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  mnAngle=map(mn,0,60,0,360)
 
  text(mouseX+","+mouseY,mouseX,mouseY)

fill("white")
  textSize(40)
  text("12",185,114)
  text("6",190,332)
  text("3",290,200)
  text("9",80,200)

 
  translate(200,200)
  rotate(-90)

  hr = hour();
   mn = minute();
   sc = second();
 
  //creates second hand 
 push()
 rotate(scAngle)//rotates hand based on angle calculated
 stroke(255,0,0)
 strokeWeight(7)
 line(0,0,100,0)
// noFill();
pop()
//creates minute hand
push()
 rotate(mnAngle)//rotates hand based on angle calculated
 stroke(48, 221, 0)
 strokeWeight(7)
 line(0,0,75,0,)
// noFill();
pop()

//creates hour hand
push()
 rotate(hrAngle)//rotates hand based on angle calculated
 stroke(0, 67, 255)
 strokeWeight(7)
 line(0,0,50,0,)
// noFill();
pop()
stroke(255,0,255,)
point(400,200)
 //drawing Arcs
strokeWeight(10)
 noFill()
 //this arc is for seconds
 stroke(255,0,0)
 arc(0,0,300,300,0,scAngle)
  //this arc is for hours
 stroke(0, 67, 255)
 arc(0,0,260,260,0,hrAngle)
  //this arc is for minutes
 stroke(48, 221, 0)
 arc(0,0,280,280,0,mnAngle)
  //drawSprites();
} 