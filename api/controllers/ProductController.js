const Product                   = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    console.log('TESSST')
    let product = await Product.findAll()
    console.log (product)
    res.send(product)
}
