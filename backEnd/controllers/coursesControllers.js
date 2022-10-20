const { showError } = require('../helpers')
const {
  newCourse,
  allCourses,
  deletecourse,
  updateCourse,
} = require('../models/coursesModels')
const { uploadImage } = require('../helpers/cloudinary')

exports.create = async (req, res) => {
  const { title, description, price, duration, puntuaction, level, objetives } =
    req.body

  const payload = {
    title,
    description,
    price,
    duration,
    puntuaction,
    level,
    objetives,
  }
  try {
    await newCourse(payload)
    res
      .status(200)
      .json({ message: 'Curso creado con exito', code: 201, payload })
  } catch (e) {
    showError(res, e)
    console.log(e)
  }
}
exports.showAll = async (req, res) => {
  try {
    const courses = await allCourses()

    return res.status(200).json(courses)
  } catch (e) {
    showError(res, e)
    console.log(e)
  }
}

exports.update = async (req, res) => {
  const { id } = req.params
  const { title, description, price, imageUrl, resurceUrl } = req.body

  const payload = {
    title,
    description,
    price,
    imageUrl,
    resurceUrl,
    updateDate: new Date(),
  }
  try {
    console.log('payload:', payload)
    const result = await updateCourse(id, payload)
    console.log(result)
    res.status(200).json({ message: 'Curso actualizado con exito', result })
  } catch (e) {
    showError(res, e)
    console.log(e)
  }
}

exports.destroy = async (req, res) => {
  const { id } = req.params
  try {
    await deletecourse(id)
    return res.status(200).json({
      status: 'Course deleted successfully',
    })
  } catch (e) {
    showError(res, e)
    console.log(e)
  }
}

exports.showById = async (req, res) => {
  const { course } = req
  return res.status(200).json({
    status: 'success',
    course,
  })
}

exports.updateImage = async (req, res) => {
  const { id } = req.params
  const { image } = req.files
  try {
    const result = await uploadImage(image.tempFilePath)
    console.log(result)
    const payload = {
      imageUrl: result.url,
      updateDate: new Date(),
    }
    const course = await updateCourse(id, payload)
    return res.status(200).json({
      status: 'success',
      course,
    })
  } catch (e) {
    showError(res, e)
    console.log(e)
  }
}
