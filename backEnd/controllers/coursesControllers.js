const { showError } = require('../helpers')
const {
  newCourse,
  allCourses,
  deletecourse,
  updateCourse,
  showCourseById,
} = require('../models/coursesModels')

exports.create = async (req, res) => {
  const { title, description, price, imageUrl, resurceUrl } = req.body

  const payload = {
    title,
    description,
    price,
    imageUrl,
    resurceUrl,
    createDate: new Date(),
    updateDate: new Date(),
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
  const { id } = req.params
  try {
    const user = await showCourseById(id)
    return res.status(200).json({
      status: 'success',
      user,
    })
  } catch (e) {
    showError(res, e)
    console.log(e)
  }
}
