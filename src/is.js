import {regex} from './regex'

let isArray,
    class2type = {},
    toString = class2type.toString;

function isFunction(value) {
    return typeof value === "function"
}

function isUndefined(value){
    return typeof value==='undefined'
}

function isWindow(value) {
    return value !== null && value === value.window
}

function isString(value){
    return typeof  value==='string'
}

function isObject(value) {
    return typeof value === "object"&&value!==null;
}

function isPlainObject(value) {
    return isObject(value) && Object.getPrototypeOf(value) === Object.prototype
}

function isLikeArray(value) {
    return typeof value.length === 'number'
}

isArray = Array.isArray ||
    function (value) {
        return value instanceof Array
    };
function isBoolean(value){
    return typeof value==='boolean'
}


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


