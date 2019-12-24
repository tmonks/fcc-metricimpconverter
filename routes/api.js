/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
    /*
      initNum = 3.1;
      initUnit = 'mi';
      returnNum: 5.0000008;
      returnUnit: 'km';
      toString = '3.1 miles converts to 5.00002 kilometers';
    */
    
      console.log("Input received: " + input);
    
      if(!returnUnit && !returnNum) {
        // res.json({"error": "invalid number and unit"});
        res.send("invalid number and unit");
      } else if(!returnUnit) {
        // res.json({"error": "invalid unit"});
        res.send("invalid unit");
      } else if(!returnNum) {
        // res.json({"error": "invalid number"});
        res.send("invalid number");
      } else {
        res.json({
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string: toString
        });  
      }
    });
    
};
