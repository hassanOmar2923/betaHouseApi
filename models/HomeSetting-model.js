const mongoose = require('mongoose');
const HomeSittingShema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  ComplainEmail: {
    type: String,
    required: true,
  },
  ComplainPhone : {
    type: Number,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  tiktok: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  HeroTitle: {
    type: String,
    required: true,
  },
  HeroDecribtion: {
    type: String,
    required: true,
  },
  heroImage: {
    type: String,
    required: true,
  },
  footerText: {
    type: String,
    required: true,
  },
});

const HomeSittingModel = mongoose.model('HomeSitting', HomeSittingShema);



module.exports = {
  HomeSittingModel,
};
