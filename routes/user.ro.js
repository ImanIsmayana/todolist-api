const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');
const { getAllUsers, createUser } = require('../controllers/userController');

// Get all users
router.get('/', isAuthenticated, getAllUsers);

// Create a new user
router.post('/', isAuthenticated, createUser);

module.exports = router;