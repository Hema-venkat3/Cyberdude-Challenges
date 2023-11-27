const identifier = {
    yourName : "Hema",
    age : 21,
    Gender :"Female",
    role: function(){
        return(`Hi I'm ${this.yourName}, Currently learning Javascript`);
    },
    "duty" :  {
        occasion:"wedding",
        celebration: "done"
    }

}

// displaying value
console.log(identifier);
console.log(identifier.role());
console.log(identifier.duty);

// updating value
identifier['age'] = 20;
console.log(identifier);

// deleting value
console.log(delete identifier.role);
console.log(identifier);
