const Student = require("./Student");
const Teacher = require("./Teacher");
const studentData = require("./json/studentData");
const teacherData = require("./json/teacherData");

// let student1 = new Student("Vineeth", 1);
// let student2 = new Student("Vineeths", 1);
// student1.payFees(1000);
// // student2.generateId();
// console.log(student1.getStudentInfo());
// console.log(student2.getStudentInfo());

let students = [],
	teachers = [];

function CollegeManagementSystem() {
	studentData.map((e) =>
		students.push(new Student(e.name, e.gradeYear, e.branch))
	);

	teacherData.map((e) => teachers.push(new Teacher(e.name, e.branch)));
	// let student1 = new Student("Vineeth", 1, "EC");
	// student1.payFees(1600);
	// console.log(student1.getStudentInfo());
}

CollegeManagementSystem();
students[1].payFees(800);
teachers[0].setSalary(8000);
console.log(students[1].getStudentInfo());
console.log(teachers[0].getTeacherInfo());
