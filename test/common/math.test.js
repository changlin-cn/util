let expect = require('chai').expect;

module.exports = function ({randomInteger,is:{isType}}) {
    
    describe('randomInteger:   ', function () {
       let times=100;
       let min=0,max=10;
       for(let i=0;i<times;i++){
           let result=randomInteger(min,max);
           it(`result>=${min}&&result<=${max} should  be true.(result : ${result})`, function () {
               expect(result>=min&&result<=max).to.equal(true);
           });
    
           it(`result should  be integer`, function () {
               expect(isType('integer',result)).to.equal(true);
           });
       }
    
        it(`randomInteger() should  throw error`, function () {
            expect(function(){randomInteger()}).to.throw(Error);
        });
    
    });
    
};
