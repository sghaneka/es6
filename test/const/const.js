var assert = require('assert');
describe('Const Tests', function() {
  describe('const', function() {
    it('const example 1', function() {
        const pi = 3.141;
        var r = 2;

        // You can't do this, will result in read only expection
        // pi = 23;

      assert.equal(12.564, pi * r * r);
    });
  });
});

