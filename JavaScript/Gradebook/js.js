let scores = [];
function getAverage (scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

//  freeCodecamp solution;

function gradeAverage (scores) {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

// Below, convert the score to a letter grade.

function convertGrade (score) {
    if (score === 100) {
        return 'A++';
    } else if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Below, determine if the student has a passing grade.  Return true if the student has a passing grade and false if the student has a failing grade.

function passingGrade (score) {
    if (score >= 60) {
        return true;
    } else {
        return false;
    }
}

//  Below, create a function that will take in the class average grade from getAverage function and the student's grade as input.  If the student passed the class, return "Class average:  " and then the class average grade, then, "Your grade:  " and the student's grade, then, "You passed the class!"  If the student failed the class, return "Class average:  " and then the class average grade, then, "Your grade:  " and the student's grade, then, "You failed the class."

function passOrFail (classAverage, studentGrade) {
    if (studentGrade >= 60) {
        return `Class average:  ${classAverage} Your grade:  ${studentGrade} You passed the class!`;
    } else {
        return `Class average:  ${classAverage} Your grade:  ${studentGrade} You failed the class.`;
    }
}
