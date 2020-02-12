// the type of the returned value is number
const add = (num1: number, num2: number) => {
  return num1 + num2;
};

// the type of the returned value is void
const showResult = (num: number) => {
  console.log("Result is " + num);
};

showResult(add(5, 6));

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  let result = a + b;
  cb(result);
}

addAndHandle(8, 7, res => {
  console.log(res);
});
