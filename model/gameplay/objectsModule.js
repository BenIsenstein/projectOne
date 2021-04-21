//Objects module!

//assembly platform
//canal
//rockpile
//rope
//bucket
//cinnamon bun laced with sedative
//note
//device component
//final component
//jacket
//backpack(inventory)

//**yes-or-no-responsive object?? */

function YesOrNoObject(name) {
    this.name = name
    this.boolean = false
    this.changeBoolean = () => {
        let boolean = this.boolean
        if (boolean)
            boolean = false
        else
            boolean = true
    }
}

function Chest(contentsObject) {
    this.name = "chest"
    this.contents = contentsObject
    this.displayContents = () => {
        let contents = this.contents
        let contentsMessage = 'Chest contents:<br><br>'
        for (let key in contents) {
            contentsMessage += key + ': '
            contentsMessage += contents[key].description + '<br><br>'
        }
        return contentsMessage
    }
}   

const player = {
    name: "player",
    inventory: null,
    currentRoom: "room0",
    locationVector: "x2y1",
    accountInfo: null,
    saveStatus: null
}

function Door(route) {
    this.name = "door",
    this.description = "It's a door."
    this.route = route
}

function Component(componentId, componentName, description) {
    this.id = componentId,
    this.name = componentName
    this.description = description
}

function Letter(text) {
    this.name = "letter"
    this.text = text
    this.description = "Read me!"
}

module.exports = {
    Chest,
    Door,
    player,
    Component,
    Letter,
    YesOrNoObject
}