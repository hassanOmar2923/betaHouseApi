const { usersModel } = require("../models/users-model");
const { usersValidation } = require("../validations/users-validation");
//get data
const get = async (req, res) => {
  try {
    const userData = await usersModel.find();
    res.send(userData);
  } catch (error) {
    res.send(error.message);
  }
};
//getById
const getaById = async (req, res) => {
    try {
        let {id}=req.params
      const PersonaldData = await usersModel.findById(id);
      res.send(PersonaldData);
    } catch (error) {
      res.send(error.message);
    }
  };
//post data
const Post = async (req, res) => {
  try {
    //validation
    let { error } = usersValidation(req.body);
    if (error) return res.send(error.message);
    //post data
    const postData = new usersModel(req.body);
    //save post data
    await postData.save();
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
      let { error } = usersValidation(req.body);
      if (error) return res.send(error.message);
      //put data
      const putdate =await usersModel.findByIdAndUpdate(id,req.body,{new:true});
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
        let deletedata=await usersModel.findByIdAndDelete(id)
        res.send({
            status:true,
            message:'successfuly deleted',
     
        });
    } catch (error) {
        res.send(error.message);
    }
   

  }
module.exports = { get, Post ,Put,getaById,Delete};
