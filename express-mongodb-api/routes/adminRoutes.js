const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');

// Admin dashboard
router.get('/', (req, res) => {
  res.render('admin/dashboard', { title: 'Admin Dashboard' });
});

// User routes
router.get('/users', userController.getUsersAdmin);
router.get('/users/add', userController.addUserForm);
router.post('/users/add', userController.addUser);
router.get('/users/delete/:id', userController.deleteUser);

// Product routes
router.get('/products', productController.getProductsAdmin);
router.get('/products/add', productController.addProductForm);
router.post('/products/add', productController.addProduct);
router.get('/products/delete/:id', productController.deleteProduct);

module.exports = router;