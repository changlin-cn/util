'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDOM = exports.isArray = undefined;

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
exports.isGeneralizedObject = isGeneralizedObject;
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
 * 判断值是否为object(注意：此方法使用Object.prototype.toString.call(value)进行判断)
 *
 * @returns {boolean}
 */
function isObject(value) {
    return whatIs(value) === 'object';
}

/**
 * 判断值是否为广义的object(注意：此方法使用typeof进行判断)
 *
 * @returns {boolean}
 */
function isGeneralizedObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && value !== null;
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
    return isGeneralizedObject(value) && isNumber(value.length);
}

/**
 * 判断值是否为Array
 * @function isArray
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

/**
 * 判断值是否为dom对象
 * @function isDOM
 *@example
 *```javascript
 *isDOM(document.querySelector('div'))
 *
 *
 *```
 * @returns {boolean}
 */
var isDOM = exports.isDOM = function () {
    return typeof HTMLElement === 'function' ? function (obj) {
        return obj instanceof HTMLElement;
    } : function (obj) {
        return obj && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' && obj.nodeType === 1 && isString(obj.nodeName);
    };
}();