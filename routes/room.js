const express = require('express')


let router = express.Router()

router.get('/:roomId', (req, res) => {
    let roomId = req.params.roomId
    let room = require(`../model/rooms/${roomId}/router`)
    
    router.use(`/${roomId}`, room)
})

module.exports = {
    router
}