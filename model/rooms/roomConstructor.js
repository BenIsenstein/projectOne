const {centralRoomsObject} = require("./centralRoomsObject")

//This function will populate every vector in a room's 
//vectors object with the spaces you can move to from that vector.
//By design, the returned value of this function is the 
//"availablelToMove" property in the vectorSpawner function.
const surroundingVectors = (xRange, yRange, orderedPair) => {
    let resultingVectors = {}

    //check if there is room to move one square to the left, ie "West". 
    if (orderedPair.x > 1) {
        let xOneLess = orderedPair.x - 1
        let yTheSame = orderedPair.y
        resultingVectors[`x${xOneLess}y${yTheSame}`] = {
            vector: {
                x: `${xOneLess}`,
                y: `${yTheSame}`
            },
            direction: "West"
        }
    } 

    //check if there is room to move one square to the right, ie "East".
    if (orderedPair.x < xRange) {
        let xOneMore = orderedPair.x + 1
        let yTheSame = orderedPair.y
        resultingVectors[`x${xOneMore}y${yTheSame}`] = {
            vector: {
                x: `${xOneMore}`,
                y: `${yTheSame}`
            },
            direction: "East"
        }
    } 

    //check if there is room to move one square down, ie "South".
    if (orderedPair.y > 1) {
        let xTheSame = orderedPair.x 
        let yOneLess = orderedPair.y - 1
        resultingVectors[`x${xTheSame}y${yOneLess}`] = {
            vector: {
                x: `${xTheSame}`,
                y: `${yOneLess}`
            },
            direction: "South"
        }
    } 

    //check if there is room to move one square above, ie "North".
    if (orderedPair.y < yRange) {
        let xTheSame = orderedPair.x 
        let yOneMore = orderedPair.y + 1
        resultingVectors[`x${xTheSame}y${yOneMore}`] = {
            vector: {
                x: `${xTheSame}`,
                y: `${yOneMore}`
            },
            direction: "North"
        }
    } 

    return resultingVectors
}

//creates a data map for a room of any dimensions. can only be a square room.
const vectorSpawner = (roomName, xRange, yRange) => {
    let vectorsObject = {}
    let xVals = []
    let yVals = []

    //use the xRange and yRange params to populate arrays, 
    //so that those values may be iterated over.
    for (let i=1; i<=xRange; i++) {
        xVals.push(i)
    }

    for (let i=1; i<=yRange; i++) {
        yVals.push(i)
    }
    
    //populate vectorsObject with every coordinate in the field.
    for (let xVal of xVals) {
        for (let yVal of yVals) {

            let orderedPair = {
                x: xVal, y: yVal
            }

            let vectorName = `x${xVal}y${yVal}`
            let vector = centralRoomsObject[`${roomName}`][vectorName]

            vectorsObject[vectorName] = {
                vector: orderedPair,
                availableToMove: surroundingVectors(xRange, yRange, orderedPair),
                interactableContent: vector.interactableContent,
                description: vector.description
            }
        }
    }

    return vectorsObject
}

function Room(roomName, xRange, yRange) {
    this.name = roomName
    this.description = `${roomName}. New room, new mystery...`
    this.vectors = vectorSpawner(roomName, xRange, yRange)
}

module.exports = {
    Room
}