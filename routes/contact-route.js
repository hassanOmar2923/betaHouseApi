const express = require('express');
const {
  get, Post ,getaById,
} = require('../controllers/contact-controller');
const router = express.Router();

router.get('/', get);
router.get('/:id', getaById);
router.post('/', Post);

module.exports = router;
