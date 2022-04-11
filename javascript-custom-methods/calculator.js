/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x ** 2;
  },
  sumAll: function (numbers) {
    var placeHolder = 0;
    for (var i = 0; i < numbers.length; i++) {
      placeHolder += numbers[i];
    }
    return placeHolder;
  },
  getAverage: function (numbers) {
    var ave = 0;
    for (var i = 0; i < numbers.length; i++) {
      ave += numbers[i];
    }
    return ave / numbers.length;
  }
};
