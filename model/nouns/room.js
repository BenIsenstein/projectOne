const {Chest} = require("./chest")
const {Letter} = require("./letter")
const {Component} = require("./object")
const {Door} = require("./door")


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


const vectorSpawner = (xRange, yRange) => {
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

            vectorsObject[`x${xVal}y${yVal}`] = {
                vector: orderedPair,
                availableToMove: surroundingVectors(xRange, yRange, orderedPair),
                interactiveContent: null,
                description: null
            }
        }
    }

    return vectorsObject
}


function Room(roomId, xRange, yRange) {
    this.name = `Room ${roomId}`
    this.id = roomId
    this.description = `${this.name}. New room, new mystery...`
    this.vectors = vectorSpawner(xRange, yRange)
}


let testRoom = new Room(0, 3, 3)

console.log(testRoom.name + ' ' + testRoom.id + '. ' + testRoom.description) 
console.log(testRoom.vectors)

for (let name in testRoom.vectors) {
    console.log(`${name}  availableToMove:\n`)
    for (let vector in testRoom.vectors[`${name}`].availableToMove) {
        console.log(testRoom.vectors[`${name}`].availableToMove[`${vector}`])
    }
}

module.exports = {
    Room
}