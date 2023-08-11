window.onload = function() {
    setStart();
}

function setStart() {
    for(let i = 0; i < 9; i ++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("gamearea").appendChild(tile);
    }
}