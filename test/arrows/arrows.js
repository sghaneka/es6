var assert = require('assert');
describe('Arrow Functions', function() {
  describe('arrows', function() {
    it('provides a compact syntax to define a function', function() {

        let add = function(x,y){
            return x + y;
        };

        let add2 = (x,y) => x + y;

        let three = () => 3;

          assert.equal(5, add(2,3));
           assert.equal(5, add2(2,3));
           assert.equal(3, three());
    });
  });
});

