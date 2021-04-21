//Actions Module!!

const enter = (currentVector, noun=null) => {
    let interactableContentArray= Object.values(currentVector.interactableContent)
    let door = interactableContentArray.find(item => item.name === 'door')
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
    let interactableContentArray= Object.values(currentVector.interactableContent)
    let chest = interactableContentArray.find(item => item.name === 'chest')
    if (noun !== 'chest' && noun !== '') 
        return "You can't open that."
    else if (chest) 
        return chest.displayContents()
    else 
        return "There's nothing to open here."
}

const read = (currentVector, noun, player, directory) => {
    function ifElseRead(itemToRead) {
        if (itemToRead) {
            return `
            <p style="color: blue;">
                <b>${noun}:</b>
                <br>
            </p>
            <p>
                ${itemToRead.text}
            </p>
            `
        }
        else 
            return "That isn't in here."
    }

    if (/chest/i.test(directory)) {
        let chestValuesArray = Object.values(currentVector.interactableContent.chest.contents)
        let itemToRead = chestValuesArray.find(item => item.name === noun)
        ifElseRead(itemToRead)
    }
    else if (/inventory/i.test(directory)) {
        let inventoryArray = Object.values(player.inventory)
        let itemToRead = inventoryArray.find(item => item.name === noun)
        ifElseRead(itemToRead)           
    }
    else 
        return "You can't do that here."
}

const take = (currentVector, noun, player) => {
    let chestObject = currentVector.interactableContent.chest.contents
    console.log('chest object: ',chestObject)
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
    let availableToMove = currentVector.availableToMove
    for (let vector in availableToMove) 
        if (availableToMove[vector].direction === direction) 
            return vector     
    return null
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
    'no'
]

//action is the first word, noun is all the rest.
//returns an object of the action and noun
function parseAction(userInput) {
    let inputWordsArray = userInput.split(' ')
    let action = inputWordsArray[0].toLowerCase()
    let noun = inputWordsArray.slice(1,).join(' ').toLowerCase()
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
