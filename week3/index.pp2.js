function sum(a,b){
    console.log(b+a)
}
sum(3,4)

function three(a,b,c){
    console.log(Math.max(a,b,c));
}
three(4,7,2)

var number = 10

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}

var fibonacci_series = function (n) {
    if (n === 1)
        return [1,2,3,3,5];
    else {
        var s = fibonacci_series (n-1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
console.log(fibonacci_series(8));