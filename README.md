
# changlin-util

整理的一些工具函数

[![language](https://img.shields.io/badge/language-javascript-orange.svg)](https://github.com/ChangLin-CN/changlin-util.git)     [![npm version](https://img.shields.io/npm/v/changlin-util.svg)](https://www.npmjs.com/package/changlin-util)     [![Build Status](https://travis-ci.org/changlin-cn/changlin-util.svg?branch=master)](https://travis-ci.org/changlin-cn/changlin-util)


# 快速使用

```javascript
npm install changlin-util

import {
    isType,
    isObject,
    isString,
    extend,
    regex,
    trim,
    removeFromArray,
    is,
    shuffle,
    randomInteger,
    toArray,
    whatIs
} from 'changlin-util'
//或者
import {isType,isString} from  'changlin-util/dist/is'
```



# API

## Members

<dl>
<dt><a href="#regex">regex</a></dt>
<dd><p>常用正则表达式</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#ONE_SEC">ONE_SEC</a></dt>
<dd></dd>
<dt><a href="#ONE_MIN">ONE_MIN</a></dt>
<dd></dd>
<dt><a href="#ONE_HOUR">ONE_HOUR</a></dt>
<dd></dd>
<dt><a href="#ONE_DAY">ONE_DAY</a></dt>
<dd></dd>
<dt><a href="#ONE_MONTH">ONE_MONTH</a></dt>
<dd></dd>
<dt><a href="#ONE_YEAR">ONE_YEAR</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#trim">trim(string, fe, char)</a> ⇒ <code>string</code></dt>
<dd><p>字符串两端剪切</p>
</dd>
<dt><a href="#encodeToUnicode">encodeToUnicode(str)</a> ⇒ <code>string</code></dt>
<dd><p>字符转unicode</p>
</dd>
<dt><a href="#decodeUnicode">decodeUnicode(str)</a> ⇒ <code>string</code></dt>
<dd><p>unicode字符串解码</p>
</dd>
<dt><a href="#firstUpperCase">firstUpperCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Capitalize the first letter</p>
</dd>
<dt><a href="#firstLowerCase">firstLowerCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Lowercase first letter</p>
</dd>
<dt><a href="#splitUnit">splitUnit(value, relative)</a> ⇒ <code>object</code></dt>
<dd><p>split number with unit</p>
</dd>
<dt><a href="#randomInteger">randomInteger(min, max)</a> ⇒ <code>number</code></dt>
<dd><p>生成一定范围内的随机整数 （包括端点）</p>
</dd>
<dt><a href="#toArray">toArray(s)</a> ⇒ <code>Array</code></dt>
<dd><p>类数组对象转化为数组</p>
</dd>
<dt><a href="#removeFromArray">removeFromArray(arr, condition, number)</a> ⇒ <code>Array</code></dt>
<dd><p>从数组中移除某些项</p>
</dd>
<dt><a href="#sort">sort(arr, compare)</a> ⇒ <code>Array</code></dt>
<dd><p>排序</p>
</dd>
<dt><a href="#find">find(array, fn)</a> ⇒ <code>any</code></dt>
<dd><p>找出数组某一个元素</p>
</dd>
<dt><a href="#shuffle">shuffle(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>乱序。返回原（类）数组</p>
</dd>
<dt><a href="#lastOneOf">lastOneOf(arr)</a></dt>
<dd><p>获取数组最后一个元素</p>
</dd>
<dt><a href="#getOrSetProp">getOrSetProp(obj, prop)</a></dt>
<dd><p>返回或设置对象的属性值</p>
</dd>
<dt><a href="#dateFormat">dateFormat(date, format)</a> ⇒ <code>string</code></dt>
<dd><p>时间格式化</p>
</dd>
<dt><a href="#fromTime">fromTime(from, now)</a> ⇒ <code>string</code></dt>
<dd><p>获取时间段</p>
</dd>
<dt><a href="#extend">extend(deep, target, source)</a> ⇒ <code>object</code></dt>
<dd><p>对象扩展</p>
</dd>
<dt><a href="#isType">isType(type, string)</a> ⇒ <code>boolean</code></dt>
<dd><p>类型判断</p>
</dd>
<dt><a href="#isFunction">isFunction()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为function</p>
</dd>
<dt><a href="#isUndefined">isUndefined()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为undefined</p>
</dd>
<dt><a href="#isWindow">isWindow()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为window</p>
</dd>
<dt><a href="#isString">isString()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为string</p>
</dd>
<dt><a href="#isNumber">isNumber()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为number</p>
</dd>
<dt><a href="#isObject">isObject()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为object(注意：此方法使用Object.prototype.toString.call(value)进行判断)</p>
</dd>
<dt><a href="#isDate">isDate()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为Date</p>
</dd>
<dt><a href="#isPlainObject">isPlainObject()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为Plain Object</p>
</dd>
<dt><a href="#isLikeArray">isLikeArray()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否类似array</p>
</dd>
<dt><a href="#isArray">isArray()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为Array</p>
</dd>
<dt><a href="#isBoolean">isBoolean()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为boolean</p>
</dd>
<dt><a href="#whatIs">whatIs()</a> ⇒ <code>string</code></dt>
<dd><p>判断值的类型</p>
</dd>
<dt><a href="#isDOM">isDOM()</a> ⇒ <code>boolean</code></dt>
<dd><p>判断值是否为dom对象</p>
</dd>
</dl>

<a name="regex"></a>

## regex
常用正则表达式

**Kind**: global variable  
**Properties**

| Name |
| --- |
| number | 
| empty | 
| integer | 
| positiveInteger | 
| positiveNumber | 
| url | 
| tel | 
| mobilePhone | 
| email | 
| account | 
| IdCard | 
| ip | 
| numberWithUnit | 
| relativeNumberWithUnit | 

<a name="ONE_SEC"></a>

## ONE_SEC
**Kind**: global constant  
<a name="ONE_MIN"></a>

## ONE_MIN
**Kind**: global constant  
<a name="ONE_HOUR"></a>

## ONE_HOUR
**Kind**: global constant  
<a name="ONE_DAY"></a>

## ONE_DAY
**Kind**: global constant  
<a name="ONE_MONTH"></a>

## ONE_MONTH
**Kind**: global constant  
<a name="ONE_YEAR"></a>

## ONE_YEAR
**Kind**: global constant  
<a name="trim"></a>

## trim(string, fe, char) ⇒ <code>string</code>
字符串两端剪切

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> |  |
| fe | <code>string</code> | f or e or  fe |
| char | <code>string</code> |  |

**Example**  
```javascript
trim('   abc   ')//=>'abc'
trim('   abc   ','f')//=>'abc   '
trim('   abc   ','e')//=>'   abc'
trim('**abc**','*')//=>'abc'
```
<a name="encodeToUnicode"></a>

## encodeToUnicode(str) ⇒ <code>string</code>
字符转unicode

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | 需要转码的字符串 |

**Example**  
```javascript
 encodeToUnicode('啊abc123.')
 //=>"\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e"

```
<a name="decodeUnicode"></a>

## decodeUnicode(str) ⇒ <code>string</code>
unicode字符串解码

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | 需要解码的字符串 |

**Example**  
```javascript
 decodeUnicode('\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e')
 //=>"啊abc123."

```
<a name="firstUpperCase"></a>

## firstUpperCase(string) ⇒ <code>string</code>
Capitalize the first letter

**Kind**: global function  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```javascript
 firstUpperCase('abc')//=>'Abc'


```
<a name="firstLowerCase"></a>

## firstLowerCase(string) ⇒ <code>string</code>
Lowercase first letter

**Kind**: global function  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```javascript
 firstLowerCase('Abc')//=>'abc'


```
<a name="splitUnit"></a>

## splitUnit(value, relative) ⇒ <code>object</code>
split number with unit

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 
| relative | <code>boolean</code> | 

**Example**  
```javascript
 splitUnit('123px')//=>{value:123,unit:'px'}
 splitUnit('123%')//=>{value:123,unit:'%'}
 splitUnit('+123%')//=>{value:123,unit:'%'}
 splitUnit('-123%')//=>{value:-123,unit:'%'}
 splitUnit('-=123%',true)//=>{value:'-=123',unit:'%'}
 splitUnit('+=123%',true)//=>{value:'+=123',unit:'%'}


```
<a name="randomInteger"></a>

## randomInteger(min, max) ⇒ <code>number</code>
生成一定范围内的随机整数 （包括端点）

**Kind**: global function  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

**Example**  
```javascript
let res=randomInteger(4)
res>=0&&res<=4      //true
isType('integer',res)//true

```
<a name="toArray"></a>

## toArray(s) ⇒ <code>Array</code>
类数组对象转化为数组

**Kind**: global function  

| Param | Type |
| --- | --- |
| s | <code>Object</code> | 

**Example**  
```javascript
toArray({'0':123,'2':456,length:3})
//=>[123,456,undefined]
```
<a name="removeFromArray"></a>

## removeFromArray(arr, condition, number) ⇒ <code>Array</code>
从数组中移除某些项

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| condition | <code>Number</code> \| <code>function</code> | if(number&&arr[number] remove arr[number] ; if(fn(item))remove item |
| number | <code>Number</code> |  |

**Example**  
```javascript
let a=[1,2,3];
removeFromArray(a,1)//=>[2]
a//=>[1,3]

let b=[{id:1},{id:2},{id:3}];
removeFromArray(b,(n)=>n.id===3)//=>[{id:3}]
b//=>[{id:1},{id:2}]
```
<a name="sort"></a>

## sort(arr, compare) ⇒ <code>Array</code>
排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| compare | <code>function</code> | 比较函数 |

**Example**  
```javascript
let a=[1,3,,,2];
sort(a,()=>true)//=>[2,3,1,undefined,undefined]
a//=>[2,3,1,undefined,undefined]

let arrb=[1,3,5,4,2,7,6]
sort(arrb,(a,b)=>a>b)//[1,2,3,4,5,6,7]

```
<a name="find"></a>

## find(array, fn) ⇒ <code>any</code>
找出数组某一个元素

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> |  |
| fn | <code>function</code> | 过滤函数 |

**Example**  
```javascript
find([1,2,'2',3,4,5],function(a){return a==='2'})//=>'2'
find([1,2,'2',3,4,5],function(a){return a===8})//=>undefined
```
<a name="shuffle"></a>

## shuffle(arr) ⇒ <code>Array</code>
乱序。返回原（类）数组

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```javascript
let arr1=[1,2,3];
let res=shuffle(arr1);
res===arr1//=>true
res.length===3//true
```
<a name="lastOneOf"></a>

## lastOneOf(arr)
获取数组最后一个元素

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

**Example**  
```javascript

lastOneOf([1,2,3])//=>3


```
<a name="getOrSetProp"></a>

## getOrSetProp(obj, prop)
返回或设置对象的属性值

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> |  |
| prop | <code>string</code> | 必须以'.'分割 |

**Example**  
```javascript
let obj={a:{b:{c:{d:3}}}}
getOrSetProp(obj,'a.b.c.d') //=>3
getOrSetProp(obj,'a.b.c.d',4) //=>4

```
<a name="dateFormat"></a>

## dateFormat(date, format) ⇒ <code>string</code>
时间格式化

**Kind**: global function  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>string</code> \| <code>number</code> | 
| format | <code>string</code> | 

**Example**  
```javascript
dateFormat(new Date(), 'yyyy/MM/dd hh:mm:ss')
dateFormat(1478836800000, 'yyyy-MM-dd') //=>2016-11-11
```
<a name="fromTime"></a>

## fromTime(from, now) ⇒ <code>string</code>
获取时间段

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Date</code> \| <code>string</code> \| <code>number</code> | 较远的时间 |
| now | <code>Date</code> \| <code>string</code> \| <code>number</code> \| <code>undefined</code> | 较近的时间 |

**Example**  
```javascript
 let t1 = new Date(1478836800000);
 let t2 = new Date(1478836800100);
  fromTime(t1, t2) //=>刚刚
```
<a name="extend"></a>

## extend(deep, target, source) ⇒ <code>object</code>
对象扩展

**Kind**: global function  

| Param | Type |
| --- | --- |
| deep | <code>boolean</code> \| <code>object</code> | 
| target | <code>object</code> | 
| source | <code>object</code> | 

**Example**  
```javascript
//deep  false
 let source  = {a: 1, b: 2, c: {c1: 1}};
let res  = extend(false, {}, source);
source.c.c1 = 4;
res.c.c1===4//=>true

//deep true
let source  = {a: 1, b: 2, c: {c1: 1}};
let res  = extend(true, {}, source);
source.c.c1 = 4;
res.c.c1===4//=>false
```
<a name="isType"></a>

## isType(type, string) ⇒ <code>boolean</code>
类型判断

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | url tel mobilePhone email account IdCard ip...参考regex 模块导出对象的属性 |
| string | <code>string</code> \| <code>number</code> |  |

**Example**  
```javascript
isType('email','user@163.com')   //=>true
```
<a name="isFunction"></a>

## isFunction() ⇒ <code>boolean</code>
判断值是否为function

**Kind**: global function  
<a name="isUndefined"></a>

## isUndefined() ⇒ <code>boolean</code>
判断值是否为undefined

**Kind**: global function  
<a name="isWindow"></a>

## isWindow() ⇒ <code>boolean</code>
判断值是否为window

**Kind**: global function  
<a name="isString"></a>

## isString() ⇒ <code>boolean</code>
判断值是否为string

**Kind**: global function  
<a name="isNumber"></a>

## isNumber() ⇒ <code>boolean</code>
判断值是否为number

**Kind**: global function  
<a name="isObject"></a>

## isObject() ⇒ <code>boolean</code>
判断值是否为object(注意：此方法使用Object.prototype.toString.call(value)进行判断)

**Kind**: global function  
<a name="isDate"></a>

## isDate() ⇒ <code>boolean</code>
判断值是否为Date

**Kind**: global function  
<a name="isPlainObject"></a>

## isPlainObject() ⇒ <code>boolean</code>
判断值是否为Plain Object

**Kind**: global function  
<a name="isLikeArray"></a>

## isLikeArray() ⇒ <code>boolean</code>
判断值是否类似array

**Kind**: global function  
<a name="isArray"></a>

## isArray() ⇒ <code>boolean</code>
判断值是否为Array

**Kind**: global function  
<a name="isBoolean"></a>

## isBoolean() ⇒ <code>boolean</code>
判断值是否为boolean

**Kind**: global function  
<a name="whatIs"></a>

## whatIs() ⇒ <code>string</code>
判断值的类型

**Kind**: global function  
**Example**  
```javascript
whatIs(new Date())//=>'date'
whatIs(null)//=>'null'

```
<a name="isDOM"></a>

## isDOM() ⇒ <code>boolean</code>
判断值是否为dom对象

**Kind**: global function  
**Example**  
```javascript
isDOM(document.querySelector('div'))


```

