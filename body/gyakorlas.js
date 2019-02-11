let tomb = [1, 2, 3, 4, 5]

tomb.forEach( (tomb) =>{
for(let i = 0; i < tomb.length; i++){
  let temp = tomb[i] + 1;
  tomb[i] + 1 = tomb[i];
  tomb[i] = temp;
}
  console.log(tomb)
})
