let expect = require('chai').expect;


module.exports=function(is){
    
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
    
    
    describe('is.js  isType:  ', function () {
        
        let allTypes = [
            {
                'type': 'empty',
                'true': [''],
                'false': ['1.a','`', ' ',`
            `]
            },
            {
                'type': 'IdCard',
                'true': ['512123499875412541','512123499875412','51212349987541254X','51212349987541254x'],
                'false': [
                    '','a','123412341','12345123451234','5121234998754125423','51212349987541254a'
                ]
            },
            {
                'type': 'ip',
                'true': [
                    '0.0.0.0',
                    '0.0.0.1',
                    '1.0.0.1',
                    '1.1.1.1',
                    '1.9.1.1',
                    '1.10.1.1',
                    '1.10.1.1',
                    '100.10.1.1',
                    '200.10.1.1',
                    '255.10.1.1',
                    '255.10.1.199',
                    '255.10.1.255',
                    '255.255.255.255',
                ],
                'false': [
                    '01.1.2.3',
                    '',
                    '1',
                    '1,2,2,3',
                    '255.255.255.256',
                    '.255.255.255',
                    '255.255.255.',
                    '255.255.255.263',
                    '255.255.255.25.3',
                    '255.255.255.350',
                    '256.255.255.256',
                    '256.255.255.2',
                    '255.255.255.-2',
                    '255.255.255.-2',
                ]
            },
            {
                'type': 'number',
                'true': ['1', '2', '3', '2300', '0001.', '-1.2', '-5.2', '-001.', '-111.00121', '-0.001', '1.2', '0.1'],
                'false': ['1.a', '..a', '..1', '1..', '`', '']
            },
            {
                'type': 'integer',
                'true': ['1', '2', '3', '2300', '0001.'],
                'false': ['-1.2', '-5.2', '-111.00121', '-0.001', '1.2', '0.1', '']
            },
            {
                'type': 'positiveNumber',
                'true': ['1', '2', '3', '2300', '1.2', '0.32341', '0001.2', '0001.'],
                'false': ['-1.2', '0', '-1', '-5.2', '-001.', '-111.00121', '-0.001', '']
            },
            {
                'type': 'positiveInteger',
                'true': ['1', '2', '3', '2300'],
                'false': ['1.2', '0', '-1', '-5.2', '']
            },
            {
                'type': 'url',
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
            },
            {
                'type': 'tel',
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
            },
            {
                'type': 'mobilePhone',
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
            },
            {
                'type': 'email',
                'true': [
                    'user@125.com',
                    'user-admin@163.com',
                    'user_2005@qq.com',
                    'user@name.site',
                    'user@name.site.com',
                    'user@142.135.50.88',
                    'user@142.135.50.88.87.65',
                    'user_2005@abcdasddf.com.cn',
                    'user_2005@abcdasddf.com',
                    'user_2005@abcdasddf.cn',
                    'user_2005@abcdasddf.site',
                ],
                'false': [
                    'htt://www.baidu.com',
                    'user_2005@qqcom',
                    'user_2005@qq.',
                    'user_2005@.com',
                    'user_2005@.com.cn',
                    'user_2005@.com.site',
                    '',
                    'a12342341234',
                    '-1234234234@qq.com',
                    '%asdf1239847102@aa.com',
                    '2341',
                    '-user@125.com',
                    '_user-admin@163.com',
                    'user-_admin@163.com',
                    '.user_2005@qq.com'
                ]
            },
            {
                'type': 'account',
                'true': [
                    'admini',
                    'admin12341234123',
                    'admin_90',
                    'admin_83238429'
                ],
                'false': [
                    '',
                    "5432asdfasfd",
                    '_asdfqw2342',
                    'asdf',
                    'asdfasdfjklkjhtew',
                    'asdf;asdf',
                    '-asdfasdfa',
                    'asdf-asdfasdf',
                    'asdf$980787'
                ]
            }
        ];
        
        
        allTypes.forEach((one) => {
            one['true'].forEach(item => {
                it(`${item} should  be ${one.type}`, function () {
                    expect(isType(one.type, item)).to.equal(true);
                });
            });
            one['false'].forEach(item => {
                it(`${item} should not be  ${one.type}`, function () {
                    expect(isType(one.type, item)).to.equal(false);
                });
            });
        });
        
    })
    
    
    describe('is.js  isUndefined', function () {
        it('a.b should be Undefined', function () {
            let a = {};
            expect(isUndefined(
                a.b
            )).to.equal(true);
        });
        it('null should not be Undefined', function () {
            expect(isUndefined(
                null
            )).to.equal(false);
        });
        it('new Date() should not be Undefined', function () {
            expect(isUndefined(
                new Date()
            )).to.equal(false);
        });
    });
    
    
    describe('is.js  isString', function () {
        it('\'123\' should be String', function () {
            expect(isString(
                '123'
            )).to.equal(true);
        });
        it('null should not be String', function () {
            expect(isString(
                null
            )).to.equal(false);
        });
        it('new Date() should not be String', function () {
            expect(isString(
                new Date()
            )).to.equal(false);
        });
    });
    
    
    describe('is.js  isPlainObject', function () {
        it('{} should be PlainObject', function () {
            expect(isPlainObject(
                {0: 1, 1: 3, length: 2}
            )).to.equal(true);
        });
        it('null should not be PlainObject', function () {
            expect(isPlainObject(
                null
            )).to.equal(false);
        });
        it('new Date() should not be PlainObject', function () {
            expect(isPlainObject(
                new Date()
            )).to.equal(false);
        });
    });
    
    describe('is.js  isLikeArray', function () {
        it('it should be LikeArray', function () {
            expect(isLikeArray(
                {0: 1, 1: 3, length: 2}
            )).to.equal(true);
        });
        it('{} should not be LikeArray', function () {
            expect(isLikeArray(
                {}
            )).to.equal(false);
        });
    });
    describe('is.js  isObject', function () {
        it('{} should be Object', function () {
            expect(isObject(
                {0: 1, 1: 3, length: 2}
            )).to.equal(true);
        });
        it('null should not be Object', function () {
            expect(isObject(
                null
            )).to.equal(false);
        });
    });
    
    describe('is.js  isFunction', function () {
        it('()=>{} should be function', function () {
            expect(isFunction(() => {
            })).to.equal(true);
        });
        it('function(){} should be function', function () {
            expect(isFunction(function () {
            })).to.equal(true);
        });
        it('{} should not be function', function () {
            expect(isFunction({})).to.equal(false);
        });
    });
    
    
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
    
};

