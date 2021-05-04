//Actions Module!!

const walk = (currentVector, direction) => currentVector.availableToMove[direction]

const enter = (door) => {
    if (!door) 
        return null

    console.log('isUnlocked: ', door.isUnlocked)
    if (!door.isUnlocked)
        return null

    else
        return door.route
}

const displayInventory = (inventory) => {
    let descriptionMessage = 'Inventory:<br><br>'
    
    if (!inventory) return 'You have no inventory to look at.'
    
    for (let key in inventory) {
        let item = inventory[key]

        descriptionMessage += `${item.name || key}: `
        descriptionMessage += `${item.description || `It's a ${key}.`}<br><br>`
    }

    return descriptionMessage
}

const open = (interactableContent, noun) => {
    let container = interactableContent.chest || interactableContent.desk || interactableContent.lunchbox
    
    if (!container)
        return null

    else if (![container.name, 'it', ''].includes(noun)) 
        return "You can't open that."
        
    else 
        return container.displayContents()
}


const read = (currentVector, noun, inventory, directory) => {
    if (noun === 'inventory')   
        return displayInventory(inventory) 

    else if (['chest', 'desk', 'lunchbox'].includes(directory)) 
        return ifElseRead(currentVector.interactableContent[directory].contents[noun])
     
    else if (directory === 'Inventory') 
        return ifElseRead(inventory[noun])           
    
    else 
        return ifElseRead(currentVector.interactableContent[noun])    

    function ifElseRead(itemToRead) {
        return itemToRead 
        ? `<p style="font-weight: 700; color: blue;">
             ${noun}:
             <br>
           </p>
           <p>
               ${itemToRead.text || itemToRead.description || `It's a ${noun}.`} 
           </p>`
           
        : "That isn't readable, not worth looking at, or it isn't here."    
    } 
}

const take = (interactableContent, noun, player, directory) => {
    if (interactableContent[noun] && !['chest', 'desk', 'panel', 'door'].includes(noun)) {
        player.inventory[noun] = interactableContent[noun]
        return deleteAndDisplay(interactableContent, noun)
    }

    if (!interactableContent[directory]) return null

    let chestContents = interactableContent[directory].contents
    let desiredItem = chestContents[noun] 

    if (!desiredItem) {
        return "Can't take that."
    } 
    else if (!player.hasBackpack && desiredItem.name !== 'backpack') {
        return 'You have nothing to carry that in!'
    } 
    else if (desiredItem.name === 'backpack') {
        player.hasBackpack = true

        return deleteAndDisplay(chestContents, 'backpack')
    } 
    else {
        player.inventory[noun] = desiredItem

        return deleteAndDisplay(chestContents, noun)
    } 

    function deleteAndDisplay (directory, noun) {
        delete directory[noun] 

        return `
        <p style="color: red;">
            <br>
            <b>Took ${noun}!</b>
        </p>
        `
    }
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
    let inputWordsArray = userInput.toLowerCase().split(' ')
    let action = inputWordsArray[0]
    let noun = inputWordsArray.slice(1,).join(' ')

    return {action,noun}
}

// const allActions = [
//     {shouldRun: function(verb) {return verb === "walk"}, run: function(direction) {}}

// ]

// allActions.find(action => action.shouldRun(verb))
module.exports = {
    parseAction,
    walk,
    open,
    read,
    take,
    use,
    enter,
    displayInventory
}
