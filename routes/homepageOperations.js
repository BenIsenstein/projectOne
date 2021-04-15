const express = require('express')
const path = require('path')

let router = express.Router()

//This router navigates the entire list of "homepage" needs - home, about, login, signup, and playAsGuest.
//filenames in the projectOne/model/homepage directory must match the :homepageID param.
router.get('/', (req, res) => res.redirect('/home'))

router.get('/:homepageId', (req, res) => {
    let homepageId = req.params.homepageId
    let options = {
        root: path.join(__dirname, '../model/homepage')
    }

    res.sendFile(`${homepageId}.html`, options)
})

module.exports = router 