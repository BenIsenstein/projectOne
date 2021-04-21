//Actions Module!!

const enter = (currentVector) => {
    let door = currentVector.interactableContent.door
    if (door) 
        return door.route
    else 
        return door
}

const inventory = (player) => {
    let inventory = player.inventory
    if (!inventory) 
        return 'You have no inventory to look at.'
    else {
        let descriptionMessage = 'Inventory:<br><br>'
        for (let key in inventory) {
            descriptionMessage += key + ': '
            descriptionMessage += inventory[key].description + '<br><br>'
        }
        return descriptionMessage
    }
}

const open = (currentVector, noun) => {
    let chest = currentVector.interactableContent.chest
    if (noun !== 'chest' && noun !== '') 
        return "You can't open that."
    else if (chest) 
        return chest.displayContents()
    else 
        return "There's nothing to open here."
}

const read = (currentVector, noun, player, directory) => {
    const ifElseRead = itemToRead => itemToRead ?
        `<p style="color: blue;">
             <b>${noun}:</b>
             <br>
         </p>
         <p>
             ${itemToRead.text}
         </p>`

          : "That isn't in here."     

    if (/chest/i.test(directory)) {
        let itemToRead = currentVector.interactableContent.chest.contents[noun]
        return ifElseRead(itemToRead)
    }
    else if (/inventory/i.test(directory)) {
        let itemToRead = player.inventory[noun]
        return ifElseRead(itemToRead)           
    }
    else 
        return "You can't do that here."
}

const take = (currentVector, noun, player) => {
    let chestObject = currentVector.interactableContent.chest.contents
    let desiredItem = chestObject[noun] 
    function deleteAndDisplay (noun) {
        delete chestObject[noun] 
        return `
        <p style="color: red;">
            <br>
            <br>
            <b>Took ${noun}!</b>
        </p>
        `
    }

    if (!desiredItem) 
        return "Can't take that."
    else if (!player.inventory && desiredItem.name !== 'backpack') 
        return 'You have nothing to carry that in!'
    else if (desiredItem.name === 'backpack') {
        player.inventory = {}
        return deleteAndDisplay('backpack')
    }
    else {
        player.inventory[noun] = desiredItem
        return deleteAndDisplay(noun)
    } 
}

const walk = (currentVector, direction) => {
    return currentVector.availableToMove[direction]
}

const use = () => {

}

const allActions = [ //just for keeping track
    'open',
    'walk',
    'read',
    'take',
    'use',
    'inventory',
    'enter',
    'y',
    'yes',
    'n',
    'no',
    'quit'
]

//action is the first word, noun is all the rest.
//returns an object of the action and noun
function parseAction(userInput) {
    let inputWordsArray = userInput.split(' ')
    let action = inputWordsArray[0].toLowerCase()
    let noun = inputWordsArray.slice(1,).join(' ').toLowerCase()
    return {action,noun}
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
