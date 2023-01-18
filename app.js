const express = require('express')
const cors = require('cors')

const projetsRoutes = require('./routes/projets')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/projets', projetsRoutes)

module.exports = app
