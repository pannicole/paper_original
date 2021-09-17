//OVAL FACE
//Declare center of the face and the general radius
var mid = 200
var width = -75

var vector = new Point(0,width)
var center = new Point(mid, mid)

//--------------- FACE ---------------------------
// The amount of segment points we want to create:
var amount = 25;
var random = 25;

// Create a new path and style it:
var face = new Path();
face.strokeColor = 'black';

//Define the width and height of the face (will randomize later)
var top = 1 + Math.random()
var bottom = 1 + Math.random()

//List of points with general outline of the face
var left = []
var right = []

var step = (amount / 4)
var delta = (bottom - 1) / step
var delta2 = (top - 1) / step

for (var i = 0; i < amount; i++) {
  //face shape
  if(vector.angle >= -90 && vector.angle < 0){
    var leftPoint = center + vector * (top + delta2) * (1 + Math.random()/random)
    var rightPoint = center + vector * (top + delta2) * (1+ Math.random()/random)
    left.push(leftPoint);
    right.push(new Point(mid * 2 - rightPoint.x, rightPoint.y))
    delta2 -= (top - 1) / step
  }
  if(vector.angle >= 0 && vector.angle < 90){
    var leftPoint = center + vector * (1 + delta) * (1 + Math.random()/random)
    left.push(leftPoint);
    var rightPoint = center + vector * (1 + delta) * (1 + Math.random()/random)
    right.push(new Point(mid * 2 - rightPoint.x, rightPoint.y));
    delta += (bottom - 1) / step
  }
  vector.angle += 360/(amount)
}

for(var j = right.length - 1; j >= 0; j--){
  left.push(right[j])
}

for(var k = 0; k < left.length; k++){
  face.add(left[k])
}

face.smooth();
face.closed = true;
// face.fullySelected = true
