/*jslint node: true */
'use strict';


/*
	if you aren't using a build step
	and you want to use this in the
	browser, remove the "require"
	and load it in using:
	<script src="path/to/gun.js">
	<script src="index.js">
*/
var Gun;
module.exports = Gun = require('gun/gun');
// end remove


Gun.chain.valMapEnd = function (cb, end) {
	var n, gun = this;
	n = function () {};
	cb = cb || n;
	end = end || n;
	
	gun.val(function (list) {
		Gun.is.node(list, function (node, prop) {
			gun.path(prop).val(cb);
		});
		end();
	});
	return gun;
};
