const express = require('express')
const projetsCtlr = require('../controllers/projets')

const router = express.Router()

router.get('/', projetsCtlr.getAll)
router.post('/', projetsCtlr.post)

module.exports = router
