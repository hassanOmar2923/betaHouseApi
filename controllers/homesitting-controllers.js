const {HomeSittingModel,} = require('../models/HomeSetting-model');
const {  homesittingvalidation,} = require('../validations/homeSetting-validation');
// get data from company
const get = async (req, res) => {
  try {
    const getdata = await HomeSittingModel.find();
    res.status(200).send(getdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get by id
const getById = async (req, res, ) => {
  try {
    const { id } = req.params;
    const getbyid = await HomeSittingModel.findById(id);
    res.status(200).send(getbyid);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// post data from server

const Post = async (req, res, ) => {
  try {
    const { error } = homesittingvalidation(req.body);
    if (error) return res.status(400).send(error.message);

    const postdata = await HomeSittingModel(req.body);
    await postdata.save();
    res.status(201).send({
      status: true,
      postdata,
      message: 'succefully created company information',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// put or update company information

const Put = async (req, res, ) => {
  try {
    const { error } = homesittingvalidation(req.body);
    if (error) return res.status(400).send(error.message);
    const { id } = req.params;

    const updatadata = await HomeSittingModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    await updatadata.save();
    res.status(200).send({
      status: true,
      updatadata,
      message: 'successfully updated company information',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  get,
  getById,
  Post,
  Put,
};
