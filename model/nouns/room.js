const {Chest} = require("./chest")
const {Letter} = require("./letter")
const {Component} = require("./object")
const {Door} = require("./door")

function Room(roomId, vectors) {
    this.name = "room"
    this.id = roomId
    this.description = "New room, new mystery..."
    this.vectors = vectors
}

let componentFiveDescription = "A rusted and shoddy-looking jumble of old gears. Probably useless."
let panelDescription = "A black panel about the size of a sheet of paper. It appears depressible."
let letterText = "Letter's text."

let testVectors = {
    1: {
        availableToMove: [
            2,
            4
        ], 
        interactiveContent: null
    },
    2: {
        availableToMove: [
            1,
            3,
            5
        ], 
        interactiveContent: null
    },
    3: {
        availableToMove: [
            2,
            6
        ], 
        interactiveContent: null
    },
    4: {
        availableToMove: [
            1,
            5,
            7
        ], 
        interactiveContent: null
    },
    5: {
        availableToMove: [
            2,
            4,
            6,
            8
        ], 
        interactiveContent: new Chest({
            letter: new Letter(letterText),
            backpack: {
                name: "backpack",
                description: "It's a backpack."
            },
            jacket: {
                name: "jacket",
                description: "It's a jacket."
            },
            brokenGears: new Component(5, componentFiveDescription)
        })
    },
    6: {
        availableToMove: [
            3,
            5,
            9
        ],
        interactiveContent: {
            panel: { 
                name: "panel",
                description: panelDescription,
                pressedStatus: false
            }
        }
    },
    7: {
        availableToMove: [
            8,
            8
        ], 
        interactiveContent: null
    },
    8: {
        availableToMove: [
            5,
            7,
            9
        ], 
        interactiveContent: new Door("route/to/room/1")
    }, 
    9: {
        availableToMove: [
            6,
            8
        ], 
        interactiveContent: null
    }
}

let testRoom = new Room(0, testVectors)

console.log(testRoom.name + ' ' + testRoom.id + '. ' + testRoom.description) 
console.log(testRoom.vectors)

