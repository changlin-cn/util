'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArray = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isType = isType;
exports.isFunction = isFunction;
exports.isUndefined = isUndefined;
exports.isWindow = isWindow;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isDate = isDate;
exports.isPlainObject = isPlainObject;
exports.isLikeArray = isLikeArray;
exports.isBoolean = isBoolean;

var _regex = require('./regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var class2type = {},
    toString = Object.prototype.toString;

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
/**
 * @module is
 */

function isType(type, string) {
    if (isString(string)) {
        if (_regex.regex[type] && type !== 'default') {
            string = String(string);
            return _regex.regex[type].test(string);
        } else {
            throw Error('unknown type ' + type);
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
function isFunction(value) {
    return typeof value === "function";
}

/**
 * 判断值是否为undefined
 * @export isUndefined
 * @returns {boolean}
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}

/**
 * 判断值是否为window
 * @export isWindow
 * @returns {boolean}
 */
function isWindow(value) {
    return toString.call(value).toLowerCase() === "[object window]";
}

/**
 * 判断值是否为string
 * @export isString
 * @returns {boolean}
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * 判断值是否为number
 * @export isNumber
 * @returns {boolean}
 */
function isNumber(value) {
    return typeof value === 'number';
}

/**
 * 判断值是否为object
 * @export isObject
 * @returns {boolean}
 */
function isObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === "object" && value !== null;
}

/**
 * 判断值是否为Date
 * @export isDate
 * @returns {boolean}
 */
function isDate(value) {
    return isObject(value) && toString.call(value).toLowerCase() === "[object date]";
}

/**
 * 判断值是否为Plain Object
 * @export isPlainObject
 * @returns {boolean}
 */
function isPlainObject(value) {
    return isObject(value) && (0, _getPrototypeOf2.default)(value) === Object.prototype;
}

/**
 * 判断值是否类似array
 * @export isLikeArray
 * @returns {boolean}
 */
function isLikeArray(value) {
    return isObject(value) && isNumber(value.length);
}

/**
 * 判断值是否为Array
 * @export isArray
 * @returns {boolean}
 */
var isArray = exports.isArray = Array.isArray || function (value) {
    return toString.call(value).toLowerCase() === '[object array]';
};

/**
 * 判断值是否为boolean
 * @export isBoolean
 * @returns {boolean}
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}