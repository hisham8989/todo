const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home_controller')

//** @Route to Landing page */
router.get('/', homeController.home)

//** @Route to create task /task/create */
//** @Route to Delete task /delete?taskid */

// forward routes that is related to task 
router.use('/task',require('./task'))
router.use('/delete',require('./delete'))

module.exports = router
