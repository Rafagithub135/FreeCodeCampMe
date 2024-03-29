// Sum All Numbers in a Range

function sumAll(arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// Diff Two Arrays

function diffArray(arr1, arr2) {
  let newArr = [];
  let newArr1 = arr1.filter((item) => !arr2.includes(item));
  let newArr2 = arr2.filter((item) => !arr1.includes(item));
  newArr = newArr1.concat(newArr2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy

function destroyer(arr) {
    let args = Array.from(arguments);
    let newArr = args[0];
    let argsArr = args.slice(1);
    let result = newArr.filter((item) => !argsArr.includes(item));
    return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou

function whatIsInAName(collection, source) {
    let arr = [];
    let sourceKeys = Object.keys(source);
    arr = collection.filter((item) => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!item.hasOwnProperty(sourceKeys[i]) || item[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
    return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

// Spinal Tap Case

function spinalCase(str) {
    let newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    let result = newStr.replace(/\s|_/g, '-').toLowerCase();
    return result;
}

spinalCase('This Is Spinal Tap');

// Pig Latin

function translatePigLatin(str) {
    // Create variables to be used
    let pigLatin = "";
    let regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex)) {
        pigLatin = str + "way";
    } else if (str.match(regex) === null) {
        // Check if the string contains only consonants
        pigLatin = str + "ay";
    } else {
        // Find how many consonants before the first vowel.
        let vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
    return pigLatin;
}

translatePigLatin("consonant");

// Search and Replace

function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing

function pairElement(str) {
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    const result = [];
    for (let i = 0; i < str.length; i++) {
        result.push([str[i], pairs[str[i]]]);
    }
    return result;
}

pairElement("GCG");

// Missing letters

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let end = alphabet.indexOf(str[str.length - 1]);
    let compare = alphabet.slice(start, end + 1);
    let result = compare.split("").filter(item => !str.includes(item)).join("");
    return result ? result : undefined;
}

fearNotLetter("abce");

// Sorted Union

function uniteUnique(arr) {
    let args = Array.from(arguments);
    let newArr = args.reduce((acc, item) => acc.concat(item), []);
    let result = newArr.filter((item, index) => newArr.indexOf(item) === index);
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities

function convertHTML(str) {
    let result = str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    return result;
}

convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
    let fib = [1, 1];
    for (let i = 1; i < num; i++) {
        fib.push(fib[i] + fib[i - 1]);
    }
    let result = fib.filter(item => item <= num && item % 2 !== 0).reduce((acc, item) => acc + item, 0);
    return result;
}

sumFibs(4);

// Sum All Primes

function sumPrimes(num) {
    let arr = [];
    for (let i = 2; i <= num; i++) {
        arr.push(i);
    }
    let result = arr.filter(item => {
        for (let j = 2; j < item; j++) {
            if (item % j === 0) {
                return false;
            }
        }
        return true;
    }).reduce((acc, item) => acc + item, 0);
    return result;
}

sumPrimes(10);

// Smallest Common Multiple

function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

smallestCommons([1, 5]);

// Drop it

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
});

// Steamroller

function steamrollArray(arr) {
    let result = [];
    let flatten = function(arg) {
        if (!Array.isArray(arg)) {
            result.push(arg);
        } else {
            for (let i in arg) {
                flatten(arg[i]);
            }
        }
    };
    arr.forEach(flatten);
    return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Binary Agents

function binaryAgent(str) {
    let result = str.split(" ").map(item => String.fromCharCode(parseInt(item, 2))).join("");
    return result;
}

binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 " +
    "01110100 00100000 01100010 01101111 01101110 " +
    "01100110 01101001 01110010 01100101 01110011 " +
    "00100000 01100110 01110101 01101110 00100001 " +
    "00111111"
);

// Everything Be True

function truthCheck(collection, pre) {
    let result = collection.every(item => item[pre]);
    return result;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role:" ", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

// Arguments Optional

function addTogether() {
    const [first, second] = arguments;
    if (typeof first === "number") {
        if (typeof second === "number") return first + second;
        if (arguments.length === 1) return (second) => addTogether(first, second);
    }
}

addTogether(2, 3);

// Make a Person

const Person = function(first, last) {
    let firstName = first;
    let lastName  = last;

    this.getFirstName = function() {
        return firstName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getFullName = function() {
        return this.getFirstName() + " " + this.getLastName();
    };

    this.setFirstName = function(first) {
        return firstName = first;
    };

    this.setLastName = function(last) {
        return lastName = last;
    };

    this.setFullName = function(first, last) {
        this.setFirstName(first);
        this.setLastName(last);
        return this.getFullName();
    };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());

// Map the Debris

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const result = arr.map(item => {
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
        return {name: item.name, orbitalPeriod};
    });
    return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);