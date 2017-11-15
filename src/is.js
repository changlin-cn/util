

import {regex} from './regex'

let
    class2type = {},
    toString   = Object.prototype.toString;

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
export function isType(type, string) {
    if (isString(string)||isNumber(string)) {
        if (regex[type] && type !== 'default') {
            string = String(string);
            return regex[type].test(string)
        } else {
            throw Error(`unknown type ${type}`);
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
export function isFunction(value) {
    return typeof value === "function"
}

/**
 * 判断值是否为undefined
 *
 * @returns {boolean}
 */
export function isUndefined(value) {
    return typeof value === 'undefined'
}

/**
 * 判断值是否为window
 *
 * @returns {boolean}
 */
export function isWindow(value) {
    return whatIs(value)=== "window"
}

/**
 * 判断值是否为string
 *
 * @returns {boolean}
 */
export function isString(value) {
    return typeof  value === 'string'
}

/**
 * 判断值是否为number
 *
 * @returns {boolean}
 */
export function isNumber(value) {
    return typeof  value === 'number'
}

/**
 * 判断值是否为object(注意：此方法使用Object.prototype.toString.call(value)进行判断)
 *
 * @returns {boolean}
 */
export function isObject(value) {
   return whatIs(value)==='object'
}

/**
 * 判断值是否为Date
 *
 * @returns {boolean}
 */
export function isDate(value) {
    return  whatIs(value)=== "date";
}

/**
 * 判断值是否为Plain Object
 *
 * @returns {boolean}
 */
export function isPlainObject(value) {
    return isObject(value) && Object.getPrototypeOf(value) === Object.prototype
}

/**
 * 判断值是否类似array
 *
 * @returns {boolean}
 */
export function isLikeArray(value) {
    return isObject(value) && isNumber(value.length)
}

/**
 * 判断值是否为Array
 * @function isArray
 * @returns {boolean}
 */
export  let isArray = Array.isArray ||
    function (value) {
        return toString.call(value) === '[object Array]'
    };

/**
 * 判断值是否为boolean
 *
 * @returns {boolean}
 */
export function isBoolean(value) {
    return typeof value === 'boolean'
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
export function whatIs(value) {
    return /(?:(\S*)])/.exec( toString.call(value) )[1].toLowerCase()
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
export const isDOM=(function(){
    return ( typeof HTMLElement === 'function' ) ?
        function(obj){
            return obj instanceof HTMLElement;
        } :
        function(obj){
            return obj && typeof obj === 'object' && obj.nodeType === 1 && isString( obj.nodeName) ;
        }
})();




