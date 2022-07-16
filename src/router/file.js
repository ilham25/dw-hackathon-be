const express = require('express');
const router = express.Router();
const filecontroller = require('../controller/FileController');
const auth = require('../middleware/auth');
const joi = require('../middleware/joi');

router.get('/:id',auth(),filecontroller.get);
router.post('/',auth(),joi('file'),filecontroller.insert);
router.patch('/:id',auth(),joi('file'),filecontroller.update);
router.delete('/:id',auth(),filecontroller.destroy);




module.exports=router;