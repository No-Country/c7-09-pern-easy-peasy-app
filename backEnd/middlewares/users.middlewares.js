const { showError } = require('../helpers')
const { showUserById } = require('../models/userModel')

const userExists = async (req, res, next) => {
  try {
    const { id } = req.params

    const user = await showUserById(id)

    if (user.length === 0) {
      const message = 'User not found'

      const e = { message, code: 404 }

      return next(showError(res, e))
    }

    user.forEach((use) => {
      delete use.password
    })

    req.user = user[0]
    next()
  } catch (error) {
    return next(showError(res, error))
  }
}
module.exports = { userExists }
