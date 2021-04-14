const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const roomRoutes = require('./routes/room')
const homepageRoutes = require('./routes/homepageOperations')

app.use('/room', roomRoutes)
app.use('/', homepageRoutes)



app.listen(port, () => {
    console.log(`Game server listening at http://localhost:${port}`)
  })