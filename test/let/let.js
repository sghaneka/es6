var assert = require('assert');
describe('Let Tests', function() {
  describe('How let works', function() {
    it('will provide block scoping, unlike var()', function() {

        var doWork = function(flag){
            if (flag)
            {
                let x = 3;
            }
            return x;
        }

        // var result = doWork(true);   will get an error here.... as let is block scoped to the if

      assert.equal(1, 1);
    });
  });
});

