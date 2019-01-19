function findbiggerFraction(a,b){
    var result;
    a>b ? result = ["first", a] : result = ["Second", b];
    return result;
}
var findbigResult = findbiggerFraction(1/2, 5/7);
console.log("Find Bigger Fraction is " + findbigResult[0] + "=" + findbigResult[1] + "!");
console.log("Find ()", findbigResult);

var theBiggest1 = function(a,b) {
    var result;
    a>b ? result = ["first", a] : result = ["Second", b];
    console.log("theBiggest1-Find Bigger Fraction is " + result[0] + "=" + result[1] + "!");
}

var theBiggest2 = function(a,b) {
    var result;
    a>b ? result = ["first", a] : result = ["Second", b];
    return result;
}

theBiggest1(1/2, 5/7);
console.log("theBiggest12-Find Bigger Fraction is " + theBiggest2(2/3,3/7)  + "!");

//Immediately Invoke Anony FUnction
var ImmInvokeBiggest1 = (function(a,b) {
    var result;
    a>b ? result = ["first", a] : result = ["Second", b];
    return result;
})(8/9, 1/2);


var a1 = 8/10;
var b1 = 1/2; 

var ImmInvokeBiggest2 = (function(a,b) {
    var result;
    a>b ? result = ["first", a] : result = ["Second", b];
    return result;
})(a1, b1);

//Failed. After the function - Out of scope/.
//var a1 = 8/10;
//var b1 = 1/2; 



console.log("ImmInvokeBiggest1-Find Bigger Fraction is " +  ImmInvokeBiggest1  + "!");
console.log("ImmInvokeBiggest2-Find Bigger Fraction is " +  ImmInvokeBiggest2  + "!");