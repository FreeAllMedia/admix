import Admix from "../lib/admix.js";

describe("Admix", () => {
	let component;

	before(() => {
		component = new Admix();
	});

	it("should say something", () => {
		component.saySomething().should.equal("Something");
	});
});
