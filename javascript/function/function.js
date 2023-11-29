
// creating functions

let number = prompt("Enter a number: ");
function oddOrEven(){
    if(number % 2 == 0){
        console.log(`The entered number ${number} is even`);
    }else{
        console.log(`The entered number ${number} is odd`);
    }
}
oddOrEven();

// Immediately invoked function expression (IIFE)

let age = prompt("Enter your age: ");
(function vote(age){
    if(age >= 18){
        console.log(`Your age is ${age}, so you are allowed to vote`);
    }else{
        console.log(`Your age is ${age}, so you have to grow to vote!`);
    }
}(age))


let toDoList = [
    learning = {
        language: "DOM",
        pratice: "vscode",
        check: "take a test"
    },
    shopping = {
        icecream: "cassata slice",
        price: 60,
        check: "tasty"
    },
    mind = {
        exercise: "walk",
        rest: "nap",
        recharge: "water"
    }
]

for(let i in toDoList){
    console.log("The todolist is: ", toDoList[i]);
}

// Anonymous function

const addTask = function(){
    toDoList.push(reference = {
        website: "w3schools",
        platform: "chrome",
        video: "YouTube"
    })
}
addTask();
console.log("anonymous function: ", toDoList);


let array = [10, 25, 85, 36, 40];
console.log(array.filter(level));

function level(array){
    return array >= 15;
}
console.log(array);
// addition
function add(a,b){
    return a + b;
}

const result = add(5,3);
console.log("The addition of two numbers is: ", result);

// subtract
function subtract(a, b){
    return a - b;
}

const sub = subtract(55,20);
console.log("The subtraction of two numbers is: ", sub);

// multiply

function multiply(a, b){
    return a*b;
}

const mul = multiply(3,4);
console.log("The multiplication of two numbers is: ", mul);

// division
function divide(a,b){
    if (b === 0){
        return "Error: Division by Zero";
    }
    return a / b;
}

const div = divide(15,5);
console.log("The division of two numbers is: ",div);
