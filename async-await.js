/*
Async await is a way of structuring async code to make it look synchronous.
Introduced in ES2017.
Supported in Node as of v7.6.
Supported in modern browsers except IE11.
*/

// suppose you had some async functions
function echoDelayed(v) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(v), 500);
	});
}
function errorDelayed() {
	return new Promise((resolve, reject) => {
		setTimeout(() => reject('ahhhh'), 500);
	});
}

// await can only be used within an "async" context
(async () => {

	// use the await keyword before an async request to make it "synchronous" within this context
	//   (will not block other code from being executed, just within this scope)
	let s = await echoDelayed('hello');
	s += ' ' + (await echoDelayed('how are you?'));
	console.log(s); // hello how are you?

	// this allows us to use typical try { } catch { } constructs for errors
	try {
		await errorDelayed();
	}
	catch (err) {
		console.log(err); // ahhhh
	}

})();

// it also makes debugging async code much easier!