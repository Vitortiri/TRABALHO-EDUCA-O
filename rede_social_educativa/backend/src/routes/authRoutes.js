const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const validate = require('../middleware/validate');
const authValidation = require('../validations/authValidation');

router.post('/register', validate(authValidation.register), AuthController.register);
router.post('/login', validate(authValidation.login), AuthController.login);

module.exports = router;