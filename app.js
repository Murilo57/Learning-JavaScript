//function simple for sum
function sum(x,y) {
    return x + y;
    console.log("Hello World!");
}

//Length this use for count amount of caracter
let text = 'Hello World my friend!';
text.length;

//.toLowerCase() its use for transform all letters in small
let text2 = 'ITs cOloR RED';
text2.toLowerCase();

//.toUpperCase() its use for transform all letters in capital
let text3 = 'its Color Blue';
text3.toUpperCase();

//As using a function
function sum(a, b) {
    console.log(a);
    console.log(b);
    console.log(a + b);
    return a + b;
}

sum(3,6);

//Character acess
//Brackets is using for acessing a character in a string
let language = "JavaScript";

language[0]; //First character = J
language[1]; //Second character = a
language[2]; //Third character = v

console.log(language[3]); //Four character = a

language[ language.length - 2]; //Matching lenght with acess character, return "p", in that case penultimate character

//Or can i use .at(index) instead of length, .at(index) its use for acess character of string, although i can using index negative for acess end string
let lang = 'DotNet';
lang.at(1);

//Metod substring, sintaxe and parameters: