// Declare Global Variables
var column = 3; // Change this to change number of columns in the grid
var row = 3; // Change this to change number of rows in the grid
var squareSize = 100; // Change this to change the size of grid squares

// Declare variables here
let rotationX = 65;
let rotationY = 0;
let rotationZ = 45;

// Declare constant variables here
const containerElement = document.querySelector(".container");

// Event Listeners
window.addEventListener("keydown", function (event) {
  if (event.code === "KeyE") {
    rotationZ += 45;
    containerElement.style.transform = `
      rotateX(${rotationX}deg) 
      rotateZ(${rotationZ}deg)
    `;
  } else if (event.code === "KeyQ") {
    rotationZ -= 45;
    containerElement.style.transform = `
      rotateX(${rotationX}deg) 
      rotateZ(${rotationZ}deg)
    `;
  } else if (event.code === "KeyW") {
    // Future use
  } else if (event.code === "KeyA") {
    // Future use
  } else if (event.code === "KeyS") {
    // Future use
  } else if (event.code === "KeyD") {
    // Future use
  }
});

// Create/populate grid into the container
for (let i = 0; i < column; ++i) {
  const col = document.createElement("div");
  col.className = "column";

  for (let j = 0; j < row; ++j) {
    const ro = document.createElement("div");
    ro.classList.add("square");

    ro.style.width = `${squareSize}px`;
    ro.style.height = `${squareSize}px`;

    col.appendChild(ro);
    console.log(`Column: ${i} | Row: ${j}`);
  }

  containerElement.appendChild(col);
}

// gridSize is the size of each grid, multiplied by the number of columns
// and rows dynamically. The 6 multiplied by column and row is to make space
// for padding, margins and borders
//
// Set the width and height for container for border shenanigans
containerElement.style.width = `${squareSize * column + 6 * column}px`;
containerElement.style.height = `${squareSize * row + 6 * row}px`;
