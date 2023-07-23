const joi=require('joi')

// valiadtion
function galleryvalidation(galleyOBj) {
    const galleryval = joi.object({
      ImageTitle: joi.string().required(),
      Image: joi.string().required(),
    });
    return galleryval.validate(galleyOBj);
  }
  
  module.exports = {
    
    galleryvalidation,
  };