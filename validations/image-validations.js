const joi = require('joi')
//image validation
function imagesValidation(image){
    const imageVal=joi.object({
        house:joi.string().required(),
        image:joi.string().required(),
    })
    return imageVal.validate(image)
}
module.exports={imagesValidation}