const save = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Object.freeze(save);
// Object.freeze() is used to freeze an object, preventing new properties from being added to it, existing properties from being removed or changed, and preventing the prototype from being changed.

const magic = () => new Date();
// Arrow functions are one of the new features in ES6. Arrow functions allow us to write shorter function syntax:  If there is no body to the function, you can use the shorter syntax.

const myConcat = (arr1, arr2) => arr1.concat(arr2);

var myConcats = function(arr1, arr2) {
    "use strict";
    return arr1.concat(arr2);
}

// The two functions above are equivalent.

const increment = (number, value = 1) => number + value;

// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter value will default to 1 if you don't pass in an argument. You can add default values for as many parameters as you want.

// TODO: Modify the following function (sum) using the rest parameter in such a way that the funciton (sum) is able to take any number of argumtnes and return their sum.

const sum = (x, y, z) => {
    const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// Solution:
const sum1 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

// TODO: Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

// Solution:
(function() {
    "use strict";
    arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }
})();

