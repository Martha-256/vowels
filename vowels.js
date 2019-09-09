function stringCheck(){
console.log("Type something here!:")
process.stdin.once('data', (string1)=>{

  var str = string1.toString();
  var vowels = str.match(/[aeiou]/g);
  let unique = [... new Set(vowels)]
  var vowel = unique.join('')
  //console.log(unique.join(''));

  str2 = str.replace(/\s/g,'');
  let result = [];
  var repeated = str2.toLowerCase().split('').sort().join('').match(/(.)\1+/g);
  
  if (repeated != null) {
   repeated.forEach((elem) => {
      result.push(elem[0]);
    });
  }  var count = result.length;
  //console.log(count);
  array_vowel = [vowel,count];
  console.log(array_vowel);

})
  
}

console.log(stringCheck());
