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
for (let i = 0; i < counts; i++) {
    rows.push(characters.repeat(i + 1));
}
let result = "";
console.log(result);
// A for...of loop is used to iterate over each item in an iterable object and temporarily assign it to a variable.  The syntax is: for (const value of iterable) { ... }
for (const row of rows) {
    result = row + "\n" + result;
}
console.log(result);
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
padRow();
const call = padRow();
console.log(call);
while (rows.length < counts) {
    rows.push(padRow(rows.length + 1, counts));
}
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// the .push method adds an element to the end of an array while .unshift adds an element to the beginning of an array. The .pop method removes the last element of an array while .shift removes the first element of an array.
// FINISHED PRODUCT
const character2 = "!";
const counts3 = 10;
const rows2 = [];
let inverted = false;
function flipPyramid(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character2.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= counts3; i++) {
    if (inverted) {
        rows2.unshift(flipPyramid(i, counts3));
    }
    else {
        rows2.push(flipPyramid(i, counts3));
    }
}
let result2 = "";
for (const row of rows2) {
    result2 = row + "\n" + result2;
}
console.log(result2);