const person = {
    name: "Gilsound",
    age:  35,
    city: "Cuiabá",
};
Object.freeze(person);
person.age = 35;
console.log(person);