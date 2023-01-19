const express = require('express')
const projetsController = require('../controllers/projets')

const router = express.Router()

router.get('/', projetsController.getAll)
router.get('/:id', projetsController.getOne)
router.get('/:id', projetsController.getByProgram)
router.post('/', projetsController.post)

module.exports = router
