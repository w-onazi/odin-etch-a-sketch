//UI Nodes
const gridContainer = document.querySelector(".grid");
const gridSizes = document.querySelector(".grid-sizes");

//Global Variables


//EventListeners
gridSizes.addEventListener("change",updateGrid);

//Functions 
function updateGrid(e){
    clearGrid();
    const gridTiles = [];
    const gridSize = parseInt(e.target.value);
    const tileSize=640/gridSize;

    for (let i=0; i<Math.pow(gridSize,2);i++){
        const div = document.createElement("div");
        div.classList.add('tiles');
        div.setAttribute("style",`flex:0 0 1;width:${tileSize}px;height:${tileSize}px;`);
        gridContainer.appendChild(div);
    } 
}

function clearGrid(){
    if(gridContainer.hasChildNodes()){
        while(gridContainer.hasChildNodes()){
            gridContainer.firstChild.remove();
        };
    }

}

