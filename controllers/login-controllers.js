const { houseModel } = require("../models/Houses-model");
const { usersModel } = require("../models/users-model");
const { loginValidation } = require("../validations/login-validation")
const bcrypt=require('bcrypt')
let jwt = require('jsonwebtoken');
require('dotenv').config();
require('dotenv').config();

//login function
const login = async (req, res) => {
    try {
        // validation
        let { error } = loginValidation(req.body);
        if (error) return res.send(error.message);
    
        // find user data
        let usergetdata = await usersModel.findOne({
            email: req.body.email,
        });
        if (!usergetdata)
          return res.send({
            status: false,
            message: 'username or password is incorrect',
          });
    
        // check password
        let checkpass = await bcrypt.compare(
          req.body.password,
          usergetdata.password
        );
        if (!checkpass)
          return res.send({
            status:false,
            message: 'username or password is incorrect',
          });
        // token using jwt
        let token = jwt.sign(
          {
            id: usergetdata._id,
            name: usergetdata.name,
            role:usergetdata.role
          },
          process.env.token
        );
        
    
        res.header('token', token).json({
          status: true,
          message: 'successfully logged in',
          token: token,
        });
      } catch (error) {
        res.send(error.message);
      }
};

module.exports = {login};
