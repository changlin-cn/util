let isArray,
    class2type = {},
    toString = class2type.toString;

function isFunction(value) {
    return typeof value == "function"
}

function isUndefined(obj){
    return typeof obj=='undefined'
}

function isWindow(obj) {
    return obj != null && obj == obj.window
}

function isString(str){
    return typeof  str==='string'
}

function isObject(obj) {
    return typeof obj == "object"&&obj!=null;
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype
}

function isLikeArray(obj) {
    return typeof obj.length == 'number'
}

isArray = Array.isArray ||
    function (object) {
        return object instanceof Array
    };
function isBoolean(a){
    return typeof a==='boolean'
}


module.exports={
    default:module.exports,
    isArray,isFunction,isObject,isPlainObject,isWindow,isString,isUndefined,isLikeArray,isBoolean
}

