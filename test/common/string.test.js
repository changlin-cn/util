let expect = require('chai').expect;

module.exports = function ({trim, decodeUnicode, encodeToUnicode}) {
    
    describe('string.js  function  trim', function () {
        let source = '   a b c   ', source2 = '***a*bc***';
        
        it('trim(\'   a b c   \')   should  return  \'a b c\'', function () {
            expect(trim(source)).to.equal('a b c');
        });
        it('trim(\'   a b c   \',\'f\')   should  return  \'a b c   \'', function () {
            expect(trim(source, 'f')).to.equal('a b c   ');
        });
        it('trim(\'   a b c   \',\'e\')   should  return  \'   a b c\'', function () {
            expect(trim(source, 'e')).to.equal('   a b c');
        });
        it('trim(\'***a*bc***\',\'*\')   should  return  \'a*bc\'', function () {
            expect(trim(source2, '*')).to.equal('a*bc');
        });
        it('trim(\'***a*bc***\',\'f\',\'*\')   should  return  \'a*bc***\'', function () {
            expect(trim(source2, 'f', '*')).to.equal('a*bc***');
        });
        it('trim(\'***a*bc***\',\'e\',\'*\')   should  return  \'***a*bc\'', function () {
            expect(trim(source2, 'e', '*')).to.equal('***a*bc');
        });
        it('trim(123) should throw Error', function () {
            expect(function () {
                trim(123)
            }).to.throw(Error);
        });
    });
    
    describe('string.js  function  encodeToUnicode', function () {
        it('encodeToUnicode(123) should throw Error', function () {
            expect(function () {
                encodeToUnicode(123)
            }).to.throw(Error);
        });
        it('decodeUnicode(123) should throw Error', function () {
            expect(function () {
                decodeUnicode(123)
            }).to.throw(Error);
        });
        it('encodeToUnicode(\'啊abc123.\') should return \'\\u554a\\u0061\\u0062\\u0063\\u0031\\u0032\\u0033\\u002e\'', function () {
            expect(encodeToUnicode('啊abc123.')).to.equal('\\u554a\\u0061\\u0062\\u0063\\u0031\\u0032\\u0033\\u002e');
        });
        it('decodeUnicode(\'\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e\') should return \'啊abc123.\'', function () {
            expect(decodeUnicode('\u554a\u0061\u0062\u0063\u0031\u0032\u0033\u002e')).to.equal('啊abc123.');
        });
        
    })
};
