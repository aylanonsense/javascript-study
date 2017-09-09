/*
Introduced in ECMAScript 6 (2015).
Supported in all modern browsers except IE11.
*/

// the spread operator can be used in place of apply
function sumSquares(x, y, z) {
	return x * x + y * y + z * z;
}
let args = [ 4, 2, 3 ];
console.log(sumSquares(...args)); // 29

// or to get the arguments as an array
function secondArg(...args) {
	return args[1];
}
console.log(secondArg(4, 8, 7, 1)); // 8

// or in destructuring
let data = { name: 'Jaja', age: 40, color: 'blue', arms: 2 };
let { name, age, ...otherProps } = data;
console.log(name); // Jaja
console.log(age); // 40
console.log(otherProps); // { color: 'blue', arms: 2 }

// it can also be used to concat two arrays
let arr1 = [ 3, 7, 5 ];
let arr2 = [ 4, 2, 1 ];
arr1.push(...arr2);
console.log(arr1); // [ 3, 7, 5, 4, 2, 1 ]

// this can be done in a new array rather than mutating one
let arr1And2 = [ ...arr1, ...arr2 ];

// or to copy an array
let arr3 = [ 9, 6 ];
let arr4 = [ ...arr3 ];
arr4.push(3);
console.log(arr3); // [ 9, 6 ]
console.log(arr4); // [ 9, 6, 3 ]

// or math functions
console.log(Math.min(...arr4)); // 3

// fun to split strings this way too
console.log([ ... "hello" ]); // [ 'h', 'e', 'l', 'l', 'o' ]

// the spread operator can be used on any iterable!!