var assert = require('assert');
describe('Numbers', function() {
  describe('example 1', function() {
    it('should easily mistake numbers with leading zeros', function() {

        var a = 10;
        var hex0 = 0xa;
      //  var octal = 071;   octal not supported in es6 the old way.. so
       // assert.equal(57, 57);
    });
    it('should easily mistake numbers with leading zeros', function() {
        var octal = 0o71;
        assert.equal(57, octal);
    });
    it('should support binary literals', function() {
        var bin = 0b1101; 
        assert.equal(13, bin);
    });
    it('should parse binary/octal from string with the number function', function() {
        var octNum = Number("0o71");
        var binNum = Number("0b101");
        
        assert.equal(57, octNum);
        assert.equal(5, binNum);
    });
    

  });
});