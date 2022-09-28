const { showError } = require('../helpers')
const { newCourse, allCourses } = require('../models/coursesModels')

exports.createCourse = async (req, res) => {
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
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await allCourses()

    return res.status(200).json({
      status: 'success',
      courses,
    })
  } catch (e) {
    showError(res, e)
  }
}
