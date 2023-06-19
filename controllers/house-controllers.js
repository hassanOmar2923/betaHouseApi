const { houseModel } = require("../models/Houses-model");
const { usersModel } = require("../models/users-model");
const { houseValidation } = require("../validations/house-validation");
//get data
const get = async (req, res) => {
  try {
    const Data = await houseModel.find().populate({
        path:'user',
        model:'users',
        select:'_id name'
    });
    res.send(Data);
  } catch (error) {
    res.send(error.message);
  }
};
//getById
const getaById = async (req, res) => {
    try {
        let {id}=req.params
      const PersonaldData = await houseModel.findById(id);
      res.send(PersonaldData);
    } catch (error) {
      res.send(error.message);
    }
  };
//post data
const Post = async (req, res) => {
  try {
    //validation
    let { error } = houseValidation(req.body);
    if (error) return res.send(error.message);
    //checking the user is valid
    let userData = await usersModel.findOne({_id: req.body.user})
    if(!userData) return res.send({status:false, message: "user not found!"});
    //posting the data
    const postData = new houseModel(req.body);
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
      let { error } = houseValidation(req.body);
      if (error) return res.send(error.message);
          //checking the user is valid
    let userData = await usersModel.findOne({_id: req.body.user})
    if(!userData) return res.send({status:false, message: "user not found!"});
      //putting the data
      const putdate =await houseModel.findByIdAndUpdate(id,req.body,{new:true});
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
        let deletedata=await houseModel.findByIdAndDelete(id)
        res.send({
            status:true,
            message:'successfuly deleted',
     
        });
    } catch (error) {
        res.send(error.message);
    }
   

  }
module.exports = { get, Post ,Put,getaById,Delete};
