let r = 0;

function setup() {
  createCanvas(800, 1200, WEBGL);

  
  
 
}

function preload() {            // 사진 불러오기 함수
  img = loadImage('ppi.png');
}

function draw() {
  r = mouseY;
  

  background(0);
  
  image(img,-400,-600,);
  
  noFill();
  stroke(255);
  rotateY(frameCount * 0.01);
  sphere(r/5+20);

  stroke(255);
  cone(height/2- r/2, 20);

  stroke(255);
  ellipsoid(r/3, 150, 100);
}
