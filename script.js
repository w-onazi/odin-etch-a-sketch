//UI Nodes
const gridContainer = document.querySelector(".grid");

//Global Variables
let gridSize = 16;
const gridTiles = [];
updateGrid(gridSize);

//Functions 
function updateGrid(gridSize){
    let tileSize=640/gridSize;

    for (let i=0; i<Math.pow(gridSize,2);i++){
        const div = document.createElement("div");
        div.classList.add('tiles');
        div.setAttribute("style",`flex:0 0 1;width:${tileSize}px;height:${tileSize}px;`);
        gridContainer.appendChild(div);
    }
    
}