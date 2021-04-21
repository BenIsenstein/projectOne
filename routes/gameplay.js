const express = require('express')
const bodyParser = require('body-parser')
const {allRooms} = require("../model/roomsModule")
const {player} = require("../model/objectsModule")
const {createSceneText} = require("../view/createSceneText")
const {parseAction, walk, read, take, use, enter, inventory, open} = require("../model/gameplay/actionsModule")
let router = express.Router()

router.use(bodyParser.urlencoded({extended: true}))

router.get('/', (req, res) => res.redirect('/play/room0/x2y1'))

router.get('/:room/:vector', (req, res) => {
    //get the room param and find corresponding Room object in the allRooms array
    let allRoomsArray = Object.values(allRooms)
    let room = req.params.room
    let currentRoom = allRoomsArray.find(candidate => candidate.name === room)
    //get the vector param, 
    //update player's location, 
    //use vector to get the description from currentRoom object
    let vector = req.params.vector
    player.currentRoom = room
    player.locationVector = vector
    let description = currentRoom.vectors[vector].description
    //define errorMessage from query params
    let message = req.query.message
    //create scene html and send
    let scene = createSceneText(description, message)
    res.send(scene)
})

//all post requests come in from the html form that the user
//plays the game with. The code inside this router.post() uses 'parseAction()'
//to parse the user's input into a function (action), and what to perform
//the function on (noun). Every possible 'action' function can operate with
//some combination of the inputted noun, the currentVectorObject
//and the currentRoomString. The exception of 'inventory()' just uses the player object.
router.post('/', (req, res) => {
    let userInput = Object.values(req.body)[0]
    let {action, noun} = parseAction(userInput)
    let currentRoomString = player.currentRoom
    let currentVectorObject = allRooms[currentRoomString].vectors[player.locationVector]

    const addMessage = (message) => {
        //grab the referer and remove old message query param, 
        //then direct back to the same scene with current message.
        let referer = req.get('referer').replace(/(.+)\?(.+)/, "\$1")
        res.redirect(`${referer}?message=${message}`)
    }

    //walk
    if (/walk/i.test(action)) { 
        //walk function generates the vector that player is about to walk to.
        let nextScene = walk(currentVectorObject, noun)
        //error handler if/else statement
        if (!nextScene) 
            addMessage("You can't walk there.")
        else 
            res.redirect(`http://localhost:3000/play/${currentRoomString}/${nextScene}`)
    }
    //enter
    else if (/enter/i.test(action)) {
        //enter function generates the route to the next room. 
        //It is the 'route' attribute of the door nested in that vector object.
        let nextRoute = enter(currentVectorObject)
        //error handler if/else statement
        if (!nextRoute) 
            addMessage("You can't do that here.")
        else 
            res.redirect(nextRoute)
    }
    //open
    else if (/open/i.test(action)) {
        //open function returns text to be displayed above the scene description.
        //This is handy, since I can just use addMessage() 
        let openMessage = open(currentVectorObject, noun)
        addMessage(openMessage)
    }
    //inventory
    else if (/inventory/i.test(action)) {
        //the inventory function returns text representing contents of
        //player's inventory attribute. once again using addMessage()
        let inventoryMessage = inventory(player)
        addMessage(inventoryMessage)
    }
    //take
    else if (/take/i.test(action)) {
        //the take function will add the object to player's inventory, and return a little message.
        //the open function will display the chest again, for continuity.
        let takeMessage = take(currentVectorObject, noun, player)
        let openMessage = open(currentVectorObject, 'chest')
        addMessage(openMessage + '<br>' + takeMessage)
    }
    //read
    else if (/read/i.test(action)){
        //check whether the player is in a chest, or their inventory
        let currentDirectory = req.get('referer').replace(/(.*)=(\w+)\W.*/i, "\$2")
        let readMessage = read(currentVectorObject, noun, player, currentDirectory)
        //add the read message. depending on which directory the player is in,
        //make sure to return to the same description that was on screen for continuity.
        if (/chest/i.test(currentDirectory)) {
            let openMessage = open(currentVectorObject, 'chest')
            addMessage(openMessage + '<br>' + readMessage)
        }
        else if (/inventory/i.test(currentDirectory)) {
            let inventoryMessage = inventory(player)
            addMessage(inventoryMessage + '<br>' + readMessage)
        }
        else 
            addMessage(readMessage) 
    }
    //not a function
    else 
        addMessage("I don't understand that.")
    
    
})

module.exports = {
    router
}

