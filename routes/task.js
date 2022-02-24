const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task_controller');

// create a task
router.post('/create',taskController.create)

module.exports = router