/*
Object shorthand makes it easier to define objects.
Introduced in ES6 (2015).
*/

//object property shorthand
let name = 'Abc';
let o2 = {
	name
};
console.log(o2.name); // Abc

// object method shorthand
let o = {
	name: 'Rover',
	bark() {
		console.log('Bark!');
	}
};
o.bark(); // Bark!