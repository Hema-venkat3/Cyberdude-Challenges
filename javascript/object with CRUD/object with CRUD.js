// creating object
let identifier = {
    yourName : "Hema",
    age : 22,
    Gender :"Female",
    learning: "Javascript",
    role: function(){
        return(`Hi I'm ${this.yourName}, Currently learning ${this.learning}`);
    },
    "duty" :  {
        occasion:"wedding",
        celebration: "done"
    },
    study: ['watch', 'pratice', 'learn']

}

// displaying values
console.log("Displaying my object:", identifier );
console.log(`Displaying role function: ${identifier.role()}`);
console.log("Displaying duty object: ", identifier.duty);
console.log(`Displaying my study array: ${identifier.study}`);


// updating values
identifier['age'] = 20;
console.log("Updating age value: ", identifier);
identifier.study.push("repeat");
console.log("Adding value in study array: ", identifier.study);

// deleting values
delete identifier.role;
console.log("Role function is deleted: ", identifier);
