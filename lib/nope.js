var autoloadModules = [
  'joose',
  'joosex-class-simpleconstructor',
  'joosex-class-singleton',
  'joosex-meta-lazy',
  'autoloader',
];


autoloadModules.forEach(function (mod) {
  require(mod);
})


var LAST_CLASS;

var orig = {};
var overloaded = {};
// joose globals to overload.
var overload = ['Class', 'Role','Singleton', 'LazyClass', 'LazyRole', 'Module'];


overload.forEach(function (key) {
  orig[key] = global[key];
  overloaded[key] = function() {
    var args = [].slice.call(arguments);
    if (typeof args[0] == 'string') {
      args.shift();
    }
    LAST_CLASS = orig[key].apply(this, args);
    return LAST_CLASS;
  }
});

function overloadJoose() {
  overload.forEach(function (key) {
    global[key] = overloaded[key];
  });
}
function restoreJoose() {
  overload.forEach(function (key) {
    global[key] = orig[key];
  });
}
overloadJoose();
function loadJooseClass(fullPath, className, object, key) {
  LAST_CLASS = null;
  
  var obj = require(fullPath);
  //restoreJoose();
  if ((!obj || !Object.keys(obj).length) && LAST_CLASS) {
    obj = LAST_CLASS;
  }
  return obj;
}

module.exports = {
  autoload: function (path) {
    require('autoloader').autoload(path, loadJooseClass);
    return module.exports;
  },
  loadClass: function(name) {
    return require('autoloader').loadByName(name);
  },
  loadClassByFile: function(file) {
    return require('autoloader').loadByFile(file);
  }
}
