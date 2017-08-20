let expect = require('chai').expect;


let extendModule=require('../dist/extend.js');
let isModule=require('../dist/is.js');
let index=require('../dist/index.js');
let regex=require('../dist/regex');
let {
        isArray,
        is,
        isBoolean,
        isFunction,
        isLikeArray,
        isObject,
        isPlainObject,
        isString,
        isUndefined,
        isWindow
    }=isModule;

describe('extend.default and extend.extend should be  function',function(){
    
    it('extend.default and extend.extend should be  function',function(){
        expect(isFunction(extendModule.default)&&isFunction(extendModule.extend)).to.equal(true);
    });
});

describe('index module exports checking',function(){
    
    it('extend should be  function',function(){
        expect(isFunction(index.extend)).to.equal(true);
    });
    it('is should be  object',function(){
        expect(isFunction(index.is.isFunction)).to.equal(true);
    });
    it('is.default.isFunction ==isFunction',function(){
        expect(isFunction==isModule.default.isFunction).to.equal(true);
    });
    
});

describe('regex',function(){
    it('regex.number ==regex.default.number should be true',function(){
        expect(regex.number==regex.default.number).to.equal(true);
    });
});
