const test = require('node:test');
const assert = require('node:assert/strict');
const clamp = require('../src/clamp');

test('clamps values below the lower bound', () => {
  assert.equal(clamp(-2, 0, 10), 0);
});

test('leaves values inside the bounds unchanged', () => {
  assert.equal(clamp(5, 0, 10), 5);
});
