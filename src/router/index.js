const express = require('express');
const router = express.Router();
const auth = require('./auth');
const file= require('./file');

router.use('/',auth);
router.use('/file',file);

module.exports=router;