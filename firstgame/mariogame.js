let currMole;
let currPlant;

window.onload = function() {
    setStart();
}

function setStart() {
    for(let i = 0; i < 9; i ++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("gamearea").appendChild(tile);
    }
    setInterval(moveMole, 1000)
    setInterval(movePlant, 2000)
}
function randomTiles(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function moveMole(){
    if (currMole){
        currMole.innerHTML = ''
    }
    let mole = document.createElement("img");
    mole.src = "./mole.png";

    let num = randomTiles();
    if (currPlant && currPlant.id == num){
        return
    }
    currMole = document.getElementById(num);
    currMole.appendChild(mole);
}

function movePlant(){
    if (currPlant){
        currPlant.innerHTML = ""
    }

    let plant = document.createElement("img");
    plant.src = "./plant.png";

    let num = randomTiles();
    if (currMole && currMole.id == num){
        return
    }
    currPlant = document.getElementById(num);
    currPlant.appendChild(plant);
}