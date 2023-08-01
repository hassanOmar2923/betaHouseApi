const mongoose = require('mongoose');
const contactShmea = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},
{ timestamps: true });

const contactModel = mongoose.model('contact', contactShmea);



module.exports = {
  contactModel,
  
};
