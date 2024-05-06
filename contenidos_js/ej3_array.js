let array = [1, true, 'story'];

console.log(`the array contains ${array}`);
console.log(`the first element of array is ${array.at(0)}`);
console.log(`the second element of array is ${array[1]}`);
console.log(`the last element of array is ${array.at(-1)}`);
console.log(`the length of array is ${array.length}`);
console.log(
  `exceding the maximum size of an array won't throw an error, it will throw: ${array[3]}`
);

array[5] = 'last';
console.log(`array aren´t packed, they can have empty spots: ${array}`);
