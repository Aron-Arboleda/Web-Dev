const input = require('prompt-sync')();

let sentence = input().split(" ")
let lastLetter = sentence[0].charAt(sentence[0].length - 1)
let checker = true 
for (let i = 1; i < sentence.length; i++) {
    if (sentence[i][0] != lastLetter){
        checker = false
        break
    }
    lastLetter = sentence[i].charAt(sentence[i].length - 1)
}
console.log(checker)