const express = require('express')
const router = express.Router()
const {
  create,
  showAll,
  update,
  destroy,
  showById,
} = require('../controllers/usersControllers')

router.get('/users', showAll)
router.post('/users', create)
router.put('/users/:id', update)
router.delete('/users/:id', destroy)
router.get('/users/:id', showById)

module.exports = router
