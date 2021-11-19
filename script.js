function revealImage(){
    message = document.getElementById("message");
    message.style.display = "inline";
    changeColor();
}

function changeColor(){
    body = document.getElementById("bruh");
    body.className = "bodyeffect";
}