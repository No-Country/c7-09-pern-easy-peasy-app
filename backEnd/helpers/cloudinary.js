const cloudinary = require('cloudinary').v2

const cloudConfig = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
}

cloudinary.config(cloudConfig)

/// //////////////////////
// Uploads an image file
/// //////////////////////

exports.uploadImage = async (imagePath) => {
  const options = {
    use_filename: false,
    unique_filename: true,
    overwrite: true,
    folder: 'avatars',
  }
  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options)
    console.log(result)
    return result.public_id
  } catch (error) {
    console.log('error al cargarImagen: ', error)
    throw new Error(error)
  }
}

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
