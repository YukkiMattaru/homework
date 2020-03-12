import {out, list, append, insert, addbegin, List, count, remove, removeByValue, find} from './lib';

//const l1 = list(1,2,3,4,5,6,7);
let l2 = list('w', '23', 'toremove3', '41a', 'dask');

/*function out<T>(l: List<T>): void {
  if (!l.first) console.log({});

  let cur = l.first;
  while (cur.next) {
      console.log(cur.value);
      cur = cur.next;
  }
  console.log(cur.value);
  console.log("----------------------------");
}*/

out(l2);
l2 = append(l2, 'append');
out(l2);
l2 = insert(l2, 'insert0', 0)
out(l2);
l2 = insert(l2, 'insert3', 3);
out(l2);
l2 = insert(l2, 'insertlast421', 421);
out(l2);
l2 = append(l2, 'appended');
out(l2);
console.log(count(l2));
let l3 = list();
console.log(count(l3));
console.log('ERROR:');
l2 = removeByValue(l2, '23131232132323');
out(l2);
console.log(count(l2));
l2 = removeByValue(l2, 'insert0');
out(l2);
console.log(count(l2));
l2 = removeByValue(l2, 'toremove3');
out(l2);
console.log(count(l2));
