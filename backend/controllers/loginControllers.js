const loginControllers = (req,res)=>{
    const {email , password} =req.body;
    res.json({message: 'Login successful'});
}

module.exports = loginControllers;