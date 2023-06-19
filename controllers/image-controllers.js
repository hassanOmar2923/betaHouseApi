const { houseModel } = require("../models/Houses-model");
const { imagesModel } = require("../models/image-model");
const { imagesValidation } = require("../validations/image-validations");
//get data
const get = async (req, res) => {
  try {
    const getdata = await imagesModel.find().populate({
        path:'house',
        model:'houses',
        select:'_id address area type'
    });
    res.send(getdata);
  } catch (error) {
    res.send(error.message);
  }
};
//getById
const getaById = async (req, res) => {
    try {
        let {id}=req.params
      const PersonaldData = await imagesModel.findById(id);
      res.send(PersonaldData);
    } catch (error) {
      res.send(error.message);
    }
  };
//post data
const Post = async (req, res) => {
  try {
    //validation
    let { error } = imagesValidation(req.body);
    if (error) return res.send(error.message);
    //checking the user is valid
    let houseData = await houseModel.findOne({_id: req.body.house})
    if(!houseData) return res.send({status:false, message: "house not found!"});
    //posting the data
    const postData = new imagesModel(req.body);
    //saving the data
    await postData.save();
    //returning the data
    res.send({
        status:true,
        message:'successfuly inserted',
        data:postData
    });
  } catch (error) {
    res.send(error.message);
  }
};
//put
const Put = async (req, res) => {
    try {
        let {id}=req.params
        //validation    
      let { error } = imagesValidation(req.body);
      if (error) return res.send(error.message);
          //checking the user is valid
    let userData = await houseModel.findOne({_id: req.body.house})
    if(!userData) return res.send({status:false, message: "user not found!"});
      //putting the data
      const putdate =await imagesModel.findByIdAndUpdate(id,req.body,{new:true});
      //returning the data
      res.send({
          status:true,
          message:'successfuly updated',
          data:putdate
      });
    } catch (error) {
      res.send(error.message);
    }
  };
  //dalete specific databyId
  const Delete=async(req,res)=>{
    try {
        let {id}=req.params
        //delete specific databyId
        let deletedata=await imagesModel.findByIdAndDelete(id)
        res.send({
            status:true,
            message:'successfuly deleted',
     
        });
    } catch (error) {
        res.send(error.message);
    }
   

  }
module.exports = { get, Post ,Put,getaById,Delete};
