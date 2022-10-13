const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
// const fs = require('fs')
// const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// fs.createWriteStream(path.join(__dirname, '../tmp', 'access.log'), {
//   flags: 'a',
// })

// fs.createWriteStream(path.join(__dirname, '../tmp', 'hola.log'), {
//   flags: 'a',
// })

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})

module.exports = app
