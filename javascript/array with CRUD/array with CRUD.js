// primitive arrays
const electronics = ['radio', 'television', 'speaker', 'mouse', 'keyboard', 'laptop', 'android'];

// updating values
electronics.push("iphone");
electronics[2] = "air condition";

console.log(electronics);


// // deleting values
console.log(`Deleted item is: ${electronics.pop()}`);
console.log(`Deleted using splice: ${electronics.splice(3,1)}`);

// displaying values
let values = electronics.forEach(electronics => {
    electronics.split(",")
    console.log(electronics);
});


let vayasu = [30, 33, 5, 43, 10];
console.log(vayasu.filter(vote));

function vote(vayasu){
    return vayasu  >= 18;
}

// reference array

let shoppingCart = [
     fruits = {
        name: "apple",
        price: 20,
        quantity: 5
    },
     vegetables = {
        name: "Brinjal",
        price: 50,
        quantity: 10
    },
     accesssories = {
        name: "Earphones",
        price: 250,
        quantity: 5
    }
];

// displaying objects

for(let i in shoppingCart){
    console.log("shoppingCart: ", shoppingCart[i]);
}

// // adding another object

function addItem(){
    shoppingCart.push(
        android = {
             name: "Samsung",
            price: 15000,
            quantity: 1
    });
}

// creating items
addItem();
console.log(shoppingCart);

// // function to remove

function removeItem(){
    shoppingCart.pop()
}
// removing items
removeItem();

// function to update

function updatequantity(item, newQuantity){
    let value = shoppingCart.indexOf(item);
    if(value != -1)
    shoppingCart[value].quantity = newQuantity;
};

// updating quantity
updatequantity(vegetables,3);

// calculate total

function calculateTotal(){
    let total = 0;
    for(const item of shoppingCart){
        total += item.price * item.quantity;
    }
    return total;
}



// displaying values
console.log("Updated shoppingCart:", shoppingCart);
// console.log("Total cost: ", calculateTotal());

