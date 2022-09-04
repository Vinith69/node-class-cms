let id = 1000;
function Student(name, gradeYear) {
	let fees = 2000;

	this.name = name;
	this.gradeYear = gradeYear;
	this.usn = 0;
	this.remainingFees = parseInt(fees);

	this.generateId = function () {
		this.usn = this.gradeYear + "" + id;
		id++;
	};

	this.generateId();

	this.payFees = function (money) {
		// this.feesPaid += money;
		this.remainingFees -= parseInt(money);
	};

	this.viewBalance = function () {
		return remainingFees;
	};

	this.getStudentInfo = function () {
		return {
			usn: this.usn,
			name: this.name,
			gradeYear: this.gradeYear,
			collegeFee: fees,
			feeToBePaid: this.remainingFees,
		};
	};
}

module.exports = Student;