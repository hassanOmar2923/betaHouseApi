const joi = require('joi')
//house validation
function houseValidation(house){
    const houseVal=joi.object({
        type:joi.string().required(),
        area:joi.string().required(),
        address:joi.string().required(),
        age:joi.string().required(),
        rent:joi.number().required(),
        deposite:joi.number().required(),
        parking:joi.string().required(),
        imagePreview:joi.string(),
        isAvailible:joi.string().required(),
        rooms:joi.number().required(),
        bathRooms:joi.number().required(),
        masterRoom:joi.string().required(),
        descreption:joi.string().required(),
        user:joi.string(),
    })
    return houseVal.validate(house)
}
module.exports={houseValidation}