let colorPicker = document.getElementById('color-picker');
function getSelectedColor() {
  return colorPicker.value;
}

let grid = document.getElementById('pixel-canvas');
grid.addEventListener('click', function (event) {
  let clickedElement = event.target;
  let cellElementName = 'TD';

  if (clickedElement.nodeName === cellElementName) {
    clickedElement.style.backgroundColor = getSelectedColor();
  }
});


let sizePicker = document.getElementById('size-picker');

sizePicker.addEventListener('submit', submitSize);

let inputHeight = document.getElementById('input-height'),
    inputWidth = document.getElementById('input-width');

function getGridHeight() {
  return inputHeight.value;
}

function getGridWidth() {
  return inputWidth.value;
}

function submitSize(event) {
  makeGrid(getGridHeight(), getGridWidth());
  event.preventDefault();
  return false;
}

function makeGrid(height, width) {
  clearTable();
  createTable(height, width);
}

function clearTable() {
  removeAllChildNodes(grid);

  function removeAllChildNodes(element) {
    while (element.hasChildNodes()) {
      grid.removeChild(element.lastChild);
    }
  }
}

function createTable(numRows, numCols) {
  for (let row = 0; row < numRows; row++) {
    grid.appendChild(createRow(numCols));
  }

  function createRow(numCols) {
    let row = document.createElement('tr');

    for (let col = 0; col < numCols; col++) {
      row.appendChild(createColumn());
    }

    return row;
  }

  function createColumn() {
    let cell = document.createElement('td');
    return cell;
  }
}