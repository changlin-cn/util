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

describe('is.js  is:',function(){
    //number
    it('0 should be number',function(){
        expect(is('number',0)).to.equal(true);
    });
    it('0. should be number',function(){
        expect(is('number',0.)).to.equal(true);
    });
    it('0.1 should be number',function(){
        expect(is('number',0.1)).to.equal(true);
    });
    it('0.1234 should be number',function(){
        expect(is('number',0.1234)).to.equal(true);
    });
    it('.1234 should be number',function(){
        expect(is('number',.1234)).to.equal(true);
    });
    it('12.3.4 should not be number',function(){
        expect(is('number','12.3.4')).to.equal(false);
    });
    it('{} should not be number',function(){
        expect(is('number',{})).to.equal(false);
    });
    
    //integer
    it('12 should  be integer',function(){
        expect(is('integer','12')).to.equal(true);
    });
    it('0 should  be integer',function(){
        expect(is('integer','0')).to.equal(true);
    });
    it('-1 should  be integer',function(){
        expect(is('integer','-1')).to.equal(true);
    });
    it('-1.3 should not be integer',function(){
        expect(is('integer','-1.3')).to.equal(false);
    });
    it('1.3 should not be integer',function(){
        expect(is('integer','1.3')).to.equal(false);
    });
    
    //positiveNumber
    it('1.3 should be positiveNumber',function(){
        expect(is('positiveNumber','1.3')).to.equal(true);
    });
    it('-1.3 should not be positiveNumber',function(){
        expect(is('positiveNumber',-1.3)).to.equal(false);
    });
    it('0 should not be positiveNumber',function(){
        expect(is('positiveNumber',0)).to.equal(false);
    });
    it('0.3 should  be positiveNumber',function(){
        expect(is('positiveNumber',0.3)).to.equal(true);
    });
    it('0.03 should  be positiveNumber',function(){
        expect(is('positiveNumber',0.03)).to.equal(true);
    });
    it('01.03 should  be positiveNumber',function(){
        expect(is('positiveNumber','00.03')).to.equal(true);
    });
    
    
    //positiveInteger
    it('1.3 should not be positiveInteger',function(){
        expect(is('positiveInteger',1.3)).to.equal(false);
    });
    it('0 should not be positiveInteger',function(){
        expect(is('positiveInteger',0)).to.equal(false);
    });
    it('1 should be positiveInteger',function(){
        expect(is('positiveInteger',1)).to.equal(true);
    });
    
    
    
});