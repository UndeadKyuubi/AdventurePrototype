class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "courtyard");
    }

    preload() {
        this.load.image('keyfrag1', 'Assets/Images/keyfrag1.png');
        this.load.image('arrow', 'Assets/Images/arrow.png');
    }

    onEnter() {

        let keyfrag1 = this.add.sprite(1000, 350, "keyfrag1");
        keyfrag1.setInteractive();
        this.pulse(keyfrag1);
        this.desc(keyfrag1, "A broken fragment of a medallion");
        keyfrag1.on('pointerdown', () => {
            this.gainItem('keyfrag1');
            keyfrag1.destroy();
        });

        let leftArrow = this.add.sprite(30, 540, "arrow");
        leftArrow.angle = -90;
        leftArrow.setInteractive();
        leftArrow.on('pointerover', () => {
            leftArrow.tint = 0xffffff;
            leftArrow.tintFill = true;
        });
        leftArrow.on('pointerout', () => {
            leftArrow.tint = 0x000000;
            leftArrow.tintFill = true;
        });

        let rightArrow = this.add.sprite(1400, 540, "arrow");
        rightArrow.angle = 90;
        rightArrow.setInteractive();
        rightArrow.on('pointerover', () => {
            rightArrow.tint = 0xffffff;
            rightArrow.tintFill = true;
        });
        rightArrow.on('pointerout', () => {
            rightArrow.tint = 0x000000;
            rightArrow.tintFill = true;
        });

        let upArrow = this.add.sprite(750, 30, "arrow");
        upArrow.setInteractive();
        upArrow.on('pointerover', () => {
            upArrow.tint = 0xffffff;
            upArrow.tintFill = true;
        });
        upArrow.on('pointerout', () => {
            upArrow.tint = 0x000000;
            upArrow.tintFill = true;
        });

        /*let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })*/

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "cemetary");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
    preload() {
        this.load.image('keyfrag2', 'Assets/Images/keyfrag2.png');
        this.load.image('arrow', 'Assets/Images/arrow.png');
        this.load.image('gravestone', 'Assets/Images/gravestone.png');
        this.load.image('shovel', 'Assets/Images/shovel.png');
    }
}

class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "statues");
    }
    onEnter() {

    }
    preload() {
        this.load.image('keyfrag3', 'Assets/Images/keyfrag3.png');
        this.load.image('arrow', 'Assets/Images/arrow.png');
        this.load.image('statue', 'Assets/Images/statue.png');
    }
}

class Demo4 extends AdventureScene {
    constructor() {
        super("demo4", "entrance");
    }
    onEnter() {

    }    
    preload() {
        this.load.image('key', 'Assets/Images/key.png');
        this.load.image('arrow', 'Assets/Images/arrow.png');
        this.load.image('DoorLocked', 'Assets/Images/DoorLocked.png');
        this.load.image('DoorUnlocked', 'Assets/Images/DoorUnlocked.png');
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Outro],
    title: "Adventure Game",
});

