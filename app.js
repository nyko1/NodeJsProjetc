const express = require('express')
const cors = require('cors')

const projetsRoutes = require('./routes/projets')
const searchRoutes = require('./routes/search')
const equipesRoutes = require('./routes/equipes')
const participantsRoutes = require('./routes/participants')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/projets', projetsRoutes)
app.use('/api/search', searchRoutes)
app.use('/api/equipes', equipesRoutes)
app.use('/api/participants', participantsRoutes)

module.exports = app
