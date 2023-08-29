//UI Nodes
const gridContainer = document.querySelector(".grid");
const gridSizes = document.querySelector(".grid-sizes");

//Global Variables
let gridSize;
const penColor = "black";
updateGrid(16);
//EventListeners
gridSizes.addEventListener("change",updateGrid);


//Functions 
function updateGrid(e){
    clearGrid();
    if (typeof(e)==="number"){
        gridSize = e;
    }else{
        gridSize = parseInt(e.target.value);
    }
    const tileSize=640/gridSize;
    for (let i=0; i<Math.pow(gridSize,2);i++){
        const div = document.createElement("div");
        div.classList.add('tile');
        div.setAttribute("style",`flex:0 0 1;width:${tileSize}px;height:${tileSize}px;`);
        gridContainer.appendChild(div);
    } 
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.addEventListener("mousedown",drawOnTile);
        tile.addEventListener("mouseover",drawOnAdjacentTiles);
    });

}

function clearGrid(){
    if(gridContainer.hasChildNodes()){
        while(gridContainer.hasChildNodes()){
            gridContainer.firstChild.remove();
        };
    }

}

function drawOnTile(e){
    e.target.style.backgroundColor=penColor;
}

function drawOnAdjacentTiles(e){
    if (e.buttons===1){
        console.log(e);
        e.target.style.backgroundColor=penColor;
    }
}
