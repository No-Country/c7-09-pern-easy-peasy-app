const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})

module.exports = app
