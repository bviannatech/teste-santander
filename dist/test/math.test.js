"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("../src/math");
describe("Math functions", function () {
    it("should add two numbers correctly", function () {
        expect((0, math_1.add)(1, 2)).toEqual(3);
    });
});
