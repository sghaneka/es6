var assert = require('assert');
describe('Spread Tests', function() {
  describe('spread', function() {
    it('spread example 1', function() {

        
        function myFunction(a, b, ...args){
            return args;
        }
        let a = myFunction(1,2,3,4,5);

        assert.deepEqual([3, 4, 5], a);


    });
  });
});