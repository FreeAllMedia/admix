import admix from "../lib/admix.js";

describe("Admix", () => {
	it("should be able to replace tags in a template", () => {
		const template = admix("Hello, <%= something %>!");

		const renderedTemplate = template({
			something: "world"
		});

		renderedTemplate.should.eql("Hello, world!");
	});

	it("should error when a tag is unused in the template", () => {
		const template = admix("Hello, <%= something %>!");

		() => {
			template();
		}.should.throw();
	});
});
