import * as _ from 'lodash';
let numbers:number[] = [1,2,3,4,5,6,7,8,9];

let shuffled = _.shuffle(numbers)
let reversed:Array<number> = _.reverse(numbers);
console.log(shuffled);
console.log(reversed);
