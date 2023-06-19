const mongoose=require('mongoose')
//schema
const imageSchema=mongoose.Schema({
    house:{
        type:mongoose.Types.ObjectId,
        ref:'houses',
        required:true
    },
    image:{
        type:String,
        required:true
    },
})
//model
const imagesModel=mongoose.model('images', imageSchema)
//exporting
module.exports={imagesModel}