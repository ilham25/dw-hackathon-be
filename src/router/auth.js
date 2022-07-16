const express = require('express');
const router = express.Router();
const authController= require('../controller/AuthController');
const joi = require('../middleware/joi');

router.post('/register',joi('register'),authController.Register);

module.exports=router;