const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home_controller')

router.get('/', homeController.home)

// forward routes that is related to task 
router.use('/task',require('./task'))

module.exports = router
