const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const logger = require('morgan')

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.listen(3000, () => {
  console.log('Server started on port 3000')
})

module.exports = app
