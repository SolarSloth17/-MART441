var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;

// need to create the squares before we draw them
createSquares();
// display the squares on the basic canvas
drawSquare();

// this timer will move the second square around
setInterval(moveGreenSquare, 5000);

// this function creates new instances of squares
function createSquares() {
    square1 = new Square(x, y, 20, 20, "blue");
    square2 = new Square(x2, y2, 50, 50, "green");
}

// this function will randomly move the second square around the canvas
function moveGreenSquare() {
    // Random X between 0 and (Canvas Width - Square Width)
    square2.setX(Math.floor(Math.random() * (canvas.width - square2.theWidth)));
    // Random Y between 0 and (Canvas Height - Square Height)
    square2.setY(Math.floor(Math.random() * (canvas.height - square2.theHeight)));
    drawSquare();
}

// this function just draws the squares to the canvas in their respective locations
function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}

// using jQuery for keystrokes
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

// this function checks which key was pressed
function getKey(event) {

    // only checking collision when a key is pressed
    var didCollide = hasCollided(square1, square2);
    // if a collision happens
    if (didCollide) {
        // change the background color
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        // change the size of the squares
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }
    // move the first square depending on what key was pressed
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
    // don't forget to draw the squares again
    drawSquare();
}

// move the y to move up
function moveUp() {
    square1.setY(square1.theY - 10);
}

// add to the y to move down
function moveUp() {
    var newY = square1.theY - 10;
    if (newY < 0) {
        newY = 0; // Stop at top border
    }
    square1.setY(newY);
}

// Add to the y to move down
function moveDown() {
    var newY = square1.theY + 10;
    // Check against canvas height minus square height
    if (newY + square1.theHeight > canvas.height) {
        newY = canvas.height - square1.theHeight; // Stop at bottom border
    }
    square1.setY(newY);
}

// Subtract from the x to move to the left
function moveLeft() {
    var newX = square1.theX - 10;
    if (newX < 0) {
        newX = 0; // Stop at left border
    }
    square1.setX(newX);
}

// Add to the x to move to the right
function moveRight() {
    var newX = square1.theX + 10;
    if (newX + square1.theWidth > canvas.width) {
        newX = canvas.width - square1.theWidth; // Stop at right border
    }
    square1.setX(newX);
}

// this is a basic collision function that checks for corners overlapping
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function update() {
    // 1. Move the square based on current speed
    player.x += player.dx;
    player.y += player.dy;

    // 2. Check Horizontal Boundaries (Left & Right)
    if (player.x < 0) {
        player.x = 0; // Snap to left wall
    } else if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width; // Snap to right wall
    }

    // 3. Check Vertical Boundaries (Top & Bottom)
    if (player.y < 0) {
        player.y = 0; // Snap to top wall
    } else if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height; // Snap to bottom wall
    }
}

var audio = document.getElementById("myAudio");
var btnPlay = document.getElementById("btnPlay");

btnPlay.addEventListener("click", function() {
    // Check if the audio is paused, then play it
    if (audio.paused) {
        audio.play();
        btnPlay.innerHTML = "Pause Music";
    } else {
        audio.pause();
        btnPlay.innerHTML = "Play Music";
    }
});
