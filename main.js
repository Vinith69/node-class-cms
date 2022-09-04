const Student = require("./Student");
const studentData = require("./json/studentData");

// let student1 = new Student("Vineeth", 1);
// let student2 = new Student("Vineeths", 1);
// student1.payFees(1000);
// // student2.generateId();
// console.log(student1.getStudentInfo());
// console.log(student2.getStudentInfo());

let students = [];

function CollegeManagementSystem() {
	studentData.map((e) => students.push(new Student(e.name, e.gradeYear)));
}

CollegeManagementSystem();

console.log(students);
