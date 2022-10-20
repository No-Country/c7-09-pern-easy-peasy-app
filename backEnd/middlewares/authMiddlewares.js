const jwt = require('jsonwebtoken')
const { showError } = require('../helpers')
const { showUserById } = require('../models/userModel')

const protectSession = async (req, res, next) => {
  try {
    let token

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      const message = 'Invalid session'

      const e = { message, code: 403 }

      return next(showError(res, e))
    }

    const decoded = await jwt.verify(token, process.env.JWT_SIGN)

    const user = await showUserById(decoded.id)

    if (!user) {
      const message = 'The owner of this token doesnt exist anymore'

      const e = { message, code: 403 }

      return next(showError(res, e))
    }

    req.sessionUser = user[0]
    next()
  } catch (error) {
    return next(showError(res, error))
  }
}

const protectUserAccount = (req, res, next) => {
  const { sessionUser, user } = req

  if (sessionUser.id !== user.id) {
    const message = 'You do not own this account'

    const e = { message, code: 403 }

    return next(showError(res, e))
  }
  next()
}
// const adminRole = async (req, res, next) => {
// const { sessionUser } = req
// const { role } = sessionUser

// if (role !== 'admin') {
//    const message = 'You do not own this account'

// const e = { message, code: 403 }

// return next(showError(res, e))
// }
// next()
// }
module.exports = { protectSession, protectUserAccount }
