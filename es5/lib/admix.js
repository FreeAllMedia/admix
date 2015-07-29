"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = admix;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodashTemplate = require("lodash.template");

var _lodashTemplate2 = _interopRequireDefault(_lodashTemplate);

function admix(rawTemplate) {
	var template = (0, _lodashTemplate2["default"])(rawTemplate);
	return function templateRenderer(data) {
		return template(data);
	};
}

module.exports = exports["default"];