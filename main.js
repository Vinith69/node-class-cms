const Student = require("./Student");
const Teacher = require("./Teacher");
const studentData = require("./json/studentData");
const teacherData = require("./json/teacherData");
const coursesData = require("./json/courses");

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

	this.studentPaymentCounter = function (usn, feesToPay) {
		let filteredIndex = students.findIndex((e) => e.usn == usn);
		students[filteredIndex].payFees(feesToPay);
	};

	this.studentPaymentCounter("11001", 100);

	this.filterCourse = function (gradeYear, branch) {
		let filteredCourse = coursesData.filter(
			(e) => e.branch == branch && e.gradeYear == gradeYear
		);
		return filteredCourse;
	};

	this.assignCourseToStudents = function (gradeYear, branch) {
		let filteredCourse = this.filterCourse(gradeYear, branch)[0].subjects;
		students.map((e) => {
			e.gradeYear == gradeYear &&
				e.branch == branch &&
				(e.course = filteredCourse);
		});
	};
	this.assignCourseToStudents(1, "CSE");
}

CollegeManagementSystem();
students[1].payFees(800);
teachers[0].setSalary(8000);
console.log(students[1].getStudentInfo());
console.log(teachers[0].getTeacherInfo());
