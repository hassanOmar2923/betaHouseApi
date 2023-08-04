const mongoose=require('mongoose')
//schema
const houseSchema=mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    deposite:{
        type:Number,
        required:true
    },
    parking:{
        type:String,
        required:true
    },
    imagePreview:{
        type:String,
        // required:true
    },
    isAvailible:{
        type:String,
        required:true
    },
    rooms:{
        type:Number,
        required:true
    },
    bathRooms:{
        type:String,
        required:true
    },
    masterRoom:{
        type:String,
        required:true
    },
    descreption:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users',
        // required:true
    },

})
//model
const houseModel=mongoose.model('houses', houseSchema)
//export
module.exports={houseModel}