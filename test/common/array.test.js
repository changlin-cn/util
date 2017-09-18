let expect = require('chai').expect;

module.exports=function({removeFromArray,sort}){
    
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
     describe('sort :   ', function () {
    
    
         let arra=[1,3,,,2];
         let res1=sort(arra,()=>true)//=>[2,3,1,undefined,undefined]
         it('arra should be [2,3,1,undefined,undefined]', function () {
             expect(arra).to.deep.equal([2,3,1,undefined,undefined]);
         });
          it('res1 should be [2,3,1,undefined,undefined]', function () {
             expect(res1).to.deep.equal([2,3,1,undefined,undefined]);
         });
    
    
         let arrb=[1,3,5,4,2,7,6];
         let res2=sort(arrb,(a,b)=>a>b)//[1,2,3,4,5,6,7]
         it('arrb should be [1,2,3,4,5,6,7]', function () {
             expect(arrb).to.deep.equal([1,2,3,4,5,6,7]);
         });
         it('res2 should be [1,2,3,4,5,6,7]', function () {
             expect(res2).to.deep.equal([1,2,3,4,5,6,7]);
         });
         
          let arrc=[1,3,5,4,2,7,6];
         let res3=sort(arrc,(a,b)=>{throw new Error('error1')})//[1,3,5,4,2,7,6]
         it('arrc should be [1,3,5,4,2,7,6]', function () {
             expect(arrc).to.deep.equal([1,3,5,4,2,7,6]);
         });
         it('res3 should be [1,3,5,4,2,7,6]', function () {
             expect(res3).to.deep.equal([1,3,5,4,2,7,6]);
         });
    
    
         it('sort() should throw Error', function () {
             expect(function(){sort()} ).to.throw(Error);
         });
         it('sort({}) should throw Error', function () {
             expect(function(){sort({})} ).to.throw(Error);
         });
         it('sort([],) should throw Error', function () {
             expect(function(){sort([])} ).to.throw(Error);
         });
         it('sort([],[]) should throw Error', function () {
             expect(function(){sort([],[])} ).to.throw(Error);
         });
     });
    
     
     
};
