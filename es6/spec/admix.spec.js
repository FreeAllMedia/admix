import admix from "../lib/admix.js";

describe("Admix", () => {
	it("should be able to replace tags in a template", () => {
		const template = admix("Hello, <%= something %>!");

		const renderedTemplate = template({
			something: "world"
		});

		renderedTemplate.should.eql("Hello, world!");
	});
});
