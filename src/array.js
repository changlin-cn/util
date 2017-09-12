/**
 * @module array
 */

import {isArray,isFunction,isNumber} from './is'

/**
 * 从数组中移除某些项
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
function removeFromArray(arr,condition,number=1){
    if(!isArray(arr))throw new Error(`arr should be arr but got ${typeof arr}`);
    let items=[];
    if(isNumber(condition)){
        return condition<arr.length ? arr.splice(condition,number) : items
    }
    if(isFunction(condition)){
        for (let i=0;i<arr.length;i++){
            let res=false;
            try{
                res=condition(arr[i]);
            }catch (e){
                res=false;
            }
            if(res){
                items.push(arr.splice(i,1)[0]);
                i--
            }
        }
        return items
    }
    return items
}





export  {
    removeFromArray
};


