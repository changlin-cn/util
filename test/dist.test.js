let {is, extend, trim,removeFromArray,dateFormat,fromTime,ONE_MIN,decodeUnicode,encodeToUnicode,sort} =require( '../dist/index');
require('./common/is.test.js')(is);
require('./common/extend.test.js')(extend);
require('./common/string.test.js')({trim,decodeUnicode,encodeToUnicode});
require('./common/array.test.js')({removeFromArray,sort});
require('./common/date.test.js')({dateFormat,fromTime,ONE_MIN});