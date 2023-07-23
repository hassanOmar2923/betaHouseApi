const joi=require('joi')
// valiadtion
function contactvalidation(contactOBj) {
    let contactval = joi.object({
      Name: joi.string().required(),
      Phone: joi.number().required(),
      message: joi.string().required(),
    });
    return contactval.validate(contactOBj);
  }
  
  module.exports = {
    
    contactvalidation,
  };