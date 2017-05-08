var assert = require('assert');
describe('Iterables', function() {
  describe('example 1', function() {
    it('can work with iterators at a low level', function() {

        let sum = 0;
        let numbers = [1,2,3,4];

        //for loop
        sum = 0;
        for(let i=0; i < numbers.length; i++){
            sum += numbers[i];
        }
        assert.equal(10, sum);

        // for in
        sum = 0;
        for(let i in numbers){
            sum += numbers[i];
        }
        assert.equal(10, sum);

        // iterator
        sum = 0;
        // let iterator = numbers.values(); ///get the iterator...
        // let next = iterator.next();
        // while(!next.done){
        //     sum += next.value();
        //     next = iterator.next();
        // }

        // assert.equal(10, sum);

        // for of
        sum = 0;
        for (let n of numbers){
            sum += n;
        }

        assert.equal(10, sum);


     
    });
  });
});