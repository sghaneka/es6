var assert = require('assert');
describe('Class Tests', function() {
  describe('class', function() {
    it('Prototypes - basic case 1', function() {

        var Employee = function(){

        };

        Employee.prototype = {
            doWork: function(){
                return "complete!";
            }
        };

        var e = new Employee();

        assert.equal("complete!", e.doWork());
    });

    it('ES6 Classes, behind the scenes', function() {

        // this is done on the prototype

        class Employee {
            doWork() {
                return "complete!";
            }
            getName() {
                return "Scott";
            }
        }

        var e = new Employee();

        assert.equal("complete!", e.doWork());
        assert.equal("Scott", e.getName());
    });



  });
});

