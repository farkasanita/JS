let konyv = {
  cim: 'Harry Potter',
  szerzo: 'J. K. Rolling',
  oldalSzam: 325
}

let konyvKetto = {
  cim: 'Gyuruk Ura',
  szerzo: 'Tolkien',
  oldalSzam: 400
}

let adatbazis = function(konyvek){
  console.log(`A ${konyvek.cim}, szerzője: ${konyvek.szerzo}, és ${konyvek.oldalSzam} oldala van`)
}

adatbazis(konyv);
adatbazis(konyvKetto);

let konyvHarom = {
  cim: 'Vuk',
  szerzo: 'Fekete Istvan',
  oldal: 100
}

let konyvNegy = {
  cim: 'Da vinci',
  szerzo: 'Dan Brown',
  oldal: 200
}

let adatbazisKetto = function(konyvekMEgint){
  return{
    pelda: `A ${konyvekMEgint.cim} szerzője ${konyvekMEgint.szerzo} és ${konyvekMEgint.oldal} oldalból áll`
  }
}

let valasz = adatbazisKetto(konyvHarom);
let valaszKetto = adatbazisKetto(konyvNegy);
console.log(valasz.pelda);
console.log(valaszKetto.pelda);

//Gyakorlás

let szamolo = function(fahrenheit){
  return{
  fahrenheit: fahrenheit,
  celsius: (fahrenheit -32) / 1.8,
  kelvin: (fahrenheit -32) / 1.8 + 273.15
  }  
}

let degree = szamolo(74);
console.log(`A ${degree.fahrenheit} fahrenheit ${degree.celsius} celsius és ${degree.kelvin} kelvin`);