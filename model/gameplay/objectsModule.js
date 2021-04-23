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
// function Door(route, text="It's a door.") {
//     this.name = "door",
//     this.text = text
//     this.route = route
// }

// function YesOrNoDoor(name) {
//     this.name = name
//     this.isUnlocked = false
//     this.changeUnlocked = () => this.isUnlocked = !this.isUnlocked
//     this.partnerVector = null
// }
// YesOrNoDoor.prototype = Object.create(Door.prototype)

class Door {
    constructor(route, text="It's a door.") {
        this.name = "door",
        this.text = text
        this.route = route
    }   
}
  
class YesOrNoDoor extends Door {
    constructor(route, text, conditionToEnter = () => null, partnerVector=null) {
        super(route, text)
        this.isUnlocked = false
        this.conditionToEnter = () => conditionToEnter()
        this.changeUnlocked = () => this.isUnlocked = !this.isUnlocked
        this.partnerVector = partnerVector
    }
}
  

function Chest(name, contentsObject) {
    this.name = name
    this.contents = contentsObject
    this.displayContents = () => {
        let contents = this.contents
        let contentsMessage = `${name} contents:<br><br>`
        
        for (let key in contents) {
            let item = contents[key]

            contentsMessage += `${item.name || key}: `
            contentsMessage += `${item.description || `It's a ${key}.`}<br><br>`
        }

        return contentsMessage
    }
}   

const player = {
    name: "player",
    hasBackpack: false,
    inventory: {},
    currentRoom: "room0",
    currentVector: "x2y1",
    accountInfo: null,
    saveStatus: null
}


function Component(componentId, componentName, description) {
    this.id = componentId,
    this.name = componentName
    this.description = description
}

function Letter(text, name) {
    this.name = name
    this.text = text
    this.description = "Read me!"
}

module.exports = {
    Chest,
    Door,
    player,
    Component,
    Letter,
    YesOrNoDoor
}