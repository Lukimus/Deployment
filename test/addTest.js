
/*  const { expect } = import('chai');
const { default: add } = import( {add} ,'../src/add.js'); sdds*/

import assert from 'assert';



import add from '/src/add.js'
describe('add function', () => {
  it('adds two positive numbers', () => {
    assert.strictEqual(add(6, 4), 10);
  });

  it('adds a positive and a negative number', () => {
    assert.strictEqual(add(6, -2), 4);
  });

  it('adds two negative numbers', () => {
    assert.strictEqual(add(-3, -7), -10);
  });

  it('adds zero correctly', () => {
    assert.strictEqual(add(0, 5), 5);
    assert.strictEqual(add(0, 0), 0);
  });
});