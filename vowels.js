function stringCheck(){
console.log("Type something here!:")
process.stdin.once('data', (string1)=>{

  var str = string1.toString();
  var vowels = str.match(/[aeiou]/g);
  let unique = [... new Set(vowels)]
  console.log(unique.join(''));

  
})
  
}

console.log(stringCheck());
