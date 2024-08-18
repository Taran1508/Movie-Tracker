const loginControllers = (req,res)=>{
    const {email , password} =req.body;
    res.json({message: 'Login successful'});
    if (email && password) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(400).json({ message: 'Invalid input' });
    }
}

module.exports = loginControllers;