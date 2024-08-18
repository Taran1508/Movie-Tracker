const express = require('express');
const path = require('path');
const signUpControllers = require('../controllers/signUpControllers');
const router = express.Router();


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/src/signup.html'))
})

router.post('/', signUpControllers);

module.exports = router;

