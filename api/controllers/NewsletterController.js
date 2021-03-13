const Newsletter                = require('../models/Newsletter');
const { to, ReE, ReS, TERR }    = require('../services/utility');

exports.addToNewsletterList = async (req, res) =>{
    let options = {
        name: req.body.name,
        email: req.body.email
    }

    let [err, newsletter] = await to(Newsletter.create(options)); 
    if (err) return ReE(res, `Can't add email to newsletter list.`);

    return ReS(res, {msg: `Email successfully add to newsletter list.`})
}