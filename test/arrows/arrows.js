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

    it('can be used with array methods', function() {

        var numbers = [1,2,3,4];

        var sum = 0;
        numbers.forEach(x => sum += x);
        assert.equal(10, sum);

        var doubled = numbers.map(n => n * 2);
        assert.deepEqual([2,4,6,8], doubled);

    });

    it('this binding....', function() {

        this.name = "Scott";
        assert.equal("Scott", this.name);
    });

    it('this binding.... async', function(done) {

        this.name = "Scott";
        let self = this;

        setTimeout(function(){
            //assert.equal("Scott", this.name);
            assert.equal(typeof this.name, 'undefined');
            assert.equal("Scott", self.name);
            done();
        }, 1);

        // this is bound correctly
        setTimeout(() => {
            assert.equal("Scott", this.name);
        }, 15);


        //assert.equal("Scott", this.name);
    });


  });
});


