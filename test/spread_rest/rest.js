var assert = require('assert');
describe('Spread Tests', function() {
  describe('spread', function() {
    it('rest parameters', function() {

        // gather the rest of the arguments to the function!
        
        // rest parameter is always the last parameter to the function
        // syntax ...param
        // the rest param will the array
        function myFunction(a, b, ...args){
            return args;
        }
        let a = myFunction(1,2,3,4,5);

        assert.deepEqual([3, 4, 5], a);
    });
  });
});