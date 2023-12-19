// Learn About Functional Programming

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/* Given a function (representing the tea type) and number of cups needed, the following function returns an array of strings (each representing a cup of a specific type of tea). */

const getTea = (numOfCups) => {
    const teaCups = [];
    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line

// Understand Functional Programming Terminology

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/* Given a function (representing the tea type) and number of cups needed, the following function returns an array of strings (each representing a cup of a specific type of tea). */

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

// Understand the Hazards of Using Imperative Code

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

    // Only change code below this line

    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// Avoid Mutations and Side Effects Using Functional Programming

// The global variable
let fixedValue = 4;

function incrementer () {
    // Only change code below this line
    return fixedValue + 1;
    // Only change code above this line
}

// Pass Arguments to Avoid External Dependence in a Function

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer (value) {
    return value + 1;
    // Only change code above this line
}

// Refactor Global Variables Out of Functions

// The global variable
let bookList = [
    'The Hound of the Baskervilles',
    'On The Electrodynamics of Moving Bodies',
    'Philosophiæ Naturalis Principia Mathematica',
    'Disquisitiones Arithmeticae'
];

// Change code below this line
function add (bookList, bookName) {
    return [...bookList, bookName];
    // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
    return bookList.filter((book) => book !== bookName);
    // Change code above this line
}

// Use the map Method to Extract Data from an Array

// The global variable
const watchList = [
    {
        'Title': 'Inception',
        'Year': '2010',
        'Rated': 'PG-13',
        'Released': '16 Jul 2010',
        'Runtime': '148 min',
        'Genre': 'Action, Adventure, Crime',
        'Director': 'Christopher Nolan',
        'Writer': 'Christopher Nolan',
        'Actors': 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
        'Plot': 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
        'Language': 'English, Japanese, French',
        'Country': 'USA, UK',
        'Awards': 'Won 4 Oscars. Another 143 wins & 198 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMjAxMzYwNjcxNF5BMl5BanBnXkFtZTYwMDU5NzY3._V1_SX300.jpg',
        'Ratings': [
            {
                'Source': 'Internet Movie Database',
                'Value': '8.8/10'
            },
            {
                'Source': 'Rotten Tomatoes',
                'Value': '87%'
            },
            {
                'Source': 'Metacritic',
                'Value': '74/100'
            }
        ],
        'Metascore': '74',
        'imdbRating': '8.8',
        'imdbVotes': '1,446,708',
        'imdbID': 'tt1375666',
        'Type': 'movie',
        'DVD': '07 Dec 2010',
        'BoxOffice': '$292,568,851',
        'Production': 'Warner Bros. Pictures',
        'Website': 'http://inceptionmovie.warnerbros.com/',
        'Response': 'True'
    },
    {
        'Title': 'Interstellar',
        'Year': '2014',
        'Rated': 'PG-13',
        'Released': '07 Nov 2014',
        'Runtime': '169 min',
        'Genre': 'Adventure, Drama, Sci-Fi',
        'Director': 'Christopher Nolan',
        'Writer': 'Jonathan Nolan, Christopher Nolan',
        'Actors': 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
        'Plot': 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        'Language': 'English',
        'Country': 'USA, UK',
        'Awards': 'Won 1 Oscar. Another 39 wins & 132 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMjAxODAwMjQ1MzleQTJeQWpwZ15BbWU4MDgyNjE3MDIx._V1_SX300.jpg',
        'Metascore': '74',
        'imdbRating': '8.6',
        'imdbVotes': '910,366',
        'imdbID': 'tt0816692',
        'Type': 'movie',
        'Response': 'True'
    },
    {
        'Title': 'The Dark Knight',
        'Year': '2008',
        'Rated': 'PG-13',
        'Released': '18 Jul 2008',
        'Runtime': '152 min',
        'Genre': 'Action, Adventure, Crime',
        'Director': 'Christopher Nolan',
        'Writer': 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
        'Actors': 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
        'Plot': 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        'Language': 'English, Mandarin',
        'Country': 'USA, UK',
        'Awards': 'Won 2 Oscars. Another 153 wins & 159 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwNzM4NV5BMl5BanBnXkFtZTYwMTk4Njg2._V1_SX300.jpg',
        'Metascore': '82',
        'imdbRating': '9.0',
        'imdbVotes': '2,122,415',
        'imdbID': 'tt0468569',
        'Type': 'movie',
        'Response': 'True'
    },
    {
        'Title': 'Batman Begins',
        'Year': '2005',
        'Rated': 'PG-13',
        'Released': '15 Jun 2005',
        'Runtime': '140 min',
        'Genre': 'Action, Adventure',
        'Director': 'Christopher Nolan',
        'Writer': 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
        'Actors': 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
        'Plot': 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
        'Language': 'English, Urdu, Mandarin',
        'Country': 'USA, UK',
        'Awards': 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTYwOTQzNzg4NV5BMl5BanBnXkFtZTYwMjMxMzc2._V1_SX300.jpg',
        'Metascore': '70',
        'imdbRating': '8.3',
        'imdbVotes': '1,183,564',
        'imdbID': 'tt0372784',
        'Type': 'movie',
        'Response': 'True'
    },
{
        'Title': 'Avatar',
        'Year': '2009',
        'Rated': 'PG-13',
        'Released': '18 Dec 2009',
        'Runtime': '162 min',
        'Genre': 'Action, Adventure, Fantasy',
        'Director': 'James Cameron',
        'Writer': 'James Cameron',
        'Actors': 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
        'Plot': 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        'Language': 'English, Spanish',
        'Country': 'USA, UK',
        'Awards': 'Won 3 Oscars. Another 80 wins & 121 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTYwOTQzNzg4NV5BMl5BanBnXkFtZTYwMjMxMzc2._V1_SX300.jpg',
        'Metascore': '83',
        'imdbRating': '7.9',
        'imdbVotes': '876,575',
        'imdbID': 'tt0499549',
        'Type': 'movie',
        'Response': 'True'
    }
];

// Only change code below this line

const ratings = watchList.map((movie) => ({
    title: movie.Title,
    rating: movie.imdbRating
}));

// Only change code above this line

console.log(JSON.stringify(ratings));

// Implement map on a Prototype

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element, index, originalArr) => newArray.push(callback(element, index, originalArr)));
    // Only change code above this line
    return newArray;
};

// Use the filter Method to Extract Data from an Array

// The global variable
const watchList = [
    {
        'Title': 'Inception',
        'Year': '2010',
        'Rated': 'PG-13',
        'Released': '16 Jul 2010',
        'Runtime': '148 min',
        'Genre': 'Action, Adventure, Crime',
        'Director': 'Christopher Nolan',
        'Writer': 'Christopher Nolan',
        'Actors': 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
        'Plot': 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
        'Language': 'English, Japanese, French',
        'Country': 'USA, UK',
        'Awards': 'Won 4 Oscars. Another 143 wins & 198 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMjAxMzYwNjcxNF5BMl5BanBnXkFtZTYwMDU5NzY3._V1_SX300.jpg',
        'Ratings': [
            {
                'Source': 'Internet Movie Database',
                'Value': '8.8/10'
            },
            {
                'Source': 'Rotten Tomatoes',
                'Value': '87%'
            },
            {
                'Source': 'Metacritic',
                'Value': '74/100'
            }
        ],
        'Metascore': '74',
        'imdbRating': '8.8',
        'imdbVotes': '1,446,708',
        'imdbID': 'tt1375666',
        'Type': 'movie',
        'DVD': '07 Dec 2010',
        'BoxOffice': '$292,568,851',
        'Production': 'Warner Bros. Pictures',
        'Website': 'http://inceptionmovie.warnerbros.com/',
        'Response': 'True'
    },
    {
        'Title': 'Interstellar',
        'Year': '2014',
        'Rated': 'PG-13',
        'Released': '07 Nov 2014',
        'Runtime': '169 min',
        'Genre': 'Adventure, Drama, Sci-Fi',
        'Director': 'Christopher Nolan',
        'Writer': 'Jonathan Nolan, Christopher Nolan',
        'Actors': 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
        'Plot': 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        'Language': 'English',
        'Country': 'USA, UK',
        'Awards': 'Won 1 Oscar. Another 39 wins & 132 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMjAxODAwMjQ1MzleQTJeQWpwZ15BbWU4MDgyNjE3MDIx._V1_SX300.jpg',
        'Metascore': '74',
        'imdbRating': '8.6',
        'imdbVotes': '910,366',
        'imdbID': 'tt0816692',
        'Type': 'movie',
        'Response': 'True'
    },
    {
        'Title': 'The Dark Knight',
        'Year': '2008',
        'Rated': 'PG-13',
        'Released': '18 Jul 2008',
        'Runtime': '152 min',
        'Genre': 'Action, Adventure, Crime',
        'Director': 'Christopher Nolan',
        'Writer': 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
        'Actors': 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
        'Plot': 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        'Language': 'English, Mandarin',
        'Country': 'USA, UK',
        'Awards': 'Won 2 Oscars. Another 153 wins & 159 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwNzM4NV5BMl5BanBnXkFtZTYwMTk4Njg2._V1_SX300.jpg',
        'Metascore': '82',
        'imdbRating': '9.0',
        'imdbVotes': '2,122,415',
        'imdbID': 'tt0468569',
        'Type': 'movie',
        'Response': 'True'
    },
    {
        'Title': 'Batman Begins',
        'Year': '2005',
        'Rated': 'PG-13',
        'Released': '15 Jun 2005',
        'Runtime': '140 min',
        'Genre': 'Action, Adventure',
        'Director': 'Christopher Nolan',
        'Writer': 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
        'Actors': 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
        'Plot': 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
        'Language': 'English, Urdu, Mandarin',
        'Country': 'USA, UK',
        'Awards': 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTYwOTQzNzg4NV5BMl5BanBnXkFtZTYwMjMxMzc2._V1_SX300.jpg',
        'Metascore': '70',
        'imdbRating': '8.3',
        'imdbVotes': '972.584',
        'imdbID': 'tt0372784',
        'Type': 'movie',
        'Response': 'True'
    },
    {
        'Title': 'Avatar',
        'Year': '2009',
        'Rated': 'PG-13',
        'Released': '18 Dec 2009',
        'Runtime': '162 min',
        'Genre': 'Action, Adventure, Fantasy',
        'Director': 'James Cameron',
        'Writer': 'James Cameron',
        'Actors': 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
        'Plot': 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        'Language': 'English, Spanish',
        'Country': 'USA, UK',
        'Awards': 'Won 3 Oscars. Another 80 wins & 121 nominations.',
        'Poster': 'https://m.media-amazon.com/images/M/MV5BMTYwOTQzNzg4NV5BMl5BanBnXkFtZTYwMjMxMzc2._V1_SX300.jpg',
        'Metascore': '83',
        'imdbRating': '7.9',
        'imdbVotes': '876,575',
        'imdbID': 'tt0499549',
        'Type': 'movie',
        'Response': 'True'
    }
];

// Only change code below this line

const filteredList = watchList
    .filter(movie => movie.imdbRating >= 8)
    .map(movie => ({
        title: movie['Title'], rating: movie['imdbRating'] }));
// Only change code above this line

console.log(filteredList);
