// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90.
// - BB if marks is greater than 70 and less than or equal to 80.
// - BC if marks is greater than 60 and less than or equal to 70.
// - CC if marks is greater than 50 and less than or equal to 60.
// - CD if marks is greater than 40 and less than or equal to 50.
// - DD if marks is greater than 30 and less than or equal to 40.
// - FF if marks is less than or equal to 30.

let score = prompt("Enter your score: ");
if(score > 90 && score <= 100){
    console.log("You entered between 90 to 100, AA");
}else if(score > 80 && score <= 90){
    console.log("You entered between 80 to 90, AB");}
else if(score > 70 && score <= 80){ 
    console.log("You entered between 70 to 80, BB");
}else if(score > 60 && score <= 70){
    console.log("You entered between 60 to 70, BC");
}else if(score > 50 && score <= 60){
    console.log("You entered between 50 to 60, CC");
}else if(score > 40 && score <= 50){
    console.log("You entered between 40 to 50, CD");
}else if(score > 30 && score <= 40){
    console.log("You entered between 30 to 40, DD");
}else if(score >= 0 && score <= 30){
    console.log("You entered between 0 to 30, FF You failed ☹️");
}else{
    console.log("Please enter between 0 to 100");
}