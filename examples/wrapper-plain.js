// This function will wrap all methods on an object
// with detailed logging information.
function wrapper (toWrap, identifier, collapse) {
  // Determine how we're grouping
  var grouping = collapse ? 'groupCollapsed' : 'group';

  // Get all keys of our method and iterate over them
  var methods = Object.keys(toWrap);
  methods.forEach(function (method) {
    // Get the original method
    var oldMethod = toWrap[method];

    // If it's not a function, we're done, skip it
    if (typeof oldMethod !== 'function') { return; }

    // Create our wrapped version!
    toWrap[method] = function wrapped () {
      var groupName = identifier + ': ' + method;

      console[grouping](groupName);
      console.log('%s args: %o', method, arguments);

      try {
        var value = oldMethod.apply(this, arguments);
        console.log('%s return value: %o', method, value);
        return value;
      } catch (e) {
        console.error('%s error: %o', method, e);
      } finally {
        console.log('%s: Exiting', method);
        console.groupEnd(groupName);
      }
    };
  });
};
