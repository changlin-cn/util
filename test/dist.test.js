let {is, extend, trim,removeFromArray} =require( '../dist/index');
require('./common/is.test.js')(is);
require('./common/extend.test.js')(extend);
require('./common/string.test.js')(trim);
require('./common/array.test.js')(removeFromArray);