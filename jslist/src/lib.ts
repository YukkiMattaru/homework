export class ListElement<T> {
  prev?: ListElement<T>;
  next?: ListElement<T>;
  value: T;
}

export class List<T> {
  first?: ListElement<T>;
}

// list - create list by user
// example: let list1 = list('1', 'sda', 'something', 'wtf');
export function list<T>(...elements: Array<T>): List<T> {
  if (!elements.length) return {}; // in case the array is empty

  let first: ListElement<T> = { value: elements[0] };
  let nodePrevious = first;

  for (let i = 1; i < elements.length; i++) {
    const value = elements[i];
    const nodeCurrent: ListElement<T> = { value, prev: nodePrevious };
    nodePrevious.next = nodeCurrent;
    nodePrevious = nodeCurrent;
  }

  return { first };
}

// append
export function append<T>(list: List<T>, value: T): List<T> {
  if(!list.first) return { first: { value } }; // list.first = { value };

  let last = list.first; // const { first : last } = list; - переименование
  while (last.next) {
    last = last.next;
  }
  const lastNew: ListElement<T> = { value, prev: last };
  last.next = lastNew;

  return list;
}

// insert
export function insert<T>(list: List<T>, value: T, id: number): List<T> {
  if(!list.first) return { first: { value }};
  if(id == 0) return addbegin(list, value);
  let tmp = list.first;
  let count = 0;
  let el: ListElement<T> = { value };
  while(tmp.next) {
    count++;
    tmp = tmp.next;
    if(count == id) {
      let prev = tmp.prev;
      prev.next = el;
      el.prev = prev;
      el.next = tmp;
      tmp.prev = el;
      return list;
    }
  }
  tmp.next = el;
  el.prev = tmp;
  return list;
}

// addbegin
export function addbegin<T>(list: List<T>, value: T): List<T> {
  if (!list.first) return { first: { value }};

  let { first } = list;
  let newfirst: ListElement<T> = { value, next: first };

  (first as ListElement<T>).prev = newfirst;

  return { first: first.prev }
}

// count
export function count<T>(list: List<T>): Number {
  if(!list.first) return 0;

  let count = 1;
  let { first } = list;

  while(first.next) {
    first = first.next;
    count++
  }

  return count;
}

// find
export function find<T>(list: List<T>, value: T): Number {
  if(!list.first) return -1;

  let count = 1;
  let { first } = list;

  if(first.value === value) return 0;

  while (first.next) {

    if (first.next.value === value) return count;

    first = first.next;
    count++;
  }

  return -1;
}

// remove
export function remove<T>(list: List<T>, id: number): List<T> {
  if(!list.first) return list;

  if(id == 0) {
    let { first } = list;
    if(!first.next) return {};
    first = first.next;
    first.prev = undefined;
    return { first };
  }

  let count = 0;
  let tmp = list.first;

  while(tmp.next) {
    count++;
    tmp = tmp.next;

    if(count == id) {

      if(!tmp.next) {
        tmp.prev = undefined;
        return list;
      }

      let prev = tmp.prev;
      let next = tmp.next;
      prev.next = next;
      next.prev = prev;
      return list;
    }
  }

  return list;
}

// removeByValue
export function removeByValue<T>(list: List<T>, value: T): List<T> {
  if(!list.first) return list;
  let tmp = list.first;
  if(tmp.value === value) {
    if(!tmp.next) return {};
    tmp = tmp.next;
    tmp.prev = undefined;
    return list = { first: tmp };
  }
  while(tmp.next) {
    tmp = tmp.next;
    if(value === tmp.value) {
      if(!tmp.next) {
        tmp.prev.next = undefined;
        return list;
      }
      let prev = tmp.prev;
      let next = tmp.next;
      prev.next = next;
      next.prev = prev;
      tmp.next = undefined;
      tmp.prev = undefined;
      return list;
    }
  }
  return list;
}

// out
export function out<T>(l: List<T>): void {
  if (!l.first) console.log({});

  let cur = l.first;
  while (cur.next) {
      console.log(cur.value);
      cur = cur.next;
  }
  console.log(cur.value);
  console.log("----------------------------");
}
