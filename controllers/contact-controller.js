const { contactModel } = require('../models/contact-model');
const { contactvalidation } = require('../validations/contact-validation');
// get data from contact
const get = async (req, res) => {
  try {
    const contacdata = await contactModel.find();
    res.status(200).send(contacdata);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// get by id
const getaById = async (req, res) => {
  try {
    const { id } = req.params;
    const getdataby = await contactModel.findById(id);
    if (!getdataby)
      return res.status(404).send({ message: 'Contact not found' });
    res.status(200).send(getdataby);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// post contact data
const Post = async (req, res) => {
  try {
    const { error } = contactvalidation(req.body);
    if (error) return res.status(400).send(error.message);
    const contactdata = await contactModel(req.body);
    await contactdata.save();
    res.status(201).send({
      status: true,
      contactdata,
      message: 'Contact data saved successfully',
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
  //dalete specific databyId
  const Delete=async(req,res)=>{
    try {
        const {id}=req.params
        //delete specific databyId
        const deletedata=await contactModel.findByIdAndDelete(id)
        res.status(200).send({
            status:true,
            message:'successfuly deleted',
            data:deletedata

     
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
   

  }
module.exports = { get, Post ,getaById,Delete};

