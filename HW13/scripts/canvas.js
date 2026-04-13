var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var lives = 3;
$(document).ready(function(){
    
    setup();  
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(100,100,50,50,"#0000FF");
    square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
    
}

class Collectible extends Square {
    constructor(x, y, w, h, color, value) {
        super(x, y, w, h, color);
        this.value = value || 10;
        this.active = true;
    }
}

var canvas, ctx;
var square1; 
var squareArray = []; 
var collectibleArray = []; 
var score = 0;
var lives = 3;
var direction;

$(document).ready(function() {
    setup();
    $(this).keydown(function(event) { 
        getKey(event);
    });
});

function moveUp()    { square1.y -= 10; }
function moveDown()  { square1.y += 10; }
function moveLeft()  { square1.x -= 10; }
function moveRight() { square1.x += 10; }

function hasCollided(obj1, obj2) {
    return !(
        ((obj1.y + obj1.height) < obj2.y) ||
        (obj1.y > (obj2.y + obj2.height)) ||
        ((obj1.x + obj1.width) < obj2.x) ||
        (obj1.x > (obj2.x + obj2.width))
    );
}
function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(50, 50, 40, 40, "#0000FF");

    $.getJSON("data/obstacles.json", function(data) {
        let list = data.squares || data.obstacles; 
        for (var i = 0; i < list.length; i++) {
            squareArray.push(new Square(
                list[i].x, 
                list[i].y, 
                list[i].h, 
                list[i].w, 
                list[i].color
            ));
        }
    });

    $.getJSON("data/items.json", function(data) {
        for (var i = 0; i < data.items.length; i++) {
            collectibleArray.push(new Collectible(
                data.items[i].x, 
                data.items[i].y, 
                20, 20, // h, w
                "#FFD700", 
                data.items[i].points || 10
            ));
        }
        drawSquare();
    }).fail(function() {
        console.error("Could not find collectibles.json! Check the filename in the data folder.");
    });
}

function getKey(event) {
    var char = event.which || event.keyCode;
    if (char == 38 || char == 87) { moveUp();    direction = "up"; }
    if (char == 40 || char == 83) { moveDown();  direction = "down"; }
    if (char == 37 || char == 65) { moveLeft();  direction = "left"; }
    if (char == 39 || char == 68) { moveRight(); direction = "right"; }

    keepInBounds();

    for (var i = 0; i < squareArray.length; i++) {
        if (hasCollided(square1, squareArray[i])) {
            pushBack(); 
            break;
        }
    }

    for (var i = 0; i < collectibleArray.length; i++) {
        let item = collectibleArray[i];
        if (item.active && hasCollided(square1, item)) {
            item.active = false; 
            score += item.value; 
        }
    }

    drawSquare();
}

function keepInBounds() {
    if (square1.x < 0) square1.x = 0;
    if (square1.y < 0) square1.y = 0;
    if (square1.x + square1.width > canvas.width) square1.x = canvas.width - square1.width;
    if (square1.y + square1.height > canvas.height) square1.y = canvas.height - square1.height;
}

function pushBack() {
    if (direction == "left") square1.x += 10;
    else if (direction == "right") square1.x -= 10;
    else if (direction == "up") square1.y += 10;
    else if (direction == "down") square1.y -= 10;
}

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < squareArray.length; i++) {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    for (var i = 0; i < collectibleArray.length; i++) {
        if (collectibleArray[i].active) {
            ctx.fillStyle = collectibleArray[i].mainColor;
            ctx.fillRect(collectibleArray[i].x, collectibleArray[i].y, collectibleArray[i].width, collectibleArray[i].height);
        }
    }

    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);

    ctx.fillStyle = "black";
    ctx.font = "20px sans-serif";
    ctx.fillText("Score: " + score, 10, 30);
}
