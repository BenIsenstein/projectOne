const open = (currentVector, noun) => {
    let interactableContentObject = currentVector.interactableContent
    let interactableContentArray= Object.values(interactableContentObject)
    let chest = interactableContentArray.find(item => item.name === 'chest')
    if (noun !== 'chest' && noun !== '') {return "You can't open that."}
    else if (chest) {return chest.displayContents()}
    else {return "There's nothing to open here."}
}

module.exports = {
    open
}