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
    
      if(!initUnit && !initNum) {
        // res.json({"error": "invalid number and unit"});
        res.send("invalid number and unit");
      } else if(!initUnit) {
        // res.json({"error": "invalid unit"});
        res.send("invalid unit");
      } else if(!initNum) {
        // res.json({"error": "invalid number"});
        res.send("invalid number");
      } else {
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
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
