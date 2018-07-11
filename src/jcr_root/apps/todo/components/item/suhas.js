"use strict";
// package/lib is a dependency we require
Object.defineProperty(exports, "__esModule", { value: true });
// behavior for our module
function foo() {
    console.log("hello world!");
}
// export (expose) foo to other modules as foobar
exports.default = foobar = foo;
// behavior for our module
function foo() {
    lib.log("hello world!");
}
