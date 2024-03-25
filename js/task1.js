"use strict";
function evaluateGraduation(student) {
    if (student.present >= 80 && student.score >= 100) {
        return "Congratulations on graduating with cum laude honors";
    }
    else if (student.present >= 70 && student.score >= 70) {
        return "You will graduate";
    }
    else {
        return "You didn't pass";
    }
}
const gradueteJohn = {
    name: "John",
    score: 80,
    present: 90
};
const gradueteJane = {
    name: "Jane",
    score: 60,
    present: 65
};
const gradueteAlice = {
    name: "Alice",
    score: 100,
    present: 85
};
console.log(`Congratulations ${gradueteJohn.name}, you got ${gradueteJohn.score} score and ${gradueteJohn.present} attendance. Status ${evaluateGraduation(gradueteJohn)}`);
console.log(`Congratulations ${gradueteJane.name}, you got ${gradueteJane.score} score and ${gradueteJane.present} attendance.${evaluateGraduation(gradueteJane)}`);
console.log(`Congratulations ${gradueteAlice.name}, you got ${gradueteAlice.score} score and ${gradueteAlice.present} attendance.${evaluateGraduation(gradueteAlice)}`);
