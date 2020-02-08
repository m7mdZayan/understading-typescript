function add(a, b, showResult, phrase) {
    if (showResult) {
        console.log(phrase + " " + (a + b));
    }
    else {
        return a + b;
    }
}
var num1 = 5;
var num2 = 10;
var printResult = true;
var resultPhrase = "Result is";
add(num1, num2, printResult, resultPhrase);
