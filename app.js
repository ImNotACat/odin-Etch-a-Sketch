// get element from page
let body = document.getElementById("main");
console.log("body");

//let main = document.createElement()

// create the rows - add 16x for loop
for (let i =0; i < 30; i++) {
    // console.log("i is " + i);
    var row = document.createElement("div");
    console.log(row);
    row.className = "row";
    row.id = "row" + i;
    
    // create the squares - add 16x for loop
    for (let j = 0; j < 30; j++){
        // console.log("j is " + j);
        var square = document.createElement("div");
        square.className = "square";
        square.id = "square" + j;
        row.append(square);
    }

    body.append(row);
}

let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", func, false);
})


function func() {
    this.setAttribute("style", "background-color:darkslategray;")
}
// append divs to DOM