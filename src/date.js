

import {isDate, isString, isNumber, isType} from './is'

/**
 *
 * */


export  const ONE_SEC   = 1000;
/**
 *
 * */

export  const  ONE_MIN   = 60 * 1000;
/**
 *
 * */

export  const  ONE_HOUR  = 60 * 60 * 1000;
/**
 *
 * */

export  const  ONE_DAY   = 24 * 60 * 60 * 1000;
/**
 *
 * */

export  const  ONE_MONTH = 31 * 24 * 60 * 60 * 1000;
/**
 *
 * */
export  const  ONE_YEAR  = 366 * 24 * 60 * 60 * 1000;

function _stringNumberToDate(date) {
    if (!isDate(date)) {
        if (isNumber(date)) {
            if (String(date) === 'NaN') {
                throw new Error(`date is not expect`)
            }
            date = new Date(date)
        } else if (isString(date) && isType('number', date)) {
            date = new Date(Number(date))
        } else {
            throw new Error(`date is not expect`)
        }
    }
    return date
}


/**
 * 时间格式化
 *
 * @param {Date | string | number}  date
 * @param {string} format
 * @example
 * ```javascript
 * dateFormat(new Date(), 'yyyy/MM/dd hh:mm:ss')
 * dateFormat(1478836800000, 'yyyy-MM-dd') //=>2016-11-11
 * ```
 *
 * @returns {string}
 */
export function dateFormat(date, format) {
    date = _stringNumberToDate(date);
    if (!isString(format)) {
        throw new Error(`format wasn't string`)
    }
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format;
}

/**
 *
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

export function fromTime(from, now = new Date()) {
    from = _stringNumberToDate(from);
    now  = _stringNumberToDate(now);
    
    const time = parseInt(now.getTime() - from.getTime());
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

