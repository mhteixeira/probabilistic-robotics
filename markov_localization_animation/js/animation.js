let robot;
let img;

function setup() {

  createCanvas(400, 400);
  frameRate(10);
  robot = new Robot(0, 0);
  img = loadImage('../images/robot.png');
}

function draw() {
  background(200);
  robot.update(1, 1);
  console.log("oi")
  robot.show();
  image(img, 0, 0);
}
