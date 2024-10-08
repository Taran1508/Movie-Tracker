const express = require('express');
const app = express();
const path = require('path');
const movieRoutes = require('./routes/movies');
const signUpRoutes = require('./routes/signUp');
const loginRoutes = require('./routes/login');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname,'../frontend/public')));
app.use(express.static(path.join(__dirname,'../frontend/src')));

app.use('/login', loginRoutes);

app.use('/SignUp', signUpRoutes);

app.use('/movies', movieRoutes);

app.get('/movie/:id',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend/src/movie.html'));
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend/public/index.html'));
})

let server; // Keep a reference to the server

if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
  });
}

module.exports = { app, server }; 