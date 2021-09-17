//Round face
var mid = 200
var width = 75

var vector = new Point(0,width)
var center = new Point(mid, mid)

var topY = mid - vector.length
var bottomY = mid + vector.length
var midY = (bottomY - topY)/2

function makeFace(vector, center){
  // The amount of segment points we want to create:
  var amount = 30;
  var variation = .07;
  var overlap = .5

  // Create face path
  var face = new Path();
  face.strokeColor = 'black';

  for(var i = 0; i < amount; i++){
    face.add(center + (vector * (1+Math.random()* variation)))
    vector.angle += 360/amount
  }
  face.closed = true;
  face.smooth()

  //create overlap sketch path
  var face2 = new Path();
  face2.strokeColor = '#808080'
  for(var i = 0; i < amount * overlap; i++){
    face2.add(center + (vector * (1+Math.random()* variation)))
    vector.angle += 360/amount
  }
  face2.smooth()
}

function makeEyesAndBrows(mid, eyesY, width, eyeRadius){
  //--------EYES AND BROWS------------
  var eyesX = Math.floor((Math.random() * (width * .6) + 1) + width * .2)

  var leftEye = new Shape.Circle(new Point(mid - eyesX, eyesY), eyeRadius);
  leftEye.strokeColor = 'black';

  var rightEye = new Shape.Circle(new Point(mid + eyesX, eyesY), eyeRadius);
  rightEye.strokeColor = 'black';

  var browLength = (Math.random() * eyeRadius * 4) + eyeRadius

  var leftBrow = new Path()
  leftBrow.strokeColor = 'black';
  leftBrow.add(new Point(mid-eyesX - browLength, eyesY - 15))
  leftBrow.add(new Point(mid-eyesX, eyesY - 20))
  leftBrow.add(new Point(mid-eyesX + browLength, eyesY - 20))

  var rightBrow = new Path()
  rightBrow.strokeColor = 'black';
  rightBrow.add(new Point(mid + eyesX - browLength, eyesY - 20))
  rightBrow.add(new Point(mid + eyesX, eyesY - 20))
  rightBrow.add(new Point(mid + eyesX + browLength, eyesY - 15))
}

//-----------NOSE----------
function makeNose(mid, noseX, noseY){
  var nose = new Path()
  nose.strokeColor = 'black';
  nose.add(new Point(mid - noseX, noseY - 2))
  nose.add(new Point(mid, noseY))
  nose.add(new Point(mid + noseX, noseY - 2))
  nose.smooth()
}

//------------MOUTH---------
function makeMouth(mid, mouthWidth, mouthY){
  var mouth = new Path()
  mouth.strokeColor = 'black';
  mouth.add(new Point(mid - mouthWidth, mouthY))
  mouth.add(new Point(mid, mouthY))
  mouth.add(new Point(mid + mouthWidth, mouthY - 4))
  mouth.smooth();
}

function onKeyDown(event){
  project.activeLayer.removeChildren()
  var eyesY = topY + midY * (.5 + Math.random())
  var noseY = Math.floor(Math.random() * (bottomY - eyesY + 1) + eyesY)
  var noseX = (Math.random() * 10) + 2
  var mouthY = Math.floor(Math.random() * (bottomY - noseY + 1) + noseY)
  var mouthWidth = (Math.random() * 10) + 5
  makeFace(vector, center)
  makeEyesAndBrows(mid, eyesY, width, 3)
  makeNose(mid, noseX, noseY)
  makeMouth(mid, mouthWidth, mouthY)
}