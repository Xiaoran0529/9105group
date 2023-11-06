# 9105group
//README - Interactive Element Creation Sketch
//Overview
//This document describes an interactive sketch program using p5.js, a JavaScript library for creative coding. The sketch enables users to interact with the canvas by creating colorful rectangular elements and modifying their colors and sizes through mouse and keyboard inputs.

//User Interactions
//Users can interact with the sketch in the following ways:

//Mouse Interaction
//Create Elements: When the user clicks anywhere on the canvas, a new rectangular element with random width and height is created at the position of the mouse pointer. The color of the new element cycles through a predefined array of colors with each new creation.

//Keyboard Interaction
//Randomize Sizes: Pressing the Enter or Return key changes all existing elements to new random sizes.
//Change Colors: Pressing the '1' to '5' keys changes the colors of all existing elements to predefined colors: '1' for Yellow, '2' for Blue, '3' for Red, '4' for Green, and '5' for Purple.

//Technical Details
//Setup
//The setup function initializes the canvas to the full size of the window and creates an initial set of elements.
//The createCanvas function from p5.js is used to create a drawing canvas.
//size is determined by the smaller dimension of the window's width or height to maintain a square display.

//Drawing
//The draw function continuously refreshes the background and updates the display of all elements. It also ensures that each element bounces back when it hits the canvas boundaries.

//Elements
//Each element is an instance of the element class.
//The element class contains properties for position (x, y), size (width, height), color, and velocity (vx, vy).
//The display method updates the position of the element based on its velocity and handles its drawing on the canvas.