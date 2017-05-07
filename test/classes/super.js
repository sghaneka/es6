var assert = require('assert');
describe('Class Tests', function() {
  describe('class', function() {

    it('Inheritance..super.... defined', function() {

        // this is done on the prototype

        class Person {

            constructor(name){
                this._name = name;
            }

            // see the getter here!
            get name() {
                return this._name;
            }

            set name(newValue){
                this._name = newValue;
            }
        }

        class Employee extends Person{

            constructor(title, name)
            {
                super(name);
                this._title = title;
            }

            get title(){
                return this._title;
            }

            doWork() {
                return `${this._name} is working`;
            }
        }

        let p1 = new Person("Scott");
        let e1 = new Employee("Developer", "Chris");

        assert.equal("Scott", p1.name);
        assert.equal("Chris", e1.name);
        assert.equal("Developer", e1.title);
        assert.equal("Chris is working", e1.doWork());

    });
  });
});
