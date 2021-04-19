const {Room} = require("./roomConstructor")

let room0 = new Room('room0', 3, 3)

let room1 = new Room('room1', 4, 5)

let room2 = new Room('room2', 3, 6)

let room3 = new Room('room3', 1, 2)

let allRooms = {
    room0, 
    room1, 
    room2, 
    room3
}


module.exports = {
    allRooms
}