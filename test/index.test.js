"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var SpaceConverter_1 = __importDefault(require("../src/SpaceConverter"));
var Rect_1 = __importDefault(require("../src/Rect"));
describe("SpaceConverter", function () {
    describe("constructor", function () {
        it("should initialize domain and range", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 20, 20);
            var converter = new SpaceConverter_1.default(domain, range);
            (0, chai_1.expect)(converter.domain).to.deep.equal(domain);
            (0, chai_1.expect)(converter.range).to.deep.equal(range);
        });
    });
    describe("point", function () {
        it("should convert point from domain to range", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 100, 100);
            var converter = new SpaceConverter_1.default(domain, range);
            var point = { x: 5, y: 5 };
            var result = converter.point(point);
            (0, chai_1.expect)(result).to.deep.equal({ x: 50, y: 50 });
        });
    });
    describe("x", function () {
        it("should convert x value from domain to range", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 100, 100);
            var converter = new SpaceConverter_1.default(domain, range);
            var result = converter.x(5);
            (0, chai_1.expect)(result).to.equal(50);
        });
    });
    describe("y", function () {
        it("should convert y value from domain to range", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 100, 100);
            var converter = new SpaceConverter_1.default(domain, range);
            var result = converter.y(5);
            (0, chai_1.expect)(result).to.equal(50);
        });
    });
    describe("delta", function () {
        it("should return delta of the point", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 20, 20);
            var converter = new SpaceConverter_1.default(domain, range);
            var pointDelta = { x: 5, y: 5 };
            var result = converter.delta(pointDelta);
            (0, chai_1.expect)(result).to.deep.equal({ x: 10, y: 10 });
        });
    });
    describe("dx", function () {
        it("should return delta of x", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 20, 20);
            var converter = new SpaceConverter_1.default(domain, range);
            var result = converter.dx(5);
            (0, chai_1.expect)(result).to.equal(10);
        });
    });
    describe("dy", function () {
        it("should return delta of y", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 20, 20);
            var converter = new SpaceConverter_1.default(domain, range);
            var result = converter.dy(5);
            (0, chai_1.expect)(result).to.equal(10);
        });
    });
    describe("invert", function () {
        it("should return a new SpaceConverter with inverted domain and range", function () {
            var domain = new Rect_1.default(0, 0, 10, 10);
            var range = new Rect_1.default(0, 0, 20, 20);
            var converter = new SpaceConverter_1.default(domain, range);
            var inverted = converter.invert();
            (0, chai_1.expect)(inverted.domain).to.deep.equal(range);
            (0, chai_1.expect)(inverted.range).to.deep.equal(domain);
        });
    });
});
