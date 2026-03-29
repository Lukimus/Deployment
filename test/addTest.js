
const { expect } = require('chai');
const { default: add } = require('../src/add.js');

describe('test file', function() {

  beforeEach(function() {
  });
  describe("add()", function(){ 
    it('add', function() {
      expect(add(1, 2)).to.equal(3);
    });
  })
  
});