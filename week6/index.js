function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;   
}

function printEmployeeForm(Employee) {
    console.log (`name: ${Employee.name}, Job-Title: ${Employee.jobTitle}, Salary: ${Employee.salary}, Status: ${Employee.status}`);
}

var Employee1 = new Employee ("Thomas Bar", "Full-Stack Developer ", "$101,000", "Full-Time");
var Employee2 = new Employee ("Phylis Carter", "Front-End Developer", "$70,000", "Full-Time");
var Employee3 = new Employee ("Kevin Scott", "Back-End Developer I", "$80,500", "Full-Time");
var Employee4 = new Employee ("Phillip Bill", "Project Manager", "$152,000", "Full-Time");
var Employee5 = new Employee ("Calvin Tucker", "Back-End Developer", "$75/hour", "Part-Time");

printEmployeeForm(Employee1);
printEmployeeForm(Employee2);
printEmployeeForm(Employee3);
printEmployeeForm(Employee4);
printEmployeeForm(Employee5);