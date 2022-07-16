const express = require('express');
const router = express.Router();
const authController= require('../controller/AuthController');
const joi = require('../middleware/joi');

router.post('/register',joi('register'),authController.Register);
router.post('/login',joi('login'),authController.Login);

module.exports=router;