const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/contentController');
const { authenticate, authorize } = require('../middleware/auth');

router.get('/', authenticate, ContentController.getContentList);
router.post('/', authenticate, authorize(['professor', 'admin']), ContentController.createContent);

module.exports = router;