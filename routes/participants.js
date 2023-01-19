const express = require('express')
const participantsController = require('../controllers/participants')

const router = express.Router()

router.get('/', participantsController.getAll)

module.exports = router
