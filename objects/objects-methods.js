let etterem ={
    nev: 'halaszcsarda',
    ferohely: 75,
    vendegekSzama: 0,
    lehetosegVizsg: function (partyMeret){
        let maradekFerohely = this.ferohely - this.vendegekSzama
        return partyMeret <= maradekFerohely
    },
    ulesParty: function (partyMeret){
        this.vendegekSzama = this.vendegekSzama + partyMeret
    },
    elhagyoParty: function (partyMeret){
        this.vendegekSzama = this.vendegekSzama - partyMeret
    }
}

etterem.ulesParty(72);
console.log(etterem.lehetosegVizsg(4));
etterem.elhagyoParty(5);
console.log(etterem.lehetosegVizsg(4));