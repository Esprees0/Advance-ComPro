const people = ["Aaron","Mell","John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstName: "Anirach",
    lastName: "Mingkhawn",
};

function sayHello(person) {
    console.log("Hello "+ person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);