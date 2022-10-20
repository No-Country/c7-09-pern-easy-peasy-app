const express = require('express')
const router = express.Router()
const {
  create,
  showAll,
  update,
  destroy,
  showById,
} = require('../controllers/usersControllers')
const {
  protectSession,
  protectUserAccount,
} = require('../middlewares/authMiddlewares')
const { userExists } = require('../middlewares/users.middlewares')
const { createUserValidators } = require('../middlewares/validatorsMiddlewares')
router.post('/users', createUserValidators, create)
router.get('/users', showAll)
router.get('/users/:id', userExists, showById)

router.put('/users/:id', userExists, protectSession, protectUserAccount, update)
router.delete(
  '/users/:id',
  userExists,
  protectSession,
  protectUserAccount,
  destroy
)

module.exports = router
