const User = require('../models/User');

exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findByPk(req.userId, {attributes: ['name', 'email', 'address', 'phone']});
        
        if (!user) {
            res.status(404).json({message: 'User not found.'});
        }else {
          res.json(user);  
        }
    } catch (error) {
        res.status(500).json({message: 'Error to get profile.'});
    }
};