const enter = (currentVector, noun=null) => {
    let interactableContentObject = currentVector.interactableContent
    let interactableContentArray= Object.values(interactableContentObject)
    let door = interactableContentArray.find(item => item.name === 'door')
    if (door) {return door.route}
    else {return door}
}

module.exports = {
    enter
}