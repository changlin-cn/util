let {is, extend, trim,removeFromArray,dateFormat,fromTime,ONE_MIN,decodeUnicode,encodeToUnicode,sort,shuffle,randomInteger,toArray,find,lastOneOf,getOrSetProp} =require( '../dist/index');
require('./common/is.test.js')(is);
require('./common/extend.test.js')(extend);
require('./common/string.test.js')({trim,decodeUnicode,encodeToUnicode});
require('./common/array.test.js')({removeFromArray,sort,shuffle,toArray,find,lastOneOf});
require('./common/date.test.js')({dateFormat,fromTime,ONE_MIN});
require('./common/math.test.js')({randomInteger,is});
require('./common/object.test.js')({getOrSetProp});