// you can define object keys with function calls
function getPropertyName(prop) {
	return '_~&%$_' + prop;
}
let o = {
	name: 'abc',
	[getPropertyName('age')]: 123
};