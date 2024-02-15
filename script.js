var column = 3, // Change this to change number of columns in the grid
  row = 3, // Change this to change number of rows in the grid
  squareSize = 100, // Change this to change the size of grid squares
  containerElement = document.querySelector(".container");

let rotationX = 65,
  rotationY = 0,
  rotationZ = 45;

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

const rowElement = document.querySelector(".square");

// gridSize is the size of each grid, multiplied by the number of columns
// and rows dynamically. The 6 multiplied by column and row is to make space
// for padding, margins and borders
containerElement.style.width = `${squareSize * column + 6 * column}px`;
containerElement.style.height = `${squareSize * row + 6 * row}px`;
