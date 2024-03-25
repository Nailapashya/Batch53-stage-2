"use strict";
function graduationStatus(student) {
    if (student.score === 100 && student.attendance >= 80) {
        return "SELAMAT, ANDA DINYATAKAN LULUS DENGAN PREDIKAT CUM LAUDE";
    }
    else if (student.score >= 70 && student.attendance >= 70) {
        return "SELAMAT, ANDA DINYATAKAN LULUS";
    }
    else {
        return "MAAF, ANDA DINYATAKAN TIDAK LULUS";
    }
}
const student1 = {
    name: "John",
    score: 80,
    attendance: 90
};
const student2 = {
    name: "John",
    score: 100,
    attendance: 95
};
const student3 = {
    name: "John",
    score: 65,
    attendance: 60
};
console.log(`${student1.name} MENDAPATKAN NILAI ${student1.score} DAN KEHADIRAN ${student1.attendance}%, STATUS: ${graduationStatus(student1)}`);
console.log(`${student2.name} MENDAPATKAN NILAI ${student2.score} DAN KEHADIRAN ${student2.attendance}%, STATUS: ${graduationStatus(student2)}`);
console.log(`${student3.name} MENDAPATKAN NILAI ${student3.score} DAN KEHADIRAN ${student3.attendance}%, STATUS: ${graduationStatus(student3)}`);
