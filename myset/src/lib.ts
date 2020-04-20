// МНОЖЕСТВА

export class mySet<T> {
    list: Array<T>;
}

export function newset<T>(...args: Array<T>): mySet<T> {
    let temp: mySet<T> = { list: [] };
    return add(temp, ...args);
}

export function add<T>(list: mySet<T>, ...values: Array<T>): mySet<T> {
    for (let i = 0; i < values.length; i++) {
        if(!contains(list, values[i])) list.list.push(values[i]);
    }
    return list;
}

export function rasnost<T>(list1: mySet<T>, list2: mySet<T>): mySet<T> {
    let result: mySet<T> = newset();
    for (let i = 0; i < list1.list.length; i++) {
        if (!contains(list2, list1.list[i])) result = add(result, list1.list[i]);
    }
    return result;
}

export function simrasnost<T>(list1: mySet<T>, list2: mySet<T>): mySet<T> {
    let result: mySet<T> = newset();
    for (let i = 0; i < list1.list.length; i++) {
        if (!contains(list2, list1.list[i])) result = add(result, list1.list[i]);
    }
    for (let i = 0; i < list2.list.length; i++) {
        if (!contains(list1, list2.list[i])) result = add(result, list2.list[i]);
    }
    return result;
}

export function contains<T>(list: mySet<T>, value: T): boolean {
    for (let i = 0; i < list.list.length; i++) {
        if (Object.is(value, list.list[i])) return true;
    }
    return false;
}

export function remove<T>(list: mySet<T>, ...values: Array<T>): mySet<T> {
    for (let j = 0; j < values.length; j++) {
        if (contains(list, values[j])) {
            for (let i = 0; i < list.list.length; i++) {
                if (list.list[i] == values[j]) list.list.splice(i, 1);
            }
        }
    }
    return list;
}

export function removeByIndex<T>(list: mySet<T>, index: number, howMany: number = 1): mySet<T> {
    if (index < list.list.length && index >= 0) list.list.splice(index, howMany);
    return list;
}

export function isEmpty<T>(list: mySet<T>): boolean {
    return !list.list.length;
}

export function clear<T>(list: mySet<T>): mySet<T> {
    return newset();
}

export function out<T>(list: mySet<T>): void {
    console.log(list.list.join(', '));
}

export function conjunction<T>(list1: mySet<T>, list2: mySet<T>): mySet<T> {
    let result: Array<T> = [];
    for (let i = 0; i < list1.list.length; i++) {
        if(contains(list2, list1.list[i])) result.push(list1.list[i]);
    }
    return newset(...result);
}

export function disjunction<T>(list1: mySet<T>, list2: mySet<T>): mySet<T> {
    let out: mySet<T> = newset();
    add(out, ...list1.list);
    add(out, ...list2.list);
    return out;
}


export function under<T>(check: mySet<T>, under: mySet<T>): boolean {
    for (let i = 0; i < under.list.length; i++) {
        if (!contains(check, under.list[i])) return false;
    }
    return true;
}

