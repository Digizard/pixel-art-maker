class Data {
  constructor() {
    this.colorPicker = document.getElementById('color-picker');
    this.sizePicker = document.getElementById('size-picker');
    this.inputHeight = document.getElementById('input-height');
    this.inputWidth = document.getElementById('input-width');
  }

  getSelectedColor() {
    return this.colorPicker.value;
  }

  getGridHeight() {
    return this.inputHeight.value;
  }

  getGridWidth() {
    return this.inputWidth.value;
  }
};

let data = new Data();

class View {

  constructor() {
    this.grid = document.getElementById('pixel-canvas');

    this.initListeners(this);
  }

  initListeners(self) {
    self.initGrid(self);
    self.initSubmit(self);
    self.initSizePicker(self);
  }

  initGrid(self) {
    this.grid.addEventListener('click', function (event) {
      let clickedElement = event.target;
      let cellElementName = 'TD';

      if (clickedElement.nodeName === cellElementName) {
        clickedElement.style.backgroundColor = data.getSelectedColor();
      }
    });
  }

  initSubmit(self) {
    self.submitSize = (event) => {
      self.makeGrid(data.getGridHeight(), data.getGridWidth());
      event.preventDefault();
      return false;
    };
  }

  initSizePicker(self) {
    data.sizePicker.addEventListener('submit', self.submitSize);
  }


  makeGrid(height, width) {
    this.clearTable();
    this.createTable(height, width);
  }

  clearTable() {
    removeAllChildNodes(this.grid);

    function removeAllChildNodes(element) {
      while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
      }
    }
  }

  createTable(numRows, numCols) {
    for (let row = 0; row < numRows; row++) {
      this.grid.appendChild(createRow(numCols));
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
};

let view = new View();