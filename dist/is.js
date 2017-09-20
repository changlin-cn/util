'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArray = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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
exports.whatIs = whatIs;

var _regex = require('./regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var class2type = {},
    toString = Object.prototype.toString;

/**
 * 类型判断
 *
 * @param {string}  type    url tel mobilePhone email account IdCard ip...参考regex 模块导出对象的属性
 * @param {string|number}  string
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
    if (isString(string) || isNumber(string)) {
        if (_regex.regex[type] && type !== 'default') {
            string = String(string);
            return _regex.regex[type].test(string);
        } else {
            throw Error('unknown type ' + type);
        }
    } else {
        throw Error('type should be string or number');
    }
}

/**
 * 判断值是否为function
 *
 * @returns {boolean}
 */
function isFunction(value) {
    return typeof value === "function";
}

/**
 * 判断值是否为undefined
 *
 * @returns {boolean}
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}

/**
 * 判断值是否为window
 *
 * @returns {boolean}
 */
function isWindow(value) {
    return whatIs(value) === "window";
}

/**
 * 判断值是否为string
 *
 * @returns {boolean}
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * 判断值是否为number
 *
 * @returns {boolean}
 */
function isNumber(value) {
    return typeof value === 'number';
}

/**
 * 判断值是否为object
 *
 * @returns {boolean}
 */
function isObject(value) {
    return whatIs(value) === "object";
}

/**
 * 判断值是否为Date
 *
 * @returns {boolean}
 */
function isDate(value) {
    return whatIs(value) === "date";
}

/**
 * 判断值是否为Plain Object
 *
 * @returns {boolean}
 */
function isPlainObject(value) {
    return isObject(value) && (0, _getPrototypeOf2.default)(value) === Object.prototype;
}

/**
 * 判断值是否类似array
 *
 * @returns {boolean}
 */
function isLikeArray(value) {
    return isObject(value) && isNumber(value.length);
}

/**
 * 判断值是否为Array
 *
 * @returns {boolean}
 */
var isArray = exports.isArray = Array.isArray || function (value) {
    return toString.call(value) === '[object Array]';
};

/**
 * 判断值是否为boolean
 *
 * @returns {boolean}
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}

/**
 * 判断值的类型
 *@example
 *```javascript
 *whatIs(new Date())//=>'date'
 * whatIs(null)//=>'null'
 *
 *```
 * @returns {string}
 */
function whatIs(value) {
    return (/(?:(\S*)])/.exec(toString.call(value))[1].toLowerCase()
    );
}