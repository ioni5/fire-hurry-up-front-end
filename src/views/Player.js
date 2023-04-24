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
  }
}
