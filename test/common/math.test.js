let expect = require('chai').expect;

module.exports = function ({randomInteger, is: {isType}, computeCombinationLength, computeFactorial, createCombination,excludeTheSame}) {

    describe('randomInteger:   ', function () {
        let times = 100;
        let min = 0, max = 10;
        for (let i = 0; i < times; i++) {
            let result = randomInteger(min, max);
            it(`result>=${min}&&result<=${max} should  be true.(result : ${result})`, function () {
                expect(result >= min && result <= max).to.equal(true);
            });

            it(`result should  be integer`, function () {
                expect(isType('integer', result)).to.equal(true);
            });
        }

        it(`randomInteger() should  throw error`, function () {
            expect(function () {
                randomInteger()
            }).to.throw(Error);
        });

    });


    describe('computeFactorial:   ', function () {
        it(`computeFactorial() should  throw error`, function () {
            expect(function () {
                computeFactorial()
            }).to.throw(Error);
        });
        it(`computeFactorial('a') should  throw error`, function () {
            expect(function () {
                computeFactorial('a')
            }).to.throw(Error);
        });
        it(`computeFactorial(-1) should  throw error`, function () {
            expect(function () {
                computeFactorial(-1)
            }).to.throw(Error);
        });


        it(`computeFactorial(0) should  return  1`, function () {
            expect(computeFactorial(0)).to.equal(1);
        });

        it(`computeFactorial(1) should  return  1`, function () {
            expect(computeFactorial(1)).to.equal(1);
        });
        it(`computeFactorial(2) should  return  2`, function () {
            expect(computeFactorial(2)).to.equal(2);
        });
        it(`computeFactorial(3) should  return  6`, function () {
            expect(computeFactorial(3)).to.equal(6);
        });

        it(`computeFactorial(4) should  return  24`, function () {
            expect(computeFactorial(4)).to.equal(24);
        });


    });


    describe('computeCombinationLength:   ', function () {
        it(`computeCombinationLength() should  throw error`, function () {
            expect(function () {
                computeCombinationLength()
            }).to.throw(Error);
        });
        it(`computeCombinationLength('a') should  throw error`, function () {
            expect(function () {
                computeCombinationLength('a')
            }).to.throw(Error);
        });
        it(`computeCombinationLength(-1,0) should  throw error`, function () {
            expect(function () {
                computeCombinationLength(-1, 0)
            }).to.throw(Error);
        });
        it(`computeCombinationLength(1,-1) should  throw error`, function () {
            expect(function () {
                computeCombinationLength(1, -1)
            }).to.throw(Error);
        });
        it(`computeCombinationLength(1,2) should  throw error`, function () {
            expect(function () {
                computeCombinationLength(1, 2)
            }).to.throw(Error);
        });

        it(`computeCombinationLength(1,0) should  return  1`, function () {
            expect(computeCombinationLength(1, 0)).to.equal(1);
        });
        it(`computeCombinationLength(1,1) should  return  1`, function () {
            expect(computeCombinationLength(1, 1)).to.equal(1);
        });
        it(`computeCombinationLength(2,1) should  return  2`, function () {
            expect(computeCombinationLength(2, 1)).to.equal(2);
        });
        it(`computeCombinationLength(2,2) should  return  1`, function () {
            expect(computeCombinationLength(2, 2)).to.equal(1);
        });
        it(`computeCombinationLength(3,1) should  return  3`, function () {
            expect(computeCombinationLength(3, 1)).to.equal(3);
        });
        it(`computeCombinationLength(3,2) should  return  3`, function () {
            expect(computeCombinationLength(3, 2)).to.equal(3);
        });
        it(`computeCombinationLength(3,3) should  return  1`, function () {
            expect(computeCombinationLength(3, 3)).to.equal(1);
        });
        it(`computeCombinationLength(4,1) should  return  4`, function () {
            expect(computeCombinationLength(4, 1)).to.equal(4);
        });
        it(`computeCombinationLength(4,2) should  return  6`, function () {
            expect(computeCombinationLength(4, 2)).to.equal(6);
        });
        it(`computeCombinationLength(4,3) should  return  4`, function () {
            expect(computeCombinationLength(4, 3)).to.equal(4);
        });
        it(`computeCombinationLength(4,4) should  return  1`, function () {
            expect(computeCombinationLength(4, 4)).to.equal(1);
        });
        it(`computeCombinationLength(5,2) should  return  10`, function () {
            expect(computeCombinationLength(5, 2)).to.equal(10);
        });
    });


    describe('createCombination:   ', function () {
        const combination=createCombination(
            [
                1,2,3,4,4,5,6,6,7,7,7
            ],
            2
        ),l=computeCombinationLength(7,2);

        it(`combination.length should  be  ${l}`, function () {
            expect(combination.length === l).to.equal(true);
        });

        const combination2=createCombination(
            [
                1,2,3,4,4,5,6,6,7,7,7,8,9,10
            ],
            5
        ),l2=computeCombinationLength(10,5);

        it(`combination2.length should  be  ${l2}`, function () {
            expect(combination2.length === l2).to.equal(true);
        });

        it(`combination2's element should  be  unique`, function () {
            expect(
                excludeTheSame(
                    combination2,
                    (a,b)=>{
                        let temp=0;
                        for(let i=0;i<a.length;i++){
                            if(b.indexOf(a[i])>-1){
                                temp++
                            }
                        }
                        return temp === b.length
                    }
                ).length
            ).to.equal(l2);
        });

        it(`createCombination() should  throw error`, function () {
            expect(function () {
                createCombination()
            }).to.throw(Error);
        });
       it(`createCombination(null) should  throw error`, function () {
            expect(function () {
                createCombination(null)
            }).to.throw(Error);
        });


    });

};
