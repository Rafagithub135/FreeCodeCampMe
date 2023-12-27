// Palindrome Checker

function palindrome(str) {
    let newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseStr = newStr.split('').reverse().join('');
    return newStr === reverseStr;
}

palindrome("eye");

// Roman Numeral Converter

function convertToRoman(num) {
    let romanNum = '';
    const roman = [
        { M: 1000 },
        { CM: 900 },
        { D: 500 },
        { CD: 400 },
        { C: 100 },
        { XC: 90 },
        { L: 50 },
        { XL: 40 },
        { X: 10 },
        { IX: 9 },
        { V: 5 },
        { IV: 4 },
        { I: 1 }
    ];

    for (let i = 0; i < roman.length; i++) {
        const key = Object.keys(roman[i])[0];
        const value = Object.values(roman[i])[0];

        while (num >= value) {
            romanNum += key;
            num -= value;
        }
    }
    return romanNum;
}

convertToRoman(36);

// Caesars Cipher

function rot13(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = charCode + 13 > 90 ? charCode - 13 : charCode + 13;
        }
        newStr += String.fromCharCode(charCode);
    }
    return newStr;
}

rot13("SERR PBQR PNZC");

// Telephone Number Validator

function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

telephoneCheck("555-555-5555");

// Cash Register

function checkCashRegister(price, cash, cid) {
    const currency = [
        { name: 'ONE HUNDRED', value: 100.00 },
        { name: 'TWENTY', value: 20.00 },
        { name: 'TEN', value: 10.00 },
        { name: 'FIVE', value: 5.00 },
        { name: 'ONE', value: 1.00 },
        { name: 'QUARTER', value: 0.25 },
        { name: 'DIME', value: 0.10 },
        { name: 'NICKEL', value: 0.05 },
        { name: 'PENNY', value: 0.01 }
    ];

    let change = cash - price;
    const register = cid.reduce((acc, curr) => {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    if (register.total === change) {
        return { status: 'CLOSED', change: cid };
    }

    if (register.total < change) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    const changeArr = currency.reduce((acc, curr) => {
        let value = 0;
        while (register[curr.name] > 0 && change >= curr.value) {
            change -= curr.value;
            register[curr.name] -= curr.value;
            value += curr.value;

            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);

    if (changeArr.length < 1 || change > 0) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    return { status: 'OPEN', change: changeArr };
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
