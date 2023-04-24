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

  it('all assets loaded are added to scene', () => {
    const game = new Phaser.Game({
      ...config,
      postBoot: function () {
        const s = game.scene.getScene(new MainScene().key)
        let numLoads = 0
        spyOn(s.load, 'image').and.callFake(() => {
          numLoads++
        })
        let numAddeds = 0
        spyOn(s.add, 'image').and.callFake(() => {
          numAddeds++
        })
        s.preload()
        s.create()

        expect(numLoads).toEqual(numAddeds)
      }
    })
  })
})
