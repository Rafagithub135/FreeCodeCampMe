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
    let newStr = str.split(' ');
    let index = newStr.indexOf(before);
    if (before[0] === before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1);
    }
    newStr.splice(index, 1, after);
    return newStr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
