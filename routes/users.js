const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller')

/**
 * router.get('/users/contollerName,controllerFile.controllerMethod)
 */
router.get('/profile',usersController.profile)

module.exports = router;