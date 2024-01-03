function printGrid() {
    let height = 32;
    let width = 32;
    const container = document.getElementById("container");
    const square = document.getElementById("square");


    let style = `
    flex: 1;
    aspect-ratio: 1 / 1;
    border: auto;
    backgrond-color: white;
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

function getRandomRGB() {
    nums = [];
    for (i = 0; i < 3; i++) {
        nums.push(Math.floor(Math.random() * 256));
    }
    return nums.toString();
}

const redMouseover = function () {
    this.style.backgroundColor = "#FF0000";
}

const blueMouseover = function () {
    this.style.backgroundColor = "#1500ff";
}

const greenMouseover = function () {
    this.style.backgroundColor = "#0ceb2d";
}

const randomRGBmouseover = function () {
    const randomRGB = getRandomRGB();
    this.style.backgroundColor = `rgb(${randomRGB})`;
}


// Button functionality 

function randomColor() {
    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.addEventListener("mouseover", randomRGBmouseover);
    })
}

function changeColorRed() {

    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.addEventListener("mouseover", redMouseover);
    })
}

function changeColorBlue() {
    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.addEventListener("mouseover", blueMouseover);
    })
}

function changeColorGreen() {
    const squares = document.querySelectorAll(".box");
    squares.forEach(square => {
        square.addEventListener("mouseover", greenMouseover);
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
        square.removeEventListener("mouseover", redMouseover);
        square.removeEventListener("mouseover", blueMouseover);
        square.removeEventListener("mouseover", greenMouseover);
        square.removeEventListener("mouseover", randomRGBmouseover);
    })
}

/// Buttons 

function redButton() {
    const redButton = document.getElementById('redBTN');
    redButton.addEventListener('click', function () {
        changeColorRed();
    });
}

function blueButton() {
    const blueButton = document.getElementById('blueBTN');
    blueButton.addEventListener('click', function () {
        changeColorBlue();
    })
}

function greenButton() {
    const blueButton = document.getElementById('greenBTN');
    blueButton.addEventListener('click', function () {
        changeColorGreen();
    })
}

function getFunkyButton() {
    const funkyButton = document.getElementById("randomBTN");
    funkyButton.addEventListener("click", function () {
        randomColor();
    })
}


function clearFieldButton() {
    const clearFieldButton = document.getElementById('clearBTN');
    clearFieldButton.addEventListener('click', function () {
        removeColorChange();
        clearField();
    })
}



printGrid();
redButton();
blueButton();
greenButton();
clearFieldButton();
getFunkyButton();
