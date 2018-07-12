"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var calculator_1 = __importDefault(require("../src/calculator"));
describe("Calculator", function () {
    describe("Add", function () {
        it("Should return 3 when a = 1 and b = 2", function () {
            var calc = new calculator_1.default();
            var result = calc.Add(1, 2);
            chai_1.expect(result).to.equal(3);
        });
    });
});
//# sourceMappingURL=calculator.spec.js.map