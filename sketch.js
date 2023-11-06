let elementList = [];
let size;
// 2nd dimension of perlin noise
let yoff = 0.0;
let yh = 900;
let xh = 1300;
let smokeVisible = true

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = windowWidth < windowHeight ? windowWidth : windowHeight;
  createElements();
}

function draw() {
  background(225);
  stroke(0);
  noFill();
  rect(0, 0, size, size);
  noStroke();
  // draw wave;
  wave();
  // draw smoke;
  smokeHorizontal();
  smokeHorizontal2();
  smokeHorizontal3();
  smokeHorizontal4();
  smokeHorizontal5();
  smokeVertical();
  smokeVertical2();
  smokeVertical3();






  // draw elements
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].display();
  }
  //change xh and yh every frame to make it an animation 
  yh -= 1;
  xh -= 1;
}

class smokeStatus {
  constructor(x, y, noiseLevel, noiseScale, width, height) {
    this.x = x;
    this.y = y;
    this.noiseLevel = noiseLevel;
    this.noiseScale = noiseScale
    this.width = width;
    this.height = height;

  }

}
function smokeHorizontal() {
  let mySmoke = new smokeStatus(0, 0, 500, 5, 10, 30);
  for (let y = mySmoke.y; y < 200; y += 100) {
    for (let x = mySmoke.x; x < 1550; x += 10) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(255, c, c);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width * 10, mySmoke.height)
    }
  }
}
function smokeHorizontal2() {
  let mySmoke = new smokeStatus(0, 300, 500, 5, 10, 30);
  for (let y = mySmoke.y; y < 500; y += 100) {
    for (let x = mySmoke.x; x < 1550; x += 10) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(255, c, c);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width * 10, mySmoke.height)
    }
  }
}
function smokeHorizontal3() {
  let mySmoke = new smokeStatus(0, 530, 500, 5, 10, 30);
  for (let y = mySmoke.y; y < 900; y += 100) {
    for (let x = mySmoke.x; x < 1550; x += 10) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(255, c, c);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width * 10, mySmoke.height)
    }
  }
}
function smokeHorizontal4() {
  let mySmoke = new smokeStatus(0, 950, 500, 5, 10, 30);
  for (let y = mySmoke.y; y < 1150; y += 100) {
    for (let x = mySmoke.x; x < 500; x += 10) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(255, c, c);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width * 10, mySmoke.height)
    }
  }
}
function smokeHorizontal5() {
  let mySmoke = new smokeStatus(0, 1150, 500, 5, 10, 30);
  for (let y = mySmoke.y; y < 1500; y += 100) {
    for (let x = mySmoke.x; x < 1500; x += 10) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(255, c, c);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width * 10, mySmoke.height)
    }
  }
}
function smokeVertical() {
  let mySmoke = new smokeStatus(0, 0, 500, 5, 50, 10);
  for (let y = mySmoke.y; y < 1500; y += 10) {
    for (let x = mySmoke.x; x < 400; x += 100) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(c, c, 0);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width, mySmoke.height * 10)
    }
  }
}
function smokeVertical2() {
  let mySmoke = new smokeStatus(800, 0, 500, 5, 50, 10);
  for (let y = mySmoke.y; y < 1500; y += 10) {
    for (let x = mySmoke.x; x < 950; x += 100) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(c, c, 0);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width, mySmoke.height * 10)
    }
  }
}
function smokeVertical3() {
  let mySmoke = new smokeStatus(1250, 0, 500, 5, 50, 10);
  for (let y = mySmoke.y; y < 1500; y += 10) {
    for (let x = mySmoke.x; x < 1500; x += 100) {
      // Scale input coordinates.
      let nx = mySmoke.noiseScale * x;
      let ny = mySmoke.noiseScale * y;
      // Compute noise value.
      let nt = mySmoke.noiseScale * frameCount;
      // Compute noise value.
      let c = mySmoke.noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
      stroke(c, c, 0);
      let rectX = x;
      let rectleY = y;
      noFill();
      rect(rectX, rectleY, mySmoke.width, mySmoke.height * 10)
    }
  }
}
function wave() {
  background(51);
  //wave color
  fill(0, 230, 255);
  //draw a polygon out of the wave points
  beginShape();
  let xoff = 0;
  // Iterate over horizontal pixels
  for (let x = 0; x <= windowWidth; x += 10) {
    // change wave status
    // Calculate a y value according to noise, map to a value between xh and yh
    let y = map(noise(xoff, yoff), 0, 3, xh, yh);
    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);
}

class element {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}

function createElements() {



  // red rect column1
  let column1_x = [18 / 800 * size, 18 / 800 * size, 16 / 800 * size, 18 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 18 / 800 * size];
  let column1_y = [277 / 800 * size, 122 / 800 * size, 343 / 800 * size, 213 / 800 * size, 705 / 800 * size, 618 / 800 * size, 545 / 800 * size, 20 / 800 * size, 65 / 800 * size, 65 / 800 * size, 170 / 800 * size];
  let column1_w = [16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 22 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC"];
  for (let n = 0; n < column1_y.length; n++) {
    elementList.push(new element(column1_x[n], column1_y[n], column1_w[n], column1_h[n], column1_col[n]))
  }
  //blue,row 2, column 10
  elementList.push(new element(510 / 800 * size, 140 / 800 * size, 100 / 800 * size, 138 / 800 * size, "#4468BC"));
  //grey,row 2, column 1
  elementList.push(new element(17 / 800 * size, 40 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#D5D5D0"));
  //grey,row 3, column 1
  elementList.push(new element(17 / 800 * size, 260 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#D5D5D0"));
  //grey,row 2, column 1
  elementList.push(new element(45 / 800 * size, 520 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 3, column 1
  elementList.push(new element(45 / 800 * size, 300 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));



  // red rect column2
  let column2 = [0, 64 / 800 * size, 400 / 800 * size, 500 / 800 * size, 580 / 800 * size, 623 / 800 * size, 755 / 800 * size]
  for (let c = 0; c < column2.length; c++) {
    elementList.push(new element(45 / 800 * size, column2[c], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
  elementList.push(new element(45 / 800 * size, 548 / 800 * size, 16 / 800 * size, 12 / 800 * size, "#A7392C"));
  elementList.push(new element(45 / 800 * size, 548 / 800 * size, 16 / 800 * size, 12 / 800 * size, "#A7392C"));
  //blue,row 3, column 2
  elementList.push(new element(45 / 800 * size, 277 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 4, column 2
  elementList.push(new element(45 / 800 * size, 345 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //blue,row 5, column 2
  elementList.push(new element(45 / 800 * size, 447 / 800 * size, 17 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 9, column 2
  elementList.push(new element(45 / 800 * size, 680 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //grey,row 3, column 2
  elementList.push(new element(45 / 800 * size, 260 / 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 2, column 2
  elementList.push(new element(45 / 800 * size, 100 / 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 2
  elementList.push(new element(45 / 800 * size, 650 / 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));



  // red rect column3
  let column3 = [212 / 800 * size, 580 / 800 * size, 644 / 800 * size];
  for (let d = 0; d < column3.length; d++) {
    elementList.push(new element(92 / 800 * size, column3[d], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
  elementList.push(new element(92 / 800 * size, 342 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 2, column 3
  elementList.push(new element(92 / 800 * size, 122 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#4468BC"));
  elementList.push(new element(60 / 800 * size, 142 / 800 * size, 50 / 800 * size, 50 / 800 * size, "#4468BC"));
  //blue,row 2, column 3
  elementList.push(new element(92 / 800 * size, 260 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 3, column 3
  elementList.push(new element(92 / 800 * size, 295 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 4, column 3
  elementList.push(new element(92 / 800 * size, 400 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 5, column 3
  elementList.push(new element(92 / 800 * size, 447 / 800 * size, 10 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 6, column 3
  elementList.push(new element(92 / 800 * size, 500 / 800 * size, 10 / 800 * size, 20 / 800 * size, "#4468BC"));
  elementList.push(new element(62 / 800 * size, 539 / 800 * size, 31 / 800 * size, 40 / 800 * size, "#4468BC"));
  //blue,row 7, column 3
  elementList.push(new element(92 / 800 * size, 635 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  elementList.push(new element(92 / 800 * size, 680 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 3
  elementList.push(new element(92 / 800 * size, 700 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 9, column 3
  elementList.push(new element(92 / 800 * size, 755 / 800 * size, 10 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 3
  elementList.push(new element(92 / 800 * size, 680 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //grey,row 5, column 3
  elementList.push(new element(92 / 800 * size, 200 / 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(92 / 800 * size, 370 / 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(123 / 800 * size, 70 / 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));



  // red rect column4
  let column4_x = [122 / 800 * size, 92 / 800 * size, 122 / 800 * size, 122 / 800 * size, 160 / 800 * size, 92 / 800 * size, 108 / 800 * size, 124 / 800 * size, 108 / 800 * size, 108 / 800 * size, 108 / 800 * size, 124 / 800 * size, 124 / 800 * size, 122 / 800 * size,];
  let column4_y = [33 / 800 * size, 48 / 800 * size, 33 / 800 * size, 90 / 800 * size, 122 / 800 * size, 210 / 800 * size, 278 / 800 * size, 278 / 800 * size, 395 / 800 * size, 580 / 800 * size, 630 / 800 * size, 680 / 800 * size, 755 / 800 * size, 18 / 800 * size,];
  let column4_w = [32 / 800 * size, 86 / 800 * size, 32 / 800 * size, 32 / 800 * size, 16 / 800 * size, 86 / 800 * size, 16 / 800 * size, 37 / 800 * size, 70 / 800 * size, 70 / 800 * size, 70 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size];
  let column4_h = [35 / 800 * size, 22 / 800 * size, 35 / 800 * size, 33 / 800 * size, 20 / 800 * size, 50 / 800 * size, 20 / 800 * size, 76 / 800 * size, 51 / 800 * size, 16 / 800 * size, 51 / 800 * size, 16 / 800 * size, , 16 / 800 * size];
  let column4_col = ["#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C", "#4468BC"];
  for (let o = 0; o < column4_y.length; o++) {
    elementList.push(new element(column4_x[o], column4_y[o], column4_w[o], column4_h[o], column4_col[o]))
  }



  // red rect column5
  let column5_x = [209 / 800 * size, 305 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 226 / 800 * size, 305 / 800 * size, 226 / 800 * size, 238 / 800 * size, 265 / 800 * size, 321 / 800 * size, 376 / 800 * size, 192 / 800 * size, 342 / 800 * size, 342 / 800 * size, 398 / 800 * size, 356 / 800 * size];
  let column5_y = [31 / 800 * size, 277 / 800 * size, 277 / 800 * size, 363 / 800 * size, 418 / 800 * size, 500 / 800 * size, 500 / 800 * size, 343 / 800 * size, 343 / 800 * size, 363 / 800 * size, 397 / 800 * size, 447 / 800 * size, 447 / 800 * size, 447 / 800 * size, 577 / 800 * size, 577 / 800 * size, 680 / 800 * size, 680 / 800 * size, 754 / 800 * size];
  let column5_w = [70 / 800 * size, 20 / 800 * size, 55 / 800 * size, 55 / 800 * size, 55 / 800 * size, , 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 55 / 800 * size, 32 / 800 * size, 20 / 800 * size, 20 / 800 * size, 237 / 800 * size, 16 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 53 / 800 * size];
  let column5_h = [56 / 800 * size, 20 / 800 * size, 70 / 800 * size, 16 / 800 * size, 30 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 25 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 40 / 800 * size];
  let column5_col = ["#A7392C", "#A7392C", "#E8D135", "#E8D135", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#A7392C"];
  for (let p = 0; p < column5_y.length; p++) {
    elementList.push(new element(column5_x[p], column5_y[p], column5_w[p], column5_h[p], column5_col[p]))
  }
  //grey,row 5, column 5
  elementList.push(new element(376 / 800 * size, 122 / 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(300 / 800 * size, 15 / 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175 / 800 * size, 15 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175 / 800 * size, 230 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175 / 800 * size, 320 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175 / 800 * size, 400 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175 / 800 * size, 500 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(175 / 800 * size, 600 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(260 / 800 * size, 680 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(260 / 800 * size, 500 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(260 / 800 * size, 400 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));




  // red rect column6
  let column6Alt_y = [0, 170 / 800 * size, 278 / 800 * size];
  let column6Alt_h = [20 / 800 * size, 25 / 800 * size, 20 / 800 * size];
  for (let l = 0; l < column6Alt_y.length; l++) {
    elementList.push(new element(429 / 800 * size, column6Alt_y[l], 16 / 800 * size, column6Alt_h[l], "#A7392C"))
  }
  let column6 = [86 / 800 * size, 389 / 800 * size, 486 / 800 * size, 516 / 800 * size, 666 / 800 * size, 737 / 800 * size];
  for (let e = 0; e < column6.length; e++) {
    elementList.push(new element(429 / 800 * size, column6[e], 16 / 800 * size, 14 / 800 * size, "#A7392C"))
  }
  //blue,row 1, column 6
  elementList.push(new element(180 / 800 * size, 65 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(180 / 800 * size, 100 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 6
  elementList.push(new element(180 / 800 * size, 150 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 6
  elementList.push(new element(180 / 800 * size, 275 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 6
  elementList.push(new element(180 / 800 * size, 275 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 4, column 6
  elementList.push(new element(180 / 800 * size, 350 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 5, column 6
  elementList.push(new element(180 / 800 * size, 450 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 6
  elementList.push(new element(180 / 800 * size, 580 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 6
  elementList.push(new element(180 / 800 * size, 685 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 6
  elementList.push(new element(180 / 800 * size, 755 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));


  // red rect row7
  let row7 = [86 / 800 * size, 389 / 800 * size, 486 / 800 * size, 516 / 800 * size, 666 / 800 * size, 737 / 800 * size];
  for (let f = 0; f < row7.length; f++) {
    elementList.push(new element(462 / 800 * size, row7[f], 16 / 800 * size, 14 / 800 * size, "#A7392C"))
  }
  elementList.push(new element(462 / 800 * size, 123 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 2, column 7
  elementList.push(new element(200 / 800 * size, 123 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 7
  elementList.push(new element(225 / 800 * size, 280 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(385 / 800 * size, 280 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blu4,row 3, column 7
  elementList.push(new element(385 / 800 * size, 345 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 7
  elementList.push(new element(300 / 800 * size, 580 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(370 / 800 * size, 580 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 7
  elementList.push(new element(320 / 800 * size, 680 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(365 / 800 * size, 680 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 7
  elementList.push(new element(325 / 800 * size, 755 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(345 / 800 * size, 755 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(325 / 800 * size, 343 / 800 * size, 56 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(325 / 800 * size, 379 / 800 * size, 56 / 800 * size, 50 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(375 / 800 * size, 500 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  // red rect column8
  let column8_x = [516 / 800 * size, 593 / 800 * size, 500 / 800 * size, 519 / 800 * size, 519 / 800 * size];
  let column8_y = [278 / 800 * size, 278 / 800 * size, 344 / 800 * size, 447 / 800 * size, 481 / 800 * size]

  for (let g = 0; g < column8_x.length; g++) {
    elementList.push(new element(column8_x[g], column8_y[g], 22 / 800 * size, 20 / 800 * size, "#A7392C"))
  }
  let column_8_x = [525 / 800 * size, 542 / 800 * size, 558 / 800 * size, 519 / 800 * size, 558 / 800 * size, 537 / 800 * size, 491 / 800 * size];
  let column_8_y = [182 / 800 * size, 208 / 800 * size, 363 / 800 * size, 344 / 800 * size, 467 / 800 * size, 680 / 800 * size, 755 / 800 * size];
  let column_8_w = [70 / 800 * size, 38 / 800 * size, 69 / 800 * size, 22 / 800 * size, 69 / 800 * size, 20 / 800 * size, 20 / 800 * size];
  let column_8_h = [65 / 800 * size, 28 / 800 * size, 83 / 800 * size, 171 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  let column_8_col = ["#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C"];
  for (let q = 0; q < column_8_y.length; q++) {
    elementList.push(new element(column_8_x[q], column_8_y[q], column_8_w[q], column_8_h[q], column_8_col[q]))
  }
  //blue,row 2, column 8
  elementList.push(new element(430 / 800 * size, 65 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(430 / 800 * size, 125 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(430 / 800 * size, 200 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 8
  elementList.push(new element(430 / 800 * size, 300 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 6, column 8
  elementList.push(new element(430 / 800 * size, 600 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 8
  elementList.push(new element(430 / 800 * size, 681 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(430 / 800 * size, 100 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430 / 800 * size, 30 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430 / 800 * size, 230 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430 / 800 * size, 345 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430 / 800 * size, 450 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430 / 800 * size, 500 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(430 / 800 * size, 620 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));



  // red rect column9
  let column9_y = [177 / 800 * size, 344 / 800 * size, 448 / 800 * size, 563 / 800 * size, 680 / 800 * size];
  let column9_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size];
  for (let h = 0; h < column9_y.length; h++) {
    elementList.push(new element(672 / 800 * size, column9_y[h], 16, column9_h[h], "#A7392C"))
  }
  elementList.push(new element(462 / 800 * size, 123 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 7, column 9
  elementList.push(new element(463 / 800 * size, 600 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 6, column 9
  elementList.push(new element(463 / 800 * size, 500 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 9
  elementList.push(new element(463 / 800 * size, 300 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 9
  elementList.push(new element(463 / 800 * size, 200 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(463 / 800 * size, 150 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463 / 800 * size, 100 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463 / 800 * size, 30 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463 / 800 * size, 260 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463 / 800 * size, 350 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463 / 800 * size, 450 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(463 / 800 * size, 560 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));

  // red rect row10
  let row10_x = [702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 689 / 800 * size, 687 / 800 * size, 687 / 800 * size, 722 / 800 * size, 720 / 800 * size];
  let row10_y = [0, 78 / 800 * size, 164 / 800 * size, 275 / 800 * size, 603 / 800 * size, 639 / 800 * size, 387 / 800 * size, 387 / 800 * size, 755 / 800 * size];
  let row10_w = [16 / 800 * size, 16 / 800 * size, 54 / 800 * size, 16 / 800 * size, 51 / 800 * size, 93 / 800 * size, 93 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  let row10_h = [20 / 800 * size, 16 / 800 * size, 47 / 800 * size, 20 / 800 * size, 36 / 800 * size, 16 / 800 * size, 39 / 800 * size, 39 / 800 * size, 16 / 800 * size];
  let row10_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C"];
  for (let r = 0; r < row10_y.length; r++) {
    elementList.push(new element(row10_x[r], row10_y[r], row10_w[r], row10_h[r], row10_col[r]))
  }
  //blue,row 4, column 10
  elementList.push(new element(560 / 800 * size, 345 / 800 * size, 15 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 6, column 10
  elementList.push(new element(630 / 800 * size, 450 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new element(545 / 800 * size, 450 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 10
  elementList.push(new element(625 / 800 * size, 500 / 800 * size, 15 / 800 * size, 18 / 800 * size, "#4468BC"));
  elementList.push(new element(520 / 800 * size, 500 / 800 * size, 20 / 800 * size, 18 / 800 * size, "#4468BC"));
  //blue,row 7, column 10
  elementList.push(new element(625 / 800 * size, 680 / 800 * size, 15 / 800 * size, 18 / 800 * size, "#4468BC"));
  elementList.push(new element(520 / 800 * size, 680 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(570 / 800 * size, 400 / 800 * size, 50 / 800 * size, 30 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(570 / 800 * size, 447 / 800 * size, 50 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(559 / 800 * size, 483 / 800 * size, 70 / 800 * size, 15 / 800 * size, "#D5D5D0"));



  // red rect row11

  elementList.push(new element(740 / 800 * size, 346 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  elementList.push(new element(740 / 800 * size, 501 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  //blue,row 6, column 11
  elementList.push(new element(740 / 800 * size, 300 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 11
  elementList.push(new element(740 / 800 * size, 450 / 800 * size, 20 / 800 * size, 18 / 800 * size, "#4468BC"));
  //blue,row 6, column 11
  elementList.push(new element(685 / 800 * size, 460 / 800 * size, 50 / 800 * size, 40 / 800 * size, "#4468BC"));
  //blue,row 1, column 11
  elementList.push(new element(720 / 800 * size, 85 / 800 * size, 50 / 800 * size, 30 / 800 * size, "#4468BC"));
  //blue,row 1, column 11
  elementList.push(new element(735 / 800 * size, 640 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 483 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 150 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 100 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 30 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 260 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 230 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 400 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new element(670 / 800 * size, 600 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));


  // red rect row12
  let row12_y = [0, 33 / 800 * size, 81 / 800 * size, 238 / 800 * size, 346 / 800 * size, 446 / 800 * size, 561 / 800 * size, 638 / 800 * size, 678 / 800 * size, 755 / 800 * size];
  let row12_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  for (let j = 0; j < row12_y.length; j++) {
    elementList.push(new element(768 / 800 * size, row12_y[j], 16 / 800 * size, row12_h[j], "#A7392C"))
  }

  //red rect row13
  elementList.push(new element(784 / 800 * size, 501 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  //grey,row 5, column 3
  elementList.push(new element(92 / 800 * size, 200 / 800 * size, 15 / 800 * size, 50 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(123 / 800 * size, 225 / 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(128 / 800 * size, 310 / 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new element(130 / 800 * size, 650 / 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
}
