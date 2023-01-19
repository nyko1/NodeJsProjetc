const express = require('express')
const router = express.Router()

const equipeController = require('../controllers/equipes')

router.get('/', equipeController.getAll)

module.exports = router
