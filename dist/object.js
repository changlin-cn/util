"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getOrSetProp = getOrSetProp;

var _is = require("./is");

var _array = require("./array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(value) {
    return value && value !== null && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object';
}

/**
 * 返回或设置对象的属性值
 * @param {object} obj
 * @param {string} prop 必须以'.'分割
 *
 *@example
 *```javascript
 *let obj={a:{b:{c:{d:3}}}}
 *getOrSetProp(obj,'a.b.c.d') //=>3
 *getOrSetProp(obj,'a.b.c.d',4) //=>4
 *
 *```
 *
 */
function getOrSetProp(obj, prop, value) {
    if (!isObject(obj)) return;
    if (!(0, _is.isString)(prop)) return;

    var props = prop.split('.');

    if (props.length === 1) {
        if (arguments.length === 2) {
            return obj[props[0]];
        } else {
            return obj[props[0]] = value;
        }
    }

    var target = obj[props[0]];

    for (var i = 1; i < props.length - 1; i++) {
        target = target[props[i]];
    }

    if (arguments.length === 2) {
        return target[(0, _array.lastOneOf)(props)];
    } else {
        return target[(0, _array.lastOneOf)(props)] = value;
    }
}