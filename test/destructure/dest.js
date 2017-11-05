var assert = require('assert');
describe('Destructure Tests', function() {
  describe('example 1', function() {
    it('destructure arrays', function() {

        var doWork = function(){
            return [1, 3, 2];
        };

        let [x, y] = doWork();

        assert.equal(1, x);
        assert.equal(3, y);

        let star = Array(5);

        var tmp;
        tmp = [...Array(5)];

        console.log(tmp);
     
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

        let { firstName, twitter } = doWork();

        assert.equal("Scott", firstName);
        assert.equal("OdeToCode", twitter);

        var pos = {
            coords:  {
                latitude: 32,
                longitude: 42
            },
            name: "Tim"
        }

        function process(oldway){
            console.log(oldway.coords.latitude);
            console.log(oldway.coords.longitude);

        }

        function processNew({coords, name}){
            console.log(coords.latitude);
            console.log(name);
        }

        process(pos);
        console.log('new way.....');
        processNew(pos);
     
    });
  });
});
