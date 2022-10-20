const { showError } = require('../helpers')
const { showCourseById } = require('../models/coursesModels')

const courseExists = async (req, res, next) => {
  try {
    const { id } = req.params

    const course = await showCourseById(id)

    if (course.length === 0) {
      const message = 'Course not found'

      const e = { message, code: 404 }

      return next(showError(res, e))
    }

    course.forEach((use) => {
      delete use.password
    })

    req.user = course[0]
    next()
  } catch (error) {
    return next(showError(res, error))
  }
}
module.exports = { courseExists }
