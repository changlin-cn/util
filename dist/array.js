'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.removeFromArray = removeFromArray;
exports.sort = sort;

var _is = require('./is');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 从数组中移除某些项
 *
 * @param {Array}  arr
 * @param {Number | function}  condition  if(number&&arr[number] remove arr[number] ; if(fn(item))remove item
 *@param {Number}  number
 * @example
 * ```javascript
 * let a=[1,2,3];
 * removeFromArray(a,1)//=>[2]
 * a//=>[1,3]
 *
 * let b=[{id:1},{id:2},{id:3}];
 * removeFromArray(b,(n)=>n.id===3)//=>[{id:3}]
 * b//=>[{id:1},{id:2}]
 * ```
 *
 * @returns {Array}
 */
function removeFromArray(arr, condition) {
    var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    if (!(0, _is.isArray)(arr)) throw new Error('arr should be arr but got ' + (typeof arr === 'undefined' ? 'undefined' : (0, _typeof3.default)(arr)));
    var items = [];
    if ((0, _is.isNumber)(condition)) {
        return condition < arr.length ? arr.splice(condition, number) : items;
    }
    if ((0, _is.isFunction)(condition)) {
        for (var i = 0; i < arr.length; i++) {
            var res = false;
            try {
                res = condition(arr[i]);
            } catch (e) {
                res = false;
            }
            if (res) {
                items.push(arr.splice(i, 1)[0]);
                i--;
            }
        }
        return items;
    }
    return items;
}

/**
 * 排序
 *
 * @param {Array}  arr
 * @param {function}  compare  比较函数
 * @example
 * ```javascript
 * let a=[1,3,,,2];
 * sort(a,()=>true)//=>[2,3,1,undefined,undefined]
 * a//=>[2,3,1,undefined,undefined]
 *
 * let arrb=[1,3,5,4,2,7,6]
 * sort(arrb,(a,b)=>a>b)//[1,2,3,4,5,6,7]
 *
 * ```
 *
 * @returns {Array}
 */
/**
 * @module array
 */

function sort(arr, compare) {
    if (!(0, _is.isFunction)(compare) || !(0, _is.isArray)(arr)) {
        throw new Error('arguments is not expected');
    }
    var i = void 0,
        j = void 0;
    for (i = 1; i < arr.length; i++) {
        for (j = i - 1; j > -1; j--) {
            var res = void 0;
            if ((0, _is.isUndefined)(arr[j + 1])) {
                break;
            } else if ((0, _is.isUndefined)(arr[j])) {
                res = true;
            } else {
                try {
                    res = compare(arr[j], arr[j + 1]);
                } catch (e) {
                    res = false;
                    break;
                }
            }
            if (res) {
                arr.splice(j, 0, arr.splice(j + 1, 1)[0]);
            } else {
                break;
            }
        }
    }
    return arr;
}