import { Container as PIXI_Container } from 'pixi.js'

class Container extends PIXI_Container {

    constructor({
        container
    }) {
        super()

        if (container)
            container.addChild(this)
    }

}

export { Container }