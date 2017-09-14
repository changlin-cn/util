'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.extend = extend;

var _is = require('./is.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extend() {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
    }

    var deep = a[0],
        target = a[1],
        source = a[2];


    if (!(0, _is.isObject)(source)) return target;

    for (var key in source) {
        if (deep && ((0, _is.isPlainObject)(source[key]) || (0, _is.isArray)(source[key]))) {
            if ((0, _is.isPlainObject)(source[key]) && !(0, _is.isPlainObject)(target[key])) target[key] = {};
            if ((0, _is.isArray)(source[key]) && !(0, _is.isArray)(target[key])) target[key] = [];
            _extend(deep, target[key], source[key]);
        } else if (source[key] !== undefined) target[key] = source[key];
    }return target;
}

/**
 * 对象扩展
 * @export extend
 * @param {boolean|object} deep
 * @param {object} target
 * @param {object} source
 * @example
 *
 *
 * ```javascript
 * //deep  false
 *  let source  = {a: 1, b: 2, c: {c1: 1}};
 *let res  = extend(false, {}, source);
 *source.c.c1 = 4;
 * res.c.c1===4//=>true
 *
 * //deep true
 *let source  = {a: 1, b: 2, c: {c1: 1}};
 *let res  = extend(true, {}, source);
 *source.c.c1 = 4;
 *res.c.c1===4//=>false
 * ```
 * @returns {object}
 */

/**
 * @module extend
 */

function extend() {
    for (var _len2 = arguments.length, a = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        a[_key2] = arguments[_key2];
    }

    var len = a.length,
        first = a[0],
        deep = (0, _is.isBoolean)(first);

    if (!len) return {};

    if (len === 1) {
        return _extend(false, {}, first);
    }

    if (len === 2) {
        if (deep) {
            return a[1];
        } else {
            return _extend.apply(undefined, [false].concat((0, _toConsumableArray3.default)(a)));
        }
    }
    if (deep) {
        if (len === 3) {
            return _extend.apply(undefined, (0, _toConsumableArray3.default)(a));
        } else {
            var temp = a.splice(len - 2);
            a = a.concat([_extend.apply(undefined, [first].concat((0, _toConsumableArray3.default)(temp)))]);
            return extend.apply(undefined, (0, _toConsumableArray3.default)(a));
        }
    } else {
        var _temp = a.splice(len - 2);
        a.push(_extend.apply(undefined, [false].concat((0, _toConsumableArray3.default)(_temp))));
        return extend.apply(undefined, (0, _toConsumableArray3.default)(a));
    }
}