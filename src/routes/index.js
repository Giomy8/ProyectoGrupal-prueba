const express = require('express');
const router = express.Router();


const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');



router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/user/info', authMiddleware, userController.getUserInfo);

module.exports = router;