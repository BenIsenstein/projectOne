const express = require('express')
const path = require('path')

let router = express.Router()

router.get('/', (req, res) => res.redirect('/home'))

router.get('/:homepageId', (req, res) => res.sendFile(`${req.params.homepageId}.html`, {root: path.join(__dirname, '../model/homepage')}))

module.exports = router 