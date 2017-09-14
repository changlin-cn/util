'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ONE_YEAR = exports.ONE_MONTH = exports.ONE_DAY = exports.ONE_HOUR = exports.ONE_MIN = exports.ONE_SEC = undefined;
exports.dateFormat = dateFormat;
exports.fromTime = fromTime;

var _is = require('./is');

/**
 * @export ONE_SEC
 * */

var ONE_SEC = exports.ONE_SEC = 1000;
/**
 * @export ONE_MIN
 * */

/**
 * @module date
 */

var ONE_MIN = exports.ONE_MIN = 60 * 1000;
/**
 * @export ONE_HOUR
 * */

var ONE_HOUR = exports.ONE_HOUR = 60 * 60 * 1000;
/**
 * @export ONE_DAY
 * */

var ONE_DAY = exports.ONE_DAY = 24 * 60 * 60 * 1000;
/**
 * @export ONE_MONTH
 * */

var ONE_MONTH = exports.ONE_MONTH = 31 * 24 * 60 * 60 * 1000;
/**
 * @export ONE_YEAR
 * */
var ONE_YEAR = exports.ONE_YEAR = 366 * 24 * 60 * 60 * 1000;

function _stringNumberToDate(date) {
    if (!(0, _is.isDate)(date)) {
        if ((0, _is.isNumber)(date)) {
            if (String(date) === 'NaN') {
                throw new Error('date is not expect');
            }
            date = new Date(date);
        } else if ((0, _is.isString)(date) && (0, _is.isType)('number', date)) {
            date = new Date(Number(date));
        } else {
            throw new Error('date is not expect');
        }
    }
    return date;
}

/**
 * 时间格式化
 *@export  dateFormat
 * @param {Date | string | number}  date
 * @param {string} format
 * @example
 * ```javascript
 * dateFormat(new Date(), 'yyyy/MM/dd HH:mm:ss')
 * dateFormat(1478836800000, 'yyyy-MM-dd') //=>2016-11-11
 * ```
 *
 * @returns {string}
 */
function dateFormat(date, format) {
    date = _stringNumberToDate(date);
    if (!(0, _is.isString)(format)) {
        throw new Error('format wasn\'t string');
    }
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return format;
}

/**
 * @export  fromTime
 * 获取时间段
 * @param {Date | string | number}  from  较远的时间
 * @param {Date | string | number | undefined}  now 较近的时间
 * @example
 * ```javascript
 *  let t1 = new Date(1478836800000);
 *  let t2 = new Date(1478836800100);
 *   fromTime(t1, t2) //=>刚刚
 * ```
 *
 * @returns {string}
 */

function fromTime(from) {
    var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

    from = _stringNumberToDate(from);
    now = _stringNumberToDate(now);

    var time = parseInt(now.getTime() - from.getTime());
    if (time < ONE_SEC) {
        return "刚刚";
    } else if (time >= ONE_SEC && time < ONE_MIN) {
        return parseInt(time / ONE_SEC) + "秒前";
    } else if (time >= ONE_MIN && time < ONE_HOUR) {
        return parseInt(time / ONE_MIN) + "分钟前";
    } else if (time >= ONE_HOUR && time < ONE_DAY) {
        return parseInt(time / ONE_HOUR) + "小时前";
    } else if (time >= ONE_DAY && time < ONE_MONTH) {
        return parseInt(time / ONE_DAY) + "天前";
    } else if (time >= ONE_MONTH && time < ONE_YEAR) {
        return parseInt(time / ONE_MONTH) + "月前";
    } else {
        return parseInt(time / ONE_YEAR) + "年前";
    }
}