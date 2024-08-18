const express = require('express');
const path = require('path');
const loginControllers = require('../controllers/loginControllers');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '../../frontend/src/login.html'));
});

router.post('/', loginControllers);

module.exports = router;

