let id = 1000;
function Teacher(name, branch) {
	this.name = name;
	this.branch = branch;
	this.teacherId;
	this.baseSalary = 5000;
	this.salary = this.baseSalary;

	this.generateId = function () {
		this.teacherId = branch + "" + id;
	};

	this.generateId();

	this.setSalary = function (newSalary) {
		this.salary = newSalary;
	};

	this.getTeacherInfo = function () {
		return {
			teacherId: this.teacherId,
			name: this.name,
			branch: this.branch,
			salary: this.salary,
		};
	};
}

module.exports = Teacher;
