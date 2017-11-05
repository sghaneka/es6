var assert = require('assert');
describe('Spread Tests', function() {
  describe('spread', function() {
    it('spread example 1', function() {

        function myFunction(a, b){
            return a + b;
        }

        // this will spread an array into individual arguments, so that we can call a function
        let data = [1, 4];
        let result = myFunction(...data);

        assert.equal(5, result);


    });


    it('spread with array', function() {

      var x = Array(5);
      // let's init the array...
      var results = [...Array(5)].map( (n, i) => ({ item: i  }));
      console.log(results);
      assert.equal(5, 5);
    });

  });
});