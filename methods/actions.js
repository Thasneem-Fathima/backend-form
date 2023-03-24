var User = require('../models/user')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNew: async function (req, res) {
      if ((!req.body.name) || (!req.body.password) || (!req.body.num) || (!req.body.email)) {
        res.json({success: false, msg: 'Enter all fields'})
      } else {
        var newUser = User({
          name: req.body.name,
          password: req.body.password,
          num: req.body.num,
          email: req.body.email,
        });
        try {
          const savedUser = await newUser.save();
          res.json({success: true, msg: 'Successfully saved'});
        } catch (err) {
          res.json({success: false, msg: 'Failed to save'});
        }
      }
    }
  };
  
module.exports = functions
