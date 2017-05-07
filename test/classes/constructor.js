var assert = require('assert');
describe('Class Tests', function() {
  describe('class', function() {

    it('ES6 Classes, behind the scenes', function() {

        // this is done on the prototype

        class Employee {

            constructor(name){
                this._name = name;
            }

            doWork() {
                return "complete!";
            }
            getName() {
                return this._name;
            }
        }

        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");

        assert.equal("Scott", e1.getName());
        assert.equal("Alex", e2.getName());
    });
  });
});

