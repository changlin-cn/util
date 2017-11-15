

import {isUndefined,isType} from './is'

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
export function randomInteger(min,max ){
    if(isUndefined(min)){
        throw new Error('no arguments')
    }
    if(isUndefined(max)){
        max=min;
        min=0
    }else if(!isType('integer',min)||!isType('integer',max)){
        throw new Error('arguments were not expected')
    }
    min=Number(min);
    max=Number(max);
    let difference=max-min;
    let random=Math.floor(Math.random()*(difference+1));
    return min+random
}
