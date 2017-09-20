'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomInteger = randomInteger;

var _is = require('./is');

/**
 * 生成一定范围内的随机整数 （包括端点）
 *
 * @param {number}  min
 * @param {number}  max
 *
 * @example
 * ```javascript
 *let res=randomInteger(4)
 * res>=0&&res<=4      //true
 *isType('integer',res)//true
 *
 * ```
 *
 * @returns {number}
 */
function randomInteger(min, max) {
    if ((0, _is.isUndefined)(min)) {
        throw new Error('no arguments');
    }
    if ((0, _is.isUndefined)(max)) {
        max = min;
        min = 0;
    } else if (!(0, _is.isType)('integer', min) || !(0, _is.isType)('integer', max)) {
        throw new Error('arguments were not expected');
    }
    min = Number(min);
    max = Number(max);
    var difference = max - min;
    var random = Math.floor(Math.random() * (difference + 1));
    return min + random;
} /**
   * @module math
   */