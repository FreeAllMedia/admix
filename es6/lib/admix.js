import _template from "lodash.template";

export default function admix(rawTemplate) {
	const template = _template(rawTemplate);
	return function templateRenderer(data) {
		return template(data);
	};
}
