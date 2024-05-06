const person = {
    name: "Welton",
    age:  46,
    city: "Cuiabá",
};
 Object.seal(person);
 person.age = 34;
 person.gender = "masculino";
console.log(person);