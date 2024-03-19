
const user = require('../models/users'); 

const users = async(req, res) =>{
     const myData = await user.find(req.query);
    res.status(200).json({myData});
};
const login = async(req, res) =>{
    const { phone, password } = req.body;
    const user = await user.findOne({ phone: phone });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });
    res.status(200).json({myData});
};

const usersTesting = async(req, res) =>{
    const myData = await user.find({});
    res.status(200).json({myData});
};

module.exports = {users, usersTesting, login};