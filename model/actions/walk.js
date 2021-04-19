const walk = (currentVector, direction) => {
    //assess availableToMove. Define object and array versions.
    let surroundingVectorsObject = currentVector.availableToMove
    let surroundingVectorsArray = Object.keys(surroundingVectorsObject)
    //test against the direction argument
    let directionRegex = new RegExp(`${direction}`, 'i')
    let nextVector = surroundingVectorsArray.find(vector => {
        let directionToMatch = surroundingVectorsObject[vector].direction
        return directionRegex.test(directionToMatch)
    })
    return nextVector  
}



//move there by redirect, or
//send error message

module.exports = {
    walk
}

