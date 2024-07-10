let num1 = '150';
let flot = '1.50';

console.log("********Converting strings to intergers********");

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt(`0xF`));

console.log("*********Converting strings to float********");

console.log(parseInt('1.25abc'));
console.log(parseInt(flot));
console.log(parseInt('ABC'));

console.log("********More Conversation Examples********")
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));
console.log(parseInt(`${1 + 1}`));

console.log("********Convering numbers to strings********");
console.log(num1.toString());
console.log(flot.toString());
console.log((100).toString());