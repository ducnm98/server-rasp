var express = require('express');
var router = express.Router();
var sequelize = require('../config/sequelize');
var Sequelize = require('sequelize');

router.get('/:humidityOut/:humidityIn/:temperature', (req, res, next) => {
  console.log(req.params.temperatureOut);
  console.log(req.params.temperatureIn);
  console.log(req.params.humidity);
  sequelize.query("CALL `insertAgriculterControl`(:potID, :humidityOut, :humidityIn, :temperature)", {
    replacements: {
      potID: 1,
      humidityOut: req.params.humidityOut,
      humidityIn: req.params.humidityIn,
      temperature: req.params.temperature,
    }
  }).then(data => {
    console.log(data, '\n Data send to server at ', new Date());
    res.send("Update successful")
    next();
  }).catch(err => {
    console.log('Data send to server at ', new Date(), ' has an errorr: ', err);
    res.send("Update erros")
    next();
  })
});

module.exports = router;