'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrSetProp = exports.createCombination = exports.computeFactorial = exports.computeCombinationLength = exports.randomInteger = exports.ONE_YEAR = exports.ONE_MONTH = exports.ONE_MIN = exports.ONE_SEC = exports.ONE_DAY = exports.ONE_HOUR = exports.fromTime = exports.dateFormat = exports.excludeTheSame = exports.lastOneOf = exports.find = exports.toArray = exports.shuffle = exports.sort = exports.removeFromArray = exports.firstUpperCase = exports.firstLowerCase = exports.splitUnit = exports.encodeToUnicode = exports.decodeUnicode = exports.trim = exports.regex = exports.isDOM = exports.whatIs = exports.isWindow = exports.isUndefined = exports.isType = exports.isPlainObject = exports.isBoolean = exports.isLikeArray = exports.isArray = exports.isGeneralizedObject = exports.isFunction = exports.isObject = exports.isDate = exports.isNumber = exports.isString = exports.is = exports.extend = undefined;

var _extend = require('./extend.js');

Object.defineProperty(exports, 'extend', {
  enumerable: true,
  get: function get() {
    return _extend.extend;
  }
});

var _is2 = require('./is.js');

Object.defineProperty(exports, 'isString', {
  enumerable: true,
  get: function get() {
    return _is2.isString;
  }
});
Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _is2.isNumber;
  }
});
Object.defineProperty(exports, 'isDate', {
  enumerable: true,
  get: function get() {
    return _is2.isDate;
  }
});
Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _is2.isObject;
  }
});
Object.defineProperty(exports, 'isFunction', {
  enumerable: true,
  get: function get() {
    return _is2.isFunction;
  }
});
Object.defineProperty(exports, 'isGeneralizedObject', {
  enumerable: true,
  get: function get() {
    return _is2.isGeneralizedObject;
  }
});
Object.defineProperty(exports, 'isArray', {
  enumerable: true,
  get: function get() {
    return _is2.isArray;
  }
});
Object.defineProperty(exports, 'isLikeArray', {
  enumerable: true,
  get: function get() {
    return _is2.isLikeArray;
  }
});
Object.defineProperty(exports, 'isBoolean', {
  enumerable: true,
  get: function get() {
    return _is2.isBoolean;
  }
});
Object.defineProperty(exports, 'isPlainObject', {
  enumerable: true,
  get: function get() {
    return _is2.isPlainObject;
  }
});
Object.defineProperty(exports, 'isType', {
  enumerable: true,
  get: function get() {
    return _is2.isType;
  }
});
Object.defineProperty(exports, 'isUndefined', {
  enumerable: true,
  get: function get() {
    return _is2.isUndefined;
  }
});
Object.defineProperty(exports, 'isWindow', {
  enumerable: true,
  get: function get() {
    return _is2.isWindow;
  }
});
Object.defineProperty(exports, 'whatIs', {
  enumerable: true,
  get: function get() {
    return _is2.whatIs;
  }
});
Object.defineProperty(exports, 'isDOM', {
  enumerable: true,
  get: function get() {
    return _is2.isDOM;
  }
});

var _regex = require('./regex.js');

Object.defineProperty(exports, 'regex', {
  enumerable: true,
  get: function get() {
    return _regex.regex;
  }
});

var _string = require('./string.js');

Object.defineProperty(exports, 'trim', {
  enumerable: true,
  get: function get() {
    return _string.trim;
  }
});
Object.defineProperty(exports, 'decodeUnicode', {
  enumerable: true,
  get: function get() {
    return _string.decodeUnicode;
  }
});
Object.defineProperty(exports, 'encodeToUnicode', {
  enumerable: true,
  get: function get() {
    return _string.encodeToUnicode;
  }
});
Object.defineProperty(exports, 'splitUnit', {
  enumerable: true,
  get: function get() {
    return _string.splitUnit;
  }
});
Object.defineProperty(exports, 'firstLowerCase', {
  enumerable: true,
  get: function get() {
    return _string.firstLowerCase;
  }
});
Object.defineProperty(exports, 'firstUpperCase', {
  enumerable: true,
  get: function get() {
    return _string.firstUpperCase;
  }
});

var _array = require('./array.js');

Object.defineProperty(exports, 'removeFromArray', {
  enumerable: true,
  get: function get() {
    return _array.removeFromArray;
  }
});
Object.defineProperty(exports, 'sort', {
  enumerable: true,
  get: function get() {
    return _array.sort;
  }
});
Object.defineProperty(exports, 'shuffle', {
  enumerable: true,
  get: function get() {
    return _array.shuffle;
  }
});
Object.defineProperty(exports, 'toArray', {
  enumerable: true,
  get: function get() {
    return _array.toArray;
  }
});
Object.defineProperty(exports, 'find', {
  enumerable: true,
  get: function get() {
    return _array.find;
  }
});
Object.defineProperty(exports, 'lastOneOf', {
  enumerable: true,
  get: function get() {
    return _array.lastOneOf;
  }
});
Object.defineProperty(exports, 'excludeTheSame', {
  enumerable: true,
  get: function get() {
    return _array.excludeTheSame;
  }
});

var _date = require('./date.js');

Object.defineProperty(exports, 'dateFormat', {
  enumerable: true,
  get: function get() {
    return _date.dateFormat;
  }
});
Object.defineProperty(exports, 'fromTime', {
  enumerable: true,
  get: function get() {
    return _date.fromTime;
  }
});
Object.defineProperty(exports, 'ONE_HOUR', {
  enumerable: true,
  get: function get() {
    return _date.ONE_HOUR;
  }
});
Object.defineProperty(exports, 'ONE_DAY', {
  enumerable: true,
  get: function get() {
    return _date.ONE_DAY;
  }
});
Object.defineProperty(exports, 'ONE_SEC', {
  enumerable: true,
  get: function get() {
    return _date.ONE_SEC;
  }
});
Object.defineProperty(exports, 'ONE_MIN', {
  enumerable: true,
  get: function get() {
    return _date.ONE_MIN;
  }
});
Object.defineProperty(exports, 'ONE_MONTH', {
  enumerable: true,
  get: function get() {
    return _date.ONE_MONTH;
  }
});
Object.defineProperty(exports, 'ONE_YEAR', {
  enumerable: true,
  get: function get() {
    return _date.ONE_YEAR;
  }
});

var _math = require('./math.js');

Object.defineProperty(exports, 'randomInteger', {
  enumerable: true,
  get: function get() {
    return _math.randomInteger;
  }
});
Object.defineProperty(exports, 'computeCombinationLength', {
  enumerable: true,
  get: function get() {
    return _math.computeCombinationLength;
  }
});
Object.defineProperty(exports, 'computeFactorial', {
  enumerable: true,
  get: function get() {
    return _math.computeFactorial;
  }
});
Object.defineProperty(exports, 'createCombination', {
  enumerable: true,
  get: function get() {
    return _math.createCombination;
  }
});

var _object = require('./object.js');

Object.defineProperty(exports, 'getOrSetProp', {
  enumerable: true,
  get: function get() {
    return _object.getOrSetProp;
  }
});

var _is = _interopRequireWildcard(_is2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.is = _is;