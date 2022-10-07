//Conditionals Assessment 10/06/2022

// ~ Part One ~ //


let tails = "tails";
let heads = "heads";

//User input//
let userChoice = prompt("Heads or Tails?");

if (userChoice == "heads"){
    heads == 0
} else {
    tails == 1;
}

//Random Number//
let randomNumber = Math.round(Math.random());
//console.log(randomNumber); testing that randomNumber is working

let computerChoice = randomNumber;
console.log(computerChoice);

// Conditions//

 if (computerChoice == 0){
    computerChoice = heads;
 } else{
     computerChoice = tails;
     }

if (userChoice == computerChoice){
     alert("You guesses right! The coin flip landed on " + userChoice);
 } else {
    alert("Sorry, the coin flip landed on " + computerChoice); 
 }

//  Testing ------------------------------------
// console.log(userChoice == computerChoice);
// console.log(computerChoice);
// console.log(userChoice);
// console.log(randomNumber);
// ---------------------------------------------


// ~ Part Two ~ //

let birthYear = prompt("What year were you born?");

if (2022-birthYear > 21) {
    alert("You are old enough to drink in the US");
} else if (2022-birthYear == 21){
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US.");
}
