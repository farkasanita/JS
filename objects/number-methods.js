let szam = 103.941;
console.log(szam.toFixed(1)); //tizedes vezző utáni megjelentítés

console.log(Math.round(szam)); //kerekítés
console.log(Math.floor(szam)); //lefele kerekítés
console.log(Math.ceil(szam)); //felfele kerekítés

let min = 10;
let max = 20;
let random = Math.floor(Math.random() * (max - min +1)) + min
console.log(random)
// random számokat ad ki 10 és 20 között

let kitalaltSzam = function(szam){
    let min = 1;
    let max = 5;
    let random = Math.floor(Math.random() * (max - min +1)) + min
    console.log(random)
    if(random === szam){
        console.log(true)
    }else{
        console.log(false)
    }

}

kitalaltSzam(2);