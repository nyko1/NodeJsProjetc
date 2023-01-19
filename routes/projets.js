const express = require('express')
const projetsController = require('../controllers/projets')

const router = express.Router()

router.get('/', projetsController.getAll)
router.post('/', projetsController.post)

module.exports = router
