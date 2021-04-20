const take = (currentVector, noun, player) => {
    let chestObject = currentVector.interactableContent.chest.contents
    let chestArray= Object.values(chestObject)
    console.log('chest object keys: ', Object.keys(chestObject))
    let desiredItem = chestArray.find(item => item.name === noun)
    console.log('desiredItem: ', desiredItem)
    if (!desiredItem) {
        return "Can't take that."
    }
    else if (!player.inventory && desiredItem.name !== 'backpack') {
        return 'You have nothing to carry that in!'
    }
    else if (desiredItem.name === 'backpack') {
        player.inventory = {}
        delete chestObject['backpack']
        return `
        <p style="color: red;">
            <br>
            <br>
            <b>Took backpack!</b>
        </p>
        `
    }
    else {
        player.inventory[noun] = desiredItem
        delete chestObject[noun]
        return `
        <p style="color: red;">
            <br>
            <br>
            <b>Took ${noun}!</b>
        </p>
        `
    } 
}

module.exports = {
    take
}