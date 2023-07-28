const { aboutModel } = require('../models/about-model');
const { Aboutvalidation } = require('../validations/about-validation');

const get = async (req, res) => {
  try {
    const data = await aboutModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const getaById = async (req, res) => {
  try {
    const { id } = req.params;
    //is it null
    const getdataby = await aboutModel.findById(id);
    if (!getdataby) return res.status(404).send({ message: 'about not found' });
    res.status(200).send(getdataby);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// post data to server
const Post = async (req, res) => {
  try {
    const { error } = Aboutvalidation(req.body);
    if (error) return res.status(400).send(error.message);
    const postabout = await aboutModel(req.body);
    await postabout.save();
    res.status(201).send({ status: true, postabout, message: 'successfully saved' });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
  //dalete specific databyId
  const Delete=async(req,res)=>{
    try {
        const {id}=req.params
        //delete specific databyId
        const deletedata=await aboutModel.findByIdAndDelete(id)
        res.status(200).send({
            status:true,
            message:'successfuly deleted',
            data:deletedata

     
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
   

  }
module.exports = {  get, Post ,getaById,Delete};
