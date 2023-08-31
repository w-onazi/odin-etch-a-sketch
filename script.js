//UI Nodes
const gridContainer = document.querySelector(".grid");
const gridSizes = document.querySelector(".grid-sizes");
const clearBtn = document.querySelector(".controls.container");
const gridBtn = document.querySelector(".slider.round");
const eraseBtn = document.querySelector("#eraseBtn");
const colorPicker = document.querySelector("#color-selector");

//Global Variables
let gridSize;
let penColor = "black";
updateGrid(16);
//EventListeners
gridSizes.addEventListener("change",updateGrid);
window.addEventListener("dragstart",cancelDrag);
clearBtn.addEventListener("click",clearGrid);
gridBtn.addEventListener("click",displayGridLines);
eraseBtn.addEventListener("click",activateEraser);
colorPicker.addEventListener("input",updatePenColor);


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
        div.setAttribute("id",'tile');
        div.setAttribute("style",`flex:0 0 1;width:${tileSize}px;height:${tileSize}px;`);
        gridContainer.appendChild(div);
    } 
    
    const tiles = document.querySelectorAll("#tile");
    tiles.forEach(tile => {
        tile.addEventListener("mousedown",drawOnTile);
        tile.addEventListener("mouseenter",drawOnAdjacentTiles);
        if (gridBtn.classList.value==="slider round on"){
            tile.classList.toggle("active");
        };
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
    if (e.target.id==="tile"){
        e.preventDefault();//This prevent the drag event from starting when it's triggered
        console.log(e.target.id.value);
    }
}


function clearGrid(e){
    if (e.target.value =="clearBtn"){
        const tiles = document.querySelectorAll("#tile");
        tiles.forEach((tile)=>{
        tile.style.backgroundColor="white";
        });
    }
}

function drawOnTile(e){
    if (e.target.style.backgroundColor===penColor){
        return;
    }else{
        e.target.style.backgroundColor=penColor;
    }
}

function drawOnAdjacentTiles(e){
    if (e.buttons>0){
        e.target.style.backgroundColor=penColor;
    }
}

function selectTiles(){
    const tiles = document.querySelectorAll("#tile");
    return tiles;
}

function displayGridLines(e){
    e.target.classList.toggle("on");
    const tiles = document.querySelectorAll("#tile");
    tiles.forEach((tile)=>{
        tile.classList.toggle("active");
    });
}

function activateEraser(e){
    eraseBtn.classList.toggle("erase");
    if (eraseBtn.classList.value ==="erase"){
        penColor = "white";
        console.log(colorPicker.value);
    }else{
        penColor=colorPicker.value;
    }
}

function updatePenColor(e=""){
    if (eraseBtn.classList.value ==="erase"){
        eraseBtn.classList.toggle("erase");
    }
    penColor =e.target.value;
}