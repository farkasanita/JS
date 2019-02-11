let greetUser = function (){
    console.log('Welcome!');
}

greetUser();
greetUser();

let square = function(num){
    console.log(num)
}

square(3);
square(10);

let test = function(num2){
    let result = num2 * num2;
    return result;
}

let value = test(3);
let value2 = test(10);

console.log(value);
console.log(value2);



let conversion = function (fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

let fahrenheit1 = conversion(32);
let fahrenheit2 = conversion(68);

console.log(fahrenheit1);
console.log(fahrenheit2);