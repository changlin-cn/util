
# changlin-util

整理的一些工具函数

[![language](https://img.shields.io/badge/language-javascript-orange.svg)](https://github.com/ChangLin-CN/changlin-util.git)     [![Build Status](https://travis-ci.org/ChangLin-CN/changlin-util.svg?branch=master)](https://travis-ci.org/ChangLin-CN/changlin-util)         [![npm version](https://img.shields.io/npm/v/changlin-util.svg)](https://www.npmjs.com/package/changlin-util)


# 快速使用

```javascript
npm install changlin-util

import {isType,isObject,isString,extend,regex,trim,removeFromArray,is} from 'changlin-util'
import {isType,isString} from  'changlin-util/dist/is'
```



# API

## Modules

<dl>
<dt><a href="#module_string">string</a></dt>
<dd></dd>
<dt><a href="#module_array">array</a></dt>
<dd></dd>
<dt><a href="#module_date">date</a></dt>
<dd></dd>
<dt><a href="#module_extend">extend</a></dt>
<dd></dd>
<dt><a href="#module_is">is</a></dt>
<dd></dd>
<dt><a href="#module_regex">regex</a></dt>
<dd></dd>
</dl>

<a name="module_string"></a>

## string
<a name="module_string.trim"></a>

### string.trim(string, fe, char) ⇒ <code>string</code>
字符串两端剪切

**Kind**: static method of [<code>string</code>](#module_string)  
**Export**: trim  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> |  |
| fe | <code>string</code> | f or e or  fe |
| char | <code>string</code> |  |

**Example**  
```javascripttrim('   abc   ')//=>'abc'trim('   abc   ','f')//=>'abc   'trim('   abc   ','e')//=>'   abc'trim('**abc**','*')//=>'abc'```
<a name="module_array"></a>

## array
<a name="module_array.removeFromArray"></a>

### array.removeFromArray(arr, condition, number) ⇒ <code>Array</code>
从数组中移除某些项

**Kind**: static method of [<code>array</code>](#module_array)  
**Export**: removeFromArray  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| condition | <code>Number</code> \| <code>function</code> | if(number&&arr[number] remove arr[number] ; if(fn(item))remove item |
| number | <code>Number</code> |  |

**Example**  
```javascriptlet a=[1,2,3];removeFromArray(a,1)//=>[2]a//=>[1,3]let b=[{id:1},{id:2},{id:3}];removeFromArray(b,(n)=>n.id===3)//=>[{id:3}]b//=>[{id:1},{id:2}]```
<a name="module_date"></a>

## date

* [date](#module_date)
    * [.ONE_SEC](#module_date.ONE_SEC)
    * [.ONE_MIN](#module_date.ONE_MIN)
    * [.ONE_HOUR](#module_date.ONE_HOUR)
    * [.ONE_DAY](#module_date.ONE_DAY)
    * [.ONE_MONTH](#module_date.ONE_MONTH)
    * [.ONE_YEAR](#module_date.ONE_YEAR)
    * [.dateFormat(date, format)](#module_date.dateFormat) ⇒ <code>string</code>
    * [.fromTime(from, now)](#module_date.fromTime) ⇒ <code>string</code>

<a name="module_date.ONE_SEC"></a>

### date.ONE_SEC
**Kind**: static constant of [<code>date</code>](#module_date)  
**Export**: ONE_SEC  
<a name="module_date.ONE_MIN"></a>

### date.ONE_MIN
**Kind**: static constant of [<code>date</code>](#module_date)  
**Export**: ONE_MIN  
<a name="module_date.ONE_HOUR"></a>

### date.ONE_HOUR
**Kind**: static constant of [<code>date</code>](#module_date)  
**Export**: ONE_HOUR  
<a name="module_date.ONE_DAY"></a>

### date.ONE_DAY
**Kind**: static constant of [<code>date</code>](#module_date)  
**Export**: ONE_DAY  
<a name="module_date.ONE_MONTH"></a>

### date.ONE_MONTH
**Kind**: static constant of [<code>date</code>](#module_date)  
**Export**: ONE_MONTH  
<a name="module_date.ONE_YEAR"></a>

### date.ONE_YEAR
**Kind**: static constant of [<code>date</code>](#module_date)  
**Export**: ONE_YEAR  
<a name="module_date.dateFormat"></a>

### date.dateFormat(date, format) ⇒ <code>string</code>
时间格式化

**Kind**: static method of [<code>date</code>](#module_date)  
**Export**: dateFormat  

| Param | Type |
| --- | --- |
| date | <code>Date</code> \| <code>string</code> \| <code>number</code> | 
| format | <code>string</code> | 

**Example**  
```javascriptdateFormat(new Date(), 'yyyy/MM/dd hh:mm:ss')dateFormat(1478836800000, 'yyyy-MM-dd') //=>2016-11-11```
<a name="module_date.fromTime"></a>

### date.fromTime(from, now) ⇒ <code>string</code>
**Kind**: static method of [<code>date</code>](#module_date)  
**Export**: fromTime获取时间段  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Date</code> \| <code>string</code> \| <code>number</code> | 较远的时间 |
| now | <code>Date</code> \| <code>string</code> \| <code>number</code> \| <code>undefined</code> | 较近的时间 |

**Example**  
```javascript let t1 = new Date(1478836800000); let t2 = new Date(1478836800100);  fromTime(t1, t2) //=>刚刚```
<a name="module_extend"></a>

## extend
<a name="module_extend.extend"></a>

### extend.extend(deep, target, source) ⇒ <code>object</code>
对象扩展

**Kind**: static method of [<code>extend</code>](#module_extend)  
**Export**: extend  

| Param | Type |
| --- | --- |
| deep | <code>boolean</code> \| <code>object</code> | 
| target | <code>object</code> | 
| source | <code>object</code> | 

**Example**  
```javascript//deep  false let source  = {a: 1, b: 2, c: {c1: 1}};let res  = extend(false, {}, source);source.c.c1 = 4;res.c.c1===4//=>true//deep truelet source  = {a: 1, b: 2, c: {c1: 1}};let res  = extend(true, {}, source);source.c.c1 = 4;res.c.c1===4//=>false```
<a name="module_is"></a>

## is

* [is](#module_is)
    * [.isArray](#module_is.isArray) ⇒ <code>boolean</code>
    * [.isType(type, string)](#module_is.isType) ⇒ <code>boolean</code>
    * [.isFunction()](#module_is.isFunction) ⇒ <code>boolean</code>
    * [.isUndefined()](#module_is.isUndefined) ⇒ <code>boolean</code>
    * [.isWindow()](#module_is.isWindow) ⇒ <code>boolean</code>
    * [.isString()](#module_is.isString) ⇒ <code>boolean</code>
    * [.isNumber()](#module_is.isNumber) ⇒ <code>boolean</code>
    * [.isObject()](#module_is.isObject) ⇒ <code>boolean</code>
    * [.isDate()](#module_is.isDate) ⇒ <code>boolean</code>
    * [.isPlainObject()](#module_is.isPlainObject) ⇒ <code>boolean</code>
    * [.isLikeArray()](#module_is.isLikeArray) ⇒ <code>boolean</code>
    * [.isBoolean()](#module_is.isBoolean) ⇒ <code>boolean</code>

<a name="module_is.isArray"></a>

### is.isArray ⇒ <code>boolean</code>
判断值是否为Array

**Kind**: static property of [<code>is</code>](#module_is)  
**Export**: isArray  
<a name="module_is.isType"></a>

### is.isType(type, string) ⇒ <code>boolean</code>
类型判断

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isType  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | url tel mobilePhone email account IdCard ip...参考regex 模块导出对象的属性 |
| string | <code>string</code> |  |

**Example**  
```javascriptisType('email','user@163.com')   //=>true```
<a name="module_is.isFunction"></a>

### is.isFunction() ⇒ <code>boolean</code>
判断值是否为function

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isFunction  
<a name="module_is.isUndefined"></a>

### is.isUndefined() ⇒ <code>boolean</code>
判断值是否为undefined

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isUndefined  
<a name="module_is.isWindow"></a>

### is.isWindow() ⇒ <code>boolean</code>
判断值是否为window

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isWindow  
<a name="module_is.isString"></a>

### is.isString() ⇒ <code>boolean</code>
判断值是否为string

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isString  
<a name="module_is.isNumber"></a>

### is.isNumber() ⇒ <code>boolean</code>
判断值是否为number

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isNumber  
<a name="module_is.isObject"></a>

### is.isObject() ⇒ <code>boolean</code>
判断值是否为object

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isObject  
<a name="module_is.isDate"></a>

### is.isDate() ⇒ <code>boolean</code>
判断值是否为Date

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isDate  
<a name="module_is.isPlainObject"></a>

### is.isPlainObject() ⇒ <code>boolean</code>
判断值是否为Plain Object

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isPlainObject  
<a name="module_is.isLikeArray"></a>

### is.isLikeArray() ⇒ <code>boolean</code>
判断值是否类似array

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isLikeArray  
<a name="module_is.isBoolean"></a>

### is.isBoolean() ⇒ <code>boolean</code>
判断值是否为boolean

**Kind**: static method of [<code>is</code>](#module_is)  
**Export**: isBoolean  
<a name="module_regex"></a>

## regex
<a name="module_regex..regex"></a>

### regex~regex
**Kind**: inner property of [<code>regex</code>](#module_regex)  
**Export**: regex 常用正则表达式  
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


