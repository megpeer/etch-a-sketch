
const drawingField = document.querySelector("#container");
let pixel;
let size = 20;

function createGrid() {
    for (i = 0; i < size * size; i++){
        let pixel = document.createElement("div");
        pixel.style.height = `calc(100%/${size})`;
        pixel.style.width = `calc(100%/${size})`;
        pixel.className = "pixel";
        pixel.id = "inactive";
        drawingField.appendChild(pixel);
        pixel.onmouseover = function () {
        pixel.style.backgroundColor = "black";
        }
            
            
    }
};

// button creates alert, that changes amount of pixels appearing int he container, and what size
let button = document.querySelector("#input") 
button.addEventListener("click", input);

function input() {
    let size = prompt("input pixel size", "10") 
    
        if (size > 100 || size === 0) {
            alert("must be between 1-100")
        }
        else {
            createGrid() 
        }
    };

