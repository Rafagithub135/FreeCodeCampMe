function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

function switchOfStuff(val) {
    let answer2;
    switch (val) {
        case "a":
            answer2 = "apple";
            break;
        case "b":
            answer2 = "bird";
            break;
        case "c":
            answer2 = "cat";
            break;
        default:
            answer2 = "stuff";
            break;
    }
    return answer2;
}

function sequentialSizes(val) {
    let answer3;
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer3 = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer3 = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer3 = "High";
            break;
    }
    return answer3;
}

function ifToSwitch(val) {
    let answer4;
    switch (val) {
        case "bob":
            answer4 = "Marley";
            break;
        case 42:
            answer4 = "The Answer";
            break;
    }
}

function cc(card) {
    let count = 0;
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

const myDog = {
    "name": "Pup",
    "legs": 4,
    "tails": 1,
    "friends": ["Beasley", "Charlie"]
}

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

testObj2["an entree"];
testObj2["the drink"];
testObj2["my side"];

const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}

const playerNumber = 42;
const player = testObj3[playerNumber];

const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog2.name = "Happy Coder";
myDog.bark = "hubba hubba";
delete myDog.tails;

function phoneticLookup(val) {
    let result = "";
    switch (val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
    }
    return result;
}

phoneticLookup("charlie");


var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
};
result = lookup[val];

function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
}

checkForProperty({top: "hat", bottom: "pants"}, 'top');
checkForProperty({top: "hat", bottom: 'pants'}, 'middle');

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Led Zeppelin",
        "title": "Presence",
        "release_year": 1976,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }];

const myMusicList = myMusic["Led Zeppelin"];

const recordCollection = {
    "2548": {
        "albumTitle": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "albumTitle": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "albumTitle": "ABBA Gold"
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

const myArray = [];
let i = 10;
do {
    myArray.push(i);
    i++;
}
while (i < 5)
{
    myArray.push(i);
}

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

function randomFraction() {
    return Math.random();
}

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

caseInSwitch(1);

switchOfStuff("a");

sequentialSizes(1);

ifToSwitch(42);

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');