/**
 * @module array
 */

import {isArray,isFunction,isNumber,isUndefined,whatIs,isLikeArray} from './is'
import {randomInteger} from './math.js'



/**
 * 类数组对象转化为数组
 *
 * @param {Object}  s
 * @example
 * ```javascript
 *toArray({'0':123,'2':456,length:3})
 * //=>[123,456,undefined]
 * ```
 *
 * @returns {Array}
 */
export function toArray(s){
    if(!isLikeArray(s)){
        throw new Error('s should be like array')
    }
    try{
        return Array.prototype.slice.call(s);
    } catch(e){
        let arr = [];
        for(let i = 0,len = s.length; i < len; i++){
            arr[i] = s[i];
        }
        return arr;
    }
}


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
                if(isUndefined(arr[j+1])){
                    break
                }else if(isUndefined(arr[j])){
                    res=true
                }else {
                    try{
                        res=compare(arr[j],arr[j+1])
                    }catch (e){
                        res=false;
                        break;
                    }
                }
                if(res){
                    arr.splice(j,0,arr.splice(j+1,1)[0])
                }else {
                    break
                }
            }
    }
    return arr;
}

/**
 * 乱序。返回原（类）数组
 *
 * @param {Array}  arr
 * @example
 * ```javascript
 * let arr1=[1,2,3];
 * let res=shuffle(arr1);
 * res===arr1//=>true
 * res.length===3//true
 * ```
 *
 * @returns {Array}
 */
export function shuffle(arr){
    let source ;
    if(!isArray(arr)){
        if(isLikeArray(arr)){
            source=toArray(arr);
        }else{
            throw new Error(`arr should be array but got ${whatIs(arr)}`)
        }
        
    }else{
        source=arr
    }
   let temp=source.slice(0);
    for(let i=0,l=arr.length;i<l;i++){
        let n=randomInteger(l-i-1);
        arr[i]=temp.splice(n,1)[0]
    }
    
    return arr;
}









