
/*  const { expect } = import('chai');
const { default: add } = import( {add} ,'../src/add.js');*/

import {expect} from 'chai'



import add from '../src/add.js'
describe('test file', function() {

  beforeEach(function() {
  });
  describe("add()", function(){ 
    it('add', function() {
      expect(add(1, 2)).to.equal(3);
    });
  })
  
});