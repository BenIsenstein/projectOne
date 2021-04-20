const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const hostUrl = `http://localhost:${port}`
module.exports = {hostUrl}

app.get('/', (req, res) => res.redirect('/homepage/home'))

const {router: homepageRouter} = require('./routes/homepageOperations')
const {router: gameplayRouter} = require('./routes/gameplay')

app.use('/homepage', homepageRouter)
app.use('/play', gameplayRouter)

//app.use(express.static('public'))
app.listen(port, () => console.log(`RIDDLE ADVENTURE listening at ${hostUrl}`))
