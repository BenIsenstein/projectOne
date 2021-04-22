const {centralRoomsObject} = require("./centralRoomsObject")

//This function will populate every vector in a room's 
//vectors object with the spaces you can move to from that vector.
//By design, the returned value of this function is the 
//"availablelToMove" property in the vectorSpawner function.
const surroundingVectors = (xRange, yRange, orderedPair) => {
    let resultingVectors = {}

    if (orderedPair.x > 1) {
        let xOneLess = orderedPair.x - 1
        let yTheSame = orderedPair.y

        resultingVectors.west = `x${xOneLess}y${yTheSame}`
    } 
    
    if (orderedPair.x < xRange) {
        let xOneMore = orderedPair.x + 1
        let yTheSame = orderedPair.y

        resultingVectors.east = `x${xOneMore}y${yTheSame}`
    } 

    if (orderedPair.y > 1) {
        let xTheSame = orderedPair.x 
        let yOneLess = orderedPair.y - 1

        resultingVectors.south = `x${xTheSame}y${yOneLess}`
    } 

    if (orderedPair.y < yRange) {
        let xTheSame = orderedPair.x 
        let yOneMore = orderedPair.y + 1

        resultingVectors.north = `x${xTheSame}y${yOneMore}`
    } 

    return resultingVectors
}

//creates a data map for a room of any dimensions. can only be a square room.
const vectorSpawner = (roomName, xRange, yRange) => {
    let vectorsObject = {}
    let xVals = []
    let yVals = []
   
    for (let i=1; i<=xRange; i++) {xVals.push(i)}
    for (let i=1; i<=yRange; i++) {yVals.push(i)}
  
    for (let xVal of xVals) {
        for (let yVal of yVals) {
            let vectorName = `x${xVal}y${yVal}`
            let vectorContent = centralRoomsObject[`${roomName}`][vectorName]

            vectorsObject[vectorName] = {
                availableToMove: surroundingVectors(xRange, yRange, {x: xVal, y: yVal}),
                interactableContent: vectorContent.interactableContent,
                description: vectorContent.description
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

let allRooms = {
    room0: new Room('room0', 3, 3),
    room1: new Room('room1', 4, 5),
    room2: new Room('room2', 3, 6),
    room3: new Room('room3', 1, 2)
}

module.exports = {
    allRooms
}