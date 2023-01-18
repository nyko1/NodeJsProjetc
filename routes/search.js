const express = require('express')
const searchController = require('../controllers/search')

const router = express.Router()

router.post('/', searchController.getUserByName)

module.exports = router
