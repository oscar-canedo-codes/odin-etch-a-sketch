/* Step 1: Create 16 x 16 grid */

    // FUNCTION: createGrid creates div elements
    //     PARAMETER: a and b values representing squares in rows and columns
    // INITIALIZE: value in variable
    //     FORMULA: Area = a times b
    //     RETURN: value for square area

    //     DOM MANIPULATION: 
    //         APPEND: div element to container div 
    //     ARGUMENTS: (16, 16)


/* Step 2: Use flexbox to make divs appear as a grid */

// CSS TEST 
    // OUTLINE 16 x 16 grid with individual cells

/* #container {
  max-width: 960px;
}

.row {
  display: flex;
}

.square {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  margin: 4px;
  padding: 0.75rem;
  border: 1px solid purple;
}

.square:before {
  content: '';
  float: left;
  padding-top: 100%;
} */


/* Step 3:Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. 

    Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
    There are multiple ways to change the color of the divs, including:
        Adding a new class to the div.
        Changing the div’s background color using JavaScript. */

// FUNCTION: changeColor of cell 
    // PARAMETER: cell location (event.value) passed through callback
    // LOGIC: 
        // CALLBACK argument of event.value
        // LOOP: over all classes of selectedDiv
        // DOM MANIPULATION: 
            // IF ACTIVE:
                // CHANGE CSS background color of select cell
                // APPEND to div element 
            // IF ELSE:
                // REMOVE from div element

// ADD EVENT LISTENER: to FUNCTION: 
    // TRIGGER upon hover over cell
    // STORE value from event (event.value)
    // SET attribute class of selected DIV
    // CALLBACK FUNCTION: changeColor with (event.value) argument


/* Step 4:

Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

    Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
    Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    Also check out prompts.
    You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
*/

// SET HTML button that PROMPTS user for number input

 // ADD EVENT LISTENER to button
    // PARAMETER (squareArea, newCellValue)
        // CONDITION limit newCellValue < 100
    // DELETE value for square area
        // TRIGGER function createGrid
    // TEST numeric values over 100, positive values only, round to nearest whole number

/* Step 5: 

Extra credit

Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

    1. Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
    
    2. Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.
       
    Hint: The opacity CSS property is useful here. 


    1. FUNCTION: randomRainbow
        // RANDOM math.random
        // PLACE within scope of hover event 

    2. 
*/