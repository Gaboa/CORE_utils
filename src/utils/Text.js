import { Text as PIXI_Text } from 'pixi.js'

class Text extends PIXI_Text {

    constructor({
        container,
        text
    }) {
        super(text)

        if (container)
            container.addChild(this)
    }

    set(value) {
        this.text = value
    }

}

export { Text }