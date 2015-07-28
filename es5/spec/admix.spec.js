"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libAdmixJs = require("../lib/admix.js");

var _libAdmixJs2 = _interopRequireDefault(_libAdmixJs);

describe("Admix", function () {
	var component = undefined;

	before(function () {
		component = new _libAdmixJs2["default"]();
	});

	it("should say something", function () {
		component.saySomething().should.equal("Something");
	});
});