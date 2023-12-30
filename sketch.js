function printGrid() {
    let height = 16;
    let width = 16;
    const container = document.getElementById("container");
    const square = document.getElementById("square");


    let style = `
    display: flex;
    height: 50px;
    width: 50px;
    border: auto;
    background-color: black;
    border-style: solid;
    border-color: violet;
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


printGrid();