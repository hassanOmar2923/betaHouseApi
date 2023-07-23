const joi=require('joi')
// valiadtion
function Aboutvalidation(aboutOBj) {
    let aboutval = joi.object({
      FaahFaahin: joi.string().required(),
      FaahFaaahinYar: joi.string().required(),
    });
    return aboutval.validate(aboutOBj);
  }

  module.exports = {

    Aboutvalidation,
  };