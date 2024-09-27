const input = require('prompt-sync')();

let sentence = input()
let vowel_count = 0 
for (let letter of sentence){
    if ("aeiouAEUIO".includes(letter)){
        vowel_count++
    }
}
console.log("vowel count: " + vowel_count);