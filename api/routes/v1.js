const { Router }                = require('express');
const productController         = require('../controllers/ProductController');
const userController            = require('../controllers/UserController');
const newsletterController      = require('../controllers/NewsletterController');

const router = Router();



router.get('/', (req, res) => {
    res.render('index');
});

// ********************User
router.post('/login', userController.loginUser);
router.get('/users', userController.getAllUsers);
router.post('/user', userController.createUser);
// router.get('/user/:id', userController.getUser);
// router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);


// ********************Product
router.get('/products', productController.getAllProducts);



// ********************Orders



// ********************Newsletter
router.post('/newsletter', newsletterController.addToNewsletterList);





module.exports = router;