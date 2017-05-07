var assert = require('assert');
describe('Class Tests', function() {
  describe('class', function() {

    it('Inheritance..super..overrides.... defined', function() {

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

            doWork(){
                return "free";
            }

            toString() {
                return this.name;
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
               return "paid";  
            }
        }

        let p1 = new Person("Alex");
        let e1 = new Employee("Developer", "Chris");

        let makeEveryoneWork = function(...people){
            let results = [];
            for (let i=0; i<people.length; i++){
                if (people[i] instanceof Person){
                    results.push(people[i].doWork());
                }
            };
            return results;
        }

        assert.deepEqual(["free","paid"], makeEveryoneWork(p1, e1, {}));


        assert.equal("Alex", p1.name);
        assert.equal("free", p1.doWork() );
        assert.equal("Chris", e1.name);
        assert.equal("Developer", e1.title);
        assert.equal("paid", e1.doWork());
        assert.equal("Alex", p1.toString());
        assert.equal("Chris", e1.toString());

    });
  });
});
