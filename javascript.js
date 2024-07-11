// SELECT the container
const container = document.querySelector("#container");

/* Step 1: Create 16 x 16 grid */

// FUNCTION: create the grid

const createGrid = (cellsPerSide) => {
  // CALCULATE the square area of the grid
  const totalSquares = cellsPerSide ** 2;
  console.log(totalSquares);

  // CLEAR existing content in the container for dynamic resizing or resets
  container.innerHTML = "";

  // LOOP to create the specified number ofdiv elements
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  /* Step 3:Set up a “hover” effect so that the grid divs change color when your mouse passes over them */

  // SELECT all squares and ADD hover effect
  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "cornflowerblue";
    });
  });
};

// INITIALIZE the grid with 16x16x cells
createGrid(16);

/* Step 4:

Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

    Tip: Set the limit for the user input to a maximum of 100.
    You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
*/

// FUNCTION: reset current grid and call createGrid with new input value
const resetGrid = () => {
  // SELECT button element and STORE in variable
  const button = document.querySelector("#reset");

  button.addEventListener("click", () => {
    // PROMPT user for new size
    let newCellValue = prompt(`Select new grid size`);

    // CHECK if the new value exceeds 100
    if (newCellValue > 100) {
      alert(`Please select value of 100 or less`);
    } else {
      createGrid(newCellValue);
    }
  });
};

resetGrid();

// button.value = newCellValue;
/* Step 5: 

Extra credit

Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

    1. Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
    
    2. Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
       
    Hint: The opacity CSS property is useful here. 


    1. FUNCTION: randomRainbow
        // RANDOM math.random
        // SET background color of cell

    2. FUNCTION: darkencell
        // PARAMETER cell
        // INCREMENT darkening level by 10%
        // SET background color of cell with new darkening level
*/
