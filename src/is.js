/**
 * @module is
 */

import {regex} from './regex'

let
    class2type = {},
    toString   = Object.prototype.toString;

/**
 * 类型判断
 * @export isType
 * @param {string}  type    url tel mobilePhone email account IdCard ip...参考regex 模块导出对象的属性
 * @param {string}  string
 * @example
 *
 *
 * ```javascript
 * isType('email','user@163.com')   //=>true
 * ```
 * @returns {boolean}
 */
export function isType(type, string) {
    if (isString(string)) {
        if (regex[type] && type !== 'default') {
            string = String(string);
            return regex[type].test(string)
        } else {
            throw Error(`unknown type ${type}`);
        }
    } else {
        throw Error('type should be string');
    }
}


/**
 * 判断值是否为function
 * @export isFunction
 * @returns {boolean}
 */
export function isFunction(value) {
    return typeof value === "function"
}

/**
 * 判断值是否为undefined
 * @export isUndefined
 * @returns {boolean}
 */
export function isUndefined(value) {
    return typeof value === 'undefined'
}

/**
 * 判断值是否为window
 * @export isWindow
 * @returns {boolean}
 */
export function isWindow(value) {
    return toString.call(value).toLowerCase() === "[object window]"
}

/**
 * 判断值是否为string
 * @export isString
 * @returns {boolean}
 */
export function isString(value) {
    return typeof  value === 'string'
}

/**
 * 判断值是否为number
 * @export isNumber
 * @returns {boolean}
 */
export function isNumber(value) {
    return typeof  value === 'number'
}

/**
 * 判断值是否为object
 * @export isObject
 * @returns {boolean}
 */
export function isObject(value) {
    return typeof value === "object" && value !== null;
}

/**
 * 判断值是否为Date
 * @export isDate
 * @returns {boolean}
 */
export function isDate(value) {
    return isObject(value) && toString.call(value).toLowerCase() === "[object date]";
}

/**
 * 判断值是否为Plain Object
 * @export isPlainObject
 * @returns {boolean}
 */
export function isPlainObject(value) {
    return isObject(value) && Object.getPrototypeOf(value) === Object.prototype
}

/**
 * 判断值是否类似array
 * @export isLikeArray
 * @returns {boolean}
 */
export function isLikeArray(value) {
    return isObject(value) && isNumber(value.length)
}

/**
 * 判断值是否为Array
 * @export isArray
 * @returns {boolean}
 */
export  let isArray = Array.isArray ||
    function (value) {
        return toString.call(value).toLowerCase() === '[object array]'
    };

/**
 * 判断值是否为boolean
 * @export isBoolean
 * @returns {boolean}
 */
export function isBoolean(value) {
    return typeof value === 'boolean'
}




