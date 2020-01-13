const express = require('express')
const peopleRouter = require('./peopleRouter')
const router = express.Router()
const middleware = require('./authMiddleware')

router.use('*', middleware.authMiddleware, (req, res, next) => {
  res.header('Content-Type', 'application/json');
  next()
})

router.use('/people', peopleRouter)

module.exports = router
