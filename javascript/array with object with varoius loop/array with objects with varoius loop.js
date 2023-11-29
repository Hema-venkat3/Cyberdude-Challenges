let disneyland = [
    {id: 1, name: "Tom and Jerry", episode: 20},
    {id: 2, name: "Doreman", episode: 10},
    {id: 3, name: "Mickey Mouse", episode: 15},
    {id: 4, name: "Donald Duck", episode: 28},
    {id: 5, name: "Goofy", episode: 30},
    {id: 6, name: "Winnie-the-Pooh", episode: 48},
    {id: 7, name: "Pinocchio", episode: 6},
    {id: 8, name: "Moana", episode: 5},
    {id: 9, name: "Woody", episode: 2}
]

// for loop
// for(let i=0; i < disneyland.length; i++){
//     console.log(disneyland[i]);
// }

//  for-of loop
// for(const obj of disneyland){
//     console.log(obj);
// }

//  for-in loop  - index
// for(let another in disneyland){
//      console.log(disneyland[another]);
// }

//  for-each loop
// disneyland.forEach(value => {
//     console.log(value);
// })

// filter
// let filtered = disneyland.filter(value => value.name.startsWith("M"));
// console.log(filtered);

//  findindex
// let findingIndex = disneyland.findIndex( obj => obj.id === 4 && obj.name === "Donald Duck" && obj.episode === 28);
//  console.log("The index of the entered object is: ", findingIndex);

//  slice - counts index values
// let seperated = disneyland.slice(3,7);
//  console.log("Extracts and the displays the element:", seperated);

//  splice - counts index value
// let spliced = disneyland.splice(2, 3);
//  console.log("Using spliced method: ", spliced);

// unshift - adds first element
// disneyland.unshift({id:0,name: "wow", episode:12});
// console.log("Using unshift method: ", disneyland);

// push - adds element at the end
// disneyland.push({id: 10, name: "Minnie Mouse", episode: 100 });
// console.log("Adds element at the end:", disneyland);

// shift - deletes the first element 
// disneyland.shift({id:11, name:"Pluto", episode: 22});
// console.log("Deletes first element: ", disneyland);

// map method
// console.log(disneyland);
// let team = disneyland.map((team => team.episode >= 10) );
//     console.log(team);
