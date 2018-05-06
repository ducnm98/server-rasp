var express = require('express');
var router = express.Router();
var sequelize = require('../config/sequelize');
var Sequelize = require('sequelize');

router.post('/', (req, res, next) => {
  console.log(req.body.temperatureOut);
  console.log(req.body.temperatureIn);
  console.log(req.body.humidity);
  sequelize.query("CALL `insertAgriculterControl`(:potID, :temperatureOut, :temperatureIn, :humidity)", {
    replacements: {
      potID: 1,
      temperatureOut: req.body.temperatureOut,
      temperatureIn: req.body.temperatureIn,
      humidity: req.body.humidity,
    }
  }).then(data => {
    console.log(data, '\n Data send to server at ', new Date());
    next();
  }).catch(err => {
    console.log('Data send to server at ', new Date(), ' has an errorr: ', err);
    next();
  })
});

module.exports = router;