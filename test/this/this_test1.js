// "use strict";

var assert = require('assert');
describe('This Tests', function() {
  describe('this test 1', function() {
    it('this test 1 -basic', function() {

        this.data = [
            { name: 'Samantha', age:12 },
            { name: 'Alexi', age:14 }
        ];

        var user = {
            // local data variable​
            data:[
                {name:"T. Woods", age:37},
                {name:"P. Mickelson", age:43}
            ],
            showData:function () {
                console.log(this.data);
            }
        }

        //user.showData();
        var u = user.showData;
        var binding = u.bind({  data: [32]});
        binding();


    });
  });
});