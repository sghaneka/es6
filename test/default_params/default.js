var assert = require('assert');
describe('Default Tests', function() {
  describe('default', function() {
    it('provides defaults', function() {

        var doWork = function(name = "Scott"){
            return name;
        };

        var result = doWork();

      assert.equal("Scott", result);
    });
  });
});

