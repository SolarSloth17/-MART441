const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
   physics: { 
    default: 'arcade',
    arcade: { 
        gravity: { y: 0 },
        checkCollision: { up: true, down: true, left: true, right: true }
    }
},
    scene: { preload, create, update }
};

const game = new Phaser.Game(config);

function preload() {}

function create() {
    this.cameras.main.setBackgroundColor('#1a3317'); 
    this.physics.world.setBounds(0, 0, 800, 600);
    this.physics.world.setBounds(0, 0, 800, 600);

    let horizon = this.add.graphics();
    horizon.fillGradientStyle(0x66ccff, 0x66ccff, 0x1a3317, 0x1a3317); 
    horizon.fillRect(0, 0, 800, 300); 
    horizon.setDepth(-10); 

    this.particles = this.physics.add.group();

    for (let i = 0; i < 250; i++) {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(250, 600); 
        const flower = this.add.container(x, y);

        let depthFactor = (y - 250) / 350; 
        let flowerScale = 0.4 + (depthFactor * 0.8); 
        let brightness = 0.5 + (depthFactor * 0.5);
        
        flower.setScale(flowerScale);
        flower.setAlpha(0.8 + (depthFactor * 0.2));
        flower.setDepth(y); 

        const baseColor = Phaser.Display.Color.RandomRGB();
        const flowerColor = Phaser.Display.Color.GetColor(
            baseColor.r * brightness, baseColor.g * brightness, baseColor.b * brightness
        );

        const petalCount = Phaser.Math.Between(5, 9);
        for (let j = 0; j < petalCount; j++) {
            let angle = (j / petalCount) * Math.PI * 2;
            let petal = this.add.ellipse(Math.cos(angle) * 10, Math.sin(angle) * 10, 15, 8, flowerColor, 1);
            petal.rotation = angle;
            flower.add(petal);
        }

        flower.add(this.add.circle(0, 0, 5, 0xFFFF00));

        this.physics.add.existing(flower);
        flower.body.setCircle(15, -15, -15); 
        flower.body.setCollideWorldBounds(true);
        flower.body.setBounce(0.5, 0.5);
        flower.body.setDamping(true);
        flower.body.setDrag(0.99);

        this.particles.add(flower);

                                             
        this.tweens.add({
            targets: flower,
            scale: { from: 0, to: flowerScale },
            duration: 800,
            delay: i * 5, 
            ease: 'Back.easeOut'
        });

        this.physics.add.existing(flower);
flower.body.setCollideWorldBounds(true);


flower.body.setBounce(0.8, 0.8);
    }

    this.input.keyboard.on('keydown-SPACE', () => {
        this.particles.children.iterate((f) => {
            let newColor = Phaser.Display.Color.RandomRGB().color;
            f.list.forEach(child => {
                if (child.type === 'Ellipse') child.setFillStyle(newColor);
            });
        });
    });
}
function update(time, delta) {
    let pointer = this.input.activePointer;

   this.particles.children.iterate((p) => {
    let dist = Phaser.Math.Distance.Between(pointer.x, pointer.y, p.x, p.y);
    let fleeRange = 120 * p.scale; 

    if (dist < fleeRange) {

        let angle = Phaser.Math.Angle.Between(pointer.x, pointer.y, p.x, p.y);
        let speed = (fleeRange - dist) * 2; 
        

        p.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
    } 
    else {

        p.body.setAcceleration(
            Math.sin(time / 1000 + p.x) * 40,
            Math.cos(time / 1000 + p.y) * 30
        );
    }

    if (p.y < 250) {
        p.y = 250;
        p.body.velocity.y *= -1; 
    }

        p.rotation = Math.sin(time / 1500 + p.x) * 0.2;

   
        if (p.x < 0) { p.x = 0; p.body.velocity.x *= -1; }
        if (p.x > 800) { p.x = 800; p.body.velocity.x *= -1; }

    
        if (p.y > 600) { p.y = 600; p.body.velocity.y *= -1; }

   
        if (p.y < 250) { 
            p.y = 250; 
            p.body.velocity.y *= -1; 
        }
    }); 
}
