const todos = ['takarítani', 'tanulni', 'játszani', 'olvasni', 'mosni'];

todos.splice(2, 1);
console.log(todos);
todos.push('utolsó elem');
console.log(todos);
todos.shift();
console.log(todos);

console.log(`Nekem ${todos.length} tennivalóm van`);
console.log(`Első tennivaló: ${todos[0]}`)
;

todos.forEach(function(item){
    console.log(item)
})