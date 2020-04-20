import {
    newset,
    contains,
    add,
    remove,
    removeByIndex,
    isEmpty,
    clear,
    out,
    conjunction,
    disjunction,
    rasnost, //
    under, //
    simrasnost, //
    mySet // TODO: mySet
} from "./lib";
import exp = require("constants");

describe("newSet", () => {
    it('numberSet', function () {
        expect(newset(1,2,3,4,5)).toEqual({ list: [1,2,3,4,5] });
    });
    it('numberOne', function () {
        expect(newset(1)).toEqual({list: [1]});
    });
    it('emptySet', function () {
        expect(newset()).toEqual({list: []});
    });
});
describe("contains", () => {
    let set1 = newset(1,2,3,4,5);
    let set2 = newset();

    it('containsNumber', function () {
        expect(contains(set1, 3)).toEqual(true);
    });
    it('containsEmpty', function () {
        expect(contains(set2, 3)).toEqual(false);
    });
    it('containsFalse', function () {
        expect(contains(set2, 6)).toEqual(false);
    });
});
describe("add", () => {
   let set1 = newset(1,2);
   let setAdd = newset(1,2,3);

   let set2 = newset(1,2);
   let set3 = newset(3,4);
   let setAddRange = newset(1,2,3,4);

   let set4 = newset(1,2,3);
   let set5 = newset(2,3,4);
   let setAddRangeWithEqual = newset(1,2,3,4);

    it('setAdd', function () {
       expect(add(set1, 3)).toEqual(setAdd);
    });
    it('setAddRange', function () {
        expect(add(set2, ...set3.list)).toEqual(setAddRange);
    });
    it('setAddRangeWithEqualNumber', function () {
        expect(add(set4, ...set5.list)).toEqual(setAddRangeWithEqual);
    });
});
describe('remove', function () {
   let set1 = newset(1,2,3,4,5);
   let set1r = newset(1,2,4,5);
   let set2 = newset(1,2,3,4,5);
   let empset = newset();

    it('removeOne', function () {
        expect(remove(set1, 3)).toEqual(set1r);
    });
    it('removeRange', function () {
        expect(remove(set2, 2,3,4,5)).toEqual({ list: [1] });
    });
    it('removeEmpty', function () {
        expect(remove(empset, 1)).toEqual({ list: [] })
    });
});
describe('removeByIndex', () => {
   let set1 = newset(1,2,3,4,5);
   let set1r = newset(1,2,4,5);

   let empset = newset();

   let set2 = newset(1,2,3,4,5);
   let set2r = newset(1,2);

    it('removeIndex', function () {
        expect(removeByIndex(set1, 2)).toEqual(set1r);
    });
    it('removeEmpty', function() {
        expect(removeByIndex(empset, 3)).toEqual({ list: [] })
    });
    it('removeRange', function () {
        expect(removeByIndex(set2, 2,3)).toEqual(set2r);
    });
});
describe('isEmpty', () => {
   let set1 = newset(1,2,3);
   let empset = newset();

    it('notEmpty', function () {
        expect(isEmpty(set1)).toEqual(false);
    });
    it('empty', function() {
        expect(isEmpty(empset)).toEqual(true);
    })
});
describe('clear', () => {
   let set1 = newset(1,2,3,4,5,6,7,8,9);
   let empset: mySet<number> = newset();

    it('clear', function () {
        expect(clear(set1)).toEqual(empset);
    });
});
describe('out', () => {
   let set1 = newset(1,2,3);
   let empset = newset();

    it('outSet', function () {
        expect(out(set1)).toEqual(console.log("1,2,3"));
    });
    it('outEmpty', function () {
        expect(out(empset)).toEqual(console.log());
    });
});
describe('conjunction', function () {
    let set1 = newset(1,2,3);
    let set2 = newset(4,5);
    let resSet1: mySet<number> = newset();

    let set3 = newset(1,2,3);
    let set4 = newset(2,3,4);
    let resSet2 = newset(2,3);

    let empSet1: mySet<number> = newset();
    let empSet2: mySet<number> = newset();
    let resSet3: mySet<number> = newset();

    it('resultEmpty', function () {
        expect(conjunction(set1,set2)).toEqual(resSet1);
    });
    it('result2', function () {
        expect(conjunction(set3,set4)).toEqual(resSet2);
    });
    it('emptyConj', function () {
        expect(conjunction(empSet1, empSet2)).toEqual(resSet3);
    });
});
describe('disjunction', () => {
   let set1 = newset(1,2,3);
   let set2 = newset(4,5,6);
   let resSet1 = newset(1,2,3,4,5,6);
   
   let set3 = newset(1,2,3);
   let set4 = newset(2,3,4);
   let resSet2 = newset(1,2,3,4);
   
   let empSet1: mySet<number> = newset();
   let empSet2: mySet<number> = newset();
   let resSet3: mySet<number> = newset();

    it('disj1', function () {
        expect(disjunction(set1,set2)).toEqual(resSet1);
    });
    it('disj2', function () {
        expect(disjunction(set3,set4)).toEqual(resSet2);
    });
    it('disjEmp', function () {
        expect(disjunction(empSet1,empSet2)).toEqual(resSet3);
    });
});
describe('raznost', () => {
   let set1 = newset(1,2,3,4,5);
   let set2 = newset(2,3,4);
   let resSet1 = newset(1,5);

   let set3 = newset(1,2,3);
   let set4 = newset(1,2,3);
   let resSet2: mySet<number> = newset();

   let set5 = newset(1,2,3,4,5);
   let set6 = newset(6,7,8);
   let resSet3 = newset(1,2,3,4,5);

   let empSet1: mySet<number> = newset();
   let empSet2: mySet<number> = newset();
   let resSet4: mySet<number> = newset();

    it('razn1', function () {
        expect(rasnost(set1,set2)).toEqual(resSet1);
    });
    it('razn2', function () {
        expect(rasnost(set3,set4)).toEqual(resSet2);
    });
    it('razn3', function () {
        expect(rasnost(set5, set6)).toEqual(resSet3);
    });
    it('raznEmp', function () {
        expect(rasnost(empSet1, empSet2)).toEqual(resSet4);
    });
});
describe('under', () => {
   let set1 = newset(1,2,3);
   let set2 = newset(2,3);
   let empset: mySet<number> = newset();
   let set3 = newset(4,5);

    it('under1', function () {
        expect(under(set1, set2)).toEqual(true);
    });
    it('under2', function () {
        expect(under(set1,set1)).toEqual(true);
    });
    it('under3', function () {
        expect(under(set1, empset)).toEqual(true);
    });
    it('under4', function () {
        expect(under(empset,empset)).toEqual(true);
    });
    it('underFalse', function () {
        expect(under(set1,set3)).toEqual(false);
    });
});
describe('simrasnost', () => {
   let set1 = newset(1,2,3,4);
   let set2 = newset(3,4,5,6);
   let resSet1 = newset(1,2,5,6);

   let empset1: mySet<number> = newset();
   let empset2: mySet<number> = newset();
   let resSet2: mySet<number> = newset();

   let set3 = newset(1,2,3,4);

    it('simraz1', function () {
        expect(simrasnost(set1,set2)).toEqual(resSet1);
    });

    it('simraz2', function () {
        expect(simrasnost(empset1, empset2)).toEqual(resSet2);
    });

    it('simraz3', function () {
        expect(simrasnost(set1,set3)).toEqual(resSet2);
    });
});

