const express = require('express');
const path = require('path');
const moviesControllers = require('../controllers/moviesControllers');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../frontend/src/movies.html'))
});

router.post('/',moviesControllers);

module.exports =router;