var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { 
    gravity: { y: 600 }, 
    debug: false       
}
    },
   scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player, stars, platforms, cursors, scoreText, spacebar, spikeballs;
var score = 0;
var gameOver = false;


var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', './assets/lightblue.png');
    this.load.image('ground', './assets/bluebar.png');
    this.load.image('diamond', './assets/diamond.png');
    this.load.image('spikedball', './assets/spikedball.png');

  this.load.spritesheet('chick', './assets/chick.png', { 
        frameWidth: 16, 
        frameHeight: 18 
    });
}

function create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(250, 400, 'ground');
    platforms.create(750, 220, 'ground');

    let ground = platforms.create(400, 568, 'ground');
ground.setDisplaySize(800, 64); 
ground.refreshBody();

    player = this.physics.add.sprite(300, 450, 'chick');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setBodySize(player.width, player.height - 5); 
player.setOffset(0, 5);

    this.physics.add.collider(player, platforms);
    spikeballs = this.physics.add.group();

let diamonds = this.physics.add.group({
    key: 'diamond',
    repeat: 5,
    setXY: { x: 100, y: 0, stepX: 120 }
});

diamonds.children.iterate(function (child) {
    child.setCollideWorldBounds(true);

    let randomGravity = Phaser.Math.Between(400, 800);
    child.setGravityY(randomGravity);

    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
});
    this.physics.add.collider(diamonds, platforms);

this.physics.add.overlap(player, diamonds, (p, d) => {
    d.disableBody(true, true);
    score += 50;

    scoreText.setText('Score: ' + score);

    if (diamonds.countActive(true) === 0) {
        diamonds.children.iterate(function (child) {
            child.enableBody(true, Phaser.Math.Between(50, 750), 0, true, true);

            child.setGravityY(Phaser.Math.Between(400, 800));
        });

        let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        let spikeball = spikeballs.create(x, 16, 'spikedball'); 
        spikeball.setBounce(1);
        spikeball.setCollideWorldBounds(true);
        spikeball.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}, null, this);

if (diamonds.countActive(true) === 0) {
    diamonds.children.iterate(function (child) {

        child.enableBody(true, Phaser.Math.Between(50, 750), 0, true, true);
        let newSpeed = Phaser.Math.Between(200, 600);
        child.setGravityY(newSpeed);
        child.setVelocityY(Phaser.Math.Between(0, 200));
    });
}

this.physics.add.collider(spikeballs, platforms);

this.physics.add.collider(player, spikeballs, (player, spikeball) => {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
    this.add.text(400, 300, 'GAME OVER', { fontSize: '64px', fill: '#000' }).setOrigin(0.5);
}, null, this);

    this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('chick', { start: 0, end: 1 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [{ key: 'chick', frame: 0 }],
    frameRate: 20
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('chick', { start: 2, end: 3 }),
    frameRate: 10,
    repeat: -1
});

        cursors = this.input.keyboard.createCursorKeys();
  
 scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' }); 
    
    cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

function update() {
    if (gameOver) return;
if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true); 
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true); 
    } else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if ((this.spacebar.isDown || cursors.up.isDown) && player.body.touching.down) {
        player.setVelocityY(-480);
    }
}
