let currMole;
let currPlant;
let score = 0;
let gameOver = false

window.onload = function() {
    setStart();
}

function setStart() {
    for(let i = 0; i < 9; i ++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", clickedTile);
        document.getElementById("gamearea").appendChild(tile);
    }
    setInterval(moveMole, 1000)
    setInterval(movePlant, 2000)
}
function randomTiles(){
    let num = Math.floor(Math.random()*9)
    return num.toString();
}

function moveMole(){
    if (gameOver){
        return;
    }
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
    if (gameOver){
        return;
    }
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

function clickedTile(){
    if (gameOver){
        return;
    }
      if (this == currMole){
        score += 5;
        document.getElementById("score").innerText = "Score: " + score.toString();
        document.getElementById("goodSound").play();
    }
    else if(this == currPlant){
        document.getElementById("score").innerText = "GAME OVER! " + "Final Score: " + score.toString();
        document.getElementById("badSound").play();
        gameOver = true;
    }
}