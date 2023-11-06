let elementList = [];
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = windowWidth < windowHeight ? windowWidth : windowHeight;

  creatElements();
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  rect(0, 0, size, size);

  noStroke();

  for (let i = 0; i < elementList.length; i++) {
    elementList[i].display();
  }

}
// Color array to cycle through
let colorIndex = 0;
const colors = ["#E8D135", "#4468BC", "#C32F27", "#2F8C2C", "#8A2F8C"];

function mousePressed() {
  // Cycle to the next color
  colorIndex = (colorIndex + 1) % colors.length;
  
  // Create a new element with a random width and height at the mouse position
  const newWidth = random(20, 100);
  const newHeight = random(20, 100);
  // Use the current color from the array
  const newElement = new element(mouseX, mouseY, newWidth, newHeight, colors[colorIndex]);
  elementList.push(newElement);
}
 
function keyPressed() {
  // Define colors corresponding to keys 1 to 5
  const keyToColor = {
    '1': "#E8D135", // Yellow
    '2': "#4468BC", // Blue
    '3': "#C32F27", // Red
    '4': "#2F8C2C", // Green
    '5': "#8A2F8C"  // Purple
  };

  // If the Enter or Return key is pressed
  if (keyCode === ENTER || keyCode === RETURN) {
    // Iterate over all elements and assign new random sizes
    for (let i = 0; i < elementList.length; i++) {
      elementList[i].width = random(20, 100);
      elementList[i].height = random(20, 100);
    }
  } else {
    // Check if the key is in the keyToColor mapping and change the color
    if (key in keyToColor) {
      let newColor = keyToColor[key];
      for (let i = 0; i < elementList.length; i++) {
        elementList[i].color = newColor;
      }
    }
  }
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



function creat2Element(x, y, width, height, color) {
  return new element(x / 800 * size, y / 800 * size, width / 800 * size, height / 800 * size, color);
}


function creatElements() {

  //Window width horizontal yellow strips
  let p = new element(0, 18 / 800 * size, size, 15 / 800 * size, "#E8D135");
  elementList.push(p);

  let horizontalStrip = [122 / 800 * size, 277 / 800 * size, 343 / 800 * size, 447 / 800 * size, 500 / 800 * size];
  for (let a = 0; a < horizontalStrip.length; a++) {
    elementList.push(new element(0, horizontalStrip[a], size, 20 / 800 * size, "#E8D135"))
  }
  //blue,row 3, column 7
  elementList.push(new element(230/ 800 * size, 363 / 800 * size, 70/ 800 * size, 84 / 800 * size, "#4468BC"));
  let yellow_y = [545 / 800 * size, 618 / 800 * size, 705 / 800 * size, 680 / 800 * size, 755 / 800 * size];
  let yellow_w = [45 / 800 * size, 45 / 800 * size, 45 / 800 * size, size, size];
  let yellow_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  for (let m = 0; m < yellow_y.length; m++) {
    elementList.push(new element(0, yellow_y[m], yellow_w[m], yellow_h[m], "#E8D135"))
  }

  //Window height vertical yellow strips
  let verticalStrip = [45 / 800 * size, 178 / 800 * size, 429 / 800 * size, 462 / 800 * size, 672 / 800 * size]
  for (let b = 0; b < verticalStrip.length; b++) {
    elementList.push(new element(verticalStrip[b], 0, 16 / 800 * size, size, "#E8D135"))
  }

  let list_x = [18 / 800 * size, 92 / 800 * size, 702 / 800 * size, 740 / 800 * size, 740 / 800 * size, 740 / 800 * size, 768 / 800 * size];
  let list_y = [0, 0, 0, 0, 123 / 800 * size, 500 / 800 * size, 0];
  let list_h = [278 / 800 * size, 770 / 800 * size, 297 / 800 * size, 81 / 800 * size, 236 / 800 * size, 155 / 800 * size, size];
  for (let k = 0; k < list_y.length; k++) {
    elementList.push(new element(list_x[k], list_y[k], 16, list_h[k], "#E8D135"))
  }

  // red rect column1
  let column1_x = [18 / 800 * size, 18 / 800 * size, 16 / 800 * size, 18 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 18 / 800 * size];
  let column1_y = [277 / 800 * size, 122 / 800 * size, 343 / 800 * size, 213 / 800 * size, 705 / 800 * size, 618 / 800 * size, 545 / 800 * size, 20 / 800 * size, 65 / 800 * size, 65 / 800 * size, 170 / 800 * size];
  let column1_w = [16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 16 / 800 * size, 22 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 15 / 800 * size, 15 / 800 * size, 15 / 800 * size, 12 / 800 * size];
  let column1_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC", "#4468BC"];
  for (let n = 0; n < column1_y.length; n++) {
    elementList.push(new element(column1_x[n], column1_y[n], column1_w[n], column1_h[n], column1_col[n]))
  }


  const elements = [
    {x: 230, y: 363, width: 70, height: 84, color: "#4468BC"},
    {x: 510, y: 140, width: 100, height: 138, color: "#4468BC"},
    {x: 17, y: 40, width: 10, height: 10, color: "#D5D5D0"},
    {x: 17, y: 260, width: 10, height: 10, color: "#D5D5D0"},
    {x: 45, y: 520, width: 20, height: 20, color: "#D5D5D0"},
    {x: 45, y: 300, width: 20, height: 20, color: "#D5D5D0"},
    {x: 45, y: 548, width: 16, height: 12, color: "#A7392C"},
    {x: 45, y: 548, width: 16, height: 12, color: "#A7392C"},
    {x: 45, y: 277, width: 16, height: 20, color: "#4468BC"},
    {x: 45, y: 345, width: 17, height: 17, color: "#4468BC"},
    {x: 45, y: 447, width: 17, height: 20, color: "#4468BC"},
    {x: 45, y: 680, width: 17, height: 17, color: "#4468BC"},
    {x: 45, y: 260, width: 15, height: 20, color: "#D5D5D0"},
    {x: 45, y: 100, width: 15, height: 20, color: "#D5D5D0"},
    {x: 45, y: 650, width: 15, height: 20, color: "#D5D5D0"},
    {x: 92, y: 342, width: 16, height: 20, color: "#A7392C"},
    {x: 92, y: 122, width: 20, height: 20, color: "#4468BC"},
    {x: 60, y: 142, width: 50, height: 50, color: "#4468BC"},
    {x: 92, y: 260, width: 10, height: 10, color: "#4468BC"},
    {x: 92, y: 295, width: 10, height: 10, color: "#4468BC"},
    {x: 92, y: 400, width: 10, height: 10, color: "#4468BC"},
    {x: 92, y: 447, width: 10, height: 20, color: "#4468BC"},
    {x: 92, y: 500, width: 10, height: 20, color: "#4468BC"},
    {x: 62, y: 539, width: 31, height: 40, color: "#4468BC"},
    {x: 92, y: 635, width: 10, height: 10, color: "#4468BC"},
    {x: 92, y: 680, width: 15, height: 15, color: "#4468BC"},
    {x: 92, y: 700, width: 10, height: 10, color: "#4468BC"},
    {x: 92, y: 755, width: 10, height: 15, color: "#4468BC"},
    {x: 92, y: 680, width: 17, height: 17, color: "#4468BC"},
    {x: 92, y: 200, width: 15, height: 20, color: "#D5D5D0"},
    {x: 92, y: 370, width: 15, height: 20, color: "#D5D5D0"},
    {x: 123, y: 70, width: 30, height: 20, color: "#D5D5D0"},
    {x: 376, y: 122, width: 30, height: 20, color: "#D5D5D0"},
    {x: 300, y: 15, width: 30, height: 20, color: "#D5D5D0"},
    {x: 175, y: 15, width: 20, height: 20, color: "#D5D5D0"},
    {x: 175, y: 230, width: 20, height: 20, color: "#D5D5D0"},
    {x: 175, y: 320, width: 20, height: 20, color: "#D5D5D0"},
    {x: 175, y: 400, width: 20, height: 20, color: "#D5D5D0"},
    {x: 175, y: 500, width: 20, height: 20, color: "#D5D5D0"},
    {x: 175, y: 600, width: 20, height: 20, color: "#D5D5D0"},
    {x: 260, y: 680, width: 20, height: 20, color: "#D5D5D0"},
    {x: 260, y: 500, width: 20, height: 20, color: "#D5D5D0"},
    {x: 260, y: 400, width: 20, height: 20, color: "#D5D5D0"},
    {x: 180, y: 65, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 100, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 150, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 275, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 275, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 350, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 450, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 580, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 685, width: 15, height: 15, color: "#4468BC"},
    {x: 180, y: 755, width: 15, height: 15, color: "#4468BC"},
    {x: 462, y: 123, width: 16, height: 20, color: "#A7392C"},
    {x: 200, y: 123, width: 15, height: 15, color: "#4468BC"},
    {x: 225, y: 280, width: 15, height: 15, color: "#4468BC"},
    {x: 385, y: 280, width: 15, height: 15, color: "#4468BC"},
    {x: 385, y: 345, width: 15, height: 15, color: "#4468BC"},
    {x: 300, y: 580, width: 15, height: 15, color: "#4468BC"},
    {x: 370, y: 580, width: 15, height: 15, color: "#4468BC"},
    {x: 320, y: 680, width: 15, height: 15, color: "#4468BC"},
    {x: 365, y: 680, width: 15, height: 15, color: "#4468BC"},
    {x: 325, y: 755, width: 15, height: 15, color: "#4468BC"},
    {x: 345, y: 755, width: 15, height: 15, color: "#4468BC"},
    {x: 325, y: 343, width: 56, height: 20, color: "#D5D5D0"},
    {x: 325, y: 379, width: 56, height: 50, color: "#D5D5D0"},
    {x: 375, y: 500, width: 20, height: 20, color: "#D5D5D0"},
    {x: 430, y: 65, width: 15, height: 15, color: "#4468BC"},
    {x: 430, y: 125, width: 15, height: 15, color: "#4468BC"},
    {x: 430, y: 200, width: 15, height: 15, color: "#4468BC"},
  
    {x: 430, y: 300, width: 15, height: 15, color: "#4468BC"},
    {x: 430, y: 600, width: 15, height: 15, color: "#4468BC"},
    {x: 430, y: 681, width: 15, height: 15, color: "#4468BC"},
    {x: 430, y: 100, width: 15, height: 15, color: "#D5D5D0"},
    {x: 430, y: 30, width: 15, height: 15, color: "#D5D5D0"},
    {x: 430, y: 230, width: 15, height: 15, color: "#D5D5D0"},
    {x: 430, y: 345, width: 15, height: 15, color: "#D5D5D0"},
    {x: 430, y: 450, width: 15, height: 15, color: "#D5D5D0"},
    {x: 430, y: 500, width: 15, height: 15, color: "#D5D5D0"},
    {x: 430, y: 620, width: 15, height: 15, color: "#D5D5D0"},
    {x: 462, y: 123, width: 16, height: 20, color: "#A7392C"},
    {x: 463, y: 600, width: 15, height: 15, color: "#4468BC"},
    {x: 463, y: 500, width: 15, height: 15, color: "#4468BC"},
    {x: 463, y: 300, width: 15, height: 15, color: "#4468BC"},
    {x: 463, y: 200, width: 15, height: 15, color: "#4468BC"},
    {x: 463, y: 150, width: 15, height: 15, color: "#D5D5D0"},
    {x: 463, y: 100, width: 15, height: 15, color: "#D5D5D0"},
    {x: 463, y: 30, width: 15, height: 15, color: "#D5D5D0"},
    {x: 463, y: 260, width: 15, height: 15, color: "#D5D5D0"},
    {x: 463, y: 350, width: 15, height: 15, color: "#D5D5D0"},
    {x: 463, y: 450, width: 15, height: 15, color: "#D5D5D0"},
    {x: 463, y: 560, width: 15, height: 15, color: "#D5D5D0"},
    {x: 560, y: 345, width: 15, height: 20, color: "#4468BC"},
    {x: 630, y: 450, width: 15, height: 15, color: "#4468BC"},
    {x: 545, y: 450, width: 15, height: 15, color: "#4468BC"},
    {x: 625, y: 500, width: 15, height: 18, color: "#4468BC"},
    {x: 520, y: 500, width: 20, height: 18, color: "#4468BC"},
    {x: 625, y: 680, width: 15, height: 18, color: "#4468BC"},
    {x: 520, y: 680, width: 15, height: 15, color: "#4468BC"},
    {x: 570, y: 400, width: 50, height: 30, color: "#D5D5D0"},
    {x: 570, y: 447, width: 50, height: 20, color: "#D5D5D0"},
    {x: 559, y: 483, width: 70, height: 15, color: "#D5D5D0"},
    {x: 740, y: 346, width: 16, height: 16, color: "#A7392C"},
    {x: 740, y: 501, width: 16, height: 16, color: "#A7392C"},
    {x: 740, y: 300, width: 15, height: 15, color: "#4468BC"},
    {x: 740, y: 450, width: 20, height: 18, color: "#4468BC"},
    {x: 685, y: 460, width: 50, height: 40, color: "#4468BC"},
    {x: 720, y: 85, width: 50, height: 30, color: "#4468BC"},
    {x: 735, y: 640, width: 15, height: 15, color: "#4468BC"},
    {x: 670, y: 483, width: 15, height: 15, color: "#D5D5D0"},
    {x: 670, y: 150, width: 15, height: 15, color: "#D5D5D0"},
    {x: 670, y: 100, width: 15, height: 15, color: "#D5D5D0"},
    {x: 670, y: 30, width: 15, height: 15, color: "#D5D5D0"},
    {x: 670, y: 260, width: 15, height: 15, color: "#D5D5D0"},
    {x: 670, y: 230, width: 15, height: 15, color: "#D5D5D0"},
    {x: 670, y: 400, width: 15, height: 15, color: "#D5D5D0"},
    {x: 670, y: 600, width: 15, height: 15, color: "#D5D5D0"},
    {x: 784, y: 501, width: 16, height: 16, color: "#A7392C"},
    {x: 92, y: 200, width: 15, height: 50, color: "#D5D5D0"},
    {x: 123, y: 225, width: 30, height: 20, color: "#D5D5D0"},
    {x: 128, y: 310, width: 30, height: 20, color: "#D5D5D0"},
    {x: 130, y: 650, width: 30, height: 20, color: "#D5D5D0"},
    
  
    
];

elements.forEach(e => elementList.push(creat2Element(e.x, e.y, e.width, e.height, e.color)));
  


  // red rect column2
  let column2 = [0, 64 / 800 * size, 400 / 800 * size, 500 / 800 * size, 580 / 800 * size, 623 / 800 * size, 755 / 800 * size]
  for (let c = 0; c < column2.length; c++) {
    elementList.push(new element(45 / 800 * size, column2[c], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
 



  // red rect column3
  let column3 = [212 / 800 * size, 580 / 800 * size, 644 / 800 * size];
  for (let d = 0; d < column3.length; d++) {
    elementList.push(new element(92 / 800 * size, column3[d], 16 / 800 * size, 16 / 800 * size, "#A7392C"))
  }
  
  
  

  // red rect column4
  let column4_x = [122 / 800 * size, 92 / 800 * size, 122 / 800 * size, 122 / 800 * size, 160 / 800 * size, 92 / 800 * size, 108 / 800 * size, 124 / 800 * size, 108 / 800 * size, 108 / 800 * size, 108 / 800 * size, 124 / 800 * size, 124 / 800 * size,122 / 800 * size,];
  let column4_y = [33 / 800 * size, 48 / 800 * size, 33 / 800 * size, 90 / 800 * size, 122 / 800 * size, 210 / 800 * size, 278 / 800 * size, 278 / 800 * size, 395 / 800 * size, 580 / 800 * size, 630 / 800 * size, 680 / 800 * size, 755 / 800 * size,18 / 800 * size,];
  let column4_w = [32 / 800 * size, 86 / 800 * size, 32 / 800 * size, 32 / 800 * size, 16 / 800 * size, 86 / 800 * size, 16 / 800 * size, 37 / 800 * size, 70 / 800 * size, 70 / 800 * size, 70 / 800 * size, 20 / 800 * size, 20 / 800 * size,20 / 800 * size];
  let column4_h = [35 / 800 * size, 22 / 800 * size, 35 / 800 * size, 33 / 800 * size, 20 / 800 * size, 50 / 800 * size, 20 / 800 * size, 76 / 800 * size, 51 / 800 * size, 16 / 800 * size, 51 / 800 * size, 16 / 800 * size, ,16 / 800 * size];
  let column4_col = ["#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C","#4468BC"];
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
 


  // red rect row7
  let row7 = [86 / 800 * size, 389 / 800 * size, 486 / 800 * size, 516 / 800 * size, 666 / 800 * size, 737 / 800 * size];
  for (let f = 0; f < row7.length; f++) {
    elementList.push(new element(462 / 800 * size, row7[f], 16 / 800 * size, 14 / 800 * size, "#A7392C"))
  }
 
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
 



  // red rect column9
  let column9_y = [177 / 800 * size, 344 / 800 * size, 448 / 800 * size, 563 / 800 * size, 680 / 800 * size];
  let column9_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size];
  for (let h = 0; h < column9_y.length; h++) {
    elementList.push(new element(672 / 800 * size, column9_y[h], 16, column9_h[h], "#A7392C"))
  }


  // red rect row10
  let row10_x = [702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 702 / 800 * size, 689 / 800 * size, 687 / 800 * size, 687 / 800 * size, 722 / 800 * size, 720 / 800 * size];
  let row10_y = [0, 78 / 800 * size, 164 / 800 * size, 275 / 800 * size, 603 / 800 * size, 639 / 800 * size, 387 / 800 * size, 387 / 800 * size, 755 / 800 * size];
  let row10_w = [16 / 800 * size, 16 / 800 * size, 54 / 800 * size, 16 / 800 * size, 51 / 800 * size, 93 / 800 * size, 93 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  let row10_h = [20 / 800 * size, 16 / 800 * size, 47 / 800 * size, 20 / 800 * size, 36 / 800 * size, 16 / 800 * size, 39 / 800 * size, 39 / 800 * size, 16 / 800 * size];
  let row10_col = ["#A7392C", "#A7392C", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C"];
  for (let r = 0; r < row10_y.length; r++) {
    elementList.push(new element(row10_x[r], row10_y[r], row10_w[r], row10_h[r], row10_col[r]))
  }



  // red rect row12
  let row12_y = [0, 33 / 800 * size, 81 / 800 * size, 238 / 800 * size, 346 / 800 * size, 446 / 800 * size, 561 / 800 * size, 638 / 800 * size, 678 / 800 * size, 755 / 800 * size];
  let row12_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 20 / 800 * size, 16 / 800 * size, 20 / 800 * size, 14 / 800 * size, 14 / 800 * size, 16 / 800 * size, 16 / 800 * size];
  for (let j = 0; j < row12_y.length; j++) {
    elementList.push(new element(768 / 800 * size, row12_y[j], 16 / 800 * size, row12_h[j], "#A7392C"))
  }


}
 function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        size = windowWidth < windowHeight ? windowWidth : windowHeight;
        elementList = [];
        creatElements();
    }

