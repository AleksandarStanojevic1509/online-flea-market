const User                      = require('../models/User');
const moment                    = require('moment');
const log                       = require('../services/logger');
const { to, ReE, ReS, TERR }    = require('../services/utility');
const CONFIG                    = require('../config');
const bcrypt                    = require('bcrypt');
const jwt                       = require('jsonwebtoken');



exports.getAllUsers = async (req, res) => {
    console.log('TESSST')
    let product = await User.findAll()
    console.log (product)
    res.send(product)
}

exports.createUser = async (req, res) => {
    let [err, findUser] = await to(User.findOne({where:{email:req.body.email}}));
    if (err) return ReE(res, `Can't find user with ${req.body.email} email.`);

    if (findUser === null){
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const options = {
            id: moment().unix(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPass,
            email: req.body.email,
            isAdmin: req.body.admin
        }

        let [err, user] = await to(User.create(options));
        if (err) return ReE(res, `Can't create new user account.`);

        return ReS(res, {user:user, msg: `User account successfully created.`});
        
    } else {
        return ReS(res, {email:req.body.email, msg: `Email: ${req.body.email}, already exists.`});
    }  
    
}

exports.loginUser = async (req, res) => {
    let [err, user] = await to(User.findOne({where:{email:req.body.email}}));
    if (err) return ReE(res, `Can't find user with ${req.body.email} email.`);

    if (user === null) return ReS(res, {email:req.body.email, msg: `Email: ${req.body.email}, already exists.`})
    else {
        const token = jwt.sign(
            {
                email:user.email,
                id: user.id
            },
            CONFIG.jwt_token,
            {
                expiresIn: '1h'
            }
        )
        return ReS(res, {token:token});
    }
}

exports.deleteUser = async (req, res) => {
    const userId = req.params.id

    let [err, deletedUser] = await to(User.destroy({where:{id:userId}}));
    if (err) return ReE(res, `Can't delete user account.`);

    return ReS(res, {msg: `Successfully deleted user account.`});


}