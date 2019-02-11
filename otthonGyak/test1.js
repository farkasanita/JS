let szamolo = function (elertPont, maxPont) {
  let szazalek = (elertPont / maxPont) * 100;
  if (szazalek > 80) {
    console.log('5-öst kaptál');
} else if (szazalek > 70) {
    console.log('4-est kaptál');
} else if (szazalek > 60) {
    console.log('3-ast kaptál');
} else if (szazalek > 50) {
    console.log('2-est kaptál');
} else {
    console.log('1-est kaptál');
};
  return `Az ${elertPont} az elért pontod a  ${maxPont}-ból, ami ${szazalek} %`;
};

let eredmeny = szamolo(60,100);
console.log(eredmeny);
