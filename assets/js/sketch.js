let tawafSketch = null;
let saiSketch = null;
let intentionSketch = null;

let tawafSketchCount = 0;
let saiSketchCount = 0;
let intentionSketchCount = 0;

let tawafSketchbool = false;
let saiSketchbool = false;
let intentionSketchbool = false;

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function loadTawafSketch() {
    tawafSketch = new p5(function(tawafSketch) {
      // Tawaf sketch code here
      // tawaf.js
    let angle = 10;
    let rotationSpeed = -0.02;
    let rotating = false;
    let rotateButton;
    let resetButton;
  
    tawafSketch.setup = function() {
      // let canvas;
      // canvas = tawafSketch.createCanvas(400, 400);
      // canvas.parent('tawaf_canvas');

      let canvas;
      // Adjust canvas size based on screen width
      const canvasSize = Math.min(screenWidth, 300); // Set the maximum canvas size to 80% of the screen width or 300px, whichever is smaller
      canvas = tawafSketch.createCanvas(canvasSize, canvasSize);
      canvas.parent('tawaf_canvas');
      console.log(canvasSize);
      console.log(screenWidth);
  
      rotateButton = tawafSketch.createButton('Start Tawaf');
      rotateButton.class('rotate-button btn');
      rotateButton.mousePressed(startRotation);
  
      resetButton = tawafSketch.createButton('Reset');
      resetButton.class('reset-button btn');
      resetButton.mousePressed(resetCharacter);
  
      // Get the tawaf_canvas div element
      const tawafCanvas = document.getElementById('tawaf_buttons');
  
      // Append the buttons to the tawaf_canvas div
      tawafCanvas.appendChild(rotateButton.elt);
      tawafCanvas.appendChild(resetButton.elt);
    };
  
    tawafSketch.draw = function() {
      tawafSketch.background(220);
      tawafSketch.noStroke();
  
      // Draw the Kaaba
      tawafSketch.fill(0);
      tawafSketch.rectMode(tawafSketch.CENTER);
      tawafSketch.rect(tawafSketch.width / 2, tawafSketch.height / 2, 75, 75);
  
      // Calculate the position of the character
      let radius = 125;
      let x = tawafSketch.width / 2 + radius * tawafSketch.cos(angle + tawafSketch.PI - 2.8);
      let y = tawafSketch.height / 2 + radius * tawafSketch.sin(angle + tawafSketch.PI + 1 / 4);
  
      // Draw the character
      tawafSketch.fill(255);
      tawafSketch.ellipse(x, y, 20, 20);
  
      // Draw the fixed white circle at the bottom left corner
      let rectWidth = 75;
      let rectHeight = 75;
      let circleSize = 10;
      let circleX = tawafSketch.width / 2 - rectWidth / 2;
      let circleY = tawafSketch.height / 2 + rectHeight / 2;
  
      tawafSketch.fill(255);
      tawafSketch.noStroke();
      tawafSketch.ellipse(circleX, circleY, circleSize, circleSize);
  
      // Draw the square representing Maqam Ibrahim
      let maqamSize = 15;
      let maqamX = tawafSketch.width / 1.81;
      let maqamY = tawafSketch.height / 2 + rectHeight / 2 + maqamSize + 10;
  
      tawafSketch.fill(255, 215, 0); // RGB values for gold
      tawafSketch.stroke(0);
      tawafSketch.strokeWeight(2);
      tawafSketch.rectMode(tawafSketch.CENTER);
      let cornerRadius = 5; // Adjust the corner radius as needed
      tawafSketch.rect(maqamX, maqamY, maqamSize, maqamSize, cornerRadius);
  
      // Calculate the diameter of the semicircle
      let semicircleDiameter = rectWidth;
  
      // Calculate the position of the semicircle
      let semicircleX = tawafSketch.width / 2 + 37.5;
      let semicircleY = tawafSketch.height / 2;
  
      // Set the stroke and no fill
      tawafSketch.noFill();
      tawafSketch.stroke(255); // Gray color, you can adjust the value as needed
  
      // Draw the outlined semicircle
      tawafSketch.arc(semicircleX, semicircleY, semicircleDiameter, semicircleDiameter, 3 * tawafSketch.PI / 2, tawafSketch.PI / 2);
  
      // Draw green lights of Hajr al-Aswad indication
      tawafSketch.fill(0, 255, 0);
      tawafSketch.stroke(100, 200, 100);
      tawafSketch.ellipse(0, 300, 75, 75);
  
      if (rotating) {
        angle -= rotationSpeed;
        rotateButton.html('Stop Tawaf');
      } else {
        rotateButton.html('Start Tawaf');
      }
    };
  
    function startRotation() {
      rotating = !rotating; // Toggle the rotating variable
    }
  
    function resetCharacter() {
      angle = 10;
      rotating = false;
      rotateButton.html('Start Tawaf');
    }
  });
    };

// Load Sai Sketch
function loadSaiSketch() {
    saiSketch = new p5(function(saiSketch) {
      // Sai sketch code here
        let character;
        let safahill;
        let marwahill;
        let characterPosition;
        let direction;
      
        saiSketch.setup = function() {
          let saiCanvas;
          const canvasSize = Math.min(screenWidth, 300); // Set the maximum canvas size to 80% of the screen width or 300px, whichever is smaller
          // let saiCanvas = saiSketch.createCanvas(400, 400);
          // saiCanvas.parent('sai_canvas');
          saiCanvas = saiSketch.createCanvas(canvasSize, canvasSize);
      // Adjust canvas size based on screen width
      saiCanvas.parent('sai_canvas');
      
          // Set up the hills
          marwahill = new Hill(0, 0, "Marwa");
          safahill = new Hill(0, 250, "Safa");
      
          // Set up the character
          character = new Character();
      
          // Set initial character position
          characterPosition = saiSketch.createVector(safahill.x + 225, safahill.y);
      
          // Set initial direction
          direction = 1;
        };
      
        saiSketch.draw = function() {
          saiSketch.background(220);
      
          // Draw the hills
          safahill.display();
          marwahill.display();
      
          // Draw the character
          character.display();
      
          // Draw the partition
          saiSketch.fill(0);
          saiSketch.rect(145, 50, 10, 200);
      
          // Draw the green shade
          saiSketch.fill(0, 255, 0, 50);
          saiSketch.noStroke();
          saiSketch.rect(0, 150, 300, 60);
      
          if (characterPosition.y <= 210 && characterPosition.y >= 150){
            if (direction === 1) {
                characterPosition.y -= 1.75;
            }
            
            if (direction === -1) {
                characterPosition.y += 1.75;
            }
          }
    
          // Move the character
          if (direction === 1) {
            characterPosition.y -= 1.5;
            if (characterPosition.y <= marwahill.y) {
              direction = -1;
              characterPosition.x = 75;
            }
          } else if (direction === -1) {
            characterPosition.y += 1.5;
            if (characterPosition.y >= safahill.y + 50) {
              direction = 1;
              characterPosition.x = 225;
            }
          }
      
          // Update character position
          character.setPosition(characterPosition);
        };
      
        class Hill {
          constructor(x, y, name) {
            this.x = x;
            this.y = y;
            this.name = name;
          }
      
          display() {
            // Draw the hill
            saiSketch.fill(150);
            saiSketch.stroke(0);
            saiSketch.rect(this.x, this.y, 300, 50);
      
            // Draw the hill's name
            saiSketch.textAlign(saiSketch.CENTER, saiSketch.CENTER);
            saiSketch.noStroke();
            saiSketch.fill(0);
            saiSketch.text(this.name, this.x + 150, this.y + 25);
          }
        }
      
        class Character {
          constructor() {
            this.position = saiSketch.createVector(0, 0);
          }
      
          display() {
            // Draw the character as a small circular white shape
            saiSketch.fill(255);
            saiSketch.stroke(0);
            //console.log(this.position.x, this.position.y);
            saiSketch.ellipse(this.position.x, this.position.y, 20, 20);
          }
      
          setPosition(position) {
            this.position = position;
          }
        }
      }); 
    }
  
// Load Intention Sketch
function loadIntentionSketch() {
    intentionSketch = new p5(function(intentionSketch) {
      // Intention sketch code here
      // intention.js
    let airplane; // Variable to hold the airplane image
    let airplaneX = 0; // Initial x position of the airplane
    let seatX = 100; // Initial x position of the seat
    let seatY = 150; // Initial y position of the seat
  
    intentionSketch.preload = function() {
      airplane = intentionSketch.loadImage('https://raw.githubusercontent.com/alexlyul/airplane-game/master/sprites/airplane.png'); // Load the airplane image from URL
    };
  
    intentionSketch.setup = function() {
      let intentCanvas = intentionSketch.createCanvas(300, 300);
      intentCanvas.parent('intent_canvas');

      // let intentCanvas = intentionSketch.createCanvas(300, 300);
      // // Adjust canvas size based on screen width
      // const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      // const canvasSize = Math.min(screenWidth * 0.8, 300); // Set the maximum canvas size to 80% of the screen width or 300px, whichever is smaller
      // intentCanvas.size(canvasSize, canvasSize);
      // intentCanvas.parent('intent_canvas');
    };
  
    intentionSketch.draw = function() {
      intentionSketch.background(220);
  
      // Translate to the center of the airplane image
      intentionSketch.translate(airplaneX + 100, 200);
  
      // Rotate the airplane image by 180 degrees
      intentionSketch.rotate(intentionSketch.PI);
  
      // Draw the airplane image
      intentionSketch.image(airplane, -100, -100, 200, 200);
  
      // Reset the transformations
      intentionSketch.resetMatrix();
  
      // Update the position of the airplane and the seat
      airplaneX += 1;
      seatX += 1;
  
      // Reset the positions when they go off the screen
      if (airplaneX > intentionSketch.width) {
        airplaneX = -300;
        seatX = -200;
      }
  
      // Display the announcement text
      intentionSketch.textSize(20);
      intentionSketch.fill(0);
      intentionSketch.text("Announcement!!", 20, 30);
      intentionSketch.text("We are flying from Meeqat.", 20, 50);
      intentionSketch.text("Make Intention for Umrah now.", 20, 80);
    };
  });
    };


  // Function to unload all sketches
function unloadSketches() {
    if(intentionSketchbool){
        if(tawafSketch){
            tawafSketch.remove();
        }
        if(saiSketch){
            saiSketch.remove();
        }    
    }

    if(tawafSketchbool){
        if(intentionSketch){
            intentionSketch.remove();
        }
        if(saiSketch){
            saiSketch.remove();
        }    
    }

    if(saiSketchbool){
        if(intentionSketch){
            intentionSketch.remove();
        }
        if(tawafSketch){
            tawafSketch.remove();
        }    
    }

  }
  
  // Start Tawaf Button Clicked
  function startTawaf() {
    tawafSketchCount++;
    console.log(tawafSketchCount);
    tawafSketchbool = true;
    saiSketchbool = false;
    intentionSketchbool = false;
    document.getElementById('start_tawaf_button').disabled = true;
    document.getElementById('start_sai_button').disabled = false;
    document.getElementById('start_intention_button').disabled = false;
    unloadSketches();
    loadTawafSketch();
  }
  
  // Start Sai Button Clicked
  function startSai() {
    saiSketchCount++;
    saiSketchbool = true;
    tawafSketchbool = false;
    intentionSketchbool = false;
    document.getElementById('start_sai_button').disabled = true;
    document.getElementById('start_tawaf_button').disabled = false;
    document.getElementById('start_intention_button').disabled = false;
    unloadSketches();
    loadSaiSketch();
  }
  
  function startIntention() {
    intentionSketchCount++;
    saiSketchbool = false;
    tawafSketchbool = false;
    intentionSketchbool = true;
    document.getElementById('start_sai_button').disabled = false;
    document.getElementById('start_tawaf_button').disabled = false;
    document.getElementById('start_intention_button').disabled = true;
    unloadSketches();
    loadIntentionSketch();
  }

  // DOM Loaded Event
  document.addEventListener('DOMContentLoaded', function() {
    startIntention();
    document.getElementById('start_intention_button').disabled = true;
    // Attach event listeners to buttons

    const startIntentionButton = document.getElementById('start_intention_button');        
    const startTawafButton = document.getElementById('start_tawaf_button');    
    const startSaiButton = document.getElementById('start_sai_button');

    startIntentionButton.addEventListener('click', startIntention);
    startTawafButton.addEventListener('click', startTawaf);
    startSaiButton.addEventListener('click', startSai);
});