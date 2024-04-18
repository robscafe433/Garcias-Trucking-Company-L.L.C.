const employees = [];

//had initially declared totalSalaries as a const, but browser console gave  me error message as I was trying to change it with the line code ( totalSalaries += employeesArray[i].salary; *so changed it to let.)

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function () {
    let keepEnteringData = true;

    while (keepEnteringData) {
        const employee = { firstName: ' ', lastName: ' ', salary: 0 };
        // TODO: Get user input to create and return an array of employee objects
        employee.firstName = prompt('Enter  employee first name: ');
        // console.log(employee.firstName);
        employee.lastName = prompt('Enter employee last name: ');
        // console.log(employee.lastName);
        employee.salary = prompt('Enter  employee salary: ');
        // console.log(employee.salary);
        employees.push(employee);
        // console.log(employees);
        keepEnteringData = confirm('Enter another employee?');
    }
    return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    let totalSalaries = 0;
    let averageSalary = 0;
    // TODO: Calculate and display the average salary

    for (let i = 0; i < employeesArray.length; i++) {
        totalSalaries += parseInt(employeesArray[i].salary);
    }

    // console.log('num in employeesArray: ', employeesArray.length);
    // console.log('total  salaries:', totalSalaries);
    // console.log('TypeOf is: ', typeof totalSalaries);

    averageSalary = (totalSalaries / employeesArray.length).toFixed(2);
    console.log('Average salary is: let averageSalary = ;', averageSalary);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
    let randomNum = Math.floor(Math.random() * employeesArray.length);
    // console.log('Random Num : ', randomNum);
    console.log(
        'Displaying an employee at random: ',
        employeesArray[randomNum].firstName +
            ' ' +
            employeesArray[randomNum].lastName +
            ' ' +
            employeesArray[randomNum].salary
    );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement('td');
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            }
        );

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
};

const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
