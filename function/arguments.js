let add = function (a, b, c){
    return a + b + c
}

let result = add(2, 5, 4);
console.log(result)

let getScoretext = function (name = 'Anita', score = 0) {
  return 'Name ' + name + ' Score ' + score
}

let getScore = getScoretext();
console.log(getScore);

let eredmeny = function(osszeg){
    borravalo = osszeg * 0.2
    return borravalo
}

let borravalo2 = eredmeny(100);
console.log(borravalo2)

let penz = function(osszegKetto, borSzaz = .2){
    return osszegKetto * borSzaz
}

let penzKEtto = penz(100);
console.log(penzKEtto);

let name2 = 'Lacika';
console.log(`A nevem ${name2}`);