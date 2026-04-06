var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;

createSquares();
drawSquare();

setInterval(moveGreenSquare, 5000);

function createSquares() {
    square1 = new Square(x, y, 20, 20, "blue");
    square2 = new Square(x2, y2, 50, 50, "green");
}

function moveGreenSquare() {
    square2.setX(Math.floor(Math.random() * (canvas.width - square2.theWidth)));
    square2.setY(Math.floor(Math.random() * (canvas.height - square2.theHeight)));
    drawSquare();
}

function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {

    var didCollide = hasCollided(square1, square2);
    if (didCollide) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    drawSquare();
}

function moveUp() {
    square1.setY(square1.theY - 10);
}

function moveUp() {
    var newY = square1.theY - 10;
    if (newY < 0) {
        newY = 0; 
    }
    square1.setY(newY);
}

function moveDown() {
    var newY = square1.theY + 10;
    if (newY + square1.theHeight > canvas.height) {
        newY = canvas.height - square1.theHeight; 
    }
    square1.setY(newY);
}

function moveLeft() {
    var newX = square1.theX - 10;
    if (newX < 0) {
        newX = 0; 
    }
    square1.setX(newX);
}

function moveRight() {
    var newX = square1.theX + 10;
    if (newX + square1.theWidth > canvas.width) {
        newX = canvas.width - square1.theWidth; 
    }
    square1.setX(newX);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function update() {
    player.x += player.dx;
    player.y += player.dy;

    if (player.x < 0) {
        player.x = 0; 
    } else if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width; 
    }

    if (player.y < 0) {
        player.y = 0;
    } else if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height; 
    }
}

var audio = document.getElementById("myAudio");
var btnPlay = document.getElementById("btnPlay");

btnPlay.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        btnPlay.innerHTML = "Pause Music";
    } else {
        audio.pause();
        btnPlay.innerHTML = "Play Music";
    }
});
