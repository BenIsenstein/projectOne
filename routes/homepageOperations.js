const express = require('express')
const path = require('path')
const {player} = require('../model/gameplay/objectsModule')
const {allRooms} = require('../model/gameplay/roomsModule')
const {createAccount, findAccountByName} = require('../model/database/accounts')
let router = express.Router()


//This router navigates the entire list of "homepage" needs - home, about, login, signup, and playAsGuest.
//filenames in the projectOne/model/homepage directory must match the :homepageID param.
router.get('/:homepageId', (req, res) => {
    let homepageId = req.params.homepageId
    let options = {
        root: path.join(
            __dirname, '../model/homepage'
        )
    }
    
    res.sendFile(`${homepageId}.html`, options)
})


// requirements for valid signup:
// username is available
// password has some level of safety
router.post('/signup', async (req, res) => {
    let reqUsername = req.body.username
    let reqPassword = req.body.password
    let isPassSafe = validatePass(reqPassword)
    let isNameFree = await validateName(reqUsername)
    
    if (isPassSafe && isNameFree) {
        let newGame = {
            player,
            allRooms
        } 

        await createAccount(reqUsername, reqPassword, newGame)
        //let newAccountId = await createAccount(reqUsername, reqPassword, newGame)
        //console.log('newAccountId: ', newAccountId)

        let successObject = {}

        successObject.successMessage = 'Success! Main menu or play now?'

        res.json(successObject)
    } 
    else {
        let errorObject = {}
        
        if (!isPassSafe) 
        errorObject.passwordError = 'Password not strong enough!'
            
        if (!isNameFree)
            errorObject.usernameError = 'Username taken!'
        
        res.status(400).json(errorObject)
    }

    async function validateName(username) {
        let accountExists = await findAccountByName(username)     
        return !accountExists
    }

    function validatePass(password) { 
        return (
        /.{6,}$/.test(password) &&
        /[A-Z]+/.test(password) &&
        /[a-z]+/.test(password) &&
        /[0-9]+/.test(password)
        )
    }
})  

router.post('/login', (req, res) => {})



module.exports = {
    router 
}