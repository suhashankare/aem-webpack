// package/lib is a dependency we require
// behavior for our module
function foo() {
    console.log("hello world!");
}
// export (expose) foo to other modules as foobar
export default foobar = foo;
// behavior for our module
function foo() {
    lib.log("hello world!");
}
