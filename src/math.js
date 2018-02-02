

import {isUndefined,isType,isNumber} from './is'
import {excludeTheSame} from "./array";
import {regex} from "./regex";

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


/**
 * 从一个数组中获取一定长度的所有组合
 *
 * @param {Array} array
 * @param {Number}  combinationLength
 */
export function createCombination(array,combinationLength){
    array=excludeTheSame(array);
    if(!isNumber(combinationLength)){
        throw new Error('combinationLength should be number')
    }
    if(combinationLength<1 || combinationLength>array.length){
        throw new Error('combinationLength should be in the correct range')
    }

    return __createCombination(array,combinationLength)
}


/**
 * 计算阶乘
 * ```javascript
 * computeFactorial(0) //=>1
 * computeFactorial(3)  //=>6
 *
 * ```
 * @param {number} number
 * @returns {number}
 */
export function computeFactorial(number){
    number=Number(number);
    if(!(regex.positiveInteger.test(String(number)) || number ===0)){
        throw new Error(`number should be 0 or positiveNumber but got ${number}`)
    }
    if(number === 0){
        return 1
    }
    let result = 1;
    for(let i=2;i<=number;i++){
        result*=i
    }
    return result
}

/**
 * 计算 组合数
 *
 * @param elementNumber
 * @param combinationLength
 * @returns {number}
 */
export function computeCombinationLength(elementNumber,combinationLength){
    elementNumber=Number(elementNumber);
    combinationLength=Number(combinationLength);
    if(!regex.positiveInteger.test(String(elementNumber))){
        throw new Error(`elementNumber should be positiveNumber but got ${elementNumber}`)
    }
    if(!(regex.positiveInteger.test(String(combinationLength)) || combinationLength===0)){
        throw new Error(`elementNumber should be positiveNumber or 0 but got ${combinationLength}`)
    }
    if(combinationLength>elementNumber){
        throw new Error(`The max value of combinationLength should be ${elementNumber} but got ${combinationLength}`)
    }
    if(combinationLength===0){return 1}
    return computeFactorial(elementNumber)/(computeFactorial(combinationLength)*computeFactorial(elementNumber-combinationLength))
}





function __createCombination(arr,combinationLength,result=[]){
    result = result ? result : [];
    let arrCopy = arr.slice(0);
    let item = arrCopy.shift();

    item = item.constructor === Array ? item : [item];


    (function func(item,arrCopy){
        let itemCopy;
        let _arrCopy = arrCopy.slice(0);
        let margin = combinationLength- item.length;


        if( margin == 0){
            result.push(item);
            return;
        }
        if( margin == 1){
            for(let j in arrCopy){
                itemCopy = item.slice(0);
                itemCopy.push(arrCopy[j]);
                result.push(itemCopy);
            }
            return
        }
        if( margin > 1){
            itemCopy = item.slice(0);
            itemCopy.push(_arrCopy.shift());
            func(itemCopy,_arrCopy);

            if(item.length + _arrCopy.length >= combinationLength){
                func(item,_arrCopy);
            }

        }

    })(item,arrCopy);


    if(arrCopy.length >= combinationLength){
        return __createCombination(arrCopy, combinationLength, result);
    }else{
        return result;
    }
}