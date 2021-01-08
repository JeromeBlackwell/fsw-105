var readlineSync = require ("readline-sync");

var name = readlineSync.question ( "Hello and welcome to the Escape Room!  What is your name? ");

readlineSync.keyInPause (`Again, welcome the Escape Room, ${name}, you must find a way out of the Escape Room or meet certain death....`);

readlineSync.keyInPause (`
In this room you will find a key hidden somewhere, that will unlock the door.
You will also notice a whole in the wall. You must choose your action in the correct order to excape the room and survive.`);

let IsAlive = true;
let IsDoorOpen = false;
let hasKey = false;

while ( IsAlive == true && IsDoorOpen == false){
    var chooseAction = readlineSync.keyIn (`
    Select a number to choose an action:
    1. Put your hand in the hole
    2. Find the key
    3. Open the door

    `, {limit:`$<1-3>`});

    if ( chooseAction == 1 ) {
        console.log (`
        wrong action, { $name }, you died. you lose.....`);
        
        IsAlive = false;
    } else if ( chooseAction == 2 && hasKey == false ) {
        console.log (`Congratulations.... you've found the key! 
        What would you like to do next?`);
        hasKey = true;
    
    } else if ( chooseAction == 2 && hasKey == true ) {
        console.log (`Utilize the key you have in you hand, to unlock the door if you would like to escape.
        What would you like to do next?`);
    
    } else if ( chooseAction == 3 && hasKey == false ) {
        console.log (`
        The door is locked, please find the correct key?
        What would you like to do next?`);

    } else if ( chooseAction == 3 && hasKey == true ) {
        console.log (`
        You Win! Excellent job! You've found the key to unlock the door, safely escape the Escape Room and avoid sudden death!
        Thank you for player the Escape Room!`);
        IsDoorOpen = true;
    }
}