const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()
// const { uploadImage } = require('../helpers/cloudinary')

const app = express()

const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// const imagePath = 'https://cdn-icons-png.flaticon.com/512/4359/4359916.png'

// const cargarImagen = async () => {
//   try {
//     await uploadImage(imagePath, 'avatars')
//     console.log(uploadImage(imagePath))
//   } catch (error) {
//     console.log(error)
//   }
// }

// cargarImagen()
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})

module.exports = app
