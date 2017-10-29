var assert = require('assert');
describe('Class Tests', function() {
  describe('Instance', function() {

    it('Instance Variables', function() {
        class EventData {

            constructor() {
                this._assets =  [
                    {
                        id: 1,
                        name: "Image 1"
                    },
                    {
                        id: 2,
                        name: "Image 2"
                    },        {
                        id: 3,
                        name: "Image 3"
                    }
                ];  
            }

            getAssets() {
                return this._assets;
            }
                
        }

        let e1 = new EventData();
        assert.equal(e1.getAssets()[0].id, 1);
    });
  });
});
