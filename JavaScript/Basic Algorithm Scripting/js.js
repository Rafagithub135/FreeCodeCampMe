// Convert Celcius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// Factorialize a Number

function factorialize(num) {
    if (num === 0) return 1;
    return num * factorialize(num - 1);
}

factorialize(5);

// Find the Longest Word in a String

function findLongestWordLength(str) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let largest = [];
    for (let subArr of arr) {
        largest.push(Math.max(...subArr));
    }
    return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [-9, -2, -3, -4]]);

// Confirm the Ending

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// Repeat a String Repeat a String

// TODO: Repeat a string num times without using the built-in repeat() method

function repeatStringNumTimesWO(str, num) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
        repeated += str;
    }
    return repeated;
}

function repeatStringNumTimes(str, num) {
    if (num < 0) return "";
    return str.repeat(num);
}

repeatStringNumTimes("abc", 3);

// Truncate a String

function truncateString(str, num) {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers

function findElement(arr, func) {
    for (let num of arr) {
        if (func(num)) return num;
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Boo who

function booWho(bool) {
    return typeof bool === "boolean";
}

booWho(null);

// Title Case a Sentence

function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    let title = [];
    for (let word of words) {
        title.push(word[0].toUpperCase() + word.slice(1));
    }
    return title.join(" ");
}

titleCase("I'm a little tea pot");

// Slice and Splice

function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer

function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// Where do I Belong

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

// Mutations

function mutation(arr) {
    let [str1, str2] = arr.map(str => str.toLowerCase());
    for (let char of str2) {
        if (!str1.includes(char)) return false;
    }
    return true;
}

mutation(["hello", "hey"]);

// Chunky Monkey

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);