import {
    Sprite as PIXI_Sprite,
    utils as PIXI_UTILS
} from 'pixi.js'

const NORMAL_WIDTH  = 1920
const NORMAL_HEIGHT = 1080

class Sprite extends PIXI_Sprite {


    static check(texture) {
        return texture in PIXI_UTILS.TextureCache
    }

    static get(texture) {
        return PIXI_UTILS.TextureCache[texture]
    }

    constructor({
        texture,
        container,
        x = 0,
        y = 0,
        anchor = 0.5,
        scale = 1,
        alpha = 1,
        visible = true
    }) {
        if (Sprite.check(texture))
            super(Sprite.get(texture))
        else
            super()

        // Add to Container
        if (container)
            container.addChild(this)

        // X and Y
        this.x = x
        this.y = y

        // Set Anchor
        if (typeof anchor == 'number')
            this.anchor.set(anchor)
        if (typeof anchor == 'object') {
            if (x in anchor) this.anchor.x = anchor.x
            if (y in anchor) this.anchor.y = anchor.y
        }

        // Set Scale
        if (typeof scale == 'number')
            this.scale.set(scale)
        if (typeof scale == 'object') {
            if (x in scale) this.scale.x = scale.x
            if (y in scale) this.scale.y = scale.y
        }

        // Set Alpha and Visibility
        this.alpha = alpha
        this.visible = visible
    }

    set x(value) {
        if ('GAME_WIDTH' in window)
            if (value > -1 && value < 1)
                super.x = value * GAME_WIDTH
            else
                super.x = value * GAME_WIDTH / NORMAL_WIDTH
        else
            super.x = value
    }

    get x() {
        return super.x
    }

    set y(value) {
        if ('GAME_HEIGHT' in window)
            if (value > -1 && value < 1)
                super.y = value * GAME_HEIGHT
            else
                super.y = value * GAME_HEIGHT / NORMAL_HEIGHT
        else
            super.y = value
    }

    get y() {
        return super.y
    }

    change(texture) {
        if (this.check(texture))
            this.texture = this.get(texture)
        else
            console.error(`You have no texture: ${texture} in TextureCache.`)
    }

    check(texture) {
        return Sprite.check(texture)
    }
    
    get(texture) {
        return Sprite.get(texture)
    }

    show() {
        this.visible = true
    }

    hide() {
        this.visible = false
    }

}

export { Sprite }