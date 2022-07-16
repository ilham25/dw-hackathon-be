const express = require('express');
const router = express.Router();
const authController= require('../controller/AuthController');
const joi = require('../middleware/joi');
const auth = require('../middleware/auth');

router.post('/register',joi('register'),authController.Register);
router.post('/login',joi('login'),authController.Login);
router.get('/profile',auth(),authController.GetProfile);

module.exports=router;