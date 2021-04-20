const {walk} = require("./walk")
const {read} = require("./read")
const {take} = require("./take")
const {use} = require("./use")
const {enter} = require("./enter")
const{open} = require("./open")
const {inventory} = require("./inventory")

const allActions = [
    open,
    walk,
    read,
    take,
    use,
    inventory,
    enter
]

function parseAction(userInput) {
    //find which action has been submitted 
    //toLowerCase so it can be tested against func.name
    let inputWordsArray = userInput.split(' ')
    let inputAction = inputWordsArray[0].toLowerCase()
    let noun = inputWordsArray.slice(1,).join(' ').toLowerCase()
    let action = allActions.find(func => func.name === inputAction)
    
    return {
        action,
        noun
    }
}

module.exports = {
    parseAction,
    walk,
    open,
    read,
    take,
    use,
    enter,
    inventory
}
