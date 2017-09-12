let expect = require('chai').expect;

module.exports=function(removeFromArray){
    
    describe('removeFromArray :   ', function () {
    
        let a=[1,2,3];
        let res1=removeFromArray(a,1)//=>[2]
       
        let b=[{id:1},{id:2},{id:3}];
        let res2=removeFromArray(b,(n)=>n.id===3)//=>[{id:3}]
        
        
         it('a should be [1,3] now', function () {
            expect(a).to.deep.equal([1,3]);
        });
         it('b should be [{id:1},{id:2}] now', function () {
            expect(b).to.deep.equal([{id:1},{id:2}]);
        });
         it('res1 should be [2]', function () {
            expect(res1).to.deep.equal([2]);
        });
         it('res2 should be [{id:3}]', function () {
            expect(res2).to.deep.equal([{id:3}]);
        });
        
        it('removeFromArray() should throw Error', function () {
            expect(function(){removeFromArray()} ).to.throw(Error);
        });
    });
    
};
