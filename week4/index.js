// #1

function capitalizeAndLowerCase(
    gonefishing
){
return gonefishing.toUpperCase() +gonefishing.toLowerCase() 
}
console.log(capitalizeAndLowerCase("gonefishing"));

// #2

function findMiddleIndex(
    gonefishing
){
return Math.floor(gonefishing.length/2)
}
console.log(findMiddleIndex("gonefishing"));

// #3

function returnFirstHalf(
    gonefishing
){
return gonefishing.slice(0,Math.floor(gonefishing.length/2))
Math.floor(gonefishing.length/2)
 
}
console.log(returnFirstHalf("gonefishing"));

// #4

function capitalizeAndLowerCase2(
    gonefishing
){
return gonefishing.slice(0,Math.floor(gonefishing.length/2)).toUpperCase()+gonefishing.slice(Math.floor(gonefishing.length/2)).toLowerCase()
}
console.log(capitalizeAndLowerCase2("gonefishing"));

// #Optional

function capitalize(str) {
    const arr = str.toLowerCase().split(" ");
    const result = arr.map(
        function (val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
    console.log(result.join (""));
}
capitalize("hey friends! practice practice practice!");