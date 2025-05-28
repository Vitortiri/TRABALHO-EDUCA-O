const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, UserController.updateProfile);
router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Admin route' });
});

module.exports = router;