const utils = {
  genSidebar(title, children = [""], collapsable = false, sidebarDepth = 2) {
    var arr = new Array();
    arr.push({
      title,
      collapsable,
      sidebarDepth,
      children
    });
    return arr;
  },
  arrayDeduplication(arr) {
    return Array.from(new Set(arr));
  },
  thunkify(fn) {
    return function () {
      var args = new Array(arguments.length);
      var ctx = this;

      for (var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
      }

      return function (done) {
        var called;

        args.push(function () {
          if (called) return;
          called = true;
          done.apply(null, arguments);
        });

        try {
          fn.apply(ctx, args);
        } catch (err) {
          done(err);
        }
      };
    };
  }
};

module.exports = utils;