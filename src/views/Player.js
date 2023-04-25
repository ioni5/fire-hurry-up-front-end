import Phaser from 'phaser'

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, texture) {
    super(scene, x, y, texture)
    scene.sys.displayList.add(this)
    scene.sys.updateList.add(this)
    scene.sys.arcadePhysics.world.enableBody(this, 0)

    this.setBounce(0.2)
    this.setCollideWorldBounds(true)
    this.body.setGravityY(300)
    this.addAnimations()
  }

  addAnimations () {
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'player', frame: 0 }],
      frameRate: 20
    })

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 9 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 9 }),
      frameRate: 10,
      repeat: -1
    })
  }
}
