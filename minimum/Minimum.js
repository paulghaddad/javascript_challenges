var Minimum = function() {};

Minimum.prototype.min = function(number1, number2) {
  if (number1 < number2)
    return number1;
  else
    return number2;
};

module.exports = Minimum;
