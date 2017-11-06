var assert = require('assert');
describe('Arrays...', function() {
    it('forEach', function() {
        var sample = [1, 2, 3];

        sample.forEach(function (currentValue, index, array){
           array[index] = currentValue * 2;
        })

        assert.deepEqual( sample, [2, 4, 6]);

    });

    it('filter', function() {
        var sample = [1, 2, 3];

        var result = sample.filter(function(elem){
            return elem !== 2;
        });

        assert.deepEqual(result, [1,3]);

        result = sample.filter(elem => elem !==2 );

        assert.deepEqual(result, [1,3]);
    });

    it('map', function() {
         var sample = [1, 2, 3];

         var mapped = sample.map(function(elem) {
             return elem * 10;
         });

         assert.deepEqual(mapped, [10,20,30]);
         assert.deepEqual(sample, [1,2,3]);

         mapped = sample.map(elem => elem * 10);

        assert.deepEqual(mapped, [10,20,30]);
         assert.deepEqual(sample, [1,2,3]);

    });

    it ('reduce', function() {
        var sample = [1, 2, 3];

        var sum = sample.reduce(function(sum, elem){
            return sum + elem;
        });

        assert.equal(sum, 6);

        sum = sample.reduce( (sum, elem) => sum + elem);

        assert.equal(sum, 6);
    })
});