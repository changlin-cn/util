let expect = require('chai').expect;

module.exports = function ({getOrSetProp}) {
    
    describe('getOrSetProp', function () {
        let obj={a:{b:{c:{d:3}}}}

        it('get', function () {
            expect(getOrSetProp(obj,'a.b.c.d')).to.equal(3);
        });
        it('set', function () {
            expect(getOrSetProp(obj,'a.b.c.d',4) ).to.equal(4);
        });
        it('set2', function () {
            expect(getOrSetProp(obj,'a.b.c.e',5) ).to.equal(5);
        });
        it('get2', function () {
            expect(getOrSetProp(obj,'a.b.c.e')).to.equal(5);
        });
         it('get3', function () {
            expect(obj.a.b.c.e).to.equal(5);
        });
        it('set4', function () {
            obj.a.b.c.f=4
            expect(getOrSetProp(obj,'a.b.c.f',undefined) ).to.equal(undefined);
        });
        it('get4', function () {
            expect(getOrSetProp(obj,'a.b.c.f')).to.equal(undefined);
        });


    });
    

};
