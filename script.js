const gridCont = document.getElementById('gridCont');
const newGridBtn = document.getElementById('newGridBtn');
let aGrid = false;

function makeRows(sideLength) {
  deleteGrid();
  gridCont.style.setProperty('--grid-rows', sideLength);
  gridCont.style.setProperty('--grid-cols', sideLength);
  for (i = 0; i < (sideLength * sideLength); i++) {
    let cell = document.createElement("div");
    cell.onmouseover = function(){
      cell.style.backgroundColor = 'black';
    };
    gridCont.appendChild(cell).className = "gridCell";
  };
};

function clearGrid() {
  for(i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "#DDD";
  }
};

function deleteGrid() {
    document.querySelectorAll(".gridCell").forEach((gridCell) => gridCell.remove());
}

makeRows(11);
aGrid = true;

let cells = document.getElementsByClassName("gridCell");

newGridBtn.addEventListener("click", function() {
    clearGrid();

    let count = prompt('How many rows & columns do you want?', '16');

    makeRows(count);
    aGrid = true;
  }
);

// also tried this but it didn't work
// document.getElementById("newGridBtn").onclick = clearGrid;
