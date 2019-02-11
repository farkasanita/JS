let profilSajat = {
    nev: 'Anita',
    kiadas: 0,
    bevetel: 0
}

let kiadasNo = function(profil, osszeg){
    profil.kiadas = profil.kiadas + osszeg
}

let bevetelNo = function(profil, osszegBe){
    profil.bevetel = profil.bevetel + osszegBe
}

let profilTorles = function(profil){
    profil.kiadas = 0
    profil.bevetel = 0
}

let profilOsszesen = function( profil){
    let egyutt = profil.bevetel - profil.kiadas
    return `${profil.nev} profilja: Összeg, ${egyutt}, ${profil.bevetel} Ft bevétel és ${profil.kiadas} Ft kiadás` 
}

bevetelNo(profilSajat, 2000);
kiadasNo(profilSajat, 2.5);
kiadasNo(profilSajat, 160);
console.log(profilOsszesen(profilSajat));
profilTorles(profilSajat);
console.log(profilOsszesen(profilSajat))
