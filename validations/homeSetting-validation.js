const joi = require('joi');
// validation
function homesittingvalidation(comObj) {
    const companyval = joi.object({
      Title: joi.string().required(),
      name: joi.string().required(),
      location: joi.string().required(),
      logo: joi.string().required(),
      email: joi.string().email().required(),
      ComplainEmail: joi.string().email().required(),
      ComplainPhone: joi.number().required(),
      facebook: joi.string().required(),
      tiktok: joi.string().required(),
      twitter: joi.string().required(),
      instagram: joi.string().required(),
      HeroTitle: joi.string().required(),
      HeroDecribtion: joi.string().required(),
      heroImage: joi.string().required(),
      footerText: joi.string().required(),
    });
    return companyval.validate(comObj);
  }
  
  module.exports = {
    
    homesittingvalidation,
  };