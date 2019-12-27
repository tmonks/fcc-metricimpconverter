/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  // 6 Unit Tests for getNum
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '5.2gal';
      assert.equal(convertHandler.getNum(input),5.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = "3/4mi";
      assert.equal(convertHandler.getNum(input), 0.75);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = "1.5/5km";
      assert.equal(convertHandler.getNum(input), 0.3);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = "2/3/5lbs";
      assert.isNull(convertHandler.getNum(input));
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = "mi";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  // 2 Unit Tests for getUnit
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs - getUnit', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        // console.log("Testing " + convertHandler.getUnit("3.1" + ele) + " is " + ele);
        assert.equal(convertHandler.getUnit("3.1" + ele), ele)
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = "5.7feet";
      assert.isNull(convertHandler.getUnit(input));
      done();
    });  
    
  });
  
  // 1 Unit Test for getReturnUnit
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs - getReturnUnit', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  // 1 Unit Test for spellOutUnit
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs spellOutUnit', function(done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      var expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      input.forEach(function(ele, i) {
        //console.log("Testing " + convertHandler.spellOutUnit(ele) + " is " + expect[i]);
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      })
      //see above example for hint
      done();
    });
    
  });
  
  // 6 Unit Tests for convert
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'L'];
      var expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.04672;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [10, 'km'];
      var expected = 6.21371;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [145, 'lbs'];
      var expected = 65.7709;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [150, 'kg'];
      var expected = 330.693;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});