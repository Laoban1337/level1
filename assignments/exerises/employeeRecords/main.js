var employees = [];

function Employee(name, salary, jobTitle = "Full-time", status) {
  this.name = name;
  this.salary = salary;
  this.jobTitle = jobTitle;
  this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
  console.log(
    "Name: " +
    this.name +
    " | Salary: " +
    this.salary +
    " | JobTitle: " +
    this.jobTitle +
    " | Status: " +
    this.status
  );
};

var tom = new Employee(
  " Tom Gilberts",
  " $250/hr",
  " Senior tech",
  " Part-time"
);

var alice = new Employee("Alice Barker ", " 250/hr", " Studio exec", "");

var mason = new Employee(
  "Mason Giles",
  " 450/hr ",
  "Marketing exec",
  "contract"
);

tom.printEmployeeForm();
alice.printEmployeeForm();
mason.printEmployeeForm();

employees.push(tom)
employees.push(alice)
employees.push(mason)
 console.log(employees)

