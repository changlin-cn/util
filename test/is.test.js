let {
        isArray,
        isBoolean,
        isFunction,
        isLikeArray,
        isObject,
        isPlainObject,
        isString,
        isUndefined,
        isWindow
    }      = require(`../dist/is.js`);

let expect = require('chai').expect;

describe('is.js  isArray',function(){
    it('[1,2] should be array',function(){
        expect(isArray([1,2])).to.equal(true);
    });
    it('{} should not be array',function(){
        expect(isArray({})).to.equal(false);
    });
    it('null should not be array',function(){
        expect(isArray(null)).to.equal(false);
    });
    it('\'\' should not be array',function(){
        expect(isArray('')).to.equal(false);
    });
    it('3 should not be array',function(){
        expect(isArray(3)).to.equal(false);
    });
    it('undefined should not be array',function(){
        expect(isArray(undefined)).to.equal(false);
    });
    
});

describe('is.js  isBoolean',function(){
    it('true should be Boolean',function(){
        expect(isBoolean(true)).to.equal(true);
    });
    it('false should be Boolean',function(){
        expect(isBoolean(false)).to.equal(true);
    });
    
    it('{} should not be Boolean',function(){
        expect(isArray({})).to.equal(false);
    });
    
});