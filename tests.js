let { arrayToString, intToBin } = require("./index");

(function testArrayToString() {
    let a = [1, 2, 3, 4, 5];

    let actualString = arrayToString(a);
    let expectedString = "1 2 3 4 5";
    if (actualString == expectedString) {
        console.log("OK", "arrayToString");
    }
    else {
        console.error("arrayToString", {expectedString, actualString});
    }
})();

(function testIntToBin() {
    (function positiveNumber() {
        let n = 12;
        let actualString = intToBin(n);
        let expectedString = "00001100";
        if (actualString == expectedString) {
            console.log("OK", "testIntToBin", "positiveNumber");
        }
        else {
            console.error("intToBin", {expectedString, actualString});
        }
    })();

    (function negativeNumber() {
        let n = -5;
        let actualString = intToBin(n);
        let expectedString = "11111011";
        if (actualString == expectedString) {
            console.log("OK", "testIntToBin", "negativeNumber");
        }
        else {
            console.error("intToBin", {expectedString, actualString});
        }
    })();
})();
