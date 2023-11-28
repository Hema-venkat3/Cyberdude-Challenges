// creating functions
let number = prompt("Enter a number: ");
let numbers = parseInt(number);
if(typeof numbers === "String" || numbers === "" ){
    console.log("Please enter a valid number!");
}else{
function oddOrEven(){
    if(numbers % 2 == 0){
        console.log(`The entered number ${numbers} is even`);
    }else{
        console.log(`The entered number ${numbers} is odd`);
    }
}
}
oddOrEven();

// Immediately invoked function expression (IIFE)
let age = prompt("Enter your age: ");
if(age === "" || typeof age === 'string')
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
    return array > 15;
}


