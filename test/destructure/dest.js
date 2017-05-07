var assert = require('assert');
describe('Destructure Tests', function() {
  describe('example 1', function() {
    it('can destructure arrays', function() {

        var doWork = function(){
            return [1, 3, 2];
        };

        let [x, y] = doWork();

        assert.equal(1, x);
        assert.equal(3, y);
     
    });

    it('can destructure objects', function() {

        var doWork = function(){
            return {
                firstName: "Scott",
                lastName: "Allen",
                twitter: "OdeToCode"
            }
        };

        let {  firstName: f, twitter: t   } = doWork();

        assert.equal("Scott", f);
        assert.equal("OdeToCode", t);
     
    });
  });
});
