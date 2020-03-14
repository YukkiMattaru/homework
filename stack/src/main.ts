import { stack, out, pop, pick } from './lib';

let stack1 = stack('one', 'two', 'three', 'four');

out(stack1);

let element = pop(stack1);

out(stack1);

console.log(pick(stack1));
console.log('----------------------------------------');

out(stack1);
