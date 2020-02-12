"use strict";
// the type of the returned value is number
var add = function (num1, num2) {
    return num1 + num2;
};
// the type of the returned value is void
var showResult = function (num) {
    console.log("Result is " + num);
};
showResult(add(5, 6));
function addAndHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
addAndHandle(8, 7, function (res) {
    console.log(res);
});
