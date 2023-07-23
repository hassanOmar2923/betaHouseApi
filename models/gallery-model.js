const mongoose = require('mongoose');
const gallryShmea = new mongoose.Schema({
  ImageTitle: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

const galleryModel = mongoose.model('gallery', gallryShmea);



module.exports = {
  galleryModel,
  
};
