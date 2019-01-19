function domath(a,b){
    var c = 3;

    var answer = function multiply(){
        var mult = (a+b) * 3;
        return mult;
    }

   return answer; // return function signatures
   //return multiply(); //return the function result
}

var result = domath(2,3);

console.log("The answer is " + result + "!");
console.log("The answer is " + result() + "!");