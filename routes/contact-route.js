const express = require('express');
const {
  get, Post ,getaById,Delete
} = require('../controllers/contact-controller');
const router = express.Router();

router.get('/', get);
router.get('/:id', getaById);
router.post('/', Post);
router.delete('/:id', Delete);
module.exports = router;
