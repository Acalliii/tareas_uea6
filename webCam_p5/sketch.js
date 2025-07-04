let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
 capture= createCapture(VIDEO,{flipped: true});
 capture.size(2000,2000);
 capture.hide(400,400);

}

function draw() {
  background(220);
  image(capture,550,150,250,400);
}
