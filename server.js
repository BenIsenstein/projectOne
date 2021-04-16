const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const homepageRoutes = require('./routes/homepageOperations')
const {router: roomRoutes} = require('./routes/room')


app.use('/', homepageRoutes)
app.use('/room', roomRoutes)




app.listen(port, () => console.log(`Game server listening at http://localhost:${port}`))