import add from '/src/add.js';

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(6, -2)).toBe(4);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test('adds zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });
});