const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const {email, password} = req.body;
    try {
        const newUser = await User.create({email, password});
        res.json(newUser);
    } catch (error) {
        res.status(400).json({message: 'Error registering user.'});
    }
};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({where: {email}});

        if(!user || user.password !== password){
            res.status(401).json({message: 'Invalid credentials.'});
        }else {
            const token = jwt.sign({userId: user.id}, 'secretKey', {expiresIn: '1h'});
            res.json({token});
        }  
    } catch (error) {
        res.status(500).json({message: 'Error to login.'});
    }
};
        