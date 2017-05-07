var assert = require('assert');
describe('Class Tests', function() {
  describe('class', function() {

    it('Getters and setters', function() {

        // this is done on the prototype

        class Employee {

            constructor(name){
                this._name = name;
            }

            doWork() {
                return "complete!";
            }
            // see the getter here!
            get name() {
                return this._name.toUpperCase();
            }

            set name(newValue){
                this._name = newValue;
            }
        }

        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");

        assert.equal("SCOTT", e1.name);
        assert.equal("ALEX", e2.name);

        e1.name = "Chris";

        assert.equal("CHRIS", e1.name);
    });
  });
});
