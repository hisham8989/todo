const express = require('express')
const router = express.Router()
const deleteController = require('../controllers/delete_controller.js');

// delete a task
router.get('/',deleteController.delete)

module.exports = router