const express = require('express')
<<<<<<< HEAD
const router = express.Router()

const participantController = require('../controllers/participants')

router.get('/', participantController.getAll)
=======
const participantsController = require('../controllers/participants')

const router = express.Router()

router.get('/', participantsController.getAll)
>>>>>>> 34fee0d6cf0dd70bee30621f3f81d3858b4e0944

module.exports = router
