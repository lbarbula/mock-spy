"use strict";

//jshint expr: true
var chai = require('chai'),
    expect = chai.expect;

chai.should();

describe('number tests', function(){
  function isEven(num) {
    return num % 2 === 0;
  }

describe ('is even', function(){
    it('should return true when number is even', function(){
      isEven(4).should.be.true;
    })
    it('should return false when number is odd', function(){
      expect(isEven(5)).to.be.false;
    })
  })

  function add(num1, num2) {
    return num1 + num2;
  }

  describe('add without setup/teardown', function(){
    var num;

    beforeEach(function(){
      num = 5
    })
    it('should add two number together', function(){
      num = add(num, 5)
      num.should.equal(10)
    })
    it('should be 12 when adding 7 and 5', function(){
      expect(add(7, num)).to.equal(12)
    })
  })
})
