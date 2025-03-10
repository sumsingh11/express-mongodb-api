const User = require('../models/userModel');

// Admin controllers
exports.getUsersAdmin = async (req, res) => {
  try {
    const users = await User.find();
    res.render('admin/users', { title: 'Users Management', users });
  } catch (error) {
    res.status(500).render('error', { title: 'Error', message: error.message });
  }
};

exports.addUserForm = (req, res) => {
  res.render('admin/addUser', { title: 'Add New User' });
};

exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect('/admin/users');
  } catch (error) {
    res.status(400).render('error', { title: 'Error', message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/admin/users');
  } catch (error) {
    res.status(500).render('error', { title: 'Error', message: error.message });
  }
};

// API controllers
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-__v');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};