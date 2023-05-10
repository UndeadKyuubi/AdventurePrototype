class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Tower Courtyard");
    }

    preload() {
        this.load.image('keyfrag1', 'Assets/Images/keyfrag1.png');
        this.load.image('arrow', 'Assets/Images/arrow.png');
    }

    keyfrag1
    txt

    onEnter() {

        this.txt = this.add.text(500, 900, "After waking up you find yourself in a strange courtyard.\nThere isn't much around other than some grass.\nThat's when you spot an odd object laying in one of the patches of grass.")

        if (this.hasItem("keyfrag1") == false) {
        this.keyfrag1 = this.add.sprite(1000, 350, "keyfrag1");
        this.keyfrag1.setInteractive();
        this.pulse(this.keyfrag1);
        this.desc(this.keyfrag1, "A broken fragment of a medallion");
        this.keyfrag1.on('pointerdown', () => {
            this.gainItem('keyfrag1');
            this.keyfrag1.destroy();
        });
    }

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
    }

    update() {
        if (this.hasItem("keyfrag1") == true) {
            this.txt.destroy();
            }
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

        if (this.hasItem("keyfrag2") == false) {
        let shovel = this.add.sprite(1000, 350, "shovel");
        shovel.setInteractive();
        this.pulse(shovel);
        this.desc(shovel, "It's a dirty shovel");
        shovel.on('pointerdown', () => {
            this.gainItem('shovel');
            shovel.destroy();
        });
    }

        let box = this.add.text(700, 900, "A burial ground for past kings, beings with near deific power \nthough none could ever match the prophetic king... \nborn to this world that fateful night of the 25th");

        let grave1 = this.add.sprite(100, 200, "gravestone");
        grave1.setInteractive();
        this.desc(grave1, "07/01");
        let grave2 = this.add.sprite(200, 400, "gravestone");
        grave2.setInteractive();
        this.desc(grave2, "04/21");
        let grave3 = this.add.sprite(300, 300, "gravestone");
        grave3.setInteractive();
        this.desc(grave3, "09/30");
        let grave4 = this.add.sprite(400, 200, "gravestone");
        grave4.setInteractive();
        this.desc(grave4, "11/09");
        let grave5 = this.add.sprite(200, 600, "gravestone");
        grave5.setInteractive();
        this.desc(grave5, "02/05");
        let grave6 = this.add.sprite(350, 440, "gravestone");
        grave6.setInteractive();
        this.desc(grave6, "08/18");
        let grave7 = this.add.sprite(100, 800, "gravestone");
        grave7.setInteractive();
        this.desc(grave7, "09/13");
        let grave8 = this.add.sprite(200, 940, "gravestone");
        grave8.setInteractive();
        this.desc(grave8, "02/23");
        let grave9 = this.add.sprite(300, 800, "gravestone");
        grave9.setInteractive();
        this.desc(grave9, "12/25");
        grave9.on('pointerdown', () => {
            if (this.hasItem("shovel")) {
                keyfrag2.setVisible(true);
                this.loseItem("shovel");
            } else if (this.hasItem("keyfrag2") == false) {
                this.showMessage("You sense there is an object buried here");
            }
        })
        let grave10 = this.add.sprite(400, 800, "gravestone");
        grave10.setInteractive();
        this.desc(grave10, "10/17");

        let keyfrag2 = this.add.sprite(300, 850, "keyfrag2");
        keyfrag2.setInteractive();
        keyfrag2.setVisible(false);
        this.pulse(keyfrag2);
        this.desc(keyfrag2, "A broken fragment of a medallion");
        keyfrag2.on('pointerdown', () => {
            this.gainItem('keyfrag2');
            keyfrag2.destroy();
        });
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

        if (this.hasItem("keyfrag3") == false){
        this.keyfrag3 = this.add.sprite(700, 700, "keyfrag3");
        this.keyfrag3.setInteractive();
        this.keyfrag3.setVisible(false);
        this.pulse(this.keyfrag3);
        this.desc(this.keyfrag3, "A broken fragment of a medallion");
        this.keyfrag3.on('pointerdown', () => {
            this.gainItem('keyfrag3');
            this.keyfrag3.destroy();
        });
        }

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
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Outro],
    //scene: Demo1,
    title: "Adventure Game",
});

