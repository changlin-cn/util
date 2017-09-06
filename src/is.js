/**
 * @module is
 */

import {regex} from './regex'

let isArray,
    class2type = {},
    toString = class2type.toString;

/**
 * 判断值是否为function
 * @returns {boolean}
 */
function isFunction(value) {
    return typeof value === "function"
}

/**
 * 判断值是否为undefined
 * @returns {boolean}
 */
function isUndefined(value){
    return typeof value==='undefined'
}

/**
 * 判断值是否为window
 * @returns {boolean}
 */
function isWindow(value) {
    return value !== null && value === value.window
}

/**
 * 判断值是否为string
 * @returns {boolean}
 */
function isString(value){
    return typeof  value==='string'
}

/**
 * 判断值是否为number
 * @returns {boolean}
 */
function isNumber(value){
    return typeof  value==='number'
}

/**
 * 判断值是否为object
 * @returns {boolean}
 */
function isObject(value) {
    return typeof value === "object"&&value!==null;
}

/**
 * 判断值是否为Plain Object
 * @returns {boolean}
 */
function isPlainObject(value) {
    return isObject(value) && Object.getPrototypeOf(value) === Object.prototype
}

/**
 * 判断值是否类似array
 * @returns {boolean}
 */
function isLikeArray(value) {
    return isObject(value)&&isNumber(value.length)
}

/**
 * 判断值是否为Array
 * @returns {boolean}
 */
isArray = Array.isArray ||
    function (value) {
        return value instanceof Array
    };

/**
 * 判断值是否为boolean
 * @returns {boolean}
 */
function isBoolean(value){
    return typeof value==='boolean'
}

/**
 * 类型判断
 * @param {string}  type
 * @param {string}  value
 * @example
 *
 *
 * ```javascript
 * isType('email','user@163.com')   //=>true
 * ```
 * @returns {boolean}
 */
function isType(type,value){
    if(isString(type)){
        if(regex[type]&&type!=='default'){
            value=String(value);
            return regex[type].test(value)
        }else{
            throw Error(`unknown type ${type}`);
        }
    }else{
        throw Error('type should be string');
    }
}


export  {
    isType,
    isArray,
    isFunction,
    isObject,
    isPlainObject,
    isWindow,
    isString,
    isUndefined,
    isLikeArray,
    isBoolean
};


