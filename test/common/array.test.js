let expect = require('chai').expect;

module.exports = function ({removeFromArray, sort, shuffle,toArray,find,findSome}) {
    
    describe('removeFromArray :   ', function () {
        
        let a    = [1, 2, 3];
        let res1 = removeFromArray(a, 1)//=>[2]
        
        let b    = [{id: 1}, {id: 2}, {id: 3}];
        let res2 = removeFromArray(b, (n) => n.id === 3)//=>[{id:3}]
        
        
        it('a should be [1,3] now', function () {
            expect(a).to.deep.equal([1, 3]);
        });
        it('b should be [{id:1},{id:2}] now', function () {
            expect(b).to.deep.equal([{id: 1}, {id: 2}]);
        });
        it('res1 should be [2]', function () {
            expect(res1).to.deep.equal([2]);
        });
        it('res2 should be [{id:3}]', function () {
            expect(res2).to.deep.equal([{id: 3}]);
        });
        
        it('removeFromArray() should throw Error', function () {
            expect(function () {
                removeFromArray()
            }).to.throw(Error);
        });
    });
    
    describe('find :   ', function () {
        it('find', function () {
            expect(find([1,2,'2',3,4,5],function(a){return a==='2'})).to.be.equal('2');
        });
         it('find nothing', function () {
            expect(find([1,2,'2',3,4,5],function(a){return a===8})).to.be.equal(undefined);
        });
        it('find() should throw Error', function () {
            expect(function () {
                find()
            }).to.throw(Error);
        });
             it('find({}) should throw Error', function () {
            expect(function () {
                find({},function(){return true})
            }).to.throw(Error);
        });
    });
    
    describe('sort :   ', function () {
        
        
        let arra = [1, 3, , , 2];
        let res1 = sort(arra, () => true)//=>[2,3,1,undefined,undefined]
        it('arra should be [2,3,1,undefined,undefined]', function () {
            expect(arra).to.deep.equal([2, 3, 1, undefined, undefined]);
        });
        it('res1 should be [2,3,1,undefined,undefined]', function () {
            expect(res1).to.deep.equal([2, 3, 1, undefined, undefined]);
        });
        
        
        let arrb = [1, 3, 5, 4, 2, 7, 6];
        let res2 = sort(arrb, (a, b) => a > b)//[1,2,3,4,5,6,7]
        it('arrb should be [1,2,3,4,5,6,7]', function () {
            expect(arrb).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
        });
        it('res2 should be [1,2,3,4,5,6,7]', function () {
            expect(res2).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
        });
        
        let arrc = [1, 3, 5, 4, 2, 7, 6];
        let res3 = sort(arrc, (a, b) => {
            throw new Error('error1')
        })//[1,3,5,4,2,7,6]
        it('arrc should be [1,3,5,4,2,7,6]', function () {
            expect(arrc).to.deep.equal([1, 3, 5, 4, 2, 7, 6]);
        });
        it('res3 should be [1,3,5,4,2,7,6]', function () {
            expect(res3).to.deep.equal([1, 3, 5, 4, 2, 7, 6]);
        });
        
        
        it('sort() should throw Error', function () {
            expect(function () {
                sort()
            }).to.throw(Error);
        });
        it('sort({}) should throw Error', function () {
            expect(function () {
                sort({})
            }).to.throw(Error);
        });
        it('sort([],) should throw Error', function () {
            expect(function () {
                sort([])
            }).to.throw(Error);
        });
        it('sort([],[]) should throw Error', function () {
            expect(function () {
                sort([], [])
            }).to.throw(Error);
        });
    });
    
    describe('shuffle :   ', function () {
        let source1 = [1, 2, 3,4,5,6];
       
        let arr1 =source1.slice(0);
        let res  = shuffle(arr1);
        console.log(`shuffle([1, 2, 3,4,5,6])
        //=>
        `);
        console.log('\/\/'+res);
        it('res===arr1 should be true', function () {
            expect(res===arr1).to.be.equal(true)
        });
        it('res should be not same with source1', function () {
            expect(res).to.be.not.equal(source1)
        });
        it('res.length should be 6', function () {
            expect(res.length).to.be.equal(6)
        });
        for(let i=0;i<source1.length;i++){
            it(`res should contain ${source1[i]}`, function () {
                expect(res.find(item=>item===source1[i])).to.be.equal(source1[i])
            });
        }
    
        it('shuffle({}) should throw Error', function () {
            expect(function () {
                shuffle({})
            }).to.throw(Error);
        });
        it('shuffle() should throw Error', function () {
            expect(function () {
                shuffle()
            }).to.throw(Error);
        });
    })
    
    describe('toArray :   ', function () {
        let source2 = {
            1:1,
            2:2,
            3:3,
            4:4,
            5:5,
            6:6,
            length:7
        };
        let res2=toArray(source2);
        
        it('res2===source2 should be false', function () {
            expect(res2===source2).to.be.equal(false)
        });
        it('res2.slice should be function', function () {
            expect(typeof res2.slice ==='function').to.be.equal(true)
        });
        it('res2.length should be 7', function () {
            expect(res2.length).to.be.equal(7)
        });
        for(let i=0;i<source2.length;i++){
            it(`res2 should contain ${source2[i]}`, function () {
                expect(res2.find(item=>item===source2[i])).to.be.equal(source2[i])
            });
        }
    
        it('toArray({}) should throw Error', function () {
            expect(function () {
                toArray({})
            }).to.throw(Error);
        });
        it('toArray() should throw Error', function () {
            expect(function () {
                toArray()
            }).to.throw(Error);
        });
        
    })
};
