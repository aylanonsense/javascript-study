/*
let and const allow for better variable declarations and scoping.
Introduced in ES6 (ES2015).
Supported in all modern browsers.
Supported in Node 4.8.4+
*/

// variables defined with var escape block scope
{
	var a = 5;
}
console.log(a); // 5

// variables defined with let play nice with scoping
{
	let b = 5;
}
try {
	console.log(b); // Error!
}
catch(err) {}

// this include for loop scoping
for (let c = 0; c < 10; c++) { }
try {
	console.log(b); // Error!
}
catch(err) {}

// constants can't be changed once set
// in general you should opt for const whenever possible
const d = 5;
try {
	d = 6; // Error!
}
catch(err) {}