/*globals jasmine, describe, it, expect, beforeEach, beforeAll */
/*jslint node: true */
'use strict';

var Gun = require('../index.js');

describe('ValMapEnd', function () {
	console.log = function () {};
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 500;

	var gun;
	function setup(done) {
		gun = new Gun().get('test').set();
		gun.set({
			one: 1
		}).set({
			two: 2
		}, done);
	}
	beforeEach(setup);
	beforeAll(setup);

	it('should expose a method on the gun instance', function () {
		expect(gun.valMapEnd).toEqual(jasmine.any(Function));
	});

	it('should accept two parameters, cb & done', function () {
		expect(gun.valMapEnd.length).toBe(2);
	});

	it('should invoke the callback', function (done) {
		gun.valMapEnd(done);
	});

	it('should return a gun instance', function () {
		var isGun, val = gun.valMapEnd();
		isGun = Gun.is(val);
		expect(isGun).toBe(true);
	});

	it('should not die without input', function () {
		expect(gun.valMapEnd.bind(gun)).not.toThrow();
	});

	it('should pass the callback each object', function (done) {
		gun.valMapEnd(function (val) {
			expect(val).toEqual(jasmine.any(Object));
			done();
		});
	});

	it('should load each object', function (done) {
		gun.valMapEnd(function (val) {
			var length = Object.keys(val).length;
			expect(length).toBeGreaterThan(1);
			done();
		});
	});

	it('should invoke done once finished', function (done) {
		gun.valMapEnd(function () {}, done);
	});

	it('should guard against non-function input', function () {
		var valMapEnd = gun.valMapEnd.bind(gun, null, NaN);
		expect(valMapEnd).not.toThrow();
	});
});