/**
 * @module is
 */

import {regex} from './regex'

let isArray,
    class2type = {},
    toString = class2type.toString;

/**
 * 类型判断
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
function isType(type,string){
    if(isString(string)){
        if(regex[type]&&type!=='default'){
            string=String(string);
            return regex[type].test(string)
        }else{
            throw Error(`unknown type ${type}`);
        }
    }else{
        throw Error('type should be string');
    }
}


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
    return toString.call(value).toLowerCase()==="[object window]"
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
        return toString.call(value).toLowerCase()==='[object array]'
    };

/**
 * 判断值是否为boolean
 * @returns {boolean}
 */
function isBoolean(value){
    return typeof value==='boolean'
}


export  {
    isType,
    isArray,
    isFunction,
    isObject,
    isPlainObject,
    isWindow,
    isString,
    isNumber,
    isUndefined,
    isLikeArray,
    isBoolean
};


