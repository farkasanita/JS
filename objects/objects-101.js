let konyvem = {
    cim: '1984',
    szerzo: 'George',
    lapokSzama: 326
}

console.log(konyvem.cim);

console.log(`${konyvem.cim} ${konyvem.szerzo} ${konyvem.lapokSzama}`)

konyvem.cim = 'Állatok farmja';

console.log(`${konyvem.cim} ${konyvem.szerzo} ${konyvem.lapokSzama}`)

let szemely = {
    nev: 'Anita',
    eletKor: 32,
    tartozkodasiHely: 'Szeged'
}

console.log(`${szemely.nev} ${szemely.eletKor} éves és ${szemely.tartozkodasiHely}en lakik`);

szemely.eletKor = szemely.eletKor + 1;

console.log(`${szemely.nev} ${szemely.eletKor} éves és ${szemely.tartozkodasiHely}en lakik`);
