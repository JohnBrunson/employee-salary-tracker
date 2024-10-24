
//Global Variables TODO: Can we make these local?
let firstName;
let lastName;
let salary;
//function is working. May need to log it somewhere...
function collectEmployees() {
// retrieve user input and generates an object with First name, last name and salary. Once entered, the function should return input as an array.


firstName = prompt("What is the employee's first Name?");
lastName = prompt("What is the employee's last name?");
salary = prompt("What is the employee's salary?");

console.log (`INFO: Input is ${firstName} ${lastName} ${salary}`);
};

//Sanitization of input
//TODO: Convert to loop? This is kind of ugly.
function sanitization() {
    if (isNaN(salary)){
        // TODO: Refactor this. It works, but it's not pretty. I can probably compact this down a bit.
        let continuePrompt = prompt('The Salary you have entered is not a number. Do you want to continue? Press "Y" to continue and the salary will be entered as $0.00. Press "N" to re-enter.');
        continuePrompt.toLowerCase(); 
        if (continuePrompt === "y"){
            salary = 0.00
            console.log(`INFO: Salary is ${salary}`)
            continuePrompt = 'n';
        }
        else {
            continuePrompt = null;
            salary = prompt("What is the employee's salary?");
            console.log(`INFO: Salary is ${salary}`)
            sanitization();
        }
    };
}


// function confirm() {
//     let anotherEmployee = false
//     prompt('Do you wish to enter another employee?')
//      while (anotherEmployee === true){
//          collectEmployees();
//          sanitization();

//      }
// }


    


// displayAverageSalary() {
//     // takes salary and averages it.
// }

// getRandomEmployee() {
//     // Responsible for lottery drawing.
// }

// displayEmployees() {
//     // take employees, sort by last name, place on table in page
// }

// trackEmployeeData() {

// }