import Phaser from 'phaser'
import config from '../src/views/config'
import MainScene from '../src/views/MainScene'

describe('MainScene', () => {
  it('there is a main scene', () => {
    const game = new Phaser.Game({
      ...config,
      postBoot: function () {
        expect(game.scene.getScene(new MainScene().key)).not.toBeNull()
      }
    })
  })
})
