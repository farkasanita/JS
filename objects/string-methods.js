let nev = ' Farkas Anita ';

//hossz

console.log(nev.length);

//nagybetűre alakít

console.log(nev.toUpperCase());

//kisbetűre alakít

console.log(nev.toLowerCase());

//tartalmaz

let jelszo = 'abc123jelszo098';
console.log(jelszo.includes('jelszo'));

//trim: szóközt kiveszi előlről hátulról

console.log(nev.trim());

let validJelszo = function(jelszo){
    if(jelszo.length >= 8 && !jelszo.includes ('jelszo') ){
        return true
    }else{
        return false
    }
}

console.log(validJelszo('asdf'));
console.log(validJelszo('123jelszo'));
console.log(validJelszo('almafa23'))

