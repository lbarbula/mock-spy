"use strict";

//jshint expr: true
var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

chai.should();

describe('sinon tests', function () {
  var student, schedule;
  beforeEach(function(){
    student = {
      dropClass: function(classId, callback) {
        if(!!callback.dropClass) {
          callback.dropClass()
        } else {
          callback()
        }
      }
    }
    schedule = {
      dropClass: function() {
        console.log('class Dropped')
      }
    }
  })
  describe('student.dropClass', function () {
    it('should call the callback', function (){
      // var called = false
      // function callback() {
      //   called = true
      // }
      var spy = sinon.spy()
      student.dropClass(1, spy)
      spy.called.should.be.true
      // expect(callback).to.be.true
    })

    it('should call the callback', function() {
      function onClassDropped() {
        console.log("OCD function was called")
      }
      var spy = sinon.spy(onClassDropped)
      student.dropClass(1, spy)

      spy.called.should.be.true
    })
    it('should call the callback even if it\'s a method on and object', function() {


    })
  })
})
