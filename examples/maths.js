// A simple object with some methods,
// which throw errors when bad arguments are passed.
var maths = {
  square : function (value) {
    // Sanity checking
    if (arguments.length !== 1) {
      throw new Error('square: Requires one and only one argument');
    }
    if (typeof value !== 'number') {
      throw new Error('square: Requires numeric argument');
    }

    // Square it!
    return value * value;
  }
}
