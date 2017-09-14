import {is, extend, trim,removeFromArray,dateFormat,fromTime} from '../src/index'
require('./common/is.test.js')(is);
require('./common/extend.test.js')(extend);
require('./common/string.test.js')(trim);
require('./common/array.test.js')(removeFromArray);
require('./common/date.test.js')(dateFormat,fromTime);