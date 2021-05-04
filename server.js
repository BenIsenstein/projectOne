const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const hostUrl = `http://localhost:${port}`

app.get('/', (req, res) => res.redirect('/homepage/home'))

const {router: homepageRouter} = require('./routes/homepageOperations')
const {router: gameplayRouter} = require('./routes/gameplay')

app.use('/homepage', homepageRouter)
app.use('/play', gameplayRouter)

app.listen(port, () => console.log(`RIDDLE ADVENTURE listening at ${hostUrl}`))
