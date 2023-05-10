class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Tower Courtyard");
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
        leftArrow.on('pointerdown', () => {
            this.gotoScene('demo2');
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
        rightArrow.on('pointerdown', () => {
            this.gotoScene('demo3');
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
        upArrow.on('pointerdown', () => {
            this.gotoScene('demo4');
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
        super("demo2", "Cemetary of Kings");
    }
    onEnter() {
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
        rightArrow.on('pointerdown', () => {
            this.gotoScene('demo1');
        }); 

        /*this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
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
            .on('pointerdown', () => this.gotoScene('outro'));*/
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
        super("demo3", "Hall of Kings");
    }

    statue1
    statue2
    statue3
    statue4
    statue5
    statue6
    statue7
    statue8
    keyfrag3

    onEnter() {
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
        leftArrow.on('pointerdown', () => {
            this.gotoScene('demo1');
        }); 

        this.statue1 = this.add.sprite(100, 100, "statue");
        this.statue1.angle = 90;
        this.statue1.setInteractive();
        this.rota(this.statue1);
        this.desc(this.statue1, "A statue of a past king of the tower, the statue seems like it can be rotated");
        this.statue2 = this.add.sprite(200, 100, "statue");
        this.statue2.angle = 180;
        this.statue2.setInteractive();
        this.rota(this.statue2);
        this.desc(this.statue2, "A statue of a past king of the tower, the statue seems like it can be rotated");
        this.statue3 = this.add.sprite(300, 100, "statue");
        this.statue3.angle = 90;
        this.statue3.setInteractive();
        this.rota(this.statue3);
        this.desc(this.statue3, "A statue of a past king of the tower, the statue seems like it can be rotated");
        this.statue4 = this.add.sprite(400, 100, "statue");
        this.statue4.angle = 180;
        this.statue4.setInteractive();
        this.rota(this.statue4);
        this.desc(this.statue4, "A statue of a past king of the tower, the statue seems like it can be rotated");
        this.statue5 = this.add.sprite(100, 500, "statue");
        this.statue5.angle = 90;
        this.statue5.setInteractive();
        this.rota(this.statue5);
        this.desc(this.statue5, "A statue of a past king of the tower, the statue seems like it can be rotated");
        this.statue6 = this.add.sprite(200, 500, "statue");
        this.statue6.angle = 180;
        this.statue6.setInteractive();
        this.rota(this.statue6);
        this.desc(this.statue6, "A statue of a past king of the tower, the statue seems like it can be rotated");
        this.statue7 = this.add.sprite(300, 500, "statue");
        this.statue7.angle = -90;
        this.statue7.setInteractive();
        this.rota(this.statue7);
        this.desc(this.statue7, "A statue of a past king of the tower, the statue seems like it can be rotated");
        this.statue8 = this.add.sprite(400, 500, "statue");
        this.statue8.setAngle(90);
        this.statue8.setInteractive();
        this.rota(this.statue8);
        this.desc(this.statue8, "A statue of a past king of the tower, the statue seems like it can be rotated");

        this.keyfrag3 = this.add.sprite(700, 700, "keyfrag3");
        this.keyfrag3.setInteractive();
        this.keyfrag3.setVisible(false);
        this.pulse(this.keyfrag3);
        this.desc(this.keyfrag3, "A broken fragment of a medallion");
        this.keyfrag3.on('pointerdown', () => {
            this.gainItem('keyfrag3');
            this.keyfrag3.destroy();
        });

        this.add.text(600, 1000, "A true king must always stand tall");
    }
    preload() {
        this.load.image('keyfrag3', 'Assets/Images/keyfrag3.png');
        this.load.image('arrow', 'Assets/Images/arrow.png');
        this.load.image('statue', 'Assets/Images/statue.png');
    }
    update() {
        if (this.statue1.angle == 0)
            if (this.statue2.angle == 0)
                if (this.statue3.angle == 0)
                    if (this.statue4.angle == 0)
                        if (this.statue5.angle == 0)
                            if (this.statue6.angle == 0)
                                if (this.statue7.angle == 0)
                                    if (this.statue8.angle == 0) this.keyfrag3.setVisible(true);
    }
}

class Demo4 extends AdventureScene {
    constructor() {
        super("demo4", "Tower Entrance");
    }
    onEnter() {
        let downArrow = this.add.sprite(750, 1050, "arrow");
        downArrow.angle = 180;
        downArrow.setInteractive();
        downArrow.on('pointerover', () => {
            downArrow.tint = 0xffffff;
            downArrow.tintFill = true;
        });
        downArrow.on('pointerout', () => {
            downArrow.tint = 0x000000;
            downArrow.tintFill = true;
        });
        downArrow.on('pointerdown', () => {
            this.gotoScene('demo1');
        }); 
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
    //scene: [Intro, Demo1, Demo2, Demo3, Demo4, Outro],
    scene: Demo3,
    title: "Adventure Game",
});

