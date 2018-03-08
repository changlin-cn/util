

import {isWindow,isPlainObject,isObject,isFunction,isArray,isBoolean} from './is.js'

let  hasOwn=Object.prototype.hasOwnProperty;

function _extend(...a) {
    const [deep,target, source]=a;
    
    if(!isObject(source))return target;

    for (let key in source)
        if(hasOwn.call(source,key)){
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                    target[key] = {}
                if (isArray(source[key]) && !isArray(target[key]))
                    target[key] = []
                _extend(deep,target[key], source[key])
            }
            else if (source[key] !== undefined) target[key] = source[key];
        }
       
    return target
    }

/**
 * 对象扩展
 *
 * @param {boolean|object} deep
 * @param {object} target
 * @param {object} source
 * @example
 *
 *
 * ```javascript
 * //deep  false
 *  const source  = {a: 1, b: 2, c: {c1: 1}};
 *const res  = extend(false, {}, source);
 *source.c.c1 = 4;
 * res.c.c1===4//=>true
 *
 * //deep true
 *const source  = {a: 1, b: 2, c: {c1: 1}};
 *const res  = extend(true, {}, source);
 *source.c.c1 = 4;
 *res.c.c1===4//=>false
 *
 * //extend(true,  source)
 * const source={a: 1, b: 2, c: {c1: 1}}
 * const target = extend(true,  source);
 * target.c.c1=2
 * source.c.c1//=>1
 * ```
 * @returns {object}
 */

export function extend(...a) {
    const len=a.length,
          first=a[0],
    deep=isBoolean(first);
    
    if(!len)return {};

    if(len===1){
        return _extend(false,{},first)
    }

    if(len===2){
        if(deep&&first){
            return _extend(first,{},a[1])
        }else{
            return _extend(false,...a)
        }
    }
    if(deep){
        if(len===3){
            return _extend(...a)
        }else{
            const temp=a.splice(len-2);
            a=a.concat([_extend(first,...temp)])
            return extend(...a)
        }
    }else{
        const temp=a.splice(len-2);
        a.push(_extend(false,...temp));
        return extend(...a)
    }
}
