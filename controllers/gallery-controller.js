const { galleryvalidation } = require('../validations/gallery-validation');
const {  galleryModel } = require('../models/gallery-model');

const get = async (req, res, ) => {
  try {
    const getdat = await galleryModel.find();
    res.status(200).send(getdat);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// get by id
const getById = async (req, res, ) => {
  try {
    const { id } = req.params;
    const clientgetbyid = await galleryModel.findById(id);
    if (!clientgetbyid)
      return res.status(404).send({ message: 'this client not found' });
    res.status(200).send(clientgetbyid);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// pst the service
const Post = async (req, res,) => {
  try {
    const { error } = galleryvalidation(req.body);
    if (error) return res.status(400).send(error.message);

    const gallerydata = await galleryModel(req.body);
    await gallerydata.save();
    res.status(201).send({
      status: true,
      data:gallerydata,
      message: 'successfully created ',
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
// put or updatted service
const Put = async (req, res, ) => {
  try {
    const { error } = galleryvalidation(req.body);
    if (error) return res.status(404).send(error.message);
    let { id } = req.params;
    const updatedata = await galleryModel.findByIdAndUpdate(
      id,
      {
        ImageTitle: req.body.ImageTitle,
        Image: req.body.Image,
      },
      { new: true }
    );
    await updatedata.save();
    res.status(200).send({
      status: true,
      updatedata,
      message: 'successfully updated data',
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
