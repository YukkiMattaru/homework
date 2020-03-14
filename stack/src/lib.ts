export class StackElement<T> {
  next?: StackElement<T>;
  value: T;
}

export class Stack<T> {
 first?: StackElement<T>;
}

export function stack<T>(...args: Array<T>): Stack<T> {
  if(!args.length) return {};

  let first: StackElement<T> = { value: args[0] };
  let previous = first;

  for(let i = 1; i < args.length; i++) {
    let up: StackElement<T> = { value: args[i], next: previous };
    previous = up;
  }

  return { first: previous };
}

export function out<T>(stack: Stack<T>): void {
  let first = stack.first;
  while(first.next) {
    console.log(first.value);
    first = first.next;
  }
  console.log(first.value);
  console.log("----------------------------------------");
}

export function pop<T>(stack: Stack<T>): StackElement<T> {
  if(!stack.first) return null;

  const first = stack.first;

  if(!stack.first.next) {
    let toout = stack.first;
    stack.first = undefined;
    return toout;
  }

  let newfirst = first.next;
  first.next = undefined;
  stack.first = newfirst;

  return first;
}

export function pick<T>(stack: Stack<T>): T {
  if(!stack.first) return null;
  return stack.first.value;
}

export function push<T>(stack: Stack<T>, value: T): Stack<T> {
  if(!stack.first) return { first: { value } };

  let newFirst: StackElement<T> = { value, next: stack.first };
  let first = stack.first

  return stack;
}
