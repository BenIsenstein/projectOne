const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const hostUrl = `http://localhost:${port}`
module.exports = {hostUrl}

app.get('/', (req, res) => res.redirect('/homepage/home'))

const {router: homepageRouter} = require('./routes/homepageOperations')
const {router: gameplayRouter} = require('./routes/gameplay')
const {router: inputForm} = require('./routes/inputForm')

app.use('/homepage', homepageRouter)
app.use('/play', gameplayRouter)
app.use('/testform', inputForm)

app.use(express.static('public'))
app.listen(port, () => console.log(`Game server listening at ${hostUrl}`))
