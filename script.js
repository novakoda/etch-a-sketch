const gridCont = document.getElementById('gridCont');
const newGridBtn = document.getElementById('newGridBtn');

const randomBtn = document.getElementById('randomBtn');
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const yellowBtn = document.getElementById('yellowBtn');
const greenBtn = document.getElementById('greenBtn');
const purpleBtn = document.getElementById('purpleBtn');
const blackBtn = document.getElementById('blackBtn');

let aGrid = false;
let mouseDown = false;
let color = '#000';

function makeRows(sideLength) {
  deleteGrid();
  const gridArea = gridCont.scrollWidth;
  gridCont.style.setProperty('--grid-rows', sideLength);
  gridCont.style.setProperty('--grid-cols', sideLength);
  for (i = 0; i < (sideLength * sideLength); i++) {
    let cell = document.createElement("div");
    cell.style.height = `${gridArea / sideLength}px`;
    cell.style.width = `${gridArea / sideLength}px`;
    cell.onmouseover = function(){
      cell.style.backgroundColor = color;
    };
    gridCont.appendChild(cell).className = "gridCell";
  };
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  };
  return color;
};

function clearGrid() {
  for(i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "#FFF";
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

randomBtn.addEventListener("click", function() {
    color = getRandomColor();
  }
);

redBtn.addEventListener("click", function() {
    color = 'red';
  }
);

blueBtn.addEventListener("click", function() {
    color = 'blue';
  }
);

yellowBtn.addEventListener("click", function() {
    color = 'yellow';
  }
);

greenBtn.addEventListener("click", function() {
    color = 'green';
  }
);

purpleBtn.addEventListener("click", function() {
    color = 'purple';
  }
);

blackBtn.addEventListener("click", function() {
    color = 'black';
  }
);


// also tried this but it didn't work
// document.getElementById("newGridBtn").onclick = clearGrid;
