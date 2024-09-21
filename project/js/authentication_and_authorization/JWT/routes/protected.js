const express = require('express');
const { protectedRoute } = require('../controllers/protectedController');
const authenticateToken = require('../middleware/authenticate');
const router = express.Router();

// Protected route
router.get('/', authenticateToken, protectedRoute);

module.exports = router;
