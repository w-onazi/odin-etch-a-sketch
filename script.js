//UI Nodes
const gridContainer = document.querySelector(".grid");
const gridSizes = document.querySelector(".grid-sizes");
const clearBtn = document.querySelector(".controls.container");

//Global Variables
let gridSize;
const penColor = "black";
updateGrid(16);
//EventListeners
gridSizes.addEventListener("change",updateGrid);
window.addEventListener("dragstart",cancelDrag);
clearBtn.addEventListener("click",clearGrid);


//Functions 
function updateGrid(e){
    deleteChildElements();
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
        tile.addEventListener("mouseenter",drawOnAdjacentTiles);
    });

}

function deleteChildElements(){
    if(gridContainer.hasChildNodes()){
        while(gridContainer.hasChildNodes()){
            gridContainer.firstChild.remove();
        };
    }
}

//This function was introduced due to drag event initiating when filled tiles are clicked
function cancelDrag(e){
    if (e.target.classList.value==="tile"){
        e.preventDefault();//This prevent the drag event from starting when it's triggered
    }
}


function clearGrid(e){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile)=>{
        tile.style.backgroundColor="white";
    });
}

function drawOnTile(e){
    if (e.target.style.backgroundColor===penColor){
        return;
    }else{
        e.target.style.backgroundColor=penColor;
    }
    console.log(e);
}

function drawOnAdjacentTiles(e){
    if (e.buttons>0){
        e.target.style.backgroundColor=penColor;
    }
}
