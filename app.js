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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Person = {
    name: "Mohamed",
    age: 22,
    hobbies: ["Swimming", "Football"],
    role: Role.ADMIN
};
console.log(Person.role);
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // Because it's an array of strings so i can implement all string mthods on it
}
Person.role === Role.ADMIN ? console.log("true") : console.log(false);
