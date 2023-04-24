import Phaser from 'phaser'
export default class MainScene extends Phaser.Scene {
  constructor () {
    super({ key: 'mainScene' })
  }

  preload () {
    this.load.image('sky', 'assets/sky.jpg')
    this.load.image('wall', 'assets/wall.png')
    this.load.image('edge', 'assets/edge.png')
    this.load.image('floor', 'assets/floor.png')
    this.load.image('stair', 'assets/stair.png')
  }

  create () {
    this.add.image(0, 0, 'sky').setOrigin(0, 0)
    this.add.image(130, 240, 'wall').setOrigin(0, 0)
    // column left
    this.add.image(125, 238, 'edge').setOrigin(0, 0)
    // column right
    this.add.image(670, 238, 'edge').setOrigin(0, 0)
    // floor 1
    this.add.image(140, 590, 'floor').setOrigin(0, 0)
    this.add.image(510, 510, 'stair').setScale(0.5).setOrigin(0, 0)
    // floor 2
    this.add.image(140, 502, 'floor').setOrigin(0, 0)
    this.add.image(300, 420, 'stair').setScale(0.5).setOrigin(0, 0)
    // floor 3
    this.add.image(140, 414, 'floor').setOrigin(0, 0)
    this.add.image(510, 330, 'stair').setScale(0.5).setOrigin(0, 0)
    // floor 4
    this.add.image(140, 326, 'floor').setOrigin(0, 0)
    this.add.image(140, 240, 'stair').setScale(0.5).setOrigin(0, 0)
    // roof
    this.add.image(140, 238, 'floor').setOrigin(0, 0)
  }
}
