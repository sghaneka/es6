import { sum } from '../../src/utils/utility.js';
import { EventData } from '../../src/entity/EventData.js';
import { Ninja } from '../../src/entity/Ninja.js';

//console.log(generateRandom()); //logs a random number
//console.log(sum(1, 2)); //3


var assert = require('assert');
describe('Import Tests', function() {
  describe('imports', function() {
    it('import test 1', function() {

      assert.equal(sum(1,2), 3);

      let x1 = new EventData();

      assert.equal(x1.getAssets()[0].id, 1);

      var x2 = Ninja.age;

      console.log(x2);

    });
  });
});