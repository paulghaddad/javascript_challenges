var Minimum = require('./Minimum.js');

describe("Minimum", function() {
  var minimum = new Minimum();

  it("should determine the minimum of two numbers", function() {
    var minimum_number = minimum.min(0, 10);

    expect(minimum_number).toEqual(0);
  });

  it("should determine the minimum of two numbers", function() {
    var minimum_number = minimum.min(0, -10);

    expect(minimum_number).toEqual(-10);
  });
});
