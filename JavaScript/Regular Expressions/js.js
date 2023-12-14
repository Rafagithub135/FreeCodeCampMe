// Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

// Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result1 = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);

// Ignore Case While Matching

let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result3 = fccRegex.test(myString1);

// Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line

// Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line

// Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/gi; // Change this line
let result6 = unRegex.test(exampleStr);

// Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result7 = quoteSample.match(vowelRegex); // Change this line

// Match Single Character with Multiple Possibilities

let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex1 = /[aeiou]/gi; // Change this line
let result8 = quoteSample1.match(vowelRegex1); // Change this line

// Match Letters of the Alphabet

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample2.match(alphabetRegex); // Change this line

// Match Numbers and Letters of the Alphabet

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; // Change this line
let result10 = quoteSample3.match(myRegex1); // Change this line

// Match Single Characters Not Specified

let quoteSample4 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; // Change this line
let result11 = quoteSample4.match(myRegex2); // Change this line

// Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex3 = /s+/gi; // Change this line
let result12 = difficultSpelling.match(myRegex3);

// Match Characters that Occur Zero or More Times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/gi; // Change this line
let result13 = chewieQuote.match(chewieRegex);

// Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let result14 = text.match(myRegex4);

// Find One or More Criminals in a Hunt

let reCriminals = /C+/; // Change this line

// Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result15 = calRegex.test(rickyAndCal);

// Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result16 = lastRegex.test(caboose);

// Match All Letters and Numbers

let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result17 = quoteSample5.match(alphabetRegexV2).length;

// Match Everything But Letters and Numbers

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result18 = quoteSample6.match(nonAlphabetRegex).length;

// Match All Numbers

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result19 = numString.match(numRegex).length;

// Match All Non-Numbers

let numString1 = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result20 = numString1.match(noNumRegex).length;

// Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let result21 = userCheck.test(username);

// Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result22 = sample.match(countWhiteSpace);

// Match Non-Whitespace Characters

let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result23 = sample1.match(countNonWhiteSpace);

// Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result24 = ohRegex.test(ohStr);

// Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result25 = haRegex.test(haStr);

// Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result26 = timRegex.test(timStr);

// Check for All or None

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result27 = favRegex.test(favWord);

// Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result28 = pwRegex.test(sampleWord);

// Check For Mixed Grouping of Characters

let myString2 = "Eleanor Roosevelt";
let myRegex5 = /(Franklin|Eleanor)\s.*Roosevelt/; // Change this line
let result29 = myRegex5.test(myString2);

// Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result30 = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result31 = str.replace(fixRegex, replaceText);

// Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result32 = hello.replace(wsRegex, ""); // Change this line