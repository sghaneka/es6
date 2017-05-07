var assert = require('assert');
describe('Template Tests', function() {
  describe('template', function() {
    it('can easily combine literals and data', function() {

        let doWork = function(name){
            return `Hello, ${name}`;
        }

        assert.equal("Hello, Sam", doWork('Sam'));
            
    });
  });
});