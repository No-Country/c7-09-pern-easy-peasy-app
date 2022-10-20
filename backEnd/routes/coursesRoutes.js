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
const { protectSession } = require('../middlewares/authMiddlewares')
const { courseExists } = require('../middlewares/coursesMiddlewares')

router.post('/courses', create)
router.get('/courses', showAll)
router.put('/courses/image/:id', updateImage)
router.get('/courses/:id', courseExists, showById)
router.put('/courses/:id', protectSession, courseExists, update)
router.delete('/courses/:id', protectSession, courseExists, destroy)

module.exports = router
