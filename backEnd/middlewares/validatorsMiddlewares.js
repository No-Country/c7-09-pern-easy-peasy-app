const { body, validationResult } = require('express-validator')
const { showError } = require('../helpers')

const checkResult = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map((err) => err.msg)

    const message = errorMsgs.join('. ')
    const e = { message, code: 400 }

    return next(showError(res, e))
  }

  next()
}

const createUserValidators = [
  body('firstName').notEmpty().withMessage('firstName cannot be empty'),
  body('lastName').notEmpty().withMessage('lastName cannot be empty'),
  body('email').isEmail().withMessage('Must provide a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .isString()
    .withMessage('Password must contain letters and numbers'),
  checkResult,
]
module.exports = {
  createUserValidators,
}
