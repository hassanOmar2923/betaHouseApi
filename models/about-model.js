const mongoose = require('mongoose');

const aboutShmea = new mongoose.Schema({
  FaahFaahin: {
    type: String,
    required: true,
  },
  FaahFaaahinYar: {
    type: String,
    required: true,
  },
});

const aboutModel = mongoose.model('About', aboutShmea);



module.exports = {
  aboutModel,
 
};
