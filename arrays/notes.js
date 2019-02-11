const notes = ['Note 1', 'Note 2', 'Note 3'];

console.log(notes.pop()); // törli az utolsó elemet
notes.push('My new note'); // a mátrixhoz rak mégegy elemet a végére

console.log(notes.shift()); // törli az első elemét a mátrixnak
notes.unshift('My first note'); // a mátrix elejére rak még egy elemet

notes.splice(1, 1, 'This is the new second item'); // melyik elemtől indul, hány elemet töröl utána, mit ír helyette

notes[2] = 'This is now the new note 3'; // átírja az elemet

console.log(notes);
console.log(notes.length);

console.log(notes[0]);

console.log(notes[notes.length - 1])
;

notes.forEach(function (item) {
  console.log(item);
})
;