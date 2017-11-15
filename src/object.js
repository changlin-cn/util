import {isString,isUndefined} from "./is";
import {lastOneOf} from "./array";

function isObject(value) {
    return value && value !== null && typeof value === 'object'
}

/**
 * 返回或设置对象的属性值
 * @param {object} obj
 * @param {string} prop 必须以'.'分割
 *
 *@example
 *```javascript
 *let obj={a:{b:{c:{d:3}}}}
 *getOrSetProp(obj,'a.b.c.d') //=>3
 *getOrSetProp(obj,'a.b.c.d',4) //=>4
 *
 *```
 *
 */
export function getOrSetProp(obj, prop, value) {
    if (!isObject(obj)) return;
    if (!isString(prop)) return;

    let props=prop.split('.');

    if(props.length===1){
        if(arguments.length===2){
            return obj[props[0]]
        }else{
            return obj[props[0]]=value
        }
    }

    let target=obj[props[0]];

    for(let i=1;i<props.length-1;i++){
        target=target[props[i]]
    }

    if(arguments.length===2){
        return target[lastOneOf(props)]
    }else{
        return target[lastOneOf(props)]=value
    }

}