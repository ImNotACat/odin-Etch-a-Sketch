// get element from page
let body = document.getElementById("sketch");
console.log("sketch");

// create the rows - add 16x for loop
for (let i =0; i < 30; i++) {
    var row = document.createElement("div");
    console.log(row);
    row.className = "row";
    row.id = "row" + i;
    
    // create the squares - add 16x for loop
    for (let j = 0; j < 30; j++){
        var square = document.createElement("div");
        square.className = "square";
        square.id = "square" + j;
        row.append(square);
    }

    // append divs to DOM
    body.append(row);
}

let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", func, false);
})


function func() {
    this.setAttribute("style", "background-color: #7689de")
}
