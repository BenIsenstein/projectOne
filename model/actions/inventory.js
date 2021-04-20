const inventory = (player) => {
    let inventory = player.inventory
    if (!inventory) {
        return 'You have no inventory to look at.'
    }
    else {
        let descriptionMessage = 'Inventory:<br><br>'
        for (let key in inventory) {
            descriptionMessage += key + ': '
            descriptionMessage += inventory[key].description + '<br><br>'
        }
        return descriptionMessage
    }
}

module.exports = {
    inventory
}