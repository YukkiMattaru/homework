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
    rasnost,
    under,
    simrasnost,
    mySet
} from "./lib";

let set2 = newset([1,2,3], [2,3,4], [3,4,5], [4,5,6]);

console.log(Object.is(set2.list[0], [1,2,3]));