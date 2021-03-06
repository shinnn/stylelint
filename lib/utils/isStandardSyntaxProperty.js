/* @flow */
'use strict';

const hasInterpolation = require('../utils/hasInterpolation');

/**
 * Check whether a property is standard
 */
module.exports = function(property /*: string*/) /*: boolean*/ {
	// SCSS var (e.g. $var: x), list (e.g. $list: (x)) or map (e.g. $map: (key:value))
	if (property.startsWith('$')) {
		return false;
	}

	// Less var (e.g. @var: x)
	if (property.startsWith('@')) {
		return false;
	}

	// Less append property value with space (e.g. transform+_: scale(2))
	if (property.endsWith('+') || property.endsWith('+_')) {
		return false;
	}

	// SCSS or Less interpolation
	if (hasInterpolation(property)) {
		return false;
	}

	return true;
};
