let elementList = [];
let size;

// moving speed and color changing speed
let speed = [] ;
let colorSpeed = 60;

function setup() {
createCanvas(windowWidth, windowHeight);
  size = min(windowWidth, windowHeight); 

  //Draw all rectangles based on their positions
  creatElements();

  // generate 15 different speed for 7 columns and 8 rows
  for(i = 0; i < 15; i++){
  speed.push (random(-3,3));
  console.log(speed[i])
  }

}

function draw() {
  background(255);
  stroke(0);
  noFill();
  rect(0, 0, size, size);

  //display all the elements
  noStroke();
  for (let i = 0; i < elementList.length; i++) {
    elementList[i].display();
  }

//big squares color change every second
if (frameCount % colorSpeed == 0) {
    let colorChange = [157, 6, 35, 90, 84, 79, 81, 86, 92, 
      157, 165, 166, 203, 205, 207, 224, 225];
    for (i = 0; i < colorChange.length; i++){
      elementList[colorChange[i]].changeColor();
    }
  }

// give different moving speed to columns and rows
 
//column1
for(let a = 38; a < 56; a++){
    elementList[a].move(0, speed[0]);
    }
//column2
let c2 = [56,57,58,59,60,62,63,64,65,66,
  68,69,70,71,72,73,74,95];
    for (i = 0; i < c2.length; i++){
      elementList[c2[i]].move(0,speed[1]);
    }
//column3
  for(let a = 112; a < 116; a++){
       elementList[a].move(0, speed[2]);
        }
  for(let a = 131; a < 136; a++){
      elementList[a].move(0, speed[2]);
       }
//column4
let c4 = [120,121,122,123,124,125,126,127,
  128,173,174,175,176,177,178,179];
for (i = 0; i < c4.length; i++){
  elementList[c4[i]].move(0,speed[3]);
}
//column5
let c5 = [139,140,141,142,143,144,189,192,
  193,194,195,196,197,198,200];
for (i = 0; i < c5.length; i++){
  elementList[c5[i]].move(0,speed[4]);
}
//column6
let c6 = [184,185,186,187,188,227,228,229,
230,231,232,233,234];
for (i = 0; i < c6.length; i++){
  elementList[c6[i]].move(0,speed[5]);
}
//column7
for(let a = 235; a < 244; a++){
  elementList[a].move(0, speed[6]);
   }
//row1
let r1 = [89,31,110,111];
  for (i = 0; i < r1.length; i++){
    elementList[r1[i]].move(speed[7],0);
  }
//row2
let r2 = [25,80,109,146,172];
  for (i = 0; i < r2.length; i++){
    elementList[r2[i]].move(speed[8],0);
  }
//row3
let r3 = [24,91,147,148,159,160];
for (i = 0; i < r3.length; i++){
  elementList[r3[i]].move(speed[9],0);
}
//row4
let r4 = [26,97,98,149,161,180,210,220];
for (i = 0; i < r4.length; i++){
  elementList[r4[i]].move(speed[10],0);
}
//row5
let r5 = [101,102,103,181,199,211,212,223];
for (i = 0; i < r5.length; i++){
  elementList[r5[i]].move(speed[11],0);
}
//row6
let r6 = [118,158,182,191,213,214,221];
for (i = 0; i < r6.length; i++){
  elementList[r6[i]].move(speed[12],0);
}
//row7
let r7 = [87,106,107,117,152,153,169,215,216];
for (i = 0; i < r7.length; i++){
  elementList[r7[i]].move(speed[13],0);
}
//row8
let r8 = [138,154,155,170,209,244];
for (i = 0; i < r8.length; i++){
  elementList[r8[i]].move(speed[14],0);
}

}

//define a class to create every element
// and display, move, color change functions
class Element {
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

  move(dx, dy) {
    this.x += dx;
    this.y += dy;

    //wrap elements when they go off the canvas.
    if (this.x < -this.width) {
      this.x = size;
    }
    if (this.x > size) {
      this.x = -this.width;
    }

    if (this.y < -this.height) {
      this.y = size;
    }
    if (this.y > size) {
      this.y = -this.height;
    }
}
 changeColor() {
  this.color = color(random(255), random(255), random(255));
}
}

// moving speed up 10 times when the mouse is pressed
function mousePressed(){

 for (let i = 0; i < 15; i++) {
  speed[i] = speed[i] * 10;
}
 colorSpeed = 3;
}

// go back to original speed when the mouse is released
function mouseReleased(){

for (let i = 0; i < 15; i++) {
  speed[i] = speed[i] / 10;
}
  colorSpeed = 60;
 }

 // define the position of every element
function creatElements() {

  //Window width horizontal yellow strips
  let p = new Element(0, 18 / 800 * size, size, 15 / 800 * size, "#E8D135");
  elementList.push(p);

  let horizontalStrip = [122 / 800 * size, 277 / 800 * size, 343 / 800 * size, 447 / 800 * size, 500 / 800 * size];
  for (let a = 0; a < horizontalStrip.length; a++) {
    elementList.push(new Element(0, horizontalStrip[a], size, 20 / 800 * size, "#E8D135"))
  }
  //blue,row 3, column 7
  elementList.push(new Element(230/ 800 * size, 363 / 800 * size, 70/ 800 * size, 84 / 800 * size, "#4468BC"));
  let yellow_y = [545 / 800 * size, 618 / 800 * size, 705 / 800 * size, 680 / 800 * size, 755 / 800 * size];
  let yellow_w = [45 / 800 * size, 45 / 800 * size, 45 / 800 * size, size, size];
  let yellow_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  for (let m = 0; m < yellow_y.length; m++) {
    elementList.push(new Element(0 , yellow_y[m], yellow_w[m], yellow_h[m], "#E8D135"))
  }

  //Window height vertical yellow strips
  let verticalStrip = [45 / 800 * size, 178 / 800 * size, 429 / 800 * size, 462 / 800 * size, 672 / 800 * size]
  for (let b = 0; b < verticalStrip.length; b++) {
    elementList.push(new Element(verticalStrip[b], 0, 16 / 800 * size, size, "#E8D135"))
  }

  let list_x = [18 / 800 * size, 92 / 800 * size, 702 / 800 * size, 740 / 800 * size, 740 / 800 * size, 740 / 800 * size, 768 / 800 * size];
  let list_y = [0, 0, 0, 0, 123 / 800 * size, 500 / 800 * size, 0];
  let list_h = [278 / 800 * size, 770 / 800 * size, 297 / 800 * size, 81 / 800 * size, 236 / 800 * size, 155 / 800 * size, size];
  for (let k = 0; k < list_y.length; k++) {
    elementList.push(new Element(list_x[k], list_y[k], 16, list_h[k], "#E8D135"))
  }

  // red rect column1
  let column1_x = [18 / 800 * size, 18 / 800 * size, 16 / 800 * size, 18 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 18 / 800 * size];
  let column1_y = [277 / 800 * size, 122 / 800 * size, 343 / 800 * size, 213 / 800 * size, 705 / 800 * size, 618 / 800 * size, 545 / 800 * size, 20 / 800 * size, 65 / 800 * size, 65 / 800 * size, 170 / 800 * size];
  let column1_w = [16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 22 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC"];
  for (let n = 0; n < column1_y.length; n++) {
    elementList.push(new Element(column1_x[n], column1_y[n], column1_w[n], column1_h[n], column1_col[n]))
  }
  //blue,row 2, column 10
  elementList.push(new Element(510 / 800 * size, 140/ 800 * size, 100 / 800 * size, 138 / 800 * size, "#4468BC"));
  //grey,row 2, column 1
  elementList.push(new Element(17 / 800 * size, 40/ 800 * size, 10 / 800 * size, 10 / 800 * size, "#D5D5D0"));
  //grey,row 3, column 1
  elementList.push(new Element(17 / 800 * size, 260/ 800 * size, 10 / 800 * size, 10 / 800 * size, "#D5D5D0"));
  //grey,row 2, column 1
  elementList.push(new Element(45 / 800 * size, 520/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 3, column 1
  elementList.push(new Element(45/ 800 * size, 300/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  


  // red rect column2
  let column2 = [0, 64 / 800 * size, 400 / 800 * size, 500 / 800 * size, 580 / 800 * size, 623 / 800 * size, 755 / 800 * size]
  for (let c = 0; c < column2.length; c++) {
    elementList.push(new Element(45 / 800 * size, column2[c], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
  elementList.push(new Element(45 / 800 * size, 548 / 800 * size, 16 / 800 * size, 12 / 800 * size, "#A7392C"));
  elementList.push(new Element(45 / 800 * size, 548 / 800 * size, 16 / 800 * size, 12 / 800 * size, "#A7392C"));
  //blue,row 3, column 2
  elementList.push(new Element(45 / 800 * size, 277 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 4, column 2
  elementList.push(new Element(45 / 800 * size, 345 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //blue,row 5, column 2
  elementList.push(new Element(45 / 800 * size, 447 / 800 * size, 17 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 9, column 2
  elementList.push(new Element(45 / 800 * size, 680 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //grey,row 3, column 2
  elementList.push(new Element(45 / 800 * size, 260/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 2, column 2
  elementList.push(new Element(45 / 800 * size, 100/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 2
  elementList.push(new Element(45 / 800 * size, 650/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));



  // red rect column3
  let column3 = [212 / 800 * size, 580 / 800 * size, 644 / 800 * size];
  for (let d = 0; d < column3.length; d++) {
    elementList.push(new Element(92 / 800 * size, column3[d], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
  elementList.push(new Element(92 / 800 * size, 342 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 2, column 3
  elementList.push(new Element(92 / 800 * size, 122 / 800 * size, 20 / 800 * size, 20 / 800 * size, "#4468BC"));
  elementList.push(new Element(60 / 800 * size, 142 / 800 * size, 50 / 800 * size, 50 / 800 * size, "#4468BC"));
  //blue,row 2, column 3
  elementList.push(new Element(92 / 800 * size, 260 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 3, column 3
  elementList.push(new Element(92 / 800 * size, 295 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 4, column 3
  elementList.push(new Element(92 / 800 * size, 400 / 800 * size, 10 / 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 5, column 3
  elementList.push(new Element(92 / 800 * size, 447 / 800 * size, 10/ 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 6, column 3
  elementList.push(new Element(92 / 800 * size, 500 / 800 * size, 10/ 800 * size, 20 / 800 * size, "#4468BC"));
  elementList.push(new Element(62 / 800 * size, 539 / 800 * size, 31 / 800 * size, 40 / 800 * size, "#4468BC"));
  //blue,row 7, column 3
  elementList.push(new Element(92 / 800 * size, 635 / 800 * size, 10/ 800 * size, 10 / 800 * size, "#4468BC"));
  elementList.push(new Element(92 / 800 * size, 680 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 3
  elementList.push(new Element(92 / 800 * size, 700 / 800 * size, 10/ 800 * size, 10 / 800 * size, "#4468BC"));
  //blue,row 9, column 3
  elementList.push(new Element(92 / 800 * size, 755 / 800 * size, 10/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 3
  elementList.push(new Element(92 / 800 * size, 680 / 800 * size, 17 / 800 * size, 17 / 800 * size, "#4468BC"));
  //grey,row 5, column 3
  elementList.push(new Element(92 / 800 * size, 200/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new Element(92 / 800 * size, 370/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new Element(123/ 800 * size, 70/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  
  

  // red rect column4
  let column4_x = [122 / 800 * size, 92 / 800 * size, 122 / 800 * size, 122 / 800 * size, 160 / 800 * size, 92 / 800 * size, 108 / 800 * size, 124 / 800 * size, 108 / 800 * size, 108 / 800 * size, 108 / 800 * size, 124 / 800 * size, 124 / 800 * size,122 / 800 * size,];
  let column4_y = [33 / 800 * size, 48 / 800 * size, 33 / 800 * size, 90 / 800 * size, 122 / 800 * size, 210 / 800 * size, 278 / 800 * size, 278 / 800 * size, 395 / 800 * size, 580 / 800 * size, 630 / 800 * size, 680 / 800 * size, 755 / 800 * size,18 / 800 * size,];
  let column4_w = [32 / 800 * size, 86 / 800 * size, 32 / 800 * size, 32 / 800 * size, 16 / 800 * size, 86 / 800 * size, 16 / 800 * size, 37 / 800 * size, 70 / 800 * size, 70 / 800 * size, 70 / 800 * size, 20 / 800 * size, 20 / 800 * size,20 / 800 * size];
  let column4_h = [35 / 800 * size, 22 / 800 * size, 35 / 800 * size, 33 / 800 * size, 20 / 800 * size, 50 / 800 * size, 20 / 800 * size, 76 / 800 * size, 51 / 800 * size, 16 / 800 * size, 51 / 800 * size, 16 / 800 * size, ,16 / 800 * size];
  let column4_col = ["#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C","#4468BC"];
  for (let o = 0; o < column4_y.length; o++) {
    elementList.push(new Element(column4_x[o], column4_y[o], column4_w[o], column4_h[o], column4_col[o]))
  }
  


  // red rect column5
  let column5_x = [209 / 800 * size, 305 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 325 / 800 * size, 226 / 800 * size, 305 / 800 * size, 226 / 800 * size, 238 / 800 * size, 265 / 800 * size, 321 / 800 * size, 376 / 800 * size, 192 / 800 * size, 342 / 800 * size, 342 / 800 * size, 398 / 800 * size, 356 / 800 * size];
  let column5_y = [31 / 800 * size, 277 / 800 * size, 277 / 800 * size, 363 / 800 * size, 418 / 800 * size, 500 / 800 * size, 500 / 800 * size, 343 / 800 * size, 343 / 800 * size, 363 / 800 * size, 397 / 800 * size, 447 / 800 * size, 447 / 800 * size, 447 / 800 * size, 577 / 800 * size, 577 / 800 * size, 680 / 800 * size, 680 / 800 * size, 754 / 800 * size];
  let column5_w = [70 / 800 * size, 20 / 800 * size, 55 / 800 * size, 55 / 800 * size, 55 / 800 * size, , 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 55 / 800 * size, 32 / 800 * size, 20 / 800 * size, 20 / 800 * size, 237 / 800 * size, 16 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 53 / 800 * size];
  let column5_h = [56 / 800 * size, 20 / 800 * size, 70 / 800 * size, 16 / 800 * size, 30 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 25 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 40 / 800 * size];
  let column5_col = ["#A7392C", "#A7392C", "#E8D135", "#E8D135", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#A7392C"];
  for (let p = 0; p < column5_y.length; p++) {
    elementList.push(new Element(column5_x[p], column5_y[p], column5_w[p], column5_h[p], column5_col[p]))
  }
  //grey,row 5, column 5
  elementList.push(new Element(376/ 800 * size, 122/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(300/ 800 * size, 15/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(175/ 800 * size, 15/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(175/ 800 * size, 230/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(175/ 800 * size, 320/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(175/ 800 * size, 400/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(175/ 800 * size, 500/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(175/ 800 * size, 600/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(260/ 800 * size, 680/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(260/ 800 * size, 500/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(260/ 800 * size, 400/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  
  


  // red rect column6
  let column6Alt_y = [0, 170 / 800 * size, 278 / 800 * size];
  let column6Alt_h = [20 / 800 * size, 25 / 800 * size, 20 / 800 * size];
  for (let l = 0; l < column6Alt_y.length; l++) {
    elementList.push(new Element(429 / 800 * size, column6Alt_y[l], 16 / 800 * size, column6Alt_h[l], "#A7392C"))
  }
  let column6 = [86 / 800 * size, 389 / 800 * size, 486 / 800 * size, 516 / 800 * size, 666 / 800 * size, 737 / 800 * size];
  for (let e = 0; e < column6.length; e++) {
    elementList.push(new Element(429 / 800 * size, column6[e], 16 / 800 * size, 14 / 800 * size, "#A7392C"))
  }
  //blue,row 1, column 6
  elementList.push(new Element(180/ 800 * size, 65 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(180/ 800 * size, 100 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 6
  elementList.push(new Element(180/ 800 * size, 150 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 6
  elementList.push(new Element(180/ 800 * size, 275 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 6
  elementList.push(new Element(180/ 800 * size, 275 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 4, column 6
  elementList.push(new Element(180/ 800 * size, 350/ 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 5, column 6
  elementList.push(new Element(180/ 800 * size, 450 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 6
  elementList.push(new Element(180/ 800 * size, 580 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 6
  elementList.push(new Element(180/ 800 * size, 685 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 6
  elementList.push(new Element(180/ 800 * size, 755 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));


  // red rect row7
  let row7 = [86 / 800 * size, 389 / 800 * size, 486 / 800 * size, 516 / 800 * size, 666 / 800 * size, 737 / 800 * size];
  for (let f = 0; f < row7.length; f++) {
    elementList.push(new Element(462 / 800 * size, row7[f], 16 / 800 * size, 14 / 800 * size, "#A7392C"))
  }
  elementList.push(new Element(462 / 800 * size, 123 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 2, column 7
  elementList.push(new Element(200/ 800 * size, 123 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 7
  elementList.push(new Element(225/ 800 * size, 280 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(385/ 800 * size, 280 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blu4,row 3, column 7
  elementList.push(new Element(385/ 800 * size, 345 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 7
  elementList.push(new Element(300/ 800 * size, 580 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(370/ 800 * size, 580 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 8, column 7
  elementList.push(new Element(320/ 800 * size, 680 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(365/ 800 * size, 680 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 9, column 7
  elementList.push(new Element(325/ 800 * size, 755 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(345/ 800 * size, 755 / 800 * size, 15/ 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new Element(325/ 800 * size, 343/ 800 * size, 56 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(325/ 800 * size, 379/ 800 * size, 56 / 800 * size, 50 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(375/ 800 * size, 500/ 800 * size, 20 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  // red rect column8
  let column8_x = [516 / 800 * size, 593 / 800 * size, 500 / 800 * size, 519 / 800 * size, 519 / 800 * size];
  let column8_y = [278 / 800 * size, 278 / 800 * size, 344 / 800 * size, 447 / 800 * size, 481 / 800 * size]

  for (let g = 0; g < column8_x.length; g++) {
    elementList.push(new Element(column8_x[g], column8_y[g], 22 / 800 * size, 20 / 800 * size, "#A7392C"))
  }
  let column_8_x = [525 / 800 * size, 542 / 800 * size, 558 / 800 * size, 519 / 800 * size, 558 / 800 * size, 537 / 800 * size, 491 / 800 * size];
  let column_8_y = [182 / 800 * size, 208 / 800 * size, 363 / 800 * size, 344 / 800 * size, 467 / 800 * size, 680 / 800 * size, 755 / 800 * size];
  let column_8_w = [70 / 800 * size, 38 / 800 * size, 69 / 800 * size, 22 / 800 * size, 69 / 800 * size, 20 / 800 * size, 20 / 800 * size];
  let column_8_h = [65 / 800 * size, 28 / 800 * size, 83 / 800 * size, 171 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  let column_8_col = ["#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C"];
  for (let q = 0; q < column_8_y.length; q++) {
    elementList.push(new Element(column_8_x[q], column_8_y[q], column_8_w[q], column_8_h[q], column_8_col[q]))
  }
  //blue,row 2, column 8
  elementList.push(new Element(430 / 800 * size, 65 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(430 / 800 * size, 125 / 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(430 / 800 * size, 200/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 8
  elementList.push(new Element(430 / 800 * size, 300/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 6, column 8
  elementList.push(new Element(430 / 800 * size, 600/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 8
  elementList.push(new Element(430 / 800 * size, 681/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new Element(430/ 800 * size, 100/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(430/ 800 * size, 30/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(430/ 800 * size, 230/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(430/ 800 * size, 345/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(430/ 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(430/ 800 * size, 500/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(430/ 800 * size, 620/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));



  // red rect column9
  let column9_y = [177 / 800 * size, 344 / 800 * size, 448 / 800 * size, 563 / 800 * size, 680 / 800 * size];
  let column9_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size];
  for (let h = 0; h < column9_y.length; h++) {
    elementList.push(new Element(672 / 800 * size, column9_y[h], 16, column9_h[h], "#A7392C"))
  }
  elementList.push(new Element(462 / 800 * size, 123 / 800 * size, 16 / 800 * size, 20 / 800 * size, "#A7392C"));
  //blue,row 7, column 9
  elementList.push(new Element(463 / 800 * size, 600/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 6, column 9
  elementList.push(new Element(463 / 800 * size, 500/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 3, column 9
  elementList.push(new Element(463 / 800 * size, 300/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 2, column 9
  elementList.push(new Element(463 / 800 * size, 200/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new Element(463/ 800 * size, 150/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(463/ 800 * size, 100/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(463/ 800 * size, 30/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(463/ 800 * size, 260/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(463/ 800 * size, 350/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(463/ 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(463/ 800 * size, 560/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));

  // red rect row10
  let row10_x = [702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 689 / 800 * size, 687 / 800 * size, 687 / 800 * size, 722 / 800 * size, 720 / 800 * size];
  let row10_y = [0, 78 / 800 * size, 164 / 800 * size, 275 / 800 * size, 603 / 800 * size, 639 / 800 * size, 387 / 800 * size, 387 / 800 * size, 755 / 800 * size];
  let row10_w = [16 / 800 * size, 16 / 800 * size, 54 / 800 * size, 16 / 800 * size, 51 / 800 * size, 93 / 800 * size, 93 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  let row10_h = [20 / 800 * size, 16 / 800 * size, 47 / 800 * size, 20 / 800 * size, 36 / 800 * size, 16 / 800 * size, 39 / 800 * size, 39 / 800 * size, 16 / 800 * size];
  let row10_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C"];
  for (let r = 0; r < row10_y.length; r++) {
    elementList.push(new Element(row10_x[r], row10_y[r], row10_w[r], row10_h[r], row10_col[r]))
  }
  //blue,row 4, column 10
  elementList.push(new Element(560 / 800 * size, 345/ 800 * size, 15 / 800 * size, 20 / 800 * size, "#4468BC"));
  //blue,row 6, column 10
  elementList.push(new Element(630 / 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  elementList.push(new Element(545 / 800 * size, 450/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 10
  elementList.push(new Element(625 / 800 * size, 500/ 800 * size, 15 / 800 * size, 18 / 800 * size, "#4468BC"));
  elementList.push(new Element(520 / 800 * size, 500/ 800 * size, 20 / 800 * size, 18 / 800 * size, "#4468BC"));
  //blue,row 7, column 10
  elementList.push(new Element(625 / 800 * size, 680/ 800 * size, 15 / 800 * size, 18 / 800 * size, "#4468BC"));
  elementList.push(new Element(520 / 800 * size, 680/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new Element(570/ 800 * size, 400/ 800 * size, 50 / 800 * size, 30 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(570/ 800 * size, 447/ 800 * size, 50 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(559/ 800 * size, 483/ 800 * size, 70 / 800 * size, 15/ 800 * size, "#D5D5D0"));
  


  // red rect row11

  elementList.push(new Element(740 / 800 * size, 346 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  elementList.push(new Element(740 / 800 * size, 501 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  //blue,row 6, column 11
  elementList.push(new Element(740 / 800 * size, 300/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //blue,row 7, column 11
  elementList.push(new Element(740 / 800 * size, 450/ 800 * size, 20 / 800 * size, 18 / 800 * size, "#4468BC"));
  //blue,row 6, column 11
  elementList.push(new Element(685 / 800 * size, 460/ 800 * size, 50 / 800 * size, 40 / 800 * size, "#4468BC"));
  //blue,row 1, column 11
  elementList.push(new Element(720 / 800 * size, 85/ 800 * size, 50 / 800 * size, 30 / 800 * size, "#4468BC"));
  //blue,row 1, column 11
  elementList.push(new Element(735 / 800 * size, 640/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#4468BC"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 483/ 800 * size, 15 / 800 * size, 15/ 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 150/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 100/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 30/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 260/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 230/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 400/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 5
  elementList.push(new Element(670/ 800 * size, 600/ 800 * size, 15 / 800 * size, 15 / 800 * size, "#D5D5D0"));


  // red rect row12
  let row12_y = [0, 33 / 800 * size, 81 / 800 * size, 238 / 800 * size, 346 / 800 * size, 446 / 800 * size, 561 / 800 * size, 638 / 800 * size, 678 / 800 * size, 755 / 800 * size];
  let row12_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  for (let j = 0; j < row12_y.length; j++) {
    elementList.push(new Element(768 / 800 * size, row12_y[j], 16 / 800 * size, row12_h[j], "#A7392C"))
  }

  //red rect row13
  elementList.push(new Element(784 / 800 * size, 501 / 800 * size, 16 / 800 * size, 16 / 800 * size, "#A7392C"));
  //grey,row 5, column 3
  elementList.push(new Element(92 / 800 * size, 200/ 800 * size, 15 / 800 * size, 50 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new Element(123/ 800 * size, 225/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new Element(128/ 800 * size, 310/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
  //grey,row 5, column 3
  elementList.push(new Element(130/ 800 * size, 650/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
}