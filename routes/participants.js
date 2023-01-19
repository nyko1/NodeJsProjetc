const express = require('express')
const router = express.Router()

const participantController = require('../controllers/participants')

router.get('/', participantController.getAll)

module.exports = router
