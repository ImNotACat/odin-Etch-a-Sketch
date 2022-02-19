const STANDARD_SIZE = 20;

// get element from page
let body = document.getElementById("sketch");

function createGrid() {
    let size = window.prompt("What is the size of your grid? 1-100");
    if (isNaN(size) || size < 1 || size > 100) {
        size = 100;
    }
    
// create the rows - add 16x for loop
    for (let i =0; i < size; i++) {
        var row = document.createElement("div");
        console.log(row);
        row.className = "row";
        row.id = "row";
        
        // create the squares - add 16x for loop
        for (let j = 0; j < size; j++){
            var square = document.createElement("div");
            square.className = "square";
            square.id = "square";
            row.append(square);
        }

        // append divs to DOM
        body.append(row);

    }
}

function func() {
    this.setAttribute("style", "background-color: #7689de");
}

window.onload = createGrid();

let squares = document.querySelectorAll(".square");
console.log(squares);

squares.forEach((square) => {
    square.addEventListener("mouseover", func, false);
})