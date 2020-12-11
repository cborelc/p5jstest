let img;


function preload() {
  img = loadImage('assets/img1.jpg');
  let writer = createWriter('newFile.txt');
  //writer.write(['Hello world!']);
  //writer.close();
}
function setup() {
  createCanvas(832, 416);
  image(img, 0, 0);
}

function draw() {
  stroke('red')
  if (mouseIsPressed === true) {
    ellipse(mouseX, mouseY, 10, 10);
  }
}

