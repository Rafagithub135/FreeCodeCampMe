let character = 'Hello';
console.log(character);
character = 'World';
console.log(character);
let secondCharacter;
secondCharacter = "character";
console.log(secondCharacter);
let count = 8;
console.log(count + 1);
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows);
rows[rows.length - 1] = 10;
// Use .push() to add an element to the end of an array
rows.push("freeCodeCamp");
// Use .pop() to remove the last element of an array
let popped = rows.pop();
console.log(popped);
// When you log a pushed element, it will log the length of the array
let pushed = rows.push();
console.log(pushed);
const characters = "#";
const counts = 8;
rows = [];
for (let i = 0; i < count; i++) {
    rows.push(characters.repeat(i + 1));
}
let result = "";
console.log(result);
// A for...of loop is used to iterate over each item in an iterable object and temporarily assign it to a variable.  The syntax is: for (const value of iterable) { ... }
for (const row of rows) {
    result = row + "\n" + result;
}
console.log(result);