// #A
function fiveAndGreaterOnly(arr) {
   var result = arr.filter(function(numbers){
   if (numbers >= 5) {
      return numbers;
   }
   
   });
   return result;
}
console.log( "Array Filter" );
console.log( fiveAndGreaterOnly( [3, 6, 8, 2 ]));

function evenOnly(arr){
var jaden = arr.filter(function (kyrie){
if (kyrie% 2 === 0) {return true;}
return jaden
})}
console.log (evenOnly([3, 6, 8, 2]));




// #B

var numbers = [ 2, 5, 100 ];
 var double = numbers.map( myFunction ) 
 function myFunction(num) {
    return num * 2;
 }
 console.log( double );





var names = [ "john", "JACOB", "JinGleHeimer", "schmide" ];
var uppercased = names.map( name => name.toUpperCase());
console.log( uppercased );
 

// #C 


// #D

var numbers = [ 1, 3 ,5, 2, 90, 20 ];
numbers.sort();
console.log( numbers );

var newNumbers = [ 1, 3, 5, 2, 90, 20 ];
newNumbers.sort(function( a,b ){ return b - a });
console.log( newNumbers );