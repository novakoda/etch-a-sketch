const gridCont = document.getElementById('gridCont');

function makeRows(rows, cols) {
  gridCont.style.setProperty('--grid-rows', rows);
  gridCont.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    cell.onmouseover = function(){
      cell.style.backgroundColor = 'black';
    };
    gridCont.appendChild(cell).className = "gridCell";
  };
};

makeRows(16, 16);

let gridCell = document.getElementByClassName('gridCell');

gridCell.onmouseover = function(){
  gridCell.style.backgroundColor = 'black';
};
