
// query selector container
const drawingField = document.querySelector("#container");

//temporary grid size
let gridSize = 256;

// create div with id "pixel"
//append pixel to container (might need to use a for loop to make 16x16 divs)
for (i = 0; i < gridSize; i++){
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.id = "inactive";
    drawingField.appendChild(pixel);
    pixel.onmouseover = function () {
    pixel.style.backgroundColor = "black";
    }
        
        
}

// on mouseover, change pixel div id from "inactive" to "active"

document.querySelector(".pixel")
