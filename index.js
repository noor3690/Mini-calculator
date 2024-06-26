#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number:", type: "number", name: "firstnumber" },
    { message: "Enter second NUmber:", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operator to perform operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Square", "Reminder", "Percentage"],
    },
]);
if (answer.operator === "Addition") {
    console.log("The answer is : ", answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log("The answer is : ", answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log("The answer is : ", answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log("The answer is : ", answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "Square") {
    console.log("The answer is : ", answer.firstnumber * answer.firstnumber);
    console.log("The answer is : ", answer.secondnumber * answer.secondnumber);
}
else if (answer.operator === "Reminder") {
    console.log("The answer is : ", answer.firstnumber % answer.secondnumber);
}
else if (answer.operator === "Percentage") {
    console.log("The answer is : ", answer.firstnumber / answer.secondnumber * 100);
}
else {
    console.log("please select valid operator");
}
console.log("THE END!");
