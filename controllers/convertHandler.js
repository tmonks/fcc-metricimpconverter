/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    //let match = input.match(/^[0-9./]+/);
    let match = input.match(/^[0-9.]+\/?[0-9.]*(?=[a-z])/i)
    // const [result] = input.match(/[A-Za-z]*$/);
    return match 
      ? eval(match[0]) 
      : input.match(/^[a-z]/i)
        ? 1
        : null;
  };
  
  this.getUnit = function(input) {
    // const [result] = input.match(/[A-Za-z]*$/);
    let match = input.match(/(gal|lbs|mi|l|kg|km)$/i);
    
    return match ? match[0] : null;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "l";
        break;
      case "lbs":
        result = "kg";
        break;
      case "mi":
        result = "km";
        break;
      case "l":
        result = "gal";
        break;
      case "kg":
        result = "lbs";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = null;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "mi":
        result = "miles";
        break;
      case "l":
        result = "liters";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = null;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = null;
    }
    
    return Math.round(result * 10**5) / 10**5;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + " " + this.spellOutUnit(initUnit) 
      + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
