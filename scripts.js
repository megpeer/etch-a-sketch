
const drawingField = document.querySelector("#container");
let size;

function createGrid(size) {
    for (i = 0; i < size * size; i++){
        let pixel = document.createElement("div"); 
        drawingField.appendChild(pixel);
        pixel.style.height = ((400/size) + "px");
        pixel.style.width = ((400/size) + "px");
        pixel.className = "pixel";
        pixel.id = "inactive";
        pixel.onmouseover = function () {
        pixel.style.backgroundColor = "black";
        }
            
            
    }
};

let button = document.querySelector("#input") 
button.addEventListener("click", input);

function input() {
    let size = parseInt(prompt("input a number between 1 and 100"))
    container.innerHTML = "";
    
        if (size <= 100 || size > 0) {
            
            createGrid(size)

        }
        else 
            alert("please enter a number between 1-100")
   
    };

