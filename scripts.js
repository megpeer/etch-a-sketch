// query selector container
const drawingField = document.querySelector("#container");

// create div with id "pixel"
let pixel = document.createElement("div");
pixel.className = "pixel";

//append pixel to container (might need to use a for loop to make 16x16 divs)
// for (let i = 0; i = 16; i++)
drawingField.appendChild(pixel);

