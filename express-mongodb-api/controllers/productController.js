const Product = require('../models/productModel');

// Admin controllers
exports.getProductsAdmin = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('admin/products', { title: 'Products Management', products });
  } catch (error) {
    res.status(500).render('error', { title: 'Error', message: error.message });
  }
};

exports.addProductForm = (req, res) => {
  res.render('admin/addProduct', { title: 'Add New Product' });
};

exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/admin/products');
  } catch (error) {
    res.status(400).render('error', { title: 'Error', message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
  } catch (error) {
    res.status(500).render('error', { title: 'Error', message: error.message });
  }
};

// API controllers
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().select('-__v');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};