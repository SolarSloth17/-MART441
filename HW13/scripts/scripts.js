let obstacles = [];
let collectibles = [];
let score = 0;

// Load Obstacles
$.getJSON("data/obstacles.json", function(data) {
    data.obstacles.forEach(obj => {
        obstacles.push(new Obstacle(obj.x, obj.y, obj.w, obj.h, obj.color));
    });
});

// Load Collectibles
$.getJSON("data/collectibles.json", function(data) {
    data.items.forEach(obj => {
        collectibles.push(new Collectible(obj.x, obj.y, 20, 20, "gold", obj.value));
    });
});

function movePlayer(dx, dy) {
    // Calculate "Potential" next position
    let nextX = player.theX + dx;
    let nextY = player.theY + dy;

    // 1. Boundary Check (Stay within canvas)
    if (nextX < 0 || nextX + player.theWidth > canvas.width) nextX = player.theX;
    if (nextY < 0 || nextY + player.theHeight > canvas.height) nextY = player.theY;

    // 2. Obstacle Check (Requirement #1: Prevent Movement)
    let canMove = true;
    obstacles.forEach(wall => {
        if (willCollide(nextX, nextY, player.theWidth, player.theHeight, wall)) {
            canMove = false;
        }
    });

    if (canMove) {
        player.setX(nextX);
        player.setY(nextY);
    }

    // 3. Collectible Check (Requirement #3: Pick up)
    collectibles.forEach((item, index) => {
        if (hasCollided(player, item)) {
            score += item.value;
            collectibles.splice(index, 1); // Remove from array
            updateScoreUI();
        }
    });

    drawEverything();
}
