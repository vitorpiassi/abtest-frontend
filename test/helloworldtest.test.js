describe("Hello world", function() {

	var helloWorld = require('../resources/scripts/oldtest/helloworldtest');

	it("says hello", function() {
		expect(helloWorld()).toEqual("Hello world!");
	});
});