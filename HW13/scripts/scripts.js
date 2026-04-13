let obstacles = [];
let collectibles = [];
let canvas, ctx, player;

$(document).ready(function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    player = new Square(50, 50, 40, 40, "#0000FF");


    $.getJSON("data/obstacles.json", function(data) {
        console.log("Data loaded:", data);

        let obsList = data.obstacles || data.squares; 
        if (obsList) {
            obsList.forEach(obj => {
                obstacles.push(new Square(obj.x, obj.y, obj.h, obj.w, obj.color));
            });
        }

        if (data.items) {
            data.items.forEach(obj => {
                let coin = new Square(obj.x, obj.y, 20, 20, "#FFD700");
                coin.val = obj.value || 10; 
                collectibles.push(coin);
            });
        }
        
        drawEverything();
    }).fail(function() {
        console.error("Could not load information.json. Check file path and format.");
    });

    $(document).keydown(function(e) {
        if (e.key === "ArrowUp" || e.key === "w")    movePlayer(0, -10);
        if (e.key === "ArrowDown" || e.key === "s")  movePlayer(0, 10);
        if (e.key === "ArrowLeft" || e.key === "a")  movePlayer(-10, 0);
        if (e.key === "ArrowRight" || e.key === "d") movePlayer(10, 0);
    });
});

function movePlayer(dx, dy) {
    let nextX = player.x + dx; 
    let nextY = player.y + dy; 


    if (nextX < 0) nextX = 0;
    if (nextX + player.width > canvas.width) nextX = canvas.width - player.width;
    if (nextY < 0) nextY = 0;
    if (nextY + player.height > canvas.height) nextY = canvas.height - player.height;

 
    let canMove = true;
    for (let wall of obstacles) {
        if (willCollide(nextX, nextY, player.width, player.height, wall)) {
            canMove = false;
            break; 
        }
    }

    if (canMove) {
        player.x = nextX; 
        player.y = nextY; 
    }

    for (let i = collectibles.length - 1; i >= 0; i--) {
        if (hasCollided(player, collectibles[i])) {
            score += (collectibles[i].val || 10);
            collectibles.splice(i, 1);
            updateScoreUI();
        }
    }
    drawEverything();
}

function willCollide(nextX, nextY, width, height, wall) {
    return !(
        ((nextY + height) <= wall.y) || 
        (nextY >= (wall.y + wall.height)) || 
        ((nextX + width) <= wall.x) || 
        (nextX >= (wall.x + wall.width))
    );
}

function hasCollided(obj1, obj2) {
    return !(
        ((obj1.y + obj1.height) < obj2.y) ||
        (obj1.y > (obj2.y + obj2.height)) ||
        ((obj1.x + obj1.width) < obj2.x) ||
        (obj1.x > (obj2.x + obj2.width))
    );
}

function drawEverything() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    obstacles.forEach(w => {
        ctx.fillStyle = w.mainColor;
        ctx.fillRect(w.x, w.y, w.width, w.height);
    });

    collectibles.forEach(c => {
        ctx.fillStyle = c.mainColor;
        ctx.fillRect(c.x, c.y, c.width, c.height);
    });

    ctx.fillStyle = player.mainColor;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updateScoreUI() {
    $("#scoreDisplay").text("Score: " + score);
}
