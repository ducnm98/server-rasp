var express = require('express');
var router = express.Router();
var sequelize = require('../config/sequelize');
var Sequelize = require('sequelize');

function average(data) {

}

async function processData(data, callback) {
  let temp = Array.from(Array(24).keys());
  let xAxis = [];
  let humidityOut = [], humidityIn = [], temperature = [];
  let humidityOut_Temp = [], humidityIn_Temp = [], temperature_Temp = [];
  let flag = 0;
  await data.map(item => {
    let time = new Date(item.time);
    let humidityOut_Temp = [], humidityIn_Temp = [], temperature_Temp = [];
    if (!xAxis.includes(time.getHours())) {
      xAxis.push(time.getHours());
      humidityOut_Temp = [], humidityIn_Temp = [], temperature_Temp = [];
      data.filter(value => {
        let 
      })
    } else {
      humidityOut_Temp.push(item.humidityOut);
      humidityIn_Temp.push(item.humidityIn);
      temperature_Temp.push(item.temperature);
    }
    
  })
};

router.get('/', (req, res, next) => {
  sequelize.query("CALL `dataInDate`(:potID, :time)", {
    replacements: {
      potID: 1,
      time: new Date()
    }
  }).then(data => {
    data = JSON.parse(JSON.stringify(data));
    console.log(data)
    processData(data, (xAxis, humidityOut, humidityIn, temperature) => {
      res.render('report/index', {
        xAxis: xAxis,
        humidityOut: humidityOut,
        humidityIn: humidityIn,
        temperature: temperature,
      });
    })
  })
  
});

module.exports = router;