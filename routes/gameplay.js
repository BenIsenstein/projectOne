const express = require('express')
const bodyParser = require('body-parser')
const {allRooms} = require("../model/rooms/allRooms")
const {player} = require("../model/nouns/player")
const {createSceneText} = require("../view/createSceneText")
const {parseAction, walk, read, take, use, enter, inventory} = require("../model/actions/parseAction")
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
    player.currentRoom = room; console.log('GET REQUEST. current room just updated: ', player.currentRoom)
    player.locationVector = vector; console.log('GET REQUEST. current vector just updated: ', player.locationVector)
    let description = currentRoom.vectors[vector].description
    //define errorMessage from query params
    let errorMessage = req.query.error
    //create scene html and send
    let scene = createSceneText(description, errorMessage)
    res.send(scene)
})

router.post('/', (req, res) => {
    let userInput = Object.values(req.body)[0]
    let {action, noun} = parseAction(userInput)

    const addErrorMessage = (errorMessage) => {
        //grab the referer and remove old error message query params, 
        //to direct back to the same scene with current error message.
        let referer = req.get('referer').replace(/(.+)\?(.+)/, "\$1")
        res.redirect(`${referer}?error=${errorMessage}`)
    }
    
    if (!action) {addErrorMessage("I don't understand that.");console.log('no suitable action found')} 
    else {
        if (/walk/i.test(action.name)) {
            let currentRoom = player.currentRoom
            let currentVector = allRooms[currentRoom].vectors[player.locationVector]
            console.log('current room: ', currentRoom)
            console.log('current vector before walking: ', currentVector)
            //walk function generates the vector that player is about to walk to.
            let nextScene = walk(currentVector, noun)
            //error handler if/else statement
            if (!nextScene) {addErrorMessage("You can't walk there.")}
            else {res.redirect(`http://localhost:3000/play/${currentRoom}/${nextScene}`)}
        }
        

        res.redirect(`/play/${action.name}`)
    }





    
   
    
})


module.exports = {
    router
}