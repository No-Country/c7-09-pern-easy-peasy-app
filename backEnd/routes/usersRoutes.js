const express = require('express')
const router = express.Router()
const {
  create,
  showAll,
  update,
  destroy,
  showById,
} = require('../controllers/usersControllers')
const { createUserValidators } = require('../middlewares/validatorsMiddlewares')

router.get('/users', showAll)
router.post('/users', createUserValidators, create)
router.put('/users/:id', update)
router.delete('/users/:id', destroy)
router.get('/users/:id', showById)

module.exports = router
