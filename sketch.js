let elementList = [];
let movingElementList= [];
let size;
let song;
let fft;
let vol;


function preload() {
  song = loadSound("assets/Bossa.mp3");
  img = loadImage("assets/bg.jpg")
  }

function setup() {
  colorMode(RGB);
  createCanvas(windowWidth, windowHeight);
  size = windowWidth < windowHeight ? windowWidth : windowHeight;

  creatElements();
  createMovingElements();
  fft = new p5.FFT();
  amp = new p5.Amplitude();
}

function draw() {
  background(255);
  image(img,0,0,size, size)
  
  push();
  noFill();
  rect(0, 0, size, size);
  noStroke();

  for (let i = 0; i < elementList.length; i++) {
    elementList[i].display();
  }
  pop();
   
  
  let vol = amp.getLevel() * 2000 ;
  let vol_2 = amp.getLevel() * 2500 ;
  console.log(vol);
  
  let wave = fft.waveform();
  console.log(wave)
  let spectrum = fft.analyze()
  console.log(spectrum)
  push();

  fill(0,0,70 + vol * 0.5);
  for (let v = 0; v < 6; v++) {
    
    let cube_x = [45 / 800 * size, 92 / 800 * size,178 / 800 * size, 429 / 800 * size, 462 / 800 * size, 672 / 800 * size,768 / 800 * size] 
    let cubeSpacing = 30;
    
    for (let z = 0; z < cube_x.length; z++){
      rect(cube_x[z], vol , 16 / 800 * size, 20 / 800 * size)
    }
    
    
    }
    pop();
    fill(70 + vol_2 * 0.5,0,0);
    for (let n = 0; n < 6; n++) {
    let cube_y = [18 / 800 * size, 122 / 800 * size, 277 / 800 * size, 343 / 800 * size, 447 / 800 * size, 500 / 800 * size,680 / 800 * size, 755 / 800 * size];
    for (let m = 0; m < cube_y.length; m++){
      rect(vol_2, cube_y[m],20 / 800 * size,20 / 800 * size)
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

  class movingElement {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.color = color;
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height)
  }
}

function createMovingElements () {
  


}

function creatElements() {

  //Window width horizontal yellow strips
  
  let horizontalStrip = [18 / 800 * size,122 / 800 * size, 277 / 800 * size, 343 / 800 * size, 447 / 800 * size, 500 / 800 * size,680 / 800 * size, 755 / 800 * size];
  for (let a = 0; a < horizontalStrip.length; a++) {
    elementList.push(new element(0, horizontalStrip[a], size, 20 / 800 * size, "#E8D135"))
  }
  //Window height vertical yellow strips
  let verticalStrip = [45 / 800 * size, 178 / 800 * size, 429 / 800 * size, 462 / 800 * size, 672 / 800 * size,768 / 800 * size]
  for (let b = 0; b < verticalStrip.length; b++) {
    elementList.push(new element(verticalStrip[b], 0, 16 / 800 * size, size, "#E8D135"))
  }

  let list_x = [18 / 800 * size, 92 / 800 * size, 702 / 800 * size, 740 / 800 * size, 740 / 800 * size, 740 / 800 * size];
  let list_y = [0, 0, 0, 0, 123 / 800 * size, 500 / 800 * size];
  let list_h = [278 / 800 * size, 770 / 800 * size, 297 / 800 * size, 81 / 800 * size, 236 / 800 * size, 155 / 800 * size];
  for (let k = 0; k < list_y.length; k++) {
    elementList.push(new element(list_x[k], list_y[k], 16, list_h[k], "#E8D135"))
  }


  //Residual yellow
  let yellow_y = [545 / 800 * size, 618 / 800 * size, 705 / 800 * size,];
  let yellow_w = [45 / 800 * size, 45 / 800 * size, 45 / 800 * size];
  let yellow_h = [20 / 800 * size, 20 / 800 * size, 20 / 800 * size];
  for (let m = 0; m < yellow_y.length; m++) {
    elementList.push(new element(0, yellow_y[m], yellow_w[m], yellow_h[m], "#E8D135"))
  }
 

  // red rect column4
  let column4_x = [122 / 800 * size, 92 / 800 * size, 122 / 800 * size, 122 / 800 * size, 160 / 800 * size, 92 / 800 * size, 108 / 800 * size, 124 / 800 * size, 108 / 800 * size, 108 / 800 * size, 108 / 800 * size, 124 / 800 * size, 124 / 800 * size];
  let column4_y = [33 / 800 * size, 48 / 800 * size, 33 / 800 * size, 90 / 800 * size, 122 / 800 * size, 210 / 800 * size, 278 / 800 * size, 278 / 800 * size, 395 / 800 * size, 580 / 800 * size, 630 / 800 * size, 680 / 800 * size, 755 / 800 * size];
  let column4_w = [32 / 800 * size, 86 / 800 * size, 32 / 800 * size, 32 / 800 * size, 16 / 800 * size, 86 / 800 * size, 16 / 800 * size, 37 / 800 * size, 70 / 800 * size, 70 / 800 * size, 70 / 800 * size, 20 / 800 * size, 20 / 800 * size];
  let column4_h = [35 / 800 * size, 22 / 800 * size, 35 / 800 * size, 33 / 800 * size, 20 / 800 * size, 50 / 800 * size, 20 / 800 * size, 76 / 800 * size, 51 / 800 * size, 16 / 800 * size, 51 / 800 * size, 20 / 800 * size, 20 / 800 * size];
  let column4_col = ["#A7392C", "#E8D135", "#A7392C", "#A7392C", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C"];
  for (let o = 0; o < column4_y.length; o++) {
    elementList.push(new element(column4_x[o], column4_y[o], column4_w[o], column4_h[o], column4_col[o]))
  }
  
 
  // red rect column8
  let column8_x = [516 / 800 * size, 593 / 800 * size, 500 / 800 * size, 519 / 800 * size, 519 / 800 * size];
  let column8_y = [278 / 800 * size, 278 / 800 * size, 344 / 800 * size, 447 / 800 * size, 481 / 800 * size]

  for (let g = 0; g < column8_x.length; g++) {
    elementList.push(new element(column8_x[g], column8_y[g], 22 / 800 * size, 20 / 800 * size, "#A7392C"))
  }
  let column_8_x = [525 / 800 * size, 542 / 800 * size, 558 / 800 * size, 519 / 800 * size, 558 / 800 * size];
  let column_8_y = [182 / 800 * size, 208 / 800 * size, 363 / 800 * size, 344 / 800 * size, 467 / 800 * size];
  let column_8_w = [70 / 800 * size, 38 / 800 * size, 69 / 800 * size, 22 / 800 * size, 69 / 800 * size];
  let column_8_h = [65 / 800 * size, 28 / 800 * size, 83 / 800 * size, 171 / 800 * size, 16 / 800 * size];
  let column_8_col = ["#A7392C", "#E8D135", "#A7392C", "#E8D135", "#A7392C"];
  for (let q = 0; q < column_8_y.length; q++) {
    elementList.push(new element(column_8_x[q], column_8_y[q], column_8_w[q], column_8_h[q], column_8_col[q]))
  }



  // red rect row10
  let row10_x = [702 / 800 * size, 689 / 800 * size, 687 / 800 * size, 687 / 800 * size, 722 / 800 * size, 720 / 800 * size,325 / 800 * size];
  let row10_y = [164 / 800 * size, 603 / 800 * size, 639 / 800 * size, 387 / 800 * size, 387 / 800 * size, 755 / 800 * size,290 / 800 * size];
  let row10_w = [ 54 / 800 * size, 51 / 800 * size, 93 / 800 * size, 93 / 800 * size, 16 / 800 * size, 16 / 800 * size,56 / 800 * size];
  let row10_h = [ 47 / 800 * size, 36 / 800 * size, 16 / 800 * size, 39 / 800 * size, 39 / 800 * size, 20 / 800 * size, 170 / 800 * size];
  let row10_col = ["#A7392C", "#A7392C", "#E8D135", "#E8D135", "#A7392C", "#A7392C","#E8D135" ];
  for (let r = 0; r < row10_y.length; r++) {
    elementList.push(new element(row10_x[r], row10_y[r], row10_w[r], row10_h[r], row10_col[r]))
  }
 
// blue rect
elementList.push(new element(230/ 800 * size, 363 / 800 * size, 70/ 800 * size, 84 / 800 * size, "#4468BC"));
elementList.push(new element(510 / 800 * size, 140/ 800 * size, 100 / 800 * size, 138 / 800 * size, "#4468BC"));
elementList.push(new element(62 / 800 * size, 539 / 800 * size, 31 / 800 * size, 40 / 800 * size, "#4468BC"));
elementList.push(new element(718/ 800 * size, 70/ 800 * size, 50 / 800 * size, 30 / 800 * size, "#4468BC"));
elementList.push(new element(123/ 800 * size, 70/ 800 * size, 30 / 800 * size, 20 / 800 * size, "#D5D5D0"));
elementList.push(new element(325/ 800 * size, 379/ 800 * size, 56 / 800 * size, 50 / 800 * size, "#D5D5D0"));
elementList.push(new element(570/ 800 * size, 400/ 800 * size, 50 / 800 * size, 30 / 800 * size, "#D5D5D0"));

//grey,row 5, column 5
elementList.push(new element(570/ 800 * size, 447/ 800 * size, 50 / 800 * size, 20 / 800 * size, "#D5D5D0"));
//grey,row 5, column 5
elementList.push(new element(558/ 800 * size, 483/ 800 * size, 69 / 800 * size, 18/ 800 * size, "#D5D5D0"));

}



function mouseClicked(){
  if (song.isPlaying()) {
    song.pause()
    noLoop()
  } else {
    song.play()
    loop()
  }
}

