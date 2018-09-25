var path = require('path');
var expect = require('chai').expect;

var Modulo_First = require(path.join(__dirname, '..', './Modulo_First.js'));

describe('Modulo_First(lis)', function () {
  'use strict';

  it('exists', function () {
    expect(Modulo_First).to.be.a('function');
  });

  it('Works with 1 value', function () {
    expect(Modulo_First([4])).to.eql([0]);
  });

  it('Works for small lists', function () {
    expect(Modulo_First([4,2,8,3,9])).to.eql([0,2,0,3,1]);
  });

  it('Works for big lists', function () {
    expect(Modulo_First([4,2,8,3,9,4,10,5,11,6,9])).to.eql([0,2,0,3,1,0,2,1,3,2,1]);
  });

  it('Works for empty lists', function () {
    expect(Modulo_First([])).to.eql([]);
  });
});
