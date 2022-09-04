const Student = require("./Student");

// let student1 = new Student("Vineeth", 1);
// let student2 = new Student("Vineeths", 1);
// student1.payFees(1000);
// // student2.generateId();
// console.log(student1.getStudentInfo());
// console.log(student2.getStudentInfo());

let students = [];

function CollegeManagementSystem() {
	noOfStudentsToBeEntered = 5;
	while (noOfStudentsToBeEntered != 0) {
		students.push(new Student("zayn", 2));

		--noOfStudentsToBeEntered;
	}
}

CollegeManagementSystem();
// console.log(students[0].name);
console.log(students);
