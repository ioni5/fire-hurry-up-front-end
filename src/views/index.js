import './assets.js'
import Phaser from 'phaser'
import config from './config.js'

const game = new Phaser.Game(config)

game.scene.start('mainScene')
