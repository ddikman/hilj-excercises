'use strict'

const express = require('express')

// Constants
const PORT = process.env.APP_PORT || 8801
const HOST = '0.0.0.0'

// App
const app = express()

app.use(express.static('public'))

// map all routes
app.use(require('./routers/exercise-router'))

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)