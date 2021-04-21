const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
let router = express.Router()

router.use(bodyParser.urlencoded({extended: true}))

//display the input field when the route is loaded.
router.get('/', (req,res) => {
    let options = {
        root: path.join(__dirname, '../view')
    }

    res.sendFile('inputForm.html', options)
})

//handle post request from the form.
router.post('/', (req, res) => {
    let formSubmission = Object.values(req.body)[0]
    res.redirect('/testform')
})

module.exports = {
    router
}