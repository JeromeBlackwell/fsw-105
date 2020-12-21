const fruit = [ "banana", "apple", "orange", "watermelon" ];
const vegetables = [ "carrots", "tomato", "pepper", "lettuce" ];
console.log(  fruit );
console.log( vegetables );

function lastFromArray() {
    vegetables.pop();
    console.log( vegetables );
    }
    lastFromArray();

function firstFromArray() {
    fruit.shift();
    console.log( fruit );
    }
    firstFromArray();

const indexofOrange = fruit.indexOf( "orange") 
    console.log( "Index of orange is: " + indexofOrange);

function addNumber() {
    fruit.push( "1" );
    console.log( fruit );  
    }addNumber();

function getLength () {
const str = "vegetables";
const n = str.length;
console.log(n)
getLength();
}
