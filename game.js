let meatImage;
let cookedMeatImage;
let cookingProgress = 0;
let startTime;
let isBurned = false;

function preload() {
  meatImage = loadImage('./raw_meat.png');
  cookedMeatImage = loadImage('./cooked_meat.png');
}

function setup() {
  createCanvas(800, 600);
  startTime = millis();
}

function draw() {
  background(220);
  
  if (cookingProgress === 0) {
    image(meatImage, 200, 200);
  } else {
    image(cookedMeatImage, 200, 200);
  }

  let elapsedTime = millis() - startTime;
  if (!isBurned && elapsedTime >= 10000) {
    textSize(32);
    fill(255, 0, 0);
    text('焦げました!', 300, 50);
    isBurned = true;
  }

  // タイマーを表示
  textSize(24);
  fill(0);
  text('経過時間: ' + (elapsedTime / 1000).toFixed(1) + '秒', 20, 40);
}

function mousePressed() {
  if (mouseX > 200 && mouseX < 200 + meatImage.width && mouseY > 200 && mouseY < 200 + meatImage.height) {
    let elapsedTime = millis() - startTime;
    if (elapsedTime >= 9000 && elapsedTime <= 10000) {
      cookingProgress = 1;
    } else if (elapsedTime > 10000) {
      return;
    }
  }
}

