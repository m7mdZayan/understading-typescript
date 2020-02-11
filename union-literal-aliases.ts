// type aliases (custom type)
type combinable = number | string;

// i want to make a function that adds two numbers and concatinates two strings

function combine(input1: combinable, input2: combinable) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

console.log(combine(1, 2));
console.log(combine("bla", "bla"));
