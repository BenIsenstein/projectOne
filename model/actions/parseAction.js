const {walk} = require("./walk")
const {read} = require("./read")
const {take} = require("./take")
const {use} = require("./use")
const {enter} = require("./enter")
const {showInventory: inventory} = require("./showInventory")

const allActions = [
    walk,
    read,
    take,
    use,
    inventory,
    enter
]

const parseAction = (userInput) => {
    //find which action has been submitted with RegExp
    //toLowerCase so it can be tested against func.name
    let userInputRegex = /(.*)\s(.*)/ig
    let inputAction = userInput.replace(userInputRegex, "\$1").toLowerCase()
    let action = allActions.find(func => func.name === inputAction)
    let noun = userInput.replace(userInputRegex, "\$2")
    
    return {
        action,
        noun
    }
}


module.exports = {
    parseAction,
    walk,
    read,
    take,
    use,
    enter,
    inventory
}