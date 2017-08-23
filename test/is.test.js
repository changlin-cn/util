let expect = require('chai').expect;
import {is} from '../src/index'

let {
        isArray,
        isType,
        isBoolean,
        isFunction,
        isLikeArray,
        isObject,
        isPlainObject,
        isString,
        isUndefined,
        isWindow
    } = is;


describe('is.js  isArray', function () {
    it('[1,2] should be array', function () {
        expect(isArray([1, 2])).to.equal(true);
    });
    it('{} should not be array', function () {
        expect(isArray({})).to.equal(false);
    });
    it('null should not be array', function () {
        expect(isArray(null)).to.equal(false);
    });
    it('\'\' should not be array', function () {
        expect(isArray('')).to.equal(false);
    });
    it('3 should not be array', function () {
        expect(isArray(3)).to.equal(false);
    });
    it('undefined should not be array', function () {
        expect(isArray(undefined)).to.equal(false);
    });
    
});

describe('is.js  isBoolean', function () {
    it('true should be Boolean', function () {
        expect(isBoolean(true)).to.equal(true);
    });
    it('false should be Boolean', function () {
        expect(isBoolean(false)).to.equal(true);
    });
    it('{} should not be Boolean', function () {
        expect(isArray({})).to.equal(false);
    });
});

describe('is.js  is:', function () {
    //number
    let number = {
        'true': ['1', '2', '3', '2300', '0001.', '-1.2', '-5.2', '-001.', '-111.00121', '-0.001', '1.2', '0.1'],
        'false': ['1.a', '..a', '..1', '1..', '`', '']
    };
    number['true'].forEach(item => {
        it(`${item} should  be number`, function () {
            expect(isType('number', item)).to.equal(true);
        });
    });
    number['false'].forEach(item => {
        it(`${item} should not be number`, function () {
            expect(isType('number', item)).to.equal(false);
        });
    });
    
    
    //integer
    let integer = {
        'true': ['1', '2', '3', '2300', '0001.'],
        'false': ['-1.2', '-5.2', '-111.00121', '-0.001', '1.2', '0.1', '']
    };
    integer['true'].forEach(item => {
        it(`${item} should  be integer`, function () {
            expect(isType('integer', item)).to.equal(true);
        });
    });
    integer['false'].forEach(item => {
        it(`${item} should not be integer`, function () {
            expect(isType('integer', item)).to.equal(false);
        });
    });
    
    
    //positiveNumber
    let positiveNumber = {
        'true': ['1', '2', '3', '2300', '1.2', '0.32341', '0001.2', '0001.'],
        'false': ['-1.2', '0', '-1', '-5.2', '-001.', '-111.00121', '-0.001', '']
    };
    positiveNumber['true'].forEach(item => {
        it(`${item} should  be positiveNumber`, function () {
            expect(isType('positiveNumber', item)).to.equal(true);
        });
    });
    positiveNumber['false'].forEach(item => {
        it(`${item} should not be positiveNumber`, function () {
            expect(isType('positiveNumber', item)).to.equal(false);
        });
    });
    
    
    //positiveInteger
    let positiveInteger = {
        'true': ['1', '2', '3', '2300'],
        'false': ['1.2', '0', '-1', '-5.2', '']
    };
    positiveInteger['true'].forEach(item => {
        it(`${item} should  be positiveInteger`, function () {
            expect(isType('positiveInteger', item)).to.equal(true);
        });
    });
    positiveInteger['false'].forEach(item => {
        it(`${item} should not be positiveInteger`, function () {
            expect(isType('positiveInteger', item)).to.equal(false);
        });
    });
    
    
    //url
    let urls = {
        'true': [
            'http://www.baidu.com',
            'http://www.baidu.com?a=3',
            'http://www.baidu.com?a=3&',
            'http://www.baidu.com?a=3&b=4',
            'http://www.baidu.com?a=3&b=4#',
            'http://www.baidu.com?a=3&b=4#asdflkjla',
            'http://www.baidu.com?a=3&b=4#/asdflkjla?a=5',
            'https://www.baidu.com'
        ],
        'false': [
            'htt://www.baidu.com',
            'http//www.baidu.com',
            'http:www.baidu.com',
            'http://',
            'asdfas',
            'http://#asdf',
            'http://SLDKasdf?asdf',
            'www.baidu.com'
        ]
    };
    
    urls['true'].forEach(item => {
        it(`${item} should be positiveInteger`, function () {
            expect(isType('url', item)).to.equal(true);
        });
    });
    urls['false'].forEach(item => {
        it(`${item} should not be positiveInteger`, function () {
            expect(isType('url', item)).to.equal(false);
        });
    });
    
    //tel
    let tel = {
        'true': [
            '028-12323424',
            '0754-12323424',
            '0086-0754-12323424',
            '(0754)12323424',
            '(0754)12323424877',
            '（0754）12323424877',
            '13345635673',
            '15345635673',
            '+8615345635673',
            '+861-15345635673'
        ],
        'false': [
            'htt://www.baidu.com',
            '',
            'a12342341234',
            '-1234234234',
            '%asdf1239847102',
            '2341',
            '123'
        ]
    };
    
    tel['true'].forEach(item => {
        it(`${item} should be tel`, function () {
            expect(isType('tel', item)).to.equal(true);
        });
    });
    tel['false'].forEach(item => {
        it(`${item} should not be tel`, function () {
            expect(isType('tel', item)).to.equal(false);
        });
    });
    
    //mobilePhone
    let mobilePhone = {
        'true': [
            '13345635673',
            '15345635673',
            '+8615345635673'
        ],
        'false': [
            'htt://www.baidu.com',
            '',
            'a12342341234',
            '-1234234234',
            '%asdf1239847102',
            '2341',
            '123',
            '1234123412'
        ]
    };
    
    mobilePhone['true'].forEach(item => {
        it(`${item} should be mobilePhone`, function () {
            expect(isType('mobilePhone', item)).to.equal(true);
        });
    });
    mobilePhone['false'].forEach(item => {
        it(`${item} should not be mobilePhone`, function () {
            expect(isType('mobilePhone', item)).to.equal(false);
        });
    });
    
});