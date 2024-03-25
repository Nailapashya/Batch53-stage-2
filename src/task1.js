function evaluateGraduation(student) {
    if (student.present >= 80) {
        console.log("Congratulations on graduating with cumlaude honors");
    }
    else if (student.present >= 70) {
        console.log("You will graduete");
    }
    else {
        console.log("you didn't pass");
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
console.log(evaluateGraduation(gradueteJohn));
console.log(evaluateGraduation(gradueteJane));
console.log(evaluateGraduation(gradueteAlice));
