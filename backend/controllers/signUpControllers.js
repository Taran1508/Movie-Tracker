
const signUpControllers = (req,res)=>{
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);
    res.json({ message: 'Sign up Successful!' });
}

module.exports = signUpControllers;