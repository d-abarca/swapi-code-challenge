const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

// require environment vars
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Cache-Control', 'no-cache')
  next()
})

app.use(bodyParser.json())
app.use('/api', routes)

if (process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'integration') {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 8081

app.listen(PORT)

// InitServer For

if (process.env.TESTING) {
  module.exports = app
}
