
//Refined. Now creates an object and inserts arrays into it. Also has a proper While loop. 
function collectEmployees() {
    let firstName;
    let lastName;
    let salary;
    let continuePrompt = true;
    let employeesArray = [];
    
    // The comparison must be explicit or this will not work correctly. Could probably just convert the input into lower case, but... that can happen during refactor. Right now, we want it working.
    
    while (continuePrompt === true) {
      firstName = prompt("Please enter employee's first name: ");
      lastName = prompt ("Please enter employee's last name: ");
      salary = prompt ("Please enter the employee's salary: ");
    
      //Check to see if the salary is not a number. If it's not a number, default to 0.
        if (isNaN(salary)) {
          salary = 0.00;
        }
        // Create employee object with the data from the user.
        let employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary
        }
        // push the array into the object.
        employeesArray.push(employee);
        console.log(employeesArray);
        // Cleanup (Is there a way to simply remove these from memory entirely? Is it worth the effort?)
        firstName = null;
        lastName = null;
        salary = null;
    
        //Feels like there should be different buttons here. Is there a way to change the buttons for the "real" version?
        continuePrompt = confirm("Do you wish to enter data for another employee? OK to Enter a new employee, Cancel to Stop Entering New employees.");
        console.log(`INFO: Continue Prompt is ${continuePrompt}`);
        console.log(employeesArray);
      }
      return employeesArray;
}
function displayAverageSalary() {
 // TODO: Calculate and display the average salary
let accumulator = 0;
let numberOfEmployees = employeesArray.length;
  // Pull the 2nd element from object 'employee array' and add to the accumulator
    for (i = 0; i < employeesArray.length; i++){
        console.log(accumulator);
        accumulator += Number(employeesArray[i].salary);
    };
console.log(`INFO: Accumulator is: ${accumulator}`);
console.log(`INFO: numberOfEmployees is ${numberOfEmployees}`);

    // Average calculator
 let salaryAverage = accumulator / numberOfEmployees;
 let averageSalaryWithTwoDecimals = salaryAverage.toFixed(2);
 console.log(`INFO: salaryAverage is ${salaryAverage}`)
 console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is \$${averageSalaryWithTwoDecimals}`)
 return salaryAverage;
}

function getRandomEmployee() {
 // TODO: Select and display a random employee

  // Generate a random number
// NOTE: Should probably look at the return value of length to verify if it's a string or a number. It may not be 100% necessary to cast this as a number.
const maxNumber = Number(employeesArray.length);
console.log(maxNumber);

// Idea from MDN. Feels like there should be a more "randomish" way to do this.
let randomNumber = Math.floor(Math.random() * maxNumber);
console.log(`Random Number = ${randomNumber}`);

// Use that Random number to pick the employee and log it.
employeeFirstName = employeesArray[randomNumber].firstName
console.log(`INFO: Lucky Employee First Name ${employeeFirstName}`)
employeeLastName = employeesArray[randomNumber].lastName
console.log (`INFO: Lucky Employee Last Name ${employeeLastName}`)

console.log(`Congratulations to ${employeeFirstName} ${employeeLastName}, our random drawing winner!`);
}

// displayEmployees() {
//     // take employees, sort by last name, place on table in page
// }

// trackEmployeeData() {

// }