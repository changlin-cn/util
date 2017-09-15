/**
 * @module array
 */

import {isArray,isFunction,isNumber,isUndefined} from './is'

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
export function removeFromArray(arr,condition,number=1){
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
export function sort(arr,compare){
    if(!isFunction(compare)||!isArray(arr)){
        throw new Error('arguments is not expected')
    }
    let i,j;
    for(i=1;i<arr.length;i++){
            for(j=i-1;j>-1;j--){
                let res;
                try{
                    if(isUndefined(arr[j+1])){
                    
                    }
                    res=compare(arr[j],arr[j+1])
                }catch (e){
                    res=false
                }
                if(res){
                    arr.splice(j,0,arr.splice(j+1,1)[0])
                }else{
                    break ;
                }
            }
    }
    return arr;
}






