const express = require('express')

const router = express.Router()

const { peopleController } = require('../controllers')

router.get('/', peopleController.searchPeople)
router.get('/:id', peopleController.getPeople)

module.exports = router
