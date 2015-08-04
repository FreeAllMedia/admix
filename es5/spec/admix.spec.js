"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libAdmixJs = require("../lib/admix.js");

var _libAdmixJs2 = _interopRequireDefault(_libAdmixJs);

describe("Admix", function () {
	it("should be able to replace tags in a template", function () {
		var template = (0, _libAdmixJs2["default"])("Hello, <%= something %>!");

		var renderedTemplate = template({
			something: "world"
		});

		renderedTemplate.should.eql("Hello, world!");
	});

	it("should error when a tag is unused in the template", function () {
		var template = (0, _libAdmixJs2["default"])("Hello, <%= something %>!");

		(function () {
			template();
		}).should["throw"]();
	});
});