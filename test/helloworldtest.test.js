describe("Hello world", function() {

	var helloWorld = require('../public/scripts/helloworldtest');

	console.log(helloWorld);
	it("says hello", function() {
		expect(helloWorld()).toEqual("Hello world!");
	});
});