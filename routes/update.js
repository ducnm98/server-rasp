var express = require('express');
var router = express.Router();
var sequelize = require('../config/sequelize');
var Sequelize = require('sequelize');

router.post('/', (req, res, next) => {
  sequelize.query("CALL `insertAgriculter`(:temperatureOut, :temperatureIn, :humidity)", {
    replacements: {
      temperatureOut: req.body.temperatureOut,
      temperatureIn: req.body.temperatureIn,
      humidity: req.body.humidity,
    }
  }).then(data => {
    console.log(data, '\n Data send to server at ', new Date());
    next();
  }).catch(err => {
    console.log('Data send to server at ', new Date(), ' has an errorr: ', err);
  })
});

module.exports = router;