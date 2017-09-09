/*
Destructuring allows you to easily unpack objects.
Destructuring was introduced in ECMAScript 6 (2015).
It is supported in Node 6.57+.
It is supported in every modern browser except IE11.
*/

// easy to unpack objects
let o = {
	amount: 40,
	price: 2.51,
	color: 'red',
	details: {
		sold: 66
	}
};
let { amount, color } = o;
console.log(amount, color); // 40 'red'
let { amount: amt, price: p } = o;
console.log(amt, p); // 40 2.51
let { details: { sold } } = o; // sold is defined, but details is not
console.log(sold); // 66

// you can even provide default values
let { existingVal = 3, nonexistentVal = 4, defaultToOtherValue = existingVal } = { existingVal: 7 };
console.log(existingVal, nonexistentVal, defaultToOtherValue); // 7 4 7

// helps unpack function return values
function returnStuff() {
	return { dogs: 6, cats: 4 };
}
let { dogs, cats } = returnStuff();
console.log(dogs, cats); // 6 4

// can even turn it around in function declarations
function makeNoise({ name='Unknown', sound='Bark' }) {
	return name + ': ' + sound;
}
console.log(makeNoise({ name: 'Rover' })); // Rover: Bark

// you can also destructure arrays
let arr = [ 5, 2, 8, 7, 4 ];
let [ first, second ] = arr;
console.log(first, second); // 5 2
let [ ,, third, fourth ] = arr;
console.log(third, fourth); // 8 7
let [ one, ...rest ] = arr;
console.log(one, rest); // 5 [ 2, 8, 7, 4 ]
let [ oneAgain, ...[ two, three, ...restMuch ]] = arr;
console.log(oneAgain, two, three, restMuch);

// good for regex too
let [ all, firstName, lastName ] = /(\w+) (\w+)/.exec('Ruth Booth');
console.log(all); // Ruth Booth
console.log(firstName); // Ruth
console.log(lastName); // Booth

// for loops
let arr2 = [ 6, 3, 7 ];
for (let [ k, v ] of arr2.entries()) {
    console.log(k + ' -> ' + v);
		// 0 -> 6
		// 1 -> 3
		// 2 -> 7
}

// can be used on properties of strings
let str = 'abcdef';
let { length: len } = str;
console.log(len); // 6

