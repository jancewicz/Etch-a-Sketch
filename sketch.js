function printGrid() {
    let height = 16;
    let width = 16;
    const container = document.getElementById("container");
    const square = document.getElementById("square");


    let style = `
    display: flex;
    height: 30px;
    width: 30px;
    border: auto;
    background-color: white;
    border-style: solid;
    border-color: black;
`;

    for (let i = 0; i < height; i++) {
        let row = document.createElement("div");
        row.id = "row" + i;
        row.style.cssText = "display: flex;"
        for (let j = 0; j < width; j++) {
            let clone = square.cloneNode(true);
            clone.idd = "clone" + i + "-" + j;
            clone.style.cssText = style;
            row.appendChild(clone)

        }
        container.appendChild(row);
    }
}

const mouseover = function () {
    this.style.backgroundColor = "#FF0000";
}

function changeColor() {

    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.addEventListener("mouseover", mouseover);
    })
}

function clearField() {
    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.style.backgroundColor = "#FFFAF0";
    });

}

function removeColorChange() {
    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.removeEventListener("mouseover", mouseover)
    })
}

function clearFieldButton() {
    const clearFieldButton = document.getElementById('clearBTN');
    clearFieldButton.addEventListener('click', function () {
        removeColorChange();
        clearField();
    })
}

function redButton() {
    const redButton = document.getElementById('colorBTN');
    redButton.addEventListener('click', function () {
        changeColor();
    });
}

printGrid();
redButton();
clearFieldButton();