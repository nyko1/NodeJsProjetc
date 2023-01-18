require('dotenv').config()
const http = require('node:http')
const app = require('./app')

const PORT = process.env.PORT || 9200

app.set('port', PORT)

const server = http.createServer(app)

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}/`)
)
