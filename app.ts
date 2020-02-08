function add(a: number, b: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(`${phrase} ${a + b}`);
  } else {
    return a + b;
  }
}

const num1 = 5;
const num2 = 10;
let printResult = true;
const resultPhrase = "Result is";

add(num1, num2, printResult, resultPhrase);
