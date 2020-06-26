//Run startUp() functin once page is loaded
window.onload = function () {
  startUp();
};

//create a functional reset button and create a default 16x16 board
function startUp() {
  let minBody = document.querySelector("body");
  let resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", clear);
  minBody.appendChild(resetButton);
  createBoard(16, 16);
}

//hover and unhover on the grid
function func(e) {
  this.style.background = "White";
}
/*
function func1(e) {
  this.style.background = "Black";
}
*/

//Create a board of divs based on row and column parameters
function createBoard(row, col) {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainGrid");

  for (let i = 0; i < row; i++) {
    const rowDiv = document.createElement("div"); //create a row div
    for (let j = 0; j < col; j++) {
      const colDiv = document.createElement("div"); //create a col div
      colDiv.style.background = "Black";
      colDiv.style.width = "10px";
      colDiv.style.height = "10px";
      colDiv.addEventListener("mouseover", func, false);
      //colDiv.addEventListener("mouseout", func1, false);
      rowDiv.appendChild(colDiv); //append to the row div.
    }
    rowDiv.style.display = "Flex";
    mainDiv.appendChild(rowDiv); //append the row With columns to mainDiv
  }
  const body = document.querySelector("body");
  body.appendChild(mainDiv);
}

//reset whole grid and ask user new dimension of board
function clear() {
  const mainDiv = document.querySelector("#mainGrid");
  mainDiv.remove();
  createBoard(prompt("Rows?"), prompt("Cols?"));
}
