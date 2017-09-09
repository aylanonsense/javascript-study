/*
Accessors allow you to define getters and setters
  on objects that call functiosn under the covers.
Introduced in ES5 (2009).
*/

let o = {
	_age: 450,
	get age() {
		return this._age / 10;
	},
	set age(age) {
		this._age = age * 10;
	}
};
console.log(o.age); // 45
console.log(o._age); // 450
o.age = 31;
console.log(o.age); // 31
console.log(o._age); // 310