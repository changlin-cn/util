let expect = require('chai').expect;

module.exports=function(trim){
    
    describe('string.js  function  trim', function () {
        let source='   a b c   ', source2='***a*bc***';
        
        it('trim(\'   a b c   \')   should  return  \'a b c\'', function () {
            expect(trim(source)).to.equal('a b c');
        });
        it('trim(\'   a b c   \',\'f\')   should  return  \'a b c   \'', function () {
            expect(trim(source,'f')).to.equal('a b c   ');
        });
         it('trim(\'   a b c   \',\'e\')   should  return  \'   a b c\'', function () {
            expect(trim(source,'e')).to.equal('   a b c');
        });
        it('trim(\'***a*bc***\',\'*\')   should  return  \'a*bc\'', function () {
            expect(trim(source2,'*')).to.equal('a*bc');
        });
        it('trim(\'***a*bc***\',\'f\',\'*\')   should  return  \'a*bc***\'', function () {
            expect(trim(source2,'f','*')).to.equal('a*bc***');
        });
         it('trim(\'***a*bc***\',\'e\',\'*\')   should  return  \'***a*bc\'', function () {
            expect(trim(source2,'e','*')).to.equal('***a*bc');
        });
        it('trim(123) should throw Error', function () {
            expect(function(){trim(123)} ).to.throw(Error);
        });
    });
    
};
