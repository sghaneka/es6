var assert = require('assert');
describe('Spread Tests', function() {
  describe('spread', function() {
    it('spread example 1', function() {

        function myFunction(a, b){
            return a + b;
        }

        let data = [1, 4];
        let result = myFunction(...data);

        assert.equal(5, result);


    });
  });
});