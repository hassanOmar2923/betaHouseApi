const express = require('express');
const {
  get,
  getById,
  Post,
  Put,
  Delete
} = require('../controllers/service-controllers');
const router = express.Router();
router.get('/', get);
router.get('/:id', getById);
router.post('/', Post);
router.put('/:id', Put);
router.delete('/:id', Delete);
module.exports = router;
