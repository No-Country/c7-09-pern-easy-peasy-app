const express = require('express')
const router = express.Router()
const {
  create,
  showAll,
  update,
  destroy,
  showById,
  updateImage,
} = require('../controllers/coursesControllers')

router.post('/courses', create)
router.get('/courses', showAll)
router.put('/courses/:id', update)
router.put('/courses:id', updateImage)
router.delete('/courses/:id', destroy)
router.get('/courses/:id', showById)

module.exports = router
