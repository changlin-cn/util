let expect = require('chai').expect;

module.exports = function (dateFormat, fromTime) {
    
    describe('dateFormat :   ', function () {
        let t1 = new Date(1478836800000);
        
        it('dateFormat(t1,\'yyyy/MM/dd hh:mm:ss\')  should  return  \'2016/11/11 12:00:00\'', function () {
            expect(dateFormat(t1, 'yyyy/MM/dd hh:mm:ss')).to.equal('2016/11/11 12:00:00');
        });
        
        it('dateFormat(t1,\'yyyy-MM-dd hh:mm:ss\')  should  return  \'2016-11-11 12:00:00\'', function () {
            expect(dateFormat(t1, 'yyyy-MM-dd hh:mm:ss')).to.equal('2016-11-11 12:00:00');
        });
        it('dateFormat(t1,\'yyyy-MM-dd\')  should  return  \'2016-11-11\'', function () {
            expect(dateFormat(t1, 'yyyy-MM-dd')).to.equal('2016-11-11');
        });
         it('dateFormat(1478836800000,\'yyyy-MM-dd\')  should  return  \'2016-11-11\'', function () {
            expect(dateFormat(1478836800000, 'yyyy-MM-dd')).to.equal('2016-11-11');
        });
          it('dateFormat(\'1478836800000\',\'yyyy-MM-dd\')  should  return  \'2016-11-11\'', function () {
            expect(dateFormat('1478836800000', 'yyyy-MM-dd')).to.equal('2016-11-11');
        });
        it('dateFormat() should throw Error', function () {
            expect(function(){dateFormat()} ).to.throw(Error);
        });
          it('dateFormat({}) should throw Error', function () {
            expect(function(){dateFormat({})} ).to.throw(Error);
        });
           it('dateFormat(0,1234) should throw Error', function () {
            expect(function(){dateFormat(0,1234)} ).to.throw(Error);
        });
           it('dateFormat(NaN,1234) should throw Error', function () {
            expect(function(){dateFormat(NaN,1234)} ).to.throw(Error);
        });
        
    });
   
    describe('fromTime :   ', function () {
        let t1 = new Date(1478836800000);
        let t2 = new Date(1478836800100);
        let t3 = new Date(1478836803000);
        let t4 = new Date(1478836860000);//1m
        let t5 = new Date(1478840400000);//1h
        let t6 = new Date(1478926800000);//1d
        let t7 = new Date(1481518800000);//1M  >31d
        let t9 = new Date(1513054800000);//1y  >366d
        
        
        it("fromTime(t1,t2) should  return  '刚刚'", function () {
            expect(fromTime(t1,t2)).to.equal('刚刚');
        });
        it("fromTime(t1,t3) should  return  '3秒前'", function () {
            expect(fromTime(t1,t3)).to.equal('3秒前');
        });
        it("fromTime(t1,t4) should  return  '1分钟前'", function () {
            expect(fromTime(t1,t4)).to.equal('1分钟前');
        });
        it("fromTime(t1,t5) should  return  '1小时前'", function () {
            expect(fromTime(t1,t5)).to.equal('1小时前');
        });
        it("fromTime(t1,t6) should  return  '1天前'", function () {
            expect(fromTime(t1,t6)).to.equal('1天前');
        });
        it("fromTime(t1,t7) should  return  '1月前'", function () {
            expect(fromTime(t1, t7)).to.equal('1月前');
        });
        it("fromTime(t1,t9) should  return  '1年前'", function () {
            expect(fromTime(t1,t9)).to.equal('1年前');
        });
        
    });
    
    
};
