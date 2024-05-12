
let gridSize = 256;
// query selector container
const drawingField = document.querySelector("#container");

// create div with id "pixel"
//append pixel to container (might need to use a for loop to make 16x16 divs)
for (i = 0; i < gridSize; i++){
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    drawingField.appendChild(pixel);

}

