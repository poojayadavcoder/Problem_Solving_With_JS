
function checkVowel(char){
if("aeiou".includes(char.toLowerCase())&& char!==''){
  return 'Vowel'
}
else if(/[a-z]/.test(char.toLowerCase())){
  return "consonant"
}
return "Not a valid number"
}

console.log(checkVowel("G"))