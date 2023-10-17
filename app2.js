//Numeric separator
let nb = 1_000 // equivalent to 1000
let nb2 = 1_000_000 // equivalent 1000000(1 milion)

//Converting numeric for string
let answer = 42;
answaer.toString(); //"42"

//10/10/2023 Converting string in number
let str = "44"
Number.parseInt(str,10); //Return 44

//Operators
// * multiply values
// % rest of division

let number1 = 5 / 6
let number2 = 5 % 6


//Condition 'if'  in JS
if (condition) {
    //do something
}

//Exemplo of use
let grade = 15;

if (grade > 10) {
    console.log("Passing grade");
} else if (grade = 10) {
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}

// advanced if
function canVote(age) {
    if (age >= 18) {
      return  true;
    }
    return false;
}

//17/10/2023 Return boolean

function isPassing(grade) {
    if (grade >= 19) {
        return true;
    }
    return false;
}

//or 

function isPassing(grade) {
    return grade >= 19
}

isPassing(12)
//Even % odd

//Even numbers
4% 2 //0 
6% 2 //0
8% 2 //0
10% 2 //0

//Odd numbers
3% 2 //1
5% 2 //1
7% 2 //1
9% 2 //1

//Notice how the remainder of dividing by two is always 0 when the number is even. Whereas it is 1 when the number is odd.

//Observe como o resto da divisão por dois é sempre 0 quando o número é par . Considerando que é 1 quando o número é ímpar .




