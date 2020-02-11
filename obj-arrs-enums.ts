// const Person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // <== tuple
// } = {
//   name: "Mohamed",
//   age: 22,
//   hobbies: ["Swimming", "Football"],
//   role: [2, "Engineer"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const Person = {
  name: "Mohamed",
  age: 22,
  hobbies: ["Swimming", "Football"],
  role: Role.ADMIN
};

console.log(Person.role);

for (let hobby of Person.hobbies) {
  console.log(hobby.toUpperCase());
  // Because it's an array of strings so i can implement all string mthods on it
}

Person.role === Role.ADMIN ? console.log("true") : console.log(false);
