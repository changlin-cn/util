let {
    is,
    extend,
    trim,
    removeFromArray,
    dateFormat,
    fromTime,
    ONE_MIN,
    decodeUnicode,
    encodeToUnicode,
    sort,
    shuffle,
    randomInteger,
    toArray,
    find,
    lastOneOf,
    getOrSetProp,
    splitUnit,
    firstUpperCase,
    firstLowerCase,
    excludeTheSame,
    computeCombinationLength,
    computeFactorial,
    createCombination
} = require('../dist/index');
require('./common/is.test.js')(is);
require('./common/extend.test.js')(extend);
require('./common/string.test.js')({trim, decodeUnicode, encodeToUnicode,splitUnit,firstLowerCase,firstUpperCase});
require('./common/array.test.js')({removeFromArray, sort, shuffle, toArray, find, lastOneOf,excludeTheSame});
require('./common/date.test.js')({dateFormat, fromTime, ONE_MIN});
require('./common/math.test.js')({randomInteger, is,computeCombinationLength,computeFactorial,createCombination});
require('./common/object.test.js')({getOrSetProp});