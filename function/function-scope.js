let conversion = function (fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8;

    if ( celsius <= 0){
        let isFreezing = true;
    }
    return celsius;
}

let fahrenheit1 = conversion(32);
let fahrenheit2 = conversion(68);

console.log(fahrenheit1);
console.log(fahrenheit2);